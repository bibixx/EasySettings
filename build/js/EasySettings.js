(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/get-iterator.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/get-iterator.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/is-iterable.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/is-iterable.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/json/stringify.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/json/stringify.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/object/define-property.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/object/define-property.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/object/entries.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/entries"), __esModule: true };
},{"core-js/library/fn/object/entries":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/object/entries.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/object/keys.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/object/keys.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js":[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js":[function(require,module,exports){
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
},{"../core-js/object/define-property":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/object/define-property.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/slicedToArray.js":[function(require,module,exports){
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
},{"../core-js/get-iterator":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/get-iterator.js","../core-js/is-iterable":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/is-iterable.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/get-iterator.js":[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');
},{"../modules/core.get-iterator":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/core.get-iterator.js","../modules/es6.string.iterator":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es6.string.iterator.js","../modules/web.dom.iterable":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/web.dom.iterable.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/is-iterable.js":[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.is-iterable');
},{"../modules/core.is-iterable":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/core.is-iterable.js","../modules/es6.string.iterator":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es6.string.iterator.js","../modules/web.dom.iterable":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/web.dom.iterable.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/json/stringify.js":[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_core.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/object/define-property.js":[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.define-property":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es6.object.define-property.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/object/entries.js":[function(require,module,exports){
require('../../modules/es7.object.entries');
module.exports = require('../../modules/_core').Object.entries;
},{"../../modules/_core":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_core.js","../../modules/es7.object.entries":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es7.object.entries.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/object/keys.js":[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;
},{"../../modules/_core":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.keys":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es6.object.keys.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_a-function.js":[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_add-to-unscopables.js":[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_an-object.js":[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_is-object.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_array-includes.js":[function(require,module,exports){
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
},{"./_to-index":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-index.js","./_to-iobject":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-iobject.js","./_to-length":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-length.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_classof.js":[function(require,module,exports){
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
},{"./_cof":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_cof.js","./_wks":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_wks.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_cof.js":[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_core.js":[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_ctx.js":[function(require,module,exports){
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
},{"./_a-function":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_a-function.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_defined.js":[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_descriptors.js":[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_fails.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_dom-create.js":[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_global.js","./_is-object":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_is-object.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_enum-bug-keys.js":[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_export.js":[function(require,module,exports){
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
},{"./_core":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_core.js","./_ctx":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_ctx.js","./_global":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_global.js","./_hide":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_hide.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_fails.js":[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_global.js":[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_has.js":[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_hide.js":[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_descriptors.js","./_object-dp":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-dp.js","./_property-desc":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_property-desc.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_html.js":[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_global.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_ie8-dom-define.js":[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_descriptors.js","./_dom-create":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_dom-create.js","./_fails":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_fails.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iobject.js":[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_cof.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_is-object.js":[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iter-create.js":[function(require,module,exports){
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
},{"./_hide":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_hide.js","./_object-create":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-create.js","./_property-desc":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_property-desc.js","./_set-to-string-tag":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_set-to-string-tag.js","./_wks":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_wks.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iter-define.js":[function(require,module,exports){
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
},{"./_export":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_export.js","./_has":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_has.js","./_hide":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_hide.js","./_iter-create":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iter-create.js","./_iterators":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iterators.js","./_library":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_library.js","./_object-gpo":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-gpo.js","./_redefine":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_redefine.js","./_set-to-string-tag":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_set-to-string-tag.js","./_wks":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_wks.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iter-step.js":[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iterators.js":[function(require,module,exports){
module.exports = {};
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_library.js":[function(require,module,exports){
module.exports = true;
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-create.js":[function(require,module,exports){
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

},{"./_an-object":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_an-object.js","./_dom-create":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_dom-create.js","./_enum-bug-keys":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_enum-bug-keys.js","./_html":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_html.js","./_object-dps":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-dps.js","./_shared-key":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_shared-key.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-dp.js":[function(require,module,exports){
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
},{"./_an-object":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_an-object.js","./_descriptors":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_descriptors.js","./_ie8-dom-define":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_ie8-dom-define.js","./_to-primitive":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-primitive.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-dps.js":[function(require,module,exports){
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
},{"./_an-object":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_an-object.js","./_descriptors":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_descriptors.js","./_object-dp":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-dp.js","./_object-keys":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-keys.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-gpo.js":[function(require,module,exports){
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
},{"./_has":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_has.js","./_shared-key":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_shared-key.js","./_to-object":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-object.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-keys-internal.js":[function(require,module,exports){
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
},{"./_array-includes":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_array-includes.js","./_has":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_has.js","./_shared-key":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_shared-key.js","./_to-iobject":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-iobject.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-keys.js":[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_enum-bug-keys.js","./_object-keys-internal":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-keys-internal.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-pie.js":[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-sap.js":[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_core.js","./_export":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_export.js","./_fails":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_fails.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-to-array.js":[function(require,module,exports){
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
},{"./_object-keys":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-keys.js","./_object-pie":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-pie.js","./_to-iobject":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-iobject.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_property-desc.js":[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_redefine.js":[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_hide.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_set-to-string-tag.js":[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_has.js","./_object-dp":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-dp.js","./_wks":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_wks.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_shared-key.js":[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_shared.js","./_uid":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_uid.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_shared.js":[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_global.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_string-at.js":[function(require,module,exports){
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
},{"./_defined":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_defined.js","./_to-integer":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-integer.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-index.js":[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-integer.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-integer.js":[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-iobject.js":[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_defined.js","./_iobject":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iobject.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-length.js":[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-integer.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-object.js":[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_defined.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-primitive.js":[function(require,module,exports){
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
},{"./_is-object":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_is-object.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_uid.js":[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_wks.js":[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_global.js","./_shared":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_shared.js","./_uid":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_uid.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/core.get-iterator-method.js":[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_classof.js","./_core":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_core.js","./_iterators":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iterators.js","./_wks":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_wks.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/core.get-iterator.js":[function(require,module,exports){
var anObject = require('./_an-object')
  , get      = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./_an-object":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_an-object.js","./_core":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_core.js","./core.get-iterator-method":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/core.get-iterator-method.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/core.is-iterable.js":[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./_classof":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_classof.js","./_core":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_core.js","./_iterators":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iterators.js","./_wks":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_wks.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es6.array.iterator.js":[function(require,module,exports){
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
},{"./_add-to-unscopables":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_add-to-unscopables.js","./_iter-define":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iter-define.js","./_iter-step":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iter-step.js","./_iterators":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iterators.js","./_to-iobject":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-iobject.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es6.object.define-property.js":[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_descriptors.js","./_export":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_export.js","./_object-dp":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-dp.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es6.object.keys.js":[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object')
  , $keys    = require('./_object-keys');

require('./_object-sap')('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./_object-keys":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-keys.js","./_object-sap":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-sap.js","./_to-object":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_to-object.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es6.string.iterator.js":[function(require,module,exports){
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
},{"./_iter-define":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iter-define.js","./_string-at":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_string-at.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es7.object.entries.js":[function(require,module,exports){
// https://github.com/tc39/proposal-object-values-entries
var $export  = require('./_export')
  , $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});
},{"./_export":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_export.js","./_object-to-array":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-to-array.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/web.dom.iterable.js":[function(require,module,exports){
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
},{"./_global":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_global.js","./_hide":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_hide.js","./_iterators":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_iterators.js","./_wks":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_wks.js","./es6.array.iterator":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es6.array.iterator.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/EasySettings.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

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

/**
 * @module Panel
*/

var dif = false;

var isSetupDone = false;

/**
 * Creates a panel.
 * @class
 * @param {number} [x] - specifies initial x position of panel
 * @param {number} [y] - specifies initial y position of panel
 * @param {string} [title] - specifies title of panel
 * @example
 * const panel = new EasySettings();
 */

var EasySettings = function () {
  function EasySettings(x, y, title) {
    (0, _classCallCheck3.default)(this, EasySettings);

    this.container = null;
    this.header = null;
    this.body = null;
    this.sections = [];
    this.elements = {};
    this.elementsInOrder = [];
    this.title = title;
    this.pos = {
      x: x || 8,
      y: y || 8
    };

    if (!isSetupDone && !dif) {
      EasySettings.createHeaderTags();
    }

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

    /**
     * Creates section
     * @returns {module:Panel} Panel that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.createSection();
    */

  }, {
    key: "createSection",
    value: function createSection() {
      var newSection = new _Section2.default(this.body, this.elements, this.sections.length, this.elementsInOrder);
      this.sections.push(newSection);
      return newSection;
    }

    /**
     * Gets value of component
     * @param {string} id - id of the component which value is going to be returned
     * @returns {string|number|boolean} Value of component wiht specified id
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addTextInput( "input-text", { value: "EasySettings" } );
     * console.log( panel.getValue( "input-text" ) ); // logs EasySettings
      * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addNumberInput( "input-number", { value: Math.round( Math.PI * 100 ) } );
     * console.log( panel.getValue( "input-number" ) ); // logs 314
      * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addCheckbox( "checkbox", { label: "Value 1", checked: true });
     * console.log( panel.getValue( "checkbox" ) ); // logs true
    */

  }, {
    key: "getValue",
    value: function getValue(id) {
      return this.elements[id].getValue();
    }

    /**
     * Sets value of component
     * @param {string} id - id of the component which value is going to be changed
     * @param {string|number|boolean} value - value that component is supposed to have
      * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addTextInput( "input-text", { value: "EasySettings" } );
     * panel.setValue( "input-text", "EasySettings2" ); // input now says ”EasySettings2”
      * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addNumberInput( "input-number", { value: Math.round( Math.PI * 100 ) } );
     * panel.setValue( "input-number", 13 ); // input now says 13
      * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addCheckbox( "checkbox", { label: "Value 1", checked: true });
     * panel.setValue( "checkbox", false ); // checkbox is off
    */

  }, {
    key: "setValue",
    value: function setValue(id, value) {
      this.elements[id].setValue(value);
    }

    /**
     * Toggles determination of progress bar
     * @param {string} id - id of the progress bar which is going to be changed
      * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addProgress( "progress", { value: 0.33, indeterminate: true } );
     * panel.toggleIndeterminate( "progress" ); // progress bar now is not indeterminate
    */

  }, {
    key: "toggleIndeterminate",
    value: function toggleIndeterminate(id) {
      this.elements[id].toggleIndeterminate();
    }

    /**
     * Returns values of all components that have specified id
     * @returns {string}
     * @example
     * const panel = new EasySettings();
     * panel.createSection()
     *  .addDropdown( "dropdown", { options: ["Dropdown option #1", "Dropdown option #2"] } );
     * panel.createSection()
     *  .addSlider( "slider", { value: 25, min: 0, max: 1000 } );
     * panel.createSection()
     *  .addNumberInput( "input-number-slider", { value: 0, step: 0.5, min: 0, max: 1 } );
     * console.log( panel.getValuesAsJSON() );
     * // logs
     * // {
     * //   dropdown: "Dropdown option #1",
     * //   input-number-slider: 0,
     * //   slider: 25
     * // }
    */

  }, {
    key: "getValuesAsJSON",
    value: function getValuesAsJSON() {
      var _this = this;

      var values = {};
      (0, _keys2.default)(this.elements).forEach(function (key) {
        values[key] = _this.getValue(key);
      });
      return (0, _stringify2.default)(values);
    }

    /**
     * Sets values of all components from JSON object
     * @param {object.<string, string|number>} value - object that specifies what values should components have (key => id, value => value to be set)
     * @example
     * const panel = new EasySettings();
     * panel.createSection()
     *  .addDropdown( "dropdown", { options: ["Dropdown option #1", "Dropdown option #2"] } );
     * panel.createSection()
     *  .addSlider( "slider", { value: 25, min: 0, max: 1000 } );
     * panel.createSection()
     *  .addNumberInput( "input-number-slider", { value: 0, step: 0.5, min: 0, max: 1 } );
     * panel.setValuesFromJSON(
     *   {
     *     dropdown: "Dropdown option #2",
     *     input-number-slider: 4,
     *     slider: 75
     *   }
     * );
    */

  }, {
    key: "setValuesFromJSON",
    value: function setValuesFromJSON(values) {
      var _this2 = this;

      (0, _keys2.default)(values).forEach(function (key) {
        if (typeof _this2.elements[key] !== "undefined") {
          _this2.setValue(key, values[key]);
        }
      });
      return values;
    }

    /**
     * Exports panel to JSON
     * @returns {string}
     * @example
     * const panel = new EasySettings( 8, 8, "My panel" );
     * panel.createSection()
     *  .addDropdown( "dropdown", { options: ["Dropdown option #1", "Dropdown option #2"] } );
     * panel.createSection()
     *  .addSlider( "slider", { value: 25, min: 0, max: 1000 } );
     * panel.createSection()
     *  .addNumberInput( "input-number-slider", { value: 0, step: 0.5, min: 0, max: 1 } );
     * console.log( panel.exportPanelToJSON() );
     *
     * // logs:
     * // '{
     * //   "title": "My panel",
     * //   "pos": {
     * //     "x" :8,
     * //     "y": 8
     * //   },
     * //   "components": [
     * //     [
     * //       {
     * //         "id": "dropdown",
     * //         "options": {
     * //           "options": [ "Dropdown option #1", "Dropdown option #2" ]
     * //         },
     * //         "callback": "( v ) => { console.log( v ); }",
     * //         "type": "addDropdown"
     * //       },
     * //       {
     * //         "id": "slider",
     * //         "options": {
     * //           "value": 25,
     * //           "min": 0,
     * //           "max": 1000
     * //         },
     * //         "callback": null,
     * //         "type": "addSlider"
     * //       }
     * //     ],
     * //     [
     * //       {
     * //         "id": "input-number-slider",
     * //         "options": {
     * //           "value": 0,
     * //           "step": 0.5,
     * //           "min": 0,
     * //           "max": 1
     * //         },
     * //         "callback": null,
     * //         "type": "addNumberInput"
     * //       }
     * //     ]
     * //   ]
     * // }'
    */

  }, {
    key: "exportPanelToJSON",
    value: function exportPanelToJSON() {
      return (0, _stringify2.default)({
        title: this.title,
        pos: this.pos,
        components: this.elementsInOrder
      });
    }

    /**
     * Create panel using JSON
     * @param {JSON} json - object from which panel will be created
     * @see For scheme of json: {@link module:Panel#exportPanelToJSON}
     * @example
     * var panel1 = EasySettings.createPanelFromJSON({"title": "My panel","pos":{"x":8,"y":8},"components":[[{"id":"dropdown","options":{"options":["Dropdownoption#1","Dropdownoption#2"]},"callback":"(v)=>{console.log(v);}","type":"addDropdown"},{"id":"slider","options":{"value":25,"min":0,"max":1000},"callback":null,"type":"addSlider"}],[{"id":"input-number-slider","options":{"value":0,"step":0.5,"min":0,"max":1},"callback":null,"type":"addNumberInput"}]]});
    */

  }, {
    key: "animateValue",


    /**
     * Animates value of component to specified value. Note: This method works only with [NumberInput]{@link module:Section#addNumberInput} and [Slider]{@link module:Section#addSlider}
     * @param {string} id - id of the progress bar which is going to be changed
     * @param {number} to - final value of component
     * @param {number} duration - duration of animation
      * @example
     * const panel = new EasySettings();
     * panel.createSection()
     *   .addSlider( "slider", { value: 25, min: 0, max: 1000 }, ( v ) => {
     *     panel.setValue( "input-number-slider", v );
     *   } )
     *   .addButton( null, null, () => {
     *     panel.animateValue( "slider", 500, 500 );
     *   } );
     * // after clicking the button slider will animate till it gets to the value of 500
    */

    value: function animateValue(id, to, duration) {
      var _this3 = this;

      var isValidName = false;
      var element = this.elements[id];
      switch (element.constructor.name) {
        case "Slider":
          isValidName = true;
          break;
        case "Input":
          if (element.type === "number") {
            isValidName = true;
          } else {
            isValidName = false;
          }
          break;
        default:
          isValidName = false;
      }

      if (isValidName) {
        (function () {
          clearInterval(_this3.elements[id].animationInterval);
          var value = element.element.value * 1;
          var incBy = (to - value) / duration;
          var step = element.element.step;

          var round = function round(a) {
            var roundingFactor = Math.abs(step - Math.floor(step));
            if (roundingFactor === 0) {
              roundingFactor = 1;
            }

            return Math.round(a / step) * step;
          };

          if (incBy !== 0) {
            _this3.elements[id].animationInterval = setInterval(function () {
              if (incBy > 0 && element.element.value * 1 >= to || incBy < 0 && element.element.value * 1 <= to) {
                clearInterval(_this3.elements[id].animationInterval);
                _this3.elements[id].animationInterval = null;
                element.setValue(round(to));
              } else {
                value += incBy;
                element.setValue(round(value));
              }
            }, 1);
          }
        })();
      } else {
        throw new Error("You used animation on not supported type of component.");
      }
    }
  }], [{
    key: "createHeaderTags",
    value: function createHeaderTags() {
      isSetupDone = true;

      _DOMUtils2.default.createElement("link", document.head, null, { href: "https://fonts.googleapis.com/css?family=Roboto+Mono|Roboto:400,500|Material+Icons", rel: "stylesheet" });
    }

    /**
     * Disables injecting 3 fonts (”Roboto Mono”, ”Roboto”, ”Material Icons”) on library startup.
     @static
    */

  }, {
    key: "disableInjectingFonts",
    value: function disableInjectingFonts() {
      dif = true;
    }
  }, {
    key: "createPanelFromJSON",
    value: function createPanelFromJSON(json) {
      var options = json;
      var es = new EasySettings(options.pos.x, options.pos.y, options.title);

      options.components.forEach(function (v) {
        var section = es.createSection();
        v.forEach(function (c) {
          console.log(c);
          section[c.type](c.id, c.options, c.callback !== null ? eval(c.callback) : null); // eslint-disable-line no-eval
        });
      });

      return es;
    }
  }]);
  return EasySettings;
}();

/**
  @typedef JSON
  @type {object}
  @property {?string} title
  @property {?pos} pos
  @property {?array} components
*/

/**
  @typedef pos
  @type {object}
  @property {?string} x
  @property {?string} y
*/

exports.default = EasySettings;
window.EasySettings = EasySettings;

},{"./actions/EasySettingsMovementManager":"/Users/bartekosx/Projects/EasySettings/src/js/actions/EasySettingsMovementManager.js","./sections/Section":"/Users/bartekosx/Projects/EasySettings/src/js/sections/Section.js","./utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","babel-runtime/core-js/json/stringify":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/json/stringify.js","babel-runtime/core-js/object/keys":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/object/keys.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/actions/EasySettingsMovementManager.js":[function(require,module,exports){
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
    this.visible = false;
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

      this.header.addEventListener("mouseup", function (e) {
        if (_this.startPos.x - e.pageX === 0 && _this.startPos.y - e.pageY === 0) {
          _this.visible = !_this.visible;

          var $main = _this.panel.childNodes[1];

          $main.style.height = !_this.visible ? "auto" : 0;
          $main.style.padding = !_this.visible ? null : "0 8px";
        }
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

},{"babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/sections/Section.js":[function(require,module,exports){
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

var _Button = require("./elements/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Checkbox = require("./elements/Checkbox");

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Dropdown = require("./elements/Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Header = require("./elements/Header");

var _Header2 = _interopRequireDefault(_Header);

var _HTML = require("./elements/HTML");

var _HTML2 = _interopRequireDefault(_HTML);

var _Input = require("./elements/Input");

var _Input2 = _interopRequireDefault(_Input);

var _Progress = require("./elements/Progress");

var _Progress2 = _interopRequireDefault(_Progress);

var _Radio = require("./elements/Radio");

var _Radio2 = _interopRequireDefault(_Radio);

var _Slider = require("./elements/Slider");

var _Slider2 = _interopRequireDefault(_Slider);

var _Textarea = require("./elements/Textarea");

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module Section
*/

var Section = function () {
  function Section(esBody, elements, index, elementsInOrder) {
    (0, _classCallCheck3.default)(this, Section);

    this.esBody = esBody;
    this.body = null;
    this.elements = elements;
    this.index = index;
    this.elementsInOrder = elementsInOrder;
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
    value: function addToContent(id, options, callback, type, el) {
      if (typeof this.elementsInOrder[this.index] === "undefined") {
        this.elementsInOrder[this.index] = [];
      }

      this.elementsInOrder[this.index].push({
        id: id,
        options: options,
        callback: typeof callback !== "undefined" ? String(callback) : null,
        type: type
      });

      if (id !== null) {
        this.elements[id] = el;
      }
    }

    /* Adding certain elements */

    /**
     * Adds button
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {string} [options.value=Button] - text displayed in button
     * @param {callback} [callback] - callback triggered on click
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addButton( "button", { value: "Button" } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "button" ); // returns text of button (”Button”)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "header", "Button 2" ); // sets text of button to ”Button 2”
    */

  }, {
    key: "addButton",
    value: function addButton(id, options, callback) {
      var element = new _Button2.default(this.body, options, callback);
      this.addToContent(id, options, callback, "addButton", element);
      return this;
    }

    /**
     * Adds checkbox
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {string} [options.label] - label of the checkbox
     * @param {boolean} [options.checked=false] - label of the checkbox
     * @param {callback} [callback] - callback triggered on change
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addCheckbox( "checkbox", { label: "Value 1", checked: true });
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "checkbox" ); // returns value of checkbox (true)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "checkbox", false ); // sets value of checkbox to false
    */

  }, {
    key: "addCheckbox",
    value: function addCheckbox(id, options, callback) {
      var element = new _Checkbox2.default(this.body, options, callback);
      this.addToContent(id, options, callback, "addCheckbox", element);
      return this;
    }

    /**
     * Adds color input
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {string} [options.value=#000000] - default value
     * @param {callback} [callback] - callback triggered on change
     * @returns {module:Section} Section that component is added to
      * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addColorInput( "color", { value: "#000000" } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "color" ); // returns value of input (”#000000”)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "color", "#FF0000" ); // sets value of input to ”#FF0000”
    */

  }, {
    key: "addColorInput",
    value: function addColorInput(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments[2];

      options.value = options.value || "#000000";
      var element = new _Input2.default(this.body, "color", options, callback);
      this.addToContent(id, options, callback, "addColorInput", element);
      return this;
    }

    /**
     * Adds date input
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {string} [options.value] - default value of format (yyyy-mm-dd)
     * @param {number} [options.min] - minimal value
     * @param {number} [options.max] - maximal value
     * @param {string} [options.placeholder] - placeholder of input
     * @param {callback} [callback] - callback triggered on change
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addDateInput( "date", { value: "1999-01-10" } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "date" ); // returns value of input (”1999-01-10”)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "date", "2017-02-20" ); // sets value of input to ”2017-02-20”
    */

  }, {
    key: "addDateInput",
    value: function addDateInput(id, options, callback) {
      var element = new _Input2.default(this.body, "date", options, callback);
      this.addToContent(id, options, callback, "addDateInput", element);
      return this;
    }

    /**
     * Adds datetime input
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {string} [options.value] - default value of format (yyyy-mm-ddThh:mm:ss)
     * @param {number} [options.min] - minimal value
     * @param {number} [options.max] - maximal value
     * @param {string} [options.placeholder] - placeholder of input
     * @param {callback} [callback] - callback triggered on change
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addDateTimeInput( "datetime", { value: "1999-01-10T12:31:00" } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "datetime" ); // returns value of input (”1999-01-10T12:31:00”)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "datetime", "2017-02-20T13:02:02" ); // sets value of input to ”2017-02-20T13:02:02”
    */

  }, {
    key: "addDateTimeInput",
    value: function addDateTimeInput(id, options, callback) {
      var element = new _Input2.default(this.body, "datetime-local", options, callback);
      this.addToContent(id, options, callback, "addDateTimeInput", element);
      return this;
    }

    /**
     * Adds dropdown
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {array} [options.options] - options to be displayed
     * @param {number} [options.value] - index of option to be selected on startup
     * @param {callback} [callback] - callback triggered on change
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addDropdown( "dropdown", { options: ["Dropdown option #1", "Dropdown option #2"] } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "dropdown" ); // returns selected value (”Dropdown option #1”)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "dropdown", 1 ); // sets index of dropdown to 1, so select says ”Dropdown option #2”
    */

  }, {
    key: "addDropdown",
    value: function addDropdown(id, options, callback) {
      var element = new _Dropdown2.default(this.body, options, callback);
      this.addToContent(id, options, callback, "addDropdown", element);
      return this;
    }

    /**
     * Adds header
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {string} [options.value] - text displayed as header
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addHeader( "header", { value: "Header" } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "header" ); // returns text of header (”Header”)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "header", "header 2" ); // sets text of header to ”header 2”
    */

  }, {
    key: "addHeader",
    value: function addHeader(id, options) {
      var element = new _Header2.default(this.body, options, "h");
      this.addToContent(id, options, null, "addHeader", element);
      return this;
    }

    /**
     * Adds HTML container
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {string} [options.value] - HTML to be inserted into container
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addHTML( "html", { value: "<strong>HTML</strong>" } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "html" ); // returns HTML of component (”<strong>HTML</strong>”)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "html", "<em>HTML 2</em>" ); // sets HTML of component to ”<em>HTML 2</em>”
    */

  }, {
    key: "addHTML",
    value: function addHTML(id, options) {
      var element = new _HTML2.default(this.body, options);
      this.addToContent(id, options, null, "addHTML", element);
      return this;
    }

    /**
     * Adds number input
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {number} [options.value] - default value
     * @param {number} [options.min] - minimal value
     * @param {number} [options.max] - maximal value
     * @param {number} [options.step] - step of values
     * @param {string} [options.placeholder] - placeholder of input
     * @param {callback} [callback] - callback triggered on change
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addNumberInput( "input-number", { value: Math.round( Math.PI * 100 ) } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "input-number" ); // returns value of component (314)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "input-number", 13 ); // sets value of component to 13
    */

  }, {
    key: "addNumberInput",
    value: function addNumberInput(id, options, callback) {
      var element = new _Input2.default(this.body, "number", options, callback);
      this.addToContent(id, options, callback, "addNumberInput", element);
      return this;
    }

    /**
     * Adds paragrpah
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {string} [options.value] - text displayed as paragrpah
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addParagraph( "paragraph", { value: "Paragraph" } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "paragraph" ); // returns text of paragraph (”Paragraph”)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "paragraph", "Paragraph 2" ); // sets text of paragraph to ”Paragraph 2”
    */

  }, {
    key: "addParagraph",
    value: function addParagraph(id, options) {
      var element = new _Header2.default(this.body, options, "p");
      this.addToContent(id, options, null, "addParagraph", element);
      return this;
    }

    /**
     * Adds password input
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {string} [options.value] - default value
     * @param {string} [options.placeholder] - placeholder of input
     * @param {callback} [callback] - callback triggered on change
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addPasswordInput( "input-password", { value: "admin1", placeholder: "Insert password" } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "input-password" ); // returns value of component (”admin1”)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "input-password", "Password123" ); // sets value of component to ”Password123”
    */

  }, {
    key: "addPasswordInput",
    value: function addPasswordInput(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments[2];

      options.value = options.value || "";
      var element = new _Input2.default(this.body, "password", options, callback);
      this.addToContent(id, options, callback, "addPasswordInput", element);
      return this;
    }

    /**
     * Adds progress bar
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {string} [options.value=0] - default value
     * @param {number} [options.min=0] - minimal value
     * @param {number} [options.max=1] - maximal value
     * @param {boolean} [options.indeterminate=false] - determines wheter progress bar should be indeterminate on startup. To toggle it after startup use {@link module:Panel#toggleIndeterminate}
     * @param {callback} [callback] - callback triggered on change
     * @see module:Panel#toggleIndeterminate
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addProgress( "progress", { value: 0.33, indeterminate: true } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "progress" ); // returns value of component (0.33)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "progress", 1 ); // sets value of component to 1
    */

  }, {
    key: "addProgress",
    value: function addProgress(id, options) {
      var element = new _Progress2.default(this.body, options);
      this.addToContent(id, options, null, "addProgress", element);
      return this;
    }

    /**
     * Adds multiple radio inputs
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {string[]} [options.values] - array of labels for inputs
     * @param {number} [options.checkedIndex] - index of radio checked by default
     * @param {callback} [callback] - callback triggered on change of any radio
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addRadio( "radio", { values: ["Value 1", "Value 2"], checkedIndex: 0 } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "radio" ); // returns index of checked radio
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "radio", 1 ); // sets index of checked radio to 1
    */

  }, {
    key: "addRadio",
    value: function addRadio(id, options, callback) {
      var element = new _Radio2.default(this.body, this.index, options, callback);
      this.addToContent(id, options, callback, "addRadio", element);
      return this;
    }

    /**
     * Adds slider
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {number} [options.value=50] - default value
     * @param {number} [options.min=0] - minimal value
     * @param {number} [options.max=100] - maximal value
     * @param {number} [options.step=1] - step of values
     * @param {callback} [callback] - callback triggered on change
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addSlider( "slider", { value: 25, min: 0, max: 1000 } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "slider" ); // returns value of slider (25)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "slider", 98 ); // sets value of slider to 98
    */

  }, {
    key: "addSlider",
    value: function addSlider(id, options, callback) {
      var element = new _Slider2.default(this.body, options, callback);
      this.addToContent(id, options, callback, "addSlider", element);
      return this;
    }

    /**
     * Adds textarea
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {number} [options.value] - default value
     * @param {string} [options.placeholder] - placeholder of input
     * @param {callback} [callback] - callback triggered on change
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addTextarea( "textarea", { value: "my text" } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "textarea" ); // returns value of textarea (”my text”)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "textarea", "my text 2" ); // sets value of textarea to ”2017-02-20”
    */

  }, {
    key: "addTextarea",
    value: function addTextarea(id, options, callback) {
      var element = new _Textarea2.default(this.body, options, callback);
      this.addToContent(id, options, callback, "addTextarea", element);
      return this;
    }

    /**
     * Adds text input
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {string} [options.value] - default value
     * @param {string} [options.placeholder] - placeholder of input
     * @param {callback} [callback] - callback triggered on change
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addTextInput( "text-input", { value: "my input" } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "text-input" ); // returns value of textarea (”my input”)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "text-input", "my input 2" ); // sets value of textarea to ”my input 2”
    */

  }, {
    key: "addTextInput",
    value: function addTextInput(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments[2];

      options.value = options.value || "";
      var element = new _Input2.default(this.body, "text", options, callback);
      this.addToContent(id, options, callback, "addTextInput", element);
      return this;
    }

    /**
     * Adds time input
     * @param {string} [id] - id of the component
     * @param {object} [options] - options for component
     * @param {string} [options.value] - default value of format (hh:mm:ss)
     * @param {number} [options.min] - minimal value
     * @param {number} [options.max] - maximal value
     * @param {string} [options.placeholder] - placeholder of input
     * @param {callback} [callback] - callback triggered on change
     * @returns {module:Section} Section that component is added to
     * @example
     * const panel = new EasySettings();
     * panel.addSection()
     *   .addDateTimeInput( "time", { value: "12:31:00" } );
      * @example
     * // See => [Panel.getValue()]{@link module:Panel#getValue}
     * panel.getValue( "time" ); // returns value of input (”12:31:00”)
      * @example
     * // See => [Panel.setValue()]{@link module:Panel#setValue}
     * panel.setValue( "time", "13:02:02" ); // sets value of input to ”13:02:02”
    */

  }, {
    key: "addTimeInput",
    value: function addTimeInput(id, options, callback) {
      var element = new _Input2.default(this.body, "time", options, callback);
      this.addToContent(id, options, callback, "addTimeInput", element);
      return this;
    }
  }]);
  return Section;
}();

/**
 * @callback callback
 * @param {string|number} value - value of component
 * @example
 * const panel = new EasySettings();
 * panel.addSection()
 *   .addNumberInput( "input-number", { value: Math.round( Math.random() * 100 ) }, ( v ) => {
 *     console.log( v ); // logs value of input every time it changes
 *   } );
*/
/* eslint-disable no-multiple-empty-lines */

exports.default = Section;

},{"../utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","./elements/Button":"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Button.js","./elements/Checkbox":"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Checkbox.js","./elements/Dropdown":"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Dropdown.js","./elements/HTML":"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/HTML.js","./elements/Header":"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Header.js","./elements/Input":"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Input.js","./elements/Progress":"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Progress.js","./elements/Radio":"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Radio.js","./elements/Slider":"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Slider.js","./elements/Textarea":"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Textarea.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Button.js":[function(require,module,exports){
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
  function Button(section) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    (0, _classCallCheck3.default)(this, Button);

    if (options === null) {
      options = {};
    }

    this.element = null;
    this.section = section;
    this.text = options.value || "Button";
    this.callback = callback;
    this.create();
  }

  (0, _createClass3.default)(Button, [{
    key: "create",
    value: function create() {
      var $button = _DOMUtils2.default.createElement("button", this.section, { className: "es-body__section__button", innerHTML: this.text }, { type: "button" });

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
      _DOMUtils2.default.dispatchEvent(this.element, "click");
    }
  }]);
  return Button;
}();

exports.default = Button;

},{"../../utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Checkbox.js":[function(require,module,exports){
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
  function Checkbox(section) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    (0, _classCallCheck3.default)(this, Checkbox);

    this.element = null;
    this.section = section;
    this.label = options.label || "";
    this.checked = options.checked || false;
    this.callback = callback;
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
      _DOMUtils2.default.dispatchEvent(this.element, "change");
    }
  }]);
  return Checkbox;
}();

exports.default = Checkbox;

},{"../../utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Dropdown.js":[function(require,module,exports){
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
  function Dropdown(section) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    (0, _classCallCheck3.default)(this, Dropdown);

    this.element = null;
    this.section = section;
    this.options = options.options || [];
    this.value = this.options[options.value] || false;
    this.callback = callback;
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

      if (this.value !== false) {
        $dropdown.value = this.value;
      }

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
      if (this.options[val]) {
        this.element.value = this.options[val];
        _DOMUtils2.default.dispatchEvent(this.element, "change");
      }
    }
  }]);
  return Dropdown;
}();

exports.default = Dropdown;

},{"../../utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/HTML.js":[function(require,module,exports){
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

var HTML = function () {
  function HTML(section, options) {
    (0, _classCallCheck3.default)(this, HTML);

    this.element = null;
    this.section = section;
    this.value = options.value;
    this.create();
  }

  (0, _createClass3.default)(HTML, [{
    key: "create",
    value: function create() {
      var $cont = _DOMUtils2.default.createElement("div", this.section, { className: "es-body__section__html", innerHTML: this.value });

      this.element = $cont;
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
  return HTML;
}();

exports.default = HTML;

},{"../../utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Header.js":[function(require,module,exports){
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
  function Header(section) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = arguments[2];
    (0, _classCallCheck3.default)(this, Header);

    this.element = null;
    this.section = section;
    this.text = options.value || "";
    this.type = type;
    this.create();
  }

  (0, _createClass3.default)(Header, [{
    key: "create",
    value: function create() {
      if (this.type === "p") {
        this.element = _DOMUtils2.default.createElement("p", this.section, { className: "body__section__header", innerHTML: "" + this.text });
      } else {
        this.element = _DOMUtils2.default.createElement("p", this.section, { className: "body__section__header", innerHTML: "<strong>" + this.text + "</strong>" });
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.text;
    }
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.text = val;
      if (this.type === "p") {
        this.element.innerHTML = "<strong>" + val + "</strong>";
      } else {
        this.element.innerHTML = val;
      }
    }
  }]);
  return Header;
}();

exports.default = Header;

},{"../../utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Input.js":[function(require,module,exports){
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
  function Input(section, type) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    (0, _classCallCheck3.default)(this, Input);

    this.element = null;
    this.section = section;
    this.value = options.value;
    this.type = type;
    this.callback = callback;
    this.addOptions = options;
    this.additionalElement = null;
    this.create();
  }

  (0, _createClass3.default)(Input, [{
    key: "create",
    value: function create() {
      var $inputGroup = _DOMUtils2.default.createElement("span", this.section, { className: "es-body__section__input-group" });
      var $input = null;

      if (this.type === "color") {
        this.additionalElement = _DOMUtils2.default.createElement("label", $inputGroup, { className: "es-body__section__label-color" }); // Color label
        this.additionalElement.style.background = this.value;

        if (this.value.match(/^#[abcdef0123456789]{3}$/i)) {
          this.value = "#" + this.value[1] + this.value[1] + this.value[2] + this.value[2] + this.value[3] + this.value[3];
        }

        $input = _DOMUtils2.default.createElement("input", this.additionalElement, { className: "es-body__section__input es-body__section__input--" + this.type, value: this.value }, { type: this.type });
      } else {
        $input = _DOMUtils2.default.createElement("input", $inputGroup, { className: "es-body__section__input es-body__section__input--" + this.type, value: this.value }, { type: this.type });
      }

      if (typeof this.addOptions !== "undefined") {
        if (typeof this.addOptions.min !== "undefined") {
          $input.setAttribute("min", this.addOptions.min);
        }

        if (typeof this.addOptions.max !== "undefined") {
          $input.setAttribute("max", this.addOptions.max);
        }

        if (typeof this.addOptions.step !== "undefined") {
          $input.setAttribute("step", this.addOptions.step);
        } else if (this.type === "number") {
          $input.setAttribute("step", 1);
        }

        $input.placeholder = this.addOptions.placeholder || "";
      }

      if (this.type !== "color") {
        this.additionalElement = _DOMUtils2.default.createElement("span", $inputGroup, { className: "es-body__section__input-underline" }); // Underline
      }

      this.element = $input;

      this.bindCallback();
    }
  }, {
    key: "bindCallback",
    value: function bindCallback() {
      var _this = this;

      this.element.addEventListener("input", function () {
        if (_this.type === "color") {
          _this.additionalElement.style.background = _this.getValue();
        }

        _this.callback(_this.getValue());
      });
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var valueToReturn = void 0;
      if (this.addOptions) {
        if (this.addOptions.min !== null) {
          if (this.addOptions.min > this.element.value) {
            valueToReturn = this.addOptions.min;
          }
        }

        if (this.addOptions.max !== null) {
          if (this.addOptions.max < this.element.value) {
            valueToReturn = this.addOptions.max;
          }
        }
      }

      valueToReturn = this.element.value;

      if (this.type === "number") {
        valueToReturn *= 1;
      }

      return valueToReturn;
    }
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.element.value = val;
      _DOMUtils2.default.dispatchEvent(this.element, "input");
    }
  }]);
  return Input;
}();

exports.default = Input;

},{"../../utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Progress.js":[function(require,module,exports){
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

var Progress = function () {
  function Progress(section, options) {
    (0, _classCallCheck3.default)(this, Progress);

    this.element = null;
    this.trackValue = null;
    this.section = section;
    this.value = Math.max(0, Math.min(options.value, 1));
    this.addOptions = options;
    this.indeterminate = false;
    this.create();
  }

  (0, _createClass3.default)(Progress, [{
    key: "create",
    value: function create() {
      var $inputGroup = _DOMUtils2.default.createElement("span", this.section, { className: "es-body__section__progress-group" });

      var $input = _DOMUtils2.default.createElement("input", $inputGroup, { className: "es-body__section__progress" }, { type: "hidden", value: this.value });

      var $track = _DOMUtils2.default.createElement("div", $inputGroup, { className: "es-body__section__progress-track" }); // Track

      this.trackValue = _DOMUtils2.default.createElement("div", $track, { className: "es-body__section__slider-track__progress-value" }); // Track value

      if (typeof this.addOptions !== "undefined" && this.addOptions.indeterminate) {
        this.toggleIndeterminate();
      }

      this.trackValue.style.width = this.value * 100 + "%";

      this.element = $input;
      this.track = $track;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.element.value;
    }
  }, {
    key: "setValue",
    value: function setValue(val) {
      var value = Math.max(0, Math.min(val, 1));
      this.element.value = value;
      this.trackValue.style.width = value * 100 + "%";
    }
  }, {
    key: "toggleIndeterminate",
    value: function toggleIndeterminate() {
      this.indeterminate = !this.indeterminate;

      if (this.indeterminate) {
        this.trackValue.className += " es-body__section__slider-track__progress-value--indeterminate";
      } else {
        this.trackValue.className = this.trackValue.className.replace(" es-body__section__slider-track__progress-value--indeterminate", "");
      }
    }
  }]);
  return Progress;
}();

exports.default = Progress;

},{"../../utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Radio.js":[function(require,module,exports){
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
  function Radio(section, index) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    (0, _classCallCheck3.default)(this, Radio);

    this.element = null;
    this.radios = [];
    this.section = section;
    this.index = index;
    this.values = options.values || [];
    this.checkedIndex = options.checkedIndex;
    this.callback = callback;
    this.create();
  }

  (0, _createClass3.default)(Radio, [{
    key: "create",
    value: function create() {
      var _this = this;

      var $group = _DOMUtils2.default.createElement("div", this.section, { className: "es-body__section__radio-group" });

      this.values.forEach(function (v, i) {
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
      _DOMUtils2.default.dispatchEvent(this.element, "change");
    }
  }]);
  return Radio;
}();

exports.default = Radio;

},{"../../utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Slider.js":[function(require,module,exports){
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
  function Slider(section, options, callback) {
    (0, _classCallCheck3.default)(this, Slider);

    this.element = null;
    this.section = section;
    this.value = options.value * 1 || 0;
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.addOptions = options;
    this.callback = callback || function () {};
    this.SliderMovementManager = null;
    this.create();
  }

  (0, _createClass3.default)(Slider, [{
    key: "create",
    value: function create() {
      var _this = this;

      var $inputGroup = _DOMUtils2.default.createElement("span", this.section, { className: "es-body__section__slider-group" });

      if (typeof this.addOptions !== "undefined") {
        if (typeof this.addOptions.min !== "undefined") {
          this.min = this.addOptions.min || 0;
        }

        if (typeof this.addOptions.max !== "undefined") {
          this.max = this.addOptions.max || 100;
        }

        if (typeof this.addOptions.step !== "undefined") {
          this.step = this.addOptions.step || 0.1;
        }
      }

      if (this.max === null) {
        this.max = 100;
      }

      var $input = _DOMUtils2.default.createElement("input", $inputGroup, { className: "es-body__section__slider" }, { type: "range", min: this.min, max: this.max, value: this.value, step: this.step });

      $input.value = this.value;

      var $track = _DOMUtils2.default.createElement("div", $inputGroup, { className: "es-body__section__slider-track" }); // Track
      var $trackValue = _DOMUtils2.default.createElement("div", $track, { className: "es-body__section__slider-track__slider-value" }); // Track
      var $handle = _DOMUtils2.default.createElement("button", $track, { className: "es-body__section__slider-track__slider-handle" }, { type: "button" }); // Track

      this.SliderMovementManager = new _SliderMovementManager2.default($handle, $track, $input, $trackValue);

      this.SliderMovementManager.setHandleValue();

      $handle.addEventListener("keydown", function (e) {
        var changeMultpilier = 1;

        if (e.shiftKey) {
          changeMultpilier = 10;
        }

        if (e.altKey) {
          changeMultpilier = 0.1;
        }

        if (e.keyCode === 39) {
          _this.element.value = parseFloat(_this.element.value) + changeMultpilier;
          _DOMUtils2.default.dispatchEvent(_this.element, "input");
        }

        if (e.keyCode === 37) {
          _this.element.value = parseFloat(_this.element.value) - changeMultpilier;
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
      return this.element.value * 1;
    }
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.element.value = val;
      this.SliderMovementManager.setHandleValue();
      _DOMUtils2.default.dispatchEvent(this.element, "input");
    }
  }]);
  return Slider;
}();

exports.default = Slider;

},{"../../utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","./SliderMovementManager":"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/SliderMovementManager.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/SliderMovementManager.js":[function(require,module,exports){
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
        _this.scrubbing = true;
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
          _this.scrubbing = false;
          document.removeEventListener("mousemove", _this.handleMovement);
        });
      });

      this.track.addEventListener("mouseup", function (e) {
        if (!_this.scrubbing) {
          var trackOffset = _this.track.getBoundingClientRect();

          var $inputMin = _this.input.getAttribute("min") * 1;
          var $inputMax = _this.input.getAttribute("max") - $inputMin;

          var val = (e.pageX - trackOffset.left) / _this.track.offsetWidth;

          _this.input.value = val * $inputMax + $inputMin;

          _DOMUtils2.default.dispatchEvent(_this.input, "input");
        }
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

},{"../../utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/sections/elements/Textarea.js":[function(require,module,exports){
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
  function Textarea(section, options, callback) {
    (0, _classCallCheck3.default)(this, Textarea);

    this.element = null;
    this.section = section;
    this.value = options.value;
    this.callback = callback || null;
    this.addOptions = options;
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
      _DOMUtils2.default.dispatchEvent(this.element, "input");
    }
  }]);
  return Textarea;
}();

exports.default = Textarea;

},{"../../utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js":[function(require,module,exports){
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

},{"babel-runtime/core-js/get-iterator":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/get-iterator.js","babel-runtime/core-js/object/entries":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/object/entries.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js","babel-runtime/helpers/slicedToArray":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/slicedToArray.js"}]},{},["/Users/bartekosx/Projects/EasySettings/src/js/EasySettings.js"])

//# sourceMappingURL=EasySettings.js.map
