'use strict';
/**
 * TlcControls.js  — src/data/JS/components/TlcControls.js
 * ─────────────────────────────────────────────────────────────────────
 * Custom Element: <tlc-controls>
 * Zoom-In / Zoom-Out / Reset Buttons.
 * Kommuniziert via CustomEvents mit TlcMap.
 * ─────────────────────────────────────────────────────────────────────
 */

class TlcControls extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._render();
    window.addEventListener('tlc:langchange', () => {
      const sr = this.shadowRoot;
      sr.getElementById('btn-in')   ?.setAttribute('title', t('ctrl.zoom_in'));
      sr.getElementById('btn-out')  ?.setAttribute('title', t('ctrl.zoom_out'));
      sr.getElementById('btn-reset')?.setAttribute('title', t('ctrl.reset_view'));
      sr.getElementById('btn-settings')?.setAttribute('title', t('ctrl.settings'));
      sr.getElementById('btn-menu')?.setAttribute('title', t('ctrl.main_menu'));
    });

    this.shadowRoot.getElementById('btn-in')
      .addEventListener('click', () => window.dispatchEvent(new CustomEvent('tlc:zoom', { detail: { factor: 1.25 } })));

    this.shadowRoot.getElementById('btn-out')
      .addEventListener('click', () => window.dispatchEvent(new CustomEvent('tlc:zoom', { detail: { factor: 0.8  } })));

    this.shadowRoot.getElementById('btn-reset')
      .addEventListener('click', () => window.dispatchEvent(new CustomEvent('tlc:reset-view')));

    this.shadowRoot.getElementById('btn-settings')
      .addEventListener('click', () => window.dispatchEvent(new CustomEvent('tlc:toggle-settings')));


    this.shadowRoot.getElementById('btn-menu')
      .addEventListener('click', () => {
        TLC_STATE.save().then(() => {
          const map = document.querySelector('tlc-map');
          if (map) map.style.display = 'none';
          const menu = document.createElement('tlc-main-menu');
          document.body.appendChild(menu);
        });
      });
  }

  _render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: absolute;
          right: 14px;
          top: calc(var(--tlc-header-h, 42px) + 10px);
          z-index: var(--z-controls, 70);
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-family: var(--tlc-font-mono, 'Share Tech Mono', monospace);
        }

        button {
          width: 36px;
          height: 36px;
          background: rgba(13, 31, 40, 0.96);
          border: 1px solid var(--tlc-border, #1a4a5a);
          color: var(--tlc-text, #b8e4f0);
          border-radius: 4px;
          cursor: pointer;
          font-size: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 120ms, color 120ms;
        }
        button:hover {
          border-color: var(--tlc-accent, #00d4aa);
          color: var(--tlc-accent, #00d4aa);
        }
      </style>

      <button id="btn-in"    title="${t('ctrl.zoom_in')}">+</button>
      <button id="btn-out"   title="${t('ctrl.zoom_out')}">−</button>
      <button id="btn-reset" title="${t('ctrl.reset_view')}" style="font-size:14px;">⌂</button>
      <button id="btn-settings" title="${t('ctrl.settings')}" style="font-size:15px;">⚙</button>
      <button id="btn-menu"      title="${t('ctrl.main_menu')}" style="font-size:13px;">⬡</button>
    `;
  }
}

customElements.define('tlc-controls', TlcControls);
