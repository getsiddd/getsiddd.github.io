/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(332);
	module.exports = __webpack_require__(333);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals window __webpack_hash__ */
	if(false) {
		var lastData;
		var upToDate = function upToDate() {
			return lastData.indexOf(__webpack_hash__) >= 0;
		};
		var check = function check() {
			module.hot.check(function(err, updatedModules) {
				if(err) {
					if(module.hot.status() in {
							abort: 1,
							fail: 1
						}) {
						console.warn("[HMR] Cannot check for update. Need to do a full reload!");
						console.warn("[HMR] " + err.stack || err.message);
					} else {
						console.warn("[HMR] Update check failed: " + err.stack || err.message);
					}
					return;
				}

				if(!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					return;
				}

				module.hot.apply({
					ignoreUnaccepted: true
				}, function(err, renewedModules) {
					if(err) {
						if(module.hot.status() in {
								abort: 1,
								fail: 1
							}) {
							console.warn("[HMR] Cannot apply update. Need to do a full reload!");
							console.warn("[HMR] " + err.stack || err.message);
						} else {
							console.warn("[HMR] Update failed: " + err.stack || err.message);
						}
						return;
					}

					if(!upToDate()) {
						check();
					}

					require("./log-apply-result")(updatedModules, renewedModules);

					if(upToDate()) {
						console.log("[HMR] App is up to date.");
					}
				});
			});
		};
		var addEventListener = window.addEventListener ? function(eventName, listener) {
			window.addEventListener(eventName, listener, false);
		} : function(eventName, listener) {
			window.attachEvent("on" + eventName, listener);
		};
		addEventListener("message", function(event) {
			if(typeof event.data === "string" && event.data.indexOf("webpackHotUpdate") === 0) {
				lastData = event.data;
				if(!upToDate() && module.hot.status() === "idle") {
					console.log("[HMR] Checking for updates on the server...");
					check();
				}
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(3);

	__webpack_require__(328);

	__webpack_require__(329);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(186);
	__webpack_require__(189);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(207);
	__webpack_require__(208);
	__webpack_require__(209);
	__webpack_require__(211);
	__webpack_require__(221);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(260);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(292);
	__webpack_require__(293);
	__webpack_require__(294);
	__webpack_require__(295);
	__webpack_require__(296);
	__webpack_require__(297);
	__webpack_require__(298);
	__webpack_require__(299);
	__webpack_require__(300);
	__webpack_require__(301);
	__webpack_require__(303);
	__webpack_require__(304);
	__webpack_require__(305);
	__webpack_require__(306);
	__webpack_require__(307);
	__webpack_require__(308);
	__webpack_require__(309);
	__webpack_require__(310);
	__webpack_require__(311);
	__webpack_require__(312);
	__webpack_require__(313);
	__webpack_require__(315);
	__webpack_require__(316);
	__webpack_require__(317);
	__webpack_require__(318);
	__webpack_require__(319);
	__webpack_require__(320);
	__webpack_require__(321);
	__webpack_require__(322);
	__webpack_require__(323);
	__webpack_require__(324);
	__webpack_require__(325);
	__webpack_require__(326);
	__webpack_require__(327);
	module.exports = __webpack_require__(10);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(5);
	var has = __webpack_require__(6);
	var DESCRIPTORS = __webpack_require__(7);
	var $export = __webpack_require__(9);
	var redefine = __webpack_require__(19);
	var META = __webpack_require__(23).KEY;
	var $fails = __webpack_require__(8);
	var shared = __webpack_require__(24);
	var setToStringTag = __webpack_require__(26);
	var uid = __webpack_require__(20);
	var wks = __webpack_require__(27);
	var wksExt = __webpack_require__(28);
	var wksDefine = __webpack_require__(29);
	var enumKeys = __webpack_require__(30);
	var isArray = __webpack_require__(45);
	var anObject = __webpack_require__(13);
	var isObject = __webpack_require__(14);
	var toIObject = __webpack_require__(33);
	var toPrimitive = __webpack_require__(17);
	var createDesc = __webpack_require__(18);
	var _create = __webpack_require__(46);
	var gOPNExt = __webpack_require__(49);
	var $GOPD = __webpack_require__(51);
	var $DP = __webpack_require__(12);
	var $keys = __webpack_require__(31);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(25)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(8)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5);
	var core = __webpack_require__(10);
	var hide = __webpack_require__(11);
	var redefine = __webpack_require__(19);
	var ctx = __webpack_require__(21);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
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


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.6.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(12);
	var createDesc = __webpack_require__(18);
	module.exports = __webpack_require__(7) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(13);
	var IE8_DOM_DEFINE = __webpack_require__(15);
	var toPrimitive = __webpack_require__(17);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(7) && !__webpack_require__(8)(function () {
	  return Object.defineProperty(__webpack_require__(16)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	var document = __webpack_require__(5).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(14);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5);
	var hide = __webpack_require__(11);
	var has = __webpack_require__(6);
	var SRC = __webpack_require__(20)('src');
	var TO_STRING = 'toString';
	var $toString = Function[TO_STRING];
	var TPL = ('' + $toString).split(TO_STRING);

	__webpack_require__(10).inspectSource = function (it) {
	  return $toString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(22);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
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
/* 22 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(20)('meta');
	var isObject = __webpack_require__(14);
	var has = __webpack_require__(6);
	var setDesc = __webpack_require__(12).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(8)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(10);
	var global = __webpack_require__(5);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(25) ? 'pure' : 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = false;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(12).f;
	var has = __webpack_require__(6);
	var TAG = __webpack_require__(27)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(24)('wks');
	var uid = __webpack_require__(20);
	var Symbol = __webpack_require__(5).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(27);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5);
	var core = __webpack_require__(10);
	var LIBRARY = __webpack_require__(25);
	var wksExt = __webpack_require__(28);
	var defineProperty = __webpack_require__(12).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(31);
	var gOPS = __webpack_require__(43);
	var pIE = __webpack_require__(44);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(32);
	var enumBugKeys = __webpack_require__(42);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(6);
	var toIObject = __webpack_require__(33);
	var arrayIndexOf = __webpack_require__(37)(false);
	var IE_PROTO = __webpack_require__(41)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(34);
	var defined = __webpack_require__(36);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(35);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(33);
	var toLength = __webpack_require__(38);
	var toAbsoluteIndex = __webpack_require__(40);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(39);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(24)('keys');
	var uid = __webpack_require__(20);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(35);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(13);
	var dPs = __webpack_require__(47);
	var enumBugKeys = __webpack_require__(42);
	var IE_PROTO = __webpack_require__(41)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(16)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(12);
	var anObject = __webpack_require__(13);
	var getKeys = __webpack_require__(31);

	module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(5).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(33);
	var gOPN = __webpack_require__(50).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(32);
	var hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(44);
	var createDesc = __webpack_require__(18);
	var toIObject = __webpack_require__(33);
	var toPrimitive = __webpack_require__(17);
	var has = __webpack_require__(6);
	var IE8_DOM_DEFINE = __webpack_require__(15);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(46) });


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperties: __webpack_require__(47) });


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(33);
	var $getOwnPropertyDescriptor = __webpack_require__(51).f;

	__webpack_require__(56)('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(9);
	var core = __webpack_require__(10);
	var fails = __webpack_require__(8);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(58);
	var $getPrototypeOf = __webpack_require__(59);

	__webpack_require__(56)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(36);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(6);
	var toObject = __webpack_require__(58);
	var IE_PROTO = __webpack_require__(41)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58);
	var $keys = __webpack_require__(31);

	__webpack_require__(56)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function () {
	  return __webpack_require__(49).f;
	});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(14);
	var meta = __webpack_require__(23).onFreeze;

	__webpack_require__(56)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(14);
	var meta = __webpack_require__(23).onFreeze;

	__webpack_require__(56)('seal', function ($seal) {
	  return function seal(it) {
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(14);
	var meta = __webpack_require__(23).onFreeze;

	__webpack_require__(56)('preventExtensions', function ($preventExtensions) {
	  return function preventExtensions(it) {
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(14);

	__webpack_require__(56)('isFrozen', function ($isFrozen) {
	  return function isFrozen(it) {
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(14);

	__webpack_require__(56)('isSealed', function ($isSealed) {
	  return function isSealed(it) {
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(14);

	__webpack_require__(56)('isExtensible', function ($isExtensible) {
	  return function isExtensible(it) {
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(9);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(69) });


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(31);
	var gOPS = __webpack_require__(43);
	var pIE = __webpack_require__(44);
	var toObject = __webpack_require__(58);
	var IObject = __webpack_require__(34);
	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(8)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(9);
	$export($export.S, 'Object', { is: __webpack_require__(71) });


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(9);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(73).set });


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(14);
	var anObject = __webpack_require__(13);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(21)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75);
	var test = {};
	test[__webpack_require__(27)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(19)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(35);
	var TAG = __webpack_require__(27)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(9);

	$export($export.P, 'Function', { bind: __webpack_require__(77) });


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction = __webpack_require__(22);
	var isObject = __webpack_require__(14);
	var invoke = __webpack_require__(78);
	var arraySlice = [].slice;
	var factories = {};

	var construct = function (F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /* , ...args */) {
	  var fn = aFunction(this);
	  var partArgs = arraySlice.call(arguments, 1);
	  var bound = function (/* args... */) {
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};


/***/ }),
/* 78 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(12).f;
	var FProto = Function.prototype;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(7) && dP(FProto, NAME, {
	  configurable: true,
	  get: function () {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
	});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var isObject = __webpack_require__(14);
	var getPrototypeOf = __webpack_require__(59);
	var HAS_INSTANCE = __webpack_require__(27)('hasInstance');
	var FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(12).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
	  if (typeof this != 'function' || !isObject(O)) return false;
	  if (!isObject(this.prototype)) return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
	  return false;
	} });


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	var $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(5).parseInt;
	var $trim = __webpack_require__(83).trim;
	var ws = __webpack_require__(84);
	var hex = /^[-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	var defined = __webpack_require__(36);
	var fails = __webpack_require__(8);
	var spaces = __webpack_require__(84);
	var space = '[' + spaces + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');

	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = fails(function () {
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	var $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(5).parseFloat;
	var $trim = __webpack_require__(83).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str) {
	  var string = $trim(String(str), 3);
	  var result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(5);
	var has = __webpack_require__(6);
	var cof = __webpack_require__(35);
	var inheritIfRequired = __webpack_require__(88);
	var toPrimitive = __webpack_require__(17);
	var fails = __webpack_require__(8);
	var gOPN = __webpack_require__(50).f;
	var gOPD = __webpack_require__(51).f;
	var dP = __webpack_require__(12).f;
	var $trim = __webpack_require__(83).trim;
	var NUMBER = 'Number';
	var $Number = global[NUMBER];
	var Base = $Number;
	var proto = $Number.prototype;
	// Opera ~12 has broken Object#toString
	var BROKEN_COF = cof(__webpack_require__(46)(proto)) == NUMBER;
	var TRIM = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function (argument) {
	  var it = toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = __webpack_require__(7) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++) {
	    if (has(Base, key = keys[j]) && !has($Number, key)) {
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(19)(global, NUMBER, $Number);
	}


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	var setPrototypeOf = __webpack_require__(73).set;
	module.exports = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
	};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var toInteger = __webpack_require__(39);
	var aNumberValue = __webpack_require__(90);
	var repeat = __webpack_require__(91);
	var $toFixed = 1.0.toFixed;
	var floor = Math.floor;
	var data = [0, 0, 0, 0, 0, 0];
	var ERROR = 'Number.toFixed: incorrect invocation!';
	var ZERO = '0';

	var multiply = function (n, c) {
	  var i = -1;
	  var c2 = c;
	  while (++i < 6) {
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function (n) {
	  var i = 6;
	  var c = 0;
	  while (--i >= 0) {
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function () {
	  var i = 6;
	  var s = '';
	  while (--i >= 0) {
	    if (s !== '' || i === 0 || data[i] !== 0) {
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function (x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function (x) {
	  var n = 0;
	  var x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(8)(function () {
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits) {
	    var x = aNumberValue(this, ERROR);
	    var f = toInteger(fractionDigits);
	    var s = '';
	    var m = ZERO;
	    var e, z, j, k;
	    if (f < 0 || f > 20) throw RangeError(ERROR);
	    // eslint-disable-next-line no-self-compare
	    if (x != x) return 'NaN';
	    if (x <= -1e21 || x >= 1e21) return String(x);
	    if (x < 0) {
	      s = '-';
	      x = -x;
	    }
	    if (x > 1e-21) {
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = f;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if (f > 0) {
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(35);
	module.exports = function (it, msg) {
	  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
	  return +it;
	};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(39);
	var defined = __webpack_require__(36);

	module.exports = function repeat(count) {
	  var str = String(defined(this));
	  var res = '';
	  var n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	  return res;
	};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var $fails = __webpack_require__(8);
	var aNumberValue = __webpack_require__(90);
	var $toPrecision = 1.0.toPrecision;

	$export($export.P + $export.F * ($fails(function () {
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function () {
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision) {
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
	  }
	});


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export = __webpack_require__(9);
	var _isFinite = __webpack_require__(5).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it) {
	    return typeof it == 'number' && _isFinite(it);
	  }
	});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', { isInteger: __webpack_require__(96) });


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(14);
	var floor = Math.floor;
	module.exports = function isInteger(it) {
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare
	    return number != number;
	  }
	});


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export = __webpack_require__(9);
	var isInteger = __webpack_require__(96);
	var abs = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(9);

	$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	var $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	var $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(9);
	var log1p = __webpack_require__(104);
	var sqrt = Math.sqrt;
	var $acosh = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});


/***/ }),
/* 104 */
/***/ (function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(9);
	var $asinh = Math.asinh;

	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(9);
	var $atanh = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(9);
	var sign = __webpack_require__(108);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x) {
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});


/***/ }),
/* 108 */
/***/ (function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(9);
	var exp = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x) {
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(9);
	var $expm1 = __webpack_require__(112);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 112 */
/***/ (function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', { fround: __webpack_require__(114) });


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var sign = __webpack_require__(108);
	var pow = Math.pow;
	var EPSILON = pow(2, -52);
	var EPSILON32 = pow(2, -23);
	var MAX32 = pow(2, 127) * (2 - EPSILON32);
	var MIN32 = pow(2, -126);

	var roundTiesToEven = function (n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	};

	module.exports = Math.fround || function fround(x) {
	  var $abs = Math.abs(x);
	  var $sign = sign(x);
	  var a, result;
	  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	  a = (1 + EPSILON32 / EPSILON) * $abs;
	  result = a - (a - $abs);
	  // eslint-disable-next-line no-self-compare
	  if (result > MAX32 || result != result) return $sign * Infinity;
	  return $sign * result;
	};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(9);
	var abs = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
	    var sum = 0;
	    var i = 0;
	    var aLen = arguments.length;
	    var larg = 0;
	    var arg, div;
	    while (i < aLen) {
	      arg = abs(arguments[i++]);
	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(9);
	var $imul = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(8)(function () {
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y) {
	    var UINT16 = 0xffff;
	    var xn = +x;
	    var yn = +y;
	    var xl = UINT16 & xn;
	    var yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  log10: function log10(x) {
	    return Math.log(x) * Math.LOG10E;
	  }
	});


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', { log1p: __webpack_require__(104) });


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  log2: function log2(x) {
	    return Math.log(x) / Math.LN2;
	  }
	});


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', { sign: __webpack_require__(108) });


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(9);
	var expm1 = __webpack_require__(112);
	var exp = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(8)(function () {
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x) {
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(9);
	var expm1 = __webpack_require__(112);
	var exp = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x) {
	    var a = expm1(x = +x);
	    var b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  trunc: function trunc(it) {
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	var toAbsoluteIndex = __webpack_require__(40);
	var fromCharCode = String.fromCharCode;
	var $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
	    var res = [];
	    var aLen = arguments.length;
	    var i = 0;
	    var code;
	    while (aLen > i) {
	      code = +arguments[i++];
	      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	var toIObject = __webpack_require__(33);
	var toLength = __webpack_require__(38);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite) {
	    var tpl = toIObject(callSite.raw);
	    var len = toLength(tpl.length);
	    var aLen = arguments.length;
	    var res = [];
	    var i = 0;
	    while (len > i) {
	      res.push(String(tpl[i++]));
	      if (i < aLen) res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function ($trim) {
	  return function trim() {
	    return $trim(this, 3);
	  };
	});


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(128)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(129)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39);
	var defined = __webpack_require__(36);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(25);
	var $export = __webpack_require__(9);
	var redefine = __webpack_require__(19);
	var hide = __webpack_require__(11);
	var Iterators = __webpack_require__(130);
	var $iterCreate = __webpack_require__(131);
	var setToStringTag = __webpack_require__(26);
	var getPrototypeOf = __webpack_require__(59);
	var ITERATOR = __webpack_require__(27)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 130 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(46);
	var descriptor = __webpack_require__(18);
	var setToStringTag = __webpack_require__(26);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(11)(IteratorPrototype, __webpack_require__(27)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var $at = __webpack_require__(128)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos) {
	    return $at(this, pos);
	  }
	});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export = __webpack_require__(9);
	var toLength = __webpack_require__(38);
	var context = __webpack_require__(134);
	var ENDS_WITH = 'endsWith';
	var $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(136)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /* , endPosition = @length */) {
	    var that = context(this, searchString, ENDS_WITH);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = toLength(that.length);
	    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
	    var search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(135);
	var defined = __webpack_require__(36);

	module.exports = function (that, searchString, NAME) {
	  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(14);
	var cof = __webpack_require__(35);
	var MATCH = __webpack_require__(27)('match');
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(27)('match');
	module.exports = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch (f) { /* empty */ }
	  } return true;
	};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export = __webpack_require__(9);
	var context = __webpack_require__(134);
	var INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(136)(INCLUDES), 'String', {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export = __webpack_require__(9);
	var toLength = __webpack_require__(38);
	var context = __webpack_require__(134);
	var STARTS_WITH = 'startsWith';
	var $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(136)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = context(this, searchString, STARTS_WITH);
	    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(141)('anchor', function (createHTML) {
	  return function anchor(name) {
	    return createHTML(this, 'a', 'name', name);
	  };
	});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	var fails = __webpack_require__(8);
	var defined = __webpack_require__(36);
	var quot = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function (string, tag, attribute, value) {
	  var S = String(defined(string));
	  var p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function (NAME, exec) {
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function () {
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(141)('big', function (createHTML) {
	  return function big() {
	    return createHTML(this, 'big', '', '');
	  };
	});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(141)('blink', function (createHTML) {
	  return function blink() {
	    return createHTML(this, 'blink', '', '');
	  };
	});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(141)('bold', function (createHTML) {
	  return function bold() {
	    return createHTML(this, 'b', '', '');
	  };
	});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(141)('fixed', function (createHTML) {
	  return function fixed() {
	    return createHTML(this, 'tt', '', '');
	  };
	});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(141)('fontcolor', function (createHTML) {
	  return function fontcolor(color) {
	    return createHTML(this, 'font', 'color', color);
	  };
	});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(141)('fontsize', function (createHTML) {
	  return function fontsize(size) {
	    return createHTML(this, 'font', 'size', size);
	  };
	});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(141)('italics', function (createHTML) {
	  return function italics() {
	    return createHTML(this, 'i', '', '');
	  };
	});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(141)('link', function (createHTML) {
	  return function link(url) {
	    return createHTML(this, 'a', 'href', url);
	  };
	});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(141)('small', function (createHTML) {
	  return function small() {
	    return createHTML(this, 'small', '', '');
	  };
	});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(141)('strike', function (createHTML) {
	  return function strike() {
	    return createHTML(this, 'strike', '', '');
	  };
	});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(141)('sub', function (createHTML) {
	  return function sub() {
	    return createHTML(this, 'sub', '', '');
	  };
	});


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(141)('sup', function (createHTML) {
	  return function sup() {
	    return createHTML(this, 'sup', '', '');
	  };
	});


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(9);

	$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var toObject = __webpack_require__(58);
	var toPrimitive = __webpack_require__(17);

	$export($export.P + $export.F * __webpack_require__(8)(function () {
	  return new Date(NaN).toJSON() !== null
	    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
	}), 'Date', {
	  // eslint-disable-next-line no-unused-vars
	  toJSON: function toJSON(key) {
	    var O = toObject(this);
	    var pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(9);
	var toISOString = __webpack_require__(157);

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
	  toISOString: toISOString
	});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var fails = __webpack_require__(8);
	var getTime = Date.prototype.getTime;
	var $toISOString = Date.prototype.toISOString;

	var lz = function (num) {
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	module.exports = (fails(function () {
	  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
	}) || !fails(function () {
	  $toISOString.call(new Date(NaN));
	})) ? function toISOString() {
	  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
	  var d = this;
	  var y = d.getUTCFullYear();
	  var m = d.getUTCMilliseconds();
	  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
	  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	} : $toISOString;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var DateProto = Date.prototype;
	var INVALID_DATE = 'Invalid Date';
	var TO_STRING = 'toString';
	var $toString = DateProto[TO_STRING];
	var getTime = DateProto.getTime;
	if (new Date(NaN) + '' != INVALID_DATE) {
	  __webpack_require__(19)(DateProto, TO_STRING, function toString() {
	    var value = getTime.call(this);
	    // eslint-disable-next-line no-self-compare
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(27)('toPrimitive');
	var proto = Date.prototype;

	if (!(TO_PRIMITIVE in proto)) __webpack_require__(11)(proto, TO_PRIMITIVE, __webpack_require__(160));


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var anObject = __webpack_require__(13);
	var toPrimitive = __webpack_require__(17);
	var NUMBER = 'number';

	module.exports = function (hint) {
	  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(9);

	$export($export.S, 'Array', { isArray: __webpack_require__(45) });


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(21);
	var $export = __webpack_require__(9);
	var toObject = __webpack_require__(58);
	var call = __webpack_require__(163);
	var isArrayIter = __webpack_require__(164);
	var toLength = __webpack_require__(38);
	var createProperty = __webpack_require__(165);
	var getIterFn = __webpack_require__(166);

	$export($export.S + $export.F * !__webpack_require__(167)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(13);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(130);
	var ITERATOR = __webpack_require__(27)('iterator');
	var ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(12);
	var createDesc = __webpack_require__(18);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(75);
	var ITERATOR = __webpack_require__(27)('iterator');
	var Iterators = __webpack_require__(130);
	module.exports = __webpack_require__(10).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(27)('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var createProperty = __webpack_require__(165);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(8)(function () {
	  function F() { /* empty */ }
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */) {
	    var index = 0;
	    var aLen = arguments.length;
	    var result = new (typeof this == 'function' ? this : Array)(aLen);
	    while (aLen > index) createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export = __webpack_require__(9);
	var toIObject = __webpack_require__(33);
	var arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(34) != Object || !__webpack_require__(170)(arrayJoin)), 'Array', {
	  join: function join(separator) {
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var fails = __webpack_require__(8);

	module.exports = function (method, arg) {
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call
	    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
	  });
	};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var html = __webpack_require__(48);
	var cof = __webpack_require__(35);
	var toAbsoluteIndex = __webpack_require__(40);
	var toLength = __webpack_require__(38);
	var arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(8)(function () {
	  if (html) arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end) {
	    var len = toLength(this.length);
	    var klass = cof(this);
	    end = end === undefined ? len : end;
	    if (klass == 'Array') return arraySlice.call(this, begin, end);
	    var start = toAbsoluteIndex(begin, len);
	    var upTo = toAbsoluteIndex(end, len);
	    var size = toLength(upTo - start);
	    var cloned = new Array(size);
	    var i = 0;
	    for (; i < size; i++) cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var aFunction = __webpack_require__(22);
	var toObject = __webpack_require__(58);
	var fails = __webpack_require__(8);
	var $sort = [].sort;
	var test = [1, 2, 3];

	$export($export.P + $export.F * (fails(function () {
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function () {
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(170)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn) {
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var $forEach = __webpack_require__(174)(0);
	var STRICT = __webpack_require__(170)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */) {
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(21);
	var IObject = __webpack_require__(34);
	var toObject = __webpack_require__(58);
	var toLength = __webpack_require__(38);
	var asc = __webpack_require__(175);
	module.exports = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || asc;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this);
	    var self = IObject(O);
	    var f = ctx(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(176);

	module.exports = function (original, length) {
	  return new (speciesConstructor(original))(length);
	};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	var isArray = __webpack_require__(45);
	var SPECIES = __webpack_require__(27)('species');

	module.exports = function (original) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var $map = __webpack_require__(174)(1);

	$export($export.P + $export.F * !__webpack_require__(170)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var $filter = __webpack_require__(174)(2);

	$export($export.P + $export.F * !__webpack_require__(170)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var $some = __webpack_require__(174)(3);

	$export($export.P + $export.F * !__webpack_require__(170)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var $every = __webpack_require__(174)(4);

	$export($export.P + $export.F * !__webpack_require__(170)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */) {
	    return $every(this, callbackfn, arguments[1]);
	  }
	});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var $reduce = __webpack_require__(182);

	$export($export.P + $export.F * !__webpack_require__(170)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(22);
	var toObject = __webpack_require__(58);
	var IObject = __webpack_require__(34);
	var toLength = __webpack_require__(38);

	module.exports = function (that, callbackfn, aLen, memo, isRight) {
	  aFunction(callbackfn);
	  var O = toObject(that);
	  var self = IObject(O);
	  var length = toLength(O.length);
	  var index = isRight ? length - 1 : 0;
	  var i = isRight ? -1 : 1;
	  if (aLen < 2) for (;;) {
	    if (index in self) {
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if (isRight ? index < 0 : length <= index) {
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var $reduce = __webpack_require__(182);

	$export($export.P + $export.F * !__webpack_require__(170)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var $indexOf = __webpack_require__(37)(false);
	var $native = [].indexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var toIObject = __webpack_require__(33);
	var toInteger = __webpack_require__(39);
	var toLength = __webpack_require__(38);
	var $native = [].lastIndexOf;
	var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
	    // convert -0 to +0
	    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
	    var O = toIObject(this);
	    var length = toLength(O.length);
	    var index = length - 1;
	    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
	    if (index < 0) index = length + index;
	    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
	    return -1;
	  }
	});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(9);

	$export($export.P, 'Array', { copyWithin: __webpack_require__(187) });

	__webpack_require__(188)('copyWithin');


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58);
	var toAbsoluteIndex = __webpack_require__(40);
	var toLength = __webpack_require__(38);

	module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
	  var O = toObject(this);
	  var len = toLength(O.length);
	  var to = toAbsoluteIndex(target, len);
	  var from = toAbsoluteIndex(start, len);
	  var end = arguments.length > 2 ? arguments[2] : undefined;
	  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
	  var inc = 1;
	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }
	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];
	    else delete O[to];
	    to += inc;
	    from += inc;
	  } return O;
	};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(27)('unscopables');
	var ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(9);

	$export($export.P, 'Array', { fill: __webpack_require__(190) });

	__webpack_require__(188)('fill');


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58);
	var toAbsoluteIndex = __webpack_require__(40);
	var toLength = __webpack_require__(38);
	module.exports = function fill(value /* , start = 0, end = @length */) {
	  var O = toObject(this);
	  var length = toLength(O.length);
	  var aLen = arguments.length;
	  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
	  var end = aLen > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
	  while (endPos > index) O[index++] = value;
	  return O;
	};


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(9);
	var $find = __webpack_require__(174)(5);
	var KEY = 'find';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(188)(KEY);


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(9);
	var $find = __webpack_require__(174)(6);
	var KEY = 'findIndex';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(188)(KEY);


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(194)('Array');


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(5);
	var dP = __webpack_require__(12);
	var DESCRIPTORS = __webpack_require__(7);
	var SPECIES = __webpack_require__(27)('species');

	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(188);
	var step = __webpack_require__(196);
	var Iterators = __webpack_require__(130);
	var toIObject = __webpack_require__(33);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(129)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 196 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5);
	var inheritIfRequired = __webpack_require__(88);
	var dP = __webpack_require__(12).f;
	var gOPN = __webpack_require__(50).f;
	var isRegExp = __webpack_require__(135);
	var $flags = __webpack_require__(198);
	var $RegExp = global.RegExp;
	var Base = $RegExp;
	var proto = $RegExp.prototype;
	var re1 = /a/g;
	var re2 = /a/g;
	// "new" creates a new object, old webkit buggy here
	var CORRECT_NEW = new $RegExp(re1) !== re1;

	if (__webpack_require__(7) && (!CORRECT_NEW || __webpack_require__(8)(function () {
	  re2[__webpack_require__(27)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))) {
	  $RegExp = function RegExp(p, f) {
	    var tiRE = this instanceof $RegExp;
	    var piRE = isRegExp(p);
	    var fiU = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function (key) {
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function () { return Base[key]; },
	      set: function (it) { Base[key] = it; }
	    });
	  };
	  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(19)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(194)('RegExp');


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(13);
	module.exports = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var regexpExec = __webpack_require__(200);
	__webpack_require__(9)({
	  target: 'RegExp',
	  proto: true,
	  forced: regexpExec !== /./.exec
	}, {
	  exec: regexpExec
	});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var regexpFlags = __webpack_require__(198);

	var nativeExec = RegExp.prototype.exec;
	// This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.
	var nativeReplace = String.prototype.replace;

	var patchedExec = nativeExec;

	var LAST_INDEX = 'lastIndex';

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/,
	      re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
	})();

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

	    match = nativeExec.call(re, str);

	    if (UPDATES_LAST_INDEX_WRONG && match) {
	      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      // eslint-disable-next-line no-loop-func
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	module.exports = patchedExec;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(202);
	var anObject = __webpack_require__(13);
	var $flags = __webpack_require__(198);
	var DESCRIPTORS = __webpack_require__(7);
	var TO_STRING = 'toString';
	var $toString = /./[TO_STRING];

	var define = function (fn) {
	  __webpack_require__(19)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if (__webpack_require__(8)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
	  define(function toString() {
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if (__webpack_require__(7) && /./g.flags != 'g') __webpack_require__(12).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(198)
	});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var anObject = __webpack_require__(13);
	var toLength = __webpack_require__(38);
	var advanceStringIndex = __webpack_require__(204);
	var regExpExec = __webpack_require__(205);

	// @@match logic
	__webpack_require__(206)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
	  return [
	    // `String.prototype.match` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.match
	    function match(regexp) {
	      var O = defined(this);
	      var fn = regexp == undefined ? undefined : regexp[MATCH];
	      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	    },
	    // `RegExp.prototype[@@match]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
	    function (regexp) {
	      var res = maybeCallNative($match, regexp, this);
	      if (res.done) return res.value;
	      var rx = anObject(regexp);
	      var S = String(this);
	      if (!rx.global) return regExpExec(rx, S);
	      var fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	      var A = [];
	      var n = 0;
	      var result;
	      while ((result = regExpExec(rx, S)) !== null) {
	        var matchStr = String(result[0]);
	        A[n] = matchStr;
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	        n++;
	      }
	      return n === 0 ? null : A;
	    }
	  ];
	});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var at = __webpack_require__(128)(true);

	 // `AdvanceStringIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-advancestringindex
	module.exports = function (S, index, unicode) {
	  return index + (unicode ? at(S, index).length : 1);
	};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var classof = __webpack_require__(75);
	var builtinExec = RegExp.prototype.exec;

	 // `RegExpExec` abstract operation
	// https://tc39.github.io/ecma262/#sec-regexpexec
	module.exports = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw new TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }
	  if (classof(R) !== 'RegExp') {
	    throw new TypeError('RegExp#exec called on incompatible receiver');
	  }
	  return builtinExec.call(R, S);
	};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(199);
	var redefine = __webpack_require__(19);
	var hide = __webpack_require__(11);
	var fails = __webpack_require__(8);
	var defined = __webpack_require__(36);
	var wks = __webpack_require__(27);
	var regexpExec = __webpack_require__(200);

	var SPECIES = wks('species');

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  return ''.replace(re, '$<a>') !== '7';
	});

	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
	  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
	})();

	module.exports = function (KEY, length, exec) {
	  var SYMBOL = wks(KEY);

	  var DELEGATES_TO_SYMBOL = !fails(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;
	    re.exec = function () { execCalled = true; return null; };
	    if (KEY === 'split') {
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES] = function () { return re; };
	    }
	    re[SYMBOL]('');
	    return !execCalled;
	  }) : undefined;

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
	    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var fns = exec(
	      defined,
	      SYMBOL,
	      ''[KEY],
	      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
	        if (regexp.exec === regexpExec) {
	          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	            // The native String method already delegates to @@method (this
	            // polyfilled function), leasing to infinite recursion.
	            // We avoid it by directly calling the native @@method method.
	            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
	          }
	          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
	        }
	        return { done: false };
	      }
	    );
	    var strfn = fns[0];
	    var rxfn = fns[1];

	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return rxfn.call(string, this); }
	    );
	  }
	};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var anObject = __webpack_require__(13);
	var toObject = __webpack_require__(58);
	var toLength = __webpack_require__(38);
	var toInteger = __webpack_require__(39);
	var advanceStringIndex = __webpack_require__(204);
	var regExpExec = __webpack_require__(205);
	var max = Math.max;
	var min = Math.min;
	var floor = Math.floor;
	var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// @@replace logic
	__webpack_require__(206)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
	  return [
	    // `String.prototype.replace` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = defined(this);
	      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return fn !== undefined
	        ? fn.call(searchValue, O, replaceValue)
	        : $replace.call(String(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
	    function (regexp, replaceValue) {
	      var res = maybeCallNative($replace, regexp, this, replaceValue);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);
	      var functionalReplace = typeof replaceValue === 'function';
	      if (!functionalReplace) replaceValue = String(replaceValue);
	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = regExpExec(rx, S);
	        if (result === null) break;
	        results.push(result);
	        if (!global) break;
	        var matchStr = String(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	      }
	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];
	        var matched = String(result[0]);
	        var position = max(min(toInteger(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = [matched].concat(captures, position, S);
	          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	          var replacement = String(replaceValue.apply(undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + S.slice(nextSourcePosition);
	    }
	  ];

	    // https://tc39.github.io/ecma262/#sec-getsubstitution
	  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	    var tailPos = position + matched.length;
	    var m = captures.length;
	    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	    if (namedCaptures !== undefined) {
	      namedCaptures = toObject(namedCaptures);
	      symbols = SUBSTITUTION_SYMBOLS;
	    }
	    return $replace.call(replacement, symbols, function (match, ch) {
	      var capture;
	      switch (ch.charAt(0)) {
	        case '$': return '$';
	        case '&': return matched;
	        case '`': return str.slice(0, position);
	        case "'": return str.slice(tailPos);
	        case '<':
	          capture = namedCaptures[ch.slice(1, -1)];
	          break;
	        default: // \d\d?
	          var n = +ch;
	          if (n === 0) return ch;
	          if (n > m) {
	            var f = floor(n / 10);
	            if (f === 0) return ch;
	            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	            return ch;
	          }
	          capture = captures[n - 1];
	      }
	      return capture === undefined ? '' : capture;
	    });
	  }
	});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var anObject = __webpack_require__(13);
	var sameValue = __webpack_require__(71);
	var regExpExec = __webpack_require__(205);

	// @@search logic
	__webpack_require__(206)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
	  return [
	    // `String.prototype.search` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.search
	    function search(regexp) {
	      var O = defined(this);
	      var fn = regexp == undefined ? undefined : regexp[SEARCH];
	      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	    },
	    // `RegExp.prototype[@@search]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
	    function (regexp) {
	      var res = maybeCallNative($search, regexp, this);
	      if (res.done) return res.value;
	      var rx = anObject(regexp);
	      var S = String(this);
	      var previousLastIndex = rx.lastIndex;
	      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
	      var result = regExpExec(rx, S);
	      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
	      return result === null ? -1 : result.index;
	    }
	  ];
	});


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var isRegExp = __webpack_require__(135);
	var anObject = __webpack_require__(13);
	var speciesConstructor = __webpack_require__(210);
	var advanceStringIndex = __webpack_require__(204);
	var toLength = __webpack_require__(38);
	var callRegExpExec = __webpack_require__(205);
	var regexpExec = __webpack_require__(200);
	var $min = Math.min;
	var $push = [].push;
	var $SPLIT = 'split';
	var LENGTH = 'length';
	var LAST_INDEX = 'lastIndex';

	// eslint-disable-next-line no-empty
	var SUPPORTS_Y = !!(function () { try { return new RegExp('x', 'y'); } catch (e) {} })();

	// @@split logic
	__webpack_require__(206)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
	  var internalSplit;
	  if (
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return $split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;
	      while (match = regexpExec.call(separatorCopy, string)) {
	        lastIndex = separatorCopy[LAST_INDEX];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
	    };
	  } else {
	    internalSplit = $split;
	  }

	  return [
	    // `String.prototype.split` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = defined(this);
	      var splitter = separator == undefined ? undefined : separator[SPLIT];
	      return splitter !== undefined
	        ? splitter.call(separator, O, limit)
	        : internalSplit.call(String(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (regexp, limit) {
	      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);
	      var C = speciesConstructor(rx, RegExp);

	      var unicodeMatching = rx.unicode;
	      var flags = (rx.ignoreCase ? 'i' : '') +
	                    (rx.multiline ? 'm' : '') +
	                    (rx.unicode ? 'u' : '') +
	                    (SUPPORTS_Y ? 'y' : 'g');

	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
	      var lim = limit === undefined ? 0xffffffff : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = SUPPORTS_Y ? q : 0;
	        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
	        var e;
	        if (
	          z === null ||
	          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
	        ) {
	          q = advanceStringIndex(S, q, unicodeMatching);
	        } else {
	          A.push(S.slice(p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            A.push(z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      A.push(S.slice(p));
	      return A;
	    }
	  ];
	});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(13);
	var aFunction = __webpack_require__(22);
	var SPECIES = __webpack_require__(27)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(25);
	var global = __webpack_require__(5);
	var ctx = __webpack_require__(21);
	var classof = __webpack_require__(75);
	var $export = __webpack_require__(9);
	var isObject = __webpack_require__(14);
	var aFunction = __webpack_require__(22);
	var anInstance = __webpack_require__(212);
	var forOf = __webpack_require__(213);
	var speciesConstructor = __webpack_require__(210);
	var task = __webpack_require__(214).set;
	var microtask = __webpack_require__(215)();
	var newPromiseCapabilityModule = __webpack_require__(216);
	var perform = __webpack_require__(217);
	var userAgent = __webpack_require__(218);
	var promiseResolve = __webpack_require__(219);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8 || '';
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(27)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function')
	      && promise.then(empty) instanceof FakePromise
	      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	      // we can't detect it synchronously, so just check versions
	      && v8.indexOf('6.6') !== 0
	      && userAgent.indexOf('Chrome/66') === -1;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // may throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        if (domain && !exited) domain.exit();
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(220)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(26)($Promise, PROMISE);
	__webpack_require__(194)(PROMISE);
	Wrapper = __webpack_require__(10)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(167)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});


/***/ }),
/* 212 */
/***/ (function(module, exports) {

	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(21);
	var call = __webpack_require__(163);
	var isArrayIter = __webpack_require__(164);
	var anObject = __webpack_require__(13);
	var toLength = __webpack_require__(38);
	var getIterFn = __webpack_require__(166);
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx = __webpack_require__(21);
	var invoke = __webpack_require__(78);
	var html = __webpack_require__(48);
	var cel = __webpack_require__(16);
	var global = __webpack_require__(5);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(35)(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function (id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function (id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5);
	var macrotask = __webpack_require__(214).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(35)(process) == 'process';

	module.exports = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    var promise = Promise.resolve(undefined);
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	var aFunction = __webpack_require__(22);

	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}

	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};


/***/ }),
/* 217 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5);
	var navigator = global.navigator;

	module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(13);
	var isObject = __webpack_require__(14);
	var newPromiseCapability = __webpack_require__(216);

	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(19);
	module.exports = function (target, src, safe) {
	  for (var key in src) redefine(target, key, src[key], safe);
	  return target;
	};


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(222);
	var validate = __webpack_require__(223);
	var MAP = 'Map';

	// 23.1 Map Objects
	module.exports = __webpack_require__(224)(MAP, function (get) {
	  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(validate(this, MAP), key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
	  }
	}, strong, true);


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var dP = __webpack_require__(12).f;
	var create = __webpack_require__(46);
	var redefineAll = __webpack_require__(220);
	var ctx = __webpack_require__(21);
	var anInstance = __webpack_require__(212);
	var forOf = __webpack_require__(213);
	var $iterDefine = __webpack_require__(129);
	var step = __webpack_require__(196);
	var setSpecies = __webpack_require__(194);
	var DESCRIPTORS = __webpack_require__(7);
	var fastKey = __webpack_require__(23).fastKey;
	var validate = __webpack_require__(223);
	var SIZE = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function (that, key) {
	  // fast case
	  var index = fastKey(key);
	  var entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};

	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;         // collection type
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = validate(this, NAME);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n;
	          var prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /* , that = undefined */) {
	        validate(this, NAME);
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(validate(this, NAME), key);
	      }
	    });
	    if (DESCRIPTORS) dP(C.prototype, 'size', {
	      get: function () {
	        return validate(this, NAME)[SIZE];
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var entry = getEntry(that, key);
	    var prev, index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function (C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = validate(iterated, NAME); // target
	      this._k = kind;                     // kind
	      this._l = undefined;                // previous
	    }, function () {
	      var that = this;
	      var kind = that._k;
	      var entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) entry = entry.p;
	      // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(14);
	module.exports = function (it, TYPE) {
	  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
	  return it;
	};


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(5);
	var $export = __webpack_require__(9);
	var redefine = __webpack_require__(19);
	var redefineAll = __webpack_require__(220);
	var meta = __webpack_require__(23);
	var forOf = __webpack_require__(213);
	var anInstance = __webpack_require__(212);
	var isObject = __webpack_require__(14);
	var fails = __webpack_require__(8);
	var $iterDetect = __webpack_require__(167);
	var setToStringTag = __webpack_require__(26);
	var inheritIfRequired = __webpack_require__(88);

	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME];
	  var C = Base;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var proto = C && C.prototype;
	  var O = {};
	  var fixMethod = function (KEY) {
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function (a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a) {
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a) {
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance = new C();
	    // early implementations not supports chaining
	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
	    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
	    // most early implementations doesn't supports iterables, most modern - not close it correctly
	    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
	    // for early implementations -0 and +0 not the same
	    var BUGGY_ZERO = !IS_WEAK && fails(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new C();
	      var index = 5;
	      while (index--) $instance[ADDER](index, index);
	      return !$instance.has(-0);
	    });
	    if (!ACCEPT_ITERABLES) {
	      C = wrapper(function (target, iterable) {
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base(), target, C);
	        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if (IS_WEAK && proto.clear) delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

	  return C;
	};


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(222);
	var validate = __webpack_require__(223);
	var SET = 'Set';

	// 23.2 Set Objects
	module.exports = __webpack_require__(224)(SET, function (get) {
	  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value) {
	    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
	  }
	}, strong);


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var each = __webpack_require__(174)(0);
	var redefine = __webpack_require__(19);
	var meta = __webpack_require__(23);
	var assign = __webpack_require__(69);
	var weak = __webpack_require__(227);
	var isObject = __webpack_require__(14);
	var fails = __webpack_require__(8);
	var validate = __webpack_require__(223);
	var WEAK_MAP = 'WeakMap';
	var getWeak = meta.getWeak;
	var isExtensible = Object.isExtensible;
	var uncaughtFrozenStore = weak.ufstore;
	var tmp = {};
	var InternalMap;

	var wrapper = function (get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      var data = getWeak(key);
	      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(validate(this, WEAK_MAP), key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(224)(WEAK_MAP, wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
	  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype;
	    var method = proto[key];
	    redefine(proto, key, function (a, b) {
	      // store frozen objects on internal weakmap shim
	      if (isObject(a) && !isExtensible(a)) {
	        if (!this._f) this._f = new InternalMap();
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll = __webpack_require__(220);
	var getWeak = __webpack_require__(23).getWeak;
	var anObject = __webpack_require__(13);
	var isObject = __webpack_require__(14);
	var anInstance = __webpack_require__(212);
	var forOf = __webpack_require__(213);
	var createArrayMethod = __webpack_require__(174);
	var $has = __webpack_require__(6);
	var validate = __webpack_require__(223);
	var arrayFind = createArrayMethod(5);
	var arrayFindIndex = createArrayMethod(6);
	var id = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function (that) {
	  return that._l || (that._l = new UncaughtFrozenStore());
	};
	var UncaughtFrozenStore = function () {
	  this.a = [];
	};
	var findUncaughtFrozen = function (store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, NAME, '_i');
	      that._t = NAME;      // collection type
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function (key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        var data = getWeak(key);
	        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function (that, key, value) {
	    var data = getWeak(anObject(key), true);
	    if (data === true) uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(227);
	var validate = __webpack_require__(223);
	var WEAK_SET = 'WeakSet';

	// 23.4 WeakSet Objects
	__webpack_require__(224)(WEAK_SET, function (get) {
	  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value) {
	    return weak.def(validate(this, WEAK_SET), value, true);
	  }
	}, weak, false, true);


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var $typed = __webpack_require__(230);
	var buffer = __webpack_require__(231);
	var anObject = __webpack_require__(13);
	var toAbsoluteIndex = __webpack_require__(40);
	var toLength = __webpack_require__(38);
	var isObject = __webpack_require__(14);
	var ArrayBuffer = __webpack_require__(5).ArrayBuffer;
	var speciesConstructor = __webpack_require__(210);
	var $ArrayBuffer = buffer.ArrayBuffer;
	var $DataView = buffer.DataView;
	var $isView = $typed.ABV && ArrayBuffer.isView;
	var $slice = $ArrayBuffer.prototype.slice;
	var VIEW = $typed.VIEW;
	var ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it) {
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(8)(function () {
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end) {
	    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
	    var len = anObject(this).byteLength;
	    var first = toAbsoluteIndex(start, len);
	    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
	    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
	    var viewS = new $DataView(this);
	    var viewT = new $DataView(result);
	    var index = 0;
	    while (first < fin) {
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(194)(ARRAY_BUFFER);


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5);
	var hide = __webpack_require__(11);
	var uid = __webpack_require__(20);
	var TYPED = uid('typed_array');
	var VIEW = uid('view');
	var ABV = !!(global.ArrayBuffer && global.DataView);
	var CONSTR = ABV;
	var i = 0;
	var l = 9;
	var Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while (i < l) {
	  if (Typed = global[TypedArrayConstructors[i++]]) {
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV: ABV,
	  CONSTR: CONSTR,
	  TYPED: TYPED,
	  VIEW: VIEW
	};


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global = __webpack_require__(5);
	var DESCRIPTORS = __webpack_require__(7);
	var LIBRARY = __webpack_require__(25);
	var $typed = __webpack_require__(230);
	var hide = __webpack_require__(11);
	var redefineAll = __webpack_require__(220);
	var fails = __webpack_require__(8);
	var anInstance = __webpack_require__(212);
	var toInteger = __webpack_require__(39);
	var toLength = __webpack_require__(38);
	var toIndex = __webpack_require__(232);
	var gOPN = __webpack_require__(50).f;
	var dP = __webpack_require__(12).f;
	var arrayFill = __webpack_require__(190);
	var setToStringTag = __webpack_require__(26);
	var ARRAY_BUFFER = 'ArrayBuffer';
	var DATA_VIEW = 'DataView';
	var PROTOTYPE = 'prototype';
	var WRONG_LENGTH = 'Wrong length!';
	var WRONG_INDEX = 'Wrong index!';
	var $ArrayBuffer = global[ARRAY_BUFFER];
	var $DataView = global[DATA_VIEW];
	var Math = global.Math;
	var RangeError = global.RangeError;
	// eslint-disable-next-line no-shadow-restricted-names
	var Infinity = global.Infinity;
	var BaseBuffer = $ArrayBuffer;
	var abs = Math.abs;
	var pow = Math.pow;
	var floor = Math.floor;
	var log = Math.log;
	var LN2 = Math.LN2;
	var BUFFER = 'buffer';
	var BYTE_LENGTH = 'byteLength';
	var BYTE_OFFSET = 'byteOffset';
	var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
	var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
	var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	function packIEEE754(value, mLen, nBytes) {
	  var buffer = new Array(nBytes);
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
	  var i = 0;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	  var e, m, c;
	  value = abs(value);
	  // eslint-disable-next-line no-self-compare
	  if (value != value || value === Infinity) {
	    // eslint-disable-next-line no-self-compare
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if (value * (c = pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }
	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	}
	function unpackIEEE754(buffer, mLen, nBytes) {
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = eLen - 7;
	  var i = nBytes - 1;
	  var s = buffer[i--];
	  var e = s & 127;
	  var m;
	  s >>= 7;
	  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	}

	function unpackI32(bytes) {
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	}
	function packI8(it) {
	  return [it & 0xff];
	}
	function packI16(it) {
	  return [it & 0xff, it >> 8 & 0xff];
	}
	function packI32(it) {
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	}
	function packF64(it) {
	  return packIEEE754(it, 52, 8);
	}
	function packF32(it) {
	  return packIEEE754(it, 23, 4);
	}

	function addGetter(C, key, internal) {
	  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
	}

	function get(view, bytes, index, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	}
	function set(view, bytes, index, conversion, value, isLittleEndian) {
	  var numIndex = +index;
	  var intIndex = toIndex(numIndex);
	  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b;
	  var start = intIndex + view[$OFFSET];
	  var pack = conversion(+value);
	  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	}

	if (!$typed.ABV) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
	    var byteLength = toIndex(length);
	    this._b = arrayFill.call(new Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH];
	    var offset = toInteger(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if (DESCRIPTORS) {
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /* , littleEndian */) {
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /* , littleEndian */) {
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if (!fails(function () {
	    $ArrayBuffer(1);
	  }) || !fails(function () {
	    new $ArrayBuffer(-1); // eslint-disable-line no-new
	  }) || fails(function () {
	    new $ArrayBuffer(); // eslint-disable-line no-new
	    new $ArrayBuffer(1.5); // eslint-disable-line no-new
	    new $ArrayBuffer(NaN); // eslint-disable-line no-new
	    return $ArrayBuffer.name != ARRAY_BUFFER;
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      anInstance(this, $ArrayBuffer);
	      return new BaseBuffer(toIndex(length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
	    }
	    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2));
	  var $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/ecma262/#sec-toindex
	var toInteger = __webpack_require__(39);
	var toLength = __webpack_require__(38);
	module.exports = function (it) {
	  if (it === undefined) return 0;
	  var number = toInteger(it);
	  var length = toLength(number);
	  if (number !== length) throw RangeError('Wrong length!');
	  return length;
	};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	$export($export.G + $export.W + $export.F * !__webpack_require__(230).ABV, {
	  DataView: __webpack_require__(231).DataView
	});


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Int8', 1, function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	if (__webpack_require__(7)) {
	  var LIBRARY = __webpack_require__(25);
	  var global = __webpack_require__(5);
	  var fails = __webpack_require__(8);
	  var $export = __webpack_require__(9);
	  var $typed = __webpack_require__(230);
	  var $buffer = __webpack_require__(231);
	  var ctx = __webpack_require__(21);
	  var anInstance = __webpack_require__(212);
	  var propertyDesc = __webpack_require__(18);
	  var hide = __webpack_require__(11);
	  var redefineAll = __webpack_require__(220);
	  var toInteger = __webpack_require__(39);
	  var toLength = __webpack_require__(38);
	  var toIndex = __webpack_require__(232);
	  var toAbsoluteIndex = __webpack_require__(40);
	  var toPrimitive = __webpack_require__(17);
	  var has = __webpack_require__(6);
	  var classof = __webpack_require__(75);
	  var isObject = __webpack_require__(14);
	  var toObject = __webpack_require__(58);
	  var isArrayIter = __webpack_require__(164);
	  var create = __webpack_require__(46);
	  var getPrototypeOf = __webpack_require__(59);
	  var gOPN = __webpack_require__(50).f;
	  var getIterFn = __webpack_require__(166);
	  var uid = __webpack_require__(20);
	  var wks = __webpack_require__(27);
	  var createArrayMethod = __webpack_require__(174);
	  var createArrayIncludes = __webpack_require__(37);
	  var speciesConstructor = __webpack_require__(210);
	  var ArrayIterators = __webpack_require__(195);
	  var Iterators = __webpack_require__(130);
	  var $iterDetect = __webpack_require__(167);
	  var setSpecies = __webpack_require__(194);
	  var arrayFill = __webpack_require__(190);
	  var arrayCopyWithin = __webpack_require__(187);
	  var $DP = __webpack_require__(12);
	  var $GOPD = __webpack_require__(51);
	  var dP = $DP.f;
	  var gOPD = $GOPD.f;
	  var RangeError = global.RangeError;
	  var TypeError = global.TypeError;
	  var Uint8Array = global.Uint8Array;
	  var ARRAY_BUFFER = 'ArrayBuffer';
	  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
	  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	  var PROTOTYPE = 'prototype';
	  var ArrayProto = Array[PROTOTYPE];
	  var $ArrayBuffer = $buffer.ArrayBuffer;
	  var $DataView = $buffer.DataView;
	  var arrayForEach = createArrayMethod(0);
	  var arrayFilter = createArrayMethod(2);
	  var arraySome = createArrayMethod(3);
	  var arrayEvery = createArrayMethod(4);
	  var arrayFind = createArrayMethod(5);
	  var arrayFindIndex = createArrayMethod(6);
	  var arrayIncludes = createArrayIncludes(true);
	  var arrayIndexOf = createArrayIncludes(false);
	  var arrayValues = ArrayIterators.values;
	  var arrayKeys = ArrayIterators.keys;
	  var arrayEntries = ArrayIterators.entries;
	  var arrayLastIndexOf = ArrayProto.lastIndexOf;
	  var arrayReduce = ArrayProto.reduce;
	  var arrayReduceRight = ArrayProto.reduceRight;
	  var arrayJoin = ArrayProto.join;
	  var arraySort = ArrayProto.sort;
	  var arraySlice = ArrayProto.slice;
	  var arrayToString = ArrayProto.toString;
	  var arrayToLocaleString = ArrayProto.toLocaleString;
	  var ITERATOR = wks('iterator');
	  var TAG = wks('toStringTag');
	  var TYPED_CONSTRUCTOR = uid('typed_constructor');
	  var DEF_CONSTRUCTOR = uid('def_constructor');
	  var ALL_CONSTRUCTORS = $typed.CONSTR;
	  var TYPED_ARRAY = $typed.TYPED;
	  var VIEW = $typed.VIEW;
	  var WRONG_LENGTH = 'Wrong length!';

	  var $map = createArrayMethod(1, function (O, length) {
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function () {
	    // eslint-disable-next-line no-undef
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
	    new Uint8Array(1).set({});
	  });

	  var toOffset = function (it, BYTES) {
	    var offset = toInteger(it);
	    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function (it) {
	    if (isObject(it) && TYPED_ARRAY in it) return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function (C, length) {
	    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function (O, list) {
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function (C, list) {
	    var index = 0;
	    var length = list.length;
	    var result = allocate(C, length);
	    while (length > index) result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function (it, key, internal) {
	    dP(it, key, { get: function () { return this._d[internal]; } });
	  };

	  var $from = function from(source /* , mapfn, thisArg */) {
	    var O = toObject(source);
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var iterFn = getIterFn(O);
	    var i, length, values, result, step, iterator;
	    if (iterFn != undefined && !isArrayIter(iterFn)) {
	      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
	        values.push(step.value);
	      } O = values;
	    }
	    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
	    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/* ...items */) {
	    var index = 0;
	    var length = arguments.length;
	    var result = allocate(this, length);
	    while (length > index) result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString() {
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /* , end */) {
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /* , thisArg */) {
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /* , thisArg */) {
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /* , thisArg */) {
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /* , thisArg */) {
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /* , thisArg */) {
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /* , fromIndex */) {
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /* , fromIndex */) {
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator) { // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /* , thisArg */) {
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse() {
	      var that = this;
	      var length = validate(that).length;
	      var middle = Math.floor(length / 2);
	      var index = 0;
	      var value;
	      while (index < middle) {
	        value = that[index];
	        that[index++] = that[--length];
	        that[length] = value;
	      } return that;
	    },
	    some: function some(callbackfn /* , thisArg */) {
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn) {
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end) {
	      var O = validate(this);
	      var length = O.length;
	      var $begin = toAbsoluteIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end) {
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /* , offset */) {
	    validate(this);
	    var offset = toOffset(arguments[1], 1);
	    var length = this.length;
	    var src = toObject(arrayLike);
	    var len = toLength(src.length);
	    var index = 0;
	    if (len + offset > length) throw RangeError(WRONG_LENGTH);
	    while (index < len) this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries() {
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys() {
	      return arrayKeys.call(validate(this));
	    },
	    values: function values() {
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function (target, key) {
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key) {
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc) {
	    if (isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ) {
	      target[key] = desc.value;
	      return target;
	    } return dP(target, key, desc);
	  };

	  if (!ALL_CONSTRUCTORS) {
	    $GOPD.f = $getDesc;
	    $DP.f = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty: $setDesc
	  });

	  if (fails(function () { arrayToString.call({}); })) {
	    arrayToString = arrayToLocaleString = function toString() {
	      return arrayJoin.call(this);
	    };
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice: $slice,
	    set: $set,
	    constructor: function () { /* noop */ },
	    toString: arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function () { return this[TYPED_ARRAY]; }
	  });

	  // eslint-disable-next-line max-statements
	  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
	    CLAMPED = !!CLAMPED;
	    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + KEY;
	    var SETTER = 'set' + KEY;
	    var TypedArray = global[NAME];
	    var Base = TypedArray || {};
	    var TAC = TypedArray && getPrototypeOf(TypedArray);
	    var FORCED = !TypedArray || !$typed.ABV;
	    var O = {};
	    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function (that, index) {
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function (that, index, value) {
	      var data = that._d;
	      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function (that, index) {
	      dP(that, index, {
	        get: function () {
	          return getter(this, index);
	        },
	        set: function (value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if (FORCED) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME, '_d');
	        var index = 0;
	        var offset = 0;
	        var buffer, byteLength, length, klass;
	        if (!isObject(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new $ArrayBuffer(byteLength);
	        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if (TYPED_ARRAY in data) {
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while (index < length) addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if (!fails(function () {
	      TypedArray(1);
	    }) || !fails(function () {
	      new TypedArray(-1); // eslint-disable-line no-new
	    }) || !$iterDetect(function (iter) {
	      new TypedArray(); // eslint-disable-line no-new
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(1.5); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)) {
	      TypedArray = wrapper(function (that, data, $offset, $length) {
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if (!isObject(data)) return new Base(toIndex(data));
	        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
	        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator = TypedArrayPrototype[ITERATOR];
	    var CORRECT_ITER_NAME = !!$nativeIterator
	      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
	    var $iterator = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
	      dP(TypedArrayPrototype, TAG, {
	        get: function () { return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES
	    });

	    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
	      from: $from,
	      of: $of
	    });

	    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

	    $export($export.P + $export.F * fails(function () {
	      new TypedArray(1).slice();
	    }), NAME, { slice: $slice });

	    $export($export.P + $export.F * (fails(function () {
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
	    }) || !fails(function () {
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, { toLocaleString: $toLocaleString });

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function () { /* empty */ };


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Uint8', 1, function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Uint8', 1, function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Int16', 2, function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Uint16', 2, function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Int32', 4, function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Uint32', 4, function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Float32', 4, function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(235)('Float64', 8, function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(9);
	var aFunction = __webpack_require__(22);
	var anObject = __webpack_require__(13);
	var rApply = (__webpack_require__(5).Reflect || {}).apply;
	var fApply = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(8)(function () {
	  rApply(function () { /* empty */ });
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList) {
	    var T = aFunction(target);
	    var L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export = __webpack_require__(9);
	var create = __webpack_require__(46);
	var aFunction = __webpack_require__(22);
	var anObject = __webpack_require__(13);
	var isObject = __webpack_require__(14);
	var fails = __webpack_require__(8);
	var bind = __webpack_require__(77);
	var rConstruct = (__webpack_require__(5).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function () {
	  function F() { /* empty */ }
	  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function () {
	  rConstruct(function () { /* empty */ });
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /* , newTarget */) {
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0: return new Target();
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args))();
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto = newTarget.prototype;
	    var instance = create(isObject(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP = __webpack_require__(12);
	var $export = __webpack_require__(9);
	var anObject = __webpack_require__(13);
	var toPrimitive = __webpack_require__(17);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(8)(function () {
	  // eslint-disable-next-line no-undef
	  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export = __webpack_require__(9);
	var gOPD = __webpack_require__(51).f;
	var anObject = __webpack_require__(13);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export = __webpack_require__(9);
	var anObject = __webpack_require__(13);
	var Enumerate = function (iterated) {
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = [];      // keys
	  var key;
	  for (key in iterated) keys.push(key);
	};
	__webpack_require__(131)(Enumerate, 'Object', function () {
	  var that = this;
	  var keys = that._k;
	  var key;
	  do {
	    if (that._i >= keys.length) return { value: undefined, done: true };
	  } while (!((key = keys[that._i++]) in that._t));
	  return { value: key, done: false };
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target) {
	    return new Enumerate(target);
	  }
	});


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD = __webpack_require__(51);
	var getPrototypeOf = __webpack_require__(59);
	var has = __webpack_require__(6);
	var $export = __webpack_require__(9);
	var isObject = __webpack_require__(14);
	var anObject = __webpack_require__(13);

	function get(target, propertyKey /* , receiver */) {
	  var receiver = arguments.length < 3 ? target : arguments[2];
	  var desc, proto;
	  if (anObject(target) === receiver) return target[propertyKey];
	  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD = __webpack_require__(51);
	var $export = __webpack_require__(9);
	var anObject = __webpack_require__(13);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export = __webpack_require__(9);
	var getProto = __webpack_require__(59);
	var anObject = __webpack_require__(13);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return getProto(anObject(target));
	  }
	});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(9);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export = __webpack_require__(9);
	var anObject = __webpack_require__(13);
	var $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target) {
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(9);

	$export($export.S, 'Reflect', { ownKeys: __webpack_require__(255) });


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN = __webpack_require__(50);
	var gOPS = __webpack_require__(43);
	var anObject = __webpack_require__(13);
	var Reflect = __webpack_require__(5).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
	  var keys = gOPN.f(anObject(it));
	  var getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export = __webpack_require__(9);
	var anObject = __webpack_require__(13);
	var $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target) {
	    anObject(target);
	    try {
	      if ($preventExtensions) $preventExtensions(target);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP = __webpack_require__(12);
	var gOPD = __webpack_require__(51);
	var getPrototypeOf = __webpack_require__(59);
	var has = __webpack_require__(6);
	var $export = __webpack_require__(9);
	var createDesc = __webpack_require__(18);
	var anObject = __webpack_require__(13);
	var isObject = __webpack_require__(14);

	function set(target, propertyKey, V /* , receiver */) {
	  var receiver = arguments.length < 4 ? target : arguments[3];
	  var ownDesc = gOPD.f(anObject(target), propertyKey);
	  var existingDescriptor, proto;
	  if (!ownDesc) {
	    if (isObject(proto = getPrototypeOf(target))) {
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if (has(ownDesc, 'value')) {
	    if (ownDesc.writable === false || !isObject(receiver)) return false;
	    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
	      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
	      existingDescriptor.value = V;
	      dP.f(receiver, propertyKey, existingDescriptor);
	    } else dP.f(receiver, propertyKey, createDesc(0, V));
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export = __webpack_require__(9);
	var setProto = __webpack_require__(73);

	if (setProto) $export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export = __webpack_require__(9);
	var $includes = __webpack_require__(37)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(188)('includes');


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
	var $export = __webpack_require__(9);
	var flattenIntoArray = __webpack_require__(261);
	var toObject = __webpack_require__(58);
	var toLength = __webpack_require__(38);
	var aFunction = __webpack_require__(22);
	var arraySpeciesCreate = __webpack_require__(175);

	$export($export.P, 'Array', {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    var O = toObject(this);
	    var sourceLen, A;
	    aFunction(callbackfn);
	    sourceLen = toLength(O.length);
	    A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
	    return A;
	  }
	});

	__webpack_require__(188)('flatMap');


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
	var isArray = __webpack_require__(45);
	var isObject = __webpack_require__(14);
	var toLength = __webpack_require__(38);
	var ctx = __webpack_require__(21);
	var IS_CONCAT_SPREADABLE = __webpack_require__(27)('isConcatSpreadable');

	function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
	  var element, spreadable;

	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

	      spreadable = false;
	      if (isObject(element)) {
	        spreadable = element[IS_CONCAT_SPREADABLE];
	        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
	      }

	      if (spreadable && depth > 0) {
	        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
	        target[targetIndex] = element;
	      }

	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
	}

	module.exports = flattenIntoArray;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
	var $export = __webpack_require__(9);
	var flattenIntoArray = __webpack_require__(261);
	var toObject = __webpack_require__(58);
	var toLength = __webpack_require__(38);
	var toInteger = __webpack_require__(39);
	var arraySpeciesCreate = __webpack_require__(175);

	$export($export.P, 'Array', {
	  flatten: function flatten(/* depthArg = 1 */) {
	    var depthArg = arguments[0];
	    var O = toObject(this);
	    var sourceLen = toLength(O.length);
	    var A = arraySpeciesCreate(O, 0);
	    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
	    return A;
	  }
	});

	__webpack_require__(188)('flatten');


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(9);
	var $at = __webpack_require__(128)(true);

	$export($export.P, 'String', {
	  at: function at(pos) {
	    return $at(this, pos);
	  }
	});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(9);
	var $pad = __webpack_require__(265);
	var userAgent = __webpack_require__(218);

	// https://github.com/zloirock/core-js/issues/280
	$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
	  padStart: function padStart(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(38);
	var repeat = __webpack_require__(91);
	var defined = __webpack_require__(36);

	module.exports = function (that, maxLength, fillString, left) {
	  var S = String(defined(that));
	  var stringLength = S.length;
	  var fillStr = fillString === undefined ? ' ' : String(fillString);
	  var intMaxLength = toLength(maxLength);
	  if (intMaxLength <= stringLength || fillStr == '') return S;
	  var fillLen = intMaxLength - stringLength;
	  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(9);
	var $pad = __webpack_require__(265);
	var userAgent = __webpack_require__(218);

	// https://github.com/zloirock/core-js/issues/280
	$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
	  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function ($trim) {
	  return function trimLeft() {
	    return $trim(this, 1);
	  };
	}, 'trimStart');


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function ($trim) {
	  return function trimRight() {
	    return $trim(this, 2);
	  };
	}, 'trimEnd');


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export = __webpack_require__(9);
	var defined = __webpack_require__(36);
	var toLength = __webpack_require__(38);
	var isRegExp = __webpack_require__(135);
	var getFlags = __webpack_require__(198);
	var RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function (regexp, string) {
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(131)($RegExpStringIterator, 'RegExp String', function next() {
	  var match = this._r.exec(this._s);
	  return { value: match, done: match === null };
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp) {
	    defined(this);
	    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
	    var S = String(this);
	    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
	    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(29)('asyncIterator');


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(29)('observable');


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export = __webpack_require__(9);
	var ownKeys = __webpack_require__(255);
	var toIObject = __webpack_require__(33);
	var gOPD = __webpack_require__(51);
	var createProperty = __webpack_require__(165);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIObject(object);
	    var getDesc = gOPD.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var i = 0;
	    var key, desc;
	    while (keys.length > i) {
	      desc = getDesc(O, key = keys[i++]);
	      if (desc !== undefined) createProperty(result, key, desc);
	    }
	    return result;
	  }
	});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(9);
	var $values = __webpack_require__(274)(false);

	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys = __webpack_require__(31);
	var toIObject = __webpack_require__(33);
	var isEnum = __webpack_require__(44).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it);
	    var keys = getKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) if (isEnum.call(O, key = keys[i++])) {
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(9);
	var $entries = __webpack_require__(274)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var toObject = __webpack_require__(58);
	var aFunction = __webpack_require__(22);
	var $defineProperty = __webpack_require__(12);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(7) && $export($export.P + __webpack_require__(277), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter) {
	    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
	  }
	});


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(25) || !__webpack_require__(8)(function () {
	  var K = Math.random();
	  // In FF throws only define methods
	  // eslint-disable-next-line no-undef, no-useless-call
	  __defineSetter__.call(null, K, function () { /* empty */ });
	  delete __webpack_require__(5)[K];
	});


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var toObject = __webpack_require__(58);
	var aFunction = __webpack_require__(22);
	var $defineProperty = __webpack_require__(12);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(7) && $export($export.P + __webpack_require__(277), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter) {
	    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
	  }
	});


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var toObject = __webpack_require__(58);
	var toPrimitive = __webpack_require__(17);
	var getPrototypeOf = __webpack_require__(59);
	var getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(7) && $export($export.P + __webpack_require__(277), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P) {
	    var O = toObject(this);
	    var K = toPrimitive(P, true);
	    var D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
	    } while (O = getPrototypeOf(O));
	  }
	});


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(9);
	var toObject = __webpack_require__(58);
	var toPrimitive = __webpack_require__(17);
	var getPrototypeOf = __webpack_require__(59);
	var getOwnPropertyDescriptor = __webpack_require__(51).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(7) && $export($export.P + __webpack_require__(277), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P) {
	    var O = toObject(this);
	    var K = toPrimitive(P, true);
	    var D;
	    do {
	      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
	    } while (O = getPrototypeOf(O));
	  }
	});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(9);

	$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(282)('Map') });


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75);
	var from = __webpack_require__(283);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(213);

	module.exports = function (iter, ITERATOR) {
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(9);

	$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(282)('Set') });


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
	__webpack_require__(286)('Map');


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(9);

	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { of: function of() {
	    var length = arguments.length;
	    var A = new Array(length);
	    while (length--) A[length] = arguments[length];
	    return new this(A);
	  } });
	};


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
	__webpack_require__(286)('Set');


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
	__webpack_require__(286)('WeakMap');


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
	__webpack_require__(286)('WeakSet');


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
	__webpack_require__(291)('Map');


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/proposal-setmap-offrom/
	var $export = __webpack_require__(9);
	var aFunction = __webpack_require__(22);
	var ctx = __webpack_require__(21);
	var forOf = __webpack_require__(213);

	module.exports = function (COLLECTION) {
	  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
	    var mapFn = arguments[1];
	    var mapping, A, n, cb;
	    aFunction(this);
	    mapping = mapFn !== undefined;
	    if (mapping) aFunction(mapFn);
	    if (source == undefined) return new this();
	    A = [];
	    if (mapping) {
	      n = 0;
	      cb = ctx(mapFn, arguments[2], 2);
	      forOf(source, false, function (nextItem) {
	        A.push(cb(nextItem, n++));
	      });
	    } else {
	      forOf(source, false, A.push, A);
	    }
	    return new this(A);
	  } });
	};


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
	__webpack_require__(291)('Set');


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
	__webpack_require__(291)('WeakMap');


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
	__webpack_require__(291)('WeakSet');


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-global
	var $export = __webpack_require__(9);

	$export($export.G, { global: __webpack_require__(5) });


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-global
	var $export = __webpack_require__(9);

	$export($export.S, 'System', { global: __webpack_require__(5) });


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(9);
	var cof = __webpack_require__(35);

	$export($export.S, 'Error', {
	  isError: function isError(it) {
	    return cof(it) === 'Error';
	  }
	});


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  clamp: function clamp(x, lower, upper) {
	    return Math.min(upper, Math.max(lower, x));
	  }
	});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(9);
	var RAD_PER_DEG = 180 / Math.PI;

	$export($export.S, 'Math', {
	  degrees: function degrees(radians) {
	    return radians * RAD_PER_DEG;
	  }
	});


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(9);
	var scale = __webpack_require__(302);
	var fround = __webpack_require__(114);

	$export($export.S, 'Math', {
	  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
	    return fround(scale(x, inLow, inHigh, outLow, outHigh));
	  }
	});


/***/ }),
/* 302 */
/***/ (function(module, exports) {

	// https://rwaldron.github.io/proposal-math-extensions/
	module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
	  if (
	    arguments.length === 0
	      // eslint-disable-next-line no-self-compare
	      || x != x
	      // eslint-disable-next-line no-self-compare
	      || inLow != inLow
	      // eslint-disable-next-line no-self-compare
	      || inHigh != inHigh
	      // eslint-disable-next-line no-self-compare
	      || outLow != outLow
	      // eslint-disable-next-line no-self-compare
	      || outHigh != outHigh
	  ) return NaN;
	  if (x === Infinity || x === -Infinity) return x;
	  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
	};


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1) {
	    var $x0 = x0 >>> 0;
	    var $x1 = x1 >>> 0;
	    var $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v) {
	    var UINT16 = 0xffff;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >> 16;
	    var v1 = $v >> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(9);
	var DEG_PER_RAD = Math.PI / 180;

	$export($export.S, 'Math', {
	  radians: function radians(degrees) {
	    return degrees * DEG_PER_RAD;
	  }
	});


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	// https://rwaldron.github.io/proposal-math-extensions/
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', { scale: __webpack_require__(302) });


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v) {
	    var UINT16 = 0xffff;
	    var $u = +u;
	    var $v = +v;
	    var u0 = $u & UINT16;
	    var v0 = $v & UINT16;
	    var u1 = $u >>> 16;
	    var v1 = $v >>> 16;
	    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

	// http://jfbastien.github.io/papers/Math.signbit.html
	var $export = __webpack_require__(9);

	$export($export.S, 'Math', { signbit: function signbit(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
	} });


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-promise-finally
	'use strict';
	var $export = __webpack_require__(9);
	var core = __webpack_require__(10);
	var global = __webpack_require__(5);
	var speciesConstructor = __webpack_require__(210);
	var promiseResolve = __webpack_require__(219);

	$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-promise-try
	var $export = __webpack_require__(9);
	var newPromiseCapability = __webpack_require__(216);
	var perform = __webpack_require__(217);

	$export($export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(13);
	var toMetaKey = metadata.key;
	var ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	} });


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(221);
	var $export = __webpack_require__(9);
	var shared = __webpack_require__(24)('metadata');
	var store = shared.store || (shared.store = new (__webpack_require__(226))());

	var getOrCreateMetadataMap = function (target, targetKey, create) {
	  var targetMetadata = store.get(target);
	  if (!targetMetadata) {
	    if (!create) return undefined;
	    store.set(target, targetMetadata = new Map());
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if (!keyMetadata) {
	    if (!create) return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map());
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function (target, targetKey) {
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
	  var keys = [];
	  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
	  return keys;
	};
	var toMetaKey = function (it) {
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function (O) {
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(13);
	var toMetaKey = metadata.key;
	var getOrCreateMetadataMap = metadata.map;
	var store = metadata.store;

	metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
	  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
	  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
	  if (metadataMap.size) return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	} });


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(13);
	var getPrototypeOf = __webpack_require__(59);
	var ordinaryHasOwnMetadata = metadata.has;
	var ordinaryGetOwnMetadata = metadata.get;
	var toMetaKey = metadata.key;

	var ordinaryGetMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(225);
	var from = __webpack_require__(283);
	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(13);
	var getPrototypeOf = __webpack_require__(59);
	var ordinaryOwnMetadataKeys = metadata.keys;
	var toMetaKey = metadata.key;

	var ordinaryMetadataKeys = function (O, P) {
	  var oKeys = ordinaryOwnMetadataKeys(O, P);
	  var parent = getPrototypeOf(O);
	  if (parent === null) return oKeys;
	  var pKeys = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	} });


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(13);
	var ordinaryGetOwnMetadata = metadata.get;
	var toMetaKey = metadata.key;

	metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(13);
	var ordinaryOwnMetadataKeys = metadata.keys;
	var toMetaKey = metadata.key;

	metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	} });


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(13);
	var getPrototypeOf = __webpack_require__(59);
	var ordinaryHasOwnMetadata = metadata.has;
	var toMetaKey = metadata.key;

	var ordinaryHasMetadata = function (MetadataKey, O, P) {
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if (hasOwn) return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata = __webpack_require__(314);
	var anObject = __webpack_require__(13);
	var ordinaryHasOwnMetadata = metadata.has;
	var toMetaKey = metadata.key;

	metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	} });


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

	var $metadata = __webpack_require__(314);
	var anObject = __webpack_require__(13);
	var aFunction = __webpack_require__(22);
	var toMetaKey = $metadata.key;
	var ordinaryDefineOwnMetadata = $metadata.set;

	$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
	  return function decorator(target, targetKey) {
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	} });


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export = __webpack_require__(9);
	var microtask = __webpack_require__(215)();
	var process = __webpack_require__(5).process;
	var isNode = __webpack_require__(35)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn) {
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export = __webpack_require__(9);
	var global = __webpack_require__(5);
	var core = __webpack_require__(10);
	var microtask = __webpack_require__(215)();
	var OBSERVABLE = __webpack_require__(27)('observable');
	var aFunction = __webpack_require__(22);
	var anObject = __webpack_require__(13);
	var anInstance = __webpack_require__(212);
	var redefineAll = __webpack_require__(220);
	var hide = __webpack_require__(11);
	var forOf = __webpack_require__(213);
	var RETURN = forOf.RETURN;

	var getMethod = function (fn) {
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function (subscription) {
	  var cleanup = subscription._c;
	  if (cleanup) {
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function (subscription) {
	  return subscription._o === undefined;
	};

	var closeSubscription = function (subscription) {
	  if (!subscriptionClosed(subscription)) {
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function (observer, subscriber) {
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup = subscriber(observer);
	    var subscription = cleanup;
	    if (cleanup != null) {
	      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch (e) {
	    observer.error(e);
	    return;
	  } if (subscriptionClosed(this)) cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe() { closeSubscription(this); }
	});

	var SubscriptionObserver = function (subscription) {
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if (m) return m.call(observer, value);
	      } catch (e) {
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value) {
	    var subscription = this._s;
	    if (subscriptionClosed(subscription)) throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if (!m) throw value;
	      value = m.call(observer, value);
	    } catch (e) {
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value) {
	    var subscription = this._s;
	    if (!subscriptionClosed(subscription)) {
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch (e) {
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber) {
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer) {
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn) {
	    var that = this;
	    return new (core.Promise || global.Promise)(function (resolve, reject) {
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next: function (value) {
	          try {
	            return fn(value);
	          } catch (e) {
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x) {
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if (method) {
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function (observer) {
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          try {
	            if (forOf(x, false, function (it) {
	              observer.next(it);
	              if (done) return RETURN;
	            }) === RETURN) return;
	          } catch (e) {
	            if (done) throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  },
	  of: function of() {
	    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
	      var done = false;
	      microtask(function () {
	        if (!done) {
	          for (var j = 0; j < items.length; ++j) {
	            observer.next(items[j]);
	            if (done) return;
	          } observer.complete();
	        }
	      });
	      return function () { done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function () { return this; });

	$export($export.G, { Observable: $Observable });

	__webpack_require__(194)('Observable');


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global = __webpack_require__(5);
	var $export = __webpack_require__(9);
	var userAgent = __webpack_require__(218);
	var slice = [].slice;
	var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
	var wrap = function (set) {
	  return function (fn, time /* , ...args */) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? slice.call(arguments, 2) : false;
	    return set(boundArgs ? function () {
	      // eslint-disable-next-line no-new-func
	      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
	    } : fn, time);
	  };
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout: wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(9);
	var $task = __webpack_require__(214);
	$export($export.G + $export.B, {
	  setImmediate: $task.set,
	  clearImmediate: $task.clear
	});


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

	var $iterators = __webpack_require__(195);
	var getKeys = __webpack_require__(31);
	var redefine = __webpack_require__(19);
	var global = __webpack_require__(5);
	var hide = __webpack_require__(11);
	var Iterators = __webpack_require__(130);
	var wks = __webpack_require__(27);
	var ITERATOR = wks('iterator');
	var TO_STRING_TAG = wks('toStringTag');
	var ArrayValues = Iterators.Array;

	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};

	for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME = collections[i];
	  var explicit = DOMIterables[NAME];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
	  }
	}


/***/ }),
/* 328 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
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

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
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
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
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

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

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
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
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

	    if (typeof global.process === "object" && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
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
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

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

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

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

	      this.method = "next";
	      this.arg = undefined;

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

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
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
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
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

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

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

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(330);
	module.exports = __webpack_require__(10).RegExp.escape;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(9);
	var $re = __webpack_require__(331)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),
/* 331 */
/***/ (function(module, exports) {

	module.exports = function (regExp, replace) {
	  var replacer = replace === Object(replace) ? function (part) {
	    return replace[part];
	  } : replace;
	  return function (it) {
	    return String(it).replace(regExp, replacer);
	  };
	};


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Main file:
	 * In this we are going to initialize all modules
	 * @param  {window} root
	 */

	var _header = __webpack_require__(334);

	var _header2 = _interopRequireDefault(_header);

	var _footer = __webpack_require__(347);

	var _footer2 = _interopRequireDefault(_footer);

	var _contact = __webpack_require__(351);

	var _contact2 = _interopRequireDefault(_contact);

	__webpack_require__(355);

	__webpack_require__(358);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(361);

	// Add styles


	var init = function init() {
	  // Adding header
	  new _header2.default();

	  // Adding footer
	  new _footer2.default();

	  // Adding contact
	  new _contact2.default();
	};

	if (!!document.readyState && (document.readyState === 'complete' || document.readyState === 'interactive')) {
	  init();
	} else {
	  document.addEventListener('DOMContentLoaded', init);
	}

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _facade = __webpack_require__(335);

	var _facade2 = _interopRequireDefault(_facade);

	var _utils = __webpack_require__(338);

	var _utils2 = _interopRequireDefault(_utils);

	var _header = __webpack_require__(339);

	var _header2 = _interopRequireDefault(_header);

	var _menuOptions = __webpack_require__(340);

	var _menuOptions2 = _interopRequireDefault(_menuOptions);

	var _headerIcons = __webpack_require__(341);

	var _headerIcons2 = _interopRequireDefault(_headerIcons);

	var _loginButton = __webpack_require__(342);

	var _loginButton2 = _interopRequireDefault(_loginButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Header
	 * @param  {window} root
	 * @return {Class}
	 */

	var Header = function () {
	  function Header() {
	    _classCallCheck(this, Header);

	    this.el = document.getElementById('headerGfw');
	    if (!this.el) {
	      throw new Error('element #headerGfw doesn\'t exist');
	    }
	    this.render();
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      this.el.innerHTML = (0, _header2.default)() + (0, _headerIcons2.default)();
	      this.cache();
	      this.setLogosOptions();
	      this.setMenuOptions();
	      this.setParams();
	      this.initHighlightCurrent();
	      this.initListeners();
	      this.resizeMenu();
	      this.resizeMenuLinks();
	      this.initTranslate();
	      this.closeMenuOptionsMenu();
	      this.initMyGFW();
	      if (window.liveSettings.page === 'map') {
	        this.initMapFunctions();
	      }
	      this.setStoriesLinkVisibility();
	      return this;
	    }

	    /**
	     * Cache all the elements that we will use after
	     */

	  }, {
	    key: 'cache',
	    value: function cache() {
	      this.keyboardPulse = false;
	      this.mobileMenu = false;
	      this.smallMenu = 0;
	      this.mobileMenuWidth = 0;
	      this.loadFirstResize = false;
	      this.doLinkResize = false;
	      this.goToResize = false;
	      this.deleteLinks = 1;
	      this.linksHiddenMenu = [];
	      this.$document = (0, _facade2.default)(document);
	      this.site = window.liveSettings.site;

	      // Script
	      this.$script = (0, _facade2.default)('#loader-gfw');

	      // Html-body
	      this.$htmlbody = (0, _facade2.default)('html,body');
	      this.$body = (0, _facade2.default)('body');

	      // Header
	      this.$header = (0, _facade2.default)('#headerGfw');
	      this.$headerBar = this.$header.find('.m-header');
	      this.navOptions = this.$header.find('.nav-options');
	      this.logoMenu = this.$header.find('.logo-menu');
	      this.initLanguageText = this.$header.find('.init-language-tex');
	      this.useGoogleTranslate = this.$header.attr('data-google') || false;

	      this.navSections = this.$header.find('.nav-sections');
	      this.navSectionLogo = this.$header.find('.logo-sections-container');
	      this.navOptions = this.$header.find('.options-container');

	      this.navMobileSections = this.$header.find('.mobile-nav-sections');
	      this.subMenu = this.$header.find('.m-header-sub-menu-dashboard');
	      this.navContainer = this.$header.find('.m-header-nav-container');

	      // Dashboard Menu
	      this.searchContainer = document.getElementById('search-container');
	      this.searchInput = document.getElementById('search-input');
	      this.openMenuDashboard = this.$header.find('.open-menu-button-dashboard');
	      this.menuDashboard = this.$header.find('#dashboard-sub-menu');
	      this.boxesContainer = this.$header.find('.boxes-container');
	      this.currentBox = this.boxesContainer.find('.box.' + this.site);
	      this.storiesLink = (0, _facade2.default)('#stories-link');

	      this.$links = this.$header.find('a');
	      this.$linksSubmenu = this.$header.find('a');

	      // Login Menu
	      this.menuLogin = this.$header.find('.m-header-sub-menu-login');

	      // Language Menu
	      this.triangleLanguage = this.$header.find('.lang-triangle');

	      // Black list menu Options
	      this.blacklistOptions = ['globalforestwatch.org/small-grants-fund', 'staging.globalforestwatch.org/small-grants-fund', 'developers.globalforestwatch.org/', 'globalforestwatch.org/howto', 'staging.globalforestwatch.org/howto', 'blog.globalforestwatch.org/', 'staging.globalforestwatch.org/contribute-data', 'globalforestwatch.org/contribute-data', 'data.globalforestwatch.org/'];
	    }

	    /**
	     * Set logos on header and options gallery
	     */

	  }, {
	    key: 'setLogosOptions',
	    value: function setLogosOptions() {
	      var path = location.hostname;
	      if (location.pathname !== '/') {
	        path += location.pathname;
	      }
	      this.logoMenu.addClass(this.site);
	      var ribbon = window.liveSettings && window.liveSettings.ribbon;
	      if (ribbon) {
	        this.logoMenu.append('<span class="ribbon"><span>' + ribbon + '</span></span>');
	      }
	      if (this.blacklistOptions.indexOf(path) !== -1) {
	        this.navSections.css('display', 'none');
	      }
	      this.currentBox.remove();
	    }

	    /**
	     * Functions for close dashboard when click menu options
	     */

	  }, {
	    key: 'closeMenuOptionsMenu',
	    value: function closeMenuOptionsMenu() {
	      (0, _facade2.default)('.option-menu').on('click', this.hideMenus.bind(this));
	      (0, _facade2.default)('.option-menu').on('click', this.hideLanguageMenu.bind(this));
	    }

	    /**
	     * Set menu's options
	     */

	  }, {
	    key: 'setMenuOptions',
	    value: function setMenuOptions() {
	      (0, _facade2.default)('.more-options-secondary-container').html(_menuOptions2.default.getOptions(this.site));
	      this.navSections.html(_menuOptions2.default.getOptions(this.site));
	      this.navMobileSections.html(_menuOptions2.default.getOptions(this.site));
	    }

	    /**
	     * Set Params
	     */

	  }, {
	    key: 'setParams',
	    value: function setParams() {
	      var $parent = document.querySelector('#loader-gfw');
	      this.params = {
	        current: $parent.getAttribute('data-current')
	      };
	    }

	    /**
	     * Set current depending on the script data current
	     */

	  }, {
	    key: 'initHighlightCurrent',
	    value: function initHighlightCurrent() {
	      if (this.params && this.params.current) {
	        this.$header.find(this.params.current).addClass('-current');
	      }
	    }

	    /**
	     * Main functions for menu
	     */

	  }, {
	    key: 'utilsMenus',
	    value: function utilsMenus() {
	      var _this = this;

	      // Key bindings
	      this.$document.on('keyup.apps', function (e) {
	        if (e.keyCode === 27) {
	          _this.hideMenus();
	          _this.hideLanguageMenu();
	        }
	      });

	      // Prevent mobile scroll
	      if (_utils2.default.getWindowWidth() < 850) {
	        this.resizeMenu();
	        this.$htmlbody.toggleClass('-no-scroll');
	      }
	    }
	  }, {
	    key: 'utilsMenusMobile',
	    value: function utilsMenusMobile() {
	      this.$header.on('click', '#transifexTranslateMobileElement > .tx-live-lang-picker > li', this.hideMenusMobile.bind(this));
	    }
	  }, {
	    key: 'initListeners',
	    value: function initListeners() {
	      // Menus
	      (0, _facade2.default)(window).on('resize.assets', this.resizeMenuLinks.bind(this));
	      // $gfwdom(window).on('load', this.resizeMenuLinks.bind(this));

	      (0, _facade2.default)(window).on('resize.assets', this.resizeMenu.bind(this));

	      this.$header.on('click', '.-js-open-menu, .-js-open-menu > .mobile-title, .-js-open-menu > .desktop-title', this.showMenu.bind(this));
	      this.$body.on('click', '.-js-open-menu-mobile', this.showMenuMobile.bind(this));
	      this.$header.on('click', '.open-menu-button-language', this.showLanguageMenu.bind(this));
	      this.$header.on('click', '.txlive-langselector-current', this.showLanguageMenu.bind(this));
	      this.$backMenu = (0, _facade2.default)('.back-close-menu');
	      this.$body.on('click', '.back-close-menu', this.hideMenus.bind(this));
	      this.$body.on('click', '.back-close-menu', this.hideLanguageMenu.bind(this));
	    }
	  }, {
	    key: 'changeTriangleLanguage',
	    value: function changeTriangleLanguage(value) {
	      if (value === '#language-sub-menu') {
	        if (this.triangleLanguage.hasClass('-open')) {
	          this.triangleLanguage.removeClass('-open');
	        } else {
	          this.triangleLanguage.addClass('-open');
	        }
	      } else if (this.triangleLanguage.hasClass('-open')) {
	        this.triangleLanguage.removeClass('-open');
	      }
	    }
	  }, {
	    key: 'showMenuKeyBoard',
	    value: function showMenuKeyBoard() {
	      if (!this.keyboardPulse) {
	        var $languageMenu = this.$header.find('.txlive-langselector-list');
	        if ($languageMenu.hasClass('txlive-langselector-list-opened')) {
	          $languageMenu.removeClass('txlive-langselector-list-opened');
	        }
	        this.hideMenus();
	        if (_utils2.default.getWindowWidth() < 850) {
	          this.resizeMenu();
	          this.$htmlbody.toggleClass('-no-scroll');
	        }
	        this.openMenuDashboard.addClass('-active');
	        this.menuDashboard.addClass('-active');
	        if (_utils2.default.getWindowWidth() > 850) {
	          this.searchInput.focus();
	        }
	        this.utilsMenus();
	        this.keyboardPulse = true;
	      }
	    }
	  }, {
	    key: 'showMenu',
	    value: function showMenu(e) {
	      var currentTarget = e.currentTarget;
	      var dataSubMenu = currentTarget.getAttribute('data-submenu');
	      var $current = void 0;

	      if (dataSubMenu === '#login-sub-menu') {
	        if ((0, _facade2.default)('.open-menu-button-login').find('.logged-button').length !== 0) {
	          dataSubMenu = '#submenulogged';
	        }
	      }

	      if (!(0, _facade2.default)(currentTarget).hasClass('-active')) {
	        // Hide all the opened menus
	        this.hideMenus();
	        this.$backMenu.addClass('-show');
	        // Active menu
	        (0, _facade2.default)(currentTarget).toggleClass('-active');
	        this.changeTriangleLanguage(dataSubMenu);
	        // Hidden language Menu
	        if (dataSubMenu !== '#language-sub-menu') {
	          var $languageMenu = this.$header.find('.txlive-langselector-list');
	          if ($languageMenu.hasClass('txlive-langselector-list-opened')) {
	            $languageMenu.removeClass('txlive-langselector-list-opened');
	          }
	        }
	        if (dataSubMenu === '#submenulogged') {
	          $current = (0, _facade2.default)('#submenulogged');
	        } else {
	          $current = (0, _facade2.default)(currentTarget.getAttribute('data-submenu'));
	        }

	        $current.toggleClass('-active');
	        this.navOptions.toggleClass('-show-triangle');

	        if (this.menuDashboard.hasClass('-active')) {
	          if (_utils2.default.getWindowWidth() > 850) {
	            this.searchInput.focus();
	          }
	        }

	        this.utilsMenus();
	        this.resizeMenu('boxes');
	      } else {
	        this.navOptions.toggleClass('-show-triangle');
	        this.changeTriangleLanguage(dataSubMenu);
	        this.hideMenus();
	      }

	      if (_utils2.default.getWindowWidth() < 850) {
	        (0, _facade2.default)('.sticky-nav-options').toggleClass('-show');
	      }
	    }
	  }, {
	    key: 'showMenuMobile',
	    value: function showMenuMobile(e) {
	      var currentTarget = e.currentTarget;
	      var dataSubMenu = currentTarget.getAttribute('data-submenu');
	      var $current = void 0;

	      if (dataSubMenu === '#login-sub-menu-mobile') {
	        if ((0, _facade2.default)('.open-menu-button-login').find('.logged-button').length !== 0) {
	          $current = (0, _facade2.default)('#logged-sub-menu-mobile');
	        } else {
	          $current = (0, _facade2.default)('#login-sub-menu-mobile');
	        }
	      } else {
	        $current = (0, _facade2.default)(currentTarget.getAttribute('data-submenu'));
	      }

	      // const
	      if (!(0, _facade2.default)(currentTarget).hasClass('-active')) {
	        this.hideMenusMobile();
	        // Active menu
	        (0, _facade2.default)(currentTarget).toggleClass('-active');
	        // Hidden language Menu
	        $current.toggleClass('-active');
	        this.utilsMenusMobile();
	      } else {
	        this.hideMenusMobile();
	      }
	    }
	  }, {
	    key: 'hideMenus',
	    value: function hideMenus() {
	      // // Allow mobile scroll
	      if (this.menuDashboard.hasClass('-active')) {
	        this.searchContainer.reset();
	      }

	      this.$htmlbody.removeClass('-no-scroll');

	      this.$header.find('.sub-menu').forEach(function findSubMenu(v) {
	        if ((0, _facade2.default)(v).hasClass('-active')) {
	          (0, _facade2.default)(v).removeClass('-active');
	          this.$backMenu.removeClass('-show');
	        }
	      }.bind(this));

	      this.$header.find('.txlive-langselector-list').removeClass('-active');

	      this.$header.find('.sub-menu-mobile').forEach(function findSubMenu(v) {
	        if ((0, _facade2.default)(v).hasClass('-active')) {
	          (0, _facade2.default)(v).removeClass('-active');
	        }
	      }.bind(this));

	      this.$header.find('.open-menu-button').forEach(function (v) {
	        if ((0, _facade2.default)(v).hasClass('-active')) {
	          (0, _facade2.default)(v).removeClass('-active');
	          this.$backMenu.removeClass('-show');
	        }
	      }.bind(this));

	      // Key bindings
	      this.$document.off('keyup.apps');
	      // Click bindings
	      this.$document.off('click.apps');

	      this.keyboardPulse = false;
	      this.navOptions.toggleClass('-show-triangle');
	    }
	  }, {
	    key: 'hideMenusMobile',
	    value: function hideMenusMobile() {
	      this.$body.find('.m-header > .sub-menu-mobile').forEach(function (v) {
	        if ((0, _facade2.default)(v).hasClass('-active')) {
	          (0, _facade2.default)(v).toggleClass('-active');
	        }
	      });

	      this.$body.find('#tx-live-lang-picker').forEach(function (v) {
	        if ((0, _facade2.default)(v).hasClass('-active')) {
	          (0, _facade2.default)(v).toggleClass('-active');
	        }
	      });

	      this.$body.find('.m-header > .sticky-nav-options > .open-menu-button').forEach(function (v) {
	        if ((0, _facade2.default)(v).hasClass('-active')) {
	          (0, _facade2.default)(v).removeClass('-active');
	        }
	      });
	    }
	  }, {
	    key: 'showLanguageMenu',
	    value: function showLanguageMenu() {
	      var $languageMenu = this.$header.find('.txlive-langselector-list');
	      if ($languageMenu.hasClass('txlive-langselector-list-opened')) {
	        $languageMenu.removeClass('txlive-langselector-list-opened');
	      } else {
	        $languageMenu.addClass('txlive-langselector-list-opened');
	      }
	      this.$header.on('click', '.txlive-langselector-list > li', this.hideLanguageMenu.bind(this));
	    }
	  }, {
	    key: 'hideLanguageMenu',
	    value: function hideLanguageMenu() {
	      var $languageMenu = this.$header.find('.txlive-langselector-list');
	      if ($languageMenu.hasClass('txlive-langselector-list-opened')) {
	        $languageMenu.removeClass('txlive-langselector-list-opened');
	      }
	      if (this.triangleLanguage.hasClass('-open')) {
	        this.changeTriangleLanguage('#language-sub-menu');
	      }
	    }
	  }, {
	    key: 'toggleTransifex',
	    value: function toggleTransifex() {
	      var $btnTransifex = this.$header.find('#btnTransifexTranslateMobileElement');
	      var $transifexList = this.$header.find('#transifexTranslateMobileElement');

	      if ($btnTransifex.hasClass('-active')) {
	        $btnTransifex.removeClass('-active');
	        $transifexList.removeClass('-active');
	      } else {
	        $btnTransifex.addClass('-active');
	        $transifexList.addClass('-active');
	      }
	    }
	  }, {
	    key: 'sendAnalyticsEvent',
	    value: function sendAnalyticsEvent(e) {
	      // TO-DO: Be careful with the links that are links on desktop
	      // but buttons on mobile devices
	      // What can we do?
	      // ANSWER: I've set a class 'link-analytics' to differenciate them
	      var $el = (0, _facade2.default)(e.currentTarget);
	      var url = $el.attr('href');
	      var target = $el.attr('target');
	      var regex = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

	      if (!target) {
	        if (window.ga !== undefined) {
	          window.ga('send', 'event', 'Menu', 'Click', url);
	        }
	      } else if (window.ga !== undefined && regex.test(url)) {
	        e && e.preventDefault();

	        // https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits?hl=es#handling_timeouts
	        var callbackTriggered = false;
	        setTimeout(function () {
	          if (!callbackTriggered) {
	            document.location = url;
	          }
	        }, 1000);

	        window.ga('send', 'event', 'Menu', 'Click', url, {
	          'hitCallback': function hitCallback() {
	            callbackTriggered = true;
	            document.location = url;
	          }
	        });
	      } else {
	        document.location = url;
	      }
	    }

	    /**
	     * Google translate
	     */

	  }, {
	    key: 'initTranslate',
	    value: function initTranslate() {
	      if (!!window.liveSettings && !this.useGoogleTranslate) {
	        this.initTransifex();
	      } else {
	        this.initGoogleTranslate();
	      }
	    }
	  }, {
	    key: 'initGoogleTranslate',
	    value: function initGoogleTranslate() {
	      (0, _facade2.default)('#transifexTranslateElement').css('display', 'none');
	      (0, _facade2.default)('#googleTranslate').css('display', 'block');
	      (0, _facade2.default)('.googleTranslateMobile').css('display', 'block');
	      (0, _facade2.default)('.lang-triangle').css('display', 'none');
	      setTimeout(function () {
	        if (_utils2.default.getWindowWidth() > 850) {
	          window['googleTranslateElementInitGFW'] = function () {
	            new google.translate.TranslateElement({
	              pageLanguage: '',
	              includedLanguages: 'ar,es,en,fr,id,pt,ru,zh-CN,de,uk,ro,tr,it,hi,km',
	              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
	              autoDisplay: false
	            }, 'googleTranslate');
	          };
	        } else {
	          window['googleTranslateElementInitGFW'] = function () {
	            new google.translate.TranslateElement({
	              pageLanguage: '',
	              includedLanguages: 'ar,es,en,fr,id,pt,ru,zh-CN,de,uk,ro,tr,it,hi,km',
	              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
	              autoDisplay: false
	            }, 'googleTranslateMobile');
	          };
	        }
	        var translateScript = document.createElement('script');
	        translateScript.type = 'text/javascript';
	        translateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInitGFW';
	        document.head.appendChild(translateScript);
	      }, 0);
	    }

	    /**
	     * Transifex
	     */

	  }, {
	    key: 'initTransifex',
	    value: function initTransifex() {
	      (0, _facade2.default)('.open-menu-button-language').addClass('-min-width-transifex');

	      window.liveSettings.picker = _utils2.default.isSmallScreen() ? '#transifexTranslateMobileElement' : '#transifexTranslateElement';

	      var blacklist = ['climate.globalforestwatch.org', 'water.globalforestwatch.org', 'gfwc-staging.herokuapp.com', 'forestwatcher.globalforestwatch.org'];

	      // Check if the location.hostname is in the blacklist
	      // If true hide transifex element, but keep it working to store the string of the page
	      // Then init Google translate plugin
	      if (blacklist.indexOf(location.hostname) !== -1) {
	        var $transifexEl = (0, _facade2.default)(window.liveSettings.picker);
	        $transifexEl.css({
	          display: 'none'
	        });
	        this.initGoogleTranslate();
	      }

	      if (!window.liveSettings.localScript) {
	        var translateScript = document.createElement('script');
	        translateScript.type = 'text/javascript';
	        translateScript.src = '//cdn.transifex.com/live.js';
	        document.head.appendChild(translateScript);
	      }
	    }

	    /**
	     * Init My GFW
	     */

	  }, {
	    key: 'initMyGFW',
	    value: function initMyGFW() {
	      var blacklist = ['fires-staging.globalforestwatch.org', 'fires.globalforestwatch.org/'];
	      if (blacklist.indexOf(location.hostname) !== -1) {
	        (0, _facade2.default)('#my-gfw-container').css({ display: 'none' });
	      } else {
	        if (_utils2.default.isDefaultHost()) {
	          var loginButton = new _loginButton2.default();
	          loginButton.init();
	        } else {
	          (0, _facade2.default)('#my-gfw-container').css({ display: 'none' });
	        }
	      }
	    }
	  }, {
	    key: 'resizeMenu',
	    value: function resizeMenu(value) {
	      if (value !== 'boxes') {
	        if (_utils2.default.getWindowWidth() < 700) {
	          this.$header.find('.m-header-submenu').forEach(function (v) {
	            (0, _facade2.default)(v).css({
	              height: _utils2.default.getWindowHeigth() - 50 + 'px'
	            });
	          });
	        } else {
	          this.$header.find('.m-header-submenu').forEach(function (v) {
	            (0, _facade2.default)(v).css({ height: 'auto' });
	          });
	        }

	        if (_utils2.default.getWindowWidth() < 850) {
	          if (!this.mobileMenu) {
	            this.$headerBar.append('\n            <div id="login-sub-menu-mobile" class="m-header-sub-menu-login sub-menu sub-menu-mobile">\n              <div class="container">\n                <p>Log in is required so you can view, manage, and delete your subscriptions. Questions? <a href="mailto:gfw@wri.org">Contact us</a>.</p>\n                <ul>\n                  <li class="my-gfw-sign-in-twitter login-item -twitter ">\n                    <a href="auth/twitter?applications=gfw" class="my-gfw-sign-in">Log in with Twitter</a>\n                  </li>\n                  <li class="my-gfw-sign-in-facebook login-item -facebook">\n                    <a href="auth/facebook?applications=gfw" class="my-gfw-sign-in">Log in with Facebook</a>\n                  </li>\n                  <li class="my-gfw-sign-in-google login-item -google">\n                    <a href="auth/google?applications=gfw" class="my-gfw-sign-in">Log in with Google</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div id="logged-sub-menu-mobile" class="sub-menu-mobile m-header-submenu m-header-submenu-logged m-header-submenu-logged-mobile">\n              <ul class="more-list">\n                <a target="_blank" href="/my_gfw/subscriptions"><li><span>My Subscriptions</span></li></a>\n                <a target="_blank" href="/my_gfw/stories"><li><span>My Stories</span></li></a>\n                <a target="_blank" href="/my_gfw"><li><span>My Profile</span></li></a>\n                <a href="/auth/logout" id="my-gfw-sign-out"><li><span>Log Out</span></li></a>\n              </ul>\n            </div>\n            <div class="sticky-nav-options">\n              <div class="sticky-item -language -border -js-open-menu-mobile open-menu-button" data-submenu="#tx-live-lang-picker">\n                <div id="transifexTranslateMobileElement" class="m-transifex"></div>\n                <div id="googleTranslateMobile" class="googleTranslateMobile"></div>\n              </div>\n              <div class="sticky-item -js-open-menu-mobile open-menu-button open-menu-button-login" data-submenu="#login-sub-menu-mobile">\n                My GFW\n                <svg class="profile-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-mygfw"></use></svg>\n                <svg class="close-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-close"></use></svg>\n              </div>\n            </div>\n          ');
	            this.mobileMenu = true;
	          }
	        } else {
	          (0, _facade2.default)('.m-header-sub-menu-login.sub-menu-mobile').remove();
	          (0, _facade2.default)('.sticky-nav-options').remove();
	          this.mobileMenu = false;
	        }
	      } else {
	        var n = (0, _facade2.default)('.box').length;
	        var boxContainerWidth = 0;
	        var longitude = 0;
	        var firstOut = false;
	        var boxContainerLeft = 0;
	        var boxLeft = 0;
	        var notAppear = false;
	        var i = 0;

	        this.$boxContainer = this.$header.find('.applications-container');

	        this.$header.find('.boxes-container').forEach(function (v) {
	          boxContainerWidth = v.offsetWidth;
	          boxContainerLeft = v.getBoundingClientRect().left;
	        });

	        this.$header.find('.box').forEach(function (v) {
	          boxLeft = v.getBoundingClientRect().left - boxContainerLeft;
	          if (boxLeft + 88 >= boxContainerWidth) {
	            if (!firstOut) {
	              longitude = boxLeft - boxContainerWidth;
	              notAppear = true;
	              firstOut = true;
	            }
	          }
	        });

	        if (notAppear) {
	          this.$header.find('.box').forEach(function (v) {
	            if (i < n) {
	              var distance = longitude * 3;
	              if (distance > 0) {
	                (0, _facade2.default)(v).css('margin-right', distance + 'px');
	              }
	            }
	          });
	        }
	      }
	    }
	  }, {
	    key: 'resizeMenuLinks',
	    value: function resizeMenuLinks() {
	      var _this2 = this;

	      if (this.smallMenu !== 0 && _utils2.default.getWindowWidth() > this.smallMenu) {
	        if (this.navContainer.hasClass('-small-menu')) {
	          this.navContainer.removeClass('-small-menu');
	        }
	      }

	      if (this.mobileMenuWidth !== 0 && _utils2.default.getWindowWidth() > this.mobileMenu) {
	        if (this.navContainer.hasClass('-mobile-menu')) {
	          this.navContainer.removeClass('-mobile-menu');
	          this.subMenu.removeClass('-mobile');
	          this.navContainer.addClass('-small-menu');
	        }
	      }

	      if ((0, _facade2.default)(this.navSectionLogo).get(0).clientWidth + (0, _facade2.default)(this.navOptions).get(0).clientWidth > this.navContainer.get(0).clientWidth + 100) {
	        if (!this.navContainer.hasClass('-small-menu')) {
	          this.smallMenu = _utils2.default.getWindowWidth();
	          this.navContainer.addClass('-small-menu');
	        }
	      }

	      this.linksHiddenMenu.forEach(function (v, i) {
	        if (v.position < (0, _facade2.default)('.options-container').get(0).offsetLeft) {
	          _this2.$header.find('.nav-sections > li').forEach(function (vD, iD) {
	            if (v.name === (0, _facade2.default)(vD).data('menu')) {
	              // $gfwdom(vD).css('display', 'block');
	            }
	          });
	        }
	      });

	      if ((0, _facade2.default)('.options-container').get(0).offsetLeft - ((0, _facade2.default)('.nav-sections').get(0).offsetLeft + (0, _facade2.default)('.nav-sections').get(0).clientWidth) < 0) {
	        var size = this.$header.find('.nav-sections > li').length - this.deleteLinks;
	        this.$header.find('.nav-sections > li').forEach(function (v, i) {
	          if (i === size) {
	            (0, _facade2.default)(v).css('display', 'none');
	            _this2.deleteLinks += 1;
	            // console.log($gfwdom(this.navSectionLogo).get(0).clientWidth);
	            _this2.$header.find('.more-options-secondary-container > li').forEach(function (vD, iD) {
	              if ((0, _facade2.default)(v).data('menu') === (0, _facade2.default)(vD).data('menu')) {
	                _this2.linksHiddenMenu.push({
	                  name: (0, _facade2.default)(v).data('menu'),
	                  position: (0, _facade2.default)('.options-container').get(0).offsetLeft - _this2.navSectionLogo.get(0).clientWidth + (0, _facade2.default)('.nav-sections').get(0).clientWidth
	                });
	                (0, _facade2.default)(vD).addClass('-show');
	              }
	            });

	            if ((0, _facade2.default)('.options-container').get(0).offsetLeft - ((0, _facade2.default)('.nav-sections').get(0).offsetLeft + (0, _facade2.default)('.nav-sections').get(0).clientWidth) < 0) {
	              _this2.resizeMenuLinks();
	            }
	          }
	        });
	      }
	    }
	  }, {
	    key: 'initMapFunctions',
	    value: function initMapFunctions() {
	      var mapStyles = '#headerGfw,#headerGfw .m-header-nav-container{height:45px!important}@media (min-width:1000px){#headerGfw .m-header{position:absolute;top:-45px!important;transition:top .2s linear;left:0;right:0}#headerGfw.-show .m-header{position:absolute;top:0!important}#headerGfw .logo-menu{top:45px!important;position:relative!important;transition:.2s linear}#headerGfw .logo-menu.-show{top:0!important;position:relative!important}}#headerGfw .m-header-sub-menu-dashboard{position:relative!important;overflow-y:scroll;padding-left:0!important;padding-right:0!important}#headerGfw .txlive-langselector-list{top:39px!important}#headerGfw #transifexTranslateMobileElement .txlive-langselector-list{top:calc(-100vh + 58px + 45px)!important;height:calc(100vh - 58px - 45px)!important}#headerGfw .m-header-sub-menu-login,#headerGfw .m-header-submenu-logged{top:44px!important}#headerGfw .nav-sections{max-height:44px!important;margin-left:40px!important}#headerGfw .nav-sections li.-selected::after{bottom:-10px!important}#headerGfw .logo-sections-container{height:45px}#headerGfw .logo-sections-container .nav-sections li:after{top:26px}';
	      (0, _facade2.default)('<style type="text/css">' + mapStyles + '</style>').appendTo('head');
	      (0, _facade2.default)('body').on('mousemove', function (event) {
	        if (event.pageY < 100) {
	          (0, _facade2.default)('#headerGfw').addClass('-show');
	          (0, _facade2.default)('.logo-menu').addClass('-show');
	          (0, _facade2.default)('.nav-sections').addClass('-show');
	          (0, _facade2.default)('.layout-header-bottom').addClass('-show');
	        }

	        if (event.pageY > 120) {
	          var allMenuOptionsHover = event.target.closest('header') ? true : false;
	          if (!allMenuOptionsHover) {
	            (0, _facade2.default)('#headerGfw').removeClass('-show');
	            (0, _facade2.default)('.logo-menu').removeClass('-show');
	            (0, _facade2.default)('.nav-sections').removeClass('-show');
	            (0, _facade2.default)('.layout-header-bottom').removeClass('-show');
	          }
	        }
	      });
	    }
	  }, {
	    key: 'setStoriesLinkVisibility',
	    value: function setStoriesLinkVisibility() {
	      if (!_utils2.default.isFlagship()) {
	        this.storiesLink.addClass('-hidden');
	      }
	    }
	  }]);

	  return Header;
	}();

	exports.default = Header;

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * jBone
	 * How to extend: https://github.com/kupriyanenko/jbone#extend-it
	 */

	var _arguments = arguments;

	var _jbone = __webpack_require__(336);

	var _jbone2 = _interopRequireDefault(_jbone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $gfwDom = _jbone2.default.noConflict();

	$gfwDom.fn.scrollTop = function () {
	  // We do not want this script to be applied in browsers that do not support those
	  // That means no smoothscroll on IE9 and below.
	  if (document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) {
	    return;
	  }

	  // Get the top position of an element in the document
	  var getTop = function getTop(element) {
	    // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
	    if (element.nodeName === 'HTML') {
	      return -window.pageYOffset;
	    }
	    return element.getBoundingClientRect().top + window.pageYOffset;
	  };

	  // ease functions thanks to:
	  // http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
	  var easings = {
	    linear: function linear(t) {
	      return t;
	    },
	    easeInQuad: function easeInQuad(t) {
	      return t * t;
	    },
	    easeOutQuad: function easeOutQuad(t) {
	      return t * (2 - t);
	    },
	    easeInOutQuad: function easeInOutQuad(t) {
	      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
	    },
	    easeInCubic: function easeInCubic(t) {
	      return t * t * t;
	    },
	    easeOutCubic: function easeOutCubic(t) {
	      return --t * t * t + 1;
	    },
	    easeInOutCubic: function easeInOutCubic(t) {
	      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
	    },
	    easeInQuart: function easeInQuart(t) {
	      return t * t * t * t;
	    },
	    easeOutQuart: function easeOutQuart(t) {
	      return 1 - --t * t * t * t;
	    },
	    easeInOutQuart: function easeInOutQuart(t) {
	      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
	    },
	    easeInQuint: function easeInQuint(t) {
	      return t * t * t * t * t;
	    },
	    easeOutQuint: function easeOutQuint(t) {
	      return 1 + --t * t * t * t * t;
	    },
	    easeInOutQuint: function easeInOutQuint(t) {
	      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
	    }
	  };

	  // calculate the scroll position we should be in
	  // given the start and end point of the scroll
	  // the time elapsed from the beginning of the scroll
	  // and the total duration of the scroll (default 500ms)
	  var position = function position(start, end, elapsed, duration) {
	    if (elapsed > duration) {
	      return end;
	    }
	    return start + (end - start) * easings.easeInOutQuint(elapsed / duration);
	  };

	  // we use requestAnimationFrame to be called by the browser before every repaint
	  // if the first argument is an element then scroll to the top of this element
	  // if the first argument is numeric then scroll to this location
	  // if the callback exist, it is called when the scrolling is finished
	  var smoothScroll = function smoothScroll(el, duration, callback) {
	    duration = duration || 500;
	    var start = window.pageYOffset;
	    end = typeof el === 'number' ? parseInt(el) : getTop(el);

	    var clock = Date.now();
	    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
	      return window.setTimeout(fn, 15);
	    };

	    var step = function step() {
	      var elapsed = Date.now() - clock;
	      window.scroll(0, position(start, end, elapsed, duration));
	      if (elapsed > duration) {
	        if (typeof callback === 'function') {
	          callback(el);
	        }
	      } else {
	        requestAnimationFrame(step);
	      }
	    };

	    step();
	  };

	  smoothScroll.apply(undefined, _arguments);

	  // return smoothscroll API
	  return undefined;
	};

	$gfwDom.json = function (url, options) {
	  options.success({});
	};

	$gfwDom.jsonp = function (url, options) {
	  options = options;
	  var script = document.createElement('script');
	  script.src = url + '?callback=_jsonpGFWCallback&' + options.data;
	  document.head.appendChild(script);

	  window['_jsonpGFWCallback'] = function (data) {
	    if (!!data) {
	      options.success(data);
	    } else {
	      options.error(data);
	    }
	  };
	};

	// GIST: https://gist.github.com/bullgare/5336154
	// Function for get all the params of a form
	$gfwDom.serialize = function (form) {
	  if (!form || form.nodeName !== "FORM") {
	    return;
	  }
	  var obj = {};
	  for (var i = form.elements.length - 1; i >= 0; i = i - 1) {
	    if (form.elements[i].name === "") {
	      continue;
	    }
	    switch (form.elements[i].nodeName) {
	      case 'INPUT':
	        switch (form.elements[i].type) {
	          case 'text':
	          case 'email':
	          case 'hidden':
	          case 'password':
	          case 'button':
	          case 'reset':
	          case 'submit':
	            obj[form.elements[i].name] = form.elements[i].value;
	            break;
	          case 'checkbox':
	          case 'radio':
	            if (form.elements[i].checked) {
	              obj[form.elements[i].name] = form.elements[i].value;
	            } else if (!obj[form.elements[i].name]) {
	              obj[form.elements[i].name] = false;
	            }
	            break;
	          case 'file':
	            break;
	        }
	        break;
	      case 'TEXTAREA':
	        obj[form.elements[i].name] = form.elements[i].value;
	        break;
	      case 'SELECT':
	        switch (form.elements[i].type) {
	          case 'select-one':
	            obj[form.elements[i].name] = form.elements[i].value;
	            break;
	          case 'select-multiple':
	            for (var j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
	              if (form.elements[i].options[j].selected) {
	                obj[form.elements[i].name] = form.elements[i].options[j].value;
	              }
	            }
	            break;
	        }
	        break;
	      case 'BUTTON':
	        switch (form.elements[i].type) {
	          case 'reset':
	          case 'submit':
	          case 'button':
	            obj[form.elements[i].name] = form.elements[i].value;
	            break;
	        }
	        break;
	    }
	  }
	  return obj;
	};

	module.exports = $gfwDom;

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * jBone v1.2.1 - 2017-09-19 - Library for DOM manipulation
	 *
	 * http://jbone.js.org
	 *
	 * Copyright 2017 Alexey Kupriyanenko
	 * Released under the MIT license.
	 */

	(function (win) {

	var
	// cache previous versions
	_$ = win.$,
	_jBone = win.jBone,

	// Quick match a standalone tag
	rquickSingleTag = /^<(\w+)\s*\/?>$/,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash
	rquickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

	// Alias for function
	slice = [].slice,
	splice = [].splice,
	keys = Object.keys,

	// Alias for global variables
	doc = win.document,

	isString = function(el) {
	    return typeof el === "string";
	},
	isObject = function(el) {
	    return el instanceof Object;
	},
	isFunction = function(el) {
	    return ({}).toString.call(el) === "[object Function]";
	},
	isArray = function(el) {
	    return Array.isArray(el);
	},
	jBone = function(element, data) {
	    return new fn.init(element, data);
	},
	fn;

	// set previous values and return the instance upon calling the no-conflict mode
	jBone.noConflict = function() {
	    win.$ = _$;
	    win.jBone = _jBone;

	    return jBone;
	};

	fn = jBone.fn = jBone.prototype = {
	    init: function(element, data) {
	        var elements, tag, wraper, fragment;

	        if (!element) {
	            return this;
	        }
	        if (isString(element)) {
	            // Create single DOM element
	            if (tag = rquickSingleTag.exec(element)) {
	                this[0] = doc.createElement(tag[1]);
	                this.length = 1;

	                if (isObject(data)) {
	                    this.attr(data);
	                }

	                return this;
	            }
	            // Create DOM collection
	            if ((tag = rquickExpr.exec(element)) && tag[1]) {
	                fragment = doc.createDocumentFragment();
	                wraper = doc.createElement("div");
	                wraper.innerHTML = element;
	                while (wraper.lastChild) {
	                    fragment.appendChild(wraper.firstChild);
	                }
	                elements = slice.call(fragment.childNodes);

	                return jBone.merge(this, elements);
	            }
	            // Find DOM elements with querySelectorAll
	            if (jBone.isElement(data)) {
	                return jBone(data).find(element);
	            }

	            try {
	                elements = doc.querySelectorAll(element);

	                return jBone.merge(this, elements);
	            } catch (e) {
	                return this;
	            }
	        }
	        // Wrap DOMElement
	        if (element.nodeType) {
	            this[0] = element;
	            this.length = 1;

	            return this;
	        }
	        // Run function
	        if (isFunction(element)) {
	            return element();
	        }
	        // Return jBone element as is
	        if (element instanceof jBone) {
	            return element;
	        }

	        // Return element wrapped by jBone
	        return jBone.makeArray(element, this);
	    },

	    pop: [].pop,
	    push: [].push,
	    reverse: [].reverse,
	    shift: [].shift,
	    sort: [].sort,
	    splice: [].splice,
	    slice: [].slice,
	    indexOf: [].indexOf,
	    forEach: [].forEach,
	    unshift: [].unshift,
	    concat: [].concat,
	    join: [].join,
	    every: [].every,
	    some: [].some,
	    filter: [].filter,
	    map: [].map,
	    reduce: [].reduce,
	    reduceRight: [].reduceRight,
	    length: 0
	};

	fn.constructor = jBone;

	fn.init.prototype = fn;

	jBone.setId = function(el) {
	    var jid = el.jid;

	    if (el === win) {
	        jid = "window";
	    } else if (el.jid === undefined) {
	        el.jid = jid = ++jBone._cache.jid;
	    }

	    if (!jBone._cache.events[jid]) {
	        jBone._cache.events[jid] = {};
	    }
	};

	jBone.getData = function(el) {
	    el = el instanceof jBone ? el[0] : el;

	    var jid = el === win ? "window" : el.jid;

	    return {
	        jid: jid,
	        events: jBone._cache.events[jid]
	    };
	};

	jBone.isElement = function(el) {
	    return el && el instanceof jBone || el instanceof HTMLElement || isString(el);
	};

	jBone._cache = {
	    events: {},
	    jid: 0
	};

	function isArraylike(obj) {
	    var length = obj.length,
	        type = typeof obj;

	    if (isFunction(type) || obj === win) {
	        return false;
	    }

	    if (obj.nodeType === 1 && length) {
	        return true;
	    }

	    return isArray(type) || length === 0 ||
	        typeof length === "number" && length > 0 && (length - 1) in obj;
	}

	fn.pushStack = function(elems) {
	    var ret = jBone.merge(this.constructor(), elems);

	    return ret;
	};

	jBone.merge = function(first, second) {
	    var l = second.length,
	        i = first.length,
	        j = 0;

	    while (j < l) {
	        first[i++] = second[j++];
	    }

	    first.length = i;

	    return first;
	};

	jBone.contains = function(container, contained) {
	    return container.contains(contained);
	};

	jBone.extend = function(target) {
	    var tg;

	    splice.call(arguments, 1).forEach(function(source) {
	        tg = target; //caching target for perf improvement

	        if (source) {
	            for (var prop in source) {
	                tg[prop] = source[prop];
	            }
	        }
	    });

	    return target;
	};

	jBone.makeArray = function(arr, results) {
	    var ret = results || [];

	    if (arr !== null) {
	        if (isArraylike(arr)) {
	            jBone.merge(ret, isString(arr) ? [arr] : arr);
	        } else {
	            ret.push(arr);
	        }
	    }

	    return ret;
	};

	jBone.unique = function(array) {
	    if (array == null) {
	        return [];
	    }

	    var result = [];

	    for (var i = 0, length = array.length; i < length; i++) {
	        var value = array[i];
	        if (result.indexOf(value) < 0) {
	            result.push(value);
	        }
	    }
	    return result;
	};

	function BoneEvent(e, data) {
	    var key, setter;

	    this.originalEvent = e;

	    setter = function(key, e) {
	        if (key === "preventDefault") {
	            this[key] = function() {
	                this.defaultPrevented = true;
	                return e[key]();
	            };
	        } else if (key === "stopImmediatePropagation") {
	            this[key] = function() {
	                this.immediatePropagationStopped = true;
	                return e[key]();
	            };
	        } else if (isFunction(e[key])) {
	            this[key] = function() {
	                return e[key]();
	            };
	        } else {
	            this[key] = e[key];
	        }
	    };

	    for (key in e) {
	        if (e[key] || typeof e[key] === "function") {
	            setter.call(this, key, e);
	        }
	    }

	    jBone.extend(this, data, {
	        isImmediatePropagationStopped: function() {
	            return !!this.immediatePropagationStopped;
	        }
	    });
	}

	jBone.Event = function(event, data) {
	    var namespace, eventType;

	    if (event.type && !data) {
	        data = event;
	        event = event.type;
	    }

	    namespace = event.split(".").splice(1).join(".");
	    eventType = event.split(".")[0];

	    event = doc.createEvent("Event");
	    event.initEvent(eventType, true, true);

	    return jBone.extend(event, {
	        namespace: namespace,
	        isDefaultPrevented: function() {
	            return event.defaultPrevented;
	        }
	    }, data);
	};

	jBone.event = {

	    /**
	     * Attach a handler to an event for the elements
	     * @param {Node}        el         - Events will be attached to this DOM Node
	     * @param {String}      types      - One or more space-separated event types and optional namespaces
	     * @param {Function}    handler    - A function to execute when the event is triggered
	     * @param {Object}      [data]     - Data to be passed to the handler in event.data
	     * @param {String}      [selector] - A selector string to filter the descendants of the selected elements
	     */
	    add: function(el, types, handler, data, selector) {
	        jBone.setId(el);

	        var eventHandler = function(e) {
	                jBone.event.dispatch.call(el, e);
	            },
	            events = jBone.getData(el).events,
	            eventType, t, event;

	        types = types.split(" ");
	        t = types.length;
	        while (t--) {
	            event = types[t];

	            eventType = event.split(".")[0];
	            events[eventType] = events[eventType] || [];

	            if (events[eventType].length) {
	                // override with previous event handler
	                eventHandler = events[eventType][0].fn;
	            } else {
	                el.addEventListener && el.addEventListener(eventType, eventHandler, false);
	            }

	            events[eventType].push({
	                namespace: event.split(".").splice(1).join("."),
	                fn: eventHandler,
	                selector: selector,
	                data: data,
	                originfn: handler
	            });
	        }
	    },

	    /**
	     * Remove an event handler
	     * @param  {Node}       el        - Events will be deattached from this DOM Node
	     * @param  {String}     types     - One or more space-separated event types and optional namespaces
	     * @param  {Function}   handler   - A handler function previously attached for the event(s)
	     * @param  {String}     [selector] - A selector string to filter the descendants of the selected elements
	     */
	    remove: function(el, types, handler, selector) {
	        var removeListener = function(events, eventType, index, el, e) {
	                var callback;

	                // get callback
	                if ((handler && e.originfn === handler) || !handler) {
	                    callback = e.fn;
	                }

	                if (events[eventType][index].fn === callback) {
	                    // remove handler from cache
	                    events[eventType].splice(index, 1);

	                    if (!events[eventType].length) {
	                        el.removeEventListener(eventType, callback);
	                    }
	                }
	            },
	            events = jBone.getData(el).events,
	            l,
	            eventsByType;

	        if (!events) {
	            return;
	        }

	        // remove all events
	        if (!types && events) {
	            return keys(events).forEach(function(eventType) {
	                eventsByType = events[eventType];
	                l = eventsByType.length;

	                while(l--) {
	                    removeListener(events, eventType, l, el, eventsByType[l]);
	                }
	            });
	        }

	        types.split(" ").forEach(function(eventName) {
	            var eventType = eventName.split(".")[0],
	                namespace = eventName.split(".").splice(1).join("."),
	                e;

	            // remove named events
	            if (events[eventType]) {
	                eventsByType = events[eventType];
	                l = eventsByType.length;

	                while(l--) {
	                    e = eventsByType[l];
	                    if ((!namespace || (namespace && e.namespace === namespace)) &&
	                        (!selector  || (selector  && e.selector === selector))) {
	                        removeListener(events, eventType, l, el, e);
	                    }
	                }
	            }
	            // remove all namespaced events
	            else if (namespace) {
	                keys(events).forEach(function(eventType) {
	                    eventsByType = events[eventType];
	                    l = eventsByType.length;

	                    while(l--) {
	                        e = eventsByType[l];
	                        if (e.namespace.split(".")[0] === namespace.split(".")[0]) {
	                            removeListener(events, eventType, l, el, e);
	                        }
	                    }
	                });
	            }
	        });
	    },

	    /**
	     * Execute all handlers and behaviors attached to the matched elements for the given event type.
	     * @param  {Node}       el       - Events will be triggered for thie DOM Node
	     * @param  {String}     event    - One or more space-separated event types and optional namespaces
	     */
	    trigger: function(el, event) {
	        var events = [];

	        if (isString(event)) {
	            events = event.split(" ").map(function(event) {
	                return jBone.Event(event);
	            });
	        } else {
	            event = event instanceof Event ? event : jBone.Event(event);
	            events = [event];
	        }

	        events.forEach(function(event) {
	            if (!event.type) {
	                return;
	            }

	            el.dispatchEvent && el.dispatchEvent(event);
	        });
	    },

	    dispatch: function(e) {
	        var i = 0,
	            j = 0,
	            el = this,
	            handlers = jBone.getData(el).events[e.type],
	            length = handlers.length,
	            handlerQueue = [],
	            targets = [],
	            l,
	            expectedTarget,
	            handler,
	            event,
	            eventOptions;

	        // cache all events handlers, fix issue with multiple handlers (issue #45)
	        for (; i < length; i++) {
	            handlerQueue.push(handlers[i]);
	        }

	        i = 0;
	        length = handlerQueue.length;

	        for (;
	            // if event exists
	            i < length &&
	            // if handler is not removed from stack
	            ~handlers.indexOf(handlerQueue[i]) &&
	            // if propagation is not stopped
	            !(event && event.isImmediatePropagationStopped());
	        i++) {
	            expectedTarget = null;
	            eventOptions = {};
	            handler = handlerQueue[i];
	            handler.data && (eventOptions.data = handler.data);

	            // event handler without selector
	            if (!handler.selector) {
	                event = new BoneEvent(e, eventOptions);

	                if (!(e.namespace && e.namespace !== handler.namespace)) {
	                    handler.originfn.call(el, event);
	                }
	            }
	            // event handler with selector
	            else if (
	                // if target and selected element the same
	                ~(targets = jBone(el).find(handler.selector)).indexOf(e.target) && (expectedTarget = e.target) ||
	                // if one of element matched with selector contains target
	                (el !== e.target && el.contains(e.target))
	            ) {
	                // get element matched with selector
	                if (!expectedTarget) {
	                    l = targets.length;
	                    j = 0;

	                    for (; j < l; j++) {
	                        if (targets[j] && targets[j].contains(e.target)) {
	                            expectedTarget = targets[j];
	                        }
	                    }
	                }

	                if (!expectedTarget) {
	                    continue;
	                }

	                eventOptions.currentTarget = expectedTarget;
	                event = new BoneEvent(e, eventOptions);

	                if (!(e.namespace && e.namespace !== handler.namespace)) {
	                    handler.originfn.call(expectedTarget, event);
	                }
	            }
	        }
	    }
	};

	fn.on = function(types, selector, data, fn) {
	    var length = this.length,
	        i = 0;

	    if (data == null && fn == null) {
	        // (types, fn)
	        fn = selector;
	        data = selector = undefined;
	    } else if (fn == null) {
	        if (typeof selector === "string") {
	            // (types, selector, fn)
	            fn = data;
	            data = undefined;
	        } else {
	            // (types, data, fn)
	            fn = data;
	            data = selector;
	            selector = undefined;
	        }
	    }

	    if (!fn) {
	        return this;
	    }

	    for (; i < length; i++) {
	        jBone.event.add(this[i], types, fn, data, selector);
	    }

	    return this;
	};

	fn.one = function(event) {
	    var args = arguments,
	        i = 0,
	        length = this.length,
	        oneArgs = slice.call(args, 1, args.length - 1),
	        callback = slice.call(args, -1)[0],
	        addListener;

	    addListener = function(el) {
	        var $el = jBone(el);

	        event.split(" ").forEach(function(event) {
	            var fn = function(e) {
	                $el.off(event, fn);
	                callback.call(el, e);
	            };

	            $el.on.apply($el, [event].concat(oneArgs, fn));
	        });
	    };

	    for (; i < length; i++) {
	        addListener(this[i]);
	    }

	    return this;
	};

	fn.trigger = function(event) {
	    var i = 0,
	        length = this.length;

	    if (!event) {
	        return this;
	    }

	    for (; i < length; i++) {
	        jBone.event.trigger(this[i], event);
	    }

	    return this;
	};

	fn.off = function(types, selector, handler) {
	    var i = 0,
	        length = this.length;

	    if (isFunction(selector)) {
	        handler = selector;
	        selector = undefined;
	    }

	    for (; i < length; i++) {
	        jBone.event.remove(this[i], types, handler, selector);
	    }

	    return this;
	};

	fn.find = function(selector) {
	    var results = [],
	        i = 0,
	        length = this.length,
	        finder = function(el) {
	            if (isFunction(el.querySelectorAll)) {
	                [].forEach.call(el.querySelectorAll(selector), function(found) {
	                    results.push(found);
	                });
	            }
	        };

	    for (; i < length; i++) {
	        finder(this[i]);
	    }

	    return jBone(results);
	};

	fn.get = function(index) {
	    return index != null ?

	        // Return just one element from the set
	        (index < 0 ? this[index + this.length] : this[index]) :

	        // Return all the elements in a clean array
	        slice.call(this);
	};

	fn.eq = function(index) {
	    return jBone(this[index]);
	};

	fn.parent = function() {
	    var results = [],
	        parent,
	        i = 0,
	        length = this.length;

	    for (; i < length; i++) {
	        if (!~results.indexOf(parent = this[i].parentElement) && parent) {
	            results.push(parent);
	        }
	    }

	    return jBone(results);
	};

	fn.toArray = function() {
	    return slice.call(this);
	};

	fn.is = function() {
	    var args = arguments;

	    return this.some(function(el) {
	        return el.tagName.toLowerCase() === args[0];
	    });
	};

	fn.has = function() {
	    var args = arguments;

	    return this.some(function(el) {
	        return el.querySelectorAll(args[0]).length;
	    });
	};

	fn.add = function(selector, context) {
	    return this.pushStack(
	        jBone.unique(
	            jBone.merge(this.get(), jBone(selector, context))
	        )
	    );
	};

	fn.attr = function(key, value) {
	    var args = arguments,
	        i = 0,
	        length = this.length,
	        setter;

	    if (isString(key) && args.length === 1) {
	        return this[0] && this[0].getAttribute(key);
	    }

	    if (args.length === 2) {
	        setter = function(el) {
	            el.setAttribute(key, value);
	        };
	    } else if (isObject(key)) {
	        setter = function(el) {
	            keys(key).forEach(function(name) {
	                el.setAttribute(name, key[name]);
	            });
	        };
	    }

	    for (; i < length; i++) {
	        setter(this[i]);
	    }

	    return this;
	};

	fn.removeAttr = function(key) {
	    var i = 0,
	        length = this.length;

	    for (; i < length; i++) {
	        this[i].removeAttribute(key);
	    }

	    return this;
	};

	fn.val = function(value) {
	    var i = 0,
	        length = this.length;

	    if (arguments.length === 0) {
	        return this[0] && this[0].value;
	    }

	    for (; i < length; i++) {
	        this[i].value = value;
	    }

	    return this;
	};

	fn.css = function(key, value) {
	    var args = arguments,
	        i = 0,
	        length = this.length,
	        setter;

	    // Get attribute
	    if (isString(key) && args.length === 1) {
	        return this[0] && win.getComputedStyle(this[0])[key];
	    }

	    // Set attributes
	    if (args.length === 2) {
	        setter = function(el) {
	            el.style[key] = value;
	        };
	    } else if (isObject(key)) {
	        setter = function(el) {
	            keys(key).forEach(function(name) {
	                el.style[name] = key[name];
	            });
	        };
	    }

	    for (; i < length; i++) {
	        setter(this[i]);
	    }

	    return this;
	};

	fn.data = function(key, value) {
	    var args = arguments, data = {},
	        i = 0,
	        length = this.length,
	        setter,
	        setValue = function(el, key, value) {
	            if (isObject(value)) {
	                el.jdata = el.jdata || {};
	                el.jdata[key] = value;
	            } else {
	                el.dataset[key] = value;
	            }
	        },
	        getValue = function(value) {
	            if (value === "true") {
	                return true;
	            } else if (value === "false") {
	                return false;
	            } else {
	                return value;
	            }
	        };

	    // Get all data
	    if (args.length === 0) {
	        this[0].jdata && (data = this[0].jdata);

	        keys(this[0].dataset).forEach(function(key) {
	            data[key] = getValue(this[0].dataset[key]);
	        }, this);

	        return data;
	    }
	    // Get data by name
	    if (args.length === 1 && isString(key)) {
	        return this[0] && getValue(this[0].dataset[key] || this[0].jdata && this[0].jdata[key]);
	    }

	    // Set data
	    if (args.length === 1 && isObject(key)) {
	        setter = function(el) {
	            keys(key).forEach(function(name) {
	                setValue(el, name, key[name]);
	            });
	        };
	    } else if (args.length === 2) {
	        setter = function(el) {
	            setValue(el, key, value);
	        };
	    }

	    for (; i < length; i++) {
	        setter(this[i]);
	    }

	    return this;
	};

	fn.removeData = function(key) {
	    var i = 0,
	        length = this.length,
	        jdata, dataset;

	    for (; i < length; i++) {
	        jdata = this[i].jdata;
	        dataset = this[i].dataset;

	        if (key) {
	            jdata && jdata[key] && delete jdata[key];
	            delete dataset[key];
	        } else {
	            for (key in jdata) {
	                delete jdata[key];
	            }

	            for (key in dataset) {
	                delete dataset[key];
	            }
	        }
	    }

	    return this;
	};

	fn.addClass = function(className) {
	    var i = 0,
	        j = 0,
	        length = this.length,
	        classes = className ? className.trim().split(/\s+/) : [];

	    for (; i < length; i++) {
	        j = 0;

	        for (j = 0; j < classes.length; j++) {
	            this[i].classList.add(classes[j]);
	        }
	    }

	    return this;
	};

	fn.removeClass = function(className) {
	    var i = 0,
	        j = 0,
	        length = this.length,
	        classes = className ? className.trim().split(/\s+/) : [];

	    for (; i < length; i++) {
	        j = 0;

	        for (j = 0; j < classes.length; j++) {
	            this[i].classList.remove(classes[j]);
	        }
	    }

	    return this;
	};

	fn.toggleClass = function(className, force) {
	    var i = 0,
	        length = this.length,
	        method = "toggle";

	    force === true && (method = "add") || force === false && (method = "remove");

	    if (className) {
	        for (; i < length; i++) {
	            this[i].classList[method](className);
	        }
	    }

	    return this;
	};

	fn.hasClass = function(className) {
	    var i = 0, length = this.length;

	    if (className) {
	        for (; i < length; i++) {
	            if (this[i].classList.contains(className)) {
	                return true;
	            }
	        }
	    }

	    return false;
	};

	fn.html = function(value) {
	    var args = arguments,
	        el;

	    // add HTML into elements
	    if (args.length === 1 && value !== undefined) {
	        return this.empty().append(value);
	    }
	    // get HTML from element
	    else if (args.length === 0 && (el = this[0])) {
	        return el.innerHTML;
	    }

	    return this;
	};

	fn.append = function(appended) {
	    var i = 0,
	        length = this.length,
	        setter;

	    // create jBone object and then append
	    if (isString(appended) && rquickExpr.exec(appended)) {
	        appended = jBone(appended);
	    }
	    // create text node for insertion
	    else if (!isObject(appended)) {
	        appended = document.createTextNode(appended);
	    }

	    appended = appended instanceof jBone ? appended : jBone(appended);

	    setter = function(el, i) {
	        appended.forEach(function(node) {
	            if (i) {
	                el.appendChild(node.cloneNode(true));
	            } else {
	                el.appendChild(node);
	            }
	        });
	    };

	    for (; i < length; i++) {
	        setter(this[i], i);
	    }

	    return this;
	};

	fn.appendTo = function(to) {
	    jBone(to).append(this);

	    return this;
	};

	fn.empty = function() {
	    var i = 0,
	        length = this.length,
	        el;

	    for (; i < length; i++) {
	        el = this[i];

	        while (el.lastChild) {
	            el.removeChild(el.lastChild);
	        }
	    }

	    return this;
	};

	fn.remove = function() {
	    var i = 0,
	        length = this.length,
	        el;

	    // remove all listeners
	    this.off();

	    for (; i < length; i++) {
	        el = this[i];

	        // remove data and nodes
	        delete el.jdata;
	        el.parentNode && el.parentNode.removeChild(el);
	    }

	    return this;
	};

	if (typeof module === "object" && module && typeof module.exports === "object") {
	    // Expose jBone as module.exports in loaders that implement the Node
	    // module pattern (including browserify). Do not create the global, since
	    // the user will be storing it themselves locally, and globals are frowned
	    // upon in the Node module world.
	    module.exports = jBone;
	}
	// Register as a AMD module
	else if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return jBone;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	    win.jBone = win.$ = jBone;
	} else if (typeof win === "object" && typeof win.document === "object") {
	    win.jBone = win.$ = jBone;
	}

	}(typeof window !== "undefined" ? window : this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(337)(module)))

/***/ }),
/* 337 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 338 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var smallBreakPoint = 850;
	var whitelist = ['www.globalforestwatch.org', 'globalforestwatch.org', 'localhost', 'gfw-nav.herokuapp.com', 'staging.globalforestwatch.org', 'gfw-loss-categories.herokuapp.com/'];

	var apiVersion = 'v1';

	var apiUrls = {
	  'www.globalforestwatch.org': 'https://production-api.globalforestwatch.org',
	  'gfw-nav.herokuapp.com': 'https://staging-api.globalforestwatch.org',
	  'staging.globalforestwatch.org': 'https://staging-api.globalforestwatch.org'
	};

	var blacklist = ['climate.globalforestwatch.org', 'commodities.globalforestwatch.org', 'fires.globalforestwatch.org', 'water.globalforestwatch.org'];

	var defaultGfwDomain = whitelist[0];
	var defaultLanguage = 'en';

	/**
	 * Utils
	 * @param  {window} root
	 * @return {Object}
	 */
	var utils = {

	  // GETTERS
	  getWindowWidth: function getWindowWidth() {
	    return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
	  },
	  getWindowHeigth: function getWindowHeigth() {
	    return window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	  },
	  getCurrentLocation: function getCurrentLocation() {
	    return window.location.hostname;
	  },
	  getDefaultDomain: function getDefaultDomain() {
	    return defaultGfwDomain;
	  },
	  isLocalhost: function isLocalhost() {
	    return this.getCurrentLocation() === 'localhost';
	  },
	  getHost: function getHost() {
	    var currentLocation = window.location.hostname;
	    var isValidLocation = whitelist.indexOf(currentLocation) !== -1;
	    // Checking if current location is contained in gfw domains array
	    if (!isValidLocation) {
	      currentLocation = defaultGfwDomain;
	    }
	    if (window.location.port !== '') {
	      currentLocation = currentLocation + ':' + window.location.port;
	    }
	    return 'http://' + currentLocation;
	  },
	  getAPIHost: function getAPIHost() {
	    var versioned = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	    var currentLocation = window.location.hostname;
	    var apiLocation = apiUrls[currentLocation] || apiUrls[defaultGfwDomain];

	    if (versioned) {
	      return apiLocation + '/' + apiVersion;
	    } else {
	      return apiLocation;
	    }

	    return apiLocation;
	  },
	  isLoggedIn: function isLoggedIn(options) {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', this.getAPIHost() + '/' + apiVersion + '/user', true);
	    xhr.withCredentials = true;
	    xhr.onload = function () {
	      var responseStatus = xhr.status;
	      if (responseStatus !== 200) {
	        options.failure();
	      } else {
	        var response = xhr.responseText;
	        if (!!response && response != undefined && response != '') {
	          options.success(JSON.parse(response));
	        }
	      }
	    };

	    xhr.onerror = function () {
	      options.failure();
	    };
	    xhr.send();
	  },


	  /**
	   * Returns the current language from Transifex
	   * @returns {string} language selected
	   */
	  getTransifexLanguage: function getTransifexLanguage() {
	    var lang = defaultLanguage;
	    if (window.Transifex) {
	      lang = window.Transifex.live.getSelectedLanguageCode();
	    }
	    return lang;
	  },


	  // STATES
	  isSmallScreen: function isSmallScreen() {
	    return this.getWindowWidth() < smallBreakPoint;
	  },
	  isDefaultHost: function isDefaultHost() {
	    var hostname = window.location.hostname,

	    // check is the hostname is inside the whitelist
	    is_white = whitelist.indexOf(hostname) !== -1,
	        is_black;

	    // check is the hostname is inside the blacklist or
	    // if it has 'globalforestwatch.org' in its hostname
	    if (blacklist.indexOf(hostname) === -1) {
	      is_black = hostname.indexOf('globalforestwatch.org') === -1;
	    } else {
	      is_black = true;
	    }

	    return is_white || !is_black;
	  },


	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  // Source: https://davidwalsh.name/function-debounce
	  debounce: function debounce(func, wait, immediate) {
	    var _this = this,
	        _arguments = arguments;

	    var timeout = void 0;
	    return function () {
	      var context = _this,
	          args = _arguments;
	      var later = function later() {
	        timeout = null;
	        if (!immediate) func.apply(context, args);
	      };
	      var callNow = immediate && !timeout;
	      clearTimeout(timeout);
	      timeout = setTimeout(later, wait);
	      if (callNow) func.apply(context, args);
	    };
	  },
	  isFlagship: function isFlagship() {
	    var current = window.location.hostname;
	    if (whitelist.indexOf(current) > -1) {
	      return true;
	    }
	    return false;
	  }
	};

	exports.default = utils;

/***/ }),
/* 339 */
/***/ (function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += '<div class="namespace-gfw-header">\n  <header class="m-header">\n    <nav class="m-header-nav-container">\n      <div class="nav-wrapper">\n        <div class="logo-sections-container">\n          <a href="/" id="link-logo-menu">\n            <div class="logo-menu"></div>\n          </a>\n          <ul class="nav-sections"></ul>\n        </div>\n        <div class="options-container">\n          <ul class="nav-options">\n            <li class="-js-open-menu open-menu-button open-menu-button-language" data-submenu="#language-sub-menu">\n              <div class="triangle lang-triangle"></div>\n              <div id="transifexTranslateElement" class="m-transifex">\n              </div>\n              <div id="googleTranslate">\n              </div>\n            </li>\n            <li class="-js-open-menu open-menu-button open-menu-button-login" data-submenu="#login-sub-menu" id="my-gfw-container">\n              My gfw\n              <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-mygfw"></use></svg>\n              <div id="login-sub-menu" class="m-header-sub-menu-login sub-menu">\n                <p>Log in is required so you can view, manage, and delete your subscriptions. Questions? <a href="mailto:gfw@wri.org">Contact us</a>.</p>\n                <ul>\n                  <a href="auth/twitter?applications=gfw" class="my-gfw-sign-in">\n                    <li class="my-gfw-sign-in-twitter login-item -twitter ">Log in with Twitter</li>\n                  </a>\n                  <a href="auth/facebook?applications=gfw" class="my-gfw-sign-in">\n                    <li class="my-gfw-sign-in-facebook login-item -facebook">Log in with Facebook</li>\n                  </a>\n                  <a href="auth/google?applications=gfw" class="my-gfw-sign-in">\n                    <li class="my-gfw-sign-in-google login-item -google">Log in with Google</li>\n                  </a>\n                </ul>\n              </div>\n            </li>\n            <li class="-js-open-menu open-menu-button open-menu-button-dashboard" data-submenu="#dashboard-sub-menu">\n              <span class="mobile-title" data-submenu="#dashboard-sub-menu">Menu</span>\n              <span class="desktop-title -js-open-menu open-menu-button open-menu-button-dashboard" data-submenu="#dashboard-sub-menu">More</span>\n              <svg class="close-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-explore"></use></svg>\n              <svg class="open-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-close"></use></svg>\n              <svg class="menu-mobile-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-menu"></use></svg>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n    <div class="m-header-sub-menu-dashboard sub-menu" id="dashboard-sub-menu">\n      <div class="nav-sub-menu-container">\n        <div class="form-search-container">\n          <form class="search-container" id="search-container" action="https://www.globalforestwatch.org/search">\n            <input type="text" name="query" id="search-input" placeholder="SEARCH"/>\n            <button type="submit"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-search"></use></svg></button>\n          </form>\n          <ul class="mobile-nav-sections"></ul>\n        </div>\n        <div class="applications-container">\n          <h3>OTHER APPLICATIONS</h3>\n          <div class=" boxes-container">\n            <a href="http://www.globalforestwatch.org/" target="_blank" class="box gfw-global"></a>\n            <a href="http://climate.globalforestwatch.org/" target="_blank" class="box gfw-climate"></a>\n            <a href="http://fires.globalforestwatch.org/home/" target="_blank" class="box gfw-fires"></a>\n            <a href="http://commodities.globalforestwatch.org/" target="_blank" class="box gfw-commodities"></a>\n            <a href="http://water.globalforestwatch.org/" target="_blank" class="box gfw-water"></a>\n            <a href="http://forestwatcher.globalforestwatch.org/" target="_blank" class="box gfw-watcher"></a>\n            <div class="box-last">\n              <a href="http://developers.globalforestwatch.org/" target="_blank" class="box -last">\n                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-explore"></use></svg>\n                <span>explore all apps</span>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class="m-header-more-container -center">\n          <div class="-center">\n            <h3>More in GFW</h3>\n            <ul class=" more-options-secondary-container"></ul>\n            <div class=" more-options-container">\n              <a class="more-options-item" href="http://developers.globalforestwatch.org/">\n                <svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-developer"></use></svg>\n                <span>developer tools</span>\n              </a>\n              <a class="more-options-item" href="';
	 if (location.hostname === 'staging.globalforestwatch.org') {;
	__p += 'http://staging.globalforestwatch.org/howto';
	 } else { ;
	__p += 'http://www.globalforestwatch.org/howto';
	 } ;
	__p += '">\n                <svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-how-to"></use></svg>\n                <span>how to portal</span>\n              </a>\n              <a class="more-options-item" href="';
	 if (location.hostname === 'staging.globalforestwatch.org') {;
	__p += 'http://staging.globalforestwatch.org/small-grants-fund';
	 } else { ;
	__p += 'http://www.globalforestwatch.org/small-grants-fund';
	 } ;
	__p += '">\n                <svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-samll-people"></use></svg>\n                <span>small grants fund</span>\n              </a>\n              <a class="more-options-item" href="http://data.globalforestwatch.org/" target="_blank">\n                <svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-open-data"></use></svg>\n                <span>open data portal</span>\n              </a>\n              <a class="more-options-item" href="';
	 if (location.hostname === 'staging.globalforestwatch.org') {;
	__p += 'http://staging.globalforestwatch.org/contribute-data';
	 } else { ;
	__p += 'http://www.globalforestwatch.org/contribute-data';
	 } ;
	__p += '">\n                <svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-contribute_icon"></use></svg>\n                <span>contribute data</span>\n              </a>\n              <a class="more-options-item" href="http://blog.globalforestwatch.org/">\n                <svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-blog"></use></svg>\n                <span>blog</span>\n              </a>\n              <a class="more-options-item" id="stories-link" href="http://www.globalforestwatch.org/stories">\n                <svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-stories"></use></svg>\n                <span>stories</span>\n              </a>\n              <a class="more-options-item" href="https://groups.google.com/forum/#!forum/globalforestwatch" target="_blank">\n                <svg class="svg"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-forum"></use></svg>\n                <span>discussion forum</span>\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class="m-sitemap-info-container">\n          <div class="-center">\n            <div class="sitemap-container">\n              <a href="http://www.globalforestwatch.org/sitemap"><h3>SITEMAP</h3></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n</div>\n';

	}
	return __p
	}

/***/ }),
/* 340 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Utils
	 * @param  {window} root
	 * @return {Object}
	 */
	var menuOptions = {
	  getOptions: function getOptions() {
	    var logoLink = document.getElementById('link-logo-menu');
	    var path = window.location.pathname;
	    var navOptions = window.liveSettings.menuOptions;
	    var siteStyles = void 0;
	    var menuOptionsNav = '';
	    if (navOptions && navOptions.options && navOptions.options.length) {
	      for (var i = 0; i < navOptions.options.length; i += 1) {
	        if (navOptions.options[i].title === 'logo') {
	          logoLink.setAttribute('href', navOptions.options[i].url);
	        } else {
	          menuOptionsNav += '\n            <li class="' + (path === navOptions.options[i].url || path === navOptions.options[i].url + '/' ? siteStyles : '') + '" data-menu="' + navOptions.options[i].url + '">\n              <a class="option-menu" href="' + navOptions.options[i].url + '"> ' + navOptions.options[i].title + ' </a>\n            </li>';
	        }
	      }
	    }
	    return menuOptionsNav;
	  }
	};

	exports.default = menuOptions;

/***/ }),
/* 341 */
/***/ (function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<defs>\n<symbol id="gfw-header-icon-h-mygfw" viewBox="0 0 32 32">\n<title>my-gfw-icon</title>\n<path fill="#555" style="fill: var(--color2, #555)" d="M28.195 23.293l3.805 7.609h-32l3.806-7.609c2.934-2.543 7.304-4.162 12.195-4.162 4.889 0 9.259 1.619 12.195 4.162zM15.982 16.584c-3.866 0-6.999-3.713-6.999-8.292s3.133-8.292 6.999-8.292c3.866 0 7.001 3.713 7.001 8.292s-3.135 8.292-7.001 8.292z"></path>\n</symbol>\n<symbol id="gfw-header-icon-h-explore" viewBox="0 0 24 24">\n<title>h-explore</title>\n<path class="path1" d="M3.6 9.36c-1.458 0-2.64 1.182-2.64 2.64s1.182 2.64 2.64 2.64 2.64-1.182 2.64-2.64c0-1.458-1.182-2.64-2.64-2.64zM12 9.36c-1.458 0-2.64 1.182-2.64 2.64s1.182 2.64 2.64 2.64 2.639-1.182 2.639-2.64c0-1.458-1.181-2.64-2.639-2.64zM20.4 9.36c-1.458 0-2.64 1.182-2.64 2.64s1.182 2.64 2.64 2.64 2.64-1.182 2.64-2.64c0-1.458-1.182-2.64-2.64-2.64z"></path>\n</symbol>\n<symbol id="gfw-header-icon-h-search" viewBox="0 0 23 24">\n<title>h-search</title>\n<path class="path1" d="M17.247 15.629l5.42 5.419-1.951 1.951-5.468-5.468c-1.579 1.124-3.504 1.79-5.588 1.79-5.336 0-9.66-4.325-9.66-9.66 0-5.336 4.324-9.661 9.66-9.661 5.335 0 9.66 4.325 9.66 9.661 0 2.255-0.778 4.324-2.073 5.968zM9.667 15.333c3.13 0 5.667-2.537 5.667-5.667s-2.537-5.667-5.667-5.667c-3.13 0-5.667 2.537-5.667 5.667s2.537 5.667 5.667 5.667z"></path>\n</symbol>\n<symbol id="gfw-header-icon-h-close" viewBox="0 0 32 32">\n<title>close-(1)</title>\n<path fill="#525352" style="fill: var(--color1, #525352)" d="M30.279 4.596l-11.404 11.404 11.404 11.404-2.875 2.875-11.404-11.404-11.404 11.404-2.875-2.875 11.404-11.404-11.404-11.404 2.875-2.875 11.404 11.404 11.404-11.404z"></path>\n</symbol>\n<symbol id="icon-stories" viewBox="0 0 34 32">\n<title>stories</title>\n<path fill="#97be32" style="fill: var(--color1, #97be32)" d="M25.6 21.333h8.534v-21.333h-34.133v21.333h14.934l10.666 10.666v-10.666z"></path>\n</symbol>\n<symbol id="gfw-header-icon-developer" viewBox="0 0 32 32">\n<title>Combined-Shape_3</title>\n<path fill="#97be32" style="fill: var(--color1, #97be32)" d="M20.114 4.492h-8.229v2.092h-2.057v-4.185h12.343v4.185h-2.057v-2.092zM18.057 17.046v-2.092h-4.114v2.092h-13.943v-10.462h32v10.462h-13.943zM13.943 19.138v2.092h4.114v-2.092h11.886v10.462h-27.886v-10.462h11.886z"></path>\n</symbol>\n<symbol id="gfw-header-icon-how-to" viewBox="0 0 32 32">\n<title>HOW-TO-ICON</title>\n<path fill="#97be32" style="fill: var(--color1, #97be32)" d="M20.058 15.608c-0.792 1.080-1.896 1.959-3.315 2.637v2.994h-2.994v-3.743c0.491-0.296 0.918-0.568 1.28-0.818 0.364-0.25 0.761-0.568 1.194-0.953 0.433-0.387 0.782-0.773 1.052-1.164 0.27-0.39 0.498-0.849 0.684-1.379 0.186-0.531 0.28-1.087 0.28-1.673 0-1.497-0.749-2.246-2.246-2.246-0.841 0-1.426 0.251-1.753 0.755-0.328 0.502-0.491 1.249-0.491 2.24h-2.994v-0.749c0-1.708 0.45-3.008 1.351-3.9 0.901-0.893 2.197-1.339 3.888-1.339 1.708 0 3.010 0.45 3.906 1.349 0.896 0.901 1.346 2.198 1.346 3.889 0 1.653-0.396 3.019-1.188 4.099v0zM13.749 25.729v-2.994h2.994v2.994h-2.994zM15.999 0c-8.837 0-15.999 7.164-15.999 15.999 0 8.837 7.162 16.001 15.999 16.001s16.001-7.164 16.001-16.001c0-8.835-7.164-15.999-16.001-15.999v0z"></path>\n</symbol>\n<symbol id="gfw-header-icon-samll-people" viewBox="0 0 32 32">\n<title>Group-8</title>\n<path fill="#97be32" d="M16 0c-8.862 0-16 7.138-16 16s7.138 16 16 16c8.862 0 16-7.138 16-16s-7.138-16-16-16zM11.077 11.077c0-2.708 2.215-4.923 4.923-4.923s4.923 2.215 4.923 4.923v1.231c0 2.708-2.215 4.923-4.923 4.923s-4.923-2.215-4.923-4.923v-1.231zM23.385 25.846c-2.092 1.6-4.554 2.462-7.385 2.462s-5.292-0.862-7.385-2.462c-0.369-0.246-0.738-0.615-1.108-0.985 0.369-2.954 2.954-5.169 6.031-5.169h4.923c3.077 0 5.662 2.215 6.031 5.169-0.369 0.369-0.738 0.738-1.108 0.985z"></path>\n</symbol>\n<symbol id="gfw-header-icon-open-data" viewBox="0 0 32 32">\n<title>data_icon</title>\n<path fill="#97be32" d="M16 16l8-8h-5.964v-8h-4.073v8h-5.964z"></path>\n<path fill="#97be32" d="M29.964 0h-5.964v4.073h4.073v16h-24v-16h4.073v-4.073h-6.109c-1.164 0-2.036 0.727-2.036 2.036v27.927c0 1.164 0.873 2.036 2.036 2.036h27.927c1.164 0 2.036-0.727 2.036-2.036v-27.927c0-1.309-0.727-2.036-2.036-2.036z"></path>\n</symbol>\n<symbol id="gfw-header-icon-contribute_icon" viewBox="0 0 38 32">\n<title>contribute_icon</title>\n<path fill="#97be32" d="M30.255 12.509c3.927 1.164 6.982 4.945 6.982 9.6 0 5.382-4.218 9.891-9.309 9.891-3.782 0-13.527 0-17.455 0-5.818 0-10.473-4.945-10.473-11.055 0-4.945 3.055-8.873 7.273-10.327 0.727-6.255 5.527-10.618 11.345-10.618 6.545 0 11.636 5.382 11.636 12.364v0.145zM19.055 8.727l-8.873 8.727h6.545v8.873h4.364v-8.873h6.545l-8.582-8.727z"></path>\n</symbol>\n<symbol id="gfw-header-icon-blog" viewBox="0 0 32 32">\n<title>Combined-Shape_2</title>\n<path fill="#97be32" style="fill: var(--color1, #97be32)" d="M4.364 0h23.273v32h-23.273v-32zM9.018 2.286v16l4.655-4.064 4.655 4.064v-16h-9.309z"></path>\n</symbol>\n<symbol id="gfw-header-icon-forum" viewBox="0 0 32 32">\n<title>Combined-Shape</title>\n<path fill="#97be32" style="fill: var(--color1, #97be32)" d="M27.36 26v5.999l-5.999-5.999h-10v-12h20v12h-4zM11.36 12l-8.72 8.72v-8.72h-2v-12h28v12h-17.28z"></path>\n</symbol>\n<symbol id="gfw-header-icon-menu" viewBox="0 0 24 24">\n<title>menu</title>\n<path d="M21 11h-18c-0.55 0-1 0.45-1 1s0.45 1 1 1h18c0.55 0 1-0.45 1-1s-0.45-1-1-1z"></path>\n<path d="M3 7h18c0.55 0 1-0.45 1-1s-0.45-1-1-1h-18c-0.55 0-1 0.45-1 1s0.45 1 1 1z"></path>\n<path d="M21 17h-18c-0.55 0-1 0.45-1 1s0.45 1 1 1h18c0.55 0 1-0.45 1-1s-0.45-1-1-1z"></path>\n</symbol>\n<symbol id="gfw-header-icon-left-arrow" viewBox="0 0 32 32">\n<title>left-arrow</title>\n<path fill="#ddd" style="fill: var(--color1, #ddd)" d="M24.381 0.762l-0.762-0.762-16.001 16 16.001 16 0.762-0.762-15.238-15.238z"></path>\n</symbol>\n</defs>\n</svg>\n';

	}
	return __p
	}

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _loginButton = __webpack_require__(343);

	var _loginButton2 = _interopRequireDefault(_loginButton);

	var _logoutButton = __webpack_require__(344);

	var _logoutButton2 = _interopRequireDefault(_logoutButton);

	var _loginModal = __webpack_require__(345);

	var _loginModal2 = _interopRequireDefault(_loginModal);

	var _facade = __webpack_require__(335);

	var _facade2 = _interopRequireDefault(_facade);

	var _utils = __webpack_require__(338);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LoginButton = function () {
	  function LoginButton() {
	    _classCallCheck(this, LoginButton);
	  }

	  _createClass(LoginButton, [{
	    key: 'init',
	    value: function init() {
	      this.$el = (0, _facade2.default)('#my-gfw-container');
	      if (!this.$el) {
	        throw new Error('element #my-gfw-container doesn\'t exist');
	      }
	      this.checkStatus();
	    }

	    // Check if the user is logged

	  }, {
	    key: 'checkStatus',
	    value: function checkStatus() {
	      // Uncomment this if you want to check it locally
	      // this.loggedIn = true;
	      // this.render();

	      // Comment this if you want to check it locally
	      _utils2.default.isLoggedIn({
	        success: function (response) {
	          this.checkCompleteProfile(response);
	          this.loggedIn = true;
	          this.render();
	          this.setupGoogleAnalytics(response);
	        }.bind(this),
	        failure: function () {
	          this.loggedIn = false;
	          this.initLoginLinks();
	        }.bind(this)
	      });
	    }

	    // Render different templates depending on the loggin state

	  }, {
	    key: 'render',
	    value: function render() {
	      var template = !!this.loggedIn ? _loginButton2.default : _logoutButton2.default;
	      this.$el.html(template());

	      this.listeners();

	      return this;
	    }
	  }, {
	    key: 'listeners',
	    value: function listeners() {
	      var $signout = this.$el.find('#my-gfw-sign-out');
	      $signout.on('click', this.logout.bind(this));
	    }
	  }, {
	    key: 'initLoginLinks',
	    value: function initLoginLinks() {
	      var $signin = this.$el.find('.my-gfw-sign-in');
	      $signin.forEach(function (v) {
	        var link = '' + (_utils2.default.getAPIHost() + '/' + (0, _facade2.default)(v).attr('href'));
	        (0, _facade2.default)(v).attr('href', link);
	      });
	    }

	    // Require profile completation

	  }, {
	    key: 'checkCompleteProfile',
	    value: function checkCompleteProfile(response) {
	      var profileComplete = response.data !== null && response.data.attributes.profileComplete !== false;
	      // Only require from specific paths;
	      var pathsRequireCompletion = ['/my_gfw/subscriptions/new', '/stories/new'];
	      if (!profileComplete && pathsRequireCompletion.indexOf(window.location.pathname) > -1) {
	        window.location.href = '/my_gfw';
	      }
	    }
	  }, {
	    key: 'logout',
	    value: function logout(e) {
	      e && e.preventDefault();
	      var xhr = new XMLHttpRequest();
	      xhr.open('GET', _utils2.default.getAPIHost() + '/auth/logout', true);
	      xhr.withCredentials = true;
	      xhr.onload = function () {
	        var responseStatus = xhr.status;
	        if (responseStatus !== 200) {
	          window.location.reload();
	        } else {
	          window.location.reload();
	        }
	      };

	      xhr.onerror = function () {
	        options.failure();
	      };
	      xhr.send();
	    }
	  }, {
	    key: 'showModal',
	    value: function showModal(e) {
	      e && e.stopPropagation() && e.preventDefault();
	      var modalView = new _loginModal2.default();
	      modalView.init();
	    }
	  }, {
	    key: 'setupGoogleAnalytics',
	    value: function setupGoogleAnalytics(response) {
	      if (window.ga !== undefined) {
	        window.ga('set', 'userId', response.id);
	      }
	    }
	  }]);

	  return LoginButton;
	}();

	exports.default = LoginButton;

/***/ }),
/* 343 */
/***/ (function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<span title="My GFW" class="my-gfw-loggedin m-header-submenu-btn logged-button" data-submenu="#submenuLogin">\n  <div class="-svg">\n    <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-mygfw"></use></svg>\n  </div>\n  <div class="-inactive -svg">\n    <svg class="-close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-close"></use></svg>\n  </div>\n  <span>My GFW</span>\n</span>\n<div id="submenulogged" class="sub-menu m-header-submenu m-header-submenu-logged">\n  <ul class="more-list login-list">\n    <a target="_blank" href="https://www.globalforestwatch.org/my_gfw/subscriptions"><li><span>My Subscriptions</span></li></a>\n    <a target="_blank" href="https://www.globalforestwatch.org/my_gfw/stories"><li><span>My Stories</span></li></a>\n    <a target="_blank" href="https://www.globalforestwatch.org/my_gfw"><li><span>My Profile</span></li></a>\n    <a href="/auth/logout" id="my-gfw-sign-out"><li><span>Log Out</span></li></a>\n  </ul>\n</div>\n';

	}
	return __p
	}

/***/ }),
/* 344 */
/***/ (function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<a href="/login" id="submenuBtnLogin" data-submenu="#submenuLogin" class="m-header-submenu-btn">\n  <svg class="-inactive"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-iconh-close"></use></svg>\n  <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-iconh-mygfw"></use></svg>\n  <span>Log in <em class="-only-desktop">to My GFW</em></span>\n</a>\n\n<div id="submenuLogin" class="m-header-submenu -default -right -login">\n	<p>Log in is required so you can view, manage, and delete your subscriptions. Questions? <a href="mailto:gfw@wri.org">Contact us</a>.</p>\n	<ul>\n    <li class="my-gfw-sign-in-twitter">\n      <a href="/auth/twitter?applications=gfw" class="my-gfw-sign-in">\n        <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-twitter"></use></svg>\n        Log in with Twitter\n      </a>\n    </li>\n\n    <li class="my-gfw-sign-in-facebook">\n      <a href="/auth/facebook?applications=gfw" class="my-gfw-sign-in">\n        <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-facebook"></use></svg>\n        Log in with Facebook\n      </a>\n    </li>\n\n    <li class="my-gfw-sign-in-google">\n      <a href="/auth/google?applications=gfw" class="my-gfw-sign-in">\n        <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-googleplus"></use></svg>\n        Log in with Google\n      </a>\n    </li>\n	</ul>\n</div>\n';

	}
	return __p
	}

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _loginModal = __webpack_require__(346);

	var _loginModal2 = _interopRequireDefault(_loginModal);

	var _facade = __webpack_require__(335);

	var _facade2 = _interopRequireDefault(_facade);

	var _utils = __webpack_require__(338);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * User
	 * @param  {window} root
	 * @return {Class}
	 */
	var LoginModal = function () {
	  function LoginModal() {
	    _classCallCheck(this, LoginModal);
	  }

	  _createClass(LoginModal, [{
	    key: 'init',
	    value: function init() {
	      this.$el = (0, _facade2.default)('#my-gfw-modal');
	      if (!this.$el) {
	        throw new Error('element #footerGfw doesn\'t exist');
	      }
	      this.render();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.$el.html((0, _loginModal2.default)());
	      // If you don't add this clas you won't see anything
	      this.$el.addClass('is-active');

	      this.initEvents();
	      this.initLinks();

	      return this;
	    }

	    // Events for closing the modal

	  }, {
	    key: 'initEvents',
	    value: function initEvents() {
	      var $modalClose = this.$el.find('.my-gfw-modal-close');
	      var $modalBackdrop = this.$el.find('.my-gfw-modal-backdrop');

	      $modalClose.on('click', this.hideModal.bind(this));
	      $modalBackdrop.on('click', this.hideModal.bind(this));
	    }

	    // Set the APIURL to the signin links

	  }, {
	    key: 'initLinks',
	    value: function initLinks() {
	      var $signin = this.$el.find('.my-gfw-sign-in');
	      $signin.forEach(function (v) {
	        var link = '' + (_utils2.default.getAPIHost() + '/' + (0, _facade2.default)(v).attr('href'));

	        (0, _facade2.default)(v).attr('href', link);
	      });
	    }
	  }, {
	    key: 'hideModal',
	    value: function hideModal(e) {
	      e && event.stopPropagation() && event.preventDefault();
	      this.$el.removeClass('is-active');
	      this.$el.html('');
	    }
	  }]);

	  return LoginModal;
	}();

	exports.default = LoginModal;

/***/ }),
/* 346 */
/***/ (function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="my-gfw-modal-backdrop"></div>\n<div class="my-gfw-modal-window">\n  <a href="#" class="my-gfw-modal-close" id="my-gfw-modal-close">\n    <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shape-close"></use></svg>\n  </a>\n\n  <div class="my-gfw-content">\n    <header>\n      <h2>Log in</h2>\n      <h3>\n        Log in is required so you can view, manage, and delete your\n        subscriptions. Questions? <a href="mailto:gfw@wri.org">Contact us</a>.\n      </h3>\n    </header>\n\n    <ul class="my-gfw-authentication">\n      <li class="my-gfw-sign-in-twitter">\n        <a href="/auth/twitter?applications=gfw" class="my-gfw-sign-in">\n          <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-twitter"></use></svg>\n          Log in with Twitter\n        </a>\n      </li>\n\n      <li class="my-gfw-sign-in-facebook">\n        <a href="/auth/facebook?applications=gfw" class="my-gfw-sign-in">\n          <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-facebook"></use></svg>\n          Log in with Facebook\n        </a>\n      </li>\n\n      <li class="my-gfw-sign-in-google">\n        <a href="/auth/google?applications=gfw" class="my-gfw-sign-in">\n          <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-h-googleplus"></use></svg>\n          Log in with Google\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n';

	}
	return __p
	}

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lory = __webpack_require__(348);

	var _footer = __webpack_require__(349);

	var _footer2 = _interopRequireDefault(_footer);

	var _footerIcons = __webpack_require__(350);

	var _footerIcons2 = _interopRequireDefault(_footerIcons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var sliderPause = 5000;
	var numberScroll = 1;
	if (window.innerWidth > 850) {
	  numberScroll = 4;
	}
	var sliderOptions = {
	  enableMouseEvents: true,
	  infinite: 4,
	  slidesToScroll: numberScroll
	};

	var links = [{
	  options: [{
	    title: 'GFW',
	    url: 'http://www.globalforestwatch.org/'
	  }, {
	    title: 'Blog',
	    url: 'http://blog.globalforestwatch.org/'
	  }, {
	    title: 'How to portal',
	    url: 'http://www.globalforestwatch.org/howto/'
	  }]
	}];

	/**
	 * Footer
	 * @param  {window} root
	 * @return {Class}
	 */

	var Footer = function () {
	  function Footer() {
	    _classCallCheck(this, Footer);

	    this.el = document.getElementById('footerGfw');
	    if (!this.el) {
	      throw new Error('element #footerGfw doesn\'t exist');
	    }

	    this.handlers = {
	      cancelTimer: this.cancelTimer.bind(this),
	      initTimer: this.initTimer.bind(this)
	    };

	    this.render();
	  }

	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      this.site = window.liveSettings.site;
	      this.el.innerHTML = (0, _footer2.default)({ links: links[0] }) + (0, _footerIcons2.default)();
	      this.sliderContainer = document.getElementById('my-gfw-slider');
	      this.slidesContainer = document.querySelector('.frame');
	      this.initSlider();

	      return this;
	    }
	  }, {
	    key: 'initSlider',
	    value: function initSlider() {
	      this.slider = (0, _lory.lory)(this.sliderContainer, sliderOptions);

	      this.sliderContainer.addEventListener('before.lory.slide', this.handlers.cancelTimer);
	      this.sliderContainer.addEventListener('after.lory.slide', this.handlers.initTimer);
	      this.sliderContainer.addEventListener('mouseover', this.handlers.cancelTimer);
	      this.sliderContainer.addEventListener('mouseout', this.handlers.initTimer);

	      this.initTimer();
	    }
	  }, {
	    key: 'initTimer',
	    value: function initTimer() {
	      this.cancelTimer();
	      if (!this.sliderTimer) {
	        this.sliderTimer = setInterval(this.slider.next.bind(this.slider), sliderPause);
	      }
	    }
	  }, {
	    key: 'cancelTimer',
	    value: function cancelTimer() {
	      if (this.sliderTimer) {
	        clearInterval(this.sliderTimer);
	        this.sliderTimer = null;
	      }
	    }
	  }]);

	  return Footer;
	}();

	exports.default = Footer;

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else {
			var a = factory();
			for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	})(typeof self !== 'undefined' ? self : this, function() {
	return /******/ (function(modules) { // webpackBootstrap
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
	/******/ 			Object.defineProperty(exports, name, {
	/******/ 				configurable: false,
	/******/ 				enumerable: true,
	/******/ 				get: getter
	/******/ 			});
	/******/ 		}
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
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 7);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* globals jQuery */

	exports.lory = lory;

	var _detectPrefixes = __webpack_require__(1);

	var _detectPrefixes2 = _interopRequireDefault(_detectPrefixes);

	var _detectSupportsPassive = __webpack_require__(2);

	var _detectSupportsPassive2 = _interopRequireDefault(_detectSupportsPassive);

	var _dispatchEvent = __webpack_require__(3);

	var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

	var _defaults = __webpack_require__(6);

	var _defaults2 = _interopRequireDefault(_defaults);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var slice = Array.prototype.slice;

	function lory(slider, opts) {
	    var position = void 0;
	    var slidesWidth = void 0;
	    var frameWidth = void 0;
	    var slides = void 0;

	    /**
	     * slider DOM elements
	     */
	    var frame = void 0;
	    var slideContainer = void 0;
	    var prevCtrl = void 0;
	    var nextCtrl = void 0;
	    var prefixes = void 0;
	    var transitionEndCallback = void 0;

	    var index = 0;
	    var options = {};
	    var touchEventParams = (0, _detectSupportsPassive2.default)() ? { passive: true } : false;

	    /**
	     * if object is jQuery convert to native DOM element
	     */
	    if (typeof jQuery !== 'undefined' && slider instanceof jQuery) {
	        slider = slider[0];
	    }

	    /**
	     * private
	     * set active class to element which is the current slide
	     */
	    function setActiveElement(slides, currentIndex) {
	        var _options = options,
	            classNameActiveSlide = _options.classNameActiveSlide;


	        slides.forEach(function (element, index) {
	            if (element.classList.contains(classNameActiveSlide)) {
	                element.classList.remove(classNameActiveSlide);
	            }
	        });

	        slides[currentIndex].classList.add(classNameActiveSlide);
	    }

	    /**
	     * private
	     * setupInfinite: function to setup if infinite is set
	     *
	     * @param  {array} slideArray
	     * @return {array} array of updated slideContainer elements
	     */
	    function setupInfinite(slideArray) {
	        var _options2 = options,
	            infinite = _options2.infinite;


	        var front = slideArray.slice(0, infinite);
	        var back = slideArray.slice(slideArray.length - infinite, slideArray.length);

	        front.forEach(function (element) {
	            var cloned = element.cloneNode(true);

	            slideContainer.appendChild(cloned);
	        });

	        back.reverse().forEach(function (element) {
	            var cloned = element.cloneNode(true);

	            slideContainer.insertBefore(cloned, slideContainer.firstChild);
	        });

	        slideContainer.addEventListener(prefixes.transitionEnd, onTransitionEnd);

	        return slice.call(slideContainer.children);
	    }

	    /**
	     * [dispatchSliderEvent description]
	     * @return {[type]} [description]
	     */
	    function dispatchSliderEvent(phase, type, detail) {
	        (0, _dispatchEvent2.default)(slider, phase + '.lory.' + type, detail);
	    }

	    /**
	     * translates to a given position in a given time in milliseconds
	     *
	     * @to        {number} number in pixels where to translate to
	     * @duration  {number} time in milliseconds for the transistion
	     * @ease      {string} easing css property
	     */
	    function translate(to, duration, ease) {
	        var style = slideContainer && slideContainer.style;

	        if (style) {
	            style[prefixes.transition + 'TimingFunction'] = ease;
	            style[prefixes.transition + 'Duration'] = duration + 'ms';
	            style[prefixes.transform] = 'translateX(' + to + 'px)';
	        }
	    }

	    /**
	     * returns an element's width
	     */
	    function elementWidth(element) {
	        return element.getBoundingClientRect().width || element.offsetWidth;
	    }

	    /**
	     * slidefunction called by prev, next & touchend
	     *
	     * determine nextIndex and slide to next postion
	     * under restrictions of the defined options
	     *
	     * @direction  {boolean}
	     */
	    function slide(nextIndex, direction) {
	        var _options3 = options,
	            slideSpeed = _options3.slideSpeed,
	            slidesToScroll = _options3.slidesToScroll,
	            infinite = _options3.infinite,
	            rewind = _options3.rewind,
	            rewindPrev = _options3.rewindPrev,
	            rewindSpeed = _options3.rewindSpeed,
	            ease = _options3.ease,
	            classNameActiveSlide = _options3.classNameActiveSlide,
	            _options3$classNameDi = _options3.classNameDisabledNextCtrl,
	            classNameDisabledNextCtrl = _options3$classNameDi === undefined ? 'disabled' : _options3$classNameDi,
	            _options3$classNameDi2 = _options3.classNameDisabledPrevCtrl,
	            classNameDisabledPrevCtrl = _options3$classNameDi2 === undefined ? 'disabled' : _options3$classNameDi2;


	        var duration = slideSpeed;

	        var nextSlide = direction ? index + 1 : index - 1;
	        var maxOffset = Math.round(slidesWidth - frameWidth);

	        dispatchSliderEvent('before', 'slide', {
	            index: index,
	            nextSlide: nextSlide
	        });

	        /**
	         * Reset control classes
	         */
	        if (prevCtrl) {
	            prevCtrl.classList.remove(classNameDisabledPrevCtrl);
	        }
	        if (nextCtrl) {
	            nextCtrl.classList.remove(classNameDisabledNextCtrl);
	        }

	        if (typeof nextIndex !== 'number') {
	            if (direction) {
	                if (infinite && index + infinite * 2 !== slides.length) {
	                    nextIndex = index + (infinite - index % infinite);
	                } else {
	                    nextIndex = index + slidesToScroll;
	                }
	            } else {
	                if (infinite && index % infinite !== 0) {
	                    nextIndex = index - index % infinite;
	                } else {
	                    nextIndex = index - slidesToScroll;
	                }
	            }
	        }

	        nextIndex = Math.min(Math.max(nextIndex, 0), slides.length - 1);

	        if (infinite && direction === undefined) {
	            nextIndex += infinite;
	        }

	        if (rewindPrev && Math.abs(position.x) === 0 && direction === false) {
	            nextIndex = slides.length - 1;
	            duration = rewindSpeed;
	        }

	        var nextOffset = Math.min(Math.max(slides[nextIndex].offsetLeft * -1, maxOffset * -1), 0);

	        if (rewind && Math.abs(position.x) === maxOffset && direction) {
	            nextOffset = 0;
	            nextIndex = 0;
	            duration = rewindSpeed;
	        }

	        /**
	         * translate to the nextOffset by a defined duration and ease function
	         */
	        translate(nextOffset, duration, ease);

	        /**
	         * update the position with the next position
	         */
	        position.x = nextOffset;

	        /**
	         * update the index with the nextIndex only if
	         * the offset of the nextIndex is in the range of the maxOffset
	         */
	        if (slides[nextIndex].offsetLeft <= maxOffset) {
	            index = nextIndex;
	        }

	        if (infinite && (nextIndex === slides.length - infinite || nextIndex === slides.length - slides.length % infinite || nextIndex === 0)) {
	            if (direction) {
	                index = infinite;
	            }

	            if (!direction) {
	                index = slides.length - infinite * 2;
	            }

	            position.x = slides[index].offsetLeft * -1;

	            transitionEndCallback = function transitionEndCallback() {
	                translate(slides[index].offsetLeft * -1, 0, undefined);
	            };
	        }

	        if (classNameActiveSlide) {
	            setActiveElement(slice.call(slides), index);
	        }

	        /**
	         * update classes for next and prev arrows
	         * based on user settings
	         */
	        if (prevCtrl && !infinite && !rewindPrev && nextIndex === 0) {
	            prevCtrl.classList.add(classNameDisabledPrevCtrl);
	        }

	        if (nextCtrl && !infinite && !rewind && nextIndex + 1 === slides.length) {
	            nextCtrl.classList.add(classNameDisabledNextCtrl);
	        }

	        dispatchSliderEvent('after', 'slide', {
	            currentSlide: index
	        });
	    }

	    /**
	     * public
	     * setup function
	     */
	    function setup() {
	        dispatchSliderEvent('before', 'init');

	        prefixes = (0, _detectPrefixes2.default)();
	        options = _extends({}, _defaults2.default, opts);

	        var _options4 = options,
	            classNameFrame = _options4.classNameFrame,
	            classNameSlideContainer = _options4.classNameSlideContainer,
	            classNamePrevCtrl = _options4.classNamePrevCtrl,
	            classNameNextCtrl = _options4.classNameNextCtrl,
	            _options4$classNameDi = _options4.classNameDisabledNextCtrl,
	            classNameDisabledNextCtrl = _options4$classNameDi === undefined ? 'disabled' : _options4$classNameDi,
	            _options4$classNameDi2 = _options4.classNameDisabledPrevCtrl,
	            classNameDisabledPrevCtrl = _options4$classNameDi2 === undefined ? 'disabled' : _options4$classNameDi2,
	            enableMouseEvents = _options4.enableMouseEvents,
	            classNameActiveSlide = _options4.classNameActiveSlide,
	            initialIndex = _options4.initialIndex;


	        index = initialIndex;
	        frame = slider.getElementsByClassName(classNameFrame)[0];
	        slideContainer = frame.getElementsByClassName(classNameSlideContainer)[0];
	        prevCtrl = slider.getElementsByClassName(classNamePrevCtrl)[0];
	        nextCtrl = slider.getElementsByClassName(classNameNextCtrl)[0];

	        position = {
	            x: slideContainer.offsetLeft,
	            y: slideContainer.offsetTop
	        };

	        if (options.infinite) {
	            slides = setupInfinite(slice.call(slideContainer.children));
	        } else {
	            slides = slice.call(slideContainer.children);

	            if (prevCtrl && !options.rewindPrev) {
	                prevCtrl.classList.add(classNameDisabledPrevCtrl);
	            }

	            if (nextCtrl && slides.length === 1 && !options.rewind) {
	                nextCtrl.classList.add(classNameDisabledNextCtrl);
	            }
	        }

	        reset();

	        if (classNameActiveSlide) {
	            setActiveElement(slides, index);
	        }

	        if (prevCtrl && nextCtrl) {
	            prevCtrl.addEventListener('click', prev);
	            nextCtrl.addEventListener('click', next);
	        }

	        frame.addEventListener('touchstart', onTouchstart, touchEventParams);

	        if (enableMouseEvents) {
	            frame.addEventListener('mousedown', onTouchstart);
	            frame.addEventListener('click', onClick);
	        }

	        options.window.addEventListener('resize', onResize);

	        dispatchSliderEvent('after', 'init');
	    }

	    /**
	     * public
	     * reset function: called on resize
	     */
	    function reset() {
	        var _options5 = options,
	            infinite = _options5.infinite,
	            ease = _options5.ease,
	            rewindSpeed = _options5.rewindSpeed,
	            rewindOnResize = _options5.rewindOnResize,
	            classNameActiveSlide = _options5.classNameActiveSlide,
	            initialIndex = _options5.initialIndex;


	        slidesWidth = elementWidth(slideContainer);
	        frameWidth = elementWidth(frame);

	        if (frameWidth === slidesWidth) {
	            slidesWidth = slides.reduce(function (previousValue, slide) {
	                return previousValue + elementWidth(slide);
	            }, 0);
	        }

	        if (rewindOnResize) {
	            index = initialIndex;
	        } else {
	            ease = null;
	            rewindSpeed = 0;
	        }

	        if (infinite) {
	            translate(slides[index + infinite].offsetLeft * -1, 0, null);

	            index = index + infinite;
	            position.x = slides[index].offsetLeft * -1;
	        } else {
	            translate(slides[index].offsetLeft * -1, rewindSpeed, ease);
	            position.x = slides[index].offsetLeft * -1;
	        }

	        if (classNameActiveSlide) {
	            setActiveElement(slice.call(slides), index);
	        }
	    }

	    /**
	     * public
	     * slideTo: called on clickhandler
	     */
	    function slideTo(index) {
	        slide(index);
	    }

	    /**
	     * public
	     * returnIndex function: called on clickhandler
	     */
	    function returnIndex() {
	        return index - options.infinite || 0;
	    }

	    /**
	     * public
	     * prev function: called on clickhandler
	     */
	    function prev() {
	        slide(false, false);
	    }

	    /**
	     * public
	     * next function: called on clickhandler
	     */
	    function next() {
	        slide(false, true);
	    }

	    /**
	     * public
	     * destroy function: called to gracefully destroy the lory instance
	     */
	    function destroy() {
	        dispatchSliderEvent('before', 'destroy');

	        // remove event listeners
	        frame.removeEventListener(prefixes.transitionEnd, onTransitionEnd);
	        frame.removeEventListener('touchstart', onTouchstart, touchEventParams);
	        frame.removeEventListener('touchmove', onTouchmove, touchEventParams);
	        frame.removeEventListener('touchend', onTouchend);
	        frame.removeEventListener('mousemove', onTouchmove);
	        frame.removeEventListener('mousedown', onTouchstart);
	        frame.removeEventListener('mouseup', onTouchend);
	        frame.removeEventListener('mouseleave', onTouchend);
	        frame.removeEventListener('click', onClick);

	        options.window.removeEventListener('resize', onResize);

	        if (prevCtrl) {
	            prevCtrl.removeEventListener('click', prev);
	        }

	        if (nextCtrl) {
	            nextCtrl.removeEventListener('click', next);
	        }

	        // remove cloned slides if infinite is set
	        if (options.infinite) {
	            Array.apply(null, Array(options.infinite)).forEach(function () {
	                slideContainer.removeChild(slideContainer.firstChild);
	                slideContainer.removeChild(slideContainer.lastChild);
	            });
	        }

	        dispatchSliderEvent('after', 'destroy');
	    }

	    // event handling

	    var touchOffset = void 0;
	    var delta = void 0;
	    var isScrolling = void 0;

	    function onTransitionEnd() {
	        if (transitionEndCallback) {
	            transitionEndCallback();

	            transitionEndCallback = undefined;
	        }
	    }

	    function onTouchstart(event) {
	        var _options6 = options,
	            enableMouseEvents = _options6.enableMouseEvents;

	        var touches = event.touches ? event.touches[0] : event;

	        if (enableMouseEvents) {
	            frame.addEventListener('mousemove', onTouchmove);
	            frame.addEventListener('mouseup', onTouchend);
	            frame.addEventListener('mouseleave', onTouchend);
	        }

	        frame.addEventListener('touchmove', onTouchmove, touchEventParams);
	        frame.addEventListener('touchend', onTouchend);

	        var pageX = touches.pageX,
	            pageY = touches.pageY;


	        touchOffset = {
	            x: pageX,
	            y: pageY,
	            time: Date.now()
	        };

	        isScrolling = undefined;

	        delta = {};

	        dispatchSliderEvent('on', 'touchstart', {
	            event: event
	        });
	    }

	    function onTouchmove(event) {
	        var touches = event.touches ? event.touches[0] : event;
	        var pageX = touches.pageX,
	            pageY = touches.pageY;


	        delta = {
	            x: pageX - touchOffset.x,
	            y: pageY - touchOffset.y
	        };

	        if (typeof isScrolling === 'undefined') {
	            isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
	        }

	        if (!isScrolling && touchOffset) {
	            translate(position.x + delta.x, 0, null);
	        }

	        // may be
	        dispatchSliderEvent('on', 'touchmove', {
	            event: event
	        });
	    }

	    function onTouchend(event) {
	        /**
	         * time between touchstart and touchend in milliseconds
	         * @duration {number}
	         */
	        var duration = touchOffset ? Date.now() - touchOffset.time : undefined;

	        /**
	         * is valid if:
	         *
	         * -> swipe attempt time is over 300 ms
	         * and
	         * -> swipe distance is greater than 25px
	         * or
	         * -> swipe distance is more then a third of the swipe area
	         *
	         * @isValidSlide {Boolean}
	         */
	        var isValid = Number(duration) < 300 && Math.abs(delta.x) > 25 || Math.abs(delta.x) > frameWidth / 3;

	        /**
	         * is out of bounds if:
	         *
	         * -> index is 0 and delta x is greater than 0
	         * or
	         * -> index is the last slide and delta is smaller than 0
	         *
	         * @isOutOfBounds {Boolean}
	         */
	        var isOutOfBounds = !index && delta.x > 0 || index === slides.length - 1 && delta.x < 0;

	        var direction = delta.x < 0;

	        if (!isScrolling) {
	            if (isValid && !isOutOfBounds) {
	                slide(false, direction);
	            } else {
	                translate(position.x, options.snapBackSpeed);
	            }
	        }

	        touchOffset = undefined;

	        /**
	         * remove eventlisteners after swipe attempt
	         */
	        frame.removeEventListener('touchmove', onTouchmove);
	        frame.removeEventListener('touchend', onTouchend);
	        frame.removeEventListener('mousemove', onTouchmove);
	        frame.removeEventListener('mouseup', onTouchend);
	        frame.removeEventListener('mouseleave', onTouchend);

	        dispatchSliderEvent('on', 'touchend', {
	            event: event
	        });
	    }

	    function onClick(event) {
	        if (delta.x) {
	            event.preventDefault();
	        }
	    }

	    function onResize(event) {
	        if (frameWidth !== elementWidth(frame)) {
	            reset();

	            dispatchSliderEvent('on', 'resize', {
	                event: event
	            });
	        }
	    }

	    // trigger initial setup
	    setup();

	    // expose public api
	    return {
	        setup: setup,
	        reset: reset,
	        slideTo: slideTo,
	        returnIndex: returnIndex,
	        prev: prev,
	        next: next,
	        destroy: destroy
	    };
	}

	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = detectPrefixes;
	/**
	 * Detecting prefixes for saving time and bytes
	 */
	function detectPrefixes() {
	    var transform = void 0;
	    var transition = void 0;
	    var transitionEnd = void 0;

	    (function () {
	        var el = document.createElement('_');
	        var style = el.style;

	        var prop = void 0;

	        if (style[prop = 'webkitTransition'] === '') {
	            transitionEnd = 'webkitTransitionEnd';
	            transition = prop;
	        }

	        if (style[prop = 'transition'] === '') {
	            transitionEnd = 'transitionend';
	            transition = prop;
	        }

	        if (style[prop = 'webkitTransform'] === '') {
	            transform = prop;
	        }

	        if (style[prop = 'msTransform'] === '') {
	            transform = prop;
	        }

	        if (style[prop = 'transform'] === '') {
	            transform = prop;
	        }

	        document.body.insertBefore(el, null);
	        style[transform] = 'translateX(0)';
	        document.body.removeChild(el);
	    })();

	    return {
	        transform: transform,
	        transition: transition,
	        transitionEnd: transitionEnd
	    };
	}

	/***/ }),
	/* 2 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = detectSupportsPassive;
	function detectSupportsPassive() {
	    var supportsPassive = false;

	    try {
	        var opts = Object.defineProperty({}, 'passive', {
	            get: function get() {
	                supportsPassive = true;
	            }
	        });

	        window.addEventListener('testPassive', null, opts);
	        window.removeEventListener('testPassive', null, opts);
	    } catch (e) {}

	    return supportsPassive;
	}

	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = dispatchEvent;

	var _customEvent = __webpack_require__(4);

	var _customEvent2 = _interopRequireDefault(_customEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * dispatch custom events
	 *
	 * @param  {element} el         slideshow element
	 * @param  {string}  type       custom event name
	 * @param  {object}  detail     custom detail information
	 */
	function dispatchEvent(target, type, detail) {
	    var event = new _customEvent2.default(type, {
	        bubbles: true,
	        cancelable: true,
	        detail: detail
	    });

	    target.dispatchEvent(event);
	}

	/***/ }),
	/* 4 */
	/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var NativeCustomEvent = global.CustomEvent;

	function useNative () {
	  try {
	    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
	    return  'cat' === p.type && 'bar' === p.detail.foo;
	  } catch (e) {
	  }
	  return false;
	}

	/**
	 * Cross-browser `CustomEvent` constructor.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
	 *
	 * @public
	 */

	module.exports = useNative() ? NativeCustomEvent :

	// IE >= 9
	'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
	  var e = document.createEvent('CustomEvent');
	  if (params) {
	    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
	  } else {
	    e.initCustomEvent(type, false, false, void 0);
	  }
	  return e;
	} :

	// IE <= 8
	function CustomEvent (type, params) {
	  var e = document.createEventObject();
	  e.type = type;
	  if (params) {
	    e.bubbles = Boolean(params.bubbles);
	    e.cancelable = Boolean(params.cancelable);
	    e.detail = params.detail;
	  } else {
	    e.bubbles = false;
	    e.cancelable = false;
	    e.detail = void 0;
	  }
	  return e;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

	/***/ }),
	/* 5 */
	/***/ (function(module, exports) {

	var g;

	// This works in non-strict mode
	g = (function() {
		return this;
	})();

	try {
		// This works if eval is allowed (see CSP)
		g = g || Function("return this")() || (1,eval)("this");
	} catch(e) {
		// This works if the window reference is available
		if(typeof window === "object")
			g = window;
	}

	// g can still be undefined, but nothing to do about it...
	// We return undefined, instead of nothing here, so it's
	// easier to handle this case. if(!global) { ...}

	module.exports = g;


	/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {

	"use strict";


	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  /**
	   * slides scrolled at once
	   * @slidesToScroll {Number}
	   */
	  slidesToScroll: 1,

	  /**
	   * time in milliseconds for the animation of a valid slide attempt
	   * @slideSpeed {Number}
	   */
	  slideSpeed: 300,

	  /**
	   * time in milliseconds for the animation of the rewind after the last slide
	   * @rewindSpeed {Number}
	   */
	  rewindSpeed: 600,

	  /**
	   * time for the snapBack of the slider if the slide attempt was not valid
	   * @snapBackSpeed {Number}
	   */
	  snapBackSpeed: 200,

	  /**
	   * Basic easing functions: https://developer.mozilla.org/de/docs/Web/CSS/transition-timing-function
	   * cubic bezier easing functions: http://easings.net/de
	   * @ease {String}
	   */
	  ease: 'ease',

	  /**
	   * if slider reached the last slide, with next click the slider goes back to the startindex.
	   * use infinite or rewind, not both
	   * @rewind {Boolean}
	   */
	  rewind: false,

	  /**
	   * number of visible slides or false
	   * use infinite or rewind, not both
	   * @infinite {number}
	   */
	  infinite: false,

	  /**
	   * the slide index to show when the slider is initialized.
	   * @initialIndex {number}
	   */
	  initialIndex: 0,

	  /**
	   * class name for slider frame
	   * @classNameFrame {string}
	   */
	  classNameFrame: 'js_frame',

	  /**
	   * class name for slides container
	   * @classNameSlideContainer {string}
	   */
	  classNameSlideContainer: 'js_slides',

	  /**
	   * class name for slider prev control
	   * @classNamePrevCtrl {string}
	   */
	  classNamePrevCtrl: 'js_prev',

	  /**
	   * class name for slider next control
	   * @classNameNextCtrl {string}
	   */
	  classNameNextCtrl: 'js_next',

	  /**
	   * class name for current active slide
	   * if emptyString then no class is set
	   * @classNameActiveSlide {string}
	   */
	  classNameActiveSlide: 'active',

	  /**
	   * enables mouse events for swiping on desktop devices
	   * @enableMouseEvents {boolean}
	   */
	  enableMouseEvents: false,

	  /**
	   * window instance
	   * @window {object}
	   */
	  window: typeof window !== 'undefined' ? window : null,

	  /**
	   * If false, slides lory to the first slide on window resize.
	   * @rewindOnResize {boolean}
	   */
	  rewindOnResize: true
	};

	/***/ }),
	/* 7 */
	/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(0);


	/***/ })
	/******/ ]);
	});

/***/ }),
/* 349 */
/***/ (function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	__p += '<div class="m-footer-subscribe">\n  <div class="m-footer-subscribe-button js-footer-newsletter">Stay Updated</div>\n</div>\n<div class="wrapper">\n  <div class="m-footer-list">\n    <div class="m-footer-links">\n      <ul class="m-footer-links-texts">\n        ';
	 for (var i = 0; i < links.options.length; i++) { ;
	__p += '\n          <li><a href="' +
	((__t = ( links.options[i].url )) == null ? '' : __t) +
	'">' +
	((__t = ( links.options[i].title )) == null ? '' : __t) +
	'</a></li>\n        ';
	 } ;
	__p += '\n      </ul>\n      <ul class="m-footer-links-social">\n        <li>\n          <a href="https://twitter.com/terra" target="_blank">\n            <svg class="icon icon-twitter"><use xlink:href="#gfw-header-icon-twitter"></use></svg>\n          </a>\n        </li>\n        <li>\n          <a href="https://www.facebook.com/terra/" target="_blank">\n            <svg class="icon icon-facebook"><use xlink:href="#gfw-header-icon-facebook"></use></svg>\n          </a>\n        </li>\n        <li>\n          <a href="https://www.instagram.com/terra/" target="_blank">\n            <svg class="icon icon-instagram"><use xlink:href="#gfw-header-icon-instagram"></use></svg>\n          </a>\n        </li>\n        <li>\n          <a href="https://www.youtube.com/channel/UCAsamYre1KLulf4FD-xJfLA" target="_blank">\n            <svg class="icon icon-youtube"><use xlink:href="#gfw-header-icon-youtube"></use></svg>\n          </a>\n        </li>\n        <li>\n          <a href="https://groups.google.com/forum/#!forum/globalforestwatch" target="_blank">\n            <svg class="icon icon-contact"><use xlink:href="#gfw-header-icon-contact"></use></svg>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class="m-footer-links -links-contact-sitemap">\n      <a class="text-button" href="/sitemap">SITEMAP</a>\n      <div class="text-button m-footer-links__contact js-footer-contact-us">\n        CONTACT US\n      </div>\n    </div>\n  </div>\n\n  <div class="m-footer-info">\n    <div class="m-footer-partner">\n      <p>A partnership convened by</p>\n      <a href="http://www.wri.org/" target="_blank">\n        <svg xmlns="http://www.w3.org/2000/svg" width="143" height="47"><g fill="none" fill-rule="evenodd"><path fill="#FCB80A" d="M14.73 20.4L5.25 10.9l-2.43 2.44 9.47 9.49zM18.87 24.54l-2.44 2.44 9.42 9.43 2.44-2.44zM32.03 37.72l-2.43 2.44 2.81 2.82 2.44-2.44zM11.92 4.38L9.48 6.82l2.81 2.82 2.44-2.44zM18.7 10.79l-2.43 2.44 9.34 9.36 2.44-2.44zM32.2 24.31l-2.43 2.44 9.46 9.48 2.44-2.44zM21.8 20.19l-2.74-2.74-9.56 9.58 2.73 2.74zM32 17.6l-9.3 9.33 2.72 2.73 9.31-9.32zM38.31 11.28l-2.48 2.49 2.73 2.73 2.48-2.48zM21.51 33.58l-2.73-2.73-9.3 9.32 2.72 2.74zM8.52 33.5l-2.74-2.74-2.8 2.81 2.72 2.74zM31.68 4.82l-8.75 8.76 2.73 2.74 8.75-8.77z"/><path fill="#FCB80A" d="M8.05 20.02L5.74 17.7l-5.75 5.76 12.36 12.37 2.26-2.26L4.57 23.5zM22.12 41.6L18.55 38l-2.27 2.28 5.89 5.9 12.8-12.78-2.34-2.32zM39.72 23.97l-3.19 3.18 2.32 2.32 5.62-5.63L32.03 11.4l-2.43 2.44zM11.94 16.12L22.17 5.88l3.47 3.5 2.44-2.46-5.79-5.8L9.63 13.81z"/><path fill="#666" d="M57.32 2.22c-.14-.41-.26-.68-.42-.8a1 1 0 0 0-.44-.1c-.12 0-.18 0-.18-.1 0-.08.09-.1.24-.1.58 0 1.2.03 1.3.03.1 0 .6-.03 1.24-.03.16 0 .24.03.24.1 0 .1-.1.1-.2.1s-.2 0-.28.05c-.1.04-.13.12-.13.24 0 .15.12.53.25 1.04.19.74 1.23 4.13 1.43 4.76h.04l2.17-5.84c.12-.31.19-.4.28-.4.12 0 .18.16.32.52l2.33 5.64h.03c.2-.75 1.1-3.7 1.5-5.02.07-.26.1-.5.1-.65 0-.18-.1-.34-.53-.34-.11 0-.2-.03-.2-.1 0-.08.1-.1.26-.1.6 0 1.07.03 1.17.03.08 0 .56-.03.93-.03.12 0 .2.02.2.1 0 .07-.06.1-.16.1-.11 0-.27.01-.39.06-.27.1-.4.55-.63 1.19-.51 1.41-1.69 4.98-2.24 6.66-.12.39-.17.52-.32.52-.11 0-.18-.13-.35-.55L62.55 3.6h-.02c-.2.57-1.7 4.54-2.18 5.57-.21.46-.27.6-.4.6-.11 0-.17-.13-.26-.42l-2.37-7.12m13.67 3.14c0-1.92 1.27-4.4 4.63-4.4 2.78 0 4.52 1.63 4.52 4.2 0 2.56-1.8 4.6-4.63 4.6-3.22 0-4.52-2.42-4.52-4.4m7.58.21c0-2.5-1.44-4.07-3.28-4.07-1.28 0-2.75.72-2.75 3.51 0 2.33 1.29 4.18 3.44 4.18.78 0 2.6-.38 2.6-3.62m5.66-1.2c0-1.7 0-2.01-.03-2.37-.02-.39-.1-.56-.48-.64a2.24 2.24 0 0 0-.43-.04c-.13 0-.2-.02-.2-.1s.08-.1.25-.1c.6 0 1.3.03 1.53.03l1.58-.03c.7 0 1.46.07 2.06.48.32.22.76.79.76 1.54 0 .83-.34 1.6-1.47 2.51 1 1.26 1.76 2.25 2.43 2.95.62.65 1.08.73 1.25.76.12.02.22.04.31.04.1 0 .14.03.14.08 0 .1-.08.12-.22.12h-1.06c-.63 0-.9-.06-1.2-.22a5.4 5.4 0 0 1-1.53-1.64c-.45-.62-.96-1.38-1.11-1.55-.06-.07-.12-.08-.2-.08l-.97-.02c-.06 0-.1.02-.1.09v.15c0 1.05 0 1.93.06 2.4.04.33.1.58.44.62.17.02.41.05.55.05.09 0 .13.03.13.08 0 .08-.08.12-.22.12-.65 0-1.48-.04-1.65-.04-.21 0-.91.04-1.36.04-.15 0-.23-.04-.23-.12 0-.05.05-.08.18-.08.17 0 .3-.03.4-.05.23-.04.29-.29.33-.61.06-.48.06-1.36.06-2.4V4.38m1.32.89c0 .12.02.17.1.2.23.08.57.11.85.11.45 0 .6-.04.8-.19.33-.25.65-.76.65-1.68 0-1.6-1.05-2.05-1.71-2.05-.28 0-.48.01-.6.04-.07.03-.1.07-.1.16v3.4m10.3 1.1c0 1.43 0 2.2.23 2.4.19.17.48.25 1.35.25.6 0 1.03 0 1.31-.31.14-.15.27-.46.3-.67 0-.1.03-.17.12-.17.07 0 .08.05.08.19 0 .12-.07.96-.16 1.29-.07.24-.13.3-.7.3-1.62 0-2.36-.07-3.26-.07-.26 0-.97.04-1.42.04-.14 0-.22-.04-.22-.12 0-.05.05-.08.18-.08.17 0 .3-.03.4-.05.23-.04.28-.29.33-.61.05-.48.05-1.36.05-2.4V4.38c0-1.7 0-2.01-.02-2.37-.02-.39-.11-.56-.48-.64a1.6 1.6 0 0 0-.37-.04c-.12 0-.19-.02-.19-.1s.08-.1.25-.1c.52 0 1.23.03 1.53.03l1.52-.03c.16 0 .24.02.24.1s-.07.1-.2.1-.3.01-.44.04c-.3.05-.4.24-.42.64-.02.36-.02.67-.02 2.37v1.98m7.13-1.98c0-1.7 0-2.01-.02-2.37-.02-.39-.11-.56-.48-.64a2.25 2.25 0 0 0-.44-.04c-.12 0-.19-.02-.19-.1s.08-.1.25-.1c.59 0 1.3.03 1.6.03.36 0 1.06-.03 1.73-.03 1.4 0 3.27 0 4.5 1.28A4.01 4.01 0 0 1 111 5.25c0 1.41-.6 2.49-1.22 3.13-.52.52-1.68 1.32-3.75 1.32-.82 0-1.83-.14-2.39-.14-.25 0-.96.04-1.4.04-.15 0-.23-.04-.23-.12 0-.05.04-.08.18-.08.17 0 .3-.03.4-.05.23-.04.28-.29.33-.61.05-.48.05-1.36.05-2.4V4.38m1.4 1.24c0 1.18.01 2.05.02 2.26.01.28.04.73.13.85.14.22.58.45 1.46.45 1.15 0 1.9-.22 2.58-.8.71-.62.94-1.64.94-2.8 0-1.42-.6-2.34-1.08-2.8a4.43 4.43 0 0 0-3.18-1.12c-.22 0-.63.03-.72.08-.1.04-.14.1-.14.22v3.66M58.3 22.57c0-1.7 0-2.01-.02-2.37-.02-.38-.11-.56-.48-.64a2.36 2.36 0 0 0-.44-.03c-.12 0-.19-.03-.19-.1 0-.09.08-.1.25-.1.6 0 1.3.03 1.53.03l1.58-.04c.7 0 1.46.07 2.06.48.31.22.76.8.76 1.54 0 .83-.35 1.6-1.48 2.51 1 1.26 1.77 2.26 2.43 2.95.63.65 1.09.73 1.26.76.12.03.22.04.3.04.1 0 .14.03.14.09 0 .09-.07.1-.2.1h-1.07c-.63 0-.9-.05-1.2-.2a5.4 5.4 0 0 1-1.53-1.65c-.45-.62-.96-1.38-1.11-1.55-.06-.07-.12-.08-.2-.08l-.98-.02c-.05 0-.09.02-.09.09v.16c0 1.04 0 1.92.06 2.4.03.32.1.57.44.61.17.03.41.05.55.05.08 0 .13.03.13.09 0 .08-.08.1-.22.1l-1.65-.02-1.36.03c-.15 0-.23-.03-.23-.11 0-.06.05-.1.18-.1.17 0 .3-.01.4-.04.23-.04.28-.29.33-.61.05-.48.05-1.36.05-2.4v-1.97m1.32.9c0 .11.03.16.1.2a3 3 0 0 0 .86.1c.44 0 .59-.04.8-.19.33-.24.65-.76.65-1.68 0-1.6-1.05-2.05-1.71-2.05-.28 0-.48.01-.6.05-.07.02-.1.06-.1.15v3.41m8.9-.89c0-1.7 0-2.01-.03-2.37-.02-.38-.11-.56-.48-.64a2.37 2.37 0 0 0-.44-.03c-.12 0-.19-.03-.19-.1 0-.09.08-.1.25-.1.6 0 1.3.03 1.6.03.37 0 2.6 0 2.8-.02l.49-.06c.05-.01.12-.05.18-.05.05 0 .06.05.06.1 0 .08-.05.22-.09.73 0 .12-.03.6-.05.74-.01.06-.03.13-.11.13s-.1-.06-.1-.16c0-.08-.01-.27-.07-.4-.08-.2-.2-.34-.75-.4-.2-.03-1.37-.05-1.59-.05-.06 0-.08.03-.08.1v2.85c0 .08.01.12.08.12.25 0 1.53 0 1.8-.02.26-.02.43-.06.53-.17.08-.1.12-.15.18-.15.04 0 .08.03.08.1 0 .06-.06.24-.1.81l-.04.75c0 .1 0 .21-.1.21-.08 0-.1-.04-.1-.1-.01-.1-.01-.25-.05-.4-.05-.22-.2-.4-.62-.44-.22-.02-1.32-.03-1.6-.03-.05 0-.06.05-.06.11v2.63c.02.77.2.94 1.35.94.29 0 .76 0 1.05-.14.29-.13.42-.37.5-.83.02-.12.05-.16.12-.16.1 0 .1.08.1.2 0 .25-.1 1.02-.15 1.24-.08.3-.18.3-.6.3-1.7 0-2.45-.07-3.1-.07l-1.42.03c-.14 0-.22-.03-.22-.11 0-.06.04-.1.18-.1.17 0 .3-.01.4-.04.22-.04.28-.29.33-.61.05-.48.05-1.36.05-2.4v-1.97m8.22 5.1c-.18-.08-.22-.14-.22-.39 0-.61.05-1.29.06-1.47.01-.16.05-.29.13-.29.1 0 .12.1.12.2 0 .14.04.38.1.57.24.83.9 1.13 1.6 1.13 1 0 1.5-.69 1.5-1.28 0-.55-.17-1.08-1.1-1.8l-.51-.4c-1.24-.96-1.66-1.75-1.66-2.66 0-1.23 1.03-2.11 2.58-2.11.73 0 1.2.1 1.5.19.1.02.15.05.15.13 0 .15-.05.47-.05 1.35 0 .24-.03.33-.12.33-.08 0-.11-.06-.11-.2 0-.1-.06-.45-.3-.74-.16-.21-.48-.55-1.21-.55-.83 0-1.33.48-1.33 1.16 0 .51.25.9 1.18 1.61l.32.24c1.34 1.04 1.83 1.79 1.83 2.86 0 .65-.24 1.42-1.05 1.95-.56.36-1.19.46-1.78.46-.65 0-1.15-.08-1.63-.3m7.66-4.1c0-1.92 1.27-4.4 4.63-4.4 2.78 0 4.52 1.63 4.52 4.2 0 2.57-1.8 4.6-4.63 4.6-3.22 0-4.52-2.41-4.52-4.4m7.58.21c0-2.5-1.44-4.06-3.28-4.06-1.29 0-2.75.71-2.75 3.5 0 2.34 1.29 4.19 3.43 4.19.79 0 2.6-.39 2.6-3.63m5.3-1.2c0-1.7 0-2.01-.03-2.37-.02-.38-.1-.56-.48-.64a2.37 2.37 0 0 0-.44-.03c-.12 0-.19-.03-.19-.1 0-.09.08-.1.25-.1.6 0 1.3.03 1.64.03.26 0 .97-.04 1.37-.04.17 0 .25.02.25.1s-.07.1-.18.1c-.12 0-.2.02-.33.04-.3.05-.39.24-.41.64-.02.36-.02.67-.02 2.37v1.57c0 1.63.32 2.31.87 2.76.5.42 1.02.46 1.4.46.5 0 1.1-.16 1.54-.6.62-.62.65-1.63.65-2.78v-1.4c0-1.7 0-2.02-.02-2.38-.02-.38-.11-.56-.48-.64a2.2 2.2 0 0 0-.4-.03c-.13 0-.2-.03-.2-.1 0-.09.08-.1.24-.1.57 0 1.28.03 1.29.03.13 0 .84-.04 1.27-.04.16 0 .24.02.24.1s-.07.1-.2.1c-.12 0-.2.02-.33.04-.3.05-.39.24-.41.64-.02.36-.02.67-.02 2.37v1.2c0 1.25-.13 2.57-1.07 3.38-.8.68-1.6.8-2.32.8-.6 0-1.67-.03-2.49-.77-.57-.51-1-1.34-1-2.97v-1.64m11.78 0c0-1.7 0-2.01-.02-2.37-.03-.38-.12-.56-.48-.64a2.37 2.37 0 0 0-.44-.03c-.12 0-.2-.03-.2-.1 0-.09.09-.1.25-.1.6 0 1.3.03 1.54.03l1.58-.04c.7 0 1.45.07 2.06.48.31.22.76.8.76 1.54 0 .83-.35 1.6-1.48 2.51 1 1.26 1.77 2.26 2.43 2.95.63.65 1.08.73 1.25.76.12.03.23.04.32.04s.13.03.13.09c0 .09-.08.1-.21.1h-1.07c-.62 0-.9-.05-1.2-.2-.47-.26-.9-.79-1.53-1.65-.44-.62-.96-1.38-1.1-1.55-.06-.07-.13-.08-.2-.08l-.98-.02c-.06 0-.09.02-.09.09v.16c0 1.04 0 1.92.06 2.4.03.32.1.57.43.61.17.03.42.05.55.05.09 0 .14.03.14.09 0 .08-.08.1-.23.1l-1.64-.02-1.37.03c-.15 0-.22-.03-.22-.11 0-.06.04-.1.18-.1.16 0 .3-.01.4-.04.22-.04.28-.29.32-.61.06-.48.06-1.36.06-2.4v-1.97m1.32.9c0 .11.02.16.1.2a3 3 0 0 0 .85.1c.45 0 .6-.04.8-.19.33-.24.66-.76.66-1.68 0-1.6-1.06-2.05-1.72-2.05-.28 0-.48.01-.59.05-.08.02-.1.06-.1.15v3.41m9 3.27a4.24 4.24 0 0 1-1.39-3.3c0-.77.24-2.09 1.31-3.07.8-.75 1.87-1.2 3.54-1.2.7 0 1.1.05 1.62.12.43.05.78.16 1.12.19.12.01.17.07.17.14 0 .08-.04.22-.06.61-.02.37-.01.99-.03 1.21-.01.17-.03.26-.14.26-.09 0-.1-.1-.1-.25a1.6 1.6 0 0 0-.45-1.03c-.37-.4-1.24-.7-2.27-.7-.97 0-1.6.25-2.1.7-.82.75-1.03 1.82-1.03 2.9 0 2.67 2.02 4 3.53 4 1 0 1.6-.12 2.04-.63.2-.22.34-.54.38-.74.04-.18.06-.23.15-.23.08 0 .1.08.1.17 0 .14-.13 1.11-.25 1.5-.05.18-.1.24-.29.32-.45.18-1.3.26-2.01.26a5.6 5.6 0 0 1-3.84-1.23m10.54-4.16c0-1.7 0-2.01-.02-2.37-.02-.38-.11-.56-.48-.64a2.35 2.35 0 0 0-.44-.03c-.12 0-.19-.03-.19-.1 0-.09.08-.1.25-.1.6 0 1.3.03 1.61.03.36 0 2.58 0 2.8-.02l.48-.06c.06-.01.12-.05.18-.05.05 0 .07.05.07.1 0 .08-.06.22-.1.73 0 .12-.03.6-.05.74-.01.06-.03.13-.11.13s-.1-.06-.1-.16c0-.08-.01-.27-.07-.4-.08-.2-.19-.34-.75-.4a35.7 35.7 0 0 0-1.59-.05c-.05 0-.08.03-.08.1v2.85c0 .08.01.12.08.12.25 0 1.53 0 1.8-.02.26-.02.43-.06.53-.17.08-.1.12-.15.18-.15.04 0 .08.03.08.1 0 .06-.06.24-.1.81l-.04.75c0 .1 0 .21-.1.21-.08 0-.1-.04-.1-.1-.01-.1-.01-.25-.04-.4-.06-.22-.22-.4-.63-.44-.21-.02-1.32-.03-1.59-.03-.06 0-.07.05-.07.11v2.63c.03.77.2.94 1.35.94.29 0 .76 0 1.05-.14.29-.13.42-.37.5-.83.02-.12.05-.16.12-.16.1 0 .1.08.1.2 0 .25-.1 1.02-.15 1.24-.08.3-.18.3-.6.3-1.7 0-2.45-.07-3.1-.07l-1.42.03c-.14 0-.22-.03-.22-.11 0-.06.04-.1.18-.1.17 0 .3-.01.4-.04.23-.04.28-.29.33-.61.05-.48.05-1.36.05-2.4v-1.97m8.55 4.88c-.18-.08-.2-.14-.2-.38 0-.62.04-1.3.05-1.47 0-.17.04-.3.13-.3.1 0 .11.11.11.2 0 .14.05.38.1.57.25.83.91 1.13 1.6 1.13 1.01 0 1.5-.68 1.5-1.28 0-.54-.16-1.07-1.1-1.79l-.5-.4c-1.24-.97-1.66-1.75-1.66-2.66 0-1.23 1.03-2.12 2.58-2.12.73 0 1.2.11 1.5.2.1.01.15.05.15.13 0 .14-.05.47-.05 1.34 0 .25-.03.34-.12.34-.08 0-.11-.07-.11-.2 0-.1-.06-.45-.3-.74-.16-.22-.49-.55-1.21-.55-.83 0-1.33.48-1.33 1.15 0 .52.25.9 1.18 1.62l.31.23c1.35 1.04 1.84 1.8 1.84 2.86 0 .65-.25 1.42-1.05 1.95-.56.36-1.19.46-1.78.46-.65 0-1.15-.08-1.64-.29M58.31 40.78c0-1.7 0-2.02-.02-2.38-.02-.38-.13-.57-.38-.63a1.6 1.6 0 0 0-.4-.04c-.11 0-.18-.03-.18-.12 0-.06.09-.09.27-.09.42 0 1.13.04 1.45.04.28 0 .94-.04 1.37-.04.14 0 .23.03.23.1 0 .08-.06.1-.18.1-.1 0-.2.02-.33.04-.3.06-.4.25-.42.64-.02.36-.02.67-.02 2.38v1.97c0 1.09 0 1.97.05 2.46.03.3.1.5.44.54.16.03.4.05.57.05.13 0 .18.03.18.09 0 .08-.09.11-.2.11-.75 0-1.45-.03-1.76-.03l-1.4.03c-.15 0-.23-.03-.23-.11 0-.06.05-.1.18-.1.17 0 .3-.01.4-.04.23-.04.3-.23.33-.56.05-.47.05-1.35.05-2.44v-1.97m7.45 3.7c.02.87.16 1.16.39 1.24.19.07.4.08.58.08.12 0 .2.02.2.09 0 .09-.1.11-.27.11-.72 0-1.17-.03-1.38-.03-.1 0-.63.03-1.21.03-.15 0-.25-.01-.25-.11 0-.07.07-.1.18-.1.14 0 .35 0 .5-.05.3-.09.34-.41.35-1.39l.1-6.64c0-.22.03-.38.15-.38s.22.15.41.35c.14.15 1.84 1.98 3.47 3.6.76.76 2.27 2.38 2.46 2.56h.06l-.11-5.04c-.02-.68-.11-.9-.38-1-.17-.07-.44-.07-.6-.07-.13 0-.18-.04-.18-.1 0-.1.13-.1.3-.1.58 0 1.11.03 1.35.03.12 0 .55-.04 1.1-.04.14 0 .25.02.25.1 0 .07-.06.1-.2.1-.1 0-.2 0-.33.04-.32.09-.4.33-.42.95l-.12 7.08c0 .24-.05.35-.15.35-.12 0-.25-.13-.38-.25-.7-.67-2.13-2.14-3.3-3.3-1.22-1.2-2.46-2.61-2.66-2.82h-.04l.13 4.7m11.11 1.4c-.18-.08-.21-.14-.21-.39 0-.61.04-1.28.05-1.46.02-.17.05-.3.14-.3.1 0 .11.1.11.2 0 .14.05.38.1.57.25.83.9 1.13 1.6 1.13 1.01 0 1.5-.68 1.5-1.28 0-.55-.17-1.07-1.1-1.8l-.51-.4c-1.23-.96-1.66-1.75-1.66-2.65 0-1.24 1.03-2.12 2.59-2.12.73 0 1.2.11 1.49.19.1.02.15.05.15.13 0 .15-.04.47-.04 1.35 0 .24-.03.34-.12.34-.08 0-.12-.07-.12-.2 0-.1-.05-.46-.29-.75-.16-.2-.49-.55-1.22-.55-.82 0-1.33.49-1.33 1.16 0 .51.26.9 1.19 1.61l.31.24c1.34 1.04 1.84 1.8 1.84 2.86 0 .65-.25 1.42-1.06 1.95-.55.36-1.18.46-1.77.46-.65 0-1.16-.08-1.64-.3m10.38-7.7l-1.67.04c-.65.02-.92.08-1.09.32-.1.17-.16.3-.19.4-.02.08-.05.13-.12.13-.08 0-.1-.06-.1-.18 0-.18.21-1.2.23-1.29.04-.14.07-.21.14-.21.09 0 .2.11.48.13.32.04.75.06 1.12.06h4.43c.72 0 .99-.11 1.07-.11.08 0 .1.06.1.23l-.04 1.3c-.01.11-.03.18-.1.18-.09 0-.11-.05-.12-.22l-.01-.13c-.03-.29-.33-.6-1.32-.62l-1.42-.04v4.6c0 1.03 0 1.92.06 2.4.03.31.1.56.44.6.16.03.4.05.57.05.12 0 .18.03.18.09 0 .08-.1.11-.21.11-.74 0-1.45-.03-1.76-.03L86.5 46c-.15 0-.23-.03-.23-.11 0-.06.05-.1.18-.1.17 0 .3-.01.4-.04.23-.04.3-.29.33-.61.06-.47.06-1.36.06-2.4v-4.59m8.21 2.63c0-1.7 0-2.02-.02-2.38-.02-.38-.14-.57-.38-.63a1.6 1.6 0 0 0-.4-.04c-.12 0-.18-.03-.18-.12 0-.06.09-.09.27-.09.42 0 1.13.04 1.45.04.28 0 .94-.04 1.37-.04.14 0 .23.03.23.1 0 .08-.07.1-.18.1-.11 0-.2.02-.33.04-.3.06-.4.25-.42.64-.02.36-.02.67-.02 2.38v1.97c0 1.09 0 1.97.05 2.46.03.3.1.5.44.54.16.03.4.05.57.05.13 0 .18.03.18.09 0 .08-.09.11-.21.11-.74 0-1.44-.03-1.75-.03l-1.4.03c-.15 0-.23-.03-.23-.11 0-.06.04-.1.18-.1.17 0 .3-.01.4-.04.22-.04.3-.23.33-.56.05-.47.05-1.35.05-2.44v-1.97m8.3-2.63l-1.66.05c-.65.02-.92.08-1.09.32-.1.17-.17.3-.19.4-.02.08-.05.13-.12.13-.08 0-.1-.06-.1-.18 0-.18.21-1.2.23-1.29.04-.14.07-.21.14-.21.09 0 .2.11.48.13.32.04.75.06 1.12.06H107c.72 0 .99-.11 1.08-.11.07 0 .09.06.09.23l-.04 1.3c0 .11-.03.18-.1.18-.09 0-.11-.05-.12-.22l-.01-.13c-.03-.29-.33-.6-1.32-.62l-1.41-.04v4.6c0 1.03 0 1.92.05 2.4.04.31.1.56.44.6.15.03.4.05.57.05.12 0 .18.03.18.09 0 .08-.1.11-.21.11-.74 0-1.45-.03-1.76-.03l-1.41.03c-.15 0-.23-.03-.23-.11 0-.06.05-.1.18-.1.17 0 .3-.01.4-.04.23-.04.3-.29.33-.61.06-.47.06-1.36.06-2.4v-4.59m7.73 2.63c0-1.7 0-2.02-.02-2.38-.02-.38-.11-.56-.48-.64a2.27 2.27 0 0 0-.44-.03c-.12 0-.19-.03-.19-.1 0-.08.08-.1.25-.1.59 0 1.3.03 1.63.03.27 0 .97-.04 1.38-.04.17 0 .24.03.24.1 0 .08-.06.1-.17.1-.13 0-.2.02-.33.04-.3.06-.4.25-.42.64-.02.36-.02.67-.02 2.38v1.57c0 1.62.33 2.3.88 2.75.5.42 1.01.46 1.4.46.49 0 1.1-.15 1.54-.6.61-.62.65-1.63.65-2.78v-1.4c0-1.7 0-2.02-.02-2.38-.03-.38-.12-.56-.48-.64-.1-.02-.28-.03-.4-.03-.13 0-.2-.03-.2-.1 0-.08.08-.1.24-.1.57 0 1.27.03 1.28.03.14 0 .84-.04 1.28-.04.16 0 .24.03.24.1 0 .08-.07.1-.2.1s-.2.02-.33.04c-.3.06-.4.25-.41.64-.03.36-.03.67-.03 2.38v1.2c0 1.24-.12 2.56-1.06 3.37-.8.68-1.6.8-2.33.8-.6 0-1.67-.03-2.48-.77-.57-.51-1-1.34-1-2.97v-1.63m13.27-2.63l-1.67.05c-.65.02-.92.08-1.09.32-.11.17-.17.3-.19.4-.02.08-.06.13-.12.13-.08 0-.1-.06-.1-.18 0-.18.2-1.2.23-1.29.04-.14.07-.21.14-.21.09 0 .2.11.48.13.32.04.75.06 1.12.06H128c.71 0 .98-.11 1.07-.11.08 0 .1.06.1.23l-.04 1.3c-.01.11-.03.18-.1.18-.1 0-.11-.05-.12-.22l-.02-.13c-.02-.29-.32-.6-1.32-.62l-1.4-.04v4.6c0 1.03 0 1.92.05 2.4.03.31.1.56.44.6.15.03.4.05.57.05.12 0 .18.03.18.09 0 .08-.1.11-.22.11-.74 0-1.44-.03-1.75-.03l-1.42.03c-.14 0-.22-.03-.22-.11 0-.06.05-.1.18-.1.17 0 .3-.01.4-.04.23-.04.3-.29.33-.61.06-.47.06-1.36.06-2.4v-4.59m8.2 2.63l-.01-2.38c-.03-.38-.12-.56-.48-.64a2.28 2.28 0 0 0-.44-.03c-.12 0-.2-.03-.2-.1 0-.08.09-.1.25-.1.6 0 1.3.03 1.62.03l2.8-.01.48-.07c.05-.01.12-.04.17-.04.06 0 .07.04.07.1 0 .07-.05.2-.09.72 0 .12-.03.61-.05.74-.01.06-.04.13-.12.13-.07 0-.1-.06-.1-.16 0-.08 0-.27-.06-.4-.08-.2-.2-.34-.75-.4-.2-.03-1.37-.05-1.6-.05-.05 0-.07.03-.07.11v2.84c0 .08.01.12.08.12.24 0 1.53 0 1.79-.02.27-.02.43-.06.54-.17.07-.09.12-.14.17-.14.05 0 .08.02.08.09 0 .06-.05.24-.09.81l-.04.75c0 .1 0 .22-.1.22-.08 0-.1-.05-.1-.1-.01-.12-.01-.26-.05-.4-.05-.23-.21-.4-.62-.44a34.1 34.1 0 0 0-1.6-.04c-.05 0-.06.05-.06.11v2.63c.02.77.2.94 1.34.94.3 0 .76 0 1.05-.14.3-.13.43-.37.5-.83.03-.12.05-.16.13-.16.1 0 .1.09.1.2 0 .26-.1 1.02-.15 1.24-.08.3-.18.3-.6.3-1.7 0-2.45-.07-3.1-.07l-1.42.03c-.15 0-.22-.03-.22-.11 0-.06.04-.1.18-.1.16 0 .3-.01.4-.04.22-.04.28-.29.32-.61.06-.47.06-1.36.06-2.4v-1.96"/></g></svg>\n      </a>\n    </div>\n    <div class="m-footer-logos slider js_slider" id="my-gfw-slider">\n      <p>Partners</p>\n      <div class="frame js_frame">\n        <ul class="slides js_slides">\n          <li class="js_slide"><a target="_blank" rel="noreferrer" title="Agence française de développement international" href="http://www.afd.fr/home"><img src="https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/logos/afc.png" /></a></li>\n          <li class="js_slide"><a target="_blank" rel="noreferrer" title="Airbus" href="http://airbusdefenceandspace.com/"><img src="https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/logos/airbus.png" /></a></li>\n          <li class="js_slide"><a target="_blank" rel="noreferrer" title="Agro satélite" href="http://agrosatelite.com.br/"><img src="https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/logos/agrosatelite.png" /></a></li>\n          <li class="js_slide"><a target=\'_blank\' rel="noreferrer" title="Astro Digital" href=\'https://astrodigital.com/\'><img src="https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/logos/astrodigital.png" /></a></li>\n        </ul>\n      </div>\n      <span class="js_prev prev"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-footer-arrow"></use></svg></span>\n      <span class="js_next next"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#gfw-header-icon-footer-arrow"></use></svg></span>\n    </div>\n  </div>\n  <div class="m-footer-terms">\n    <a href="/terms">Terms of Service</a> ·\n    <a href="/privacy-policy">Privacy Policy</a> ·\n  </div>\n</div>\n';

	}
	return __p
	}

/***/ }),
/* 350 */
/***/ (function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <symbol id="gfw-header-icon-footer-arrow" viewBox="0 0 21 32">\n      <title>footer-arrow</title>\n      <path d="M19.733 3.733l-3.733-3.733-16 16 16 16 3.733-3.733-12.267-12.267z"></path>\n    </symbol>\n    <symbol id="gfw-header-icon-contact" viewBox="0 0 32 32">\n      <title>discussion forum</title>\n      <path d="M2 0h28c1.2 0 2 0.8 2 2v20c0 1.2-0.8 2-2 2h-10l-12 8v-8h-6c-1.2 0-2-0.8-2-2v-20c0-1.2 0.8-2 2-2z"></path>\n    </symbol>\n    <symbol id="gfw-header-icon-facebook" viewBox="0 0 20 32">\n      <title>facebook</title>\n      <path d="M6.109 32v-13.964h-6.109v-6.109h5.964v-3.927c0-5.382 3.345-8 8.145-8 2.327 0 4.218 0.145 4.8 0.291v5.527h-3.345c-2.473 0.145-3.055 1.309-3.055 3.2v3.055h7.418l-2.036 5.964h-5.382v13.964h-6.4z"></path>\n    </symbol>\n    <symbol id="gfw-header-icon-instagram" viewBox="0 0 32 32">\n      <title>instagram</title>\n      <path d="M28.945 25.745c0 1.745-1.309 3.055-3.055 3.055h-19.636c-1.745 0-3.055-1.309-3.055-3.055v-13.091h4.8c-0.582 1.018-0.727 2.182-0.727 3.345 0 4.8 3.927 8.727 8.727 8.727s8.727-3.927 8.727-8.727c0-1.164-0.291-2.327-0.582-3.345h4.8v13.091zM11.491 12.655c1.018-1.455 2.618-2.327 4.509-2.327s3.491 0.873 4.509 2.327c0.727 0.873 1.018 2.036 1.018 3.345 0 3.055-2.473 5.673-5.673 5.673-3.055 0-5.673-2.473-5.673-5.673 0.145-1.164 0.582-2.327 1.309-3.345v0zM27.636 3.636h0.727v5.382h-5.382v-5.382h4.655zM25.745 0h-19.491c-3.491 0-6.255 2.764-6.255 6.255v19.636c0 3.345 2.764 6.109 6.255 6.109h19.636c3.345 0 6.255-2.764 6.255-6.255v-19.491c-0.145-3.491-2.909-6.255-6.4-6.255v0z"></path>\n    </symbol>\n    <symbol id="gfw-header-icon-twitter" viewBox="0 0 40 32">\n      <title>twitter</title>\n      <path d="M39.36 3.68c-1.44 0.8-2.88 0.96-4.64 1.28 1.76-0.96 2.88-2.4 3.52-4.48-1.44 0.96-3.2 1.44-5.12 1.92-1.6-1.44-3.84-2.4-6.080-2.4-4.16 0-7.84 3.68-7.84 8.16 0 0.8 0 1.28 0.32 1.76-6.72-0.32-12.8-3.52-16.8-8.48-0.8 1.28-0.96 2.56-0.96 4.16 0 2.72 1.44 5.12 3.68 6.72-1.28 0-2.4-0.48-3.68-0.96 0 4 2.72 7.2 6.4 7.84-0.8 0.32-1.44 0.32-2.24 0.32-0.48 0-0.96 0-1.44-0.32 0.96 3.2 4 5.6 7.68 5.6-2.72 2.24-6.080 3.52-10.080 3.52-0.8 0-1.28 0-1.92 0 3.52 2.24 7.68 3.68 12.16 3.68 14.72 0 22.88-12.32 22.88-22.88 0-0.32 0-0.8 0-0.96 1.76-1.28 3.2-2.72 4.16-4.48z"></path>\n    </symbol>\n    <symbol id="gfw-header-icon-youtube" viewBox="0 0 32 32">\n      <title>youtube</title>\n      <path d="M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"></path>\n    </symbol>\n  </defs>\n</svg>\n';

	}
	return __p
	}

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _facade = __webpack_require__(335);

	var _facade2 = _interopRequireDefault(_facade);

	var _utils = __webpack_require__(338);

	var _utils2 = _interopRequireDefault(_utils);

	var _contact = __webpack_require__(352);

	var _contact2 = _interopRequireDefault(_contact);

	var _validate2 = __webpack_require__(353);

	var _validate3 = _interopRequireDefault(_validate2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var topics = {
	  'report-a-bug-or-error-on-gfw': {
	    name: 'Report a bug or error on GFW',
	    placeholder: 'Explain the bug or error and tell us where on the website you encountered it. What browser (e.g., Chrome version 50.0.2661.94 m) and operating system (e.g., Windows 8.1) do you use?'
	  },
	  'provide-feedback': {
	    name: 'Provide feedback',
	    placeholder: 'Tell us about your experience with GFW! Examples: How can we improve GFW? Why did you visit GFW? How do you use GFW? If and how is the information provided by GFW useful for your work? Are there any additional features and/or data that would be useful?  Was anything confusing or difficult to use?  Etc...'
	  },
	  'media-request': {
	    name: 'Media request',
	    placeholder: 'How can we help you?'
	  },
	  'data-related-inquiry': {
	    name: 'Data-related inquiry or suggestion',
	    placeholder: 'How can we help you?'
	  },
	  'gfw-commodities-inquiry': {
	    name: 'GFW Commodities inquiry',
	    placeholder: 'How can we help you?'
	  },
	  'gfw-fires-inquiry': {
	    name: 'GFW Fires inquiry',
	    placeholder: 'How can we help you?'
	  },
	  'gfw-climate-inquiry': {
	    name: 'GFW Climate inquiry',
	    placeholder: 'How can we help you?'
	  },
	  'gfw-water-inquiry': {
	    name: 'GFW Water inquiry',
	    placeholder: 'How can we help you?'
	  },
	  'general-inquiry': {
	    name: 'General inquiry',
	    placeholder: 'How can we help you?'
	  }
	};

	var constraints = {
	  'email': {
	    presence: true,
	    email: true
	  },
	  'topic': {
	    presence: true
	  },
	  'message': {
	    presence: true
	  }
	};

	/**
	 * Contact
	 * @param  {window} root
	 * @return {Class}
	 */

	var Contact = function () {
	  function Contact() {
	    _classCallCheck(this, Contact);

	    this.el = document.createElement('div');
	    this.el.id = 'contactGfw';

	    document.body.appendChild(this.el);

	    this.render();
	  }

	  _createClass(Contact, [{
	    key: 'render',
	    value: function render() {
	      this.el.innerHTML = (0, _contact2.default)();

	      this.initVars();
	      this.setListeners();
	      this.checkForParams();

	      return this;
	    }
	  }, {
	    key: 'initVars',
	    value: function initVars() {
	      this.$window = window;
	      this.$document = (0, _facade2.default)(document);
	      this.$body = (0, _facade2.default)('body');
	      this.$htmlbody = (0, _facade2.default)('html, body');
	      this.$el = (0, _facade2.default)('#contactModalGfw');

	      this.$content = this.$el.find('.modal-content');
	      this.$contentWrapper = this.$el.find('.modal-wrapper');
	      this.$backdrop = this.$el.find('.modal-backdrop');
	      this.$close = this.$el.find('.modal-close');
	      this.$spinner = this.$el.find('.modal-spinner');

	      this.$modalStep = this.$el.find('.modal-step');
	      this.$modalStepBtn = this.$el.find('.modal-step-btn');

	      this.$form = this.$el.find('#contact-form');
	      this.$contactEmail = this.$el.find('#email');
	      this.$contactTopic = this.$el.find('#topic');
	      this.$contactMessage = this.$el.find('#message');

	      this.hidden = true;
	      this.errors = {};
	    }
	  }, {
	    key: 'setListeners',
	    value: function setListeners() {
	      this.$body.on('click', '.contact-link', this.show.bind(this));
	      this.$body.on('click', '.feedback-link', this.showFeedback.bind(this));
	      this.$body.on('click', '.newsletter-link', this.showNewsletter.bind(this));
	      this.$body.on('click', '.js-footer-newsletter', this.showNewsletter.bind(this));
	      this.$body.on('click', '.js-footer-contact-us', this.showContactUs.bind(this));
	      this.$body.on('click', '.data-suggestion-link', this.showDataSuggestion.bind(this));

	      this.$el.on('click', '.js-btn-submit', this.actionSubmit.bind(this));

	      this.$el.on('click', '.js-btn-close', this.hide.bind(this));
	      this.$el.on('click', '.js-modal-close', this.hide.bind(this));

	      this.$el.on('change', 'input, textarea, select', this.changeInput.bind(this));

	      this.$el.on('change', '#topic', this.changeTopic.bind(this));

	      // Newsletter
	      this.$el.on('click', '.js-newsletter-sign-up', this.showNewsletter.bind(this));
	    }

	    /**
	     * Show & hide & toggle
	     * @param  {e} event
	     * @return {}
	     */

	  }, {
	    key: 'show',
	    value: function show(e) {
	      e && e.preventDefault() && e.stopPropagation();
	      this.hidden = false;
	      this.toggle();
	      this.$contactTopic.val(null);
	      window.history.pushState('Show contact', document.title, this.toggleParam('show_contact', true));
	    }
	  }, {
	    key: 'showDataSuggestion',
	    value: function showDataSuggestion(e) {
	      e && e.preventDefault() && e.stopPropagation();
	      this.show();
	      this.$contactTopic.val('data-related-inquiry');
	      this.$contactTopic.trigger("change");
	    }
	  }, {
	    key: 'showFeedback',
	    value: function showFeedback(e) {
	      e && e.preventDefault() && e.stopPropagation();
	      this.show();
	      this.$contactTopic.val('provide-feedback');
	      this.$contactTopic.trigger("change");
	    }
	  }, {
	    key: 'showNewsletter',
	    value: function showNewsletter(e) {
	      e && e.preventDefault() && e.stopPropagation();
	      this.changeStep('newsletter');
	      this.hidden = false;
	      this.toggle();
	      window.history.pushState('Show newsletter', document.title, this.toggleParam('show_newsletter', true));
	    }
	  }, {
	    key: 'showContactUs',
	    value: function showContactUs(e) {
	      e && e.preventDefault() && e.stopPropagation();
	      this.changeStep('contact');
	      this.hidden = false;
	      this.toggle();
	      window.history.pushState('Show contact us', document.title, this.toggleParam('show_contact', true));
	    }
	  }, {
	    key: 'hide',
	    value: function hide(e) {
	      e && e.preventDefault();
	      this.hidden = true;
	      this.toggle();
	      this.removeParamsFromURL();

	      //Give back scroll beyond modal window.
	      // this.$htmlbody.removeClass('-no-scroll');
	      this.changeStep('contact');

	      return this;
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      !!this.hidden ? this.stopBindings() : this.initBindings();
	      this.$el.toggleClass('-active', !this.hidden);
	      //Prevent scroll beyond modal window.
	      // this.$htmlbody.toggleClass('-no-scroll', !this.hidden);
	      this.$contentWrapper[0].scrollTop = 0;
	    }
	  }, {
	    key: 'removeParamsFromURL',
	    value: function removeParamsFromURL() {
	      var params = ['show_contact', 'show_newsletter'];
	      var url = window.location.href;

	      for (var x = 0; x < params.length; x++) {
	        url = this.toggleParam(params[x], null, url);
	      }

	      window.history.pushState('Hide params', document.title, url);
	    }

	    /**
	     * Init bindings & stopBindings
	     * @param  {}
	     * @return {}
	     */

	  }, {
	    key: 'initBindings',
	    value: function initBindings() {
	      var _this = this;

	      // document keyup
	      this.$document.on('keyup.contact', function (e) {
	        if (e.keyCode === 27) {
	          _this.hide();
	        }
	      });
	      // backdrop
	      this.$backdrop.on('click', function () {
	        _this.hide();
	      });
	    }
	  }, {
	    key: 'stopBindings',
	    value: function stopBindings() {
	      // Test this namespace
	      this.$document.off('keyup.contact');
	      this.$backdrop.off('click');
	    }

	    /**
	     * Check params. If show_contact is present we automatically show the contact modal
	     * @param  {}
	     * @return {}
	     */

	  }, {
	    key: 'checkForParams',
	    value: function checkForParams() {
	      var params = this.getQueryParams();
	      if (!!params) {
	        if (!!params['show_contact']) {
	          this.show();
	        } else if (!!params['show_newsletter']) {
	          this.showNewsletter();
	        }
	      }
	    }

	    /**
	     * UI Events inside the contact modal
	     * - actionSubmit: validate form before send it
	     */

	  }, {
	    key: 'actionSubmit',
	    value: function actionSubmit(e) {
	      e && e.preventDefault();
	      this.validate() ? this.sendForm() : this.updateForm();
	    }

	    // Send the data to the API

	  }, {
	    key: 'sendForm',
	    value: function sendForm() {
	      var _this2 = this;

	      // Production send request
	      // Send request
	      this.$spinner.addClass('-active');
	      var xhr = new XMLHttpRequest();
	      xhr.open('POST', _utils2.default.getAPIHost(true) + '/form/contact-us');
	      xhr.withCredentials = true;
	      xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

	      xhr.onload = function () {
	        if (xhr.status === 200 || xhr.status === 201 || xhr.status === 204) {
	          this.changeStep('success');
	          this.resetForm();
	          this.$spinner.removeClass('-active');
	        } else {
	          this.changeStep('error');
	          this.$spinner.removeClass('-active');
	        }
	      }.bind(this);

	      xhr.onerror = function () {
	        _this2.changeStep('error');
	        _this2.$spinner.removeClass('-active');
	      };

	      var form = _facade2.default.serialize(this.$form[0]);
	      form.language = _utils2.default.getTransifexLanguage();
	      xhr.send(JSON.stringify(form));

	      // Develop Send request
	      // Comment this code if this is going to pro
	      // if (true) {
	      //   this.changeStep('success');
	      //   this.$spinner.removeClass('-active');
	      // } else {
	      //   this.changeStep('error');
	      //   this.$spinner.removeClass('-active');
	      // }
	    }
	  }, {
	    key: 'updateForm',
	    value: function updateForm() {
	      this.$form.find('input, textarea, select').removeClass('-error');
	      this.$form.find('label').removeClass('-error');
	      for (var key in this.errors) {
	        var $input = this.$form.find('#' + key);
	        var $label = this.$form.find('label[for=' + key + ']');
	        $input.addClass('-error');
	        $label.addClass('-error');
	      }
	    }
	  }, {
	    key: 'resetForm',
	    value: function resetForm() {
	      this.$form.find('input, textarea, select').val(null);
	    }
	  }, {
	    key: 'validate',
	    value: function validate(e) {
	      e && e.preventDefault();
	      var attributes = _facade2.default.serialize(this.$form[0]);

	      // Validate form, if is valid the response will be undefined
	      this.errors = (0, _validate3.default)(attributes, constraints);
	      return !!!this.errors;
	    }
	  }, {
	    key: 'validateInput',
	    value: function validateInput(name, value) {
	      var errors = _validate3.default.single(value, constraints[name]);
	      if (!!errors) {
	        this.errors[name] = errors[0];
	      } else {
	        this.errors && this.errors[name] && delete this.errors[name];
	      }
	    }
	  }, {
	    key: 'changeInput',
	    value: function changeInput(e) {
	      e && e.preventDefault();
	      this.validateInput(e.currentTarget.name, e.currentTarget.value);
	      this.updateForm();
	    }

	    /**
	     * Change Events
	     * - changeStep: change step of the modal
	     * @param  {step} number
	      * - changeTopic: change topic of the modal
	     * @param  {step} number
	     */

	  }, {
	    key: 'changeStep',
	    value: function changeStep(step) {
	      // TO-DO: This is not working because we need to scroll the container, not the document
	      // this.$contentWrapper.scrollTop(0);
	      this.$contentWrapper[0].scrollTop = 0;

	      this.$modalStep.removeClass('-active');
	      this.$modalStepBtn.removeClass('-active');

	      // Set actives
	      this.$el.find('.modal-step[data-step="' + step + '"]').addClass('-active');
	      this.$el.find('.modal-step-btn[data-step="' + step + '"]').addClass('-active');
	    }
	  }, {
	    key: 'changeTopic',
	    value: function changeTopic(e) {
	      var topic = e.currentTarget.value;
	      if (!!topic) {
	        var placeholder = topics[topic]['placeholder'];
	        this.$contactMessage.attr('placeholder', placeholder);
	      }
	    }

	    /**
	     * Helpers
	     * Let's move this to utils helper
	     * - getQueryParams
	     * @return {Object}
	      * - toggleParam
	     * @param  {key, value, url}
	     * @return {String}
	    */

	  }, {
	    key: 'getQueryParams',
	    value: function getQueryParams() {
	      var qs = document.location.search;
	      qs = qs.split('+').join(' ');

	      var params = {},
	          re = /[?&]?([^=]+)=([^&]*)/g;
	      var tokens = void 0;

	      while (tokens = re.exec(qs)) {
	        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	      }
	      return params;
	    }
	  }, {
	    key: 'toggleParam',
	    value: function toggleParam(key, value, url) {
	      if (!url) url = window.location.href;
	      var re = new RegExp('([?&])' + key + '=.*?(&|#|$)(.*)', 'gi');
	      var hash = void 0;

	      if (re.test(url)) {
	        if (typeof value !== 'undefined' && value !== null) return url.replace(re, '$1' + key + '=' + value + '$2$3');else {
	          hash = url.split('#');
	          url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
	          if (typeof hash[1] !== 'undefined' && hash[1] !== null) url += '#' + hash[1];
	          return url;
	        }
	      } else {
	        if (typeof value !== 'undefined' && value !== null) {
	          var separator = url.indexOf('?') !== -1 ? '&' : '?';
	          hash = url.split('#');
	          url = '' + hash[0] + separator + key + '=' + value;
	          if (typeof hash[1] !== 'undefined' && hash[1] !== null) url += '#' + hash[1];
	          return url;
	        } else return url;
	      }
	    }
	  }]);

	  return Contact;
	}();

	exports.default = Contact;

/***/ }),
/* 352 */
/***/ (function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div id="contactModalGfw" class="m-modal-assets">\n  <!-- BACKDROP -->\n  <div class="modal-backdrop"></div>\n  <!-- WINDOW -->\n  <div class="modal-window">\n    <a href="#" class="modal-close js-modal-close">\n      <svg><use xlink:href="#gfw-header-icon-h-close"></use></svg>\n    </a>\n    <div class="modal-spinner js-dinamic-color"></div>\n    <div class="modal-wrapper -scroll-bar">\n      <div class="modal-content">\n        <ul class="modal-steps">\n          <!-- STEP CONTACT -->\n          <li class="modal-step -active" data-step="contact">\n            <header>\n              <h2>Contact us & feedback</h2>\n              <h3>Question, comment, request, feedback? We want to hear from you! Help us improve Global Forest Watch by completing the form below.</h3>\n            </header>\n            <div class="modal-step-content">\n              <form id="contact-form">\n                <div class="field -short">\n                  <label for="email">Email *</label>\n                  <input id="email" type="email" name="email">\n                </div>\n                <div class="field">\n                  <label for="topic">Topic *</label>\n                  <div class="m-select">\n                    <select id="topic" class="js- chosen-select default required" name="topic" data-placeholder="Please select a topic so that we can best respond">\n                      <option value=""></option>\n                      <option value="report-a-bug-or-error-on-gfw">Report a bug or error on GFW</option>\n                      <option value="provide-feedback">Provide feedback</option>\n                      <option value="media-request">Media request</option>\n                      <option value="data-related-inquiry">Data related inquiry or suggestion</option>\n                      <option value="gfw-commodities-inquiry">GFW Commodities inquiry</option>\n                      <option value="gfw-fires-inquiry">GFW Fires inquiry</option>\n                      <option value="gfw-climate-inquiry">GFW Climate inquiry</option>\n                      <option value="gfw-water-inquiry">GFW Water inquiry</option>\n                      <option value="general-inquiry">General inquiry</option>\n                    </select>\n                  </div>\n                </div>\n                <div class="field">\n                  <label for="message">Message *</label>\n                  <textarea id="message" name="message" placeholder="How can we help you?"></textarea>\n                </div>\n                <div class="field">\n                  <h3>INTERESTED IN TESTING NEW FEATURES ON GFW?</h3>\n                  <p>Sign up and become an official GFW tester!</p>\n                  <div class="radio-box">\n                    <div class="custom-radio">\n                      <input id="signup-true" type="radio" name="signup" value="true">\n                      <label for="signup-true">\n                        <span></span> Yes, sign me up.\n                      </label>\n                    </div>\n                    <div class="custom-radio">\n                      <input id="signup-false" type="radio" name="signup" value="false" checked>\n                      <label for="signup-false">\n                        <span></span> No thanks.\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </li>\n\n          <!-- STEP SUCCESS -->\n          <li class="modal-step" data-step="success">\n            <header>\n              <h2>Thank you for contacting Global Forest Watch! Check your inbox for a confirmation email.</h2>\n              <h3>Interested in getting news and updates from us?</h3>\n\n              <div class="modal-step-content">\n                <a class="btn green uppercase js-newsletter-sign-up" href="/?show_newsletter=true">Sign up for our newsletter</a>\n              </div>\n            </header>\n          </li>\n\n          <!-- STEP ERROR -->\n          <li class="modal-step" data-step="error">\n            <header>\n              <h2>We\'re sorry, </br>but something went wrong</h2>\n            </header>\n          </li>\n\n          <!-- STEP NEWSLETTER -->\n          <li class="modal-step" data-step="newsletter">\n            <header>\n              <h2>Updates and newsletters</h2>\n              <h3>Subscribe me to the GFW Newsletter!</h3>\n            </header>\n            <div class="modal-step-content">\n              <iframe scrolling="no" src="https://connect.wri.org/l/120942/2016-02-08/2trw5q" width="100%" height="900" type="text/html" frameborder="0" allowTransparency="true" style="border: 0"></iframe>\n            </div>\n          </li>\n\n        </ul>\n      </div>\n    </div>\n\n    <div class="modal-footer">\n      <span class="gradient"></span>\n      <ul class="m-btncontainer -center -steps">\n        <li>\n          <button data-step="contact" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-submit -active">Submit</button>\n          <button data-step="success" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-close">Close</button>\n          <button data-step="error" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-close">Close</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n';

	}
	return __p
	}

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * validate.js 0.10.0
	 *
	 * (c) 2013-2016 Nicklas Ansman, 2013 Wrapp
	 * Validate.js may be freely distributed under the MIT license.
	 * For all details and documentation:
	 * http://validatejs.org/
	 */

	(function(exports, module, define) {
	  "use strict";

	  // The main function that calls the validators specified by the constraints.
	  // The options are the following:
	  //   - format (string) - An option that controls how the returned value is formatted
	  //     * flat - Returns a flat array of just the error messages
	  //     * grouped - Returns the messages grouped by attribute (default)
	  //     * detailed - Returns an array of the raw validation data
	  //   - fullMessages (boolean) - If `true` (default) the attribute name is prepended to the error.
	  //
	  // Please note that the options are also passed to each validator.
	  var validate = function(attributes, constraints, options) {
	    options = v.extend({}, v.options, options);

	    var results = v.runValidations(attributes, constraints, options)
	      , attr
	      , validator;

	    for (attr in results) {
	      for (validator in results[attr]) {
	        if (v.isPromise(results[attr][validator])) {
	          throw new Error("Use validate.async if you want support for promises");
	        }
	      }
	    }
	    return validate.processValidationResults(results, options);
	  };

	  var v = validate;

	  // Copies over attributes from one or more sources to a single destination.
	  // Very much similar to underscore's extend.
	  // The first argument is the target object and the remaining arguments will be
	  // used as sources.
	  v.extend = function(obj) {
	    [].slice.call(arguments, 1).forEach(function(source) {
	      for (var attr in source) {
	        obj[attr] = source[attr];
	      }
	    });
	    return obj;
	  };

	  v.extend(validate, {
	    // This is the version of the library as a semver.
	    // The toString function will allow it to be coerced into a string
	    version: {
	      major: 0,
	      minor: 10,
	      patch: 0,
	      metadata: null,
	      toString: function() {
	        var version = v.format("%{major}.%{minor}.%{patch}", v.version);
	        if (!v.isEmpty(v.version.metadata)) {
	          version += "+" + v.version.metadata;
	        }
	        return version;
	      }
	    },

	    // Below is the dependencies that are used in validate.js

	    // The constructor of the Promise implementation.
	    // If you are using Q.js, RSVP or any other A+ compatible implementation
	    // override this attribute to be the constructor of that promise.
	    // Since jQuery promises aren't A+ compatible they won't work.
	    Promise: typeof Promise !== "undefined" ? Promise : /* istanbul ignore next */ null,

	    EMPTY_STRING_REGEXP: /^\s*$/,

	    // Runs the validators specified by the constraints object.
	    // Will return an array of the format:
	    //     [{attribute: "<attribute name>", error: "<validation result>"}, ...]
	    runValidations: function(attributes, constraints, options) {
	      var results = []
	        , attr
	        , validatorName
	        , value
	        , validators
	        , validator
	        , validatorOptions
	        , error;

	      if (v.isDomElement(attributes) || v.isJqueryElement(attributes)) {
	        attributes = v.collectFormValues(attributes);
	      }

	      // Loops through each constraints, finds the correct validator and run it.
	      for (attr in constraints) {
	        value = v.getDeepObjectValue(attributes, attr);
	        // This allows the constraints for an attribute to be a function.
	        // The function will be called with the value, attribute name, the complete dict of
	        // attributes as well as the options and constraints passed in.
	        // This is useful when you want to have different
	        // validations depending on the attribute value.
	        validators = v.result(constraints[attr], value, attributes, attr, options, constraints);

	        for (validatorName in validators) {
	          validator = v.validators[validatorName];

	          if (!validator) {
	            error = v.format("Unknown validator %{name}", {name: validatorName});
	            throw new Error(error);
	          }

	          validatorOptions = validators[validatorName];
	          // This allows the options to be a function. The function will be
	          // called with the value, attribute name, the complete dict of
	          // attributes as well as the options and constraints passed in.
	          // This is useful when you want to have different
	          // validations depending on the attribute value.
	          validatorOptions = v.result(validatorOptions, value, attributes, attr, options, constraints);
	          if (!validatorOptions) {
	            continue;
	          }
	          results.push({
	            attribute: attr,
	            value: value,
	            validator: validatorName,
	            globalOptions: options,
	            attributes: attributes,
	            options: validatorOptions,
	            error: validator.call(validator,
	                value,
	                validatorOptions,
	                attr,
	                attributes,
	                options)
	          });
	        }
	      }

	      return results;
	    },

	    // Takes the output from runValidations and converts it to the correct
	    // output format.
	    processValidationResults: function(errors, options) {
	      var attr;

	      errors = v.pruneEmptyErrors(errors, options);
	      errors = v.expandMultipleErrors(errors, options);
	      errors = v.convertErrorMessages(errors, options);

	      switch (options.format || "grouped") {
	        case "detailed":
	          // Do nothing more to the errors
	          break;

	        case "flat":
	          errors = v.flattenErrorsToArray(errors);
	          break;

	        case "grouped":
	          errors = v.groupErrorsByAttribute(errors);
	          for (attr in errors) {
	            errors[attr] = v.flattenErrorsToArray(errors[attr]);
	          }
	          break;

	        default:
	          throw new Error(v.format("Unknown format %{format}", options));
	      }

	      return v.isEmpty(errors) ? undefined : errors;
	    },

	    // Runs the validations with support for promises.
	    // This function will return a promise that is settled when all the
	    // validation promises have been completed.
	    // It can be called even if no validations returned a promise.
	    async: function(attributes, constraints, options) {
	      options = v.extend({}, v.async.options, options);

	      var WrapErrors = options.wrapErrors || function(errors) {
	        return errors;
	      };

	      // Removes unknown attributes
	      if (options.cleanAttributes !== false) {
	        attributes = v.cleanAttributes(attributes, constraints);
	      }

	      var results = v.runValidations(attributes, constraints, options);

	      return new v.Promise(function(resolve, reject) {
	        v.waitForResults(results).then(function() {
	          var errors = v.processValidationResults(results, options);
	          if (errors) {
	            reject(new WrapErrors(errors, options, attributes, constraints));
	          } else {
	            resolve(attributes);
	          }
	        }, function(err) {
	          reject(err);
	        });
	      });
	    },

	    single: function(value, constraints, options) {
	      options = v.extend({}, v.single.options, options, {
	        format: "flat",
	        fullMessages: false
	      });
	      return v({single: value}, {single: constraints}, options);
	    },

	    // Returns a promise that is resolved when all promises in the results array
	    // are settled. The promise returned from this function is always resolved,
	    // never rejected.
	    // This function modifies the input argument, it replaces the promises
	    // with the value returned from the promise.
	    waitForResults: function(results) {
	      // Create a sequence of all the results starting with a resolved promise.
	      return results.reduce(function(memo, result) {
	        // If this result isn't a promise skip it in the sequence.
	        if (!v.isPromise(result.error)) {
	          return memo;
	        }

	        return memo.then(function() {
	          return result.error.then(
	            function(error) {
	              result.error = error || null;
	            },
	            function(error) {
	              if (error instanceof Error) {
	                throw error;
	              }
	              v.error("Rejecting promises with the result is deprecated. Please use the resolve callback instead.");
	              result.error = error;
	            }
	          );
	        });
	      }, new v.Promise(function(r) { r(); })); // A resolved promise
	    },

	    // If the given argument is a call: function the and: function return the value
	    // otherwise just return the value. Additional arguments will be passed as
	    // arguments to the function.
	    // Example:
	    // ```
	    // result('foo') // 'foo'
	    // result(Math.max, 1, 2) // 2
	    // ```
	    result: function(value) {
	      var args = [].slice.call(arguments, 1);
	      if (typeof value === 'function') {
	        value = value.apply(null, args);
	      }
	      return value;
	    },

	    // Checks if the value is a number. This function does not consider NaN a
	    // number like many other `isNumber` functions do.
	    isNumber: function(value) {
	      return typeof value === 'number' && !isNaN(value);
	    },

	    // Returns false if the object is not a function
	    isFunction: function(value) {
	      return typeof value === 'function';
	    },

	    // A simple check to verify that the value is an integer. Uses `isNumber`
	    // and a simple modulo check.
	    isInteger: function(value) {
	      return v.isNumber(value) && value % 1 === 0;
	    },

	    // Checks if the value is a boolean
	    isBoolean: function(value) {
	      return typeof value === 'boolean';
	    },

	    // Uses the `Object` function to check if the given argument is an object.
	    isObject: function(obj) {
	      return obj === Object(obj);
	    },

	    // Simply checks if the object is an instance of a date
	    isDate: function(obj) {
	      return obj instanceof Date;
	    },

	    // Returns false if the object is `null` of `undefined`
	    isDefined: function(obj) {
	      return obj !== null && obj !== undefined;
	    },

	    // Checks if the given argument is a promise. Anything with a `then`
	    // function is considered a promise.
	    isPromise: function(p) {
	      return !!p && v.isFunction(p.then);
	    },

	    isJqueryElement: function(o) {
	      return o && v.isString(o.jquery);
	    },

	    isDomElement: function(o) {
	      if (!o) {
	        return false;
	      }

	      if (!o.querySelectorAll || !o.querySelector) {
	        return false;
	      }

	      if (v.isObject(document) && o === document) {
	        return true;
	      }

	      // http://stackoverflow.com/a/384380/699304
	      /* istanbul ignore else */
	      if (typeof HTMLElement === "object") {
	        return o instanceof HTMLElement;
	      } else {
	        return o &&
	          typeof o === "object" &&
	          o !== null &&
	          o.nodeType === 1 &&
	          typeof o.nodeName === "string";
	      }
	    },

	    isEmpty: function(value) {
	      var attr;

	      // Null and undefined are empty
	      if (!v.isDefined(value)) {
	        return true;
	      }

	      // functions are non empty
	      if (v.isFunction(value)) {
	        return false;
	      }

	      // Whitespace only strings are empty
	      if (v.isString(value)) {
	        return v.EMPTY_STRING_REGEXP.test(value);
	      }

	      // For arrays we use the length property
	      if (v.isArray(value)) {
	        return value.length === 0;
	      }

	      // Dates have no attributes but aren't empty
	      if (v.isDate(value)) {
	        return false;
	      }

	      // If we find at least one property we consider it non empty
	      if (v.isObject(value)) {
	        for (attr in value) {
	          return false;
	        }
	        return true;
	      }

	      return false;
	    },

	    // Formats the specified strings with the given values like so:
	    // ```
	    // format("Foo: %{foo}", {foo: "bar"}) // "Foo bar"
	    // ```
	    // If you want to write %{...} without having it replaced simply
	    // prefix it with % like this `Foo: %%{foo}` and it will be returned
	    // as `"Foo: %{foo}"`
	    format: v.extend(function(str, vals) {
	      if (!v.isString(str)) {
	        return str;
	      }
	      return str.replace(v.format.FORMAT_REGEXP, function(m0, m1, m2) {
	        if (m1 === '%') {
	          return "%{" + m2 + "}";
	        } else {
	          return String(vals[m2]);
	        }
	      });
	    }, {
	      // Finds %{key} style patterns in the given string
	      FORMAT_REGEXP: /(%?)%\{([^\}]+)\}/g
	    }),

	    // "Prettifies" the given string.
	    // Prettifying means replacing [.\_-] with spaces as well as splitting
	    // camel case words.
	    prettify: function(str) {
	      if (v.isNumber(str)) {
	        // If there are more than 2 decimals round it to two
	        if ((str * 100) % 1 === 0) {
	          return "" + str;
	        } else {
	          return parseFloat(Math.round(str * 100) / 100).toFixed(2);
	        }
	      }

	      if (v.isArray(str)) {
	        return str.map(function(s) { return v.prettify(s); }).join(", ");
	      }

	      if (v.isObject(str)) {
	        return str.toString();
	      }

	      // Ensure the string is actually a string
	      str = "" + str;

	      return str
	        // Splits keys separated by periods
	        .replace(/([^\s])\.([^\s])/g, '$1 $2')
	        // Removes backslashes
	        .replace(/\\+/g, '')
	        // Replaces - and - with space
	        .replace(/[_-]/g, ' ')
	        // Splits camel cased words
	        .replace(/([a-z])([A-Z])/g, function(m0, m1, m2) {
	          return "" + m1 + " " + m2.toLowerCase();
	        })
	        .toLowerCase();
	    },

	    stringifyValue: function(value) {
	      return v.prettify(value);
	    },

	    isString: function(value) {
	      return typeof value === 'string';
	    },

	    isArray: function(value) {
	      return {}.toString.call(value) === '[object Array]';
	    },

	    // Checks if the object is a hash, which is equivalent to an object that
	    // is neither an array nor a function.
	    isHash: function(value) {
	      return v.isObject(value) && !v.isArray(value) && !v.isFunction(value);
	    },

	    contains: function(obj, value) {
	      if (!v.isDefined(obj)) {
	        return false;
	      }
	      if (v.isArray(obj)) {
	        return obj.indexOf(value) !== -1;
	      }
	      return value in obj;
	    },

	    unique: function(array) {
	      if (!v.isArray(array)) {
	        return array;
	      }
	      return array.filter(function(el, index, array) {
	        return array.indexOf(el) == index;
	      });
	    },

	    forEachKeyInKeypath: function(object, keypath, callback) {
	      if (!v.isString(keypath)) {
	        return undefined;
	      }

	      var key = ""
	        , i
	        , escape = false;

	      for (i = 0; i < keypath.length; ++i) {
	        switch (keypath[i]) {
	          case '.':
	            if (escape) {
	              escape = false;
	              key += '.';
	            } else {
	              object = callback(object, key, false);
	              key = "";
	            }
	            break;

	          case '\\':
	            if (escape) {
	              escape = false;
	              key += '\\';
	            } else {
	              escape = true;
	            }
	            break;

	          default:
	            escape = false;
	            key += keypath[i];
	            break;
	        }
	      }

	      return callback(object, key, true);
	    },

	    getDeepObjectValue: function(obj, keypath) {
	      if (!v.isObject(obj)) {
	        return undefined;
	      }

	      return v.forEachKeyInKeypath(obj, keypath, function(obj, key) {
	        if (v.isObject(obj)) {
	          return obj[key];
	        }
	      });
	    },

	    // This returns an object with all the values of the form.
	    // It uses the input name as key and the value as value
	    // So for example this:
	    // <input type="text" name="email" value="foo@bar.com" />
	    // would return:
	    // {email: "foo@bar.com"}
	    collectFormValues: function(form, options) {
	      var values = {}
	        , i
	        , input
	        , inputs
	        , value;

	      if (v.isJqueryElement(form)) {
	        form = form[0];
	      }

	      if (!form) {
	        return values;
	      }

	      options = options || {};

	      inputs = form.querySelectorAll("input[name], textarea[name]");
	      for (i = 0; i < inputs.length; ++i) {
	        input = inputs.item(i);

	        if (v.isDefined(input.getAttribute("data-ignored"))) {
	          continue;
	        }

	        value = v.sanitizeFormValue(input.value, options);
	        if (input.type === "number") {
	          value = value ? +value : null;
	        } else if (input.type === "checkbox") {
	          if (input.attributes.value) {
	            if (!input.checked) {
	              value = values[input.name] || null;
	            }
	          } else {
	            value = input.checked;
	          }
	        } else if (input.type === "radio") {
	          if (!input.checked) {
	            value = values[input.name] || null;
	          }
	        }
	        values[input.name] = value;
	      }

	      inputs = form.querySelectorAll("select[name]");
	      for (i = 0; i < inputs.length; ++i) {
	        input = inputs.item(i);
	        value = v.sanitizeFormValue(input.options[input.selectedIndex].value, options);
	        values[input.name] = value;
	      }

	      return values;
	    },

	    sanitizeFormValue: function(value, options) {
	      if (options.trim && v.isString(value)) {
	        value = value.trim();
	      }

	      if (options.nullify !== false && value === "") {
	        return null;
	      }
	      return value;
	    },

	    capitalize: function(str) {
	      if (!v.isString(str)) {
	        return str;
	      }
	      return str[0].toUpperCase() + str.slice(1);
	    },

	    // Remove all errors who's error attribute is empty (null or undefined)
	    pruneEmptyErrors: function(errors) {
	      return errors.filter(function(error) {
	        return !v.isEmpty(error.error);
	      });
	    },

	    // In
	    // [{error: ["err1", "err2"], ...}]
	    // Out
	    // [{error: "err1", ...}, {error: "err2", ...}]
	    //
	    // All attributes in an error with multiple messages are duplicated
	    // when expanding the errors.
	    expandMultipleErrors: function(errors) {
	      var ret = [];
	      errors.forEach(function(error) {
	        // Removes errors without a message
	        if (v.isArray(error.error)) {
	          error.error.forEach(function(msg) {
	            ret.push(v.extend({}, error, {error: msg}));
	          });
	        } else {
	          ret.push(error);
	        }
	      });
	      return ret;
	    },

	    // Converts the error mesages by prepending the attribute name unless the
	    // message is prefixed by ^
	    convertErrorMessages: function(errors, options) {
	      options = options || {};

	      var ret = [];
	      errors.forEach(function(errorInfo) {
	        var error = v.result(errorInfo.error,
	            errorInfo.value,
	            errorInfo.attribute,
	            errorInfo.options,
	            errorInfo.attributes,
	            errorInfo.globalOptions);

	        if (!v.isString(error)) {
	          ret.push(errorInfo);
	          return;
	        }

	        if (error[0] === '^') {
	          error = error.slice(1);
	        } else if (options.fullMessages !== false) {
	          error = v.capitalize(v.prettify(errorInfo.attribute)) + " " + error;
	        }
	        error = error.replace(/\\\^/g, "^");
	        error = v.format(error, {value: v.stringifyValue(errorInfo.value)});
	        ret.push(v.extend({}, errorInfo, {error: error}));
	      });
	      return ret;
	    },

	    // In:
	    // [{attribute: "<attributeName>", ...}]
	    // Out:
	    // {"<attributeName>": [{attribute: "<attributeName>", ...}]}
	    groupErrorsByAttribute: function(errors) {
	      var ret = {};
	      errors.forEach(function(error) {
	        var list = ret[error.attribute];
	        if (list) {
	          list.push(error);
	        } else {
	          ret[error.attribute] = [error];
	        }
	      });
	      return ret;
	    },

	    // In:
	    // [{error: "<message 1>", ...}, {error: "<message 2>", ...}]
	    // Out:
	    // ["<message 1>", "<message 2>"]
	    flattenErrorsToArray: function(errors) {
	      return errors.map(function(error) { return error.error; });
	    },

	    cleanAttributes: function(attributes, whitelist) {
	      function whitelistCreator(obj, key, last) {
	        if (v.isObject(obj[key])) {
	          return obj[key];
	        }
	        return (obj[key] = last ? true : {});
	      }

	      function buildObjectWhitelist(whitelist) {
	        var ow = {}
	          , lastObject
	          , attr;
	        for (attr in whitelist) {
	          if (!whitelist[attr]) {
	            continue;
	          }
	          v.forEachKeyInKeypath(ow, attr, whitelistCreator);
	        }
	        return ow;
	      }

	      function cleanRecursive(attributes, whitelist) {
	        if (!v.isObject(attributes)) {
	          return attributes;
	        }

	        var ret = v.extend({}, attributes)
	          , w
	          , attribute;

	        for (attribute in attributes) {
	          w = whitelist[attribute];

	          if (v.isObject(w)) {
	            ret[attribute] = cleanRecursive(ret[attribute], w);
	          } else if (!w) {
	            delete ret[attribute];
	          }
	        }
	        return ret;
	      }

	      if (!v.isObject(whitelist) || !v.isObject(attributes)) {
	        return {};
	      }

	      whitelist = buildObjectWhitelist(whitelist);
	      return cleanRecursive(attributes, whitelist);
	    },

	    exposeModule: function(validate, root, exports, module, define) {
	      if (exports) {
	        if (module && module.exports) {
	          exports = module.exports = validate;
	        }
	        exports.validate = validate;
	      } else {
	        root.validate = validate;
	        if (validate.isFunction(define) && define.amd) {
	          define([], function () { return validate; });
	        }
	      }
	    },

	    warn: function(msg) {
	      if (typeof console !== "undefined" && console.warn) {
	        console.warn("[validate.js] " + msg);
	      }
	    },

	    error: function(msg) {
	      if (typeof console !== "undefined" && console.error) {
	        console.error("[validate.js] " + msg);
	      }
	    }
	  });

	  validate.validators = {
	    // Presence validates that the value isn't empty
	    presence: function(value, options) {
	      options = v.extend({}, this.options, options);
	      if (v.isEmpty(value)) {
	        return options.message || this.message || "can't be blank";
	      }
	    },
	    length: function(value, options, attribute) {
	      // Empty values are allowed
	      if (v.isEmpty(value)) {
	        return;
	      }

	      options = v.extend({}, this.options, options);

	      var is = options.is
	        , maximum = options.maximum
	        , minimum = options.minimum
	        , tokenizer = options.tokenizer || function(val) { return val; }
	        , err
	        , errors = [];

	      value = tokenizer(value);
	      var length = value.length;
	      if(!v.isNumber(length)) {
	        v.error(v.format("Attribute %{attr} has a non numeric value for `length`", {attr: attribute}));
	        return options.message || this.notValid || "has an incorrect length";
	      }

	      // Is checks
	      if (v.isNumber(is) && length !== is) {
	        err = options.wrongLength ||
	          this.wrongLength ||
	          "is the wrong length (should be %{count} characters)";
	        errors.push(v.format(err, {count: is}));
	      }

	      if (v.isNumber(minimum) && length < minimum) {
	        err = options.tooShort ||
	          this.tooShort ||
	          "is too short (minimum is %{count} characters)";
	        errors.push(v.format(err, {count: minimum}));
	      }

	      if (v.isNumber(maximum) && length > maximum) {
	        err = options.tooLong ||
	          this.tooLong ||
	          "is too long (maximum is %{count} characters)";
	        errors.push(v.format(err, {count: maximum}));
	      }

	      if (errors.length > 0) {
	        return options.message || errors;
	      }
	    },
	    numericality: function(value, options) {
	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }

	      options = v.extend({}, this.options, options);

	      var errors = []
	        , name
	        , count
	        , checks = {
	            greaterThan:          function(v, c) { return v > c; },
	            greaterThanOrEqualTo: function(v, c) { return v >= c; },
	            equalTo:              function(v, c) { return v === c; },
	            lessThan:             function(v, c) { return v < c; },
	            lessThanOrEqualTo:    function(v, c) { return v <= c; },
	            divisibleBy:          function(v, c) { return v % c === 0; }
	          };

	      // Strict will check that it is a valid looking number
	      if (v.isString(value) && options.strict) {
	        var pattern = "^(0|[1-9]\\d*)";
	        if (!options.onlyInteger) {
	          pattern += "(\\.\\d+)?";
	        }
	        pattern += "$";

	        if (!(new RegExp(pattern).test(value))) {
	          return options.message || options.notValid || this.notValid || "must be a valid number";
	        }
	      }

	      // Coerce the value to a number unless we're being strict.
	      if (options.noStrings !== true && v.isString(value)) {
	        value = +value;
	      }

	      // If it's not a number we shouldn't continue since it will compare it.
	      if (!v.isNumber(value)) {
	        return options.message || options.notValid || this.notValid || "is not a number";
	      }

	      // Same logic as above, sort of. Don't bother with comparisons if this
	      // doesn't pass.
	      if (options.onlyInteger && !v.isInteger(value)) {
	        return options.message || options.notInteger || this.notInteger  || "must be an integer";
	      }

	      for (name in checks) {
	        count = options[name];
	        if (v.isNumber(count) && !checks[name](value, count)) {
	          // This picks the default message if specified
	          // For example the greaterThan check uses the message from
	          // this.notGreaterThan so we capitalize the name and prepend "not"
	          var key = "not" + v.capitalize(name);
	          var msg = options[key] || this[key] || "must be %{type} %{count}";

	          errors.push(v.format(msg, {
	            count: count,
	            type: v.prettify(name)
	          }));
	        }
	      }

	      if (options.odd && value % 2 !== 1) {
	        errors.push(options.notOdd || this.notOdd || "must be odd");
	      }
	      if (options.even && value % 2 !== 0) {
	        errors.push(options.notEven || this.notEven || "must be even");
	      }

	      if (errors.length) {
	        return options.message || errors;
	      }
	    },
	    datetime: v.extend(function(value, options) {
	      if (!v.isFunction(this.parse) || !v.isFunction(this.format)) {
	        throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");
	      }

	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }

	      options = v.extend({}, this.options, options);

	      var err
	        , errors = []
	        , earliest = options.earliest ? this.parse(options.earliest, options) : NaN
	        , latest = options.latest ? this.parse(options.latest, options) : NaN;

	      value = this.parse(value, options);

	      // 86400000 is the number of seconds in a day, this is used to remove
	      // the time from the date
	      if (isNaN(value) || options.dateOnly && value % 86400000 !== 0) {
	        err = options.notValid ||
	          options.message ||
	          this.notValid ||
	          "must be a valid date";
	        return v.format(err, {value: arguments[0]});
	      }

	      if (!isNaN(earliest) && value < earliest) {
	        err = options.tooEarly ||
	          options.message ||
	          this.tooEarly ||
	          "must be no earlier than %{date}";
	        err = v.format(err, {
	          value: this.format(value, options),
	          date: this.format(earliest, options)
	        });
	        errors.push(err);
	      }

	      if (!isNaN(latest) && value > latest) {
	        err = options.tooLate ||
	          options.message ||
	          this.tooLate ||
	          "must be no later than %{date}";
	        err = v.format(err, {
	          date: this.format(latest, options),
	          value: this.format(value, options)
	        });
	        errors.push(err);
	      }

	      if (errors.length) {
	        return v.unique(errors);
	      }
	    }, {
	      parse: null,
	      format: null
	    }),
	    date: function(value, options) {
	      options = v.extend({}, options, {dateOnly: true});
	      return v.validators.datetime.call(v.validators.datetime, value, options);
	    },
	    format: function(value, options) {
	      if (v.isString(options) || (options instanceof RegExp)) {
	        options = {pattern: options};
	      }

	      options = v.extend({}, this.options, options);

	      var message = options.message || this.message || "is invalid"
	        , pattern = options.pattern
	        , match;

	      // Empty values are allowed
	      if (v.isEmpty(value)) {
	        return;
	      }
	      if (!v.isString(value)) {
	        return message;
	      }

	      if (v.isString(pattern)) {
	        pattern = new RegExp(options.pattern, options.flags);
	      }
	      match = pattern.exec(value);
	      if (!match || match[0].length != value.length) {
	        return message;
	      }
	    },
	    inclusion: function(value, options) {
	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }
	      if (v.isArray(options)) {
	        options = {within: options};
	      }
	      options = v.extend({}, this.options, options);
	      if (v.contains(options.within, value)) {
	        return;
	      }
	      var message = options.message ||
	        this.message ||
	        "^%{value} is not included in the list";
	      return v.format(message, {value: value});
	    },
	    exclusion: function(value, options) {
	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }
	      if (v.isArray(options)) {
	        options = {within: options};
	      }
	      options = v.extend({}, this.options, options);
	      if (!v.contains(options.within, value)) {
	        return;
	      }
	      var message = options.message || this.message || "^%{value} is restricted";
	      return v.format(message, {value: value});
	    },
	    email: v.extend(function(value, options) {
	      options = v.extend({}, this.options, options);
	      var message = options.message || this.message || "is not a valid email";
	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }
	      if (!v.isString(value)) {
	        return message;
	      }
	      if (!this.PATTERN.exec(value)) {
	        return message;
	      }
	    }, {
	      PATTERN: /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i
	    }),
	    equality: function(value, options, attribute, attributes) {
	      if (v.isEmpty(value)) {
	        return;
	      }

	      if (v.isString(options)) {
	        options = {attribute: options};
	      }
	      options = v.extend({}, this.options, options);
	      var message = options.message ||
	        this.message ||
	        "is not equal to %{attribute}";

	      if (v.isEmpty(options.attribute) || !v.isString(options.attribute)) {
	        throw new Error("The attribute must be a non empty string");
	      }

	      var otherValue = v.getDeepObjectValue(attributes, options.attribute)
	        , comparator = options.comparator || function(v1, v2) {
	          return v1 === v2;
	        };

	      if (!comparator(value, otherValue, options, attribute, attributes)) {
	        return v.format(message, {attribute: v.prettify(options.attribute)});
	      }
	    },

	    // A URL validator that is used to validate URLs with the ability to
	    // restrict schemes and some domains.
	    url: function(value, options) {
	      if (v.isEmpty(value)) {
	        return;
	      }

	      options = v.extend({}, this.options, options);

	      var message = options.message || this.message || "is not a valid url"
	        , schemes = options.schemes || this.schemes || ['http', 'https']
	        , allowLocal = options.allowLocal || this.allowLocal || false;

	      if (!v.isString(value)) {
	        return message;
	      }

	      // https://gist.github.com/dperini/729294
	      var regex =
	        "^" +
	          // schemes
	          "(?:(?:" + schemes.join("|") + "):\\/\\/)" +
	          // credentials
	          "(?:\\S+(?::\\S*)?@)?";

	      regex += "(?:";

	      var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";

	      // This ia a special case for the localhost hostname
	      if (allowLocal) {
	        tld += "?";
	      } else {
	        // private & local addresses
	        regex +=
	          "(?!10(?:\\.\\d{1,3}){3})" +
	          "(?!127(?:\\.\\d{1,3}){3})" +
	          "(?!169\\.254(?:\\.\\d{1,3}){2})" +
	          "(?!192\\.168(?:\\.\\d{1,3}){2})" +
	          "(?!172" +
	          "\\.(?:1[6-9]|2\\d|3[0-1])" +
	          "(?:\\.\\d{1,3})" +
	          "{2})";
	      }

	      var hostname =
	          "(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)" +
	          "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*" +
	          tld + ")";

	      // reserved addresses
	      regex +=
	          "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
	          "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
	          "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
	        "|" +
	          hostname +
	          // port number
	          "(?::\\d{2,5})?" +
	          // path
	          "(?:\\/[^\\s]*)?" +
	        "$";

	      var PATTERN = new RegExp(regex, 'i');
	      if (!PATTERN.exec(value)) {
	        return message;
	      }
	    }
	  };

	  validate.exposeModule(validate, this, exports, module, __webpack_require__(354));
	}).call(this,
	         true ? /* istanbul ignore next */ exports : null,
	         true ? /* istanbul ignore next */ module : null,
	        __webpack_require__(354));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(337)(module)))

/***/ }),
/* 354 */
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(356);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(357)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/raw-loader/index.js!./fonts.css", function() {
				var newContent = require("!!../../node_modules/raw-loader/index.js!./fonts.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 356 */
/***/ (function(module, exports) {

	module.exports = "@font-face {\n  font-family: 'Fira GFW Sans';\n  src: url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-regular-webfont.eot');\n  src: url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-regular-webfont.eot?#iefix') format('embedded-opentype'),\n    url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-regular-webfont.woff2') format('woff2'),\n    url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-regular-webfont.woff') format('woff'),\n    url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-regular-webfont.ttf') format('truetype'),\n    url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-regular-webfont.svg#fira_sansregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Fira GFW Sans';\n  src: url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-light-webfont.eot');\n  src: url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-light-webfont.eot?#iefix') format('embedded-opentype'),\n    url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-light-webfont.woff2') format('woff2'),\n    url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-light-webfont.woff') format('woff'),\n    url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-light-webfont.ttf') format('truetype'),\n    url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-light-webfont.svg#fira_sanslight') format('svg');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Fira GFW Sans';\n  src: url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-medium-webfont.eot');\n  src: url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-medium-webfont.eot?#iefix') format('embedded-opentype'),\n    url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-medium-webfont.woff2') format('woff2'),\n    url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-medium-webfont.woff') format('woff'),\n    url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-medium-webfont.ttf') format('truetype'),\n    url('https://terra-assets.s3.amazonaws.com/static/fonts/firasans-medium-webfont.svg#fira_sansmedium') format('svg');\n  font-weight: 500;\n  font-style: normal;\n}\n"

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(359);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(357)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./global.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./global.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(360)();
	// imports


	// module
	exports.push([module.id, "a {\n  text-decoration: none;\n  cursor: pointer; }\n\ndiv.-center,\nsection.-center,\narticle.-center {\n  width: 100%;\n  margin: 0 auto !important; }\n\n.leaflet-control-container .leaflet-bottom,\n.leaflet-control-container .leaflet-right {\n  z-index: 1 !important; }\n\n@-webkit-keyframes standard {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes standard {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\nhtml, body {\n  overflow-x: hidden; }\n  html.-no-scroll, body.-no-scroll {\n    overflow: hidden;\n    position: fixed;\n    width: 100%;\n    height: 100%; }\n\n#headerGfw *, #headerGfw *:after, #headerGfw *:before, #footerGfw *, #footerGfw *:after, #footerGfw *:before, #feedbackGfw *, #feedbackGfw *:after, #feedbackGfw *:before, #contactGfw *, #contactGfw *:after, #contactGfw *:before {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n#headerGfw div, #headerGfw span, #headerGfw applet, #headerGfw object, #headerGfw iframe, #headerGfw h1, #headerGfw h2, #headerGfw h3, #headerGfw h4, #headerGfw h5, #headerGfw h6, #headerGfw p, #headerGfw blockquote, #headerGfw pre, #headerGfw a, #headerGfw abbr, #headerGfw acronym, #headerGfw address, #headerGfw big, #headerGfw cite, #headerGfw code, #headerGfw del, #headerGfw dfn, #headerGfw em, #headerGfw img, #headerGfw ins, #headerGfw kbd, #headerGfw q, #headerGfw s, #headerGfw samp, #headerGfw small, #headerGfw strike, #headerGfw strong, #headerGfw sub, #headerGfw sup, #headerGfw tt, #headerGfw var, #headerGfw b, #headerGfw u, #headerGfw i, #headerGfw center, #headerGfw dl, #headerGfw dt, #headerGfw dd, #headerGfw ol, #headerGfw ul, #headerGfw li, #headerGfw fieldset, #headerGfw form, #headerGfw label, #headerGfw legend, #headerGfw table, #headerGfw caption, #headerGfw tbody, #headerGfw tfoot, #headerGfw thead, #headerGfw tr, #headerGfw th, #headerGfw td, #headerGfw article, #headerGfw aside, #headerGfw canvas, #headerGfw details, #headerGfw embed, #headerGfw figure, #headerGfw figcaption, #headerGfw footer, #headerGfw header, #headerGfw hgroup, #headerGfw menu, #headerGfw output, #headerGfw ruby, #headerGfw section, #headerGfw summary, #headerGfw time, #headerGfw mark, #headerGfw audio, #headerGfw video, #footerGfw div, #footerGfw span, #footerGfw applet, #footerGfw object, #footerGfw iframe, #footerGfw h1, #footerGfw h2, #footerGfw h3, #footerGfw h4, #footerGfw h5, #footerGfw h6, #footerGfw p, #footerGfw blockquote, #footerGfw pre, #footerGfw a, #footerGfw abbr, #footerGfw acronym, #footerGfw address, #footerGfw big, #footerGfw cite, #footerGfw code, #footerGfw del, #footerGfw dfn, #footerGfw em, #footerGfw img, #footerGfw ins, #footerGfw kbd, #footerGfw q, #footerGfw s, #footerGfw samp, #footerGfw small, #footerGfw strike, #footerGfw strong, #footerGfw sub, #footerGfw sup, #footerGfw tt, #footerGfw var, #footerGfw b, #footerGfw u, #footerGfw i, #footerGfw center, #footerGfw dl, #footerGfw dt, #footerGfw dd, #footerGfw ol, #footerGfw ul, #footerGfw li, #footerGfw fieldset, #footerGfw form, #footerGfw label, #footerGfw legend, #footerGfw table, #footerGfw caption, #footerGfw tbody, #footerGfw tfoot, #footerGfw thead, #footerGfw tr, #footerGfw th, #footerGfw td, #footerGfw article, #footerGfw aside, #footerGfw canvas, #footerGfw details, #footerGfw embed, #footerGfw figure, #footerGfw figcaption, #footerGfw footer, #footerGfw header, #footerGfw hgroup, #footerGfw menu, #footerGfw output, #footerGfw ruby, #footerGfw section, #footerGfw summary, #footerGfw time, #footerGfw mark, #footerGfw audio, #footerGfw video, #feedbackGfw div, #feedbackGfw span, #feedbackGfw applet, #feedbackGfw object, #feedbackGfw iframe, #feedbackGfw h1, #feedbackGfw h2, #feedbackGfw h3, #feedbackGfw h4, #feedbackGfw h5, #feedbackGfw h6, #feedbackGfw p, #feedbackGfw blockquote, #feedbackGfw pre, #feedbackGfw a, #feedbackGfw abbr, #feedbackGfw acronym, #feedbackGfw address, #feedbackGfw big, #feedbackGfw cite, #feedbackGfw code, #feedbackGfw del, #feedbackGfw dfn, #feedbackGfw em, #feedbackGfw img, #feedbackGfw ins, #feedbackGfw kbd, #feedbackGfw q, #feedbackGfw s, #feedbackGfw samp, #feedbackGfw small, #feedbackGfw strike, #feedbackGfw strong, #feedbackGfw sub, #feedbackGfw sup, #feedbackGfw tt, #feedbackGfw var, #feedbackGfw b, #feedbackGfw u, #feedbackGfw i, #feedbackGfw center, #feedbackGfw dl, #feedbackGfw dt, #feedbackGfw dd, #feedbackGfw ol, #feedbackGfw ul, #feedbackGfw li, #feedbackGfw fieldset, #feedbackGfw form, #feedbackGfw label, #feedbackGfw legend, #feedbackGfw table, #feedbackGfw caption, #feedbackGfw tbody, #feedbackGfw tfoot, #feedbackGfw thead, #feedbackGfw tr, #feedbackGfw th, #feedbackGfw td, #feedbackGfw article, #feedbackGfw aside, #feedbackGfw canvas, #feedbackGfw details, #feedbackGfw embed, #feedbackGfw figure, #feedbackGfw figcaption, #feedbackGfw footer, #feedbackGfw header, #feedbackGfw hgroup, #feedbackGfw menu, #feedbackGfw output, #feedbackGfw ruby, #feedbackGfw section, #feedbackGfw summary, #feedbackGfw time, #feedbackGfw mark, #feedbackGfw audio, #feedbackGfw video, #contactGfw div, #contactGfw span, #contactGfw applet, #contactGfw object, #contactGfw iframe, #contactGfw h1, #contactGfw h2, #contactGfw h3, #contactGfw h4, #contactGfw h5, #contactGfw h6, #contactGfw p, #contactGfw blockquote, #contactGfw pre, #contactGfw a, #contactGfw abbr, #contactGfw acronym, #contactGfw address, #contactGfw big, #contactGfw cite, #contactGfw code, #contactGfw del, #contactGfw dfn, #contactGfw em, #contactGfw img, #contactGfw ins, #contactGfw kbd, #contactGfw q, #contactGfw s, #contactGfw samp, #contactGfw small, #contactGfw strike, #contactGfw strong, #contactGfw sub, #contactGfw sup, #contactGfw tt, #contactGfw var, #contactGfw b, #contactGfw u, #contactGfw i, #contactGfw center, #contactGfw dl, #contactGfw dt, #contactGfw dd, #contactGfw ol, #contactGfw ul, #contactGfw li, #contactGfw fieldset, #contactGfw form, #contactGfw label, #contactGfw legend, #contactGfw table, #contactGfw caption, #contactGfw tbody, #contactGfw tfoot, #contactGfw thead, #contactGfw tr, #contactGfw th, #contactGfw td, #contactGfw article, #contactGfw aside, #contactGfw canvas, #contactGfw details, #contactGfw embed, #contactGfw figure, #contactGfw figcaption, #contactGfw footer, #contactGfw header, #contactGfw hgroup, #contactGfw menu, #contactGfw output, #contactGfw ruby, #contactGfw section, #contactGfw summary, #contactGfw time, #contactGfw mark, #contactGfw audio, #contactGfw video {\n  margin: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline; }\n\n#headerGfw ol, #headerGfw ul, #footerGfw ol, #footerGfw ul, #feedbackGfw ol, #feedbackGfw ul, #contactGfw ol, #contactGfw ul {\n  list-style: none; }\n\n#headerGfw a, #footerGfw a, #feedbackGfw a, #contactGfw a {\n  text-decoration: none; }\n\n#headerGfw button, #footerGfw button, #feedbackGfw button, #contactGfw button {\n  display: inline-block;\n  box-shadow: none;\n  outline: none;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  cursor: pointer; }\n\n#headerGfw .wrapper, #footerGfw .wrapper, #feedbackGfw .wrapper, #contactGfw .wrapper {\n  position: relative;\n  margin: 0 auto;\n  padding: 0px;\n  width: 100%;\n  max-width: 1120px;\n  padding: 0 15px; }\n  @media (min-width: 850px) {\n    #headerGfw .wrapper, #footerGfw .wrapper, #feedbackGfw .wrapper, #contactGfw .wrapper {\n      padding: 0 20px; } }\n\n#headerGfw .-hidden, #footerGfw .-hidden, #feedbackGfw .-hidden, #contactGfw .-hidden {\n  display: none; }\n\n#headerGfw .-scroll-bar, #footerGfw .-scroll-bar, #feedbackGfw .-scroll-bar, #contactGfw .-scroll-bar {\n  -webkit-overflow-scrolling: touch;\n  /* Let's get this party started */\n  /* Track */\n  /* Handle */ }\n  #headerGfw .-scroll-bar::-webkit-scrollbar, #footerGfw .-scroll-bar::-webkit-scrollbar, #feedbackGfw .-scroll-bar::-webkit-scrollbar, #contactGfw .-scroll-bar::-webkit-scrollbar {\n    width: 8px;\n    height: 8px; }\n  #headerGfw .-scroll-bar::-webkit-scrollbar-track, #footerGfw .-scroll-bar::-webkit-scrollbar-track, #feedbackGfw .-scroll-bar::-webkit-scrollbar-track, #contactGfw .-scroll-bar::-webkit-scrollbar-track {\n    border-radius: 0px;\n    background: #b8bab8; }\n  #headerGfw .-scroll-bar::-webkit-scrollbar-thumb, #footerGfw .-scroll-bar::-webkit-scrollbar-thumb, #feedbackGfw .-scroll-bar::-webkit-scrollbar-thumb, #contactGfw .-scroll-bar::-webkit-scrollbar-thumb {\n    border-radius: 20px;\n    background: rgba(51, 51, 51, 0.8); }\n\n#headerGfw .btn, #footerGfw .btn, #feedbackGfw .btn, #contactGfw .btn {\n  -webkit-appearance: none;\n  border: 1px solid transparent;\n  background: none;\n  outline: none;\n  box-shadow: none;\n  text-align: center;\n  cursor: pointer;\n  text-decoration: none;\n  top: 0;\n  left: 0;\n  -webkit-transform: none;\n          transform: none;\n  font-family: \"Fira GFW Sans\"; }\n\n#headerGfw .btn, #footerGfw .btn, #feedbackGfw .btn, #contactGfw .btn {\n  background: #E5E5DF;\n  position: relative;\n  display: inline-block;\n  z-index: 1;\n  padding: 0px 12px;\n  border-radius: 40px;\n  font-size: 14px;\n  text-decoration: none;\n  height: 36px;\n  line-height: 36px;\n  text-align: center;\n  font-weight: 500;\n  white-space: nowrap;\n  transition: background .15s linear; }\n  #headerGfw .btn:hover, #footerGfw .btn:hover, #feedbackGfw .btn:hover, #contactGfw .btn:hover {\n    background: #0077be;\n    text-decoration: none !important; }\n  #headerGfw .btn.uppercase, #footerGfw .btn.uppercase, #feedbackGfw .btn.uppercase, #contactGfw .btn.uppercase {\n    text-transform: uppercase; }\n  #headerGfw .btn.medium, #footerGfw .btn.medium, #feedbackGfw .btn.medium, #contactGfw .btn.medium {\n    text-transform: uppercase;\n    padding: 0px 35px; }\n  #headerGfw .btn.full, #footerGfw .btn.full, #feedbackGfw .btn.full, #contactGfw .btn.full {\n    width: 100%; }\n  #headerGfw .btn.gray, #footerGfw .btn.gray, #feedbackGfw .btn.gray, #contactGfw .btn.gray {\n    color: #333;\n    background: #FFF;\n    border-color: #0077be; }\n    #headerGfw .btn.gray:hover, #footerGfw .btn.gray:hover, #feedbackGfw .btn.gray:hover, #contactGfw .btn.gray:hover {\n      background: #f2f2f2; }\n  #headerGfw .btn.dark, #footerGfw .btn.dark, #feedbackGfw .btn.dark, #contactGfw .btn.dark {\n    color: #FFF;\n    background: #333;\n    border-color: #0077be; }\n    #headerGfw .btn.dark:hover, #footerGfw .btn.dark:hover, #feedbackGfw .btn.dark:hover, #contactGfw .btn.dark:hover {\n      text-decoration: none;\n      background: #262626; }\n  #headerGfw .btn.green, #footerGfw .btn.green, #feedbackGfw .btn.green, #contactGfw .btn.green {\n    color: #FFF;\n    background: #0077be; }\n    #headerGfw .btn.green:hover, #footerGfw .btn.green:hover, #feedbackGfw .btn.green:hover, #contactGfw .btn.green:hover {\n      background: #00578b; }\n    #headerGfw .btn.green.disabled:hover, #footerGfw .btn.green.disabled:hover, #feedbackGfw .btn.green.disabled:hover, #contactGfw .btn.green.disabled:hover {\n      background: #0077be; }\n  #headerGfw .btn.red, #footerGfw .btn.red, #feedbackGfw .btn.red, #contactGfw .btn.red {\n    color: #FFF;\n    background: #ed1846; }\n    #headerGfw .btn.red:hover, #footerGfw .btn.red:hover, #feedbackGfw .btn.red:hover, #contactGfw .btn.red:hover {\n      background: #c30f36; }\n    #headerGfw .btn.red.disabled:hover, #footerGfw .btn.red.disabled:hover, #feedbackGfw .btn.red.disabled:hover, #contactGfw .btn.red.disabled:hover {\n      background: #ed1846; }\n  #headerGfw .btn.orange, #footerGfw .btn.orange, #feedbackGfw .btn.orange, #contactGfw .btn.orange {\n    color: #FFF;\n    background: #e98300; }\n    #headerGfw .btn.orange:hover, #footerGfw .btn.orange:hover, #feedbackGfw .btn.orange:hover, #contactGfw .btn.orange:hover {\n      background: #b66600; }\n    #headerGfw .btn.orange.disabled:hover, #footerGfw .btn.orange.disabled:hover, #feedbackGfw .btn.orange.disabled:hover, #contactGfw .btn.orange.disabled:hover {\n      background: #e98300; }\n  #headerGfw .btn.blue, #footerGfw .btn.blue, #feedbackGfw .btn.blue, #contactGfw .btn.blue {\n    color: #FFF;\n    background: #5b80a0; }\n    #headerGfw .btn.blue:hover, #footerGfw .btn.blue:hover, #feedbackGfw .btn.blue:hover, #contactGfw .btn.blue:hover {\n      background: #49667f; }\n    #headerGfw .btn.blue.disabled:hover, #footerGfw .btn.blue.disabled:hover, #feedbackGfw .btn.blue.disabled:hover, #contactGfw .btn.blue.disabled:hover {\n      background: #5b80a0; }\n  #headerGfw .btn.disabled, #footerGfw .btn.disabled, #feedbackGfw .btn.disabled, #contactGfw .btn.disabled {\n    opacity: 0.25;\n    cursor: default; }\n\n#headerGfw, #footerGfw, #feedbackGfw, #contactGfw {\n  /**\n   * Field\n   */\n  /**\n   * Radio\n   */\n  /**\n   * Checkbox\n   */ }\n  #headerGfw input[type=\"password\"],\n  #headerGfw input[type=\"text\"],\n  #headerGfw input[type=\"date\"],\n  #headerGfw input[type=\"email\"],\n  #headerGfw textarea, #footerGfw input[type=\"password\"],\n  #footerGfw input[type=\"text\"],\n  #footerGfw input[type=\"date\"],\n  #footerGfw input[type=\"email\"],\n  #footerGfw textarea, #feedbackGfw input[type=\"password\"],\n  #feedbackGfw input[type=\"text\"],\n  #feedbackGfw input[type=\"date\"],\n  #feedbackGfw input[type=\"email\"],\n  #feedbackGfw textarea, #contactGfw input[type=\"password\"],\n  #contactGfw input[type=\"text\"],\n  #contactGfw input[type=\"date\"],\n  #contactGfw input[type=\"email\"],\n  #contactGfw textarea {\n    display: block;\n    width: 100%;\n    border: 1px solid #E5E5DF;\n    padding: 10px;\n    margin: 0;\n    font-size: 13px;\n    border-radius: 4px;\n    outline: none; }\n    #headerGfw input[type=\"password\"]:focus,\n    #headerGfw input[type=\"text\"]:focus,\n    #headerGfw input[type=\"date\"]:focus,\n    #headerGfw input[type=\"email\"]:focus,\n    #headerGfw textarea:focus, #footerGfw input[type=\"password\"]:focus,\n    #footerGfw input[type=\"text\"]:focus,\n    #footerGfw input[type=\"date\"]:focus,\n    #footerGfw input[type=\"email\"]:focus,\n    #footerGfw textarea:focus, #feedbackGfw input[type=\"password\"]:focus,\n    #feedbackGfw input[type=\"text\"]:focus,\n    #feedbackGfw input[type=\"date\"]:focus,\n    #feedbackGfw input[type=\"email\"]:focus,\n    #feedbackGfw textarea:focus, #contactGfw input[type=\"password\"]:focus,\n    #contactGfw input[type=\"text\"]:focus,\n    #contactGfw input[type=\"date\"]:focus,\n    #contactGfw input[type=\"email\"]:focus,\n    #contactGfw textarea:focus {\n      border-color: #cecec3; }\n    #headerGfw input[type=\"password\"].-error,\n    #headerGfw input[type=\"text\"].-error,\n    #headerGfw input[type=\"date\"].-error,\n    #headerGfw input[type=\"email\"].-error,\n    #headerGfw textarea.-error, #footerGfw input[type=\"password\"].-error,\n    #footerGfw input[type=\"text\"].-error,\n    #footerGfw input[type=\"date\"].-error,\n    #footerGfw input[type=\"email\"].-error,\n    #footerGfw textarea.-error, #feedbackGfw input[type=\"password\"].-error,\n    #feedbackGfw input[type=\"text\"].-error,\n    #feedbackGfw input[type=\"date\"].-error,\n    #feedbackGfw input[type=\"email\"].-error,\n    #feedbackGfw textarea.-error, #contactGfw input[type=\"password\"].-error,\n    #contactGfw input[type=\"text\"].-error,\n    #contactGfw input[type=\"date\"].-error,\n    #contactGfw input[type=\"email\"].-error,\n    #contactGfw textarea.-error {\n      border-color: #c30f36; }\n  #headerGfw .field, #footerGfw .field, #feedbackGfw .field, #contactGfw .field {\n    position: relative;\n    width: 100%;\n    margin: 0 0 25px; }\n    #headerGfw .field:before, #headerGfw .field:after, #footerGfw .field:before, #footerGfw .field:after, #feedbackGfw .field:before, #feedbackGfw .field:after, #contactGfw .field:before, #contactGfw .field:after {\n      content: \" \";\n      display: table;\n      visibility: hidden;\n      font-size: 0;\n      height: 0; }\n    #headerGfw .field:after, #footerGfw .field:after, #feedbackGfw .field:after, #contactGfw .field:after {\n      clear: both; }\n    @media (min-width: 850px) {\n      #headerGfw .field, #footerGfw .field, #feedbackGfw .field, #contactGfw .field {\n        padding: 0px 0px 0px 85px; } }\n    #headerGfw .field label, #footerGfw .field label, #feedbackGfw .field label, #contactGfw .field label {\n      padding: 0 15px 0 0;\n      width: 100%;\n      color: #333;\n      font-weight: 500;\n      font-size: 13px;\n      text-transform: uppercase;\n      text-align: right;\n      line-height: 1.5; }\n      @media (min-width: 850px) {\n        #headerGfw .field label, #footerGfw .field label, #feedbackGfw .field label, #contactGfw .field label {\n          width: 85px;\n          position: absolute;\n          left: 0;\n          top: 12px; } }\n      #headerGfw .field label.-has-hint, #footerGfw .field label.-has-hint, #feedbackGfw .field label.-has-hint, #contactGfw .field label.-has-hint {\n        top: 1px; }\n      #headerGfw .field label.-error, #footerGfw .field label.-error, #feedbackGfw .field label.-error, #contactGfw .field label.-error {\n        color: #ed1846; }\n    #headerGfw .field > h3, #footerGfw .field > h3, #feedbackGfw .field > h3, #contactGfw .field > h3 {\n      color: #333;\n      font-weight: 500;\n      font-size: 13px;\n      text-transform: uppercase;\n      line-height: 1.5; }\n    #headerGfw .field textarea, #footerGfw .field textarea, #feedbackGfw .field textarea, #contactGfw .field textarea {\n      height: 182px;\n      max-width: 100%; }\n    #headerGfw .field > p, #footerGfw .field > p, #feedbackGfw .field > p, #contactGfw .field > p {\n      color: #333;\n      font-size: 14px;\n      line-height: 1.5;\n      margin: 0 0 15px; }\n      #headerGfw .field > p.-terms, #footerGfw .field > p.-terms, #feedbackGfw .field > p.-terms, #contactGfw .field > p.-terms {\n        font-size: 10px;\n        margin: 5px; }\n      #headerGfw .field > p.-error, #footerGfw .field > p.-error, #feedbackGfw .field > p.-error, #contactGfw .field > p.-error {\n        font-size: 10px;\n        color: #ed1846; }\n    #headerGfw .field.-short input[type=\"password\"],\n    #headerGfw .field.-short input[type=\"text\"],\n    #headerGfw .field.-short input[type=\"date\"],\n    #headerGfw .field.-short input[type=\"email\"],\n    #headerGfw .field.-short textarea, #footerGfw .field.-short input[type=\"password\"],\n    #footerGfw .field.-short input[type=\"text\"],\n    #footerGfw .field.-short input[type=\"date\"],\n    #footerGfw .field.-short input[type=\"email\"],\n    #footerGfw .field.-short textarea, #feedbackGfw .field.-short input[type=\"password\"],\n    #feedbackGfw .field.-short input[type=\"text\"],\n    #feedbackGfw .field.-short input[type=\"date\"],\n    #feedbackGfw .field.-short input[type=\"email\"],\n    #feedbackGfw .field.-short textarea, #contactGfw .field.-short input[type=\"password\"],\n    #contactGfw .field.-short input[type=\"text\"],\n    #contactGfw .field.-short input[type=\"date\"],\n    #contactGfw .field.-short input[type=\"email\"],\n    #contactGfw .field.-short textarea {\n      max-width: 400px; }\n    #headerGfw .field.-with-errors label, #headerGfw .field.field_with_errors label, #footerGfw .field.-with-errors label, #footerGfw .field.field_with_errors label, #feedbackGfw .field.-with-errors label, #feedbackGfw .field.field_with_errors label, #contactGfw .field.-with-errors label, #contactGfw .field.field_with_errors label {\n      color: #ed1846; }\n    #headerGfw .field.-with-errors input[type=\"text\"],\n    #headerGfw .field.-with-errors input[type=\"email\"], #headerGfw .field.field_with_errors input[type=\"text\"],\n    #headerGfw .field.field_with_errors input[type=\"email\"], #footerGfw .field.-with-errors input[type=\"text\"],\n    #footerGfw .field.-with-errors input[type=\"email\"], #footerGfw .field.field_with_errors input[type=\"text\"],\n    #footerGfw .field.field_with_errors input[type=\"email\"], #feedbackGfw .field.-with-errors input[type=\"text\"],\n    #feedbackGfw .field.-with-errors input[type=\"email\"], #feedbackGfw .field.field_with_errors input[type=\"text\"],\n    #feedbackGfw .field.field_with_errors input[type=\"email\"], #contactGfw .field.-with-errors input[type=\"text\"],\n    #contactGfw .field.-with-errors input[type=\"email\"], #contactGfw .field.field_with_errors input[type=\"text\"],\n    #contactGfw .field.field_with_errors input[type=\"email\"] {\n      border: 1px solid #ed1846; }\n    #headerGfw .field.-with-errors p, #headerGfw .field.field_with_errors p, #footerGfw .field.-with-errors p, #footerGfw .field.field_with_errors p, #feedbackGfw .field.-with-errors p, #feedbackGfw .field.field_with_errors p, #contactGfw .field.-with-errors p, #contactGfw .field.field_with_errors p {\n      margin-bottom: 25px;\n      font-weight: 500;\n      font-size: 12px;\n      color: #ed1846;\n      text-transform: uppercase; }\n  #headerGfw .radio-box, #footerGfw .radio-box, #feedbackGfw .radio-box, #contactGfw .radio-box {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    padding: 0 0 15px; }\n    #headerGfw .radio-box:before, #headerGfw .radio-box:after, #footerGfw .radio-box:before, #footerGfw .radio-box:after, #feedbackGfw .radio-box:before, #feedbackGfw .radio-box:after, #contactGfw .radio-box:before, #contactGfw .radio-box:after {\n      content: \" \";\n      display: table;\n      visibility: hidden;\n      font-size: 0;\n      height: 0; }\n    #headerGfw .radio-box:after, #footerGfw .radio-box:after, #feedbackGfw .radio-box:after, #contactGfw .radio-box:after {\n      clear: both; }\n    #headerGfw .radio-box .custom-radio, #footerGfw .radio-box .custom-radio, #feedbackGfw .radio-box .custom-radio, #contactGfw .radio-box .custom-radio {\n      margin: 0 0 0 20px;\n      width: auto; }\n      #headerGfw .radio-box .custom-radio:first-child, #footerGfw .radio-box .custom-radio:first-child, #feedbackGfw .radio-box .custom-radio:first-child, #contactGfw .radio-box .custom-radio:first-child {\n        margin: 0; }\n    #headerGfw .radio-box label, #footerGfw .radio-box label, #feedbackGfw .radio-box label, #contactGfw .radio-box label {\n      font-weight: 400;\n      text-transform: none;\n      position: relative;\n      padding-left: 25px;\n      line-height: 28px;\n      cursor: pointer;\n      top: 0;\n      width: 100%;\n      left: 0; }\n      #headerGfw .radio-box label span, #footerGfw .radio-box label span, #feedbackGfw .radio-box label span, #contactGfw .radio-box label span {\n        position: absolute;\n        top: 50%;\n        left: 0;\n        width: 20px;\n        height: 20px;\n        border: 1px solid #333;\n        border-radius: 50%;\n        -webkit-transform: translate(0, -50%);\n                transform: translate(0, -50%); }\n        #headerGfw .radio-box label span:after, #footerGfw .radio-box label span:after, #feedbackGfw .radio-box label span:after, #contactGfw .radio-box label span:after {\n          content: \"\";\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          width: 50%;\n          height: 50%;\n          border-radius: 50%;\n          background: #0077be;\n          display: none;\n          -webkit-transform: translate(-50%, -50%);\n                  transform: translate(-50%, -50%); }\n    #headerGfw .radio-box input[type=radio], #footerGfw .radio-box input[type=radio], #feedbackGfw .radio-box input[type=radio], #contactGfw .radio-box input[type=radio] {\n      display: none; }\n    #headerGfw .radio-box input[type=radio]:checked + label span:after, #footerGfw .radio-box input[type=radio]:checked + label span:after, #feedbackGfw .radio-box input[type=radio]:checked + label span:after, #contactGfw .radio-box input[type=radio]:checked + label span:after {\n      display: block; }\n  #headerGfw .checkbox-box, #footerGfw .checkbox-box, #feedbackGfw .checkbox-box, #contactGfw .checkbox-box {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    padding: 0 0 15px; }\n    #headerGfw .checkbox-box:before, #headerGfw .checkbox-box:after, #footerGfw .checkbox-box:before, #footerGfw .checkbox-box:after, #feedbackGfw .checkbox-box:before, #feedbackGfw .checkbox-box:after, #contactGfw .checkbox-box:before, #contactGfw .checkbox-box:after {\n      content: \" \";\n      display: table;\n      visibility: hidden;\n      font-size: 0;\n      height: 0; }\n    #headerGfw .checkbox-box:after, #footerGfw .checkbox-box:after, #feedbackGfw .checkbox-box:after, #contactGfw .checkbox-box:after {\n      clear: both; }\n    #headerGfw .checkbox-box .custom-checkbox, #footerGfw .checkbox-box .custom-checkbox, #feedbackGfw .checkbox-box .custom-checkbox, #contactGfw .checkbox-box .custom-checkbox {\n      margin: 0 0 0 20px; }\n      #headerGfw .checkbox-box .custom-checkbox:first-child, #footerGfw .checkbox-box .custom-checkbox:first-child, #feedbackGfw .checkbox-box .custom-checkbox:first-child, #contactGfw .checkbox-box .custom-checkbox:first-child {\n        margin: 0; }\n    #headerGfw .checkbox-box label, #footerGfw .checkbox-box label, #feedbackGfw .checkbox-box label, #contactGfw .checkbox-box label {\n      font-weight: 400;\n      text-transform: none;\n      position: relative;\n      padding-left: 25px;\n      line-height: 28px;\n      cursor: pointer;\n      top: 0;\n      width: 100%;\n      left: 0; }\n      #headerGfw .checkbox-box label span, #footerGfw .checkbox-box label span, #feedbackGfw .checkbox-box label span, #contactGfw .checkbox-box label span {\n        position: absolute;\n        top: 50%;\n        left: 0;\n        width: 20px;\n        height: 20px;\n        border: 1px solid #333;\n        -webkit-transform: translate(0, -50%);\n                transform: translate(0, -50%); }\n        #headerGfw .checkbox-box label span:after, #footerGfw .checkbox-box label span:after, #feedbackGfw .checkbox-box label span:after, #contactGfw .checkbox-box label span:after {\n          content: \"\";\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          width: 50%;\n          height: 50%;\n          background: #0077be;\n          display: none;\n          -webkit-transform: translate(-50%, -50%);\n                  transform: translate(-50%, -50%); }\n    #headerGfw .checkbox-box input[type=checkbox], #footerGfw .checkbox-box input[type=checkbox], #feedbackGfw .checkbox-box input[type=checkbox], #contactGfw .checkbox-box input[type=checkbox] {\n      display: none; }\n    #headerGfw .checkbox-box input[type=checkbox]:checked + label span:after, #footerGfw .checkbox-box input[type=checkbox]:checked + label span:after, #feedbackGfw .checkbox-box input[type=checkbox]:checked + label span:after, #contactGfw .checkbox-box input[type=checkbox]:checked + label span:after {\n      display: block; }\n\n#headerGfw {\n  width: 100%;\n  font-family: 'Fira GFW Sans', Helvetica, serif;\n  height: 58px;\n  font-feature-settings: 'liga' 0;\n  -webkit-font-variant-ligatures: no-common-ligatures;\n  -webkit-font-smoothing: antialiased; }\n  #headerGfw .m-header {\n    position: static;\n    margin: 0 auto;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    background: #FFF; }\n    @media (min-width: 850px) {\n      #headerGfw .m-header {\n        position: relative;\n        bottom: auto;\n        left: auto; } }\n    #headerGfw .m-header .m-header-nav-container {\n      border-bottom: 1px solid rgba(51, 51, 51, 0.2);\n      height: 58px; }\n      #headerGfw .m-header .m-header-nav-container .nav-wrapper {\n        position: relative;\n        height: 100%;\n        margin: 0 auto;\n        padding: 0 15px;\n        z-index: 10000; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header .m-header-nav-container .nav-wrapper {\n            -webkit-justify-content: space-between;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            padding: 0 20px;\n            max-width: calc(1080px + 40px); } }\n      #headerGfw .m-header .m-header-nav-container .logo-sections-container {\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        position: absolute;\n        -webkit-justify-content: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n        #headerGfw .m-header .m-header-nav-container .logo-sections-container .logo-menu {\n          position: relative;\n          width: 88px;\n          height: 88px;\n          background-repeat: no-repeat;\n          background-size: cover;\n          z-index: 100; }\n          #headerGfw .m-header .m-header-nav-container .logo-sections-container .logo-menu.gfw-global, #headerGfw .m-header .m-header-nav-container .logo-sections-container .logo-menu.gfw-howto, #headerGfw .m-header .m-header-nav-container .logo-sections-container .logo-menu.gfw-atlas, #headerGfw .m-header .m-header-nav-container .logo-sections-container .logo-menu.gfw-mygfw {\n            background-image: url(\"https://raw.githubusercontent.com/getsiddd/terra-assets/master/static/images/terra.png\"); }\n          #headerGfw .m-header .m-header-nav-container .logo-sections-container .logo-menu.gfw-watcher {\n            background-image: url(\"https://raw.githubusercontent.com/getsiddd/terra-assets/master/static/images/logos/terra.png\"); }\n          #headerGfw .m-header .m-header-nav-container .logo-sections-container .logo-menu.gfw-fires {\n            background-image: url(\"https://raw.githubusercontent.com/getsiddd/terra-assets/master/static/images/logos/terra.png\"); }\n          #headerGfw .m-header .m-header-nav-container .logo-sections-container .logo-menu.gfw-commodities {\n            background-image: url(\"https://raw.githubusercontent.com/getsiddd/terra-assets/master/static/images/logos/terra.png\"); }\n          #headerGfw .m-header .m-header-nav-container .logo-sections-container .logo-menu.gfw-water {\n            background-image: url(\"https://raw.githubusercontent.com/getsiddd/terra-assets/master/static/images/logos/terra.png\"); }\n          #headerGfw .m-header .m-header-nav-container .logo-sections-container .logo-menu.gfw-climate {\n            background-image: url(\"https://raw.githubusercontent.com/getsiddd/terra-assets/master/static/images/logos/terra.png\"); }\n          #headerGfw .m-header .m-header-nav-container .logo-sections-container .logo-menu .ribbon {\n            text-indent: 0px;\n            position: absolute;\n            bottom: 0;\n            right: 0;\n            line-height: 1;\n            font-weight: 500;\n            font-size: 10px;\n            text-transform: uppercase;\n            -webkit-transform: translate(5px, 8px);\n            transform: translate(5px, 8px); }\n            #headerGfw .m-header .m-header-nav-container .logo-sections-container .logo-menu .ribbon > span {\n              display: block;\n              position: relative;\n              z-index: 2;\n              color: white;\n              background: #b6b6ba;\n              padding: 3px 5px 2px; }\n              #headerGfw .m-header .m-header-nav-container .logo-sections-container .logo-menu .ribbon > span:after {\n                content: \"\";\n                position: absolute;\n                z-index: 1;\n                right: 0;\n                bottom: 100%;\n                width: 0;\n                height: 0;\n                border-style: solid;\n                border-width: 5px 0 0 5px;\n                border-color: transparent transparent transparent #9c9ca1; }\n        #headerGfw .m-header .m-header-nav-container .logo-sections-container .nav-sections {\n          display: none; }\n          @media (min-width: 850px) {\n            #headerGfw .m-header .m-header-nav-container .logo-sections-container .nav-sections {\n              display: -webkit-flex;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-align-items: center;\n                  -ms-flex-align: center;\n                      align-items: center;\n              max-height: 58px;\n              margin-left: 40px;\n              padding-left: 0;\n              list-style: none; } }\n          #headerGfw .m-header .m-header-nav-container .logo-sections-container .nav-sections li {\n            display: inline-block;\n            margin-right: 40px; }\n            #headerGfw .m-header .m-header-nav-container .logo-sections-container .nav-sections li.-selected {\n              position: relative; }\n              #headerGfw .m-header .m-header-nav-container .logo-sections-container .nav-sections li.-selected::after {\n                display: block;\n                position: absolute;\n                bottom: -17px;\n                left: -12px;\n                width: calc(100% + 24px);\n                height: 4px;\n                content: ''; }\n            #headerGfw .m-header .m-header-nav-container .logo-sections-container .nav-sections li.-global::after {\n              background-color: #0077be; }\n            #headerGfw .m-header .m-header-nav-container .logo-sections-container .nav-sections li.-fires::after {\n              background-color: #e7002f; }\n            #headerGfw .m-header .m-header-nav-container .logo-sections-container .nav-sections li.-water::after {\n              background-color: #4099ce; }\n            #headerGfw .m-header .m-header-nav-container .logo-sections-container .nav-sections li.-climate::after {\n              background-color: #5b80a0; }\n            #headerGfw .m-header .m-header-nav-container .logo-sections-container .nav-sections li.-commodities::after {\n              background-color: #e98300; }\n            #headerGfw .m-header .m-header-nav-container .logo-sections-container .nav-sections li:last-of-type {\n              margin-right: 0; }\n            #headerGfw .m-header .m-header-nav-container .logo-sections-container .nav-sections li a {\n              transition: color .1s linear;\n              color: rgba(51, 51, 51, 0.8);\n              font-size: 14px;\n              text-transform: uppercase; }\n              #headerGfw .m-header .m-header-nav-container .logo-sections-container .nav-sections li a:hover {\n                color: #333; }\n      #headerGfw .m-header .m-header-nav-container .options-container {\n        position: absolute;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        right: 15px;\n        height: 100%; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header .m-header-nav-container .options-container {\n            right: 20px;\n            padding-left: 40px;\n            border-left: 1px solid #ddd; } }\n        #headerGfw .m-header .m-header-nav-container .options-container .nav-options {\n          display: -webkit-flex;\n          display: -ms-flexbox;\n          display: flex;\n          position: relative;\n          -webkit-justify-content: flex-end;\n              -ms-flex-pack: end;\n                  justify-content: flex-end;\n          width: 100%;\n          padding-left: 0;\n          list-style: none; }\n          @media (min-width: 850px) {\n            #headerGfw .m-header .m-header-nav-container .options-container .nav-options {\n              -webkit-justify-content: space-between;\n                  -ms-flex-pack: justify;\n                      justify-content: space-between;\n              width: auto; } }\n          #headerGfw .m-header .m-header-nav-container .options-container .nav-options li {\n            display: -webkit-flex;\n            display: -ms-flexbox;\n            display: flex;\n            position: relative;\n            -webkit-align-items: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            height: 100%;\n            margin-right: 40px;\n            transition: color .1s linear;\n            color: rgba(51, 51, 51, 0.5);\n            font-size: 12px;\n            text-transform: uppercase;\n            cursor: pointer; }\n            #headerGfw .m-header .m-header-nav-container .options-container .nav-options li.open-menu-button-login, #headerGfw .m-header .m-header-nav-container .options-container .nav-options li.open-menu-button-language {\n              display: none; }\n              @media (min-width: 850px) {\n                #headerGfw .m-header .m-header-nav-container .options-container .nav-options li.open-menu-button-login, #headerGfw .m-header .m-header-nav-container .options-container .nav-options li.open-menu-button-language {\n                  display: -webkit-flex;\n                  display: -ms-flexbox;\n                  display: flex; } }\n            #headerGfw .m-header .m-header-nav-container .options-container .nav-options li:hover {\n              color: #333; }\n            #headerGfw .m-header .m-header-nav-container .options-container .nav-options li:first-of-type {\n              min-width: 115px;\n              margin-right: 56px; }\n              #headerGfw .m-header .m-header-nav-container .options-container .nav-options li:first-of-type.-min-width-transifex {\n                min-width: 50px; }\n              #headerGfw .m-header .m-header-nav-container .options-container .nav-options li:first-of-type.-min-width-google {\n                min-width: 115px; }\n              #headerGfw .m-header .m-header-nav-container .options-container .nav-options li:first-of-type.-active::after, #headerGfw .m-header .m-header-nav-container .options-container .nav-options li:first-of-type.-active::before {\n                right: -16px; }\n            #headerGfw .m-header .m-header-nav-container .options-container .nav-options li:last-of-type {\n              margin-right: 0; }\n            #headerGfw .m-header .m-header-nav-container .options-container .nav-options li.-active::after, #headerGfw .m-header .m-header-nav-container .options-container .nav-options li.-active::before {\n              position: absolute;\n              right: 0;\n              bottom: -1px;\n              width: 0;\n              height: 0;\n              border: solid transparent;\n              content: '';\n              z-index: 1;\n              pointer-events: none; }\n            #headerGfw .m-header .m-header-nav-container .options-container .nav-options li.-active::after {\n              margin-left: -6px;\n              border-width: 6px;\n              border-color: rgba(51, 51, 51, 0);\n              right: 2px;\n              border-bottom-color: #FFF; }\n            #headerGfw .m-header .m-header-nav-container .options-container .nav-options li.-active::before {\n              margin-left: -8px;\n              border-width: 8px;\n              border-color: rgba(221, 221, 221, 0);\n              border-bottom-color: #ddd; }\n            #headerGfw .m-header .m-header-nav-container .options-container .nav-options li svg {\n              width: 17px;\n              height: 17px;\n              margin-left: 5px;\n              fill: #333; }\n          #headerGfw .m-header .m-header-nav-container .options-container .nav-options .open-menu-button-dashboard.-active .close-icon {\n            display: none; }\n          #headerGfw .m-header .m-header-nav-container .options-container .nav-options .open-menu-button-dashboard.-active .open-icon {\n            display: block; }\n          #headerGfw .m-header .m-header-nav-container .options-container .nav-options .open-menu-button-dashboard.-active .menu-mobile-icon {\n            display: none; }\n          #headerGfw .m-header .m-header-nav-container .options-container .nav-options .open-menu-button-dashboard .open-icon {\n            display: none; }\n          #headerGfw .m-header .m-header-nav-container .options-container .nav-options .open-menu-button-dashboard .desktop-title {\n            display: none;\n            pointer-events: none; }\n            @media (min-width: 850px) {\n              #headerGfw .m-header .m-header-nav-container .options-container .nav-options .open-menu-button-dashboard .desktop-title {\n                display: block; } }\n          #headerGfw .m-header .m-header-nav-container .options-container .nav-options .open-menu-button-dashboard .mobile-title {\n            display: block;\n            pointer-events: none; }\n            @media (min-width: 850px) {\n              #headerGfw .m-header .m-header-nav-container .options-container .nav-options .open-menu-button-dashboard .mobile-title {\n                display: none; } }\n          #headerGfw .m-header .m-header-nav-container .options-container .nav-options .open-menu-button-dashboard .close-icon {\n            position: relative !important;\n            display: none; }\n            @media (min-width: 850px) {\n              #headerGfw .m-header .m-header-nav-container .options-container .nav-options .open-menu-button-dashboard .close-icon {\n                display: block; } }\n          #headerGfw .m-header .m-header-nav-container .options-container .nav-options .open-menu-button-dashboard .menu-mobile-icon {\n            display: block;\n            width: 17px;\n            height: 17px; }\n            @media (min-width: 850px) {\n              #headerGfw .m-header .m-header-nav-container .options-container .nav-options .open-menu-button-dashboard .menu-mobile-icon {\n                display: none; } }\n          #headerGfw .m-header .m-header-nav-container .options-container .nav-options .triangle {\n            position: absolute;\n            top: calc(50% - 3px);\n            right: -12px;\n            width: 0;\n            height: 0;\n            margin-bottom: 4px;\n            margin-left: 5px;\n            border-top: 5px solid #333;\n            border-right: 4px solid transparent;\n            border-left: 4px solid transparent; }\n            #headerGfw .m-header .m-header-nav-container .options-container .nav-options .triangle.-open {\n              -webkit-transform: rotate(180deg);\n                      transform: rotate(180deg); }\n      #headerGfw .m-header .m-header-nav-container.-mobile-menu {\n        -webkit-justify-content: flex-start;\n            -ms-flex-pack: start;\n                justify-content: flex-start; }\n        #headerGfw .m-header .m-header-nav-container.-mobile-menu .logo-sections-container .nav-sections {\n          display: none; }\n        #headerGfw .m-header .m-header-nav-container.-mobile-menu .options-container {\n          width: calc(100% - 88px);\n          padding-left: 0; }\n          #headerGfw .m-header .m-header-nav-container.-mobile-menu .options-container .nav-options {\n            -webkit-justify-content: flex-end;\n                -ms-flex-pack: end;\n                    justify-content: flex-end;\n            width: 100%; }\n            #headerGfw .m-header .m-header-nav-container.-mobile-menu .options-container .nav-options li.open-menu-button-login, #headerGfw .m-header .m-header-nav-container.-mobile-menu .options-container .nav-options li.open-menu-button-language {\n              display: none; }\n            #headerGfw .m-header .m-header-nav-container.-mobile-menu .options-container .nav-options .open-menu-button-dashboard .desktop-title {\n              display: none;\n              pointer-events: none; }\n            #headerGfw .m-header .m-header-nav-container.-mobile-menu .options-container .nav-options .open-menu-button-dashboard .mobile-title {\n              display: block;\n              pointer-events: none; }\n            #headerGfw .m-header .m-header-nav-container.-mobile-menu .options-container .nav-options .open-menu-button-dashboard .close-icon {\n              display: none; }\n            #headerGfw .m-header .m-header-nav-container.-mobile-menu .options-container .nav-options .open-menu-button-dashboard .menu-mobile-icon {\n              display: block;\n              width: 17px;\n              height: 17px; }\n      #headerGfw .m-header .m-header-nav-container.-small-menu .nav-sections {\n        margin-left: 20px; }\n        #headerGfw .m-header .m-header-nav-container.-small-menu .nav-sections li {\n          margin-right: 20px; }\n      #headerGfw .m-header .m-header-nav-container.-small-menu .nav-options li {\n        margin-right: 20px; }\n        #headerGfw .m-header .m-header-nav-container.-small-menu .nav-options li:first-of-type {\n          margin-right: 20px; }\n      #headerGfw .m-header .m-header-nav-container.-small-menu .options-container {\n        padding-left: 20px; }\n    #headerGfw .m-header .sub-menu {\n      display: none;\n      position: relative; }\n      @media (min-width: 850px) {\n        #headerGfw .m-header .sub-menu {\n          position: absolute;\n          bottom: auto;\n          box-shadow: 0 5px 5px -3px rgba(221, 221, 221, 0.5); } }\n      #headerGfw .m-header .sub-menu.-active {\n        display: block;\n        overflow-x: hidden; }\n    #headerGfw .m-header .m-header-sub-menu-dashboard {\n      position: absolute;\n      left: 0;\n      width: 100%;\n      margin-right: auto;\n      margin-left: auto;\n      max-height: calc(100vh - 58px);\n      padding-bottom: 103px;\n      background-color: #FFF;\n      box-shadow: none;\n      overflow: scroll;\n      box-shadow: 0 5px 5px -5px rgba(142, 142, 142, 0.5); }\n      @media (min-width: 850px) {\n        #headerGfw .m-header .m-header-sub-menu-dashboard {\n          max-height: none;\n          padding-bottom: 45px;\n          overflow: hidden; } }\n      #headerGfw .m-header .m-header-sub-menu-dashboard .back-white {\n        display: block;\n        position: fixed;\n        top: 58px;\n        width: 100%;\n        height: 40px;\n        background-color: #FFF;\n        z-index: 2; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header .m-header-sub-menu-dashboard .back-white {\n            display: none; } }\n      #headerGfw .m-header .m-header-sub-menu-dashboard .back-mobile-menu {\n        display: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(221, 221, 221, 0.1);\n        z-index: 3; }\n        #headerGfw .m-header .m-header-sub-menu-dashboard .back-mobile-menu.-show {\n          display: block; }\n      #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container {\n        -webkit-flex-direction: column;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        max-width: 820px;\n        margin: auto;\n        padding: 30px 0; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container {\n            padding: 60px 0 30px; } }\n        #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .form-search-container {\n          padding: 20px 15px 0; }\n          @media (min-width: 850px) {\n            #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .form-search-container {\n              padding: 0; } }\n        #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .search-container {\n          position: relative; }\n          #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .search-container input {\n            width: 100%;\n            height: 46px;\n            padding: 0 20px;\n            border: 0;\n            border-radius: 100px;\n            outline: 0;\n            background-color: rgba(51, 51, 51, 0.08);\n            text-transform: uppercase;\n            font-family: 'Fira GFW Sans', Helvetica, serif; }\n          #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .search-container svg {\n            position: absolute;\n            top: calc(50% - 12px);\n            right: 20px;\n            width: 14px;\n            height: 14px;\n            -webkit-transform: translate(0, calc(50% - 14px));\n                    transform: translate(0, calc(50% - 14px));\n            fill: #333; }\n        #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .mobile-nav-sections {\n          display: block;\n          padding-bottom: 30px;\n          padding-left: 20px;\n          border-bottom: 1px solid rgba(51, 51, 51, 0.2);\n          list-style: none; }\n          @media (min-width: 850px) {\n            #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .mobile-nav-sections {\n              display: none; } }\n          #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .mobile-nav-sections li {\n            display: block;\n            margin-bottom: 30px; }\n            #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .mobile-nav-sections li:last-of-type {\n              margin-bottom: 0; }\n            #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .mobile-nav-sections li a {\n              transition: color .1s linear;\n              color: rgba(51, 51, 51, 0.8);\n              font-size: 14px;\n              text-transform: uppercase; }\n              #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .mobile-nav-sections li a:hover {\n                color: #333; }\n        #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container {\n          margin: 30px 0; }\n          @media (min-width: 850px) {\n            #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container {\n              margin-top: 15px; } }\n          #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container h3 {\n            color: #9b9b9b;\n            font-size: 14px;\n            line-height: 1;\n            text-transform: uppercase;\n            padding-left: 15px; }\n            @media (min-width: 850px) {\n              #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container h3 {\n                padding-left: 0; } }\n          #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container {\n            -webkit-flex-direction: row;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            -webkit-flex-flow: row;\n                -ms-flex-flow: row;\n                    flex-flow: row;\n            margin-top: 30px;\n            overflow-x: scroll;\n            -ms-overflow-style: none;\n            display: -webkit-flex;\n            display: -ms-flexbox;\n            display: flex;\n            padding-left: 15px; }\n            @media (min-width: 850px) {\n              #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container {\n                overflow-x: hidden;\n                padding-left: 0; } }\n            #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container::-webkit-scrollbar {\n              display: none; }\n            #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box-last {\n              margin-right: 15px; }\n              @media (min-width: 850px) {\n                #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box-last {\n                  margin-right: 20px; } }\n            #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box {\n              display: block;\n              width: 88px;\n              min-width: 88px;\n              height: 88px;\n              min-height: 88px;\n              margin-right: 15px;\n              background-repeat: no-repeat;\n              background-size: cover;\n              cursor: pointer; }\n              @media (min-width: 850px) {\n                #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box {\n                  margin-right: 30px; } }\n              #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box.gfw-global {\n                background-image: url(\"https://raw.githubusercontent.com/getsiddd/terra-assets/master/static/images/terra.png\"); }\n              #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box.gfw-watcher {\n                background-image: url(\"https://raw.githubusercontent.com/getsiddd/terra-assets/master/static/images/logos/terra.png\"); }\n              #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box.gfw-fires {\n                background-image: url(\"https://raw.githubusercontent.com/getsiddd/terra-assets/master/static/images/logos/terra.png\"); }\n              #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box.gfw-commodities {\n                background-image: url(\"https://raw.githubusercontent.com/getsiddd/terra-assets/master/static/images/logos/terra.png\"); }\n              #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box.gfw-water {\n                background-image: url(\"https://raw.githubusercontent.com/getsiddd/terra-assets/master/static/images/logos/terra.png\"); }\n              #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box.gfw-climate {\n                background-image: url(\"https://raw.githubusercontent.com/getsiddd/terra-assets/master/static/images/logos/terra.png\"); }\n              #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box.-last {\n                display: -webkit-flex;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-flex-direction: column;\n                    -ms-flex-direction: column;\n                        flex-direction: column;\n                -webkit-align-items: center;\n                    -ms-flex-align: center;\n                        align-items: center;\n                -webkit-justify-content: flex-end;\n                    -ms-flex-pack: end;\n                        justify-content: flex-end;\n                border: 1px solid rgba(51, 51, 51, 0.2);\n                background: #FFF;\n                margin-right: 15px; }\n                @media (min-width: 850px) {\n                  #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box.-last {\n                    margin-right: 20px; } }\n                #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box.-last span {\n                  margin-top: 5px;\n                  margin-bottom: 5px;\n                  color: rgba(51, 51, 51, 0.8);\n                  font-size: 12px;\n                  line-height: 1.17;\n                  text-align: center;\n                  text-transform: uppercase; }\n                #headerGfw .m-header .m-header-sub-menu-dashboard .nav-sub-menu-container .applications-container .boxes-container .box.-last svg {\n                  width: 40px;\n                  height: 25px;\n                  fill: #333; }\n      #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container {\n        margin-top: 30px;\n        padding: 0 15px; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container {\n            padding: 0; } }\n        #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container h3 {\n          padding-top: 30px;\n          border-top: 1px solid rgba(51, 51, 51, 0.2);\n          color: #9b9b9b;\n          font-size: 14px;\n          line-height: 1;\n          text-transform: uppercase; }\n        #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container .more-options-container {\n          -webkit-flex-direction: column;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          margin-top: 30px;\n          display: -webkit-flex;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-flex-flow: row wrap;\n              -ms-flex-flow: row wrap;\n                  flex-flow: row wrap; }\n          @media (min-width: 850px) {\n            #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container .more-options-container {\n              -webkit-flex-direction: row;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              margin-top: 0; } }\n          #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container .more-options-container .more-options-item {\n            display: -webkit-flex;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-flex-basis: 100%;\n                -ms-flex-preferred-size: 100%;\n                    flex-basis: 100%;\n            -webkit-flex-direction: row;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            -webkit-align-content: center;\n                -ms-flex-line-pack: center;\n                    align-content: center;\n            -webkit-align-items: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            margin-bottom: 26px; }\n            @media (min-width: 850px) {\n              #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container .more-options-container .more-options-item {\n                -webkit-flex-basis: 20%;\n                    -ms-flex-preferred-size: 20%;\n                        flex-basis: 20%;\n                margin-right: 30px; } }\n            #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container .more-options-container .more-options-item .svg {\n              width: 20px;\n              height: 20px;\n              margin-right: 12px; }\n            #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container .more-options-container .more-options-item span {\n              color: #333;\n              font-size: 12px;\n              text-transform: uppercase; }\n            #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container .more-options-container .more-options-item.-hidden {\n              display: none; }\n        #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container .more-options-secondary-container {\n          display: none;\n          margin-top: 26px;\n          padding-left: 0;\n          list-style: none; }\n          @media (min-width: 850px) {\n            #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container .more-options-secondary-container {\n              display: block; } }\n          #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container .more-options-secondary-container li {\n            display: none;\n            margin-right: 30px;\n            margin-bottom: 36px; }\n            #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container .more-options-secondary-container li:last-of-type {\n              margin-right: 0; }\n            #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container .more-options-secondary-container li.-show {\n              display: inline-block; }\n            #headerGfw .m-header .m-header-sub-menu-dashboard .m-header-more-container .more-options-secondary-container li a {\n              color: #333;\n              font-size: 12px;\n              text-transform: uppercase; }\n      #headerGfw .m-header .m-header-sub-menu-dashboard .m-sitemap-info-container {\n        margin: 10px auto 0;\n        padding: 0 15px; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header .m-header-sub-menu-dashboard .m-sitemap-info-container {\n            padding: 0; } }\n        #headerGfw .m-header .m-header-sub-menu-dashboard .m-sitemap-info-container .sitemap-container h3 {\n          padding-top: 30px;\n          border-top: 1px solid rgba(51, 51, 51, 0.2);\n          color: #9b9b9b;\n          font-size: 14px;\n          line-height: 1;\n          text-transform: uppercase; }\n      #headerGfw .m-header .m-header-sub-menu-dashboard.-mobile {\n        position: relative;\n        max-height: calc(100vh - 58px);\n        padding-bottom: 103px; }\n        #headerGfw .m-header .m-header-sub-menu-dashboard.-mobile .back-white {\n          display: block; }\n        #headerGfw .m-header .m-header-sub-menu-dashboard.-mobile .nav-sub-menu-container .mobile-nav-sections {\n          display: block; }\n        #headerGfw .m-header .m-header-sub-menu-dashboard.-mobile .nav-sub-menu-container .applications-container .boxes-container {\n          overflow-x: scroll;\n          -ms-overflow-style: none; }\n        #headerGfw .m-header .m-header-sub-menu-dashboard.-mobile .m-header-more-container .more-options-container {\n          -webkit-flex-direction: column;\n              -ms-flex-direction: column;\n                  flex-direction: column; }\n          #headerGfw .m-header .m-header-sub-menu-dashboard.-mobile .m-header-more-container .more-options-container .more-options-item {\n            -webkit-flex-basis: 100%;\n                -ms-flex-preferred-size: 100%;\n                    flex-basis: 100%; }\n    #headerGfw .m-header .m-header-sub-menu-login {\n      position: absolute;\n      top: 58px;\n      left: 0;\n      width: 100%;\n      height: 100vh;\n      padding: 60px 0;\n      border-top: 1px solid #ddd;\n      background-color: #FFF; }\n      @media (min-width: 850px) {\n        #headerGfw .m-header .m-header-sub-menu-login {\n          top: 57px;\n          left: -320px;\n          min-width: 400px;\n          max-width: 400px;\n          height: auto;\n          padding: 40px;\n          border: 1px solid #ddd; } }\n      #headerGfw .m-header .m-header-sub-menu-login .container {\n        margin: 0 auto;\n        padding-right: 16px !important;\n        padding-left: 16px !important; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header .m-header-sub-menu-login .container {\n            max-width: none; } }\n      #headerGfw .m-header .m-header-sub-menu-login p {\n        color: #333;\n        font-size: 14px;\n        text-transform: initial; }\n        #headerGfw .m-header .m-header-sub-menu-login p a {\n          color: #0077be; }\n      #headerGfw .m-header .m-header-sub-menu-login ul {\n        padding-left: 0;\n        list-style: none; }\n        #headerGfw .m-header .m-header-sub-menu-login ul .login-item {\n          display: -webkit-flex;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-align-content: center;\n              -ms-flex-line-pack: center;\n                  align-content: center;\n          -webkit-align-items: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-justify-content: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          width: 100%;\n          height: 50px !important;\n          margin-bottom: 10px;\n          transition: background-color .1s linear;\n          color: #FFF !important; }\n          #headerGfw .m-header .m-header-sub-menu-login ul .login-item:first-of-type {\n            margin-top: 20px; }\n          #headerGfw .m-header .m-header-sub-menu-login ul .login-item:last-of-type {\n            margin-bottom: 0; }\n          #headerGfw .m-header .m-header-sub-menu-login ul .login-item.-facebook {\n            background-color: #39579b; }\n            #headerGfw .m-header .m-header-sub-menu-login ul .login-item.-facebook:hover {\n              background-color: #4061ae; }\n          #headerGfw .m-header .m-header-sub-menu-login ul .login-item.-twitter {\n            background-color: #598dca; }\n            #headerGfw .m-header .m-header-sub-menu-login ul .login-item.-twitter:hover {\n              background-color: #6c9ad0; }\n          #headerGfw .m-header .m-header-sub-menu-login ul .login-item.-google {\n            background-color: #da4735; }\n            #headerGfw .m-header .m-header-sub-menu-login ul .login-item.-google:hover {\n              background-color: #de5b4b; }\n          #headerGfw .m-header .m-header-sub-menu-login ul .login-item a {\n            color: #FFF;\n            font-size: 14px;\n            text-transform: uppercase;\n            white-space: nowrap; }\n      #headerGfw .m-header .m-header-sub-menu-login.-mobile {\n        position: absolute;\n        top: 58px;\n        left: 0;\n        width: 100%;\n        min-width: none;\n        max-width: none;\n        height: 100vh;\n        padding: 60px 0;\n        border: 1px solid #ddd;\n        border-top: 0;\n        background-color: #FFF; }\n        #headerGfw .m-header .m-header-sub-menu-login.-mobile .container {\n          max-width: 83.33333%;\n          margin: 0 auto; }\n    #headerGfw .m-header .my-gfw-loggedin {\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-flex-direction: row-reverse;\n          -ms-flex-direction: row-reverse;\n              flex-direction: row-reverse;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      #headerGfw .m-header .my-gfw-loggedin .-svg {\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex; }\n      #headerGfw .m-header .my-gfw-loggedin span {\n        color: rgba(51, 51, 51, 0.5);\n        font-size: 12px;\n        text-transform: uppercase;\n        cursor: pointer; }\n      #headerGfw .m-header .my-gfw-loggedin svg {\n        width: 17px;\n        height: 17px;\n        margin-right: 5px; }\n        #headerGfw .m-header .my-gfw-loggedin svg.-close {\n          display: none; }\n    #headerGfw .m-header .m-header-submenu-logged {\n      width: 100vw;\n      height: calc(100vh - 58px) !important;\n      padding: 0;\n      background: #FFF !important;\n      box-shadow: none;\n      opacity: 1;\n      visibility: visible !important; }\n      #headerGfw .m-header .m-header-submenu-logged.-active {\n        display: block !important;\n        top: 58px; }\n      @media (min-width: 850px) {\n        #headerGfw .m-header .m-header-submenu-logged {\n          top: 58px;\n          right: -25px;\n          min-width: 200px;\n          max-width: 200px;\n          height: auto !important;\n          border: 1px solid #ddd;\n          border-top: 0; }\n          #headerGfw .m-header .m-header-submenu-logged .login-list {\n            padding: 10px 0; }\n            #headerGfw .m-header .m-header-submenu-logged .login-list a {\n              padding: 12px 15px;\n              max-width: none;\n              margin-right: 0 !important; }\n              #headerGfw .m-header .m-header-submenu-logged .login-list a:first-of-type {\n                margin-top: 0; } }\n      #headerGfw .m-header .m-header-submenu-logged ul a {\n        display: block;\n        position: relative;\n        padding: 15px;\n        cursor: pointer;\n        z-index: 1; }\n        #headerGfw .m-header .m-header-submenu-logged ul a span {\n          color: #333; }\n        #headerGfw .m-header .m-header-submenu-logged ul a:first-of-type {\n          margin-top: 40px; }\n        #headerGfw .m-header .m-header-submenu-logged ul a a span {\n          text-transform: uppercase; }\n        #headerGfw .m-header .m-header-submenu-logged ul a:hover {\n          background-color: #e0e0e0; }\n      #headerGfw .m-header .m-header-submenu-logged.-mobile {\n        height: calc(100vh - 58px * 2) !important;\n        padding: 0;\n        background: #FFF !important;\n        box-shadow: none;\n        opacity: 1;\n        visibility: visible !important;\n        left: 0;\n        min-width: none;\n        max-width: none; }\n  #headerGfw .sticky-nav-options {\n    display: none;\n    position: fixed;\n    top: calc(100vh - 58px);\n    bottom: 0;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 100%;\n    height: 58px;\n    min-height: 58px;\n    max-height: 58px;\n    transition: color .1s linear;\n    background-color: #FFF;\n    color: rgba(51, 51, 51, 0.5);\n    font-size: 14px;\n    text-transform: uppercase;\n    box-shadow: 0 0 5px 0 rgba(221, 221, 221, 0.5);\n    cursor: pointer;\n    z-index: 1000; }\n    #headerGfw .sticky-nav-options:hover {\n      color: #333; }\n    #headerGfw .sticky-nav-options.-show {\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex; }\n    #headerGfw .sticky-nav-options .sticky-item {\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-flex-basis: 50%;\n          -ms-flex-preferred-size: 50%;\n              flex-basis: 50%;\n      -webkit-align-content: center;\n          -ms-flex-line-pack: center;\n              align-content: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      height: 100%; }\n      #headerGfw .sticky-nav-options .sticky-item.-border {\n        width: 50%;\n        border-right: 1px solid #ddd; }\n      #headerGfw .sticky-nav-options .sticky-item.-active .txlive-langselector-marker {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg); }\n    #headerGfw .sticky-nav-options svg {\n      width: 17px;\n      height: 17px;\n      margin-left: 5px;\n      fill: #333; }\n    #headerGfw .sticky-nav-options .open-menu-button-login .profile-icon {\n      display: block; }\n    #headerGfw .sticky-nav-options .open-menu-button-login .close-icon {\n      display: none; }\n    #headerGfw .sticky-nav-options .open-menu-button-login.-active .profile-icon {\n      display: none; }\n    #headerGfw .sticky-nav-options .open-menu-button-login.-active .close-icon {\n      display: block; }\n  #headerGfw #googleTranslate,\n  #headerGfw #googleTranslateMobile {\n    display: none; }\n    #headerGfw #googleTranslate .goog-te-gadget-icon,\n    #headerGfw #googleTranslateMobile .goog-te-gadget-icon {\n      display: none !important; }\n    #headerGfw #googleTranslate .skiptranslate .goog-te-gadget-simple .goog-te-menu-value span,\n    #headerGfw #googleTranslateMobile .skiptranslate .goog-te-gadget-simple .goog-te-menu-value span {\n      border-left: 0 !important; }\n      #headerGfw #googleTranslate .skiptranslate .goog-te-gadget-simple .goog-te-menu-value span:first-of-type,\n      #headerGfw #googleTranslateMobile .skiptranslate .goog-te-gadget-simple .goog-te-menu-value span:first-of-type {\n        transition: color .1s linear;\n        color: rgba(51, 51, 51, 0.5);\n        font-size: 12px;\n        text-transform: uppercase;\n        cursor: pointer; }\n        #headerGfw #googleTranslate .skiptranslate .goog-te-gadget-simple .goog-te-menu-value span:first-of-type:hover,\n        #headerGfw #googleTranslateMobile .skiptranslate .goog-te-gadget-simple .goog-te-menu-value span:first-of-type:hover {\n          color: #333; }\n      #headerGfw #googleTranslate .skiptranslate .goog-te-gadget-simple .goog-te-menu-value span:last-of-type,\n      #headerGfw #googleTranslateMobile .skiptranslate .goog-te-gadget-simple .goog-te-menu-value span:last-of-type {\n        margin-left: 5px !important; }\n  #headerGfw.hide-translation .open-menu-button-language {\n    display: none !important; }\n\n.back-close-menu {\n  display: none;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n  opacity: .1;\n  z-index: 3; }\n  .back-close-menu.-show {\n    display: block; }\n\n.line-dashboard {\n  position: absolute;\n  top: 58px;\n  width: 100vw;\n  height: 1px;\n  background-color: #ddd; }\n\n#headerGfw .m-search {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: #333;\n  -webkit-transform: translate(20px, 0);\n          transform: translate(20px, 0);\n  transition: all 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  opacity: 0;\n  visibility: hidden; }\n  #headerGfw .m-search.-active {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    opacity: 1;\n    visibility: visible; }\n  #headerGfw .m-search form {\n    position: relative;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 35px; }\n    #headerGfw .m-search form button {\n      width: 45px;\n      height: 35px;\n      position: absolute;\n      top: 0;\n      left: 0; }\n      #headerGfw .m-search form button.-close {\n        left: auto;\n        right: 0; }\n        #headerGfw .m-search form button.-close svg {\n          width: 12px;\n          height: 12px; }\n      #headerGfw .m-search form button:hover svg {\n        fill: #FFF; }\n    #headerGfw .m-search form input {\n      border: none;\n      background: none;\n      box-shadow: none;\n      border-radius: 0;\n      color: #b8bab8;\n      padding: 0 5px;\n      margin: 0 45px;\n      line-height: 24px;\n      outline: none;\n      font-size: 12px;\n      font-family: inherit; }\n    #headerGfw .m-search form svg {\n      display: block;\n      width: 18px;\n      height: 18px;\n      margin: 0 auto;\n      transition: all 0.15s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n      fill: #b8bab8; }\n      @media (min-width: 850px) {\n        #headerGfw .m-search form svg {\n          display: inline-block;\n          width: 18px;\n          height: 35px; } }\n\n#headerGfw .m-apps-content h1 {\n  position: relative;\n  width: 60px;\n  height: 60px;\n  margin: 0 auto;\n  background-size: contain; }\n  @media (min-width: 850px) {\n    #headerGfw .m-apps-content h1 {\n      width: 90px;\n      height: 90px; } }\n  #headerGfw .m-apps-content h1 a {\n    display: block;\n    width: 100%;\n    height: 100%;\n    text-transform: uppercase;\n    color: #FFF;\n    font-size: 13px;\n    white-space: nowrap; }\n    #headerGfw .m-apps-content h1 a span {\n      position: absolute;\n      top: 100%;\n      left: 50%;\n      -webkit-transform: translate(-50%, 10px);\n              transform: translate(-50%, 10px); }\n\n#headerGfw .m-apps-content .apps {\n  background-color: #262424;\n  padding: 40px 0px; }\n  @media (min-width: 700px) {\n    #headerGfw .m-apps-content .apps {\n      padding: 40px; } }\n  @media (min-width: 850px) {\n    #headerGfw .m-apps-content .apps {\n      padding: 40px 40px 80px; } }\n  #headerGfw .m-apps-content .apps ul {\n    width: 280px;\n    max-width: 630px;\n    margin: 0px auto;\n    padding: 50px 0 0;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    @media (min-width: 850px) {\n      #headerGfw .m-apps-content .apps ul {\n        padding: 60px 0 0;\n        width: auto;\n        -webkit-justify-content: flex-start;\n            -ms-flex-pack: start;\n                justify-content: flex-start; } }\n    @media (max-width: 849px) {\n      #headerGfw .m-apps-content .apps ul > li:nth-child(n+4) {\n        margin-top: 20px; } }\n    @media (min-width: 850px) {\n      #headerGfw .m-apps-content .apps ul > li {\n        width: 25%; }\n        #headerGfw .m-apps-content .apps ul > li:nth-child(n+5) {\n          margin-top: 30px; } }\n    #headerGfw .m-apps-content .apps ul > li .app {\n      width: 100px;\n      margin: 0 auto;\n      border: 1px solid #0077be;\n      width: 80px;\n      height: 80px; }\n      @media (min-width: 850px) {\n        #headerGfw .m-apps-content .apps ul > li .app {\n          width: 112px;\n          height: 112px; }\n          #headerGfw .m-apps-content .apps ul > li .app:hover, #headerGfw .m-apps-content .apps ul > li .app.-current {\n            background: #0077be; }\n            #headerGfw .m-apps-content .apps ul > li .app:hover svg, #headerGfw .m-apps-content .apps ul > li .app.-current svg {\n              fill: #FFF; } }\n      #headerGfw .m-apps-content .apps ul > li .app svg {\n        display: block;\n        width: 26px;\n        height: 26px;\n        margin: 15px auto 6px;\n        fill: #0077be; }\n        @media (min-width: 850px) {\n          #headerGfw .m-apps-content .apps ul > li .app svg {\n            width: 38px;\n            height: 38px;\n            margin: 15px auto 10px; } }\n      #headerGfw .m-apps-content .apps ul > li .app span {\n        display: block;\n        text-transform: uppercase;\n        font-size: 10px;\n        line-height: 1.25;\n        color: #FFF;\n        text-align: center; }\n        @media (min-width: 850px) {\n          #headerGfw .m-apps-content .apps ul > li .app span {\n            padding: 0 10px;\n            font-size: 12px; } }\n    #headerGfw .m-apps-content .apps ul > li.shape-fires .app {\n      border-color: #ed1846; }\n      @media (min-width: 850px) {\n        #headerGfw .m-apps-content .apps ul > li.shape-fires .app:hover, #headerGfw .m-apps-content .apps ul > li.shape-fires .app.-current {\n          background: #ed1846; } }\n    #headerGfw .m-apps-content .apps ul > li.shape-fires svg {\n      fill: #ed1846; }\n    #headerGfw .m-apps-content .apps ul > li.shape-commodities .app {\n      border-color: #e98300; }\n      @media (min-width: 850px) {\n        #headerGfw .m-apps-content .apps ul > li.shape-commodities .app:hover, #headerGfw .m-apps-content .apps ul > li.shape-commodities .app.-current {\n          background: #e98300; } }\n    #headerGfw .m-apps-content .apps ul > li.shape-commodities svg {\n      fill: #e98300; }\n    #headerGfw .m-apps-content .apps ul > li.shape-climate .app {\n      border-color: #5b80a0; }\n      @media (min-width: 850px) {\n        #headerGfw .m-apps-content .apps ul > li.shape-climate .app:hover, #headerGfw .m-apps-content .apps ul > li.shape-climate .app.-current {\n          background: #5b80a0; } }\n    #headerGfw .m-apps-content .apps ul > li.shape-climate svg {\n      fill: #5b80a0; }\n    #headerGfw .m-apps-content .apps ul > li.shape-water .app {\n      border-color: #4099ce; }\n      @media (min-width: 850px) {\n        #headerGfw .m-apps-content .apps ul > li.shape-water .app:hover, #headerGfw .m-apps-content .apps ul > li.shape-water .app.-current {\n          background: #4099ce; } }\n    #headerGfw .m-apps-content .apps ul > li.shape-water svg {\n      fill: #4099ce; }\n\n#googleTranslate .goog-te-gadget {\n  font-family: inherit;\n  text-align: center; }\n  #googleTranslate .goog-te-gadget .goog-te-gadget-simple {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 35px;\n    border: 0;\n    background: none; }\n    #googleTranslate .goog-te-gadget .goog-te-gadget-simple img {\n      display: none; }\n\n#headerGfw #transifexTranslateElement {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 35px;\n  font-size: 11px; }\n  @media (min-width: 850px) {\n    #headerGfw #transifexTranslateElement.-visible {\n      display: block; } }\n  #headerGfw #transifexTranslateElement .txlive-langselector-toggle {\n    transition: color .1s linear;\n    border: 1px solid transparent;\n    background-color: #FFF;\n    color: rgba(51, 51, 51, 0.5);\n    font-size: 12px;\n    text-transform: uppercase;\n    cursor: pointer;\n    padding: 0; }\n    #headerGfw #transifexTranslateElement .txlive-langselector-toggle:hover {\n      transition: color .1s linear;\n      color: #333; }\n    #headerGfw #transifexTranslateElement .txlive-langselector-toggle .txlive-langselector-current {\n      display: block;\n      line-height: 1; }\n  #headerGfw #transifexTranslateElement .txlive-langselector-list {\n    position: absolute;\n    top: 46px;\n    right: -25px;\n    min-width: 200px;\n    max-width: 200px;\n    padding: 0;\n    border-top: 0;\n    background: #FFF;\n    box-shadow: none; }\n    @media (min-width: 850px) {\n      #headerGfw #transifexTranslateElement .txlive-langselector-list {\n        border: 1px solid #ddd; } }\n    #headerGfw #transifexTranslateElement .txlive-langselector-list li {\n      position: relative;\n      padding: 12px 15px;\n      color: #333;\n      text-transform: uppercase;\n      z-index: 1; }\n      #headerGfw #transifexTranslateElement .txlive-langselector-list li:first-of-type {\n        margin-top: 12px; }\n      #headerGfw #transifexTranslateElement .txlive-langselector-list li:hover {\n        background-color: #e0e0e0; }\n\n#headerGfw #transifexTranslateMobileElement {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  font-size: 15px; }\n  @media (min-width: 850px) {\n    #headerGfw #transifexTranslateMobileElement {\n      display: none; } }\n  #headerGfw #transifexTranslateMobileElement.-active {\n    display: block; }\n  #headerGfw #transifexTranslateMobileElement .txlive-langselector-toggle {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  #headerGfw #transifexTranslateMobileElement .txlive-langselector-list {\n    display: none;\n    position: absolute;\n    top: calc(-100vh + 58px * 2);\n    left: 0;\n    padding: 0 15px;\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    background: #FFF;\n    box-shadow: none;\n    width: calc(100vw);\n    height: calc(100vh - 58px * 2); }\n    @media (min-width: 850px) {\n      #headerGfw #transifexTranslateMobileElement .txlive-langselector-list {\n        padding: 0 15px; } }\n    #headerGfw #transifexTranslateMobileElement .txlive-langselector-list.-active {\n      display: block;\n      border-bottom: 1px solid #ddd; }\n    #headerGfw #transifexTranslateMobileElement .txlive-langselector-list li {\n      position: relative;\n      padding: 10px 0;\n      color: #333;\n      z-index: 1; }\n      #headerGfw #transifexTranslateMobileElement .txlive-langselector-list li:first-of-type {\n        margin-top: 50px; }\n      #headerGfw #transifexTranslateMobileElement .txlive-langselector-list li:hover {\n        background-color: #e0e0e0; }\n  #headerGfw #transifexTranslateMobileElement .txlive-langselector-marker {\n    display: block;\n    width: 0;\n    height: 0;\n    border-width: 6.9px 4px 0;\n    border-style: solid;\n    border-color: #333 transparent transparent transparent;\n    margin-left: 10px; }\n\n#headerGfw .m-header-submenu {\n  position: fixed;\n  top: auto;\n  bottom: 50px;\n  height: calc(100vh - 50px);\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n  left: 0;\n  width: 100%;\n  z-index: 3;\n  line-height: 1.25;\n  opacity: 0;\n  visibility: hidden;\n  display: none;\n  box-shadow: 0 0 4px rgba(142, 142, 142, 0.5); }\n  @media (min-width: 700px) {\n    #headerGfw .m-header-submenu {\n      position: absolute;\n      width: auto;\n      height: auto; } }\n  @media (min-width: 850px) {\n    #headerGfw .m-header-submenu {\n      top: 35px;\n      right: 0;\n      left: auto;\n      bottom: auto;\n      overflow: visible; } }\n  #headerGfw .m-header-submenu.-active {\n    opacity: 1;\n    visibility: visible;\n    display: block; }\n  #headerGfw .m-header-submenu > * {\n    position: relative;\n    z-index: 2; }\n  @media (min-width: 850px) {\n    #headerGfw .m-header-submenu.-default {\n      top: 40px; } }\n  #headerGfw .m-header-submenu.-default:before {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    height: 100vh;\n    width: 100%;\n    background: #262424; }\n    @media (min-width: 700px) {\n      #headerGfw .m-header-submenu.-default:before {\n        bottom: 100%;\n        background: transparent;\n        height: 14px; } }\n  #headerGfw .m-header-submenu.-default:after {\n    display: none;\n    content: \"\";\n    position: absolute;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    background: white;\n    width: 10px;\n    height: 10px;\n    border: 1px solid #E5E5DF;\n    border-bottom: none;\n    border-right: none;\n    top: -5px; }\n    @media (min-width: 850px) {\n      #headerGfw .m-header-submenu.-default:after {\n        display: block; } }\n  @media (min-width: 850px) {\n    #headerGfw .m-header-submenu.-default.-right {\n      right: 0;\n      left: auto; }\n      #headerGfw .m-header-submenu.-default.-right:after {\n        left: auto;\n        right: 23px;\n        margin: 0px -5px 0 0; }\n      #headerGfw .m-header-submenu.-default.-right.-apps:after {\n        left: auto;\n        right: 67px;\n        margin: 0px -5px 0 0; } }\n  #headerGfw .m-header-submenu.-default.-center {\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0); }\n  #headerGfw .m-header-submenu.-default.-left {\n    left: 0; }\n  #headerGfw .m-header-submenu.-default:after {\n    background: #262424;\n    border: none; }\n  #headerGfw .m-header-submenu.-default > ul {\n    padding: 20px;\n    background: #262424;\n    font-size: 12px; }\n    @media (min-width: 850px) {\n      #headerGfw .m-header-submenu.-default > ul {\n        padding: 40px; } }\n    #headerGfw .m-header-submenu.-default > ul:first-child {\n      border-top: none; }\n    #headerGfw .m-header-submenu.-default > ul > li {\n      text-transform: uppercase;\n      margin-top: 10px; }\n      #headerGfw .m-header-submenu.-default > ul > li:first-child {\n        margin-top: 0; }\n      #headerGfw .m-header-submenu.-default > ul > li a {\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-align-items: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-justify-content: flex-start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        color: #FFF;\n        white-space: nowrap; }\n        #headerGfw .m-header-submenu.-default > ul > li a:hover span {\n          border-color: #0077be; }\n        #headerGfw .m-header-submenu.-default > ul > li a svg {\n          fill: #0077be;\n          margin: 0 8px 0 0;\n          height: 18px; }\n        #headerGfw .m-header-submenu.-default > ul > li a span {\n          border-bottom: 1px solid transparent; }\n  @media (min-width: 850px) {\n    #headerGfw .m-header-submenu.-apps {\n      width: 100%; } }\n  #headerGfw .m-header-submenu.-home {\n    width: 100%;\n    font-size: 12px;\n    padding: 0;\n    z-index: 4;\n    overflow-y: auto; }\n    @media (min-width: 850px) {\n      #headerGfw .m-header-submenu.-home {\n        overflow-y: visible;\n        padding: 35px 0;\n        text-align: left;\n        background: #FFF; } }\n    @media (max-width: 849px) {\n      #headerGfw .m-header-submenu.-home.-active {\n        position: fixed;\n        top: auto;\n        bottom: 50px;\n        left: 0;\n        height: 100vh;\n        max-height: calc(100vh - 50px); }\n        #headerGfw .m-header-submenu.-home.-active:after {\n          display: none; } }\n    #headerGfw .m-header-submenu.-home:after {\n      left: 13px; }\n    #headerGfw .m-header-submenu.-home h3 {\n      text-transform: uppercase;\n      border-top: 1px solid #D6D6D9;\n      font-size: 16px;\n      background: #F2F2F3;\n      color: #333; }\n      #headerGfw .m-header-submenu.-home h3.-selector {\n        background: #EAE9E9;\n        color: #6C6C6C;\n        border-bottom: 1px solid #D6D6D9; }\n        #headerGfw .m-header-submenu.-home h3.-selector svg {\n          position: absolute;\n          top: 20px;\n          right: 23px;\n          width: 14px;\n          height: 14px;\n          fill: #333; }\n      #headerGfw .m-header-submenu.-home h3.-active svg {\n        -webkit-transform-origin: 50% 50%;\n                transform-origin: 50% 50%;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      @media (min-width: 850px) {\n        #headerGfw .m-header-submenu.-home h3 {\n          border-top: none;\n          font-size: 12px;\n          font-weight: 500;\n          background: none; } }\n      #headerGfw .m-header-submenu.-home h3 > a, #headerGfw .m-header-submenu.-home h3 > span {\n        padding: 15px 20px;\n        display: block; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header-submenu.-home h3 > a, #headerGfw .m-header-submenu.-home h3 > span {\n            padding: 0;\n            display: inline; } }\n      #headerGfw .m-header-submenu.-home h3.-title {\n        text-align: center;\n        padding: 0 0 35px;\n        display: none; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header-submenu.-home h3.-title {\n            display: block; } }\n        #headerGfw .m-header-submenu.-home h3.-title a {\n          background: #0077be;\n          color: #FFF;\n          display: inline-block;\n          padding: 10px 15px 8px;\n          border-radius: 20px;\n          transition: all 0.15s cubic-bezier(0.445, 0.05, 0.55, 0.95); }\n          #headerGfw .m-header-submenu.-home h3.-title a:hover {\n            background: #789631; }\n    #headerGfw .m-header-submenu.-home > ul {\n      width: 100%;\n      position: absolute;\n      bottom: 0;\n      max-height: 100%; }\n      @media (min-width: 850px) {\n        #headerGfw .m-header-submenu.-home > ul {\n          display: -webkit-flex;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-justify-content: space-between;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          position: relative;\n          bottom: auto; } }\n      #headerGfw .m-header-submenu.-home > ul > li {\n        background: #FFF;\n        position: relative; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header-submenu.-home > ul > li {\n            width: 20%;\n            padding: 0 25px;\n            border-right: 1px solid #E5E5DF; }\n            #headerGfw .m-header-submenu.-home > ul > li.-only-mobile {\n              display: none; }\n            #headerGfw .m-header-submenu.-home > ul > li:last-child {\n              border-right: none; } }\n        #headerGfw .m-header-submenu.-home > ul > li a {\n          color: #333;\n          padding: 15px 20px;\n          display: block; }\n          #headerGfw .m-header-submenu.-home > ul > li a:hover {\n            color: #0077be; }\n        #headerGfw .m-header-submenu.-home > ul > li > ul {\n          font-size: 15px;\n          padding: 15px 0; }\n          @media (min-width: 850px) {\n            #headerGfw .m-header-submenu.-home > ul > li > ul {\n              margin: 15px 0 0;\n              padding: 0;\n              font-size: 11px; } }\n          #headerGfw .m-header-submenu.-home > ul > li > ul > li {\n            display: block;\n            text-transform: none;\n            margin: 15px 0 0; }\n            #headerGfw .m-header-submenu.-home > ul > li > ul > li:first-child {\n              margin: 0; }\n            #headerGfw .m-header-submenu.-home > ul > li > ul > li a {\n              padding: 0 25px; }\n    #headerGfw .m-header-submenu.-home form button {\n      position: absolute;\n      top: 15px;\n      right: 20px; }\n      #headerGfw .m-header-submenu.-home form button svg {\n        fill: #333; }\n    #headerGfw .m-header-submenu.-home form input {\n      -webkit-appearance: none;\n      -moz-appearance: none;\n           appearance: none;\n      box-shadow: none;\n      font-family: inherit;\n      font-size: 16px;\n      margin: 0;\n      border: none;\n      border-top: 1px solid #F7F7F7;\n      background: #EAE9E9;\n      border-radius: 0;\n      padding: 12px 20px 13px 20px;\n      padding-right: 40px;\n      outline: none; }\n      #headerGfw .m-header-submenu.-home form input::-webkit-input-placeholder {\n        color: #6C6C6C;\n        font-style: italic;\n        border-left: 1px solid #999999;\n        padding-left: 6px; }\n      #headerGfw .m-header-submenu.-home form input:-moz-placeholder {\n        /* Firefox 18- */\n        color: #6C6C6C;\n        font-style: italic;\n        border-left: 1px solid #999999;\n        padding-left: 6px; }\n      #headerGfw .m-header-submenu.-home form input::-moz-placeholder {\n        /* Firefox 19+ */\n        color: #6C6C6C;\n        font-style: italic;\n        border-left: 1px solid #999999;\n        padding-left: 6px; }\n      #headerGfw .m-header-submenu.-home form input:-ms-input-placeholder {\n        color: #6C6C6C;\n        font-style: italic;\n        border-left: 1px solid #999999;\n        padding-left: 6px; }\n  #headerGfw .m-header-submenu.-more {\n    background: #262424; }\n    #headerGfw .m-header-submenu.-more > ul {\n      padding: 40px 20px;\n      background: #262424;\n      font-size: 12px;\n      border-top: 1px solid #333; }\n      @media (min-width: 700px) {\n        #headerGfw .m-header-submenu.-more > ul {\n          padding: 40px; } }\n      #headerGfw .m-header-submenu.-more > ul:first-child {\n        border-top: none; }\n      #headerGfw .m-header-submenu.-more > ul > li {\n        display: block;\n        text-transform: uppercase;\n        margin-top: 25px; }\n        #headerGfw .m-header-submenu.-more > ul > li:first-child {\n          margin-top: 0; }\n        @media (min-width: 700px) {\n          #headerGfw .m-header-submenu.-more > ul > li {\n            margin-top: 10px; } }\n        #headerGfw .m-header-submenu.-more > ul > li a {\n          display: -webkit-flex;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-align-items: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-justify-content: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          color: #FFF;\n          white-space: nowrap; }\n          @media (min-width: 850px) {\n            #headerGfw .m-header-submenu.-more > ul > li a {\n              -webkit-justify-content: flex-start;\n                  -ms-flex-pack: start;\n                      justify-content: flex-start; } }\n          #headerGfw .m-header-submenu.-more > ul > li a:hover span {\n            border-color: #0077be; }\n          #headerGfw .m-header-submenu.-more > ul > li a svg {\n            fill: #0077be;\n            margin: 0 8px 0 0;\n            height: 18px; }\n          #headerGfw .m-header-submenu.-more > ul > li a span {\n            border-bottom: 1px solid transparent; }\n          #headerGfw .m-header-submenu.-more > ul > li a.-button {\n            text-align: center;\n            display: block;\n            width: 200px;\n            border: 1px solid #0077be;\n            border-radius: 20px;\n            padding: 10px 0;\n            margin: 20px auto 0; }\n            @media (min-width: 850px) {\n              #headerGfw .m-header-submenu.-more > ul > li a.-button {\n                margin: 20px 0 0; } }\n            #headerGfw .m-header-submenu.-more > ul > li a.-button:hover {\n              background: #0077be;\n              color: #FFF; }\n  #headerGfw .m-header-submenu.-login {\n    background: #262424; }\n    #headerGfw .m-header-submenu.-login p {\n      max-width: 350px;\n      padding: 40px 40px 0;\n      font-size: 14px;\n      color: #FFF;\n      text-align: center;\n      margin: 0 auto; }\n      @media (min-width: 850px) {\n        #headerGfw .m-header-submenu.-login p {\n          text-align: left; } }\n      #headerGfw .m-header-submenu.-login p a {\n        color: #0077be; }\n        #headerGfw .m-header-submenu.-login p a:hover {\n          text-decoration: underline; }\n    #headerGfw .m-header-submenu.-login ul {\n      padding: 20px 40px 40px; }\n      #headerGfw .m-header-submenu.-login ul li {\n        width: 100%;\n        max-width: 250px;\n        display: block;\n        height: 50px;\n        text-align: center;\n        margin: 0 auto 10px;\n        position: relative; }\n        @media (min-width: 850px) {\n          #headerGfw .m-header-submenu.-login ul li {\n            margin: 0 0 10px;\n            width: 250px; } }\n      #headerGfw .m-header-submenu.-login ul li a {\n        color: white;\n        text-transform: uppercase;\n        font-size: 14px;\n        width: 100%;\n        height: 100%;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-justify-content: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-align-items: center;\n            -ms-flex-align: center;\n                align-items: center; }\n      #headerGfw .m-header-submenu.-login ul li a svg {\n        fill: white;\n        position: absolute;\n        top: 7px;\n        left: 15px; }\n      #headerGfw .m-header-submenu.-login ul .my-gfw-sign-in-twitter {\n        background-color: #598dca; }\n        #headerGfw .m-header-submenu.-login ul .my-gfw-sign-in-twitter:hover {\n          background-color: #6c9ad0; }\n      #headerGfw .m-header-submenu.-login ul .my-gfw-sign-in-facebook {\n        background-color: #39579b; }\n        #headerGfw .m-header-submenu.-login ul .my-gfw-sign-in-facebook:hover {\n          background-color: #4061ae; }\n      #headerGfw .m-header-submenu.-login ul .my-gfw-sign-in-google {\n        background-color: #da4735; }\n        #headerGfw .m-header-submenu.-login ul .my-gfw-sign-in-google:hover {\n          background-color: #de5b4b; }\n\n.section-test *, .section-test *:after, .section-test *:before {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  box-sizing: border-box; }\n\n.section-test .wrapper {\n  position: relative;\n  margin: 100px auto;\n  padding: 0px;\n  width: 100%;\n  max-width: 1120px;\n  padding: 0 15px; }\n  @media (min-width: 850px) {\n    .section-test .wrapper {\n      padding: 0 20px; } }\n\n#contactGfw {\n  font-family: \"Fira GFW Sans\", Helvetica, serif; }\n  #contactGfw .feedback-link-fixed {\n    display: none;\n    position: fixed;\n    top: 50%;\n    right: 0;\n    z-index: 250;\n    background: #FFD24D;\n    line-height: 1;\n    text-transform: uppercase;\n    color: #333;\n    text-decoration: none;\n    padding: 8px;\n    cursor: pointer;\n    -webkit-transform: rotate(90deg) translate(50%, 0);\n            transform: rotate(90deg) translate(50%, 0);\n    -webkit-transform-origin: 100% 0;\n            transform-origin: 100% 0; }\n    #contactGfw .feedback-link-fixed > span {\n      pointer-events: none; }\n    @media (min-width: 850px) {\n      #contactGfw .feedback-link-fixed {\n        display: block; } }\n\n#headerGfw .m-modal-assets, #footerGfw .m-modal-assets, #feedbackGfw .m-modal-assets, #contactGfw .m-modal-assets {\n  font-family: \"Fira GFW Sans\", Helvetica, serif;\n  font-feature-settings: \"liga\" 0;\n  -webkit-font-variant-ligatures: no-common-ligatures;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n  width: 100%;\n  height: 100%;\n  display: none; }\n  #headerGfw .m-modal-assets.-active, #footerGfw .m-modal-assets.-active, #feedbackGfw .m-modal-assets.-active, #contactGfw .m-modal-assets.-active {\n    display: block; }\n    #headerGfw .m-modal-assets.-active .modal-backdrop, #footerGfw .m-modal-assets.-active .modal-backdrop, #feedbackGfw .m-modal-assets.-active .modal-backdrop, #contactGfw .m-modal-assets.-active .modal-backdrop {\n      opacity: 1;\n      visibility: visible; }\n    #headerGfw .m-modal-assets.-active .modal-window, #footerGfw .m-modal-assets.-active .modal-window, #feedbackGfw .m-modal-assets.-active .modal-window, #contactGfw .m-modal-assets.-active .modal-window {\n      opacity: 1;\n      visibility: visible; }\n      @media (min-width: 850px) {\n        #headerGfw .m-modal-assets.-active .modal-window, #footerGfw .m-modal-assets.-active .modal-window, #feedbackGfw .m-modal-assets.-active .modal-window, #contactGfw .m-modal-assets.-active .modal-window {\n          -webkit-transform: translate(-50%, -50%);\n                  transform: translate(-50%, -50%); } }\n  #headerGfw .m-modal-assets .modal-backdrop, #footerGfw .m-modal-assets .modal-backdrop, #feedbackGfw .m-modal-assets .modal-backdrop, #contactGfw .m-modal-assets .modal-backdrop {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n    background: rgba(0, 0, 0, 0.25); }\n  #headerGfw .m-modal-assets .modal-window, #footerGfw .m-modal-assets .modal-window, #feedbackGfw .m-modal-assets .modal-window, #contactGfw .m-modal-assets .modal-window {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n    background: #FFF;\n    border: none;\n    box-shadow: 0 0 4px rgba(142, 142, 142, 0.5); }\n    @media (min-width: 850px) {\n      #headerGfw .m-modal-assets .modal-window, #footerGfw .m-modal-assets .modal-window, #feedbackGfw .m-modal-assets .modal-window, #contactGfw .m-modal-assets .modal-window {\n        left: 50%;\n        top: 50%;\n        width: 1024px;\n        height: auto;\n        min-height: 100px;\n        -webkit-transform: translate(-50%, -60%);\n                transform: translate(-50%, -60%); } }\n    #headerGfw .m-modal-assets .modal-window:before, #headerGfw .m-modal-assets .modal-window:after, #footerGfw .m-modal-assets .modal-window:before, #footerGfw .m-modal-assets .modal-window:after, #feedbackGfw .m-modal-assets .modal-window:before, #feedbackGfw .m-modal-assets .modal-window:after, #contactGfw .m-modal-assets .modal-window:before, #contactGfw .m-modal-assets .modal-window:after {\n      content: \"\";\n      position: absolute;\n      height: 20px;\n      width: calc(100% - 8px);\n      left: 0; }\n    #headerGfw .m-modal-assets .modal-window:before, #footerGfw .m-modal-assets .modal-window:before, #feedbackGfw .m-modal-assets .modal-window:before, #contactGfw .m-modal-assets .modal-window:before {\n      top: 0;\n      background-image: linear-gradient(to bottom, white, rgba(255, 255, 255, 0)); }\n    #headerGfw .m-modal-assets .modal-window:after, #footerGfw .m-modal-assets .modal-window:after, #feedbackGfw .m-modal-assets .modal-window:after, #contactGfw .m-modal-assets .modal-window:after {\n      bottom: 0;\n      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), white); }\n    #headerGfw .m-modal-assets .modal-window .modal-close svg, #footerGfw .m-modal-assets .modal-window .modal-close svg, #feedbackGfw .m-modal-assets .modal-window .modal-close svg, #contactGfw .m-modal-assets .modal-window .modal-close svg {\n      fill: #333; }\n    #headerGfw .m-modal-assets .modal-window .modal-close:hover svg, #footerGfw .m-modal-assets .modal-window .modal-close:hover svg, #feedbackGfw .m-modal-assets .modal-window .modal-close:hover svg, #contactGfw .m-modal-assets .modal-window .modal-close:hover svg {\n      fill: #1a1a1a; }\n    #headerGfw .m-modal-assets .modal-window .modal-wrapper, #footerGfw .m-modal-assets .modal-window .modal-wrapper, #feedbackGfw .m-modal-assets .modal-window .modal-wrapper, #contactGfw .m-modal-assets .modal-window .modal-wrapper {\n      position: relative;\n      overflow-x: hidden;\n      overflow-y: auto;\n      height: 100%;\n      max-height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      padding: 40px 20px 20px;\n      border-bottom: 66px solid transparent; }\n      @media (min-width: 850px) {\n        #headerGfw .m-modal-assets .modal-window .modal-wrapper, #footerGfw .m-modal-assets .modal-window .modal-wrapper, #feedbackGfw .m-modal-assets .modal-window .modal-wrapper, #contactGfw .m-modal-assets .modal-window .modal-wrapper {\n          max-height: 90vh; } }\n      #headerGfw .m-modal-assets .modal-window .modal-wrapper .modal-content .modal-step header h2, #footerGfw .m-modal-assets .modal-window .modal-wrapper .modal-content .modal-step header h2, #feedbackGfw .m-modal-assets .modal-window .modal-wrapper .modal-content .modal-step header h2, #contactGfw .m-modal-assets .modal-window .modal-wrapper .modal-content .modal-step header h2 {\n        max-width: 100%;\n        text-align: left; }\n      #headerGfw .m-modal-assets .modal-window .modal-wrapper .modal-content .modal-step header h3, #footerGfw .m-modal-assets .modal-window .modal-wrapper .modal-content .modal-step header h3, #feedbackGfw .m-modal-assets .modal-window .modal-wrapper .modal-content .modal-step header h3, #contactGfw .m-modal-assets .modal-window .modal-wrapper .modal-content .modal-step header h3 {\n        text-align: left; }\n  #headerGfw .m-modal-assets .modal-spinner, #footerGfw .m-modal-assets .modal-spinner, #feedbackGfw .m-modal-assets .modal-spinner, #contactGfw .m-modal-assets .modal-spinner {\n    display: none;\n    pointer-events: none; }\n    #headerGfw .m-modal-assets .modal-spinner:before, #footerGfw .m-modal-assets .modal-spinner:before, #feedbackGfw .m-modal-assets .modal-spinner:before, #contactGfw .m-modal-assets .modal-spinner:before {\n      content: '';\n      z-index: 1;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      opacity: .6; }\n    #headerGfw .m-modal-assets .modal-spinner:after, #footerGfw .m-modal-assets .modal-spinner:after, #feedbackGfw .m-modal-assets .modal-spinner:after, #contactGfw .m-modal-assets .modal-spinner:after {\n      z-index: 2;\n      content: '';\n      height: 40px;\n      width: 40px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin: -20px 0 0 -20px;\n      transition: all .75s ease 0s;\n      border-radius: 100%;\n      border-top: 5px solid #0077be;\n      border-right: 5px solid #eee;\n      border-bottom: 5px solid #eee;\n      border-left: 5px solid #eee;\n      animation: standard .75s infinite linear;\n      -webkit-animation: standard .75s infinite linear;\n      -webkit-transform-origin: center;\n              transform-origin: center; }\n    #headerGfw .m-modal-assets .modal-spinner.-active, #footerGfw .m-modal-assets .modal-spinner.-active, #feedbackGfw .m-modal-assets .modal-spinner.-active, #contactGfw .m-modal-assets .modal-spinner.-active {\n      display: block; }\n    #headerGfw .m-modal-assets .modal-spinner.red:before, #footerGfw .m-modal-assets .modal-spinner.red:before, #feedbackGfw .m-modal-assets .modal-spinner.red:before, #contactGfw .m-modal-assets .modal-spinner.red:before {\n      content: '';\n      z-index: 1;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      opacity: .6; }\n    #headerGfw .m-modal-assets .modal-spinner.red:after, #footerGfw .m-modal-assets .modal-spinner.red:after, #feedbackGfw .m-modal-assets .modal-spinner.red:after, #contactGfw .m-modal-assets .modal-spinner.red:after {\n      z-index: 2;\n      content: '';\n      height: 40px;\n      width: 40px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin: -20px 0 0 -20px;\n      transition: all .75s ease 0s;\n      border-radius: 100%;\n      border-top: 5px solid #ed1846;\n      border-right: 5px solid #eee;\n      border-bottom: 5px solid #eee;\n      border-left: 5px solid #eee;\n      animation: standard .75s infinite linear;\n      -webkit-animation: standard .75s infinite linear;\n      -webkit-transform-origin: center;\n              transform-origin: center; }\n    #headerGfw .m-modal-assets .modal-spinner.orange:before, #footerGfw .m-modal-assets .modal-spinner.orange:before, #feedbackGfw .m-modal-assets .modal-spinner.orange:before, #contactGfw .m-modal-assets .modal-spinner.orange:before {\n      content: '';\n      z-index: 1;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      opacity: .6; }\n    #headerGfw .m-modal-assets .modal-spinner.orange:after, #footerGfw .m-modal-assets .modal-spinner.orange:after, #feedbackGfw .m-modal-assets .modal-spinner.orange:after, #contactGfw .m-modal-assets .modal-spinner.orange:after {\n      z-index: 2;\n      content: '';\n      height: 40px;\n      width: 40px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin: -20px 0 0 -20px;\n      transition: all .75s ease 0s;\n      border-radius: 100%;\n      border-top: 5px solid #e98300;\n      border-right: 5px solid #eee;\n      border-bottom: 5px solid #eee;\n      border-left: 5px solid #eee;\n      animation: standard .75s infinite linear;\n      -webkit-animation: standard .75s infinite linear;\n      -webkit-transform-origin: center;\n              transform-origin: center; }\n    #headerGfw .m-modal-assets .modal-spinner.blue:before, #footerGfw .m-modal-assets .modal-spinner.blue:before, #feedbackGfw .m-modal-assets .modal-spinner.blue:before, #contactGfw .m-modal-assets .modal-spinner.blue:before {\n      content: '';\n      z-index: 1;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      opacity: .6; }\n    #headerGfw .m-modal-assets .modal-spinner.blue:after, #footerGfw .m-modal-assets .modal-spinner.blue:after, #feedbackGfw .m-modal-assets .modal-spinner.blue:after, #contactGfw .m-modal-assets .modal-spinner.blue:after {\n      z-index: 2;\n      content: '';\n      height: 40px;\n      width: 40px;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin: -20px 0 0 -20px;\n      transition: all .75s ease 0s;\n      border-radius: 100%;\n      border-top: 5px solid #5b80a0;\n      border-right: 5px solid #eee;\n      border-bottom: 5px solid #eee;\n      border-left: 5px solid #eee;\n      animation: standard .75s infinite linear;\n      -webkit-animation: standard .75s infinite linear;\n      -webkit-transform-origin: center;\n              transform-origin: center; }\n  #headerGfw .m-modal-assets .modal-close, #footerGfw .m-modal-assets .modal-close, #feedbackGfw .m-modal-assets .modal-close, #contactGfw .m-modal-assets .modal-close {\n    display: block;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    width: 40px;\n    height: 40px;\n    z-index: 20; }\n    #headerGfw .m-modal-assets .modal-close svg, #footerGfw .m-modal-assets .modal-close svg, #feedbackGfw .m-modal-assets .modal-close svg, #contactGfw .m-modal-assets .modal-close svg {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      width: 14px;\n      height: 14px;\n      margin: -7px 0 0 -7px; }\n  #headerGfw .m-modal-assets .modal-header, #footerGfw .m-modal-assets .modal-header, #feedbackGfw .m-modal-assets .modal-header, #contactGfw .m-modal-assets .modal-header {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    background: #FFF;\n    z-index: 2; }\n    #headerGfw .m-modal-assets .modal-header:before, #headerGfw .m-modal-assets .modal-header:after, #footerGfw .m-modal-assets .modal-header:before, #footerGfw .m-modal-assets .modal-header:after, #feedbackGfw .m-modal-assets .modal-header:before, #feedbackGfw .m-modal-assets .modal-header:after, #contactGfw .m-modal-assets .modal-header:before, #contactGfw .m-modal-assets .modal-header:after {\n      content: \" \";\n      display: table;\n      visibility: hidden;\n      font-size: 0;\n      height: 0; }\n    #headerGfw .m-modal-assets .modal-header:after, #footerGfw .m-modal-assets .modal-header:after, #feedbackGfw .m-modal-assets .modal-header:after, #contactGfw .m-modal-assets .modal-header:after {\n      clear: both; }\n    #headerGfw .m-modal-assets .modal-header .gradient, #footerGfw .m-modal-assets .modal-header .gradient, #feedbackGfw .m-modal-assets .modal-header .gradient, #contactGfw .m-modal-assets .modal-header .gradient {\n      content: \"\";\n      position: absolute;\n      height: 15px;\n      width: 100%;\n      left: 0;\n      top: 100%;\n      background-image: linear-gradient(to bottom, white, rgba(255, 255, 255, 0)); }\n    #headerGfw .m-modal-assets .modal-header ul, #footerGfw .m-modal-assets .modal-header ul, #feedbackGfw .m-modal-assets .modal-header ul, #contactGfw .m-modal-assets .modal-header ul {\n      margin: 15px 0;\n      position: relative;\n      left: 50%;\n      -webkit-transform: translate(-50%, 0);\n              transform: translate(-50%, 0);\n      float: left;\n      padding: 4px;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      border: 1px solid #0077be;\n      border-radius: 45px; }\n      #headerGfw .m-modal-assets .modal-header ul li, #footerGfw .m-modal-assets .modal-header ul li, #feedbackGfw .m-modal-assets .modal-header ul li, #contactGfw .m-modal-assets .modal-header ul li {\n        font-size: 19px;\n        padding: 10px 20px 7px;\n        color: #333;\n        cursor: pointer;\n        font-weight: 500;\n        border-radius: 40px; }\n        #headerGfw .m-modal-assets .modal-header ul li:hover, #footerGfw .m-modal-assets .modal-header ul li:hover, #feedbackGfw .m-modal-assets .modal-header ul li:hover, #contactGfw .m-modal-assets .modal-header ul li:hover {\n          background: #fcfcfc; }\n        #headerGfw .m-modal-assets .modal-header ul li.-active, #footerGfw .m-modal-assets .modal-header ul li.-active, #feedbackGfw .m-modal-assets .modal-header ul li.-active, #contactGfw .m-modal-assets .modal-header ul li.-active {\n          color: #FFF;\n          background: #0077be; }\n  #headerGfw .m-modal-assets .modal-footer, #footerGfw .m-modal-assets .modal-footer, #feedbackGfw .m-modal-assets .modal-footer, #contactGfw .m-modal-assets .modal-footer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background: #FFF;\n    z-index: 2;\n    padding: 15px 0; }\n    #headerGfw .m-modal-assets .modal-footer:before, #headerGfw .m-modal-assets .modal-footer:after, #footerGfw .m-modal-assets .modal-footer:before, #footerGfw .m-modal-assets .modal-footer:after, #feedbackGfw .m-modal-assets .modal-footer:before, #feedbackGfw .m-modal-assets .modal-footer:after, #contactGfw .m-modal-assets .modal-footer:before, #contactGfw .m-modal-assets .modal-footer:after {\n      content: \" \";\n      display: table;\n      visibility: hidden;\n      font-size: 0;\n      height: 0; }\n    #headerGfw .m-modal-assets .modal-footer:after, #footerGfw .m-modal-assets .modal-footer:after, #feedbackGfw .m-modal-assets .modal-footer:after, #contactGfw .m-modal-assets .modal-footer:after {\n      clear: both; }\n    #headerGfw .m-modal-assets .modal-footer .gradient, #footerGfw .m-modal-assets .modal-footer .gradient, #feedbackGfw .m-modal-assets .modal-footer .gradient, #contactGfw .m-modal-assets .modal-footer .gradient {\n      content: \"\";\n      position: absolute;\n      height: 15px;\n      width: calc(100% - 10px);\n      left: 0;\n      bottom: 100%;\n      border-bottom: 1px solid #E5E5DF;\n      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), white); }\n  #headerGfw .m-modal-assets .modal-content, #footerGfw .m-modal-assets .modal-content, #feedbackGfw .m-modal-assets .modal-content, #contactGfw .m-modal-assets .modal-content {\n    height: auto;\n    width: 100%;\n    outline: none;\n    margin: 0 auto;\n    max-width: 700px;\n    color: #333;\n    border: none;\n    box-shadow: none;\n    background: transparent;\n    border-radius: 0;\n    font-size: 14px;\n    line-height: 1.25; }\n    #headerGfw .m-modal-assets .modal-content header h2, #footerGfw .m-modal-assets .modal-content header h2, #feedbackGfw .m-modal-assets .modal-content header h2, #contactGfw .m-modal-assets .modal-content header h2 {\n      font-size: 35px;\n      font-weight: 300;\n      color: #333;\n      padding: 0 0 20px;\n      line-height: 1.25; }\n    #headerGfw .m-modal-assets .modal-content header h3, #footerGfw .m-modal-assets .modal-content header h3, #feedbackGfw .m-modal-assets .modal-content header h3, #contactGfw .m-modal-assets .modal-content header h3 {\n      font-size: 21px;\n      font-weight: 300;\n      line-height: 1.5;\n      text-transform: none; }\n      #headerGfw .m-modal-assets .modal-content header h3 strong, #footerGfw .m-modal-assets .modal-content header h3 strong, #feedbackGfw .m-modal-assets .modal-content header h3 strong, #contactGfw .m-modal-assets .modal-content header h3 strong {\n        font-weight: 400; }\n    #headerGfw .m-modal-assets .modal-content .bullets, #footerGfw .m-modal-assets .modal-content .bullets, #feedbackGfw .m-modal-assets .modal-content .bullets, #contactGfw .m-modal-assets .modal-content .bullets {\n      list-style-type: disc;\n      color: #333; }\n      #headerGfw .m-modal-assets .modal-content .bullets > li, #footerGfw .m-modal-assets .modal-content .bullets > li, #feedbackGfw .m-modal-assets .modal-content .bullets > li, #contactGfw .m-modal-assets .modal-content .bullets > li {\n        list-style-type: disc;\n        padding: 10px 0 0;\n        margin-left: 20px;\n        line-height: 1.25;\n        display: list-item;\n        text-transform: none; }\n        #headerGfw .m-modal-assets .modal-content .bullets > li:first-child, #footerGfw .m-modal-assets .modal-content .bullets > li:first-child, #feedbackGfw .m-modal-assets .modal-content .bullets > li:first-child, #contactGfw .m-modal-assets .modal-content .bullets > li:first-child {\n          padding: 0; }\n    #headerGfw .m-modal-assets .modal-content li, #footerGfw .m-modal-assets .modal-content li, #feedbackGfw .m-modal-assets .modal-content li, #contactGfw .m-modal-assets .modal-content li {\n      list-style: none; }\n    #headerGfw .m-modal-assets .modal-content p, #footerGfw .m-modal-assets .modal-content p, #feedbackGfw .m-modal-assets .modal-content p, #contactGfw .m-modal-assets .modal-content p {\n      line-height: 1.5; }\n    #headerGfw .m-modal-assets .modal-content a:not(.btn), #footerGfw .m-modal-assets .modal-content a:not(.btn), #feedbackGfw .m-modal-assets .modal-content a:not(.btn), #contactGfw .m-modal-assets .modal-content a:not(.btn) {\n      color: #0077be; }\n      #headerGfw .m-modal-assets .modal-content a:not(.btn):hover, #footerGfw .m-modal-assets .modal-content a:not(.btn):hover, #feedbackGfw .m-modal-assets .modal-content a:not(.btn):hover, #contactGfw .m-modal-assets .modal-content a:not(.btn):hover {\n        color: #0067a5; }\n      #headerGfw .m-modal-assets .modal-content a:not(.btn).red, #footerGfw .m-modal-assets .modal-content a:not(.btn).red, #feedbackGfw .m-modal-assets .modal-content a:not(.btn).red, #contactGfw .m-modal-assets .modal-content a:not(.btn).red {\n        color: #ed1846; }\n        #headerGfw .m-modal-assets .modal-content a:not(.btn).red:hover, #footerGfw .m-modal-assets .modal-content a:not(.btn).red:hover, #feedbackGfw .m-modal-assets .modal-content a:not(.btn).red:hover, #contactGfw .m-modal-assets .modal-content a:not(.btn).red:hover {\n          color: #7c0a22; }\n      #headerGfw .m-modal-assets .modal-content a:not(.btn).orange, #footerGfw .m-modal-assets .modal-content a:not(.btn).orange, #feedbackGfw .m-modal-assets .modal-content a:not(.btn).orange, #contactGfw .m-modal-assets .modal-content a:not(.btn).orange {\n        color: #e98300; }\n        #headerGfw .m-modal-assets .modal-content a:not(.btn).orange:hover, #footerGfw .m-modal-assets .modal-content a:not(.btn).orange:hover, #feedbackGfw .m-modal-assets .modal-content a:not(.btn).orange:hover, #contactGfw .m-modal-assets .modal-content a:not(.btn).orange:hover {\n          color: #6a3b00; }\n      #headerGfw .m-modal-assets .modal-content a:not(.btn).blue, #footerGfw .m-modal-assets .modal-content a:not(.btn).blue, #feedbackGfw .m-modal-assets .modal-content a:not(.btn).blue, #contactGfw .m-modal-assets .modal-content a:not(.btn).blue {\n        color: #5b80a0; }\n        #headerGfw .m-modal-assets .modal-content a:not(.btn).blue:hover, #footerGfw .m-modal-assets .modal-content a:not(.btn).blue:hover, #feedbackGfw .m-modal-assets .modal-content a:not(.btn).blue:hover, #contactGfw .m-modal-assets .modal-content a:not(.btn).blue:hover {\n          color: #2d3f4f; }\n  #headerGfw .m-modal-assets .modal-steps, #footerGfw .m-modal-assets .modal-steps, #feedbackGfw .m-modal-assets .modal-steps, #contactGfw .m-modal-assets .modal-steps {\n    padding: 20px !important; }\n    #headerGfw .m-modal-assets .modal-steps > li, #footerGfw .m-modal-assets .modal-steps > li, #feedbackGfw .m-modal-assets .modal-steps > li, #contactGfw .m-modal-assets .modal-steps > li {\n      display: none;\n      text-transform: none; }\n      #headerGfw .m-modal-assets .modal-steps > li.-active, #footerGfw .m-modal-assets .modal-steps > li.-active, #feedbackGfw .m-modal-assets .modal-steps > li.-active, #contactGfw .m-modal-assets .modal-steps > li.-active {\n        display: block; }\n      #headerGfw .m-modal-assets .modal-steps > li .modal-step-content, #footerGfw .m-modal-assets .modal-steps > li .modal-step-content, #feedbackGfw .m-modal-assets .modal-steps > li .modal-step-content, #contactGfw .m-modal-assets .modal-steps > li .modal-step-content {\n        padding: 20px 0 0; }\n        #headerGfw .m-modal-assets .modal-steps > li .modal-step-content > *, #footerGfw .m-modal-assets .modal-steps > li .modal-step-content > *, #feedbackGfw .m-modal-assets .modal-steps > li .modal-step-content > *, #contactGfw .m-modal-assets .modal-steps > li .modal-step-content > * {\n          margin: 15px 0 0; }\n          #headerGfw .m-modal-assets .modal-steps > li .modal-step-content > *:first-child, #footerGfw .m-modal-assets .modal-steps > li .modal-step-content > *:first-child, #feedbackGfw .m-modal-assets .modal-steps > li .modal-step-content > *:first-child, #contactGfw .m-modal-assets .modal-steps > li .modal-step-content > *:first-child {\n            margin: 0; }\n  #headerGfw .m-modal-assets .m-btncontainer, #footerGfw .m-modal-assets .m-btncontainer, #feedbackGfw .m-modal-assets .m-btncontainer, #contactGfw .m-modal-assets .m-btncontainer {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    #headerGfw .m-modal-assets .m-btncontainer.-center, #footerGfw .m-modal-assets .m-btncontainer.-center, #feedbackGfw .m-modal-assets .m-btncontainer.-center, #contactGfw .m-modal-assets .m-btncontainer.-center {\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    #headerGfw .m-modal-assets .m-btncontainer.-steps .btn, #footerGfw .m-modal-assets .m-btncontainer.-steps .btn, #feedbackGfw .m-modal-assets .m-btncontainer.-steps .btn, #contactGfw .m-modal-assets .m-btncontainer.-steps .btn {\n      display: none; }\n      #headerGfw .m-modal-assets .m-btncontainer.-steps .btn.-active, #footerGfw .m-modal-assets .m-btncontainer.-steps .btn.-active, #feedbackGfw .m-modal-assets .m-btncontainer.-steps .btn.-active, #contactGfw .m-modal-assets .m-btncontainer.-steps .btn.-active {\n        display: block; }\n\n.m-select {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 40px; }\n\n#footerGfw {\n  font-family: \"Fira GFW Sans\", Helvetica, serif;\n  font-feature-settings: \"liga\" 0;\n  -webkit-font-variant-ligatures: no-common-ligatures;\n  background: #eceee8;\n  z-index: 11;\n  clear: both; }\n  #footerGfw ul {\n    padding: 0; }\n  #footerGfw .wrapper {\n    padding: 0 15px; }\n    @media (min-width: 850px) {\n      #footerGfw .wrapper {\n        padding: 0 20px; } }\n  #footerGfw .text-button {\n    font-size: 12px;\n    letter-spacing: 0.1px;\n    color: #999999; }\n  #footerGfw .m-footer-subscribe {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%;\n    height: 112px;\n    background-color: #FFF; }\n    #footerGfw .m-footer-subscribe .m-footer-subscribe-button {\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: 260px;\n      height: 40px;\n      background-color: #0077be;\n      color: #FFF;\n      border-radius: 36px;\n      font-size: 14px;\n      cursor: pointer; }\n      #footerGfw .m-footer-subscribe .m-footer-subscribe-button:hover {\n        background-color: #0067a5; }\n  #footerGfw .m-footer-list {\n    display: block;\n    padding: 46px 0 25px;\n    border-bottom: 2px solid #d9d9d9; }\n    #footerGfw .m-footer-list .m-footer-links {\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-flex-direction: column;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      @media (min-width: 850px) {\n        #footerGfw .m-footer-list .m-footer-links {\n          -webkit-justify-content: space-between;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          -webkit-flex-direction: row;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-align-items: center;\n              -ms-flex-align: center;\n                  align-items: center; } }\n      #footerGfw .m-footer-list .m-footer-links:nth-of-type(2) {\n        -webkit-flex-direction: column-reverse;\n            -ms-flex-direction: column-reverse;\n                flex-direction: column-reverse;\n        margin-top: 25px; }\n        #footerGfw .m-footer-list .m-footer-links:nth-of-type(2) a {\n          margin-bottom: 10px; }\n        @media (min-width: 850px) {\n          #footerGfw .m-footer-list .m-footer-links:nth-of-type(2) {\n            -webkit-flex-direction: row;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            margin-top: 25px; }\n            #footerGfw .m-footer-list .m-footer-links:nth-of-type(2) a {\n              margin-bottom: 0; } }\n    #footerGfw .m-footer-list .m-footer-links-texts {\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-flex-flow: row wrap;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap; }\n      #footerGfw .m-footer-list .m-footer-links-texts li {\n        -webkit-flex-basis: 100%;\n            -ms-flex-preferred-size: 100%;\n                flex-basis: 100%;\n        margin-bottom: 15px; }\n        @media (min-width: 401px) {\n          #footerGfw .m-footer-list .m-footer-links-texts li {\n            -webkit-flex-basis: auto;\n                -ms-flex-preferred-size: auto;\n                    flex-basis: auto;\n            margin-right: 15px;\n            margin-bottom: 20px; } }\n        @media (min-width: 850px) {\n          #footerGfw .m-footer-list .m-footer-links-texts li {\n            -webkit-flex-basis: auto;\n                -ms-flex-preferred-size: auto;\n                    flex-basis: auto;\n            margin-right: 45px; } }\n      #footerGfw .m-footer-list .m-footer-links-texts a {\n        font-size: 14px;\n        line-height: 1.86;\n        letter-spacing: 0.1px;\n        color: #666666;\n        text-transform: uppercase; }\n    #footerGfw .m-footer-list .m-footer-links-social {\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      margin-top: 15px;\n      font-size: 0; }\n      @media (min-width: 850px) {\n        #footerGfw .m-footer-list .m-footer-links-social {\n          margin-top: 0; } }\n      #footerGfw .m-footer-list .m-footer-links-social li {\n        display: -webkit-inline-flex;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        -webkit-justify-content: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-align-items: center;\n            -ms-flex-align: center;\n                align-items: center;\n        border: solid 1px rgba(153, 153, 153, 0.2);\n        width: 48px;\n        height: 48px;\n        margin-left: 0;\n        margin-right: 20px;\n        border-radius: 100%; }\n        @media (min-width: 850px) {\n          #footerGfw .m-footer-list .m-footer-links-social li {\n            margin-left: 17px;\n            margin-right: 0; } }\n      #footerGfw .m-footer-list .m-footer-links-social .icon {\n        fill: #444444; }\n        #footerGfw .m-footer-list .m-footer-links-social .icon.icon-twitter {\n          width: 25px;\n          height: 20px; }\n        #footerGfw .m-footer-list .m-footer-links-social .icon.icon-facebook {\n          width: 14px;\n          height: 22px; }\n        #footerGfw .m-footer-list .m-footer-links-social .icon.icon-instagram {\n          width: 22px;\n          height: 22px; }\n        #footerGfw .m-footer-list .m-footer-links-social .icon.icon-youtube {\n          width: 22px;\n          height: 22px; }\n        #footerGfw .m-footer-list .m-footer-links-social .icon.icon-contact {\n          width: 18px;\n          height: 22px; }\n    #footerGfw .m-footer-list .m-footer-links__contact {\n      position: relative;\n      padding-right: 5px;\n      cursor: pointer; }\n      #footerGfw .m-footer-list .m-footer-links__contact .icon-contact {\n        position: absolute;\n        top: 1px;\n        left: 75px;\n        width: 16px;\n        height: 16px;\n        fill: rgba(85, 85, 85, 0.5); }\n        @media (min-width: 850px) {\n          #footerGfw .m-footer-list .m-footer-links__contact .icon-contact {\n            right: 1px;\n            left: inherit; } }\n  #footerGfw .m-footer-info {\n    padding-top: 27px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column-reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse; }\n    @media (min-width: 850px) {\n      #footerGfw .m-footer-info {\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-flex-direction: row;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-justify-content: space-between;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-align-items: center;\n            -ms-flex-align: center;\n                align-items: center; } }\n    #footerGfw .m-footer-info .m-footer-partner {\n      -webkit-align-self: flex-start;\n          -ms-flex-item-align: start;\n              align-self: flex-start;\n      text-align: center;\n      margin: 30px auto; }\n      @media (min-width: 850px) {\n        #footerGfw .m-footer-info .m-footer-partner {\n          text-align: left;\n          margin: inherit; } }\n      #footerGfw .m-footer-info .m-footer-partner > p {\n        font-size: 14px;\n        letter-spacing: 0.1px;\n        color: #999999; }\n      #footerGfw .m-footer-info .m-footer-partner svg {\n        margin-top: 5px;\n        margin-left: -5px; }\n        @media (min-width: 850px) {\n          #footerGfw .m-footer-info .m-footer-partner svg {\n            margin-top: 26px; } }\n    #footerGfw .m-footer-info .m-footer-contact {\n      font-size: 12px;\n      color: #333;\n      text-align: center;\n      padding: 30px 0 0;\n      line-height: 2; }\n      @media (min-width: 850px) {\n        #footerGfw .m-footer-info .m-footer-contact {\n          text-align: right;\n          padding: 0; } }\n      #footerGfw .m-footer-info .m-footer-contact h3 {\n        font-weight: 400; }\n      #footerGfw .m-footer-info .m-footer-contact p {\n        font-weight: 300;\n        line-height: 1.5; }\n        #footerGfw .m-footer-info .m-footer-contact p a {\n          color: #333;\n          font-weight: 400; }\n  #footerGfw .m-footer-terms {\n    padding: 10px 0 24px 0;\n    color: #999999;\n    text-align: center;\n    font-size: 12px;\n    letter-spacing: 0.1px; }\n    @media (min-width: 850px) {\n      #footerGfw .m-footer-terms {\n        text-align: right; } }\n    #footerGfw .m-footer-terms a {\n      display: block;\n      color: inherit; }\n      @media (min-width: 850px) {\n        #footerGfw .m-footer-terms a {\n          display: inline-block; } }\n      #footerGfw .m-footer-terms a:hover {\n        text-decoration: underline; }\n\n#my-gfw-slider {\n  position: relative;\n  max-width: 750px;\n  display: block;\n  width: 100%;\n  padding: 0; }\n  @media (min-width: 850px) {\n    #my-gfw-slider {\n      width: calc(100% - 180px);\n      padding-left: 30px; } }\n  #my-gfw-slider > p {\n    font-size: 14px;\n    letter-spacing: 0.1px;\n    color: #999999; }\n  #my-gfw-slider .frame {\n    position: relative;\n    font-size: 0;\n    line-height: 0;\n    overflow: hidden;\n    white-space: nowrap;\n    width: 140px;\n    margin: 18px auto 0 auto; }\n    @media (min-width: 850px) {\n      #my-gfw-slider .frame {\n        width: calc(100% - 10px); } }\n    #my-gfw-slider .frame:before, #my-gfw-slider .frame:after {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      height: 100%;\n      width: 20px;\n      z-index: 2; }\n    #my-gfw-slider .frame:before {\n      left: 0;\n      background-image: linear-gradient(to right, #eceee8, rgba(236, 238, 232, 0)); }\n    #my-gfw-slider .frame:after {\n      right: 0;\n      background-image: linear-gradient(to left, #eceee8, rgba(236, 238, 232, 0)); }\n  #my-gfw-slider .slides {\n    height: 100px; }\n  #my-gfw-slider .js_slide {\n    position: relative;\n    display: inline-block;\n    height: 82px;\n    width: 100%;\n    vertical-align: bottom; }\n    @media (min-width: 850px) {\n      #my-gfw-slider .js_slide {\n        width: 25%; } }\n    #my-gfw-slider .js_slide.active {\n      background: none; }\n    #my-gfw-slider .js_slide a {\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin: 0 auto;\n      position: relative;\n      top: 50%;\n      -webkit-transform: translate(0, -50%);\n              transform: translate(0, -50%); }\n      #my-gfw-slider .js_slide a .default {\n        visibility: visible; }\n      #my-gfw-slider .js_slide a .hover {\n        visibility: hidden; }\n      #my-gfw-slider .js_slide a:hover .default {\n        visibility: hidden; }\n      #my-gfw-slider .js_slide a:hover .hover {\n        visibility: visible; }\n      #my-gfw-slider .js_slide a.afc {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -708px -75px;\n        width: 80px;\n        height: 69px; }\n        #my-gfw-slider .js_slide a.afc:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -708px -144px;\n          width: 80px;\n          height: 69px; }\n      #my-gfw-slider .js_slide a.airbus {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -456px -766px;\n        width: 130px;\n        height: 30px; }\n        #my-gfw-slider .js_slide a.airbus:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -586px -766px;\n          width: 130px;\n          height: 30px; }\n      #my-gfw-slider .js_slide a.astrodigital {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -716px -766px;\n        width: 120px;\n        height: 29px; }\n        #my-gfw-slider .js_slide a.astrodigital:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -240px -806px;\n          width: 120px;\n          height: 29px; }\n      #my-gfw-slider .js_slide a.agrosatelite {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -240px -312px;\n        width: 120px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.agrosatelite:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -415px 0px;\n          width: 120px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.bei {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -236px -436px;\n        width: 130px;\n        height: 63px; }\n        #my-gfw-slider .js_slide a.bei:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -106px -436px;\n          width: 130px;\n          height: 63px; }\n      #my-gfw-slider .js_slide a.bigdataclimatechallengewinner {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: 0px -99px;\n        width: 215px;\n        height: 99px; }\n        #my-gfw-slider .js_slide a.bigdataclimatechallengewinner:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: 0px 0px;\n          width: 215px;\n          height: 99px; }\n      #my-gfw-slider .js_slide a.blueraster {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -440px -646px;\n        width: 110px;\n        height: 48px; }\n        #my-gfw-slider .js_slide a.blueraster:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -190px -704px;\n          width: 110px;\n          height: 48px; }\n      #my-gfw-slider .js_slide a.bnpb {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -908px -144px;\n        width: 50px;\n        height: 64px; }\n        #my-gfw-slider .js_slide a.bnpb:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -908px -80px;\n          width: 50px;\n          height: 64px; }\n      #my-gfw-slider .js_slide a.bobolinkfundation {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -620px -560px;\n        width: 87px;\n        height: 24px; }\n        #my-gfw-slider .js_slide a.bobolinkfundation:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -800px -806px;\n          width: 87px;\n          height: 24px; }\n      #my-gfw-slider .js_slide a.cambridge {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -351px -516px;\n        width: 130px;\n        height: 52px; }\n        #my-gfw-slider .js_slide a.cambridge:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -221px -516px;\n          width: 130px;\n          height: 52px; }\n      #my-gfw-slider .js_slide a.cartodb {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -481px -516px;\n        width: 120px;\n        height: 47px; }\n        #my-gfw-slider .js_slide a.cartodb:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -458px -586px;\n          width: 120px;\n          height: 47px; }\n      #my-gfw-slider .js_slide a.cargill {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -220px -586px;\n        width: 119px;\n        height: 54px; }\n        #my-gfw-slider .js_slide a.cargill:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -339px -586px;\n          width: 119px;\n          height: 54px; }\n      #my-gfw-slider .js_slide a.centerforglobaldevelopment {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -908px 0px;\n        width: 84px;\n        height: 40px; }\n        #my-gfw-slider .js_slide a.centerforglobaldevelopment:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -908px -40px;\n          width: 84px;\n          height: 40px; }\n      #my-gfw-slider .js_slide a.cgiar {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -394px -392px;\n        width: 124px;\n        height: 43px; }\n        #my-gfw-slider .js_slide a.cgiar:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -578px -586px;\n          width: 124px;\n          height: 43px; }\n      #my-gfw-slider .js_slide a.ciat {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -269px -255px;\n        width: 120px;\n        height: 57px; }\n        #my-gfw-slider .js_slide a.ciat:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -269px -198px;\n          width: 120px;\n          height: 57px; }\n      #my-gfw-slider .js_slide a.conafor {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -300px -704px;\n        width: 110px;\n        height: 48px; }\n        #my-gfw-slider .js_slide a.conafor:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -550px -646px;\n          width: 110px;\n          height: 48px; }\n      #my-gfw-slider .js_slide a.conservationinternational {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -788px -484px;\n        width: 120px;\n        height: 38px; }\n        #my-gfw-slider .js_slide a.conservationinternational:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -788px -446px;\n          width: 120px;\n          height: 38px; }\n      #my-gfw-slider .js_slide a.clua {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -602px -870px;\n        width: 110px;\n        height: 26px; }\n        #my-gfw-slider .js_slide a.clua:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -382px -870px;\n          width: 110px;\n          height: 26px; }\n      #my-gfw-slider .js_slide a.danida {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -788px -750px;\n        width: 82px;\n        height: 15px; }\n        #my-gfw-slider .js_slide a.danida:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -908px -890px;\n          width: 82px;\n          height: 15px; }\n      #my-gfw-slider .js_slide a.digitalglobe {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -788px -522px;\n        width: 120px;\n        height: 38px; }\n        #my-gfw-slider .js_slide a.digitalglobe:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -788px -560px;\n          width: 120px;\n          height: 38px; }\n      #my-gfw-slider .js_slide a.ejn {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -708px -213px;\n        width: 80px;\n        height: 64px; }\n        #my-gfw-slider .js_slide a.ejn:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -708px -405px;\n          width: 80px;\n          height: 64px; }\n      #my-gfw-slider .js_slide a.esri {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: 0px -907px;\n        width: 87px;\n        height: 33px; }\n        #my-gfw-slider .js_slide a.esri:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -87px -907px;\n          width: 87px;\n          height: 33px; }\n      #my-gfw-slider .js_slide a.ewmi {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -630px -704px;\n        width: 126px;\n        height: 40px; }\n        #my-gfw-slider .js_slide a.ewmi:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: 0px -766px;\n          width: 126px;\n          height: 40px; }\n      #my-gfw-slider .js_slide a.gef {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -908px -267px;\n        width: 51px;\n        height: 59px; }\n        #my-gfw-slider .js_slide a.gef:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -908px -208px;\n          width: 51px;\n          height: 59px; }\n      #my-gfw-slider .js_slide a.generation {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -220px -837px;\n        width: 110px;\n        height: 31px; }\n        #my-gfw-slider .js_slide a.generation:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -330px -837px;\n          width: 110px;\n          height: 31px; }\n      #my-gfw-slider .js_slide a.globalforestwatchcanada {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -908px -796px;\n        width: 42px;\n        height: 44px; }\n        #my-gfw-slider .js_slide a.globalforestwatchcanada:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -950px -796px;\n          width: 42px;\n          height: 44px; }\n      #my-gfw-slider .js_slide a.google {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: 0px -940px;\n        width: 85px;\n        height: 29px; }\n        #my-gfw-slider .js_slide a.google:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -535px -485px;\n          width: 85px;\n          height: 29px; }\n      #my-gfw-slider .js_slide a.haka {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -708px -532px;\n        width: 69px;\n        height: 63px; }\n        #my-gfw-slider .js_slide a.haka:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -708px -469px;\n          width: 69px;\n          height: 63px; }\n      #my-gfw-slider .js_slide a.icf {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -712px -870px;\n        width: 110px;\n        height: 26px; }\n        #my-gfw-slider .js_slide a.icf:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -492px -870px;\n          width: 110px;\n          height: 26px; }\n      #my-gfw-slider .js_slide a.idb {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -366px -436px;\n        width: 120px;\n        height: 58px; }\n        #my-gfw-slider .js_slide a.idb:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -101px -516px;\n          width: 120px;\n          height: 58px; }\n      #my-gfw-slider .js_slide a.idbinvest {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: 0px -392px;\n        width: 197px;\n        height: 44px; }\n        #my-gfw-slider .js_slide a.idbinvest:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -197px -392px;\n          width: 197px;\n          height: 44px; }\n      #my-gfw-slider .js_slide a.imazon {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -908px -772px;\n        width: 79px;\n        height: 24px; }\n        #my-gfw-slider .js_slide a.imazon:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -908px -748px;\n          width: 79px;\n          height: 24px; }\n      #my-gfw-slider .js_slide a.inab {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -415px -160px;\n        width: 106px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.inab:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: 0px -436px;\n          width: 106px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.ioi {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -106px -499px;\n        width: 110px;\n        height: 10px; }\n        #my-gfw-slider .js_slide a.ioi:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -216px -499px;\n          width: 110px;\n          height: 10px; }\n      #my-gfw-slider .js_slide a.jjfast {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -215px -89px;\n        width: 200px;\n        height: 89px; }\n        #my-gfw-slider .js_slide a.jjfast:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -215px 0px;\n          width: 200px;\n          height: 89px; }\n      #my-gfw-slider .js_slide a.lapig {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -120px -312px;\n        width: 120px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.lapig:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: 0px -312px;\n          width: 120px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.macarthur {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -788px 0px;\n        width: 120px;\n        height: 42px; }\n        #my-gfw-slider .js_slide a.macarthur:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -788px -42px;\n          width: 120px;\n          height: 42px; }\n      #my-gfw-slider .js_slide a.minepat {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -535px 0px;\n        width: 85px;\n        height: 85px; }\n        #my-gfw-slider .js_slide a.minepat:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -535px -85px;\n          width: 85px;\n          height: 85px; }\n      #my-gfw-slider .js_slide a.ministiere {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -788px -379px;\n        width: 70px;\n        height: 67px; }\n        #my-gfw-slider .js_slide a.ministiere:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -788px -312px;\n          width: 70px;\n          height: 67px; }\n      #my-gfw-slider .js_slide a.ministryofforeignaffairs {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -415px -80px;\n        width: 106px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.ministryofforeignaffairs:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -415px -240px;\n          width: 106px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.moises {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -788px -268px;\n        width: 110px;\n        height: 44px; }\n        #my-gfw-slider .js_slide a.moises:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -788px -224px;\n          width: 110px;\n          height: 44px; }\n      #my-gfw-slider .js_slide a.mongabay {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -126px -766px;\n        width: 110px;\n        height: 40px; }\n        #my-gfw-slider .js_slide a.mongabay:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -788px -710px;\n          width: 110px;\n          height: 40px; }\n      #my-gfw-slider .js_slide a.moore {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -96px -870px;\n        width: 96px;\n        height: 37px; }\n        #my-gfw-slider .js_slide a.moore:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: 0px -870px;\n          width: 96px;\n          height: 37px; }\n      #my-gfw-slider .js_slide a.muyissi {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -620px -480px;\n        width: 80px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.muyissi:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -535px -330px;\n          width: 80px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.norwegianministri {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -520px -704px;\n        width: 110px;\n        height: 46px; }\n        #my-gfw-slider .js_slide a.norwegianministri:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -410px -704px;\n          width: 110px;\n          height: 46px; }\n      #my-gfw-slider .js_slide a.opendevcam {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -788px -154px;\n        width: 70px;\n        height: 70px; }\n        #my-gfw-slider .js_slide a.opendevcam:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -788px -84px;\n          width: 70px;\n          height: 70px; }\n      #my-gfw-slider .js_slide a.opendevmekong {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -535px -170px;\n        width: 80px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.opendevmekong:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -535px -250px;\n          width: 80px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.orbital {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -415px -320px;\n        width: 101px;\n        height: 70px; }\n        #my-gfw-slider .js_slide a.orbital:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: 0px -516px;\n          width: 101px;\n          height: 70px; }\n      #my-gfw-slider .js_slide a.osfac {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -908px -542px;\n        width: 44px;\n        height: 56px; }\n        #my-gfw-slider .js_slide a.osfac:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -908px -598px;\n          width: 44px;\n          height: 56px; }\n      #my-gfw-slider .js_slide a.osinfor {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -620px -400px;\n        width: 86px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.osinfor:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -620px -320px;\n          width: 86px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.raisg {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -535px -410px;\n        width: 80px;\n        height: 75px; }\n        #my-gfw-slider .js_slide a.raisg:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -708px 0px;\n          width: 80px;\n          height: 75px; }\n      #my-gfw-slider .js_slide a.redd {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: 0px -704px;\n        width: 95px;\n        height: 62px; }\n        #my-gfw-slider .js_slide a.redd:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -95px -704px;\n          width: 95px;\n          height: 62px; }\n      #my-gfw-slider .js_slide a.resolve {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -470px -806px;\n        width: 110px;\n        height: 28px; }\n        #my-gfw-slider .js_slide a.resolve:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -580px -806px;\n          width: 110px;\n          height: 28px; }\n      #my-gfw-slider .js_slide a.rfuk {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -346px -766px;\n        width: 110px;\n        height: 37px; }\n        #my-gfw-slider .js_slide a.rfuk:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -236px -766px;\n          width: 110px;\n          height: 37px; }\n      #my-gfw-slider .js_slide a.rm {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -110px -646px;\n        width: 110px;\n        height: 58px; }\n        #my-gfw-slider .js_slide a.rm:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: 0px -646px;\n          width: 110px;\n          height: 58px; }\n      #my-gfw-slider .js_slide a.rspo {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -110px -837px;\n        width: 110px;\n        height: 33px; }\n        #my-gfw-slider .js_slide a.rspo:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: 0px -837px;\n          width: 110px;\n          height: 33px; }\n      #my-gfw-slider .js_slide a.rtrs {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -708px -595px;\n        width: 46px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.rtrs:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -360px -312px;\n          width: 46px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.scannex {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -754px -907px;\n        width: 110px;\n        height: 20px; }\n        #my-gfw-slider .js_slide a.scannex:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -864px -907px;\n          width: 110px;\n          height: 20px; }\n      #my-gfw-slider .js_slide a.sentinelhub {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -514px -907px;\n        width: 120px;\n        height: 21px; }\n        #my-gfw-slider .js_slide a.sentinelhub:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -394px -907px;\n          width: 120px;\n          height: 21px; }\n      #my-gfw-slider .js_slide a.sida {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -220px -646px;\n        width: 110px;\n        height: 55px; }\n        #my-gfw-slider .js_slide a.sida:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -330px -646px;\n          width: 110px;\n          height: 55px; }\n      #my-gfw-slider .js_slide a.specialachievement {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: 0px -198px;\n        width: 269px;\n        height: 57px; }\n        #my-gfw-slider .js_slide a.specialachievement:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: 0px -255px;\n          width: 269px;\n          height: 57px; }\n      #my-gfw-slider .js_slide a.thejanegoodallinstitute {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -658px -837px;\n        width: 110px;\n        height: 26px; }\n        #my-gfw-slider .js_slide a.thejanegoodallinstitute:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -768px -837px;\n          width: 110px;\n          height: 26px; }\n      #my-gfw-slider .js_slide a.thetiliafund {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -908px -865px;\n        width: 67px;\n        height: 25px; }\n        #my-gfw-slider .js_slide a.thetiliafund:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -908px -840px;\n          width: 67px;\n          height: 25px; }\n      #my-gfw-slider .js_slide a.tipos {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -360px -806px;\n        width: 110px;\n        height: 28px; }\n        #my-gfw-slider .js_slide a.tipos:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -690px -806px;\n          width: 110px;\n          height: 28px; }\n      #my-gfw-slider .js_slide a.ukaid {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -908px -701px;\n        width: 43px;\n        height: 47px; }\n        #my-gfw-slider .js_slide a.ukaid:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -908px -654px;\n          width: 43px;\n          height: 47px; }\n      #my-gfw-slider .js_slide a.unep {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -908px -428px;\n        width: 49px;\n        height: 57px; }\n        #my-gfw-slider .js_slide a.unep:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -908px -485px;\n          width: 49px;\n          height: 57px; }\n      #my-gfw-slider .js_slide a.unepwcmc {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -110px -586px;\n        width: 110px;\n        height: 60px; }\n        #my-gfw-slider .js_slide a.unepwcmc:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: 0px -586px;\n          width: 110px;\n          height: 60px; }\n      #my-gfw-slider .js_slide a.unilever {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -620px 0px;\n        width: 88px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.unilever:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -620px -80px;\n          width: 88px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.universityofmaryland {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -908px -326px;\n        width: 56px;\n        height: 51px; }\n        #my-gfw-slider .js_slide a.universityofmaryland:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -908px -377px;\n          width: 56px;\n          height: 51px; }\n      #my-gfw-slider .js_slide a.urthecast {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -284px -907px;\n        width: 110px;\n        height: 23px; }\n        #my-gfw-slider .js_slide a.urthecast:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -174px -907px;\n          width: 110px;\n          height: 23px; }\n      #my-gfw-slider .js_slide a.usaid {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -708px -341px;\n        width: 80px;\n        height: 64px; }\n        #my-gfw-slider .js_slide a.usaid:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -708px -277px;\n          width: 80px;\n          height: 64px; }\n      #my-gfw-slider .js_slide a.vizzuality {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -440px -837px;\n        width: 109px;\n        height: 27px; }\n        #my-gfw-slider .js_slide a.vizzuality:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -549px -837px;\n          width: 109px;\n          height: 27px; }\n      #my-gfw-slider .js_slide a.whrc {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -620px -240px;\n        width: 87px;\n        height: 80px; }\n        #my-gfw-slider .js_slide a.whrc:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -620px -160px;\n          width: 87px;\n          height: 80px; }\n      #my-gfw-slider .js_slide a.wilburforce {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: 0px -806px;\n        width: 120px;\n        height: 31px; }\n        #my-gfw-slider .js_slide a.wilburforce:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -120px -806px;\n          width: 120px;\n          height: 31px; }\n      #my-gfw-slider .js_slide a.wri {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -192px -870px;\n        width: 95px;\n        height: 32px; }\n        #my-gfw-slider .js_slide a.wri:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -287px -870px;\n          width: 95px;\n          height: 32px; }\n      #my-gfw-slider .js_slide a.zeroextinction {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -215px -178px;\n        width: 120px;\n        height: 20px; }\n        #my-gfw-slider .js_slide a.zeroextinction:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -634px -907px;\n          width: 120px;\n          height: 20px; }\n      #my-gfw-slider .js_slide a.zsl {\n        background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n        background-position: -788px -654px;\n        width: 80px;\n        height: 56px; }\n        #my-gfw-slider .js_slide a.zsl:hover {\n          background-image: url(https://cdn.rawgit.com/Vizzuality/terra-assets/12915d2317293a4b912b9cf3eb5cdb3416f62ea6/src/images/sprites/logos-sprite.png);\n          background-position: -788px -598px;\n          width: 80px;\n          height: 56px; }\n  #my-gfw-slider .js_prev,\n  #my-gfw-slider .js_next {\n    position: absolute;\n    top: 20px;\n    bottom: 0;\n    margin: auto;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 30px;\n    width: 30px;\n    padding: 0;\n    line-height: 0;\n    font-size: 0;\n    cursor: pointer;\n    color: transparent;\n    border: none;\n    outline: none;\n    z-index: 4; }\n    #my-gfw-slider .js_prev svg,\n    #my-gfw-slider .js_next svg {\n      fill: #666666;\n      width: 12px;\n      height: 12px; }\n    #my-gfw-slider .js_prev:hover, #my-gfw-slider .js_prev:focus,\n    #my-gfw-slider .js_next:hover,\n    #my-gfw-slider .js_next:focus {\n      outline: none; }\n      #my-gfw-slider .js_prev:hover svg, #my-gfw-slider .js_prev:focus svg,\n      #my-gfw-slider .js_next:hover svg,\n      #my-gfw-slider .js_next:focus svg {\n        fill: #0077be; }\n  #my-gfw-slider .js_prev {\n    left: 0; }\n    #my-gfw-slider .js_prev svg {\n      margin-left: -18px; }\n    @media (min-width: 850px) {\n      #my-gfw-slider .js_prev {\n        left: 19px; }\n        #my-gfw-slider .js_prev svg {\n          margin-left: 0; } }\n  #my-gfw-slider .js_next {\n    right: -10px; }\n    #my-gfw-slider .js_next svg {\n      -webkit-transform: rotateZ(180deg);\n              transform: rotateZ(180deg); }\n\n#my-gfw-container .my-gfw-loggedin svg {\n  fill: #FFF; }\n\n#my-gfw-container > a:hover + .submenu,\n#my-gfw-container .submenu:hover {\n  display: block; }\n\n#my-gfw-container .submenu {\n  display: none;\n  position: absolute;\n  width: 150px;\n  z-index: 1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);\n  background: white;\n  -webkit-transform: translate(-25%, 0px);\n          transform: translate(-25%, 0px);\n  transition: all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n#my-gfw-container .submenu li {\n  border-top: 1px solid rgba(0, 0, 0, 0.07);\n  text-align: center; }\n\n#my-gfw-container .submenu li a {\n  color: #555;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  padding: 10px; }\n  #my-gfw-container .submenu li a:hover {\n    background: #fafafa; }\n\n#my-gfw-modal {\n  display: none;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n  width: 100%;\n  height: 100%; }\n  #my-gfw-modal.is-active {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n  #my-gfw-modal .my-gfw-modal-backdrop {\n    background: rgba(0, 0, 0, 0.25);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1; }\n  #my-gfw-modal .my-gfw-modal-window {\n    background: white;\n    border: none;\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);\n    z-index: 2;\n    position: relative;\n    width: 475px;\n    height: 350px;\n    padding: 30px 50px 53px 50px; }\n  #my-gfw-modal .my-gfw-modal-close {\n    display: block;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 20px;\n    height: 20px; }\n    #my-gfw-modal .my-gfw-modal-close svg {\n      fill: #333;\n      width: 20px;\n      height: 20px; }\n    #my-gfw-modal .my-gfw-modal-close:hover svg {\n      fill: #1a1a1a; }\n  #my-gfw-modal header {\n    text-align: center;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    #my-gfw-modal header h2 {\n      font-size: 24px;\n      width: 300px;\n      color: #333; }\n    #my-gfw-modal header h3 {\n      font-weight: 200;\n      line-height: 1.5em;\n      margin-top: 15px;\n      color: #333; }\n      #my-gfw-modal header h3 a {\n        color: #0077be; }\n  #my-gfw-modal .my-gfw-content {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-justify-content: flex-start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  #my-gfw-modal .my-gfw-authentication {\n    margin-top: 50px;\n    height: 100%;\n    width: 100%;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-justify-content: space-between;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    #my-gfw-modal .my-gfw-authentication li {\n      width: 250px;\n      display: block;\n      height: 50px;\n      text-align: center;\n      margin-bottom: 10px;\n      position: relative; }\n    #my-gfw-modal .my-gfw-authentication li a {\n      color: white;\n      text-transform: uppercase;\n      font-size: 14px;\n      width: 100%;\n      height: 100%;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-justify-content: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-align-items: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    #my-gfw-modal .my-gfw-authentication li a svg {\n      fill: white;\n      position: absolute;\n      top: 7px;\n      left: 15px; }\n    #my-gfw-modal .my-gfw-authentication .my-gfw-sign-in-twitter {\n      background-color: #598dca; }\n      #my-gfw-modal .my-gfw-authentication .my-gfw-sign-in-twitter:hover {\n        background-color: #6c9ad0; }\n    #my-gfw-modal .my-gfw-authentication .my-gfw-sign-in-facebook {\n      background-color: #39579b; }\n      #my-gfw-modal .my-gfw-authentication .my-gfw-sign-in-facebook:hover {\n        background-color: #4061ae; }\n    #my-gfw-modal .my-gfw-authentication .my-gfw-sign-in-google {\n      background-color: #da4735; }\n      #my-gfw-modal .my-gfw-authentication .my-gfw-sign-in-google:hover {\n        background-color: #de5b4b; }\n\n#footerGfw {\n  /* Slider */\n  /* Arrows */\n  /* Dots */ }\n  #footerGfw .slick-slider {\n    position: relative;\n    display: block;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -ms-touch-action: pan-y;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent; }\n  #footerGfw .slick-list {\n    position: relative;\n    overflow: hidden;\n    display: block;\n    margin: 0;\n    padding: 0; }\n    #footerGfw .slick-list:focus {\n      outline: none; }\n    #footerGfw .slick-list.dragging {\n      cursor: pointer;\n      cursor: hand; }\n  #footerGfw .slick-slider .slick-track {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n  #footerGfw .slick-track {\n    position: relative;\n    left: 0;\n    top: 0;\n    display: block; }\n    #footerGfw .slick-track:before, #footerGfw .slick-track:after {\n      content: \"\";\n      display: table; }\n    #footerGfw .slick-track:after {\n      clear: both; }\n    .slick-loading #footerGfw .slick-track {\n      visibility: hidden; }\n  #footerGfw .slick-slide {\n    float: left;\n    height: 100%;\n    min-height: 1px;\n    display: none; }\n    [dir=\"rtl\"] #footerGfw .slick-slide {\n      float: right; }\n    #footerGfw .slick-slide img {\n      display: block; }\n    #footerGfw .slick-slide.slick-loading img {\n      display: none; }\n    #footerGfw .slick-slide.dragging img {\n      pointer-events: none; }\n    .slick-initialized #footerGfw .slick-slide {\n      display: block; }\n    .slick-loading #footerGfw .slick-slide {\n      visibility: hidden; }\n    .slick-vertical #footerGfw .slick-slide {\n      display: block;\n      height: auto;\n      border: 1px solid transparent; }\n  #footerGfw .slick-prev,\n  #footerGfw .slick-next {\n    position: absolute;\n    display: block;\n    height: 50px;\n    width: 50px;\n    line-height: 0;\n    font-size: 0;\n    cursor: pointer;\n    background: #E0E0D9;\n    color: transparent;\n    top: 50%;\n    margin-top: -25px;\n    padding: 0;\n    border: none;\n    outline: none;\n    border-radius: 50%; }\n    #footerGfw .slick-prev:hover, #footerGfw .slick-prev:focus,\n    #footerGfw .slick-next:hover,\n    #footerGfw .slick-next:focus {\n      outline: none;\n      background: #0077be;\n      color: transparent; }\n      #footerGfw .slick-prev:hover:before, #footerGfw .slick-prev:focus:before,\n      #footerGfw .slick-next:hover:before,\n      #footerGfw .slick-next:focus:before {\n        opacity: 1; }\n    #footerGfw .slick-prev.slick-disabled:before,\n    #footerGfw .slick-next.slick-disabled:before {\n      opacity: 0.25; }\n  #footerGfw .slick-prev:before, #footerGfw .slick-next:before {\n    content: \"\";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  #footerGfw .slick-prev {\n    left: 0px; }\n    #footerGfw .slick-prev:before {\n      background: url(https://www.globalforestwatch.org/assets/svg-icons/arrow-left.svg) center no-repeat; }\n  #footerGfw .slick-next {\n    right: 0px; }\n    #footerGfw .slick-next:before {\n      background: url(https://www.globalforestwatch.org/assets/svg-icons/arrow-right.svg) center no-repeat; }\n  #footerGfw .slick-slider {\n    margin-bottom: 0px; }\n", ""]);

	// exports


/***/ }),
/* 360 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(127);
	__webpack_require__(162);
	module.exports = __webpack_require__(10).Array.from;


/***/ })
/******/ ]);