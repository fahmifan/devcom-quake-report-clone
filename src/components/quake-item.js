// Entry point
import { LitElement, html } from "@polymer/lit-element"

class QuakeItem extends LitElement {
  constructor() {
    super()
  }

  static get properties() {
    return {
      place: String,
      mags: String,
    }
  }

  render() {
    return html`
      <style>
          .quake {
              padding: 0.5rem;
          }
      </style>
      <!-- container -->
      <div class="quake">
          <span>${ this.mags }</span>
          <div>${ this.place }</div>
          <div>Oct, 22 2018</div>
          <hr/>
      </div>
    `
  }
}

// register the component
window.customElements.define("quake-item", QuakeItem)