export default class Input {
  constructor(section, type, value, callback) {
    this.element = null;
    this.section = section;
    this.value = value;
    this.type = type;
    this.callback = callback || null;
    this.create();
  }

  create() {
    const $inputGroup = document.createElement("span");
    $inputGroup.className = "es-body__section__input-group";

    const $input = document.createElement("input");
    $input.className = `es-body__section__input es-body__section__input--${this.type}`;
    $input.setAttribute("type", this.type);
    $input.value = this.value;

    const $under = document.createElement("span");
    $under.className = "es-body__section__input-underline";

    this.element = $input;
    $inputGroup.appendChild($input);
    $inputGroup.appendChild($under);
    this.section.appendChild($inputGroup);

    this.bindCallback();
  }

  bindCallback() {
    this.element.addEventListener("input", () => {
      this.callback(this.getValue());
    });
  }

  getValue() {
    return this.element.value;
  }
}
