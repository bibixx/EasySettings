import DOMUtils from "../../utils/DOMUtils";

export default class Input {
  constructor( section, type, options = {}, callback = () => {} ) {
    this.element = null;
    this.section = section;
    this.value = options.value;
    this.type = type;
    this.callback = callback;
    this.addOptions = options;
    this.additionalElement = null;
    this.create();
  }

  create() {
    const $inputGroup = DOMUtils.createElement( "span", this.section, { className: "es-body__section__input-group" } );
    let $input = null;

    if ( this.type === "color" ) {
      this.additionalElement = DOMUtils.createElement( "label", $inputGroup, { className: "es-body__section__label-color" } ); // Color label
      this.additionalElement.style.background = this.value;

      if ( this.value.match( /^#[abcdef0123456789]{3}$/i ) ) {
        this.value = `#${this.value[1]}${this.value[1]}${this.value[2]}${this.value[2]}${this.value[3]}${this.value[3]}`;
      }

      $input = DOMUtils.createElement( "input", this.additionalElement, { className: `es-body__section__input es-body__section__input--${this.type}`, value: this.value }, { type: this.type } );
    } else {
      $input = DOMUtils.createElement( "input", $inputGroup, { className: `es-body__section__input es-body__section__input--${this.type}`, value: this.value }, { type: this.type } );
    }


    if ( typeof this.addOptions !== "undefined" ) {
      if ( typeof this.addOptions.min !== "undefined" ) {
        $input.setAttribute( "min", this.addOptions.min );
      }

      if ( typeof this.addOptions.max !== "undefined" ) {
        $input.setAttribute( "max", this.addOptions.max );
      }

      if ( typeof this.addOptions.step !== "undefined" ) {
        $input.setAttribute( "step", this.addOptions.step );
      } else if ( this.type === "number" ) {
        $input.setAttribute( "step", 1 );
      }

      $input.placeholder = this.addOptions.placeholder || "";
    }

    if ( this.type !== "color" ) {
      this.additionalElement = DOMUtils.createElement( "span", $inputGroup, { className: "es-body__section__input-underline" } ); // Underline
    }

    this.element = $input;

    this.bindCallback();
  }

  bindCallback() {
    this.element.addEventListener( "input", () => {
      if ( this.type === "color" ) {
        this.additionalElement.style.background = this.getValue();
      }

      this.callback( this.getValue() );
    } );
  }

  getValue() {
    let valueToReturn;
    if ( this.addOptions ) {
      if ( this.addOptions.min !== null ) {
        if ( this.addOptions.min > this.element.value ) {
          valueToReturn = this.addOptions.min;
        }
      }

      if ( this.addOptions.max !== null ) {
        if ( this.addOptions.max < this.element.value ) {
          valueToReturn = this.addOptions.max;
        }
      }
    }

    valueToReturn = this.element.value;

    if ( this.type === "number" ) {
      valueToReturn *= 1;
    }

    return valueToReturn;
  }

  setValue( val ) {
    this.element.value = val;
    DOMUtils.dispatchEvent( this.element, "input" );
  }
}
