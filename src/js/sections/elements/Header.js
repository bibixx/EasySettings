import DOMUtils from "../../utils/DOMUtils";

export default class Header {
  constructor( section, text, type ) {
    this.element = null;
    this.section = section;
    this.text = text;
    this.type = type;
    this.create();
  }

  create() {
    if ( this.type === "p" ) {
      this.element = DOMUtils.createElement( "p", this.section, { className: "body__section__header", innerHTML: `${this.text}` } );
    } else {
      this.element = DOMUtils.createElement( "p", this.section, { className: "body__section__header", innerHTML: `<strong>${this.text}</strong>` } );
    }
  }

  getValue() {
    return this.text;
  }

  setValue( val ) {
    this.text = val;
    if ( this.type === "p" ) {
      this.element.innerHTML = `<strong>${val}</strong>`;
    } else {
      this.element.innerHTML = val;
    }
  }
}
