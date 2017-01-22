import DOMUtils from "../../utils/DOMUtils";

export default class HTML {
  constructor(section, value) {
    this.element = null;
    this.section = section;
    this.value = value;
    this.create();
  }

  create() {
    const $cont = DOMUtils.createElement("div", this.section, { className: "es-body__section__html", innerHTML: this.value });

    this.element = $cont;
  }

  getValue() {
    return this.element.innerHTML;
  }

  setValue(val) {
    this.element.innerHTML = val;
  }
}
