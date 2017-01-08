import DOMUtils from "../../utils/DOMUtils";

export default class Button {
  constructor(section, text, callback) {
    this.element = null;
    this.section = section;
    this.text = text;
    this.callback = callback || null;
    this.create();
  }

  create() {
    const $button = DOMUtils.createElement("button", this.section, { className: "es-body__section__button", innerHTML: this.text });

    this.element = $button;

    this.bindCallback();
  }

  bindCallback() {
    this.element.addEventListener("click", () => {
      this.callback(this.getValue());
    });
  }

  getValue() {
    return this.element.innerHTML;
  }

  setValue(val) {
    this.element.innerHTML = val;
  }
}
