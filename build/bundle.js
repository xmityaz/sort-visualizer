/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _canvas = __webpack_require__(1);
	
	var _form = __webpack_require__(2);
	
	/**
	 * Created by xmityaz on 02.06.16.
	 */
	
	(0, _form.initForm)();
	(0, _canvas.initCanvas)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initCanvas = initCanvas;
	/**
	 * Created by xmityaz on 02.06.16.
	 */
	
	var canvas = document.getElementById('sort-visualizer');
	
	var width = exports.width = window.innerWidth - 200;
	var height = exports.height = window.innerHeight / 2;
	var context = exports.context = canvas.getContext('2d');
	
	function initCanvas() {
	  canvas.width = width;
	  canvas.height = height;
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(3);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.initForm = initForm;
	
	var _sort = __webpack_require__(38);
	
	var _visualize = __webpack_require__(73);
	
	var _visualize2 = _interopRequireDefault(_visualize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by xmityaz on 05.06.16.
	 */
	
	var form = document.forms[0];
	var arrLengthEl = form.elements.arrLength;
	var sortSelect = form.elements.sort;
	
	// TODO: do not use appendChild inside loop
	function initSortOptions() {
	  (0, _keys2.default)(_sort.availableAlgorithms).forEach(function (alg) {
	    sortSelect.appendChild(new Option(alg, alg));
	  });
	}
	
	function initSortButton() {
	  form.onsubmit = function (e) {
	    var sortAlg = _sort.availableAlgorithms[sortSelect.value];
	    var arrLength = +arrLengthEl.value;
	
	    e.preventDefault();
	
	    (0, _visualize2.default)(sortAlg, arrLength);
	  };
	}
	
	function initForm() {
	  initSortOptions();
	
	  arrLengthEl.value = 20;
	  initSortButton();
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(25).Object.keys;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(6)
	  , $keys    = __webpack_require__(8);
	
	__webpack_require__(23)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(7);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(9)
	  , enumBugKeys = __webpack_require__(22);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(10)
	  , toIObject    = __webpack_require__(11)
	  , arrayIndexOf = __webpack_require__(14)(false)
	  , IE_PROTO     = __webpack_require__(18)('IE_PROTO');
	
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

/***/ },
/* 10 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(12)
	  , defined = __webpack_require__(7);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(13);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(11)
	  , toLength  = __webpack_require__(15)
	  , toIndex   = __webpack_require__(17);
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

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(16)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(16)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(19)('keys')
	  , uid    = __webpack_require__(21);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(20)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 21 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(24)
	  , core    = __webpack_require__(25)
	  , fails   = __webpack_require__(34);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , core      = __webpack_require__(25)
	  , ctx       = __webpack_require__(26)
	  , hide      = __webpack_require__(28)
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

/***/ },
/* 25 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(27);
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

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(29)
	  , createDesc = __webpack_require__(37);
	module.exports = __webpack_require__(33) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(30)
	  , IE8_DOM_DEFINE = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(36)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(33) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(33) && !__webpack_require__(34)(function(){
	  return Object.defineProperty(__webpack_require__(35)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(34)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(31)
	  , document = __webpack_require__(20).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(31);
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

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.availableAlgorithms = undefined;
	
	var _getIterator2 = __webpack_require__(39);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _regenerator = __webpack_require__(61);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.bubbleSort = bubbleSort;
	exports.selectSort = selectSort;
	exports.gnomeSort = gnomeSort;
	exports.insertionSort = insertionSort;
	exports.cocktailSort = cocktailSort;
	exports.mergeSortAlg = mergeSortAlg;
	exports.mergeSort = mergeSort;
	exports.bogoSort = bogoSort;
	exports.strangeSort = strangeSort;
	
	var _utils = __webpack_require__(65);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [bubbleSort, selectSort, gnomeSort, insertionSort, cocktailSort, mergeSortedArrays, mergeSortAlg, mergeSort, bogoSort, strangeSort].map(_regenerator2.default.mark); /**
	                                                                                                                                                                                    * Created by xmityaz on 02.06.16.
	                                                                                                                                                                                    */
	
	function bubbleSort(arr) {
	  var cond = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
	    return a > b;
	  } : arguments[1];
	
	  var i, j, _ref;
	
	  return _regenerator2.default.wrap(function bubbleSort$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return { arr: arr };
	
	        case 2:
	          i = 0;
	
	        case 3:
	          if (!(i < arr.length - 1)) {
	            _context.next = 15;
	            break;
	          }
	
	          j = 0;
	
	        case 5:
	          if (!(j < arr.length - i - 1)) {
	            _context.next = 12;
	            break;
	          }
	
	          if (cond(arr[j], arr[j + 1])) {
	            _ref = [arr[j + 1], arr[j]];
	            arr[j] = _ref[0];
	            arr[j + 1] = _ref[1];
	          }
	
	          _context.next = 9;
	          return { arr: arr, items: [j, j + 1] };
	
	        case 9:
	          j++;
	          _context.next = 5;
	          break;
	
	        case 12:
	          i++;
	          _context.next = 3;
	          break;
	
	        case 15:
	          return _context.abrupt('return', { arr: arr });
	
	        case 16:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}
	
	function selectSort(arr) {
	  var cond = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
	    return a > b;
	  } : arguments[1];
	
	  var min, idx, i, j, _ref2;
	
	  return _regenerator2.default.wrap(function selectSort$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.next = 2;
	          return { arr: arr };
	
	        case 2:
	          min = void 0;
	          idx = void 0;
	          i = 0;
	
	        case 5:
	          if (!(i < arr.length - 1)) {
	            _context2.next = 21;
	            break;
	          }
	
	          min = arr[i];
	          j = i;
	
	        case 8:
	          if (!(j < arr.length)) {
	            _context2.next = 15;
	            break;
	          }
	
	          if (!cond(arr[j], min)) {
	            min = arr[j];
	            idx = j;
	          }
	          _context2.next = 12;
	          return { arr: arr, items: [i, j, idx] };
	
	        case 12:
	          j++;
	          _context2.next = 8;
	          break;
	
	        case 15:
	          _ref2 = [arr[idx], arr[i]];
	          arr[i] = _ref2[0];
	          arr[idx] = _ref2[1];
	
	        case 18:
	          i++;
	          _context2.next = 5;
	          break;
	
	        case 21:
	          return _context2.abrupt('return', { arr: arr });
	
	        case 22:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this);
	}
	
	function gnomeSort(arr) {
	  var cond = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
	    return a > b;
	  } : arguments[1];
	
	  var i, last, _ref3;
	
	  return _regenerator2.default.wrap(function gnomeSort$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          _context3.next = 2;
	          return { arr: arr };
	
	        case 2:
	          i = 1;
	          last = 0;
	
	        case 4:
	          if (!(i < arr.length)) {
	            _context3.next = 20;
	            break;
	          }
	
	          if (cond(arr[i - 1], arr[i])) {
	            _context3.next = 11;
	            break;
	          }
	
	          _context3.next = 8;
	          return { arr: arr, items: [i, i - 1] };
	
	        case 8:
	
	          if (last > ++i) {
	            i = last;
	          } else {
	            last = i;
	          }
	          _context3.next = 16;
	          break;
	
	        case 11:
	          _ref3 = [arr[i - 1], arr[i]];
	          arr[i] = _ref3[0];
	          arr[i - 1] = _ref3[1];
	          _context3.next = 16;
	          return { arr: arr, items: [i, --i] };
	
	        case 16:
	          _context3.next = 18;
	          return { arr: arr, items: [i, i + 1] };
	
	        case 18:
	          _context3.next = 4;
	          break;
	
	        case 20:
	          return _context3.abrupt('return', { arr: arr });
	
	        case 21:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[2], this);
	}
	
	function insertionSort(arr) {
	  var cond = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
	    return a > b;
	  } : arguments[1];
	  var i, temp, j;
	  return _regenerator2.default.wrap(function insertionSort$(_context4) {
	    while (1) {
	      switch (_context4.prev = _context4.next) {
	        case 0:
	          _context4.next = 2;
	          return { arr: arr };
	
	        case 2:
	          i = 0;
	
	        case 3:
	          if (!(i < arr.length)) {
	            _context4.next = 17;
	            break;
	          }
	
	          temp = arr[i];
	          j = i - 1;
	
	        case 6:
	          if (!(j >= 0 && cond(arr[j], temp))) {
	            _context4.next = 13;
	            break;
	          }
	
	          arr[j + 1] = arr[j];
	
	          _context4.next = 10;
	          return { arr: arr, items: [i, j] };
	
	        case 10:
	          j--;
	          _context4.next = 6;
	          break;
	
	        case 13:
	
	          arr[j + 1] = temp;
	
	        case 14:
	          i++;
	          _context4.next = 3;
	          break;
	
	        case 17:
	          return _context4.abrupt('return', { arr: arr });
	
	        case 18:
	        case 'end':
	          return _context4.stop();
	      }
	    }
	  }, _marked[3], this);
	}
	
	function cocktailSort(arr) {
	  var cond = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
	    return a > b;
	  } : arguments[1];
	
	  var right, left, j, _ref4, _j, _ref5;
	
	  return _regenerator2.default.wrap(function cocktailSort$(_context5) {
	    while (1) {
	      switch (_context5.prev = _context5.next) {
	        case 0:
	          _context5.next = 2;
	          return { arr: arr };
	
	        case 2:
	          right = arr.length - 1;
	          left = 0;
	
	        case 4:
	          if (!(left < right)) {
	            _context5.next = 25;
	            break;
	          }
	
	          j = left;
	
	        case 6:
	          if (!(j < right)) {
	            _context5.next = 13;
	            break;
	          }
	
	          if (cond(arr[j], arr[j + 1])) {
	            _ref4 = [arr[j + 1], arr[j]];
	            arr[j] = _ref4[0];
	            arr[j + 1] = _ref4[1];
	          }
	
	          _context5.next = 10;
	          return { arr: arr, items: [j, j + 1] };
	
	        case 10:
	          j++;
	          _context5.next = 6;
	          break;
	
	        case 13:
	          right--;
	
	          _j = right;
	
	        case 15:
	          if (!(_j > left)) {
	            _context5.next = 22;
	            break;
	          }
	
	          if (cond(arr[_j - 1], arr[_j])) {
	            _ref5 = [arr[_j - 1], arr[_j]];
	            arr[_j] = _ref5[0];
	            arr[_j - 1] = _ref5[1];
	          }
	
	          _context5.next = 19;
	          return { arr: arr, items: [_j, _j - 1] };
	
	        case 19:
	          _j--;
	          _context5.next = 15;
	          break;
	
	        case 22:
	
	          left++;
	          _context5.next = 4;
	          break;
	
	        case 25:
	          return _context5.abrupt('return', { arr: arr });
	
	        case 26:
	        case 'end':
	          return _context5.stop();
	      }
	    }
	  }, _marked[4], this);
	}
	
	// helper functions for mergeSort
	//
	function divideArr(arr) {
	  var mid = Math.floor(arr.length / 2);
	
	  return { left: arr.slice(0, mid), right: arr.slice(mid) };
	}
	
	function mergeSortedArrays(left, right, cond, idx) {
	  var res, temp;
	  return _regenerator2.default.wrap(function mergeSortedArrays$(_context6) {
	    while (1) {
	      switch (_context6.prev = _context6.next) {
	        case 0:
	          res = [];
	          temp = void 0;
	
	        case 2:
	          if (!(left.length && right.length)) {
	            _context6.next = 9;
	            break;
	          }
	
	          temp = cond(right[0], left[0]) ? left.shift() : right.shift();
	          res.push(temp);
	
	          _context6.next = 7;
	          return {
	            arr: res.concat(left).concat(right),
	            items: [idx + res.length, idx + left.length + res.length],
	            idx: idx
	          };
	
	        case 7:
	          _context6.next = 2;
	          break;
	
	        case 9:
	
	          if (left.length) {
	            res = res.concat(left);
	          } else if (right.length) {
	            res = res.concat(right);
	          }
	
	          return _context6.abrupt('return', { arr: res, idx: idx });
	
	        case 11:
	        case 'end':
	          return _context6.stop();
	      }
	    }
	  }, _marked[5], this);
	}
	
	// Merge sorting algorithm function
	//
	// @arr  - unsorted array
	// @cond - sorting condition
	// @idx  - index from which extracted @arr part from initial array
	//
	function mergeSortAlg(arr) {
	  var cond = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
	    return a > b;
	  } : arguments[1];
	  var idx = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	  var res, _divideArr, left, right, leftGen, rightGen;
	
	  return _regenerator2.default.wrap(function mergeSortAlg$(_context7) {
	    while (1) {
	      switch (_context7.prev = _context7.next) {
	        case 0:
	          res = void 0;
	
	          if (!(arr.length === 1)) {
	            _context7.next = 5;
	            break;
	          }
	
	          return _context7.abrupt('return', { arr: arr, idx: idx });
	
	        case 5:
	          _context7.next = 7;
	          return { arr: arr, idx: idx };
	
	        case 7:
	          _divideArr = divideArr(arr);
	          left = _divideArr.left;
	          right = _divideArr.right;
	          return _context7.delegateYield(mergeSortAlg(left, cond, idx), 't0', 11);
	
	        case 11:
	          leftGen = _context7.t0;
	          _context7.next = 14;
	          return { arr: leftGen.arr, idx: idx };
	
	        case 14:
	          return _context7.delegateYield(mergeSortAlg(right, cond, idx + left.length), 't1', 15);
	
	        case 15:
	          rightGen = _context7.t1;
	          _context7.next = 18;
	          return { arr: rightGen.arr, idx: idx + left.length };
	
	        case 18:
	          return _context7.delegateYield(mergeSortedArrays(leftGen.arr, rightGen.arr, cond, idx), 't2', 19);
	
	        case 19:
	          res = _context7.t2;
	
	        case 20:
	          return _context7.abrupt('return', res);
	
	        case 21:
	        case 'end':
	          return _context7.stop();
	      }
	    }
	  }, _marked[6], this);
	}
	
	// Functions which runs actual mergeSort algorithm and keeps array indivisible if mergeSortAlg
	// yields just a small part of initial array
	//
	function mergeSort(arr) {
	  var cond = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
	    return a > b;
	  } : arguments[1];
	
	  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, step, idx, items, nextArr;
	
	  return _regenerator2.default.wrap(function mergeSort$(_context8) {
	    while (1) {
	      switch (_context8.prev = _context8.next) {
	        case 0:
	          _iteratorNormalCompletion = true;
	          _didIteratorError = false;
	          _iteratorError = undefined;
	          _context8.prev = 3;
	          _iterator = (0, _getIterator3.default)(mergeSortAlg(arr, cond, 0));
	
	        case 5:
	          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	            _context8.next = 16;
	            break;
	          }
	
	          step = _step.value;
	          idx = step.idx;
	          items = step.items;
	          nextArr = step.arr;
	
	
	          arr = arr.slice(0, idx).concat(nextArr).concat(arr.slice(idx + nextArr.length));
	
	          _context8.next = 13;
	          return { arr: arr, items: items };
	
	        case 13:
	          _iteratorNormalCompletion = true;
	          _context8.next = 5;
	          break;
	
	        case 16:
	          _context8.next = 22;
	          break;
	
	        case 18:
	          _context8.prev = 18;
	          _context8.t0 = _context8['catch'](3);
	          _didIteratorError = true;
	          _iteratorError = _context8.t0;
	
	        case 22:
	          _context8.prev = 22;
	          _context8.prev = 23;
	
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	
	        case 25:
	          _context8.prev = 25;
	
	          if (!_didIteratorError) {
	            _context8.next = 28;
	            break;
	          }
	
	          throw _iteratorError;
	
	        case 28:
	          return _context8.finish(25);
	
	        case 29:
	          return _context8.finish(22);
	
	        case 30:
	          return _context8.abrupt('return', { arr: arr });
	
	        case 31:
	        case 'end':
	          return _context8.stop();
	      }
	    }
	  }, _marked[7], this, [[3, 18, 22, 30], [23,, 25, 29]]);
	}
	
	function bogoSort(arr) {
	  var cond = arguments.length <= 1 || arguments[1] === undefined ? function (a) {
	    return a.toString() === (0, _utils.initArray)(a.length).toString();
	  } : arguments[1];
	  return _regenerator2.default.wrap(function bogoSort$(_context9) {
	    while (1) {
	      switch (_context9.prev = _context9.next) {
	        case 0:
	          _context9.next = 2;
	          return { arr: arr };
	
	        case 2:
	          if (cond(arr)) {
	            _context9.next = 8;
	            break;
	          }
	
	          arr = (0, _utils.shuffle)(arr);
	          _context9.next = 6;
	          return { arr: arr };
	
	        case 6:
	          _context9.next = 2;
	          break;
	
	        case 8:
	          return _context9.abrupt('return', { arr: arr });
	
	        case 9:
	        case 'end':
	          return _context9.stop();
	      }
	    }
	  }, _marked[8], this);
	}
	
	function strangeSort(arr) {
	  var cond = arguments.length <= 1 || arguments[1] === undefined ? function (a, b) {
	    return a > b;
	  } : arguments[1];
	
	  var i, j, _ref6;
	
	  return _regenerator2.default.wrap(function strangeSort$(_context10) {
	    while (1) {
	      switch (_context10.prev = _context10.next) {
	        case 0:
	          _context10.next = 2;
	          return { arr: arr };
	
	        case 2:
	          i = 0;
	
	        case 3:
	          if (!(i < arr.length - 1)) {
	            _context10.next = 15;
	            break;
	          }
	
	          j = i;
	
	        case 5:
	          if (!(j < arr.length)) {
	            _context10.next = 12;
	            break;
	          }
	
	          if (cond(arr[i], arr[j])) {
	            _ref6 = [arr[j], arr[i]];
	            arr[i] = _ref6[0];
	            arr[j] = _ref6[1];
	          }
	
	          _context10.next = 9;
	          return { arr: arr, items: [i, j] };
	
	        case 9:
	          j++;
	          _context10.next = 5;
	          break;
	
	        case 12:
	          i++;
	          _context10.next = 3;
	          break;
	
	        case 15:
	          return _context10.abrupt('return', { arr: arr });
	
	        case 16:
	        case 'end':
	          return _context10.stop();
	      }
	    }
	  }, _marked[9], this);
	}
	
	var availableAlgorithms = exports.availableAlgorithms = {
	  bubbleSort: bubbleSort,
	  selectSort: selectSort,
	  insertionSort: insertionSort,
	  gnomeSort: gnomeSort,
	  //strangeSort,
	  cocktailSort: cocktailSort,
	  mergeSort: mergeSort,
	  bogoSort: bogoSort
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(41);
	__webpack_require__(56);
	module.exports = __webpack_require__(58);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	var global        = __webpack_require__(20)
	  , hide          = __webpack_require__(28)
	  , Iterators     = __webpack_require__(45)
	  , TO_STRING_TAG = __webpack_require__(54)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(43)
	  , step             = __webpack_require__(44)
	  , Iterators        = __webpack_require__(45)
	  , toIObject        = __webpack_require__(11);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(46)(Array, 'Array', function(iterated, kind){
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

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(47)
	  , $export        = __webpack_require__(24)
	  , redefine       = __webpack_require__(48)
	  , hide           = __webpack_require__(28)
	  , has            = __webpack_require__(10)
	  , Iterators      = __webpack_require__(45)
	  , $iterCreate    = __webpack_require__(49)
	  , setToStringTag = __webpack_require__(53)
	  , getPrototypeOf = __webpack_require__(55)
	  , ITERATOR       = __webpack_require__(54)('iterator')
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

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(28);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(50)
	  , descriptor     = __webpack_require__(37)
	  , setToStringTag = __webpack_require__(53)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(28)(IteratorPrototype, __webpack_require__(54)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(30)
	  , dPs         = __webpack_require__(51)
	  , enumBugKeys = __webpack_require__(22)
	  , IE_PROTO    = __webpack_require__(18)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(35)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(52).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
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

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(29)
	  , anObject = __webpack_require__(30)
	  , getKeys  = __webpack_require__(8);
	
	module.exports = __webpack_require__(33) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20).document && document.documentElement;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(29).f
	  , has = __webpack_require__(10)
	  , TAG = __webpack_require__(54)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(19)('wks')
	  , uid        = __webpack_require__(21)
	  , Symbol     = __webpack_require__(20).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(10)
	  , toObject    = __webpack_require__(6)
	  , IE_PROTO    = __webpack_require__(18)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(57)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(46)(String, 'String', function(iterated){
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

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(16)
	  , defined   = __webpack_require__(7);
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

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(30)
	  , get      = __webpack_require__(59);
	module.exports = __webpack_require__(25).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(60)
	  , ITERATOR  = __webpack_require__(54)('iterator')
	  , Iterators = __webpack_require__(45);
	module.exports = __webpack_require__(25).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(13)
	  , TAG = __webpack_require__(54)('toStringTag')
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

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(62);


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(63);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(64)))

/***/ },
/* 64 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _from = __webpack_require__(66);
	
	var _from2 = _interopRequireDefault(_from);
	
	exports.initArray = initArray;
	exports.shuffle = shuffle;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by xmityaz on 04.06.16.
	 */
	
	function initArray(len) {
	  return (0, _from2.default)(new Array(len), function (v, i) {
	    return i + 1;
	  });
	}
	
	function shuffle(arr) {
	  var i = arr.length;
	
	  while (i > 0) {
	    var idx = Math.floor(Math.random() * arr.length);
	    i--;
	
	    var _ref = [arr[i], arr[idx]];
	    arr[idx] = _ref[0];
	    arr[i] = _ref[1];
	  }
	
	  return arr;
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(56);
	__webpack_require__(68);
	module.exports = __webpack_require__(25).Array.from;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(26)
	  , $export        = __webpack_require__(24)
	  , toObject       = __webpack_require__(6)
	  , call           = __webpack_require__(69)
	  , isArrayIter    = __webpack_require__(70)
	  , toLength       = __webpack_require__(15)
	  , createProperty = __webpack_require__(71)
	  , getIterFn      = __webpack_require__(59);
	
	$export($export.S + $export.F * !__webpack_require__(72)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(30);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(45)
	  , ITERATOR   = __webpack_require__(54)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(29)
	  , createDesc      = __webpack_require__(37);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(54)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clearCanvas = clearCanvas;
	exports.drawArray = drawArray;
	exports.drawActiveItems = drawActiveItems;
	
	exports.default = function (sortAlg, len) {
	  var testArray = (0, _utils.initArray)(len);
	  var iterator = sortAlg((0, _utils.shuffle)(testArray));
	
	  tick(iterator);
	};
	
	var _canvas = __webpack_require__(1);
	
	var _utils = __webpack_require__(65);
	
	/**
	 * Created by xmityaz on 02.06.16.
	 */
	
	function clearCanvas(ctx) {
	  ctx.clearRect(0, 0, _canvas.width, _canvas.height);
	}
	
	function calcDrawValues(arr) {
	  return {
	    verticalStep: Math.floor(_canvas.height / arr.length),
	    itemWidth: _canvas.width / arr.length / 2,
	    distance: _canvas.width / arr.length
	  };
	}
	
	function drawArray(ctx, arr) {
	  var _calcDrawValues = calcDrawValues(arr);
	
	  var verticalStep = _calcDrawValues.verticalStep;
	  var itemWidth = _calcDrawValues.itemWidth;
	  var distance = _calcDrawValues.distance;
	
	
	  ctx.beginPath();
	
	  arr.forEach(function (item, idx) {
	    return drawLine(ctx, distance * (idx + 0.5), _canvas.height, _canvas.height - verticalStep * item);
	  });
	
	  ctx.lineWidth = itemWidth;
	  ctx.strokeStyle = '#000000';
	  ctx.stroke();
	}
	
	function drawActiveItems(ctx, arr, items) {
	  var _calcDrawValues2 = calcDrawValues(arr);
	
	  var verticalStep = _calcDrawValues2.verticalStep;
	  var itemWidth = _calcDrawValues2.itemWidth;
	  var distance = _calcDrawValues2.distance;
	
	
	  ctx.beginPath();
	
	  items.forEach(function (idx) {
	    return drawLine(ctx, distance * (idx + 0.5), _canvas.height, _canvas.height - verticalStep * arr[idx]);
	  });
	
	  ctx.lineWidth = itemWidth;
	  ctx.strokeStyle = '#ff0000';
	  ctx.stroke();
	}
	
	function drawLine(ctx, x, y, Y) {
	  ctx.moveTo(x, y);
	  ctx.lineTo(x, Y);
	}
	
	function tick(iterator) {
	  var next = iterator.next();
	  var _next$value = next.value;
	  var arr = _next$value.arr;
	  var items = _next$value.items;
	  var done = next.done;
	
	
	  clearCanvas(_canvas.context);
	  drawArray(_canvas.context, arr);
	
	  items && drawActiveItems(_canvas.context, arr, items);
	
	  if (done) {
	    return;
	  }
	
	  requestAnimationFrame(tick.bind(null, iterator));
	}
	
	// Visualize main function
	//
	// @sortAlg - sorting function to visualize
	// @len     - length of visualization array

/***/ }
/******/ ]);
//# sourceMappingURL=js.js.map