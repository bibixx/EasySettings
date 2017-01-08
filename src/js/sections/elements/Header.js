import DOMUtils from "../../utils/DOMUtils";

export default class Header {
  constructor(section, text) {
    this.element = null;
    this.section = section;
    this.text = text;
    this.create();
  }

  create() {
    const $header = DOMUtils.createElement("p", this.section, { className: "body__section__header", innerHTML: this.text });

    this.element = $header;
  }

  getValue() {
    return this.element.innerHTML;
  }

  setValue(val) {
    this.element.innerHTML = val;
  }
}
