(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\EasySettings.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EasySettingsMovementManager = require("./actions/EasySettingsMovementManager");

var _EasySettingsMovementManager2 = _interopRequireDefault(_EasySettingsMovementManager);

var _Section = require("./sections/Section");

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var zIndex = 0;

var EasySettings = function () {
  _createClass(EasySettings, null, [{
    key: "getCurrentZIndex",
    value: function getCurrentZIndex() {
      return zIndex++;
    }
  }]);

  function EasySettings(x, y, title) {
    _classCallCheck(this, EasySettings);

    this.container = document.createElement("div");
    this.header = document.createElement("header");
    this.body = document.createElement("main");
    this.sections = [];
    this.elements = {};
    this.title = title;
    this.pos = {
      x: x || 8,
      y: y || 8
    };

    this.movementManager = new _EasySettingsMovementManager2.default(this.container, this.header);

    this.createSettingsContainer();
  }

  _createClass(EasySettings, [{
    key: "createSettingsHeader",
    value: function createSettingsHeader() {
      var $header = this.header;
      var $title = document.createElement("span");

      $title.innerHTML = this.title || "EasySettings Panel";
      $header.className = "es-header";
      $header.appendChild($title);

      this.container.appendChild($header);
    }
  }, {
    key: "createSettingsBody",
    value: function createSettingsBody() {
      var $body = this.body;

      $body.className = "es-body";

      this.container.appendChild($body);
    }
  }, {
    key: "createSettingsContainer",
    value: function createSettingsContainer() {
      var $container = this.container;
      $container.className = "es-container";

      this.createSettingsHeader();
      this.createSettingsBody();

      document.body.insertBefore($container, document.body.firstChild);

      $container.style.left = this.pos.x + "px";
      $container.style.top = this.pos.y + "px";
    }

    /* Section Creation */

  }, {
    key: "createSection",
    value: function createSection() {
      var newSection = new _Section2.default(this.body, this.elements, this.sections.length);
      this.sections.push(newSection);
      return newSection;
    }
  }, {
    key: "getValue",
    value: function getValue(id) {
      return this.elements[id].getValue();
    }
  }]);

  return EasySettings;
}();

exports.default = EasySettings;


window.EasySettings = EasySettings;

},{"./actions/EasySettingsMovementManager":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\actions\\EasySettingsMovementManager.js","./sections/Section":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\Section.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\actions\\EasySettingsMovementManager.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EasySettings = require("../EasySettings");

var _EasySettings2 = _interopRequireDefault(_EasySettings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EasySettingsMovementManager = function () {
  function EasySettingsMovementManager(panel, header) {
    _classCallCheck(this, EasySettingsMovementManager);

    this.panel = panel;
    this.header = header;
    this.startPos = {
      x: 0,
      y: 0
    };

    this.startPosOfPanel = {
      x: 8,
      y: 0
    };

    this.handleMovement = this.handleMovement.bind(this);
    this.bindEvents();
  }

  _createClass(EasySettingsMovementManager, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.header.addEventListener("mousedown", function (e) {
        _this.startPos = {
          x: e.pageX,
          y: e.pageY
        };

        var panelOffset = _this.panel.getBoundingClientRect();
        _this.startPosOfPanel = {
          x: panelOffset.left,
          y: panelOffset.top
        };

        _this.panel.style.zIndex = _EasySettings2.default.getCurrentZIndex();

        document.addEventListener("mousemove", _this.handleMovement);
        document.addEventListener("mouseup", function () {
          document.removeEventListener("mousemove", _this.handleMovement);
        });
      });
    }
  }, {
    key: "handleMovement",
    value: function handleMovement(e) {
      this.panel.style.left = this.startPosOfPanel.x + (e.pageX - this.startPos.x) + "px";
      this.panel.style.top = this.startPosOfPanel.y + (e.pageY - this.startPos.y) + "px";
    }
  }]);

  return EasySettingsMovementManager;
}();

exports.default = EasySettingsMovementManager;

},{"../EasySettings":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\EasySettings.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\Section.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Header = require("./elements/Header");

var _Header2 = _interopRequireDefault(_Header);

var _Button = require("./elements/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Dropdown = require("./elements/Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Checkbox = require("./elements/Checkbox");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = require("./elements/Radio");

var _Radio2 = _interopRequireDefault(_Radio);

var _Input = require("./elements/Input");

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Section = function () {
  function Section(esBody, elements, index) {
    _classCallCheck(this, Section);

    this.esBody = esBody;
    this.body = document.createElement("div");
    this.elements = elements;
    this.index = index;
    this.create();
    return this;
  }

  _createClass(Section, [{
    key: "create",
    value: function create() {
      this.body.className = "es-body__section";
      this.esBody.appendChild(this.body);
    }
  }, {
    key: "addToContent",
    value: function addToContent(id, el) {
      if (id !== null) {
        this.elements[id] = el;
      }
    }

    /* Adding certain elements */

  }, {
    key: "addHeader",
    value: function addHeader(id, text) {
      var element = new _Header2.default(this.body, text);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addButton",
    value: function addButton(id, text, callback) {
      var element = new _Button2.default(this.body, text, callback);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addDropdown",
    value: function addDropdown(id, options, callback) {
      var element = new _Dropdown2.default(this.body, options, callback);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addCheckbox",
    value: function addCheckbox(id, label, checked, callback) {
      var element = new _Checkbox2.default(this.body, label, checked, callback);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addRadio",
    value: function addRadio(id, label, checkedIndex, callback) {
      var element = new _Radio2.default(this.body, this.index, label, checkedIndex, callback);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addTextInput",
    value: function addTextInput(id, value, callback) {
      var element = new _Input2.default(this.body, "text", value, callback);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addPasswordInput",
    value: function addPasswordInput(id, value, callback) {
      var element = new _Input2.default(this.body, "password", value, callback);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addNumberInput",
    value: function addNumberInput(id, value, callback) {
      var element = new _Input2.default(this.body, "number", value, callback);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addDateInput",
    value: function addDateInput(id, value, callback) {
      var element = new _Input2.default(this.body, "date", value, callback);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addTimeInput",
    value: function addTimeInput(id, value, callback) {
      var element = new _Input2.default(this.body, "time", value, callback);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addDateTimeInput",
    value: function addDateTimeInput(id, value, callback) {
      var element = new _Input2.default(this.body, "datetime-local", value, callback);
      this.addToContent(id, element);
      return this;
    }
  }]);

  return Section;
}();

exports.default = Section;

},{"./elements/Button":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Button.js","./elements/Checkbox":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Checkbox.js","./elements/Dropdown":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Dropdown.js","./elements/Header":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Header.js","./elements/Input":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Input.js","./elements/Radio":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Radio.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Button.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = function () {
  function Button(section, text, callback) {
    _classCallCheck(this, Button);

    this.element = null;
    this.section = section;
    this.text = text;
    this.callback = callback || null;
    this.create();
  }

  _createClass(Button, [{
    key: "create",
    value: function create() {
      var $button = document.createElement("button");
      $button.className = "es-body__section__button";
      $button.innerHTML = this.text;

      this.element = $button;
      this.section.appendChild($button);

      this.bindCallback();
    }
  }, {
    key: "bindCallback",
    value: function bindCallback() {
      var _this = this;

      this.element.addEventListener("click", function () {
        _this.callback(_this.getValue());
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.element.innerHTML;
    }
  }]);

  return Button;
}();

exports.default = Button;

},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Checkbox.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Checkbox = function () {
  function Checkbox(section, label, checked, callback) {
    _classCallCheck(this, Checkbox);

    this.element = null;
    this.section = section;
    this.label = label;
    this.callback = callback || null;
    this.checked = checked;
    this.create();
  }

  _createClass(Checkbox, [{
    key: "create",
    value: function create() {
      var $label = document.createElement("label");
      $label.className = "es-body__section__label";

      var $labelIcon = document.createElement("span");
      $labelIcon.className = "es-body__section__label__icon";

      var $labelText = document.createElement("span");
      $labelText.className = "es-body__section__label__text";
      $labelText.innerHTML = this.label;

      var $checkbox = document.createElement("input");
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
  }, {
    key: "bindCallback",
    value: function bindCallback() {
      var _this = this;

      this.element.addEventListener("change", function () {
        _this.callback(_this.getValue());
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.element.checked;
    }
  }]);

  return Checkbox;
}();

exports.default = Checkbox;

},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Dropdown.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dropdown = function () {
  function Dropdown(section, options, callback) {
    _classCallCheck(this, Dropdown);

    this.element = null;
    this.section = section;
    this.options = options || [];
    this.callback = callback || null;
    this.create();
  }

  _createClass(Dropdown, [{
    key: "create",
    value: function create() {
      var $dropdown = document.createElement("select");
      $dropdown.className = "es-body__section__dropdown";
      this.options.forEach(function (v) {
        var $option = document.createElement("option");
        $option.innerHTML = v;
        $dropdown.appendChild($option);
      });
      this.element = $dropdown;
      this.section.appendChild($dropdown);

      this.bindCallback();
    }
  }, {
    key: "bindCallback",
    value: function bindCallback() {
      var _this = this;

      this.element.addEventListener("change", function () {
        _this.callback(_this.getValue());
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.element.value;
    }
  }]);

  return Dropdown;
}();

exports.default = Dropdown;

},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Header.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function () {
  function Header(section, text) {
    _classCallCheck(this, Header);

    this.element = null;
    this.section = section;
    this.text = text;
    this.create();
  }

  _createClass(Header, [{
    key: "create",
    value: function create() {
      var $header = document.createElement("p");
      $header.className = "es-body__section__header";
      $header.innerHTML = this.text;

      this.element = $header;
      this.section.appendChild($header);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.element.innerHTML;
    }
  }]);

  return Header;
}();

exports.default = Header;

},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Input.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {
  function Input(section, type, value, callback) {
    _classCallCheck(this, Input);

    this.element = null;
    this.section = section;
    this.value = value;
    this.type = type;
    this.callback = callback || null;
    this.create();
  }

  _createClass(Input, [{
    key: "create",
    value: function create() {
      var $inputGroup = document.createElement("span");
      $inputGroup.className = "es-body__section__input-group";

      var $input = document.createElement("input");
      $input.className = "es-body__section__input es-body__section__input--" + this.type;
      $input.setAttribute("type", this.type);
      $input.value = this.value;

      var $under = document.createElement("span");
      $under.className = "es-body__section__input-underline";

      this.element = $input;
      $inputGroup.appendChild($input);
      $inputGroup.appendChild($under);
      this.section.appendChild($inputGroup);

      this.bindCallback();
    }
  }, {
    key: "bindCallback",
    value: function bindCallback() {
      var _this = this;

      this.element.addEventListener("input", function () {
        _this.callback(_this.getValue());
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.element.value;
    }
  }]);

  return Input;
}();

exports.default = Input;

},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Radio.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Radio = function () {
  function Radio(section, index, options, checkedIndex, callback) {
    _classCallCheck(this, Radio);

    this.element = null;
    this.radios = [];
    this.section = section;
    this.index = index;
    this.options = options || [];
    this.checkedIndex = checkedIndex;
    this.callback = callback || null;
    this.create();
  }

  _createClass(Radio, [{
    key: "create",
    value: function create() {
      var _this = this;

      var $group = document.createElement("div");
      $group.className = "es-body__section__radio-group";
      this.options.forEach(function (v, i) {
        var $label = document.createElement("label");
        $label.className = "es-body__section__label";

        var $labelIcon = document.createElement("span");
        $labelIcon.className = "es-body__section__label__icon";

        var $labelText = document.createElement("span");
        $labelText.innerHTML = v;

        var $radio = document.createElement("input");
        $radio.className = "es-body__section__checkbox";
        $radio.setAttribute("type", "radio");
        $radio.setAttribute("name", "EasySettingsPanel-" + _this.index);

        if (i === _this.checkedIndex) {
          $radio.checked = true;
        }

        _this.radios.push($radio);
        $label.appendChild($radio);
        $label.appendChild($labelIcon);
        $label.appendChild($labelText);
        $group.appendChild($label);
      });
      this.element = $group;
      this.section.appendChild($group);

      this.bindCallback();
    }
  }, {
    key: "bindCallback",
    value: function bindCallback() {
      var _this2 = this;

      this.element.addEventListener("change", function () {
        _this2.callback(_this2.getValue());
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var index = -1;
      this.radios.forEach(function (v, i) {
        if (v.checked) {
          index = i;
        }
      });

      return index;
    }
  }]);

  return Radio;
}();

exports.default = Radio;

},{}]},{},["C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\EasySettings.js"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxFYXN5U2V0dGluZ3MuanMiLCJzcmNcXGpzXFxhY3Rpb25zXFxFYXN5U2V0dGluZ3NNb3ZlbWVudE1hbmFnZXIuanMiLCJzcmNcXGpzXFxzZWN0aW9uc1xcU2VjdGlvbi5qcyIsInNyY1xcanNcXHNlY3Rpb25zXFxlbGVtZW50c1xcQnV0dG9uLmpzIiwic3JjXFxqc1xcc2VjdGlvbnNcXGVsZW1lbnRzXFxDaGVja2JveC5qcyIsInNyY1xcanNcXHNlY3Rpb25zXFxlbGVtZW50c1xcRHJvcGRvd24uanMiLCJzcmNcXGpzXFxzZWN0aW9uc1xcZWxlbWVudHNcXEhlYWRlci5qcyIsInNyY1xcanNcXHNlY3Rpb25zXFxlbGVtZW50c1xcSW5wdXQuanMiLCJzcmNcXGpzXFxzZWN0aW9uc1xcZWxlbWVudHNcXFJhZGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQUksU0FBUyxDQUFiOztJQUVxQixZOzs7dUNBQ087QUFDeEIsYUFBTyxRQUFQO0FBQ0Q7OztBQUVELHdCQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUssU0FBTCxHQUFpQixTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7QUFDQSxTQUFLLE1BQUwsR0FBYyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLFNBQUssSUFBTCxHQUFZLFNBQVMsYUFBVCxDQUF1QixNQUF2QixDQUFaO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLFNBQUssR0FBTCxHQUFXO0FBQ1QsU0FBRyxLQUFLLENBREM7QUFFVCxTQUFHLEtBQUs7QUFGQyxLQUFYOztBQUtBLFNBQUssZUFBTCxHQUF1Qiww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QkFFVTtBQUNULFVBQUksUUFBUSxDQUFDLENBQWI7QUFDQSxXQUFLLE1BQUwsQ0FBWSxPQUFaLENBQW9CLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtBQUM1QixZQUFJLEVBQUUsT0FBTixFQUFlO0FBQ2Isa0JBQVEsQ0FBUjtBQUNEO0FBQ0YsT0FKRDs7QUFNQSxhQUFPLEtBQVA7QUFDRDs7Ozs7O2tCQTdEa0IsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgRWFzeVNldHRpbmdzTW92ZW1lbnRNYW5hZ2VyIGZyb20gXCIuL2FjdGlvbnMvRWFzeVNldHRpbmdzTW92ZW1lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9zZWN0aW9ucy9TZWN0aW9uXCI7XG5cbmxldCB6SW5kZXggPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFYXN5U2V0dGluZ3Mge1xuICBzdGF0aWMgZ2V0Q3VycmVudFpJbmRleCgpIHtcbiAgICByZXR1cm4gekluZGV4Kys7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih4LCB5LCB0aXRsZSkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgdGhpcy5zZWN0aW9ucyA9IFtdO1xuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5wb3MgPSB7XG4gICAgICB4OiB4IHx8IDgsXG4gICAgICB5OiB5IHx8IDgsXG4gICAgfTtcblxuICAgIHRoaXMubW92ZW1lbnRNYW5hZ2VyID0gbmV3IEVhc3lTZXR0aW5nc01vdmVtZW50TWFuYWdlcih0aGlzLmNvbnRhaW5lciwgdGhpcy5oZWFkZXIpO1xuXG4gICAgdGhpcy5jcmVhdGVTZXR0aW5nc0NvbnRhaW5lcigpO1xuICB9XG5cbiAgY3JlYXRlU2V0dGluZ3NIZWFkZXIoKSB7XG4gICAgY29uc3QgJGhlYWRlciA9IHRoaXMuaGVhZGVyO1xuICAgIGNvbnN0ICR0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgJHRpdGxlLmlubmVySFRNTCA9IHRoaXMudGl0bGUgfHwgXCJFYXN5U2V0dGluZ3MgUGFuZWxcIjtcbiAgICAkaGVhZGVyLmNsYXNzTmFtZSA9IFwiZXMtaGVhZGVyXCI7XG4gICAgJGhlYWRlci5hcHBlbmRDaGlsZCgkdGl0bGUpO1xuXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoJGhlYWRlcik7XG4gIH1cblxuICBjcmVhdGVTZXR0aW5nc0JvZHkoKSB7XG4gICAgY29uc3QgJGJvZHkgPSB0aGlzLmJvZHk7XG5cbiAgICAkYm9keS5jbGFzc05hbWUgPSBcImVzLWJvZHlcIjtcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKCRib2R5KTtcbiAgfVxuXG4gIGNyZWF0ZVNldHRpbmdzQ29udGFpbmVyKCkge1xuICAgIGNvbnN0ICRjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAkY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZXMtY29udGFpbmVyXCI7XG5cbiAgICB0aGlzLmNyZWF0ZVNldHRpbmdzSGVhZGVyKCk7XG4gICAgdGhpcy5jcmVhdGVTZXR0aW5nc0JvZHkoKTtcblxuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKCRjb250YWluZXIsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG5cbiAgICAkY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHt0aGlzLnBvcy54fXB4YDtcbiAgICAkY29udGFpbmVyLnN0eWxlLnRvcCA9IGAke3RoaXMucG9zLnl9cHhgO1xuICB9XG5cbiAgLyogU2VjdGlvbiBDcmVhdGlvbiAqL1xuICBjcmVhdGVTZWN0aW9uKCkge1xuICAgIGNvbnN0IG5ld1NlY3Rpb24gPSBuZXcgU2VjdGlvbih0aGlzLmJvZHksIHRoaXMuZWxlbWVudHMsIHRoaXMuc2VjdGlvbnMubGVuZ3RoKTtcbiAgICB0aGlzLnNlY3Rpb25zLnB1c2gobmV3U2VjdGlvbik7XG4gICAgcmV0dXJuIG5ld1NlY3Rpb247XG4gIH1cblxuICBnZXRWYWx1ZShpZCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzW2lkXS5nZXRWYWx1ZSgpO1xuICB9XG59XG5cbndpbmRvdy5FYXN5U2V0dGluZ3MgPSBFYXN5U2V0dGluZ3M7XG4iLCJpbXBvcnQgRWFzeVNldHRpbmdzIGZyb20gXCIuLi9FYXN5U2V0dGluZ3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWFzeVNldHRpbmdzTW92ZW1lbnRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IocGFuZWwsIGhlYWRlcikge1xuICAgIHRoaXMucGFuZWwgPSBwYW5lbDtcbiAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgICB0aGlzLnN0YXJ0UG9zID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuc3RhcnRQb3NPZlBhbmVsID0ge1xuICAgICAgeDogOCxcbiAgICAgIHk6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlTW92ZW1lbnQgPSB0aGlzLmhhbmRsZU1vdmVtZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIHRoaXMuaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuc3RhcnRQb3MgPSB7XG4gICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgIHk6IGUucGFnZVksXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwYW5lbE9mZnNldCA9IHRoaXMucGFuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLnN0YXJ0UG9zT2ZQYW5lbCA9IHtcbiAgICAgICAgeDogcGFuZWxPZmZzZXQubGVmdCxcbiAgICAgICAgeTogcGFuZWxPZmZzZXQudG9wLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5wYW5lbC5zdHlsZS56SW5kZXggPSBFYXN5U2V0dGluZ3MuZ2V0Q3VycmVudFpJbmRleCgpO1xuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZW1lbnQpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuaGFuZGxlTW92ZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVNb3ZlbWVudChlKSB7XG4gICAgdGhpcy5wYW5lbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5zdGFydFBvc09mUGFuZWwueCArIChlLnBhZ2VYIC0gdGhpcy5zdGFydFBvcy54KX1weGA7XG4gICAgdGhpcy5wYW5lbC5zdHlsZS50b3AgPSBgJHt0aGlzLnN0YXJ0UG9zT2ZQYW5lbC55ICsgKGUucGFnZVkgLSB0aGlzLnN0YXJ0UG9zLnkpfXB4YDtcbiAgfVxufVxuIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9lbGVtZW50cy9IZWFkZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vZWxlbWVudHMvQnV0dG9uXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4vZWxlbWVudHMvRHJvcGRvd25cIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9lbGVtZW50cy9DaGVja2JveFwiO1xuaW1wb3J0IFJhZGlvIGZyb20gXCIuL2VsZW1lbnRzL1JhZGlvXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vZWxlbWVudHMvSW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGVzQm9keSwgZWxlbWVudHMsIGluZGV4KSB7XG4gICAgdGhpcy5lc0JvZHkgPSBlc0JvZHk7XG4gICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5ib2R5LmNsYXNzTmFtZSA9IFwiZXMtYm9keV9fc2VjdGlvblwiO1xuICAgIHRoaXMuZXNCb2R5LmFwcGVuZENoaWxkKHRoaXMuYm9keSk7XG4gIH1cblxuICBhZGRUb0NvbnRlbnQoaWQsIGVsKSB7XG4gICAgaWYgKGlkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzW2lkXSA9IGVsO1xuICAgIH1cbiAgfVxuXG4gIC8qIEFkZGluZyBjZXJ0YWluIGVsZW1lbnRzICovXG4gIGFkZEhlYWRlcihpZCwgdGV4dCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgSGVhZGVyKHRoaXMuYm9keSwgdGV4dCk7XG4gICAgdGhpcy5hZGRUb0NvbnRlbnQoaWQsIGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQnV0dG9uKGlkLCB0ZXh0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQnV0dG9uKHRoaXMuYm9keSwgdGV4dCwgY2FsbGJhY2spO1xuICAgIHRoaXMuYWRkVG9Db250ZW50KGlkLCBlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZERyb3Bkb3duKGlkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgRHJvcGRvd24odGhpcy5ib2R5LCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgdGhpcy5hZGRUb0NvbnRlbnQoaWQsIGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ2hlY2tib3goaWQsIGxhYmVsLCBjaGVja2VkLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgQ2hlY2tib3godGhpcy5ib2R5LCBsYWJlbCwgY2hlY2tlZCwgY2FsbGJhY2spO1xuICAgIHRoaXMuYWRkVG9Db250ZW50KGlkLCBlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZFJhZGlvKGlkLCBsYWJlbCwgY2hlY2tlZEluZGV4LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgUmFkaW8odGhpcy5ib2R5LCB0aGlzLmluZGV4LCBsYWJlbCwgY2hlY2tlZEluZGV4LCBjYWxsYmFjayk7XG4gICAgdGhpcy5hZGRUb0NvbnRlbnQoaWQsIGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkVGV4dElucHV0KGlkLCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IElucHV0KHRoaXMuYm9keSwgXCJ0ZXh0XCIsIHZhbHVlLCBjYWxsYmFjayk7XG4gICAgdGhpcy5hZGRUb0NvbnRlbnQoaWQsIGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkUGFzc3dvcmRJbnB1dChpZCwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBJbnB1dCh0aGlzLmJvZHksIFwicGFzc3dvcmRcIiwgdmFsdWUsIGNhbGxiYWNrKTtcbiAgICB0aGlzLmFkZFRvQ29udGVudChpZCwgZWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGROdW1iZXJJbnB1dChpZCwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBJbnB1dCh0aGlzLmJvZHksIFwibnVtYmVyXCIsIHZhbHVlLCBjYWxsYmFjayk7XG4gICAgdGhpcy5hZGRUb0NvbnRlbnQoaWQsIGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkRGF0ZUlucHV0KGlkLCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IElucHV0KHRoaXMuYm9keSwgXCJkYXRlXCIsIHZhbHVlLCBjYWxsYmFjayk7XG4gICAgdGhpcy5hZGRUb0NvbnRlbnQoaWQsIGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkVGltZUlucHV0KGlkLCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IElucHV0KHRoaXMuYm9keSwgXCJ0aW1lXCIsIHZhbHVlLCBjYWxsYmFjayk7XG4gICAgdGhpcy5hZGRUb0NvbnRlbnQoaWQsIGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkRGF0ZVRpbWVJbnB1dChpZCwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBJbnB1dCh0aGlzLmJvZHksIFwiZGF0ZXRpbWUtbG9jYWxcIiwgdmFsdWUsIGNhbGxiYWNrKTtcbiAgICB0aGlzLmFkZFRvQ29udGVudChpZCwgZWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKHNlY3Rpb24sIHRleHQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCAkYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAkYnV0dG9uLmNsYXNzTmFtZSA9IFwiZXMtYm9keV9fc2VjdGlvbl9fYnV0dG9uXCI7XG4gICAgJGJ1dHRvbi5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSAkYnV0dG9uO1xuICAgIHRoaXMuc2VjdGlvbi5hcHBlbmRDaGlsZCgkYnV0dG9uKTtcblxuICAgIHRoaXMuYmluZENhbGxiYWNrKCk7XG4gIH1cblxuICBiaW5kQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmlubmVySFRNTDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3gge1xuICBjb25zdHJ1Y3RvcihzZWN0aW9uLCBsYWJlbCwgY2hlY2tlZCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuc2VjdGlvbiA9IHNlY3Rpb247XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBudWxsO1xuICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCAkbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgJGxhYmVsLmNsYXNzTmFtZSA9IFwiZXMtYm9keV9fc2VjdGlvbl9fbGFiZWxcIjtcblxuICAgIGNvbnN0ICRsYWJlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAkbGFiZWxJY29uLmNsYXNzTmFtZSA9IFwiZXMtYm9keV9fc2VjdGlvbl9fbGFiZWxfX2ljb25cIjtcblxuICAgIGNvbnN0ICRsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAkbGFiZWxUZXh0LmNsYXNzTmFtZSA9IFwiZXMtYm9keV9fc2VjdGlvbl9fbGFiZWxfX3RleHRcIjtcbiAgICAkbGFiZWxUZXh0LmlubmVySFRNTCA9IHRoaXMubGFiZWw7XG5cbiAgICBjb25zdCAkY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgJGNoZWNrYm94LmNsYXNzTmFtZSA9IFwiZXMtYm9keV9fc2VjdGlvbl9fY2hlY2tib3hcIjtcbiAgICAkY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXG4gICAgJGNoZWNrYm94LmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSAkY2hlY2tib3g7XG4gICAgJGxhYmVsLmFwcGVuZENoaWxkKCRjaGVja2JveCk7XG4gICAgJGxhYmVsLmFwcGVuZENoaWxkKCRsYWJlbEljb24pO1xuICAgICRsYWJlbC5hcHBlbmRDaGlsZCgkbGFiZWxUZXh0KTtcbiAgICB0aGlzLnNlY3Rpb24uYXBwZW5kQ2hpbGQoJGxhYmVsKTtcblxuICAgIHRoaXMuYmluZENhbGxiYWNrKCk7XG4gIH1cblxuICBiaW5kQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmdldFZhbHVlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jaGVja2VkO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKHNlY3Rpb24sIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgW107XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCAkZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICRkcm9wZG93bi5jbGFzc05hbWUgPSBcImVzLWJvZHlfX3NlY3Rpb25fX2Ryb3Bkb3duXCI7XG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2goKHYpID0+IHtcbiAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgJG9wdGlvbi5pbm5lckhUTUwgPSB2O1xuICAgICAgJGRyb3Bkb3duLmFwcGVuZENoaWxkKCRvcHRpb24pO1xuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudCA9ICRkcm9wZG93bjtcbiAgICB0aGlzLnNlY3Rpb24uYXBwZW5kQ2hpbGQoJGRyb3Bkb3duKTtcblxuICAgIHRoaXMuYmluZENhbGxiYWNrKCk7XG4gIH1cblxuICBiaW5kQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmdldFZhbHVlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIHtcbiAgY29uc3RydWN0b3Ioc2VjdGlvbiwgdGV4dCkge1xuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5zZWN0aW9uID0gc2VjdGlvbjtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgJGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICRoZWFkZXIuY2xhc3NOYW1lID0gXCJlcy1ib2R5X19zZWN0aW9uX19oZWFkZXJcIjtcbiAgICAkaGVhZGVyLmlubmVySFRNTCA9IHRoaXMudGV4dDtcblxuICAgIHRoaXMuZWxlbWVudCA9ICRoZWFkZXI7XG4gICAgdGhpcy5zZWN0aW9uLmFwcGVuZENoaWxkKCRoZWFkZXIpO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5pbm5lckhUTUw7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcbiAgY29uc3RydWN0b3Ioc2VjdGlvbiwgdHlwZSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBudWxsO1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgJGlucHV0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAkaW5wdXRHcm91cC5jbGFzc05hbWUgPSBcImVzLWJvZHlfX3NlY3Rpb25fX2lucHV0LWdyb3VwXCI7XG5cbiAgICBjb25zdCAkaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgJGlucHV0LmNsYXNzTmFtZSA9IGBlcy1ib2R5X19zZWN0aW9uX19pbnB1dCBlcy1ib2R5X19zZWN0aW9uX19pbnB1dC0tJHt0aGlzLnR5cGV9YDtcbiAgICAkaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0aGlzLnR5cGUpO1xuICAgICRpbnB1dC52YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICBjb25zdCAkdW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAkdW5kZXIuY2xhc3NOYW1lID0gXCJlcy1ib2R5X19zZWN0aW9uX19pbnB1dC11bmRlcmxpbmVcIjtcblxuICAgIHRoaXMuZWxlbWVudCA9ICRpbnB1dDtcbiAgICAkaW5wdXRHcm91cC5hcHBlbmRDaGlsZCgkaW5wdXQpO1xuICAgICRpbnB1dEdyb3VwLmFwcGVuZENoaWxkKCR1bmRlcik7XG4gICAgdGhpcy5zZWN0aW9uLmFwcGVuZENoaWxkKCRpbnB1dEdyb3VwKTtcblxuICAgIHRoaXMuYmluZENhbGxiYWNrKCk7XG4gIH1cblxuICBiaW5kQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpbyB7XG4gIGNvbnN0cnVjdG9yKHNlY3Rpb24sIGluZGV4LCBvcHRpb25zLCBjaGVja2VkSW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnJhZGlvcyA9IFtdO1xuICAgIHRoaXMuc2VjdGlvbiA9IHNlY3Rpb247XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgW107XG4gICAgdGhpcy5jaGVja2VkSW5kZXggPSBjaGVja2VkSW5kZXg7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCAkZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICRncm91cC5jbGFzc05hbWUgPSBcImVzLWJvZHlfX3NlY3Rpb25fX3JhZGlvLWdyb3VwXCI7XG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgIGNvbnN0ICRsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICRsYWJlbC5jbGFzc05hbWUgPSBcImVzLWJvZHlfX3NlY3Rpb25fX2xhYmVsXCI7XG5cbiAgICAgIGNvbnN0ICRsYWJlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICRsYWJlbEljb24uY2xhc3NOYW1lID0gXCJlcy1ib2R5X19zZWN0aW9uX19sYWJlbF9faWNvblwiO1xuXG4gICAgICBjb25zdCAkbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAkbGFiZWxUZXh0LmlubmVySFRNTCA9IHY7XG5cbiAgICAgIGNvbnN0ICRyYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICRyYWRpby5jbGFzc05hbWUgPSBcImVzLWJvZHlfX3NlY3Rpb25fX2NoZWNrYm94XCI7XG4gICAgICAkcmFkaW8uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgICAgJHJhZGlvLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgYEVhc3lTZXR0aW5nc1BhbmVsLSR7dGhpcy5pbmRleH1gKTtcblxuICAgICAgaWYgKGkgPT09IHRoaXMuY2hlY2tlZEluZGV4KSB7XG4gICAgICAgICRyYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yYWRpb3MucHVzaCgkcmFkaW8pO1xuICAgICAgJGxhYmVsLmFwcGVuZENoaWxkKCRyYWRpbyk7XG4gICAgICAkbGFiZWwuYXBwZW5kQ2hpbGQoJGxhYmVsSWNvbik7XG4gICAgICAkbGFiZWwuYXBwZW5kQ2hpbGQoJGxhYmVsVGV4dCk7XG4gICAgICAkZ3JvdXAuYXBwZW5kQ2hpbGQoJGxhYmVsKTtcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnQgPSAkZ3JvdXA7XG4gICAgdGhpcy5zZWN0aW9uLmFwcGVuZENoaWxkKCRncm91cCk7XG5cbiAgICB0aGlzLmJpbmRDYWxsYmFjaygpO1xuICB9XG5cbiAgYmluZENhbGxiYWNrKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5nZXRWYWx1ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIHRoaXMucmFkaW9zLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgIGlmICh2LmNoZWNrZWQpIHtcbiAgICAgICAgaW5kZXggPSBpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG59XG4iXX0=