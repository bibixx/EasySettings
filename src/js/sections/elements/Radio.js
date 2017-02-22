import DOMUtils from "../../utils/DOMUtils";

export default class Radio {
  constructor( section, index, options = {}, callback = () => {} ) {
    this.element = null;
    this.radios = [];
    this.section = section;
    this.index = index;
    this.values = options.values || [];
    this.checkedIndex = options.checkedIndex;
    this.callback = callback;
    this.create();
  }

  create() {
    const $group = DOMUtils.createElement( "div", this.section, { className: "es-body__section__radio-group" } );

    this.values.forEach( ( v, i ) => {
      const $label = DOMUtils.createElement( "label", $group, { className: "es-body__section__label" } );

      const $radio = DOMUtils.createElement( "input", $label, { className: "es-body__section__checkbox", checked: ( i === this.checkedIndex ) }, { type: "radio", name: `EasySettingsPanel-${this.index}` } );

      const $icon = DOMUtils.createElement( "span", $label, { className: "es-body__section__label__icon" }, { tabindex: 0 } ); // Label icon

      DOMUtils.createElement( "span", $icon, { className: "es-body__section__label__icon--focused" } ); // labelIconFocused

      $icon.addEventListener( "keydown", ( e ) => {
        if ( e.keyCode === 32 || e.keyCode === 13 ) {
          this.setValue( i );
          DOMUtils.dispatchEvent( $group, "change" );
        }
      } );

      DOMUtils.createElement( "span", $label, { innerHTML: v } ); // Label text

      this.radios.push( $radio );
    } );

    this.element = $group;

    this.bindCallback();
  }

  bindCallback() {
    this.element.addEventListener( "change", () => {
      this.callback( this.getValue() );
    } );
  }

  getValue() {
    let index = -1;
    this.radios.forEach( ( v, i ) => {
      if ( v.checked ) {
        index = i;
      }
    } );

    return index;
  }

  setValue( val ) {
    this.radios.forEach( ( v, i ) => {
      v.checked = ( i === val ); // eslint-disable-line no-param-reassign
    } );
    DOMUtils.dispatchEvent( this.element, "change" );
  }
}
