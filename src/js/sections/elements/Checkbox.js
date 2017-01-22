import DOMUtils from "../../utils/DOMUtils";

export default class Checkbox {
  constructor( section, label, checked, callback ) {
    this.element = null;
    this.section = section;
    this.label = label;
    this.callback = callback || null;
    this.checked = checked;
    this.create();
  }

  create() {
    const $label = DOMUtils.createElement( "label", this.section, { className: "es-body__section__label" } );

    const $checkbox = DOMUtils.createElement( "input", $label, { className: "body__section__checkbox", innerHTML: this.label, checked: this.checked }, { "type": "checkbox" } );

    const $icon = DOMUtils.createElement( "span", $label, { className: "es-body__section__label__icon" }, { tabindex: 0 } ); // labelIcon

    DOMUtils.createElement( "span", $icon, { className: "es-body__section__label__icon--focused" } ); // labelIconFocused

    DOMUtils.createElement( "span", $label, { className: "es-body__section__label__text", innerHTML: this.label } ); // labelText

    $icon.addEventListener( "keydown", ( e ) => {
      if ( e.keyCode === 32 || e.keyCode === 13 ) {
        $checkbox.checked = !$checkbox.checked;
        DOMUtils.dispatchEvent( $checkbox, "change" );
      }
    } );

    this.element = $checkbox;

    this.bindCallback();
  }

  bindCallback() {
    this.element.addEventListener( "change", () => {
      this.callback( this.getValue() );
    } );
  }

  getValue() {
    return this.element.checked;
  }

  setValue( val ) {
    this.element.checked = val;
  }
}
