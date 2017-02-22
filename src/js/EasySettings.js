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
    this.elementsInOrder = [];
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
   * Disables injecting 3 fonts (”Roboto Mono”, ”Roboto”, ”Material Icons”) on library startup.
   @static
  */

  static disableInjectingFonts() {
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
    const newSection = new Section( this.body, this.elements, this.sections.length, this.elementsInOrder );
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

  /**
   * Toggles determination of progress bar
   * @param {string} id - id of the progress bar which is going to be changed

   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addProgress( "progress", { value: 0.33, indeterminate: true } );
   * panel.toggleIndeterminate( "progress" ); // progress bar now is not indeterminate
  */

  toggleIndeterminate( id ) {
    this.elements[id].toggleIndeterminate();
  }

  /**
   * Returns values of all components that have specified id
   * @returns {string}
   * @example
   * const panel = new EasySettings();
   * panel.createSection()
   *  .addDropdown( "dropdown", { options: ["Dropdown option #1", "Dropdown option #2"] } );
   * panel.createSection()
   *  .addSlider( "slider", { value: 25, min: 0, max: 1000 } );
   * panel.createSection()
   *  .addNumberInput( "input-number-slider", { value: 0, step: 0.5, min: 0, max: 1 } );
   * console.log( panel.getValuesAsJSON() );
   * // logs
   * // {
   * //   dropdown: "Dropdown option #1",
   * //   input-number-slider: 0,
   * //   slider: 25
   * // }
  */

  getValuesAsJSON() {
    const values = {};
    Object.keys( this.elements ).forEach( ( key ) => {
      values[key] = this.getValue( key );
    } );
    return JSON.stringify( values );
  }

  /**
   * Sets values of all components from JSON object
   * @param {object.<string, string|number>} value - object that specifies what values should components have (key => id, value => value to be set)
   * @example
   * const panel = new EasySettings();
   * panel.createSection()
   *  .addDropdown( "dropdown", { options: ["Dropdown option #1", "Dropdown option #2"] } );
   * panel.createSection()
   *  .addSlider( "slider", { value: 25, min: 0, max: 1000 } );
   * panel.createSection()
   *  .addNumberInput( "input-number-slider", { value: 0, step: 0.5, min: 0, max: 1 } );
   * panel.setValuesFromJSON(
   *   {
   *     dropdown: "Dropdown option #2",
   *     input-number-slider: 4,
   *     slider: 75
   *   }
   * );
  */

  setValuesFromJSON( values ) {
    Object.keys( values ).forEach( ( key ) => {
      if ( typeof this.elements[key] !== "undefined" ) {
        this.setValue( key, values[key] );
      }
    } );
    return values;
  }

  /**
   * Exports panel to JSON
   * @returns {string}
   * @example
   * const panel = new EasySettings( 8, 8, "My panel" );
   * panel.createSection()
   *  .addDropdown( "dropdown", { options: ["Dropdown option #1", "Dropdown option #2"] } );
   * panel.createSection()
   *  .addSlider( "slider", { value: 25, min: 0, max: 1000 } );
   * panel.createSection()
   *  .addNumberInput( "input-number-slider", { value: 0, step: 0.5, min: 0, max: 1 } );
   * console.log( panel.exportPanelToJSON() );
   *
   * // logs:
   * // '{
   * //   "title": "My panel",
   * //   "pos": {
   * //     "x" :8,
   * //     "y": 8
   * //   },
   * //   "components": [
   * //     [
   * //       {
   * //         "id": "dropdown",
   * //         "options": {
   * //           "options": [ "Dropdown option #1", "Dropdown option #2" ]
   * //         },
   * //         "callback": "( v ) => { console.log( v ); }",
   * //         "type": "addDropdown"
   * //       },
   * //       {
   * //         "id": "slider",
   * //         "options": {
   * //           "value": 25,
   * //           "min": 0,
   * //           "max": 1000
   * //         },
   * //         "callback": null,
   * //         "type": "addSlider"
   * //       }
   * //     ],
   * //     [
   * //       {
   * //         "id": "input-number-slider",
   * //         "options": {
   * //           "value": 0,
   * //           "step": 0.5,
   * //           "min": 0,
   * //           "max": 1
   * //         },
   * //         "callback": null,
   * //         "type": "addNumberInput"
   * //       }
   * //     ]
   * //   ]
   * // }'
  */

  exportPanelToJSON() {
    return JSON.stringify( {
      title: this.title,
      pos: this.pos,
      components: this.elementsInOrder,
    } );
  }

  /**
   * Create panel using JSON
   * @param {JSON} json - object from which panel will be created
   * @see For scheme of json: {@link module:Panel#exportPanelToJSON}
   * @example
   * var panel1 = EasySettings.createPanelFromJSON({"title": "My panel","pos":{"x":8,"y":8},"components":[[{"id":"dropdown","options":{"options":["Dropdownoption#1","Dropdownoption#2"]},"callback":"(v)=>{console.log(v);}","type":"addDropdown"},{"id":"slider","options":{"value":25,"min":0,"max":1000},"callback":null,"type":"addSlider"}],[{"id":"input-number-slider","options":{"value":0,"step":0.5,"min":0,"max":1},"callback":null,"type":"addNumberInput"}]]});
  */

  static createPanelFromJSON( json ) {
    const options = json;
    const es = new EasySettings( options.pos.x, options.pos.y, options.title );

    options.components.forEach( ( v ) => {
      const section = es.createSection();
      v.forEach( ( c ) => {
        console.log( c );
        section[c.type]( c.id, c.options, ( c.callback !== null ) ? eval( c.callback ) : null ); // eslint-disable-line no-eval
      } );
    } );

    return es;
  }

  /**
   * Animates value of component to specified value. Note: This method works only with [NumberInput]{@link module:Section#addNumberInput} and [Slider]{@link module:Section#addSlider}
   * @param {string} id - id of the progress bar which is going to be changed
   * @param {number} to - final value of component
   * @param {number} duration - duration of animation

   * @example
   * const panel = new EasySettings();
   * panel.createSection()
   *   .addSlider( "slider", { value: 25, min: 0, max: 1000 }, ( v ) => {
   *     panel.setValue( "input-number-slider", v );
   *   } )
   *   .addButton( null, null, () => {
   *     panel.animateValue( "slider", 500, 500 );
   *   } );
   * // after clicking the button slider will animate till it gets to the value of 500
  */

  animateValue( id, to, duration ) {
    let isValidName = false;
    const element = this.elements[id];
    switch ( element.constructor.name ) {
    case "Slider":
      isValidName = true;
      break;
    case "Input":
      if ( element.type === "number" ) {
        isValidName = true;
      } else {
        isValidName = false;
      }
      break;
    default:
      isValidName = false;
    }

    if ( isValidName ) {
      clearInterval( this.elements[id].animationInterval );
      let value = element.element.value * 1;
      const incBy = ( ( to - value ) / duration );
      const step = element.element.step;

      const round = ( a ) => {
        let roundingFactor = Math.abs( step - Math.floor( step ) );
        if ( roundingFactor === 0 ) {
          roundingFactor = 1;
        }

        return Math.round( a / step ) * step;
      };

      if ( incBy !== 0 ) {
        this.elements[id].animationInterval = setInterval( () => {
          if ( ( ( incBy > 0 ) && ( element.element.value * 1 >= to ) ) || ( ( incBy < 0 ) && ( element.element.value * 1 <= to ) ) ) {
            clearInterval( this.elements[id].animationInterval );
            this.elements[id].animationInterval = null;
            element.setValue( round( to ) );
          } else {
            value += incBy;
            element.setValue( round( value ) );
          }
        }, 1 );
      }
    } else {
      throw new Error( "You used animation on not supported type of component." );
    }
  }
}

/**
  @typedef JSON
  @type {object}
  @property {?string} title
  @property {?pos} pos
  @property {?array} components
*/

/**
  @typedef pos
  @type {object}
  @property {?string} x
  @property {?string} y
*/

window.EasySettings = EasySettings;
