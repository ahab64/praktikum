const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      height: 60px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #dfdfe2;
      margin-top: auto;
      position: fixed;
      bottom: 0px;
      left: 0px;
      right: 0px;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
    
    .social-row {
      font-size: 24px;
      margin: auto;
    }
    
    .social-row li a {
      margin: 0 15px;
    }
  </style>
  <footer>
    <ul class="social-row">
      <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/my-github-profile"><i class="fab fa-github"></i></a></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/my-twitter-profile"><i class="fab fa-snapchat"></i></a></li>
      <li><a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/merlinffm?si=4296e45200534aba"><i class="fab fa-spotify"></i></a></li>
    </ul>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);