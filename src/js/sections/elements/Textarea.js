import DOMUtils from "../../utils/DOMUtils";

export default class Textarea {
  constructor( section, options, callback ) {
    this.element = null;
    this.section = section;
    this.value = options.value;
    this.callback = callback || null;
    this.addOptions = options;
    this.create();
  }

  create() {
    const $inputGroup = DOMUtils.createElement( "span", this.section, { className: "es-body__section__input-group" } );

    const $input = DOMUtils.createElement( "textarea", $inputGroup, { className: "es-body__section__input es-body__section__input--textarea", innerHTML: this.value } );

    if ( this.addOptions.placeholder !== null ) {
      $input.placeholder = this.addOptions.placeholder;
    }

    DOMUtils.createElement( "span", $inputGroup, { className: "es-body__section__input-underline" } ); // Underline

    this.element = $input;

    this.bindCallback();
  }

  bindCallback() {
    this.element.addEventListener( "input", () => {
      this.callback( this.getValue() );
    } );
  }

  getValue() {
    return this.element.innerHTML;
  }

  setValue( val ) {
    this.element.innerHTML = val;
    DOMUtils.dispatchEvent( this.element, "input" );
  }
}
