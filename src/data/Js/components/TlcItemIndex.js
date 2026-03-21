'use strict';
/**
 * TlcItemIndex.js — Card-based item browser
 * Tabs: Memories | Food | Materials | Weapons | Equipment | Modules
 */

class TlcItemIndex extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this._tab      = 'memories';
    this._search   = '';
    this._catFilter= 'all';
    this._rarity   = 'all';
    this._selected = null;
    this._imgBase  = 'items/';
    this._render();
    this._bindShell();
    this._refresh();
    window.addEventListener('tlc:langchange', () => this._refresh());
  }

  // ── Shell ────────────────────────────────────────────────────────
  _render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');
        *,*::before,*::after{box-sizing:border-box;}
        :host{position:fixed;inset:0;z-index:8500;background:#060d10;display:flex;flex-direction:column;font-family:'Share Tech Mono',monospace;color:#b8e4f0;}

        /* topbar */
        .topbar{display:flex;align-items:center;gap:10px;padding:9px 18px;border-bottom:1px solid #1a3a4a;flex-shrink:0;background:#080f14;flex-wrap:wrap;}
        .back-btn{background:none;border:1px solid #1a3a4a;color:#4a7a8a;font-family:'Share Tech Mono',monospace;font-size:11px;padding:5px 12px;border-radius:4px;cursor:pointer;letter-spacing:1px;transition:all .1s;flex-shrink:0;}
        .back-btn:hover{border-color:#4a7a8a;color:#b8e4f0;}
        .topbar-title{font-family:'Orbitron',sans-serif;font-size:12px;letter-spacing:3px;color:#00d4aa;flex-shrink:0;}
        .topbar-count{font-size:10px;color:#2a5a6a;flex-shrink:0;}
        .search-inp{margin-left:auto;background:rgba(0,0,0,.4);border:1px solid #1a3a4a;border-radius:4px;color:#b8e4f0;font-family:'Share Tech Mono',monospace;font-size:12px;padding:5px 10px;width:220px;outline:none;transition:border-color .15s;}
        .search-inp:focus{border-color:#00d4aa;}
        .search-inp::placeholder{color:#2a5a6a;}
        .imgbase-label{font-size:10px;color:#2a5a6a;white-space:nowrap;}
        .imgbase-inp{background:rgba(0,0,0,.4);border:1px solid #1a3a4a;border-radius:4px;color:#b8e4f0;font-family:'Share Tech Mono',monospace;font-size:11px;padding:4px 8px;width:110px;outline:none;}

        /* filter bar */
        .filterbar{display:flex;align-items:center;gap:7px;padding:7px 18px;border-bottom:1px solid #1a3a4a;flex-shrink:0;background:#080f14;flex-wrap:wrap;}
        .filter-label{font-size:10px;color:#2a5a6a;letter-spacing:1px;margin-right:2px;}
        .chip{background:none;border:1px solid #1a3a4a;color:#4a7a8a;font-family:'Share Tech Mono',monospace;font-size:10px;padding:2px 9px;border-radius:3px;cursor:pointer;letter-spacing:1px;transition:all .1s;}
        .chip:hover{border-color:#4a7a8a;color:#b8e4f0;}
        .chip.on{border-color:#00d4aa;color:#00d4aa;background:rgba(0,212,170,.08);}
        .sep{width:1px;height:14px;background:#1a3a4a;margin:0 3px;}

        /* tabs */
        .tabs{display:flex;border-bottom:1px solid #1a3a4a;flex-shrink:0;padding:0 18px;background:#080f14;overflow-x:auto;}
        .tab{padding:8px 18px;font-size:11px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;color:#4a7a8a;border-bottom:2px solid transparent;transition:color .15s,border-color .15s;white-space:nowrap;}
        .tab:hover{color:#b8e4f0;}
        .tab.on{color:#00d4aa;border-bottom-color:#00d4aa;}

        /* main */
        .main{flex:1;display:flex;overflow:hidden;}

        /* card grid */
        .grid-wrap{flex:1;overflow-y:auto;padding:16px 18px;}
        .grid-wrap::-webkit-scrollbar{width:4px;}
        .grid-wrap::-webkit-scrollbar-track{background:#060d10;}
        .grid-wrap::-webkit-scrollbar-thumb{background:#1a3a4a;}

        .cat-header{font-family:'Orbitron',sans-serif;font-size:9px;letter-spacing:3px;color:#4a7a8a;text-transform:uppercase;margin:18px 0 10px;padding-bottom:5px;border-bottom:1px solid #1a3a4a;}
        .cat-header:first-child{margin-top:0;}

        .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px;margin-bottom:4px;}

        /* single card */
        .card{background:#0d1f28;border:1px solid #1a3a4a;border-radius:8px;padding:18px;cursor:pointer;transition:border-color .12s,background .12s,transform .12s;display:flex;flex-direction:column;gap:8px;position:relative;}
        .card:hover{border-color:#2a6a7a;background:#0f2535;transform:translateY(-2px);}
        .card.active{border-color:#00d4aa;background:#0d2530;}

        .card-top{display:flex;align-items:flex-start;gap:10px;}
        .card-icon{width:56px;height:56px;object-fit:contain;border-radius:4px;background:#060d10;flex-shrink:0;}
        .card-icon-dot{width:14px;height:14px;border-radius:50%;flex-shrink:0;margin-top:4px;}
        .rarity-common{background:#4a7a8a;}
        .rarity-uncommon{background:#4a9aff;}
        .rarity-rare{background:#f0c040;}
        .rarity-unique{background:#ff6b35;}

        .card-title-wrap{flex:1;min-width:0;}
        .card-name{font-size:14px;font-weight:bold;color:#b8e4f0;line-height:1.3;margin-bottom:5px;}
        .card-cat{font-size:9px;color:#4a7a8a;letter-spacing:1px;text-transform:uppercase;}

        .card-purpose{font-size:11px;color:#4a7a8a;line-height:1.6;}

        .card-badges{display:flex;flex-wrap:wrap;gap:4px;}
        .badge{font-size:9px;padding:1px 6px;border-radius:2px;letter-spacing:1px;text-transform:uppercase;}
        .badge-rarity-common  {color:#4a7a8a;border:1px solid #4a7a8a44;}
        .badge-rarity-uncommon{color:#4a9aff;border:1px solid #4a9aff44;background:rgba(74,154,255,.06);}
        .badge-rarity-rare    {color:#f0c040;border:1px solid #f0c04044;background:rgba(240,192,64,.06);}
        .badge-rarity-unique  {color:#ff6b35;border:1px solid #ff6b3544;background:rgba(255,107,53,.06);}
        .badge-tier{color:#00d4aa;border:1px solid #00d4aa44;background:rgba(0,212,170,.06);}
        .badge-loc{color:#2a5a6a;border:1px solid #1a3a4a;}
        .badge-loc.has{color:#00d4aa;border-color:rgba(0,212,170,.3);background:rgba(0,212,170,.08);}

        .no-results{text-align:center;color:#2a5a6a;font-size:13px;padding:60px 0;grid-column:1/-1;}

        .craft-box{background:rgba(0,0,0,.3);border:1px solid #1a3a4a;border-radius:4px;padding:8px 10px;font-size:11px;color:#4a7a8a;line-height:1.6;}
        .craft-box b{color:#b8e4f0;}
        .mat-chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:2px;}
        .mat-chip{display:flex;align-items:center;gap:6px;background:#060d10;border:1px solid #1a3a4a;border-radius:5px;padding:5px 10px;transition:border-color .12s;}
        .mat-chip:hover{border-color:#2a6a7a;}
        .mat-chip img{width:28px;height:28px;object-fit:contain;}
        .mat-chip-name{font-size:11px;color:#b8e4f0;}
        .mat-chip-qty{font-size:10px;color:#00d4aa;font-family:'Orbitron',sans-serif;margin-left:2px;}
        .yield-chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:2px;}
        .yield-chip{display:flex;align-items:center;gap:6px;background:rgba(240,192,64,.06);border:1px solid rgba(240,192,64,.25);border-radius:5px;padding:5px 10px;}
        .yield-chip img{width:28px;height:28px;object-fit:contain;}
        .yield-chip-name{font-size:11px;color:#f0c040;}
        .yield-chip-qty{font-size:10px;color:#f0c040;font-family:'Orbitron',sans-serif;opacity:.7;margin-left:2px;}
        .ammo-chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:2px;}
        .ammo-chip{display:flex;align-items:center;gap:6px;background:rgba(160,160,255,.06);border:1px solid rgba(160,160,255,.2);border-radius:5px;padding:5px 10px;}
        .ammo-chip img{width:28px;height:28px;object-fit:contain;}
        .ammo-chip-name{font-size:11px;color:#a0a0ff;}
        .ammo-chip-note{font-size:10px;color:#4a7a8a;margin-left:4px;}
        .source-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px;}
        .source-chip{display:flex;align-items:center;gap:5px;padding:4px 10px;border-radius:4px;border:1px solid;font-size:11px;}
        .source-chip-icon{font-size:14px;line-height:1;}
        .source-chip-name{font-weight:bold;}
        .source-chip-note{font-size:10px;opacity:.65;margin-left:2px;}
        .info-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:5px;}
        .info-list li{font-size:12px;color:#b8e4f0;line-height:1.6;padding:6px 10px;background:rgba(0,212,170,.04);border-left:2px solid #00d4aa33;border-radius:0 4px 4px 0;}
      </style>

      <div class="topbar">
        <button class="back-btn" id="btn-back">&#8249; Menu</button>
        <div class="topbar-title">&#128230; ITEM INDEX</div>
        <div class="topbar-count" id="count"></div>
        <input class="search-inp" id="search" placeholder="Search name, location, purpose...">
        <span class="imgbase-label">IMG BASE</span>
        <input class="imgbase-inp" id="img-base" value="items/" placeholder="items/">
      </div>

      <div class="filterbar">
        <span class="filter-label">RARITY</span>
        <button class="chip on" data-rarity="all">All</button>
        <button class="chip" data-rarity="common">Common</button>
        <button class="chip" data-rarity="uncommon">Uncommon</button>
        <button class="chip" data-rarity="rare">Rare</button>
        <button class="chip" data-rarity="unique">Unique</button>
      </div>

      <div class="tabs" id="tabs">
        <div class="tab on" data-tab="memories">&#9632; Memories</div>
        <div class="tab" data-tab="food">&#127822; Food</div>
        <div class="tab" data-tab="materials">&#9881; Materials</div>
        <div class="tab" data-tab="weapons">&#9876; Weapons</div>
        <div class="tab" data-tab="equipment">&#129520; Equipment</div>
        <div class="tab" data-tab="modules">&#9889; Modules</div>
      </div>

      <div class="main">
        <div class="grid-wrap" id="grid-wrap"></div>
      </div>
      <!-- Modal overlay -->
      <div id="item-modal" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.75);display:none;align-items:center;justify-content:center;">
        <div id="item-modal-box" style="background:#0d1f28;border:1px solid #1a3a4a;border-radius:8px;width:600px;max-width:calc(100vw - 32px);max-height:calc(100vh - 40px);display:flex;flex-direction:column;box-shadow:0 10px 48px rgba(0,0,0,.85);overflow:hidden;">
          <div id="item-modal-content"></div>
        </div>
      </div>
    `;
  }

  // ── Events ───────────────────────────────────────────────────────
  _bindShell() {
    const sr = this.shadowRoot;
    sr.getElementById('btn-back').addEventListener('click', () => {
      this.remove();
      document.body.appendChild(document.createElement('tlc-main-menu'));
    });
    sr.getElementById('search').addEventListener('input', e => { this._search = e.target.value.toLowerCase(); this._refresh(); });
    sr.getElementById('img-base').addEventListener('change', e => { this._imgBase = e.target.value.trim(); this._refresh(); if (this._selected) this._openDetail(this._selected); });
    sr.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
      this._tab = t.dataset.tab; this._selected = null;
      sr.querySelectorAll('.tab').forEach(x => x.classList.toggle('on', x === t));
      // close modal if open
      const modal = sr.getElementById('item-modal');
      if (modal) modal.style.display = 'none';
      this._refresh();
    }));

    sr.querySelectorAll('[data-rarity]').forEach(b => b.addEventListener('click', () => {
      this._rarity = b.dataset.rarity;
      sr.querySelectorAll('[data-rarity]').forEach(x => x.classList.toggle('on', x === b));
      this._refresh();
    }));
  }

  // ── Data ─────────────────────────────────────────────────────────
  _getAll() {
    const idx = window.TLC_ITEM_INDEX || {};
    const edits = window.TLC_STATE?.get('itemIndexEdits') || {};
    const merge = arr => (arr || []).map(i => ({ ...i, ...(edits[i.id] || {}) }));
    return {
      memories:  merge(idx.memories),
      food:      merge(idx.food),
      materials: merge(idx.materials),
      weapons:   merge(idx.weapons),
      equipment: merge(idx.equipment),
      modules:   merge(idx.modules),
    };
  }

  _filtered() {
    const items = this._getAll()[this._tab] || [];
    const q = this._search;
    return items.filter(item => {
      if (q) {
        const hay = [item.name, ...(item.info||[]), item.category, ...(item.foundAt||[]).map(f=>f.source||'')].filter(Boolean).join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (this._rarity !== 'all' && item.rarity !== this._rarity) return false;
      return true;
    });
  }

  // ── Render grid ───────────────────────────────────────────────────
  _refresh() {
    const items = this._filtered();
    const sr    = this.shadowRoot;
    const countEl = sr.getElementById('count');
    if (countEl) countEl.textContent = items.length + ' items';

    const wrap = sr.getElementById('grid-wrap');
    if (!wrap) return;
    wrap.innerHTML = '';

    if (!items.length) {
      wrap.innerHTML = '<div style="text-align:center;color:#2a5a6a;font-size:13px;padding:60px 0">No items match.</div>';
      return;
    }

    // Group by category
    const groups = {};
    items.forEach(item => {
      const g = item.category || 'other';
      if (!groups[g]) groups[g] = [];
      groups[g].push(item);
    });

    Object.entries(groups).forEach(([cat, groupItems]) => {
      const header = document.createElement('div');
      header.className = 'cat-header';
      header.textContent = cat.replace(/_/g, ' ').toUpperCase() + ' (' + groupItems.length + ')';
      wrap.appendChild(header);

      const grid = document.createElement('div');
      grid.className = 'grid';

      groupItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card' + (this._selected?.id === item.id ? ' active' : '');
        const iconSrc = item.icon ? '../../data/Images/' + this._imgBase + item.icon + '.png' : null;

        card.innerHTML =
          '<div class="card-top">' +
            (iconSrc
              ? '<img class="card-icon" src="' + iconSrc + '" onerror="this.style.display=\'none\'">'
              : '<div class="card-icon-dot rarity-' + (item.rarity || 'common') + '"></div>') +
            '<div class="card-title-wrap">' +
              '<div class="card-name">' + this._esc(item.name) + '</div>' +
              '<div class="card-cat">' + this._esc(item.category || '') + '</div>' +
            '</div>' +
          '</div>' +
          (item.info && item.info.length ? '<div class="card-purpose">' + this._esc(Array.isArray(item.info) ? item.info[0] : item.info) + '</div>' : '') +
          '<div class="card-badges">' +
            '<span class="badge badge-rarity-' + (item.rarity || 'common') + '">' + (item.rarity || 'common') + '</span>' +
            (item.skillTier ? '<span class="badge badge-tier">Tier ' + item.skillTier + '</span>' : '') +
          '</div>';

        card.addEventListener('click', () => this._openDetail(item));
        grid.appendChild(card);
      });

      wrap.appendChild(grid);
    });
  }

  // ── Detail panel ─────────────────────────────────────────────────
  _openDetail(item) {
    this._selected = item;
    const sr = this.shadowRoot;
    const modal = sr.getElementById('item-modal');
    const box   = sr.getElementById('item-modal-content');
    if (!modal || !box) return;

    sr.querySelectorAll('.card').forEach(card =>
      card.classList.toggle('active', card.querySelector('.card-name')?.textContent === item.name)
    );

    const iconSrc = item.icon ? '../../data/Images/' + this._imgBase + item.icon + '.png' : null;
    const rc = { common:'#4a7a8a', uncommon:'#4a9aff', rare:'#f0c040', unique:'#ff6b35' }[item.rarity] || '#4a7a8a';

    const statRow = (label, value, color) => value != null
      ? '<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid #1a3a4a;">' +
          '<span style="font-size:10px;letter-spacing:1px;color:#4a7a8a;text-transform:uppercase;">' + label + '</span>' +
          '<span style="font-size:12px;color:' + (color||'#b8e4f0') + ';font-family:\'Orbitron\',sans-serif;">' + this._esc(String(value)) + '</span>' +
        '</div>' : '';



    box.innerHTML =
      // Header
      '<div style="display:flex;align-items:center;gap:20px;padding:22px 24px;border-bottom:1px solid #1a3a4a;background:#080f14;">' +
        (iconSrc
          ? '<img src="' + iconSrc + '" style="width:80px;height:80px;object-fit:contain;border-radius:6px;background:#060d10;flex-shrink:0;" onerror="this.style.display=\'none\'">'
          : '<div style="width:80px;height:80px;border-radius:6px;background:#060d10;border:2px solid ' + rc + ';display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0;">&#128230;</div>') +
        '<div style="flex:1;min-width:0;">' +
          '<div style="font-family:\'Orbitron\',sans-serif;font-size:17px;font-weight:900;color:#b8e4f0;margin-bottom:8px;">' + this._esc(item.name) + '</div>' +
          '<div style="display:flex;flex-wrap:wrap;gap:6px;">' +
            '<span style="font-size:9px;padding:3px 10px;border-radius:3px;letter-spacing:1px;text-transform:uppercase;color:' + rc + ';border:1px solid ' + rc + '44;background:' + rc + '11;">' + (item.rarity||'common') + '</span>' +
            '<span style="font-size:9px;padding:3px 10px;border-radius:3px;color:#4a7a8a;border:1px solid #1a3a4a;">' + this._esc(item.category||'') + '</span>' +
            (item.skillTier ? '<span style="font-size:9px;padding:3px 10px;border-radius:3px;color:#00d4aa;border:1px solid #00d4aa44;background:rgba(0,212,170,.08);">Tier ' + item.skillTier + (item.skillCost ? ' · ' + item.skillCost : '') + '</span>' : '') +
            (item.weight != null ? '<span style="font-size:9px;padding:3px 10px;border-radius:3px;color:#b8e4f0;border:1px solid #2a4a5a;background:rgba(184,228,240,.06);">⚖ ' + item.weight + ' kg</span>' : '') +
          '</div>' +
        '</div>' +
        '<button id="modal-close" style="background:none;border:none;color:#4a7a8a;font-size:20px;cursor:pointer;line-height:1;padding:4px;flex-shrink:0;transition:color .12s;">✕</button>' +
      '</div>' +
      // Body
      '<div style="padding:20px 24px;overflow-y:auto;max-height:calc(100vh - 220px);">' +
        (item.info && item.info.length
          ? '<div style="margin-bottom:18px;"><ul class="info-list">' +
              (Array.isArray(item.info) ? item.info : [item.info]).map(i =>
                '<li>' + this._esc(i) + '</li>'
              ).join('') +
            '</ul></div>'
          : '') +
        '<div style="background:#060d10;border:1px solid #1a3a4a;border-radius:6px;padding:4px 14px;margin-bottom:18px;">' +
          statRow('Rarity',      item.rarity, rc) +
          statRow('Weight',      item.weight != null ? item.weight + ' kg' : null) +
          statRow('Unlock Tier', item.skillTier ? 'Tier ' + item.skillTier : null, '#00d4aa') +
          statRow('Skill Cost',  item.skillCost || null, '#00d4aa') +
          statRow('Craftable',   (item.craftMats && item.craftMats.length) ? 'Yes' : null, '#00d4aa') +
          statRow('Recycle Yields', (item.scrapYields && item.scrapYields.length) ? item.scrapYields.map(y=>y.name).join(', ') : null, '#f0c040') +
        '</div>' +
        (item.foundAt && item.foundAt.length
          ? '<div style="margin-bottom:16px;"><div style="font-size:9px;letter-spacing:2px;color:#4a7a8a;text-transform:uppercase;margin-bottom:8px;">Source</div><div class="source-chips">' + this._sourceChips(item.foundAt) + '</div></div>'
          : '') +
        (item.craftMats && item.craftMats.length
          ? '<div style="margin-bottom:16px;"><div style="font-size:9px;letter-spacing:2px;color:#4a7a8a;text-transform:uppercase;margin-bottom:8px;">Crafting Materials</div><div class="mat-chips">' + this._matChips(item.craftMats) + '</div></div>'
          : '') +
        (item.scrapYields && item.scrapYields.length
          ? '<div style="margin-bottom:16px;"><div style="font-size:9px;letter-spacing:2px;color:#f0c040;text-transform:uppercase;margin-bottom:8px;">♻ Recycle Yields</div><div class="yield-chips">' + this._yieldChips(item.scrapYields) + '</div></div>'
          : '') +
        (item.ammo && item.ammo.length
          ? '<div style="margin-bottom:16px;"><div style="font-size:9px;letter-spacing:2px;color:#a0a0ff;text-transform:uppercase;margin-bottom:8px;">&#9776; Ammo / Fuel</div><div class="ammo-chips">' + this._ammoChips(item.ammo) + '</div></div>'
          : '') +

      '</div>';

    modal.style.display = 'flex';

    box.querySelector('#modal-close').addEventListener('click', () => { modal.style.display = 'none'; this._selected = null; sr.querySelectorAll('.card').forEach(c => c.classList.remove('active')); });
    modal.addEventListener('click', e => { if (e.target === modal) { modal.style.display = 'none'; this._selected = null; } });

  }
  _sourceChips(sources) {
    if (!Array.isArray(sources)) return '';
    return sources.map(s => {
      const col = s.color || '#4a7a8a';
      return '<div class="source-chip" style="color:' + col + ';border-color:' + col + '44;background:' + col + '11;">' +
        '<span class="source-chip-icon">' + (s.icon || '📦') + '</span>' +
        '<span class="source-chip-name">' + this._esc(s.source) + '</span>' +
        (s.note ? '<span class="source-chip-note">— ' + this._esc(s.note) + '</span>' : '') +
      '</div>';
    }).join('');
  }

  _ammoChips(ammos) {
    if (!Array.isArray(ammos)) return '<span style="color:#a0a0ff;font-size:11px;">' + this._esc(String(ammos)) + '</span>';
    return ammos.map(a => {
      const imgSrc = '../../data/Images/' + this._imgBase + a.icon + '.png';
      return '<div class="ammo-chip">' +
        '<img src="' + imgSrc + '" onerror="this.style.display=\'none\'">' +
        '<span class="ammo-chip-name">' + this._esc(a.name) + '</span>' +
        (a.note ? '<span class="ammo-chip-note">— ' + this._esc(a.note) + '</span>' : '') +
      '</div>';
    }).join('');
  }

  _matChips(mats) {
    if (!Array.isArray(mats)) return '<span style="color:#4a7a8a;font-size:11px;">' + this._esc(String(mats)) + '</span>';
    return mats.map(m => {
      const imgSrc = '../../data/Images/Parts/' + m.icon + '.png';
      return '<div class="mat-chip">' +
        '<img src="' + imgSrc + '" onerror="this.style.display=\'none\'">' +
        '<span class="mat-chip-name">' + this._esc(m.name) + '</span>' +
        (m.qty && m.qty !== '1' ? '<span class="mat-chip-qty">×' + m.qty + '</span>' : '') +
      '</div>';
    }).join('');
  }

  _yieldChips(yields) {
    if (!Array.isArray(yields)) return '';
    return yields.map(y => {
      const imgSrc = '../../data/Images/Materials/' + y.icon + '.png';
      return '<div class="yield-chip">' +
        '<img src="' + imgSrc + '" onerror="this.style.display=\'none\'">' +
        '<span class="yield-chip-name">' + this._esc(y.name) + '</span>' +
        (y.qty ? '<span class="yield-chip-qty">×' + y.qty + '</span>' : '') +
      '</div>';
    }).join('');
  }

  _editItem(id, changes) {
    if (!window.TLC_STATE) return;
    const edits = Object.assign({}, window.TLC_STATE.get('itemIndexEdits') || {});
    edits[id] = Object.assign({}, edits[id] || {}, changes);
    window.TLC_STATE.set('itemIndexEdits', edits);
    window.TLC_STATE.save();
  }

  _esc(s) { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
}

customElements.define('tlc-item-index', TlcItemIndex);
