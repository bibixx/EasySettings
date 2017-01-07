export default class Header {
  constructor(section, text) {
    this.element = null;
    this.section = section;
    this.text = text;
    this.create();
  }

  create() {
    const $header = document.createElement("p");
    $header.className = "es-body__section__header";
    $header.innerHTML = this.text;

    this.element = $header;
    this.section.appendChild($header);
  }

  getValue() {
    return this.element.innerHTML;
  }
}
