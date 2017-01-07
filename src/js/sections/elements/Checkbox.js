export default class Checkbox {
  constructor(section, label, checked, callback) {
    this.element = null;
    this.section = section;
    this.label = label;
    this.callback = callback || null;
    this.checked = checked;
    this.create();
  }

  create() {
    const $label = document.createElement("label");
    $label.className = "es-body__section__label";

    const $labelIcon = document.createElement("span");
    $labelIcon.className = "es-body__section__label__icon";

    const $labelText = document.createElement("span");
    $labelText.className = "es-body__section__label__text";
    $labelText.innerHTML = this.label;

    const $checkbox = document.createElement("input");
    $checkbox.className = "es-body__section__checkbox";
    $checkbox.setAttribute("type", "checkbox");

    $checkbox.checked = this.checked;

    this.element = $checkbox;
    $label.appendChild($checkbox);
    $label.appendChild($labelIcon);
    $label.appendChild($labelText);
    this.section.appendChild($label);

    this.bindCallback();
  }

  bindCallback() {
    this.element.addEventListener("change", () => {
      this.callback(this.getValue());
    });
  }

  getValue() {
    return this.element.checked;
  }
}
