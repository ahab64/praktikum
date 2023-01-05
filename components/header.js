const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style>
nav {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:  #0a0a23;
  position: fixed;
  width: 100%;
  margin-bottom: auto;
  z-index: 1;
}

ul {
  padding: 0;
}

ul li {
  list-style: none;
  display: inline;
}

a {
  font-weight: 700;
  margin: 0 25px;
  color: #fff;
  text-decoration: none;
}

a:hover {
  padding-bottom: 5px;
  box-shadow: inset 0 -2px 0 0 #fff;
}
</style>
<header>
<nav>
  <ul>
    <li><a href="/components/workshop-java-component/workshop-java-component.html">Java Workshop</a></li>
    <li><a href="/components/workshop-webseiten-component/workshop-webseiten-component.html">Webseiten Workshop</a></li>
    <li><a href="#">Arduino Workshop</a></li>
    <li><a href="#">Präsentations Workshop</a></li>
    <li><a href="#">IT Grundlagen Workshop</a></li>
  </ul>
</nav>
</header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        const shadowRoot = this.attachShadow({ mode: 'closed'});
        shadowRoot.appendChild(headerTemplate.content);
    }
    

}

customElements.define('header-component', Header);