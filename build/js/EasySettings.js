(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/get-iterator.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/get-iterator.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/is-iterable.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/is-iterable.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/object/define-property.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/object/define-property.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/core-js/object/entries.js":[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/entries"), __esModule: true };
},{"core-js/library/fn/object/entries":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/object/entries.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js":[function(require,module,exports){
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
},{"../modules/core.is-iterable":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/core.is-iterable.js","../modules/es6.string.iterator":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es6.string.iterator.js","../modules/web.dom.iterable":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/web.dom.iterable.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/object/define-property.js":[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_core.js","../../modules/es6.object.define-property":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es6.object.define-property.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/fn/object/entries.js":[function(require,module,exports){
require('../../modules/es7.object.entries');
module.exports = require('../../modules/_core').Object.entries;
},{"../../modules/_core":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_core.js","../../modules/es7.object.entries":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es7.object.entries.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_a-function.js":[function(require,module,exports){
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
},{}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-to-array.js":[function(require,module,exports){
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
},{"./_descriptors":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_descriptors.js","./_export":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_export.js","./_object-dp":"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/_object-dp.js"}],"/Users/bartekosx/Projects/EasySettings/node_modules/core-js/library/modules/es6.string.iterator.js":[function(require,module,exports){
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

},{"./actions/EasySettingsMovementManager":"/Users/bartekosx/Projects/EasySettings/src/js/actions/EasySettingsMovementManager.js","./sections/Section":"/Users/bartekosx/Projects/EasySettings/src/js/sections/Section.js","./utils/DOMUtils":"/Users/bartekosx/Projects/EasySettings/src/js/utils/DOMUtils.js","babel-runtime/helpers/classCallCheck":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/classCallCheck.js","babel-runtime/helpers/createClass":"/Users/bartekosx/Projects/EasySettings/node_modules/babel-runtime/helpers/createClass.js"}],"/Users/bartekosx/Projects/EasySettings/src/js/actions/EasySettingsMovementManager.js":[function(require,module,exports){
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
    key: "addColorInput",
    value: function addColorInput(id, value, callback, addOptions) {
      var element = new _Input2.default(this.body, "color", value, callback, addOptions);
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
  }, {
    key: "addProgress",
    value: function addProgress(id, value, callback, addOptions) {
      var element = new _Progress2.default(this.body, value, callback, addOptions);
      this.addToContent(id, element);
      return this;
    }
  }, {
    key: "addHTML",
    value: function addHTML(id, value) {
      var element = new _HTML2.default(this.body, value);
      this.addToContent(id, element);
      return this;
    }
  }]);
  return Section;
}();

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
  function HTML(section, value) {
    (0, _classCallCheck3.default)(this, HTML);

    this.element = null;
    this.section = section;
    this.value = value;
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
  function Input(section, type, value, callback, addOptions) {
    (0, _classCallCheck3.default)(this, Input);

    this.element = null;
    this.section = section;
    this.value = value;
    this.type = type;
    this.callback = callback || null;
    this.addOptions = addOptions;
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
  function Progress(section, value, callback) {
    (0, _classCallCheck3.default)(this, Progress);

    this.element = null;
    this.trackValue = null;
    this.section = section;
    this.value = Math.max(0, Math.min(value, 1));
    this.callback = callback || null;
    this.create();
  }

  (0, _createClass3.default)(Progress, [{
    key: "create",
    value: function create() {
      var $inputGroup = _DOMUtils2.default.createElement("span", this.section, { className: "es-body__section__progress-group" });

      var $input = _DOMUtils2.default.createElement("input", $inputGroup, { className: "es-body__section__progress" }, { type: "hidden", value: this.value });

      var $track = _DOMUtils2.default.createElement("div", $inputGroup, { className: "es-body__section__progress-track" }); // Track

      this.trackValue = _DOMUtils2.default.createElement("div", $track, { className: "es-body__section__slider-track__progress-value" }); // Track value

      this.trackValue.style.width = this.value * 100 + "%";

      this.element = $input;
      this.track = $track;

      this.bindCallback();
    }
  }, {
    key: "bindCallback",
    value: function bindCallback() {
      var _this = this;

      this.element.addEventListener("input", function () {
        _this.callback(_this.getValue());
        _this.SliderMovementManager.setHandleValue();
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
      var value = Math.max(0, Math.min(val, 1));
      this.element.value = value;
      this.trackValue.style.width = value * 100 + "%";
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
