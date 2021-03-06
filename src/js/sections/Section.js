/* eslint-disable no-multiple-empty-lines */

import DOMUtils from "../utils/DOMUtils";

import Button from "./elements/Button";
import Checkbox from "./elements/Checkbox";
import Dropdown from "./elements/Dropdown";
import Header from "./elements/Header";
import HTML from "./elements/HTML";
import Input from "./elements/Input";
import Progress from "./elements/Progress";
import Radio from "./elements/Radio";
import Slider from "./elements/Slider";
import Textarea from "./elements/Textarea";

/**
 * @module Section
*/

export default class Section {
  constructor( esBody, elements, index, elementsInOrder ) {
    this.esBody = esBody;
    this.body = null;
    this.elements = elements;
    this.index = index;
    this.elementsInOrder = elementsInOrder;
    this.create();
    return this;
  }

  create() {
    this.body = DOMUtils.createElement( "div", this.esBody, { className: "es-body__section" } );
  }

  addToContent( id, options, callback, type, el ) {
    if ( typeof this.elementsInOrder[this.index] === "undefined" ) {
      this.elementsInOrder[this.index] = [];
    }

    this.elementsInOrder[this.index].push( {
      id,
      options,
      callback: ( typeof callback !== "undefined" ) ? String( callback ) : null,
      type,
    } );

    if ( id !== null ) {
      this.elements[id] = el;
    }
  }

  /* Adding certain elements */

  /**
   * Adds button
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {string} [options.value=Button] - text displayed in button
   * @param {callback} [callback] - callback triggered on click
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addButton( "button", { value: "Button" } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "button" ); // returns text of button (”Button”)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "header", "Button 2" ); // sets text of button to ”Button 2”
  */

  addButton( id, options, callback ) {
    const element = new Button( this.body, options, callback );
    this.addToContent( id, options, callback, "addButton", element );
    return this;
  }

  /**
   * Adds checkbox
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {string} [options.label] - label of the checkbox
   * @param {boolean} [options.checked=false] - label of the checkbox
   * @param {callback} [callback] - callback triggered on change
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addCheckbox( "checkbox", { label: "Value 1", checked: true });

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "checkbox" ); // returns value of checkbox (true)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "checkbox", false ); // sets value of checkbox to false
  */

  addCheckbox( id, options, callback ) {
    const element = new Checkbox( this.body, options, callback );
    this.addToContent( id, options, callback, "addCheckbox", element );
    return this;
  }

  /**
   * Adds color input
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {string} [options.value=#000000] - default value
   * @param {callback} [callback] - callback triggered on change
   * @returns {module:Section} Section that component is added to

   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addColorInput( "color", { value: "#000000" } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "color" ); // returns value of input (”#000000”)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "color", "#FF0000" ); // sets value of input to ”#FF0000”
  */

  addColorInput( id, options = {}, callback ) {
    options.value = options.value || "#000000";
    const element = new Input( this.body, "color", options, callback );
    this.addToContent( id, options, callback, "addColorInput", element );
    return this;
  }

  /**
   * Adds date input
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {string} [options.value] - default value of format (yyyy-mm-dd)
   * @param {number} [options.min] - minimal value
   * @param {number} [options.max] - maximal value
   * @param {string} [options.placeholder] - placeholder of input
   * @param {callback} [callback] - callback triggered on change
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addDateInput( "date", { value: "1999-01-10" } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "date" ); // returns value of input (”1999-01-10”)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "date", "2017-02-20" ); // sets value of input to ”2017-02-20”
  */

  addDateInput( id, options, callback ) {
    const element = new Input( this.body, "date", options, callback );
    this.addToContent( id, options, callback, "addDateInput", element );
    return this;
  }


  /**
   * Adds datetime input
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {string} [options.value] - default value of format (yyyy-mm-ddThh:mm:ss)
   * @param {number} [options.min] - minimal value
   * @param {number} [options.max] - maximal value
   * @param {string} [options.placeholder] - placeholder of input
   * @param {callback} [callback] - callback triggered on change
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addDateTimeInput( "datetime", { value: "1999-01-10T12:31:00" } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "datetime" ); // returns value of input (”1999-01-10T12:31:00”)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "datetime", "2017-02-20T13:02:02" ); // sets value of input to ”2017-02-20T13:02:02”
  */

  addDateTimeInput( id, options, callback ) {
    const element = new Input( this.body, "datetime-local", options, callback );
    this.addToContent( id, options, callback, "addDateTimeInput", element );
    return this;
  }

  /**
   * Adds dropdown
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {array} [options.options] - options to be displayed
   * @param {number} [options.value] - index of option to be selected on startup
   * @param {callback} [callback] - callback triggered on change
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addDropdown( "dropdown", { options: ["Dropdown option #1", "Dropdown option #2"] } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "dropdown" ); // returns selected value (”Dropdown option #1”)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "dropdown", 1 ); // sets index of dropdown to 1, so select says ”Dropdown option #2”
  */

  addDropdown( id, options, callback ) {
    const element = new Dropdown( this.body, options, callback );
    this.addToContent( id, options, callback, "addDropdown", element );
    return this;
  }

  /**
   * Adds header
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {string} [options.value] - text displayed as header
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addHeader( "header", { value: "Header" } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "header" ); // returns text of header (”Header”)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "header", "header 2" ); // sets text of header to ”header 2”
  */

  addHeader( id, options ) {
    const element = new Header( this.body, options, "h" );
    this.addToContent( id, options, null, "addHeader", element );
    return this;
  }

  /**
   * Adds HTML container
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {string} [options.value] - HTML to be inserted into container
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addHTML( "html", { value: "<strong>HTML</strong>" } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "html" ); // returns HTML of component (”<strong>HTML</strong>”)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "html", "<em>HTML 2</em>" ); // sets HTML of component to ”<em>HTML 2</em>”
  */

  addHTML( id, options ) {
    const element = new HTML( this.body, options );
    this.addToContent( id, options, null, "addHTML", element );
    return this;
  }

  /**
   * Adds number input
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {number} [options.value] - default value
   * @param {number} [options.min] - minimal value
   * @param {number} [options.max] - maximal value
   * @param {number} [options.step] - step of values
   * @param {string} [options.placeholder] - placeholder of input
   * @param {callback} [callback] - callback triggered on change
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addNumberInput( "input-number", { value: Math.round( Math.PI * 100 ) } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "input-number" ); // returns value of component (314)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "input-number", 13 ); // sets value of component to 13
  */

  addNumberInput( id, options, callback ) {
    const element = new Input( this.body, "number", options, callback );
    this.addToContent( id, options, callback, "addNumberInput", element );
    return this;
  }

  /**
   * Adds paragrpah
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {string} [options.value] - text displayed as paragrpah
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addParagraph( "paragraph", { value: "Paragraph" } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "paragraph" ); // returns text of paragraph (”Paragraph”)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "paragraph", "Paragraph 2" ); // sets text of paragraph to ”Paragraph 2”
  */

  addParagraph( id, options ) {
    const element = new Header( this.body, options, "p" );
    this.addToContent( id, options, null, "addParagraph", element );
    return this;
  }

  /**
   * Adds password input
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {string} [options.value] - default value
   * @param {string} [options.placeholder] - placeholder of input
   * @param {callback} [callback] - callback triggered on change
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addPasswordInput( "input-password", { value: "admin1", placeholder: "Insert password" } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "input-password" ); // returns value of component (”admin1”)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "input-password", "Password123" ); // sets value of component to ”Password123”
  */

  addPasswordInput( id, options = {}, callback ) {
    options.value = options.value || "";
    const element = new Input( this.body, "password", options, callback );
    this.addToContent( id, options, callback, "addPasswordInput", element );
    return this;
  }

  /**
   * Adds progress bar
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {string} [options.value=0] - default value
   * @param {number} [options.min=0] - minimal value
   * @param {number} [options.max=1] - maximal value
   * @param {boolean} [options.indeterminate=false] - determines wheter progress bar should be indeterminate on startup. To toggle it after startup use {@link module:Panel#toggleIndeterminate}
   * @param {callback} [callback] - callback triggered on change
   * @see module:Panel#toggleIndeterminate
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addProgress( "progress", { value: 0.33, indeterminate: true } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "progress" ); // returns value of component (0.33)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "progress", 1 ); // sets value of component to 1
  */

  addProgress( id, options ) {
    const element = new Progress( this.body, options );
    this.addToContent( id, options, null, "addProgress", element );
    return this;
  }

  /**
   * Adds multiple radio inputs
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {string[]} [options.values] - array of labels for inputs
   * @param {number} [options.checkedIndex] - index of radio checked by default
   * @param {callback} [callback] - callback triggered on change of any radio
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addRadio( "radio", { values: ["Value 1", "Value 2"], checkedIndex: 0 } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "radio" ); // returns index of checked radio

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "radio", 1 ); // sets index of checked radio to 1
  */

  addRadio( id, options, callback ) {
    const element = new Radio( this.body, this.index, options, callback );
    this.addToContent( id, options, callback, "addRadio", element );
    return this;
  }

  /**
   * Adds slider
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {number} [options.value=50] - default value
   * @param {number} [options.min=0] - minimal value
   * @param {number} [options.max=100] - maximal value
   * @param {number} [options.step=1] - step of values
   * @param {callback} [callback] - callback triggered on change
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addSlider( "slider", { value: 25, min: 0, max: 1000 } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "slider" ); // returns value of slider (25)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "slider", 98 ); // sets value of slider to 98
  */

  addSlider( id, options, callback ) {
    const element = new Slider( this.body, options, callback );
    this.addToContent( id, options, callback, "addSlider", element );
    return this;
  }

  /**
   * Adds textarea
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {number} [options.value] - default value
   * @param {string} [options.placeholder] - placeholder of input
   * @param {callback} [callback] - callback triggered on change
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addTextarea( "textarea", { value: "my text" } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "textarea" ); // returns value of textarea (”my text”)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "textarea", "my text 2" ); // sets value of textarea to ”2017-02-20”
  */

  addTextarea( id, options, callback ) {
    const element = new Textarea( this.body, options, callback );
    this.addToContent( id, options, callback, "addTextarea", element );
    return this;
  }

  /**
   * Adds text input
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {string} [options.value] - default value
   * @param {string} [options.placeholder] - placeholder of input
   * @param {callback} [callback] - callback triggered on change
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addTextInput( "text-input", { value: "my input" } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "text-input" ); // returns value of textarea (”my input”)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "text-input", "my input 2" ); // sets value of textarea to ”my input 2”
  */

  addTextInput( id, options = {}, callback ) {
    options.value = options.value || "";
    const element = new Input( this.body, "text", options, callback );
    this.addToContent( id, options, callback, "addTextInput", element );
    return this;
  }

  /**
   * Adds time input
   * @param {string} [id] - id of the component
   * @param {object} [options] - options for component
   * @param {string} [options.value] - default value of format (hh:mm:ss)
   * @param {number} [options.min] - minimal value
   * @param {number} [options.max] - maximal value
   * @param {string} [options.placeholder] - placeholder of input
   * @param {callback} [callback] - callback triggered on change
   * @returns {module:Section} Section that component is added to
   * @example
   * const panel = new EasySettings();
   * panel.addSection()
   *   .addDateTimeInput( "time", { value: "12:31:00" } );

   * @example
   * // See => [Panel.getValue()]{@link module:Panel#getValue}
   * panel.getValue( "time" ); // returns value of input (”12:31:00”)

   * @example
   * // See => [Panel.setValue()]{@link module:Panel#setValue}
   * panel.setValue( "time", "13:02:02" ); // sets value of input to ”13:02:02”
  */

  addTimeInput( id, options, callback ) {
    const element = new Input( this.body, "time", options, callback );
    this.addToContent( id, options, callback, "addTimeInput", element );
    return this;
  }
}

/**
 * @callback callback
 * @param {string|number} value - value of component
 * @example
 * const panel = new EasySettings();
 * panel.addSection()
 *   .addNumberInput( "input-number", { value: Math.round( Math.random() * 100 ) }, ( v ) => {
 *     console.log( v ); // logs value of input every time it changes
 *   } );
*/
