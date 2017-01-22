import DOMUtils from "./utils/DOMUtils";

import EasySettingsMovementManager from "./actions/EasySettingsMovementManager";
import Section from "./sections/Section";

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

    this.createSettingsContainer();

    this.movementManager = new EasySettingsMovementManager( this.container, this.header );
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

  /* Section Creation */
  createSection() {
    const newSection = new Section( this.body, this.elements, this.sections.length );
    this.sections.push( newSection );
    return newSection;
  }

  getValue( id ) {
    return this.elements[id].getValue();
  }

  setValue( id, value ) {
    this.elements[id].setValue( value );
  }

  toggleIndeterminate( id ) {
    this.elements[id].toggleIndeterminate();
  }
}

window.EasySettings = EasySettings;
