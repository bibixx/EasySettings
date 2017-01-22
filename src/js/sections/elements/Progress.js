import DOMUtils from "../../utils/DOMUtils";

export default class Progress {
  constructor(section, value, callback) {
    this.element = null;
    this.trackValue = null;
    this.section = section;
    this.value = Math.max(0, Math.min(value, 1));
    this.callback = callback || null;
    this.create();
  }

  create() {
    const $inputGroup = DOMUtils.createElement("span", this.section, { className: "es-body__section__progress-group" });

    const $input = DOMUtils.createElement("input", $inputGroup, { className: "es-body__section__progress" }, { type: "hidden", value: this.value });

    const $track = DOMUtils.createElement("div", $inputGroup, { className: "es-body__section__progress-track" }); // Track

    this.trackValue = DOMUtils.createElement("div", $track, { className: "es-body__section__slider-track__progress-value" }); // Track value

    this.trackValue.style.width = `${this.value * 100}%`;

    this.element = $input;
    this.track = $track;

    this.bindCallback();
  }

  bindCallback() {
    this.element.addEventListener("input", () => {
      this.callback(this.getValue());
      this.SliderMovementManager.setHandleValue();
    });
  }

  getValue() {
    return this.element.value;
  }

  setValue(val) {
    const value = Math.max(0, Math.min(val, 1));
    this.element.value = value;
    this.trackValue.style.width = `${value * 100}%`;
  }
}
