import DOMUtils from "./utils/DOMUtils";

import EasySettingsMovementManager from "./actions/EasySettingsMovementManager";
import Section from "./sections/Section";

/**
 * @module Panel
*/

let dif = false;

let isSetupDone = false;

/**
 * Creates a panel.
 * @class
 * @param {number} [x] - specifies initial x position of panel
 * @param {number} [y] - specifies initial y position of panel
 * @param {string} [title] - specifies title of panel
 * @example
 * const panel = new EasySettings();
 */

export default class EasySettings {
  constructor( x, y, title ) {
    this.container = null;
    this.header = null;
    this.body = null;
    this.sections = [];
    this.elements = {};
    this.title = title;
    this.pos = {
      x: x || 8,
      y: y || 8,
    };

    if ( !isSetupDone && !dif ) {
      EasySettings.createHeaderTags();
    }

    this.createSettingsContainer();

    this.movementManager = new EasySettingsMovementManager( this.container, this.header );
  }

  static createHeaderTags() {
    isSetupDone = true;

    DOMUtils.createElement( "link", document.head, null, { href: "https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,500|Material+Icons", rel: "stylesheet" } );
  }

  /**
   * Disables inserting 3 fonts (”Roboto Mono”, ”Roboto”, ”Material Icons”) on library startup.
   @static
  */

  static disableInsertingFonts() {
    dif = true;
  }

  createSettingsHeader() {
    this.header = DOMUtils.createElement( "header", this.container, { className: "es-header" } );

    DOMUtils.createElement( "span", this.header, { innerHTML: this.title || "EasySettings Panel" } );
  }

  createSettingsBody() {
    this.body = DOMUtils.createElement( "main", this.container, { className: "es-body" } );
  }

  createSettingsContainer() {
    this.container = DOMUtils.createElement( "div", null, { className: "es-container" } );
    const $container = this.container;

    this.createSettingsHeader();
    this.createSettingsBody();

    document.body.insertBefore( $container, document.body.firstChild );

    $container.style.left = `${this.pos.x}px`;
    $container.style.top = `${this.pos.y}px`;
  }

  /**
   * Creates section
   * @returns {module:Panel} Panel that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.createSection();
  */

  createSection() {
    const newSection = new Section( this.body, this.elements, this.sections.length );
    this.sections.push( newSection );
    return newSection;
  }

  /**
   * Gets value of component
   * @param {string} id - id of the component which value is going to be returned
   * @returns {string|number|boolean} Value of component wiht specified id
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addTextInput( "input-text", { value: "EasySettings" } );
   * console.log( panel.getValue( "input-text" ) ); // logs EasySettings

   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addNumberInput( "input-number", { value: Math.round( Math.PI * 100 ) } );
   * console.log( panel.getValue( "input-number" ) ); // logs 314

   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addCheckbox( "checkbox", { label: "Value 1", checked: true });
   * console.log( panel.getValue( "checkbox" ) ); // logs true
  */

  getValue( id ) {
    return this.elements[id].getValue();
  }

  /**
   * Sets value of component
   * @param {string} id - id of the component which value is going to be changed
   * @param {string|number|boolean} value - value that component is supposed to have

   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addTextInput( "input-text", { value: "EasySettings" } );
   * panel.setValue( "input-text", "EasySettings2" ); // input now says ”EasySettings2”

   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addNumberInput( "input-number", { value: Math.round( Math.PI * 100 ) } );
   * panel.setValue( "input-number", 13 ); // input now says 13

   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addCheckbox( "checkbox", { label: "Value 1", checked: true });
   * panel.setValue( "checkbox", false ); // checkbox is off
  */

  setValue( id, value ) {
    this.elements[id].setValue( value );
  }

  toggleIndeterminate( id ) {
    this.elements[id].toggleIndeterminate();
  }
}

window.EasySettings = EasySettings;
