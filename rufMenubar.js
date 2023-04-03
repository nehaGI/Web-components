class RufMenubar extends HTMLElement {
  constructor() {
    super();
    //this.items;
    //attachs shadow dom to element and sets shadowRoot property
    //this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
    <div id="menubar-container" class="menubar-style">
        <div class="ruf-menubar-item">Item1</div>
        <div class="ruf-menubar-item">Item2</div>
        <div class="ruf-menubar-item">Item3</div>
    </div>`;
  }

  //custom Element is attached to DOM
  connectedCallback() {}
}

//registering and define custom element
customElements.define('ruf-menubar', RufMenubar);
