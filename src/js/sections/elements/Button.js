export default class Button {
  constructor(section, text, callback) {
    this.element = null;
    this.section = section;
    this.text = text;
    this.callback = callback || null;
    this.create();
  }

  create() {
    const $button = document.createElement("button");
    $button.className = "es-body__section__button";
    $button.innerHTML = this.text;

    this.element = $button;
    this.section.appendChild($button);

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
}
