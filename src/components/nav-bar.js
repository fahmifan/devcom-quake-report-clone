// Entry point
import { LitElement, html } from "@polymer/lit-element"
 
class NavBar extends LitElement {
  constructor() {
    super()
  }

  static get properties() {
    return {
      appTitle: String
    }
  }

  render() {
    return html`
      <style>
        .nav-bar {
          background: blue; 
          padding: 1rem;
          color: white;
        }
      </style>
      <nav class="nav-bar">${ this.appTitle }</nav>
    `
  }
}

// register the component
window.customElements.define("nav-bar", NavBar)