// Entry point
import { LitElement, html } from "@polymer/lit-element"
import "./nav-bar"

import { cssSpinner } from "./css-spinner"

import "./quake-item"

class MyApp extends LitElement {
  constructor() {
    super()

    // initial value
    this.error = false
    this.quakes = []
    this.showSpinner = false

    this.addEventListener("load", this._fetchData())
  }

  static get properties() {
    return {
      error: Boolean,
      quakes: Array,
      showSpinner: Boolean      
    }
  }

  render() {

      if(this.showSpinner) {
          return html`
            <style>
              ${cssSpinner}
            </style>
            <div class="spinner lds-ring"><div></div><div></div><div></div><div></div></div>`
      }
      
      return html`
        <main>
          <nav-bar appTitle="Quake Report Clone"></nav-bar>
          ${ this.quakes.map((quake) => {
              return html`
                <quake-item
                  time="${ quake.properties.mags }" 
                  place="${ quake.properties.place }">
                </quake-item>`                     
          }) }    
        </main>`
  }
  
  async _fetchData() {
    this.showSpinner = true
    
    await fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2018-01-01&endtime=2018-10-15&minfelt=50&minmagnitude=3", {method: "GET"})
    .then(req => req.json())
    .then(res => {
      // ngubah state
      this.showSpinner = false
      console.log(res.features)

      this.quakes = res.features
    })
    .catch(err => {
      this.showSpinner = false

    })
  }  
}

// register the component
window.customElements.define("my-app", MyApp)