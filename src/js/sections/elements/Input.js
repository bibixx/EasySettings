import DOMUtils from "../../utils/DOMUtils";

export default class Input {
  constructor(section, type, value, callback, addOptions) {
    this.element = null;
    this.section = section;
    this.value = value;
    this.type = type;
    this.callback = callback || null;
    this.addOptions = addOptions;
    this.additionalElement = null;
    this.create();
  }

  create() {
    const $inputGroup = DOMUtils.createElement("span", this.section, { className: "es-body__section__input-group" });
    let $input = null;

    if (this.type === "color") {
      this.additionalElement = DOMUtils.createElement("label", $inputGroup, { className: "es-body__section__label-color" }); // Color label
      this.additionalElement.style.background = this.value;

      if (this.value.match(/^#[abcdef0123456789]{3}$/i)) {
        this.value = `#${this.value[1]}${this.value[1]}${this.value[2]}${this.value[2]}${this.value[3]}${this.value[3]}`;
      }

      $input = DOMUtils.createElement("input", this.additionalElement, { className: `es-body__section__input es-body__section__input--${this.type}`, value: this.value }, { type: this.type });
    } else {
      $input = DOMUtils.createElement("input", $inputGroup, { className: `es-body__section__input es-body__section__input--${this.type}`, value: this.value }, { type: this.type });
    }


    if (this.addOptions) {
      if (this.addOptions.min !== null) {
        $input.setAttribute("min", this.addOptions.min);
      }

      if (this.addOptions.min !== null) {
        $input.setAttribute("max", this.addOptions.max);
      }

      if (this.addOptions.placeholder !== null) {
        $input.placeholder = this.addOptions.placeholder;
      }
    }

    if (this.type !== "color") {
      this.additionalElement = DOMUtils.createElement("span", $inputGroup, { className: "es-body__section__input-underline" }); // Underline
    }

    this.element = $input;

    this.bindCallback();
  }

  bindCallback() {
    this.element.addEventListener("input", () => {
      if (this.type === "color") {
        this.additionalElement.style.background = this.getValue();
      }

      this.callback(this.getValue());
    });
  }

  getValue() {
    if (this.addOptions) {
      if (this.addOptions.min !== null) {
        if (this.addOptions.min > this.element.value) {
          return this.addOptions.min;
        }
      }

      if (this.addOptions.max !== null) {
        if (this.addOptions.max < this.element.value) {
          return this.addOptions.max;
        }
      }
    }

    return this.element.value;
  }

  setValue(val) {
    this.element.value = val;
  }
}
