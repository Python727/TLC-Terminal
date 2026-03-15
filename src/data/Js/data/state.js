'use strict';
/**
 * state.js  — src/data/JS/data/state.js
 * ─────────────────────────────────────────────────────────────────────
 * Zentrales State-Objekt.
 * Alle Custom-Elements lesen / schreiben hierher.
 * Änderungen lösen ein CustomEvent 'tlc:statechange' auf window aus,
 * damit betroffene Komponenten sich neu rendern können.
 * ─────────────────────────────────────────────────────────────────────
 */

const _defaultState = {
  /* Karte */
  scale:  0.75,
  panX:   0,
  panY:   0,

  /* Nutzerdaten (persistent) */
  waypoints:    [],   // [{ gx, gy, label }]
  userMarkers:  [],   // [{ gx, gy, color, note }]
  nodeData:     {},   // { [locationId]: { color, note, resources: [{icon,label,value}] } }
  boatPos:      null, // { gx, gy } | null
  visibility:   {},   // { hidden, seedvault, caves, labels, fogOfWar }
  activeZone:   null, // zuletzt gewählte Zone
  humanCalcInv:    {},   // Human Calculator — available to use
  humanCalcStock:  {},   // Human Calculator — total on hand
  humanCalcStatus: {},   // Human Status (owned/grow)
};

/** Tiefer Clone, nur für plain-JSON-Daten */
function _deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

class TlcState {
  constructor() {
    this._data = _deepClone(_defaultState);
  }

  /* ── Getter ──────────────────────────────────────────── */
  get(key) {
    return this._data[key];
  }

  getAll() {
    return this._data;
  }

  /* ── Setter (löst Event aus) ─────────────────────────── */
  set(key, value) {
    this._data[key] = value;
    this._emit(key);
  }

  /** Merge für verschachtelte Objekte (z.B. nodeData) */
  merge(key, value) {
    if (typeof this._data[key] === 'object' && !Array.isArray(this._data[key])) {
      this._data[key] = Object.assign({}, this._data[key], value);
    } else {
      this._data[key] = value;
    }
    this._emit(key);
  }

  /* ── Persistenz ──────────────────────────────────────── */
  /** Aktiver Slot (0-7) */
  get activeSlot() { return this._activeSlot || 0; }

  /** Lädt einen bestimmten Slot */
  async load(slot = this._activeSlot || 0) {
    this._activeSlot = slot;
    try {
      let saved = null;
      if (window.TLC_SERVER) {
        saved = await window.TLC_SERVER.loadState({ slot });
      }
      // Reset to defaults first
      const def = JSON.parse(JSON.stringify(_defaultState));
      ['waypoints','userMarkers','nodeData','boatPos','visibility','activeZone',
       'humanCalcInv','humanCalcStock','humanCalcStatus'].forEach(k => {
        this._data[k] = def[k];
      });
      if (saved) {
        const keys = ['waypoints','userMarkers','nodeData','boatPos','visibility','activeZone',
                      'humanCalcInv','humanCalcStock','humanCalcStatus'];
        keys.forEach(k => {
          if (saved[k] !== undefined) this._data[k] = saved[k];
        });
      }
      // Pre-fill defaults for all locations that have them
      // so they are available immediately without lazy-init via rendering
      this._applyLocationDefaults();
    } catch (e) {
      console.warn('[TlcState] load error:', e);
    }
    this._emit('*');
  }

  /** Applies location defaults to nodeData for any location not yet in nodeData */
  _applyLocationDefaults() {
    // locations.js might not be ready yet — defer if needed
    const locs = window.TLC_LOCATIONS;
    if (!locs || !locs.length) {
      // Retry once DOM is fully ready
      window.addEventListener('tlc:ready', () => this._applyLocationDefaults(), { once: true });
      return;
    }
    const nodeData = Object.assign({}, this._data.nodeData || {});
    let changed = false;
    locs.forEach(loc => {
      if (!loc.defaults) return;
      if (nodeData[loc.id]) return; // already has data, don't overwrite
      const d = loc.defaults;
      const base = {};
      if (d.color)     base.color     = d.color;
      if (d.visited)   base.visited   = d.visited;
      if (d.notes)     base.notes     = d.notes.map(text => ({
        text, ts: new Date().toISOString().slice(0,10)
      }));
      if (d.resources) base.resources = d.resources;
      if (d.tanks)     base.tanks     = d.tanks;
      if (d.enemies)   base.enemies   = d.enemies;
      nodeData[loc.id] = base;
      changed = true;
    });
    if (changed) this._data.nodeData = nodeData;
  }

  /** Speichert in aktiven Slot */
  async save() {
    const payload = {
      _slotName:   this._data._slotName || null,
      waypoints:   this._data.waypoints,
      userMarkers: this._data.userMarkers,
      nodeData:    this._data.nodeData,
      boatPos:     this._data.boatPos,
      visibility:  this._data.visibility,
      activeZone:  this._data.activeZone,
      humanCalcInv:    this._data.humanCalcInv,
      humanCalcStock:  this._data.humanCalcStock,
      humanCalcStatus: this._data.humanCalcStatus,
    };
    try {
      if (window.TLC_SERVER) {
        await window.TLC_SERVER.saveState({ slot: this._activeSlot || 0, payload });
      }
    } catch (e) {
      console.warn('[TlcState] save error:', e);
    }
  }

  /** Gibt alle Slot-Infos zurück */
  async listSlots() {
    if (window.TLC_SERVER) return window.TLC_SERVER.listSlots();
    return { success: false };
  }

  /** Löscht einen Slot */
  async deleteSlot(slot) {
    if (window.TLC_SERVER) return window.TLC_SERVER.deleteSlot({ slot });
  }

  /** Benennt einen Slot um */
  async renameSlot(slot, name) {
    if (window.TLC_SERVER) return window.TLC_SERVER.renameSlot({ slot, name });
  }

  /* ── Event ───────────────────────────────────────────── */
  _emit(key) {
    window.dispatchEvent(new CustomEvent('tlc:statechange', { detail: { key } }));
  }
}

window.TLC_STATE = new TlcState();
