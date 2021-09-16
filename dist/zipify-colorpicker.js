(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ZipifyColorPicker"] = factory();
	else
		root["ZipifyColorPicker"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return placements; });
/* unused harmony export beforeRead */
/* unused harmony export read */
/* unused harmony export afterRead */
/* unused harmony export beforeMain */
/* unused harmony export main */
/* unused harmony export afterMain */
/* unused harmony export beforeWrite */
/* unused harmony export write */
/* unused harmony export afterWrite */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isShadowRoot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(2);


function isElement(node) {
  var OwnElement = Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWindow;
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDocumentElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instanceOf_js__ = __webpack_require__(1);

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((Object(__WEBPACK_IMPORTED_MODULE_0__instanceOf_js__["a" /* isElement */])(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBasePlacement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(0);

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getNodeName;
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(50)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getComputedStyle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(2);

function getComputedStyle(element) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(element).getComputedStyle(element);
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  clamp: true,
  throttle: true,
  valueToDecimal: true,
  renderTransparentBg: true,
  uniquIDs: true,
  popperCreator: true
};
Object.defineProperty(exports, "clamp", {
  enumerable: true,
  get: function get() {
    return _clamp.clamp;
  }
});
Object.defineProperty(exports, "throttle", {
  enumerable: true,
  get: function get() {
    return _throttle.throttle;
  }
});
Object.defineProperty(exports, "valueToDecimal", {
  enumerable: true,
  get: function get() {
    return _valueToDecimal.valueToDecimal;
  }
});
Object.defineProperty(exports, "renderTransparentBg", {
  enumerable: true,
  get: function get() {
    return _renderTransparentBg.renderTransparentBg;
  }
});
Object.defineProperty(exports, "uniquIDs", {
  enumerable: true,
  get: function get() {
    return _uniquIDs.uniquIDs;
  }
});
Object.defineProperty(exports, "popperCreator", {
  enumerable: true,
  get: function get() {
    return _popperCreator.popperCreator;
  }
});

var _clamp = __webpack_require__(62);

var _throttle = __webpack_require__(63);

var _valueToDecimal = __webpack_require__(64);

var _renderTransparentBg = __webpack_require__(65);

var _uniquIDs = __webpack_require__(66);

var _popperCreator = __webpack_require__(67);

var _colorHelpers = __webpack_require__(94);

Object.keys(_colorHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _colorHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _colorHelpers[key];
    }
  });
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBoundingClientRect;
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOffsetParent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getNodeName_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instanceOf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isTableElement_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getParentNode_js__ = __webpack_require__(17);







function getTrueOffsetParent(element) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isHTMLElement */])(element) || // https://github.com/popperjs/popper-core/issues/837
  Object(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && Object(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isHTMLElement */])(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = Object(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = Object(__WEBPACK_IMPORTED_MODULE_5__getParentNode_js__["a" /* default */])(element);

  while (Object(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isHTMLElement */])(currentNode) && ['html', 'body'].indexOf(Object(__WEBPACK_IMPORTED_MODULE_1__getNodeName_js__["a" /* default */])(currentNode)) < 0) {
    var css = Object(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && Object(__WEBPACK_IMPORTED_MODULE_4__isTableElement_js__["a" /* default */])(offsetParent) && Object(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (Object(__WEBPACK_IMPORTED_MODULE_1__getNodeName_js__["a" /* default */])(offsetParent) === 'html' || Object(__WEBPACK_IMPORTED_MODULE_1__getNodeName_js__["a" /* default */])(offsetParent) === 'body' && Object(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = detectOverflow;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_utils_getBoundingClientRect_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_getClippingRect_js__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_utils_getDocumentElement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__computeOffsets_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rectToClientRect_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dom_utils_instanceOf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mergePaddingObject_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__expandToHashMap_js__ = __webpack_require__(35);








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["d" /* clippingParents */] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["o" /* viewport */] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* popper */] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = Object(__WEBPACK_IMPORTED_MODULE_7__mergePaddingObject_js__["a" /* default */])(typeof padding !== 'number' ? padding : Object(__WEBPACK_IMPORTED_MODULE_8__expandToHashMap_js__["a" /* default */])(padding, __WEBPACK_IMPORTED_MODULE_5__enums_js__["b" /* basePlacements */]));
  var altContext = elementContext === __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* popper */] ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["j" /* reference */] : __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* popper */];
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = Object(__WEBPACK_IMPORTED_MODULE_1__dom_utils_getClippingRect_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_6__dom_utils_instanceOf_js__["a" /* isElement */])(element) ? element : element.contextElement || Object(__WEBPACK_IMPORTED_MODULE_2__dom_utils_getDocumentElement_js__["a" /* default */])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils_getBoundingClientRect_js__["a" /* default */])(referenceElement);
  var popperOffsets = Object(__WEBPACK_IMPORTED_MODULE_3__computeOffsets_js__["a" /* default */])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = Object(__WEBPACK_IMPORTED_MODULE_4__rectToClientRect_js__["a" /* default */])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* popper */] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* popper */] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [__WEBPACK_IMPORTED_MODULE_5__enums_js__["k" /* right */], __WEBPACK_IMPORTED_MODULE_5__enums_js__["c" /* bottom */]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [__WEBPACK_IMPORTED_MODULE_5__enums_js__["m" /* top */], __WEBPACK_IMPORTED_MODULE_5__enums_js__["c" /* bottom */]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return round; });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
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
    var timeout = runTimeout(cleanUpNextTick);
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
    runClearTimeout(timeout);
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
        runTimeout(drainQueue);
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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getParentNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNodeName_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instanceOf_js__ = __webpack_require__(1);



function getParentNode(element) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__getNodeName_js__["a" /* default */])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    Object(__WEBPACK_IMPORTED_MODULE_2__instanceOf_js__["c" /* isShadowRoot */])(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Object(__WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__["a" /* default */])(element) // fallback

  );
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getVariation;
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWindowScroll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(2);

function getWindowScroll(node) {
  var win = Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWindowScrollBarX;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWindowScroll_js__ = __webpack_require__(19);



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return Object(__WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__["a" /* default */])(element)).left + Object(__WEBPACK_IMPORTED_MODULE_2__getWindowScroll_js__["a" /* default */])(element).scrollLeft;
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isScrollParent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getComputedStyle_js__ = __webpack_require__(9);

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = Object(__WEBPACK_IMPORTED_MODULE_0__getComputedStyle_js__["a" /* default */])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getLayoutRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__ = __webpack_require__(12);
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = Object(__WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__["a" /* default */])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getMainAxisFromPlacement;
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ColorModel", {
  enumerable: true,
  get: function get() {
    return _ColorModel.ColorModel;
  }
});

var _ColorModel = __webpack_require__(111);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(10);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(51));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(53));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(26));

var _common = __webpack_require__(58);

var _models = __webpack_require__(24);

var _helpers = __webpack_require__(11);

var _default2 = {
  name: 'ZipifyColorPicker',
  components: {
    Saturation: _common.Saturation,
    Hue: _common.Hue,
    Alpha: _common.Alpha,
    EditableInput: _common.EditableInput,
    Swatch: _common.Swatch
  },
  model: {
    prop: 'color'
  },
  props: {
    color: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      "default": 'rgba'
    },
    paletteKey: {
      type: String,
      required: false,
      "default": 'colorpicker.palate'
    },
    maxPaletteColors: {
      type: Number,
      required: false,
      "default": 14
    },
    presetColors: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    isOverTop: {
      type: Boolean,
      required: false,
      "default": false
    },
    durationEnter: {
      type: Number,
      required: false,
      "default": 150
    },
    durationLeave: {
      type: Number,
      required: false,
      "default": 100
    },
    placement: {
      type: String,
      required: false,
      "default": 'bottom-end'
    }
  },
  data: function data() {
    return {
      isVisible: false,
      colorModel: {},
      oldValue: '',
      palette: []
    };
  },
  computed: {
    alphaValue: function alphaValue() {
      return Math.round(this.colorModel.alpha * 100);
    },
    colorPickerClasses: function colorPickerClasses() {
      return this.isOverTop ? 'zpc-highest' : null;
    }
  },
  watch: {
    color: {
      immediate: true,
      handler: function handler(value) {
        if (value !== this.oldValue) {
          this.colorModel = this.parseColor(value);
          this.emitEvent();
        }
      }
    }
  },
  created: function created() {
    this.colorPickerId = "zpc-".concat((0, _helpers.uniquIDs)());
    this.loadPalette();
    this.emitEvent();
    document.body.addEventListener('click', this.onOutsideClick);
  },
  destroyed: function destroyed() {
    document.body.removeEventListener('click', this.onOutsideClick);

    if (this._popperInstance) {
      this._popperInstance.destroy();
    }
  },
  methods: {
    onOutsideClick: function onOutsideClick(event) {
      if (!this.isVisible) {
        return;
      }

      this.$emit('outsideClick', event);
    },
    loadPalette: function loadPalette() {
      var storageData = window.localStorage.getItem(this.paletteKey);

      if (storageData === null || storageData === '') {
        this.palette = this.presetColors;
      } else {
        this.palette = storageData.split(';').reverse();
      }
    },
    addColorToPalette: function addColorToPalette(color) {
      if (this.palette.includes(color)) {
        return;
      }

      this.palette = [color].concat((0, _toConsumableArray2["default"])(this.palette.slice(0, this.maxPaletteColors - 1)));
      window.localStorage.setItem(this.paletteKey, Array.from(this.palette).reverse().join(';'));
    },
    toggle: function toggle(targetEl) {
      this.isVisible ? this.close(this.color) : this.open(targetEl);
    },
    open: function open(targetEl) {
      var _this = this;

      return (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loadPalette();

                _this.isVisible = true;
                _context.next = 4;
                return _this.$nextTick();

              case 4:
                _this._popperInstance = (0, _helpers.popperCreator)(targetEl, _this.$refs.colorPicker, _this.placement);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    close: function close(newColor) {
      this.addColorToPalette(newColor);
      this.isVisible = false;
    },
    completeClose: function completeClose() {
      this._popperInstance.destroy();
    },
    parseColor: function parseColor(color) {
      return _models.ColorModel.create(color);
    },
    handlePreset: function handlePreset(color) {
      this.colorModel = this.parseColor(color);
      this.emitEvent();
    },
    setAlphaIfTransparent: function setAlphaIfTransparent(color) {
      if (this.colorModel.isTransparent(color)) {
        this.colorModel.setAlpha(1);
      }
    },
    onSaturationChanged: function onSaturationChanged(components) {
      this.setAlphaIfTransparent(components);
      this.colorModel.updateHsv(components);
      this.emitEvent();
    },
    onHexChanged: function onHexChanged(event) {
      var hex = event.target.value;
      this.colorModel = this.parseColor(hex);
      this.emitEvent();
    },
    onHueChange: function onHueChange(hue) {
      this.setAlphaIfTransparent(hue);
      this.colorModel.updateHsv({
        h: hue
      });
      this.emitEvent();
    },
    changeR: function changeR(r) {
      this.setAlphaIfTransparent(r);
      this.colorModel.updateRgb({
        r: r
      });
      this.emitEvent();
    },
    changeG: function changeG(g) {
      this.setAlphaIfTransparent(g);
      this.colorModel.updateRgb({
        g: g
      });
      this.emitEvent();
    },
    changeB: function changeB(b) {
      this.setAlphaIfTransparent(b);
      this.colorModel.updateRgb({
        b: b
      });
      this.emitEvent();
    },
    emitEvent: function emitEvent() {
      var colorString = this.colorModel.alpha === 1 ? this.colorModel.toHexString() : this.colorModel.toRgbaString();
      this.oldValue = colorString;
      this.$emit('input', colorString);
    },
    changeAlpha: function changeAlpha(alpha) {
      this.colorModel.setAlpha(alpha / 100);
      this.emitEvent();
    },
    generateKeyForSwatch: function generateKeyForSwatch(color) {
      return "".concat(this.colorPickerId, "-").concat(color);
    },
    isCurrentColor: function isCurrentColor(color) {
      return color === this.color ? 'focus' : '';
    }
  }
};
exports["default"] = _default2;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(54);

var iterableToArray = __webpack_require__(55);

var unsupportedIterableToArray = __webpack_require__(56);

var nonIterableSpread = __webpack_require__(57);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helpers = __webpack_require__(11);

var _default = {
  name: 'Alpha',
  props: {
    color: {
      type: Object,
      required: true
    },
    alphaValue: {
      type: Number,
      required: true
    }
  },
  computed: {
    transparentBg: function transparentBg() {
      return {
        backgroundImage: "url(".concat((0, _helpers.renderTransparentBg)(), ")")
      };
    },
    gradientColor: function gradientColor() {
      var _this$color$rgba = this.color.rgba,
          r = _this$color$rgba.r,
          g = _this$color$rgba.g,
          b = _this$color$rgba.b;
      var rgbStr = [r, g, b].join(',');
      return "linear-gradient(to right, rgba(".concat(rgbStr, ", 0) 0%, rgba(").concat(rgbStr, ", 1) 100%)");
    }
  },
  created: function created() {
    this.handleChange = (0, _helpers.throttle)(this.handleChange, 30, {
      leading: true,
      trailing: true
    });
  },
  methods: {
    handleChange: function handleChange(e, skip) {
      !skip && e.preventDefault();
      var container = this.$refs.container;

      if (!container) {
        return;
      }

      var containerWidth = container.clientWidth;
      var xOffset = container.getBoundingClientRect().left + window.pageXOffset;
      var pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      var left = pageX - xOffset;
      var alpha;

      if (left < 0) {
        alpha = 0;
      } else if (left > containerWidth) {
        alpha = 100;
      } else {
        alpha = Math.round(left / containerWidth * 100);
      }

      this.$emit('change', alpha);
    },
    handleMouseDown: function handleMouseDown(e) {
      this.handleChange(e, true);
      window.addEventListener('mousemove', this.handleChange);
      window.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseUp: function handleMouseUp() {
      this.unbindEventListeners();
    },
    unbindEventListeners: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }
};
exports["default"] = _default;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listScrollParents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getScrollParent_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getParentNode_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWindow_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isScrollParent_js__ = __webpack_require__(21);




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = Object(__WEBPACK_IMPORTED_MODULE_0__getScrollParent_js__["a" /* default */])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = Object(__WEBPACK_IMPORTED_MODULE_2__getWindow_js__["a" /* default */])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], Object(__WEBPACK_IMPORTED_MODULE_3__isScrollParent_js__["a" /* default */])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(Object(__WEBPACK_IMPORTED_MODULE_1__getParentNode_js__["a" /* default */])(target)));
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = contains;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instanceOf_js__ = __webpack_require__(1);

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && Object(__WEBPACK_IMPORTED_MODULE_0__instanceOf_js__["c" /* isShadowRoot */])(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rectToClientRect;
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = computeOffsets;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBasePlacement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getVariation_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getMainAxisFromPlacement_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums_js__ = __webpack_require__(0);




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? Object(__WEBPACK_IMPORTED_MODULE_0__getBasePlacement_js__["a" /* default */])(placement) : null;
  var variation = placement ? Object(__WEBPACK_IMPORTED_MODULE_1__getVariation_js__["a" /* default */])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case __WEBPACK_IMPORTED_MODULE_3__enums_js__["m" /* top */]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case __WEBPACK_IMPORTED_MODULE_3__enums_js__["c" /* bottom */]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case __WEBPACK_IMPORTED_MODULE_3__enums_js__["k" /* right */]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case __WEBPACK_IMPORTED_MODULE_3__enums_js__["f" /* left */]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? Object(__WEBPACK_IMPORTED_MODULE_2__getMainAxisFromPlacement_js__["a" /* default */])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case __WEBPACK_IMPORTED_MODULE_3__enums_js__["l" /* start */]:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case __WEBPACK_IMPORTED_MODULE_3__enums_js__["e" /* end */]:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergePaddingObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getFreshSideObject_js__ = __webpack_require__(34);

function mergePaddingObject(paddingObject) {
  return Object.assign({}, Object(__WEBPACK_IMPORTED_MODULE_0__getFreshSideObject_js__["a" /* default */])(), paddingObject);
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFreshSideObject;
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = expandToHashMap;
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_utils_getWindow_js__ = __webpack_require__(2);
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils_getWindow_js__["a" /* default */])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_computeOffsets_js__ = __webpack_require__(32);


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = Object(__WEBPACK_IMPORTED_MODULE_0__utils_computeOffsets_js__["a" /* default */])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export mapToStyles */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_getOffsetParent_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_utils_getWindow_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_utils_getDocumentElement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_getBasePlacement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_math_js__ = __webpack_require__(15);






 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Object(__WEBPACK_IMPORTED_MODULE_6__utils_math_js__["c" /* round */])(Object(__WEBPACK_IMPORTED_MODULE_6__utils_math_js__["c" /* round */])(x * dpr) / dpr) || 0,
    y: Object(__WEBPACK_IMPORTED_MODULE_6__utils_math_js__["c" /* round */])(Object(__WEBPACK_IMPORTED_MODULE_6__utils_math_js__["c" /* round */])(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = __WEBPACK_IMPORTED_MODULE_0__enums_js__["f" /* left */];
  var sideY = __WEBPACK_IMPORTED_MODULE_0__enums_js__["m" /* top */];
  var win = window;

  if (adaptive) {
    var offsetParent = Object(__WEBPACK_IMPORTED_MODULE_1__dom_utils_getOffsetParent_js__["a" /* default */])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === Object(__WEBPACK_IMPORTED_MODULE_2__dom_utils_getWindow_js__["a" /* default */])(popper)) {
      offsetParent = Object(__WEBPACK_IMPORTED_MODULE_3__dom_utils_getDocumentElement_js__["a" /* default */])(popper);

      if (Object(__WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__["a" /* default */])(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["m" /* top */]) {
      sideY = __WEBPACK_IMPORTED_MODULE_0__enums_js__["c" /* bottom */]; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["f" /* left */]) {
      sideX = __WEBPACK_IMPORTED_MODULE_0__enums_js__["k" /* right */]; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = Object(__WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__["a" /* default */])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: Object(__WEBPACK_IMPORTED_MODULE_5__utils_getBasePlacement_js__["a" /* default */])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_utils_getNodeName_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_instanceOf_js__ = __webpack_require__(1);

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!Object(__WEBPACK_IMPORTED_MODULE_1__dom_utils_instanceOf_js__["b" /* isHTMLElement */])(element) || !Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils_getNodeName_js__["a" /* default */])(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!Object(__WEBPACK_IMPORTED_MODULE_1__dom_utils_instanceOf_js__["b" /* isHTMLElement */])(element) || !Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils_getNodeName_js__["a" /* default */])(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = within;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(15);

function within(min, value, max) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* max */])(min, Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* min */])(value, max));
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'EditableInput',
  SHIFT_STEP: 10,
  CTRL_STEP: 100,
  props: {
    value: {
      required: true,
      type: Number
    },
    min: {
      type: Number,
      required: false,
      "default": null
    },
    max: {
      type: Number,
      required: false,
      "default": null
    },
    step: {
      type: Number,
      required: false,
      "default": 1
    },
    label: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      tempValue: 1
    };
  },
  computed: {
    maxNumberLength: function maxNumberLength() {
      if (this.max) {
        return this.max.toString().length;
      }

      return null;
    },
    labelId: function labelId() {
      return "input__label__".concat(this.label, "__").concat(Math.random().toString().slice(2, 6));
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        this.tempValue = value;
      }
    }
  },
  methods: {
    emitEvent: function emitEvent(value) {
      this.$emit('change', value);
    },
    onChange: function onChange() {
      if (this.tempValue === '') {
        this.tempValue = Number.isInteger(this.min) ? this.min : 1;
      }

      var numericValue = Number.parseFloat(this.tempValue);
      var validatedNumber = this.validateNumber(numericValue);
      this.tempValue = this.roundNumber(validatedNumber);
      this.emitEvent(this.tempValue);
    },
    incrementValue: function incrementValue(step) {
      var newValue = this.tempValue + step;
      var validatedNumber = this.validateNumber(newValue);
      this.tempValue = this.roundNumber(validatedNumber);
      this.emitEvent(this.tempValue);
    },
    decrementValue: function decrementValue(step) {
      var newValue = this.tempValue - step;
      var validatedNumber = this.validateNumber(newValue);
      this.tempValue = this.roundNumber(validatedNumber);
      this.emitEvent(this.tempValue);
    },
    validateNumber: function validateNumber(number) {
      if (Number.isInteger(this.min) && number < this.min) {
        return this.min;
      }

      if (Number.isInteger(this.max) && number > this.max) {
        return this.max;
      }

      return number;
    },
    roundNumber: function roundNumber(number) {
      if (!Number.isInteger(this.maxNumberLength)) {
        return number;
      }

      return Number.parseFloat(number.toFixed(this.maxNumberLength + 1).substr(0, this.maxNumberLength));
    }
  }
};
exports["default"] = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'Hue',
  props: {
    value: Object,
    direction: {
      type: String,
      "default": 'horizontal'
    }
  },
  data: function data() {
    return {
      oldHue: 0,
      pullDirection: ''
    };
  },
  computed: {
    color: function color() {
      var h = this.value.h;
      if (h !== 0 && h - this.oldHue > 0) this.pullDirection = 'right';
      if (h !== 0 && h - this.oldHue < 0) this.pullDirection = 'left';
      this.oldHue = h;
      return this.value;
    },
    directionClass: function directionClass() {
      return {
        'zpc-hue--horizontal': this.direction === 'horizontal',
        'zpc-hue--vertical': this.direction === 'vertical'
      };
    },
    pointerTop: function pointerTop() {
      if (this.direction === 'vertical') {
        if (this.color.h === 0 && this.pullDirection === 'right') return 0;
        return "".concat(-(this.color.h * 100 / 360) + 100, "%");
      } else {
        return 0;
      }
    },
    pointerLeft: function pointerLeft() {
      if (this.direction === 'vertical') {
        return 0;
      } else {
        if (this.color.h === 0 && this.pullDirection === 'right') return '100%';
        return "".concat(this.value.h * 100 / 360, "%");
      }
    }
  },
  methods: {
    handleChange: function handleChange(e, skip) {
      !skip && e.preventDefault();
      var container = this.$refs.container;

      if (!container) {
        return;
      }

      var containerWidth = container.clientWidth;
      var containerHeight = container.clientHeight;
      var xOffset = container.getBoundingClientRect().left + window.pageXOffset;
      var yOffset = container.getBoundingClientRect().top + window.pageYOffset;
      var pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      var pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
      var left = pageX - xOffset;
      var top = pageY - yOffset;
      var hue;
      var percent;

      if (this.direction === 'vertical') {
        if (top < 0) {
          hue = 360;
        } else if (top > containerHeight) {
          hue = 0;
        } else {
          percent = -(top * 100 / containerHeight) + 100;
          hue = 360 * percent / 100;
        }

        this.$emit('change', hue);
      } else {
        if (left < 0) {
          hue = 0;
        } else if (left > containerWidth) {
          hue = 360;
        } else {
          percent = left * 100 / containerWidth;
          hue = 360 * percent / 100;
        }

        this.$emit('change', hue);
      }
    },
    handleMouseDown: function handleMouseDown(e) {
      this.handleChange(e, true);
      window.addEventListener('mousemove', this.handleChange);
      window.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseUp: function handleMouseUp() {
      this.unbindEventListeners();
    },
    unbindEventListeners: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }
};
exports["default"] = _default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helpers = __webpack_require__(11);

var _default = {
  name: 'Saturation',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    colors: function colors() {
      return this.value;
    },
    bgColor: function bgColor() {
      return "hsl(".concat(this.colors.h, ", 100%, 50%)");
    },
    pointerTop: function pointerTop() {
      return "".concat(1 - this.colors.v * 100 + 100, "%");
    },
    pointerLeft: function pointerLeft() {
      return "".concat(this.colors.s * 100, "%");
    }
  },
  methods: {
    throttle: (0, _helpers.throttle)(function (fn, data) {
      fn(data);
    }, 20),
    handleChange: function handleChange(e, skip) {
      !skip && e.preventDefault();
      var container = this.$refs.container;

      if (!container) {
        return;
      }

      var containerWidth = container.clientWidth;
      var containerHeight = container.clientHeight;
      var xOffset = container.getBoundingClientRect().left + window.pageXOffset;
      var yOffset = container.getBoundingClientRect().top + window.pageYOffset;
      var pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0);
      var pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0);
      var left = (0, _helpers.clamp)(pageX - xOffset, 0, containerWidth);
      var top = (0, _helpers.clamp)(pageY - yOffset, 0, containerHeight);
      var saturation = left / containerWidth;
      var bright = (0, _helpers.clamp)(1 - top / containerHeight, 0, 1);
      this.throttle(this.onChange, {
        s: saturation,
        v: bright
      });
    },
    onChange: function onChange(param) {
      this.$emit('change', param);
    },
    handleMouseDown: function handleMouseDown(e) {
      this.handleChange(e, true);
      window.addEventListener('mousemove', this.handleChange);
      window.addEventListener('mouseup', this.handleChange);
      window.addEventListener('mouseup', this.handleMouseUp);
    },
    handleMouseUp: function handleMouseUp() {
      this.unbindEventListeners();
    },
    unbindEventListeners: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }
};
exports["default"] = _default;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = __webpack_require__(24);

var _helpers = __webpack_require__(11);

var _default = {
  name: 'Swatch',
  props: {
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    isTransparent: function isTransparent() {
      return _models.ColorModel.isTransparent(this.color);
    },
    swatchStyle: function swatchStyle() {
      if (this.isTransparent) {
        return {
          backgroundImage: "url(".concat((0, _helpers.renderTransparentBg)(), ")")
        };
      }

      return {
        backgroundColor: this.color
      };
    },
    ariaLabel: function ariaLabel() {
      return "Color:".concat(this.color);
    }
  },
  methods: {
    onSwatchClick: function onSwatchClick() {
      this.$emit('selected', this.color);
    }
  }
};
exports["default"] = _default;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ZipifyColorPicker", {
  enumerable: true,
  get: function get() {
    return _components.ZipifyColorPicker;
  }
});
Object.defineProperty(exports, "ColorModel", {
  enumerable: true,
  get: function get() {
    return _models.ColorModel;
  }
});

var _components = __webpack_require__(46);

var _models = __webpack_require__(24);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(10);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ZipifyColorPicker", {
  enumerable: true,
  get: function get() {
    return _ZipifyColorPicker["default"];
  }
});

var _ZipifyColorPicker = _interopRequireDefault(__webpack_require__(47));

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ZipifyColorPicker_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ZipifyColorPicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ZipifyColorPicker_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ZipifyColorPicker_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ZipifyColorPicker_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a5dbf0d4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ZipifyColorPicker_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(48)
}
var normalizeComponent = __webpack_require__(8)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ZipifyColorPicker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a5dbf0d4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ZipifyColorPicker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/ZipifyColorPicker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5dbf0d4", Component.options)
  } else {
    hotAPI.reload("data-v-a5dbf0d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("48411e89", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a5dbf0d4\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ZipifyColorPicker.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a5dbf0d4\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ZipifyColorPicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n.zpc {\n  position: absolute;\n  box-sizing: border-box;\n  width: 214px;\n  padding: 8px;\n  background: #3b3b3b;\n  box-shadow: 0 2px 8px 0 #0d0d0d;\n  z-index: 2;\n}\n.zpc-highest {\n  z-index: 10001;\n}\n.zpc-animate-enter-active {\n  transition: opacity .15s ease-out;\n}\n.zpc-animate-enter, .zpc-animate-leave-to {\n  opacity: 0;\n}\n.zpc-animate-leave-active {\n  transition: opacity .1s ease-in;\n}\n.zpc-saturation-wrap {\n  width: 100%;\n  padding-bottom: 70.71%;\n  position: relative;\n}\n.zpc-controls {\n  display: flex;\n}\n.zpc-sliders {\n  padding: 10px 0;\n  flex: 1;\n}\n.zpc-hue-wrap {\n  position: relative;\n  height: 8px;\n  margin-bottom: 12px;\n}\n.zpc-alpha-wrap {\n  position: relative;\n  height: 8px;\n  margin-top: 12px;\n}\n.zpc-field {\n  display: flex;\n}\n.zpc-field .zpc-input__input {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 2px 1px 2px 4px;\n  border: 1px solid #999;\n  font-family: 'Lato', sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  background: #3b3b3b;\n  color: #c4c4c4;\n  margin-bottom: 8px;\n}\n.zpc-field .zpc-input__label {\n  display: block;\n  text-align: left;\n  font-size: 10px;\n  line-height: 1.6;\n  color: #c4c4c4;\n  padding-bottom: 4px;\n  text-transform: capitalize;\n}\n.zpc-field--single {\n  flex: 1;\n  padding-left: 4px;\n}\n.zpc-field--double {\n  flex: 2;\n}\n.zpc-presets {\n  padding: 11px 0 6px 8px;\n  margin: 0 -8px;\n  border-top: 1px solid rgba(151, 151, 151, 0.15);\n}\n.zpc-presets-color {\n  position: relative;\n  margin: 0 5px 2px 0;\n  cursor: pointer;\n  border: 0;\n  width: 24px;\n  height: 24px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMElEQVQ4T2N89uzZfwY8QFJSEp80A+OoAcMiDP7//483HTx//hx/Ohg1gIFx6IcBALl+VXknOCvFAAAAAElFTkSuQmCC\");\n}\n.zpc-presets-color::before{\n  content: '';\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: 28px;\n  height: 28px;\n}\n.zpc-presets-color:focus,\n.zpc-presets-color:focus-within,\n.zpc-presets-color.focus {\n  outline: 1px solid #ce9a0f;\n}\n", ""]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

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
  exports.wrap = wrap;

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
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
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
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
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
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
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
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
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

  define(Gp, toStringTagSymbol, "Generator");

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

  exports.keys = function(object) {
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
  exports.values = values;

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

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(27);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(27);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(10);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Alpha", {
  enumerable: true,
  get: function get() {
    return _Alpha["default"];
  }
});
Object.defineProperty(exports, "EditableInput", {
  enumerable: true,
  get: function get() {
    return _EditableInput["default"];
  }
});
Object.defineProperty(exports, "Hue", {
  enumerable: true,
  get: function get() {
    return _Hue["default"];
  }
});
Object.defineProperty(exports, "Saturation", {
  enumerable: true,
  get: function get() {
    return _Saturation["default"];
  }
});
Object.defineProperty(exports, "Swatch", {
  enumerable: true,
  get: function get() {
    return _Swatch["default"];
  }
});

var _Alpha = _interopRequireDefault(__webpack_require__(59));

var _EditableInput = _interopRequireDefault(__webpack_require__(96));

var _Hue = _interopRequireDefault(__webpack_require__(100));

var _Saturation = _interopRequireDefault(__webpack_require__(104));

var _Swatch = _interopRequireDefault(__webpack_require__(108));

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alpha_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alpha_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alpha_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alpha_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alpha_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1af1f1ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Alpha_vue__ = __webpack_require__(95);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(8)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alpha_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1af1f1ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Alpha_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/common/Alpha.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1af1f1ac", Component.options)
  } else {
    hotAPI.reload("data-v-1af1f1ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("4dc1b086", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1af1f1ac\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alpha.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1af1f1ac\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alpha.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n.zpc-alpha {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.zpc-alpha-checkboard-wrap {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.zpc-alpha-checkboard-wrap__bg {\n  height: 100%;\n  background-size: contain;\n}\n.zpc-alpha-gradient {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.zpc-alpha-container {\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  margin: 0 1px;\n}\n.zpc-alpha-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.zpc-alpha-picker {\n  box-sizing: border-box;\n  cursor: pointer;\n  width: 5px;\n  height: 12px;\n  background: transparent;\n  border: 2px solid #fff;\n  transform: translate(-2.5px, -2px);\n}\n.zpc-alpha-picker:active,\n.zpc-alpha-picker:focus {\n  outline: none;\n}\n", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clamp = clamp;

function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Math.max(min, Math.min(max, value));
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;

function throttle(callback, limit) {
  var waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(function () {
        waiting = false;
      }, limit);
    }
  };
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueToDecimal = valueToDecimal;

function valueToDecimal(value) {
  if (value > 1) {
    return value / 100;
  }

  return value;
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTransparentBg = renderTransparentBg;
var TILE_SIZE = 8;
var TILE_COLOR_LIGHT = '#fff';
var TILE_COLOR_DARK = '#e6e6e6';

function renderTransparentBg() {
  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = TILE_SIZE * 2;
  var ctx = canvas.getContext('2d');

  if (!ctx) {
    return null;
  }

  ctx.fillStyle = TILE_COLOR_LIGHT;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = TILE_COLOR_DARK;
  ctx.fillRect(0, 0, TILE_SIZE, TILE_SIZE);
  ctx.translate(TILE_SIZE, TILE_SIZE);
  ctx.fillRect(0, 0, TILE_SIZE, TILE_SIZE);
  return canvas.toDataURL();
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniquIDs = uniquIDs;
var id = 999;

function uniquIDs() {
  id += 1;
  return id;
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(10);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popperCreator = popperCreator;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(26));

var _popperLite = __webpack_require__(68);

var _modifiers = __webpack_require__(84);

function getModifiers() {
  return [{
    name: 'offset',
    options: {
      offset: [0, 4]
    }
  }, {
    name: 'preventOverflow',
    options: {
      padding: {
        top: 4,
        bottom: 4,
        left: 4,
        right: 4
      }
    }
  }];
}

function popperCreator(reference, popper, position) {
  var createPopper = (0, _popperLite.popperGenerator)({
    defaultModifiers: [].concat((0, _toConsumableArray2["default"])(_popperLite.defaultModifiers), [_modifiers.flip, _modifiers.offset, _modifiers.preventOverflow])
  });
  var modifiers = getModifiers();
  return createPopper(reference, popper, {
    placement: position,
    modifiers: modifiers
  });
}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPopper", function() { return createPopper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModifiers", function() { return defaultModifiers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createPopper_js__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modifiers_eventListeners_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modifiers_popperOffsets_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modifiers_computeStyles_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modifiers_applyStyles_js__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return __WEBPACK_IMPORTED_MODULE_0__createPopper_js__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return __WEBPACK_IMPORTED_MODULE_0__createPopper_js__["a"]; });





var defaultModifiers = [__WEBPACK_IMPORTED_MODULE_1__modifiers_eventListeners_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__modifiers_popperOffsets_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__modifiers_computeStyles_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__modifiers_applyStyles_js__["a" /* default */]];
var createPopper = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__createPopper_js__["b" /* popperGenerator */])({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["b"] = popperGenerator;
/* unused harmony export createPopper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_utils_getCompositeRect_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_getLayoutRect_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_utils_listScrollParents_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_utils_getOffsetParent_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_orderModifiers_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_debounce_js__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_validateModifiers_js__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_uniqueBy_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_getBasePlacement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_mergeByName_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_detectOverflow_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dom_utils_instanceOf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__enums_js__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_11__utils_detectOverflow_js__["a"]; });














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: Object(__WEBPACK_IMPORTED_MODULE_12__dom_utils_instanceOf_js__["a" /* isElement */])(reference) ? Object(__WEBPACK_IMPORTED_MODULE_2__dom_utils_listScrollParents_js__["a" /* default */])(reference) : reference.contextElement ? Object(__WEBPACK_IMPORTED_MODULE_2__dom_utils_listScrollParents_js__["a" /* default */])(reference.contextElement) : [],
          popper: Object(__WEBPACK_IMPORTED_MODULE_2__dom_utils_listScrollParents_js__["a" /* default */])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = Object(__WEBPACK_IMPORTED_MODULE_5__utils_orderModifiers_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_10__utils_mergeByName_js__["a" /* default */])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = Object(__WEBPACK_IMPORTED_MODULE_8__utils_uniqueBy_js__["a" /* default */])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          Object(__WEBPACK_IMPORTED_MODULE_7__utils_validateModifiers_js__["a" /* default */])(modifiers);

          if (Object(__WEBPACK_IMPORTED_MODULE_9__utils_getBasePlacement_js__["a" /* default */])(state.options.placement) === __WEBPACK_IMPORTED_MODULE_13__enums_js__["a" /* auto */]) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = Object(__WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__["a" /* default */])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: Object(__WEBPACK_IMPORTED_MODULE_0__dom_utils_getCompositeRect_js__["a" /* default */])(reference, Object(__WEBPACK_IMPORTED_MODULE_3__dom_utils_getOffsetParent_js__["a" /* default */])(popper), state.options.strategy === 'fixed'),
          popper: Object(__WEBPACK_IMPORTED_MODULE_1__dom_utils_getLayoutRect_js__["a" /* default */])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Object(__WEBPACK_IMPORTED_MODULE_6__utils_debounce_js__["a" /* default */])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCompositeRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getNodeScroll_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getNodeName_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instanceOf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getWindowScrollBarX_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getDocumentElement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isScrollParent_js__ = __webpack_require__(21);






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = Object(__WEBPACK_IMPORTED_MODULE_5__getDocumentElement_js__["a" /* default */])(offsetParent);
  var rect = Object(__WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__["a" /* default */])(elementOrVirtualElement);
  var isOffsetParentAnElement = Object(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isHTMLElement */])(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (Object(__WEBPACK_IMPORTED_MODULE_2__getNodeName_js__["a" /* default */])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    Object(__WEBPACK_IMPORTED_MODULE_6__isScrollParent_js__["a" /* default */])(documentElement)) {
      scroll = Object(__WEBPACK_IMPORTED_MODULE_1__getNodeScroll_js__["a" /* default */])(offsetParent);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isHTMLElement */])(offsetParent)) {
      offsets = Object(__WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__["a" /* default */])(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = Object(__WEBPACK_IMPORTED_MODULE_4__getWindowScrollBarX_js__["a" /* default */])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getNodeScroll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindowScroll_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getWindow_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instanceOf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getHTMLElementScroll_js__ = __webpack_require__(72);




function getNodeScroll(node) {
  if (node === Object(__WEBPACK_IMPORTED_MODULE_1__getWindow_js__["a" /* default */])(node) || !Object(__WEBPACK_IMPORTED_MODULE_2__instanceOf_js__["b" /* isHTMLElement */])(node)) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__getWindowScroll_js__["a" /* default */])(node);
  } else {
    return Object(__WEBPACK_IMPORTED_MODULE_3__getHTMLElementScroll_js__["a" /* default */])(node);
  }
}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getHTMLElementScroll;
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getScrollParent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getParentNode_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isScrollParent_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getNodeName_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instanceOf_js__ = __webpack_require__(1);




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(Object(__WEBPACK_IMPORTED_MODULE_2__getNodeName_js__["a" /* default */])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isHTMLElement */])(node) && Object(__WEBPACK_IMPORTED_MODULE_1__isScrollParent_js__["a" /* default */])(node)) {
    return node;
  }

  return getScrollParent(Object(__WEBPACK_IMPORTED_MODULE_0__getParentNode_js__["a" /* default */])(node));
}

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isTableElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNodeName_js__ = __webpack_require__(5);

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(Object(__WEBPACK_IMPORTED_MODULE_0__getNodeName_js__["a" /* default */])(element)) >= 0;
}

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = orderModifiers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(0);
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return __WEBPACK_IMPORTED_MODULE_0__enums_js__["g" /* modifierPhases */].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateModifiers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_js__ = __webpack_require__(0);


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (__WEBPACK_IMPORTED_MODULE_1__enums_js__["g" /* modifierPhases */].indexOf(modifier.phase) < 0) {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + __WEBPACK_IMPORTED_MODULE_1__enums_js__["g" /* modifierPhases */].join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(Object(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = format;
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uniqueBy;
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeByName;
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getClippingRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getViewportRect_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getDocumentRect_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listScrollParents_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getOffsetParent_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getDocumentElement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getComputedStyle_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__instanceOf_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__getBoundingClientRect_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__getParentNode_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contains_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__getNodeName_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_rectToClientRect_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_math_js__ = __webpack_require__(15);















function getInnerBoundingClientRect(element) {
  var rect = Object(__WEBPACK_IMPORTED_MODULE_8__getBoundingClientRect_js__["a" /* default */])(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === __WEBPACK_IMPORTED_MODULE_0__enums_js__["o" /* viewport */] ? Object(__WEBPACK_IMPORTED_MODULE_12__utils_rectToClientRect_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__getViewportRect_js__["a" /* default */])(element)) : Object(__WEBPACK_IMPORTED_MODULE_7__instanceOf_js__["b" /* isHTMLElement */])(clippingParent) ? getInnerBoundingClientRect(clippingParent) : Object(__WEBPACK_IMPORTED_MODULE_12__utils_rectToClientRect_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__getDocumentRect_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__getDocumentElement_js__["a" /* default */])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = Object(__WEBPACK_IMPORTED_MODULE_3__listScrollParents_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_9__getParentNode_js__["a" /* default */])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(Object(__WEBPACK_IMPORTED_MODULE_6__getComputedStyle_js__["a" /* default */])(element).position) >= 0;
  var clipperElement = canEscapeClipping && Object(__WEBPACK_IMPORTED_MODULE_7__instanceOf_js__["b" /* isHTMLElement */])(element) ? Object(__WEBPACK_IMPORTED_MODULE_4__getOffsetParent_js__["a" /* default */])(element) : element;

  if (!Object(__WEBPACK_IMPORTED_MODULE_7__instanceOf_js__["a" /* isElement */])(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return Object(__WEBPACK_IMPORTED_MODULE_7__instanceOf_js__["a" /* isElement */])(clippingParent) && Object(__WEBPACK_IMPORTED_MODULE_10__contains_js__["a" /* default */])(clippingParent, clipperElement) && Object(__WEBPACK_IMPORTED_MODULE_11__getNodeName_js__["a" /* default */])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Object(__WEBPACK_IMPORTED_MODULE_13__utils_math_js__["a" /* max */])(rect.top, accRect.top);
    accRect.right = Object(__WEBPACK_IMPORTED_MODULE_13__utils_math_js__["b" /* min */])(rect.right, accRect.right);
    accRect.bottom = Object(__WEBPACK_IMPORTED_MODULE_13__utils_math_js__["b" /* min */])(rect.bottom, accRect.bottom);
    accRect.left = Object(__WEBPACK_IMPORTED_MODULE_13__utils_math_js__["a" /* max */])(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getViewportRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWindowScrollBarX_js__ = __webpack_require__(20);



function getViewportRect(element) {
  var win = Object(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(element);
  var html = Object(__WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__["a" /* default */])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + Object(__WEBPACK_IMPORTED_MODULE_2__getWindowScrollBarX_js__["a" /* default */])(element),
    y: y
  };
}

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDocumentRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getDocumentElement_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getComputedStyle_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWindowScrollBarX_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getWindowScroll_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_math_js__ = __webpack_require__(15);




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = Object(__WEBPACK_IMPORTED_MODULE_0__getDocumentElement_js__["a" /* default */])(element);
  var winScroll = Object(__WEBPACK_IMPORTED_MODULE_3__getWindowScroll_js__["a" /* default */])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = Object(__WEBPACK_IMPORTED_MODULE_4__utils_math_js__["a" /* max */])(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Object(__WEBPACK_IMPORTED_MODULE_4__utils_math_js__["a" /* max */])(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + Object(__WEBPACK_IMPORTED_MODULE_2__getWindowScrollBarX_js__["a" /* default */])(element);
  var y = -winScroll.scrollTop;

  if (Object(__WEBPACK_IMPORTED_MODULE_1__getComputedStyle_js__["a" /* default */])(body || html).direction === 'rtl') {
    x += Object(__WEBPACK_IMPORTED_MODULE_4__utils_math_js__["a" /* max */])(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__applyStyles_js__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyStyles", function() { return __WEBPACK_IMPORTED_MODULE_0__applyStyles_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arrow_js__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "arrow", function() { return __WEBPACK_IMPORTED_MODULE_1__arrow_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__computeStyles_js__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "computeStyles", function() { return __WEBPACK_IMPORTED_MODULE_2__computeStyles_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventListeners_js__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "eventListeners", function() { return __WEBPACK_IMPORTED_MODULE_3__eventListeners_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flip_js__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return __WEBPACK_IMPORTED_MODULE_4__flip_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hide_js__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return __WEBPACK_IMPORTED_MODULE_5__hide_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offset_js__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return __WEBPACK_IMPORTED_MODULE_6__offset_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popperOffsets_js__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return __WEBPACK_IMPORTED_MODULE_7__popperOffsets_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__preventOverflow_js__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return __WEBPACK_IMPORTED_MODULE_8__preventOverflow_js__["a"]; });










/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getBasePlacement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_getLayoutRect_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_utils_contains_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_utils_getOffsetParent_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_getMainAxisFromPlacement_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_within_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_mergePaddingObject_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_expandToHashMap_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dom_utils_instanceOf_js__ = __webpack_require__(1);









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return Object(__WEBPACK_IMPORTED_MODULE_6__utils_mergePaddingObject_js__["a" /* default */])(typeof padding !== 'number' ? padding : Object(__WEBPACK_IMPORTED_MODULE_7__utils_expandToHashMap_js__["a" /* default */])(padding, __WEBPACK_IMPORTED_MODULE_8__enums_js__["b" /* basePlacements */]));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = Object(__WEBPACK_IMPORTED_MODULE_0__utils_getBasePlacement_js__["a" /* default */])(state.placement);
  var axis = Object(__WEBPACK_IMPORTED_MODULE_4__utils_getMainAxisFromPlacement_js__["a" /* default */])(basePlacement);
  var isVertical = [__WEBPACK_IMPORTED_MODULE_8__enums_js__["f" /* left */], __WEBPACK_IMPORTED_MODULE_8__enums_js__["k" /* right */]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = Object(__WEBPACK_IMPORTED_MODULE_1__dom_utils_getLayoutRect_js__["a" /* default */])(arrowElement);
  var minProp = axis === 'y' ? __WEBPACK_IMPORTED_MODULE_8__enums_js__["m" /* top */] : __WEBPACK_IMPORTED_MODULE_8__enums_js__["f" /* left */];
  var maxProp = axis === 'y' ? __WEBPACK_IMPORTED_MODULE_8__enums_js__["c" /* bottom */] : __WEBPACK_IMPORTED_MODULE_8__enums_js__["k" /* right */];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = Object(__WEBPACK_IMPORTED_MODULE_3__dom_utils_getOffsetParent_js__["a" /* default */])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = Object(__WEBPACK_IMPORTED_MODULE_5__utils_within_js__["a" /* default */])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!Object(__WEBPACK_IMPORTED_MODULE_9__dom_utils_instanceOf_js__["b" /* isHTMLElement */])(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_2__dom_utils_contains_js__["a" /* default */])(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_getOppositeVariationPlacement_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_detectOverflow_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_computeAutoPlacement_js__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_getVariation_js__ = __webpack_require__(18);






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(placement) === __WEBPACK_IMPORTED_MODULE_5__enums_js__["a" /* auto */]) {
    return [];
  }

  var oppositePlacement = Object(__WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__["a" /* default */])(placement);
  return [Object(__WEBPACK_IMPORTED_MODULE_2__utils_getOppositeVariationPlacement_js__["a" /* default */])(placement), oppositePlacement, Object(__WEBPACK_IMPORTED_MODULE_2__utils_getOppositeVariationPlacement_js__["a" /* default */])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = Object(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [Object(__WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__["a" /* default */])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(Object(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(placement) === __WEBPACK_IMPORTED_MODULE_5__enums_js__["a" /* auto */] ? Object(__WEBPACK_IMPORTED_MODULE_4__utils_computeAutoPlacement_js__["a" /* default */])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = Object(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(placement);

    var isStartVariation = Object(__WEBPACK_IMPORTED_MODULE_6__utils_getVariation_js__["a" /* default */])(placement) === __WEBPACK_IMPORTED_MODULE_5__enums_js__["l" /* start */];
    var isVertical = [__WEBPACK_IMPORTED_MODULE_5__enums_js__["m" /* top */], __WEBPACK_IMPORTED_MODULE_5__enums_js__["c" /* bottom */]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = Object(__WEBPACK_IMPORTED_MODULE_3__utils_detectOverflow_js__["a" /* default */])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["k" /* right */] : __WEBPACK_IMPORTED_MODULE_5__enums_js__["f" /* left */] : isStartVariation ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["c" /* bottom */] : __WEBPACK_IMPORTED_MODULE_5__enums_js__["m" /* top */];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = Object(__WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__["a" /* default */])(mainVariationSide);
    }

    var altVariationSide = Object(__WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__["a" /* default */])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOppositePlacement;
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOppositeVariationPlacement;
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = computeAutoPlacement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getVariation_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detectOverflow_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getBasePlacement_js__ = __webpack_require__(4);




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? __WEBPACK_IMPORTED_MODULE_1__enums_js__["h" /* placements */] : _options$allowedAutoP;
  var variation = Object(__WEBPACK_IMPORTED_MODULE_0__getVariation_js__["a" /* default */])(placement);
  var placements = variation ? flipVariations ? __WEBPACK_IMPORTED_MODULE_1__enums_js__["n" /* variationPlacements */] : __WEBPACK_IMPORTED_MODULE_1__enums_js__["n" /* variationPlacements */].filter(function (placement) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__getVariation_js__["a" /* default */])(placement) === variation;
  }) : __WEBPACK_IMPORTED_MODULE_1__enums_js__["b" /* basePlacements */];
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = Object(__WEBPACK_IMPORTED_MODULE_2__detectOverflow_js__["a" /* default */])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[Object(__WEBPACK_IMPORTED_MODULE_3__getBasePlacement_js__["a" /* default */])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(16)))

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_detectOverflow_js__ = __webpack_require__(14);



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [__WEBPACK_IMPORTED_MODULE_0__enums_js__["m" /* top */], __WEBPACK_IMPORTED_MODULE_0__enums_js__["k" /* right */], __WEBPACK_IMPORTED_MODULE_0__enums_js__["c" /* bottom */], __WEBPACK_IMPORTED_MODULE_0__enums_js__["f" /* left */]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__utils_detectOverflow_js__["a" /* default */])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__utils_detectOverflow_js__["a" /* default */])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export distanceAndSkiddingToXY */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getBasePlacement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_js__ = __webpack_require__(0);


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = Object(__WEBPACK_IMPORTED_MODULE_0__utils_getBasePlacement_js__["a" /* default */])(placement);
  var invertDistance = [__WEBPACK_IMPORTED_MODULE_1__enums_js__["f" /* left */], __WEBPACK_IMPORTED_MODULE_1__enums_js__["m" /* top */]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [__WEBPACK_IMPORTED_MODULE_1__enums_js__["f" /* left */], __WEBPACK_IMPORTED_MODULE_1__enums_js__["k" /* right */]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = __WEBPACK_IMPORTED_MODULE_1__enums_js__["h" /* placements */].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_getMainAxisFromPlacement_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_getAltAxis_js__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_within_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dom_utils_getLayoutRect_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dom_utils_getOffsetParent_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_detectOverflow_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_getVariation_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_getFreshSideObject_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_math_js__ = __webpack_require__(15);












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = Object(__WEBPACK_IMPORTED_MODULE_7__utils_detectOverflow_js__["a" /* default */])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = Object(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(state.placement);
  var variation = Object(__WEBPACK_IMPORTED_MODULE_8__utils_getVariation_js__["a" /* default */])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = Object(__WEBPACK_IMPORTED_MODULE_2__utils_getMainAxisFromPlacement_js__["a" /* default */])(basePlacement);
  var altAxis = Object(__WEBPACK_IMPORTED_MODULE_3__utils_getAltAxis_js__["a" /* default */])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? __WEBPACK_IMPORTED_MODULE_0__enums_js__["m" /* top */] : __WEBPACK_IMPORTED_MODULE_0__enums_js__["f" /* left */];
    var altSide = mainAxis === 'y' ? __WEBPACK_IMPORTED_MODULE_0__enums_js__["c" /* bottom */] : __WEBPACK_IMPORTED_MODULE_0__enums_js__["k" /* right */];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === __WEBPACK_IMPORTED_MODULE_0__enums_js__["l" /* start */] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === __WEBPACK_IMPORTED_MODULE_0__enums_js__["l" /* start */] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? Object(__WEBPACK_IMPORTED_MODULE_5__dom_utils_getLayoutRect_js__["a" /* default */])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : Object(__WEBPACK_IMPORTED_MODULE_9__utils_getFreshSideObject_js__["a" /* default */])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = Object(__WEBPACK_IMPORTED_MODULE_4__utils_within_js__["a" /* default */])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && Object(__WEBPACK_IMPORTED_MODULE_6__dom_utils_getOffsetParent_js__["a" /* default */])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = Object(__WEBPACK_IMPORTED_MODULE_4__utils_within_js__["a" /* default */])(tether ? Object(__WEBPACK_IMPORTED_MODULE_10__utils_math_js__["b" /* min */])(min, tetherMin) : min, offset, tether ? Object(__WEBPACK_IMPORTED_MODULE_10__utils_math_js__["a" /* max */])(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? __WEBPACK_IMPORTED_MODULE_0__enums_js__["m" /* top */] : __WEBPACK_IMPORTED_MODULE_0__enums_js__["f" /* left */];

      var _altSide = mainAxis === 'x' ? __WEBPACK_IMPORTED_MODULE_0__enums_js__["c" /* bottom */] : __WEBPACK_IMPORTED_MODULE_0__enums_js__["k" /* right */];

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = Object(__WEBPACK_IMPORTED_MODULE_4__utils_within_js__["a" /* default */])(tether ? Object(__WEBPACK_IMPORTED_MODULE_10__utils_math_js__["b" /* min */])(_min, tetherMin) : _min, _offset, tether ? Object(__WEBPACK_IMPORTED_MODULE_10__utils_math_js__["a" /* max */])(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAltAxis;
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HSVAtoRGBA = HSVAtoRGBA;
exports.HSLAtoHSVA = HSLAtoHSVA;
exports.RGBAtoHex = RGBAtoHex;
exports.RGBAtoHSVA = RGBAtoHSVA;
exports.HSVAtoHSLA = HSVAtoHSLA;
exports.fromHexa = fromHexa;
exports.padEnd = padEnd;
exports.parseHex = parseHex;
exports.fromHex = fromHex;
exports.HexToHSVA = HexToHSVA;
exports.chunk = chunk;
exports.HexToRGBA = HexToRGBA;

function HSVAtoRGBA(hsva) {
  var h = hsva.h,
      s = hsva.s,
      v = hsva.v,
      a = hsva.a;

  var f = function f(n) {
    var k = (n + h / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };

  var rgb = [f(5), f(3), f(1)].map(function (v) {
    return Math.round(v * 255);
  });
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    a: a
  };
}

function HSLAtoHSVA(hsl) {
  var h = hsl.h,
      s = hsl.s,
      l = hsl.l,
      a = hsl.a;
  var v = l + s * Math.min(l, 1 - l);
  var sprime = v === 0 ? 0 : 2 - 2 * l / v;
  return {
    h: h,
    s: sprime,
    v: v,
    a: a
  };
}

function RGBAtoHex(rgba) {
  var toHex = function toHex(v) {
    var h = Math.round(v).toString(16);
    return ('00'.substr(0, 2 - h.length) + h).toUpperCase();
  };

  var components = [toHex(rgba.r), toHex(rgba.g), toHex(rgba.b)];
  return "#".concat(components.join(''));
}

function RGBAtoHSVA(rgba) {
  if (!rgba) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  var r = rgba.r / 255;
  var g = rgba.g / 255;
  var b = rgba.b / 255;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;

  if (max !== min) {
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
      h = 60 * (4 + (r - g) / (max - min));
    }
  }

  if (h < 0) h = h + 360;
  var s = max === 0 ? 0 : (max - min) / max;
  var hsv = [h, s, max];
  return {
    h: hsv[0],
    s: hsv[1],
    v: hsv[2],
    a: rgba.a
  };
}

function HSVAtoHSLA(hsva) {
  var h = hsva.h,
      s = hsva.s,
      v = hsva.v,
      a = hsva.a;
  var l = v - v * s / 2;
  var sprime = l === 1 || l === 0 ? 0 : (v - l) / Math.min(l, 1 - l);
  return {
    h: h,
    s: sprime,
    l: l,
    a: a
  };
}

function fromHexa(hexa) {
  var hsva = HexToHSVA(hexa);
  var hsla = HSVAtoHSLA(hsva);
  var rgba = HSVAtoRGBA(hsva);
  return {
    alpha: hsva.a,
    hex: hexa.substr(0, 7),
    hexa: hexa,
    hsla: hsla,
    hsva: hsva,
    hue: hsva.h,
    rgba: rgba
  };
}

function padEnd(str, length) {
  var _char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

  return str + _char.repeat(Math.max(0, length - str.length));
}

function parseHex(hexString) {
  var hex = hexString;

  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }

  hex = hex.replace(/([^0-9a-f])/gi, 'F');

  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split('').map(function (x) {
      return x + x;
    }).join('');
  }

  if (hex.length === 6) {
    hex = padEnd(hex, 8, 'F');
  } else {
    hex = padEnd(padEnd(hex, 6), 8, 'F');
  }

  return "#".concat(hex).toUpperCase().substr(0, 9);
}

function fromHex(hex) {
  return fromHexa(parseHex(hex));
}

function HexToHSVA(hex) {
  var rgb = HexToRGBA(hex);
  return RGBAtoHSVA(rgb);
}

function chunk(str) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var chunked = [];
  var index = 0;

  while (index < str.length) {
    chunked.push(str.substr(index, size));
    index += size;
  }

  return chunked;
}

function HexToRGBA(hex) {
  var rgba = chunk(hex.slice(1), 2).map(function (c) {
    return parseInt(c, 16);
  });
  return {
    r: rgba[0],
    g: rgba[1],
    b: rgba[2],
    a: Math.round(rgba[3] / 255 * 100) / 100
  };
}

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "zpc-alpha" }, [
    _c("div", { staticClass: "zpc-alpha-checkboard-wrap" }, [
      _c("div", {
        staticClass: "zpc-alpha-checkboard-wrap__bg",
        style: _vm.transparentBg
      })
    ]),
    _vm._v(" "),
    _c("div", {
      staticClass: "zpc-alpha-gradient",
      style: { background: _vm.gradientColor }
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "container",
        staticClass: "zpc-alpha-container",
        on: {
          mousedown: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "left", 37, $event.key, [
                "Left",
                "ArrowLeft"
              ])
            ) {
              return null
            }
            if ("button" in $event && $event.button !== 0) {
              return null
            }
            return _vm.handleMouseDown.apply(null, arguments)
          },
          touchmove: _vm.handleChange,
          touchstart: _vm.handleChange
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "zpc-alpha-pointer",
            style: { left: _vm.alphaValue + "%" }
          },
          [
            _c("div", {
              staticClass: "zpc-alpha-picker",
              attrs: { tabindex: "0" }
            })
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1af1f1ac", esExports)
  }
}

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditableInput_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditableInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditableInput_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditableInput_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditableInput_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_441174dc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EditableInput_vue__ = __webpack_require__(99);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(8)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditableInput_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_441174dc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EditableInput_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/common/EditableInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-441174dc", Component.options)
  } else {
    hotAPI.reload("data-v-441174dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("0f73e73c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-441174dc\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EditableInput.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-441174dc\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EditableInput.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n.zpc-editable-input {\n  position: relative;\n}\n.zpc-input__input {\n  padding: 0;\n  border: 0;\n  outline: none;\n  -moz-appearance: textfield;\n}\n.zpc-input__input::-webkit-outer-spin-button,\n.zpc-input__input::-webkit-inner-spin-button {\n   -webkit-appearance: none;\n   margin: 0;\n}\n.zpc-input__label {\n  text-transform: capitalize;\n}\n", ""]);

// exports


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "zpc-editable-input" }, [
    _c(
      "label",
      { staticClass: "zpc-input__label", attrs: { for: _vm.labelId } },
      [_vm._v(_vm._s(_vm.label))]
    ),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.tempValue,
          expression: "tempValue"
        }
      ],
      staticClass: "zpc-input__input",
      attrs: { type: "number", id: _vm.labelId },
      domProps: { value: _vm.tempValue },
      on: {
        change: _vm.onChange,
        keydown: [
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            $event.preventDefault()
            return _vm.onChange.apply(null, arguments)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
            ) {
              return null
            }
            if (
              $event.ctrlKey ||
              $event.shiftKey ||
              $event.altKey ||
              $event.metaKey
            ) {
              return null
            }
            $event.preventDefault()
            return _vm.incrementValue(_vm.step)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown"
              ])
            ) {
              return null
            }
            if (
              $event.ctrlKey ||
              $event.shiftKey ||
              $event.altKey ||
              $event.metaKey
            ) {
              return null
            }
            $event.preventDefault()
            return _vm.decrementValue(_vm.step)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
            ) {
              return null
            }
            if (!$event.shiftKey) {
              return null
            }
            $event.preventDefault()
            return _vm.incrementValue(_vm.$options.SHIFT_STEP)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown"
              ])
            ) {
              return null
            }
            if (!$event.shiftKey) {
              return null
            }
            $event.preventDefault()
            return _vm.decrementValue(_vm.$options.SHIFT_STEP)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
            ) {
              return null
            }
            if (!$event.ctrlKey) {
              return null
            }
            $event.preventDefault()
            return _vm.incrementValue(_vm.$options.CTRL_STEP)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown"
              ])
            ) {
              return null
            }
            if (!$event.ctrlKey) {
              return null
            }
            $event.preventDefault()
            return _vm.decrementValue(_vm.$options.CTRL_STEP)
          }
        ],
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.tempValue = $event.target.value
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-441174dc", esExports)
  }
}

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hue_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hue_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hue_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hue_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b9aea78_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Hue_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(101)
}
var normalizeComponent = __webpack_require__(8)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hue_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b9aea78_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Hue_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/common/Hue.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b9aea78", Component.options)
  } else {
    hotAPI.reload("data-v-7b9aea78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("7c5f1a1c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7b9aea78\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Hue.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7b9aea78\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Hue.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n.zpc-hue {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.zpc-hue--horizontal {\n  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.zpc-hue--vertical {\n  background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.zpc-hue-container {\n  cursor: default;\n  margin: 0 1px;\n  position: relative;\n  height: 100%;\n}\n.zpc-hue-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.zpc-hue-picker {\n  box-sizing: border-box;\n  cursor: pointer;\n  width: 5px;\n  height: 12px;\n  background: transparent;\n  border: 2px solid #fff;\n  transform: translate(-2.5px, -2px);\n}\n.zpc-hue-picker:active,\n.zpc-hue-picker:focus {\n  outline: none;\n}\n", ""]);

// exports


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: ["zpc-hue", _vm.directionClass] }, [
    _c(
      "div",
      {
        ref: "container",
        staticClass: "zpc-hue-container",
        attrs: {
          role: "slider",
          "aria-valuenow": _vm.color.h,
          "aria-valuemin": "0",
          "aria-valuemax": "360"
        },
        on: {
          mousedown: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "left", 37, $event.key, [
                "Left",
                "ArrowLeft"
              ])
            ) {
              return null
            }
            if ("button" in $event && $event.button !== 0) {
              return null
            }
            return _vm.handleMouseDown.apply(null, arguments)
          },
          touchmove: _vm.handleChange,
          touchstart: _vm.handleChange
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "zpc-hue-pointer",
            style: { top: _vm.pointerTop, left: _vm.pointerLeft },
            attrs: { role: "presentation" }
          },
          [
            _c("div", {
              staticClass: "zpc-hue-picker",
              attrs: { tabindex: "0" }
            })
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-7b9aea78", esExports)
  }
}

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Saturation_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Saturation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Saturation_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Saturation_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Saturation_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba139894_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Saturation_vue__ = __webpack_require__(107);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var normalizeComponent = __webpack_require__(8)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Saturation_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba139894_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Saturation_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/common/Saturation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba139894", Component.options)
  } else {
    hotAPI.reload("data-v-ba139894", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(106);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("b5380e52", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba139894\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Saturation.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba139894\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Saturation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n.zpc-saturation,\n.zpc-saturation-gradient,\n.zpc-saturation-gradient::before,\n.zpc-saturation-gradient::after {\n  cursor: default;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.zpc-saturation-gradient::before,\n.zpc-saturation-gradient::after {\n  content: '';\n}\n.zpc-saturation-gradient::before {\n  background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n}\n.zpc-saturation-gradient::after {\n  background: linear-gradient(to top, #000, rgba(0,0,0,0));\n}\n.zpc-saturation-pointer {\n  cursor: pointer;\n  position: absolute;\n  transform: translate(-50%, -73%);\n}\n.zpc-saturation-circle {\n  box-sizing: border-box;\n  cursor: pointer;\n  width: 8px;\n  height: 8px;\n  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n.zpc-saturation-circle:active,\n.zpc-saturation-circle:focus {\n  outline: none;\n}\n", ""]);

// exports


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "container",
      staticClass: "zpc-saturation",
      style: { background: _vm.bgColor },
      on: {
        mousedown: function($event) {
          if (
            !$event.type.indexOf("key") &&
            _vm._k($event.keyCode, "left", 37, $event.key, [
              "Left",
              "ArrowLeft"
            ])
          ) {
            return null
          }
          if ("button" in $event && $event.button !== 0) {
            return null
          }
          return _vm.handleMouseDown.apply(null, arguments)
        },
        touchmove: _vm.handleChange,
        touchstart: _vm.handleChange
      }
    },
    [
      _c("div", { staticClass: "zpc-saturation-gradient" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "zpc-saturation-pointer",
          style: { top: _vm.pointerTop, left: _vm.pointerLeft }
        },
        [
          _c("div", {
            staticClass: "zpc-saturation-circle",
            attrs: { tabindex: "0" }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-ba139894", esExports)
  }
}

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swatch_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swatch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swatch_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swatch_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swatch_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55880d20_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Swatch_vue__ = __webpack_require__(118);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(109)
}
var normalizeComponent = __webpack_require__(8)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swatch_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55880d20_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Swatch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/common/Swatch.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55880d20", Component.options)
  } else {
    hotAPI.reload("data-v-55880d20", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(110);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("2b441180", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55880d20\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Swatch.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-55880d20\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Swatch.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n.zpc-presets-color-wrap-in {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 24px;\n    height: 24px;\n}\n", ""]);

// exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(10);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorModel = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(112));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(113));

var _createClass2 = _interopRequireDefault(__webpack_require__(114));

var _consts = __webpack_require__(115);

var _helpers = __webpack_require__(11);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ColorModel = function () {
  function ColorModel(rgba) {
    (0, _classCallCheck2["default"])(this, ColorModel);
    this._rgba = rgba;
    this._hsva = this._calcHsva();
    this._alpha = rgba.a;
  }

  (0, _createClass2["default"])(ColorModel, [{
    key: "hex",
    get: function get() {
      return this.toHexString();
    }
  }, {
    key: "r",
    get: function get() {
      return this._rgba.r;
    }
  }, {
    key: "b",
    get: function get() {
      return this._rgba.b;
    }
  }, {
    key: "g",
    get: function get() {
      return this._rgba.g;
    }
  }, {
    key: "h",
    get: function get() {
      return this._hsva.h;
    }
  }, {
    key: "s",
    get: function get() {
      return this._hsva.s;
    }
  }, {
    key: "v",
    get: function get() {
      return this._hsva.v;
    }
  }, {
    key: "alpha",
    get: function get() {
      return this._alpha;
    }
  }, {
    key: "setAlpha",
    value: function setAlpha(value) {
      this._alpha = value;
      return this;
    }
  }, {
    key: "toHexString",
    value: function toHexString() {
      return (0, _helpers.RGBAtoHex)({
        r: this.r,
        g: this.g,
        b: this.b,
        a: this.alpha
      });
    }
  }, {
    key: "toRgbaString",
    value: function toRgbaString() {
      var alphaValue = "".concat(Math.floor(this.alpha * 100), "%");
      var components = [this.r, this.g, this.b, alphaValue].join(', ');
      return "rgba(".concat(components, ")");
    }
  }, {
    key: "rgba",
    get: function get() {
      return this._rgba;
    }
  }, {
    key: "updateRgb",
    value: function updateRgb(rgb) {
      this._rgba = _objectSpread(_objectSpread({}, this._rgba), rgb);
      this._hsva = this._calcHsva();
    }
  }, {
    key: "hsva",
    get: function get() {
      return this._hsva;
    }
  }, {
    key: "updateHsv",
    value: function updateHsv(hsv) {
      this._hsva = _objectSpread(_objectSpread({}, this._hsva), hsv);
      this._rgba = this._calcRgba();
    }
  }, {
    key: "isTransparent",
    value: function isTransparent() {
      return this.alpha === 0;
    }
  }, {
    key: "isDark",
    value: function isDark() {
      return this.getBrightness() < 128;
    }
  }, {
    key: "getBrightness",
    value: function getBrightness() {
      return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1000;
    }
  }, {
    key: "_calcHsva",
    value: function _calcHsva() {
      return (0, _helpers.RGBAtoHSVA)(this.rgba);
    }
  }, {
    key: "_calcRgba",
    value: function _calcRgba() {
      return (0, _helpers.HSVAtoRGBA)(this.hsva);
    }
  }], [{
    key: "create",
    value: function create(color) {
      if (!color) {
        return ColorModel.fromWhite();
      }

      var trimmedColor = color.replace(/^\s+/, '').replace(/\s+$/, '').toLowerCase();

      if (_consts.NamedColors[trimmedColor]) {
        trimmedColor = _consts.NamedColors[trimmedColor];
      } else if (trimmedColor === 'transparent') {
        return ColorModel.fromTransparent();
      }

      var rgbMatch = _consts.ColorMatchers.RGB.exec(trimmedColor) || _consts.ColorMatchers.RGBA.exec(trimmedColor);

      if (rgbMatch) {
        var alpha = rgbMatch[4] === undefined ? 1 : rgbMatch[4];
        return ColorModel.fromRgba({
          r: Number.parseInt(rgbMatch[1]),
          g: Number.parseInt(rgbMatch[2]),
          b: Number.parseInt(rgbMatch[3]),
          a: Number.parseFloat(alpha)
        });
      }

      var hslMatch = _consts.ColorMatchers.HSL.exec(trimmedColor) || _consts.ColorMatchers.HSLA.exec(trimmedColor);

      if (hslMatch) {
        var _alpha = hslMatch[4] === undefined ? 1 : hslMatch[4];

        return ColorModel.fromHsla({
          h: Number.parseInt(hslMatch[1]),
          s: Number.parseFloat(hslMatch[2]),
          l: Number.parseFloat(hslMatch[3]),
          a: Number.parseFloat(_alpha)
        });
      }

      var hsvMatch = _consts.ColorMatchers.HSV.exec(trimmedColor) || _consts.ColorMatchers.HSVA.exec(trimmedColor);

      if (hsvMatch) {
        var _alpha2 = hsvMatch[4] === undefined ? 1 : hsvMatch[4];

        return ColorModel.fromHsva({
          h: Number.parseInt(hsvMatch[1]),
          s: Number.parseFloat(hsvMatch[2]),
          v: Number.parseFloat(hsvMatch[3]),
          a: Number.parseFloat(_alpha2)
        });
      }

      var hexMatch = _consts.ColorMatchers.HEX8.exec(trimmedColor) || _consts.ColorMatchers.HEX6.exec(trimmedColor) || _consts.ColorMatchers.HEX4.exec(trimmedColor) || _consts.ColorMatchers.HEX3.exec(trimmedColor);

      if (hexMatch) {
        return ColorModel.fromHex(trimmedColor);
      }

      return ColorModel.fromWhite();
    }
  }, {
    key: "fromHex",
    value: function fromHex(hexColor) {
      var _fromHex2 = (0, _helpers.fromHex)(hexColor),
          rgba = _fromHex2.rgba;

      return new ColorModel(rgba);
    }
  }, {
    key: "fromRgba",
    value: function fromRgba(_ref) {
      var r = _ref.r,
          g = _ref.g,
          b = _ref.b,
          a = _ref.a;
      var decimalAlpha = (0, _helpers.valueToDecimal)(a);
      return new ColorModel({
        r: r,
        g: g,
        b: b,
        a: decimalAlpha
      });
    }
  }, {
    key: "fromHsla",
    value: function fromHsla(_ref2) {
      var h = _ref2.h,
          s = _ref2.s,
          l = _ref2.l,
          a = _ref2.a;
      var decimalS = (0, _helpers.valueToDecimal)(s);
      var decimalL = (0, _helpers.valueToDecimal)(l);
      var decimalAlpha = (0, _helpers.valueToDecimal)(a);
      return ColorModel.fromHsva((0, _helpers.HSLAtoHSVA)({
        h: h,
        s: decimalS,
        l: decimalL,
        a: decimalAlpha
      }));
    }
  }, {
    key: "fromHsva",
    value: function fromHsva(_ref3) {
      var h = _ref3.h,
          s = _ref3.s,
          v = _ref3.v,
          a = _ref3.a;
      var decimalS = (0, _helpers.valueToDecimal)(s);
      var decimalV = (0, _helpers.valueToDecimal)(v);
      var decimalAlpha = (0, _helpers.valueToDecimal)(a);
      var rgba = (0, _helpers.HSVAtoRGBA)({
        h: h,
        s: decimalS,
        v: decimalV,
        a: decimalAlpha
      });
      return new ColorModel(rgba);
    }
  }, {
    key: "fromTransparent",
    value: function fromTransparent() {
      var rgba = {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      };
      return new ColorModel(rgba);
    }
  }, {
    key: "fromWhite",
    value: function fromWhite() {
      var rgba = {
        r: 255,
        g: 255,
        b: 255,
        a: 1
      };
      return new ColorModel(rgba);
    }
  }, {
    key: "fromBlack",
    value: function fromBlack() {
      var rgba = {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      };
      return new ColorModel(rgba);
    }
  }, {
    key: "isTransparent",
    value: function isTransparent(color) {
      return ColorModel.create(color).isTransparent();
    }
  }, {
    key: "isDark",
    value: function isDark(color) {
      return ColorModel.create(color).isDark();
    }
  }]);
  return ColorModel;
}();

exports.ColorModel = ColorModel;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 113 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 114 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NamedColors", {
  enumerable: true,
  get: function get() {
    return _NamedColors.NamedColors;
  }
});
Object.defineProperty(exports, "ColorMatchers", {
  enumerable: true,
  get: function get() {
    return _ColorMatchers.ColorMatchers;
  }
});

var _NamedColors = __webpack_require__(116);

var _ColorMatchers = __webpack_require__(117);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NamedColors = void 0;
var NamedColors = Object.freeze({
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '0ff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '00f',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  burntsienna: 'ea7e5d',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '0ff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'f0f',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '663399',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
});
exports.NamedColors = NamedColors;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorMatchers = void 0;
var CSS_INTEGER = '[-\\+]?\\d+%?';
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var ColorMatchers = Object.freeze({
  CSS_UNIT: new RegExp(CSS_UNIT),
  RGB: new RegExp("rgb".concat(PERMISSIVE_MATCH3)),
  RGBA: new RegExp("rgba".concat(PERMISSIVE_MATCH4)),
  HSL: new RegExp("hsl".concat(PERMISSIVE_MATCH3)),
  HSLA: new RegExp("hsla".concat(PERMISSIVE_MATCH4)),
  HSV: new RegExp("hsv".concat(PERMISSIVE_MATCH3)),
  HSVA: new RegExp("hsva".concat(PERMISSIVE_MATCH4)),
  HEX3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  HEX6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  HEX4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  HEX8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
});
exports.ColorMatchers = ColorMatchers;

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      attrs: { "aria-label": _vm.ariaLabel, type: "button" },
      on: { click: _vm.onSwatchClick }
    },
    [
      _c("span", {
        staticClass: "zpc-presets-color-wrap-in",
        style: _vm.swatchStyle
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-55880d20", esExports)
  }
}

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._t("activator", null, { toggle: _vm.toggle, open: _vm.open }),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            name: "zpc-animate",
            duration: { enter: _vm.durationEnter, leave: _vm.durationLeave }
          },
          on: { "after-leave": _vm.completeClose }
        },
        [
          _vm.isVisible
            ? _c(
                "div",
                {
                  ref: "colorPicker",
                  staticClass: "zpc",
                  class: _vm.colorPickerClasses,
                  attrs: {
                    role: "application",
                    "aria-label": "Zipify color picker"
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "zpc-saturation-wrap" },
                    [
                      _c("Saturation", {
                        attrs: { value: _vm.colorModel },
                        on: { change: _vm.onSaturationChanged }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "zpc-controls" }, [
                    _c("div", { staticClass: "zpc-sliders" }, [
                      _c(
                        "div",
                        { staticClass: "zpc-hue-wrap" },
                        [
                          _c("Hue", {
                            on: { change: _vm.onHueChange },
                            model: {
                              value: _vm.colorModel,
                              callback: function($$v) {
                                _vm.colorModel = $$v
                              },
                              expression: "colorModel"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "zpc-alpha-wrap" },
                        [
                          _c("Alpha", {
                            attrs: {
                              color: _vm.colorModel,
                              "alpha-value": _vm.alphaValue
                            },
                            on: { change: _vm.changeAlpha }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "zpc-field" }, [
                    _c("div", { staticClass: "zpc-field--double" }, [
                      _c("div", { staticClass: "zpc-editable-input" }, [
                        _c("span", { staticClass: "zpc-input__label" }, [
                          _vm._v("HEX")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "zpc-input__input",
                          attrs: { "aria-labelledby": "hex" },
                          domProps: { value: _vm.colorModel.hex },
                          on: {
                            change: _vm.onHexChanged,
                            keydown: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              $event.preventDefault()
                              return _vm.onHexChanged.apply(null, arguments)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "zpc-field--single" },
                      [
                        _c("EditableInput", {
                          attrs: {
                            label: "r",
                            value: _vm.colorModel.r,
                            min: 0,
                            max: 255
                          },
                          on: { change: _vm.changeR }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "zpc-field--single" },
                      [
                        _c("EditableInput", {
                          attrs: {
                            label: "g",
                            value: _vm.colorModel.g,
                            min: 0,
                            max: 255
                          },
                          on: { change: _vm.changeG }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "zpc-field--single" },
                      [
                        _c("EditableInput", {
                          attrs: {
                            label: "b",
                            value: _vm.colorModel.b,
                            min: 0,
                            max: 255
                          },
                          on: { change: _vm.changeB }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "zpc-field--single" },
                      [
                        _c("EditableInput", {
                          attrs: {
                            label: "Alpha",
                            value: _vm.alphaValue,
                            min: 0,
                            max: 100
                          },
                          on: { change: _vm.changeAlpha }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm.palette.length
                    ? _c(
                        "div",
                        {
                          staticClass: "zpc-presets",
                          attrs: {
                            role: "group",
                            "aria-label":
                              "A color preset, pick one to set as current color"
                          }
                        },
                        _vm._l(_vm.palette, function(color) {
                          return _c("Swatch", {
                            key: _vm.generateKeyForSwatch(color),
                            staticClass: "zpc-presets-color",
                            class: _vm.isCurrentColor(color),
                            attrs: { color: color },
                            on: { selected: _vm.handlePreset }
                          })
                        }),
                        1
                      )
                    : _vm._e()
                ]
              )
            : _vm._e()
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-a5dbf0d4", esExports)
  }
}

/***/ })
/******/ ]);
});