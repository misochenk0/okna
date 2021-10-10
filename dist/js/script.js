/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.14.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/assets/popup.js":
/*!********************************!*\
  !*** ./src/js/assets/popup.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


var popup = function popup() {
  var orderCallBtn = document.querySelectorAll(".order__call");
  var popup = document.querySelector(".overflow");

  if (orderCallBtn[0]) {
    var closeModal = function closeModal() {
      popup.classList.remove("overflow_active");
      document.body.style.overflow = "visible";
    };

    orderCallBtn.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        popup.classList.add("overflow_active");
        document.body.style.overflow = "hidden";
      });
    });
    var closeBtn = popup.querySelector(".popup__close");
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeModal();
      }
    });
    document.addEventListener("click", function (e) {
      e.stopPropagation();

      if (e.target === popup) {
        closeModal();
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (popup);

/***/ }),

/***/ "./src/js/assets/profileView.js":
/*!**************************************!*\
  !*** ./src/js/assets/profileView.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


var profileView = function profileView() {
  var profileItem = document.querySelectorAll(".profile-item");

  if (profileItem[0]) {
    var itemInfo = document.querySelectorAll('.profile-item__more');
    profileItem.forEach(function (item) {
      item.addEventListener('click', function (e) {
        for (var i = 0; i < itemInfo.length; i++) {
          if (itemInfo[i].classList[1] === item.classList[1]) {
            if (item.classList.contains("active-item")) {
              item.classList.remove("active-item");
              itemInfo.forEach(function (item) {
                return item.style.display = 'none';
              });
            } else {
              itemInfo.forEach(function (item) {
                return item.style.display = 'none';
              });
              itemInfo[i].style.display = 'flex';
              profileItem.forEach(function (item) {
                item.classList.remove('active-item');
              });
              item.classList.add("active-item");
            }
          }
        }
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (profileView);

/***/ }),

/***/ "./src/js/assets/slider.js":
/*!*********************************!*\
  !*** ./src/js/assets/slider.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);


var pureSlider = function pureSlider(slidesTag, type, style, items, noTouch, height, autoPlaytime) {
  var pure = document.querySelectorAll(slidesTag);

  if (pure) {
    if (style === 'classic') {
      pure.forEach(function (slider) {
        var btnNext = slider.nextElementSibling.children[0],
            btnPrev = slider.nextElementSibling.children[2];

        if (type === 'dots') {
          for (var i = 0; i < slider.children.length; i++) {
            var dot = document.createElement('div');
            dot.setAttribute('class', 'dot');
            slider.nextElementSibling.nextElementSibling.appendChild(dot);
            dot.setAttribute('data-slide-to', i + 1);
          }

          slider.parentElement.querySelector('.dot').classList.add('dot_active');
          window.addEventListener('resize', function () {
            var dots = slider.parentElement.querySelectorAll('.dot');

            if (dots) {
              dots.forEach(function (dot) {
                return dot.remove();
              });
            }

            for (var _i = 0; _i < slider.children.length; _i++) {
              var _dot = document.createElement('div');

              _dot.setAttribute('class', 'dot');

              slider.nextElementSibling.nextElementSibling.appendChild(_dot);

              _dot.setAttribute('data-slide-to', _i + 1);
            }

            slider.parentElement.querySelector('.dot').classList.add('dot_active');
          });
        }

        if (type === 'imgs') {
          for (var _i2 = 0; _i2 < slider.children.length; _i2++) {
            var img = document.createElement('div');
            img.setAttribute('class', 'product-imgs-mini__block');
            var picture = document.createElement('img');
            picture.setAttribute('src', slider.children[_i2].children[0].src);
            slider.parentElement.nextElementSibling.appendChild(img);
            img.appendChild(picture);
            picture.setAttribute('data-slide-to', _i2 + 1);
          }

          slider.parentElement.parentElement.querySelector('.product-imgs-mini__block').classList.add('active');
        }

        if (type == 'multiple') {
          var createMultipleDots = function createMultipleDots() {
            for (var _i3 = 0; _i3 < slider.children[0].clientWidth * slider.children.length / slider.clientWidth; _i3++) {
              var _dot2 = document.createElement('div');

              if (items == 'items') {
                _dot2.setAttribute('class', 'dot');

                slider.nextElementSibling.children[1].appendChild(_dot2);
              } else {
                _dot2.setAttribute('class', 'reviews-dots__dot');

                slider.nextElementSibling.nextElementSibling.appendChild(_dot2);
              }

              _dot2.setAttribute('data-slide-to', _i3 + 1);
            }

            if (items == 'items') {
              slider.parentElement.querySelector('.dot').classList.add('dot_active');
            } else {
              slider.parentElement.querySelector('.reviews-dots__dot').classList.add('active');
            }
          };

          createMultipleDots();
          window.addEventListener('resize', function () {
            var dots = slider.parentElement.querySelectorAll('.dot');
            var reviewDots = slider.parentElement.querySelectorAll('.reviews-dots__dot');

            if (dots || reviewDots) {
              if (dots) {
                dots.forEach(function (i) {
                  return i.remove();
                });
              }

              if (reviewDots) {
                reviewDots.forEach(function (i) {
                  return i.remove();
                });
              }

              createMultipleDots();
            }
          });
        }

        if (height == true) {
          window.addEventListener('resize', function () {
            if (document.documentElement.clientWidth > 576) {
              slider.style.pointerEvents = 'none';
            } else {
              slider.style.pointerEvents = 'unset';
            }
          });
        }

        var viewport = slider.parentElement.offsetWidth,
            viewSlide = 0,
            posx = 0;
        window.addEventListener('resize', function () {
          updateViewport();
        });

        function updateViewport() {
          viewport = slider.parentElement.offsetWidth;
          slider.style.transform = "translateX(0px)";
          return viewport;
        }

        slider.style.transform = '.translateX(0)';
        var dots = slider.parentElement.querySelectorAll('.dot'),
            multipleDots = slider.parentElement.querySelectorAll('.reviews-dots__dot');
        window.addEventListener('resize', function () {
          return dots = slider.parentElement.querySelectorAll('.dot'), multipleDots = slider.parentElement.querySelectorAll('.reviews-dots__dot');
        });
        var dashes = slider.parentElement.parentElement.querySelectorAll('.i');
        var imgs = slider.parentElement.parentElement.querySelectorAll('.product-imgs-mini__block');

        function prevSlide() {
          if (viewSlide < slider.children.length - 1 && !(type == "multiple")) {
            viewSlide++;
          } else if (type == "multiple" && viewSlide < Math.floor(slider.children[0].clientWidth * slider.children.length) / slider.clientWidth - 1) {
            viewSlide++;
          } else {
            viewSlide = 0;
          }

          if (type === 'dots') {
            dots.forEach(function (dot) {
              return dot.classList.remove('dot_active');
            });
            dots[viewSlide].classList.add('dot_active');
            slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
          }

          if (type === 'i') {
            dashes.forEach(function (dash) {
              return dash.classList.remove('active');
            });
            dashes[viewSlide].classList.add('active');
            slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
          }

          if (type === 'imgs') {
            imgs.forEach(function (img) {
              return img.classList.remove('active');
            });
            imgs[viewSlide].classList.add('active');
            slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
          }

          if (type === 'multiple') {
            if (items === 'items') {
              dots.forEach(function (dot) {
                return dot.classList.remove('dot_active');
              });
              dots[viewSlide].classList.add('dot_active');
              slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
            } else {
              multipleDots.forEach(function (dot) {
                return dot.classList.remove('active');
              });
              multipleDots[viewSlide].classList.add('active');
              slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
            }
          }
        }

        function nextSlide() {
          if (viewSlide > 0) {
            viewSlide--;
          } else if (type == 'multiple') {
            viewSlide = Math.floor(slider.children[0].clientWidth * slider.children.length / slider.clientWidth);
          } else {
            viewSlide = slider.children.length - 1;
          }

          if (type === 'dots') {
            dots.forEach(function (dot) {
              return dot.classList.remove('dot_active');
            });
            dots[viewSlide].classList.add('dot_active');
            slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
          }

          if (type === 'i') {
            dashes.forEach(function (dash) {
              return dash.classList.remove('active');
            });
            dashes[viewSlide].classList.add('active');
            slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
          }

          if (type === 'imgs') {
            imgs.forEach(function (img) {
              return img.classList.remove('active');
            });
            imgs[viewSlide].classList.add('active');
            slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
          }

          if (type === 'multiple') {
            if (items === 'items') {
              dots.forEach(function (dot) {
                return dot.classList.remove('dot_active');
              });
              dots[viewSlide].classList.add('dot_active');
              slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
            } else {
              multipleDots.forEach(function (dot) {
                return dot.classList.remove('active');
              });
              multipleDots[viewSlide].classList.add('active');
              slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
            }
          }
        }

        function currentSlide() {
          slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
        }

        if (btnNext && btnPrev) {
          btnNext.addEventListener("click", nextSlide);
          btnPrev.addEventListener("click", prevSlide);
        }

        if (type === 'dots') {
          var addListener = function addListener() {
            dots.forEach(function (dot) {
              dot.addEventListener('click', function (e) {
                var slideTo = e.target.getAttribute('data-slide-to');
                viewSlide = slideTo - 1;
                slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
                dots.forEach(function (dot) {
                  return dot.classList.remove('dot_active');
                });
                dots[viewSlide].classList.add('dot_active');
              });
            });
          };

          addListener();
          window.addEventListener('resize', function () {
            addListener();
          });
        }

        if (type === 'i') {
          dashes.forEach(function (dash) {
            dash.addEventListener('click', function (e) {
              var slideTo = e.target.getAttribute('data-slide-to');
              viewSlide = slideTo - 1;
              slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
              dashes.forEach(function (dash) {
                return dash.classList.remove('active');
              });
              dashes[viewSlide].classList.add('active');
            });
          });
        }

        if (type === 'imgs') {
          imgs.forEach(function (img) {
            img.addEventListener('click', function (e) {
              var slideTo = e.target.getAttribute('data-slide-to');
              viewSlide = slideTo - 1;
              slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
              imgs.forEach(function (img) {
                return img.classList.remove('active');
              });
              imgs[viewSlide].classList.add('active');
            });
          });
        }

        if (type === 'multiple') {
          var _addListener = function _addListener() {
            if (items === 'items') {
              dots.forEach(function (dot) {
                dot.addEventListener('click', function (e) {
                  var slideTo = e.target.getAttribute('data-slide-to');
                  viewSlide = slideTo - 1;
                  slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
                  dots.forEach(function (dot) {
                    return dot.classList.remove('dot_active');
                  });
                  dots[viewSlide].classList.add('dot_active');
                });
              });
            } else {
              multipleDots.forEach(function (dot) {
                dot.addEventListener('click', function (e) {
                  var slideTo = e.target.getAttribute('data-slide-to');
                  viewSlide = slideTo - 1;
                  slider.style.transform = "translateX(".concat(-viewSlide * viewport, "px)");
                  multipleDots.forEach(function (dot) {
                    return dot.classList.remove('active');
                  });
                  multipleDots[viewSlide].classList.add('active');
                });
              });
            }
          };

          _addListener();

          window.addEventListener('resize', function () {
            _addListener();
          });
        }

        function mouseDown(e) {
          if (e.identifier === 0) {
            posx = e.clientX;
            slider.style.transition = '.9s all';
            return posx;
          } else {
            e.preventDefault();
            posx = e.clientX;
            slider.style.transition = '.9s all';
            return posx;
          }
        }

        function mouseUp(e) {
          if (e.clientX - posx < -viewport * 0.2) {
            slider.style.transition = '0.9s';
            prevSlide();
          } else {
            slider.style.transition = '0.9s';
            currentSlide();
          }

          posx = 0;
        }

        function moving(e) {
          function leaving() {
            slider.style.transition = '0.9s';
            currentSlide();
            posx = 0;
          }

          slider.addEventListener('mouseleave', function () {
            leaving();
          });

          if (posx > 0) {
            slider.style.transition = '0s';
            slider.style.transform = "translateX(".concat(-viewSlide * viewport - posx + e.clientX, "px");

            if (-posx + e.clientX < -viewport * 0.3) {
              slider.style.transition = '0.9s';
              prevSlide();
              posx = 0;
            } else if (e.clientX - posx > viewport * 0.3) {
              slider.style.transition = '0.9s';
              nextSlide();
              posx = 0;
            }
          } else if (posx == 0) {
            slider.removeEventListener('mousemove', moving);
            slider.removeEventListener('touchmove', moving);
          }
        }

        if (!noTouch) {
          slider.addEventListener('touchstart', function (e) {
            posx = e.touches[0].clientX;
            slider.style.transition = '.9s all';
            return posx;
          }, {
            passive: true
          });
          slider.addEventListener('touchmove', function (e) {
            moving(e.touches[0]);
          }, {
            passive: true
          });
          slider.addEventListener('touchend', function (e) {
            mouseUp(e);
          });
          slider.addEventListener("mousedown", function (e) {
            mouseDown(e);
          });
          slider.addEventListener('mouseup', function (e) {
            mouseUp(e);
          });
          slider.addEventListener('mousemove', function (e) {
            moving(e);
          });
        }

        if (autoPlaytime) {
          var activateAnimation = function activateAnimation() {
            paused = setInterval(function () {
              prevSlide();
            }, autoPlaytime);
          };

          var paused = false;
          activateAnimation();
          slider.parentElement.addEventListener('mouseenter', function () {
            clearInterval(paused);
          });
          slider.parentElement.addEventListener('mouseleave', function () {
            activateAnimation();
          });
        }
      });
    } else if (style === 'opacity') {
      pure.forEach(function (slider) {
        if (type === 'imgs') {
          var viewSlide = 0;

          for (var i = 0; i < slider.children.length; i++) {
            var img = document.createElement('div');
            img.setAttribute('class', 'product-imgs__mini-item');
            var picture = document.createElement('img');
            picture.setAttribute('src', slider.children[i].src);
            slider.parentElement.previousElementSibling.appendChild(img);
            img.appendChild(picture);
            img.setAttribute('data-slide-to', i + 1);
          }

          slider.parentElement.parentElement.querySelector('.product-imgs__mini-item').classList.add('active');
          var imgs = slider.parentElement.parentElement.querySelectorAll('.product-imgs__mini-item');
          imgs.forEach(function (img) {
            return img.classList.remove('active');
          });
          imgs[viewSlide].classList.add('active');
          slider.children.forEach(function (item) {
            item.classList.remove('active-slide');
          });
          slider.children[viewSlide].classList.add('active-slide');
          imgs.forEach(function (img) {
            img.addEventListener('click', function (e) {
              console.log(e.target);
              var slideTo = e.target.getAttribute('data-slide-to');
              viewSlide = slideTo - 1;
              slider.children.forEach(function (item) {
                item.classList.remove('active-slide');
              });
              console.log(viewSlide);
              slider.children[viewSlide].classList.add('active-slide');
              imgs.forEach(function (img) {
                return img.classList.remove('active');
              });
              imgs[viewSlide].classList.add('active');
            });
          });
        }

        if (type === 'dots') {
          var prevSlide = function prevSlide() {
            if (_viewSlide > 0) {
              _viewSlide--;
            } else {
              _viewSlide = slider.children.length - 1;
            }

            if (type === 'dots') {
              dots.forEach(function (dot) {
                return dot.classList.remove('dot_active');
              });

              dots[_viewSlide].classList.add('dot_active');

              slider.children.forEach(function (item) {
                return item.classList.add('disabled');
              });

              slider.children[_viewSlide].classList.remove('disabled');

              ;
            }
          };

          var nextSlide = function nextSlide() {
            if (_viewSlide < slider.children.length) {
              _viewSlide++;
            } else {
              _viewSlide = 0;
            }

            if (type === 'dots') {
              dots.forEach(function (dot) {
                return dot.classList.remove('dot_active');
              });

              if (dots[_viewSlide]) {
                dots[_viewSlide].classList.add('dot_active');
              } else {
                dots[0].classList.add('dot_active');
              }

              slider.children.forEach(function (item) {
                return item.classList.add('disabled');
              });

              if (slider.children[_viewSlide]) {
                slider.children[_viewSlide].classList.remove('disabled');
              } else {
                slider.children[0].classList.remove('disabled');
              }
            }
          };

          var mouseDown = function mouseDown(e) {
            if (e.identifier === 0) {
              posx = e.clientX;
              slider.style.transition = '.9s all';
              return posx;
            } else {
              e.preventDefault();
              posx = e.clientX;
              slider.style.transition = '.9s all';
              return posx;
            }
          };

          var mouseUp = function mouseUp(e) {
            if (e.clientX - posx < -viewport * 0.2) {
              slider.style.transition = '0.9s';
            } else {
              slider.style.transition = '0.9s';
            }

            posx = 0;
          };

          var moving = function moving(e) {
            function leaving() {
              slider.style.transition = '0.9s';
              posx = 0;
            }

            slider.addEventListener('mouseleave', function () {
              leaving();
            });

            if (posx > 0) {
              slider.style.transition = '0s';

              if (-posx + e.clientX < -viewport * 0.3) {
                slider.style.transition = '0.9s';
                nextSlide();
                posx = 0;
              } else if (e.clientX - posx > viewport * 0.3) {
                slider.style.transition = '0.9s';
                prevSlide();
                posx = 0;
              }
            } else if (posx == 0) {
              slider.removeEventListener('mousemove', moving);
              slider.removeEventListener('touchmove', moving);
            }
          };

          var activateAnimation = function activateAnimation() {
            paused = setInterval(function () {
              nextSlide();
            }, 3000);
          };

          for (var _i4 = 0; _i4 < slider.children.length; _i4++) {
            var dot = document.createElement('div');
            dot.setAttribute('class', 'dot');
            slider.nextElementSibling.appendChild(dot);
            dot.setAttribute('data-slide-to', _i4 + 1);
          }

          slider.parentElement.querySelector('.dot').classList.add('dot_active');
          var _viewSlide = 0,
              viewport = slider.parentElement.offsetWidth,
              posx = 0,
              paused = false;
          var dots = slider.parentElement.querySelectorAll('.dot');

          if (type === 'dots') {
            var addListener = function addListener() {
              dots.forEach(function (dot) {
                dot.addEventListener('click', function (e) {
                  var slideTo = e.target.getAttribute('data-slide-to');
                  _viewSlide = slideTo - 1;
                  slider.children.forEach(function (item) {
                    return item.classList.add('disabled');
                  });

                  slider.children[_viewSlide].classList.remove('disabled');

                  dots.forEach(function (dot) {
                    return dot.classList.remove('dot_active');
                  });

                  dots[_viewSlide].classList.add('dot_active');
                });
              });
            };

            addListener();
            window.addEventListener('resize', function () {
              addListener();
            });
          }

          if (!noTouch) {
            slider.addEventListener('touchstart', function (e) {
              posx = e.touches[0].clientX;
              slider.style.transition = '.9s all';
              return posx;
            }, {
              passive: true
            });
            slider.addEventListener('touchmove', function (e) {
              moving(e.touches[0]);
            }, {
              passive: true
            });
            slider.addEventListener('touchend', function (e) {
              mouseUp(e);
            });
            slider.addEventListener("mousedown", function (e) {
              mouseDown(e);
            });
            slider.addEventListener('mouseup', function (e) {
              mouseUp(e);
            });
            slider.addEventListener('mousemove', function (e) {
              moving(e);
            });
          }

          activateAnimation();
          slider.parentElement.addEventListener('mouseenter', function () {
            clearInterval(paused);
          });
          slider.parentElement.addEventListener('mouseleave', function () {
            activateAnimation();
          });
        }
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (pureSlider);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/slider */ "./src/js/assets/slider.js");
/* harmony import */ var _assets_profileView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/profileView */ "./src/js/assets/profileView.js");
/* harmony import */ var _assets_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/popup */ "./src/js/assets/popup.js");



document.addEventListener('DOMContentLoaded', function () {
  Object(_assets_slider__WEBPACK_IMPORTED_MODULE_0__["default"])('.slider__slides', 'dots', 'classic', false, false, false, 5000);
  Object(_assets_profileView__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_assets_popup__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map