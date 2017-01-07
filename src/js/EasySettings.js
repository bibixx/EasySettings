import EasySettingsMovementManager from "./actions/EasySettingsMovementManager";
import Section from "./sections/Section";

let zIndex = 0;

export default class EasySettings {
  static getCurrentZIndex() {
    return zIndex++;
  }

  constructor(x, y, title) {
    this.container = document.createElement("div");
    this.header = document.createElement("header");
    this.body = document.createElement("main");
    this.sections = [];
    this.elements = {};
    this.title = title;
    this.pos = {
      x: x || 8,
      y: y || 8,
    };

    this.movementManager = new EasySettingsMovementManager(this.container, this.header);

    this.createSettingsContainer();
  }

  createSettingsHeader() {
    const $header = this.header;
    const $title = document.createElement("span");

    $title.innerHTML = this.title || "EasySettings Panel";
    $header.className = "es-header";
    $header.appendChild($title);

    this.container.appendChild($header);
  }

  createSettingsBody() {
    const $body = this.body;

    $body.className = "es-body";

    this.container.appendChild($body);
  }

  createSettingsContainer() {
    const $container = this.container;
    $container.className = "es-container";

    this.createSettingsHeader();
    this.createSettingsBody();

    document.body.insertBefore($container, document.body.firstChild);

    $container.style.left = `${this.pos.x}px`;
    $container.style.top = `${this.pos.y}px`;
  }

  /* Section Creation */
  createSection() {
    const newSection = new Section(this.body, this.elements, this.sections.length);
    this.sections.push(newSection);
    return newSection;
  }

  getValue(id) {
    return this.elements[id].getValue();
  }
}

window.EasySettings = EasySettings;
