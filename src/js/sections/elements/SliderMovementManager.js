import DOMUtils from "../../utils/DOMUtils";

export default class trackMovementManager {
  constructor(handle, track, input, trackValue) {
    // this.panel = panel;
    this.handle = handle;
    this.track = track;
    this.input = input;
    this.trackValue = trackValue;

    this.offset = 0;
    this.startPos = {
      x: 0,
      y: 0,
    };

    this.startPosOfPanel = {
      x: 8,
      y: 0,
    };

    this.handleMovement = this.handleMovement.bind(this);
    this.bindEvents();
  }

  bindEvents() {
    this.handle.addEventListener("mousedown", (e) => {
      this.startPos = {
        x: e.pageX,
        y: e.pageY,
      };

      const handleOffset = this.handle.getBoundingClientRect();
      const trackOffset = this.track.getBoundingClientRect();

      this.startPosOfPanel = {
        x: handleOffset.left - trackOffset.left,
      };

      document.addEventListener("mousemove", this.handleMovement);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", this.handleMovement);
      });
    });
  }

  handleMovement(e) {
    this.offset = this.startPosOfPanel.x + (e.pageX - this.startPos.x);
    if (this.offset < 0) {
      this.offset = 0;
    }

    if (this.offset > (this.track.offsetWidth - this.handle.offsetWidth)) {
      this.offset = this.track.offsetWidth - this.handle.offsetWidth;
    }

    this.minValueStyle();
    this.handle.style.left = `${this.offset}px`;

    this.setInputValue();
  }

  setInputValue() {
    const max = this.track.offsetWidth - this.handle.offsetWidth;

    const $inputMin = this.input.getAttribute("min") * 1;
    const $inputMax = this.input.getAttribute("max") - $inputMin;

    this.input.value = ($inputMax * (this.offset / max)) + $inputMin;

    DOMUtils.dispatchEvent(this.input, "input");
  }

  setHandleValue() {
    const max = this.track.offsetWidth - this.handle.offsetWidth;

    const $inputMin = this.input.getAttribute("min") * 1;
    const $inputMax = this.input.getAttribute("max") - $inputMin;

    this.trackValue.style.width = `${100 * ((this.input.value - $inputMin) / $inputMax)}%`;

    this.offset = max * ((this.input.value - $inputMin) / $inputMax);

    this.minValueStyle();
    this.handle.style.left = `${this.offset}px`;
  }

  minValueStyle() {
    const classes = this.handle.className.split(" ");
    const minValClass = "es-body__section__slider-track__slider-handle--min-value";
    const index = classes.indexOf(minValClass);
    if (this.offset <= 0) {
      if (index < 0) {
        classes.push(minValClass);
        this.handle.className = classes.join(" ");
      }
    } else if (index >= 0) {
      classes.splice(index, 1);
      this.handle.className = classes.join(" ");
    }
  }
}
