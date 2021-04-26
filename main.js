import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

class ExampleElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h4>I'm a new element</h4>`;
  }
}
window.customElements.define('example-element', ExampleElement);