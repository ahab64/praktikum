const navbarTemplate = document.createElement("template");

navbarTemplate.innerHTML = `
<style>
.sidenav {
  width: 150px;
  height: 200px;
  position: fixed;
  z-index: 1;
  top: 200px;
  left: 10px;
  background: #ffff;
  overflow-x: hidden;
  padding: 8px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10%;
}

.sidenav a {
  padding: 8px 8px 8px 18px;
  text-decoration: none;
  font-weight: 700;
  color: inherit;
  display: block;

}

.sidenav a:hover {
  text-decoration: underline;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
<div class="sidenav">
  <a href="/index.html">Start</a>
  <a href="#about">Über mich</a>
  <a href="#services">Über die Deutsche Bank</a>
  <a href="/components/contact-form/contact-form.html">Kontakt</a>
</div>
`;

class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(navbarTemplate.content);
  }
}

customElements.define("navbar-component", Navbar);
