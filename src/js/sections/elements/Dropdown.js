import DOMUtils from "../../utils/DOMUtils";

export default class Dropdown {
  constructor( section, options = {}, callback = () => {} ) {
    this.element = null;
    this.section = section;
    this.options = options.options || [];
    this.value = this.options[options.value] || false;
    this.callback = callback;
    this.create();
  }

  create() {
    const $dropdown = DOMUtils.createElement( "select", this.section, { className: "body__section__dropdown" } );

    this.options.forEach( ( v ) => {
      const $option = document.createElement( "option" );
      $option.innerHTML = v;
      $dropdown.appendChild( $option );
    } );

    if ( this.value !== false ) {
      $dropdown.value = this.value;
    }

    this.element = $dropdown;

    this.bindCallback();
  }

  bindCallback() {
    this.element.addEventListener( "change", () => {
      this.callback( this.getValue() );
    } );
  }

  getValue() {
    return this.element.value;
  }

  setValue( val ) {
    if ( this.options[val] ) {
      this.element.value = this.options[val];
    }
  }
}
