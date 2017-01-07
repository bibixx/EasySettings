export default class Dropdown {
  constructor(section, options, callback) {
    this.element = null;
    this.section = section;
    this.options = options || [];
    this.callback = callback || null;
    this.create();
  }

  create() {
    const $dropdown = document.createElement("select");
    $dropdown.className = "es-body__section__dropdown";
    this.options.forEach((v) => {
      const $option = document.createElement("option");
      $option.innerHTML = v;
      $dropdown.appendChild($option);
    });
    this.element = $dropdown;
    this.section.appendChild($dropdown);

    this.bindCallback();
  }

  bindCallback() {
    this.element.addEventListener("change", () => {
      this.callback(this.getValue());
    });
  }

  getValue() {
    return this.element.value;
  }
}
