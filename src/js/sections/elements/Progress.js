import DOMUtils from "../../utils/DOMUtils";

export default class Progress {
  constructor( section, options ) {
    this.element = null;
    this.trackValue = null;
    this.section = section;
    this.value = Math.max( 0, Math.min( options.value, 1 ) );
    this.addOptions = options;
    this.indeterminate = false;
    this.create();
  }

  create() {
    const $inputGroup = DOMUtils.createElement( "span", this.section, { className: "es-body__section__progress-group" } );

    const $input = DOMUtils.createElement( "input", $inputGroup, { className: "es-body__section__progress" }, { type: "hidden", value: this.value } );

    const $track = DOMUtils.createElement( "div", $inputGroup, { className: "es-body__section__progress-track" } ); // Track

    this.trackValue = DOMUtils.createElement( "div", $track, { className: "es-body__section__slider-track__progress-value" } ); // Track value

    if ( typeof this.addOptions !== "undefined" && this.addOptions.indeterminate ) {
      this.toggleIndeterminate();
    }

    this.trackValue.style.width = `${this.value * 100}%`;

    this.element = $input;
    this.track = $track;
  }

  getValue() {
    return this.element.value;
  }

  setValue( val ) {
    const value = Math.max( 0, Math.min( val, 1 ) );
    this.element.value = value;
    this.trackValue.style.width = `${value * 100}%`;
  }

  toggleIndeterminate() {
    this.indeterminate = !this.indeterminate;

    if ( this.indeterminate ) {
      this.trackValue.className += " es-body__section__slider-track__progress-value--indeterminate";
    } else {
      this.trackValue.className = this.trackValue.className.replace( " es-body__section__slider-track__progress-value--indeterminate", "" );
    }
  }
}
