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

export default class Section {
  constructor( esBody, elements, index ) {
    this.esBody = esBody;
    this.body = null;
    this.elements = elements;
    this.index = index;
    this.create();
    return this;
  }

  create() {
    this.body = DOMUtils.createElement( "div", this.esBody, { className: "es-body__section" } );
  }

  addToContent( id, el ) {
    if ( id !== null ) {
      this.elements[id] = el;
    }
  }

  /* Adding certain elements */
  addHeader( id, text ) {
    const element = new Header( this.body, text, "h" );
    this.addToContent( id, element );
    return this;
  }

  addParagraph( id, text ) {
    const element = new Header( this.body, text, "p" );
    this.addToContent( id, element );
    return this;
  }

  addButton( id, text, callback ) {
    const element = new Button( this.body, text, callback );
    this.addToContent( id, element );
    return this;
  }

  addDropdown( id, options, callback ) {
    const element = new Dropdown( this.body, options, callback );
    this.addToContent( id, element );
    return this;
  }

  addCheckbox( id, label, checked, callback ) {
    const element = new Checkbox( this.body, label, checked, callback );
    this.addToContent( id, element );
    return this;
  }

  addRadio( id, label, checkedIndex, callback ) {
    const element = new Radio( this.body, this.index, label, checkedIndex, callback );
    this.addToContent( id, element );
    return this;
  }

  addColorInput( id, value, callback, addOptions ) {
    const element = new Input( this.body, "color", value, callback, addOptions );
    this.addToContent( id, element );
    return this;
  }

  addTextInput( id, value, callback, addOptions ) {
    const element = new Input( this.body, "text", value, callback, addOptions );
    this.addToContent( id, element );
    return this;
  }

  addPasswordInput( id, value, callback, addOptions ) {
    const element = new Input( this.body, "password", value, callback, addOptions );
    this.addToContent( id, element );
    return this;
  }

  addNumberInput( id, value, callback, addOptions ) {
    const element = new Input( this.body, "number", value, callback, addOptions );
    this.addToContent( id, element );
    return this;
  }

  addDateInput( id, value, callback, addOptions ) {
    const element = new Input( this.body, "date", value, callback, addOptions );
    this.addToContent( id, element );
    return this;
  }

  addTimeInput( id, value, callback, addOptions ) {
    const element = new Input( this.body, "time", value, callback, addOptions );
    this.addToContent( id, element );
    return this;
  }

  addDateTimeInput( id, value, callback, addOptions ) {
    const element = new Input( this.body, "datetime-local", value, callback, addOptions );
    this.addToContent( id, element );
    return this;
  }

  addTextarea( id, value, callback, addOptions ) {
    const element = new Textarea( this.body, value, callback, addOptions );
    this.addToContent( id, element );
    return this;
  }

  addSlider( id, value, callback, addOptions ) {
    const element = new Slider( this.body, value, callback, addOptions );
    this.addToContent( id, element );
    return this;
  }

  addProgress( id, value, addOptions ) {
    const element = new Progress( this.body, value, addOptions );
    this.addToContent( id, element );
    return this;
  }

  addHTML( id, value ) {
    const element = new HTML( this.body, value );
    this.addToContent( id, element );
    return this;
  }
}
