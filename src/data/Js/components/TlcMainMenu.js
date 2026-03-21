'use strict';
/**
 * TlcMainMenu.js
 * ─────────────────────────────────────────────────────────────────────
 * Fullscreen main menu shown after slot selection.
 * Same visual style as TlcSaveSlots.
 * Pages: Map, Human Growth Calculator, Item Index
 * ─────────────────────────────────────────────────────────────────────
 */

class TlcMainMenu extends HTMLElement {

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this._render();
    this._bindEvents();
    window.addEventListener('tlc:langchange', () => this._render());
  }

  _render() {
    const slot = window.TLC_STATE ? window.TLC_STATE.activeSlot : 0;
    const slotName = this._getSlotName(slot);

    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');

        :host {
          position: fixed; inset: 0; z-index: 9000;
          background: #060d10;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          font-family: 'Share Tech Mono', monospace;
        }

        /* ── Header ── */
        .subtitle {
          font-family: 'Orbitron', sans-serif;
          font-size: 11px; letter-spacing: 5px;
          color: #00d4aa; text-transform: uppercase;
          margin-bottom: 6px; opacity: 0.6;
        }
        .headline {
          font-family: 'Orbitron', sans-serif;
          font-size: 26px; font-weight: 900;
          color: #b8e4f0; letter-spacing: 5px;
          margin-bottom: 6px;
        }
        .slot-label {
          font-size: 11px; color: #2a5a6a;
          letter-spacing: 2px; margin-bottom: 48px;
        }
        .slot-label span { color: #4a7a8a; }

        /* ── Menu Grid ── */
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 280px);
          gap: 20px;
        }

        /* ── Menu Card ── */
        .menu-card {
          background: #0d1f28;
          border: 1px solid #1a3a4a;
          border-radius: 8px;
          padding: 32px 28px;
          cursor: pointer;
          transition: border-color 0.15s, background 0.15s, transform 0.15s;
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          position: relative;
          overflow: hidden;
        }
        .menu-card::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(0,212,170,0.04), transparent 70%);
          pointer-events: none;
        }
        .menu-card:hover {
          border-color: #00d4aa;
          background: #102030;
          transform: translateY(-3px);
        }
        .menu-card:hover .card-icon { transform: scale(1.08); }

        .card-icon {
          font-size: 48px; margin-bottom: 18px;
          transition: transform 0.15s;
          line-height: 1;
        }
        .card-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 13px; font-weight: 700;
          color: #b8e4f0; letter-spacing: 2px;
          text-transform: uppercase; margin-bottom: 10px;
        }
        .card-desc {
          font-size: 11px; color: #4a7a8a;
          line-height: 1.6; max-width: 200px;
        }
        .card-badge {
          position: absolute; top: 12px; right: 12px;
          font-size: 9px; color: #00d4aa; letter-spacing: 1px;
          border: 1px solid #00d4aa33; padding: 2px 7px;
          border-radius: 2px; text-transform: uppercase;
        }

        /* ── Back Button ── */
        .back-row {
          margin-top: 40px;
          display: flex; align-items: center; gap: 10px;
        }
        .back-btn {
          background: none;
          border: 1px solid #1a3a4a;
          color: #4a7a8a;
          font-family: 'Share Tech Mono', monospace;
          font-size: 11px; padding: 6px 16px;
          border-radius: 4px; cursor: pointer;
          letter-spacing: 1px; transition: all 0.1s;
        }
        .back-btn:hover { border-color: #4a7a8a; color: #b8e4f0; }

        /* ── Decorative scan line ── */
        .scanline {
          position: fixed; inset: 0; pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,212,170,0.015) 2px,
            rgba(0,212,170,0.015) 4px
          );
          z-index: -1;
        }
      </style>

      <div class="scanline"></div>

      <div class="subtitle">THE LAST CARETAKER</div>
      <div class="headline">TERMINAL</div>
      <div class="slot-label">SLOT ${slot + 1} &nbsp;·&nbsp; <span>${this._esc(slotName)}</span></div>

      <div class="menu-grid">

        <div class="menu-card" id="btn-map">
          <div class="card-icon">🗺</div>
          <div class="card-title">Navigation Map</div>
          <div class="card-desc">Interactive world map with locations, waypoints and fog of war.</div>
        </div>

        <div class="menu-card" id="btn-calc">
          <div class="card-icon">🧬</div>
          <div class="card-title">Growth Calculator</div>
          <div class="card-desc">Plan memories and food to grow humans. Track your inventory.</div>
        </div>

        <div class="menu-card" id="btn-index">
          <div class="card-icon">📦</div>
          <div class="card-title">Item Index</div>
          <div class="card-desc">Browse all memories, food items and human types with full stats.</div>
          <div class="card-badge">NEW</div>
        </div>

      </div>

      <div class="back-row">
        <button class="back-btn" id="btn-back">‹ Change Save Slot</button>
      </div>
    `;

    this._bindEvents();
  }

  _bindEvents() {
    const sr = this.shadowRoot;
    if (!sr) return;

    const mapBtn   = sr.getElementById('btn-map');
    const calcBtn  = sr.getElementById('btn-calc');
    const indexBtn = sr.getElementById('btn-index');
    const backBtn  = sr.getElementById('btn-back');

    mapBtn  ?.addEventListener('click', () => this._open('map'));
    calcBtn ?.addEventListener('click', () => this._open('calc'));
    indexBtn?.addEventListener('click', () => this._open('index'));
    backBtn ?.addEventListener('click', () => this._goBack());
  }

  _open(page) {
    window.dispatchEvent(new CustomEvent('tlc:menu-open', { detail: { page } }));
    this.remove();
  }

  _goBack() {
    this.remove();
    // Re-show slot screen
    const slots = document.createElement('tlc-save-slots');
    document.body.appendChild(slots);
  }

  _getSlotName(slot) {
    // Try to read from last loaded slot info
    if (this._slotName) return this._slotName;
    return `Savegame ${slot + 1}`;
  }

  _esc(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
}

customElements.define('tlc-main-menu', TlcMainMenu);
