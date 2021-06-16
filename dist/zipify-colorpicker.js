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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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

var listToStyles = __webpack_require__(17)

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  clamp: true,
  throttle: true,
  valueToDecimal: true,
  renderTransparentBg: true
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

var _clamp = __webpack_require__(22);

var _throttle = __webpack_require__(23);

var _valueToDecimal = __webpack_require__(24);

var _renderTransparentBg = __webpack_require__(25);

var _colorHelpers = __webpack_require__(26);

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
/* 4 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 5 */
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

var _ColorModel = __webpack_require__(41);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _common = __webpack_require__(18);

var _models = __webpack_require__(5);

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
    presetColors: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    type: {
      type: String,
      required: false,
      "default": 'rgba'
    },
    disableFields: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      colorModel: {},
      oldValue: ''
    };
  },
  computed: {
    alphaValue: function alphaValue() {
      return Math.round(this.colorModel.alpha * 100);
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
    this.emitEvent();
  },
  methods: {
    parseColor: function parseColor(color) {
      return _models.ColorModel.create(color);
    },
    handlePreset: function handlePreset(color) {
      this.colorModel = this.parseColor(color);
      this.emitEvent();
    },
    onSaturationChanged: function onSaturationChanged(components) {
      this.colorModel.updateHsv(components);
      this.emitEvent();
    },
    onHexChanged: function onHexChanged(event) {
      var hex = event.target.value;
      this.colorModel = this.parseColor(hex);
      this.emitEvent();
    },
    onHueChange: function onHueChange(hue) {
      this.colorModel.updateHsv({
        h: hue
      });
      this.emitEvent();
    },
    changeR: function changeR(r) {
      this.colorModel.updateRgb({
        r: r
      });
      this.emitEvent();
    },
    changeG: function changeG(g) {
      this.colorModel.updateRgb({
        g: g
      });
      this.emitEvent();
    },
    changeB: function changeB(b) {
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
    }
  }
};
exports["default"] = _default2;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helpers = __webpack_require__(3);

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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helpers = __webpack_require__(3);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = __webpack_require__(5);

var _helpers = __webpack_require__(3);

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
/* 12 */
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

var _components = __webpack_require__(13);

var _models = __webpack_require__(5);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ZipifyColorPicker", {
  enumerable: true,
  get: function get() {
    return _ZipifyColorPicker["default"];
  }
});

var _ZipifyColorPicker = _interopRequireDefault(__webpack_require__(14));

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ZipifyColorPicker_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ZipifyColorPicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ZipifyColorPicker_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ZipifyColorPicker_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ZipifyColorPicker_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a5dbf0d4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ZipifyColorPicker_vue__ = __webpack_require__(49);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(15)
}
var normalizeComponent = __webpack_require__(0)
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("48411e89", content, false, {});
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.zpc {\n  position: relative;\n  box-sizing: border-box;\n  width: 214px;\n  padding: 8px;\n  background: #3b3b3b;\n  box-shadow: 0 2px 8px 0 #0d0d0d;\n}\n.zpc-saturation-wrap {\n  width: 100%;\n  padding-bottom: 70.71%;\n  position: relative;\n}\n.zpc-controls {\n  display: flex;\n}\n.zpc-sliders {\n  padding: 10px 0;\n  flex: 1;\n}\n.zpc-hue-wrap {\n  position: relative;\n  height: 8px;\n  margin-bottom: 12px;\n}\n.zpc-alpha-wrap {\n  position: relative;\n  height: 8px;\n  margin-top: 12px;\n}\n.zpc-color-wrap {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  margin-top: 4px;\n  margin-left: 4px;\n  border-radius: 3px;\n}\n.vc-sketch-active-color {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25);\n  z-index: 2;\n}\n.zpc-color-wrap .zpc-checkerboard {\n  background-size: auto;\n}\n.zpc-field {\n  display: flex;\n}\n.zpc-field .zpc-input__input {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 2px 1px 2px 4px;\n  border: 1px solid #999;\n  font-family: 'Lato', sans-serif;\n  font-size: 12px;\n  line-height: 16px;\n  background: #3b3b3b;\n  color: #c4c4c4;\n  margin-bottom: 8px;\n}\n.zpc-field .zpc-input__label {\n  display: block;\n  text-align: left;\n  font-size: 10px;\n  line-height: 1.6;\n  color: #c4c4c4;\n  padding-bottom: 4px;\n  text-transform: capitalize;\n}\n.zpc-field--single {\n  flex: 1;\n  padding-left: 4px;\n}\n.zpc-field--double {\n  flex: 2;\n}\n.zpc-presets {\n  padding: 15px 0 3px 8px;\n  margin: 0 -8px;\n  border-top: 1px solid rgba(151, 151, 151, 0.15);\n}\n.zpc-presets-color {\n  position: relative;\n  box-sizing: border-box;\n  display: inline-block;\n  margin: 0 5px 5px 0;\n  vertical-align: top;\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  border: 00;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n}\n.zpc-presets-color:focus, .zpc-presets-color:focus-within {\n  outline: 1px solid #ce9a0f;\n}\n.zpc-presets-color .zpc-checkerboard {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n}\n.vc-sketch__disable-alpha .zpc-color-wrap {\n  height: 10px;\n}\n", ""]);

// exports


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(4);

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

var _Alpha = _interopRequireDefault(__webpack_require__(19));

var _EditableInput = _interopRequireDefault(__webpack_require__(28));

var _Hue = _interopRequireDefault(__webpack_require__(32));

var _Saturation = _interopRequireDefault(__webpack_require__(36));

var _Swatch = _interopRequireDefault(__webpack_require__(40));

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alpha_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alpha_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alpha_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alpha_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alpha_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1af1f1ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Alpha_vue__ = __webpack_require__(27);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(20)
}
var normalizeComponent = __webpack_require__(0)
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4dc1b086", content, false, {});
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.zpc-alpha {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.zpc-alpha-checkboard-wrap {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.zpc-alpha-checkboard-wrap__bg {\n  height: 100%;\n  background-size: contain;\n}\n.zpc-alpha-gradient {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.zpc-alpha-container {\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  margin: 0 1px;\n}\n.zpc-alpha-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.zpc-alpha-picker {\n  box-sizing: border-box;\n  cursor: pointer;\n  width: 5px;\n  height: 12px;\n  background: transparent;\n  border: 2px solid #fff;\n  transform: translate(-2.5px, -2px);\n}\n.zpc-alpha-picker:active,\n.zpc-alpha-picker:focus {\n  outline: none;\n}\n", ""]);

// exports


/***/ }),
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditableInput_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditableInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditableInput_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditableInput_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_EditableInput_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_441174dc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_EditableInput_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(29)
}
var normalizeComponent = __webpack_require__(0)
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0f73e73c", content, false, {});
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.zpc-editable-input {\n  position: relative;\n}\n.zpc-input__input {\n  padding: 0;\n  border: 0;\n  outline: none;\n  -moz-appearance: textfield;\n}\n.zpc-input__input::-webkit-outer-spin-button,\n.zpc-input__input::-webkit-inner-spin-button {\n   -webkit-appearance: none;\n   margin: 0;\n}\n.zpc-input__label {\n  text-transform: capitalize;\n}\n", ""]);

// exports


/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hue_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hue_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hue_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hue_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hue_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b9aea78_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Hue_vue__ = __webpack_require__(35);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(33)
}
var normalizeComponent = __webpack_require__(0)
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7c5f1a1c", content, false, {});
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.zpc-hue {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.zpc-hue--horizontal {\n  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.zpc-hue--vertical {\n  background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.zpc-hue-container {\n  cursor: default;\n  margin: 0 1px;\n  position: relative;\n  height: 100%;\n}\n.zpc-hue-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.zpc-hue-picker {\n  box-sizing: border-box;\n  cursor: pointer;\n  width: 5px;\n  height: 12px;\n  background: transparent;\n  border: 2px solid #fff;\n  transform: translate(-2.5px, -2px);\n}\n.zpc-hue-picker:active,\n.zpc-hue-picker:focus {\n  outline: none;\n}\n", ""]);

// exports


/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Saturation_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Saturation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Saturation_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Saturation_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Saturation_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ba139894_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Saturation_vue__ = __webpack_require__(39);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(37)
}
var normalizeComponent = __webpack_require__(0)
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("b5380e52", content, false, {});
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.zpc-saturation,\n.zpc-saturation-gradient,\n.zpc-saturation-gradient::before,\n.zpc-saturation-gradient::after {\n  cursor: default;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.zpc-saturation-gradient::before,\n.zpc-saturation-gradient::after {\n  content: '';\n}\n.zpc-saturation-gradient::before {\n  background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n}\n.zpc-saturation-gradient::after {\n  background: linear-gradient(to top, #000, rgba(0,0,0,0));\n}\n.zpc-saturation-pointer {\n  cursor: pointer;\n  position: absolute;\n  transform: translate(-50%, -73%);\n}\n.zpc-saturation-circle {\n  box-sizing: border-box;\n  cursor: pointer;\n  width: 8px;\n  height: 8px;\n  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n.zpc-saturation-circle:active,\n.zpc-saturation-circle:focus {\n  outline: none;\n}\n", ""]);

// exports


/***/ }),
/* 39 */
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
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swatch_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swatch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swatch_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swatch_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Swatch_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55880d20_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Swatch_vue__ = __webpack_require__(48);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorModel = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(42));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(43));

var _createClass2 = _interopRequireDefault(__webpack_require__(44));

var _consts = __webpack_require__(45);

var _helpers = __webpack_require__(3);

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
/* 42 */
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
/* 43 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 44 */
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
/* 45 */
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

var _NamedColors = __webpack_require__(46);

var _ColorMatchers = __webpack_require__(47);

/***/ }),
/* 46 */
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
/* 47 */
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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("button", {
    style: _vm.swatchStyle,
    attrs: { "aria-label": _vm.ariaLabel, type: "button" },
    on: { click: _vm.onSwatchClick }
  })
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "zpc",
      attrs: { role: "application", "aria-label": "Zipify color picker" }
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
                attrs: { color: _vm.colorModel, "alpha-value": _vm.alphaValue },
                on: { change: _vm.changeAlpha }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      !_vm.disableFields
        ? _c("div", { staticClass: "zpc-field" }, [
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
                  on: { change: _vm.onHexChanged }
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
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.presetColors.length
        ? _c(
            "div",
            {
              staticClass: "zpc-presets",
              attrs: {
                role: "group",
                "aria-label": "A color preset, pick one to set as current color"
              }
            },
            _vm._l(_vm.presetColors, function(color) {
              return _c("Swatch", {
                key: color,
                staticClass: "zpc-presets-color",
                attrs: { color: color },
                on: { selected: _vm.handlePreset }
              })
            }),
            1
          )
        : _vm._e()
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
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-a5dbf0d4", esExports)
  }
}

/***/ })
/******/ ]);
});