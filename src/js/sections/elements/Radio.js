export default class Radio {
  constructor(section, index, options, checkedIndex, callback) {
    this.element = null;
    this.radios = [];
    this.section = section;
    this.index = index;
    this.options = options || [];
    this.checkedIndex = checkedIndex;
    this.callback = callback || null;
    this.create();
  }

  create() {
    const $group = document.createElement("div");
    $group.className = "es-body__section__radio-group";
    this.options.forEach((v, i) => {
      const $label = document.createElement("label");
      $label.className = "es-body__section__label";

      const $labelIcon = document.createElement("span");
      $labelIcon.className = "es-body__section__label__icon";

      const $labelText = document.createElement("span");
      $labelText.innerHTML = v;

      const $radio = document.createElement("input");
      $radio.className = "es-body__section__checkbox";
      $radio.setAttribute("type", "radio");
      $radio.setAttribute("name", `EasySettingsPanel-${this.index}`);

      if (i === this.checkedIndex) {
        $radio.checked = true;
      }

      this.radios.push($radio);
      $label.appendChild($radio);
      $label.appendChild($labelIcon);
      $label.appendChild($labelText);
      $group.appendChild($label);
    });
    this.element = $group;
    this.section.appendChild($group);

    this.bindCallback();
  }

  bindCallback() {
    this.element.addEventListener("change", () => {
      this.callback(this.getValue());
    });
  }

  getValue() {
    let index = -1;
    this.radios.forEach((v, i) => {
      if (v.checked) {
        index = i;
      }
    });

    return index;
  }
}
