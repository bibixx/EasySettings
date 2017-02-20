import DOMUtils from "../../utils/DOMUtils";
import SliderMovementManager from "./SliderMovementManager";

export default class Slider {
  constructor( section, options, callback ) {
    this.element = null;
    this.section = section;
    this.value = options.value * 1;
    this.min = 0;
    this.max = 100;
    this.step = 0.1;
    this.addOptions = options;
    this.callback = callback || null;
    this.SliderMovementManager = null;
    this.create();
  }

  create() {
    const $inputGroup = DOMUtils.createElement( "span", this.section, { className: "es-body__section__slider-group" } );

    if ( typeof this.addOptions !== "undefined" ) {
      if ( typeof this.addOptions.min !== "undefined" ) {
        this.min = this.addOptions.min || 0;
      }

      if ( typeof this.addOptions.max !== "undefined" ) {
        this.max = this.addOptions.max || 100;
      }

      if ( typeof this.addOptions.step !== "undefined" ) {
        this.step = this.addOptions.step || 0.1;
      }
    }

    if ( this.max === null ) {
      this.max = 100;
    }

    const $input = DOMUtils.createElement( "input", $inputGroup, { className: "es-body__section__slider" }, { type: "range", min: this.min, max: this.max, value: this.value, step: this.step } );

    const $track = DOMUtils.createElement( "div", $inputGroup, { className: "es-body__section__slider-track" } ); // Track
    const $trackValue = DOMUtils.createElement( "div", $track, { className: "es-body__section__slider-track__slider-value" } ); // Track
    const $handle = DOMUtils.createElement( "button", $track, { className: "es-body__section__slider-track__slider-handle" } ); // Track

    this.SliderMovementManager = new SliderMovementManager( $handle, $track, $input, $trackValue );

    this.SliderMovementManager.setHandleValue( this.value );

    $handle.addEventListener( "keydown", ( e ) => {
      let changeMultpilier = 1;

      if ( e.shiftKey ) {
        changeMultpilier = 10;
      }

      if ( e.altKey ) {
        changeMultpilier = 0.1;
      }


      if ( e.keyCode === 39 ) {
        this.element.value = parseFloat( this.element.value ) + changeMultpilier;
        DOMUtils.dispatchEvent( this.element, "input" );
      }

      if ( e.keyCode === 37 ) {
        this.element.value = parseFloat( this.element.value ) - changeMultpilier;
        DOMUtils.dispatchEvent( this.element, "input" );
      }
    } );

    this.element = $input;

    this.bindCallback();
  }

  bindCallback() {
    this.element.addEventListener( "input", () => {
      this.callback( this.getValue() );
      this.SliderMovementManager.setHandleValue();
    } );
  }

  getValue() {
    return this.element.value;
  }

  setValue( val ) {
    this.element.value = val;
    this.SliderMovementManager.setHandleValue();
    DOMUtils.dispatchEvent( this.element, "input" );
  }
}
