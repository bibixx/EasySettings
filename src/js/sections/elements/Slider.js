import DOMUtils from "../../utils/DOMUtils";
import SliderMovementManager from "./SliderMovementManager";

export default class Slider {
  constructor(section, value, min, max, callback) {
    this.element = null;
    this.section = section;
    this.value = value;
    this.min = min;
    this.max = max;
    this.callback = callback || null;
    this.SliderMovementManager = null;
    this.create();
  }

  create() {
    const $inputGroup = DOMUtils.createElement("span", this.section, { className: "es-body__section__slider-group" });

    if (this.min === null) {
      this.min = 0;
    }

    if (this.max === null) {
      this.max = 100;
    }

    const $input = DOMUtils.createElement("input", $inputGroup, { className: "es-body__section__slider" }, { type: "range", min: this.min, max: this.max, value: this.value });

    const $track = DOMUtils.createElement("div", $inputGroup, { className: "es-body__section__slider-track" }); // Track
    const $trackValue = DOMUtils.createElement("div", $track, { className: "es-body__section__slider-track__slider-value" }); // Track
    const $handle = DOMUtils.createElement("button", $track, { className: "es-body__section__slider-track__slider-handle" }); // Track

    this.SliderMovementManager = new SliderMovementManager($handle, $track, $input, $trackValue);

    this.SliderMovementManager.setHandleValue(this.value);

    $handle.addEventListener("keydown", (e) => {
      if (e.keyCode === 39) {
        this.element.value++;
        DOMUtils.dispatchEvent(this.element, "input");
      }

      if (e.keyCode === 37) {
        this.element.value--;
        DOMUtils.dispatchEvent(this.element, "input");
      }
    });

    this.element = $input;

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
    this.element.value = val;
    this.SliderMovementManager.setHandleValue();
  }
}
