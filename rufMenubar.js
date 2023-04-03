class RufMenubar extends HTMLElement {
  constructor() {
    super();
    this.items;
    //attachs shadow dom to element and sets shadowRoot property
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
      .menubar-style {
          display: flex;
          flex-direction: row;
          align-items: center;
          border: 1px solid #b3bfc2;
      }
      .ruf-menubar-item {
        padding: 10px 15px;
        cursor: pointer;
        border-bottom: solid 4px transparent;
      }
      .ruf-menubar-item:hover {
          background:  #ffffff26;
      }

      .ruf-ruf-menubar-item-active {
        border-bottom-color: #4bcd3e;
      }
    </style>
  
    <div id="menubar-container" class="menubar-style">
        <div class="ruf-menubar-item">Item1</div>
        <div class="ruf-menubar-item">Item2</div>
        <div class="ruf-menubar-item">Item3</div>
    </div>`;
  }

  //custom Element is attached to DOM
  connectedCallback() {}
}

//registering custom element
customElements.define('ruf-menubar', RufMenubar);
