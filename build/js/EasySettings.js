(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\core-js\\get-iterator.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\fn\\get-iterator.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\core-js\\is-iterable.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\fn\\is-iterable.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\core-js\\object\\define-property.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\fn\\object\\define-property.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\core-js\\object\\entries.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/entries"), __esModule: true };
},{"core-js/library/fn/object/entries":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\fn\\object\\entries.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\core-js\\object\\define-property.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\slicedToArray.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _isIterable2 = require("../core-js/is-iterable");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = require("../core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
},{"../core-js/get-iterator":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\core-js\\get-iterator.js","../core-js/is-iterable":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\core-js\\is-iterable.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\fn\\get-iterator.js":[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\core.get-iterator.js","../modules/es6.string.iterator":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\es6.string.iterator.js","../modules/web.dom.iterable":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\web.dom.iterable.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\fn\\is-iterable.js":[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\core.is-iterable.js","../modules/es6.string.iterator":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\es6.string.iterator.js","../modules/web.dom.iterable":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\web.dom.iterable.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\fn\\object\\define-property.js":[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_core.js","../../modules/es6.object.define-property":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\es6.object.define-property.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\fn\\object\\entries.js":[function(require,module,exports){
require('../../modules/es7.object.entries');
module.exports = require('../../modules/_core').Object.entries;
},{"../../modules/_core":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_core.js","../../modules/es7.object.entries":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\es7.object.entries.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_a-function.js":[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_add-to-unscopables.js":[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_an-object.js":[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_is-object.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_array-includes.js":[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-index.js","./_to-iobject":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-iobject.js","./_to-length":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-length.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_classof.js":[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_cof.js","./_wks":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_wks.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_cof.js":[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_core.js":[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_ctx.js":[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_a-function.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_defined.js":[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_descriptors.js":[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_fails.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_dom-create.js":[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_global.js","./_is-object":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_is-object.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_enum-bug-keys.js":[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_export.js":[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_core.js","./_ctx":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_ctx.js","./_global":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_global.js","./_hide":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_hide.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_fails.js":[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_global.js":[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_has.js":[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_hide.js":[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_descriptors.js","./_object-dp":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-dp.js","./_property-desc":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_property-desc.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_html.js":[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_global.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_ie8-dom-define.js":[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_descriptors.js","./_dom-create":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_dom-create.js","./_fails":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_fails.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iobject.js":[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_cof.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_is-object.js":[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iter-create.js":[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_hide.js","./_object-create":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-create.js","./_property-desc":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_property-desc.js","./_set-to-string-tag":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_set-to-string-tag.js","./_wks":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_wks.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iter-define.js":[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_export.js","./_has":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_has.js","./_hide":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_hide.js","./_iter-create":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iter-create.js","./_iterators":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iterators.js","./_library":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_library.js","./_object-gpo":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-gpo.js","./_redefine":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_redefine.js","./_set-to-string-tag":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_set-to-string-tag.js","./_wks":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_wks.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iter-step.js":[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iterators.js":[function(require,module,exports){
module.exports = {};
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_library.js":[function(require,module,exports){
module.exports = true;
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-create.js":[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_an-object.js","./_dom-create":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_dom-create.js","./_enum-bug-keys":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_enum-bug-keys.js","./_html":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_html.js","./_object-dps":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-dps.js","./_shared-key":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_shared-key.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-dp.js":[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_an-object.js","./_descriptors":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_descriptors.js","./_ie8-dom-define":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_ie8-dom-define.js","./_to-primitive":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-primitive.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-dps.js":[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_an-object.js","./_descriptors":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_descriptors.js","./_object-dp":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-dp.js","./_object-keys":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-keys.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-gpo.js":[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_has.js","./_shared-key":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_shared-key.js","./_to-object":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-object.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-keys-internal.js":[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_array-includes.js","./_has":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_has.js","./_shared-key":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_shared-key.js","./_to-iobject":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-iobject.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-keys.js":[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_enum-bug-keys.js","./_object-keys-internal":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-keys-internal.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-pie.js":[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-to-array.js":[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject')
  , isEnum    = require('./_object-pie').f;
module.exports = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};
},{"./_object-keys":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-keys.js","./_object-pie":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-pie.js","./_to-iobject":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-iobject.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_property-desc.js":[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_redefine.js":[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_hide.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_set-to-string-tag.js":[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_has.js","./_object-dp":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-dp.js","./_wks":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_wks.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_shared-key.js":[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_shared.js","./_uid":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_uid.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_shared.js":[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_global.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_string-at.js":[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_defined.js","./_to-integer":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-integer.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-index.js":[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-integer.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-integer.js":[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-iobject.js":[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_defined.js","./_iobject":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iobject.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-length.js":[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-integer.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-object.js":[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_defined.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-primitive.js":[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_is-object.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_uid.js":[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_wks.js":[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_global.js","./_shared":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_shared.js","./_uid":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_uid.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\core.get-iterator-method.js":[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_classof.js","./_core":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_core.js","./_iterators":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iterators.js","./_wks":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_wks.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\core.get-iterator.js":[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_an-object.js","./_core":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_core.js","./core.get-iterator-method":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\core.get-iterator-method.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\core.is-iterable.js":[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_classof.js","./_core":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_core.js","./_iterators":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iterators.js","./_wks":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_wks.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\es6.array.iterator.js":[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_add-to-unscopables.js","./_iter-define":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iter-define.js","./_iter-step":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iter-step.js","./_iterators":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iterators.js","./_to-iobject":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_to-iobject.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\es6.object.define-property.js":[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_descriptors.js","./_export":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_export.js","./_object-dp":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-dp.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\es6.string.iterator.js":[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iter-define.js","./_string-at":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_string-at.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\es7.object.entries.js":[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export  = require('./_export')
  , $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});
},{"./_export":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_export.js","./_object-to-array":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_object-to-array.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\web.dom.iterable.js":[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_global.js","./_hide":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_hide.js","./_iterators":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_iterators.js","./_wks":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\_wks.js","./es6.array.iterator":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\core-js\\library\\modules\\es6.array.iterator.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\EasySettings.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DOMUtils = require("./utils/DOMUtils");

var _DOMUtils2 = _interopRequireDefault(_DOMUtils);

var _EasySettingsMovementManager = require("./actions/EasySettingsMovementManager");

var _EasySettingsMovementManager2 = _interopRequireDefault(_EasySettingsMovementManager);

var _Section = require("./sections/Section");

var _Section2 = _interopRequireDefault(_Section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EasySettings = function () {
  function EasySettings(x, y, title) {
    (0, _classCallCheck3.default)(this, EasySettings);

    this.container = null;
    this.header = null;
    this.body = null;
    this.sections = [];
    this.elements = {};
    this.title = title;
    this.pos = {
      x: x || 8,
      y: y || 8
    };

    this.createSettingsContainer();

    this.movementManager = new _EasySettingsMovementManager2.default(this.container, this.header);
  }

  (0, _createClass3.default)(EasySettings, [{
    key: "createSettingsHeader",
    value: function createSettingsHeader() {
      this.header = _DOMUtils2.default.createElement("header", this.container, { className: "es-header" });

      _DOMUtils2.default.createElement("span", this.header, { innerHTML: this.title || "EasySettings Panel" });
    }
  }, {
    key: "createSettingsBody",
    value: function createSettingsBody() {
      this.body = _DOMUtils2.default.createElement("main", this.container, { className: "es-body" });
    }
  }, {
    key: "createSettingsContainer",
    value: function createSettingsContainer() {
      this.container = _DOMUtils2.default.createElement("div", null, { className: "es-container" });
      var $container = this.container;

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
  }, {
    key: "setValue",
    value: function setValue(id, value) {
      this.elements[id].setValue(value);
    }
  }]);
  return EasySettings;
}();

exports.default = EasySettings;


window.EasySettings = EasySettings;

},{"./actions/EasySettingsMovementManager":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\actions\\EasySettingsMovementManager.js","./sections/Section":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\Section.js","./utils/DOMUtils":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\utils\\DOMUtils.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\actions\\EasySettingsMovementManager.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var zIndex = 0;

var EasySettingsMovementManager = function () {
  (0, _createClass3.default)(EasySettingsMovementManager, null, [{
    key: "getCurrentZIndex",
    value: function getCurrentZIndex() {
      return zIndex++;
    }
  }]);

  function EasySettingsMovementManager(panel, header) {
    (0, _classCallCheck3.default)(this, EasySettingsMovementManager);

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

  (0, _createClass3.default)(EasySettingsMovementManager, [{
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

        _this.panel.style.zIndex = EasySettingsMovementManager.getCurrentZIndex();

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

},{"babel-runtime/helpers/classCallCheck":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\Section.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DOMUtils = require("../utils/DOMUtils");

var _DOMUtils2 = _interopRequireDefault(_DOMUtils);

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

var _Textarea = require("./elements/Textarea");

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Slider = require("./elements/Slider");

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function () {
  function Section(esBody, elements, index) {
    (0, _classCallCheck3.default)(this, Section);

    this.esBody = esBody;
    this.body = null;
    this.elements = elements;
    this.index = index;
    this.create();
    return this;
  }

  (0, _createClass3.default)(Section, [{
    key: "create",
    value: function create() {
      this.body = _DOMUtils2.default.createElement("div", this.esBody, { className: "es-body__section" });
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
    value: function addTextInput(id, value, callback, addOptions) {
      var element = new _Input2.default(this.body, "text", value, callback, addOptions);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addPasswordInput",
    value: function addPasswordInput(id, value, callback, addOptions) {
      var element = new _Input2.default(this.body, "password", value, callback, addOptions);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addNumberInput",
    value: function addNumberInput(id, value, callback, addOptions) {
      var element = new _Input2.default(this.body, "number", value, callback, addOptions);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addDateInput",
    value: function addDateInput(id, value, callback, addOptions) {
      var element = new _Input2.default(this.body, "date", value, callback, addOptions);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addTimeInput",
    value: function addTimeInput(id, value, callback, addOptions) {
      var element = new _Input2.default(this.body, "time", value, callback, addOptions);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addDateTimeInput",
    value: function addDateTimeInput(id, value, callback, addOptions) {
      var element = new _Input2.default(this.body, "datetime-local", value, callback, addOptions);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addTextarea",
    value: function addTextarea(id, value, callback, addOptions) {
      var element = new _Textarea2.default(this.body, value, callback, addOptions);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addSlider",
    value: function addSlider(id, value, min, max, callback, addOptions) {
      var element = new _Slider2.default(this.body, value, min, max, callback, addOptions);
      this.addToContent(id, element);
      return this;
    }
  }]);
  return Section;
}();

exports.default = Section;

},{"../utils/DOMUtils":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\utils\\DOMUtils.js","./elements/Button":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Button.js","./elements/Checkbox":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Checkbox.js","./elements/Dropdown":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Dropdown.js","./elements/Header":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Header.js","./elements/Input":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Input.js","./elements/Radio":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Radio.js","./elements/Slider":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Slider.js","./elements/Textarea":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Textarea.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Button.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DOMUtils = require("../../utils/DOMUtils");

var _DOMUtils2 = _interopRequireDefault(_DOMUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function () {
  function Button(section, text, callback) {
    (0, _classCallCheck3.default)(this, Button);

    this.element = null;
    this.section = section;
    this.text = text;
    this.callback = callback || null;
    this.create();
  }

  (0, _createClass3.default)(Button, [{
    key: "create",
    value: function create() {
      var $button = _DOMUtils2.default.createElement("button", this.section, { className: "es-body__section__button", innerHTML: this.text });

      this.element = $button;

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
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.element.innerHTML = val;
    }
  }]);
  return Button;
}();

exports.default = Button;

},{"../../utils/DOMUtils":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\utils\\DOMUtils.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Checkbox.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DOMUtils = require("../../utils/DOMUtils");

var _DOMUtils2 = _interopRequireDefault(_DOMUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function () {
  function Checkbox(section, label, checked, callback) {
    (0, _classCallCheck3.default)(this, Checkbox);

    this.element = null;
    this.section = section;
    this.label = label;
    this.callback = callback || null;
    this.checked = checked;
    this.create();
  }

  (0, _createClass3.default)(Checkbox, [{
    key: "create",
    value: function create() {
      var $label = _DOMUtils2.default.createElement("label", this.section, { className: "es-body__section__label" });

      var $checkbox = _DOMUtils2.default.createElement("input", $label, { className: "body__section__checkbox", innerHTML: this.label, checked: this.checked }, { "type": "checkbox" });

      var $icon = _DOMUtils2.default.createElement("span", $label, { className: "es-body__section__label__icon" }, { tabindex: 0 }); // labelIcon

      _DOMUtils2.default.createElement("span", $icon, { className: "es-body__section__label__icon--focused" }); // labelIconFocused

      _DOMUtils2.default.createElement("span", $label, { className: "es-body__section__label__text", innerHTML: this.label }); // labelText

      $icon.addEventListener("keydown", function (e) {
        if (e.keyCode === 32 || e.keyCode === 13) {
          $checkbox.checked = !$checkbox.checked;
          _DOMUtils2.default.dispatchEvent($checkbox, "change");
        }
      });

      this.element = $checkbox;

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
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.element.checked = val;
    }
  }]);
  return Checkbox;
}();

exports.default = Checkbox;

},{"../../utils/DOMUtils":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\utils\\DOMUtils.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Dropdown.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DOMUtils = require("../../utils/DOMUtils");

var _DOMUtils2 = _interopRequireDefault(_DOMUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = function () {
  function Dropdown(section, options, callback) {
    (0, _classCallCheck3.default)(this, Dropdown);

    this.element = null;
    this.section = section;
    this.options = options || [];
    this.callback = callback || null;
    this.create();
  }

  (0, _createClass3.default)(Dropdown, [{
    key: "create",
    value: function create() {
      var $dropdown = _DOMUtils2.default.createElement("select", this.section, { className: "body__section__dropdown" });

      this.options.forEach(function (v) {
        var $option = document.createElement("option");
        $option.innerHTML = v;
        $dropdown.appendChild($option);
      });
      this.element = $dropdown;

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
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.element.value = val;
    }
  }]);
  return Dropdown;
}();

exports.default = Dropdown;

},{"../../utils/DOMUtils":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\utils\\DOMUtils.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Header.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DOMUtils = require("../../utils/DOMUtils");

var _DOMUtils2 = _interopRequireDefault(_DOMUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function () {
  function Header(section, text) {
    (0, _classCallCheck3.default)(this, Header);

    this.element = null;
    this.section = section;
    this.text = text;
    this.create();
  }

  (0, _createClass3.default)(Header, [{
    key: "create",
    value: function create() {
      var $header = _DOMUtils2.default.createElement("p", this.section, { className: "body__section__header", innerHTML: this.text });

      this.element = $header;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.element.innerHTML;
    }
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.element.innerHTML = val;
    }
  }]);
  return Header;
}();

exports.default = Header;

},{"../../utils/DOMUtils":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\utils\\DOMUtils.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Input.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DOMUtils = require("../../utils/DOMUtils");

var _DOMUtils2 = _interopRequireDefault(_DOMUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function () {
  function Input(section, type, value, callback, addOptions) {
    (0, _classCallCheck3.default)(this, Input);

    this.element = null;
    this.section = section;
    this.value = value;
    this.type = type;
    this.callback = callback || null;
    this.addOptions = addOptions;
    this.create();
  }

  (0, _createClass3.default)(Input, [{
    key: "create",
    value: function create() {
      var $inputGroup = _DOMUtils2.default.createElement("span", this.section, { className: "es-body__section__input-group" });

      var $input = _DOMUtils2.default.createElement("input", $inputGroup, { className: "es-body__section__input es-body__section__input--" + this.type, value: this.value }, { type: this.type });

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

      _DOMUtils2.default.createElement("span", $inputGroup, { className: "es-body__section__input-underline" }); // Underline

      this.element = $input;

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
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.element.value = val;
    }
  }]);
  return Input;
}();

exports.default = Input;

},{"../../utils/DOMUtils":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\utils\\DOMUtils.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Radio.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DOMUtils = require("../../utils/DOMUtils");

var _DOMUtils2 = _interopRequireDefault(_DOMUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function () {
  function Radio(section, index, options, checkedIndex, callback) {
    (0, _classCallCheck3.default)(this, Radio);

    this.element = null;
    this.radios = [];
    this.section = section;
    this.index = index;
    this.options = options || [];
    this.checkedIndex = checkedIndex;
    this.callback = callback || null;
    this.create();
  }

  (0, _createClass3.default)(Radio, [{
    key: "create",
    value: function create() {
      var _this = this;

      var $group = _DOMUtils2.default.createElement("div", this.section, { className: "es-body__section__radio-group" });

      this.options.forEach(function (v, i) {
        var $label = _DOMUtils2.default.createElement("label", $group, { className: "es-body__section__label" });

        var $radio = _DOMUtils2.default.createElement("input", $label, { className: "es-body__section__checkbox", checked: i === _this.checkedIndex }, { type: "radio", name: "EasySettingsPanel-" + _this.index });

        var $icon = _DOMUtils2.default.createElement("span", $label, { className: "es-body__section__label__icon" }, { tabindex: 0 }); // Label icon

        _DOMUtils2.default.createElement("span", $icon, { className: "es-body__section__label__icon--focused" }); // labelIconFocused

        $icon.addEventListener("keydown", function (e) {
          if (e.keyCode === 32 || e.keyCode === 13) {
            _this.setValue(i);
            _DOMUtils2.default.dispatchEvent($group, "change");
          }
        });

        _DOMUtils2.default.createElement("span", $label, { innerHTML: v }); // Label text

        _this.radios.push($radio);
      });

      this.element = $group;

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
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.radios.forEach(function (v, i) {
        v.checked = i === val; // eslint-disable-line no-param-reassign
      });
    }
  }]);
  return Radio;
}();

exports.default = Radio;

},{"../../utils/DOMUtils":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\utils\\DOMUtils.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Slider.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DOMUtils = require("../../utils/DOMUtils");

var _DOMUtils2 = _interopRequireDefault(_DOMUtils);

var _SliderMovementManager = require("./SliderMovementManager");

var _SliderMovementManager2 = _interopRequireDefault(_SliderMovementManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = function () {
  function Slider(section, value, min, max, callback) {
    (0, _classCallCheck3.default)(this, Slider);

    this.element = null;
    this.section = section;
    this.value = value;
    this.min = min;
    this.max = max;
    this.callback = callback || null;
    this.SliderMovementManager = null;
    this.create();
  }

  (0, _createClass3.default)(Slider, [{
    key: "create",
    value: function create() {
      var _this = this;

      var $inputGroup = _DOMUtils2.default.createElement("span", this.section, { className: "es-body__section__slider-group" });

      if (this.min === null) {
        this.min = 0;
      }

      if (this.max === null) {
        this.max = 100;
      }

      var $input = _DOMUtils2.default.createElement("input", $inputGroup, { className: "es-body__section__slider" }, { type: "range", min: this.min, max: this.max, value: this.value });

      var $track = _DOMUtils2.default.createElement("div", $inputGroup, { className: "es-body__section__slider-track" }); // Track
      var $trackValue = _DOMUtils2.default.createElement("div", $track, { className: "es-body__section__slider-track__slider-value" }); // Track
      var $handle = _DOMUtils2.default.createElement("button", $track, { className: "es-body__section__slider-track__slider-handle" }); // Track

      this.SliderMovementManager = new _SliderMovementManager2.default($handle, $track, $input, $trackValue);

      this.SliderMovementManager.setHandleValue(this.value);

      $handle.addEventListener("keydown", function (e) {
        if (e.keyCode === 39) {
          _this.element.value++;
          _DOMUtils2.default.dispatchEvent(_this.element, "input");
        }

        if (e.keyCode === 37) {
          _this.element.value--;
          _DOMUtils2.default.dispatchEvent(_this.element, "input");
        }
      });

      this.element = $input;

      this.bindCallback();
    }
  }, {
    key: "bindCallback",
    value: function bindCallback() {
      var _this2 = this;

      this.element.addEventListener("input", function () {
        _this2.callback(_this2.getValue());
        _this2.SliderMovementManager.setHandleValue();
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.element.value;
    }
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.element.value = val;
      this.SliderMovementManager.setHandleValue();
    }
  }]);
  return Slider;
}();

exports.default = Slider;

},{"../../utils/DOMUtils":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\utils\\DOMUtils.js","./SliderMovementManager":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\SliderMovementManager.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\SliderMovementManager.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DOMUtils = require("../../utils/DOMUtils");

var _DOMUtils2 = _interopRequireDefault(_DOMUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trackMovementManager = function () {
  function trackMovementManager(handle, track, input, trackValue) {
    (0, _classCallCheck3.default)(this, trackMovementManager);

    // this.panel = panel;
    this.handle = handle;
    this.track = track;
    this.input = input;
    this.trackValue = trackValue;

    this.offset = 0;
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

  (0, _createClass3.default)(trackMovementManager, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.handle.addEventListener("mousedown", function (e) {
        _this.startPos = {
          x: e.pageX,
          y: e.pageY
        };

        var handleOffset = _this.handle.getBoundingClientRect();
        var trackOffset = _this.track.getBoundingClientRect();

        _this.startPosOfPanel = {
          x: handleOffset.left - trackOffset.left
        };

        document.addEventListener("mousemove", _this.handleMovement);
        document.addEventListener("mouseup", function () {
          document.removeEventListener("mousemove", _this.handleMovement);
        });
      });
    }
  }, {
    key: "handleMovement",
    value: function handleMovement(e) {
      this.offset = this.startPosOfPanel.x + (e.pageX - this.startPos.x);
      if (this.offset < 0) {
        this.offset = 0;
      }

      if (this.offset > this.track.offsetWidth - this.handle.offsetWidth) {
        this.offset = this.track.offsetWidth - this.handle.offsetWidth;
      }

      this.minValueStyle();
      this.handle.style.left = this.offset + "px";

      this.setInputValue();
    }
  }, {
    key: "setInputValue",
    value: function setInputValue() {
      var max = this.track.offsetWidth - this.handle.offsetWidth;

      var $inputMin = this.input.getAttribute("min") * 1;
      var $inputMax = this.input.getAttribute("max") - $inputMin;

      this.input.value = $inputMax * (this.offset / max) + $inputMin;

      _DOMUtils2.default.dispatchEvent(this.input, "input");
    }
  }, {
    key: "setHandleValue",
    value: function setHandleValue() {
      var max = this.track.offsetWidth - this.handle.offsetWidth;

      var $inputMin = this.input.getAttribute("min") * 1;
      var $inputMax = this.input.getAttribute("max") - $inputMin;

      this.trackValue.style.width = 100 * ((this.input.value - $inputMin) / $inputMax) + "%";

      this.offset = max * ((this.input.value - $inputMin) / $inputMax);

      this.minValueStyle();
      this.handle.style.left = this.offset + "px";
    }
  }, {
    key: "minValueStyle",
    value: function minValueStyle() {
      var classes = this.handle.className.split(" ");
      var minValClass = "es-body__section__slider-track__slider-handle--min-value";
      var index = classes.indexOf(minValClass);
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
  }]);
  return trackMovementManager;
}();

exports.default = trackMovementManager;

},{"../../utils/DOMUtils":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\utils\\DOMUtils.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\sections\\elements\\Textarea.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _DOMUtils = require("../../utils/DOMUtils");

var _DOMUtils2 = _interopRequireDefault(_DOMUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = function () {
  function Textarea(section, value, callback, addOptions) {
    (0, _classCallCheck3.default)(this, Textarea);

    this.element = null;
    this.section = section;
    this.value = value;
    this.callback = callback || null;
    this.addOptions = addOptions;
    this.create();
  }

  (0, _createClass3.default)(Textarea, [{
    key: "create",
    value: function create() {
      var $inputGroup = _DOMUtils2.default.createElement("span", this.section, { className: "es-body__section__input-group" });

      var $input = _DOMUtils2.default.createElement("textarea", $inputGroup, { className: "es-body__section__input es-body__section__input--textarea", innerHTML: this.value });

      if (this.addOptions.placeholder !== null) {
        $input.placeholder = this.addOptions.placeholder;
      }

      _DOMUtils2.default.createElement("span", $inputGroup, { className: "es-body__section__input-underline" }); // Underline

      this.element = $input;

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
      return this.element.innerHTML;
    }
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.element.innerHTML = val;
    }
  }]);
  return Textarea;
}();

exports.default = Textarea;

},{"../../utils/DOMUtils":"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\utils\\DOMUtils.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js"}],"C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\utils\\DOMUtils.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require("babel-runtime/core-js/object/entries");

var _entries2 = _interopRequireDefault(_entries);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DOMUtils = function () {
  function DOMUtils() {
    (0, _classCallCheck3.default)(this, DOMUtils);
  }

  (0, _createClass3.default)(DOMUtils, null, [{
    key: "createElement",
    value: function createElement(type, parent, options, attributes) {
      var $el = document.createElement(type);

      if (options) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = (0, _getIterator3.default)((0, _entries2.default)(options)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = (0, _slicedToArray3.default)(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            $el[key] = value;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      if (attributes) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)((0, _entries2.default)(attributes)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _step2$value = (0, _slicedToArray3.default)(_step2.value, 2),
                key = _step2$value[0],
                value = _step2$value[1];

            $el.setAttribute(key, value);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      if (parent) {
        parent.appendChild($el);
      }

      return $el;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(element, event) {
      if ("createEvent" in document) {
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, false, true);
        element.dispatchEvent(evt);
      } else {
        element.fireEvent("onchange");
      }
    }
  }]);
  return DOMUtils;
}();

exports.default = DOMUtils;

},{"babel-runtime/core-js/get-iterator":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\core-js\\get-iterator.js","babel-runtime/core-js/object/entries":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\core-js\\object\\entries.js","babel-runtime/helpers/classCallCheck":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\classCallCheck.js","babel-runtime/helpers/createClass":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\createClass.js","babel-runtime/helpers/slicedToArray":"C:\\Users\\Bartek\\Projekty\\EasySettings\\node_modules\\babel-runtime\\helpers\\slicedToArray.js"}]},{},["C:\\Users\\Bartek\\Projekty\\EasySettings\\src\\js\\EasySettings.js"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9lbnRyaWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9lbnRyaWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsInNyY1xcanNcXEVhc3lTZXR0aW5ncy5qcyIsInNyY1xcanNcXGFjdGlvbnNcXEVhc3lTZXR0aW5nc01vdmVtZW50TWFuYWdlci5qcyIsInNyY1xcanNcXHNlY3Rpb25zXFxTZWN0aW9uLmpzIiwic3JjXFxqc1xcc2VjdGlvbnNcXGVsZW1lbnRzXFxCdXR0b24uanMiLCJzcmNcXGpzXFxzZWN0aW9uc1xcZWxlbWVudHNcXENoZWNrYm94LmpzIiwic3JjXFxqc1xcc2VjdGlvbnNcXGVsZW1lbnRzXFxEcm9wZG93bi5qcyIsInNyY1xcanNcXHNlY3Rpb25zXFxlbGVtZW50c1xcSGVhZGVyLmpzIiwic3JjXFxqc1xcc2VjdGlvbnNcXGVsZW1lbnRzXFxJbnB1dC5qcyIsInNyY1xcanNcXHNlY3Rpb25zXFxlbGVtZW50c1xcUmFkaW8uanMiLCJzcmNcXGpzXFxzZWN0aW9uc1xcZWxlbWVudHNcXFNsaWRlci5qcyIsInNyY1xcanNcXHNlY3Rpb25zXFxlbGVtZW50c1xcU2xpZGVyTW92ZW1lbnRNYW5hZ2VyLmpzIiwic3JjXFxqc1xcc2VjdGlvbnNcXGVsZW1lbnRzXFxUZXh0YXJlYS5qcyIsInNyY1xcanNcXHV0aWxzXFxET01VdGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBOztBQ0ZBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztJQUVxQixZO0FBQ25CLHdCQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUssU0FBTCxHQUFpQixJQUFqQjtBQUNBLFNBQUssTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLFNBQUssR0FBTCxHQUFXO0FBQ1QsU0FBRyxLQUFLLENBREM7QUFFVCxTQUFHLEtBQUs7QUFGQyxLQUFYOztBQU1BLFNBQUssdUJBQUw7O0FBRUEsU0FBSyxlQUFMLEdBQXVCLDBDQUFnQyxLQUFLLFNBQXJDLEVBQWdELEtBQUssTUFBckQsQ0FBdkI7QUFDRDs7OzsyQ0FFc0I7QUFDckIsV0FBSyxNQUFMLEdBQWMsbUJBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQyxLQUFLLFNBQXRDLEVBQWlELEVBQUUsV0FBVyxXQUFiLEVBQWpELENBQWQ7O0FBRUEseUJBQVMsYUFBVCxDQUF1QixNQUF2QixFQUErQixLQUFLLE1BQXBDLEVBQTRDLEVBQUUsV0FBVyxLQUFLLEtBQUwsSUFBYyxvQkFBM0IsRUFBNUM7QUFDRDs7O3lDQUVvQjtBQUNuQixXQUFLLElBQUwsR0FBWSxtQkFBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLEtBQUssU0FBcEMsRUFBK0MsRUFBRSxXQUFXLFNBQWIsRUFBL0MsQ0FBWjtBQUNEOzs7OENBRXlCO0FBQ3hCLFdBQUssU0FBTCxHQUFpQixtQkFBUyxhQUFULENBQXVCLEtBQXZCLEVBQThCLElBQTlCLEVBQW9DLEVBQUUsV0FBVyxjQUFiLEVBQXBDLENBQWpCO0FBQ0EsVUFBTSxhQUFhLEtBQUssU0FBeEI7O0FBRUEsV0FBSyxvQkFBTDtBQUNBLFdBQUssa0JBQUw7O0FBRUEsZUFBUyxJQUFULENBQWMsWUFBZCxDQUEyQixVQUEzQixFQUF1QyxTQUFTLElBQVQsQ0FBYyxVQUFyRDs7QUFFQSxpQkFBVyxLQUFYLENBQWlCLElBQWpCLEdBQTJCLEtBQUssR0FBTCxDQUFTLENBQXBDO0FBQ0EsaUJBQVcsS0FBWCxDQUFpQixHQUFqQixHQUEwQixLQUFLLEdBQUwsQ0FBUyxDQUFuQztBQUNEOztBQUVEOzs7O29DQUNnQjtBQUNkLFVBQU0sYUFBYSxzQkFBWSxLQUFLLElBQWpCLEVBQXVCLEtBQUssUUFBNUIsRUFBc0MsS0FBSyxRQUFMLENBQWMsTUFBcEQsQ0FBbkI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLFVBQW5CO0FBQ0EsYUFBTyxVQUFQO0FBQ0Q7Ozs2QkFFUSxFLEVBQUk7QUFDWCxhQUFPLEtBQUssUUFBTCxDQUFjLEVBQWQsRUFBa0IsUUFBbEIsRUFBUDtBQUNEOzs7NkJBRVEsRSxFQUFJLEssRUFBTztBQUNsQixXQUFLLFFBQUwsQ0FBYyxFQUFkLEVBQWtCLFFBQWxCLENBQTJCLEtBQTNCO0FBQ0Q7Ozs7O2tCQXZEa0IsWTs7O0FBMERyQixPQUFPLFlBQVAsR0FBc0IsWUFBdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREEsSUFBSSxTQUFTLENBQWI7O0lBRXFCLDJCOzs7dUNBQ087QUFDeEIsYUFBTyxRQUFQO0FBQ0Q7OztBQUVELHVDQUFZLEtBQVosRUFBbUIsTUFBbkIsRUFBMkI7QUFBQTs7QUFDekIsU0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLFNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxTQUFLLFFBQUwsR0FBZ0I7QUFDZCxTQUFHLENBRFc7QUFFZCxTQUFHO0FBRlcsS0FBaEI7O0FBS0EsU0FBSyxlQUFMLEdBQXVCO0FBQ3JCLFNBQUcsQ0FEa0I7QUFFckIsU0FBRztBQUZrQixLQUF2Qjs7QUFLQSxTQUFLLGNBQUwsR0FBc0IsS0FBSyxjQUFMLENBQW9CLElBQXBCLENBQXlCLElBQXpCLENBQXRCO0FBQ0EsU0FBSyxVQUFMO0FBQ0Q7Ozs7aUNBRVk7QUFBQTs7QUFDWCxXQUFLLE1BQUwsQ0FBWSxnQkFBWixDQUE2QixXQUE3QixFQUEwQyxVQUFDLENBQUQsRUFBTztBQUMvQyxjQUFLLFFBQUwsR0FBZ0I7QUFDZCxhQUFHLEVBQUUsS0FEUztBQUVkLGFBQUcsRUFBRTtBQUZTLFNBQWhCOztBQUtBLFlBQU0sY0FBYyxNQUFLLEtBQUwsQ0FBVyxxQkFBWCxFQUFwQjtBQUNBLGNBQUssZUFBTCxHQUF1QjtBQUNyQixhQUFHLFlBQVksSUFETTtBQUVyQixhQUFHLFlBQVk7QUFGTSxTQUF2Qjs7QUFLQSxjQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQWpCLEdBQTBCLDRCQUE0QixnQkFBNUIsRUFBMUI7O0FBRUEsaUJBQVMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsTUFBSyxjQUE1QztBQUNBLGlCQUFTLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFlBQU07QUFDekMsbUJBQVMsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsTUFBSyxjQUEvQztBQUNELFNBRkQ7QUFHRCxPQWxCRDtBQW1CRDs7O21DQUVjLEMsRUFBRztBQUNoQixXQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLElBQWpCLEdBQTJCLEtBQUssZUFBTCxDQUFxQixDQUFyQixJQUEwQixFQUFFLEtBQUYsR0FBVSxLQUFLLFFBQUwsQ0FBYyxDQUFsRCxDQUEzQjtBQUNBLFdBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBakIsR0FBMEIsS0FBSyxlQUFMLENBQXFCLENBQXJCLElBQTBCLEVBQUUsS0FBRixHQUFVLEtBQUssUUFBTCxDQUFjLENBQWxELENBQTFCO0FBQ0Q7Ozs7O2tCQS9Da0IsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCLE87QUFDbkIsbUJBQVksTUFBWixFQUFvQixRQUFwQixFQUE4QixLQUE5QixFQUFxQztBQUFBOztBQUNuQyxTQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLLE1BQUw7QUFDQSxXQUFPLElBQVA7QUFDRDs7Ozs2QkFFUTtBQUNQLFdBQUssSUFBTCxHQUFZLG1CQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEIsS0FBSyxNQUFuQyxFQUEyQyxFQUFFLFdBQVcsa0JBQWIsRUFBM0MsQ0FBWjtBQUNEOzs7aUNBRVksRSxFQUFJLEUsRUFBSTtBQUNuQixVQUFJLE9BQU8sSUFBWCxFQUFpQjtBQUNmLGFBQUssUUFBTCxDQUFjLEVBQWQsSUFBb0IsRUFBcEI7QUFDRDtBQUNGOztBQUVEOzs7OzhCQUNVLEUsRUFBSSxJLEVBQU07QUFDbEIsVUFBTSxVQUFVLHFCQUFXLEtBQUssSUFBaEIsRUFBc0IsSUFBdEIsQ0FBaEI7QUFDQSxXQUFLLFlBQUwsQ0FBa0IsRUFBbEIsRUFBc0IsT0FBdEI7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzhCQUVTLEUsRUFBSSxJLEVBQU0sUSxFQUFVO0FBQzVCLFVBQU0sVUFBVSxxQkFBVyxLQUFLLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLFFBQTVCLENBQWhCO0FBQ0EsV0FBSyxZQUFMLENBQWtCLEVBQWxCLEVBQXNCLE9BQXRCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztnQ0FFVyxFLEVBQUksTyxFQUFTLFEsRUFBVTtBQUNqQyxVQUFNLFVBQVUsdUJBQWEsS0FBSyxJQUFsQixFQUF3QixPQUF4QixFQUFpQyxRQUFqQyxDQUFoQjtBQUNBLFdBQUssWUFBTCxDQUFrQixFQUFsQixFQUFzQixPQUF0QjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7Z0NBRVcsRSxFQUFJLEssRUFBTyxPLEVBQVMsUSxFQUFVO0FBQ3hDLFVBQU0sVUFBVSx1QkFBYSxLQUFLLElBQWxCLEVBQXdCLEtBQXhCLEVBQStCLE9BQS9CLEVBQXdDLFFBQXhDLENBQWhCO0FBQ0EsV0FBSyxZQUFMLENBQWtCLEVBQWxCLEVBQXNCLE9BQXRCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozs2QkFFUSxFLEVBQUksSyxFQUFPLFksRUFBYyxRLEVBQVU7QUFDMUMsVUFBTSxVQUFVLG9CQUFVLEtBQUssSUFBZixFQUFxQixLQUFLLEtBQTFCLEVBQWlDLEtBQWpDLEVBQXdDLFlBQXhDLEVBQXNELFFBQXRELENBQWhCO0FBQ0EsV0FBSyxZQUFMLENBQWtCLEVBQWxCLEVBQXNCLE9BQXRCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztpQ0FFWSxFLEVBQUksSyxFQUFPLFEsRUFBVSxVLEVBQVk7QUFDNUMsVUFBTSxVQUFVLG9CQUFVLEtBQUssSUFBZixFQUFxQixNQUFyQixFQUE2QixLQUE3QixFQUFvQyxRQUFwQyxFQUE4QyxVQUE5QyxDQUFoQjtBQUNBLFdBQUssWUFBTCxDQUFrQixFQUFsQixFQUFzQixPQUF0QjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7cUNBRWdCLEUsRUFBSSxLLEVBQU8sUSxFQUFVLFUsRUFBWTtBQUNoRCxVQUFNLFVBQVUsb0JBQVUsS0FBSyxJQUFmLEVBQXFCLFVBQXJCLEVBQWlDLEtBQWpDLEVBQXdDLFFBQXhDLEVBQWtELFVBQWxELENBQWhCO0FBQ0EsV0FBSyxZQUFMLENBQWtCLEVBQWxCLEVBQXNCLE9BQXRCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OzttQ0FFYyxFLEVBQUksSyxFQUFPLFEsRUFBVSxVLEVBQVk7QUFDOUMsVUFBTSxVQUFVLG9CQUFVLEtBQUssSUFBZixFQUFxQixRQUFyQixFQUErQixLQUEvQixFQUFzQyxRQUF0QyxFQUFnRCxVQUFoRCxDQUFoQjtBQUNBLFdBQUssWUFBTCxDQUFrQixFQUFsQixFQUFzQixPQUF0QjtBQUNBLGFBQU8sSUFBUDtBQUNEOzs7aUNBRVksRSxFQUFJLEssRUFBTyxRLEVBQVUsVSxFQUFZO0FBQzVDLFVBQU0sVUFBVSxvQkFBVSxLQUFLLElBQWYsRUFBcUIsTUFBckIsRUFBNkIsS0FBN0IsRUFBb0MsUUFBcEMsRUFBOEMsVUFBOUMsQ0FBaEI7QUFDQSxXQUFLLFlBQUwsQ0FBa0IsRUFBbEIsRUFBc0IsT0FBdEI7QUFDQSxhQUFPLElBQVA7QUFDRDs7O2lDQUVZLEUsRUFBSSxLLEVBQU8sUSxFQUFVLFUsRUFBWTtBQUM1QyxVQUFNLFVBQVUsb0JBQVUsS0FBSyxJQUFmLEVBQXFCLE1BQXJCLEVBQTZCLEtBQTdCLEVBQW9DLFFBQXBDLEVBQThDLFVBQTlDLENBQWhCO0FBQ0EsV0FBSyxZQUFMLENBQWtCLEVBQWxCLEVBQXNCLE9BQXRCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztxQ0FFZ0IsRSxFQUFJLEssRUFBTyxRLEVBQVUsVSxFQUFZO0FBQ2hELFVBQU0sVUFBVSxvQkFBVSxLQUFLLElBQWYsRUFBcUIsZ0JBQXJCLEVBQXVDLEtBQXZDLEVBQThDLFFBQTlDLEVBQXdELFVBQXhELENBQWhCO0FBQ0EsV0FBSyxZQUFMLENBQWtCLEVBQWxCLEVBQXNCLE9BQXRCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7OztnQ0FFVyxFLEVBQUksSyxFQUFPLFEsRUFBVSxVLEVBQVk7QUFDM0MsVUFBTSxVQUFVLHVCQUFhLEtBQUssSUFBbEIsRUFBd0IsS0FBeEIsRUFBK0IsUUFBL0IsRUFBeUMsVUFBekMsQ0FBaEI7QUFDQSxXQUFLLFlBQUwsQ0FBa0IsRUFBbEIsRUFBc0IsT0FBdEI7QUFDQSxhQUFPLElBQVA7QUFDRDs7OzhCQUVTLEUsRUFBSSxLLEVBQU8sRyxFQUFLLEcsRUFBSyxRLEVBQVUsVSxFQUFZO0FBQ25ELFVBQU0sVUFBVSxxQkFBVyxLQUFLLElBQWhCLEVBQXNCLEtBQXRCLEVBQTZCLEdBQTdCLEVBQWtDLEdBQWxDLEVBQXVDLFFBQXZDLEVBQWlELFVBQWpELENBQWhCO0FBQ0EsV0FBSyxZQUFMLENBQWtCLEVBQWxCLEVBQXNCLE9BQXRCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozs7O2tCQWpHa0IsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYckI7Ozs7OztJQUVxQixNO0FBQ25CLGtCQUFZLE9BQVosRUFBcUIsSUFBckIsRUFBMkIsUUFBM0IsRUFBcUM7QUFBQTs7QUFDbkMsU0FBSyxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLFlBQVksSUFBNUI7QUFDQSxTQUFLLE1BQUw7QUFDRDs7Ozs2QkFFUTtBQUNQLFVBQU0sVUFBVSxtQkFBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLEtBQUssT0FBdEMsRUFBK0MsRUFBRSxXQUFXLDBCQUFiLEVBQXlDLFdBQVcsS0FBSyxJQUF6RCxFQUEvQyxDQUFoQjs7QUFFQSxXQUFLLE9BQUwsR0FBZSxPQUFmOztBQUVBLFdBQUssWUFBTDtBQUNEOzs7bUNBRWM7QUFBQTs7QUFDYixXQUFLLE9BQUwsQ0FBYSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQzNDLGNBQUssUUFBTCxDQUFjLE1BQUssUUFBTCxFQUFkO0FBQ0QsT0FGRDtBQUdEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUssT0FBTCxDQUFhLFNBQXBCO0FBQ0Q7Ozs2QkFFUSxHLEVBQUs7QUFDWixXQUFLLE9BQUwsQ0FBYSxTQUFiLEdBQXlCLEdBQXpCO0FBQ0Q7Ozs7O2tCQTdCa0IsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7OztJQUVxQixRO0FBQ25CLG9CQUFZLE9BQVosRUFBcUIsS0FBckIsRUFBNEIsT0FBNUIsRUFBcUMsUUFBckMsRUFBK0M7QUFBQTs7QUFDN0MsU0FBSyxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLFlBQVksSUFBNUI7QUFDQSxTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsU0FBSyxNQUFMO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxVQUFNLFNBQVMsbUJBQVMsYUFBVCxDQUF1QixPQUF2QixFQUFnQyxLQUFLLE9BQXJDLEVBQThDLEVBQUUsV0FBVyx5QkFBYixFQUE5QyxDQUFmOztBQUVBLFVBQU0sWUFBWSxtQkFBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLE1BQWhDLEVBQXdDLEVBQUUsV0FBVyx5QkFBYixFQUF3QyxXQUFXLEtBQUssS0FBeEQsRUFBK0QsU0FBUyxLQUFLLE9BQTdFLEVBQXhDLEVBQWdJLEVBQUUsUUFBUSxVQUFWLEVBQWhJLENBQWxCOztBQUVBLFVBQU0sUUFBUSxtQkFBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLE1BQS9CLEVBQXVDLEVBQUUsV0FBVywrQkFBYixFQUF2QyxFQUF1RixFQUFFLFVBQVUsQ0FBWixFQUF2RixDQUFkLENBTE8sQ0FLZ0g7O0FBRXZILHlCQUFTLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IsS0FBL0IsRUFBc0MsRUFBRSxXQUFXLHdDQUFiLEVBQXRDLEVBUE8sQ0FPeUY7O0FBRWhHLHlCQUFTLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IsTUFBL0IsRUFBdUMsRUFBRSxXQUFXLCtCQUFiLEVBQThDLFdBQVcsS0FBSyxLQUE5RCxFQUF2QyxFQVRPLENBU3dHOztBQUUvRyxZQUFNLGdCQUFOLENBQXVCLFNBQXZCLEVBQWtDLFVBQUMsQ0FBRCxFQUFPO0FBQ3ZDLFlBQUksRUFBRSxPQUFGLEtBQWMsRUFBZCxJQUFvQixFQUFFLE9BQUYsS0FBYyxFQUF0QyxFQUEwQztBQUN4QyxvQkFBVSxPQUFWLEdBQW9CLENBQUMsVUFBVSxPQUEvQjtBQUNBLDZCQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsUUFBbEM7QUFDRDtBQUNGLE9BTEQ7O0FBT0EsV0FBSyxPQUFMLEdBQWUsU0FBZjs7QUFFQSxXQUFLLFlBQUw7QUFDRDs7O21DQUVjO0FBQUE7O0FBQ2IsV0FBSyxPQUFMLENBQWEsZ0JBQWIsQ0FBOEIsUUFBOUIsRUFBd0MsWUFBTTtBQUM1QyxjQUFLLFFBQUwsQ0FBYyxNQUFLLFFBQUwsRUFBZDtBQUNELE9BRkQ7QUFHRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLLE9BQUwsQ0FBYSxPQUFwQjtBQUNEOzs7NkJBRVEsRyxFQUFLO0FBQ1osV0FBSyxPQUFMLENBQWEsT0FBYixHQUF1QixHQUF2QjtBQUNEOzs7OztrQkE3Q2tCLFE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7Ozs7SUFFcUIsUTtBQUNuQixvQkFBWSxPQUFaLEVBQXFCLE9BQXJCLEVBQThCLFFBQTlCLEVBQXdDO0FBQUE7O0FBQ3RDLFNBQUssT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EsU0FBSyxPQUFMLEdBQWUsV0FBVyxFQUExQjtBQUNBLFNBQUssUUFBTCxHQUFnQixZQUFZLElBQTVCO0FBQ0EsU0FBSyxNQUFMO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxVQUFNLFlBQVksbUJBQVMsYUFBVCxDQUF1QixRQUF2QixFQUFpQyxLQUFLLE9BQXRDLEVBQStDLEVBQUUsV0FBVyx5QkFBYixFQUEvQyxDQUFsQjs7QUFFQSxXQUFLLE9BQUwsQ0FBYSxPQUFiLENBQXFCLFVBQUMsQ0FBRCxFQUFPO0FBQzFCLFlBQU0sVUFBVSxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBaEI7QUFDQSxnQkFBUSxTQUFSLEdBQW9CLENBQXBCO0FBQ0Esa0JBQVUsV0FBVixDQUFzQixPQUF0QjtBQUNELE9BSkQ7QUFLQSxXQUFLLE9BQUwsR0FBZSxTQUFmOztBQUVBLFdBQUssWUFBTDtBQUNEOzs7bUNBRWM7QUFBQTs7QUFDYixXQUFLLE9BQUwsQ0FBYSxnQkFBYixDQUE4QixRQUE5QixFQUF3QyxZQUFNO0FBQzVDLGNBQUssUUFBTCxDQUFjLE1BQUssUUFBTCxFQUFkO0FBQ0QsT0FGRDtBQUdEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUssT0FBTCxDQUFhLEtBQXBCO0FBQ0Q7Ozs2QkFFUSxHLEVBQUs7QUFDWixXQUFLLE9BQUwsQ0FBYSxLQUFiLEdBQXFCLEdBQXJCO0FBQ0Q7Ozs7O2tCQWxDa0IsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7OztJQUVxQixNO0FBQ25CLGtCQUFZLE9BQVosRUFBcUIsSUFBckIsRUFBMkI7QUFBQTs7QUFDekIsU0FBSyxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBSyxNQUFMO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxVQUFNLFVBQVUsbUJBQVMsYUFBVCxDQUF1QixHQUF2QixFQUE0QixLQUFLLE9BQWpDLEVBQTBDLEVBQUUsV0FBVyx1QkFBYixFQUFzQyxXQUFXLEtBQUssSUFBdEQsRUFBMUMsQ0FBaEI7O0FBRUEsV0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUssT0FBTCxDQUFhLFNBQXBCO0FBQ0Q7Ozs2QkFFUSxHLEVBQUs7QUFDWixXQUFLLE9BQUwsQ0FBYSxTQUFiLEdBQXlCLEdBQXpCO0FBQ0Q7Ozs7O2tCQXBCa0IsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7OztJQUVxQixLO0FBQ25CLGlCQUFZLE9BQVosRUFBcUIsSUFBckIsRUFBMkIsS0FBM0IsRUFBa0MsUUFBbEMsRUFBNEMsVUFBNUMsRUFBd0Q7QUFBQTs7QUFDdEQsU0FBSyxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssUUFBTCxHQUFnQixZQUFZLElBQTVCO0FBQ0EsU0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0EsU0FBSyxNQUFMO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxVQUFNLGNBQWMsbUJBQVMsYUFBVCxDQUF1QixNQUF2QixFQUErQixLQUFLLE9BQXBDLEVBQTZDLEVBQUUsV0FBVywrQkFBYixFQUE3QyxDQUFwQjs7QUFFQSxVQUFNLFNBQVMsbUJBQVMsYUFBVCxDQUF1QixPQUF2QixFQUFnQyxXQUFoQyxFQUE2QyxFQUFFLGlFQUErRCxLQUFLLElBQXRFLEVBQThFLE9BQU8sS0FBSyxLQUExRixFQUE3QyxFQUFnSixFQUFFLE1BQU0sS0FBSyxJQUFiLEVBQWhKLENBQWY7O0FBRUEsVUFBSSxLQUFLLFVBQVQsRUFBcUI7QUFDbkIsWUFBSSxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsS0FBd0IsSUFBNUIsRUFBa0M7QUFDaEMsaUJBQU8sWUFBUCxDQUFvQixLQUFwQixFQUEyQixLQUFLLFVBQUwsQ0FBZ0IsR0FBM0M7QUFDRDs7QUFFRCxZQUFJLEtBQUssVUFBTCxDQUFnQixHQUFoQixLQUF3QixJQUE1QixFQUFrQztBQUNoQyxpQkFBTyxZQUFQLENBQW9CLEtBQXBCLEVBQTJCLEtBQUssVUFBTCxDQUFnQixHQUEzQztBQUNEOztBQUVELFlBQUksS0FBSyxVQUFMLENBQWdCLFdBQWhCLEtBQWdDLElBQXBDLEVBQTBDO0FBQ3hDLGlCQUFPLFdBQVAsR0FBcUIsS0FBSyxVQUFMLENBQWdCLFdBQXJDO0FBQ0Q7QUFDRjs7QUFFRCx5QkFBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLFdBQS9CLEVBQTRDLEVBQUUsV0FBVyxtQ0FBYixFQUE1QyxFQW5CTyxDQW1CMEY7O0FBRWpHLFdBQUssT0FBTCxHQUFlLE1BQWY7O0FBRUEsV0FBSyxZQUFMO0FBQ0Q7OzttQ0FFYztBQUFBOztBQUNiLFdBQUssT0FBTCxDQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDM0MsY0FBSyxRQUFMLENBQWMsTUFBSyxRQUFMLEVBQWQ7QUFDRCxPQUZEO0FBR0Q7OzsrQkFFVTtBQUNULFVBQUksS0FBSyxVQUFULEVBQXFCO0FBQ25CLFlBQUksS0FBSyxVQUFMLENBQWdCLEdBQWhCLEtBQXdCLElBQTVCLEVBQWtDO0FBQ2hDLGNBQUksS0FBSyxVQUFMLENBQWdCLEdBQWhCLEdBQXNCLEtBQUssT0FBTCxDQUFhLEtBQXZDLEVBQThDO0FBQzVDLG1CQUFPLEtBQUssVUFBTCxDQUFnQixHQUF2QjtBQUNEO0FBQ0Y7O0FBRUQsWUFBSSxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsS0FBd0IsSUFBNUIsRUFBa0M7QUFDaEMsY0FBSSxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsR0FBc0IsS0FBSyxPQUFMLENBQWEsS0FBdkMsRUFBOEM7QUFDNUMsbUJBQU8sS0FBSyxVQUFMLENBQWdCLEdBQXZCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQU8sS0FBSyxPQUFMLENBQWEsS0FBcEI7QUFDRDs7OzZCQUVRLEcsRUFBSztBQUNaLFdBQUssT0FBTCxDQUFhLEtBQWIsR0FBcUIsR0FBckI7QUFDRDs7Ozs7a0JBL0RrQixLOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7O0lBRXFCLEs7QUFDbkIsaUJBQVksT0FBWixFQUFxQixLQUFyQixFQUE0QixPQUE1QixFQUFxQyxZQUFyQyxFQUFtRCxRQUFuRCxFQUE2RDtBQUFBOztBQUMzRCxTQUFLLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBSyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBSyxPQUFMLEdBQWUsV0FBVyxFQUExQjtBQUNBLFNBQUssWUFBTCxHQUFvQixZQUFwQjtBQUNBLFNBQUssUUFBTCxHQUFnQixZQUFZLElBQTVCO0FBQ0EsU0FBSyxNQUFMO0FBQ0Q7Ozs7NkJBRVE7QUFBQTs7QUFDUCxVQUFNLFNBQVMsbUJBQVMsYUFBVCxDQUF1QixLQUF2QixFQUE4QixLQUFLLE9BQW5DLEVBQTRDLEVBQUUsV0FBVywrQkFBYixFQUE1QyxDQUFmOztBQUVBLFdBQUssT0FBTCxDQUFhLE9BQWIsQ0FBcUIsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFVO0FBQzdCLFlBQU0sU0FBUyxtQkFBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLE1BQWhDLEVBQXdDLEVBQUUsV0FBVyx5QkFBYixFQUF4QyxDQUFmOztBQUVBLFlBQU0sU0FBUyxtQkFBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLE1BQWhDLEVBQXdDLEVBQUUsV0FBVyw0QkFBYixFQUEyQyxTQUFVLE1BQU0sTUFBSyxZQUFoRSxFQUF4QyxFQUF5SCxFQUFFLE1BQU0sT0FBUixFQUFpQiw2QkFBMkIsTUFBSyxLQUFqRCxFQUF6SCxDQUFmOztBQUVBLFlBQU0sUUFBUSxtQkFBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLE1BQS9CLEVBQXVDLEVBQUUsV0FBVywrQkFBYixFQUF2QyxFQUF1RixFQUFFLFVBQVUsQ0FBWixFQUF2RixDQUFkLENBTDZCLENBSzBGOztBQUV2SCwyQkFBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLEtBQS9CLEVBQXNDLEVBQUUsV0FBVyx3Q0FBYixFQUF0QyxFQVA2QixDQU9tRTs7QUFFaEcsY0FBTSxnQkFBTixDQUF1QixTQUF2QixFQUFrQyxVQUFDLENBQUQsRUFBTztBQUN2QyxjQUFJLEVBQUUsT0FBRixLQUFjLEVBQWQsSUFBb0IsRUFBRSxPQUFGLEtBQWMsRUFBdEMsRUFBMEM7QUFDeEMsa0JBQUssUUFBTCxDQUFjLENBQWQ7QUFDQSwrQkFBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLFFBQS9CO0FBQ0Q7QUFDRixTQUxEOztBQU9BLDJCQUFTLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IsTUFBL0IsRUFBdUMsRUFBRSxXQUFXLENBQWIsRUFBdkMsRUFoQjZCLENBZ0I2Qjs7QUFFMUQsY0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixNQUFqQjtBQUNELE9BbkJEOztBQXFCQSxXQUFLLE9BQUwsR0FBZSxNQUFmOztBQUVBLFdBQUssWUFBTDtBQUNEOzs7bUNBRWM7QUFBQTs7QUFDYixXQUFLLE9BQUwsQ0FBYSxnQkFBYixDQUE4QixRQUE5QixFQUF3QyxZQUFNO0FBQzVDLGVBQUssUUFBTCxDQUFjLE9BQUssUUFBTCxFQUFkO0FBQ0QsT0FGRDtBQUdEOzs7K0JBRVU7QUFDVCxVQUFJLFFBQVEsQ0FBQyxDQUFiO0FBQ0EsV0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixVQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7QUFDNUIsWUFBSSxFQUFFLE9BQU4sRUFBZTtBQUNiLGtCQUFRLENBQVI7QUFDRDtBQUNGLE9BSkQ7O0FBTUEsYUFBTyxLQUFQO0FBQ0Q7Ozs2QkFFUSxHLEVBQUs7QUFDWixXQUFLLE1BQUwsQ0FBWSxPQUFaLENBQW9CLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtBQUM1QixVQUFFLE9BQUYsR0FBYSxNQUFNLEdBQW5CLENBRDRCLENBQ0g7QUFDMUIsT0FGRDtBQUdEOzs7OztrQkE5RGtCLEs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBQ0E7Ozs7OztJQUVxQixNO0FBQ25CLGtCQUFZLE9BQVosRUFBcUIsS0FBckIsRUFBNEIsR0FBNUIsRUFBaUMsR0FBakMsRUFBc0MsUUFBdEMsRUFBZ0Q7QUFBQTs7QUFDOUMsU0FBSyxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLFNBQUssR0FBTCxHQUFXLEdBQVg7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsWUFBWSxJQUE1QjtBQUNBLFNBQUsscUJBQUwsR0FBNkIsSUFBN0I7QUFDQSxTQUFLLE1BQUw7QUFDRDs7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQU0sY0FBYyxtQkFBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLEtBQUssT0FBcEMsRUFBNkMsRUFBRSxXQUFXLGdDQUFiLEVBQTdDLENBQXBCOztBQUVBLFVBQUksS0FBSyxHQUFMLEtBQWEsSUFBakIsRUFBdUI7QUFDckIsYUFBSyxHQUFMLEdBQVcsQ0FBWDtBQUNEOztBQUVELFVBQUksS0FBSyxHQUFMLEtBQWEsSUFBakIsRUFBdUI7QUFDckIsYUFBSyxHQUFMLEdBQVcsR0FBWDtBQUNEOztBQUVELFVBQU0sU0FBUyxtQkFBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLFdBQWhDLEVBQTZDLEVBQUUsV0FBVywwQkFBYixFQUE3QyxFQUF3RixFQUFFLE1BQU0sT0FBUixFQUFpQixLQUFLLEtBQUssR0FBM0IsRUFBZ0MsS0FBSyxLQUFLLEdBQTFDLEVBQStDLE9BQU8sS0FBSyxLQUEzRCxFQUF4RixDQUFmOztBQUVBLFVBQU0sU0FBUyxtQkFBUyxhQUFULENBQXVCLEtBQXZCLEVBQThCLFdBQTlCLEVBQTJDLEVBQUUsV0FBVyxnQ0FBYixFQUEzQyxDQUFmLENBYk8sQ0FhcUc7QUFDNUcsVUFBTSxjQUFjLG1CQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEIsTUFBOUIsRUFBc0MsRUFBRSxXQUFXLDhDQUFiLEVBQXRDLENBQXBCLENBZE8sQ0FjbUg7QUFDMUgsVUFBTSxVQUFVLG1CQUFTLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUMsTUFBakMsRUFBeUMsRUFBRSxXQUFXLCtDQUFiLEVBQXpDLENBQWhCLENBZk8sQ0FlbUg7O0FBRTFILFdBQUsscUJBQUwsR0FBNkIsb0NBQTBCLE9BQTFCLEVBQW1DLE1BQW5DLEVBQTJDLE1BQTNDLEVBQW1ELFdBQW5ELENBQTdCOztBQUVBLFdBQUsscUJBQUwsQ0FBMkIsY0FBM0IsQ0FBMEMsS0FBSyxLQUEvQzs7QUFFQSxjQUFRLGdCQUFSLENBQXlCLFNBQXpCLEVBQW9DLFVBQUMsQ0FBRCxFQUFPO0FBQ3pDLFlBQUksRUFBRSxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7QUFDcEIsZ0JBQUssT0FBTCxDQUFhLEtBQWI7QUFDQSw2QkFBUyxhQUFULENBQXVCLE1BQUssT0FBNUIsRUFBcUMsT0FBckM7QUFDRDs7QUFFRCxZQUFJLEVBQUUsT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQ3BCLGdCQUFLLE9BQUwsQ0FBYSxLQUFiO0FBQ0EsNkJBQVMsYUFBVCxDQUF1QixNQUFLLE9BQTVCLEVBQXFDLE9BQXJDO0FBQ0Q7QUFDRixPQVZEOztBQVlBLFdBQUssT0FBTCxHQUFlLE1BQWY7O0FBRUEsV0FBSyxZQUFMO0FBQ0Q7OzttQ0FFYztBQUFBOztBQUNiLFdBQUssT0FBTCxDQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDM0MsZUFBSyxRQUFMLENBQWMsT0FBSyxRQUFMLEVBQWQ7QUFDQSxlQUFLLHFCQUFMLENBQTJCLGNBQTNCO0FBQ0QsT0FIRDtBQUlEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUssT0FBTCxDQUFhLEtBQXBCO0FBQ0Q7Ozs2QkFFUSxHLEVBQUs7QUFDWixXQUFLLE9BQUwsQ0FBYSxLQUFiLEdBQXFCLEdBQXJCO0FBQ0EsV0FBSyxxQkFBTCxDQUEyQixjQUEzQjtBQUNEOzs7OztrQkFoRWtCLE07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7Ozs7SUFFcUIsb0I7QUFDbkIsZ0NBQVksTUFBWixFQUFvQixLQUFwQixFQUEyQixLQUEzQixFQUFrQyxVQUFsQyxFQUE4QztBQUFBOztBQUM1QztBQUNBLFNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLFNBQUssVUFBTCxHQUFrQixVQUFsQjs7QUFFQSxTQUFLLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBSyxRQUFMLEdBQWdCO0FBQ2QsU0FBRyxDQURXO0FBRWQsU0FBRztBQUZXLEtBQWhCOztBQUtBLFNBQUssZUFBTCxHQUF1QjtBQUNyQixTQUFHLENBRGtCO0FBRXJCLFNBQUc7QUFGa0IsS0FBdkI7O0FBS0EsU0FBSyxjQUFMLEdBQXNCLEtBQUssY0FBTCxDQUFvQixJQUFwQixDQUF5QixJQUF6QixDQUF0QjtBQUNBLFNBQUssVUFBTDtBQUNEOzs7O2lDQUVZO0FBQUE7O0FBQ1gsV0FBSyxNQUFMLENBQVksZ0JBQVosQ0FBNkIsV0FBN0IsRUFBMEMsVUFBQyxDQUFELEVBQU87QUFDL0MsY0FBSyxRQUFMLEdBQWdCO0FBQ2QsYUFBRyxFQUFFLEtBRFM7QUFFZCxhQUFHLEVBQUU7QUFGUyxTQUFoQjs7QUFLQSxZQUFNLGVBQWUsTUFBSyxNQUFMLENBQVkscUJBQVosRUFBckI7QUFDQSxZQUFNLGNBQWMsTUFBSyxLQUFMLENBQVcscUJBQVgsRUFBcEI7O0FBRUEsY0FBSyxlQUFMLEdBQXVCO0FBQ3JCLGFBQUcsYUFBYSxJQUFiLEdBQW9CLFlBQVk7QUFEZCxTQUF2Qjs7QUFJQSxpQkFBUyxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxNQUFLLGNBQTVDO0FBQ0EsaUJBQVMsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsWUFBTTtBQUN6QyxtQkFBUyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQyxNQUFLLGNBQS9DO0FBQ0QsU0FGRDtBQUdELE9BakJEO0FBa0JEOzs7bUNBRWMsQyxFQUFHO0FBQ2hCLFdBQUssTUFBTCxHQUFjLEtBQUssZUFBTCxDQUFxQixDQUFyQixJQUEwQixFQUFFLEtBQUYsR0FBVSxLQUFLLFFBQUwsQ0FBYyxDQUFsRCxDQUFkO0FBQ0EsVUFBSSxLQUFLLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNuQixhQUFLLE1BQUwsR0FBYyxDQUFkO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLLE1BQUwsR0FBZSxLQUFLLEtBQUwsQ0FBVyxXQUFYLEdBQXlCLEtBQUssTUFBTCxDQUFZLFdBQXhELEVBQXNFO0FBQ3BFLGFBQUssTUFBTCxHQUFjLEtBQUssS0FBTCxDQUFXLFdBQVgsR0FBeUIsS0FBSyxNQUFMLENBQVksV0FBbkQ7QUFDRDs7QUFFRCxXQUFLLGFBQUw7QUFDQSxXQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLElBQWxCLEdBQTRCLEtBQUssTUFBakM7O0FBRUEsV0FBSyxhQUFMO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU0sTUFBTSxLQUFLLEtBQUwsQ0FBVyxXQUFYLEdBQXlCLEtBQUssTUFBTCxDQUFZLFdBQWpEOztBQUVBLFVBQU0sWUFBWSxLQUFLLEtBQUwsQ0FBVyxZQUFYLENBQXdCLEtBQXhCLElBQWlDLENBQW5EO0FBQ0EsVUFBTSxZQUFZLEtBQUssS0FBTCxDQUFXLFlBQVgsQ0FBd0IsS0FBeEIsSUFBaUMsU0FBbkQ7O0FBRUEsV0FBSyxLQUFMLENBQVcsS0FBWCxHQUFvQixhQUFhLEtBQUssTUFBTCxHQUFjLEdBQTNCLENBQUQsR0FBb0MsU0FBdkQ7O0FBRUEseUJBQVMsYUFBVCxDQUF1QixLQUFLLEtBQTVCLEVBQW1DLE9BQW5DO0FBQ0Q7OztxQ0FFZ0I7QUFDZixVQUFNLE1BQU0sS0FBSyxLQUFMLENBQVcsV0FBWCxHQUF5QixLQUFLLE1BQUwsQ0FBWSxXQUFqRDs7QUFFQSxVQUFNLFlBQVksS0FBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixLQUF4QixJQUFpQyxDQUFuRDtBQUNBLFVBQU0sWUFBWSxLQUFLLEtBQUwsQ0FBVyxZQUFYLENBQXdCLEtBQXhCLElBQWlDLFNBQW5EOztBQUVBLFdBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixLQUF0QixHQUFpQyxPQUFPLENBQUMsS0FBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixTQUFwQixJQUFpQyxTQUF4QyxDQUFqQzs7QUFFQSxXQUFLLE1BQUwsR0FBYyxPQUFPLENBQUMsS0FBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixTQUFwQixJQUFpQyxTQUF4QyxDQUFkOztBQUVBLFdBQUssYUFBTDtBQUNBLFdBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsSUFBbEIsR0FBNEIsS0FBSyxNQUFqQztBQUNEOzs7b0NBRWU7QUFDZCxVQUFNLFVBQVUsS0FBSyxNQUFMLENBQVksU0FBWixDQUFzQixLQUF0QixDQUE0QixHQUE1QixDQUFoQjtBQUNBLFVBQU0sY0FBYywwREFBcEI7QUFDQSxVQUFNLFFBQVEsUUFBUSxPQUFSLENBQWdCLFdBQWhCLENBQWQ7QUFDQSxVQUFJLEtBQUssTUFBTCxJQUFlLENBQW5CLEVBQXNCO0FBQ3BCLFlBQUksUUFBUSxDQUFaLEVBQWU7QUFDYixrQkFBUSxJQUFSLENBQWEsV0FBYjtBQUNBLGVBQUssTUFBTCxDQUFZLFNBQVosR0FBd0IsUUFBUSxJQUFSLENBQWEsR0FBYixDQUF4QjtBQUNEO0FBQ0YsT0FMRCxNQUtPLElBQUksU0FBUyxDQUFiLEVBQWdCO0FBQ3JCLGdCQUFRLE1BQVIsQ0FBZSxLQUFmLEVBQXNCLENBQXRCO0FBQ0EsYUFBSyxNQUFMLENBQVksU0FBWixHQUF3QixRQUFRLElBQVIsQ0FBYSxHQUFiLENBQXhCO0FBQ0Q7QUFDRjs7Ozs7a0JBbEdrQixvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckI7Ozs7OztJQUVxQixRO0FBQ25CLG9CQUFZLE9BQVosRUFBcUIsS0FBckIsRUFBNEIsUUFBNUIsRUFBc0MsVUFBdEMsRUFBa0Q7QUFBQTs7QUFDaEQsU0FBSyxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLFlBQVksSUFBNUI7QUFDQSxTQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxTQUFLLE1BQUw7QUFDRDs7Ozs2QkFFUTtBQUNQLFVBQU0sY0FBYyxtQkFBUyxhQUFULENBQXVCLE1BQXZCLEVBQStCLEtBQUssT0FBcEMsRUFBNkMsRUFBRSxXQUFXLCtCQUFiLEVBQTdDLENBQXBCOztBQUVBLFVBQU0sU0FBUyxtQkFBUyxhQUFULENBQXVCLFVBQXZCLEVBQW1DLFdBQW5DLEVBQWdELEVBQUUsV0FBVywyREFBYixFQUEwRSxXQUFXLEtBQUssS0FBMUYsRUFBaEQsQ0FBZjs7QUFFQSxVQUFJLEtBQUssVUFBTCxDQUFnQixXQUFoQixLQUFnQyxJQUFwQyxFQUEwQztBQUN4QyxlQUFPLFdBQVAsR0FBcUIsS0FBSyxVQUFMLENBQWdCLFdBQXJDO0FBQ0Q7O0FBRUQseUJBQVMsYUFBVCxDQUF1QixNQUF2QixFQUErQixXQUEvQixFQUE0QyxFQUFFLFdBQVcsbUNBQWIsRUFBNUMsRUFUTyxDQVMwRjs7QUFFakcsV0FBSyxPQUFMLEdBQWUsTUFBZjs7QUFFQSxXQUFLLFlBQUw7QUFDRDs7O21DQUVjO0FBQUE7O0FBQ2IsV0FBSyxPQUFMLENBQWEsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBTTtBQUMzQyxjQUFLLFFBQUwsQ0FBYyxNQUFLLFFBQUwsRUFBZDtBQUNELE9BRkQ7QUFHRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLLE9BQUwsQ0FBYSxTQUFwQjtBQUNEOzs7NkJBRVEsRyxFQUFLO0FBQ1osV0FBSyxPQUFMLENBQWEsU0FBYixHQUF5QixHQUF6QjtBQUNEOzs7OztrQkF0Q2tCLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGQSxROzs7Ozs7O2tDQUNFLEksRUFBTSxNLEVBQVEsTyxFQUFTLFUsRUFBWTtBQUN0RCxVQUFNLE1BQU0sU0FBUyxhQUFULENBQXVCLElBQXZCLENBQVo7O0FBRUEsVUFBSSxPQUFKLEVBQWE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDWCwwREFBMkIsdUJBQWUsT0FBZixDQUEzQiw0R0FBb0Q7QUFBQTtBQUFBLGdCQUF4QyxHQUF3QztBQUFBLGdCQUFuQyxLQUFtQzs7QUFDbEQsZ0JBQUksR0FBSixJQUFXLEtBQVg7QUFDRDtBQUhVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJWjs7QUFFRCxVQUFJLFVBQUosRUFBZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDZCwyREFBMkIsdUJBQWUsVUFBZixDQUEzQixpSEFBdUQ7QUFBQTtBQUFBLGdCQUEzQyxHQUEyQztBQUFBLGdCQUF0QyxLQUFzQzs7QUFDckQsZ0JBQUksWUFBSixDQUFpQixHQUFqQixFQUFzQixLQUF0QjtBQUNEO0FBSGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlmOztBQUVELFVBQUksTUFBSixFQUFZO0FBQ1YsZUFBTyxXQUFQLENBQW1CLEdBQW5CO0FBQ0Q7O0FBRUQsYUFBTyxHQUFQO0FBQ0Q7OztrQ0FFb0IsTyxFQUFTLEssRUFBTztBQUNuQyxVQUFJLGlCQUFpQixRQUFyQixFQUErQjtBQUM3QixZQUFNLE1BQU0sU0FBUyxXQUFULENBQXFCLFlBQXJCLENBQVo7QUFDQSxZQUFJLFNBQUosQ0FBYyxLQUFkLEVBQXFCLEtBQXJCLEVBQTRCLElBQTVCO0FBQ0EsZ0JBQVEsYUFBUixDQUFzQixHQUF0QjtBQUNELE9BSkQsTUFJTztBQUNMLGdCQUFRLFNBQVIsQ0FBa0IsVUFBbEI7QUFDRDtBQUNGOzs7OztrQkEvQmtCLFEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9lbnRyaWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUnKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5lbnRyaWVzOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGlzRW51bSAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc0VudHJpZXMpe1xuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoaXQpXG4gICAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaSAgICAgID0gMFxuICAgICAgLCByZXN1bHQgPSBbXVxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKXtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC12YWx1ZXMtZW50cmllc1xudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCAkZW50cmllcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhpdCl7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsImltcG9ydCBET01VdGlscyBmcm9tIFwiLi91dGlscy9ET01VdGlsc1wiO1xuXG5pbXBvcnQgRWFzeVNldHRpbmdzTW92ZW1lbnRNYW5hZ2VyIGZyb20gXCIuL2FjdGlvbnMvRWFzeVNldHRpbmdzTW92ZW1lbnRNYW5hZ2VyXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9zZWN0aW9ucy9TZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVhc3lTZXR0aW5ncyB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHRpdGxlKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xuICAgIHRoaXMuaGVhZGVyID0gbnVsbDtcbiAgICB0aGlzLmJvZHkgPSBudWxsO1xuICAgIHRoaXMuc2VjdGlvbnMgPSBbXTtcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMucG9zID0ge1xuICAgICAgeDogeCB8fCA4LFxuICAgICAgeTogeSB8fCA4LFxuICAgIH07XG5cblxuICAgIHRoaXMuY3JlYXRlU2V0dGluZ3NDb250YWluZXIoKTtcblxuICAgIHRoaXMubW92ZW1lbnRNYW5hZ2VyID0gbmV3IEVhc3lTZXR0aW5nc01vdmVtZW50TWFuYWdlcih0aGlzLmNvbnRhaW5lciwgdGhpcy5oZWFkZXIpO1xuICB9XG5cbiAgY3JlYXRlU2V0dGluZ3NIZWFkZXIoKSB7XG4gICAgdGhpcy5oZWFkZXIgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIHRoaXMuY29udGFpbmVyLCB7IGNsYXNzTmFtZTogXCJlcy1oZWFkZXJcIiB9KTtcblxuICAgIERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHRoaXMuaGVhZGVyLCB7IGlubmVySFRNTDogdGhpcy50aXRsZSB8fCBcIkVhc3lTZXR0aW5ncyBQYW5lbFwiIH0pO1xuICB9XG5cbiAgY3JlYXRlU2V0dGluZ3NCb2R5KCkge1xuICAgIHRoaXMuYm9keSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIsIHRoaXMuY29udGFpbmVyLCB7IGNsYXNzTmFtZTogXCJlcy1ib2R5XCIgfSk7XG4gIH1cblxuICBjcmVhdGVTZXR0aW5nc0NvbnRhaW5lcigpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgeyBjbGFzc05hbWU6IFwiZXMtY29udGFpbmVyXCIgfSk7XG4gICAgY29uc3QgJGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuXG4gICAgdGhpcy5jcmVhdGVTZXR0aW5nc0hlYWRlcigpO1xuICAgIHRoaXMuY3JlYXRlU2V0dGluZ3NCb2R5KCk7XG5cbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZSgkY29udGFpbmVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuXG4gICAgJGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5wb3MueH1weGA7XG4gICAgJGNvbnRhaW5lci5zdHlsZS50b3AgPSBgJHt0aGlzLnBvcy55fXB4YDtcbiAgfVxuXG4gIC8qIFNlY3Rpb24gQ3JlYXRpb24gKi9cbiAgY3JlYXRlU2VjdGlvbigpIHtcbiAgICBjb25zdCBuZXdTZWN0aW9uID0gbmV3IFNlY3Rpb24odGhpcy5ib2R5LCB0aGlzLmVsZW1lbnRzLCB0aGlzLnNlY3Rpb25zLmxlbmd0aCk7XG4gICAgdGhpcy5zZWN0aW9ucy5wdXNoKG5ld1NlY3Rpb24pO1xuICAgIHJldHVybiBuZXdTZWN0aW9uO1xuICB9XG5cbiAgZ2V0VmFsdWUoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50c1tpZF0uZ2V0VmFsdWUoKTtcbiAgfVxuXG4gIHNldFZhbHVlKGlkLCB2YWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudHNbaWRdLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxufVxuXG53aW5kb3cuRWFzeVNldHRpbmdzID0gRWFzeVNldHRpbmdzO1xuIiwibGV0IHpJbmRleCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVhc3lTZXR0aW5nc01vdmVtZW50TWFuYWdlciB7XG4gIHN0YXRpYyBnZXRDdXJyZW50WkluZGV4KCkge1xuICAgIHJldHVybiB6SW5kZXgrKztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBhbmVsLCBoZWFkZXIpIHtcbiAgICB0aGlzLnBhbmVsID0gcGFuZWw7XG4gICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XG4gICAgdGhpcy5zdGFydFBvcyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG5cbiAgICB0aGlzLnN0YXJ0UG9zT2ZQYW5lbCA9IHtcbiAgICAgIHg6IDgsXG4gICAgICB5OiAwLFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZU1vdmVtZW50ID0gdGhpcy5oYW5kbGVNb3ZlbWVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICB0aGlzLmhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLnN0YXJ0UG9zID0ge1xuICAgICAgICB4OiBlLnBhZ2VYLFxuICAgICAgICB5OiBlLnBhZ2VZLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcGFuZWxPZmZzZXQgPSB0aGlzLnBhbmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5zdGFydFBvc09mUGFuZWwgPSB7XG4gICAgICAgIHg6IHBhbmVsT2Zmc2V0LmxlZnQsXG4gICAgICAgIHk6IHBhbmVsT2Zmc2V0LnRvcCxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucGFuZWwuc3R5bGUuekluZGV4ID0gRWFzeVNldHRpbmdzTW92ZW1lbnRNYW5hZ2VyLmdldEN1cnJlbnRaSW5kZXgoKTtcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmhhbmRsZU1vdmVtZW50KTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmhhbmRsZU1vdmVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTW92ZW1lbnQoZSkge1xuICAgIHRoaXMucGFuZWwuc3R5bGUubGVmdCA9IGAke3RoaXMuc3RhcnRQb3NPZlBhbmVsLnggKyAoZS5wYWdlWCAtIHRoaXMuc3RhcnRQb3MueCl9cHhgO1xuICAgIHRoaXMucGFuZWwuc3R5bGUudG9wID0gYCR7dGhpcy5zdGFydFBvc09mUGFuZWwueSArIChlLnBhZ2VZIC0gdGhpcy5zdGFydFBvcy55KX1weGA7XG4gIH1cbn1cbiIsImltcG9ydCBET01VdGlscyBmcm9tIFwiLi4vdXRpbHMvRE9NVXRpbHNcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9lbGVtZW50cy9IZWFkZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vZWxlbWVudHMvQnV0dG9uXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIi4vZWxlbWVudHMvRHJvcGRvd25cIjtcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9lbGVtZW50cy9DaGVja2JveFwiO1xuaW1wb3J0IFJhZGlvIGZyb20gXCIuL2VsZW1lbnRzL1JhZGlvXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vZWxlbWVudHMvSW5wdXRcIjtcbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi9lbGVtZW50cy9UZXh0YXJlYVwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9lbGVtZW50cy9TbGlkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGVzQm9keSwgZWxlbWVudHMsIGluZGV4KSB7XG4gICAgdGhpcy5lc0JvZHkgPSBlc0JvZHk7XG4gICAgdGhpcy5ib2R5ID0gbnVsbDtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5ib2R5ID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcImRpdlwiLCB0aGlzLmVzQm9keSwgeyBjbGFzc05hbWU6IFwiZXMtYm9keV9fc2VjdGlvblwiIH0pO1xuICB9XG5cbiAgYWRkVG9Db250ZW50KGlkLCBlbCkge1xuICAgIGlmIChpZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5lbGVtZW50c1tpZF0gPSBlbDtcbiAgICB9XG4gIH1cblxuICAvKiBBZGRpbmcgY2VydGFpbiBlbGVtZW50cyAqL1xuICBhZGRIZWFkZXIoaWQsIHRleHQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IEhlYWRlcih0aGlzLmJvZHksIHRleHQpO1xuICAgIHRoaXMuYWRkVG9Db250ZW50KGlkLCBlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZEJ1dHRvbihpZCwgdGV4dCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IEJ1dHRvbih0aGlzLmJvZHksIHRleHQsIGNhbGxiYWNrKTtcbiAgICB0aGlzLmFkZFRvQ29udGVudChpZCwgZWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGREcm9wZG93bihpZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IERyb3Bkb3duKHRoaXMuYm9keSwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgIHRoaXMuYWRkVG9Db250ZW50KGlkLCBlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENoZWNrYm94KGlkLCBsYWJlbCwgY2hlY2tlZCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENoZWNrYm94KHRoaXMuYm9keSwgbGFiZWwsIGNoZWNrZWQsIGNhbGxiYWNrKTtcbiAgICB0aGlzLmFkZFRvQ29udGVudChpZCwgZWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRSYWRpbyhpZCwgbGFiZWwsIGNoZWNrZWRJbmRleCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IFJhZGlvKHRoaXMuYm9keSwgdGhpcy5pbmRleCwgbGFiZWwsIGNoZWNrZWRJbmRleCwgY2FsbGJhY2spO1xuICAgIHRoaXMuYWRkVG9Db250ZW50KGlkLCBlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZFRleHRJbnB1dChpZCwgdmFsdWUsIGNhbGxiYWNrLCBhZGRPcHRpb25zKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBJbnB1dCh0aGlzLmJvZHksIFwidGV4dFwiLCB2YWx1ZSwgY2FsbGJhY2ssIGFkZE9wdGlvbnMpO1xuICAgIHRoaXMuYWRkVG9Db250ZW50KGlkLCBlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZFBhc3N3b3JkSW5wdXQoaWQsIHZhbHVlLCBjYWxsYmFjaywgYWRkT3B0aW9ucykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgSW5wdXQodGhpcy5ib2R5LCBcInBhc3N3b3JkXCIsIHZhbHVlLCBjYWxsYmFjaywgYWRkT3B0aW9ucyk7XG4gICAgdGhpcy5hZGRUb0NvbnRlbnQoaWQsIGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkTnVtYmVySW5wdXQoaWQsIHZhbHVlLCBjYWxsYmFjaywgYWRkT3B0aW9ucykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgSW5wdXQodGhpcy5ib2R5LCBcIm51bWJlclwiLCB2YWx1ZSwgY2FsbGJhY2ssIGFkZE9wdGlvbnMpO1xuICAgIHRoaXMuYWRkVG9Db250ZW50KGlkLCBlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZERhdGVJbnB1dChpZCwgdmFsdWUsIGNhbGxiYWNrLCBhZGRPcHRpb25zKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBJbnB1dCh0aGlzLmJvZHksIFwiZGF0ZVwiLCB2YWx1ZSwgY2FsbGJhY2ssIGFkZE9wdGlvbnMpO1xuICAgIHRoaXMuYWRkVG9Db250ZW50KGlkLCBlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZFRpbWVJbnB1dChpZCwgdmFsdWUsIGNhbGxiYWNrLCBhZGRPcHRpb25zKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBJbnB1dCh0aGlzLmJvZHksIFwidGltZVwiLCB2YWx1ZSwgY2FsbGJhY2ssIGFkZE9wdGlvbnMpO1xuICAgIHRoaXMuYWRkVG9Db250ZW50KGlkLCBlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZERhdGVUaW1lSW5wdXQoaWQsIHZhbHVlLCBjYWxsYmFjaywgYWRkT3B0aW9ucykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgSW5wdXQodGhpcy5ib2R5LCBcImRhdGV0aW1lLWxvY2FsXCIsIHZhbHVlLCBjYWxsYmFjaywgYWRkT3B0aW9ucyk7XG4gICAgdGhpcy5hZGRUb0NvbnRlbnQoaWQsIGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkVGV4dGFyZWEoaWQsIHZhbHVlLCBjYWxsYmFjaywgYWRkT3B0aW9ucykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgVGV4dGFyZWEodGhpcy5ib2R5LCB2YWx1ZSwgY2FsbGJhY2ssIGFkZE9wdGlvbnMpO1xuICAgIHRoaXMuYWRkVG9Db250ZW50KGlkLCBlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZFNsaWRlcihpZCwgdmFsdWUsIG1pbiwgbWF4LCBjYWxsYmFjaywgYWRkT3B0aW9ucykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgU2xpZGVyKHRoaXMuYm9keSwgdmFsdWUsIG1pbiwgbWF4LCBjYWxsYmFjaywgYWRkT3B0aW9ucyk7XG4gICAgdGhpcy5hZGRUb0NvbnRlbnQoaWQsIGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgRE9NVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL0RPTVV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiB7XG4gIGNvbnN0cnVjdG9yKHNlY3Rpb24sIHRleHQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGw7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCAkYnV0dG9uID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB0aGlzLnNlY3Rpb24sIHsgY2xhc3NOYW1lOiBcImVzLWJvZHlfX3NlY3Rpb25fX2J1dHRvblwiLCBpbm5lckhUTUw6IHRoaXMudGV4dCB9KTtcblxuICAgIHRoaXMuZWxlbWVudCA9ICRidXR0b247XG5cbiAgICB0aGlzLmJpbmRDYWxsYmFjaygpO1xuICB9XG5cbiAgYmluZENhbGxiYWNrKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmdldFZhbHVlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5pbm5lckhUTUw7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWwpIHtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdmFsO1xuICB9XG59XG4iLCJpbXBvcnQgRE9NVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL0RPTVV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IHtcbiAgY29uc3RydWN0b3Ioc2VjdGlvbiwgbGFiZWwsIGNoZWNrZWQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbnVsbDtcbiAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgJGxhYmVsID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHRoaXMuc2VjdGlvbiwgeyBjbGFzc05hbWU6IFwiZXMtYm9keV9fc2VjdGlvbl9fbGFiZWxcIiB9KTtcblxuICAgIGNvbnN0ICRjaGVja2JveCA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCAkbGFiZWwsIHsgY2xhc3NOYW1lOiBcImJvZHlfX3NlY3Rpb25fX2NoZWNrYm94XCIsIGlubmVySFRNTDogdGhpcy5sYWJlbCwgY2hlY2tlZDogdGhpcy5jaGVja2VkIH0sIHsgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIiB9KTtcblxuICAgIGNvbnN0ICRpY29uID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgJGxhYmVsLCB7IGNsYXNzTmFtZTogXCJlcy1ib2R5X19zZWN0aW9uX19sYWJlbF9faWNvblwiIH0sIHsgdGFiaW5kZXg6IDAgfSk7IC8vIGxhYmVsSWNvblxuXG4gICAgRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgJGljb24sIHsgY2xhc3NOYW1lOiBcImVzLWJvZHlfX3NlY3Rpb25fX2xhYmVsX19pY29uLS1mb2N1c2VkXCIgfSk7IC8vIGxhYmVsSWNvbkZvY3VzZWRcblxuICAgIERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsICRsYWJlbCwgeyBjbGFzc05hbWU6IFwiZXMtYm9keV9fc2VjdGlvbl9fbGFiZWxfX3RleHRcIiwgaW5uZXJIVE1MOiB0aGlzLmxhYmVsIH0pOyAvLyBsYWJlbFRleHRcblxuICAgICRpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzMiB8fCBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICRjaGVja2JveC5jaGVja2VkID0gISRjaGVja2JveC5jaGVja2VkO1xuICAgICAgICBET01VdGlscy5kaXNwYXRjaEV2ZW50KCRjaGVja2JveCwgXCJjaGFuZ2VcIik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSAkY2hlY2tib3g7XG5cbiAgICB0aGlzLmJpbmRDYWxsYmFjaygpO1xuICB9XG5cbiAgYmluZENhbGxiYWNrKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5nZXRWYWx1ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2hlY2tlZDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbCkge1xuICAgIHRoaXMuZWxlbWVudC5jaGVja2VkID0gdmFsO1xuICB9XG59XG4iLCJpbXBvcnQgRE9NVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL0RPTVV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3Ioc2VjdGlvbiwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuc2VjdGlvbiA9IHNlY3Rpb247XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCBbXTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbnVsbDtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0ICRkcm9wZG93biA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgdGhpcy5zZWN0aW9uLCB7IGNsYXNzTmFtZTogXCJib2R5X19zZWN0aW9uX19kcm9wZG93blwiIH0pO1xuXG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2goKHYpID0+IHtcbiAgICAgIGNvbnN0ICRvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgJG9wdGlvbi5pbm5lckhUTUwgPSB2O1xuICAgICAgJGRyb3Bkb3duLmFwcGVuZENoaWxkKCRvcHRpb24pO1xuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudCA9ICRkcm9wZG93bjtcblxuICAgIHRoaXMuYmluZENhbGxiYWNrKCk7XG4gIH1cblxuICBiaW5kQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmdldFZhbHVlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbCkge1xuICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbDtcbiAgfVxufVxuIiwiaW1wb3J0IERPTVV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9ET01VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcihzZWN0aW9uLCB0ZXh0KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCAkaGVhZGVyID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcInBcIiwgdGhpcy5zZWN0aW9uLCB7IGNsYXNzTmFtZTogXCJib2R5X19zZWN0aW9uX19oZWFkZXJcIiwgaW5uZXJIVE1MOiB0aGlzLnRleHQgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSAkaGVhZGVyO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5pbm5lckhUTUw7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWwpIHtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdmFsO1xuICB9XG59XG4iLCJpbXBvcnQgRE9NVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL0RPTVV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcbiAgY29uc3RydWN0b3Ioc2VjdGlvbiwgdHlwZSwgdmFsdWUsIGNhbGxiYWNrLCBhZGRPcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBudWxsO1xuICAgIHRoaXMuYWRkT3B0aW9ucyA9IGFkZE9wdGlvbnM7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICBjb25zdCAkaW5wdXRHcm91cCA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHRoaXMuc2VjdGlvbiwgeyBjbGFzc05hbWU6IFwiZXMtYm9keV9fc2VjdGlvbl9faW5wdXQtZ3JvdXBcIiB9KTtcblxuICAgIGNvbnN0ICRpbnB1dCA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCAkaW5wdXRHcm91cCwgeyBjbGFzc05hbWU6IGBlcy1ib2R5X19zZWN0aW9uX19pbnB1dCBlcy1ib2R5X19zZWN0aW9uX19pbnB1dC0tJHt0aGlzLnR5cGV9YCwgdmFsdWU6IHRoaXMudmFsdWUgfSwgeyB0eXBlOiB0aGlzLnR5cGUgfSk7XG5cbiAgICBpZiAodGhpcy5hZGRPcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5hZGRPcHRpb25zLm1pbiAhPT0gbnVsbCkge1xuICAgICAgICAkaW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIHRoaXMuYWRkT3B0aW9ucy5taW4pO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hZGRPcHRpb25zLm1pbiAhPT0gbnVsbCkge1xuICAgICAgICAkaW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIHRoaXMuYWRkT3B0aW9ucy5tYXgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5hZGRPcHRpb25zLnBsYWNlaG9sZGVyICE9PSBudWxsKSB7XG4gICAgICAgICRpbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuYWRkT3B0aW9ucy5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBET01VdGlscy5jcmVhdGVFbGVtZW50KFwic3BhblwiLCAkaW5wdXRHcm91cCwgeyBjbGFzc05hbWU6IFwiZXMtYm9keV9fc2VjdGlvbl9faW5wdXQtdW5kZXJsaW5lXCIgfSk7IC8vIFVuZGVybGluZVxuXG4gICAgdGhpcy5lbGVtZW50ID0gJGlucHV0O1xuXG4gICAgdGhpcy5iaW5kQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGJpbmRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5nZXRWYWx1ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIGlmICh0aGlzLmFkZE9wdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLmFkZE9wdGlvbnMubWluICE9PSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmFkZE9wdGlvbnMubWluID4gdGhpcy5lbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYWRkT3B0aW9ucy5taW47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYWRkT3B0aW9ucy5tYXggIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuYWRkT3B0aW9ucy5tYXggPCB0aGlzLmVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hZGRPcHRpb25zLm1heDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWU7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWwpIHtcbiAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWw7XG4gIH1cbn1cbiIsImltcG9ydCBET01VdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvRE9NVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8ge1xuICBjb25zdHJ1Y3RvcihzZWN0aW9uLCBpbmRleCwgb3B0aW9ucywgY2hlY2tlZEluZGV4LCBjYWxsYmFjaykge1xuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5yYWRpb3MgPSBbXTtcbiAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IFtdO1xuICAgIHRoaXMuY2hlY2tlZEluZGV4ID0gY2hlY2tlZEluZGV4O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBudWxsO1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgJGdyb3VwID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcImRpdlwiLCB0aGlzLnNlY3Rpb24sIHsgY2xhc3NOYW1lOiBcImVzLWJvZHlfX3NlY3Rpb25fX3JhZGlvLWdyb3VwXCIgfSk7XG5cbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgodiwgaSkgPT4ge1xuICAgICAgY29uc3QgJGxhYmVsID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsICRncm91cCwgeyBjbGFzc05hbWU6IFwiZXMtYm9keV9fc2VjdGlvbl9fbGFiZWxcIiB9KTtcblxuICAgICAgY29uc3QgJHJhZGlvID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcImlucHV0XCIsICRsYWJlbCwgeyBjbGFzc05hbWU6IFwiZXMtYm9keV9fc2VjdGlvbl9fY2hlY2tib3hcIiwgY2hlY2tlZDogKGkgPT09IHRoaXMuY2hlY2tlZEluZGV4KSB9LCB7IHR5cGU6IFwicmFkaW9cIiwgbmFtZTogYEVhc3lTZXR0aW5nc1BhbmVsLSR7dGhpcy5pbmRleH1gIH0pO1xuXG4gICAgICBjb25zdCAkaWNvbiA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsICRsYWJlbCwgeyBjbGFzc05hbWU6IFwiZXMtYm9keV9fc2VjdGlvbl9fbGFiZWxfX2ljb25cIiB9LCB7IHRhYmluZGV4OiAwIH0pOyAvLyBMYWJlbCBpY29uXG5cbiAgICAgIERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsICRpY29uLCB7IGNsYXNzTmFtZTogXCJlcy1ib2R5X19zZWN0aW9uX19sYWJlbF9faWNvbi0tZm9jdXNlZFwiIH0pOyAvLyBsYWJlbEljb25Gb2N1c2VkXG5cbiAgICAgICRpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDMyIHx8IGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICB0aGlzLnNldFZhbHVlKGkpO1xuICAgICAgICAgIERPTVV0aWxzLmRpc3BhdGNoRXZlbnQoJGdyb3VwLCBcImNoYW5nZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsICRsYWJlbCwgeyBpbm5lckhUTUw6IHYgfSk7IC8vIExhYmVsIHRleHRcblxuICAgICAgdGhpcy5yYWRpb3MucHVzaCgkcmFkaW8pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gJGdyb3VwO1xuXG4gICAgdGhpcy5iaW5kQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGJpbmRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKCh2LCBpKSA9PiB7XG4gICAgICBpZiAodi5jaGVja2VkKSB7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbCkge1xuICAgIHRoaXMucmFkaW9zLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgIHYuY2hlY2tlZCA9IChpID09PSB2YWwpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBET01VdGlscyBmcm9tIFwiLi4vLi4vdXRpbHMvRE9NVXRpbHNcIjtcbmltcG9ydCBTbGlkZXJNb3ZlbWVudE1hbmFnZXIgZnJvbSBcIi4vU2xpZGVyTW92ZW1lbnRNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciB7XG4gIGNvbnN0cnVjdG9yKHNlY3Rpb24sIHZhbHVlLCBtaW4sIG1heCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuc2VjdGlvbiA9IHNlY3Rpb247XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubWluID0gbWluO1xuICAgIHRoaXMubWF4ID0gbWF4O1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBudWxsO1xuICAgIHRoaXMuU2xpZGVyTW92ZW1lbnRNYW5hZ2VyID0gbnVsbDtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIGNvbnN0ICRpbnB1dEdyb3VwID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgdGhpcy5zZWN0aW9uLCB7IGNsYXNzTmFtZTogXCJlcy1ib2R5X19zZWN0aW9uX19zbGlkZXItZ3JvdXBcIiB9KTtcblxuICAgIGlmICh0aGlzLm1pbiA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5taW4gPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1heCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5tYXggPSAxMDA7XG4gICAgfVxuXG4gICAgY29uc3QgJGlucHV0ID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcImlucHV0XCIsICRpbnB1dEdyb3VwLCB7IGNsYXNzTmFtZTogXCJlcy1ib2R5X19zZWN0aW9uX19zbGlkZXJcIiB9LCB7IHR5cGU6IFwicmFuZ2VcIiwgbWluOiB0aGlzLm1pbiwgbWF4OiB0aGlzLm1heCwgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG5cbiAgICBjb25zdCAkdHJhY2sgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICRpbnB1dEdyb3VwLCB7IGNsYXNzTmFtZTogXCJlcy1ib2R5X19zZWN0aW9uX19zbGlkZXItdHJhY2tcIiB9KTsgLy8gVHJhY2tcbiAgICBjb25zdCAkdHJhY2tWYWx1ZSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgJHRyYWNrLCB7IGNsYXNzTmFtZTogXCJlcy1ib2R5X19zZWN0aW9uX19zbGlkZXItdHJhY2tfX3NsaWRlci12YWx1ZVwiIH0pOyAvLyBUcmFja1xuICAgIGNvbnN0ICRoYW5kbGUgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsICR0cmFjaywgeyBjbGFzc05hbWU6IFwiZXMtYm9keV9fc2VjdGlvbl9fc2xpZGVyLXRyYWNrX19zbGlkZXItaGFuZGxlXCIgfSk7IC8vIFRyYWNrXG5cbiAgICB0aGlzLlNsaWRlck1vdmVtZW50TWFuYWdlciA9IG5ldyBTbGlkZXJNb3ZlbWVudE1hbmFnZXIoJGhhbmRsZSwgJHRyYWNrLCAkaW5wdXQsICR0cmFja1ZhbHVlKTtcblxuICAgIHRoaXMuU2xpZGVyTW92ZW1lbnRNYW5hZ2VyLnNldEhhbmRsZVZhbHVlKHRoaXMudmFsdWUpO1xuXG4gICAgJGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnZhbHVlKys7XG4gICAgICAgIERPTVV0aWxzLmRpc3BhdGNoRXZlbnQodGhpcy5lbGVtZW50LCBcImlucHV0XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgICB0aGlzLmVsZW1lbnQudmFsdWUtLTtcbiAgICAgICAgRE9NVXRpbHMuZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIFwiaW5wdXRcIik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSAkaW5wdXQ7XG5cbiAgICB0aGlzLmJpbmRDYWxsYmFjaygpO1xuICB9XG5cbiAgYmluZENhbGxiYWNrKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgdGhpcy5TbGlkZXJNb3ZlbWVudE1hbmFnZXIuc2V0SGFuZGxlVmFsdWUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQudmFsdWU7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWwpIHtcbiAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWw7XG4gICAgdGhpcy5TbGlkZXJNb3ZlbWVudE1hbmFnZXIuc2V0SGFuZGxlVmFsdWUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IERPTVV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9ET01VdGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0cmFja01vdmVtZW50TWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZSwgdHJhY2ssIGlucHV0LCB0cmFja1ZhbHVlKSB7XG4gICAgLy8gdGhpcy5wYW5lbCA9IHBhbmVsO1xuICAgIHRoaXMuaGFuZGxlID0gaGFuZGxlO1xuICAgIHRoaXMudHJhY2sgPSB0cmFjaztcbiAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy50cmFja1ZhbHVlID0gdHJhY2tWYWx1ZTtcblxuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICB0aGlzLnN0YXJ0UG9zID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuc3RhcnRQb3NPZlBhbmVsID0ge1xuICAgICAgeDogOCxcbiAgICAgIHk6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlTW92ZW1lbnQgPSB0aGlzLmhhbmRsZU1vdmVtZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIHRoaXMuaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuc3RhcnRQb3MgPSB7XG4gICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgIHk6IGUucGFnZVksXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYW5kbGVPZmZzZXQgPSB0aGlzLmhhbmRsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHRyYWNrT2Zmc2V0ID0gdGhpcy50cmFjay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgdGhpcy5zdGFydFBvc09mUGFuZWwgPSB7XG4gICAgICAgIHg6IGhhbmRsZU9mZnNldC5sZWZ0IC0gdHJhY2tPZmZzZXQubGVmdCxcbiAgICAgIH07XG5cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5oYW5kbGVNb3ZlbWVudCk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5oYW5kbGVNb3ZlbWVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZU1vdmVtZW50KGUpIHtcbiAgICB0aGlzLm9mZnNldCA9IHRoaXMuc3RhcnRQb3NPZlBhbmVsLnggKyAoZS5wYWdlWCAtIHRoaXMuc3RhcnRQb3MueCk7XG4gICAgaWYgKHRoaXMub2Zmc2V0IDwgMCkge1xuICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9mZnNldCA+ICh0aGlzLnRyYWNrLm9mZnNldFdpZHRoIC0gdGhpcy5oYW5kbGUub2Zmc2V0V2lkdGgpKSB7XG4gICAgICB0aGlzLm9mZnNldCA9IHRoaXMudHJhY2sub2Zmc2V0V2lkdGggLSB0aGlzLmhhbmRsZS5vZmZzZXRXaWR0aDtcbiAgICB9XG5cbiAgICB0aGlzLm1pblZhbHVlU3R5bGUoKTtcbiAgICB0aGlzLmhhbmRsZS5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5vZmZzZXR9cHhgO1xuXG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlKCk7XG4gIH1cblxuICBzZXRJbnB1dFZhbHVlKCkge1xuICAgIGNvbnN0IG1heCA9IHRoaXMudHJhY2sub2Zmc2V0V2lkdGggLSB0aGlzLmhhbmRsZS5vZmZzZXRXaWR0aDtcblxuICAgIGNvbnN0ICRpbnB1dE1pbiA9IHRoaXMuaW5wdXQuZ2V0QXR0cmlidXRlKFwibWluXCIpICogMTtcbiAgICBjb25zdCAkaW5wdXRNYXggPSB0aGlzLmlucHV0LmdldEF0dHJpYnV0ZShcIm1heFwiKSAtICRpbnB1dE1pbjtcblxuICAgIHRoaXMuaW5wdXQudmFsdWUgPSAoJGlucHV0TWF4ICogKHRoaXMub2Zmc2V0IC8gbWF4KSkgKyAkaW5wdXRNaW47XG5cbiAgICBET01VdGlscy5kaXNwYXRjaEV2ZW50KHRoaXMuaW5wdXQsIFwiaW5wdXRcIik7XG4gIH1cblxuICBzZXRIYW5kbGVWYWx1ZSgpIHtcbiAgICBjb25zdCBtYXggPSB0aGlzLnRyYWNrLm9mZnNldFdpZHRoIC0gdGhpcy5oYW5kbGUub2Zmc2V0V2lkdGg7XG5cbiAgICBjb25zdCAkaW5wdXRNaW4gPSB0aGlzLmlucHV0LmdldEF0dHJpYnV0ZShcIm1pblwiKSAqIDE7XG4gICAgY29uc3QgJGlucHV0TWF4ID0gdGhpcy5pbnB1dC5nZXRBdHRyaWJ1dGUoXCJtYXhcIikgLSAkaW5wdXRNaW47XG5cbiAgICB0aGlzLnRyYWNrVmFsdWUuc3R5bGUud2lkdGggPSBgJHsxMDAgKiAoKHRoaXMuaW5wdXQudmFsdWUgLSAkaW5wdXRNaW4pIC8gJGlucHV0TWF4KX0lYDtcblxuICAgIHRoaXMub2Zmc2V0ID0gbWF4ICogKCh0aGlzLmlucHV0LnZhbHVlIC0gJGlucHV0TWluKSAvICRpbnB1dE1heCk7XG5cbiAgICB0aGlzLm1pblZhbHVlU3R5bGUoKTtcbiAgICB0aGlzLmhhbmRsZS5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5vZmZzZXR9cHhgO1xuICB9XG5cbiAgbWluVmFsdWVTdHlsZSgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5oYW5kbGUuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKTtcbiAgICBjb25zdCBtaW5WYWxDbGFzcyA9IFwiZXMtYm9keV9fc2VjdGlvbl9fc2xpZGVyLXRyYWNrX19zbGlkZXItaGFuZGxlLS1taW4tdmFsdWVcIjtcbiAgICBjb25zdCBpbmRleCA9IGNsYXNzZXMuaW5kZXhPZihtaW5WYWxDbGFzcyk7XG4gICAgaWYgKHRoaXMub2Zmc2V0IDw9IDApIHtcbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKG1pblZhbENsYXNzKTtcbiAgICAgICAgdGhpcy5oYW5kbGUuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKFwiIFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIGNsYXNzZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuaGFuZGxlLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbihcIiBcIik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgRE9NVXRpbHMgZnJvbSBcIi4uLy4uL3V0aWxzL0RPTVV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIHtcbiAgY29uc3RydWN0b3Ioc2VjdGlvbiwgdmFsdWUsIGNhbGxiYWNrLCBhZGRPcHRpb25zKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbnVsbDtcbiAgICB0aGlzLmFkZE9wdGlvbnMgPSBhZGRPcHRpb25zO1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc3QgJGlucHV0R3JvdXAgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB0aGlzLnNlY3Rpb24sIHsgY2xhc3NOYW1lOiBcImVzLWJvZHlfX3NlY3Rpb25fX2lucHV0LWdyb3VwXCIgfSk7XG5cbiAgICBjb25zdCAkaW5wdXQgPSBET01VdGlscy5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgJGlucHV0R3JvdXAsIHsgY2xhc3NOYW1lOiBcImVzLWJvZHlfX3NlY3Rpb25fX2lucHV0IGVzLWJvZHlfX3NlY3Rpb25fX2lucHV0LS10ZXh0YXJlYVwiLCBpbm5lckhUTUw6IHRoaXMudmFsdWUgfSk7XG5cbiAgICBpZiAodGhpcy5hZGRPcHRpb25zLnBsYWNlaG9sZGVyICE9PSBudWxsKSB7XG4gICAgICAkaW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLmFkZE9wdGlvbnMucGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgRE9NVXRpbHMuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgJGlucHV0R3JvdXAsIHsgY2xhc3NOYW1lOiBcImVzLWJvZHlfX3NlY3Rpb25fX2lucHV0LXVuZGVybGluZVwiIH0pOyAvLyBVbmRlcmxpbmVcblxuICAgIHRoaXMuZWxlbWVudCA9ICRpbnB1dDtcblxuICAgIHRoaXMuYmluZENhbGxiYWNrKCk7XG4gIH1cblxuICBiaW5kQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxiYWNrKHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmlubmVySFRNTDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbCkge1xuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB2YWw7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTVV0aWxzIHtcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQodHlwZSwgcGFyZW50LCBvcHRpb25zLCBhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgJGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zKSkge1xuICAgICAgICAkZWxba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgICAkZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCgkZWwpO1xuICAgIH1cblxuICAgIHJldHVybiAkZWw7XG4gIH1cblxuICBzdGF0aWMgZGlzcGF0Y2hFdmVudChlbGVtZW50LCBldmVudCkge1xuICAgIGlmIChcImNyZWF0ZUV2ZW50XCIgaW4gZG9jdW1lbnQpIHtcbiAgICAgIGNvbnN0IGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtcbiAgICAgIGV2dC5pbml0RXZlbnQoZXZlbnQsIGZhbHNlLCB0cnVlKTtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmZpcmVFdmVudChcIm9uY2hhbmdlXCIpO1xuICAgIH1cbiAgfVxufVxuIl19