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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./img/FrontEndBasic.png":
/*!*******************************!*\
  !*** ./img/FrontEndBasic.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9693ad4930446a19b033eb2bba489ae7.png");

/***/ }),

/***/ "./img/FrontEndPro.png":
/*!*****************************!*\
  !*** ./img/FrontEndPro.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ad9f7b9d0a3e7b9e34cb90c8a6d40263.png");

/***/ }),

/***/ "./img/IMG_4724.JPG":
/*!**************************!*\
  !*** ./img/IMG_4724.JPG ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b4f0c9aa33955442cceb7cf2d7e76e35.JPG");

/***/ }),

/***/ "./node_modules/animejs/lib/anime.es.js":
/*!**********************************************!*\
  !*** ./node_modules/animejs/lib/anime.es.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * anime.js v3.1.0
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};

var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return Array.isArray(a); },
  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; }
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? (duration * t) / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = 0;
    var rest = 0;
    while(true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = 0;
      }
    }
    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void 0 ) steps = 10;

  return function (t) { return Math.round(t * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
  function C(aA1)      { return 3.0 * aA1 }

  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {

    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {

      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) { return x; }
      if (x === 0 || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY2);
    }

  }

  return bezier;

})();

var penner = (function () {

  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

  var eases = { linear: function () { return function (t) { return t; }; } };

  var functionEasings = {
    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
    Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
    Bounce: function () { return function (t) {
      var pow2, b = 4;
      while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
    }; },
    Elastic: function (amplitude, period) {
      if ( amplitude === void 0 ) amplitude = 1;
      if ( period === void 0 ) period = .5;

      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return (t === 0 || t === 1) ? t : 
          -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
      }
    }
  };

  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
  });

  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;
    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
      1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
  });

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return applyArguments(ease, args);
  }
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// Arrays

function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
}

function toArray(o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = selectString(o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/2) { return q; }
    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[1]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (getAttribute(el, prop) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));
  switch (operator[0][0]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  if (/\s/g.test(val)) { return val; }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) { return unitLess + unit; }
  return unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0 ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) { break; }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width / viewBox[2],
    h: height / viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    }
  }
}

function getPathProgress(path, progress) {
  function point(offset) {
    if ( offset === void 0 ) offset = 0;

    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  switch (path.property) {
    case 'x': return (p.x - svg.x) * svg.w;
    case 'y': return (p.y - svg.y) * svg.h;
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === 2 && !is.obj(prop[0]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return getFunctionValue(v, animatable); });
      if (value.length === 1) { value = value[0]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];
var pausedInstances = [];
var raf;

var engine = (function () {
  function play() { 
    raf = requestAnimationFrame(step);
  }
  function step(t) {
    var activeInstancesLength = activeInstances.length;
    if (activeInstancesLength) {
      var i = 0;
      while (i < activeInstancesLength) {
        var activeInstance = activeInstances[i];
        if (!activeInstance.paused) {
          activeInstance.tick(t);
        } else {
          var instanceIndex = activeInstances.indexOf(activeInstance);
          if (instanceIndex > -1) {
            activeInstances.splice(instanceIndex, 1);
            activeInstancesLength = activeInstances.length;
          }
        }
        i++;
      }
      play();
    } else {
      raf = cancelAnimationFrame(raf);
    }
  }
  return play;
})();

function handleVisibilityChange() {
  if (document.hidden) {
    activeInstances.forEach(function (ins) { return ins.pause(); });
    pausedInstances = activeInstances.slice(0);
    anime.running = activeInstances = [];
  } else {
    pausedInstances.forEach(function (ins) { return ins.play(); });
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', handleVisibilityChange);
}

// Public Instance

function anime(params) {
  if ( params === void 0 ) params = {};


  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void 0);
      for (var n = 0; n < toNumbersLength; n++) {
        var value = (void 0);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual Array.reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;
        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    if (!raf) { engine(); }
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargets(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for (var c = children.length; c--;) {
      var child = children[c];
      var childAnimations = child.animations;
      removeTargetsFromAnimations(targetsArray, childAnimations);
      if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
    }
    if (!animations.length && !children.length) { instance.pause(); }
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void 0 ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) { fromIndex = 0; }
    if (fromCenter) { fromIndex = (t - 1) / 2; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
          var toX = index%grid[0];
          var toY = Math.floor(index/grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
  }
}

// Timeline

function timeline(params) {
  if ( params === void 0 ) params = {};

  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = true; }
    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.1.0';
anime.speed = 1;
anime.running = activeInstances;
anime.remove = removeTargets;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

/* harmony default export */ __webpack_exports__["default"] = (anime);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/fullpage.js/dist/fullpage.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/fullpage.js/dist/fullpage.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\r\n * fullPage 3.0.8\r\n * https://github.com/alvarotrigo/fullPage.js\r\n *\r\n * @license GPLv3 for open source use only\r\n * or Fullpage Commercial License for commercial use\r\n * http://alvarotrigo.com/fullPage/pricing/\r\n *\r\n * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r\n */\r\nhtml.fp-enabled,\r\n.fp-enabled body {\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow:hidden;\r\n\r\n    /*Avoid flicker on slides transitions for mobile phones #336 */\r\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\r\n}\r\n.fp-section {\r\n    position: relative;\r\n    -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */\r\n    -moz-box-sizing: border-box; /* <=28 */\r\n    box-sizing: border-box;\r\n}\r\n.fp-slide {\r\n    float: left;\r\n}\r\n.fp-slide, .fp-slidesContainer {\r\n    height: 100%;\r\n    display: block;\r\n}\r\n.fp-slides {\r\n    z-index:1;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    -webkit-transition: all 0.3s ease-out; /* Safari<=6 Android<=4.3 */\r\n    transition: all 0.3s ease-out;\r\n}\r\n.fp-section.fp-table, .fp-slide.fp-table {\r\n    display: table;\r\n    table-layout:fixed;\r\n    width: 100%;\r\n}\r\n.fp-tableCell {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.fp-slidesContainer {\r\n    float: left;\r\n    position: relative;\r\n}\r\n.fp-controlArrow {\r\n    -webkit-user-select: none; /* webkit (safari, chrome) browsers */\r\n    -moz-user-select: none; /* mozilla browsers */\r\n    -khtml-user-select: none; /* webkit (konqueror) browsers */\r\n    -ms-user-select: none; /* IE10+ */\r\n    position: absolute;\r\n    z-index: 4;\r\n    top: 50%;\r\n    cursor: pointer;\r\n    width: 0;\r\n    height: 0;\r\n    border-style: solid;\r\n    margin-top: -38px;\r\n    -webkit-transform: translate3d(0,0,0);\r\n    -ms-transform: translate3d(0,0,0);\r\n    transform: translate3d(0,0,0);\r\n}\r\n.fp-controlArrow.fp-prev {\r\n    left: 15px;\r\n    width: 0;\r\n    border-width: 38.5px 34px 38.5px 0;\r\n    border-color: transparent #fff transparent transparent;\r\n}\r\n.fp-controlArrow.fp-next {\r\n    right: 15px;\r\n    border-width: 38.5px 0 38.5px 34px;\r\n    border-color: transparent transparent transparent #fff;\r\n}\r\n.fp-scrollable {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.fp-scroller{\r\n    overflow: hidden;\r\n}\r\n.iScrollIndicator{\r\n    border: 0 !important;\r\n}\r\n.fp-notransition {\r\n    -webkit-transition: none !important;\r\n    transition: none !important;\r\n}\r\n#fp-nav {\r\n    position: fixed;\r\n    z-index: 100;\r\n    margin-top: -32px;\r\n    top: 50%;\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0,0,0);\r\n}\r\n#fp-nav.fp-right {\r\n    right: 17px;\r\n}\r\n#fp-nav.fp-left {\r\n    left: 17px;\r\n}\r\n.fp-slidesNav{\r\n    position: absolute;\r\n    z-index: 4;\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0,0,0);\r\n    -ms-transform: translate3d(0,0,0);\r\n    transform: translate3d(0,0,0);\r\n    left: 0 !important;\r\n    right: 0;\r\n    margin: 0 auto !important;\r\n}\r\n.fp-slidesNav.fp-bottom {\r\n    bottom: 17px;\r\n}\r\n.fp-slidesNav.fp-top {\r\n    top: 17px;\r\n}\r\n#fp-nav ul,\r\n.fp-slidesNav ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n#fp-nav ul li,\r\n.fp-slidesNav ul li {\r\n    display: block;\r\n    width: 14px;\r\n    height: 13px;\r\n    margin: 7px;\r\n    position:relative;\r\n}\r\n.fp-slidesNav ul li {\r\n    display: inline-block;\r\n}\r\n#fp-nav ul li a,\r\n.fp-slidesNav ul li a {\r\n    display: block;\r\n    position: relative;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 100%;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n#fp-nav ul li a.active span,\r\n.fp-slidesNav ul li a.active span,\r\n#fp-nav ul li:hover a.active span,\r\n.fp-slidesNav ul li:hover a.active span{\r\n    height: 12px;\r\n    width: 12px;\r\n    margin: -6px 0 0 -6px;\r\n    border-radius: 100%;\r\n }\r\n#fp-nav ul li a span,\r\n.fp-slidesNav ul li a span {\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    z-index: 1;\r\n    height: 4px;\r\n    width: 4px;\r\n    border: 0;\r\n    background: #333;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin: -2px 0 0 -2px;\r\n    -webkit-transition: all 0.1s ease-in-out;\r\n    -moz-transition: all 0.1s ease-in-out;\r\n    -o-transition: all 0.1s ease-in-out;\r\n    transition: all 0.1s ease-in-out;\r\n}\r\n#fp-nav ul li:hover a span,\r\n.fp-slidesNav ul li:hover a span{\r\n    width: 10px;\r\n    height: 10px;\r\n    margin: -5px 0px 0px -5px;\r\n}\r\n#fp-nav ul li .fp-tooltip {\r\n    position: absolute;\r\n    top: -2px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-family: arial, helvetica, sans-serif;\r\n    white-space: nowrap;\r\n    max-width: 220px;\r\n    overflow: hidden;\r\n    display: block;\r\n    opacity: 0;\r\n    width: 0;\r\n    cursor: pointer;\r\n}\r\n#fp-nav ul li:hover .fp-tooltip,\r\n#fp-nav.fp-show-active a.active + .fp-tooltip {\r\n    -webkit-transition: opacity 0.2s ease-in;\r\n    transition: opacity 0.2s ease-in;\r\n    width: auto;\r\n    opacity: 1;\r\n}\r\n#fp-nav ul li .fp-tooltip.fp-right {\r\n    right: 20px;\r\n}\r\n#fp-nav ul li .fp-tooltip.fp-left {\r\n    left: 20px;\r\n}\r\n.fp-auto-height.fp-section,\r\n.fp-auto-height .fp-slide,\r\n.fp-auto-height .fp-tableCell{\r\n    height: auto !important;\r\n}\r\n\r\n.fp-responsive .fp-auto-height-responsive.fp-section,\r\n.fp-responsive .fp-auto-height-responsive .fp-slide,\r\n.fp-responsive .fp-auto-height-responsive .fp-tableCell {\r\n    height: auto !important;\r\n}\r\n\r\n/*Only display content to screen readers*/\r\n.fp-sr-only{\r\n    position: absolute;\r\n    width: 1px;\r\n    height: 1px;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    clip: rect(0, 0, 0, 0);\r\n    white-space: nowrap;\r\n    border: 0;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  line-height: 1;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\n\nblockquote:before,\nblockquote:after {\n  content: '';\n  content: none;\n}\n\n\nq:before,\nq:after  {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput,\ntextarea,\nbutton {\n  outline: none;\n  color: inherit;\n  font: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\n* {\n  border: none;\n  background: none;\n  text-decoration: none;\n  padding:0;\n  margin:0;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  outline: none;\n}\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nhtml, body {\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  cursor: default;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/FrontEndBasic.png */ "./img/FrontEndBasic.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../img/FrontEndPro.png */ "./img/FrontEndPro.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/IMG_4724.JPG */ "./img/IMG_4724.JPG");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "body {\r\n    font-family: 'Press Start 2P', cursive;\r\n}\r\n\r\n.section {\r\n    padding: 0 15px;\r\n}\r\n\r\n.section:nth-child(2n) {\r\n    background-color: #042E44;\r\n}\r\n\r\n.section:nth-child(2n + 1) {\r\n    background-color: white;\r\n}\r\n\r\nh2 {\r\n    color: #FA6622;\r\n    font-size: 30px;\r\n    margin-bottom: 80px;\r\n    text-align: center;\r\n}\r\n\r\nnav {\r\n    position: fixed;\r\n    top: 30px;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0 auto;\r\n    height: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.navLink {\r\n    color: black;\r\n    margin-right: 5%;\r\n    display: block;\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n    filter: grayscale(100%); \r\n    transition: all .4s;\r\n}\r\n\r\n.openMore {\r\n    font-size: 25px;\r\n}\r\n\r\n.github {\r\n    background: url(https://github.githubassets.com/images/modules/logos_page/Octocat.png) center/contain no-repeat; \r\n}\r\n\r\n.linkedin {\r\n    background: url(https://images.squarespace-cdn.com/content/v1/54bd36abe4b0ff9569953efa/1540973429405-3HY7G3IEYXXVGUI0CDO5/ke17ZwdGBToddI8pDm48kLXCf88_9uNTKXkq27cF4sB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmwbA6upbL5Bu97tJociXJklKprRMdH2Tl4F1PjaoPT3YUs5wkl5ojCV1O900UJ7ME/LinkedIn_logo_initials.png) center/contain no-repeat;\r\n}\r\n\r\n.telegram {\r\n    background: url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png) center/contain no-repeat;\r\n}\r\n\r\n.codewars {\r\n    background: url(https://miro.medium.com/max/1760/1*W-OZsYSFMIJg_M-bPHH0-w.png) center/cover no-repeat;\r\n}\r\n\r\n.contact {\r\n    background: url(https://s1.iconbird.com/ico/2013/12/518/w512h5121386956989Contacts01.png) center/cover no-repeat;\r\n    margin-left: 10%;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.contact:after {\r\n    content: 'my contacts';\r\n    position: absolute;\r\n    left: 60px;\r\n    font-size: 14px;\r\n    opacity: 0;\r\n    transition: all .6s;\r\n}\r\n\r\n.contact:hover:after {\r\n    opacity: 1;\r\n}\r\n\r\n.navLink:hover {\r\n    cursor: pointer;\r\n    filter: none;\r\n}\r\n\r\n.aboutMe {\r\n    padding: 60px;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.text {\r\n    display: block;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.mainText {\r\n    font-size: 25px;\r\n}\r\n\r\n.mySkills {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.skillTitle {\r\n    font-size: 30px;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.skillsItems {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 90%;\r\n}\r\n\r\n.skillItem {\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    /* opacity: 0; */\r\n}\r\n\r\n.skillItem:nth-child(2) {\r\n    margin: 0 160px;\r\n}\r\n\r\n.skillIMG {\r\n    height: 80px;\r\n    width: 80px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.skillIMG.html {\r\n    background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png) center/contain no-repeat;\r\n}\r\n.skillIMG.css {\r\n    background: url(https://hsto.org/webt/et/vg/um/etvgumvdqz6_rs1dp3kjyjt-spm.png) center/contain no-repeat;\r\n}\r\n.skillIMG.javascript{\r\n    background: url(https://partner.biz.ua/images/blogi/206_1480059951_javascript-function-declaration-vs-function-expression.png) center/contain no-repeat;\r\n}\r\n\r\n.itemTitle {\r\n    font-size: 15px;\r\n}\r\n\r\n.skillLevel img {\r\n    height: 20px;\r\n}\r\n\r\n.itemTitle {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.nonActive {\r\n    filter: grayscale(100%); \r\n}\r\n\r\n.technologies {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.technologiesTitle {\r\n    margin-bottom: 80px;\r\n    text-align: center;\r\n}\r\n\r\n.technologiesList {\r\n    text-align: center;\r\n    column-count: 2;\r\n    width: 60%;\r\n}\r\n\r\n.technologiesItem {\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n}\r\n\r\n.technologiesItem:before {\r\n    content: \"\";\r\n    display: block;\r\n    height: 8px;\r\n    width: 8px;\r\n    background-color: #FA6622;\r\n    position: absolute;\r\n    left: 15%;\r\n    top: calc(50% - 4px);\r\n}\r\n\r\n.coverText {\r\n    font-size: 20px;\r\n    margin-top: 80px;\r\n    text-align: center;\r\n}\r\n\r\ndiv.fp-tooltip.fp-right {\r\n    color: #FA6622;\r\n}\r\n\r\n.certificate {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\nh2.certificatesTitle {\r\n    margin-bottom: 80px;\r\n}\r\n\r\n.certificatesItems {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    width: 90%;\r\n}\r\n\r\n.certificateItem {\r\n    display: block;\r\n    height: 350px;\r\n    width: 500px;\r\n    transition: all .4s;\r\n}\r\n\r\n.certificateItem:first-child {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.certificateItem:hover {\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n.hillelBasic {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center/contain no-repeat;\r\n}\r\n\r\n.hillelAdvanced {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center/contain no-repeat;\r\n}\r\n\r\n.contacts {\r\n    height: 100vh;\r\n    background-color: white;\r\n}\r\n\r\ndiv.fp-slidesNav {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ndiv.fp-slidesNav a.active span {\r\n    background-color: #FA6622;\r\n}\r\n\r\n.fp-controlArrow {\r\n    margin: 0 100px;\r\n}\r\n\r\n.popupBackground {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, .7);\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 999;\r\n}\r\n\r\n.popupBackground:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.showPopup {\r\n    display: flex;\r\n    opacity: 0;\r\n}\r\n\r\n.popupContact {\r\n    width: 800px;\r\n    margin: 0 auto;\r\n    padding: 40px 30px;\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    cursor: default;\r\n}\r\n\r\n.photo {\r\n    height: 300px;\r\n    width: 300px;\r\n    background-color: lightgrey;\r\n    margin-bottom: 30px;\r\n    background-color: #FA6622;\r\n    position: relative;\r\n}\r\n\r\n.photo:after {\r\n    content: \"\";\r\n    height: 300px;\r\n    width: 300px;\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 10px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 100%/cover no-repeat;\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.profileItem {\r\n    margin-bottom: 20px;\r\n} \r\n\r\n.profileTitle {\r\n    font-weight: 900;\r\n    color: #FA6622;\r\n}\r\n\r\n@media (max-width: 1300px) {\r\n    .technologiesItem:before {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 1145px) {\r\n    .certificateItem {\r\n        height: 300px;\r\n        width: 430px;\r\n    }\r\n}\r\n\r\n@media (max-width: 985px) {\r\n\r\n    .certificate h2 {\r\n        margin-bottom: 40px;\r\n    }\r\n    .certificateItem {\r\n        height: 210px;\r\n        width: 300px;\r\n    }\r\n\r\n    .certificateItem.hillelAdvanced {\r\n        margin-bottom: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 940px) {\r\n\r\n    .skillItem:nth-child(2) {\r\n        margin: 10px 0;\r\n    }\r\n\r\n    .mySkills h2 {\r\n        margin-bottom: 40px;\r\n    }\r\n\r\n    .skillIMG {\r\n        height: 70px;\r\n        width: 70px;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .itemTitle {\r\n        font-size: 12px;\r\n    }\r\n\r\n    .skillLevel {\r\n        font-size: 5px;\r\n    }\r\n}\r\n\r\n@media (max-width: 940px) {\r\n    .technologiesList {\r\n        column-count: 1;\r\n        font-size: 15px;\r\n    }\r\n}\r\n\r\n@media (max-width: 589px) {\r\n    .mainText {\r\n        font-size: 20px;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .skillsItems {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .navLink {\r\n        height: 20px;\r\n        width: 20px;\r\n    }\r\n\r\n    .skillItem:nth-child(2) {\r\n        margin: 20px 0;\r\n    }\r\n\r\n    .skillLevel {\r\n        font-size: 2px;\r\n    }\r\n\r\n    .technologies h2 {\r\n        margin-bottom: 40px;\r\n    }\r\n\r\n    .technologiesList {\r\n        font-size: 15px;\r\n    }\r\n\r\n    .coverText {\r\n        font-size: 17px;\r\n        margin-top: 60px;\r\n    }\r\n}\r\n\r\n\r\n\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/fullpage.js/dist/fullpage.css":
/*!****************************************************!*\
  !*** ./node_modules/fullpage.js/dist/fullpage.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./fullpage.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/fullpage.js/dist/fullpage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/fullpage.js/dist/fullpage.js":
/*!***************************************************!*\
  !*** ./node_modules/fullpage.js/dist/fullpage.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.0.8
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
(function( root, window, document, factory, undefined) {
    if( true ) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            root.fullpage = factory(window, document);
            return root.fullpage;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, window, document, function(window, document){
    'use strict';

    // keeping central set of classnames and selectors
    var WRAPPER =               'fullpage-wrapper';
    var WRAPPER_SEL =           '.' + WRAPPER;

    // slimscroll
    var SCROLLABLE =            'fp-scrollable';
    var SCROLLABLE_SEL =        '.' + SCROLLABLE;

    // util
    var RESPONSIVE =            'fp-responsive';
    var NO_TRANSITION =         'fp-notransition';
    var DESTROYED =             'fp-destroyed';
    var ENABLED =               'fp-enabled';
    var VIEWING_PREFIX =        'fp-viewing';
    var ACTIVE =                'active';
    var ACTIVE_SEL =            '.' + ACTIVE;
    var COMPLETELY =            'fp-completely';
    var COMPLETELY_SEL =        '.' + COMPLETELY;

    // section
    var SECTION_DEFAULT_SEL =   '.section';
    var SECTION =               'fp-section';
    var SECTION_SEL =           '.' + SECTION;
    var SECTION_ACTIVE_SEL =    SECTION_SEL + ACTIVE_SEL;
    var TABLE_CELL =            'fp-tableCell';
    var TABLE_CELL_SEL =        '.' + TABLE_CELL;
    var AUTO_HEIGHT =           'fp-auto-height';
    var AUTO_HEIGHT_SEL =       '.' + AUTO_HEIGHT;
    var AUTO_HEIGHT_RESPONSIVE = 'fp-auto-height-responsive';
    var AUTO_HEIGHT_RESPONSIVE_SEL = '.' + AUTO_HEIGHT_RESPONSIVE;
    var NORMAL_SCROLL =         'fp-normal-scroll';
    var NORMAL_SCROLL_SEL =     '.' + NORMAL_SCROLL;

    // section nav
    var SECTION_NAV =           'fp-nav';
    var SECTION_NAV_SEL =       '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP =   'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL='.'+SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP =   'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL =     '.slide';
    var SLIDE =                 'fp-slide';
    var SLIDE_SEL =             '.' + SLIDE;
    var SLIDE_ACTIVE_SEL =      SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER =        'fp-slides';
    var SLIDES_WRAPPER_SEL =    '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER =      'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL =  '.' + SLIDES_CONTAINER;
    var TABLE =                 'fp-table';

    // slide nav
    var SLIDES_NAV =            'fp-slidesNav';
    var SLIDES_NAV_SEL =        '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL =   SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW =          'fp-controlArrow';
    var SLIDES_ARROW_SEL =      '.' + SLIDES_ARROW;
    var SLIDES_PREV =           'fp-prev';
    var SLIDES_PREV_SEL =       '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV =     SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT =           'fp-next';
    var SLIDES_NEXT_SEL =       '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT =     SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    function initialise(containerSelector, options) {
        var isOK = options && new RegExp('([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$').test(options['li'+'cen'+'seK' + 'e' + 'y']) || document.domain.indexOf('al'+'varotri' +'go' + '.' + 'com') > -1;

        // cache common elements
        var $htmlBody = $('html, body');
        var $html = $('html')[0];
        var $body = $('body')[0];

        //only once my friend!
        if(hasClass($html, ENABLED)){ displayWarnings(); return; }

        var FP = {};

        // Creating some defaults, extending them with any options that were provided
        options = deepExtend({
            //navigation
            menu: false,
            anchors:[],
            lockAnchors: false,
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            hybrid: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowHandler: window.fp_scrolloverflow ? window.fp_scrolloverflow.iscrollHandler : null,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            touchWrapper: typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            sectionsColor : [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0, //backwards compabitility with responsiveWiddth
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {
                type: 'reveal',
                percentage: 62,
                property: 'translate'
            },
            cards: false,
            cardsOptions: {
                perspective: 100,
                fadeContent: true,
                fadeBackground: true
            },

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,

            //events
            v2compatible: false,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,

            lazyLoading: true
        }, options);

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));
        var container = typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector;
        var windowsHeight = getWindowHeight();
        var windowsWidth = getWindowWidth();
        var isResizing = false;
        var isWindowFocused = true;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var controlPressed;
        var startingSection;
        var isScrollAllowed = {};
        isScrollAllowed.m = {  'up':true, 'down':true, 'left':true, 'right':true };
        isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
        var MSPointer = getMSPointer();
        var events = {
            touchmove: 'ontouchmove' in window ? 'touchmove' :  MSPointer.move,
            touchstart: 'ontouchstart' in window ? 'touchstart' :  MSPointer.down
        };
        var scrollBarHandler;

        // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js
        var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

        //cheks for passive event support
        var g_supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function() {
              g_supportsPassive = true;
            }
          });
          window.addEventListener("testPassive", null, opts);
          window.removeEventListener("testPassive", null, opts);
        } catch (e) {}

        //timeouts
        var resizeId;
        var resizeHandlerId;
        var afterSectionLoadsId;
        var afterSlideLoadsId;
        var scrollId;
        var scrollId2;
        var keydownId;
        var g_doubleCheckHeightId;
        var originals = deepExtend({}, options); //deep copy
        var activeAnimation;
        var g_initialAnchorsInDom = false;
        var g_canFireMouseEnterNormalScroll = true;
        var g_mediaLoadedId;
        var extensions = [
            'parallax',
            'scrollOverflowReset',
            'dragAndMove',
            'offsetSections',
            'fadingEffect',
            'responsiveSlides',
            'continuousHorizontal',
            'interlockedSlides',
            'scrollHorizontally',
            'resetSliders',
            'cards'
        ];

        displayWarnings();

        //easeInOutCubic animation included in the plugin
        window.fp_easings = deepExtend(window.fp_easings, {
            easeInOutCubic: function (t, b, c, d) {
                if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;
            }
        });

        /**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */
        function setAutoScrolling(value, type){
            //removing the transformation
            if(!value){
                silentScroll(0);
            }

            setVariableState('autoScrolling', value, type);

            var element = $(SECTION_ACTIVE_SEL)[0];

            if(options.autoScrolling && !options.scrollBar){
                css($htmlBody, {
                    'overflow': 'hidden',
                    'height': '100%'
                });

                setRecordHistory(originals.recordHistory, 'internal');

                //for IE touch devices
                css(container, {
                    '-ms-touch-action': 'none',
                    'touch-action': 'none'
                });

                if(element != null){
                    //moving the container up
                    silentScroll(element.offsetTop);
                }
            }else{
                css($htmlBody, {
                    'overflow' : 'visible',
                    'height' : 'initial'
                });

                var recordHistory = !options.autoScrolling ? false : originals.recordHistory;
                setRecordHistory(recordHistory, 'internal');

                //for IE touch devices
                css(container, {
                    '-ms-touch-action': '',
                    'touch-action': ''
                });

                //scrolling the page to the section with no animation
                if (element != null) {
                    var scrollSettings = getScrollSettings(element.offsetTop);
                    scrollSettings.element.scrollTo(0, scrollSettings.options);
                }
            }
        }

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        function setRecordHistory(value, type){
            setVariableState('recordHistory', value, type);
        }

        /**
        * Defines the scrolling speed
        */
        function setScrollingSpeed(value, type){
            setVariableState('scrollingSpeed', value, type);
        }

        /**
        * Sets fitToSection
        */
        function setFitToSection(value, type){
            setVariableState('fitToSection', value, type);
        }

        /**
        * Sets lockAnchors
        */
        function setLockAnchors(value){
            options.lockAnchors = value;
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
        */
        function setMouseWheelScrolling(value){
            if(value){
                addMouseWheelHandler();
                addMiddleWheelHandler();
            }else{
                removeMouseWheelHandler();
                removeMiddleWheelHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        function setAllowScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                directions.forEach(function (direction){
                    setIsScrollAllowed(value, direction, 'm');
                });
            }
            else{
                setIsScrollAllowed(value, 'all', 'm');
            }
        }

        /**
        * Adds or remove the mouse wheel hijacking
        */
        function setMouseHijack(value){
            if(value){
                setMouseWheelScrolling(true);
                addTouchHandler();
            }else{
                setMouseWheelScrolling(false);
                removeTouchHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
        */
        function setKeyboardScrolling(value, directions){
            if(typeof directions !== 'undefined'){
                directions = directions.replace(/ /g,'').split(',');

                directions.forEach(function(direction){
                    setIsScrollAllowed(value, direction, 'k');
                });
            }else{
                setIsScrollAllowed(value, 'all', 'k');
                options.keyboardScrolling = value;
            }
        }

        /**
        * Moves the page up one section.
        */
        function moveSectionUp(){
            var prev = prevUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);

            //looping to the bottom if there's no more sections above
            if (!prev && (options.loopTop || options.continuousVertical)) {
                prev = last($(SECTION_SEL));
            }

            if (prev != null) {
                scrollPage(prev, null, true);
            }
        }

        /**
        * Moves the page down one section.
        */
        function moveSectionDown(){
            var next = nextUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);

            //looping to the top if there's no more sections below
            if(!next &&
                (options.loopBottom || options.continuousVertical)){
                next = $(SECTION_SEL)[0];
            }

            if(next != null){
                scrollPage(next, null, false);
            }
        }

        /**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */
        function silentMoveTo(sectionAnchor, slideAnchor){
            setScrollingSpeed (0, 'internal');
            moveTo(sectionAnchor, slideAnchor);
            setScrollingSpeed (originals.scrollingSpeed, 'internal');
        }

        /**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */
        function moveTo(sectionAnchor, slideAnchor){
            var destiny = getSectionByAnchor(sectionAnchor);

            if (typeof slideAnchor !== 'undefined'){
                scrollPageAndSlide(sectionAnchor, slideAnchor);
            }else if(destiny != null){
                scrollPage(destiny);
            }
        }

        /**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideRight(section){
            moveSlide('right', section);
        }

        /**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideLeft(section){
            moveSlide('left', section);
        }

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        function reBuild(resizing){
            if(hasClass(container, DESTROYED)){ return; }  //nothing to do if the plugin was destroyed

            isResizing = true;

            //updating global vars
            windowsHeight = getWindowHeight();
            windowsWidth = getWindowWidth();

            var sections = $(SECTION_SEL);
            for (var i = 0; i < sections.length; ++i) {
                var section = sections[i];
                var slidesWrap = $(SLIDES_WRAPPER_SEL, section)[0];
                var slides = $(SLIDE_SEL, section);

                //adjusting the height of the table-cell for IE and Firefox
                if(options.verticalCentered){
                    css($(TABLE_CELL_SEL, section), {'height': getTableHeight(section) + 'px'});
                }

                css(section, {'height': windowsHeight + 'px'});

                //adjusting the position fo the FULL WIDTH slides...
                if (slides.length > 1) {
                    landscapeScroll(slidesWrap, $(SLIDE_ACTIVE_SEL, slidesWrap)[0]);
                }
            }

            if(options.scrollOverflow){
                scrollBarHandler.createScrollBarForAll();
            }

            var activeSection = $(SECTION_ACTIVE_SEL)[0];
            var sectionIndex = index(activeSection, SECTION_SEL);

            //isn't it the first section?
            if(sectionIndex){
                //adjusting the position for the current section
                silentMoveTo(sectionIndex + 1);
            }

            isResizing = false;
            if(isFunction( options.afterResize ) && resizing){
                options.afterResize.call(container, window.innerWidth, window.innerHeight);
            }
            if(isFunction( options.afterReBuild ) && !resizing){
                options.afterReBuild.call(container);
            }
        }

        /**
        * Determines whether fullpage.js is in responsive mode or not.
        */
        function isResponsiveMode(){
           return hasClass($body, RESPONSIVE);
        }

        /**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */
        function setResponsive(active){
            var isResponsive = isResponsiveMode();

            if(active){
                if(!isResponsive){
                    setAutoScrolling(false, 'internal');
                    setFitToSection(false, 'internal');
                    hide($(SECTION_NAV_SEL));
                    addClass($body, RESPONSIVE);
                    if(isFunction( options.afterResponsive )){
                        options.afterResponsive.call( container, active);
                    }

                    //when on page load, we will remove scrolloverflow if necessary
                    if(options.scrollOverflow){
                        scrollBarHandler.createScrollBarForAll();
                    }
                }
            }
            else if(isResponsive){
                setAutoScrolling(originals.autoScrolling, 'internal');
                setFitToSection(originals.autoScrolling, 'internal');
                show($(SECTION_NAV_SEL));
                removeClass($body, RESPONSIVE);
                if(isFunction( options.afterResponsive )){
                    options.afterResponsive.call( container, active);
                }
            }
        }

        if(container){
            //public functions
            FP.version = '3.0.8';
            FP.setAutoScrolling = setAutoScrolling;
            FP.setRecordHistory = setRecordHistory;
            FP.setScrollingSpeed = setScrollingSpeed;
            FP.setFitToSection = setFitToSection;
            FP.setLockAnchors = setLockAnchors;
            FP.setMouseWheelScrolling = setMouseWheelScrolling;
            FP.setAllowScrolling = setAllowScrolling;
            FP.setKeyboardScrolling = setKeyboardScrolling;
            FP.moveSectionUp = moveSectionUp;
            FP.moveSectionDown = moveSectionDown;
            FP.silentMoveTo = silentMoveTo;
            FP.moveTo = moveTo;
            FP.moveSlideRight = moveSlideRight;
            FP.moveSlideLeft = moveSlideLeft;
            FP.fitToSection = fitToSection;
            FP.reBuild = reBuild;
            FP.setResponsive = setResponsive;
            FP.getFullpageData = function(){ return options; };
            FP.destroy = destroy;
            FP.getActiveSection = getActiveSection;
            FP.getActiveSlide = getActiveSlide;

            FP.test = {
                top: '0px',
                translate3d: 'translate3d(0px, 0px, 0px)',
                translate3dH: (function(){
                    var a = [];
                    for(var i = 0; i < $(options.sectionSelector, container).length; i++){
                        a.push('translate3d(0px, 0px, 0px)');
                    }
                    return a;
                })(),
                left: (function(){
                    var a = [];
                    for(var i = 0; i < $(options.sectionSelector, container).length; i++){
                        a.push(0);
                    }
                    return a;
                })(),
                options: options,
                setAutoScrolling: setAutoScrolling
            };

            //functions we want to share across files but which are not
            //mean to be used on their own by developers
            FP.shared = {
                afterRenderActions: afterRenderActions,
                isNormalScrollElement: false
            };

            window.fullpage_api = FP;

            //using jQuery initialization? Creating the $.fn.fullpage object
            if(options.$){
                Object.keys(FP).forEach(function (key) {    
                    options.$.fn.fullpage[key] = FP[key];   
                });
            }

            init();

            bindEvents();
        }

        function init(){
            //if css3 is not supported, it will use jQuery animations
            if(options.css3){
                options.css3 = support3d();
            }

            options.scrollBar = options.scrollBar || options.hybrid;

            setOptionsFromDOM();
            prepareDom();
            setAllowScrolling(true);
            setMouseHijack(true);
            setAutoScrolling(options.autoScrolling, 'internal');
            responsive();

            //setting the class for the body element
            setBodyClass();

            if(document.readyState === 'complete'){
                scrollToAnchor();
            }
            window.addEventListener('load', scrollToAnchor);

            //if we use scrollOverflow we'll fire afterRender in the scrolloverflow file
            if(!options.scrollOverflow){
                afterRenderActions();
            }

            doubleCheckHeight();
        }

        function bindEvents(){

            //when scrolling...
            window.addEventListener('scroll', scrollHandler);

            //detecting any change on the URL to scroll to the given anchor link
            //(a way to detect back history button as we play with the hashes on the URL)
            window.addEventListener('hashchange', hashChangeHandler);

            //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
            window.addEventListener('blur', blurHandler);

            //when resizing the site, we adjust the heights of the sections, slimScroll...
            window.addEventListener('resize', resizeHandler);

            //Sliding with arrow keys, both, vertical and horizontal
            document.addEventListener('keydown', keydownHandler);

            //to prevent scrolling while zooming
            document.addEventListener('keyup', keyUpHandler);

            //Scrolls to the section when clicking the navigation bullet
            //simulating the jQuery .on('click') event using delegation
            ['click', 'touchstart'].forEach(function(eventName){
                document.addEventListener(eventName, delegatedEvents);
            });

            /**
            * Applying normalScroll elements.
            * Ignoring the scrolls over the specified selectors.
            */
            if(options.normalScrollElements){
                ['mouseenter', 'touchstart'].forEach(function(eventName){
                    forMouseLeaveOrTouch(eventName, false);
                });

                ['mouseleave', 'touchend'].forEach(function(eventName){
                   forMouseLeaveOrTouch(eventName, true);
                });
            }
        }

        function delegatedEvents(e){
            var target = e.target;

            if(target && closest(target, SECTION_NAV_SEL + ' a')){
                sectionBulletHandler.call(target, e);
            }
            else if(matches(target, SECTION_NAV_TOOLTIP_SEL)){
                tooltipTextHandler.call(target);
            }
            else if(matches(target, SLIDES_ARROW_SEL)){
                slideArrowHandler.call(target, e);
            }
            else if(matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null){
                slideBulletHandler.call(target, e);
            }
            else if(closest(target, options.menu + ' [data-menuanchor]')){
                menuItemsHandler.call(target, e);
            }
        }

        function forMouseLeaveOrTouch(eventName, allowScrolling){
            //a way to pass arguments to the onMouseEnterOrLeave function
            document['fp_' + eventName] = allowScrolling;
            document.addEventListener(eventName, onMouseEnterOrLeave, true); //capturing phase
        }

        function onMouseEnterOrLeave(e) {
            var type = e.type;
            var isInsideOneNormalScroll = false;
            var isUsingScrollOverflow = options.scrollOverflow;

            //onMouseLeave will use the destination target, not the one we are moving away from
            var target = type === 'mouseleave' ? e.toElement || e.relatedTarget : e.target;

            //coming from closing a normalScrollElements modal or moving outside viewport?
            if(target == document || !target){
                setMouseHijack(true);

                if(isUsingScrollOverflow){
                    options.scrollOverflowHandler.setIscroll(target, true);
                }
                return;
            }

            if(type === 'touchend'){
                g_canFireMouseEnterNormalScroll = false;
                setTimeout(function(){
                    g_canFireMouseEnterNormalScroll = true;
                }, 800);
            }

            //preventing mouseenter event to do anything when coming from a touchEnd event
            //fixing issue #3576
            if(type === 'mouseenter' && !g_canFireMouseEnterNormalScroll){
                return;
            }

            var normalSelectors = options.normalScrollElements.split(',');

            normalSelectors.forEach(function(normalSelector){
                if(!isInsideOneNormalScroll){
                    var isNormalScrollTarget = matches(target, normalSelector);

                    //leaving a child inside the normalScoll element is not leaving the normalScroll #3661
                    var isNormalScrollChildFocused = closest(target, normalSelector);

                    if(isNormalScrollTarget || isNormalScrollChildFocused){
                        if(!FP.shared.isNormalScrollElement){
                            setMouseHijack(false);

                            if(isUsingScrollOverflow){
                                options.scrollOverflowHandler.setIscroll(target, false);
                            }
                        }
                        FP.shared.isNormalScrollElement = true;
                        isInsideOneNormalScroll = true;
                    }
                }
            });

            //not inside a single normal scroll element anymore?
            if(!isInsideOneNormalScroll && FP.shared.isNormalScrollElement){
                setMouseHijack(true);
                
                if(isUsingScrollOverflow){
                    options.scrollOverflowHandler.setIscroll(target, true);
                }

                FP.shared.isNormalScrollElement = false;
            }
        }

        /**
        * Checks the viewport a few times on a define interval of time to 
        * see if it has changed in any of those. If that's the case, it resizes.
        */
        function doubleCheckHeight(){
            for(var i = 1; i < 4; i++){
                g_doubleCheckHeightId = setTimeout(adjustToNewViewport, 350 * i);
            }
        }

        /**
        * Adjusts a section to the viewport if it has changed.
        */
        function adjustToNewViewport(){
            var newWindowHeight = getWindowHeight();
            var newWindowWidth = getWindowWidth();

            if(windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth){
                windowsHeight = newWindowHeight;
                windowsWidth = newWindowWidth;
                reBuild(true);
            }
        }

        /**
        * Setting options from DOM elements if they are not provided.
        */
        function setOptionsFromDOM(){

            //no anchors option? Checking for them in the DOM attributes
            if(!options.anchors.length){
                var anchorsAttribute = '[data-anchor]';
                var anchors = $(options.sectionSelector.split(',').join(anchorsAttribute + ',') + anchorsAttribute, container);
                if(anchors.length){
                    g_initialAnchorsInDom = true;
                    anchors.forEach(function(item){
                        options.anchors.push(item.getAttribute('data-anchor').toString());
                    });
                }
            }

            //no tooltips option? Checking for them in the DOM attributes
            if(!options.navigationTooltips.length){
                var tooltipsAttribute = '[data-tooltip]';
                var tooltips = $(options.sectionSelector.split(',').join(tooltipsAttribute + ',') + tooltipsAttribute, container);
                if(tooltips.length){
                    tooltips.forEach(function(item){
                        options.navigationTooltips.push(item.getAttribute('data-tooltip').toString());
                    });
                }
            }
        }

        /**
        * Works over the DOM structure to set it up for the current fullpage options.
        */
        function prepareDom(){
            css(container, {
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            addClass(container, WRAPPER);
            addClass($html, ENABLED);

            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
            windowsHeight = getWindowHeight();

            removeClass(container, DESTROYED); //in case it was destroyed before initializing it again

            addInternalSelectors();

            var sections = $(SECTION_SEL);

            //styling the sections / slides / menu
            for(var i = 0; i<sections.length; i++){
                var sectionIndex = i;
                var section = sections[i];
                var slides = $(SLIDE_SEL, section);
                var numSlides = slides.length;

                //caching the original styles to add them back on destroy('all')
                section.setAttribute('data-fp-styles', section.getAttribute('style'));

                styleSection(section, sectionIndex);
                styleMenu(section, sectionIndex);

                // if there's any slide
                if (numSlides > 0) {
                    styleSlides(section, slides, numSlides);
                }else{
                    if(options.verticalCentered){
                        addTableClass(section);
                    }
                }
            }

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if(options.fixedElements && options.css3){
                $(options.fixedElements).forEach(function(item){
                    $body.appendChild(item);
                });
            }

            //vertical centered of the navigation + active bullet
            if(options.navigation){
                addVerticalNavigation();
            }

            enableYoutubeAPI();

            if(options.scrollOverflow){
                scrollBarHandler = options.scrollOverflowHandler.init(options);
            }
        }

        /**
        * Styles the horizontal slides for a section.
        */
        function styleSlides(section, slides, numSlides){
            var sliderWidth = numSlides * 100;
            var slideWidth = 100 / numSlides;

            var slidesWrapper = document.createElement('div');
            slidesWrapper.className = SLIDES_WRAPPER; //fp-slides
            wrapAll(slides, slidesWrapper);

            var slidesContainer = document.createElement('div');
            slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer
            wrapAll(slides, slidesContainer);

            css($(SLIDES_CONTAINER_SEL, section), {'width': sliderWidth + '%'});

            if(numSlides > 1){
                if(options.controlArrows){
                    createSlideArrows(section);
                }

                if(options.slidesNavigation){
                    addSlidesNavigation(section, numSlides);
                }
            }

            slides.forEach(function(slide) {
                css(slide, {'width': slideWidth + '%'});

                if(options.verticalCentered){
                    addTableClass(slide);
                }
            });

            var startingSlide = $(SLIDE_ACTIVE_SEL, section)[0];

            //if the slide won't be an starting point, the default will be the first one
            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if( startingSlide != null && (index($(SECTION_ACTIVE_SEL), SECTION_SEL) !== 0 || (index($(SECTION_ACTIVE_SEL), SECTION_SEL) === 0 && index(startingSlide) !== 0))){
                silentLandscapeScroll(startingSlide, 'internal');
            }else{
                addClass(slides[0], ACTIVE);
            }
        }

        /**
        * Styling vertical sections
        */
        function styleSection(section, index){
            //if no active section is defined, the 1st one will be the default one
            if(!index && $(SECTION_ACTIVE_SEL)[0] == null) {
                addClass(section, ACTIVE);
            }
            startingSection = $(SECTION_ACTIVE_SEL)[0];

            css(section, {'height': windowsHeight + 'px'});

            if(options.paddingTop){
                css(section, {'padding-top': options.paddingTop});
            }

            if(options.paddingBottom){
                css(section, {'padding-bottom': options.paddingBottom});
            }

            if (typeof options.sectionsColor[index] !==  'undefined') {
                css(section, {'background-color': options.sectionsColor[index]});
            }

            if (typeof options.anchors[index] !== 'undefined') {
                section.setAttribute('data-anchor', options.anchors[index]);
            }
        }

        /**
        * Sets the data-anchor attributes to the menu elements and activates the current one.
        */
        function styleMenu(section, index){
            if (typeof options.anchors[index] !== 'undefined') {
                //activating the menu / nav element on load
                if(hasClass(section, ACTIVE)){
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
            if(options.menu && options.css3 && closest($(options.menu)[0], WRAPPER_SEL) != null){
                $(options.menu).forEach(function(menu) {
                    $body.appendChild(menu);
                });
            }
        }

        /**
        * Adds internal classes to be able to provide customizable selectors
        * keeping the link with the style sheet.
        */
        function addInternalSelectors(){
            addClass($(options.sectionSelector, container), SECTION);
            addClass($(options.slideSelector, container), SLIDE);
        }

        /**
        * Creates the control arrows for the given section
        */
        function createSlideArrows(section){
            var arrows = [createElementFromHTML('<div class="' + SLIDES_ARROW_PREV + '"></div>'), createElementFromHTML('<div class="' + SLIDES_ARROW_NEXT + '"></div>')];
            after($(SLIDES_WRAPPER_SEL, section)[0], arrows);

            if(options.controlArrowColor !== '#fff'){
                css($(SLIDES_ARROW_NEXT_SEL, section), {'border-color': 'transparent transparent transparent '+options.controlArrowColor});
                css($(SLIDES_ARROW_PREV_SEL, section), {'border-color': 'transparent '+ options.controlArrowColor + ' transparent transparent'});
            }

            if(!options.loopHorizontal){
                hide($(SLIDES_ARROW_PREV_SEL, section));
            }
        }

        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation(){
            var navigation = document.createElement('div');
            navigation.setAttribute('id', SECTION_NAV);

            var divUl = document.createElement('ul');
            navigation.appendChild(divUl);

            appendTo(navigation, $body);
            var nav = $(SECTION_NAV_SEL)[0];

            addClass(nav, 'fp-' + options.navigationPosition);

            if(options.showActiveTooltip){
                addClass(nav, SHOW_ACTIVE_TOOLTIP);
            }

            var li = '';

            for (var i = 0; i < $(SECTION_SEL).length; i++) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[i];
                }

                li += '<li><a href="#' + link + '"><span class="fp-sr-only">' + getBulletLinkName(i, 'Section') + '</span><span></span></a>';

                // Only add tooltip if needed (defined by user)
                var tooltip = options.navigationTooltips[i];

                if (typeof tooltip !== 'undefined' && tooltip !== '') {
                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' fp-' + options.navigationPosition + '">' + tooltip + '</div>';
                }

                li += '</li>';
            }
            $('ul', nav)[0].innerHTML = li;

            //centering it vertically
            css($(SECTION_NAV_SEL), {'margin-top': '-' + ($(SECTION_NAV_SEL)[0].offsetHeight/2) + 'px'});

            //activating the current active section

            var bullet = $('li', $(SECTION_NAV_SEL)[0])[index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL)];
            addClass($('a', bullet), ACTIVE);
        }

        /**
        * Gets the name for screen readers for a section/slide navigation bullet.
        */
        function getBulletLinkName(i, defaultName){
            return options.navigationTooltips[i]
                || options.anchors[i]
                || defaultName + ' ' + (i+1);
        }

        /*
        * Enables the Youtube videos API so we can control their flow if necessary.
        */
        function enableYoutubeAPI(){
            $('iframe[src*="youtube.com/embed/"]', container).forEach(function(item){
                addURLParam(item, 'enablejsapi=1');
            });
        }

        /**
        * Adds a new parameter and its value to the `src` of a given element
        */
        function addURLParam(element, newParam){
            var originalSrc = element.getAttribute('src');
            element.setAttribute('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
        }

        /*
        * Returns the prefix sign to use for a new parameter in an existen URL.
        *
        * @return {String}  ? | &
        */
        function getUrlParamSign(url){
            return ( !/\?/.test( url ) ) ? '?' : '&';
        }

        /**
        * Actions and callbacks to fire afterRender
        */
        function afterRenderActions(){
            var section = $(SECTION_ACTIVE_SEL)[0];

            addClass(section, COMPLETELY);

            lazyLoad(section);
            lazyLoadOthers();
            playMedia(section);

            if(options.scrollOverflow){
                options.scrollOverflowHandler.afterLoad();
            }

            if(isDestinyTheStartingSection() && isFunction(options.afterLoad) ){
                fireCallback('afterLoad', {
                    activeSection: section,
                    element: section,
                    direction: null,

                    //for backwards compatibility callback (to be removed in a future!)
                    anchorLink: section.getAttribute('data-anchor'),
                    sectionIndex: index(section, SECTION_SEL)
                });
            }

            if(isFunction(options.afterRender)){
                fireCallback('afterRender');
            }
        }

        /**
        * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
        */
        function isDestinyTheStartingSection(){
            var anchor = getAnchorsURL();
            var destinationSection = getSectionByAnchor(anchor.section);
            return !anchor.section || !destinationSection || typeof destinationSection !=='undefined' && index(destinationSection) === index(startingSection);
        }

        var isScrolling = false;
        var lastScroll = 0;

        //when scrolling...
        function scrollHandler(){
            var currentSection;

            if(!options.autoScrolling || options.scrollBar){
                var currentScroll = getScrollTop();
                var scrollDirection = getScrollDirection(currentScroll);
                var visibleSectionIndex = 0;
                var screen_mid = currentScroll + (getWindowHeight() / 2.0);
                var isAtBottom = $body.offsetHeight - getWindowHeight() === currentScroll;
                var sections =  $(SECTION_SEL);

                //when using `auto-height` for a small last section it won't be centered in the viewport
                if(isAtBottom){
                    visibleSectionIndex = sections.length - 1;
                }
                //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
                else if(!currentScroll){
                    visibleSectionIndex = 0;
                }

                //taking the section which is showing more content in the viewport
                else{
                    for (var i = 0; i < sections.length; ++i) {
                        var section = sections[i];

                        // Pick the the last section which passes the middle line of the screen.
                        if (section.offsetTop <= screen_mid)
                        {
                            visibleSectionIndex = i;
                        }
                    }
                }

                if(isCompletelyInViewPort(scrollDirection)){
                    if(!hasClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY)){
                        addClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY);
                        removeClass(siblings($(SECTION_ACTIVE_SEL)[0]), COMPLETELY);
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = sections[visibleSectionIndex];

                //setting the visible section as active when manually scrolling
                //executing only once the first time we reach the section
                if(!hasClass(currentSection, ACTIVE)){
                    isScrolling = true;
                    var leavingSection = $(SECTION_ACTIVE_SEL)[0];
                    var leavingSectionIndex = index(leavingSection, SECTION_SEL) + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink  = currentSection.getAttribute('data-anchor');
                    var sectionIndex = index(currentSection, SECTION_SEL) + 1;
                    var activeSlide = $(SLIDE_ACTIVE_SEL, currentSection)[0];
                    var slideIndex;
                    var slideAnchorLink;
                    var callbacksParams = {
                        activeSection: leavingSection,
                        sectionIndex: sectionIndex -1,
                        anchorLink: anchorLink,
                        element: currentSection,
                        leavingSection: leavingSectionIndex,
                        direction: yMovement
                    };

                    if(activeSlide){
                        slideAnchorLink = activeSlide.getAttribute('data-anchor');
                        slideIndex = index(activeSlide);
                    }

                    if(canScroll){
                        addClass(currentSection, ACTIVE);
                        removeClass(siblings(currentSection), ACTIVE);

                        if(isFunction( options.onLeave )){
                            fireCallback('onLeave', callbacksParams);
                        }
                        if(isFunction( options.afterLoad )){
                            fireCallback('afterLoad', callbacksParams);
                        }

                        stopMedia(leavingSection);
                        lazyLoad(currentSection);
                        playMedia(currentSection);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if(options.anchors.length){
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;
                        }
                        setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function(){
                        isScrolling = false;
                    }, 100);
                }

                if(options.fitToSection){
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                    scrollId2 = setTimeout(function(){
                        //checking it again in case it changed during the delay
                        if(options.fitToSection &&

                            //is the destination element bigger than the viewport?
                            $(SECTION_ACTIVE_SEL)[0].offsetHeight <= windowsHeight
                        ){
                            fitToSection();
                        }
                    }, options.fitToSectionDelay);
                }
            }
        }

        /**
        * Fits the site to the nearest active section
        */
        function fitToSection(){
            //checking fitToSection again in case it was set to false before the timeout delay
            if(canScroll){
                //allows to scroll to an active section and
                //if the section is already active, we prevent firing callbacks
                isResizing = true;

                scrollPage($(SECTION_ACTIVE_SEL)[0]);
                isResizing = false;
            }
        }

        /**
        * Determines whether the active section has seen in its whole or not.
        */
        function isCompletelyInViewPort(movement){
            var top = $(SECTION_ACTIVE_SEL)[0].offsetTop;
            var bottom = top + getWindowHeight();

            if(movement == 'up'){
                return bottom >= (getScrollTop() + getWindowHeight());
            }
            return top <= getScrollTop();
        }

        /**
        * Determines whether a section is in the viewport or not.
        */
        function isSectionInViewport (el) {
            var rect = el.getBoundingClientRect();
            var top = rect.top;
            var bottom = rect.bottom;

            //sometimes there's a 1px offset on the bottom of the screen even when the 
            //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
            //using this prevents from lazyLoading the section that is not yet visible 
            //(only 1 pixel offset is)
            var pixelOffset = 2;
            
            var isTopInView = top + pixelOffset < windowsHeight && top > 0;
            var isBottomInView = bottom > pixelOffset && bottom < windowsHeight;

            return isTopInView || isBottomInView;
        }

        /**
        * Gets the directon of the the scrolling fired by the scroll event.
        */
        function getScrollDirection(currentScroll){
            var direction = currentScroll > lastScroll ? 'down' : 'up';

            lastScroll = currentScroll;

            //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
            previousDestTop = currentScroll;

            return direction;
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type){
            if (!isScrollAllowed.m[type]){
                return;
            }

            var scrollSection = (type === 'down') ? moveSectionDown : moveSectionUp;

            if(options.scrollOverflow){
                var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL)[0]);
                var check = (type === 'down') ? 'bottom' : 'top';

                if(scrollable != null ){
                    //is the scrollbar at the start/end of the scroll?
                    if(options.scrollOverflowHandler.isScrolled(check, scrollable)){
                        scrollSection();
                    }else{
                        return true;
                    }
                }else{
                    // moved up/down
                    scrollSection();
                }
            }else{
                // moved up/down
                scrollSection();
            }
        }

        /*
        * Preventing bouncing in iOS #2285
        */
        function preventBouncing(e){
            if(options.autoScrolling && isReallyTouch(e) && isScrollAllowed.m.up){
                //preventing the easing on iOS devices
                preventDefault(e);
            }
        }

        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events

        * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(e){
            var activeSection = closest(e.target, SECTION_SEL) || $(SECTION_ACTIVE_SEL)[0];

            if (isReallyTouch(e) ) {

                if(options.autoScrolling){
                    //preventing the easing on iOS devices
                    preventDefault(e);
                }

                var touchEvents = getEventsPage(e);

                touchEndY = touchEvents.y;
                touchEndX = touchEvents.x;

                //if movement in the X axys is greater than in the Y and the currect section has slides...
                if ($(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) {

                    //is the movement greater than the minimum resistance to scroll?
                    if (!slideMoving && Math.abs(touchStartX - touchEndX) > (getWindowWidth() / 100 * options.touchSensitivity)) {
                        if (touchStartX > touchEndX) {
                            if(isScrollAllowed.m.right){
                                moveSlideRight(activeSection); //next
                            }
                        } else {
                            if(isScrollAllowed.m.left){
                                moveSlideLeft(activeSection); //prev
                            }
                        }
                    }
                }

                //vertical scrolling (only when autoScrolling is enabled)
                else if(options.autoScrolling && canScroll){

                    //is the movement greater than the minimum resistance to scroll?
                    if (Math.abs(touchStartY - touchEndY) > (window.innerHeight / 100 * options.touchSensitivity)) {
                        if (touchStartY > touchEndY) {
                            scrolling('down');
                        } else if (touchEndY > touchStartY) {
                            scrolling('up');
                        }
                    }
                }
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e){
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        /**
        * Handler for the touch start event.
        */
        function touchStartHandler(e){

            //stopping the auto scroll to adjust to a section
            if(options.fitToSection){
                activeAnimation = false;
            }

            if(isReallyTouch(e)){
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        /**
        * Gets the average of the last `number` elements of the given array.
        */
        function getAverage(elements, number){
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for(var i = 0; i < lastElements.length; i++){
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum/number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();
            var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL);

            //is scroll allowed?
            if (!isScrollAllowed.m.down && !isScrollAllowed.m.up) {
                preventDefault(e);
                return false;
            }

            //autoscrolling and not zooming?
            if(options.autoScrolling && !controlPressed && !isNormalScroll){
                // cross-browser wheel delta
                e = e || window.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));

                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX ) < Math.abs(e.deltaY) || !horizontalDetection);

                //Limiting the array to 150 (lets not waste memory!)
                if(scrollings.length > 149){
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));

                //preventing to scroll the site on mouse wheel when scrollbar is present
                if(options.scrollBar){
                    preventDefault(e);
                }

                //time difference between the last scroll and the current one
                var timeDiff = curTime-prevTime;
                prevTime = curTime;

                //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if(timeDiff > 200){
                    //emptying the array, we dont care about old scrollings for our averages
                    scrollings = [];
                }

                if(canScroll){
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    //to avoid double swipes...
                    if(isAccelerating && isScrollingVertically){
                        //scrolling down?
                        if (delta < 0) {
                            scrolling('down');

                        //scrolling up?
                        }else {
                            scrolling('up');
                        }
                    }
                }

                return false;
            }

            if(options.fitToSection){
                //stopping the auto scroll to adjust to a section
                activeAnimation = false;
            }
        }

        /**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */
        function moveSlide(direction, section){
            var activeSection = section == null ? $(SECTION_ACTIVE_SEL)[0] : section;
            var slides = $(SLIDES_WRAPPER_SEL, activeSection)[0];

            // more than one slide needed and nothing should be sliding
            if (slides == null || slideMoving || $(SLIDE_SEL, slides).length < 2) {
                return;
            }

            var currentSlide = $(SLIDE_ACTIVE_SEL, slides)[0];
            var destiny = null;

            if(direction === 'left'){
                destiny = prevUntil(currentSlide, SLIDE_SEL);
            }else{
                destiny = nextUntil(currentSlide, SLIDE_SEL);
            }

            //isn't there a next slide in the secuence?
            if(destiny == null){
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                var slideSiblings = siblings(currentSlide);
                if(direction === 'left'){
                    destiny = slideSiblings[slideSiblings.length - 1]; //last
                }else{
                    destiny = slideSiblings[0]; //first
                }
            }

            slideMoving =  true && !FP.test.isTesting;
            landscapeScroll(slides, destiny, direction);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */
        function keepSlidesPosition(){
            var activeSlides = $(SLIDE_ACTIVE_SEL);
            for( var i =0; i<activeSlides.length; i++){
                silentLandscapeScroll(activeSlides[i], 'internal');
            }
        }

        var previousDestTop = 0;
        /**
        * Returns the destination Y position based on the scrolling direction and
        * the height of the section.
        */
        function getDestinationPosition(element){
            var elementHeight = element.offsetHeight;
            var elementTop = element.offsetTop;

            //top of the desination will be at the top of the viewport
            var position = elementTop;
            var isScrollingDown =  elementTop > previousDestTop;
            var sectionBottom = position - windowsHeight + elementHeight;
            var bigSectionsDestination = options.bigSectionsDestination;

            //is the destination element bigger than the viewport?
            if(elementHeight > windowsHeight){
                //scrolling up?
                if(!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom' ){
                    position = sectionBottom;
                }
            }

            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
            else if(isScrollingDown || (isResizing && next(element) == null) ){
                //The bottom of the destination will be at the bottom of the viewport
                position = sectionBottom;
            }

            /*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */
            previousDestTop = position;
            return position;
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp){
            if(element == null){ return; } //there's no element to scroll, leaving the function

            var dtop = getDestinationPosition(element);
            var slideAnchorLink;
            var slideIndex;

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dtop: dtop,
                yMovement: getYmovement(element),
                anchorLink: element.getAttribute('data-anchor'),
                sectionIndex: index(element, SECTION_SEL),
                activeSlide: $(SLIDE_ACTIVE_SEL, element)[0],
                activeSection: $(SECTION_ACTIVE_SEL)[0],
                leavingSection: index($(SECTION_ACTIVE_SEL), SECTION_SEL) + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if((v.activeSection == element && !isResizing) || (options.scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT) )){ return; }

            if(v.activeSlide != null){
                slideAnchorLink = v.activeSlide.getAttribute('data-anchor');
                slideIndex = index(v.activeSlide);
            }

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            if(!v.localIsResizing){
                var direction = v.yMovement;

                //required for continousVertical
                if(typeof isMovementUp !== 'undefined'){
                    direction = isMovementUp ? 'up' : 'down';
                }

                //for the callback
                v.direction = direction;

                if(isFunction(options.onLeave)){
                    if(fireCallback('onLeave', v) === false){
                        return;
                    }
                }
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" &&
                ((!v.isMovementUp && v.yMovement == 'up') || // Intending to scroll down but about to go up or
                (v.isMovementUp && v.yMovement == 'down'))) { // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)
            if(!v.localIsResizing){
                stopMedia(v.activeSection);
            }

            if(options.scrollOverflow){
                options.scrollOverflowHandler.beforeLeave();
            }

            addClass(element, ACTIVE);
            removeClass(siblings(element), ACTIVE);
            lazyLoad(element);

            if(options.scrollOverflow){
                options.scrollOverflowHandler.onLeave();
            }

            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll =  false || FP.test.isTesting;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Dispatch events & callbacks making sure it does it on the right format, depending on
        * whether v2compatible is being used or not.
        */
        function fireCallback(eventName, v){
            var eventData = getEventData(eventName, v);

            if(!options.v2compatible){
                trigger(container, eventName, eventData);

                if(options[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false){
                    return false;
                }
            }
            else{
                if(options[eventName].apply(eventData[0], eventData.slice(1)) === false){
                    return false;
                }
            }

            return true;
        }

        /**
        * Makes sure to only create a Panel object if the element exist
        */
        function nullOrSection(el){
            return el ? new Section(el) : null;
        }

        function nullOrSlide(el){
            return el ? new Slide(el) : null;
        }

        /**
        * Gets the event's data for the given event on the right format. Depending on whether
        * v2compatible is being used or not.
        */
        function getEventData(eventName, v){
            var paramsPerEvent;

            if(!options.v2compatible){

                //using functions to run only the necessary bits within the object
                paramsPerEvent = {
                    afterRender: function(){
                        return {
                            section: nullOrSection($(SECTION_ACTIVE_SEL)[0]),
                            slide: nullOrSlide($(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0])
                        };
                    },
                    onLeave: function(){
                        return {
                            origin: nullOrSection(v.activeSection),
                            destination: nullOrSection(v.element),
                            direction: v.direction
                        };
                    },

                    afterLoad: function(){
                        return paramsPerEvent.onLeave();
                    },

                    afterSlideLoad: function(){
                        return {
                            section: nullOrSection(v.section),
                            origin: nullOrSlide(v.prevSlide),
                            destination: nullOrSlide(v.destiny),
                            direction: v.direction
                        };
                    },

                    onSlideLeave: function(){
                        return paramsPerEvent.afterSlideLoad();
                    }
                };
            }
            else{
                paramsPerEvent = {
                    afterRender: function(){ return [container]; },
                    onLeave: function(){ return [v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.direction]; },
                    afterLoad: function(){ return [v.element, v.anchorLink, (v.sectionIndex + 1)]; },
                    afterSlideLoad: function(){ return [v.destiny, v.anchorLink, (v.sectionIndex + 1), v.slideAnchor, v.slideIndex]; },
                    onSlideLeave: function(){ return [v.prevSlide, v.anchorLink, (v.sectionIndex + 1), v.prevSlideIndex, v.direction, v.slideIndex]; },
                };
            }

            return paramsPerEvent[eventName]();
        }

        /**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */
        function performMovement(v){
            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {

                // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
                // that's why we round it to 0.
                var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
                transformContainer(translate3d, true);

                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
                //scrollingSpeed to change in case of using silentMoveTo();
                if(options.scrollingSpeed){
                    clearTimeout(afterSectionLoadsId);
                    afterSectionLoadsId = setTimeout(function () {
                        afterSectionLoads(v);
                    }, options.scrollingSpeed);
                }else{
                    afterSectionLoads(v);
                }
            }

            // using JS to animate
            else{
                var scrollSettings = getScrollSettings(v.dtop);
                FP.test.top = -v.dtop + 'px';

                scrollTo(scrollSettings.element, scrollSettings.options, options.scrollingSpeed, function(){
                    if(options.scrollBar){

                        /* Hack!
                        The timeout prevents setting the most dominant section in the viewport as "active" when the user
                        scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.

                        When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                        */
                        setTimeout(function(){
                            afterSectionLoads(v);
                        },30);
                    }else{
                        afterSectionLoads(v);
                    }
                });
            }
        }

        /**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */
        function getScrollSettings(top){
            var scroll = {};

            //top property animation
            if(options.autoScrolling && !options.scrollBar){
                scroll.options = -top;
                scroll.element = $(WRAPPER_SEL)[0];
            }

            //window real scrolling
            else{
                scroll.options = top;
                scroll.element = window;
            }

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create the infinite effect.
        */
        function createInfiniteSections(v){
            // Scrolling down
            if (!v.isMovementUp) {
                // Move all previous sections to after the active section
                after($(SECTION_ACTIVE_SEL)[0], prevAll(v.activeSection, SECTION_SEL).reverse());
            }
            else { // Scrolling up
                // Move all next sections to before the active section
                before($(SECTION_ACTIVE_SEL)[0], nextAll(v.activeSection, SECTION_SEL));
            }

            // Maintain the displayed position (now that we changed the element order)
            silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();

            // save for later the elements that still need to be reordered
            v.wrapAroundElements = v.activeSection;

            // Recalculate animation variables
            v.dtop = v.element.offsetTop;
            v.yMovement = getYmovement(v.element);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes have been animated
        */
        function continuousVerticalFixSectionOrder (v) {
            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
            // finish moving the elements around so the direct navigation will function more simply
            if (v.wrapAroundElements == null) {
                return;
            }

            if (v.isMovementUp) {
                before($(SECTION_SEL)[0], v.wrapAroundElements);
            }
            else {
                after($(SECTION_SEL)[$(SECTION_SEL).length-1], v.wrapAroundElements);
            }

            silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();
        }

        /**
        * Actions to do once the section is loaded.
        */
        function afterSectionLoads (v){
            continuousVerticalFixSectionOrder(v);

            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            if(isFunction(options.afterLoad) && !v.localIsResizing){
                fireCallback('afterLoad', v);
            }

            if(options.scrollOverflow){
                options.scrollOverflowHandler.afterLoad();
            }

            if(!v.localIsResizing){
                playMedia(v.element);
            }

            addClass(v.element, COMPLETELY);
            removeClass(siblings(v.element), COMPLETELY);
            lazyLoadOthers();

            canScroll = true;

            if(isFunction(v.callback)){
                v.callback();
            }
        }

        /**
        * Sets the value for the given attribute from the `data-` attribute with the same suffix
        * ie: data-srcset ==> srcset  |  data-src ==> src
        */
        function setSrc(element, attribute){
            element.setAttribute(attribute, element.getAttribute('data-' + attribute));
            element.removeAttribute('data-' + attribute);
        }

        /**
        * Makes sure lazyload is done for other sections in the viewport that are not the
        * active one. 
        */
        function lazyLoadOthers(){
            var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0];

            //quitting when it doesn't apply
            if (!options.lazyLoading || !hasAutoHeightSections){
                return;
            }

            //making sure to lazy load auto-height sections that are in the viewport
            $(SECTION_SEL + ':not(' + ACTIVE_SEL + ')').forEach(function(section){
                if(isSectionInViewport(section)){
                    lazyLoad(section);
                }
            });
        }

        /**
        * Lazy loads image, video and audio elements.
        */
        function lazyLoad(destiny){
            if (!options.lazyLoading){
                return;
            }

            var panel = getSlideOrSection(destiny);

            $('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]', panel).forEach(function(element){
                ['src', 'srcset'].forEach(function(type){
                    var attribute = element.getAttribute('data-' + type);
                    if(attribute != null && attribute){
                        setSrc(element, type);
                        element.addEventListener('load', function(){
                            onMediaLoad(destiny);
                        });
                    }
                });

                if(matches(element, 'source')){
                    var elementToPlay =  closest(element, 'video, audio');
                    if(elementToPlay){
                        elementToPlay.load();
                        elementToPlay.onloadeddata = function(){
                            onMediaLoad(destiny);
                        };
                    }
                }
            });
        }

        /**
        * Callback firing when a lazy load media element has loaded.
        * Making sure it only fires one per section in normal conditions (if load time is not huge)
        */
        function onMediaLoad(section){
            if(options.scrollOverflow){
                clearTimeout(g_mediaLoadedId);
                g_mediaLoadedId = setTimeout(function(){
                    scrollBarHandler.createScrollBar(section);
                }, 200);
            }
        }

        /**
        * Plays video and audio elements.
        */
        function playMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //playing HTML5 media elements
            $('video, audio', panel).forEach(function(element){
                if( element.hasAttribute('data-autoplay') && typeof element.play === 'function' ) {
                    element.play();
                }
            });

            //youtube videos
            $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element){
                if ( element.hasAttribute('data-autoplay') ){
                    playYoutube(element);
                }

                //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
                element.onload = function() {
                    if ( element.hasAttribute('data-autoplay') ){
                        playYoutube(element);
                    }
                };
            });
        }

        /**
        * Plays a youtube video
        */
        function playYoutube(element){
            element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }

        /**
        * Stops video and audio elements.
        */
        function stopMedia(destiny){
            var panel = getSlideOrSection(destiny);

            //stopping HTML5 media elements
            $('video, audio', panel).forEach(function(element){
                if( !element.hasAttribute('data-keepplaying') && typeof element.pause === 'function' ) {
                    element.pause();
                }
            });

            //youtube videos
            $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element){
                if( /youtube\.com\/embed\//.test(element.getAttribute('src')) && !element.hasAttribute('data-keepplaying')){
                    element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
                }
            });
        }

        /**
        * Gets the active slide (or section) for the given section
        */
        function getSlideOrSection(destiny){
            var slide = $(SLIDE_ACTIVE_SEL, destiny);
            if( slide.length ) {
                destiny = slide[0];
            }

            return destiny;
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor(){
            var anchors =  getAnchorsURL();
            var sectionAnchor = anchors.section;
            var slideAnchor = anchors.slide;

            if(sectionAnchor){  //if theres any #
                if(options.animateAnchor){
                    scrollPageAndSlide(sectionAnchor, slideAnchor);
                }else{
                    silentMoveTo(sectionAnchor, slideAnchor);
                }
            }
        }

        /**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */
        function hashChangeHandler(){
            if(!isScrolling && !options.lockAnchors){
                var anchors = getAnchorsURL();
                var sectionAnchor = anchors.section;
                var slideAnchor = anchors.slide;

                //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                var isFirstSlideMove =  (typeof lastScrolledDestiny === 'undefined');
                var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving);

                if(sectionAnchor && sectionAnchor.length){
                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if ((sectionAnchor && sectionAnchor !== lastScrolledDestiny) && !isFirstSlideMove
                        || isFirstScrollMove
                        || (!slideMoving && lastScrolledSlide != slideAnchor )){

                        scrollPageAndSlide(sectionAnchor, slideAnchor);
                    }
                }
            }
        }

        //gets the URL anchors (section and slide)
        function getAnchorsURL(){
            var section;
            var slide;
            var hash = window.location.hash;

            if(hash.length){
                //getting the anchor link in the URL and deleting the `#`
                var anchorsParts =  hash.replace('#', '').split('/');

                //using / for visual reasons and not as a section/slide separator #2803
                var isFunkyAnchor = hash.indexOf('#/') > -1;

                section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);

                var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];
                if(slideAnchor && slideAnchor.length){
                    slide = decodeURIComponent(slideAnchor);
                }
            }

            return {
                section: section,
                slide: slide
            };
        }

        //Sliding with arrow keys, both, vertical and horizontal
        function keydownHandler(e) {
            clearTimeout(keydownId);

            var activeElement = document.activeElement;
            var keyCode = e.keyCode;

            //tab?
            if(keyCode === 9){
                onTab(e);
            }

            else if(!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select') &&
                activeElement.getAttribute('contentEditable') !== "true" && activeElement.getAttribute('contentEditable') !== '' &&
                options.keyboardScrolling && options.autoScrolling){

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if(keyControls.indexOf(keyCode) > -1){
                    preventDefault(e);
                }

                controlPressed = e.ctrlKey;

                keydownId = setTimeout(function(){
                    onkeydown(e);
                },150);
            }
        }

        function tooltipTextHandler(){
            /*jshint validthis:true */
            trigger(prev(this), 'click');
        }

        //to prevent scrolling while zooming
        function keyUpHandler(e){
            if(isWindowFocused){ //the keyup gets fired on new tab ctrl + t in Firefox
                controlPressed = e.ctrlKey;
            }
        }

        //binding the mousemove when the mouse's middle button is released
        function mouseDownHandler(e){
            //middle button
            if (e.which == 2){
                oldPageY = e.pageY;
                container.addEventListener('mousemove', mouseMoveHandler);
            }
        }

        //unbinding the mousemove when the mouse's middle button is released
        function mouseUpHandler(e){
            //middle button
            if (e.which == 2){
                container.removeEventListener('mousemove', mouseMoveHandler);
            }
        }

        /**
        * Makes sure the tab key will only focus elements within the current section/slide
        * preventing this way from breaking the page.
        * Based on "Modals and keyboard traps"
        * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
        */
        function onTab(e){
            var isShiftPressed = e.shiftKey;
            var activeElement = document.activeElement;
            var focusableElements = getFocusables(getSlideOrSection($(SECTION_ACTIVE_SEL)[0]));

            function preventAndFocusFirst(e){
                preventDefault(e);
                return focusableElements[0] ? focusableElements[0].focus() : null;
            }

            //outside any section or slide? Let's not hijack the tab!
            if(isFocusOutside(e)){
                return;
            }

            //is there an element with focus?
            if(activeElement){
                if(closest(activeElement, SECTION_ACTIVE_SEL + ',' + SECTION_ACTIVE_SEL + ' ' + SLIDE_ACTIVE_SEL) == null){
                    activeElement = preventAndFocusFirst(e);
                }
            }

            //no element if focused? Let's focus the first one of the section/slide
            else{
                preventAndFocusFirst(e);
            }

            //when reached the first or last focusable element of the section/slide
            //we prevent the tab action to keep it in the last focusable element
            if(!isShiftPressed && activeElement == focusableElements[focusableElements.length - 1] ||
                isShiftPressed && activeElement == focusableElements[0]
            ){
                preventDefault(e);
            }
        }

        /**
        * Gets all the focusable elements inside the passed element.
        */
        function getFocusables(el){
            return [].slice.call($(focusableElementsString, el)).filter(function(item) {
                    return item.getAttribute('tabindex') !== '-1'
                    //are also not hidden elements (or with hidden parents)
                    && item.offsetParent !== null;
            });
        }

        /**
        * Determines whether the focus is outside fullpage.js sections/slides or not.
        */
        function isFocusOutside(e){
            var allFocusables = getFocusables(document);
            var currentFocusIndex = allFocusables.indexOf(document.activeElement);
            var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
            var focusDestination = allFocusables[focusDestinationIndex];
            var destinationItemSlide = nullOrSlide(closest(focusDestination, SLIDE_SEL));
            var destinationItemSection = nullOrSection(closest(focusDestination, SECTION_SEL));

            return !destinationItemSlide && !destinationItemSection;
        }

        //Scrolling horizontally when clicking on the slider controls.
        function slideArrowHandler(){
            /*jshint validthis:true */
            var section = closest(this, SECTION_SEL);

            /*jshint validthis:true */
            if (hasClass(this, SLIDES_PREV)) {
                if(isScrollAllowed.m.left){
                    moveSlideLeft(section);
                }
            } else {
                if(isScrollAllowed.m.right){
                    moveSlideRight(section);
                }
            }
        }

        //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
        function blurHandler(){
            isWindowFocused = false;
            controlPressed = false;
        }

        //Scrolls to the section when clicking the navigation bullet
        function sectionBulletHandler(e){
            preventDefault(e);

            /*jshint validthis:true */
            var indexBullet = index(closest(this, SECTION_NAV_SEL + ' li'));
            scrollPage($(SECTION_SEL)[indexBullet]);
        }

        //Scrolls the slider to the given slide destination for the given section
        function slideBulletHandler(e){
            preventDefault(e);

            /*jshint validthis:true */
            var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
            var destiny = $(SLIDE_SEL, slides)[index(closest(this, 'li'))];

            landscapeScroll(slides, destiny);
        }

        //Menu item handler when not using anchors or using lockAnchors:true
        function menuItemsHandler(e){
            if($(options.menu)[0] && (options.lockAnchors || !options.anchors.length)){
                preventDefault(e);
                /*jshint validthis:true */
                moveTo(this.getAttribute('data-menuanchor'));
            }
        }

        /**
        * Keydown event
        */
        function onkeydown(e){
            var shiftPressed = e.shiftKey;
            var activeElement = document.activeElement;
            var isMediaFocused = matches(activeElement, 'video') || matches(activeElement, 'audio');

            //do nothing if we can not scroll or we are not using horizotnal key arrows.
            if(!canScroll && [37,39].indexOf(e.keyCode) < 0){
                return;
            }

            switch (e.keyCode) {
                //up
                case 38:
                case 33:
                    if(isScrollAllowed.k.up){
                        moveSectionUp();
                    }
                    break;

                //down
                case 32: //spacebar

                    if(shiftPressed && isScrollAllowed.k.up && !isMediaFocused){
                        moveSectionUp();
                        break;
                    }
                /* falls through */
                case 40:
                case 34:
                    if(isScrollAllowed.k.down){
                        // space bar?
                        if(e.keyCode !== 32 || !isMediaFocused){
                            moveSectionDown();
                        }
                    }
                    break;

                //Home
                case 36:
                    if(isScrollAllowed.k.up){
                        moveTo(1);
                    }
                    break;

                //End
                case 35:
                     if(isScrollAllowed.k.down){
                        moveTo( $(SECTION_SEL).length );
                    }
                    break;

                //left
                case 37:
                    if(isScrollAllowed.k.left){
                        moveSlideLeft();
                    }
                    break;

                //right
                case 39:
                    if(isScrollAllowed.k.right){
                        moveSlideRight();
                    }
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e){
            if(!options.autoScrolling){
                return;
            }
            if(canScroll){
                // moving up
                if (e.pageY < oldPageY && isScrollAllowed.m.up){
                    moveSectionUp();
                }

                // moving down
                else if(e.pageY > oldPageY && isScrollAllowed.m.down){
                    moveSectionDown();
                }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny, direction){
            var section = closest(slides, SECTION_SEL);
            var v = {
                slides: slides,
                destiny: destiny,
                direction: direction,
                destinyPos: {left: destiny.offsetLeft},
                slideIndex: index(destiny),
                section: section,
                sectionIndex: index(section, SECTION_SEL),
                anchorLink: section.getAttribute('data-anchor'),
                slidesNav: $(SLIDES_NAV_SEL, section)[0],
                slideAnchor: getAnchor(destiny),
                prevSlide: $(SLIDE_ACTIVE_SEL, section)[0],
                prevSlideIndex: index($(SLIDE_ACTIVE_SEL, section)[0]),

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };
            v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
            v.direction = v.direction ? v.direction : v.xMovement;

            //important!! Only do it when not resizing
            if(!v.localIsResizing){
                //preventing from scrolling to the next/prev section when using scrollHorizontally
                canScroll = false;
            }

            if(options.onSlideLeave){

                //if the site is not just resizing and readjusting the slides
                if(!v.localIsResizing && v.xMovement!=='none'){
                    if(isFunction( options.onSlideLeave )){
                        if( fireCallback('onSlideLeave', v) === false){
                            slideMoving = false;
                            return;
                        }
                    }
                }
            }

            addClass(destiny, ACTIVE);
            removeClass(siblings(destiny), ACTIVE);

            if(!v.localIsResizing){
                stopMedia(v.prevSlide);
                lazyLoad(destiny);
            }

            if(!options.loopHorizontal && options.controlArrows){
                //hidding it for the fist slide, showing for the rest
                toggle($(SLIDES_ARROW_PREV_SEL, section), v.slideIndex!==0);

                //hidding it for the last slide, showing for the rest
                toggle($(SLIDES_ARROW_NEXT_SEL, section), next(destiny) != null);
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if(hasClass(section, ACTIVE) && !v.localIsResizing){
                setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
            }

            performHorizontalMove(slides, v, true);
        }


        function afterSlideLoads(v){
            activeSlidesNavigation(v.slidesNav, v.slideIndex);

            //if the site is not just resizing and readjusting the slides
            if(!v.localIsResizing){
                if(isFunction( options.afterSlideLoad )){
                    fireCallback('afterSlideLoad', v);
                }

                //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
                //and to prevent double scroll right after a windows resize
                canScroll = true;

                playMedia(v.destiny);
            }

            //letting them slide again
            slideMoving = false;
        }

        /**
        * Performs the horizontal movement. (CSS3 or jQuery)
        *
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */
        function performHorizontalMove(slides, v, fireCallback){
            var destinyPos = v.destinyPos;

            if(options.css3){
                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

                FP.test.translate3dH[v.sectionIndex] = translate3d;
                css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));

                afterSlideLoadsId = setTimeout(function(){
                    if(fireCallback){
                        afterSlideLoads(v);
                    }
                }, options.scrollingSpeed);
            }else{
                FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);

                scrollTo(slides, Math.round(destinyPos.left), options.scrollingSpeed, function(){
                    if(fireCallback){
                        afterSlideLoads(v);
                    }
                });
            }
        }

        /**
        * Sets the state for the horizontal bullet navigations.
        */
        function activeSlidesNavigation(slidesNav, slideIndex){
            if(options.slidesNavigation && slidesNav != null){
                removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
                addClass( $('a', $('li', slidesNav)[slideIndex] ), ACTIVE);
            }
        }

        var previousHeight = windowsHeight;

        /*
        * Resize event handler.
        */        
        function resizeHandler(){
            clearTimeout(resizeId);

            //in order to call the functions only when the resize is finished
            //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing    
            resizeId = setTimeout(function(){

                //issue #3336 
                //(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
                //so we check it 3 times with intervals in that case
                for(var i = 0; i< 4; i++){
                    resizeHandlerId = setTimeout(resizeActions, 200 * i);
                }
            }, 200);
        }

        /**
        * When resizing the site, we adjust the heights of the sections, slimScroll...
        */
        function resizeActions(){

            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = document.activeElement;

                //if the keyboard is NOT visible
                if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select')) {
                    var currentHeight = getWindowHeight();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if( Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100) ){
                        reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            }
            else{
                adjustToNewViewport();
            }
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive(){
            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
            var heightLimit = options.responsiveHeight;

            //only calculating what we need. Remember its called on the resize event.
            var isBreakingPointWidth = widthLimit && window.innerWidth < widthLimit;
            var isBreakingPointHeight = heightLimit && window.innerHeight < heightLimit;

            if(widthLimit && heightLimit){
                setResponsive(isBreakingPointWidth || isBreakingPointHeight);
            }
            else if(widthLimit){
                setResponsive(isBreakingPointWidth);
            }
            else if(heightLimit){
                setResponsive(isBreakingPointHeight);
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(element){
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            removeClass(element, NO_TRANSITION);
            return css(element, {
                '-webkit-transition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations for the given element
        */
        function removeAnimation(element){
            return addClass(element, NO_TRANSITION);
        }

        /**
        * Activating the vertical navigation bullets according to the given slide name.
        */
        function activateNavDots(name, sectionIndex){
            if(options.navigation && $(SECTION_NAV_SEL)[0] != null){
                    removeClass($(ACTIVE_SEL, $(SECTION_NAV_SEL)[0]), ACTIVE);
                if(name){
                    addClass( $('a[href="#' + name + '"]', $(SECTION_NAV_SEL)[0]), ACTIVE);
                }else{
                    addClass($('a', $('li', $(SECTION_NAV_SEL)[0])[sectionIndex]), ACTIVE);
                }
            }
        }

        /**
        * Activating the website main menu elements according to the given slide name.
        */
        function activateMenuElement(name){
            $(options.menu).forEach(function(menu) {
                if(options.menu && menu != null){
                    removeClass($(ACTIVE_SEL, menu), ACTIVE);
                    addClass($('[data-menuanchor="'+name+'"]', menu), ACTIVE);
                }
            });
        }

        /**
        * Sets to active the current menu and vertical nav items.
        */
        function activateMenuAndNav(anchor, index){
            activateMenuElement(anchor);
            activateNavDots(anchor, index);
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny){
            var fromIndex = index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL);
            var toIndex = index(destiny, SECTION_SEL);
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'up';
            }
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */
        function getXmovement(fromIndex, toIndex){
            if( fromIndex == toIndex){
                return 'none';
            }
            if(fromIndex > toIndex){
                return 'left';
            }
            return 'right';
        }

        function addTableClass(element){
            //In case we are styling for the 2nd time as in with reponsiveSlides
            if(!hasClass(element, TABLE)){
                var wrapper = document.createElement('div');
                wrapper.className = TABLE_CELL;
                wrapper.style.height = getTableHeight(element) + 'px';

                addClass(element, TABLE);
                wrapInner(element, wrapper);
            }
        }

        function getTableHeight(element){
            var sectionHeight = windowsHeight;

            if(options.paddingTop || options.paddingBottom){
                var section = element;
                if(!hasClass(section, SECTION)){
                    section = closest(element, SECTION_SEL);
                }

                var paddings = parseInt(getComputedStyle(section)['padding-top']) + parseInt(getComputedStyle(section)['padding-bottom']);
                sectionHeight = (windowsHeight - paddings);
            }

            return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(translate3d, animated){
            if(animated){
                addAnimation(container);
            }else{
                removeAnimation(container);
            }

            css(container, getTransforms(translate3d));
            FP.test.translate3d = translate3d;

            //syncronously removing the class after the animation has been applied.
            setTimeout(function(){
                removeClass(container, NO_TRANSITION);
            },10);
        }

        /**
        * Gets a section by its anchor / index
        */
        function getSectionByAnchor(sectionAnchor){
            var section = $(SECTION_SEL + '[data-anchor="'+sectionAnchor+'"]', container)[0];
            if(!section){
                var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor -1 : 0;
                section = $(SECTION_SEL)[sectionIndex];
            }

            return section;
        }

        /**
        * Gets a slide inside a given section by its anchor / index
        */
        function getSlideByAnchor(slideAnchor, section){
            var slide = $(SLIDE_SEL + '[data-anchor="'+slideAnchor+'"]', section)[0];
            if(slide == null){
                slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
                slide = $(SLIDE_SEL, section)[slideAnchor];
            }

            return slide;
        }

        /**
        * Scrolls to the given section and slide anchors
        */
        function scrollPageAndSlide(sectionAnchor, slideAnchor){
            var section = getSectionByAnchor(sectionAnchor);

            //do nothing if there's no section with the given anchor name
            if(section == null) return;

            var slide = getSlideByAnchor(slideAnchor, section);

            //we need to scroll to the section and then to the slide
            if (getAnchor(section) !== lastScrolledDestiny && !hasClass(section, ACTIVE)){
                scrollPage(section, function(){
                    scrollSlider(slide);
                });
            }
            //if we were already in the section
            else{
                scrollSlider(slide);
            }
        }

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        function scrollSlider(slide){
            if(slide != null){
                landscapeScroll(closest(slide, SLIDES_WRAPPER_SEL), slide);
            }
        }

        /**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */
        function addSlidesNavigation(section, numSlides){
            appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), section);
            var nav = $(SLIDES_NAV_SEL, section)[0];

            //top or bottom
            addClass(nav, 'fp-' + options.slidesNavPosition);

            for(var i=0; i< numSlides; i++){
                appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">'+ getBulletLinkName(i, 'Slide') +'</span><span></span></a></li>'), $('ul', nav)[0] );
            }

            //centering it
            css(nav, {'margin-left': '-' + (nav.innerWidth/2) + 'px'});

            addClass($('a', $('li', nav)[0] ), ACTIVE);
        }


        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */
        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex){
            var sectionHash = '';

            if(options.anchors.length && !options.lockAnchors){

                //isn't it the first slide?
                if(slideIndex){
                    if(anchorLink != null){
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if(slideAnchor == null){
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    setUrlHash(sectionHash + '/' + slideAnchor);

                //first slide won't have slide anchor, just the section one
                }else if(slideIndex != null){
                    lastScrolledSlide = slideAnchor;
                    setUrlHash(anchorLink);
                }

                //section without slides
                else{
                    setUrlHash(anchorLink);
                }
            }

            setBodyClass();
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url){
            if(options.recordHistory){
                location.hash = url;
            }else{
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if(isTouchDevice || isTouch){
                    window.history.replaceState(undefined, undefined, '#' + url);
                }else{
                    var baseUrl = window.location.href.split('#')[0];
                    window.location.replace( baseUrl + '#' + url );
                }
            }
        }

        /**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */
        function getAnchor(element){
            if(!element){
                return null;
            }
            var anchor = element.getAttribute('data-anchor');
            var elementIndex = index(element);

            //Slide without anchor link? We take the index instead.
            if(anchor == null){
                anchor = elementIndex;
            }

            return anchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass(){
            var section = $(SECTION_ACTIVE_SEL)[0];
            var slide = $(SLIDE_ACTIVE_SEL, section)[0];

            var sectionAnchor = getAnchor(section);
            var slideAnchor = getAnchor(slide);

            var text = String(sectionAnchor);

            if(slide){
                text = text + '-' + slideAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#','');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
            $body.className = $body.className.replace(classRe, '');

            //adding the current anchor
            addClass($body, VIEWING_PREFIX + '-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                    'webkitTransform':'-webkit-transform',
                    'OTransform':'-o-transform',
                    'msTransform':'-ms-transform',
                    'MozTransform':'-moz-transform',
                    'transform':'transform'
                };

            //preventing the style p:empty{display: none;} from returning the wrong result
            el.style.display = 'block';

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler(){
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
            } else {
                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        */
        function addMouseWheelHandler(){
            var prefix = '';
            var _addEventListener;

            if (window.addEventListener){
                _addEventListener = "addEventListener";
            }else{
                _addEventListener = "attachEvent";
                prefix = 'on';
            }

            // detect available wheel event
            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
                      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox
            var passiveEvent = g_supportsPassive ? {passive: false }: false;

            if(support == 'DOMMouseScroll'){
                document[ _addEventListener ](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent);
            }

            //handle MozMousePixelScroll in older Firefox
            else{
                document[ _addEventListener ](prefix + support, MouseWheelHandler, passiveEvent);
            }
        }

        /**
        * Binding the mousemove when the mouse's middle button is pressed
        */
        function addMiddleWheelHandler(){
            container.addEventListener('mousedown', mouseDownHandler);
            container.addEventListener('mouseup', mouseUpHandler);
        }

        /**
        * Unbinding the mousemove when the mouse's middle button is released
        */
        function removeMiddleWheelHandler(){
            container.removeEventListener('mousedown', mouseDownHandler);
            container.removeEventListener('mouseup', mouseUpHandler);
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler(){
            if(isTouchDevice || isTouch){
                if(options.autoScrolling){
                    $body.removeEventListener(events.touchmove, preventBouncing, {passive: false});
                    $body.addEventListener(events.touchmove, preventBouncing, {passive: false});
                }

                var touchWrapper = options.touchWrapper;
                touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
                touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});

                touchWrapper.addEventListener(events.touchstart, touchStartHandler);
                touchWrapper.addEventListener(events.touchmove, touchMoveHandler, {passive: false});
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler(){
            if(isTouchDevice || isTouch){
                // normalScrollElements requires it off #2691
                if(options.autoScrolling){
                    $body.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});
                    $body.removeEventListener(events.touchmove, preventBouncing, {passive: false});
                }

                var touchWrapper = options.touchWrapper;
                touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
                touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {passive: false});
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer(){
            var pointer;

            //IE >= 11 & rest of browsers
            if(window.PointerEvent){
                pointer = { down: 'pointerdown', move: 'pointermove'};
            }

            //IE < 11
            else{
                pointer = { down: 'MSPointerDown', move: 'MSPointerMove'};
            }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e){
            var events = [];

            events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY);
            events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX);

            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
            if(isTouch && isReallyTouch(e) && options.scrollBar && typeof e.touches !== 'undefined'){
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

            return events;
        }

        /**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */
        function silentLandscapeScroll(activeSlide, noCallbacks){
            setScrollingSpeed(0, 'internal');

            if(typeof noCallbacks !== 'undefined'){
                //preventing firing callbacks afterSlideLoad etc.
                isResizing = true;
            }

            landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);

            if(typeof noCallbacks !== 'undefined'){
                isResizing = false;
            }

            setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Scrolls silently (with no animation) the page to the given Y position.
        */
        function silentScroll(top){
            // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
            // that's why we round it to 0.
            var roundedTop = Math.round(top);

            if (options.css3 && options.autoScrolling && !options.scrollBar){
                var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
                transformContainer(translate3d, false);
            }
            else if(options.autoScrolling && !options.scrollBar){
                css(container, {'top': -roundedTop + 'px'});
                FP.test.top = -roundedTop + 'px';
            }
            else{
                var scrollSettings = getScrollSettings(roundedTop);
                setScrolling(scrollSettings.element, scrollSettings.options);
            }
        }

        /**
        * Returns the cross-browser transform string.
        */
        function getTransforms(translate3d){
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform':translate3d,
                'transform': translate3d
            };
        }

        /**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */
        function setIsScrollAllowed(value, direction, type){
            //up, down, left, right
            if(direction !== 'all'){
                isScrollAllowed[type][direction] = value;
            }

            //all directions?
            else{
                Object.keys(isScrollAllowed[type]).forEach(function(key){
                    isScrollAllowed[type][key] = value;
                });
            }
        }

        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        function destroy(all){
            setAutoScrolling(false, 'internal');
            setAllowScrolling(true);
            setMouseHijack(false);
            setKeyboardScrolling(false);
            addClass(container, DESTROYED);

            [
                afterSlideLoadsId, 
                afterSectionLoadsId,
                resizeId,
                scrollId,
                scrollId2,
                g_doubleCheckHeightId,
                resizeHandlerId
            ].forEach(function(timeoutId){
                clearTimeout(timeoutId);
            });

            window.removeEventListener('scroll', scrollHandler);
            window.removeEventListener('hashchange', hashChangeHandler);
            window.removeEventListener('resize', resizeHandler);

            document.removeEventListener('keydown', keydownHandler);
            document.removeEventListener('keyup', keyUpHandler);

            ['click', 'touchstart'].forEach(function(eventName){
                document.removeEventListener(eventName, delegatedEvents);
            });

            ['mouseenter', 'touchstart', 'mouseleave', 'touchend'].forEach(function(eventName){
                document.removeEventListener(eventName, onMouseEnterOrLeave, true); //true is required!
            });

            //lets make a mess!
            if(all){
                destroyStructure();
            }
        }

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure(){
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            //loading all the lazy load content
            $('img[data-src], source[data-src], audio[data-src], iframe[data-src]', container).forEach(function(item){
                setSrc(item, 'src');
            });

            $('img[data-srcset]').forEach(function(item){
                setSrc(item, 'srcset');
            });

            remove($(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL +  ', ' + SLIDES_ARROW_SEL));

            //removing inline styles
            css($(SECTION_SEL), {
                'height': '',
                'background-color' : '',
                'padding': ''
            });

            css($(SLIDE_SEL), {
                'width': ''
            });

            css(container, {
                'height': '',
                'position': '',
                '-ms-touch-action': '',
                'touch-action': ''
            });

            css($htmlBody, {
                'overflow': '',
                'height': ''
            });

            // remove .fp-enabled class
            removeClass($html, ENABLED);

            // remove .fp-responsive class
            removeClass($body, RESPONSIVE);

            // remove all of the .fp-viewing- classes
            $body.className.split(/\s+/).forEach(function (className) {
                if (className.indexOf(VIEWING_PREFIX) === 0) {
                    removeClass($body, className);
                }
            });

            //removing added classes
            $(SECTION_SEL + ', ' + SLIDE_SEL).forEach(function(item){
                if(options.scrollOverflowHandler && options.scrollOverflow){
                    options.scrollOverflowHandler.remove(item);
                }
                removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY);
                var previousStyles = item.getAttribute('data-fp-styles');
                if(previousStyles){
                    item.setAttribute('style', item.getAttribute('data-fp-styles'));
                }

                //removing anchors if they were not set using the HTML markup
                if(hasClass(item, SECTION) && !g_initialAnchorsInDom){
                    item.removeAttribute('data-anchor');
                }
            });

            //removing the applied transition from the fullpage wrapper
            removeAnimation(container);

            //Unwrapping content
            [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL,SLIDES_WRAPPER_SEL].forEach(function(selector){
                $(selector, container).forEach(function(item){
                    //unwrap not being use in case there's no child element inside and its just text
                    unwrap(item);
                });
            });

            //removing the applied transition from the fullpage wrapper
            css(container, {
                '-webkit-transition': 'none',
                'transition': 'none'
            });

            //scrolling the page to the top with no animation
            window.scrollTo(0, 0);

            //removing selectors
            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
            usedSelectors.forEach(function(item){
                removeClass($('.' + item), item);
            });
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */
        function setVariableState(variable, value, type){
            options[variable] = value;
            if(type !== 'internal'){
                originals[variable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings(){
            var l = options['li' + 'c' + 'enseK' + 'e' + 'y'];
            var msgStyle = 'font-size: 15px;background:yellow;';

            if(!isOK){
                showError('error', 'Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:');
                showError('error', 'https://github.com/alvarotrigo/fullPage.js#options.');
            }
            else if(l && l.length < 20){
                console.warn('%c This website was made using fullPage.js slider. More info on the following website:', msgStyle);
                console.warn('%c https://alvarotrigo.com/fullPage/', msgStyle);
            }

            if(hasClass($html, ENABLED)){
                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
                return;
            }

            // Disable mutually exclusive settings
            if (options.continuousVertical &&
                (options.loopTop || options.loopBottom)) {
                options.continuousVertical = false;
                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollOverflow &&
               (options.scrollBar || !options.autoScrolling)){
                showError('warn', 'Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox');
            }

            if(options.continuousVertical && (options.scrollBar || !options.autoScrolling)){
                options.continuousVertical = false;
                showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if(options.scrollOverflow && options.scrollOverflowHandler == null){
                options.scrollOverflow = false;
                showError('error', 'The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.');
            }

            //using extensions? Wrong file!
            extensions.forEach(function(extension){
                //is the option set to true?
                if(options[extension]){
                    showError('warn', 'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: '+ extension);
                }
            });

            //anchors can not have the same value as any element ID or NAME
            options.anchors.forEach(function(name){

                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
                var nameAttr = [].slice.call($('[name]')).filter(function(item) {
                    return item.getAttribute('name') && item.getAttribute('name').toLowerCase() == name.toLowerCase();
                });

                var idAttr = [].slice.call($('[id]')).filter(function(item) {
                    return item.getAttribute('id') && item.getAttribute('id').toLowerCase() == name.toLowerCase();
                });

                if(idAttr.length || nameAttr.length ){
                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                    var propertyName = idAttr.length ? 'id' : 'name';

                    if(idAttr.length || nameAttr.length){
                        showError('error', '"' + name + '" is is being used by another element `'+ propertyName +'` property');
                    }
                }
            });
        }

        /**
        * Getting the position of the element to scroll when using jQuery animations
        */
        function getScrolledPosition(element){
            var position;

            //is not the window element and is a slide?
            if(element.self != window && hasClass(element, SLIDES_WRAPPER)){
                position = element.scrollLeft;
            }
            else if(!options.autoScrolling  || options.scrollBar){
                position = getScrollTop();
            }
            else{
                position = element.offsetTop;
            }

            //gets the top property of the wrapper
            return position;
        }

        /**
        * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
        * http://stackoverflow.com/a/16136789/1081396
        */
        function scrollTo(element, to, duration, callback) {
            var start = getScrolledPosition(element);
            var change = to - start;
            var currentTime = 0;
            var increment = 20;
            activeAnimation = true;

            var animateScroll = function(){
                if(activeAnimation){ //in order to stope it from other function whenever we want
                    var val = to;

                    currentTime += increment;

                    if(duration){
                        val = window.fp_easings[options.easing](currentTime, start, change, duration);
                    }

                    setScrolling(element, val);

                    if(currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    }else if(typeof callback !== 'undefined'){
                        callback();
                    }
                }else if (currentTime < duration){
                    callback();
                }
            };

            animateScroll();
        }

        /**
        * Scrolls the page / slider the given number of pixels.
        * It will do it one or another way dependiong on the library's config.
        */
        function setScrolling(element, val){
            if(!options.autoScrolling || options.scrollBar || (element.self != window && hasClass(element, SLIDES_WRAPPER))){

                //scrolling horizontally through the slides?
                if(element.self != window  && hasClass(element, SLIDES_WRAPPER)){
                    element.scrollLeft = val;
                }
                //vertical scroll
                else{
                    element.scrollTo(0, val);
                }
            }else{
                 element.style.top = val + 'px';
            }
        }

        /**
        * Gets the active slide.
        */
        function getActiveSlide(){
            var activeSlide = $(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0];
            return nullOrSlide(activeSlide);
        }

        /**
        * Gets the active section.
        */
        function getActiveSection(){
            return new Section($(SECTION_ACTIVE_SEL)[0]);
        }

        /**
        * Item. Slide or Section objects share the same properties.
        */
        function Item(el, selector){
            this.anchor = el.getAttribute('data-anchor');
            this.item = el;
            this.index = index(el, selector);
            this.isLast = this.index === el.parentElement.querySelectorAll(selector).length -1;
            this.isFirst = !this.index;
        }

        /**
        * Section object
        */
        function Section(el){
            Item.call(this, el, SECTION_SEL);
        }

        /**
        * Slide object
        */
        function Slide(el){
            Item.call(this, el, SLIDE_SEL);
        }

        return FP;
    } //end of $.fn.fullpage

    //utils
    /**
    * Shows a message in the console of the given type.
    */
    function showError(type, text){
        window.console && window.console[type] && window.console[type]('fullPage: ' + text);
    }

    /**
    * Equivalent or jQuery function $().
    */
    function $(selector, context){
        context = arguments.length > 1 ? context : document;
        return context ? context.querySelectorAll(selector) : null;
    }

    /**
    * Extends a given Object properties and its childs.
    */
    function deepExtend(out) {
        out = out || {};
        for (var i = 1, len = arguments.length; i < len; ++i){
            var obj = arguments[i];

            if(!obj){
              continue;
            }

            for(var key in obj){
              if (!obj.hasOwnProperty(key)){
                continue;
              }

              // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
              if (Object.prototype.toString.call(obj[key]) === '[object Object]'){
                out[key] = deepExtend(out[key], obj[key]);
                continue;
              }

              out[key] = obj[key];
            }
        }
        return out;
    }

    /**
    * Checks if the passed element contains the passed class.
    */
    function hasClass(el, className){
        if(el == null){
            return false;
        }
        if (el.classList){
            return el.classList.contains(className);
        }
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }

    /**
    * Gets the window height. Crossbrowser.
    */
    function getWindowHeight(){
        return 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    }

    /**
    * Gets the window width.
    */
    function getWindowWidth(){
        return window.innerWidth;
    }

    /**
    * Set's the CSS properties for the passed item/s.
    * @param {NodeList|HTMLElement} items
    * @param {Object} props css properties and values.
    */
    function css(items, props) {
        items = getList(items);

        var key;
        for (key in props) {
            if (props.hasOwnProperty(key)) {
                if (key !== null) {
                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];
                        item.style[key] = props[key];
                    }
                }
            }
        }

        return items;
    }

    /**
    * Generic function to get the previous or next element.
    */
    function until(item, selector, fn){
        var sibling = item[fn];
        while(sibling && !matches(sibling, selector)){
            sibling = sibling[fn];
        }

        return sibling;
    }

    /**
    * Gets the previous element to the passed element that matches the passed selector.
    */
    function prevUntil(item, selector){
        return until(item, selector, 'previousElementSibling');
    }

    /**
    * Gets the next element to the passed element that matches the passed selector.
    */
    function nextUntil(item, selector){
        return until(item, selector, 'nextElementSibling');
    }

    /**
    * Gets the previous element to the passed element.
    */
    function prev(item){
        return item.previousElementSibling;
    }

    /**
    * Gets the next element to the passed element.
    */
    function next(item){
        return item.nextElementSibling;
    }

    /**
    * Gets the last element from the passed list of elements.
    */
    function last(item){
        return item[item.length-1];
    }

    /**
    * Gets index from the passed element.
    * @param {String} selector is optional.
    */
    function index(item, selector) {
        item = isArrayOrList(item) ? item[0] : item;
        var children = selector != null? $(selector, item.parentNode) : item.parentNode.childNodes;
        var num = 0;
        for (var i=0; i<children.length; i++) {
             if (children[i] == item) return num;
             if (children[i].nodeType==1) num++;
        }
        return -1;
    }

    /**
    * Gets an iterable element for the passed element/s
    */
    function getList(item){
        return !isArrayOrList(item) ? [item] : item;
    }

    /**
    * Adds the display=none property for the passed element/s
    */
    function hide(el){
        el = getList(el);

        for(var i = 0; i<el.length; i++){
            el[i].style.display = 'none';
        }
        return el;
    }

    /**
    * Adds the display=block property for the passed element/s
    */
    function show(el){
        el = getList(el);

        for(var i = 0; i<el.length; i++){
            el[i].style.display = 'block';
        }
        return el;
    }

    /**
    * Checks if the passed element is an iterable element or not
    */
    function isArrayOrList(el){
        return Object.prototype.toString.call( el ) === '[object Array]' ||
            Object.prototype.toString.call( el ) === '[object NodeList]';
    }

    /**
    * Adds the passed class to the passed element/s
    */
    function addClass(el, className) {
        el = getList(el);

        for(var i = 0; i<el.length; i++){
            var item = el[i];
            if (item.classList){
                item.classList.add(className);
            }
            else{
              item.className += ' ' + className;
            }
        }
        return el;
    }

    /**
    * Removes the passed class to the passed element/s
    * @param {String} `className` can be multiple classnames separated by whitespace
    */
    function removeClass(el, className){
        el = getList(el);

        var classNames = className.split(' ');

        for(var a = 0; a<classNames.length; a++){
            className = classNames[a];
            for(var i = 0; i<el.length; i++){
                var item = el[i];
                if (item.classList){
                    item.classList.remove(className);
                }
                else{
                    item.className = item.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                }
            }
        }
        return el;
    }

    /**
    * Appends the given element ot the given parent.
    */
    function appendTo(el, parent){
        parent.appendChild(el);
    }

    /**
    Usage:

    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
    https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
    */
    function wrap(toWrap, wrapper, isWrapAll) {
        var newParent;
        wrapper = wrapper || document.createElement('div');
        for(var i = 0; i < toWrap.length; i++){
            var item = toWrap[i];
            if(isWrapAll && !i || !isWrapAll){
                newParent = wrapper.cloneNode(true);
                item.parentNode.insertBefore(newParent, item);
            }
            newParent.appendChild(item);
        }
        return toWrap;
    }

    /**
    Usage:
    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
    https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
    */
    function wrapAll(toWrap, wrapper) {
        wrap(toWrap, wrapper, true);
    }

    /**
    * Usage:
    * wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');
    * wrapInner(document.querySelector('#pepe'), element);
    *
    * https://jsfiddle.net/zexxz0tw/6/
    *
    * https://stackoverflow.com/a/21817590/1081396
    */
    function wrapInner(parent, wrapper) {
        if (typeof wrapper === "string"){
            wrapper = createElementFromHTML(wrapper);
        }

        parent.appendChild(wrapper);

        while(parent.firstChild !== wrapper){
            wrapper.appendChild(parent.firstChild);
       }
    }

    /**
    * Usage:
    * unwrap(document.querySelector('#pepe'));
    * unwrap(element);
    *
    * https://jsfiddle.net/szjt0hxq/1/
    *
    */
    function unwrap(wrapper) {
        var wrapperContent = document.createDocumentFragment();
        while (wrapper.firstChild) {
            wrapperContent.appendChild(wrapper.firstChild);
        }

        wrapper.parentNode.replaceChild(wrapperContent, wrapper);
    }

    /**
    * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
    * Returns the element or `false` if there's none
    */
    function closest(el, selector) {
        if(el && el.nodeType === 1){
            if(matches(el, selector)){
                return el;
            }
            return closest(el.parentNode, selector);
        }
        return null;
    }

    /**
    * Places one element (rel) after another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String} el
    * https://jsfiddle.net/9s97hhzv/1/
    */
    function after(reference, el) {
        insertBefore(reference, reference.nextSibling, el);
    }

    /**
    * Places one element (rel) before another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String} el
    * https://jsfiddle.net/9s97hhzv/1/
    */
    function before(reference, el) {
        insertBefore(reference, reference, el);
    }

    /**
    * Based in https://stackoverflow.com/a/19316024/1081396
    * and https://stackoverflow.com/a/4793630/1081396
    */
    function insertBefore(reference, beforeElement, el){
        if(!isArrayOrList(el)){
            if(typeof el == 'string'){
                el = createElementFromHTML(el);
            }
            el = [el];
        }

        for(var i = 0; i<el.length; i++){
            reference.parentNode.insertBefore(el[i], beforeElement);
        }
    }

    //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
    function getScrollTop(){
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    }

    /**
    * Gets the siblings of the passed element
    */
    function siblings(el){
        return Array.prototype.filter.call(el.parentNode.children, function(child){
          return child !== el;
        });
    }

    //for IE 9 ?
    function preventDefault(event){
        if(event.preventDefault){
            event.preventDefault();
        }
        else{
            event.returnValue = false;
        }
    }

    /**
    * Determines whether the passed item is of function type.
    */
    function isFunction(item) {
      if (typeof item === 'function') {
        return true;
      }
      var type = Object.prototype.toString(item);
      return type === '[object Function]' || type === '[object GeneratorFunction]';
    }

    /**
    * Trigger custom events
    */
    function trigger(el, eventName, data){
        var event;
        data = typeof data === 'undefined' ? {} : data;

        // Native
        if(typeof window.CustomEvent === "function" ){
            event = new CustomEvent(eventName, {detail: data});
        }
        else{
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, data);
        }

        el.dispatchEvent(event);
    }

    /**
    * Polyfill of .matches()
    */
    function matches(el, selector) {
        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    }

    /**
    * Toggles the visibility of the passed element el.
    */
    function toggle(el, value){
        if(typeof value === "boolean"){
            for(var i = 0; i<el.length; i++){
                el[i].style.display = value ? 'block' : 'none';
            }
        }
        //we don't use it in other way, so no else :)

        return el;
    }

    /**
    * Creates a HTMLElement from the passed HTML string.
    * https://stackoverflow.com/a/494348/1081396
    */
    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();

        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }

    /**
    * Removes the passed item/s from the DOM.
    */
    function remove(items){
        items = getList(items);
        for(var i = 0; i<items.length; i++){
            var item = items[i];
            if(item && item.parentElement) {
                item.parentNode.removeChild(item);
            }
        }
    }

    /**
    * Filters an array by the passed filter funtion.
    */
    function filter(el, filterFn){
        Array.prototype.filter.call(el, filterFn);
    }

    //https://jsfiddle.net/w1rktecz/
    function untilAll(item, selector, fn){
        var sibling = item[fn];
        var siblings = [];
        while(sibling){
            if(matches(sibling, selector) || selector == null) {
                siblings.push(sibling);
            }
            sibling = sibling[fn];
        }

        return siblings;
    }

    /**
    * Gets all next elements matching the passed selector.
    */
    function nextAll(item, selector){
        return untilAll(item, selector, 'nextElementSibling');
    }

    /**
    * Gets all previous elements matching the passed selector.
    */
    function prevAll(item, selector){
        return untilAll(item, selector, 'previousElementSibling');
    }

    /**
    * Converts an object to an array.
    */
    function toArray(objectData){
        return Object.keys(objectData).map(function(key) {
           return objectData[key];
        });
    }

    /**
    * forEach polyfill for IE
    * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
    */
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    //utils are public, so we can use it wherever we want
    window.fp_utils = {
        $: $,
        deepExtend: deepExtend,
        hasClass: hasClass,
        getWindowHeight: getWindowHeight,
        css: css,
        until: until,
        prevUntil: prevUntil,
        nextUntil: nextUntil,
        prev: prev,
        next: next,
        last: last,
        index: index,
        getList: getList,
        hide: hide,
        show: show,
        isArrayOrList: isArrayOrList,
        addClass: addClass,
        removeClass: removeClass,
        appendTo: appendTo,
        wrap: wrap,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        unwrap: unwrap,
        closest: closest,
        after: after,
        before: before,
        insertBefore: insertBefore,
        getScrollTop: getScrollTop,
        siblings: siblings,
        preventDefault: preventDefault,
        isFunction: isFunction,
        trigger: trigger,
        matches: matches,
        toggle: toggle,
        createElementFromHTML: createElementFromHTML,
        remove: remove,
        filter: filter,
        untilAll: untilAll,
        nextAll: nextAll,
        prevAll: prevAll,
        showError: showError
    };

    return initialise;
}));

/**
 * jQuery adapter for fullPage.js 3.0.0
 */
if(window.jQuery && window.fullpage){
    (function ($, fullpage) {
        'use strict';

        // No jQuery No Go
        if (!$ || !fullpage) {
            window.fp_utils.showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
            return;
        }

        $.fn.fullpage = function(options) {
            options = $.extend({}, options, {'$': $});
            var instance = new fullpage(this[0], options);
        };
    })(window.jQuery, window.fullpage);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/typed.js/lib/typed.js":
/*!********************************************!*\
  !*** ./node_modules/typed.js/lib/typed.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.11
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _initializerJs = __webpack_require__(1);
	
	var _htmlParserJs = __webpack_require__(3);
	
	/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */
	
	var Typed = (function () {
	  function Typed(elementId, options) {
	    _classCallCheck(this, Typed);
	
	    // Initialize it up
	    _initializerJs.initializer.load(this, options, elementId);
	    // All systems go!
	    this.begin();
	  }
	
	  /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */
	
	  _createClass(Typed, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.pause.status ? this.start() : this.stop();
	    }
	
	    /**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.typingComplete) return;
	      if (this.pause.status) return;
	      this.toggleBlinking(true);
	      this.pause.status = true;
	      this.options.onStop(this.arrayPos, this);
	    }
	
	    /**
	     * Start typing / backspacing after being stopped
	     * @public
	     */
	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.typingComplete) return;
	      if (!this.pause.status) return;
	      this.pause.status = false;
	      if (this.pause.typewrite) {
	        this.typewrite(this.pause.curString, this.pause.curStrPos);
	      } else {
	        this.backspace(this.pause.curString, this.pause.curStrPos);
	      }
	      this.options.onStart(this.arrayPos, this);
	    }
	
	    /**
	     * Destroy this instance of Typed
	     * @public
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset(false);
	      this.options.onDestroy(this);
	    }
	
	    /**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      clearInterval(this.timeout);
	      this.replaceText('');
	      if (this.cursor && this.cursor.parentNode) {
	        this.cursor.parentNode.removeChild(this.cursor);
	        this.cursor = null;
	      }
	      this.strPos = 0;
	      this.arrayPos = 0;
	      this.curLoop = 0;
	      if (restart) {
	        this.insertCursor();
	        this.options.onReset(this);
	        this.begin();
	      }
	    }
	
	    /**
	     * Begins the typing animation
	     * @private
	     */
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;
	
	      this.options.onBegin(this);
	      this.typingComplete = false;
	      this.shuffleStringsIfNeeded(this);
	      this.insertCursor();
	      if (this.bindInputFocusEvents) this.bindFocusEvents();
	      this.timeout = setTimeout(function () {
	        // Check if there is some text in the element, if yes start by backspacing the default message
	        if (!_this.currentElContent || _this.currentElContent.length === 0) {
	          _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
	        } else {
	          // Start typing
	          _this.backspace(_this.currentElContent, _this.currentElContent.length);
	        }
	      }, this.startDelay);
	    }
	
	    /**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'typewrite',
	    value: function typewrite(curString, curStrPos) {
	      var _this2 = this;
	
	      if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
	        this.el.classList.remove(this.fadeOutClass);
	        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
	      }
	
	      var humanize = this.humanizer(this.typeSpeed);
	      var numChars = 1;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	
	      // contain typing function in a timeout humanize'd delay
	      this.timeout = setTimeout(function () {
	        // skip over any HTML chars
	        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
	
	        var pauseTime = 0;
	        var substr = curString.substr(curStrPos);
	        // check for an escape character before a pause value
	        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	        // single ^ are removed from string
	        if (substr.charAt(0) === '^') {
	          if (/^\^\d+/.test(substr)) {
	            var skip = 1; // skip at least 1
	            substr = /\d+/.exec(substr)[0];
	            skip += substr.length;
	            pauseTime = parseInt(substr);
	            _this2.temporaryPause = true;
	            _this2.options.onTypingPaused(_this2.arrayPos, _this2);
	            // strip out the escape character and pause value so they're not printed
	            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	            _this2.toggleBlinking(true);
	          }
	        }
	
	        // check for skip characters formatted as
	        // "this is a `string to print NOW` ..."
	        if (substr.charAt(0) === '`') {
	          while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
	            numChars++;
	            if (curStrPos + numChars > curString.length) break;
	          }
	          // strip out the escape characters and append all the string in between
	          var stringBeforeSkip = curString.substring(0, curStrPos);
	          var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
	          var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
	          curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
	          numChars--;
	        }
	
	        // timeout for any pause after a character
	        _this2.timeout = setTimeout(function () {
	          // Accounts for blinking while paused
	          _this2.toggleBlinking(false);
	
	          // We're done with this sentence!
	          if (curStrPos >= curString.length) {
	            _this2.doneTyping(curString, curStrPos);
	          } else {
	            _this2.keepTyping(curString, curStrPos, numChars);
	          }
	          // end of character pause
	          if (_this2.temporaryPause) {
	            _this2.temporaryPause = false;
	            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
	          }
	        }, pauseTime);
	
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'keepTyping',
	    value: function keepTyping(curString, curStrPos, numChars) {
	      // call before functions if applicable
	      if (curStrPos === 0) {
	        this.toggleBlinking(false);
	        this.options.preStringTyped(this.arrayPos, this);
	      }
	      // start typing each new char into existing string
	      // curString: arg, this.el.html: original text inside element
	      curStrPos += numChars;
	      var nextString = curString.substr(0, curStrPos);
	      this.replaceText(nextString);
	      // loop the function
	      this.typewrite(curString, curStrPos);
	    }
	
	    /**
	     * We're done typing the current string
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'doneTyping',
	    value: function doneTyping(curString, curStrPos) {
	      var _this3 = this;
	
	      // fires callback function
	      this.options.onStringTyped(this.arrayPos, this);
	      this.toggleBlinking(true);
	      // is this the final string
	      if (this.arrayPos === this.strings.length - 1) {
	        // callback that occurs on the last typed string
	        this.complete();
	        // quit if we wont loop back
	        if (this.loop === false || this.curLoop === this.loopCount) {
	          return;
	        }
	      }
	      this.timeout = setTimeout(function () {
	        _this3.backspace(curString, curStrPos);
	      }, this.backDelay);
	    }
	
	    /**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'backspace',
	    value: function backspace(curString, curStrPos) {
	      var _this4 = this;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	      if (this.fadeOut) return this.initFadeOut();
	
	      this.toggleBlinking(false);
	      var humanize = this.humanizer(this.backSpeed);
	
	      this.timeout = setTimeout(function () {
	        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
	        // replace text with base text + typed characters
	        var curStringAtPosition = curString.substr(0, curStrPos);
	        _this4.replaceText(curStringAtPosition);
	
	        // if smartBack is enabled
	        if (_this4.smartBackspace) {
	          // the remaining part of the current string is equal of the same part of the new string
	          var nextString = _this4.strings[_this4.arrayPos + 1];
	          if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
	            _this4.stopNum = curStrPos;
	          } else {
	            _this4.stopNum = 0;
	          }
	        }
	
	        // if the number (id of character in current string) is
	        // less than the stop number, keep going
	        if (curStrPos > _this4.stopNum) {
	          // subtract characters one by one
	          curStrPos--;
	          // loop the function
	          _this4.backspace(curString, curStrPos);
	        } else if (curStrPos <= _this4.stopNum) {
	          // if the stop number has been reached, increase
	          // array position to next string
	          _this4.arrayPos++;
	          // When looping, begin at the beginning after backspace complete
	          if (_this4.arrayPos === _this4.strings.length) {
	            _this4.arrayPos = 0;
	            _this4.options.onLastStringBackspaced();
	            _this4.shuffleStringsIfNeeded();
	            _this4.begin();
	          } else {
	            _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
	          }
	        }
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Full animation is complete
	     * @private
	     */
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.options.onComplete(this);
	      if (this.loop) {
	        this.curLoop++;
	      } else {
	        this.typingComplete = true;
	      }
	    }
	
	    /**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */
	  }, {
	    key: 'setPauseStatus',
	    value: function setPauseStatus(curString, curStrPos, isTyping) {
	      this.pause.typewrite = isTyping;
	      this.pause.curString = curString;
	      this.pause.curStrPos = curStrPos;
	    }
	
	    /**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */
	  }, {
	    key: 'toggleBlinking',
	    value: function toggleBlinking(isBlinking) {
	      if (!this.cursor) return;
	      // if in paused state, don't toggle blinking a 2nd time
	      if (this.pause.status) return;
	      if (this.cursorBlinking === isBlinking) return;
	      this.cursorBlinking = isBlinking;
	      if (isBlinking) {
	        this.cursor.classList.add('typed-cursor--blink');
	      } else {
	        this.cursor.classList.remove('typed-cursor--blink');
	      }
	    }
	
	    /**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */
	  }, {
	    key: 'humanizer',
	    value: function humanizer(speed) {
	      return Math.round(Math.random() * speed / 2) + speed;
	    }
	
	    /**
	     * Shuffle the sequence of the strings array
	     * @private
	     */
	  }, {
	    key: 'shuffleStringsIfNeeded',
	    value: function shuffleStringsIfNeeded() {
	      if (!this.shuffle) return;
	      this.sequence = this.sequence.sort(function () {
	        return Math.random() - 0.5;
	      });
	    }
	
	    /**
	     * Adds a CSS class to fade out current string
	     * @private
	     */
	  }, {
	    key: 'initFadeOut',
	    value: function initFadeOut() {
	      var _this5 = this;
	
	      this.el.className += ' ' + this.fadeOutClass;
	      if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
	      return setTimeout(function () {
	        _this5.arrayPos++;
	        _this5.replaceText('');
	
	        // Resets current string if end of loop reached
	        if (_this5.strings.length > _this5.arrayPos) {
	          _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
	        } else {
	          _this5.typewrite(_this5.strings[0], 0);
	          _this5.arrayPos = 0;
	        }
	      }, this.fadeOutDelay);
	    }
	
	    /**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */
	  }, {
	    key: 'replaceText',
	    value: function replaceText(str) {
	      if (this.attr) {
	        this.el.setAttribute(this.attr, str);
	      } else {
	        if (this.isInput) {
	          this.el.value = str;
	        } else if (this.contentType === 'html') {
	          this.el.innerHTML = str;
	        } else {
	          this.el.textContent = str;
	        }
	      }
	    }
	
	    /**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */
	  }, {
	    key: 'bindFocusEvents',
	    value: function bindFocusEvents() {
	      var _this6 = this;
	
	      if (!this.isInput) return;
	      this.el.addEventListener('focus', function (e) {
	        _this6.stop();
	      });
	      this.el.addEventListener('blur', function (e) {
	        if (_this6.el.value && _this6.el.value.length !== 0) {
	          return;
	        }
	        _this6.start();
	      });
	    }
	
	    /**
	     * On init, insert the cursor element
	     * @private
	     */
	  }, {
	    key: 'insertCursor',
	    value: function insertCursor() {
	      if (!this.showCursor) return;
	      if (this.cursor) return;
	      this.cursor = document.createElement('span');
	      this.cursor.className = 'typed-cursor';
	      this.cursor.innerHTML = this.cursorChar;
	      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
	    }
	  }]);
	
	  return Typed;
	})();
	
	exports['default'] = Typed;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _defaultsJs = __webpack_require__(2);
	
	var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
	
	/**
	 * Initialize the Typed object
	 */
	
	var Initializer = (function () {
	  function Initializer() {
	    _classCallCheck(this, Initializer);
	  }
	
	  _createClass(Initializer, [{
	    key: 'load',
	
	    /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */
	
	    value: function load(self, options, elementId) {
	      // chosen element to manipulate text
	      if (typeof elementId === 'string') {
	        self.el = document.querySelector(elementId);
	      } else {
	        self.el = elementId;
	      }
	
	      self.options = _extends({}, _defaultsJs2['default'], options);
	
	      // attribute to type into
	      self.isInput = self.el.tagName.toLowerCase() === 'input';
	      self.attr = self.options.attr;
	      self.bindInputFocusEvents = self.options.bindInputFocusEvents;
	
	      // show cursor
	      self.showCursor = self.isInput ? false : self.options.showCursor;
	
	      // custom cursor
	      self.cursorChar = self.options.cursorChar;
	
	      // Is the cursor blinking
	      self.cursorBlinking = true;
	
	      // text content of element
	      self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
	
	      // html or plain text
	      self.contentType = self.options.contentType;
	
	      // typing speed
	      self.typeSpeed = self.options.typeSpeed;
	
	      // add a delay before typing starts
	      self.startDelay = self.options.startDelay;
	
	      // backspacing speed
	      self.backSpeed = self.options.backSpeed;
	
	      // only backspace what doesn't match the previous string
	      self.smartBackspace = self.options.smartBackspace;
	
	      // amount of time to wait before backspacing
	      self.backDelay = self.options.backDelay;
	
	      // Fade out instead of backspace
	      self.fadeOut = self.options.fadeOut;
	      self.fadeOutClass = self.options.fadeOutClass;
	      self.fadeOutDelay = self.options.fadeOutDelay;
	
	      // variable to check whether typing is currently paused
	      self.isPaused = false;
	
	      // input strings of text
	      self.strings = self.options.strings.map(function (s) {
	        return s.trim();
	      });
	
	      // div containing strings
	      if (typeof self.options.stringsElement === 'string') {
	        self.stringsElement = document.querySelector(self.options.stringsElement);
	      } else {
	        self.stringsElement = self.options.stringsElement;
	      }
	
	      if (self.stringsElement) {
	        self.strings = [];
	        self.stringsElement.style.display = 'none';
	        var strings = Array.prototype.slice.apply(self.stringsElement.children);
	        var stringsLength = strings.length;
	
	        if (stringsLength) {
	          for (var i = 0; i < stringsLength; i += 1) {
	            var stringEl = strings[i];
	            self.strings.push(stringEl.innerHTML.trim());
	          }
	        }
	      }
	
	      // character number position of current string
	      self.strPos = 0;
	
	      // current array position
	      self.arrayPos = 0;
	
	      // index of string to stop backspacing on
	      self.stopNum = 0;
	
	      // Looping logic
	      self.loop = self.options.loop;
	      self.loopCount = self.options.loopCount;
	      self.curLoop = 0;
	
	      // shuffle the strings
	      self.shuffle = self.options.shuffle;
	      // the order of strings
	      self.sequence = [];
	
	      self.pause = {
	        status: false,
	        typewrite: true,
	        curString: '',
	        curStrPos: 0
	      };
	
	      // When the typing is complete (when not looped)
	      self.typingComplete = false;
	
	      // Set the order in which the strings are typed
	      for (var i in self.strings) {
	        self.sequence[i] = i;
	      }
	
	      // If there is some text in the element
	      self.currentElContent = this.getCurrentElContent(self);
	
	      self.autoInsertCss = self.options.autoInsertCss;
	
	      this.appendAnimationCss(self);
	    }
	  }, {
	    key: 'getCurrentElContent',
	    value: function getCurrentElContent(self) {
	      var elContent = '';
	      if (self.attr) {
	        elContent = self.el.getAttribute(self.attr);
	      } else if (self.isInput) {
	        elContent = self.el.value;
	      } else if (self.contentType === 'html') {
	        elContent = self.el.innerHTML;
	      } else {
	        elContent = self.el.textContent;
	      }
	      return elContent;
	    }
	  }, {
	    key: 'appendAnimationCss',
	    value: function appendAnimationCss(self) {
	      var cssDataName = 'data-typed-js-css';
	      if (!self.autoInsertCss) {
	        return;
	      }
	      if (!self.showCursor && !self.fadeOut) {
	        return;
	      }
	      if (document.querySelector('[' + cssDataName + ']')) {
	        return;
	      }
	
	      var css = document.createElement('style');
	      css.type = 'text/css';
	      css.setAttribute(cssDataName, true);
	
	      var innerCss = '';
	      if (self.showCursor) {
	        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
	      }
	      if (self.fadeOut) {
	        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';
	      }
	      if (css.length === 0) {
	        return;
	      }
	      css.innerHTML = innerCss;
	      document.body.appendChild(css);
	    }
	  }]);
	
	  return Initializer;
	})();
	
	exports['default'] = Initializer;
	var initializer = new Initializer();
	exports.initializer = initializer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaults = {
	  /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */
	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
	  stringsElement: null,
	
	  /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */
	  typeSpeed: 0,
	
	  /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */
	  startDelay: 0,
	
	  /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */
	  backSpeed: 0,
	
	  /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */
	  smartBackspace: true,
	
	  /**
	   * @property {boolean} shuffle shuffle the strings
	   */
	  shuffle: false,
	
	  /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */
	  backDelay: 700,
	
	  /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */
	  fadeOut: false,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	
	  /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */
	  loop: false,
	  loopCount: Infinity,
	
	  /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */
	  showCursor: true,
	  cursorChar: '|',
	  autoInsertCss: true,
	
	  /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */
	  attr: null,
	
	  /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */
	  bindInputFocusEvents: false,
	
	  /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */
	  contentType: 'html',
	
	  /**
	   * Before it begins typing
	   * @param {Typed} self
	   */
	  onBegin: function onBegin(self) {},
	
	  /**
	   * All typing is complete
	   * @param {Typed} self
	   */
	  onComplete: function onComplete(self) {},
	
	  /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  preStringTyped: function preStringTyped(arrayPos, self) {},
	
	  /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStringTyped: function onStringTyped(arrayPos, self) {},
	
	  /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */
	  onLastStringBackspaced: function onLastStringBackspaced(self) {},
	
	  /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingPaused: function onTypingPaused(arrayPos, self) {},
	
	  /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingResumed: function onTypingResumed(arrayPos, self) {},
	
	  /**
	   * After reset
	   * @param {Typed} self
	   */
	  onReset: function onReset(self) {},
	
	  /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStop: function onStop(arrayPos, self) {},
	
	  /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStart: function onStart(arrayPos, self) {},
	
	  /**
	   * After destroy
	   * @param {Typed} self
	   */
	  onDestroy: function onDestroy(self) {}
	};
	
	exports['default'] = defaults;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HTMLParser = (function () {
	  function HTMLParser() {
	    _classCallCheck(this, HTMLParser);
	  }
	
	  _createClass(HTMLParser, [{
	    key: 'typeHtmlChars',
	
	    /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	
	    value: function typeHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '<' || curChar === '&') {
	        var endTag = '';
	        if (curChar === '<') {
	          endTag = '>';
	        } else {
	          endTag = ';';
	        }
	        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	          curStrPos++;
	          if (curStrPos + 1 > curString.length) {
	            break;
	          }
	        }
	        curStrPos++;
	      }
	      return curStrPos;
	    }
	
	    /**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	  }, {
	    key: 'backSpaceHtmlChars',
	    value: function backSpaceHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '>' || curChar === ';') {
	        var endTag = '';
	        if (curChar === '>') {
	          endTag = '<';
	        } else {
	          endTag = '&';
	        }
	        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
	          curStrPos--;
	          if (curStrPos < 0) {
	            break;
	          }
	        }
	        curStrPos--;
	      }
	      return curStrPos;
	    }
	  }]);
	
	  return HTMLParser;
	})();
	
	exports['default'] = HTMLParser;
	var htmlParser = new HTMLParser();
	exports.htmlParser = htmlParser;

/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var fullpage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fullpage.js */ "./node_modules/fullpage.js/dist/fullpage.js");
/* harmony import */ var fullpage_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fullpage_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reset_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_fullpage_js_dist_fullpage_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/fullpage.js/dist/fullpage.css */ "./node_modules/fullpage.js/dist/fullpage.css");
/* harmony import */ var _node_modules_fullpage_js_dist_fullpage_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fullpage_js_dist_fullpage_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);








// import './fonts/fonts.css'

const coverText = document.querySelector('.coverText');
const mySkills = document.querySelector('.mySkills');
const contact = document.querySelector('div.contact');
const popup = document.querySelector('.popupBackground');

contact.addEventListener('click', onContactClick);
popup.addEventListener('click', onPopupBackgroundClick)

init();

function init() {
    initTypedText();
    initPageScroll();
}

function onContactClick() {
    showPopup();
    popupAnime(1);
};

function onPopupBackgroundClick(e) {
    if(e.target.classList.contains('popupBackground')) {
        popupAnime(0, hidePopup);
    }
}

function hidePopup() {
    popup.classList.remove('showPopup');
}

function showPopup() {
    popup.classList.add('showPopup');
}

function initTypedText() {
    var typed = new typed_js__WEBPACK_IMPORTED_MODULE_0___default.a('.mainText', {
        strings: 
        ['<span class="text"> Hi! </span> <span class="text"> My name is Dima. </span> <span class="text"> And I am Frontend developer. </span>'],
        typeSpeed: 50,
        showCursor: false
    });
};

function initPageScroll() {
    new fullpage_js__WEBPACK_IMPORTED_MODULE_2___default.a('#fullpage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'right',
        fixedElements: 'nav',
        afterLoad: function(origin, destination, direction) {
            if (destination.index === 1) {
                // animeSkills(1);
            } else if (destination.index === 2) {
                // animeTechnologies(1);
            }
        }
    });
    fullpage_api.setAllowScrolling(true);
};

function animeSkills(opacity) {
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
        targets: ['.firstEl', '.secondEl', '.thirdEl'],
        easing: 'easeInOutExpo',
        opacity: opacity,
        translateX: '185%',
        delay: animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"].stagger(500, {easing: 'easeInOutExpo'}),
        direction: 'normal',
    });
};

function popupAnime(opacity, completeFunction) {
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
        targets: popup,
        easing: 'easeInOutExpo',
        direction: 'normal',
        opacity: opacity,
        complete: completeFunction,
    });
};

function animeTechnologies(opacity) {
    Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
        targets: ['.technologiesList'],
        width: '60%',
        easing: 'easeInOutExpo',
        direction: 'normal',
        opacity: opacity,
    });
};



/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW1nL0Zyb250RW5kQmFzaWMucG5nIiwid2VicGFjazovLy8uL2ltZy9Gcm9udEVuZFByby5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1nL0lNR180NzI0LkpQRyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWVqcy9saWIvYW5pbWUuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuY3NzIiwid2VicGFjazovLy8uL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuY3NzPzMzOGUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90eXBlZC5qcy9saWIvdHlwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzZXQuY3NzP2VkZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFD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LDBCOzs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUEwQztBQUNsRDtBQUNBLFFBQVEsbUNBQVE7QUFDaEI7QUFDQTtBQUNBLFNBQVM7QUFBQSxvR0FBRTtBQUNYLEtBQUssTUFBTSxFQU1OO0FBQ0wsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLDJEQUEyRCxHQUFHOztBQUVwSTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxtQkFBbUIsUUFBUTs7QUFFaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBRUEsMkJBQTJCLDJCQUEyQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsa0VBQWtFOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLHFCQUFxQjtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVEsRUFBRTs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9KQUFvSixRQUFROztBQUU1SjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsTUFBSzs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix5QkFBeUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLCtDQUErQzs7QUFFckU7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsZUFBZTtBQUMxRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRixnRkFBZ0Y7QUFDaEYsOEZBQThGO0FBQzlGLGFBQWE7QUFDYix3RUFBd0U7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxvREFBb0QsZ0JBQWdCOztBQUVwRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsZUFBZTtBQUNqRywrRUFBK0UsZUFBZTtBQUM5Rjs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXNGLGVBQWU7O0FBRXJHO0FBQ0EsbUZBQW1GLGVBQWU7QUFDbEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRixlQUFlO0FBQ2xHLGtGQUFrRixlQUFlO0FBQ2pHOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YsZUFBZTtBQUNyRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDBCQUEwQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxtRkFBbUY7QUFDbkYsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLFlBQVksT0FBTztBQUNwRDtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDeG1JYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLCtDQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsUUFBUSxrREFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLElBQUksdUVBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQUssZUFBZSx3QkFBd0I7QUFDM0Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLHVFQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLElBQUksdUVBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDbkdBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsa0hBQXNEOztBQUV4Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7QUNwQkEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxrSEFBc0Q7O0FBRXhGOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NjkzYWQ0OTMwNDQ2YTE5YjAzM2ViMmJiYTQ4OWFlNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYWQ5ZjdiOWQwYTNlN2I5ZTM0Y2I5MGM4YTZkNDAyNjMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI0ZjBjOWFhMzM5NTU0NDJjY2ViN2NmMmQ3ZTc2ZTM1LkpQR1wiOyIsIi8qXG4gKiBhbmltZS5qcyB2My4xLjBcbiAqIChjKSAyMDE5IEp1bGlhbiBHYXJuaWVyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGFuaW1lanMuY29tXG4gKi9cblxuLy8gRGVmYXVsdHNcblxudmFyIGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzID0ge1xuICB1cGRhdGU6IG51bGwsXG4gIGJlZ2luOiBudWxsLFxuICBsb29wQmVnaW46IG51bGwsXG4gIGNoYW5nZUJlZ2luOiBudWxsLFxuICBjaGFuZ2U6IG51bGwsXG4gIGNoYW5nZUNvbXBsZXRlOiBudWxsLFxuICBsb29wQ29tcGxldGU6IG51bGwsXG4gIGNvbXBsZXRlOiBudWxsLFxuICBsb29wOiAxLFxuICBkaXJlY3Rpb246ICdub3JtYWwnLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgdGltZWxpbmVPZmZzZXQ6IDBcbn07XG5cbnZhciBkZWZhdWx0VHdlZW5TZXR0aW5ncyA9IHtcbiAgZHVyYXRpb246IDEwMDAsXG4gIGRlbGF5OiAwLFxuICBlbmREZWxheTogMCxcbiAgZWFzaW5nOiAnZWFzZU91dEVsYXN0aWMoMSwgLjUpJyxcbiAgcm91bmQ6IDBcbn07XG5cbnZhciB2YWxpZFRyYW5zZm9ybXMgPSBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICd0cmFuc2xhdGVaJywgJ3JvdGF0ZScsICdyb3RhdGVYJywgJ3JvdGF0ZVknLCAncm90YXRlWicsICdzY2FsZScsICdzY2FsZVgnLCAnc2NhbGVZJywgJ3NjYWxlWicsICdza2V3JywgJ3NrZXdYJywgJ3NrZXdZJywgJ3BlcnNwZWN0aXZlJ107XG5cbi8vIENhY2hpbmdcblxudmFyIGNhY2hlID0ge1xuICBDU1M6IHt9LFxuICBzcHJpbmdzOiB7fVxufTtcblxuLy8gVXRpbHNcblxuZnVuY3Rpb24gbWluTWF4KHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nQ29udGFpbnMoc3RyLCB0ZXh0KSB7XG4gIHJldHVybiBzdHIuaW5kZXhPZih0ZXh0KSA+IC0xO1xufVxuXG5mdW5jdGlvbiBhcHBseUFyZ3VtZW50cyhmdW5jLCBhcmdzKSB7XG4gIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xufVxuXG52YXIgaXMgPSB7XG4gIGFycjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSk7IH0sXG4gIG9iajogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHN0cmluZ0NvbnRhaW5zKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSwgJ09iamVjdCcpOyB9LFxuICBwdGg6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKTsgfSxcbiAgc3ZnOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7IH0sXG4gIGlucDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50OyB9LFxuICBkb206IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKTsgfSxcbiAgc3RyOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICdzdHJpbmcnOyB9LFxuICBmbmM6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJzsgfSxcbiAgdW5kOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnOyB9LFxuICBoZXg6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKTsgfSxcbiAgcmdiOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gL15yZ2IvLnRlc3QoYSk7IH0sXG4gIGhzbDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC9eaHNsLy50ZXN0KGEpOyB9LFxuICBjb2w6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAoaXMuaGV4KGEpIHx8IGlzLnJnYihhKSB8fCBpcy5oc2woYSkpOyB9LFxuICBrZXk6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAhZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgIWRlZmF1bHRUd2VlblNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmIGEgIT09ICd0YXJnZXRzJyAmJiBhICE9PSAna2V5ZnJhbWVzJzsgfVxufTtcblxuLy8gRWFzaW5nc1xuXG5mdW5jdGlvbiBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoc3RyaW5nKSB7XG4gIHZhciBtYXRjaCA9IC9cXCgoW14pXSspXFwpLy5leGVjKHN0cmluZyk7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwYXJzZUZsb2F0KHApOyB9KSA6IFtdO1xufVxuXG4vLyBTcHJpbmcgc29sdmVyIGluc3BpcmVkIGJ5IFdlYmtpdCBDb3B5cmlnaHQgwqkgMjAxNiBBcHBsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIGh0dHBzOi8vd2Via2l0Lm9yZy9kZW1vcy9zcHJpbmcvc3ByaW5nLmpzXG5cbmZ1bmN0aW9uIHNwcmluZyhzdHJpbmcsIGR1cmF0aW9uKSB7XG5cbiAgdmFyIHBhcmFtcyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpO1xuICB2YXIgbWFzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzBdKSA/IDEgOiBwYXJhbXNbMF0sIC4xLCAxMDApO1xuICB2YXIgc3RpZmZuZXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMV0pID8gMTAwIDogcGFyYW1zWzFdLCAuMSwgMTAwKTtcbiAgdmFyIGRhbXBpbmcgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1syXSkgPyAxMCA6IHBhcmFtc1syXSwgLjEsIDEwMCk7XG4gIHZhciB2ZWxvY2l0eSA9ICBtaW5NYXgoaXMudW5kKHBhcmFtc1szXSkgPyAwIDogcGFyYW1zWzNdLCAuMSwgMTAwKTtcbiAgdmFyIHcwID0gTWF0aC5zcXJ0KHN0aWZmbmVzcyAvIG1hc3MpO1xuICB2YXIgemV0YSA9IGRhbXBpbmcgLyAoMiAqIE1hdGguc3FydChzdGlmZm5lc3MgKiBtYXNzKSk7XG4gIHZhciB3ZCA9IHpldGEgPCAxID8gdzAgKiBNYXRoLnNxcnQoMSAtIHpldGEgKiB6ZXRhKSA6IDA7XG4gIHZhciBhID0gMTtcbiAgdmFyIGIgPSB6ZXRhIDwgMSA/ICh6ZXRhICogdzAgKyAtdmVsb2NpdHkpIC8gd2QgOiAtdmVsb2NpdHkgKyB3MDtcblxuICBmdW5jdGlvbiBzb2x2ZXIodCkge1xuICAgIHZhciBwcm9ncmVzcyA9IGR1cmF0aW9uID8gKGR1cmF0aW9uICogdCkgLyAxMDAwIDogdDtcbiAgICBpZiAoemV0YSA8IDEpIHtcbiAgICAgIHByb2dyZXNzID0gTWF0aC5leHAoLXByb2dyZXNzICogemV0YSAqIHcwKSAqIChhICogTWF0aC5jb3Mod2QgKiBwcm9ncmVzcykgKyBiICogTWF0aC5zaW4od2QgKiBwcm9ncmVzcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9ncmVzcyA9IChhICsgYiAqIHByb2dyZXNzKSAqIE1hdGguZXhwKC1wcm9ncmVzcyAqIHcwKTtcbiAgICB9XG4gICAgaWYgKHQgPT09IDAgfHwgdCA9PT0gMSkgeyByZXR1cm4gdDsgfVxuICAgIHJldHVybiAxIC0gcHJvZ3Jlc3M7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICB2YXIgY2FjaGVkID0gY2FjaGUuc3ByaW5nc1tzdHJpbmddO1xuICAgIGlmIChjYWNoZWQpIHsgcmV0dXJuIGNhY2hlZDsgfVxuICAgIHZhciBmcmFtZSA9IDEvNjtcbiAgICB2YXIgZWxhcHNlZCA9IDA7XG4gICAgdmFyIHJlc3QgPSAwO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIGVsYXBzZWQgKz0gZnJhbWU7XG4gICAgICBpZiAoc29sdmVyKGVsYXBzZWQpID09PSAxKSB7XG4gICAgICAgIHJlc3QrKztcbiAgICAgICAgaWYgKHJlc3QgPj0gMTYpIHsgYnJlYWs7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3QgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZHVyYXRpb24gPSBlbGFwc2VkICogZnJhbWUgKiAxMDAwO1xuICAgIGNhY2hlLnNwcmluZ3Nbc3RyaW5nXSA9IGR1cmF0aW9uO1xuICAgIHJldHVybiBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiBkdXJhdGlvbiA/IHNvbHZlciA6IGdldER1cmF0aW9uO1xuXG59XG5cbi8vIEJhc2ljIHN0ZXBzIGVhc2luZyBpbXBsZW1lbnRhdGlvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cblxuZnVuY3Rpb24gc3RlcHMoc3RlcHMpIHtcbiAgaWYgKCBzdGVwcyA9PT0gdm9pZCAwICkgc3RlcHMgPSAxMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIE1hdGgucm91bmQodCAqIHN0ZXBzKSAqICgxIC8gc3RlcHMpOyB9O1xufVxuXG4vLyBCZXppZXJFYXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXG5cbnZhciBiZXppZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gIHZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XG4gIHZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XG5cbiAgZnVuY3Rpb24gQShhQTEsIGFBMikgeyByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExIH1cbiAgZnVuY3Rpb24gQihhQTEsIGFBMikgeyByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExIH1cbiAgZnVuY3Rpb24gQyhhQTEpICAgICAgeyByZXR1cm4gMy4wICogYUExIH1cblxuICBmdW5jdGlvbiBjYWxjQmV6aWVyKGFULCBhQTEsIGFBMikgeyByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQgfVxuICBmdW5jdGlvbiBnZXRTbG9wZShhVCwgYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSkgfVxuXG4gIGZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZShhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xuICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICAgIGRvIHtcbiAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7IGFCID0gY3VycmVudFQ7IH0gZWxzZSB7IGFBID0gY3VycmVudFQ7IH1cbiAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiAwLjAwMDAwMDEgJiYgKytpIDwgMTApO1xuICAgIHJldHVybiBjdXJyZW50VDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7IHJldHVybiBhR3Vlc3NUOyB9XG4gICAgICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICB9XG4gICAgcmV0dXJuIGFHdWVzc1Q7XG4gIH1cblxuICBmdW5jdGlvbiBiZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG5cbiAgICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHsgcmV0dXJuOyB9XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XG5cbiAgICBpZiAobVgxICE9PSBtWTEgfHwgbVgyICE9PSBtWTIpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XG4gICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRGb3JYKGFYKSB7XG5cbiAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMDtcbiAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG5cbiAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgICAgfVxuXG4gICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgIHZhciBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcblxuICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSAwLjAwMSkge1xuICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHsgcmV0dXJuIHg7IH1cbiAgICAgIGlmICh4ID09PSAwIHx8IHggPT09IDEpIHsgcmV0dXJuIHg7IH1cbiAgICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gYmV6aWVyO1xuXG59KSgpO1xuXG52YXIgcGVubmVyID0gKGZ1bmN0aW9uICgpIHtcblxuICAvLyBCYXNlZCBvbiBqUXVlcnkgVUkncyBpbXBsZW1lbmF0aW9uIG9mIGVhc2luZyBlcXVhdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyIChodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nKVxuXG4gIHZhciBlYXNlcyA9IHsgbGluZWFyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTsgfSB9O1xuXG4gIHZhciBmdW5jdGlvbkVhc2luZ3MgPSB7XG4gICAgU2luZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBNYXRoLmNvcyh0ICogTWF0aC5QSSAvIDIpOyB9OyB9LFxuICAgIENpcmM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCk7IH07IH0sXG4gICAgQmFjazogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgKiB0ICogKDMgKiB0IC0gMik7IH07IH0sXG4gICAgQm91bmNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIHBvdzIsIGIgPSA0O1xuICAgICAgd2hpbGUgKHQgPCAoKCBwb3cyID0gTWF0aC5wb3coMiwgLS1iKSkgLSAxKSAvIDExKSB7fVxuICAgICAgcmV0dXJuIDEgLyBNYXRoLnBvdyg0LCAzIC0gYikgLSA3LjU2MjUgKiBNYXRoLnBvdygoIHBvdzIgKiAzIC0gMiApIC8gMjIgLSB0LCAyKVxuICAgIH07IH0sXG4gICAgRWxhc3RpYzogZnVuY3Rpb24gKGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gICAgICBpZiAoIGFtcGxpdHVkZSA9PT0gdm9pZCAwICkgYW1wbGl0dWRlID0gMTtcbiAgICAgIGlmICggcGVyaW9kID09PSB2b2lkIDAgKSBwZXJpb2QgPSAuNTtcblxuICAgICAgdmFyIGEgPSBtaW5NYXgoYW1wbGl0dWRlLCAxLCAxMCk7XG4gICAgICB2YXIgcCA9IG1pbk1heChwZXJpb2QsIC4xLCAyKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gKHQgPT09IDAgfHwgdCA9PT0gMSkgPyB0IDogXG4gICAgICAgICAgLWEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICogTWF0aC5zaW4oKCgodCAtIDEpIC0gKHAgLyAoTWF0aC5QSSAqIDIpICogTWF0aC5hc2luKDEgLyBhKSkpICogKE1hdGguUEkgKiAyKSkgLyBwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGJhc2VFYXNpbmdzID0gWydRdWFkJywgJ0N1YmljJywgJ1F1YXJ0JywgJ1F1aW50JywgJ0V4cG8nXTtcblxuICBiYXNlRWFzaW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpKSB7XG4gICAgZnVuY3Rpb25FYXNpbmdzW25hbWVdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIE1hdGgucG93KHQsIGkgKyAyKTsgfTsgfTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoZnVuY3Rpb25FYXNpbmdzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGVhc2VJbiA9IGZ1bmN0aW9uRWFzaW5nc1tuYW1lXTtcbiAgICBlYXNlc1snZWFzZUluJyArIG5hbWVdID0gZWFzZUluO1xuICAgIGVhc2VzWydlYXNlT3V0JyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gZWFzZUluKGEsIGIpKDEgLSB0KTsgfTsgfTtcbiAgICBlYXNlc1snZWFzZUluT3V0JyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0IDwgMC41ID8gZWFzZUluKGEsIGIpKHQgKiAyKSAvIDIgOiBcbiAgICAgIDEgLSBlYXNlSW4oYSwgYikodCAqIC0yICsgMikgLyAyOyB9OyB9O1xuICB9KTtcblxuICByZXR1cm4gZWFzZXM7XG5cbn0pKCk7XG5cbmZ1bmN0aW9uIHBhcnNlRWFzaW5ncyhlYXNpbmcsIGR1cmF0aW9uKSB7XG4gIGlmIChpcy5mbmMoZWFzaW5nKSkgeyByZXR1cm4gZWFzaW5nOyB9XG4gIHZhciBuYW1lID0gZWFzaW5nLnNwbGl0KCcoJylbMF07XG4gIHZhciBlYXNlID0gcGVubmVyW25hbWVdO1xuICB2YXIgYXJncyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhlYXNpbmcpO1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlICdzcHJpbmcnIDogcmV0dXJuIHNwcmluZyhlYXNpbmcsIGR1cmF0aW9uKTtcbiAgICBjYXNlICdjdWJpY0JlemllcicgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoYmV6aWVyLCBhcmdzKTtcbiAgICBjYXNlICdzdGVwcycgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoc3RlcHMsIGFyZ3MpO1xuICAgIGRlZmF1bHQgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoZWFzZSwgYXJncyk7XG4gIH1cbn1cblxuLy8gU3RyaW5nc1xuXG5mdW5jdGlvbiBzZWxlY3RTdHJpbmcoc3RyKSB7XG4gIHRyeSB7XG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzdHIpO1xuICAgIHJldHVybiBub2RlcztcbiAgfSBjYXRjaChlKSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vIEFycmF5c1xuXG5mdW5jdGlvbiBmaWx0ZXJBcnJheShhcnIsIGNhbGxiYWNrKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMiA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGkgaW4gYXJyKSB7XG4gICAgICB2YXIgdmFsID0gYXJyW2ldO1xuICAgICAgaWYgKGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsLCBpLCBhcnIpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuY29uY2F0KGlzLmFycihiKSA/IGZsYXR0ZW5BcnJheShiKSA6IGIpOyB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkobykge1xuICBpZiAoaXMuYXJyKG8pKSB7IHJldHVybiBvOyB9XG4gIGlmIChpcy5zdHIobykpIHsgbyA9IHNlbGVjdFN0cmluZyhvKSB8fCBvOyB9XG4gIGlmIChvIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSB7IHJldHVybiBbXS5zbGljZS5jYWxsKG8pOyB9XG4gIHJldHVybiBbb107XG59XG5cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMoYXJyLCB2YWwpIHtcbiAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChhKSB7IHJldHVybiBhID09PSB2YWw7IH0pO1xufVxuXG4vLyBPYmplY3RzXG5cbmZ1bmN0aW9uIGNsb25lT2JqZWN0KG8pIHtcbiAgdmFyIGNsb25lID0ge307XG4gIGZvciAodmFyIHAgaW4gbykgeyBjbG9uZVtwXSA9IG9bcF07IH1cbiAgcmV0dXJuIGNsb25lO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlT2JqZWN0UHJvcHMobzEsIG8yKSB7XG4gIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xuICBmb3IgKHZhciBwIGluIG8xKSB7IG9bcF0gPSBvMi5oYXNPd25Qcm9wZXJ0eShwKSA/IG8yW3BdIDogbzFbcF07IH1cbiAgcmV0dXJuIG87XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhvMSwgbzIpIHtcbiAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XG4gIGZvciAodmFyIHAgaW4gbzIpIHsgb1twXSA9IGlzLnVuZChvMVtwXSkgPyBvMltwXSA6IG8xW3BdOyB9XG4gIHJldHVybiBvO1xufVxuXG4vLyBDb2xvcnNcblxuZnVuY3Rpb24gcmdiVG9SZ2JhKHJnYlZhbHVlKSB7XG4gIHZhciByZ2IgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMocmdiVmFsdWUpO1xuICByZXR1cm4gcmdiID8gKFwicmdiYShcIiArIChyZ2JbMV0pICsgXCIsMSlcIikgOiByZ2JWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2JhKGhleFZhbHVlKSB7XG4gIHZhciByZ3ggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICB2YXIgaGV4ID0gaGV4VmFsdWUucmVwbGFjZShyZ3gsIGZ1bmN0aW9uIChtLCByLCBnLCBiKSB7IHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7IH0gKTtcbiAgdmFyIHJnYiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICB2YXIgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xuICB2YXIgZyA9IHBhcnNlSW50KHJnYlsyXSwgMTYpO1xuICB2YXIgYiA9IHBhcnNlSW50KHJnYlszXSwgMTYpO1xuICByZXR1cm4gKFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIiwxKVwiKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2JhKGhzbFZhbHVlKSB7XG4gIHZhciBoc2wgPSAvaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhoc2xWYWx1ZSkgfHwgL2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoaHNsVmFsdWUpO1xuICB2YXIgaCA9IHBhcnNlSW50KGhzbFsxXSwgMTApIC8gMzYwO1xuICB2YXIgcyA9IHBhcnNlSW50KGhzbFsyXSwgMTApIC8gMTAwO1xuICB2YXIgbCA9IHBhcnNlSW50KGhzbFszXSwgMTApIC8gMTAwO1xuICB2YXIgYSA9IGhzbFs0XSB8fCAxO1xuICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICBpZiAodCA8IDApIHsgdCArPSAxOyB9XG4gICAgaWYgKHQgPiAxKSB7IHQgLT0gMTsgfVxuICAgIGlmICh0IDwgMS82KSB7IHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0OyB9XG4gICAgaWYgKHQgPCAxLzIpIHsgcmV0dXJuIHE7IH1cbiAgICBpZiAodCA8IDIvMykgeyByZXR1cm4gcCArIChxIC0gcCkgKiAoMi8zIC0gdCkgKiA2OyB9XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgdmFyIHIsIGcsIGI7XG4gIGlmIChzID09IDApIHtcbiAgICByID0gZyA9IGIgPSBsO1xuICB9IGVsc2Uge1xuICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICB2YXIgcCA9IDIgKiBsIC0gcTtcbiAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMS8zKTtcbiAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMS8zKTtcbiAgfVxuICByZXR1cm4gKFwicmdiYShcIiArIChyICogMjU1KSArIFwiLFwiICsgKGcgKiAyNTUpICsgXCIsXCIgKyAoYiAqIDI1NSkgKyBcIixcIiArIGEgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIGNvbG9yVG9SZ2IodmFsKSB7XG4gIGlmIChpcy5yZ2IodmFsKSkgeyByZXR1cm4gcmdiVG9SZ2JhKHZhbCk7IH1cbiAgaWYgKGlzLmhleCh2YWwpKSB7IHJldHVybiBoZXhUb1JnYmEodmFsKTsgfVxuICBpZiAoaXMuaHNsKHZhbCkpIHsgcmV0dXJuIGhzbFRvUmdiYSh2YWwpOyB9XG59XG5cbi8vIFVuaXRzXG5cbmZ1bmN0aW9uIGdldFVuaXQodmFsKSB7XG4gIHZhciBzcGxpdCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPyglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKHZhbCk7XG4gIGlmIChzcGxpdCkgeyByZXR1cm4gc3BsaXRbMV07IH1cbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSkge1xuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICd0cmFuc2xhdGUnKSB8fCBwcm9wTmFtZSA9PT0gJ3BlcnNwZWN0aXZlJykgeyByZXR1cm4gJ3B4JzsgfVxuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdyb3RhdGUnKSB8fCBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NrZXcnKSkgeyByZXR1cm4gJ2RlZyc7IH1cbn1cblxuLy8gVmFsdWVzXG5cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uVmFsdWUodmFsLCBhbmltYXRhYmxlKSB7XG4gIGlmICghaXMuZm5jKHZhbCkpIHsgcmV0dXJuIHZhbDsgfVxuICByZXR1cm4gdmFsKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltYXRhYmxlLmlkLCBhbmltYXRhYmxlLnRvdGFsKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUocHJvcCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIHtcbiAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xuICBpZiAoYXJyYXlDb250YWlucyhbdW5pdCwgJ2RlZycsICdyYWQnLCAndHVybiddLCB2YWx1ZVVuaXQpKSB7IHJldHVybiB2YWx1ZTsgfVxuICB2YXIgY2FjaGVkID0gY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF07XG4gIGlmICghaXMudW5kKGNhY2hlZCkpIHsgcmV0dXJuIGNhY2hlZDsgfVxuICB2YXIgYmFzZWxpbmUgPSAxMDA7XG4gIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsLnRhZ05hbWUpO1xuICB2YXIgcGFyZW50RWwgPSAoZWwucGFyZW50Tm9kZSAmJiAoZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQpKSA/IGVsLnBhcmVudE5vZGUgOiBkb2N1bWVudC5ib2R5O1xuICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0ZW1wRWwpO1xuICB0ZW1wRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICB0ZW1wRWwuc3R5bGUud2lkdGggPSBiYXNlbGluZSArIHVuaXQ7XG4gIHZhciBmYWN0b3IgPSBiYXNlbGluZSAvIHRlbXBFbC5vZmZzZXRXaWR0aDtcbiAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEVsKTtcbiAgdmFyIGNvbnZlcnRlZFVuaXQgPSBmYWN0b3IgKiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF0gPSBjb252ZXJ0ZWRVbml0O1xuICByZXR1cm4gY29udmVydGVkVW5pdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q1NTVmFsdWUoZWwsIHByb3AsIHVuaXQpIHtcbiAgaWYgKHByb3AgaW4gZWwuc3R5bGUpIHtcbiAgICB2YXIgdXBwZXJjYXNlUHJvcE5hbWUgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIHZhbHVlID0gZWwuc3R5bGVbcHJvcF0gfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSh1cHBlcmNhc2VQcm9wTmFtZSkgfHwgJzAnO1xuICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25UeXBlKGVsLCBwcm9wKSB7XG4gIGlmIChpcy5kb20oZWwpICYmICFpcy5pbnAoZWwpICYmIChnZXRBdHRyaWJ1dGUoZWwsIHByb3ApIHx8IChpcy5zdmcoZWwpICYmIGVsW3Byb3BdKSkpIHsgcmV0dXJuICdhdHRyaWJ1dGUnOyB9XG4gIGlmIChpcy5kb20oZWwpICYmIGFycmF5Q29udGFpbnModmFsaWRUcmFuc2Zvcm1zLCBwcm9wKSkgeyByZXR1cm4gJ3RyYW5zZm9ybSc7IH1cbiAgaWYgKGlzLmRvbShlbCkgJiYgKHByb3AgIT09ICd0cmFuc2Zvcm0nICYmIGdldENTU1ZhbHVlKGVsLCBwcm9wKSkpIHsgcmV0dXJuICdjc3MnOyB9XG4gIGlmIChlbFtwcm9wXSAhPSBudWxsKSB7IHJldHVybiAnb2JqZWN0JzsgfVxufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkge1xuICBpZiAoIWlzLmRvbShlbCkpIHsgcmV0dXJuOyB9XG4gIHZhciBzdHIgPSBlbC5zdHlsZS50cmFuc2Zvcm0gfHwgJyc7XG4gIHZhciByZWcgID0gLyhcXHcrKVxcKChbXildKilcXCkvZztcbiAgdmFyIHRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XG4gIHZhciBtOyB3aGlsZSAobSA9IHJlZy5leGVjKHN0cikpIHsgdHJhbnNmb3Jtcy5zZXQobVsxXSwgbVsyXSk7IH1cbiAgcmV0dXJuIHRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVZhbHVlKGVsLCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCkge1xuICB2YXIgZGVmYXVsdFZhbCA9IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2NhbGUnKSA/IDEgOiAwICsgZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSk7XG4gIHZhciB2YWx1ZSA9IGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKS5nZXQocHJvcE5hbWUpIHx8IGRlZmF1bHRWYWw7XG4gIGlmIChhbmltYXRhYmxlKSB7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLmxpc3Quc2V0KHByb3BOYW1lLCB2YWx1ZSk7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zWydsYXN0J10gPSBwcm9wTmFtZTtcbiAgfVxuICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCwgYW5pbWF0YWJsZSkge1xuICBzd2l0Y2ggKGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wTmFtZSkpIHtcbiAgICBjYXNlICd0cmFuc2Zvcm0nOiByZXR1cm4gZ2V0VHJhbnNmb3JtVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCk7XG4gICAgY2FzZSAnY3NzJzogcmV0dXJuIGdldENTU1ZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQpO1xuICAgIGNhc2UgJ2F0dHJpYnV0ZSc6IHJldHVybiBnZXRBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wTmFtZSk7XG4gICAgZGVmYXVsdDogcmV0dXJuIHRhcmdldFtwcm9wTmFtZV0gfHwgMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSB7XG4gIHZhciBvcGVyYXRvciA9IC9eKFxcKj18XFwrPXwtPSkvLmV4ZWModG8pO1xuICBpZiAoIW9wZXJhdG9yKSB7IHJldHVybiB0bzsgfVxuICB2YXIgdSA9IGdldFVuaXQodG8pIHx8IDA7XG4gIHZhciB4ID0gcGFyc2VGbG9hdChmcm9tKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KHRvLnJlcGxhY2Uob3BlcmF0b3JbMF0sICcnKSk7XG4gIHN3aXRjaCAob3BlcmF0b3JbMF1bMF0pIHtcbiAgICBjYXNlICcrJzogcmV0dXJuIHggKyB5ICsgdTtcbiAgICBjYXNlICctJzogcmV0dXJuIHggLSB5ICsgdTtcbiAgICBjYXNlICcqJzogcmV0dXJuIHggKiB5ICsgdTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbCwgdW5pdCkge1xuICBpZiAoaXMuY29sKHZhbCkpIHsgcmV0dXJuIGNvbG9yVG9SZ2IodmFsKTsgfVxuICBpZiAoL1xccy9nLnRlc3QodmFsKSkgeyByZXR1cm4gdmFsOyB9XG4gIHZhciBvcmlnaW5hbFVuaXQgPSBnZXRVbml0KHZhbCk7XG4gIHZhciB1bml0TGVzcyA9IG9yaWdpbmFsVW5pdCA/IHZhbC5zdWJzdHIoMCwgdmFsLmxlbmd0aCAtIG9yaWdpbmFsVW5pdC5sZW5ndGgpIDogdmFsO1xuICBpZiAodW5pdCkgeyByZXR1cm4gdW5pdExlc3MgKyB1bml0OyB9XG4gIHJldHVybiB1bml0TGVzcztcbn1cblxuLy8gZ2V0VG90YWxMZW5ndGgoKSBlcXVpdmFsZW50IGZvciBjaXJjbGUsIHJlY3QsIHBvbHlsaW5lLCBwb2x5Z29uIGFuZCBsaW5lIHNoYXBlc1xuLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1NlYkxhbWJsYS8zZTA1NTBjNDk2YzIzNjcwOTc0NFxuXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xufVxuXG5mdW5jdGlvbiBnZXRDaXJjbGVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIE1hdGguUEkgKiAyICogZ2V0QXR0cmlidXRlKGVsLCAncicpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWN0TGVuZ3RoKGVsKSB7XG4gIHJldHVybiAoZ2V0QXR0cmlidXRlKGVsLCAnd2lkdGgnKSAqIDIpICsgKGdldEF0dHJpYnV0ZShlbCwgJ2hlaWdodCcpICogMik7XG59XG5cbmZ1bmN0aW9uIGdldExpbmVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIGdldERpc3RhbmNlKFxuICAgIHt4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MScpLCB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MScpfSwgXG4gICAge3g6IGdldEF0dHJpYnV0ZShlbCwgJ3gyJyksIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kyJyl9XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSB7XG4gIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XG4gIHZhciB0b3RhbExlbmd0aCA9IDA7XG4gIHZhciBwcmV2aW91c1BvcztcbiAgZm9yICh2YXIgaSA9IDAgOyBpIDwgcG9pbnRzLm51bWJlck9mSXRlbXM7IGkrKykge1xuICAgIHZhciBjdXJyZW50UG9zID0gcG9pbnRzLmdldEl0ZW0oaSk7XG4gICAgaWYgKGkgPiAwKSB7IHRvdGFsTGVuZ3RoICs9IGdldERpc3RhbmNlKHByZXZpb3VzUG9zLCBjdXJyZW50UG9zKTsgfVxuICAgIHByZXZpb3VzUG9zID0gY3VycmVudFBvcztcbiAgfVxuICByZXR1cm4gdG90YWxMZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlnb25MZW5ndGgoZWwpIHtcbiAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcbiAgcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSArIGdldERpc3RhbmNlKHBvaW50cy5nZXRJdGVtKHBvaW50cy5udW1iZXJPZkl0ZW1zIC0gMSksIHBvaW50cy5nZXRJdGVtKDApKTtcbn1cblxuLy8gUGF0aCBhbmltYXRpb25cblxuZnVuY3Rpb24gZ2V0VG90YWxMZW5ndGgoZWwpIHtcbiAgaWYgKGVsLmdldFRvdGFsTGVuZ3RoKSB7IHJldHVybiBlbC5nZXRUb3RhbExlbmd0aCgpOyB9XG4gIHN3aXRjaChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdjaXJjbGUnOiByZXR1cm4gZ2V0Q2lyY2xlTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdyZWN0JzogcmV0dXJuIGdldFJlY3RMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ2xpbmUnOiByZXR1cm4gZ2V0TGluZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncG9seWxpbmUnOiByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3BvbHlnb24nOiByZXR1cm4gZ2V0UG9seWdvbkxlbmd0aChlbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RGFzaG9mZnNldChlbCkge1xuICB2YXIgcGF0aExlbmd0aCA9IGdldFRvdGFsTGVuZ3RoKGVsKTtcbiAgZWwuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgcGF0aExlbmd0aCk7XG4gIHJldHVybiBwYXRoTGVuZ3RoO1xufVxuXG4vLyBNb3Rpb24gcGF0aFxuXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmdFbChlbCkge1xuICB2YXIgcGFyZW50RWwgPSBlbC5wYXJlbnROb2RlO1xuICB3aGlsZSAoaXMuc3ZnKHBhcmVudEVsKSkge1xuICAgIGlmICghaXMuc3ZnKHBhcmVudEVsLnBhcmVudE5vZGUpKSB7IGJyZWFrOyB9XG4gICAgcGFyZW50RWwgPSBwYXJlbnRFbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBwYXJlbnRFbDtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnKHBhdGhFbCwgc3ZnRGF0YSkge1xuICB2YXIgc3ZnID0gc3ZnRGF0YSB8fCB7fTtcbiAgdmFyIHBhcmVudFN2Z0VsID0gc3ZnLmVsIHx8IGdldFBhcmVudFN2Z0VsKHBhdGhFbCk7XG4gIHZhciByZWN0ID0gcGFyZW50U3ZnRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciB2aWV3Qm94QXR0ciA9IGdldEF0dHJpYnV0ZShwYXJlbnRTdmdFbCwgJ3ZpZXdCb3gnKTtcbiAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcbiAgdmFyIGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICB2YXIgdmlld0JveCA9IHN2Zy52aWV3Qm94IHx8ICh2aWV3Qm94QXR0ciA/IHZpZXdCb3hBdHRyLnNwbGl0KCcgJykgOiBbMCwgMCwgd2lkdGgsIGhlaWdodF0pO1xuICByZXR1cm4ge1xuICAgIGVsOiBwYXJlbnRTdmdFbCxcbiAgICB2aWV3Qm94OiB2aWV3Qm94LFxuICAgIHg6IHZpZXdCb3hbMF0gLyAxLFxuICAgIHk6IHZpZXdCb3hbMV0gLyAxLFxuICAgIHc6IHdpZHRoIC8gdmlld0JveFsyXSxcbiAgICBoOiBoZWlnaHQgLyB2aWV3Qm94WzNdXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGF0aChwYXRoLCBwZXJjZW50KSB7XG4gIHZhciBwYXRoRWwgPSBpcy5zdHIocGF0aCkgPyBzZWxlY3RTdHJpbmcocGF0aClbMF0gOiBwYXRoO1xuICB2YXIgcCA9IHBlcmNlbnQgfHwgMTAwO1xuICByZXR1cm4gZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgZWw6IHBhdGhFbCxcbiAgICAgIHN2ZzogZ2V0UGFyZW50U3ZnKHBhdGhFbCksXG4gICAgICB0b3RhbExlbmd0aDogZ2V0VG90YWxMZW5ndGgocGF0aEVsKSAqIChwIC8gMTAwKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoUHJvZ3Jlc3MocGF0aCwgcHJvZ3Jlc3MpIHtcbiAgZnVuY3Rpb24gcG9pbnQob2Zmc2V0KSB7XG4gICAgaWYgKCBvZmZzZXQgPT09IHZvaWQgMCApIG9mZnNldCA9IDA7XG5cbiAgICB2YXIgbCA9IHByb2dyZXNzICsgb2Zmc2V0ID49IDEgPyBwcm9ncmVzcyArIG9mZnNldCA6IDA7XG4gICAgcmV0dXJuIHBhdGguZWwuZ2V0UG9pbnRBdExlbmd0aChsKTtcbiAgfVxuICB2YXIgc3ZnID0gZ2V0UGFyZW50U3ZnKHBhdGguZWwsIHBhdGguc3ZnKTtcbiAgdmFyIHAgPSBwb2ludCgpO1xuICB2YXIgcDAgPSBwb2ludCgtMSk7XG4gIHZhciBwMSA9IHBvaW50KCsxKTtcbiAgc3dpdGNoIChwYXRoLnByb3BlcnR5KSB7XG4gICAgY2FzZSAneCc6IHJldHVybiAocC54IC0gc3ZnLngpICogc3ZnLnc7XG4gICAgY2FzZSAneSc6IHJldHVybiAocC55IC0gc3ZnLnkpICogc3ZnLmg7XG4gICAgY2FzZSAnYW5nbGUnOiByZXR1cm4gTWF0aC5hdGFuMihwMS55IC0gcDAueSwgcDEueCAtIHAwLngpICogMTgwIC8gTWF0aC5QSTtcbiAgfVxufVxuXG4vLyBEZWNvbXBvc2UgdmFsdWVcblxuZnVuY3Rpb24gZGVjb21wb3NlVmFsdWUodmFsLCB1bml0KSB7XG4gIC8vIGNvbnN0IHJneCA9IC8tP1xcZCpcXC4/XFxkKy9nOyAvLyBoYW5kbGVzIGJhc2ljIG51bWJlcnNcbiAgLy8gY29uc3Qgcmd4ID0gL1srLV0/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxuICB2YXIgcmd4ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXG4gIHZhciB2YWx1ZSA9IHZhbGlkYXRlVmFsdWUoKGlzLnB0aCh2YWwpID8gdmFsLnRvdGFsTGVuZ3RoIDogdmFsKSwgdW5pdCkgKyAnJztcbiAgcmV0dXJuIHtcbiAgICBvcmlnaW5hbDogdmFsdWUsXG4gICAgbnVtYmVyczogdmFsdWUubWF0Y2gocmd4KSA/IHZhbHVlLm1hdGNoKHJneCkubWFwKE51bWJlcikgOiBbMF0sXG4gICAgc3RyaW5nczogKGlzLnN0cih2YWwpIHx8IHVuaXQpID8gdmFsdWUuc3BsaXQocmd4KSA6IFtdXG4gIH1cbn1cblxuLy8gQW5pbWF0YWJsZXNcblxuZnVuY3Rpb24gcGFyc2VUYXJnZXRzKHRhcmdldHMpIHtcbiAgdmFyIHRhcmdldHNBcnJheSA9IHRhcmdldHMgPyAoZmxhdHRlbkFycmF5KGlzLmFycih0YXJnZXRzKSA/IHRhcmdldHMubWFwKHRvQXJyYXkpIDogdG9BcnJheSh0YXJnZXRzKSkpIDogW107XG4gIHJldHVybiBmaWx0ZXJBcnJheSh0YXJnZXRzQXJyYXksIGZ1bmN0aW9uIChpdGVtLCBwb3MsIHNlbGYpIHsgcmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PT0gcG9zOyB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cykge1xuICB2YXIgcGFyc2VkID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICByZXR1cm4gcGFyc2VkLm1hcChmdW5jdGlvbiAodCwgaSkge1xuICAgIHJldHVybiB7dGFyZ2V0OiB0LCBpZDogaSwgdG90YWw6IHBhcnNlZC5sZW5ndGgsIHRyYW5zZm9ybXM6IHsgbGlzdDogZ2V0RWxlbWVudFRyYW5zZm9ybXModCkgfSB9O1xuICB9KTtcbn1cblxuLy8gUHJvcGVydGllc1xuXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwcm9wLCB0d2VlblNldHRpbmdzKSB7XG4gIHZhciBzZXR0aW5ncyA9IGNsb25lT2JqZWN0KHR3ZWVuU2V0dGluZ3MpO1xuICAvLyBPdmVycmlkZSBkdXJhdGlvbiBpZiBlYXNpbmcgaXMgYSBzcHJpbmdcbiAgaWYgKC9ec3ByaW5nLy50ZXN0KHNldHRpbmdzLmVhc2luZykpIHsgc2V0dGluZ3MuZHVyYXRpb24gPSBzcHJpbmcoc2V0dGluZ3MuZWFzaW5nKTsgfVxuICBpZiAoaXMuYXJyKHByb3ApKSB7XG4gICAgdmFyIGwgPSBwcm9wLmxlbmd0aDtcbiAgICB2YXIgaXNGcm9tVG8gPSAobCA9PT0gMiAmJiAhaXMub2JqKHByb3BbMF0pKTtcbiAgICBpZiAoIWlzRnJvbVRvKSB7XG4gICAgICAvLyBEdXJhdGlvbiBkaXZpZGVkIGJ5IHRoZSBudW1iZXIgb2YgdHdlZW5zXG4gICAgICBpZiAoIWlzLmZuYyh0d2VlblNldHRpbmdzLmR1cmF0aW9uKSkgeyBzZXR0aW5ncy5kdXJhdGlvbiA9IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24gLyBsOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyYW5zZm9ybSBbZnJvbSwgdG9dIHZhbHVlcyBzaG9ydGhhbmQgdG8gYSB2YWxpZCB0d2VlbiB2YWx1ZVxuICAgICAgcHJvcCA9IHt2YWx1ZTogcHJvcH07XG4gICAgfVxuICB9XG4gIHZhciBwcm9wQXJyYXkgPSBpcy5hcnIocHJvcCkgPyBwcm9wIDogW3Byb3BdO1xuICByZXR1cm4gcHJvcEFycmF5Lm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgIHZhciBvYmogPSAoaXMub2JqKHYpICYmICFpcy5wdGgodikpID8gdiA6IHt2YWx1ZTogdn07XG4gICAgLy8gRGVmYXVsdCBkZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBmaXJzdCB0d2VlblxuICAgIGlmIChpcy51bmQob2JqLmRlbGF5KSkgeyBvYmouZGVsYXkgPSAhaSA/IHR3ZWVuU2V0dGluZ3MuZGVsYXkgOiAwOyB9XG4gICAgLy8gRGVmYXVsdCBlbmREZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBsYXN0IHR3ZWVuXG4gICAgaWYgKGlzLnVuZChvYmouZW5kRGVsYXkpKSB7IG9iai5lbmREZWxheSA9IGkgPT09IHByb3BBcnJheS5sZW5ndGggLSAxID8gdHdlZW5TZXR0aW5ncy5lbmREZWxheSA6IDA7IH1cbiAgICByZXR1cm4gb2JqO1xuICB9KS5tYXAoZnVuY3Rpb24gKGspIHsgcmV0dXJuIG1lcmdlT2JqZWN0cyhrLCBzZXR0aW5ncyk7IH0pO1xufVxuXG5cbmZ1bmN0aW9uIGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSB7XG4gIHZhciBwcm9wZXJ0eU5hbWVzID0gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGtleWZyYW1lcy5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gT2JqZWN0LmtleXMoa2V5KTsgfSkpLCBmdW5jdGlvbiAocCkgeyByZXR1cm4gaXMua2V5KHApOyB9KVxuICAucmVkdWNlKGZ1bmN0aW9uIChhLGIpIHsgaWYgKGEuaW5kZXhPZihiKSA8IDApIHsgYS5wdXNoKGIpOyB9IHJldHVybiBhOyB9LCBbXSk7XG4gIHZhciBwcm9wZXJ0aWVzID0ge307XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBpICkge1xuICAgIHZhciBwcm9wTmFtZSA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgcHJvcGVydGllc1twcm9wTmFtZV0gPSBrZXlmcmFtZXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBuZXdLZXkgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4ga2V5KSB7XG4gICAgICAgIGlmIChpcy5rZXkocCkpIHtcbiAgICAgICAgICBpZiAocCA9PSBwcm9wTmFtZSkgeyBuZXdLZXkudmFsdWUgPSBrZXlbcF07IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdLZXlbcF0gPSBrZXlbcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdLZXk7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSBsb29wKCBpICk7XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcykge1xuICB2YXIgcHJvcGVydGllcyA9IFtdO1xuICB2YXIga2V5ZnJhbWVzID0gcGFyYW1zLmtleWZyYW1lcztcbiAgaWYgKGtleWZyYW1lcykgeyBwYXJhbXMgPSBtZXJnZU9iamVjdHMoZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpLCBwYXJhbXMpOyB9XG4gIGZvciAodmFyIHAgaW4gcGFyYW1zKSB7XG4gICAgaWYgKGlzLmtleShwKSkge1xuICAgICAgcHJvcGVydGllcy5wdXNoKHtcbiAgICAgICAgbmFtZTogcCxcbiAgICAgICAgdHdlZW5zOiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwYXJhbXNbcF0sIHR3ZWVuU2V0dGluZ3MpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbi8vIFR3ZWVuc1xuXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlblZhbHVlcyh0d2VlbiwgYW5pbWF0YWJsZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHR3ZWVuKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZSh0d2VlbltwXSwgYW5pbWF0YWJsZSk7XG4gICAgaWYgKGlzLmFycih2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBnZXRGdW5jdGlvblZhbHVlKHYsIGFuaW1hdGFibGUpOyB9KTtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHsgdmFsdWUgPSB2YWx1ZVswXTsgfVxuICAgIH1cbiAgICB0W3BdID0gdmFsdWU7XG4gIH1cbiAgdC5kdXJhdGlvbiA9IHBhcnNlRmxvYXQodC5kdXJhdGlvbik7XG4gIHQuZGVsYXkgPSBwYXJzZUZsb2F0KHQuZGVsYXkpO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpIHtcbiAgdmFyIHByZXZpb3VzVHdlZW47XG4gIHJldHVybiBwcm9wLnR3ZWVucy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgdHdlZW4gPSBub3JtYWxpemVUd2VlblZhbHVlcyh0LCBhbmltYXRhYmxlKTtcbiAgICB2YXIgdHdlZW5WYWx1ZSA9IHR3ZWVuLnZhbHVlO1xuICAgIHZhciB0byA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMV0gOiB0d2VlblZhbHVlO1xuICAgIHZhciB0b1VuaXQgPSBnZXRVbml0KHRvKTtcbiAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSwgdG9Vbml0LCBhbmltYXRhYmxlKTtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLnRvLm9yaWdpbmFsIDogb3JpZ2luYWxWYWx1ZTtcbiAgICB2YXIgZnJvbSA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMF0gOiBwcmV2aW91c1ZhbHVlO1xuICAgIHZhciBmcm9tVW5pdCA9IGdldFVuaXQoZnJvbSkgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcbiAgICB2YXIgdW5pdCA9IHRvVW5pdCB8fCBmcm9tVW5pdDtcbiAgICBpZiAoaXMudW5kKHRvKSkgeyB0byA9IHByZXZpb3VzVmFsdWU7IH1cbiAgICB0d2Vlbi5mcm9tID0gZGVjb21wb3NlVmFsdWUoZnJvbSwgdW5pdCk7XG4gICAgdHdlZW4udG8gPSBkZWNvbXBvc2VWYWx1ZShnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSwgdW5pdCk7XG4gICAgdHdlZW4uc3RhcnQgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi5lbmQgOiAwO1xuICAgIHR3ZWVuLmVuZCA9IHR3ZWVuLnN0YXJ0ICsgdHdlZW4uZGVsYXkgKyB0d2Vlbi5kdXJhdGlvbiArIHR3ZWVuLmVuZERlbGF5O1xuICAgIHR3ZWVuLmVhc2luZyA9IHBhcnNlRWFzaW5ncyh0d2Vlbi5lYXNpbmcsIHR3ZWVuLmR1cmF0aW9uKTtcbiAgICB0d2Vlbi5pc1BhdGggPSBpcy5wdGgodHdlZW5WYWx1ZSk7XG4gICAgdHdlZW4uaXNDb2xvciA9IGlzLmNvbCh0d2Vlbi5mcm9tLm9yaWdpbmFsKTtcbiAgICBpZiAodHdlZW4uaXNDb2xvcikgeyB0d2Vlbi5yb3VuZCA9IDE7IH1cbiAgICBwcmV2aW91c1R3ZWVuID0gdHdlZW47XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9KTtcbn1cblxuLy8gVHdlZW4gcHJvZ3Jlc3NcblxudmFyIHNldFByb2dyZXNzVmFsdWUgPSB7XG4gIGNzczogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHQuc3R5bGVbcF0gPSB2OyB9LFxuICBhdHRyaWJ1dGU6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0LnNldEF0dHJpYnV0ZShwLCB2KTsgfSxcbiAgb2JqZWN0OiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdFtwXSA9IHY7IH0sXG4gIHRyYW5zZm9ybTogZnVuY3Rpb24gKHQsIHAsIHYsIHRyYW5zZm9ybXMsIG1hbnVhbCkge1xuICAgIHRyYW5zZm9ybXMubGlzdC5zZXQocCwgdik7XG4gICAgaWYgKHAgPT09IHRyYW5zZm9ybXMubGFzdCB8fCBtYW51YWwpIHtcbiAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgIHRyYW5zZm9ybXMubGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkgeyBzdHIgKz0gcHJvcCArIFwiKFwiICsgdmFsdWUgKyBcIikgXCI7IH0pO1xuICAgICAgdC5zdHlsZS50cmFuc2Zvcm0gPSBzdHI7XG4gICAgfVxuICB9XG59O1xuXG4vLyBTZXQgVmFsdWUgaGVscGVyXG5cbmZ1bmN0aW9uIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XG4gIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHRhcmdldHMpO1xuICBhbmltYXRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltYXRhYmxlKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZShwcm9wZXJ0aWVzW3Byb3BlcnR5XSwgYW5pbWF0YWJsZSk7XG4gICAgICB2YXIgdGFyZ2V0ID0gYW5pbWF0YWJsZS50YXJnZXQ7XG4gICAgICB2YXIgdmFsdWVVbml0ID0gZ2V0VW5pdCh2YWx1ZSk7XG4gICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWVVbml0LCBhbmltYXRhYmxlKTtcbiAgICAgIHZhciB1bml0ID0gdmFsdWVVbml0IHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XG4gICAgICB2YXIgdG8gPSBnZXRSZWxhdGl2ZVZhbHVlKHZhbGlkYXRlVmFsdWUodmFsdWUsIHVuaXQpLCBvcmlnaW5hbFZhbHVlKTtcbiAgICAgIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW1UeXBlXSh0YXJnZXQsIHByb3BlcnR5LCB0bywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBBbmltYXRpb25zXG5cbmZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKSB7XG4gIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSk7XG4gIGlmIChhbmltVHlwZSkge1xuICAgIHZhciB0d2VlbnMgPSBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIGxhc3RUd2VlbiA9IHR3ZWVuc1t0d2VlbnMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGFuaW1UeXBlLFxuICAgICAgcHJvcGVydHk6IHByb3AubmFtZSxcbiAgICAgIGFuaW1hdGFibGU6IGFuaW1hdGFibGUsXG4gICAgICB0d2VlbnM6IHR3ZWVucyxcbiAgICAgIGR1cmF0aW9uOiBsYXN0VHdlZW4uZW5kLFxuICAgICAgZGVsYXk6IHR3ZWVuc1swXS5kZWxheSxcbiAgICAgIGVuZERlbGF5OiBsYXN0VHdlZW4uZW5kRGVsYXlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcykge1xuICByZXR1cm4gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGFuaW1hdGFibGVzLm1hcChmdW5jdGlvbiAoYW5pbWF0YWJsZSkge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKTtcbiAgICB9KTtcbiAgfSkpLCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gIWlzLnVuZChhKTsgfSk7XG59XG5cbi8vIENyZWF0ZSBJbnN0YW5jZVxuXG5mdW5jdGlvbiBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncykge1xuICB2YXIgYW5pbUxlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuICB2YXIgZ2V0VGxPZmZzZXQgPSBmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gYW5pbS50aW1lbGluZU9mZnNldCA/IGFuaW0udGltZWxpbmVPZmZzZXQgOiAwOyB9O1xuICB2YXIgdGltaW5ncyA9IHt9O1xuICB0aW1pbmdzLmR1cmF0aW9uID0gYW5pbUxlbmd0aCA/IE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb247IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb247XG4gIHRpbWluZ3MuZGVsYXkgPSBhbmltTGVuZ3RoID8gTWF0aC5taW4uYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kZWxheTsgfSkpIDogdHdlZW5TZXR0aW5ncy5kZWxheTtcbiAgdGltaW5ncy5lbmREZWxheSA9IGFuaW1MZW5ndGggPyB0aW1pbmdzLmR1cmF0aW9uIC0gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbiAtIGFuaW0uZW5kRGVsYXk7IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXk7XG4gIHJldHVybiB0aW1pbmdzO1xufVxuXG52YXIgaW5zdGFuY2VJRCA9IDA7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcykge1xuICB2YXIgaW5zdGFuY2VTZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIHR3ZWVuU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyhwYXJhbXMudGFyZ2V0cyk7XG4gIHZhciBhbmltYXRpb25zID0gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcyk7XG4gIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpO1xuICB2YXIgaWQgPSBpbnN0YW5jZUlEO1xuICBpbnN0YW5jZUlEKys7XG4gIHJldHVybiBtZXJnZU9iamVjdHMoaW5zdGFuY2VTZXR0aW5ncywge1xuICAgIGlkOiBpZCxcbiAgICBjaGlsZHJlbjogW10sXG4gICAgYW5pbWF0YWJsZXM6IGFuaW1hdGFibGVzLFxuICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMsXG4gICAgZHVyYXRpb246IHRpbWluZ3MuZHVyYXRpb24sXG4gICAgZGVsYXk6IHRpbWluZ3MuZGVsYXksXG4gICAgZW5kRGVsYXk6IHRpbWluZ3MuZW5kRGVsYXlcbiAgfSk7XG59XG5cbi8vIENvcmVcblxudmFyIGFjdGl2ZUluc3RhbmNlcyA9IFtdO1xudmFyIHBhdXNlZEluc3RhbmNlcyA9IFtdO1xudmFyIHJhZjtcblxudmFyIGVuZ2luZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHBsYXkoKSB7IFxuICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgfVxuICBmdW5jdGlvbiBzdGVwKHQpIHtcbiAgICB2YXIgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDtcbiAgICBpZiAoYWN0aXZlSW5zdGFuY2VzTGVuZ3RoKSB7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IGFjdGl2ZUluc3RhbmNlc0xlbmd0aCkge1xuICAgICAgICB2YXIgYWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XG4gICAgICAgIGlmICghYWN0aXZlSW5zdGFuY2UucGF1c2VkKSB7XG4gICAgICAgICAgYWN0aXZlSW5zdGFuY2UudGljayh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW5zdGFuY2VJbmRleCA9IGFjdGl2ZUluc3RhbmNlcy5pbmRleE9mKGFjdGl2ZUluc3RhbmNlKTtcbiAgICAgICAgICBpZiAoaW5zdGFuY2VJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKGluc3RhbmNlSW5kZXgsIDEpO1xuICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgcGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByYWYgPSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGxheTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICBhY3RpdmVJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5zKSB7IHJldHVybiBpbnMucGF1c2UoKTsgfSk7XG4gICAgcGF1c2VkSW5zdGFuY2VzID0gYWN0aXZlSW5zdGFuY2VzLnNsaWNlKDApO1xuICAgIGFuaW1lLnJ1bm5pbmcgPSBhY3RpdmVJbnN0YW5jZXMgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBwYXVzZWRJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5zKSB7IHJldHVybiBpbnMucGxheSgpOyB9KTtcbiAgfVxufVxuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG59XG5cbi8vIFB1YmxpYyBJbnN0YW5jZVxuXG5mdW5jdGlvbiBhbmltZShwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG5cbiAgdmFyIHN0YXJ0VGltZSA9IDAsIGxhc3RUaW1lID0gMCwgbm93ID0gMDtcbiAgdmFyIGNoaWxkcmVuLCBjaGlsZHJlbkxlbmd0aCA9IDA7XG4gIHZhciByZXNvbHZlID0gbnVsbDtcblxuICBmdW5jdGlvbiBtYWtlUHJvbWlzZShpbnN0YW5jZSkge1xuICAgIHZhciBwcm9taXNlID0gd2luZG93LlByb21pc2UgJiYgbmV3IFByb21pc2UoZnVuY3Rpb24gKF9yZXNvbHZlKSB7IHJldHVybiByZXNvbHZlID0gX3Jlc29sdmU7IH0pO1xuICAgIGluc3RhbmNlLmZpbmlzaGVkID0gcHJvbWlzZTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHZhciBpbnN0YW5jZSA9IGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcyk7XG4gIHZhciBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ2FsdGVybmF0ZScpIHtcbiAgICAgIGluc3RhbmNlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiAhPT0gJ25vcm1hbCcgPyAnbm9ybWFsJyA6ICdyZXZlcnNlJztcbiAgICB9XG4gICAgaW5zdGFuY2UucmV2ZXJzZWQgPSAhaW5zdGFuY2UucmV2ZXJzZWQ7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLnJldmVyc2VkID0gaW5zdGFuY2UucmV2ZXJzZWQ7IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRqdXN0VGltZSh0aW1lKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gLSB0aW1lIDogdGltZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VGltZSgpIHtcbiAgICBzdGFydFRpbWUgPSAwO1xuICAgIGxhc3RUaW1lID0gYWRqdXN0VGltZShpbnN0YW5jZS5jdXJyZW50VGltZSkgKiAoMSAvIGFuaW1lLnNwZWVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlZWtDaGlsZCh0aW1lLCBjaGlsZCkge1xuICAgIGlmIChjaGlsZCkgeyBjaGlsZC5zZWVrKHRpbWUgLSBjaGlsZC50aW1lbGluZU9mZnNldCk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmNJbnN0YW5jZUNoaWxkcmVuKHRpbWUpIHtcbiAgICBpZiAoIWluc3RhbmNlLnJldmVyc2VQbGF5YmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7IHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpXSk7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSQxID0gY2hpbGRyZW5MZW5ndGg7IGkkMS0tOykgeyBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baSQxXSk7IH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XG4gICAgdmFyIGFuaW1hdGlvbnNMZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGFuaW1hdGlvbnNMZW5ndGgpIHtcbiAgICAgIHZhciBhbmltID0gYW5pbWF0aW9uc1tpXTtcbiAgICAgIHZhciBhbmltYXRhYmxlID0gYW5pbS5hbmltYXRhYmxlO1xuICAgICAgdmFyIHR3ZWVucyA9IGFuaW0udHdlZW5zO1xuICAgICAgdmFyIHR3ZWVuTGVuZ3RoID0gdHdlZW5zLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgdHdlZW4gPSB0d2VlbnNbdHdlZW5MZW5ndGhdO1xuICAgICAgLy8gT25seSBjaGVjayBmb3Iga2V5ZnJhbWVzIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgdHdlZW5cbiAgICAgIGlmICh0d2Vlbkxlbmd0aCkgeyB0d2VlbiA9IGZpbHRlckFycmF5KHR3ZWVucywgZnVuY3Rpb24gKHQpIHsgcmV0dXJuIChpbnNUaW1lIDwgdC5lbmQpOyB9KVswXSB8fCB0d2VlbjsgfVxuICAgICAgdmFyIGVsYXBzZWQgPSBtaW5NYXgoaW5zVGltZSAtIHR3ZWVuLnN0YXJ0IC0gdHdlZW4uZGVsYXksIDAsIHR3ZWVuLmR1cmF0aW9uKSAvIHR3ZWVuLmR1cmF0aW9uO1xuICAgICAgdmFyIGVhc2VkID0gaXNOYU4oZWxhcHNlZCkgPyAxIDogdHdlZW4uZWFzaW5nKGVsYXBzZWQpO1xuICAgICAgdmFyIHN0cmluZ3MgPSB0d2Vlbi50by5zdHJpbmdzO1xuICAgICAgdmFyIHJvdW5kID0gdHdlZW4ucm91bmQ7XG4gICAgICB2YXIgbnVtYmVycyA9IFtdO1xuICAgICAgdmFyIHRvTnVtYmVyc0xlbmd0aCA9IHR3ZWVuLnRvLm51bWJlcnMubGVuZ3RoO1xuICAgICAgdmFyIHByb2dyZXNzID0gKHZvaWQgMCk7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHRvTnVtYmVyc0xlbmd0aDsgbisrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9ICh2b2lkIDApO1xuICAgICAgICB2YXIgdG9OdW1iZXIgPSB0d2Vlbi50by5udW1iZXJzW25dO1xuICAgICAgICB2YXIgZnJvbU51bWJlciA9IHR3ZWVuLmZyb20ubnVtYmVyc1tuXSB8fCAwO1xuICAgICAgICBpZiAoIXR3ZWVuLmlzUGF0aCkge1xuICAgICAgICAgIHZhbHVlID0gZnJvbU51bWJlciArIChlYXNlZCAqICh0b051bWJlciAtIGZyb21OdW1iZXIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGdldFBhdGhQcm9ncmVzcyh0d2Vlbi52YWx1ZSwgZWFzZWQgKiB0b051bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdW5kKSB7XG4gICAgICAgICAgaWYgKCEodHdlZW4uaXNDb2xvciAmJiBuID4gMikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIHJvdW5kKSAvIHJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBudW1iZXJzLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgLy8gTWFudWFsIEFycmF5LnJlZHVjZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlc1xuICAgICAgdmFyIHN0cmluZ3NMZW5ndGggPSBzdHJpbmdzLmxlbmd0aDtcbiAgICAgIGlmICghc3RyaW5nc0xlbmd0aCkge1xuICAgICAgICBwcm9ncmVzcyA9IG51bWJlcnNbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9ncmVzcyA9IHN0cmluZ3NbMF07XG4gICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgc3RyaW5nc0xlbmd0aDsgcysrKSB7XG4gICAgICAgICAgdmFyIGEgPSBzdHJpbmdzW3NdO1xuICAgICAgICAgIHZhciBiID0gc3RyaW5nc1tzICsgMV07XG4gICAgICAgICAgdmFyIG4kMSA9IG51bWJlcnNbc107XG4gICAgICAgICAgaWYgKCFpc05hTihuJDEpKSB7XG4gICAgICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgJyAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbS50eXBlXShhbmltYXRhYmxlLnRhcmdldCwgYW5pbS5wcm9wZXJ0eSwgcHJvZ3Jlc3MsIGFuaW1hdGFibGUudHJhbnNmb3Jtcyk7XG4gICAgICBhbmltLmN1cnJlbnRWYWx1ZSA9IHByb2dyZXNzO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENhbGxiYWNrKGNiKSB7XG4gICAgaWYgKGluc3RhbmNlW2NiXSAmJiAhaW5zdGFuY2UucGFzc1Rocm91Z2gpIHsgaW5zdGFuY2VbY2JdKGluc3RhbmNlKTsgfVxuICB9XG5cbiAgZnVuY3Rpb24gY291bnRJdGVyYXRpb24oKSB7XG4gICAgaWYgKGluc3RhbmNlLnJlbWFpbmluZyAmJiBpbnN0YW5jZS5yZW1haW5pbmcgIT09IHRydWUpIHtcbiAgICAgIGluc3RhbmNlLnJlbWFpbmluZy0tO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEluc3RhbmNlUHJvZ3Jlc3MoZW5naW5lVGltZSkge1xuICAgIHZhciBpbnNEdXJhdGlvbiA9IGluc3RhbmNlLmR1cmF0aW9uO1xuICAgIHZhciBpbnNEZWxheSA9IGluc3RhbmNlLmRlbGF5O1xuICAgIHZhciBpbnNFbmREZWxheSA9IGluc0R1cmF0aW9uIC0gaW5zdGFuY2UuZW5kRGVsYXk7XG4gICAgdmFyIGluc1RpbWUgPSBhZGp1c3RUaW1lKGVuZ2luZVRpbWUpO1xuICAgIGluc3RhbmNlLnByb2dyZXNzID0gbWluTWF4KChpbnNUaW1lIC8gaW5zRHVyYXRpb24pICogMTAwLCAwLCAxMDApO1xuICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGluc1RpbWUgPCBpbnN0YW5jZS5jdXJyZW50VGltZTtcbiAgICBpZiAoY2hpbGRyZW4pIHsgc3luY0luc3RhbmNlQ2hpbGRyZW4oaW5zVGltZSk7IH1cbiAgICBpZiAoIWluc3RhbmNlLmJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgaW5zdGFuY2UuYmVnYW4gPSB0cnVlO1xuICAgICAgc2V0Q2FsbGJhY2soJ2JlZ2luJyk7XG4gICAgfVxuICAgIGlmICghaW5zdGFuY2UubG9vcEJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gdHJ1ZTtcbiAgICAgIHNldENhbGxiYWNrKCdsb29wQmVnaW4nKTtcbiAgICB9XG4gICAgaWYgKGluc1RpbWUgPD0gaW5zRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IDApIHtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcygwKTtcbiAgICB9XG4gICAgaWYgKChpbnNUaW1lID49IGluc0VuZERlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSBpbnNEdXJhdGlvbikgfHwgIWluc0R1cmF0aW9uKSB7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zRHVyYXRpb24pO1xuICAgIH1cbiAgICBpZiAoaW5zVGltZSA+IGluc0RlbGF5ICYmIGluc1RpbWUgPCBpbnNFbmREZWxheSkge1xuICAgICAgaWYgKCFpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQmVnaW4nKTtcbiAgICAgIH1cbiAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2UnKTtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XG4gICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VDb21wbGV0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IG1pbk1heChpbnNUaW1lLCAwLCBpbnNEdXJhdGlvbik7XG4gICAgaWYgKGluc3RhbmNlLmJlZ2FuKSB7IHNldENhbGxiYWNrKCd1cGRhdGUnKTsgfVxuICAgIGlmIChlbmdpbmVUaW1lID49IGluc0R1cmF0aW9uKSB7XG4gICAgICBsYXN0VGltZSA9IDA7XG4gICAgICBjb3VudEl0ZXJhdGlvbigpO1xuICAgICAgaWYgKCFpbnN0YW5jZS5yZW1haW5pbmcpIHtcbiAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5jb21wbGV0ZWQpIHtcbiAgICAgICAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcbiAgICAgICAgICBzZXRDYWxsYmFjaygnY29tcGxldGUnKTtcbiAgICAgICAgICBpZiAoIWluc3RhbmNlLnBhc3NUaHJvdWdoICYmICdQcm9taXNlJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHByb21pc2UgPSBtYWtlUHJvbWlzZShpbnN0YW5jZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydFRpbWUgPSBub3c7XG4gICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcbiAgICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gZmFsc2U7XG4gICAgICAgIGlmIChpbnN0YW5jZS5kaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnKSB7XG4gICAgICAgICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluc3RhbmNlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcbiAgICBpbnN0YW5jZS5wYXNzVGhyb3VnaCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IDA7XG4gICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcbiAgICBpbnN0YW5jZS5iZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY29tcGxldGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gZmFsc2U7XG4gICAgaW5zdGFuY2UucmV2ZXJzZWQgPSBkaXJlY3Rpb24gPT09ICdyZXZlcnNlJztcbiAgICBpbnN0YW5jZS5yZW1haW5pbmcgPSBpbnN0YW5jZS5sb29wO1xuICAgIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XG4gICAgY2hpbGRyZW5MZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuTGVuZ3RoOyBpLS07KSB7IGluc3RhbmNlLmNoaWxkcmVuW2ldLnJlc2V0KCk7IH1cbiAgICBpZiAoaW5zdGFuY2UucmV2ZXJzZWQgJiYgaW5zdGFuY2UubG9vcCAhPT0gdHJ1ZSB8fCAoZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJyAmJiBpbnN0YW5jZS5sb29wID09PSAxKSkgeyBpbnN0YW5jZS5yZW1haW5pbmcrKzsgfVxuICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnN0YW5jZS5yZXZlcnNlZCA/IGluc3RhbmNlLmR1cmF0aW9uIDogMCk7XG4gIH07XG5cbiAgLy8gU2V0IFZhbHVlIGhlbHBlclxuXG4gIGluc3RhbmNlLnNldCA9IGZ1bmN0aW9uKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcbiAgICBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcyk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xuXG4gIGluc3RhbmNlLnRpY2sgPSBmdW5jdGlvbih0KSB7XG4gICAgbm93ID0gdDtcbiAgICBpZiAoIXN0YXJ0VGltZSkgeyBzdGFydFRpbWUgPSBub3c7IH1cbiAgICBzZXRJbnN0YW5jZVByb2dyZXNzKChub3cgKyAobGFzdFRpbWUgLSBzdGFydFRpbWUpKSAqIGFuaW1lLnNwZWVkKTtcbiAgfTtcblxuICBpbnN0YW5jZS5zZWVrID0gZnVuY3Rpb24odGltZSkge1xuICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoYWRqdXN0VGltZSh0aW1lKSk7XG4gIH07XG5cbiAgaW5zdGFuY2UucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgIHJlc2V0VGltZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWluc3RhbmNlLnBhdXNlZCkgeyByZXR1cm47IH1cbiAgICBpZiAoaW5zdGFuY2UuY29tcGxldGVkKSB7IGluc3RhbmNlLnJlc2V0KCk7IH1cbiAgICBpbnN0YW5jZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBhY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgcmVzZXRUaW1lKCk7XG4gICAgaWYgKCFyYWYpIHsgZW5naW5lKCk7IH1cbiAgfTtcblxuICBpbnN0YW5jZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7XG4gICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcbiAgICByZXNldFRpbWUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaW5zdGFuY2UucmVzZXQoKTtcbiAgICBpbnN0YW5jZS5wbGF5KCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVzZXQoKTtcblxuICBpZiAoaW5zdGFuY2UuYXV0b3BsYXkpIHsgaW5zdGFuY2UucGxheSgpOyB9XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xuXG59XG5cbi8vIFJlbW92ZSB0YXJnZXRzIGZyb20gYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpIHtcbiAgZm9yICh2YXIgYSA9IGFuaW1hdGlvbnMubGVuZ3RoOyBhLS07KSB7XG4gICAgaWYgKGFycmF5Q29udGFpbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zW2FdLmFuaW1hdGFibGUudGFyZ2V0KSkge1xuICAgICAgYW5pbWF0aW9ucy5zcGxpY2UoYSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICBmb3IgKHZhciBpID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDsgaS0tOykge1xuICAgIHZhciBpbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XG4gICAgdmFyIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucyk7XG4gICAgZm9yICh2YXIgYyA9IGNoaWxkcmVuLmxlbmd0aDsgYy0tOykge1xuICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5bY107XG4gICAgICB2YXIgY2hpbGRBbmltYXRpb25zID0gY2hpbGQuYW5pbWF0aW9ucztcbiAgICAgIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGNoaWxkQW5pbWF0aW9ucyk7XG4gICAgICBpZiAoIWNoaWxkQW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkLmNoaWxkcmVuLmxlbmd0aCkgeyBjaGlsZHJlbi5zcGxpY2UoYywgMSk7IH1cbiAgICB9XG4gICAgaWYgKCFhbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGRyZW4ubGVuZ3RoKSB7IGluc3RhbmNlLnBhdXNlKCk7IH1cbiAgfVxufVxuXG4vLyBTdGFnZ2VyIGhlbHBlcnNcblxuZnVuY3Rpb24gc3RhZ2dlcih2YWwsIHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cbiAgdmFyIGRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb24gfHwgJ25vcm1hbCc7XG4gIHZhciBlYXNpbmcgPSBwYXJhbXMuZWFzaW5nID8gcGFyc2VFYXNpbmdzKHBhcmFtcy5lYXNpbmcpIDogbnVsbDtcbiAgdmFyIGdyaWQgPSBwYXJhbXMuZ3JpZDtcbiAgdmFyIGF4aXMgPSBwYXJhbXMuYXhpcztcbiAgdmFyIGZyb21JbmRleCA9IHBhcmFtcy5mcm9tIHx8IDA7XG4gIHZhciBmcm9tRmlyc3QgPSBmcm9tSW5kZXggPT09ICdmaXJzdCc7XG4gIHZhciBmcm9tQ2VudGVyID0gZnJvbUluZGV4ID09PSAnY2VudGVyJztcbiAgdmFyIGZyb21MYXN0ID0gZnJvbUluZGV4ID09PSAnbGFzdCc7XG4gIHZhciBpc1JhbmdlID0gaXMuYXJyKHZhbCk7XG4gIHZhciB2YWwxID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzBdKSA6IHBhcnNlRmxvYXQodmFsKTtcbiAgdmFyIHZhbDIgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMV0pIDogMDtcbiAgdmFyIHVuaXQgPSBnZXRVbml0KGlzUmFuZ2UgPyB2YWxbMV0gOiB2YWwpIHx8IDA7XG4gIHZhciBzdGFydCA9IHBhcmFtcy5zdGFydCB8fCAwICsgKGlzUmFuZ2UgPyB2YWwxIDogMCk7XG4gIHZhciB2YWx1ZXMgPSBbXTtcbiAgdmFyIG1heFZhbHVlID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbCwgaSwgdCkge1xuICAgIGlmIChmcm9tRmlyc3QpIHsgZnJvbUluZGV4ID0gMDsgfVxuICAgIGlmIChmcm9tQ2VudGVyKSB7IGZyb21JbmRleCA9ICh0IC0gMSkgLyAyOyB9XG4gICAgaWYgKGZyb21MYXN0KSB7IGZyb21JbmRleCA9IHQgLSAxOyB9XG4gICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdDsgaW5kZXgrKykge1xuICAgICAgICBpZiAoIWdyaWQpIHtcbiAgICAgICAgICB2YWx1ZXMucHVzaChNYXRoLmFicyhmcm9tSW5kZXggLSBpbmRleCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBmcm9tWCA9ICFmcm9tQ2VudGVyID8gZnJvbUluZGV4JWdyaWRbMF0gOiAoZ3JpZFswXS0xKS8yO1xuICAgICAgICAgIHZhciBmcm9tWSA9ICFmcm9tQ2VudGVyID8gTWF0aC5mbG9vcihmcm9tSW5kZXgvZ3JpZFswXSkgOiAoZ3JpZFsxXS0xKS8yO1xuICAgICAgICAgIHZhciB0b1ggPSBpbmRleCVncmlkWzBdO1xuICAgICAgICAgIHZhciB0b1kgPSBNYXRoLmZsb29yKGluZGV4L2dyaWRbMF0pO1xuICAgICAgICAgIHZhciBkaXN0YW5jZVggPSBmcm9tWCAtIHRvWDtcbiAgICAgICAgICB2YXIgZGlzdGFuY2VZID0gZnJvbVkgLSB0b1k7XG4gICAgICAgICAgdmFyIHZhbHVlID0gTWF0aC5zcXJ0KGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWSk7XG4gICAgICAgICAgaWYgKGF4aXMgPT09ICd4JykgeyB2YWx1ZSA9IC1kaXN0YW5jZVg7IH1cbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3knKSB7IHZhbHVlID0gLWRpc3RhbmNlWTsgfVxuICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBtYXhWYWx1ZSA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgICBpZiAoZWFzaW5nKSB7IHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gZWFzaW5nKHZhbCAvIG1heFZhbHVlKSAqIG1heFZhbHVlOyB9KTsgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnKSB7IHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gYXhpcyA/ICh2YWwgPCAwKSA/IHZhbCAqIC0xIDogLXZhbCA6IE1hdGguYWJzKG1heFZhbHVlIC0gdmFsKTsgfSk7IH1cbiAgICB9XG4gICAgdmFyIHNwYWNpbmcgPSBpc1JhbmdlID8gKHZhbDIgLSB2YWwxKSAvIG1heFZhbHVlIDogdmFsMTtcbiAgICByZXR1cm4gc3RhcnQgKyAoc3BhY2luZyAqIChNYXRoLnJvdW5kKHZhbHVlc1tpXSAqIDEwMCkgLyAxMDApKSArIHVuaXQ7XG4gIH1cbn1cblxuLy8gVGltZWxpbmVcblxuZnVuY3Rpb24gdGltZWxpbmUocGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuICB2YXIgdGwgPSBhbmltZShwYXJhbXMpO1xuICB0bC5kdXJhdGlvbiA9IDA7XG4gIHRsLmFkZCA9IGZ1bmN0aW9uKGluc3RhbmNlUGFyYW1zLCB0aW1lbGluZU9mZnNldCkge1xuICAgIHZhciB0bEluZGV4ID0gYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YodGwpO1xuICAgIHZhciBjaGlsZHJlbiA9IHRsLmNoaWxkcmVuO1xuICAgIGlmICh0bEluZGV4ID4gLTEpIHsgYWN0aXZlSW5zdGFuY2VzLnNwbGljZSh0bEluZGV4LCAxKTsgfVxuICAgIGZ1bmN0aW9uIHBhc3NUaHJvdWdoKGlucykgeyBpbnMucGFzc1Rocm91Z2ggPSB0cnVlOyB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykgeyBwYXNzVGhyb3VnaChjaGlsZHJlbltpXSk7IH1cbiAgICB2YXIgaW5zUGFyYW1zID0gbWVyZ2VPYmplY3RzKGluc3RhbmNlUGFyYW1zLCByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcykpO1xuICAgIGluc1BhcmFtcy50YXJnZXRzID0gaW5zUGFyYW1zLnRhcmdldHMgfHwgcGFyYW1zLnRhcmdldHM7XG4gICAgdmFyIHRsRHVyYXRpb24gPSB0bC5kdXJhdGlvbjtcbiAgICBpbnNQYXJhbXMuYXV0b3BsYXkgPSBmYWxzZTtcbiAgICBpbnNQYXJhbXMuZGlyZWN0aW9uID0gdGwuZGlyZWN0aW9uO1xuICAgIGluc1BhcmFtcy50aW1lbGluZU9mZnNldCA9IGlzLnVuZCh0aW1lbGluZU9mZnNldCkgPyB0bER1cmF0aW9uIDogZ2V0UmVsYXRpdmVWYWx1ZSh0aW1lbGluZU9mZnNldCwgdGxEdXJhdGlvbik7XG4gICAgcGFzc1Rocm91Z2godGwpO1xuICAgIHRsLnNlZWsoaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0KTtcbiAgICB2YXIgaW5zID0gYW5pbWUoaW5zUGFyYW1zKTtcbiAgICBwYXNzVGhyb3VnaChpbnMpO1xuICAgIGNoaWxkcmVuLnB1c2goaW5zKTtcbiAgICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhjaGlsZHJlbiwgcGFyYW1zKTtcbiAgICB0bC5kZWxheSA9IHRpbWluZ3MuZGVsYXk7XG4gICAgdGwuZW5kRGVsYXkgPSB0aW1pbmdzLmVuZERlbGF5O1xuICAgIHRsLmR1cmF0aW9uID0gdGltaW5ncy5kdXJhdGlvbjtcbiAgICB0bC5zZWVrKDApO1xuICAgIHRsLnJlc2V0KCk7XG4gICAgaWYgKHRsLmF1dG9wbGF5KSB7IHRsLnBsYXkoKTsgfVxuICAgIHJldHVybiB0bDtcbiAgfTtcbiAgcmV0dXJuIHRsO1xufVxuXG5hbmltZS52ZXJzaW9uID0gJzMuMS4wJztcbmFuaW1lLnNwZWVkID0gMTtcbmFuaW1lLnJ1bm5pbmcgPSBhY3RpdmVJbnN0YW5jZXM7XG5hbmltZS5yZW1vdmUgPSByZW1vdmVUYXJnZXRzO1xuYW5pbWUuZ2V0ID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZTtcbmFuaW1lLnNldCA9IHNldFRhcmdldHNWYWx1ZTtcbmFuaW1lLmNvbnZlcnRQeCA9IGNvbnZlcnRQeFRvVW5pdDtcbmFuaW1lLnBhdGggPSBnZXRQYXRoO1xuYW5pbWUuc2V0RGFzaG9mZnNldCA9IHNldERhc2hvZmZzZXQ7XG5hbmltZS5zdGFnZ2VyID0gc3RhZ2dlcjtcbmFuaW1lLnRpbWVsaW5lID0gdGltZWxpbmU7XG5hbmltZS5lYXNpbmcgPSBwYXJzZUVhc2luZ3M7XG5hbmltZS5wZW5uZXIgPSBwZW5uZXI7XG5hbmltZS5yYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IH07XG5cbmV4cG9ydCBkZWZhdWx0IGFuaW1lO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohXFxyXFxuICogZnVsbFBhZ2UgMy4wLjhcXHJcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanNcXHJcXG4gKlxcclxcbiAqIEBsaWNlbnNlIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2Ugb25seVxcclxcbiAqIG9yIEZ1bGxwYWdlIENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcXHJcXG4gKiBodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL3ByaWNpbmcvXFxyXFxuICpcXHJcXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggaHR0cDovL2FsdmFyb3RyaWdvLmNvbS9mdWxsUGFnZSAtIEEgcHJvamVjdCBieSBBbHZhcm8gVHJpZ29cXHJcXG4gKi9cXHJcXG5odG1sLmZwLWVuYWJsZWQsXFxyXFxuLmZwLWVuYWJsZWQgYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcclxcblxcclxcbiAgICAvKkF2b2lkIGZsaWNrZXIgb24gc2xpZGVzIHRyYW5zaXRpb25zIGZvciBtb2JpbGUgcGhvbmVzICMzMzYgKi9cXHJcXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcclxcbn1cXHJcXG4uZnAtc2VjdGlvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmk8PTUgQW5kcm9pZDw9MyAqL1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDw9MjggKi9cXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmZwLXNsaWRlIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbi5mcC1zbGlkZSwgLmZwLXNsaWRlc0NvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5mcC1zbGlkZXMge1xcclxcbiAgICB6LWluZGV4OjE7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0OyAvKiBTYWZhcmk8PTYgQW5kcm9pZDw9NC4zICovXFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG4uZnAtc2VjdGlvbi5mcC10YWJsZSwgLmZwLXNsaWRlLmZwLXRhYmxlIHtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIHRhYmxlLWxheW91dDpmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5mcC10YWJsZUNlbGwge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uZnAtc2xpZGVzQ29udGFpbmVyIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmZwLWNvbnRyb2xBcnJvdyB7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIHdlYmtpdCAoc2FmYXJpLCBjaHJvbWUpIGJyb3dzZXJzICovXFxyXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIG1vemlsbGEgYnJvd3NlcnMgKi9cXHJcXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiB3ZWJraXQgKGtvbnF1ZXJvcikgYnJvd3NlcnMgKi9cXHJcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRTEwKyAqL1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0zOHB4O1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xcclxcbn1cXHJcXG4uZnAtY29udHJvbEFycm93LmZwLXByZXYge1xcclxcbiAgICBsZWZ0OiAxNXB4O1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzOC41cHggMzRweCAzOC41cHggMDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uZnAtY29udHJvbEFycm93LmZwLW5leHQge1xcclxcbiAgICByaWdodDogMTVweDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzOC41cHggMCAzOC41cHggMzRweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmO1xcclxcbn1cXHJcXG4uZnAtc2Nyb2xsYWJsZSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmZwLXNjcm9sbGVye1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uaVNjcm9sbEluZGljYXRvcntcXHJcXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5mcC1ub3RyYW5zaXRpb24ge1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4jZnAtbmF2IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0zMnB4O1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcXHJcXG59XFxyXFxuI2ZwLW5hdi5mcC1yaWdodCB7XFxyXFxuICAgIHJpZ2h0OiAxN3B4O1xcclxcbn1cXHJcXG4jZnAtbmF2LmZwLWxlZnQge1xcclxcbiAgICBsZWZ0OiAxN3B4O1xcclxcbn1cXHJcXG4uZnAtc2xpZGVzTmF2e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XFxyXFxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5mcC1zbGlkZXNOYXYuZnAtYm90dG9tIHtcXHJcXG4gICAgYm90dG9tOiAxN3B4O1xcclxcbn1cXHJcXG4uZnAtc2xpZGVzTmF2LmZwLXRvcCB7XFxyXFxuICAgIHRvcDogMTdweDtcXHJcXG59XFxyXFxuI2ZwLW5hdiB1bCxcXHJcXG4uZnAtc2xpZGVzTmF2IHVsIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbiNmcC1uYXYgdWwgbGksXFxyXFxuLmZwLXNsaWRlc05hdiB1bCBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTRweDtcXHJcXG4gICAgaGVpZ2h0OiAxM3B4O1xcclxcbiAgICBtYXJnaW46IDdweDtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxufVxcclxcbi5mcC1zbGlkZXNOYXYgdWwgbGkge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcbiNmcC1uYXYgdWwgbGkgYSxcXHJcXG4uZnAtc2xpZGVzTmF2IHVsIGxpIGEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuI2ZwLW5hdiB1bCBsaSBhLmFjdGl2ZSBzcGFuLFxcclxcbi5mcC1zbGlkZXNOYXYgdWwgbGkgYS5hY3RpdmUgc3BhbixcXHJcXG4jZnAtbmF2IHVsIGxpOmhvdmVyIGEuYWN0aXZlIHNwYW4sXFxyXFxuLmZwLXNsaWRlc05hdiB1bCBsaTpob3ZlciBhLmFjdGl2ZSBzcGFue1xcclxcbiAgICBoZWlnaHQ6IDEycHg7XFxyXFxuICAgIHdpZHRoOiAxMnB4O1xcclxcbiAgICBtYXJnaW46IC02cHggMCAwIC02cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuIH1cXHJcXG4jZnAtbmF2IHVsIGxpIGEgc3BhbixcXHJcXG4uZnAtc2xpZGVzTmF2IHVsIGxpIGEgc3BhbiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgd2lkdGg6IDRweDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBtYXJnaW46IC0ycHggMCAwIC0ycHg7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuI2ZwLW5hdiB1bCBsaTpob3ZlciBhIHNwYW4sXFxyXFxuLmZwLXNsaWRlc05hdiB1bCBsaTpob3ZlciBhIHNwYW57XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogLTVweCAwcHggMHB4IC01cHg7XFxyXFxufVxcclxcbiNmcC1uYXYgdWwgbGkgLmZwLXRvb2x0aXAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLTJweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jZnAtbmF2IHVsIGxpOmhvdmVyIC5mcC10b29sdGlwLFxcclxcbiNmcC1uYXYuZnAtc2hvdy1hY3RpdmUgYS5hY3RpdmUgKyAuZnAtdG9vbHRpcCB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuI2ZwLW5hdiB1bCBsaSAuZnAtdG9vbHRpcC5mcC1yaWdodCB7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG4jZnAtbmF2IHVsIGxpIC5mcC10b29sdGlwLmZwLWxlZnQge1xcclxcbiAgICBsZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG4uZnAtYXV0by1oZWlnaHQuZnAtc2VjdGlvbixcXHJcXG4uZnAtYXV0by1oZWlnaHQgLmZwLXNsaWRlLFxcclxcbi5mcC1hdXRvLWhlaWdodCAuZnAtdGFibGVDZWxse1xcclxcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmZwLXJlc3BvbnNpdmUgLmZwLWF1dG8taGVpZ2h0LXJlc3BvbnNpdmUuZnAtc2VjdGlvbixcXHJcXG4uZnAtcmVzcG9uc2l2ZSAuZnAtYXV0by1oZWlnaHQtcmVzcG9uc2l2ZSAuZnAtc2xpZGUsXFxyXFxuLmZwLXJlc3BvbnNpdmUgLmZwLWF1dG8taGVpZ2h0LXJlc3BvbnNpdmUgLmZwLXRhYmxlQ2VsbCB7XFxyXFxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKk9ubHkgZGlzcGxheSBjb250ZW50IHRvIHNjcmVlbiByZWFkZXJzKi9cXHJcXG4uZnAtc3Itb25seXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcblxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIgIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5idXR0b24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbnB1dDo6LW1zLWNsZWFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6MDtcXG4gIG1hcmdpbjowO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvRnJvbnRFbmRCYXNpYy5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vaW1nL0Zyb250RW5kUHJvLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvSU1HXzQ3MjQuSlBHXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uOm50aC1jaGlsZCgybikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQyRTQ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbjpudGgtY2hpbGQoMm4gKyAxKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGNvbG9yOiAjRkE2NjIyO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDMwcHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpbmsge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxyXFxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyBcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW5Nb3JlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0aHViIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZ2l0aHViLmdpdGh1YmFzc2V0cy5jb20vaW1hZ2VzL21vZHVsZXMvbG9nb3NfcGFnZS9PY3RvY2F0LnBuZykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0OyBcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtlZGluIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS81NGJkMzZhYmU0YjBmZjk1Njk5NTNlZmEvMTU0MDk3MzQyOTQwNS0zSFk3RzNJRVlYWFZHVUkwQ0RPNS9rZTE3WndkR0JUb2RkSThwRG00OGtMWENmODhfOXVOVEtYa3EyN2NGNHNCN2dRYTNINzhIM1kwdHhqYWl2XzBmRG9PdnhjZE1tTUtrRHN5VXFNU3NNV3hIazcyNXlpaUhDQ0xmcmg4TzF6NVFIeU5PcUJVVUV0RERzUldySkxUbXdiQTZ1cGJMNUJ1OTd0Sm9jaVhKa2xLcHJSTWRIMlRsNEYxUGphb1BUM1lVczV3a2w1b2pDVjFPOTAwVUo3TUUvTGlua2VkSW5fbG9nb19pbml0aWFscy5wbmcpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbGVncmFtIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNS81Yy9UZWxlZ3JhbV9NZXNzZW5nZXIucG5nKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5jb2Rld2FycyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvMTc2MC8xKlctT1pzWVNGTUlKZ19NLWJQSEgwLXcucG5nKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3MxLmljb25iaXJkLmNvbS9pY28vMjAxMy8xMi81MTgvdzUxMmg1MTIxMzg2OTU2OTg5Q29udGFjdHMwMS5wbmcpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Q6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnbXkgY29udGFjdHMnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDYwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC42cztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Q6aG92ZXI6YWZ0ZXIge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2TGluazpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmlsdGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRNZSB7XFxyXFxuICAgIHBhZGRpbmc6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpblRleHQge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5teVNraWxscyB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxsVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5za2lsbHNJdGVtcyB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxsSXRlbSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxyXFxufVxcclxcblxcclxcbi5za2lsbEl0ZW06bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgbWFyZ2luOiAwIDE2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGxJTUcge1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGxJTUcuaHRtbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzYvNjEvSFRNTDVfbG9nb19hbmRfd29yZG1hcmsuc3ZnLzEyMDBweC1IVE1MNV9sb2dvX2FuZF93b3JkbWFyay5zdmcucG5nKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxufVxcclxcbi5za2lsbElNRy5jc3Mge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9oc3RvLm9yZy93ZWJ0L2V0L3ZnL3VtL2V0dmd1bXZkcXo2X3JzMWRwM2tqeWp0LXNwbS5wbmcpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuLnNraWxsSU1HLmphdmFzY3JpcHR7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3BhcnRuZXIuYml6LnVhL2ltYWdlcy9ibG9naS8yMDZfMTQ4MDA1OTk1MV9qYXZhc2NyaXB0LWZ1bmN0aW9uLWRlY2xhcmF0aW9uLXZzLWZ1bmN0aW9uLWV4cHJlc3Npb24ucG5nKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5za2lsbExldmVsIGltZyB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1UaXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ub25BY3RpdmUge1xcclxcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgXFxyXFxufVxcclxcblxcclxcbi50ZWNobm9sb2dpZXMge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGVjaG5vbG9naWVzVGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZWNobm9sb2dpZXNMaXN0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tY291bnQ6IDI7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcbi50ZWNobm9sb2dpZXNJdGVtIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGVjaG5vbG9naWVzSXRlbTpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogOHB4O1xcclxcbiAgICB3aWR0aDogOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2NjIyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDE1JTtcXHJcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDRweCk7XFxyXFxufVxcclxcblxcclxcbi5jb3ZlclRleHQge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmZwLXRvb2x0aXAuZnAtcmlnaHQge1xcclxcbiAgICBjb2xvcjogI0ZBNjYyMjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlcnRpZmljYXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbmgyLmNlcnRpZmljYXRlc1RpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlcnRpZmljYXRlc0l0ZW1zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlcnRpZmljYXRlSXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxyXFxufVxcclxcblxcclxcbi5jZXJ0aWZpY2F0ZUl0ZW06Zmlyc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VydGlmaWNhdGVJdGVtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5oaWxsZWxCYXNpYyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlsbGVsQWR2YW5jZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmRpdi5mcC1zbGlkZXNOYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmZwLXNsaWRlc05hdiBhLmFjdGl2ZSBzcGFuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBNjYyMjtcXHJcXG59XFxyXFxuXFxyXFxuLmZwLWNvbnRyb2xBcnJvdyB7XFxyXFxuICAgIG1hcmdpbjogMCAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwQmFja2dyb3VuZCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwQmFja2dyb3VuZDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dQb3B1cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cENvbnRhY3Qge1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5waG90byB7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2NjIyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5waG90bzphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICBsZWZ0OiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIDEwMCUvY292ZXIgbm8tcmVwZWF0O1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZUl0ZW0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2ZpbGVUaXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGNvbG9yOiAjRkE2NjIyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XFxyXFxuICAgIC50ZWNobm9sb2dpZXNJdGVtOmJlZm9yZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTQ1cHgpIHtcXHJcXG4gICAgLmNlcnRpZmljYXRlSXRlbSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDQzMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODVweCkge1xcclxcblxcclxcbiAgICAuY2VydGlmaWNhdGUgaDIge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuY2VydGlmaWNhdGVJdGVtIHtcXHJcXG4gICAgICAgIGhlaWdodDogMjEwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNlcnRpZmljYXRlSXRlbS5oaWxsZWxBZHZhbmNlZCB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xcclxcblxcclxcbiAgICAuc2tpbGxJdGVtOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubXlTa2lsbHMgaDIge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2tpbGxJTUcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pdGVtVGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5za2lsbExldmVsIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xcclxcbiAgICAudGVjaG5vbG9naWVzTGlzdCB7XFxyXFxuICAgICAgICBjb2x1bW4tY291bnQ6IDE7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU4OXB4KSB7XFxyXFxuICAgIC5tYWluVGV4dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5za2lsbHNJdGVtcyB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYXZMaW5rIHtcXHJcXG4gICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5za2lsbEl0ZW06bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5za2lsbExldmVsIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZWNobm9sb2dpZXMgaDIge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGVjaG5vbG9naWVzTGlzdCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvdmVyVGV4dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Z1bGxwYWdlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvKiFcclxuICogZnVsbFBhZ2UgMy4wLjhcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzXHJcbiAqXHJcbiAqIEBsaWNlbnNlIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2Ugb25seVxyXG4gKiBvciBGdWxscGFnZSBDb21tZXJjaWFsIExpY2Vuc2UgZm9yIGNvbW1lcmNpYWwgdXNlXHJcbiAqIGh0dHA6Ly9hbHZhcm90cmlnby5jb20vZnVsbFBhZ2UvcHJpY2luZy9cclxuICpcclxuICogQ29weXJpZ2h0IChDKSAyMDE4IGh0dHA6Ly9hbHZhcm90cmlnby5jb20vZnVsbFBhZ2UgLSBBIHByb2plY3QgYnkgQWx2YXJvIFRyaWdvXHJcbiAqL1xyXG4oZnVuY3Rpb24oIHJvb3QsIHdpbmRvdywgZG9jdW1lbnQsIGZhY3RvcnksIHVuZGVmaW5lZCkge1xyXG4gICAgaWYoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcclxuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXHJcbiAgICAgICAgZGVmaW5lKCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcm9vdC5mdWxscGFnZSA9IGZhY3Rvcnkod2luZG93LCBkb2N1bWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiByb290LmZ1bGxwYWdlO1xyXG4gICAgICAgIH0gKTtcclxuICAgIH0gZWxzZSBpZiggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xyXG4gICAgICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMuXHJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHdpbmRvdywgZG9jdW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHMuXHJcbiAgICAgICAgd2luZG93LmZ1bGxwYWdlID0gZmFjdG9yeSh3aW5kb3csIGRvY3VtZW50KTtcclxuICAgIH1cclxufSh0aGlzLCB3aW5kb3csIGRvY3VtZW50LCBmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50KXtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAvLyBrZWVwaW5nIGNlbnRyYWwgc2V0IG9mIGNsYXNzbmFtZXMgYW5kIHNlbGVjdG9yc1xyXG4gICAgdmFyIFdSQVBQRVIgPSAgICAgICAgICAgICAgICdmdWxscGFnZS13cmFwcGVyJztcclxuICAgIHZhciBXUkFQUEVSX1NFTCA9ICAgICAgICAgICAnLicgKyBXUkFQUEVSO1xyXG5cclxuICAgIC8vIHNsaW1zY3JvbGxcclxuICAgIHZhciBTQ1JPTExBQkxFID0gICAgICAgICAgICAnZnAtc2Nyb2xsYWJsZSc7XHJcbiAgICB2YXIgU0NST0xMQUJMRV9TRUwgPSAgICAgICAgJy4nICsgU0NST0xMQUJMRTtcclxuXHJcbiAgICAvLyB1dGlsXHJcbiAgICB2YXIgUkVTUE9OU0lWRSA9ICAgICAgICAgICAgJ2ZwLXJlc3BvbnNpdmUnO1xyXG4gICAgdmFyIE5PX1RSQU5TSVRJT04gPSAgICAgICAgICdmcC1ub3RyYW5zaXRpb24nO1xyXG4gICAgdmFyIERFU1RST1lFRCA9ICAgICAgICAgICAgICdmcC1kZXN0cm95ZWQnO1xyXG4gICAgdmFyIEVOQUJMRUQgPSAgICAgICAgICAgICAgICdmcC1lbmFibGVkJztcclxuICAgIHZhciBWSUVXSU5HX1BSRUZJWCA9ICAgICAgICAnZnAtdmlld2luZyc7XHJcbiAgICB2YXIgQUNUSVZFID0gICAgICAgICAgICAgICAgJ2FjdGl2ZSc7XHJcbiAgICB2YXIgQUNUSVZFX1NFTCA9ICAgICAgICAgICAgJy4nICsgQUNUSVZFO1xyXG4gICAgdmFyIENPTVBMRVRFTFkgPSAgICAgICAgICAgICdmcC1jb21wbGV0ZWx5JztcclxuICAgIHZhciBDT01QTEVURUxZX1NFTCA9ICAgICAgICAnLicgKyBDT01QTEVURUxZO1xyXG5cclxuICAgIC8vIHNlY3Rpb25cclxuICAgIHZhciBTRUNUSU9OX0RFRkFVTFRfU0VMID0gICAnLnNlY3Rpb24nO1xyXG4gICAgdmFyIFNFQ1RJT04gPSAgICAgICAgICAgICAgICdmcC1zZWN0aW9uJztcclxuICAgIHZhciBTRUNUSU9OX1NFTCA9ICAgICAgICAgICAnLicgKyBTRUNUSU9OO1xyXG4gICAgdmFyIFNFQ1RJT05fQUNUSVZFX1NFTCA9ICAgIFNFQ1RJT05fU0VMICsgQUNUSVZFX1NFTDtcclxuICAgIHZhciBUQUJMRV9DRUxMID0gICAgICAgICAgICAnZnAtdGFibGVDZWxsJztcclxuICAgIHZhciBUQUJMRV9DRUxMX1NFTCA9ICAgICAgICAnLicgKyBUQUJMRV9DRUxMO1xyXG4gICAgdmFyIEFVVE9fSEVJR0hUID0gICAgICAgICAgICdmcC1hdXRvLWhlaWdodCc7XHJcbiAgICB2YXIgQVVUT19IRUlHSFRfU0VMID0gICAgICAgJy4nICsgQVVUT19IRUlHSFQ7XHJcbiAgICB2YXIgQVVUT19IRUlHSFRfUkVTUE9OU0lWRSA9ICdmcC1hdXRvLWhlaWdodC1yZXNwb25zaXZlJztcclxuICAgIHZhciBBVVRPX0hFSUdIVF9SRVNQT05TSVZFX1NFTCA9ICcuJyArIEFVVE9fSEVJR0hUX1JFU1BPTlNJVkU7XHJcbiAgICB2YXIgTk9STUFMX1NDUk9MTCA9ICAgICAgICAgJ2ZwLW5vcm1hbC1zY3JvbGwnO1xyXG4gICAgdmFyIE5PUk1BTF9TQ1JPTExfU0VMID0gICAgICcuJyArIE5PUk1BTF9TQ1JPTEw7XHJcblxyXG4gICAgLy8gc2VjdGlvbiBuYXZcclxuICAgIHZhciBTRUNUSU9OX05BViA9ICAgICAgICAgICAnZnAtbmF2JztcclxuICAgIHZhciBTRUNUSU9OX05BVl9TRUwgPSAgICAgICAnIycgKyBTRUNUSU9OX05BVjtcclxuICAgIHZhciBTRUNUSU9OX05BVl9UT09MVElQID0gICAnZnAtdG9vbHRpcCc7XHJcbiAgICB2YXIgU0VDVElPTl9OQVZfVE9PTFRJUF9TRUw9Jy4nK1NFQ1RJT05fTkFWX1RPT0xUSVA7XHJcbiAgICB2YXIgU0hPV19BQ1RJVkVfVE9PTFRJUCA9ICAgJ2ZwLXNob3ctYWN0aXZlJztcclxuXHJcbiAgICAvLyBzbGlkZVxyXG4gICAgdmFyIFNMSURFX0RFRkFVTFRfU0VMID0gICAgICcuc2xpZGUnO1xyXG4gICAgdmFyIFNMSURFID0gICAgICAgICAgICAgICAgICdmcC1zbGlkZSc7XHJcbiAgICB2YXIgU0xJREVfU0VMID0gICAgICAgICAgICAgJy4nICsgU0xJREU7XHJcbiAgICB2YXIgU0xJREVfQUNUSVZFX1NFTCA9ICAgICAgU0xJREVfU0VMICsgQUNUSVZFX1NFTDtcclxuICAgIHZhciBTTElERVNfV1JBUFBFUiA9ICAgICAgICAnZnAtc2xpZGVzJztcclxuICAgIHZhciBTTElERVNfV1JBUFBFUl9TRUwgPSAgICAnLicgKyBTTElERVNfV1JBUFBFUjtcclxuICAgIHZhciBTTElERVNfQ09OVEFJTkVSID0gICAgICAnZnAtc2xpZGVzQ29udGFpbmVyJztcclxuICAgIHZhciBTTElERVNfQ09OVEFJTkVSX1NFTCA9ICAnLicgKyBTTElERVNfQ09OVEFJTkVSO1xyXG4gICAgdmFyIFRBQkxFID0gICAgICAgICAgICAgICAgICdmcC10YWJsZSc7XHJcblxyXG4gICAgLy8gc2xpZGUgbmF2XHJcbiAgICB2YXIgU0xJREVTX05BViA9ICAgICAgICAgICAgJ2ZwLXNsaWRlc05hdic7XHJcbiAgICB2YXIgU0xJREVTX05BVl9TRUwgPSAgICAgICAgJy4nICsgU0xJREVTX05BVjtcclxuICAgIHZhciBTTElERVNfTkFWX0xJTktfU0VMID0gICBTTElERVNfTkFWX1NFTCArICcgYSc7XHJcbiAgICB2YXIgU0xJREVTX0FSUk9XID0gICAgICAgICAgJ2ZwLWNvbnRyb2xBcnJvdyc7XHJcbiAgICB2YXIgU0xJREVTX0FSUk9XX1NFTCA9ICAgICAgJy4nICsgU0xJREVTX0FSUk9XO1xyXG4gICAgdmFyIFNMSURFU19QUkVWID0gICAgICAgICAgICdmcC1wcmV2JztcclxuICAgIHZhciBTTElERVNfUFJFVl9TRUwgPSAgICAgICAnLicgKyBTTElERVNfUFJFVjtcclxuICAgIHZhciBTTElERVNfQVJST1dfUFJFViA9ICAgICBTTElERVNfQVJST1cgKyAnICcgKyBTTElERVNfUFJFVjtcclxuICAgIHZhciBTTElERVNfQVJST1dfUFJFVl9TRUwgPSBTTElERVNfQVJST1dfU0VMICsgU0xJREVTX1BSRVZfU0VMO1xyXG4gICAgdmFyIFNMSURFU19ORVhUID0gICAgICAgICAgICdmcC1uZXh0JztcclxuICAgIHZhciBTTElERVNfTkVYVF9TRUwgPSAgICAgICAnLicgKyBTTElERVNfTkVYVDtcclxuICAgIHZhciBTTElERVNfQVJST1dfTkVYVCA9ICAgICBTTElERVNfQVJST1cgKyAnICcgKyBTTElERVNfTkVYVDtcclxuICAgIHZhciBTTElERVNfQVJST1dfTkVYVF9TRUwgPSBTTElERVNfQVJST1dfU0VMICsgU0xJREVTX05FWFRfU0VMO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpc2UoY29udGFpbmVyU2VsZWN0b3IsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgaXNPSyA9IG9wdGlvbnMgJiYgbmV3IFJlZ0V4cCgnKFtcXFxcZFxcXFx3XXs4fS0pezN9W1xcXFxkXFxcXHddezh9fF4oPz0uKj9bQS1ZXSkoPz0uKj9bYS15XSkoPz0uKj9bMC04XSkoPz0uKj9bIz8hQCQlXiYqLV0pLns4LH0kJykudGVzdChvcHRpb25zWydsaScrJ2NlbicrJ3NlSycgKyAnZScgKyAneSddKSB8fCBkb2N1bWVudC5kb21haW4uaW5kZXhPZignYWwnKyd2YXJvdHJpJyArJ2dvJyArICcuJyArICdjb20nKSA+IC0xO1xyXG5cclxuICAgICAgICAvLyBjYWNoZSBjb21tb24gZWxlbWVudHNcclxuICAgICAgICB2YXIgJGh0bWxCb2R5ID0gJCgnaHRtbCwgYm9keScpO1xyXG4gICAgICAgIHZhciAkaHRtbCA9ICQoJ2h0bWwnKVswXTtcclxuICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5JylbMF07XHJcblxyXG4gICAgICAgIC8vb25seSBvbmNlIG15IGZyaWVuZCFcclxuICAgICAgICBpZihoYXNDbGFzcygkaHRtbCwgRU5BQkxFRCkpeyBkaXNwbGF5V2FybmluZ3MoKTsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIHZhciBGUCA9IHt9O1xyXG5cclxuICAgICAgICAvLyBDcmVhdGluZyBzb21lIGRlZmF1bHRzLCBleHRlbmRpbmcgdGhlbSB3aXRoIGFueSBvcHRpb25zIHRoYXQgd2VyZSBwcm92aWRlZFxyXG4gICAgICAgIG9wdGlvbnMgPSBkZWVwRXh0ZW5kKHtcclxuICAgICAgICAgICAgLy9uYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIG1lbnU6IGZhbHNlLFxyXG4gICAgICAgICAgICBhbmNob3JzOltdLFxyXG4gICAgICAgICAgICBsb2NrQW5jaG9yczogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IGZhbHNlLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uUG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25Ub29sdGlwczogW10sXHJcbiAgICAgICAgICAgIHNob3dBY3RpdmVUb29sdGlwOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVzTmF2aWdhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHNsaWRlc05hdlBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgc2Nyb2xsQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgaHlicmlkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIC8vc2Nyb2xsaW5nXHJcbiAgICAgICAgICAgIGNzczM6IHRydWUsXHJcbiAgICAgICAgICAgIHNjcm9sbGluZ1NwZWVkOiA3MDAsXHJcbiAgICAgICAgICAgIGF1dG9TY3JvbGxpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGZpdFRvU2VjdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZml0VG9TZWN0aW9uRGVsYXk6IDEwMDAsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dEN1YmljJyxcclxuICAgICAgICAgICAgZWFzaW5nY3NzMzogJ2Vhc2UnLFxyXG4gICAgICAgICAgICBsb29wQm90dG9tOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9vcFRvcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvb3BIb3Jpem9udGFsOiB0cnVlLFxyXG4gICAgICAgICAgICBjb250aW51b3VzVmVydGljYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250aW51b3VzSG9yaXpvbnRhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcm9sbEhvcml6b250YWxseTogZmFsc2UsXHJcbiAgICAgICAgICAgIGludGVybG9ja2VkU2xpZGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgZHJhZ0FuZE1vdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBvZmZzZXRTZWN0aW9uczogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlc2V0U2xpZGVyczogZmFsc2UsXHJcbiAgICAgICAgICAgIGZhZGluZ0VmZmVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIG5vcm1hbFNjcm9sbEVsZW1lbnRzOiBudWxsLFxyXG4gICAgICAgICAgICBzY3JvbGxPdmVyZmxvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93UmVzZXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY3JvbGxPdmVyZmxvd0hhbmRsZXI6IHdpbmRvdy5mcF9zY3JvbGxvdmVyZmxvdyA/IHdpbmRvdy5mcF9zY3JvbGxvdmVyZmxvdy5pc2Nyb2xsSGFuZGxlciA6IG51bGwsXHJcbiAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93T3B0aW9uczogbnVsbCxcclxuICAgICAgICAgICAgdG91Y2hTZW5zaXRpdml0eTogNSxcclxuICAgICAgICAgICAgdG91Y2hXcmFwcGVyOiB0eXBlb2YgY29udGFpbmVyU2VsZWN0b3IgPT09ICdzdHJpbmcnID8gJChjb250YWluZXJTZWxlY3RvcilbMF0gOiBjb250YWluZXJTZWxlY3RvcixcclxuICAgICAgICAgICAgYmlnU2VjdGlvbnNEZXN0aW5hdGlvbjogbnVsbCxcclxuXHJcbiAgICAgICAgICAgIC8vQWNjZXNzaWJpbGl0eVxyXG4gICAgICAgICAgICBrZXlib2FyZFNjcm9sbGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgYW5pbWF0ZUFuY2hvcjogdHJ1ZSxcclxuICAgICAgICAgICAgcmVjb3JkSGlzdG9yeTogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIC8vZGVzaWduXHJcbiAgICAgICAgICAgIGNvbnRyb2xBcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRyb2xBcnJvd0NvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsQ2VudGVyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHNlY3Rpb25zQ29sb3IgOiBbXSxcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogMCxcclxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcclxuICAgICAgICAgICAgZml4ZWRFbGVtZW50czogbnVsbCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogMCwgLy9iYWNrd2FyZHMgY29tcGFiaXRpbGl0eSB3aXRoIHJlc3BvbnNpdmVXaWRkdGhcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZVdpZHRoOiAwLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlSGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlU2xpZGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFyYWxsYXg6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXJhbGxheE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdyZXZlYWwnLFxyXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZTogNjIsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogJ3RyYW5zbGF0ZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FyZHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYXJkc09wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAxMDAsXHJcbiAgICAgICAgICAgICAgICBmYWRlQ29udGVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGZhZGVCYWNrZ3JvdW5kOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAvL0N1c3RvbSBzZWxlY3RvcnNcclxuICAgICAgICAgICAgc2VjdGlvblNlbGVjdG9yOiBTRUNUSU9OX0RFRkFVTFRfU0VMLFxyXG4gICAgICAgICAgICBzbGlkZVNlbGVjdG9yOiBTTElERV9ERUZBVUxUX1NFTCxcclxuXHJcbiAgICAgICAgICAgIC8vZXZlbnRzXHJcbiAgICAgICAgICAgIHYyY29tcGF0aWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFmdGVyTG9hZDogbnVsbCxcclxuICAgICAgICAgICAgb25MZWF2ZTogbnVsbCxcclxuICAgICAgICAgICAgYWZ0ZXJSZW5kZXI6IG51bGwsXHJcbiAgICAgICAgICAgIGFmdGVyUmVzaXplOiBudWxsLFxyXG4gICAgICAgICAgICBhZnRlclJlQnVpbGQ6IG51bGwsXHJcbiAgICAgICAgICAgIGFmdGVyU2xpZGVMb2FkOiBudWxsLFxyXG4gICAgICAgICAgICBvblNsaWRlTGVhdmU6IG51bGwsXHJcbiAgICAgICAgICAgIGFmdGVyUmVzcG9uc2l2ZTogbnVsbCxcclxuXHJcbiAgICAgICAgICAgIGxhenlMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vZmxhZyB0byBhdm9pZCB2ZXJ5IGZhc3Qgc2xpZGluZyBmb3IgbGFuZHNjYXBlIHNsaWRlcnNcclxuICAgICAgICB2YXIgc2xpZGVNb3ZpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIGlzVG91Y2hEZXZpY2UgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBob25lfGlQb2R8aVBhZHxBbmRyb2lkfHBsYXlib29rfHNpbGt8QmxhY2tCZXJyeXxCQjEwfFdpbmRvd3MgUGhvbmV8VGl6ZW58QmFkYXx3ZWJPU3xJRU1vYmlsZXxPcGVyYSBNaW5pKS8pO1xyXG4gICAgICAgIHZhciBpc1RvdWNoID0gKCgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHx8IChuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDApIHx8IChuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMpKTtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gdHlwZW9mIGNvbnRhaW5lclNlbGVjdG9yID09PSAnc3RyaW5nJyA/ICQoY29udGFpbmVyU2VsZWN0b3IpWzBdIDogY29udGFpbmVyU2VsZWN0b3I7XHJcbiAgICAgICAgdmFyIHdpbmRvd3NIZWlnaHQgPSBnZXRXaW5kb3dIZWlnaHQoKTtcclxuICAgICAgICB2YXIgd2luZG93c1dpZHRoID0gZ2V0V2luZG93V2lkdGgoKTtcclxuICAgICAgICB2YXIgaXNSZXNpemluZyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpc1dpbmRvd0ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIHZhciBsYXN0U2Nyb2xsZWREZXN0aW55O1xyXG4gICAgICAgIHZhciBsYXN0U2Nyb2xsZWRTbGlkZTtcclxuICAgICAgICB2YXIgY2FuU2Nyb2xsID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc2Nyb2xsaW5ncyA9IFtdO1xyXG4gICAgICAgIHZhciBjb250cm9sUHJlc3NlZDtcclxuICAgICAgICB2YXIgc3RhcnRpbmdTZWN0aW9uO1xyXG4gICAgICAgIHZhciBpc1Njcm9sbEFsbG93ZWQgPSB7fTtcclxuICAgICAgICBpc1Njcm9sbEFsbG93ZWQubSA9IHsgICd1cCc6dHJ1ZSwgJ2Rvd24nOnRydWUsICdsZWZ0Jzp0cnVlLCAncmlnaHQnOnRydWUgfTtcclxuICAgICAgICBpc1Njcm9sbEFsbG93ZWQuayA9IGRlZXBFeHRlbmQoe30sIGlzU2Nyb2xsQWxsb3dlZC5tKTtcclxuICAgICAgICB2YXIgTVNQb2ludGVyID0gZ2V0TVNQb2ludGVyKCk7XHJcbiAgICAgICAgdmFyIGV2ZW50cyA9IHtcclxuICAgICAgICAgICAgdG91Y2htb3ZlOiAnb250b3VjaG1vdmUnIGluIHdpbmRvdyA/ICd0b3VjaG1vdmUnIDogIE1TUG9pbnRlci5tb3ZlLFxyXG4gICAgICAgICAgICB0b3VjaHN0YXJ0OiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgPyAndG91Y2hzdGFydCcgOiAgTVNQb2ludGVyLmRvd25cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBzY3JvbGxCYXJIYW5kbGVyO1xyXG5cclxuICAgICAgICAvLyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS91ZGFjaXR5L3VkODkxL2Jsb2IvZ2gtcGFnZXMvbGVzc29uMi1mb2N1cy8wNy1tb2RhbHMtYW5kLWtleWJvYXJkLXRyYXBzL3NvbHV0aW9uL21vZGFsLmpzXHJcbiAgICAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlucHV0Om5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCBpZnJhbWUsIG9iamVjdCwgZW1iZWQsIFt0YWJpbmRleD1cIjBcIl0sIFtjb250ZW50ZWRpdGFibGVdJztcclxuXHJcbiAgICAgICAgLy9jaGVrcyBmb3IgcGFzc2l2ZSBldmVudCBzdXBwb3J0XHJcbiAgICAgICAgdmFyIGdfc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBnX3N1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLCBudWxsLCBvcHRzKTtcclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidGVzdFBhc3NpdmVcIiwgbnVsbCwgb3B0cyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICAgICAgLy90aW1lb3V0c1xyXG4gICAgICAgIHZhciByZXNpemVJZDtcclxuICAgICAgICB2YXIgcmVzaXplSGFuZGxlcklkO1xyXG4gICAgICAgIHZhciBhZnRlclNlY3Rpb25Mb2Fkc0lkO1xyXG4gICAgICAgIHZhciBhZnRlclNsaWRlTG9hZHNJZDtcclxuICAgICAgICB2YXIgc2Nyb2xsSWQ7XHJcbiAgICAgICAgdmFyIHNjcm9sbElkMjtcclxuICAgICAgICB2YXIga2V5ZG93bklkO1xyXG4gICAgICAgIHZhciBnX2RvdWJsZUNoZWNrSGVpZ2h0SWQ7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFscyA9IGRlZXBFeHRlbmQoe30sIG9wdGlvbnMpOyAvL2RlZXAgY29weVxyXG4gICAgICAgIHZhciBhY3RpdmVBbmltYXRpb247XHJcbiAgICAgICAgdmFyIGdfaW5pdGlhbEFuY2hvcnNJbkRvbSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBnX2NhbkZpcmVNb3VzZUVudGVyTm9ybWFsU2Nyb2xsID0gdHJ1ZTtcclxuICAgICAgICB2YXIgZ19tZWRpYUxvYWRlZElkO1xyXG4gICAgICAgIHZhciBleHRlbnNpb25zID0gW1xyXG4gICAgICAgICAgICAncGFyYWxsYXgnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsT3ZlcmZsb3dSZXNldCcsXHJcbiAgICAgICAgICAgICdkcmFnQW5kTW92ZScsXHJcbiAgICAgICAgICAgICdvZmZzZXRTZWN0aW9ucycsXHJcbiAgICAgICAgICAgICdmYWRpbmdFZmZlY3QnLFxyXG4gICAgICAgICAgICAncmVzcG9uc2l2ZVNsaWRlcycsXHJcbiAgICAgICAgICAgICdjb250aW51b3VzSG9yaXpvbnRhbCcsXHJcbiAgICAgICAgICAgICdpbnRlcmxvY2tlZFNsaWRlcycsXHJcbiAgICAgICAgICAgICdzY3JvbGxIb3Jpem9udGFsbHknLFxyXG4gICAgICAgICAgICAncmVzZXRTbGlkZXJzJyxcclxuICAgICAgICAgICAgJ2NhcmRzJ1xyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGRpc3BsYXlXYXJuaW5ncygpO1xyXG5cclxuICAgICAgICAvL2Vhc2VJbk91dEN1YmljIGFuaW1hdGlvbiBpbmNsdWRlZCBpbiB0aGUgcGx1Z2luXHJcbiAgICAgICAgd2luZG93LmZwX2Vhc2luZ3MgPSBkZWVwRXh0ZW5kKHdpbmRvdy5mcF9lYXNpbmdzLCB7XHJcbiAgICAgICAgICAgIGVhc2VJbk91dEN1YmljOiBmdW5jdGlvbiAodCwgYiwgYywgZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCArIGI7cmV0dXJuIGMvMiooKHQtPTIpKnQqdCArIDIpICsgYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgdGhlIGF1dG9TY3JvbGwgb3B0aW9uLlxyXG4gICAgICAgICogSXQgY2hhbmdlcyB0aGUgc2Nyb2xsIGJhciB2aXNpYmlsaXR5IGFuZCB0aGUgaGlzdG9yeSBvZiB0aGUgc2l0ZSBhcyBhIHJlc3VsdC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldEF1dG9TY3JvbGxpbmcodmFsdWUsIHR5cGUpe1xyXG4gICAgICAgICAgICAvL3JlbW92aW5nIHRoZSB0cmFuc2Zvcm1hdGlvblxyXG4gICAgICAgICAgICBpZighdmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgc2lsZW50U2Nyb2xsKDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRWYXJpYWJsZVN0YXRlKCdhdXRvU2Nyb2xsaW5nJywgdmFsdWUsIHR5cGUpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF07XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgIW9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgIGNzcygkaHRtbEJvZHksIHtcclxuICAgICAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzEwMCUnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRSZWNvcmRIaXN0b3J5KG9yaWdpbmFscy5yZWNvcmRIaXN0b3J5LCAnaW50ZXJuYWwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2ZvciBJRSB0b3VjaCBkZXZpY2VzXHJcbiAgICAgICAgICAgICAgICBjc3MoY29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJy1tcy10b3VjaC1hY3Rpb24nOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvdWNoLWFjdGlvbic6ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudCAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAvL21vdmluZyB0aGUgY29udGFpbmVyIHVwXHJcbiAgICAgICAgICAgICAgICAgICAgc2lsZW50U2Nyb2xsKGVsZW1lbnQub2Zmc2V0VG9wKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjc3MoJGh0bWxCb2R5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ292ZXJmbG93JyA6ICd2aXNpYmxlJyxcclxuICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JyA6ICdpbml0aWFsJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlY29yZEhpc3RvcnkgPSAhb3B0aW9ucy5hdXRvU2Nyb2xsaW5nID8gZmFsc2UgOiBvcmlnaW5hbHMucmVjb3JkSGlzdG9yeTtcclxuICAgICAgICAgICAgICAgIHNldFJlY29yZEhpc3RvcnkocmVjb3JkSGlzdG9yeSwgJ2ludGVybmFsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9mb3IgSUUgdG91Y2ggZGV2aWNlc1xyXG4gICAgICAgICAgICAgICAgY3NzKGNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICAgICAgICAgICctbXMtdG91Y2gtYWN0aW9uJzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvdWNoLWFjdGlvbic6ICcnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB0aGUgcGFnZSB0byB0aGUgc2VjdGlvbiB3aXRoIG5vIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JvbGxTZXR0aW5ncyA9IGdldFNjcm9sbFNldHRpbmdzKGVsZW1lbnQub2Zmc2V0VG9wKTtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxTZXR0aW5ncy5lbGVtZW50LnNjcm9sbFRvKDAsIHNjcm9sbFNldHRpbmdzLm9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERlZmluZXMgd2hldGVyIHRvIHJlY29yZCB0aGUgaGlzdG9yeSBmb3IgZWFjaCBoYXNoIGNoYW5nZSBpbiB0aGUgVVJMLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UmVjb3JkSGlzdG9yeSh2YWx1ZSwgdHlwZSl7XHJcbiAgICAgICAgICAgIHNldFZhcmlhYmxlU3RhdGUoJ3JlY29yZEhpc3RvcnknLCB2YWx1ZSwgdHlwZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERlZmluZXMgdGhlIHNjcm9sbGluZyBzcGVlZFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0U2Nyb2xsaW5nU3BlZWQodmFsdWUsIHR5cGUpe1xyXG4gICAgICAgICAgICBzZXRWYXJpYWJsZVN0YXRlKCdzY3JvbGxpbmdTcGVlZCcsIHZhbHVlLCB0eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyBmaXRUb1NlY3Rpb25cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldEZpdFRvU2VjdGlvbih2YWx1ZSwgdHlwZSl7XHJcbiAgICAgICAgICAgIHNldFZhcmlhYmxlU3RhdGUoJ2ZpdFRvU2VjdGlvbicsIHZhbHVlLCB0eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyBsb2NrQW5jaG9yc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0TG9ja0FuY2hvcnModmFsdWUpe1xyXG4gICAgICAgICAgICBvcHRpb25zLmxvY2tBbmNob3JzID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgb3IgcmVtb3ZlIHRoZSBwb3NzaWJpbGl0eSBvZiBzY3JvbGxpbmcgdGhyb3VnaCBzZWN0aW9ucyBieSB1c2luZyB0aGUgbW91c2Ugd2hlZWwgb3IgdGhlIHRyYWNrcGFkLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0TW91c2VXaGVlbFNjcm9sbGluZyh2YWx1ZSl7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGFkZE1vdXNlV2hlZWxIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICBhZGRNaWRkbGVXaGVlbEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVNb3VzZVdoZWVsSGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTWlkZGxlV2hlZWxIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBvciByZW1vdmUgdGhlIHBvc3NpYmlsaXR5IG9mIHNjcm9sbGluZyB0aHJvdWdoIHNlY3Rpb25zIGJ5IHVzaW5nIHRoZSBtb3VzZSB3aGVlbC90cmFja3BhZCBvciB0b3VjaCBnZXN0dXJlcy5cclxuICAgICAgICAqIE9wdGlvbmFsbHkgYSBzZWNvbmQgcGFyYW1ldGVyIGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgdGhlIGRpcmVjdGlvbiBmb3Igd2hpY2ggdGhlIGFjdGlvbiB3aWxsIGJlIGFwcGxpZWQuXHJcbiAgICAgICAgKlxyXG4gICAgICAgICogQHBhcmFtIGRpcmVjdGlvbnMgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGRpcmVjdGlvbiBvciBkaXJlY3Rpb25zIHNlcGFyYXRlZCBieSBjb21tYS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldEFsbG93U2Nyb2xsaW5nKHZhbHVlLCBkaXJlY3Rpb25zKXtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGRpcmVjdGlvbnMgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zLnJlcGxhY2UoLyAvZywnJykuc3BsaXQoJywnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxBbGxvd2VkKHZhbHVlLCBkaXJlY3Rpb24sICdtJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxBbGxvd2VkKHZhbHVlLCAnYWxsJywgJ20nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIG9yIHJlbW92ZSB0aGUgbW91c2Ugd2hlZWwgaGlqYWNraW5nXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRNb3VzZUhpamFjayh2YWx1ZSl7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgIHNldE1vdXNlV2hlZWxTY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBhZGRUb3VjaEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRNb3VzZVdoZWVsU2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZVRvdWNoSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgb3IgcmVtb3ZlIHRoZSBwb3NzaWJpbGl0eSBvZiBzY3JvbGxpbmcgdGhyb3VnaCBzZWN0aW9ucyBieSB1c2luZyB0aGUga2V5Ym9hcmQgYXJyb3cga2V5c1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0S2V5Ym9hcmRTY3JvbGxpbmcodmFsdWUsIGRpcmVjdGlvbnMpe1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZGlyZWN0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnMucmVwbGFjZSgvIC9nLCcnKS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldElzU2Nyb2xsQWxsb3dlZCh2YWx1ZSwgZGlyZWN0aW9uLCAnaycpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxBbGxvd2VkKHZhbHVlLCAnYWxsJywgJ2snKTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMua2V5Ym9hcmRTY3JvbGxpbmcgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNb3ZlcyB0aGUgcGFnZSB1cCBvbmUgc2VjdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVTZWN0aW9uVXAoKXtcclxuICAgICAgICAgICAgdmFyIHByZXYgPSBwcmV2VW50aWwoJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdLCBTRUNUSU9OX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAvL2xvb3BpbmcgdG8gdGhlIGJvdHRvbSBpZiB0aGVyZSdzIG5vIG1vcmUgc2VjdGlvbnMgYWJvdmVcclxuICAgICAgICAgICAgaWYgKCFwcmV2ICYmIChvcHRpb25zLmxvb3BUb3AgfHwgb3B0aW9ucy5jb250aW51b3VzVmVydGljYWwpKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2ID0gbGFzdCgkKFNFQ1RJT05fU0VMKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwcmV2ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2UocHJldiwgbnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTW92ZXMgdGhlIHBhZ2UgZG93biBvbmUgc2VjdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVTZWN0aW9uRG93bigpe1xyXG4gICAgICAgICAgICB2YXIgbmV4dCA9IG5leHRVbnRpbCgkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0sIFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgIC8vbG9vcGluZyB0byB0aGUgdG9wIGlmIHRoZXJlJ3Mgbm8gbW9yZSBzZWN0aW9ucyBiZWxvd1xyXG4gICAgICAgICAgICBpZighbmV4dCAmJlxyXG4gICAgICAgICAgICAgICAgKG9wdGlvbnMubG9vcEJvdHRvbSB8fCBvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCkpe1xyXG4gICAgICAgICAgICAgICAgbmV4dCA9ICQoU0VDVElPTl9TRUwpWzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihuZXh0ICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFnZShuZXh0LCBudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTW92ZXMgdGhlIHBhZ2UgdG8gdGhlIGdpdmVuIHNlY3Rpb24gYW5kIHNsaWRlIHdpdGggbm8gYW5pbWF0aW9uLlxyXG4gICAgICAgICogQW5jaG9ycyBvciBpbmRleCBwb3NpdGlvbnMgY2FuIGJlIHVzZWQgYXMgcGFyYW1zLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2lsZW50TW92ZVRvKHNlY3Rpb25BbmNob3IsIHNsaWRlQW5jaG9yKXtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsaW5nU3BlZWQgKDAsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICBtb3ZlVG8oc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3IpO1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxpbmdTcGVlZCAob3JpZ2luYWxzLnNjcm9sbGluZ1NwZWVkLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTW92ZXMgdGhlIHBhZ2UgdG8gdGhlIGdpdmVuIHNlY3Rpb24gYW5kIHNsaWRlLlxyXG4gICAgICAgICogQW5jaG9ycyBvciBpbmRleCBwb3NpdGlvbnMgY2FuIGJlIHVzZWQgYXMgcGFyYW1zLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVRvKHNlY3Rpb25BbmNob3IsIHNsaWRlQW5jaG9yKXtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnkgPSBnZXRTZWN0aW9uQnlBbmNob3Ioc2VjdGlvbkFuY2hvcik7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNsaWRlQW5jaG9yICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQYWdlQW5kU2xpZGUoc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3IpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihkZXN0aW55ICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFnZShkZXN0aW55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTbGlkZXMgcmlnaHQgdGhlIHNsaWRlciBvZiB0aGUgYWN0aXZlIHNlY3Rpb24uXHJcbiAgICAgICAgKiBPcHRpb25hbCBgc2VjdGlvbmAgcGFyYW0uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBtb3ZlU2xpZGVSaWdodChzZWN0aW9uKXtcclxuICAgICAgICAgICAgbW92ZVNsaWRlKCdyaWdodCcsIHNlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTbGlkZXMgbGVmdCB0aGUgc2xpZGVyIG9mIHRoZSBhY3RpdmUgc2VjdGlvbi5cclxuICAgICAgICAqIE9wdGlvbmFsIGBzZWN0aW9uYCBwYXJhbS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVTbGlkZUxlZnQoc2VjdGlvbil7XHJcbiAgICAgICAgICAgIG1vdmVTbGlkZSgnbGVmdCcsIHNlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2hlbiByZXNpemluZyBpcyBmaW5pc2hlZCwgd2UgYWRqdXN0IHRoZSBzbGlkZXMgc2l6ZXMgYW5kIHBvc2l0aW9uc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlQnVpbGQocmVzaXppbmcpe1xyXG4gICAgICAgICAgICBpZihoYXNDbGFzcyhjb250YWluZXIsIERFU1RST1lFRCkpeyByZXR1cm47IH0gIC8vbm90aGluZyB0byBkbyBpZiB0aGUgcGx1Z2luIHdhcyBkZXN0cm95ZWRcclxuXHJcbiAgICAgICAgICAgIGlzUmVzaXppbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgLy91cGRhdGluZyBnbG9iYWwgdmFyc1xyXG4gICAgICAgICAgICB3aW5kb3dzSGVpZ2h0ID0gZ2V0V2luZG93SGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHdpbmRvd3NXaWR0aCA9IGdldFdpbmRvd1dpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbnMgPSAkKFNFQ1RJT05fU0VMKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBzZWN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZXNXcmFwID0gJChTTElERVNfV1JBUFBFUl9TRUwsIHNlY3Rpb24pWzBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlcyA9ICQoU0xJREVfU0VMLCBzZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FkanVzdGluZyB0aGUgaGVpZ2h0IG9mIHRoZSB0YWJsZS1jZWxsIGZvciBJRSBhbmQgRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy52ZXJ0aWNhbENlbnRlcmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBjc3MoJChUQUJMRV9DRUxMX1NFTCwgc2VjdGlvbiksIHsnaGVpZ2h0JzogZ2V0VGFibGVIZWlnaHQoc2VjdGlvbikgKyAncHgnfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY3NzKHNlY3Rpb24sIHsnaGVpZ2h0Jzogd2luZG93c0hlaWdodCArICdweCd9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FkanVzdGluZyB0aGUgcG9zaXRpb24gZm8gdGhlIEZVTEwgV0lEVEggc2xpZGVzLi4uXHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYW5kc2NhcGVTY3JvbGwoc2xpZGVzV3JhcCwgJChTTElERV9BQ1RJVkVfU0VMLCBzbGlkZXNXcmFwKVswXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmFySGFuZGxlci5jcmVhdGVTY3JvbGxCYXJGb3JBbGwoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGFjdGl2ZVNlY3Rpb24gPSAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF07XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uSW5kZXggPSBpbmRleChhY3RpdmVTZWN0aW9uLCBTRUNUSU9OX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAvL2lzbid0IGl0IHRoZSBmaXJzdCBzZWN0aW9uP1xyXG4gICAgICAgICAgICBpZihzZWN0aW9uSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgLy9hZGp1c3RpbmcgdGhlIHBvc2l0aW9uIGZvciB0aGUgY3VycmVudCBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBzaWxlbnRNb3ZlVG8oc2VjdGlvbkluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYoaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlclJlc2l6ZSApICYmIHJlc2l6aW5nKXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuYWZ0ZXJSZXNpemUuY2FsbChjb250YWluZXIsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJSZUJ1aWxkICkgJiYgIXJlc2l6aW5nKXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuYWZ0ZXJSZUJ1aWxkLmNhbGwoY29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgZnVsbHBhZ2UuanMgaXMgaW4gcmVzcG9uc2l2ZSBtb2RlIG9yIG5vdC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzUmVzcG9uc2l2ZU1vZGUoKXtcclxuICAgICAgICAgICByZXR1cm4gaGFzQ2xhc3MoJGJvZHksIFJFU1BPTlNJVkUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBUdXJucyBmdWxsUGFnZS5qcyB0byBub3JtYWwgc2Nyb2xsaW5nIG1vZGUgd2hlbiB0aGUgdmlld3BvcnQgYHdpZHRoYCBvciBgaGVpZ2h0YFxyXG4gICAgICAgICogYXJlIHNtYWxsZXIgdGhhbiB0aGUgc2V0IGxpbWl0IHZhbHVlcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFJlc3BvbnNpdmUoYWN0aXZlKXtcclxuICAgICAgICAgICAgdmFyIGlzUmVzcG9uc2l2ZSA9IGlzUmVzcG9uc2l2ZU1vZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICBpZighaXNSZXNwb25zaXZlKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdXRvU2Nyb2xsaW5nKGZhbHNlLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRGaXRUb1NlY3Rpb24oZmFsc2UsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGUoJChTRUNUSU9OX05BVl9TRUwpKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcygkYm9keSwgUkVTUE9OU0lWRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlclJlc3BvbnNpdmUgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYWZ0ZXJSZXNwb25zaXZlLmNhbGwoIGNvbnRhaW5lciwgYWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vd2hlbiBvbiBwYWdlIGxvYWQsIHdlIHdpbGwgcmVtb3ZlIHNjcm9sbG92ZXJmbG93IGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxCYXJIYW5kbGVyLmNyZWF0ZVNjcm9sbEJhckZvckFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGlzUmVzcG9uc2l2ZSl7XHJcbiAgICAgICAgICAgICAgICBzZXRBdXRvU2Nyb2xsaW5nKG9yaWdpbmFscy5hdXRvU2Nyb2xsaW5nLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgIHNldEZpdFRvU2VjdGlvbihvcmlnaW5hbHMuYXV0b1Njcm9sbGluZywgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgICAgICBzaG93KCQoU0VDVElPTl9OQVZfU0VMKSk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcygkYm9keSwgUkVTUE9OU0lWRSk7XHJcbiAgICAgICAgICAgICAgICBpZihpc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyUmVzcG9uc2l2ZSApKXtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmFmdGVyUmVzcG9uc2l2ZS5jYWxsKCBjb250YWluZXIsIGFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGNvbnRhaW5lcil7XHJcbiAgICAgICAgICAgIC8vcHVibGljIGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICBGUC52ZXJzaW9uID0gJzMuMC44JztcclxuICAgICAgICAgICAgRlAuc2V0QXV0b1Njcm9sbGluZyA9IHNldEF1dG9TY3JvbGxpbmc7XHJcbiAgICAgICAgICAgIEZQLnNldFJlY29yZEhpc3RvcnkgPSBzZXRSZWNvcmRIaXN0b3J5O1xyXG4gICAgICAgICAgICBGUC5zZXRTY3JvbGxpbmdTcGVlZCA9IHNldFNjcm9sbGluZ1NwZWVkO1xyXG4gICAgICAgICAgICBGUC5zZXRGaXRUb1NlY3Rpb24gPSBzZXRGaXRUb1NlY3Rpb247XHJcbiAgICAgICAgICAgIEZQLnNldExvY2tBbmNob3JzID0gc2V0TG9ja0FuY2hvcnM7XHJcbiAgICAgICAgICAgIEZQLnNldE1vdXNlV2hlZWxTY3JvbGxpbmcgPSBzZXRNb3VzZVdoZWVsU2Nyb2xsaW5nO1xyXG4gICAgICAgICAgICBGUC5zZXRBbGxvd1Njcm9sbGluZyA9IHNldEFsbG93U2Nyb2xsaW5nO1xyXG4gICAgICAgICAgICBGUC5zZXRLZXlib2FyZFNjcm9sbGluZyA9IHNldEtleWJvYXJkU2Nyb2xsaW5nO1xyXG4gICAgICAgICAgICBGUC5tb3ZlU2VjdGlvblVwID0gbW92ZVNlY3Rpb25VcDtcclxuICAgICAgICAgICAgRlAubW92ZVNlY3Rpb25Eb3duID0gbW92ZVNlY3Rpb25Eb3duO1xyXG4gICAgICAgICAgICBGUC5zaWxlbnRNb3ZlVG8gPSBzaWxlbnRNb3ZlVG87XHJcbiAgICAgICAgICAgIEZQLm1vdmVUbyA9IG1vdmVUbztcclxuICAgICAgICAgICAgRlAubW92ZVNsaWRlUmlnaHQgPSBtb3ZlU2xpZGVSaWdodDtcclxuICAgICAgICAgICAgRlAubW92ZVNsaWRlTGVmdCA9IG1vdmVTbGlkZUxlZnQ7XHJcbiAgICAgICAgICAgIEZQLmZpdFRvU2VjdGlvbiA9IGZpdFRvU2VjdGlvbjtcclxuICAgICAgICAgICAgRlAucmVCdWlsZCA9IHJlQnVpbGQ7XHJcbiAgICAgICAgICAgIEZQLnNldFJlc3BvbnNpdmUgPSBzZXRSZXNwb25zaXZlO1xyXG4gICAgICAgICAgICBGUC5nZXRGdWxscGFnZURhdGEgPSBmdW5jdGlvbigpeyByZXR1cm4gb3B0aW9uczsgfTtcclxuICAgICAgICAgICAgRlAuZGVzdHJveSA9IGRlc3Ryb3k7XHJcbiAgICAgICAgICAgIEZQLmdldEFjdGl2ZVNlY3Rpb24gPSBnZXRBY3RpdmVTZWN0aW9uO1xyXG4gICAgICAgICAgICBGUC5nZXRBY3RpdmVTbGlkZSA9IGdldEFjdGl2ZVNsaWRlO1xyXG5cclxuICAgICAgICAgICAgRlAudGVzdCA9IHtcclxuICAgICAgICAgICAgICAgIHRvcDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUzZDogJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpJyxcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTNkSDogKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgJChvcHRpb25zLnNlY3Rpb25TZWxlY3RvciwgY29udGFpbmVyKS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEucHVzaCgndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCknKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgICAgICB9KSgpLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgJChvcHRpb25zLnNlY3Rpb25TZWxlY3RvciwgY29udGFpbmVyKS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgICAgICB9KSgpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIHNldEF1dG9TY3JvbGxpbmc6IHNldEF1dG9TY3JvbGxpbmdcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vZnVuY3Rpb25zIHdlIHdhbnQgdG8gc2hhcmUgYWNyb3NzIGZpbGVzIGJ1dCB3aGljaCBhcmUgbm90XHJcbiAgICAgICAgICAgIC8vbWVhbiB0byBiZSB1c2VkIG9uIHRoZWlyIG93biBieSBkZXZlbG9wZXJzXHJcbiAgICAgICAgICAgIEZQLnNoYXJlZCA9IHtcclxuICAgICAgICAgICAgICAgIGFmdGVyUmVuZGVyQWN0aW9uczogYWZ0ZXJSZW5kZXJBY3Rpb25zLFxyXG4gICAgICAgICAgICAgICAgaXNOb3JtYWxTY3JvbGxFbGVtZW50OiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgd2luZG93LmZ1bGxwYWdlX2FwaSA9IEZQO1xyXG5cclxuICAgICAgICAgICAgLy91c2luZyBqUXVlcnkgaW5pdGlhbGl6YXRpb24/IENyZWF0aW5nIHRoZSAkLmZuLmZ1bGxwYWdlIG9iamVjdFxyXG4gICAgICAgICAgICBpZihvcHRpb25zLiQpe1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoRlApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAgICBcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLiQuZm4uZnVsbHBhZ2Vba2V5XSA9IEZQW2tleV07ICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5pdCgpO1xyXG5cclxuICAgICAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgICAgICAgICAvL2lmIGNzczMgaXMgbm90IHN1cHBvcnRlZCwgaXQgd2lsbCB1c2UgalF1ZXJ5IGFuaW1hdGlvbnNcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5jc3MzKXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuY3NzMyA9IHN1cHBvcnQzZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLnNjcm9sbEJhciA9IG9wdGlvbnMuc2Nyb2xsQmFyIHx8IG9wdGlvbnMuaHlicmlkO1xyXG5cclxuICAgICAgICAgICAgc2V0T3B0aW9uc0Zyb21ET00oKTtcclxuICAgICAgICAgICAgcHJlcGFyZURvbSgpO1xyXG4gICAgICAgICAgICBzZXRBbGxvd1Njcm9sbGluZyh0cnVlKTtcclxuICAgICAgICAgICAgc2V0TW91c2VIaWphY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldEF1dG9TY3JvbGxpbmcob3B0aW9ucy5hdXRvU2Nyb2xsaW5nLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy9zZXR0aW5nIHRoZSBjbGFzcyBmb3IgdGhlIGJvZHkgZWxlbWVudFxyXG4gICAgICAgICAgICBzZXRCb2R5Q2xhc3MoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9BbmNob3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHNjcm9sbFRvQW5jaG9yKTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgd2UgdXNlIHNjcm9sbE92ZXJmbG93IHdlJ2xsIGZpcmUgYWZ0ZXJSZW5kZXIgaW4gdGhlIHNjcm9sbG92ZXJmbG93IGZpbGVcclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXJSZW5kZXJBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvdWJsZUNoZWNrSGVpZ2h0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCl7XHJcblxyXG4gICAgICAgICAgICAvL3doZW4gc2Nyb2xsaW5nLi4uXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vZGV0ZWN0aW5nIGFueSBjaGFuZ2Ugb24gdGhlIFVSTCB0byBzY3JvbGwgdG8gdGhlIGdpdmVuIGFuY2hvciBsaW5rXHJcbiAgICAgICAgICAgIC8vKGEgd2F5IHRvIGRldGVjdCBiYWNrIGhpc3RvcnkgYnV0dG9uIGFzIHdlIHBsYXkgd2l0aCB0aGUgaGFzaGVzIG9uIHRoZSBVUkwpXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgaGFzaENoYW5nZUhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgLy93aGVuIG9wZW5pbmcgYSBuZXcgdGFiIChjdHJsICsgdCksIGBjb250cm9sYCB3b24ndCBiZSBwcmVzc2VkIHdoZW4gY29taW5nIGJhY2suXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYmx1ckhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgLy93aGVuIHJlc2l6aW5nIHRoZSBzaXRlLCB3ZSBhZGp1c3QgdGhlIGhlaWdodHMgb2YgdGhlIHNlY3Rpb25zLCBzbGltU2Nyb2xsLi4uXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vU2xpZGluZyB3aXRoIGFycm93IGtleXMsIGJvdGgsIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duSGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICAvL3RvIHByZXZlbnQgc2Nyb2xsaW5nIHdoaWxlIHpvb21pbmdcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgLy9TY3JvbGxzIHRvIHRoZSBzZWN0aW9uIHdoZW4gY2xpY2tpbmcgdGhlIG5hdmlnYXRpb24gYnVsbGV0XHJcbiAgICAgICAgICAgIC8vc2ltdWxhdGluZyB0aGUgalF1ZXJ5IC5vbignY2xpY2snKSBldmVudCB1c2luZyBkZWxlZ2F0aW9uXHJcbiAgICAgICAgICAgIFsnY2xpY2snLCAndG91Y2hzdGFydCddLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBkZWxlZ2F0ZWRFdmVudHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAqIEFwcGx5aW5nIG5vcm1hbFNjcm9sbCBlbGVtZW50cy5cclxuICAgICAgICAgICAgKiBJZ25vcmluZyB0aGUgc2Nyb2xscyBvdmVyIHRoZSBzcGVjaWZpZWQgc2VsZWN0b3JzLlxyXG4gICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLm5vcm1hbFNjcm9sbEVsZW1lbnRzKXtcclxuICAgICAgICAgICAgICAgIFsnbW91c2VlbnRlcicsICd0b3VjaHN0YXJ0J10uZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvck1vdXNlTGVhdmVPclRvdWNoKGV2ZW50TmFtZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgWydtb3VzZWxlYXZlJywgJ3RvdWNoZW5kJ10uZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgZm9yTW91c2VMZWF2ZU9yVG91Y2goZXZlbnROYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkZWxlZ2F0ZWRFdmVudHMoZSl7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIGlmKHRhcmdldCAmJiBjbG9zZXN0KHRhcmdldCwgU0VDVElPTl9OQVZfU0VMICsgJyBhJykpe1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbkJ1bGxldEhhbmRsZXIuY2FsbCh0YXJnZXQsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYobWF0Y2hlcyh0YXJnZXQsIFNFQ1RJT05fTkFWX1RPT0xUSVBfU0VMKSl7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwVGV4dEhhbmRsZXIuY2FsbCh0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYobWF0Y2hlcyh0YXJnZXQsIFNMSURFU19BUlJPV19TRUwpKXtcclxuICAgICAgICAgICAgICAgIHNsaWRlQXJyb3dIYW5kbGVyLmNhbGwodGFyZ2V0LCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKG1hdGNoZXModGFyZ2V0LCBTTElERVNfTkFWX0xJTktfU0VMKSB8fCBjbG9zZXN0KHRhcmdldCwgU0xJREVTX05BVl9MSU5LX1NFTCkgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzbGlkZUJ1bGxldEhhbmRsZXIuY2FsbCh0YXJnZXQsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoY2xvc2VzdCh0YXJnZXQsIG9wdGlvbnMubWVudSArICcgW2RhdGEtbWVudWFuY2hvcl0nKSl7XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbXNIYW5kbGVyLmNhbGwodGFyZ2V0LCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZm9yTW91c2VMZWF2ZU9yVG91Y2goZXZlbnROYW1lLCBhbGxvd1Njcm9sbGluZyl7XHJcbiAgICAgICAgICAgIC8vYSB3YXkgdG8gcGFzcyBhcmd1bWVudHMgdG8gdGhlIG9uTW91c2VFbnRlck9yTGVhdmUgZnVuY3Rpb25cclxuICAgICAgICAgICAgZG9jdW1lbnRbJ2ZwXycgKyBldmVudE5hbWVdID0gYWxsb3dTY3JvbGxpbmc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBvbk1vdXNlRW50ZXJPckxlYXZlLCB0cnVlKTsgLy9jYXB0dXJpbmcgcGhhc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9uTW91c2VFbnRlck9yTGVhdmUoZSkge1xyXG4gICAgICAgICAgICB2YXIgdHlwZSA9IGUudHlwZTtcclxuICAgICAgICAgICAgdmFyIGlzSW5zaWRlT25lTm9ybWFsU2Nyb2xsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBpc1VzaW5nU2Nyb2xsT3ZlcmZsb3cgPSBvcHRpb25zLnNjcm9sbE92ZXJmbG93O1xyXG5cclxuICAgICAgICAgICAgLy9vbk1vdXNlTGVhdmUgd2lsbCB1c2UgdGhlIGRlc3RpbmF0aW9uIHRhcmdldCwgbm90IHRoZSBvbmUgd2UgYXJlIG1vdmluZyBhd2F5IGZyb21cclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHR5cGUgPT09ICdtb3VzZWxlYXZlJyA/IGUudG9FbGVtZW50IHx8IGUucmVsYXRlZFRhcmdldCA6IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy9jb21pbmcgZnJvbSBjbG9zaW5nIGEgbm9ybWFsU2Nyb2xsRWxlbWVudHMgbW9kYWwgb3IgbW92aW5nIG91dHNpZGUgdmlld3BvcnQ/XHJcbiAgICAgICAgICAgIGlmKHRhcmdldCA9PSBkb2N1bWVudCB8fCAhdGFyZ2V0KXtcclxuICAgICAgICAgICAgICAgIHNldE1vdXNlSGlqYWNrKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGlzVXNpbmdTY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2V0SXNjcm9sbCh0YXJnZXQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0eXBlID09PSAndG91Y2hlbmQnKXtcclxuICAgICAgICAgICAgICAgIGdfY2FuRmlyZU1vdXNlRW50ZXJOb3JtYWxTY3JvbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBnX2NhbkZpcmVNb3VzZUVudGVyTm9ybWFsU2Nyb2xsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sIDgwMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vcHJldmVudGluZyBtb3VzZWVudGVyIGV2ZW50IHRvIGRvIGFueXRoaW5nIHdoZW4gY29taW5nIGZyb20gYSB0b3VjaEVuZCBldmVudFxyXG4gICAgICAgICAgICAvL2ZpeGluZyBpc3N1ZSAjMzU3NlxyXG4gICAgICAgICAgICBpZih0eXBlID09PSAnbW91c2VlbnRlcicgJiYgIWdfY2FuRmlyZU1vdXNlRW50ZXJOb3JtYWxTY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgbm9ybWFsU2VsZWN0b3JzID0gb3B0aW9ucy5ub3JtYWxTY3JvbGxFbGVtZW50cy5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgbm9ybWFsU2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24obm9ybWFsU2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICAgICAgaWYoIWlzSW5zaWRlT25lTm9ybWFsU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNOb3JtYWxTY3JvbGxUYXJnZXQgPSBtYXRjaGVzKHRhcmdldCwgbm9ybWFsU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2xlYXZpbmcgYSBjaGlsZCBpbnNpZGUgdGhlIG5vcm1hbFNjb2xsIGVsZW1lbnQgaXMgbm90IGxlYXZpbmcgdGhlIG5vcm1hbFNjcm9sbCAjMzY2MVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc05vcm1hbFNjcm9sbENoaWxkRm9jdXNlZCA9IGNsb3Nlc3QodGFyZ2V0LCBub3JtYWxTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzTm9ybWFsU2Nyb2xsVGFyZ2V0IHx8wqBpc05vcm1hbFNjcm9sbENoaWxkRm9jdXNlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFGUC5zaGFyZWQuaXNOb3JtYWxTY3JvbGxFbGVtZW50KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vdXNlSGlqYWNrKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1VzaW5nU2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnNldElzY3JvbGwodGFyZ2V0LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgRlAuc2hhcmVkLmlzTm9ybWFsU2Nyb2xsRWxlbWVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5zaWRlT25lTm9ybWFsU2Nyb2xsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9ub3QgaW5zaWRlIGEgc2luZ2xlIG5vcm1hbCBzY3JvbGwgZWxlbWVudCBhbnltb3JlP1xyXG4gICAgICAgICAgICBpZighaXNJbnNpZGVPbmVOb3JtYWxTY3JvbGwgJiYgRlAuc2hhcmVkLmlzTm9ybWFsU2Nyb2xsRWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBzZXRNb3VzZUhpamFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoaXNVc2luZ1Njcm9sbE92ZXJmbG93KXtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5zZXRJc2Nyb2xsKHRhcmdldCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgRlAuc2hhcmVkLmlzTm9ybWFsU2Nyb2xsRWxlbWVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENoZWNrcyB0aGUgdmlld3BvcnQgYSBmZXcgdGltZXMgb24gYSBkZWZpbmUgaW50ZXJ2YWwgb2YgdGltZSB0byBcclxuICAgICAgICAqIHNlZSBpZiBpdCBoYXMgY2hhbmdlZCBpbiBhbnkgb2YgdGhvc2UuIElmIHRoYXQncyB0aGUgY2FzZSwgaXQgcmVzaXplcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGRvdWJsZUNoZWNrSGVpZ2h0KCl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCA0OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZ19kb3VibGVDaGVja0hlaWdodElkID0gc2V0VGltZW91dChhZGp1c3RUb05ld1ZpZXdwb3J0LCAzNTAgKiBpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGp1c3RzIGEgc2VjdGlvbiB0byB0aGUgdmlld3BvcnQgaWYgaXQgaGFzIGNoYW5nZWQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGp1c3RUb05ld1ZpZXdwb3J0KCl7XHJcbiAgICAgICAgICAgIHZhciBuZXdXaW5kb3dIZWlnaHQgPSBnZXRXaW5kb3dIZWlnaHQoKTtcclxuICAgICAgICAgICAgdmFyIG5ld1dpbmRvd1dpZHRoID0gZ2V0V2luZG93V2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHdpbmRvd3NIZWlnaHQgIT09IG5ld1dpbmRvd0hlaWdodCB8fCB3aW5kb3dzV2lkdGggIT09IG5ld1dpbmRvd1dpZHRoKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvd3NIZWlnaHQgPSBuZXdXaW5kb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dzV2lkdGggPSBuZXdXaW5kb3dXaWR0aDtcclxuICAgICAgICAgICAgICAgIHJlQnVpbGQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0dGluZyBvcHRpb25zIGZyb20gRE9NIGVsZW1lbnRzIGlmIHRoZXkgYXJlIG5vdCBwcm92aWRlZC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldE9wdGlvbnNGcm9tRE9NKCl7XHJcblxyXG4gICAgICAgICAgICAvL25vIGFuY2hvcnMgb3B0aW9uPyBDaGVja2luZyBmb3IgdGhlbSBpbiB0aGUgRE9NIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMuYW5jaG9ycy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvcnNBdHRyaWJ1dGUgPSAnW2RhdGEtYW5jaG9yXSc7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9ycyA9ICQob3B0aW9ucy5zZWN0aW9uU2VsZWN0b3Iuc3BsaXQoJywnKS5qb2luKGFuY2hvcnNBdHRyaWJ1dGUgKyAnLCcpICsgYW5jaG9yc0F0dHJpYnV0ZSwgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGlmKGFuY2hvcnMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBnX2luaXRpYWxBbmNob3JzSW5Eb20gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcnMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5hbmNob3JzLnB1c2goaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJykudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbm8gdG9vbHRpcHMgb3B0aW9uPyBDaGVja2luZyBmb3IgdGhlbSBpbiB0aGUgRE9NIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMubmF2aWdhdGlvblRvb2x0aXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9vbHRpcHNBdHRyaWJ1dGUgPSAnW2RhdGEtdG9vbHRpcF0nO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvb2x0aXBzID0gJChvcHRpb25zLnNlY3Rpb25TZWxlY3Rvci5zcGxpdCgnLCcpLmpvaW4odG9vbHRpcHNBdHRyaWJ1dGUgKyAnLCcpICsgdG9vbHRpcHNBdHRyaWJ1dGUsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBpZih0b29sdGlwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMubmF2aWdhdGlvblRvb2x0aXBzLnB1c2goaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFdvcmtzIG92ZXIgdGhlIERPTSBzdHJ1Y3R1cmUgdG8gc2V0IGl0IHVwIGZvciB0aGUgY3VycmVudCBmdWxscGFnZSBvcHRpb25zLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcHJlcGFyZURvbSgpe1xyXG4gICAgICAgICAgICBjc3MoY29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vYWRkaW5nIGEgY2xhc3MgdG8gcmVjb2duaXplIHRoZSBjb250YWluZXIgaW50ZXJuYWxseSBpbiB0aGUgY29kZVxyXG4gICAgICAgICAgICBhZGRDbGFzcyhjb250YWluZXIsIFdSQVBQRVIpO1xyXG4gICAgICAgICAgICBhZGRDbGFzcygkaHRtbCwgRU5BQkxFRCk7XHJcblxyXG4gICAgICAgICAgICAvL2R1ZSB0byBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanMvaXNzdWVzLzE1MDJcclxuICAgICAgICAgICAgd2luZG93c0hlaWdodCA9IGdldFdpbmRvd0hlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoY29udGFpbmVyLCBERVNUUk9ZRUQpOyAvL2luIGNhc2UgaXQgd2FzIGRlc3Ryb3llZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGl0IGFnYWluXHJcblxyXG4gICAgICAgICAgICBhZGRJbnRlcm5hbFNlbGVjdG9ycygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gJChTRUNUSU9OX1NFTCk7XHJcblxyXG4gICAgICAgICAgICAvL3N0eWxpbmcgdGhlIHNlY3Rpb25zIC8gc2xpZGVzIC8gbWVudVxyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPHNlY3Rpb25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBzZWN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZXMgPSAkKFNMSURFX1NFTCwgc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB2YXIgbnVtU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NhY2hpbmcgdGhlIG9yaWdpbmFsIHN0eWxlcyB0byBhZGQgdGhlbSBiYWNrIG9uIGRlc3Ryb3koJ2FsbCcpXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1mcC1zdHlsZXMnLCBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3R5bGVTZWN0aW9uKHNlY3Rpb24sIHNlY3Rpb25JbmRleCk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZU1lbnUoc2VjdGlvbiwgc2VjdGlvbkluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSdzIGFueSBzbGlkZVxyXG4gICAgICAgICAgICAgICAgaWYgKG51bVNsaWRlcyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNsaWRlcyhzZWN0aW9uLCBzbGlkZXMsIG51bVNsaWRlcyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRUYWJsZUNsYXNzKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9maXhlZCBlbGVtZW50cyBuZWVkIHRvIGJlIG1vdmVkIG91dCBvZiB0aGUgcGx1Z2luIGNvbnRhaW5lciBkdWUgdG8gcHJvYmxlbXMgd2l0aCBDU1MzLlxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmZpeGVkRWxlbWVudHMgJiYgb3B0aW9ucy5jc3MzKXtcclxuICAgICAgICAgICAgICAgICQob3B0aW9ucy5maXhlZEVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgICAgICRib2R5LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vdmVydGljYWwgY2VudGVyZWQgb2YgdGhlIG5hdmlnYXRpb24gKyBhY3RpdmUgYnVsbGV0XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMubmF2aWdhdGlvbil7XHJcbiAgICAgICAgICAgICAgICBhZGRWZXJ0aWNhbE5hdmlnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZW5hYmxlWW91dHViZUFQSSgpO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxCYXJIYW5kbGVyID0gb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuaW5pdChvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTdHlsZXMgdGhlIGhvcml6b250YWwgc2xpZGVzIGZvciBhIHNlY3Rpb24uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzdHlsZVNsaWRlcyhzZWN0aW9uLCBzbGlkZXMsIG51bVNsaWRlcyl7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IG51bVNsaWRlcyAqIDEwMDtcclxuICAgICAgICAgICAgdmFyIHNsaWRlV2lkdGggPSAxMDAgLyBudW1TbGlkZXM7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2xpZGVzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBzbGlkZXNXcmFwcGVyLmNsYXNzTmFtZSA9IFNMSURFU19XUkFQUEVSOyAvL2ZwLXNsaWRlc1xyXG4gICAgICAgICAgICB3cmFwQWxsKHNsaWRlcywgc2xpZGVzV3JhcHBlcik7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2xpZGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHNsaWRlc0NvbnRhaW5lci5jbGFzc05hbWUgPSBTTElERVNfQ09OVEFJTkVSOyAvL2ZwLXNsaWRlc0NvbnRhaW5lclxyXG4gICAgICAgICAgICB3cmFwQWxsKHNsaWRlcywgc2xpZGVzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIGNzcygkKFNMSURFU19DT05UQUlORVJfU0VMLCBzZWN0aW9uKSwgeyd3aWR0aCc6IHNsaWRlcldpZHRoICsgJyUnfSk7XHJcblxyXG4gICAgICAgICAgICBpZihudW1TbGlkZXMgPiAxKXtcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuY29udHJvbEFycm93cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2xpZGVBcnJvd3Moc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zbGlkZXNOYXZpZ2F0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGRTbGlkZXNOYXZpZ2F0aW9uKHNlY3Rpb24sIG51bVNsaWRlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uKHNsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBjc3Moc2xpZGUsIHsnd2lkdGgnOiBzbGlkZVdpZHRoICsgJyUnfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy52ZXJ0aWNhbENlbnRlcmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGRUYWJsZUNsYXNzKHNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RhcnRpbmdTbGlkZSA9ICQoU0xJREVfQUNUSVZFX1NFTCwgc2VjdGlvbilbMF07XHJcblxyXG4gICAgICAgICAgICAvL2lmIHRoZSBzbGlkZSB3b24ndCBiZSBhbiBzdGFydGluZyBwb2ludCwgdGhlIGRlZmF1bHQgd2lsbCBiZSB0aGUgZmlyc3Qgb25lXHJcbiAgICAgICAgICAgIC8vdGhlIGFjdGl2ZSBzZWN0aW9uIGlzbid0IHRoZSBmaXJzdCBvbmU/IElzIG5vdCB0aGUgZmlyc3Qgc2xpZGUgb2YgdGhlIGZpcnN0IHNlY3Rpb24/IFRoZW4gd2UgbG9hZCB0aGF0IHNlY3Rpb24vc2xpZGUgYnkgZGVmYXVsdC5cclxuICAgICAgICAgICAgaWYoIHN0YXJ0aW5nU2xpZGUgIT0gbnVsbCAmJiAoaW5kZXgoJChTRUNUSU9OX0FDVElWRV9TRUwpLCBTRUNUSU9OX1NFTCkgIT09IDAgfHwgKGluZGV4KCQoU0VDVElPTl9BQ1RJVkVfU0VMKSwgU0VDVElPTl9TRUwpID09PSAwICYmIGluZGV4KHN0YXJ0aW5nU2xpZGUpICE9PSAwKSkpe1xyXG4gICAgICAgICAgICAgICAgc2lsZW50TGFuZHNjYXBlU2Nyb2xsKHN0YXJ0aW5nU2xpZGUsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGFkZENsYXNzKHNsaWRlc1swXSwgQUNUSVZFKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTdHlsaW5nIHZlcnRpY2FsIHNlY3Rpb25zXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzdHlsZVNlY3Rpb24oc2VjdGlvbiwgaW5kZXgpe1xyXG4gICAgICAgICAgICAvL2lmIG5vIGFjdGl2ZSBzZWN0aW9uIGlzIGRlZmluZWQsIHRoZSAxc3Qgb25lIHdpbGwgYmUgdGhlIGRlZmF1bHQgb25lXHJcbiAgICAgICAgICAgIGlmKCFpbmRleCAmJiAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2VjdGlvbiwgQUNUSVZFKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGFydGluZ1NlY3Rpb24gPSAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF07XHJcblxyXG4gICAgICAgICAgICBjc3Moc2VjdGlvbiwgeydoZWlnaHQnOiB3aW5kb3dzSGVpZ2h0ICsgJ3B4J30pO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5wYWRkaW5nVG9wKXtcclxuICAgICAgICAgICAgICAgIGNzcyhzZWN0aW9uLCB7J3BhZGRpbmctdG9wJzogb3B0aW9ucy5wYWRkaW5nVG9wfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMucGFkZGluZ0JvdHRvbSl7XHJcbiAgICAgICAgICAgICAgICBjc3Moc2VjdGlvbiwgeydwYWRkaW5nLWJvdHRvbSc6IG9wdGlvbnMucGFkZGluZ0JvdHRvbX0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2VjdGlvbnNDb2xvcltpbmRleF0gIT09ICAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgY3NzKHNlY3Rpb24sIHsnYmFja2dyb3VuZC1jb2xvcic6IG9wdGlvbnMuc2VjdGlvbnNDb2xvcltpbmRleF19KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmFuY2hvcnNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJywgb3B0aW9ucy5hbmNob3JzW2luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgZGF0YS1hbmNob3IgYXR0cmlidXRlcyB0byB0aGUgbWVudSBlbGVtZW50cyBhbmQgYWN0aXZhdGVzIHRoZSBjdXJyZW50IG9uZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHN0eWxlTWVudShzZWN0aW9uLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hbmNob3JzW2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vYWN0aXZhdGluZyB0aGUgbWVudSAvIG5hdiBlbGVtZW50IG9uIGxvYWRcclxuICAgICAgICAgICAgICAgIGlmKGhhc0NsYXNzKHNlY3Rpb24sIEFDVElWRSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlTWVudUFuZE5hdihvcHRpb25zLmFuY2hvcnNbaW5kZXhdLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbW92aW5nIHRoZSBtZW51IG91dHNpZGUgdGhlIG1haW4gY29udGFpbmVyIGlmIGl0IGlzIGluc2lkZSAoYXZvaWQgcHJvYmxlbXMgd2l0aCBmaXhlZCBwb3NpdGlvbnMgd2hlbiB1c2luZyBDU1MzIHRyYW5mb3JtcylcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5tZW51ICYmIG9wdGlvbnMuY3NzMyAmJiBjbG9zZXN0KCQob3B0aW9ucy5tZW51KVswXSwgV1JBUFBFUl9TRUwpICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgJChvcHRpb25zLm1lbnUpLmZvckVhY2goZnVuY3Rpb24obWVudSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRib2R5LmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBpbnRlcm5hbCBjbGFzc2VzIHRvIGJlIGFibGUgdG8gcHJvdmlkZSBjdXN0b21pemFibGUgc2VsZWN0b3JzXHJcbiAgICAgICAgKiBrZWVwaW5nIHRoZSBsaW5rIHdpdGggdGhlIHN0eWxlIHNoZWV0LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkSW50ZXJuYWxTZWxlY3RvcnMoKXtcclxuICAgICAgICAgICAgYWRkQ2xhc3MoJChvcHRpb25zLnNlY3Rpb25TZWxlY3RvciwgY29udGFpbmVyKSwgU0VDVElPTik7XHJcbiAgICAgICAgICAgIGFkZENsYXNzKCQob3B0aW9ucy5zbGlkZVNlbGVjdG9yLCBjb250YWluZXIpLCBTTElERSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENyZWF0ZXMgdGhlIGNvbnRyb2wgYXJyb3dzIGZvciB0aGUgZ2l2ZW4gc2VjdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2xpZGVBcnJvd3Moc2VjdGlvbil7XHJcbiAgICAgICAgICAgIHZhciBhcnJvd3MgPSBbY3JlYXRlRWxlbWVudEZyb21IVE1MKCc8ZGl2IGNsYXNzPVwiJyArIFNMSURFU19BUlJPV19QUkVWICsgJ1wiPjwvZGl2PicpLCBjcmVhdGVFbGVtZW50RnJvbUhUTUwoJzxkaXYgY2xhc3M9XCInICsgU0xJREVTX0FSUk9XX05FWFQgKyAnXCI+PC9kaXY+JyldO1xyXG4gICAgICAgICAgICBhZnRlcigkKFNMSURFU19XUkFQUEVSX1NFTCwgc2VjdGlvbilbMF0sIGFycm93cyk7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmNvbnRyb2xBcnJvd0NvbG9yICE9PSAnI2ZmZicpe1xyXG4gICAgICAgICAgICAgICAgY3NzKCQoU0xJREVTX0FSUk9XX05FWFRfU0VMLCBzZWN0aW9uKSwgeydib3JkZXItY29sb3InOiAndHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJytvcHRpb25zLmNvbnRyb2xBcnJvd0NvbG9yfSk7XHJcbiAgICAgICAgICAgICAgICBjc3MoJChTTElERVNfQVJST1dfUFJFVl9TRUwsIHNlY3Rpb24pLCB7J2JvcmRlci1jb2xvcic6ICd0cmFuc3BhcmVudCAnKyBvcHRpb25zLmNvbnRyb2xBcnJvd0NvbG9yICsgJyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCd9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMubG9vcEhvcml6b250YWwpe1xyXG4gICAgICAgICAgICAgICAgaGlkZSgkKFNMSURFU19BUlJPV19QUkVWX1NFTCwgc2VjdGlvbikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENyZWF0ZXMgYSB2ZXJ0aWNhbCBuYXZpZ2F0aW9uIGJhci5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFZlcnRpY2FsTmF2aWdhdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgbmF2aWdhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBTRUNUSU9OX05BVik7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGl2VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmFwcGVuZENoaWxkKGRpdlVsKTtcclxuXHJcbiAgICAgICAgICAgIGFwcGVuZFRvKG5hdmlnYXRpb24sICRib2R5KTtcclxuICAgICAgICAgICAgdmFyIG5hdiA9ICQoU0VDVElPTl9OQVZfU0VMKVswXTtcclxuXHJcbiAgICAgICAgICAgIGFkZENsYXNzKG5hdiwgJ2ZwLScgKyBvcHRpb25zLm5hdmlnYXRpb25Qb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNob3dBY3RpdmVUb29sdGlwKXtcclxuICAgICAgICAgICAgICAgIGFkZENsYXNzKG5hdiwgU0hPV19BQ1RJVkVfVE9PTFRJUCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBsaSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkKFNFQ1RJT05fU0VMKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmsgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmFuY2hvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluayA9IG9wdGlvbnMuYW5jaG9yc1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaSArPSAnPGxpPjxhIGhyZWY9XCIjJyArIGxpbmsgKyAnXCI+PHNwYW4gY2xhc3M9XCJmcC1zci1vbmx5XCI+JyArIGdldEJ1bGxldExpbmtOYW1lKGksICdTZWN0aW9uJykgKyAnPC9zcGFuPjxzcGFuPjwvc3Bhbj48L2E+JztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGFkZCB0b29sdGlwIGlmIG5lZWRlZCAoZGVmaW5lZCBieSB1c2VyKVxyXG4gICAgICAgICAgICAgICAgdmFyIHRvb2x0aXAgPSBvcHRpb25zLm5hdmlnYXRpb25Ub29sdGlwc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvb2x0aXAgIT09ICd1bmRlZmluZWQnICYmIHRvb2x0aXAgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkgKz0gJzxkaXYgY2xhc3M9XCInICsgU0VDVElPTl9OQVZfVE9PTFRJUCArICcgZnAtJyArIG9wdGlvbnMubmF2aWdhdGlvblBvc2l0aW9uICsgJ1wiPicgKyB0b29sdGlwICsgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGkgKz0gJzwvbGk+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKCd1bCcsIG5hdilbMF0uaW5uZXJIVE1MID0gbGk7XHJcblxyXG4gICAgICAgICAgICAvL2NlbnRlcmluZyBpdCB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgICAgIGNzcygkKFNFQ1RJT05fTkFWX1NFTCksIHsnbWFyZ2luLXRvcCc6ICctJyArICgkKFNFQ1RJT05fTkFWX1NFTClbMF0ub2Zmc2V0SGVpZ2h0LzIpICsgJ3B4J30pO1xyXG5cclxuICAgICAgICAgICAgLy9hY3RpdmF0aW5nIHRoZSBjdXJyZW50IGFjdGl2ZSBzZWN0aW9uXHJcblxyXG4gICAgICAgICAgICB2YXIgYnVsbGV0ID0gJCgnbGknLCAkKFNFQ1RJT05fTkFWX1NFTClbMF0pW2luZGV4KCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSwgU0VDVElPTl9TRUwpXTtcclxuICAgICAgICAgICAgYWRkQ2xhc3MoJCgnYScsIGJ1bGxldCksIEFDVElWRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIG5hbWUgZm9yIHNjcmVlbiByZWFkZXJzIGZvciBhIHNlY3Rpb24vc2xpZGUgbmF2aWdhdGlvbiBidWxsZXQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRCdWxsZXRMaW5rTmFtZShpLCBkZWZhdWx0TmFtZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLm5hdmlnYXRpb25Ub29sdGlwc1tpXVxyXG4gICAgICAgICAgICAgICAgfHwgb3B0aW9ucy5hbmNob3JzW2ldXHJcbiAgICAgICAgICAgICAgICB8fCBkZWZhdWx0TmFtZSArICcgJyArIChpKzEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIEVuYWJsZXMgdGhlIFlvdXR1YmUgdmlkZW9zIEFQSSBzbyB3ZSBjYW4gY29udHJvbCB0aGVpciBmbG93IGlmIG5lY2Vzc2FyeS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGVuYWJsZVlvdXR1YmVBUEkoKXtcclxuICAgICAgICAgICAgJCgnaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nLCBjb250YWluZXIpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICBhZGRVUkxQYXJhbShpdGVtLCAnZW5hYmxlanNhcGk9MScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBhIG5ldyBwYXJhbWV0ZXIgYW5kIGl0cyB2YWx1ZSB0byB0aGUgYHNyY2Agb2YgYSBnaXZlbiBlbGVtZW50XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRVUkxQYXJhbShlbGVtZW50LCBuZXdQYXJhbSl7XHJcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzcmMnKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9yaWdpbmFsU3JjICsgZ2V0VXJsUGFyYW1TaWduKG9yaWdpbmFsU3JjKSArIG5ld1BhcmFtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBSZXR1cm5zIHRoZSBwcmVmaXggc2lnbiB0byB1c2UgZm9yIGEgbmV3IHBhcmFtZXRlciBpbiBhbiBleGlzdGVuIFVSTC5cclxuICAgICAgICAqXHJcbiAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9ICA/IHwgJlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VXJsUGFyYW1TaWduKHVybCl7XHJcbiAgICAgICAgICAgIHJldHVybiAoICEvXFw/Ly50ZXN0KCB1cmwgKSApID8gJz8nIDogJyYnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBY3Rpb25zIGFuZCBjYWxsYmFja3MgdG8gZmlyZSBhZnRlclJlbmRlclxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWZ0ZXJSZW5kZXJBY3Rpb25zKCl7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdO1xyXG5cclxuICAgICAgICAgICAgYWRkQ2xhc3Moc2VjdGlvbiwgQ09NUExFVEVMWSk7XHJcblxyXG4gICAgICAgICAgICBsYXp5TG9hZChzZWN0aW9uKTtcclxuICAgICAgICAgICAgbGF6eUxvYWRPdGhlcnMoKTtcclxuICAgICAgICAgICAgcGxheU1lZGlhKHNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5hZnRlckxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaXNEZXN0aW55VGhlU3RhcnRpbmdTZWN0aW9uKCkgJiYgaXNGdW5jdGlvbihvcHRpb25zLmFmdGVyTG9hZCkgKXtcclxuICAgICAgICAgICAgICAgIGZpcmVDYWxsYmFjaygnYWZ0ZXJMb2FkJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb246IHNlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogc2VjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG51bGwsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGNhbGxiYWNrICh0byBiZSByZW1vdmVkIGluIGEgZnV0dXJlISlcclxuICAgICAgICAgICAgICAgICAgICBhbmNob3JMaW5rOiBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKSxcclxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uSW5kZXg6IGluZGV4KHNlY3Rpb24sIFNFQ1RJT05fU0VMKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24ob3B0aW9ucy5hZnRlclJlbmRlcikpe1xyXG4gICAgICAgICAgICAgICAgZmlyZUNhbGxiYWNrKCdhZnRlclJlbmRlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVybWluZXMgaWYgdGhlIFVSTCBhbmNob3IgZGVzdGlueSBpcyB0aGUgc3RhcnRpbmcgc2VjdGlvbiAodGhlIG9uZSB1c2luZyAnYWN0aXZlJyBjbGFzcyBiZWZvcmUgaW5pdGlhbGl6YXRpb24pXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBpc0Rlc3RpbnlUaGVTdGFydGluZ1NlY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGFuY2hvciA9IGdldEFuY2hvcnNVUkwoKTtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbmF0aW9uU2VjdGlvbiA9IGdldFNlY3Rpb25CeUFuY2hvcihhbmNob3Iuc2VjdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiAhYW5jaG9yLnNlY3Rpb24gfHwgIWRlc3RpbmF0aW9uU2VjdGlvbiB8fCB0eXBlb2YgZGVzdGluYXRpb25TZWN0aW9uICE9PSd1bmRlZmluZWQnICYmIGluZGV4KGRlc3RpbmF0aW9uU2VjdGlvbikgPT09IGluZGV4KHN0YXJ0aW5nU2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbGFzdFNjcm9sbCA9IDA7XHJcblxyXG4gICAgICAgIC8vd2hlbiBzY3JvbGxpbmcuLi5cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2VjdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLmF1dG9TY3JvbGxpbmcgfHwgb3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGwgPSBnZXRTY3JvbGxUb3AoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxEaXJlY3Rpb24gPSBnZXRTY3JvbGxEaXJlY3Rpb24oY3VycmVudFNjcm9sbCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmlzaWJsZVNlY3Rpb25JbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NyZWVuX21pZCA9IGN1cnJlbnRTY3JvbGwgKyAoZ2V0V2luZG93SGVpZ2h0KCkgLyAyLjApO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzQXRCb3R0b20gPSAkYm9keS5vZmZzZXRIZWlnaHQgLSBnZXRXaW5kb3dIZWlnaHQoKSA9PT0gY3VycmVudFNjcm9sbDtcclxuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9ICAkKFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3doZW4gdXNpbmcgYGF1dG8taGVpZ2h0YCBmb3IgYSBzbWFsbCBsYXN0IHNlY3Rpb24gaXQgd29uJ3QgYmUgY2VudGVyZWQgaW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgICAgICBpZihpc0F0Qm90dG9tKXtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlU2VjdGlvbkluZGV4ID0gc2VjdGlvbnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vaXMgYXQgdG9wPyB3aGVuIHVzaW5nIGBhdXRvLWhlaWdodGAgZm9yIGEgc21hbGwgZmlyc3Qgc2VjdGlvbiBpdCB3b24ndCBiZSBjZW50ZXJlZCBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoIWN1cnJlbnRTY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVTZWN0aW9uSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vdGFraW5nIHRoZSBzZWN0aW9uIHdoaWNoIGlzIHNob3dpbmcgbW9yZSBjb250ZW50IGluIHRoZSB2aWV3cG9ydFxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uID0gc2VjdGlvbnNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQaWNrIHRoZSB0aGUgbGFzdCBzZWN0aW9uIHdoaWNoIHBhc3NlcyB0aGUgbWlkZGxlIGxpbmUgb2YgdGhlIHNjcmVlbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlY3Rpb24ub2Zmc2V0VG9wIDw9IHNjcmVlbl9taWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGVTZWN0aW9uSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGlzQ29tcGxldGVseUluVmlld1BvcnQoc2Nyb2xsRGlyZWN0aW9uKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWhhc0NsYXNzKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSwgQ09NUExFVEVMWSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcygkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0sIENPTVBMRVRFTFkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhzaWJsaW5ncygkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0pLCBDT01QTEVURUxZKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9nZXRpbmcgdGhlIGxhc3Qgb25lLCB0aGUgY3VycmVudCBvbmUgb24gdGhlIHNjcmVlblxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNlY3Rpb24gPSBzZWN0aW9uc1t2aXNpYmxlU2VjdGlvbkluZGV4XTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3NldHRpbmcgdGhlIHZpc2libGUgc2VjdGlvbiBhcyBhY3RpdmUgd2hlbiBtYW51YWxseSBzY3JvbGxpbmdcclxuICAgICAgICAgICAgICAgIC8vZXhlY3V0aW5nIG9ubHkgb25jZSB0aGUgZmlyc3QgdGltZSB3ZSByZWFjaCB0aGUgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgaWYoIWhhc0NsYXNzKGN1cnJlbnRTZWN0aW9uLCBBQ1RJVkUpKXtcclxuICAgICAgICAgICAgICAgICAgICBpc1Njcm9sbGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlYXZpbmdTZWN0aW9uID0gJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsZWF2aW5nU2VjdGlvbkluZGV4ID0gaW5kZXgobGVhdmluZ1NlY3Rpb24sIFNFQ1RJT05fU0VMKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHlNb3ZlbWVudCA9IGdldFltb3ZlbWVudChjdXJyZW50U2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuY2hvckxpbmsgID0gY3VycmVudFNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uSW5kZXggPSBpbmRleChjdXJyZW50U2VjdGlvbiwgU0VDVElPTl9TRUwpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlU2xpZGUgPSAkKFNMSURFX0FDVElWRV9TRUwsIGN1cnJlbnRTZWN0aW9uKVswXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2xpZGVBbmNob3JMaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja3NQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb246IGxlYXZpbmdTZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uSW5kZXg6IHNlY3Rpb25JbmRleCAtMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yTGluazogYW5jaG9yTGluayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogY3VycmVudFNlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZpbmdTZWN0aW9uOiBsZWF2aW5nU2VjdGlvbkluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHlNb3ZlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFjdGl2ZVNsaWRlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVBbmNob3JMaW5rID0gYWN0aXZlU2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaW5kZXgoYWN0aXZlU2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FuU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3MoY3VycmVudFNlY3Rpb24sIEFDVElWRSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNpYmxpbmdzKGN1cnJlbnRTZWN0aW9uKSwgQUNUSVZFKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24oIG9wdGlvbnMub25MZWF2ZSApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmVDYWxsYmFjaygnb25MZWF2ZScsIGNhbGxiYWNrc1BhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlckxvYWQgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlQ2FsbGJhY2soJ2FmdGVyTG9hZCcsIGNhbGxiYWNrc1BhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BNZWRpYShsZWF2aW5nU2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhenlMb2FkKGN1cnJlbnRTZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheU1lZGlhKGN1cnJlbnRTZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlTWVudUFuZE5hdihhbmNob3JMaW5rLCBzZWN0aW9uSW5kZXggLSAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuYW5jaG9ycy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9uZWVkZWQgdG8gZW50ZXIgaW4gaGFzaENoYW5nZSBldmVudCB3aGVuIHVzaW5nIHRoZSBtZW51IHdpdGggYW5jaG9yIGxpbmtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsZWREZXN0aW55ID0gYW5jaG9yTGluaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZShzbGlkZUluZGV4LCBzbGlkZUFuY2hvckxpbmssIGFuY2hvckxpbmssIHNlY3Rpb25JbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NtYWxsIHRpbWVvdXQgaW4gb3JkZXIgdG8gYXZvaWQgZW50ZXJpbmcgaW4gaGFzaENoYW5nZSBldmVudCB3aGVuIHNjcm9sbGluZyBpcyBub3QgZmluaXNoZWQgeWV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbElkKTtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuZml0VG9TZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2ZvciB0aGUgYXV0byBhZGp1c3Qgb2YgdGhlIHZpZXdwb3J0IHRvIGZpdCBhIHdob2xlIHNlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsSWQyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSWQyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNraW5nIGl0IGFnYWluIGluIGNhc2UgaXQgY2hhbmdlZCBkdXJpbmcgdGhlIGRlbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuZml0VG9TZWN0aW9uICYmXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pcyB0aGUgZGVzdGluYXRpb24gZWxlbWVudCBiaWdnZXIgdGhhbiB0aGUgdmlld3BvcnQ/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0ub2Zmc2V0SGVpZ2h0IDw9IHdpbmRvd3NIZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpdFRvU2VjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5maXRUb1NlY3Rpb25EZWxheSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRml0cyB0aGUgc2l0ZSB0byB0aGUgbmVhcmVzdCBhY3RpdmUgc2VjdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZml0VG9TZWN0aW9uKCl7XHJcbiAgICAgICAgICAgIC8vY2hlY2tpbmcgZml0VG9TZWN0aW9uIGFnYWluIGluIGNhc2UgaXQgd2FzIHNldCB0byBmYWxzZSBiZWZvcmUgdGhlIHRpbWVvdXQgZGVsYXlcclxuICAgICAgICAgICAgaWYoY2FuU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgIC8vYWxsb3dzIHRvIHNjcm9sbCB0byBhbiBhY3RpdmUgc2VjdGlvbiBhbmRcclxuICAgICAgICAgICAgICAgIC8vaWYgdGhlIHNlY3Rpb24gaXMgYWxyZWFkeSBhY3RpdmUsIHdlIHByZXZlbnQgZmlyaW5nIGNhbGxiYWNrc1xyXG4gICAgICAgICAgICAgICAgaXNSZXNpemluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFnZSgkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0pO1xyXG4gICAgICAgICAgICAgICAgaXNSZXNpemluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYWN0aXZlIHNlY3Rpb24gaGFzIHNlZW4gaW4gaXRzIHdob2xlIG9yIG5vdC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzQ29tcGxldGVseUluVmlld1BvcnQobW92ZW1lbnQpe1xyXG4gICAgICAgICAgICB2YXIgdG9wID0gJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgdmFyIGJvdHRvbSA9IHRvcCArIGdldFdpbmRvd0hlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgaWYobW92ZW1lbnQgPT0gJ3VwJyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm90dG9tID49IChnZXRTY3JvbGxUb3AoKSArIGdldFdpbmRvd0hlaWdodCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdG9wIDw9IGdldFNjcm9sbFRvcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSBzZWN0aW9uIGlzIGluIHRoZSB2aWV3cG9ydCBvciBub3QuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBpc1NlY3Rpb25JblZpZXdwb3J0IChlbCkge1xyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICB2YXIgdG9wID0gcmVjdC50b3A7XHJcbiAgICAgICAgICAgIHZhciBib3R0b20gPSByZWN0LmJvdHRvbTtcclxuXHJcbiAgICAgICAgICAgIC8vc29tZXRpbWVzIHRoZXJlJ3MgYSAxcHggb2Zmc2V0IG9uIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiBldmVuIHdoZW4gdGhlIFxyXG4gICAgICAgICAgICAvL3NlY3Rpb24ncyBoZWlnaHQgaXMgdGhlIHdpbmRvdy5pbm5lckhlaWdodCBvbmUuIEkgZ3Vlc3MgYmVjYXVzZSBwaXhlbHMgd29uJ3QgYWxsb3cgZGVjaW1hbHMuXHJcbiAgICAgICAgICAgIC8vdXNpbmcgdGhpcyBwcmV2ZW50cyBmcm9tIGxhenlMb2FkaW5nIHRoZSBzZWN0aW9uIHRoYXQgaXMgbm90IHlldCB2aXNpYmxlIFxyXG4gICAgICAgICAgICAvLyhvbmx5IDEgcGl4ZWwgb2Zmc2V0IGlzKVxyXG4gICAgICAgICAgICB2YXIgcGl4ZWxPZmZzZXQgPSAyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGlzVG9wSW5WaWV3ID0gdG9wICsgcGl4ZWxPZmZzZXQgPCB3aW5kb3dzSGVpZ2h0ICYmIHRvcCA+IDA7XHJcbiAgICAgICAgICAgIHZhciBpc0JvdHRvbUluVmlldyA9IGJvdHRvbSA+IHBpeGVsT2Zmc2V0ICYmIGJvdHRvbSA8IHdpbmRvd3NIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaXNUb3BJblZpZXcgfHwgaXNCb3R0b21JblZpZXc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGRpcmVjdG9uIG9mIHRoZSB0aGUgc2Nyb2xsaW5nIGZpcmVkIGJ5IHRoZSBzY3JvbGwgZXZlbnQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRTY3JvbGxEaXJlY3Rpb24oY3VycmVudFNjcm9sbCl7XHJcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBjdXJyZW50U2Nyb2xsID4gbGFzdFNjcm9sbCA/ICdkb3duJyA6ICd1cCc7XHJcblxyXG4gICAgICAgICAgICBsYXN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcclxuXHJcbiAgICAgICAgICAgIC8vbmVlZGVkIGZvciBhdXRvLWhlaWdodCBzZWN0aW9ucyB0byBkZXRlcm1pbmUgaWYgd2Ugd2FudCB0byBzY3JvbGwgdG8gdGhlIHRvcCBvciBib3R0b20gb2YgdGhlIGRlc3RpbmF0aW9uXHJcbiAgICAgICAgICAgIHByZXZpb3VzRGVzdFRvcCA9IGN1cnJlbnRTY3JvbGw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEZXRlcm1pbmVzIHRoZSB3YXkgb2Ygc2Nyb2xsaW5nIHVwIG9yIGRvd246XHJcbiAgICAgICAgKiBieSAnYXV0b21hdGljYWxseScgc2Nyb2xsaW5nIGEgc2VjdGlvbiBvciBieSB1c2luZyB0aGUgZGVmYXVsdCBhbmQgbm9ybWFsIHNjcm9sbGluZy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbGluZyh0eXBlKXtcclxuICAgICAgICAgICAgaWYgKCFpc1Njcm9sbEFsbG93ZWQubVt0eXBlXSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxTZWN0aW9uID0gKHR5cGUgPT09ICdkb3duJykgPyBtb3ZlU2VjdGlvbkRvd24gOiBtb3ZlU2VjdGlvblVwO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsYWJsZSA9IG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnNjcm9sbGFibGUoJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdKTtcclxuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9ICh0eXBlID09PSAnZG93bicpID8gJ2JvdHRvbScgOiAndG9wJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzY3JvbGxhYmxlICE9IG51bGwgKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2lzIHRoZSBzY3JvbGxiYXIgYXQgdGhlIHN0YXJ0L2VuZCBvZiB0aGUgc2Nyb2xsP1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmlzU2Nyb2xsZWQoY2hlY2ssIHNjcm9sbGFibGUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsU2VjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtb3ZlZCB1cC9kb3duXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsU2VjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIG1vdmVkIHVwL2Rvd25cclxuICAgICAgICAgICAgICAgIHNjcm9sbFNlY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIFByZXZlbnRpbmcgYm91bmNpbmcgaW4gaU9TICMyMjg1XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBwcmV2ZW50Qm91bmNpbmcoZSl7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiBpc1JlYWxseVRvdWNoKGUpICYmIGlzU2Nyb2xsQWxsb3dlZC5tLnVwKXtcclxuICAgICAgICAgICAgICAgIC8vcHJldmVudGluZyB0aGUgZWFzaW5nIG9uIGlPUyBkZXZpY2VzXHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRvdWNoU3RhcnRZID0gMDtcclxuICAgICAgICB2YXIgdG91Y2hTdGFydFggPSAwO1xyXG4gICAgICAgIHZhciB0b3VjaEVuZFkgPSAwO1xyXG4gICAgICAgIHZhciB0b3VjaEVuZFggPSAwO1xyXG5cclxuICAgICAgICAvKiBEZXRlY3RpbmcgdG91Y2ggZXZlbnRzXHJcblxyXG4gICAgICAgICogQXMgd2UgYXJlIGNoYW5naW5nIHRoZSB0b3AgcHJvcGVydHkgb2YgdGhlIHBhZ2Ugb24gc2Nyb2xsaW5nLCB3ZSBjYW4gbm90IHVzZSB0aGUgdHJhZGl0aW9uYWwgd2F5IHRvIGRldGVjdCBpdC5cclxuICAgICAgICAqIFRoaXMgd2F5LCB0aGUgdG91Y2hzdGFydCBhbmQgdGhlIHRvdWNoIG1vdmVzIHNob3dzIGFuIHNtYWxsIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGVtIHdoaWNoIGlzIHRoZVxyXG4gICAgICAgICogdXNlZCBvbmUgdG8gZGV0ZXJtaW5lIHRoZSBkaXJlY3Rpb24uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiB0b3VjaE1vdmVIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VjdGlvbiA9IGNsb3Nlc3QoZS50YXJnZXQsIFNFQ1RJT05fU0VMKSB8fMKgJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzUmVhbGx5VG91Y2goZSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAvL3ByZXZlbnRpbmcgdGhlIGVhc2luZyBvbiBpT1MgZGV2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0b3VjaEV2ZW50cyA9IGdldEV2ZW50c1BhZ2UoZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG91Y2hFbmRZID0gdG91Y2hFdmVudHMueTtcclxuICAgICAgICAgICAgICAgIHRvdWNoRW5kWCA9IHRvdWNoRXZlbnRzLng7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pZiBtb3ZlbWVudCBpbiB0aGUgWCBheHlzIGlzIGdyZWF0ZXIgdGhhbiBpbiB0aGUgWSBhbmQgdGhlIGN1cnJlY3Qgc2VjdGlvbiBoYXMgc2xpZGVzLi4uXHJcbiAgICAgICAgICAgICAgICBpZiAoJChTTElERVNfV1JBUFBFUl9TRUwsIGFjdGl2ZVNlY3Rpb24pLmxlbmd0aCAmJiBNYXRoLmFicyh0b3VjaFN0YXJ0WCAtIHRvdWNoRW5kWCkgPiAoTWF0aC5hYnModG91Y2hTdGFydFkgLSB0b3VjaEVuZFkpKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lzIHRoZSBtb3ZlbWVudCBncmVhdGVyIHRoYW4gdGhlIG1pbmltdW0gcmVzaXN0YW5jZSB0byBzY3JvbGw/XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzbGlkZU1vdmluZyAmJiBNYXRoLmFicyh0b3VjaFN0YXJ0WCAtIHRvdWNoRW5kWCkgPiAoZ2V0V2luZG93V2lkdGgoKSAvIDEwMCAqIG9wdGlvbnMudG91Y2hTZW5zaXRpdml0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoU3RhcnRYID4gdG91Y2hFbmRYKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQubS5yaWdodCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlUmlnaHQoYWN0aXZlU2VjdGlvbik7IC8vbmV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLm0ubGVmdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlTGVmdChhY3RpdmVTZWN0aW9uKTsgLy9wcmV2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy92ZXJ0aWNhbCBzY3JvbGxpbmcgKG9ubHkgd2hlbiBhdXRvU2Nyb2xsaW5nIGlzIGVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiBjYW5TY3JvbGwpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lzIHRoZSBtb3ZlbWVudCBncmVhdGVyIHRoYW4gdGhlIG1pbmltdW0gcmVzaXN0YW5jZSB0byBzY3JvbGw/XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRvdWNoU3RhcnRZIC0gdG91Y2hFbmRZKSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAxMDAgKiBvcHRpb25zLnRvdWNoU2Vuc2l0aXZpdHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaFN0YXJ0WSA+IHRvdWNoRW5kWSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nKCdkb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG91Y2hFbmRZID4gdG91Y2hTdGFydFkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZygndXAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBcyBJRSA+PSAxMCBmaXJlcyBib3RoIHRvdWNoIGFuZCBtb3VzZSBldmVudHMgd2hlbiB1c2luZyBhIG1vdXNlIGluIGEgdG91Y2hzY3JlZW5cclxuICAgICAgICAqIHRoaXMgd2F5IHdlIG1ha2Ugc3VyZSB0aGF0IGlzIHJlYWxseSBhIHRvdWNoIGV2ZW50IHdoYXQgSUUgaXMgZGV0ZWN0aW5nLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gaXNSZWFsbHlUb3VjaChlKXtcclxuICAgICAgICAgICAgLy9pZiBpcyBub3QgSUUgICB8fCAgSUUgaXMgZGV0ZWN0aW5nIGB0b3VjaGAgb3IgYHBlbmBcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBlLnBvaW50ZXJUeXBlID09PSAndW5kZWZpbmVkJyB8fCBlLnBvaW50ZXJUeXBlICE9ICdtb3VzZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEhhbmRsZXIgZm9yIHRoZSB0b3VjaCBzdGFydCBldmVudC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHRvdWNoU3RhcnRIYW5kbGVyKGUpe1xyXG5cclxuICAgICAgICAgICAgLy9zdG9wcGluZyB0aGUgYXV0byBzY3JvbGwgdG8gYWRqdXN0IHRvIGEgc2VjdGlvblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmZpdFRvU2VjdGlvbil7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVBbmltYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaXNSZWFsbHlUb3VjaChlKSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hFdmVudHMgPSBnZXRFdmVudHNQYWdlKGUpO1xyXG4gICAgICAgICAgICAgICAgdG91Y2hTdGFydFkgPSB0b3VjaEV2ZW50cy55O1xyXG4gICAgICAgICAgICAgICAgdG91Y2hTdGFydFggPSB0b3VjaEV2ZW50cy54O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGF2ZXJhZ2Ugb2YgdGhlIGxhc3QgYG51bWJlcmAgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGFycmF5LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QXZlcmFnZShlbGVtZW50cywgbnVtYmVyKXtcclxuICAgICAgICAgICAgdmFyIHN1bSA9IDA7XHJcblxyXG4gICAgICAgICAgICAvL3Rha2luZyBgbnVtYmVyYCBlbGVtZW50cyBmcm9tIHRoZSBlbmQgdG8gbWFrZSB0aGUgYXZlcmFnZSwgaWYgdGhlcmUgYXJlIG5vdCBlbm91Z2h0LCAxXHJcbiAgICAgICAgICAgIHZhciBsYXN0RWxlbWVudHMgPSBlbGVtZW50cy5zbGljZShNYXRoLm1heChlbGVtZW50cy5sZW5ndGggLSBudW1iZXIsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsYXN0RWxlbWVudHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgc3VtID0gc3VtICsgbGFzdEVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHN1bS9udW1iZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGV0ZWN0aW5nIG1vdXNld2hlZWwgc2Nyb2xsaW5nXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBodHRwOi8vYmxvZ3Muc2l0ZXBvaW50c3RhdGljLmNvbS9leGFtcGxlcy90ZWNoL21vdXNlLXdoZWVsL2luZGV4Lmh0bWxcclxuICAgICAgICAgKiBodHRwOi8vd3d3LnNpdGVwb2ludC5jb20vaHRtbDUtamF2YXNjcmlwdC1tb3VzZS13aGVlbC9cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgcHJldlRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gTW91c2VXaGVlbEhhbmRsZXIoZSkge1xyXG4gICAgICAgICAgICB2YXIgY3VyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB2YXIgaXNOb3JtYWxTY3JvbGwgPSBoYXNDbGFzcygkKENPTVBMRVRFTFlfU0VMKVswXSwgTk9STUFMX1NDUk9MTCk7XHJcblxyXG4gICAgICAgICAgICAvL2lzIHNjcm9sbCBhbGxvd2VkP1xyXG4gICAgICAgICAgICBpZiAoIWlzU2Nyb2xsQWxsb3dlZC5tLmRvd24gJiYgIWlzU2Nyb2xsQWxsb3dlZC5tLnVwKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9hdXRvc2Nyb2xsaW5nIGFuZCBub3Qgem9vbWluZz9cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmICFjb250cm9sUHJlc3NlZCAmJiAhaXNOb3JtYWxTY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgLy8gY3Jvc3MtYnJvd3NlciB3aGVlbCBkZWx0YVxyXG4gICAgICAgICAgICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZS53aGVlbERlbHRhIHx8IC1lLmRlbHRhWSB8fCAtZS5kZXRhaWw7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgdmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaG9yaXpvbnRhbERldGVjdGlvbiA9IHR5cGVvZiBlLndoZWVsRGVsdGFYICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZS5kZWx0YVggIT09ICd1bmRlZmluZWQnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzU2Nyb2xsaW5nVmVydGljYWxseSA9IChNYXRoLmFicyhlLndoZWVsRGVsdGFYKSA8IE1hdGguYWJzKGUud2hlZWxEZWx0YSkpIHx8IChNYXRoLmFicyhlLmRlbHRhWCApIDwgTWF0aC5hYnMoZS5kZWx0YVkpIHx8ICFob3Jpem9udGFsRGV0ZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0xpbWl0aW5nIHRoZSBhcnJheSB0byAxNTAgKGxldHMgbm90IHdhc3RlIG1lbW9yeSEpXHJcbiAgICAgICAgICAgICAgICBpZihzY3JvbGxpbmdzLmxlbmd0aCA+IDE0OSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5ncy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8va2VlcGluZyByZWNvcmQgb2YgdGhlIHByZXZpb3VzIHNjcm9sbGluZ3NcclxuICAgICAgICAgICAgICAgIHNjcm9sbGluZ3MucHVzaChNYXRoLmFicyh2YWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcHJldmVudGluZyB0byBzY3JvbGwgdGhlIHNpdGUgb24gbW91c2Ugd2hlZWwgd2hlbiBzY3JvbGxiYXIgaXMgcHJlc2VudFxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vdGltZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGxhc3Qgc2Nyb2xsIGFuZCB0aGUgY3VycmVudCBvbmVcclxuICAgICAgICAgICAgICAgIHZhciB0aW1lRGlmZiA9IGN1clRpbWUtcHJldlRpbWU7XHJcbiAgICAgICAgICAgICAgICBwcmV2VGltZSA9IGN1clRpbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9oYXZlbid0IHRoZXkgc2Nyb2xsZWQgaW4gYSB3aGlsZT9cclxuICAgICAgICAgICAgICAgIC8vKGVub3VnaCB0byBiZSBjb25zaWRlciBhIGRpZmZlcmVudCBzY3JvbGxpbmcgYWN0aW9uIHRvIHNjcm9sbCBhbm90aGVyIHNlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICBpZih0aW1lRGlmZiA+IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9lbXB0eWluZyB0aGUgYXJyYXksIHdlIGRvbnQgY2FyZSBhYm91dCBvbGQgc2Nyb2xsaW5ncyBmb3Igb3VyIGF2ZXJhZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5ncyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGNhblNjcm9sbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2ZXJhZ2VFbmQgPSBnZXRBdmVyYWdlKHNjcm9sbGluZ3MsIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXZlcmFnZU1pZGRsZSA9IGdldEF2ZXJhZ2Uoc2Nyb2xsaW5ncywgNzApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0FjY2VsZXJhdGluZyA9IGF2ZXJhZ2VFbmQgPj0gYXZlcmFnZU1pZGRsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy90byBhdm9pZCBkb3VibGUgc3dpcGVzLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNBY2NlbGVyYXRpbmcgJiYgaXNTY3JvbGxpbmdWZXJ0aWNhbGx5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgZG93bj9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nKCdkb3duJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyB1cD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nKCd1cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5maXRUb1NlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgLy9zdG9wcGluZyB0aGUgYXV0byBzY3JvbGwgdG8gYWRqdXN0IHRvIGEgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2xpZGVzIGEgc2xpZGVyIHRvIHRoZSBnaXZlbiBkaXJlY3Rpb24uXHJcbiAgICAgICAgKiBPcHRpb25hbCBgc2VjdGlvbmAgcGFyYW0uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBtb3ZlU2xpZGUoZGlyZWN0aW9uLCBzZWN0aW9uKXtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZVNlY3Rpb24gPSBzZWN0aW9uID09IG51bGwgPyAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0gOiBzZWN0aW9uO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVzID0gJChTTElERVNfV1JBUFBFUl9TRUwsIGFjdGl2ZVNlY3Rpb24pWzBdO1xyXG5cclxuICAgICAgICAgICAgLy8gbW9yZSB0aGFuIG9uZSBzbGlkZSBuZWVkZWQgYW5kIG5vdGhpbmcgc2hvdWxkIGJlIHNsaWRpbmdcclxuICAgICAgICAgICAgaWYgKHNsaWRlcyA9PSBudWxsIHx8IHNsaWRlTW92aW5nIHx8ICQoU0xJREVfU0VMLCBzbGlkZXMpLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTbGlkZSA9ICQoU0xJREVfQUNUSVZFX1NFTCwgc2xpZGVzKVswXTtcclxuICAgICAgICAgICAgdmFyIGRlc3RpbnkgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYoZGlyZWN0aW9uID09PSAnbGVmdCcpe1xyXG4gICAgICAgICAgICAgICAgZGVzdGlueSA9IHByZXZVbnRpbChjdXJyZW50U2xpZGUsIFNMSURFX1NFTCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGVzdGlueSA9IG5leHRVbnRpbChjdXJyZW50U2xpZGUsIFNMSURFX1NFTCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vaXNuJ3QgdGhlcmUgYSBuZXh0IHNsaWRlIGluIHRoZSBzZWN1ZW5jZT9cclxuICAgICAgICAgICAgaWYoZGVzdGlueSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIC8vcmVzcGVjdCBsb29wSG9yaXpvbnRhbCBzZXR0aW5cclxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5sb29wSG9yaXpvbnRhbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZVNpYmxpbmdzID0gc2libGluZ3MoY3VycmVudFNsaWRlKTtcclxuICAgICAgICAgICAgICAgIGlmKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKXtcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW55ID0gc2xpZGVTaWJsaW5nc1tzbGlkZVNpYmxpbmdzLmxlbmd0aCAtIDFdOyAvL2xhc3RcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbnkgPSBzbGlkZVNpYmxpbmdzWzBdOyAvL2ZpcnN0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNsaWRlTW92aW5nID0gdHJ1ZSAmJiAhRlAudGVzdC5pc1Rlc3Rpbmc7XHJcbiAgICAgICAgICAgIGxhbmRzY2FwZVNjcm9sbChzbGlkZXMsIGRlc3RpbnksIGRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIE1haW50YWlucyB0aGUgYWN0aXZlIHNsaWRlcyBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAqIChCZWNhdXNlIHRoZSBgc2Nyb2xsYCBhbmltYXRpb24gbWlnaHQgZ2V0IGxvc3Qgd2l0aCBzb21lIGFjdGlvbnMsIHN1Y2ggYXMgd2hlbiB1c2luZyBjb250aW51b3VzVmVydGljYWwpXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBrZWVwU2xpZGVzUG9zaXRpb24oKXtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZVNsaWRlcyA9ICQoU0xJREVfQUNUSVZFX1NFTCk7XHJcbiAgICAgICAgICAgIGZvciggdmFyIGkgPTA7IGk8YWN0aXZlU2xpZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHNpbGVudExhbmRzY2FwZVNjcm9sbChhY3RpdmVTbGlkZXNbaV0sICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcHJldmlvdXNEZXN0VG9wID0gMDtcclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJldHVybnMgdGhlIGRlc3RpbmF0aW9uIFkgcG9zaXRpb24gYmFzZWQgb24gdGhlIHNjcm9sbGluZyBkaXJlY3Rpb24gYW5kXHJcbiAgICAgICAgKiB0aGUgaGVpZ2h0IG9mIHRoZSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RGVzdGluYXRpb25Qb3NpdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnRUb3AgPSBlbGVtZW50Lm9mZnNldFRvcDtcclxuXHJcbiAgICAgICAgICAgIC8vdG9wIG9mIHRoZSBkZXNpbmF0aW9uIHdpbGwgYmUgYXQgdGhlIHRvcCBvZiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gZWxlbWVudFRvcDtcclxuICAgICAgICAgICAgdmFyIGlzU2Nyb2xsaW5nRG93biA9ICBlbGVtZW50VG9wID4gcHJldmlvdXNEZXN0VG9wO1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbkJvdHRvbSA9IHBvc2l0aW9uIC0gd2luZG93c0hlaWdodCArIGVsZW1lbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHZhciBiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uID0gb3B0aW9ucy5iaWdTZWN0aW9uc0Rlc3RpbmF0aW9uO1xyXG5cclxuICAgICAgICAgICAgLy9pcyB0aGUgZGVzdGluYXRpb24gZWxlbWVudCBiaWdnZXIgdGhhbiB0aGUgdmlld3BvcnQ/XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnRIZWlnaHQgPiB3aW5kb3dzSGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHVwP1xyXG4gICAgICAgICAgICAgICAgaWYoIWlzU2Nyb2xsaW5nRG93biAmJiAhYmlnU2VjdGlvbnNEZXN0aW5hdGlvbiB8fCBiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uID09PSAnYm90dG9tJyApe1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gc2VjdGlvbkJvdHRvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9zZWN0aW9ucyBlcXVhbCBvciBzbWFsbGVyIHRoYW4gdGhlIHZpZXdwb3J0IGhlaWdodCAmJiBzY3JvbGxpbmcgZG93bj8gfHwgIGlzIHJlc2l6aW5nIGFuZCBpdHMgaW4gdGhlIGxhc3Qgc2VjdGlvblxyXG4gICAgICAgICAgICBlbHNlIGlmKGlzU2Nyb2xsaW5nRG93biB8fCAoaXNSZXNpemluZyAmJiBuZXh0KGVsZW1lbnQpID09IG51bGwpICl7XHJcbiAgICAgICAgICAgICAgICAvL1RoZSBib3R0b20gb2YgdGhlIGRlc3RpbmF0aW9uIHdpbGwgYmUgYXQgdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gc2VjdGlvbkJvdHRvbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgS2VlcGluZyByZWNvcmQgb2YgdGhlIGxhc3Qgc2Nyb2xsZWQgcG9zaXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBzY3JvbGxpbmcgZGlyZWN0aW9uLlxyXG4gICAgICAgICAgICBObyBjb252ZW50aW9uYWwgbWV0aG9kcyBjYW4gYmUgdXNlZCBhcyB0aGUgc2Nyb2xsIGJhciBtaWdodCBub3QgYmUgcHJlc2VudFxyXG4gICAgICAgICAgICBBTkQgdGhlIHNlY3Rpb24gbWlnaHQgbm90IGJlIGFjdGl2ZSBpZiBpdCBpcyBhdXRvLWhlaWdodCBhbmQgZGlkbnQgcmVhY2ggdGhlIG1pZGRsZVxyXG4gICAgICAgICAgICBvZiB0aGUgdmlld3BvcnQuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHByZXZpb3VzRGVzdFRvcCA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgdGhlIHNpdGUgdG8gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHNjcm9sbHMgdG8gdGhlIHNsaWRlIGlmIGEgY2FsbGJhY2sgaXMgZ2l2ZW4uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxQYWdlKGVsZW1lbnQsIGNhbGxiYWNrLCBpc01vdmVtZW50VXApe1xyXG4gICAgICAgICAgICBpZihlbGVtZW50ID09IG51bGwpeyByZXR1cm47IH0gLy90aGVyZSdzIG5vIGVsZW1lbnQgdG8gc2Nyb2xsLCBsZWF2aW5nIHRoZSBmdW5jdGlvblxyXG5cclxuICAgICAgICAgICAgdmFyIGR0b3AgPSBnZXREZXN0aW5hdGlvblBvc2l0aW9uKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVBbmNob3JMaW5rO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVJbmRleDtcclxuXHJcbiAgICAgICAgICAgIC8vbG9jYWwgdmFyaWFibGVzXHJcbiAgICAgICAgICAgIHZhciB2ID0ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcclxuICAgICAgICAgICAgICAgIGlzTW92ZW1lbnRVcDogaXNNb3ZlbWVudFVwLFxyXG4gICAgICAgICAgICAgICAgZHRvcDogZHRvcCxcclxuICAgICAgICAgICAgICAgIHlNb3ZlbWVudDogZ2V0WW1vdmVtZW50KGVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgYW5jaG9yTGluazogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJyksXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uSW5kZXg6IGluZGV4KGVsZW1lbnQsIFNFQ1RJT05fU0VMKSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlOiAkKFNMSURFX0FDVElWRV9TRUwsIGVsZW1lbnQpWzBdLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbjogJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdLFxyXG4gICAgICAgICAgICAgICAgbGVhdmluZ1NlY3Rpb246IGluZGV4KCQoU0VDVElPTl9BQ1RJVkVfU0VMKSwgU0VDVElPTl9TRUwpICsgMSxcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NhY2hpbmcgdGhlIHZhbHVlIG9mIGlzUmVzaXppbmcgYXQgdGhlIG1vbW1lbnQgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG4gICAgICAgICAgICAgICAgLy9iZWNhdXNlIGl0IHdpbGwgYmUgY2hlY2tlZCBsYXRlciBpbnNpZGUgYSBzZXRUaW1lb3V0IGFuZCB0aGUgdmFsdWUgbWlnaHQgY2hhbmdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbElzUmVzaXppbmc6IGlzUmVzaXppbmdcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vcXVpdGluZyB3aGVuIGRlc3RpbmF0aW9uIHNjcm9sbCBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudCBvbmVcclxuICAgICAgICAgICAgaWYoKHYuYWN0aXZlU2VjdGlvbiA9PSBlbGVtZW50ICYmICFpc1Jlc2l6aW5nKSB8fCAob3B0aW9ucy5zY3JvbGxCYXIgJiYgZ2V0U2Nyb2xsVG9wKCkgPT09IHYuZHRvcCAmJiAhaGFzQ2xhc3MoZWxlbWVudCwgQVVUT19IRUlHSFQpICkpeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIGlmKHYuYWN0aXZlU2xpZGUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzbGlkZUFuY2hvckxpbmsgPSB2LmFjdGl2ZVNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKTtcclxuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpbmRleCh2LmFjdGl2ZVNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9jYWxsYmFjayAob25MZWF2ZSkgaWYgdGhlIHNpdGUgaXMgbm90IGp1c3QgcmVzaXppbmcgYW5kIHJlYWRqdXN0aW5nIHRoZSBzbGlkZXNcclxuICAgICAgICAgICAgaWYoIXYubG9jYWxJc1Jlc2l6aW5nKXtcclxuICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSB2LnlNb3ZlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3JlcXVpcmVkIGZvciBjb250aW5vdXNWZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGlzTW92ZW1lbnRVcCAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IGlzTW92ZW1lbnRVcCA/ICd1cCcgOiAnZG93bic7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9mb3IgdGhlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICB2LmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihpc0Z1bmN0aW9uKG9wdGlvbnMub25MZWF2ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZpcmVDYWxsYmFjaygnb25MZWF2ZScsIHYpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIGNvbnRpbnVvdXNWZXJ0aWNhbCAmJiB3ZSBuZWVkIHRvIHdyYXAgYXJvdW5kXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgb3B0aW9ucy5jb250aW51b3VzVmVydGljYWwgJiYgdHlwZW9mICh2LmlzTW92ZW1lbnRVcCkgIT09IFwidW5kZWZpbmVkXCIgJiZcclxuICAgICAgICAgICAgICAgICgoIXYuaXNNb3ZlbWVudFVwICYmIHYueU1vdmVtZW50ID09ICd1cCcpIHx8IC8vIEludGVuZGluZyB0byBzY3JvbGwgZG93biBidXQgYWJvdXQgdG8gZ28gdXAgb3JcclxuICAgICAgICAgICAgICAgICh2LmlzTW92ZW1lbnRVcCAmJiB2LnlNb3ZlbWVudCA9PSAnZG93bicpKSkgeyAvLyBpbnRlbmRpbmcgdG8gc2Nyb2xsIHVwIGJ1dCBhYm91dCB0byBnbyBkb3duXHJcblxyXG4gICAgICAgICAgICAgICAgdiA9IGNyZWF0ZUluZmluaXRlU2VjdGlvbnModik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vcGF1c2luZyBtZWRpYSBvZiB0aGUgbGVhdmluZyBzZWN0aW9uIChpZiB3ZSBhcmUgbm90IGp1c3QgcmVzaXppbmcsIGFzIGRlc3RpbmF0aW5vIHdpbGwgYmUgdGhlIHNhbWUgb25lKVxyXG4gICAgICAgICAgICBpZighdi5sb2NhbElzUmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgc3RvcE1lZGlhKHYuYWN0aXZlU2VjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuYmVmb3JlTGVhdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgQUNUSVZFKTtcclxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2libGluZ3MoZWxlbWVudCksIEFDVElWRSk7XHJcbiAgICAgICAgICAgIGxhenlMb2FkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5vbkxlYXZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vcHJldmVudGluZyBmcm9tIGFjdGl2YXRpbmcgdGhlIE1vdXNlV2hlZWxIYW5kbGVyIGV2ZW50XHJcbiAgICAgICAgICAgIC8vbW9yZSB0aGFuIG9uY2UgaWYgdGhlIHBhZ2UgaXMgc2Nyb2xsaW5nXHJcbiAgICAgICAgICAgIGNhblNjcm9sbCA9IGZhbHNlIHx8IEZQLnRlc3QuaXNUZXN0aW5nO1xyXG5cclxuICAgICAgICAgICAgc2V0U3RhdGUoc2xpZGVJbmRleCwgc2xpZGVBbmNob3JMaW5rLCB2LmFuY2hvckxpbmssIHYuc2VjdGlvbkluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIHBlcmZvcm1Nb3ZlbWVudCh2KTtcclxuXHJcbiAgICAgICAgICAgIC8vZmxhZyB0byBhdm9pZCBjYWxsaW5nbiBgc2Nyb2xsUGFnZSgpYCB0d2ljZSBpbiBjYXNlIG9mIHVzaW5nIGFuY2hvciBsaW5rc1xyXG4gICAgICAgICAgICBsYXN0U2Nyb2xsZWREZXN0aW55ID0gdi5hbmNob3JMaW5rO1xyXG5cclxuICAgICAgICAgICAgLy9hdm9pZCBmaXJpbmcgaXQgdHdpY2UgKGFzIGl0IGRvZXMgYWxzbyBvbiBzY3JvbGwpXHJcbiAgICAgICAgICAgIGFjdGl2YXRlTWVudUFuZE5hdih2LmFuY2hvckxpbmssIHYuc2VjdGlvbkluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGlzcGF0Y2ggZXZlbnRzICYgY2FsbGJhY2tzIG1ha2luZyBzdXJlIGl0IGRvZXMgaXQgb24gdGhlIHJpZ2h0IGZvcm1hdCwgZGVwZW5kaW5nIG9uXHJcbiAgICAgICAgKiB3aGV0aGVyIHYyY29tcGF0aWJsZSBpcyBiZWluZyB1c2VkIG9yIG5vdC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGZpcmVDYWxsYmFjayhldmVudE5hbWUsIHYpe1xyXG4gICAgICAgICAgICB2YXIgZXZlbnREYXRhID0gZ2V0RXZlbnREYXRhKGV2ZW50TmFtZSwgdik7XHJcblxyXG4gICAgICAgICAgICBpZighb3B0aW9ucy52MmNvbXBhdGlibGUpe1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcihjb250YWluZXIsIGV2ZW50TmFtZSwgZXZlbnREYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zW2V2ZW50TmFtZV0uYXBwbHkoZXZlbnREYXRhW09iamVjdC5rZXlzKGV2ZW50RGF0YSlbMF1dLCB0b0FycmF5KGV2ZW50RGF0YSkpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zW2V2ZW50TmFtZV0uYXBwbHkoZXZlbnREYXRhWzBdLCBldmVudERhdGEuc2xpY2UoMSkpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTWFrZXMgc3VyZSB0byBvbmx5IGNyZWF0ZSBhIFBhbmVsIG9iamVjdCBpZiB0aGUgZWxlbWVudCBleGlzdFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbnVsbE9yU2VjdGlvbihlbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBlbCA/IG5ldyBTZWN0aW9uKGVsKSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBudWxsT3JTbGlkZShlbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBlbCA/IG5ldyBTbGlkZShlbCkgOiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBldmVudCdzIGRhdGEgZm9yIHRoZSBnaXZlbiBldmVudCBvbiB0aGUgcmlnaHQgZm9ybWF0LiBEZXBlbmRpbmcgb24gd2hldGhlclxyXG4gICAgICAgICogdjJjb21wYXRpYmxlIGlzIGJlaW5nIHVzZWQgb3Igbm90LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0RXZlbnREYXRhKGV2ZW50TmFtZSwgdil7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbXNQZXJFdmVudDtcclxuXHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLnYyY29tcGF0aWJsZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy91c2luZyBmdW5jdGlvbnMgdG8gcnVuIG9ubHkgdGhlIG5lY2Vzc2FyeSBiaXRzIHdpdGhpbiB0aGUgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNQZXJFdmVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb246IG51bGxPclNlY3Rpb24oJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlOiBudWxsT3JTbGlkZSgkKFNMSURFX0FDVElWRV9TRUwsICQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSlbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkxlYXZlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBudWxsT3JTZWN0aW9uKHYuYWN0aXZlU2VjdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogbnVsbE9yU2VjdGlvbih2LmVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiB2LmRpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyTG9hZDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtc1BlckV2ZW50Lm9uTGVhdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhZnRlclNsaWRlTG9hZDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb246IG51bGxPclNlY3Rpb24odi5zZWN0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogbnVsbE9yU2xpZGUodi5wcmV2U2xpZGUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb246IG51bGxPclNsaWRlKHYuZGVzdGlueSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHYuZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb25TbGlkZUxlYXZlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zUGVyRXZlbnQuYWZ0ZXJTbGlkZUxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNQZXJFdmVudCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24oKXsgcmV0dXJuIFtjb250YWluZXJdOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uKCl7IHJldHVybiBbdi5hY3RpdmVTZWN0aW9uLCB2LmxlYXZpbmdTZWN0aW9uLCAodi5zZWN0aW9uSW5kZXggKyAxKSwgdi5kaXJlY3Rpb25dOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyTG9hZDogZnVuY3Rpb24oKXsgcmV0dXJuIFt2LmVsZW1lbnQsIHYuYW5jaG9yTGluaywgKHYuc2VjdGlvbkluZGV4ICsgMSldOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyU2xpZGVMb2FkOiBmdW5jdGlvbigpeyByZXR1cm4gW3YuZGVzdGlueSwgdi5hbmNob3JMaW5rLCAodi5zZWN0aW9uSW5kZXggKyAxKSwgdi5zbGlkZUFuY2hvciwgdi5zbGlkZUluZGV4XTsgfSxcclxuICAgICAgICAgICAgICAgICAgICBvblNsaWRlTGVhdmU6IGZ1bmN0aW9uKCl7IHJldHVybiBbdi5wcmV2U2xpZGUsIHYuYW5jaG9yTGluaywgKHYuc2VjdGlvbkluZGV4ICsgMSksIHYucHJldlNsaWRlSW5kZXgsIHYuZGlyZWN0aW9uLCB2LnNsaWRlSW5kZXhdOyB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBhcmFtc1BlckV2ZW50W2V2ZW50TmFtZV0oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUGVyZm9ybXMgdGhlIHZlcnRpY2FsIG1vdmVtZW50IChieSBDU1MzIG9yIGJ5IGpRdWVyeSlcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHBlcmZvcm1Nb3ZlbWVudCh2KXtcclxuICAgICAgICAgICAgLy8gdXNpbmcgQ1NTMyB0cmFuc2xhdGUgZnVuY3Rpb25hbGl0eVxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jc3MzICYmIG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiAhb3B0aW9ucy5zY3JvbGxCYXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgZmlyc3Qgc2VjdGlvbiBjYW4gaGF2ZSBhIG5lZ2F0aXZlIHZhbHVlIGluIGlPUyAxMC4gTm90IHF1aXRlIHN1cmUgd2h5OiAtMC4wMTQyODIyMjY1NjI1XHJcbiAgICAgICAgICAgICAgICAvLyB0aGF0J3Mgd2h5IHdlIHJvdW5kIGl0IHRvIDAuXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlM2QgPSAndHJhbnNsYXRlM2QoMHB4LCAtJyArIE1hdGgucm91bmQodi5kdG9wKSArICdweCwgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Db250YWluZXIodHJhbnNsYXRlM2QsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZXZlbiB3aGVuIHRoZSBzY3JvbGxpbmdTcGVlZCBpcyAwIHRoZXJlJ3MgYSBsaXR0bGUgZGVsYXksIHdoaWNoIG1pZ2h0IGNhdXNlIHRoZVxyXG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmdTcGVlZCB0byBjaGFuZ2UgaW4gY2FzZSBvZiB1c2luZyBzaWxlbnRNb3ZlVG8oKTtcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChhZnRlclNlY3Rpb25Mb2Fkc0lkKTtcclxuICAgICAgICAgICAgICAgICAgICBhZnRlclNlY3Rpb25Mb2Fkc0lkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZWN0aW9uTG9hZHModik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHVzaW5nIEpTIHRvIGFuaW1hdGVcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxTZXR0aW5ncyA9IGdldFNjcm9sbFNldHRpbmdzKHYuZHRvcCk7XHJcbiAgICAgICAgICAgICAgICBGUC50ZXN0LnRvcCA9IC12LmR0b3AgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvKHNjcm9sbFNldHRpbmdzLmVsZW1lbnQsIHNjcm9sbFNldHRpbmdzLm9wdGlvbnMsIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxCYXIpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogSGFjayFcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHRpbWVvdXQgcHJldmVudHMgc2V0dGluZyB0aGUgbW9zdCBkb21pbmFudCBzZWN0aW9uIGluIHRoZSB2aWV3cG9ydCBhcyBcImFjdGl2ZVwiIHdoZW4gdGhlIHVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsZWQgdG8gYSBzbWFsbGVyIHNlY3Rpb24gYnkgdXNpbmcgdGhlIG1vdXNld2hlZWwgKGF1dG8gc2Nyb2xsaW5nKSByYXRoZXIgdGhhbiBkcmFnaW5nIHRoZSBzY3JvbGwgYmFyLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiB1c2luZyBzY3JvbGxCYXI6dHJ1ZSBJdCBzZWVtcyBsaWtlIHRoZSBzY3JvbGwgZXZlbnRzIHN0aWxsIGdldHRpbmcgcHJvcGFnYXRlZCBldmVuIGFmdGVyIHRoZSBzY3JvbGxpbmcgYW5pbWF0aW9uIGhhcyBmaW5pc2hlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZWN0aW9uTG9hZHModik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sMzApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNlY3Rpb25Mb2Fkcyh2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBzY3JvbGxpbmcgc2V0dGluZ3MgZGVwZW5kaW5nIG9uIHRoZSBwbHVnaW4gYXV0b1Njcm9sbGluZyBvcHRpb25cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFNjcm9sbFNldHRpbmdzKHRvcCl7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGwgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIC8vdG9wIHByb3BlcnR5IGFuaW1hdGlvblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgIW9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbC5vcHRpb25zID0gLXRvcDtcclxuICAgICAgICAgICAgICAgIHNjcm9sbC5lbGVtZW50ID0gJChXUkFQUEVSX1NFTClbMF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vd2luZG93IHJlYWwgc2Nyb2xsaW5nXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGwub3B0aW9ucyA9IHRvcDtcclxuICAgICAgICAgICAgICAgIHNjcm9sbC5lbGVtZW50ID0gd2luZG93O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2Nyb2xsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIHNlY3Rpb25zIGJlZm9yZSBvciBhZnRlciB0aGUgY3VycmVudCBvbmUgdG8gY3JlYXRlIHRoZSBpbmZpbml0ZSBlZmZlY3QuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVJbmZpbml0ZVNlY3Rpb25zKHYpe1xyXG4gICAgICAgICAgICAvLyBTY3JvbGxpbmcgZG93blxyXG4gICAgICAgICAgICBpZiAoIXYuaXNNb3ZlbWVudFVwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGFsbCBwcmV2aW91cyBzZWN0aW9ucyB0byBhZnRlciB0aGUgYWN0aXZlIHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGFmdGVyKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSwgcHJldkFsbCh2LmFjdGl2ZVNlY3Rpb24sIFNFQ1RJT05fU0VMKS5yZXZlcnNlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyAvLyBTY3JvbGxpbmcgdXBcclxuICAgICAgICAgICAgICAgIC8vIE1vdmUgYWxsIG5leHQgc2VjdGlvbnMgdG8gYmVmb3JlIHRoZSBhY3RpdmUgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgYmVmb3JlKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSwgbmV4dEFsbCh2LmFjdGl2ZVNlY3Rpb24sIFNFQ1RJT05fU0VMKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE1haW50YWluIHRoZSBkaXNwbGF5ZWQgcG9zaXRpb24gKG5vdyB0aGF0IHdlIGNoYW5nZWQgdGhlIGVsZW1lbnQgb3JkZXIpXHJcbiAgICAgICAgICAgIHNpbGVudFNjcm9sbCgkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0ub2Zmc2V0VG9wKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1haW50YWluIHRoZSBhY3RpdmUgc2xpZGVzIHZpc2libGUgaW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgIGtlZXBTbGlkZXNQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8gc2F2ZSBmb3IgbGF0ZXIgdGhlIGVsZW1lbnRzIHRoYXQgc3RpbGwgbmVlZCB0byBiZSByZW9yZGVyZWRcclxuICAgICAgICAgICAgdi53cmFwQXJvdW5kRWxlbWVudHMgPSB2LmFjdGl2ZVNlY3Rpb247XHJcblxyXG4gICAgICAgICAgICAvLyBSZWNhbGN1bGF0ZSBhbmltYXRpb24gdmFyaWFibGVzXHJcbiAgICAgICAgICAgIHYuZHRvcCA9IHYuZWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIHYueU1vdmVtZW50ID0gZ2V0WW1vdmVtZW50KHYuZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRml4IHNlY3Rpb24gb3JkZXIgYWZ0ZXIgY29udGludW91c1ZlcnRpY2FsIGNoYW5nZXMgaGF2ZSBiZWVuIGFuaW1hdGVkXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBjb250aW51b3VzVmVydGljYWxGaXhTZWN0aW9uT3JkZXIgKHYpIHtcclxuICAgICAgICAgICAgLy8gSWYgY29udGludW91c1ZlcnRpY2FsIGlzIGluIGVmZmVjdCAoYW5kIGF1dG9TY3JvbGxpbmcgd291bGQgYWxzbyBiZSBpbiBlZmZlY3QgdGhlbiksXHJcbiAgICAgICAgICAgIC8vIGZpbmlzaCBtb3ZpbmcgdGhlIGVsZW1lbnRzIGFyb3VuZCBzbyB0aGUgZGlyZWN0IG5hdmlnYXRpb24gd2lsbCBmdW5jdGlvbiBtb3JlIHNpbXBseVxyXG4gICAgICAgICAgICBpZiAodi53cmFwQXJvdW5kRWxlbWVudHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodi5pc01vdmVtZW50VXApIHtcclxuICAgICAgICAgICAgICAgIGJlZm9yZSgkKFNFQ1RJT05fU0VMKVswXSwgdi53cmFwQXJvdW5kRWxlbWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXIoJChTRUNUSU9OX1NFTClbJChTRUNUSU9OX1NFTCkubGVuZ3RoLTFdLCB2LndyYXBBcm91bmRFbGVtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNpbGVudFNjcm9sbCgkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0ub2Zmc2V0VG9wKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1haW50YWluIHRoZSBhY3RpdmUgc2xpZGVzIHZpc2libGUgaW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgIGtlZXBTbGlkZXNQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBY3Rpb25zIHRvIGRvIG9uY2UgdGhlIHNlY3Rpb24gaXMgbG9hZGVkLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWZ0ZXJTZWN0aW9uTG9hZHMgKHYpe1xyXG4gICAgICAgICAgICBjb250aW51b3VzVmVydGljYWxGaXhTZWN0aW9uT3JkZXIodik7XHJcblxyXG4gICAgICAgICAgICAvL2NhbGxiYWNrIChhZnRlckxvYWQpIGlmIHRoZSBzaXRlIGlzIG5vdCBqdXN0IHJlc2l6aW5nIGFuZCByZWFkanVzdGluZyB0aGUgc2xpZGVzXHJcbiAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24ob3B0aW9ucy5hZnRlckxvYWQpICYmICF2LmxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICBmaXJlQ2FsbGJhY2soJ2FmdGVyTG9hZCcsIHYpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93KXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmFmdGVyTG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighdi5sb2NhbElzUmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgcGxheU1lZGlhKHYuZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFkZENsYXNzKHYuZWxlbWVudCwgQ09NUExFVEVMWSk7XHJcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNpYmxpbmdzKHYuZWxlbWVudCksIENPTVBMRVRFTFkpO1xyXG4gICAgICAgICAgICBsYXp5TG9hZE90aGVycygpO1xyXG5cclxuICAgICAgICAgICAgY2FuU2Nyb2xsID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24odi5jYWxsYmFjaykpe1xyXG4gICAgICAgICAgICAgICAgdi5jYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgdGhlIHZhbHVlIGZvciB0aGUgZ2l2ZW4gYXR0cmlidXRlIGZyb20gdGhlIGBkYXRhLWAgYXR0cmlidXRlIHdpdGggdGhlIHNhbWUgc3VmZml4XHJcbiAgICAgICAgKiBpZTogZGF0YS1zcmNzZXQgPT0+IHNyY3NldCAgfCAgZGF0YS1zcmMgPT0+IHNyY1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0U3JjKGVsZW1lbnQsIGF0dHJpYnV0ZSl7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGF0dHJpYnV0ZSkpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS0nICsgYXR0cmlidXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTWFrZXMgc3VyZSBsYXp5bG9hZCBpcyBkb25lIGZvciBvdGhlciBzZWN0aW9ucyBpbiB0aGUgdmlld3BvcnQgdGhhdCBhcmUgbm90IHRoZVxyXG4gICAgICAgICogYWN0aXZlIG9uZS4gXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBsYXp5TG9hZE90aGVycygpe1xyXG4gICAgICAgICAgICB2YXIgaGFzQXV0b0hlaWdodFNlY3Rpb25zID0gJChBVVRPX0hFSUdIVF9TRUwpWzBdIHx8IGlzUmVzcG9uc2l2ZU1vZGUoKSAmJiAkKEFVVE9fSEVJR0hUX1JFU1BPTlNJVkVfU0VMKVswXTtcclxuXHJcbiAgICAgICAgICAgIC8vcXVpdHRpbmcgd2hlbiBpdCBkb2Vzbid0IGFwcGx5XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5sYXp5TG9hZGluZyB8fCAhaGFzQXV0b0hlaWdodFNlY3Rpb25zKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9tYWtpbmcgc3VyZSB0byBsYXp5IGxvYWQgYXV0by1oZWlnaHQgc2VjdGlvbnMgdGhhdCBhcmUgaW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgICQoU0VDVElPTl9TRUwgKyAnOm5vdCgnICsgQUNUSVZFX1NFTCArICcpJykuZm9yRWFjaChmdW5jdGlvbihzZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgIGlmKGlzU2VjdGlvbkluVmlld3BvcnQoc2VjdGlvbikpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhenlMb2FkKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTGF6eSBsb2FkcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIGVsZW1lbnRzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbGF6eUxvYWQoZGVzdGlueSl7XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5sYXp5TG9hZGluZyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwYW5lbCA9IGdldFNsaWRlT3JTZWN0aW9uKGRlc3RpbnkpO1xyXG5cclxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtc3JjXSwgaW1nW2RhdGEtc3Jjc2V0XSwgc291cmNlW2RhdGEtc3JjXSwgc291cmNlW2RhdGEtc3Jjc2V0XSwgdmlkZW9bZGF0YS1zcmNdLCBhdWRpb1tkYXRhLXNyY10sIGlmcmFtZVtkYXRhLXNyY10nLCBwYW5lbCkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgICAgIFsnc3JjJywgJ3NyY3NldCddLmZvckVhY2goZnVuY3Rpb24odHlwZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLScgKyB0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihhdHRyaWJ1dGUgIT0gbnVsbCAmJiBhdHRyaWJ1dGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTcmMoZWxlbWVudCwgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1lZGlhTG9hZChkZXN0aW55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYobWF0Y2hlcyhlbGVtZW50LCAnc291cmNlJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50VG9QbGF5ID0gIGNsb3Nlc3QoZWxlbWVudCwgJ3ZpZGVvLCBhdWRpbycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnRUb1BsYXkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9QbGF5LmxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRvUGxheS5vbmxvYWRlZGRhdGEgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25NZWRpYUxvYWQoZGVzdGlueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQ2FsbGJhY2sgZmlyaW5nIHdoZW4gYSBsYXp5IGxvYWQgbWVkaWEgZWxlbWVudCBoYXMgbG9hZGVkLlxyXG4gICAgICAgICogTWFraW5nIHN1cmUgaXQgb25seSBmaXJlcyBvbmUgcGVyIHNlY3Rpb24gaW4gbm9ybWFsIGNvbmRpdGlvbnMgKGlmIGxvYWQgdGltZSBpcyBub3QgaHVnZSlcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uTWVkaWFMb2FkKHNlY3Rpb24pe1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93KXtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChnX21lZGlhTG9hZGVkSWQpO1xyXG4gICAgICAgICAgICAgICAgZ19tZWRpYUxvYWRlZElkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEJhckhhbmRsZXIuY3JlYXRlU2Nyb2xsQmFyKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBQbGF5cyB2aWRlbyBhbmQgYXVkaW8gZWxlbWVudHMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBwbGF5TWVkaWEoZGVzdGlueSl7XHJcbiAgICAgICAgICAgIHZhciBwYW5lbCA9IGdldFNsaWRlT3JTZWN0aW9uKGRlc3RpbnkpO1xyXG5cclxuICAgICAgICAgICAgLy9wbGF5aW5nIEhUTUw1IG1lZGlhIGVsZW1lbnRzXHJcbiAgICAgICAgICAgICQoJ3ZpZGVvLCBhdWRpbycsIHBhbmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgaWYoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5JykgJiYgdHlwZW9mIGVsZW1lbnQucGxheSA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3lvdXR1YmUgdmlkZW9zXHJcbiAgICAgICAgICAgICQoJ2lmcmFtZVtzcmMqPVwieW91dHViZS5jb20vZW1iZWQvXCJdJywgcGFuZWwpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5JykgKXtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5WW91dHViZShlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL2luIGNhc2UgdGhlIFVSTCB3YXMgbm90IGxvYWRlZCB5ZXQuIE9uIHBhZ2UgbG9hZCB3ZSBuZWVkIHRpbWUgZm9yIHRoZSBuZXcgVVJMICh3aXRoIHRoZSBBUEkgc3RyaW5nKSB0byBsb2FkLlxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5JykgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheVlvdXR1YmUoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFBsYXlzIGEgeW91dHViZSB2aWRlb1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcGxheVlvdXR1YmUoZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSgne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcInBsYXlWaWRlb1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU3RvcHMgdmlkZW8gYW5kIGF1ZGlvIGVsZW1lbnRzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc3RvcE1lZGlhKGRlc3Rpbnkpe1xyXG4gICAgICAgICAgICB2YXIgcGFuZWwgPSBnZXRTbGlkZU9yU2VjdGlvbihkZXN0aW55KTtcclxuXHJcbiAgICAgICAgICAgIC8vc3RvcHBpbmcgSFRNTDUgbWVkaWEgZWxlbWVudHNcclxuICAgICAgICAgICAgJCgndmlkZW8sIGF1ZGlvJywgcGFuZWwpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBpZiggIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWtlZXBwbGF5aW5nJykgJiYgdHlwZW9mIGVsZW1lbnQucGF1c2UgPT09ICdmdW5jdGlvbicgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8veW91dHViZSB2aWRlb3NcclxuICAgICAgICAgICAgJCgnaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nLCBwYW5lbCkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgICAgIGlmKCAveW91dHViZVxcLmNvbVxcL2VtYmVkXFwvLy50ZXN0KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzcmMnKSkgJiYgIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWtlZXBwbGF5aW5nJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSgne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcInBhdXNlVmlkZW9cIixcImFyZ3NcIjpcIlwifScsJyonKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGFjdGl2ZSBzbGlkZSAob3Igc2VjdGlvbikgZm9yIHRoZSBnaXZlbiBzZWN0aW9uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRTbGlkZU9yU2VjdGlvbihkZXN0aW55KXtcclxuICAgICAgICAgICAgdmFyIHNsaWRlID0gJChTTElERV9BQ1RJVkVfU0VMLCBkZXN0aW55KTtcclxuICAgICAgICAgICAgaWYoIHNsaWRlLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgICAgIGRlc3RpbnkgPSBzbGlkZVswXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRlc3Rpbnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgdG8gdGhlIGFuY2hvciBpbiB0aGUgVVJMIHdoZW4gbG9hZGluZyB0aGUgc2l0ZVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsVG9BbmNob3IoKXtcclxuICAgICAgICAgICAgdmFyIGFuY2hvcnMgPSAgZ2V0QW5jaG9yc1VSTCgpO1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbkFuY2hvciA9IGFuY2hvcnMuc2VjdGlvbjtcclxuICAgICAgICAgICAgdmFyIHNsaWRlQW5jaG9yID0gYW5jaG9ycy5zbGlkZTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNlY3Rpb25BbmNob3IpeyAgLy9pZiB0aGVyZXMgYW55ICNcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuYW5pbWF0ZUFuY2hvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUGFnZUFuZFNsaWRlKHNlY3Rpb25BbmNob3IsIHNsaWRlQW5jaG9yKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNpbGVudE1vdmVUbyhzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGV0ZWN0aW5nIGFueSBjaGFuZ2Ugb24gdGhlIFVSTCB0byBzY3JvbGwgdG8gdGhlIGdpdmVuIGFuY2hvciBsaW5rXHJcbiAgICAgICAgKiAoYSB3YXkgdG8gZGV0ZWN0IGJhY2sgaGlzdG9yeSBidXR0b24gYXMgd2UgcGxheSB3aXRoIHRoZSBoYXNoZXMgb24gdGhlIFVSTClcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGhhc2hDaGFuZ2VIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGlmKCFpc1Njcm9sbGluZyAmJiAhb3B0aW9ucy5sb2NrQW5jaG9ycyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9ycyA9IGdldEFuY2hvcnNVUkwoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uQW5jaG9yID0gYW5jaG9ycy5zZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlQW5jaG9yID0gYW5jaG9ycy5zbGlkZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3doZW4gbW92aW5nIHRvIGEgc2xpZGUgaW4gdGhlIGZpcnN0IHNlY3Rpb24gZm9yIHRoZSBmaXJzdCB0aW1lIChmaXJzdCB0aW1lIHRvIGFkZCBhbiBhbmNob3IgdG8gdGhlIFVSTClcclxuICAgICAgICAgICAgICAgIHZhciBpc0ZpcnN0U2xpZGVNb3ZlID0gICh0eXBlb2YgbGFzdFNjcm9sbGVkRGVzdGlueSA9PT0gJ3VuZGVmaW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzRmlyc3RTY3JvbGxNb3ZlID0gKHR5cGVvZiBsYXN0U2Nyb2xsZWREZXN0aW55ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc2xpZGVBbmNob3IgPT09ICd1bmRlZmluZWQnICYmICFzbGlkZU1vdmluZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2VjdGlvbkFuY2hvciAmJiBzZWN0aW9uQW5jaG9yLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLyppbiBvcmRlciB0byBjYWxsIHNjcm9sbHBhZ2UoKSBvbmx5IG9uY2UgZm9yIGVhY2ggZGVzdGluYXRpb24gYXQgYSB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgSXQgaXMgY2FsbGVkIHR3aWNlIGZvciBlYWNoIHNjcm9sbCBvdGhlcndpc2UsIGFzIGluIGNhc2Ugb2YgdXNpbmcgYW5jaG9ybGlua3MgYGhhc2hDaGFuZ2VgXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgaXMgZmlyZWQgb24gZXZlcnkgc2Nyb2xsIHRvby4qL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoc2VjdGlvbkFuY2hvciAmJiBzZWN0aW9uQW5jaG9yICE9PSBsYXN0U2Nyb2xsZWREZXN0aW55KSAmJiAhaXNGaXJzdFNsaWRlTW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBpc0ZpcnN0U2Nyb2xsTW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoIXNsaWRlTW92aW5nICYmIGxhc3RTY3JvbGxlZFNsaWRlICE9IHNsaWRlQW5jaG9yICkpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUGFnZUFuZFNsaWRlKHNlY3Rpb25BbmNob3IsIHNsaWRlQW5jaG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vZ2V0cyB0aGUgVVJMIGFuY2hvcnMgKHNlY3Rpb24gYW5kIHNsaWRlKVxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEFuY2hvcnNVUkwoKXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb247XHJcbiAgICAgICAgICAgIHZhciBzbGlkZTtcclxuICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuXHJcbiAgICAgICAgICAgIGlmKGhhc2gubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIC8vZ2V0dGluZyB0aGUgYW5jaG9yIGxpbmsgaW4gdGhlIFVSTCBhbmQgZGVsZXRpbmcgdGhlIGAjYFxyXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvcnNQYXJ0cyA9ICBoYXNoLnJlcGxhY2UoJyMnLCAnJykuc3BsaXQoJy8nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3VzaW5nIC8gZm9yIHZpc3VhbCByZWFzb25zIGFuZCBub3QgYXMgYSBzZWN0aW9uL3NsaWRlIHNlcGFyYXRvciAjMjgwM1xyXG4gICAgICAgICAgICAgICAgdmFyIGlzRnVua3lBbmNob3IgPSBoYXNoLmluZGV4T2YoJyMvJykgPiAtMTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uID0gaXNGdW5reUFuY2hvciA/ICcvJyArIGFuY2hvcnNQYXJ0c1sxXSA6IGRlY29kZVVSSUNvbXBvbmVudChhbmNob3JzUGFydHNbMF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZUFuY2hvciA9IGlzRnVua3lBbmNob3IgPyBhbmNob3JzUGFydHNbMl0gOiBhbmNob3JzUGFydHNbMV07XHJcbiAgICAgICAgICAgICAgICBpZihzbGlkZUFuY2hvciAmJiBzbGlkZUFuY2hvci5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlID0gZGVjb2RlVVJJQ29tcG9uZW50KHNsaWRlQW5jaG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IHNlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBzbGlkZTogc2xpZGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vU2xpZGluZyB3aXRoIGFycm93IGtleXMsIGJvdGgsIHZlcnRpY2FsIGFuZCBob3Jpem9udGFsXHJcbiAgICAgICAgZnVuY3Rpb24ga2V5ZG93bkhhbmRsZXIoZSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoa2V5ZG93bklkKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XHJcblxyXG4gICAgICAgICAgICAvL3RhYj9cclxuICAgICAgICAgICAgaWYoa2V5Q29kZSA9PT0gOSl7XHJcbiAgICAgICAgICAgICAgICBvblRhYihlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZighbWF0Y2hlcyhhY3RpdmVFbGVtZW50LCAndGV4dGFyZWEnKSAmJiAhbWF0Y2hlcyhhY3RpdmVFbGVtZW50LCAnaW5wdXQnKSAmJiAhbWF0Y2hlcyhhY3RpdmVFbGVtZW50LCAnc2VsZWN0JykgJiZcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnKSAhPT0gXCJ0cnVlXCIgJiYgYWN0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScpICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5rZXlib2FyZFNjcm9sbGluZyAmJiBvcHRpb25zLmF1dG9TY3JvbGxpbmcpe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcHJldmVudGluZyB0aGUgc2Nyb2xsIHdpdGggYXJyb3cga2V5cyAmIHNwYWNlYmFyICYgUGFnZSBVcCAmIERvd24ga2V5c1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleUNvbnRyb2xzID0gWzQwLCAzOCwgMzIsIDMzLCAzNF07XHJcbiAgICAgICAgICAgICAgICBpZihrZXlDb250cm9scy5pbmRleE9mKGtleUNvZGUpID4gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRyb2xQcmVzc2VkID0gZS5jdHJsS2V5O1xyXG5cclxuICAgICAgICAgICAgICAgIGtleWRvd25JZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBvbmtleWRvd24oZSk7XHJcbiAgICAgICAgICAgICAgICB9LDE1MCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvb2x0aXBUZXh0SGFuZGxlcigpe1xyXG4gICAgICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xyXG4gICAgICAgICAgICB0cmlnZ2VyKHByZXYodGhpcyksICdjbGljaycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90byBwcmV2ZW50IHNjcm9sbGluZyB3aGlsZSB6b29taW5nXHJcbiAgICAgICAgZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICBpZihpc1dpbmRvd0ZvY3VzZWQpeyAvL3RoZSBrZXl1cCBnZXRzIGZpcmVkIG9uIG5ldyB0YWIgY3RybCArIHQgaW4gRmlyZWZveFxyXG4gICAgICAgICAgICAgICAgY29udHJvbFByZXNzZWQgPSBlLmN0cmxLZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vYmluZGluZyB0aGUgbW91c2Vtb3ZlIHdoZW4gdGhlIG1vdXNlJ3MgbWlkZGxlIGJ1dHRvbiBpcyByZWxlYXNlZFxyXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIC8vbWlkZGxlIGJ1dHRvblxyXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PSAyKXtcclxuICAgICAgICAgICAgICAgIG9sZFBhZ2VZID0gZS5wYWdlWTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy91bmJpbmRpbmcgdGhlIG1vdXNlbW92ZSB3aGVuIHRoZSBtb3VzZSdzIG1pZGRsZSBidXR0b24gaXMgcmVsZWFzZWRcclxuICAgICAgICBmdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihlKXtcclxuICAgICAgICAgICAgLy9taWRkbGUgYnV0dG9uXHJcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDIpe1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIE1ha2VzIHN1cmUgdGhlIHRhYiBrZXkgd2lsbCBvbmx5IGZvY3VzIGVsZW1lbnRzIHdpdGhpbiB0aGUgY3VycmVudCBzZWN0aW9uL3NsaWRlXHJcbiAgICAgICAgKiBwcmV2ZW50aW5nIHRoaXMgd2F5IGZyb20gYnJlYWtpbmcgdGhlIHBhZ2UuXHJcbiAgICAgICAgKiBCYXNlZCBvbiBcIk1vZGFscyBhbmQga2V5Ym9hcmQgdHJhcHNcIlxyXG4gICAgICAgICogZnJvbSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL2FjY2Vzc2liaWxpdHkvZm9jdXMvdXNpbmctdGFiaW5kZXhcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uVGFiKGUpe1xyXG4gICAgICAgICAgICB2YXIgaXNTaGlmdFByZXNzZWQgPSBlLnNoaWZ0S2V5O1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZXMoZ2V0U2xpZGVPclNlY3Rpb24oJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdKSk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwcmV2ZW50QW5kRm9jdXNGaXJzdChlKXtcclxuICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvY3VzYWJsZUVsZW1lbnRzWzBdID8gZm9jdXNhYmxlRWxlbWVudHNbMF0uZm9jdXMoKSA6IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vb3V0c2lkZSBhbnkgc2VjdGlvbiBvciBzbGlkZT8gTGV0J3Mgbm90IGhpamFjayB0aGUgdGFiIVxyXG4gICAgICAgICAgICBpZihpc0ZvY3VzT3V0c2lkZShlKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vaXMgdGhlcmUgYW4gZWxlbWVudCB3aXRoIGZvY3VzP1xyXG4gICAgICAgICAgICBpZihhY3RpdmVFbGVtZW50KXtcclxuICAgICAgICAgICAgICAgIGlmKGNsb3Nlc3QoYWN0aXZlRWxlbWVudCwgU0VDVElPTl9BQ1RJVkVfU0VMICsgJywnICsgU0VDVElPTl9BQ1RJVkVfU0VMICsgJyAnICsgU0xJREVfQUNUSVZFX1NFTCkgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IHByZXZlbnRBbmRGb2N1c0ZpcnN0KGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL25vIGVsZW1lbnQgaWYgZm9jdXNlZD8gTGV0J3MgZm9jdXMgdGhlIGZpcnN0IG9uZSBvZiB0aGUgc2VjdGlvbi9zbGlkZVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcHJldmVudEFuZEZvY3VzRmlyc3QoZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vd2hlbiByZWFjaGVkIHRoZSBmaXJzdCBvciBsYXN0IGZvY3VzYWJsZSBlbGVtZW50IG9mIHRoZSBzZWN0aW9uL3NsaWRlXHJcbiAgICAgICAgICAgIC8vd2UgcHJldmVudCB0aGUgdGFiIGFjdGlvbiB0byBrZWVwIGl0IGluIHRoZSBsYXN0IGZvY3VzYWJsZSBlbGVtZW50XHJcbiAgICAgICAgICAgIGlmKCFpc1NoaWZ0UHJlc3NlZCAmJiBhY3RpdmVFbGVtZW50ID09IGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDFdIHx8XHJcbiAgICAgICAgICAgICAgICBpc1NoaWZ0UHJlc3NlZCAmJiBhY3RpdmVFbGVtZW50ID09IGZvY3VzYWJsZUVsZW1lbnRzWzBdXHJcbiAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIGFsbCB0aGUgZm9jdXNhYmxlIGVsZW1lbnRzIGluc2lkZSB0aGUgcGFzc2VkIGVsZW1lbnQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRGb2N1c2FibGVzKGVsKXtcclxuICAgICAgICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoJChmb2N1c2FibGVFbGVtZW50c1N0cmluZywgZWwpKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSAhPT0gJy0xJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYXJlIGFsc28gbm90IGhpZGRlbiBlbGVtZW50cyAob3Igd2l0aCBoaWRkZW4gcGFyZW50cylcclxuICAgICAgICAgICAgICAgICAgICAmJiBpdGVtLm9mZnNldFBhcmVudCAhPT0gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgZm9jdXMgaXMgb3V0c2lkZSBmdWxscGFnZS5qcyBzZWN0aW9ucy9zbGlkZXMgb3Igbm90LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gaXNGb2N1c091dHNpZGUoZSl7XHJcbiAgICAgICAgICAgIHZhciBhbGxGb2N1c2FibGVzID0gZ2V0Rm9jdXNhYmxlcyhkb2N1bWVudCk7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50Rm9jdXNJbmRleCA9IGFsbEZvY3VzYWJsZXMuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuICAgICAgICAgICAgdmFyIGZvY3VzRGVzdGluYXRpb25JbmRleCA9IGUuc2hpZnRLZXkgPyBjdXJyZW50Rm9jdXNJbmRleCAtIDEgOiBjdXJyZW50Rm9jdXNJbmRleCArIDE7XHJcbiAgICAgICAgICAgIHZhciBmb2N1c0Rlc3RpbmF0aW9uID0gYWxsRm9jdXNhYmxlc1tmb2N1c0Rlc3RpbmF0aW9uSW5kZXhdO1xyXG4gICAgICAgICAgICB2YXIgZGVzdGluYXRpb25JdGVtU2xpZGUgPSBudWxsT3JTbGlkZShjbG9zZXN0KGZvY3VzRGVzdGluYXRpb24sIFNMSURFX1NFTCkpO1xyXG4gICAgICAgICAgICB2YXIgZGVzdGluYXRpb25JdGVtU2VjdGlvbiA9IG51bGxPclNlY3Rpb24oY2xvc2VzdChmb2N1c0Rlc3RpbmF0aW9uLCBTRUNUSU9OX1NFTCkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICFkZXN0aW5hdGlvbkl0ZW1TbGlkZSAmJiAhZGVzdGluYXRpb25JdGVtU2VjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vU2Nyb2xsaW5nIGhvcml6b250YWxseSB3aGVuIGNsaWNraW5nIG9uIHRoZSBzbGlkZXIgY29udHJvbHMuXHJcbiAgICAgICAgZnVuY3Rpb24gc2xpZGVBcnJvd0hhbmRsZXIoKXtcclxuICAgICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBjbG9zZXN0KHRoaXMsIFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXHJcbiAgICAgICAgICAgIGlmIChoYXNDbGFzcyh0aGlzLCBTTElERVNfUFJFVikpIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5tLmxlZnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZUxlZnQoc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQubS5yaWdodCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlUmlnaHQoc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vd2hlbiBvcGVuaW5nIGEgbmV3IHRhYiAoY3RybCArIHQpLCBgY29udHJvbGAgd29uJ3QgYmUgcHJlc3NlZCB3aGVuIGNvbWluZyBiYWNrLlxyXG4gICAgICAgIGZ1bmN0aW9uIGJsdXJIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGlzV2luZG93Rm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb250cm9sUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TY3JvbGxzIHRvIHRoZSBzZWN0aW9uIHdoZW4gY2xpY2tpbmcgdGhlIG5hdmlnYXRpb24gYnVsbGV0XHJcbiAgICAgICAgZnVuY3Rpb24gc2VjdGlvbkJ1bGxldEhhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xyXG5cclxuICAgICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cclxuICAgICAgICAgICAgdmFyIGluZGV4QnVsbGV0ID0gaW5kZXgoY2xvc2VzdCh0aGlzLCBTRUNUSU9OX05BVl9TRUwgKyAnIGxpJykpO1xyXG4gICAgICAgICAgICBzY3JvbGxQYWdlKCQoU0VDVElPTl9TRUwpW2luZGV4QnVsbGV0XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1Njcm9sbHMgdGhlIHNsaWRlciB0byB0aGUgZ2l2ZW4gc2xpZGUgZGVzdGluYXRpb24gZm9yIHRoZSBnaXZlbiBzZWN0aW9uXHJcbiAgICAgICAgZnVuY3Rpb24gc2xpZGVCdWxsZXRIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcclxuXHJcbiAgICAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXHJcbiAgICAgICAgICAgIHZhciBzbGlkZXMgPSAkKFNMSURFU19XUkFQUEVSX1NFTCwgY2xvc2VzdCh0aGlzLCBTRUNUSU9OX1NFTCkpWzBdO1xyXG4gICAgICAgICAgICB2YXIgZGVzdGlueSA9ICQoU0xJREVfU0VMLCBzbGlkZXMpW2luZGV4KGNsb3Nlc3QodGhpcywgJ2xpJykpXTtcclxuXHJcbiAgICAgICAgICAgIGxhbmRzY2FwZVNjcm9sbChzbGlkZXMsIGRlc3RpbnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9NZW51IGl0ZW0gaGFuZGxlciB3aGVuIG5vdCB1c2luZyBhbmNob3JzIG9yIHVzaW5nIGxvY2tBbmNob3JzOnRydWVcclxuICAgICAgICBmdW5jdGlvbiBtZW51SXRlbXNIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICBpZigkKG9wdGlvbnMubWVudSlbMF0gJiYgKG9wdGlvbnMubG9ja0FuY2hvcnMgfHwgIW9wdGlvbnMuYW5jaG9ycy5sZW5ndGgpKXtcclxuICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cclxuICAgICAgICAgICAgICAgIG1vdmVUbyh0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1tZW51YW5jaG9yJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEtleWRvd24gZXZlbnRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG9ua2V5ZG93bihlKXtcclxuICAgICAgICAgICAgdmFyIHNoaWZ0UHJlc3NlZCA9IGUuc2hpZnRLZXk7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgdmFyIGlzTWVkaWFGb2N1c2VkID0gbWF0Y2hlcyhhY3RpdmVFbGVtZW50LCAndmlkZW8nKSB8fCBtYXRjaGVzKGFjdGl2ZUVsZW1lbnQsICdhdWRpbycpO1xyXG5cclxuICAgICAgICAgICAgLy9kbyBub3RoaW5nIGlmIHdlIGNhbiBub3Qgc2Nyb2xsIG9yIHdlIGFyZSBub3QgdXNpbmcgaG9yaXpvdG5hbCBrZXkgYXJyb3dzLlxyXG4gICAgICAgICAgICBpZighY2FuU2Nyb2xsICYmIFszNywzOV0uaW5kZXhPZihlLmtleUNvZGUpIDwgMCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAvL3VwXHJcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAgICAgY2FzZSAzMzpcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQuay51cCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVTZWN0aW9uVXAoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9kb3duXHJcbiAgICAgICAgICAgICAgICBjYXNlIDMyOiAvL3NwYWNlYmFyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNoaWZ0UHJlc3NlZCAmJiBpc1Njcm9sbEFsbG93ZWQuay51cCAmJiAhaXNNZWRpYUZvY3VzZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2VjdGlvblVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cclxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5rLmRvd24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzcGFjZSBiYXI/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUua2V5Q29kZSAhPT0gMzIgfHwgIWlzTWVkaWFGb2N1c2VkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVTZWN0aW9uRG93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vSG9tZVxyXG4gICAgICAgICAgICAgICAgY2FzZSAzNjpcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQuay51cCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVUbygxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9FbmRcclxuICAgICAgICAgICAgICAgIGNhc2UgMzU6XHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5rLmRvd24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlVG8oICQoU0VDVElPTl9TRUwpLmxlbmd0aCApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAvL2xlZnRcclxuICAgICAgICAgICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLmsubGVmdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZUxlZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9yaWdodFxyXG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQuay5yaWdodCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVTbGlkZVJpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBleGl0IHRoaXMgaGFuZGxlciBmb3Igb3RoZXIga2V5c1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVjdGluZyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBtb3VzZSBtb3ZlbWVudC5cclxuICAgICAgICAqIFVzZWQgb25seSBmb3IgdGhlIG1pZGRsZSBidXR0b24gb2YgdGhlIG1vdXNlLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgdmFyIG9sZFBhZ2VZID0gMDtcclxuICAgICAgICBmdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICBpZighb3B0aW9ucy5hdXRvU2Nyb2xsaW5nKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjYW5TY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgLy8gbW92aW5nIHVwXHJcbiAgICAgICAgICAgICAgICBpZiAoZS5wYWdlWSA8IG9sZFBhZ2VZICYmIGlzU2Nyb2xsQWxsb3dlZC5tLnVwKXtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlU2VjdGlvblVwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbW92aW5nIGRvd25cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZS5wYWdlWSA+IG9sZFBhZ2VZICYmIGlzU2Nyb2xsQWxsb3dlZC5tLmRvd24pe1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVTZWN0aW9uRG93bigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9sZFBhZ2VZID0gZS5wYWdlWTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyBob3Jpem9udGFsIHNsaWRlcnMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBsYW5kc2NhcGVTY3JvbGwoc2xpZGVzLCBkZXN0aW55LCBkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9IGNsb3Nlc3Qoc2xpZGVzLCBTRUNUSU9OX1NFTCk7XHJcbiAgICAgICAgICAgIHZhciB2ID0ge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzOiBzbGlkZXMsXHJcbiAgICAgICAgICAgICAgICBkZXN0aW55OiBkZXN0aW55LFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBkZXN0aW55UG9zOiB7bGVmdDogZGVzdGlueS5vZmZzZXRMZWZ0fSxcclxuICAgICAgICAgICAgICAgIHNsaWRlSW5kZXg6IGluZGV4KGRlc3RpbnkpLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbjogc2VjdGlvbixcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleDogaW5kZXgoc2VjdGlvbiwgU0VDVElPTl9TRUwpLFxyXG4gICAgICAgICAgICAgICAgYW5jaG9yTGluazogc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJyksXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNOYXY6ICQoU0xJREVTX05BVl9TRUwsIHNlY3Rpb24pWzBdLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVBbmNob3I6IGdldEFuY2hvcihkZXN0aW55KSxcclxuICAgICAgICAgICAgICAgIHByZXZTbGlkZTogJChTTElERV9BQ1RJVkVfU0VMLCBzZWN0aW9uKVswXSxcclxuICAgICAgICAgICAgICAgIHByZXZTbGlkZUluZGV4OiBpbmRleCgkKFNMSURFX0FDVElWRV9TRUwsIHNlY3Rpb24pWzBdKSxcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NhY2hpbmcgdGhlIHZhbHVlIG9mIGlzUmVzaXppbmcgYXQgdGhlIG1vbW1lbnQgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG4gICAgICAgICAgICAgICAgLy9iZWNhdXNlIGl0IHdpbGwgYmUgY2hlY2tlZCBsYXRlciBpbnNpZGUgYSBzZXRUaW1lb3V0IGFuZCB0aGUgdmFsdWUgbWlnaHQgY2hhbmdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbElzUmVzaXppbmc6IGlzUmVzaXppbmdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdi54TW92ZW1lbnQgPSBnZXRYbW92ZW1lbnQodi5wcmV2U2xpZGVJbmRleCwgdi5zbGlkZUluZGV4KTtcclxuICAgICAgICAgICAgdi5kaXJlY3Rpb24gPSB2LmRpcmVjdGlvbiA/IHYuZGlyZWN0aW9uIDogdi54TW92ZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAvL2ltcG9ydGFudCEhIE9ubHkgZG8gaXQgd2hlbiBub3QgcmVzaXppbmdcclxuICAgICAgICAgICAgaWYoIXYubG9jYWxJc1Jlc2l6aW5nKXtcclxuICAgICAgICAgICAgICAgIC8vcHJldmVudGluZyBmcm9tIHNjcm9sbGluZyB0byB0aGUgbmV4dC9wcmV2IHNlY3Rpb24gd2hlbiB1c2luZyBzY3JvbGxIb3Jpem9udGFsbHlcclxuICAgICAgICAgICAgICAgIGNhblNjcm9sbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLm9uU2xpZGVMZWF2ZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pZiB0aGUgc2l0ZSBpcyBub3QganVzdCByZXNpemluZyBhbmQgcmVhZGp1c3RpbmcgdGhlIHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgaWYoIXYubG9jYWxJc1Jlc2l6aW5nICYmIHYueE1vdmVtZW50IT09J25vbmUnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihpc0Z1bmN0aW9uKCBvcHRpb25zLm9uU2xpZGVMZWF2ZSApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGZpcmVDYWxsYmFjaygnb25TbGlkZUxlYXZlJywgdikgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFkZENsYXNzKGRlc3RpbnksIEFDVElWRSk7XHJcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNpYmxpbmdzKGRlc3RpbnkpLCBBQ1RJVkUpO1xyXG5cclxuICAgICAgICAgICAgaWYoIXYubG9jYWxJc1Jlc2l6aW5nKXtcclxuICAgICAgICAgICAgICAgIHN0b3BNZWRpYSh2LnByZXZTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICBsYXp5TG9hZChkZXN0aW55KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMubG9vcEhvcml6b250YWwgJiYgb3B0aW9ucy5jb250cm9sQXJyb3dzKXtcclxuICAgICAgICAgICAgICAgIC8vaGlkZGluZyBpdCBmb3IgdGhlIGZpc3Qgc2xpZGUsIHNob3dpbmcgZm9yIHRoZSByZXN0XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUoJChTTElERVNfQVJST1dfUFJFVl9TRUwsIHNlY3Rpb24pLCB2LnNsaWRlSW5kZXghPT0wKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2hpZGRpbmcgaXQgZm9yIHRoZSBsYXN0IHNsaWRlLCBzaG93aW5nIGZvciB0aGUgcmVzdFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlKCQoU0xJREVTX0FSUk9XX05FWFRfU0VMLCBzZWN0aW9uKSwgbmV4dChkZXN0aW55KSAhPSBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9vbmx5IGNoYW5naW5nIHRoZSBVUkwgaWYgdGhlIHNsaWRlcyBhcmUgaW4gdGhlIGN1cnJlbnQgc2VjdGlvbiAobm90IGZvciByZXNpemUgcmUtYWRqdXN0aW5nKVxyXG4gICAgICAgICAgICBpZihoYXNDbGFzcyhzZWN0aW9uLCBBQ1RJVkUpICYmICF2LmxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSh2LnNsaWRlSW5kZXgsIHYuc2xpZGVBbmNob3IsIHYuYW5jaG9yTGluaywgdi5zZWN0aW9uSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwZXJmb3JtSG9yaXpvbnRhbE1vdmUoc2xpZGVzLCB2LCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhZnRlclNsaWRlTG9hZHModil7XHJcbiAgICAgICAgICAgIGFjdGl2ZVNsaWRlc05hdmlnYXRpb24odi5zbGlkZXNOYXYsIHYuc2xpZGVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAvL2lmIHRoZSBzaXRlIGlzIG5vdCBqdXN0IHJlc2l6aW5nIGFuZCByZWFkanVzdGluZyB0aGUgc2xpZGVzXHJcbiAgICAgICAgICAgIGlmKCF2LmxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICBpZihpc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyU2xpZGVMb2FkICkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmVDYWxsYmFjaygnYWZ0ZXJTbGlkZUxvYWQnLCB2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL25lZWRzIHRvIGJlIGluc2lkZSB0aGUgY29uZGl0aW9uIHRvIHByZXZlbnQgcHJvYmxlbXMgd2l0aCBjb250aW51b3VzVmVydGljYWwgYW5kIHNjcm9sbEhvcml6b250YWxseVxyXG4gICAgICAgICAgICAgICAgLy9hbmQgdG8gcHJldmVudCBkb3VibGUgc2Nyb2xsIHJpZ2h0IGFmdGVyIGEgd2luZG93cyByZXNpemVcclxuICAgICAgICAgICAgICAgIGNhblNjcm9sbCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgcGxheU1lZGlhKHYuZGVzdGlueSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbGV0dGluZyB0aGVtIHNsaWRlIGFnYWluXHJcbiAgICAgICAgICAgIHNsaWRlTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFBlcmZvcm1zIHRoZSBob3Jpem9udGFsIG1vdmVtZW50LiAoQ1NTMyBvciBqUXVlcnkpXHJcbiAgICAgICAgKlxyXG4gICAgICAgICogQHBhcmFtIGZpcmVDYWxsYmFjayB7Qm9vbH0gLSBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGZpcmUgdGhlIGNhbGxiYWNrXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBwZXJmb3JtSG9yaXpvbnRhbE1vdmUoc2xpZGVzLCB2LCBmaXJlQ2FsbGJhY2spe1xyXG4gICAgICAgICAgICB2YXIgZGVzdGlueVBvcyA9IHYuZGVzdGlueVBvcztcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuY3NzMyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlM2QgPSAndHJhbnNsYXRlM2QoLScgKyBNYXRoLnJvdW5kKGRlc3RpbnlQb3MubGVmdCkgKyAncHgsIDBweCwgMHB4KSc7XHJcblxyXG4gICAgICAgICAgICAgICAgRlAudGVzdC50cmFuc2xhdGUzZEhbdi5zZWN0aW9uSW5kZXhdID0gdHJhbnNsYXRlM2Q7XHJcbiAgICAgICAgICAgICAgICBjc3MoYWRkQW5pbWF0aW9uKCQoU0xJREVTX0NPTlRBSU5FUl9TRUwsIHNsaWRlcykpLCBnZXRUcmFuc2Zvcm1zKHRyYW5zbGF0ZTNkKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJTbGlkZUxvYWRzSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZmlyZUNhbGxiYWNrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTbGlkZUxvYWRzKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIEZQLnRlc3QubGVmdFt2LnNlY3Rpb25JbmRleF0gPSBNYXRoLnJvdW5kKGRlc3RpbnlQb3MubGVmdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG8oc2xpZGVzLCBNYXRoLnJvdW5kKGRlc3RpbnlQb3MubGVmdCksIG9wdGlvbnMuc2Nyb2xsaW5nU3BlZWQsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZmlyZUNhbGxiYWNrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTbGlkZUxvYWRzKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgdGhlIHN0YXRlIGZvciB0aGUgaG9yaXpvbnRhbCBidWxsZXQgbmF2aWdhdGlvbnMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhY3RpdmVTbGlkZXNOYXZpZ2F0aW9uKHNsaWRlc05hdiwgc2xpZGVJbmRleCl7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2xpZGVzTmF2aWdhdGlvbiAmJiBzbGlkZXNOYXYgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcygkKEFDVElWRV9TRUwsIHNsaWRlc05hdiksIEFDVElWRSk7XHJcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyggJCgnYScsICQoJ2xpJywgc2xpZGVzTmF2KVtzbGlkZUluZGV4XSApLCBBQ1RJVkUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcHJldmlvdXNIZWlnaHQgPSB3aW5kb3dzSGVpZ2h0O1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogUmVzaXplIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgICAgKi8gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIoKXtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZUlkKTtcclxuXHJcbiAgICAgICAgICAgIC8vaW4gb3JkZXIgdG8gY2FsbCB0aGUgZnVuY3Rpb25zIG9ubHkgd2hlbiB0aGUgcmVzaXplIGlzIGZpbmlzaGVkXHJcbiAgICAgICAgICAgIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80Mjk4NjEyL2pxdWVyeS1ob3ctdG8tY2FsbC1yZXNpemUtZXZlbnQtb25seS1vbmNlLWl0cy1maW5pc2hlZC1yZXNpemluZyAgICBcclxuICAgICAgICAgICAgcmVzaXplSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pc3N1ZSAjMzMzNiBcclxuICAgICAgICAgICAgICAgIC8vKHNvbWUgYXBwcyBvciBicm93c2VycywgbGlrZSBDaHJvbWUvRmlyZWZveCBmb3IgTW9iaWxlIHRha2UgdGltZSB0byByZXBvcnQgdGhlIHJlYWwgaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgLy9zbyB3ZSBjaGVjayBpdCAzIHRpbWVzIHdpdGggaW50ZXJ2YWxzIGluIHRoYXQgY2FzZVxyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaTwgNDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICByZXNpemVIYW5kbGVySWQgPSBzZXRUaW1lb3V0KHJlc2l6ZUFjdGlvbnMsIDIwMCAqIGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBXaGVuIHJlc2l6aW5nIHRoZSBzaXRlLCB3ZSBhZGp1c3QgdGhlIGhlaWdodHMgb2YgdGhlIHNlY3Rpb25zLCBzbGltU2Nyb2xsLi4uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZXNpemVBY3Rpb25zKCl7XHJcblxyXG4gICAgICAgICAgICAvL2NoZWNraW5nIGlmIGl0IG5lZWRzIHRvIGdldCByZXNwb25zaXZlXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlYnVpbGQgaW1tZWRpYXRlbHkgb24gdG91Y2ggZGV2aWNlc1xyXG4gICAgICAgICAgICBpZiAoaXNUb3VjaERldmljZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaWYgdGhlIGtleWJvYXJkIGlzIE5PVCB2aXNpYmxlXHJcbiAgICAgICAgICAgICAgICBpZiAoIW1hdGNoZXMoYWN0aXZlRWxlbWVudCwgJ3RleHRhcmVhJykgJiYgIW1hdGNoZXMoYWN0aXZlRWxlbWVudCwgJ2lucHV0JykgJiYgIW1hdGNoZXMoYWN0aXZlRWxlbWVudCwgJ3NlbGVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRIZWlnaHQgPSBnZXRXaW5kb3dIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9tYWtpbmcgc3VyZSB0aGUgY2hhbmdlIGluIHRoZSB2aWV3cG9ydCBzaXplIGlzIGVub3VnaCB0byBmb3JjZSBhIHJlYnVpbGQuICgyMCAlIG9mIHRoZSB3aW5kb3cgdG8gYXZvaWQgcHJvYmxlbXMgd2hlbiBoaWRkaW5nIHNjcm9sbCBiYXJzKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBNYXRoLmFicyhjdXJyZW50SGVpZ2h0IC0gcHJldmlvdXNIZWlnaHQpID4gKDIwICogTWF0aC5tYXgocHJldmlvdXNIZWlnaHQsIGN1cnJlbnRIZWlnaHQpIC8gMTAwKSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZUJ1aWxkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0hlaWdodCA9IGN1cnJlbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBhZGp1c3RUb05ld1ZpZXdwb3J0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQ2hlY2tzIGlmIHRoZSBzaXRlIG5lZWRzIHRvIGdldCByZXNwb25zaXZlIGFuZCBkaXNhYmxlcyBhdXRvU2Nyb2xsaW5nIGlmIHNvLlxyXG4gICAgICAgICogQSBjbGFzcyBgZnAtcmVzcG9uc2l2ZWAgaXMgYWRkZWQgdG8gdGhlIHBsdWdpbidzIGNvbnRhaW5lciBpbiBjYXNlIHRoZSB1c2VyIHdhbnRzIHRvIHVzZSBpdCBmb3IgaGlzIG93biByZXNwb25zaXZlIENTUy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlc3BvbnNpdmUoKXtcclxuICAgICAgICAgICAgdmFyIHdpZHRoTGltaXQgPSBvcHRpb25zLnJlc3BvbnNpdmUgfHwgb3B0aW9ucy5yZXNwb25zaXZlV2lkdGg7IC8vYmFja3dhcmRzIGNvbXBhdGlibGl0eVxyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0TGltaXQgPSBvcHRpb25zLnJlc3BvbnNpdmVIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAvL29ubHkgY2FsY3VsYXRpbmcgd2hhdCB3ZSBuZWVkLiBSZW1lbWJlciBpdHMgY2FsbGVkIG9uIHRoZSByZXNpemUgZXZlbnQuXHJcbiAgICAgICAgICAgIHZhciBpc0JyZWFraW5nUG9pbnRXaWR0aCA9IHdpZHRoTGltaXQgJiYgd2luZG93LmlubmVyV2lkdGggPCB3aWR0aExpbWl0O1xyXG4gICAgICAgICAgICB2YXIgaXNCcmVha2luZ1BvaW50SGVpZ2h0ID0gaGVpZ2h0TGltaXQgJiYgd2luZG93LmlubmVySGVpZ2h0IDwgaGVpZ2h0TGltaXQ7XHJcblxyXG4gICAgICAgICAgICBpZih3aWR0aExpbWl0ICYmIGhlaWdodExpbWl0KXtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNpdmUoaXNCcmVha2luZ1BvaW50V2lkdGggfHwgaXNCcmVha2luZ1BvaW50SGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHdpZHRoTGltaXQpe1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZShpc0JyZWFraW5nUG9pbnRXaWR0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihoZWlnaHRMaW1pdCl7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zaXZlKGlzQnJlYWtpbmdQb2ludEhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyB0cmFuc2l0aW9uIGFuaW1hdGlvbnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRBbmltYXRpb24oZWxlbWVudCl7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2l0aW9uID0gJ2FsbCAnICsgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCArICdtcyAnICsgb3B0aW9ucy5lYXNpbmdjc3MzO1xyXG5cclxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgTk9fVFJBTlNJVElPTik7XHJcbiAgICAgICAgICAgIHJldHVybiBjc3MoZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNpdGlvbic6IHRyYW5zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbic6IHRyYW5zaXRpb25cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJlbW92ZSB0cmFuc2l0aW9uIGFuaW1hdGlvbnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVBbmltYXRpb24oZWxlbWVudCl7XHJcbiAgICAgICAgICAgIHJldHVybiBhZGRDbGFzcyhlbGVtZW50LCBOT19UUkFOU0lUSU9OKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWN0aXZhdGluZyB0aGUgdmVydGljYWwgbmF2aWdhdGlvbiBidWxsZXRzIGFjY29yZGluZyB0byB0aGUgZ2l2ZW4gc2xpZGUgbmFtZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlTmF2RG90cyhuYW1lLCBzZWN0aW9uSW5kZXgpe1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLm5hdmlnYXRpb24gJiYgJChTRUNUSU9OX05BVl9TRUwpWzBdICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKCQoQUNUSVZFX1NFTCwgJChTRUNUSU9OX05BVl9TRUwpWzBdKSwgQUNUSVZFKTtcclxuICAgICAgICAgICAgICAgIGlmKG5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKCAkKCdhW2hyZWY9XCIjJyArIG5hbWUgKyAnXCJdJywgJChTRUNUSU9OX05BVl9TRUwpWzBdKSwgQUNUSVZFKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKCQoJ2EnLCAkKCdsaScsICQoU0VDVElPTl9OQVZfU0VMKVswXSlbc2VjdGlvbkluZGV4XSksIEFDVElWRSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWN0aXZhdGluZyB0aGUgd2Vic2l0ZSBtYWluIG1lbnUgZWxlbWVudHMgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBzbGlkZSBuYW1lLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGVNZW51RWxlbWVudChuYW1lKXtcclxuICAgICAgICAgICAgJChvcHRpb25zLm1lbnUpLmZvckVhY2goZnVuY3Rpb24obWVudSkge1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5tZW51ICYmIG1lbnUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoJChBQ1RJVkVfU0VMLCBtZW51KSwgQUNUSVZFKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcygkKCdbZGF0YS1tZW51YW5jaG9yPVwiJytuYW1lKydcIl0nLCBtZW51KSwgQUNUSVZFKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgdG8gYWN0aXZlIHRoZSBjdXJyZW50IG1lbnUgYW5kIHZlcnRpY2FsIG5hdiBpdGVtcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlTWVudUFuZE5hdihhbmNob3IsIGluZGV4KXtcclxuICAgICAgICAgICAgYWN0aXZhdGVNZW51RWxlbWVudChhbmNob3IpO1xyXG4gICAgICAgICAgICBhY3RpdmF0ZU5hdkRvdHMoYW5jaG9yLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJldHVucyBgdXBgIG9yIGBkb3duYCBkZXBlbmRpbmcgb24gdGhlIHNjcm9sbGluZyBtb3ZlbWVudCB0byByZWFjaCBpdHMgZGVzdGluYXRpb25cclxuICAgICAgICAqIGZyb20gdGhlIGN1cnJlbnQgc2VjdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFltb3ZlbWVudChkZXN0aW55KXtcclxuICAgICAgICAgICAgdmFyIGZyb21JbmRleCA9IGluZGV4KCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSwgU0VDVElPTl9TRUwpO1xyXG4gICAgICAgICAgICB2YXIgdG9JbmRleCA9IGluZGV4KGRlc3RpbnksIFNFQ1RJT05fU0VMKTtcclxuICAgICAgICAgICAgaWYoIGZyb21JbmRleCA9PSB0b0luZGV4KXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZnJvbUluZGV4ID4gdG9JbmRleCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBSZXR1bnMgYHJpZ2h0YCBvciBgbGVmdGAgZGVwZW5kaW5nIG9uIHRoZSBzY3JvbGxpbmcgbW92ZW1lbnQgdG8gcmVhY2ggaXRzIGRlc3RpbmF0aW9uXHJcbiAgICAgICAgKiBmcm9tIHRoZSBjdXJyZW50IHNsaWRlLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0WG1vdmVtZW50KGZyb21JbmRleCwgdG9JbmRleCl7XHJcbiAgICAgICAgICAgIGlmKCBmcm9tSW5kZXggPT0gdG9JbmRleCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGZyb21JbmRleCA+IHRvSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdsZWZ0JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJ3JpZ2h0JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFRhYmxlQ2xhc3MoZWxlbWVudCl7XHJcbiAgICAgICAgICAgIC8vSW4gY2FzZSB3ZSBhcmUgc3R5bGluZyBmb3IgdGhlIDJuZCB0aW1lIGFzIGluIHdpdGggcmVwb25zaXZlU2xpZGVzXHJcbiAgICAgICAgICAgIGlmKCFoYXNDbGFzcyhlbGVtZW50LCBUQUJMRSkpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gVEFCTEVfQ0VMTDtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gZ2V0VGFibGVIZWlnaHQoZWxlbWVudCkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgICAgIGFkZENsYXNzKGVsZW1lbnQsIFRBQkxFKTtcclxuICAgICAgICAgICAgICAgIHdyYXBJbm5lcihlbGVtZW50LCB3cmFwcGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VGFibGVIZWlnaHQoZWxlbWVudCl7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uSGVpZ2h0ID0gd2luZG93c0hlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMucGFkZGluZ1RvcCB8fCBvcHRpb25zLnBhZGRpbmdCb3R0b20pe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYoIWhhc0NsYXNzKHNlY3Rpb24sIFNFQ1RJT04pKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uID0gY2xvc2VzdChlbGVtZW50LCBTRUNUSU9OX1NFTCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHBhZGRpbmdzID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uKVsncGFkZGluZy10b3AnXSkgKyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24pWydwYWRkaW5nLWJvdHRvbSddKTtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25IZWlnaHQgPSAod2luZG93c0hlaWdodCAtIHBhZGRpbmdzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb25IZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgYSBjc3MzIHRyYW5zZm9ybSBwcm9wZXJ0eSB0byB0aGUgY29udGFpbmVyIGNsYXNzIHdpdGggb3Igd2l0aG91dCBhbmltYXRpb24gZGVwZW5kaW5nIG9uIHRoZSBhbmltYXRlZCBwYXJhbS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHRyYW5zZm9ybUNvbnRhaW5lcih0cmFuc2xhdGUzZCwgYW5pbWF0ZWQpe1xyXG4gICAgICAgICAgICBpZihhbmltYXRlZCl7XHJcbiAgICAgICAgICAgICAgICBhZGRBbmltYXRpb24oY29udGFpbmVyKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVBbmltYXRpb24oY29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3NzKGNvbnRhaW5lciwgZ2V0VHJhbnNmb3Jtcyh0cmFuc2xhdGUzZCkpO1xyXG4gICAgICAgICAgICBGUC50ZXN0LnRyYW5zbGF0ZTNkID0gdHJhbnNsYXRlM2Q7XHJcblxyXG4gICAgICAgICAgICAvL3N5bmNyb25vdXNseSByZW1vdmluZyB0aGUgY2xhc3MgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBoYXMgYmVlbiBhcHBsaWVkLlxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhjb250YWluZXIsIE5PX1RSQU5TSVRJT04pO1xyXG4gICAgICAgICAgICB9LDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyBhIHNlY3Rpb24gYnkgaXRzIGFuY2hvciAvIGluZGV4XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRTZWN0aW9uQnlBbmNob3Ioc2VjdGlvbkFuY2hvcil7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gJChTRUNUSU9OX1NFTCArICdbZGF0YS1hbmNob3I9XCInK3NlY3Rpb25BbmNob3IrJ1wiXScsIGNvbnRhaW5lcilbMF07XHJcbiAgICAgICAgICAgIGlmKCFzZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgIHZhciBzZWN0aW9uSW5kZXggPSB0eXBlb2Ygc2VjdGlvbkFuY2hvciAhPT0gJ3VuZGVmaW5lZCcgPyBzZWN0aW9uQW5jaG9yIC0xIDogMDtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24gPSAkKFNFQ1RJT05fU0VMKVtzZWN0aW9uSW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyBhIHNsaWRlIGluc2lkZSBhIGdpdmVuIHNlY3Rpb24gYnkgaXRzIGFuY2hvciAvIGluZGV4XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRTbGlkZUJ5QW5jaG9yKHNsaWRlQW5jaG9yLCBzZWN0aW9uKXtcclxuICAgICAgICAgICAgdmFyIHNsaWRlID0gJChTTElERV9TRUwgKyAnW2RhdGEtYW5jaG9yPVwiJytzbGlkZUFuY2hvcisnXCJdJywgc2VjdGlvbilbMF07XHJcbiAgICAgICAgICAgIGlmKHNsaWRlID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVBbmNob3IgPSB0eXBlb2Ygc2xpZGVBbmNob3IgIT09ICd1bmRlZmluZWQnID8gc2xpZGVBbmNob3IgOiAwO1xyXG4gICAgICAgICAgICAgICAgc2xpZGUgPSAkKFNMSURFX1NFTCwgc2VjdGlvbilbc2xpZGVBbmNob3JdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2xpZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgdG8gdGhlIGdpdmVuIHNlY3Rpb24gYW5kIHNsaWRlIGFuY2hvcnNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbFBhZ2VBbmRTbGlkZShzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcil7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gZ2V0U2VjdGlvbkJ5QW5jaG9yKHNlY3Rpb25BbmNob3IpO1xyXG5cclxuICAgICAgICAgICAgLy9kbyBub3RoaW5nIGlmIHRoZXJlJ3Mgbm8gc2VjdGlvbiB3aXRoIHRoZSBnaXZlbiBhbmNob3IgbmFtZVxyXG4gICAgICAgICAgICBpZihzZWN0aW9uID09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBzbGlkZSA9IGdldFNsaWRlQnlBbmNob3Ioc2xpZGVBbmNob3IsIHNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgLy93ZSBuZWVkIHRvIHNjcm9sbCB0byB0aGUgc2VjdGlvbiBhbmQgdGhlbiB0byB0aGUgc2xpZGVcclxuICAgICAgICAgICAgaWYgKGdldEFuY2hvcihzZWN0aW9uKSAhPT0gbGFzdFNjcm9sbGVkRGVzdGlueSAmJiAhaGFzQ2xhc3Moc2VjdGlvbiwgQUNUSVZFKSl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQYWdlKHNlY3Rpb24sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsU2xpZGVyKHNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vaWYgd2Ugd2VyZSBhbHJlYWR5IGluIHRoZSBzZWN0aW9uXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxTbGlkZXIoc2xpZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgdGhlIHNsaWRlciB0byB0aGUgZ2l2ZW4gc2xpZGUgZGVzdGluYXRpb24gZm9yIHRoZSBnaXZlbiBzZWN0aW9uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxTbGlkZXIoc2xpZGUpe1xyXG4gICAgICAgICAgICBpZihzbGlkZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGxhbmRzY2FwZVNjcm9sbChjbG9zZXN0KHNsaWRlLCBTTElERVNfV1JBUFBFUl9TRUwpLCBzbGlkZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQ3JlYXRlcyBhIGxhbmRzY2FwZSBuYXZpZ2F0aW9uIGJhciB3aXRoIGRvdHMgZm9yIGhvcml6b250YWwgc2xpZGVycy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFNsaWRlc05hdmlnYXRpb24oc2VjdGlvbiwgbnVtU2xpZGVzKXtcclxuICAgICAgICAgICAgYXBwZW5kVG8oY3JlYXRlRWxlbWVudEZyb21IVE1MKCc8ZGl2IGNsYXNzPVwiJyArIFNMSURFU19OQVYgKyAnXCI+PHVsPjwvdWw+PC9kaXY+JyksIHNlY3Rpb24pO1xyXG4gICAgICAgICAgICB2YXIgbmF2ID0gJChTTElERVNfTkFWX1NFTCwgc2VjdGlvbilbMF07XHJcblxyXG4gICAgICAgICAgICAvL3RvcCBvciBib3R0b21cclxuICAgICAgICAgICAgYWRkQ2xhc3MobmF2LCAnZnAtJyArIG9wdGlvbnMuc2xpZGVzTmF2UG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8IG51bVNsaWRlczsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGFwcGVuZFRvKGNyZWF0ZUVsZW1lbnRGcm9tSFRNTCgnPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJmcC1zci1vbmx5XCI+JysgZ2V0QnVsbGV0TGlua05hbWUoaSwgJ1NsaWRlJykgKyc8L3NwYW4+PHNwYW4+PC9zcGFuPjwvYT48L2xpPicpLCAkKCd1bCcsIG5hdilbMF0gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9jZW50ZXJpbmcgaXRcclxuICAgICAgICAgICAgY3NzKG5hdiwgeydtYXJnaW4tbGVmdCc6ICctJyArIChuYXYuaW5uZXJXaWR0aC8yKSArICdweCd9KTtcclxuXHJcbiAgICAgICAgICAgIGFkZENsYXNzKCQoJ2EnLCAkKCdsaScsIG5hdilbMF0gKSwgQUNUSVZFKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNldHMgdGhlIHN0YXRlIG9mIHRoZSB3ZWJzaXRlIGRlcGVuZGluZyBvbiB0aGUgYWN0aXZlIHNlY3Rpb24vc2xpZGUuXHJcbiAgICAgICAgKiBJdCBjaGFuZ2VzIHRoZSBVUkwgaGFzaCB3aGVuIG5lZWRlZCBhbmQgdXBkYXRlcyB0aGUgYm9keSBjbGFzcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFN0YXRlKHNsaWRlSW5kZXgsIHNsaWRlQW5jaG9yLCBhbmNob3JMaW5rLCBzZWN0aW9uSW5kZXgpe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbkhhc2ggPSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuYW5jaG9ycy5sZW5ndGggJiYgIW9wdGlvbnMubG9ja0FuY2hvcnMpe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaXNuJ3QgaXQgdGhlIGZpcnN0IHNsaWRlP1xyXG4gICAgICAgICAgICAgICAgaWYoc2xpZGVJbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYW5jaG9yTGluayAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkhhc2ggPSBhbmNob3JMaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zbGlkZSB3aXRob3V0IGFuY2hvciBsaW5rPyBXZSB0YWtlIHRoZSBpbmRleCBpbnN0ZWFkLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNsaWRlQW5jaG9yID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZUFuY2hvciA9IHNsaWRlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsZWRTbGlkZSA9IHNsaWRlQW5jaG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVybEhhc2goc2VjdGlvbkhhc2ggKyAnLycgKyBzbGlkZUFuY2hvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9maXJzdCBzbGlkZSB3b24ndCBoYXZlIHNsaWRlIGFuY2hvciwganVzdCB0aGUgc2VjdGlvbiBvbmVcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHNsaWRlSW5kZXggIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNjcm9sbGVkU2xpZGUgPSBzbGlkZUFuY2hvcjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVcmxIYXNoKGFuY2hvckxpbmspO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vc2VjdGlvbiB3aXRob3V0IHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVcmxIYXNoKGFuY2hvckxpbmspO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXRCb2R5Q2xhc3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgVVJMIGhhc2guXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRVcmxIYXNoKHVybCl7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMucmVjb3JkSGlzdG9yeSl7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gdXJsO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vTW9iaWxlIENocm9tZSBkb2Vzbid0IHdvcmsgdGhlIG5vcm1hbCB3YXksIHNvLi4uIGxldHMgdXNlIEhUTUw1IGZvciBwaG9uZXMgOilcclxuICAgICAgICAgICAgICAgIGlmKGlzVG91Y2hEZXZpY2UgfHwgaXNUb3VjaCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnIycgKyB1cmwpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJhc2VVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCBiYXNlVXJsICsgJyMnICsgdXJsICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgYW5jaG9yIGZvciB0aGUgZ2l2ZW4gc2xpZGUgLyBzZWN0aW9uLiBJdHMgaW5kZXggd2lsbCBiZSB1c2VkIGlmIHRoZXJlJ3Mgbm9uZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEFuY2hvcihlbGVtZW50KXtcclxuICAgICAgICAgICAgaWYoIWVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGFuY2hvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpO1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudEluZGV4ID0gaW5kZXgoZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAvL1NsaWRlIHdpdGhvdXQgYW5jaG9yIGxpbms/IFdlIHRha2UgdGhlIGluZGV4IGluc3RlYWQuXHJcbiAgICAgICAgICAgIGlmKGFuY2hvciA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGFuY2hvciA9IGVsZW1lbnRJbmRleDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFuY2hvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyBhIGNsYXNzIGZvciB0aGUgYm9keSBvZiB0aGUgcGFnZSBkZXBlbmRpbmcgb24gdGhlIGFjdGl2ZSBzZWN0aW9uIC8gc2xpZGVcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldEJvZHlDbGFzcygpe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXTtcclxuICAgICAgICAgICAgdmFyIHNsaWRlID0gJChTTElERV9BQ1RJVkVfU0VMLCBzZWN0aW9uKVswXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uQW5jaG9yID0gZ2V0QW5jaG9yKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVBbmNob3IgPSBnZXRBbmNob3Ioc2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRleHQgPSBTdHJpbmcoc2VjdGlvbkFuY2hvcik7XHJcblxyXG4gICAgICAgICAgICBpZihzbGlkZSl7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dCArICctJyArIHNsaWRlQW5jaG9yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NoYW5naW5nIHNsYXNoIGZvciBkYXNoIHRvIG1ha2UgaXQgYSB2YWxpZCBDU1Mgc3R5bGVcclxuICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgnLycsICctJykucmVwbGFjZSgnIycsJycpO1xyXG5cclxuICAgICAgICAgICAgLy9yZW1vdmluZyBwcmV2aW91cyBhbmNob3IgY2xhc3Nlc1xyXG4gICAgICAgICAgICB2YXIgY2xhc3NSZSA9IG5ldyBSZWdFeHAoJ1xcXFxiXFxcXHM/JyArIFZJRVdJTkdfUFJFRklYICsgJy1bXlxcXFxzXStcXFxcYicsIFwiZ1wiKTtcclxuICAgICAgICAgICAgJGJvZHkuY2xhc3NOYW1lID0gJGJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoY2xhc3NSZSwgJycpO1xyXG5cclxuICAgICAgICAgICAgLy9hZGRpbmcgdGhlIGN1cnJlbnQgYW5jaG9yXHJcbiAgICAgICAgICAgIGFkZENsYXNzKCRib2R5LCBWSUVXSU5HX1BSRUZJWCArICctJyArIHRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBDaGVja3MgZm9yIHRyYW5zbGF0ZTNkIHN1cHBvcnRcclxuICAgICAgICAqIEByZXR1cm4gYm9vbGVhblxyXG4gICAgICAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NjYxNjcxL2RldGVjdGluZy10cmFuc2Zvcm0tdHJhbnNsYXRlM2Qtc3VwcG9ydFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc3VwcG9ydDNkKCkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXHJcbiAgICAgICAgICAgICAgICBoYXMzZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dlYmtpdFRyYW5zZm9ybSc6Jy13ZWJraXQtdHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgICAgICAgICAnT1RyYW5zZm9ybSc6Jy1vLXRyYW5zZm9ybScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ21zVHJhbnNmb3JtJzonLW1zLXRyYW5zZm9ybScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01velRyYW5zZm9ybSc6Jy1tb3otdHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzondHJhbnNmb3JtJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vcHJldmVudGluZyB0aGUgc3R5bGUgcDplbXB0eXtkaXNwbGF5OiBub25lO30gZnJvbSByZXR1cm5pbmcgdGhlIHdyb25nIHJlc3VsdFxyXG4gICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBpdCB0byB0aGUgYm9keSB0byBnZXQgdGhlIGNvbXB1dGVkIHN0eWxlLlxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShlbCwgbnVsbCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciB0IGluIHRyYW5zZm9ybXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGVbdF0gPSAndHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpJztcclxuICAgICAgICAgICAgICAgICAgICBoYXMzZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKHRyYW5zZm9ybXNbdF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoaGFzM2QgIT09IHVuZGVmaW5lZCAmJiBoYXMzZC5sZW5ndGggPiAwICYmIGhhczNkICE9PSAnbm9uZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBSZW1vdmVzIHRoZSBhdXRvIHNjcm9sbGluZyBhY3Rpb24gZmlyZWQgYnkgdGhlIG1vdXNlIHdoZWVsIGFuZCB0cmFja3BhZC5cclxuICAgICAgICAqIEFmdGVyIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgbW91c2V3aGVlbCBhbmQgdHJhY2twYWQgbW92ZW1lbnRzIHdvbid0IHNjcm9sbCB0aHJvdWdoIHNlY3Rpb25zLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTW91c2VXaGVlbEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBNb3VzZVdoZWVsSGFuZGxlciwgZmFsc2UpOyAvL0lFOSwgQ2hyb21lLCBTYWZhcmksIE9wZXJcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgTW91c2VXaGVlbEhhbmRsZXIsIGZhbHNlKTsgLy9GaXJlZm94XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdNb3pNb3VzZVBpeGVsU2Nyb2xsJywgTW91c2VXaGVlbEhhbmRsZXIsIGZhbHNlKTsgLy9vbGQgRmlyZWZveFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGV0YWNoRXZlbnQoJ29ubW91c2V3aGVlbCcsIE1vdXNlV2hlZWxIYW5kbGVyKTsgLy9JRSA2LzcvOFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgdGhlIGF1dG8gc2Nyb2xsaW5nIGFjdGlvbiBmb3IgdGhlIG1vdXNlIHdoZWVsIGFuZCB0cmFja3BhZC5cclxuICAgICAgICAqIEFmdGVyIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgbW91c2V3aGVlbCBhbmQgdHJhY2twYWQgbW92ZW1lbnRzIHdpbGwgc2Nyb2xsIHRocm91Z2ggc2VjdGlvbnNcclxuICAgICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy93aGVlbFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkTW91c2VXaGVlbEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgdmFyIHByZWZpeCA9ICcnO1xyXG4gICAgICAgICAgICB2YXIgX2FkZEV2ZW50TGlzdGVuZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpe1xyXG4gICAgICAgICAgICAgICAgX2FkZEV2ZW50TGlzdGVuZXIgPSBcImFkZEV2ZW50TGlzdGVuZXJcIjtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lciA9IFwiYXR0YWNoRXZlbnRcIjtcclxuICAgICAgICAgICAgICAgIHByZWZpeCA9ICdvbic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVjdCBhdmFpbGFibGUgd2hlZWwgZXZlbnRcclxuICAgICAgICAgICAgdmFyIHN1cHBvcnQgPSAnb253aGVlbCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgPyAnd2hlZWwnIDogLy8gTW9kZXJuIGJyb3dzZXJzIHN1cHBvcnQgXCJ3aGVlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNld2hlZWwgIT09IHVuZGVmaW5lZCA/ICdtb3VzZXdoZWVsJyA6IC8vIFdlYmtpdCBhbmQgSUUgc3VwcG9ydCBhdCBsZWFzdCBcIm1vdXNld2hlZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgJ0RPTU1vdXNlU2Nyb2xsJzsgLy8gbGV0J3MgYXNzdW1lIHRoYXQgcmVtYWluaW5nIGJyb3dzZXJzIGFyZSBvbGRlciBGaXJlZm94XHJcbiAgICAgICAgICAgIHZhciBwYXNzaXZlRXZlbnQgPSBnX3N1cHBvcnRzUGFzc2l2ZSA/IHtwYXNzaXZlOiBmYWxzZSB9OiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmKHN1cHBvcnQgPT0gJ0RPTU1vdXNlU2Nyb2xsJyl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFsgX2FkZEV2ZW50TGlzdGVuZXIgXShwcmVmaXggKyAnTW96TW91c2VQaXhlbFNjcm9sbCcsIE1vdXNlV2hlZWxIYW5kbGVyLCBwYXNzaXZlRXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2hhbmRsZSBNb3pNb3VzZVBpeGVsU2Nyb2xsIGluIG9sZGVyIEZpcmVmb3hcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50WyBfYWRkRXZlbnRMaXN0ZW5lciBdKHByZWZpeCArIHN1cHBvcnQsIE1vdXNlV2hlZWxIYW5kbGVyLCBwYXNzaXZlRXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEJpbmRpbmcgdGhlIG1vdXNlbW92ZSB3aGVuIHRoZSBtb3VzZSdzIG1pZGRsZSBidXR0b24gaXMgcHJlc3NlZFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkTWlkZGxlV2hlZWxIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25IYW5kbGVyKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFVuYmluZGluZyB0aGUgbW91c2Vtb3ZlIHdoZW4gdGhlIG1vdXNlJ3MgbWlkZGxlIGJ1dHRvbiBpcyByZWxlYXNlZFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTWlkZGxlV2hlZWxIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd25IYW5kbGVyKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgdGhlIHBvc3NpYmlsaXR5IHRvIGF1dG8gc2Nyb2xsIHRocm91Z2ggc2VjdGlvbnMgb24gdG91Y2ggZGV2aWNlcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFRvdWNoSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBpZihpc1RvdWNoRGV2aWNlIHx8IGlzVG91Y2gpe1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy50b3VjaG1vdmUsIHByZXZlbnRCb3VuY2luZywge3Bhc3NpdmU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMudG91Y2htb3ZlLCBwcmV2ZW50Qm91bmNpbmcsIHtwYXNzaXZlOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0b3VjaFdyYXBwZXIgPSBvcHRpb25zLnRvdWNoV3JhcHBlcjtcclxuICAgICAgICAgICAgICAgIHRvdWNoV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy50b3VjaHN0YXJ0LCB0b3VjaFN0YXJ0SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB0b3VjaFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMudG91Y2htb3ZlLCB0b3VjaE1vdmVIYW5kbGVyLCB7cGFzc2l2ZTogZmFsc2V9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b3VjaFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMudG91Y2hzdGFydCwgdG91Y2hTdGFydEhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgdG91Y2hXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLnRvdWNobW92ZSwgdG91Y2hNb3ZlSGFuZGxlciwge3Bhc3NpdmU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmVtb3ZlcyB0aGUgYXV0byBzY3JvbGxpbmcgZm9yIHRvdWNoIGRldmljZXMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVUb3VjaEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgaWYoaXNUb3VjaERldmljZSB8fCBpc1RvdWNoKXtcclxuICAgICAgICAgICAgICAgIC8vIG5vcm1hbFNjcm9sbEVsZW1lbnRzIHJlcXVpcmVzIGl0IG9mZiAjMjY5MVxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy50b3VjaG1vdmUsIHRvdWNoTW92ZUhhbmRsZXIsIHtwYXNzaXZlOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLnRvdWNobW92ZSwgcHJldmVudEJvdW5jaW5nLCB7cGFzc2l2ZTogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hXcmFwcGVyID0gb3B0aW9ucy50b3VjaFdyYXBwZXI7XHJcbiAgICAgICAgICAgICAgICB0b3VjaFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMudG91Y2hzdGFydCwgdG91Y2hTdGFydEhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgdG91Y2hXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLnRvdWNobW92ZSwgdG91Y2hNb3ZlSGFuZGxlciwge3Bhc3NpdmU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBSZXR1cm5zIGFuZCBvYmplY3Qgd2l0aCBNaWNyb3NvZnQgcG9pbnRlcnMgKGZvciBJRTwxMSBhbmQgZm9yIElFID49IDExKVxyXG4gICAgICAgICogaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2RuMzA0ODg2KHY9dnMuODUpLmFzcHhcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldE1TUG9pbnRlcigpe1xyXG4gICAgICAgICAgICB2YXIgcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC8vSUUgPj0gMTEgJiByZXN0IG9mIGJyb3dzZXJzXHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5Qb2ludGVyRXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHsgZG93bjogJ3BvaW50ZXJkb3duJywgbW92ZTogJ3BvaW50ZXJtb3ZlJ307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vSUUgPCAxMVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlciA9IHsgZG93bjogJ01TUG9pbnRlckRvd24nLCBtb3ZlOiAnTVNQb2ludGVyTW92ZSd9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgcGFnZVggYW5kIHBhZ2VZIHByb3BlcnRpZXMgZGVwZW5kaW5nIG9uIHRoZSBicm93c2VyLlxyXG4gICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzL2lzc3Vlcy8xOTQjaXNzdWVjb21tZW50LTM0MDY5ODU0XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRFdmVudHNQYWdlKGUpe1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRzID0gW107XHJcblxyXG4gICAgICAgICAgICBldmVudHMueSA9ICh0eXBlb2YgZS5wYWdlWSAhPT0gJ3VuZGVmaW5lZCcgJiYgKGUucGFnZVkgfHwgZS5wYWdlWCkgPyBlLnBhZ2VZIDogZS50b3VjaGVzWzBdLnBhZ2VZKTtcclxuICAgICAgICAgICAgZXZlbnRzLnggPSAodHlwZW9mIGUucGFnZVggIT09ICd1bmRlZmluZWQnICYmIChlLnBhZ2VZIHx8IGUucGFnZVgpID8gZS5wYWdlWCA6IGUudG91Y2hlc1swXS5wYWdlWCk7XHJcblxyXG4gICAgICAgICAgICAvL2luIHRvdWNoIGRldmljZXMgd2l0aCBzY3JvbGxCYXI6dHJ1ZSwgZS5wYWdlWSBpcyBkZXRlY3RlZCwgYnV0IHdlIGhhdmUgdG8gZGVhbCB3aXRoIHRvdWNoIGV2ZW50cy4gIzEwMDhcclxuICAgICAgICAgICAgaWYoaXNUb3VjaCAmJiBpc1JlYWxseVRvdWNoKGUpICYmIG9wdGlvbnMuc2Nyb2xsQmFyICYmIHR5cGVvZiBlLnRvdWNoZXMgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGV2ZW50cy55ID0gZS50b3VjaGVzWzBdLnBhZ2VZO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLnggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBldmVudHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNsaWRlcyBzaWxlbnRseSAod2l0aCBubyBhbmltYXRpb24pIHRoZSBhY3RpdmUgc2xpZGVyIHRvIHRoZSBnaXZlbiBzbGlkZS5cclxuICAgICAgICAqIEBwYXJhbSBub0NhbGxiYWNrIHtib29sfSB0cnVlIG9yIGRlZmluZWQgLT4gbm8gY2FsbGJhY2tzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzaWxlbnRMYW5kc2NhcGVTY3JvbGwoYWN0aXZlU2xpZGUsIG5vQ2FsbGJhY2tzKXtcclxuICAgICAgICAgICAgc2V0U2Nyb2xsaW5nU3BlZWQoMCwgJ2ludGVybmFsJyk7XHJcblxyXG4gICAgICAgICAgICBpZih0eXBlb2Ygbm9DYWxsYmFja3MgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIC8vcHJldmVudGluZyBmaXJpbmcgY2FsbGJhY2tzIGFmdGVyU2xpZGVMb2FkIGV0Yy5cclxuICAgICAgICAgICAgICAgIGlzUmVzaXppbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYW5kc2NhcGVTY3JvbGwoY2xvc2VzdChhY3RpdmVTbGlkZSwgU0xJREVTX1dSQVBQRVJfU0VMKSwgYWN0aXZlU2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgaWYodHlwZW9mIG5vQ2FsbGJhY2tzICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBpc1Jlc2l6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFNjcm9sbGluZ1NwZWVkKG9yaWdpbmFscy5zY3JvbGxpbmdTcGVlZCwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNjcm9sbHMgc2lsZW50bHkgKHdpdGggbm8gYW5pbWF0aW9uKSB0aGUgcGFnZSB0byB0aGUgZ2l2ZW4gWSBwb3NpdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNpbGVudFNjcm9sbCh0b3Ape1xyXG4gICAgICAgICAgICAvLyBUaGUgZmlyc3Qgc2VjdGlvbiBjYW4gaGF2ZSBhIG5lZ2F0aXZlIHZhbHVlIGluIGlPUyAxMC4gTm90IHF1aXRlIHN1cmUgd2h5OiAtMC4wMTQyODIyMjY1NjI1XHJcbiAgICAgICAgICAgIC8vIHRoYXQncyB3aHkgd2Ugcm91bmQgaXQgdG8gMC5cclxuICAgICAgICAgICAgdmFyIHJvdW5kZWRUb3AgPSBNYXRoLnJvdW5kKHRvcCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jc3MzICYmIG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiAhb3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZTNkID0gJ3RyYW5zbGF0ZTNkKDBweCwgLScgKyByb3VuZGVkVG9wICsgJ3B4LCAwcHgpJztcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUNvbnRhaW5lcih0cmFuc2xhdGUzZCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmICFvcHRpb25zLnNjcm9sbEJhcil7XHJcbiAgICAgICAgICAgICAgICBjc3MoY29udGFpbmVyLCB7J3RvcCc6IC1yb3VuZGVkVG9wICsgJ3B4J30pO1xyXG4gICAgICAgICAgICAgICAgRlAudGVzdC50b3AgPSAtcm91bmRlZFRvcCArICdweCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxTZXR0aW5ncyA9IGdldFNjcm9sbFNldHRpbmdzKHJvdW5kZWRUb3ApO1xyXG4gICAgICAgICAgICAgICAgc2V0U2Nyb2xsaW5nKHNjcm9sbFNldHRpbmdzLmVsZW1lbnQsIHNjcm9sbFNldHRpbmdzLm9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJldHVybnMgdGhlIGNyb3NzLWJyb3dzZXIgdHJhbnNmb3JtIHN0cmluZy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFRyYW5zZm9ybXModHJhbnNsYXRlM2Qpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogdHJhbnNsYXRlM2QsXHJcbiAgICAgICAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiB0cmFuc2xhdGUzZCxcclxuICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzp0cmFuc2xhdGUzZCxcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiB0cmFuc2xhdGUzZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBbGxvd2luZyBvciBkaXNhbGxvd2luZyB0aGUgbW91c2Uvc3dpcGUgc2Nyb2xsIGluIGEgZ2l2ZW4gZGlyZWN0aW9uLiAobm90IGZvciBrZXlib2FyZClcclxuICAgICAgICAqIEB0eXBlICBtIChtb3VzZSkgb3IgayAoa2V5Ym9hcmQpXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRJc1Njcm9sbEFsbG93ZWQodmFsdWUsIGRpcmVjdGlvbiwgdHlwZSl7XHJcbiAgICAgICAgICAgIC8vdXAsIGRvd24sIGxlZnQsIHJpZ2h0XHJcbiAgICAgICAgICAgIGlmKGRpcmVjdGlvbiAhPT0gJ2FsbCcpe1xyXG4gICAgICAgICAgICAgICAgaXNTY3JvbGxBbGxvd2VkW3R5cGVdW2RpcmVjdGlvbl0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9hbGwgZGlyZWN0aW9ucz9cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGlzU2Nyb2xsQWxsb3dlZFt0eXBlXSkuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2Nyb2xsQWxsb3dlZFt0eXBlXVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIERlc3Ryb3lzIGZ1bGxwYWdlLmpzIHBsdWdpbiBldmVudHMgYW5kIG9wdGluYWxseSBpdHMgaHRtbCBtYXJrdXAgYW5kIHN0eWxlc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveShhbGwpe1xyXG4gICAgICAgICAgICBzZXRBdXRvU2Nyb2xsaW5nKGZhbHNlLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgc2V0QWxsb3dTY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldE1vdXNlSGlqYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0S2V5Ym9hcmRTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBhZGRDbGFzcyhjb250YWluZXIsIERFU1RST1lFRCk7XHJcblxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBhZnRlclNsaWRlTG9hZHNJZCwgXHJcbiAgICAgICAgICAgICAgICBhZnRlclNlY3Rpb25Mb2Fkc0lkLFxyXG4gICAgICAgICAgICAgICAgcmVzaXplSWQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJZCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbElkMixcclxuICAgICAgICAgICAgICAgIGdfZG91YmxlQ2hlY2tIZWlnaHRJZCxcclxuICAgICAgICAgICAgICAgIHJlc2l6ZUhhbmRsZXJJZFxyXG4gICAgICAgICAgICBdLmZvckVhY2goZnVuY3Rpb24odGltZW91dElkKXtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBoYXNoQ2hhbmdlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duSGFuZGxlcik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIFsnY2xpY2snLCAndG91Y2hzdGFydCddLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBkZWxlZ2F0ZWRFdmVudHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFsnbW91c2VlbnRlcicsICd0b3VjaHN0YXJ0JywgJ21vdXNlbGVhdmUnLCAndG91Y2hlbmQnXS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50TmFtZSl7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgb25Nb3VzZUVudGVyT3JMZWF2ZSwgdHJ1ZSk7IC8vdHJ1ZSBpcyByZXF1aXJlZCFcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2xldHMgbWFrZSBhIG1lc3MhXHJcbiAgICAgICAgICAgIGlmKGFsbCl7XHJcbiAgICAgICAgICAgICAgICBkZXN0cm95U3RydWN0dXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBSZW1vdmVzIGlubGluZSBzdHlsZXMgYWRkZWQgYnkgZnVsbHBhZ2UuanNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3lTdHJ1Y3R1cmUoKXtcclxuICAgICAgICAgICAgLy9yZXNldGluZyB0aGUgYHRvcGAgb3IgYHRyYW5zbGF0ZWAgcHJvcGVydGllcyB0byAwXHJcbiAgICAgICAgICAgIHNpbGVudFNjcm9sbCgwKTtcclxuXHJcbiAgICAgICAgICAgIC8vbG9hZGluZyBhbGwgdGhlIGxhenkgbG9hZCBjb250ZW50XHJcbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLXNyY10sIHNvdXJjZVtkYXRhLXNyY10sIGF1ZGlvW2RhdGEtc3JjXSwgaWZyYW1lW2RhdGEtc3JjXScsIGNvbnRhaW5lcikuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgIHNldFNyYyhpdGVtLCAnc3JjJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtc3Jjc2V0XScpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICBzZXRTcmMoaXRlbSwgJ3NyY3NldCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlbW92ZSgkKFNFQ1RJT05fTkFWX1NFTCArICcsICcgKyBTTElERVNfTkFWX1NFTCArICAnLCAnICsgU0xJREVTX0FSUk9XX1NFTCkpO1xyXG5cclxuICAgICAgICAgICAgLy9yZW1vdmluZyBpbmxpbmUgc3R5bGVzXHJcbiAgICAgICAgICAgIGNzcygkKFNFQ1RJT05fU0VMKSwge1xyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcnLFxyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InIDogJycsXHJcbiAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY3NzKCQoU0xJREVfU0VMKSwge1xyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogJydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjc3MoY29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJycsXHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnJyxcclxuICAgICAgICAgICAgICAgICctbXMtdG91Y2gtYWN0aW9uJzogJycsXHJcbiAgICAgICAgICAgICAgICAndG91Y2gtYWN0aW9uJzogJydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjc3MoJGh0bWxCb2R5LCB7XHJcbiAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnOiAnJyxcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSAuZnAtZW5hYmxlZCBjbGFzc1xyXG4gICAgICAgICAgICByZW1vdmVDbGFzcygkaHRtbCwgRU5BQkxFRCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZW1vdmUgLmZwLXJlc3BvbnNpdmUgY2xhc3NcclxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoJGJvZHksIFJFU1BPTlNJVkUpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCBvZiB0aGUgLmZwLXZpZXdpbmctIGNsYXNzZXNcclxuICAgICAgICAgICAgJGJvZHkuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoVklFV0lOR19QUkVGSVgpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoJGJvZHksIGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9yZW1vdmluZyBhZGRlZCBjbGFzc2VzXHJcbiAgICAgICAgICAgICQoU0VDVElPTl9TRUwgKyAnLCAnICsgU0xJREVfU0VMKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIgJiYgb3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIucmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoaXRlbSwgVEFCTEUgKyAnICcgKyBBQ1RJVkUgKyAnICcgKyBDT01QTEVURUxZKTtcclxuICAgICAgICAgICAgICAgIHZhciBwcmV2aW91c1N0eWxlcyA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWZwLXN0eWxlcycpO1xyXG4gICAgICAgICAgICAgICAgaWYocHJldmlvdXNTdHlsZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsIGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWZwLXN0eWxlcycpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3JlbW92aW5nIGFuY2hvcnMgaWYgdGhleSB3ZXJlIG5vdCBzZXQgdXNpbmcgdGhlIEhUTUwgbWFya3VwXHJcbiAgICAgICAgICAgICAgICBpZihoYXNDbGFzcyhpdGVtLCBTRUNUSU9OKSAmJiAhZ19pbml0aWFsQW5jaG9yc0luRG9tKXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIHRoZSBhcHBsaWVkIHRyYW5zaXRpb24gZnJvbSB0aGUgZnVsbHBhZ2Ugd3JhcHBlclxyXG4gICAgICAgICAgICByZW1vdmVBbmltYXRpb24oY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vVW53cmFwcGluZyBjb250ZW50XHJcbiAgICAgICAgICAgIFtUQUJMRV9DRUxMX1NFTCwgU0xJREVTX0NPTlRBSU5FUl9TRUwsU0xJREVTX1dSQVBQRVJfU0VMXS5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgICAgICQoc2VsZWN0b3IsIGNvbnRhaW5lcikuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgICAgICAvL3Vud3JhcCBub3QgYmVpbmcgdXNlIGluIGNhc2UgdGhlcmUncyBubyBjaGlsZCBlbGVtZW50IGluc2lkZSBhbmQgaXRzIGp1c3QgdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHVud3JhcChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgdGhlIGFwcGxpZWQgdHJhbnNpdGlvbiBmcm9tIHRoZSBmdWxscGFnZSB3cmFwcGVyXHJcbiAgICAgICAgICAgIGNzcyhjb250YWluZXIsIHtcclxuICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zaXRpb24nOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbic6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHRoZSBwYWdlIHRvIHRoZSB0b3Agd2l0aCBubyBhbmltYXRpb25cclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cclxuICAgICAgICAgICAgLy9yZW1vdmluZyBzZWxlY3RvcnNcclxuICAgICAgICAgICAgdmFyIHVzZWRTZWxlY3RvcnMgPSBbU0VDVElPTiwgU0xJREUsIFNMSURFU19DT05UQUlORVJdO1xyXG4gICAgICAgICAgICB1c2VkU2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcygkKCcuJyArIGl0ZW0pLCBpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogU2V0cyB0aGUgc3RhdGUgZm9yIGEgdmFyaWFibGUgd2l0aCBtdWx0aXBsZSBzdGF0ZXMgKG9yaWdpbmFsLCBhbmQgdGVtcG9yYWwpXHJcbiAgICAgICAgKiBTb21lIHZhcmlhYmxlcyBzdWNoIGFzIGBhdXRvU2Nyb2xsaW5nYCBvciBgcmVjb3JkSGlzdG9yeWAgbWlnaHQgY2hhbmdlIGF1dG9tYXRpY2FsbHkgaXRzIHN0YXRlIHdoZW4gdXNpbmcgYHJlc3BvbnNpdmVgIG9yIGBhdXRvU2Nyb2xsaW5nOmZhbHNlYC5cclxuICAgICAgICAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGJvdGggc3RhdGVzLCB0aGUgb3JpZ2luYWwgYW5kIHRoZSB0ZW1wb3JhbCBvbmUuXHJcbiAgICAgICAgKiBJZiB0eXBlIGlzIG5vdCAnaW50ZXJuYWwnLCB0aGVuIHdlIGFzc3VtZSB0aGUgdXNlciBpcyBnbG9iYWxseSBjaGFuZ2luZyB0aGUgdmFyaWFibGUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRWYXJpYWJsZVN0YXRlKHZhcmlhYmxlLCB2YWx1ZSwgdHlwZSl7XHJcbiAgICAgICAgICAgIG9wdGlvbnNbdmFyaWFibGVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmKHR5cGUgIT09ICdpbnRlcm5hbCcpe1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxzW3ZhcmlhYmxlXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERpc3BsYXlzIHdhcm5pbmdzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBkaXNwbGF5V2FybmluZ3MoKXtcclxuICAgICAgICAgICAgdmFyIGwgPSBvcHRpb25zWydsaScgKyAnYycgKyAnZW5zZUsnICsgJ2UnICsgJ3knXTtcclxuICAgICAgICAgICAgdmFyIG1zZ1N0eWxlID0gJ2ZvbnQtc2l6ZTogMTVweDtiYWNrZ3JvdW5kOnllbGxvdzsnO1xyXG5cclxuICAgICAgICAgICAgaWYoIWlzT0spe1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdGdWxscGFnZS5qcyB2ZXJzaW9uIDMgaGFzIGNoYW5nZWQgaXRzIGxpY2Vuc2UgdG8gR1BMdjMgYW5kIGl0IHJlcXVpcmVzIGEgYGxpY2Vuc2VLZXlgIG9wdGlvbi4gUmVhZCBhYm91dCBpdCBoZXJlOicpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanMjb3B0aW9ucy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGwgJiYgbC5sZW5ndGggPCAyMCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJyVjIFRoaXMgd2Vic2l0ZSB3YXMgbWFkZSB1c2luZyBmdWxsUGFnZS5qcyBzbGlkZXIuIE1vcmUgaW5mbyBvbiB0aGUgZm9sbG93aW5nIHdlYnNpdGU6JywgbXNnU3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCclYyBodHRwczovL2FsdmFyb3RyaWdvLmNvbS9mdWxsUGFnZS8nLCBtc2dTdHlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGhhc0NsYXNzKCRodG1sLCBFTkFCTEVEKSl7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ2Vycm9yJywgJ0Z1bGxwYWdlLmpzIGNhbiBvbmx5IGJlIGluaXRpYWxpemVkIG9uY2UgYW5kIHlvdSBhcmUgZG9pbmcgaXQgbXVsdGlwbGUgdGltZXMhJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIERpc2FibGUgbXV0dWFsbHkgZXhjbHVzaXZlIHNldHRpbmdzXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCAmJlxyXG4gICAgICAgICAgICAgICAgKG9wdGlvbnMubG9vcFRvcCB8fCBvcHRpb25zLmxvb3BCb3R0b20pKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCd3YXJuJywgJ09wdGlvbiBgbG9vcFRvcC9sb29wQm90dG9tYCBpcyBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCBgY29udGludW91c1ZlcnRpY2FsYDsgYGNvbnRpbnVvdXNWZXJ0aWNhbGAgZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyAmJlxyXG4gICAgICAgICAgICAgICAob3B0aW9ucy5zY3JvbGxCYXIgfHwgIW9wdGlvbnMuYXV0b1Njcm9sbGluZykpe1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCd3YXJuJywgJ09wdGlvbnMgc2Nyb2xsQmFyOnRydWUgYW5kIGF1dG9TY3JvbGxpbmc6ZmFsc2UgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIHNjcm9sbE92ZXJmbG93OnRydWUuIFNlY3Rpb25zIHdpdGggc2Nyb2xsT3ZlcmZsb3cgbWlnaHQgbm90IHdvcmsgd2VsbCBpbiBGaXJlZm94Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsICYmIChvcHRpb25zLnNjcm9sbEJhciB8fCAhb3B0aW9ucy5hdXRvU2Nyb2xsaW5nKSl7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCd3YXJuJywgJ1Njcm9sbCBiYXJzIChgc2Nyb2xsQmFyOnRydWVgIG9yIGBhdXRvU2Nyb2xsaW5nOmZhbHNlYCkgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBjb250aW51b3VzVmVydGljYWxgOyBgY29udGludW91c1ZlcnRpY2FsYCBkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93ICYmIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxPdmVyZmxvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdUaGUgb3B0aW9uIGBzY3JvbGxPdmVyZmxvdzp0cnVlYCByZXF1aXJlcyB0aGUgZmlsZSBgc2Nyb2xsb3ZlcmZsb3cubWluLmpzYC4gUGxlYXNlIGluY2x1ZGUgaXQgYmVmb3JlIGZ1bGxQYWdlLmpzLicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3VzaW5nIGV4dGVuc2lvbnM/IFdyb25nIGZpbGUhXHJcbiAgICAgICAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbihleHRlbnNpb24pe1xyXG4gICAgICAgICAgICAgICAgLy9pcyB0aGUgb3B0aW9uIHNldCB0byB0cnVlP1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9uc1tleHRlbnNpb25dKXtcclxuICAgICAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ3dhcm4nLCAnZnVsbHBhZ2UuanMgZXh0ZW5zaW9ucyByZXF1aXJlIGZ1bGxwYWdlLmV4dGVuc2lvbnMubWluLmpzIGZpbGUgaW5zdGVhZCBvZiB0aGUgdXN1YWwgZnVsbHBhZ2UuanMuIFJlcXVlc3RlZDogJysgZXh0ZW5zaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2FuY2hvcnMgY2FuIG5vdCBoYXZlIHRoZSBzYW1lIHZhbHVlIGFzIGFueSBlbGVtZW50IElEIG9yIE5BTUVcclxuICAgICAgICAgICAgb3B0aW9ucy5hbmNob3JzLmZvckVhY2goZnVuY3Rpb24obmFtZSl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jYXNlIGluc2Vuc2l0aXZlIHNlbGVjdG9ycyAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTk0NjUxODcvMTA4MTM5NilcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lQXR0ciA9IFtdLnNsaWNlLmNhbGwoJCgnW25hbWVdJykpLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZ2V0QXR0cmlidXRlKCduYW1lJykgJiYgaXRlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKS50b0xvd2VyQ2FzZSgpID09IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZEF0dHIgPSBbXS5zbGljZS5jYWxsKCQoJ1tpZF0nKSkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5nZXRBdHRyaWJ1dGUoJ2lkJykgJiYgaXRlbS5nZXRBdHRyaWJ1dGUoJ2lkJykudG9Mb3dlckNhc2UoKSA9PSBuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihpZEF0dHIubGVuZ3RoIHx8IG5hbWVBdHRyLmxlbmd0aCApe1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dFcnJvcignZXJyb3InLCAnZGF0YS1hbmNob3IgdGFncyBjYW4gbm90IGhhdmUgdGhlIHNhbWUgdmFsdWUgYXMgYW55IGBpZGAgZWxlbWVudCBvbiB0aGUgc2l0ZSAob3IgYG5hbWVgIGVsZW1lbnQgZm9yIElFKS4nKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHlOYW1lID0gaWRBdHRyLmxlbmd0aCA/ICdpZCcgOiAnbmFtZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlkQXR0ci5sZW5ndGggfHwgbmFtZUF0dHIubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdcIicgKyBuYW1lICsgJ1wiIGlzIGlzIGJlaW5nIHVzZWQgYnkgYW5vdGhlciBlbGVtZW50IGAnKyBwcm9wZXJ0eU5hbWUgKydgIHByb3BlcnR5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0dGluZyB0aGUgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgdG8gc2Nyb2xsIHdoZW4gdXNpbmcgalF1ZXJ5IGFuaW1hdGlvbnNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFNjcm9sbGVkUG9zaXRpb24oZWxlbWVudCl7XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIC8vaXMgbm90IHRoZSB3aW5kb3cgZWxlbWVudCBhbmQgaXMgYSBzbGlkZT9cclxuICAgICAgICAgICAgaWYoZWxlbWVudC5zZWxmICE9IHdpbmRvdyAmJiBoYXNDbGFzcyhlbGVtZW50LCBTTElERVNfV1JBUFBFUikpe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBlbGVtZW50LnNjcm9sbExlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZighb3B0aW9ucy5hdXRvU2Nyb2xsaW5nICB8fCBvcHRpb25zLnNjcm9sbEJhcil7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGdldFNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2dldHMgdGhlIHRvcCBwcm9wZXJ0eSBvZiB0aGUgd3JhcHBlclxyXG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNpbXVsYXRlcyB0aGUgYW5pbWF0ZWQgc2Nyb2xsVG9wIG9mIGpRdWVyeS4gVXNlZCB3aGVuIGNzczM6ZmFsc2Ugb3Igc2Nyb2xsQmFyOnRydWUgb3IgYXV0b1Njcm9sbGluZzpmYWxzZVxyXG4gICAgICAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTYxMzY3ODkvMTA4MTM5NlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsVG8oZWxlbWVudCwgdG8sIGR1cmF0aW9uLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSBnZXRTY3JvbGxlZFBvc2l0aW9uKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gdG8gLSBzdGFydDtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgdmFyIGluY3JlbWVudCA9IDIwO1xyXG4gICAgICAgICAgICBhY3RpdmVBbmltYXRpb24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFuaW1hdGVTY3JvbGwgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaWYoYWN0aXZlQW5pbWF0aW9uKXsgLy9pbiBvcmRlciB0byBzdG9wZSBpdCBmcm9tIG90aGVyIGZ1bmN0aW9uIHdoZW5ldmVyIHdlIHdhbnRcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gdG87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lICs9IGluY3JlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZHVyYXRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSB3aW5kb3cuZnBfZWFzaW5nc1tvcHRpb25zLmVhc2luZ10oY3VycmVudFRpbWUsIHN0YXJ0LCBjaGFuZ2UsIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNjcm9sbGluZyhlbGVtZW50LCB2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50VGltZSA8IGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoYW5pbWF0ZVNjcm9sbCwgaW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih0eXBlb2YgY2FsbGJhY2sgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZiAoY3VycmVudFRpbWUgPCBkdXJhdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGVTY3JvbGwoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyB0aGUgcGFnZSAvIHNsaWRlciB0aGUgZ2l2ZW4gbnVtYmVyIG9mIHBpeGVscy5cclxuICAgICAgICAqIEl0IHdpbGwgZG8gaXQgb25lIG9yIGFub3RoZXIgd2F5IGRlcGVuZGlvbmcgb24gdGhlIGxpYnJhcnkncyBjb25maWcuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRTY3JvbGxpbmcoZWxlbWVudCwgdmFsKXtcclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMuYXV0b1Njcm9sbGluZyB8fCBvcHRpb25zLnNjcm9sbEJhciB8fCAoZWxlbWVudC5zZWxmICE9IHdpbmRvdyAmJiBoYXNDbGFzcyhlbGVtZW50LCBTTElERVNfV1JBUFBFUikpKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyBob3Jpem9udGFsbHkgdGhyb3VnaCB0aGUgc2xpZGVzP1xyXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5zZWxmICE9IHdpbmRvdyAgJiYgaGFzQ2xhc3MoZWxlbWVudCwgU0xJREVTX1dSQVBQRVIpKXtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsIHNjcm9sbFxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbFRvKDAsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gdmFsICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBhY3RpdmUgc2xpZGUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRBY3RpdmVTbGlkZSgpe1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2xpZGUgPSAkKFNMSURFX0FDVElWRV9TRUwsICQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSlbMF07XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsT3JTbGlkZShhY3RpdmVTbGlkZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGFjdGl2ZSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QWN0aXZlU2VjdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNlY3Rpb24oJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogSXRlbS4gU2xpZGUgb3IgU2VjdGlvbiBvYmplY3RzIHNoYXJlIHRoZSBzYW1lIHByb3BlcnRpZXMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBJdGVtKGVsLCBzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBlbDtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4KGVsLCBzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMYXN0ID0gdGhpcy5pbmRleCA9PT0gZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5sZW5ndGggLTE7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdCA9ICF0aGlzLmluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZWN0aW9uIG9iamVjdFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gU2VjdGlvbihlbCl7XHJcbiAgICAgICAgICAgIEl0ZW0uY2FsbCh0aGlzLCBlbCwgU0VDVElPTl9TRUwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTbGlkZSBvYmplY3RcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIFNsaWRlKGVsKXtcclxuICAgICAgICAgICAgSXRlbS5jYWxsKHRoaXMsIGVsLCBTTElERV9TRUwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEZQO1xyXG4gICAgfSAvL2VuZCBvZiAkLmZuLmZ1bGxwYWdlXHJcblxyXG4gICAgLy91dGlsc1xyXG4gICAgLyoqXHJcbiAgICAqIFNob3dzIGEgbWVzc2FnZSBpbiB0aGUgY29uc29sZSBvZiB0aGUgZ2l2ZW4gdHlwZS5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBzaG93RXJyb3IodHlwZSwgdGV4dCl7XHJcbiAgICAgICAgd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGVbdHlwZV0gJiYgd2luZG93LmNvbnNvbGVbdHlwZV0oJ2Z1bGxQYWdlOiAnICsgdGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEVxdWl2YWxlbnQgb3IgalF1ZXJ5IGZ1bmN0aW9uICQoKS5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0KXtcclxuICAgICAgICBjb250ZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBjb250ZXh0IDogZG9jdW1lbnQ7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHQgPyBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogRXh0ZW5kcyBhIGdpdmVuIE9iamVjdCBwcm9wZXJ0aWVzIGFuZCBpdHMgY2hpbGRzLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGRlZXBFeHRlbmQob3V0KSB7XHJcbiAgICAgICAgb3V0ID0gb3V0IHx8IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpe1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYoIW9iail7XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIG9iail7XHJcbiAgICAgICAgICAgICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC8vIGJhc2VkIG9uIGh0dHBzOi8vamF2YXNjcmlwdHdlYmxvZy53b3JkcHJlc3MuY29tLzIwMTEvMDgvMDgvZml4aW5nLXRoZS1qYXZhc2NyaXB0LXR5cGVvZi1vcGVyYXRvci9cclxuICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9ialtrZXldKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpe1xyXG4gICAgICAgICAgICAgICAgb3V0W2tleV0gPSBkZWVwRXh0ZW5kKG91dFtrZXldLCBvYmpba2V5XSk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIG91dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQ2hlY2tzIGlmIHRoZSBwYXNzZWQgZWxlbWVudCBjb250YWlucyB0aGUgcGFzc2VkIGNsYXNzLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpe1xyXG4gICAgICAgIGlmKGVsID09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3Qpe1xyXG4gICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKCcoXnwgKScgKyBjbGFzc05hbWUgKyAnKCB8JCknLCAnZ2knKS50ZXN0KGVsLmNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHdpbmRvdyBoZWlnaHQuIENyb3NzYnJvd3Nlci5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRXaW5kb3dIZWlnaHQoKXtcclxuICAgICAgICByZXR1cm4gJ2lubmVySGVpZ2h0JyBpbiB3aW5kb3cgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSB3aW5kb3cgd2lkdGguXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93V2lkdGgoKXtcclxuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFNldCdzIHRoZSBDU1MgcHJvcGVydGllcyBmb3IgdGhlIHBhc3NlZCBpdGVtL3MuXHJcbiAgICAqIEBwYXJhbSB7Tm9kZUxpc3R8SFRNTEVsZW1lbnR9IGl0ZW1zXHJcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBjc3MgcHJvcGVydGllcyBhbmQgdmFsdWVzLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGNzcyhpdGVtcywgcHJvcHMpIHtcclxuICAgICAgICBpdGVtcyA9IGdldExpc3QoaXRlbXMpO1xyXG5cclxuICAgICAgICB2YXIga2V5O1xyXG4gICAgICAgIGZvciAoa2V5IGluIHByb3BzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlW2tleV0gPSBwcm9wc1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZW5lcmljIGZ1bmN0aW9uIHRvIGdldCB0aGUgcHJldmlvdXMgb3IgbmV4dCBlbGVtZW50LlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHVudGlsKGl0ZW0sIHNlbGVjdG9yLCBmbil7XHJcbiAgICAgICAgdmFyIHNpYmxpbmcgPSBpdGVtW2ZuXTtcclxuICAgICAgICB3aGlsZShzaWJsaW5nICYmICFtYXRjaGVzKHNpYmxpbmcsIHNlbGVjdG9yKSl7XHJcbiAgICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nW2ZuXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzaWJsaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBwcmV2aW91cyBlbGVtZW50IHRvIHRoZSBwYXNzZWQgZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzZWxlY3Rvci5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBwcmV2VW50aWwoaXRlbSwgc2VsZWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiB1bnRpbChpdGVtLCBzZWxlY3RvciwgJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyB0aGUgbmV4dCBlbGVtZW50IHRvIHRoZSBwYXNzZWQgZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIHBhc3NlZCBzZWxlY3Rvci5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBuZXh0VW50aWwoaXRlbSwgc2VsZWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiB1bnRpbChpdGVtLCBzZWxlY3RvciwgJ25leHRFbGVtZW50U2libGluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBwcmV2aW91cyBlbGVtZW50IHRvIHRoZSBwYXNzZWQgZWxlbWVudC5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBwcmV2KGl0ZW0pe1xyXG4gICAgICAgIHJldHVybiBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIG5leHQgZWxlbWVudCB0byB0aGUgcGFzc2VkIGVsZW1lbnQuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gbmV4dChpdGVtKXtcclxuICAgICAgICByZXR1cm4gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBwYXNzZWQgbGlzdCBvZiBlbGVtZW50cy5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBsYXN0KGl0ZW0pe1xyXG4gICAgICAgIHJldHVybiBpdGVtW2l0ZW0ubGVuZ3RoLTFdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIGluZGV4IGZyb20gdGhlIHBhc3NlZCBlbGVtZW50LlxyXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgaXMgb3B0aW9uYWwuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5kZXgoaXRlbSwgc2VsZWN0b3IpIHtcclxuICAgICAgICBpdGVtID0gaXNBcnJheU9yTGlzdChpdGVtKSA/IGl0ZW1bMF0gOiBpdGVtO1xyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHNlbGVjdG9yICE9IG51bGw/ICQoc2VsZWN0b3IsIGl0ZW0ucGFyZW50Tm9kZSkgOiBpdGVtLnBhcmVudE5vZGUuY2hpbGROb2RlcztcclxuICAgICAgICB2YXIgbnVtID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8Y2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgIGlmIChjaGlsZHJlbltpXSA9PSBpdGVtKSByZXR1cm4gbnVtO1xyXG4gICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2ldLm5vZGVUeXBlPT0xKSBudW0rKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIGFuIGl0ZXJhYmxlIGVsZW1lbnQgZm9yIHRoZSBwYXNzZWQgZWxlbWVudC9zXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0TGlzdChpdGVtKXtcclxuICAgICAgICByZXR1cm4gIWlzQXJyYXlPckxpc3QoaXRlbSkgPyBbaXRlbV0gOiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBBZGRzIHRoZSBkaXNwbGF5PW5vbmUgcHJvcGVydHkgZm9yIHRoZSBwYXNzZWQgZWxlbWVudC9zXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gaGlkZShlbCl7XHJcbiAgICAgICAgZWwgPSBnZXRMaXN0KGVsKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGVsW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQWRkcyB0aGUgZGlzcGxheT1ibG9jayBwcm9wZXJ0eSBmb3IgdGhlIHBhc3NlZCBlbGVtZW50L3NcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBzaG93KGVsKXtcclxuICAgICAgICBlbCA9IGdldExpc3QoZWwpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZWxbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQ2hlY2tzIGlmIHRoZSBwYXNzZWQgZWxlbWVudCBpcyBhbiBpdGVyYWJsZSBlbGVtZW50IG9yIG5vdFxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzQXJyYXlPckxpc3QoZWwpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIGVsICkgPT09ICdbb2JqZWN0IEFycmF5XScgfHxcclxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBlbCApID09PSAnW29iamVjdCBOb2RlTGlzdF0nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBBZGRzIHRoZSBwYXNzZWQgY2xhc3MgdG8gdGhlIHBhc3NlZCBlbGVtZW50L3NcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgZWwgPSBnZXRMaXN0KGVsKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gZWxbaV07XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdCl7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgIGl0ZW0uY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJlbW92ZXMgdGhlIHBhc3NlZCBjbGFzcyB0byB0aGUgcGFzc2VkIGVsZW1lbnQvc1xyXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gYGNsYXNzTmFtZWAgY2FuIGJlIG11bHRpcGxlIGNsYXNzbmFtZXMgc2VwYXJhdGVkIGJ5IHdoaXRlc3BhY2VcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xhc3NOYW1lKXtcclxuICAgICAgICBlbCA9IGdldExpc3QoZWwpO1xyXG5cclxuICAgICAgICB2YXIgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGEgPSAwOyBhPGNsYXNzTmFtZXMubGVuZ3RoOyBhKyspe1xyXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWVzW2FdO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gZWxbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IGl0ZW0uY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEFwcGVuZHMgdGhlIGdpdmVuIGVsZW1lbnQgb3QgdGhlIGdpdmVuIHBhcmVudC5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBhcHBlbmRUbyhlbCwgcGFyZW50KXtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgVXNhZ2U6XHJcblxyXG4gICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ2ZwLXNsaWRlcyc7XHJcbiAgICB3cmFwKCQoJy5zbGlkZScpLCB3cmFwcGVyKTtcclxuXHJcbiAgICBodHRwczovL2pzZmlkZGxlLm5ldC9xd3pjN295My8xNS8gKHZhbmlsbGEpXHJcbiAgICBodHRwczovL2pzZmlkZGxlLm5ldC9veWE2bmRrYS8xLyAoanF1ZXJ5IGVxdWl2YWxlbnQpXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gd3JhcCh0b1dyYXAsIHdyYXBwZXIsIGlzV3JhcEFsbCkge1xyXG4gICAgICAgIHZhciBuZXdQYXJlbnQ7XHJcbiAgICAgICAgd3JhcHBlciA9IHdyYXBwZXIgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRvV3JhcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gdG9XcmFwW2ldO1xyXG4gICAgICAgICAgICBpZihpc1dyYXBBbGwgJiYgIWkgfHwgIWlzV3JhcEFsbCl7XHJcbiAgICAgICAgICAgICAgICBuZXdQYXJlbnQgPSB3cmFwcGVyLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3UGFyZW50LCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdQYXJlbnQuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b1dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICBVc2FnZTpcclxuICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICdmcC1zbGlkZXMnO1xyXG4gICAgd3JhcCgkKCcuc2xpZGUnKSwgd3JhcHBlcik7XHJcblxyXG4gICAgaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvcXd6YzdveTMvMjcvICh2YW5pbGxhKVxyXG4gICAgaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvb3lhNm5ka2EvNC8gKGpxdWVyeSBlcXVpdmFsZW50KVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHdyYXBBbGwodG9XcmFwLCB3cmFwcGVyKSB7XHJcbiAgICAgICAgd3JhcCh0b1dyYXAsIHdyYXBwZXIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBVc2FnZTpcclxuICAgICogd3JhcElubmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXBlJyksICc8ZGl2IGNsYXNzPVwidGVzdFwiPmFmZGFzPC9kaXY+Jyk7XHJcbiAgICAqIHdyYXBJbm5lcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVwZScpLCBlbGVtZW50KTtcclxuICAgICpcclxuICAgICogaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvemV4eHowdHcvNi9cclxuICAgICpcclxuICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxODE3NTkwLzEwODEzOTZcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiB3cmFwSW5uZXIocGFyZW50LCB3cmFwcGVyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyID09PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnRGcm9tSFRNTCh3cmFwcGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuXHJcbiAgICAgICAgd2hpbGUocGFyZW50LmZpcnN0Q2hpbGQgIT09IHdyYXBwZXIpe1xyXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogVXNhZ2U6XHJcbiAgICAqIHVud3JhcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVwZScpKTtcclxuICAgICogdW53cmFwKGVsZW1lbnQpO1xyXG4gICAgKlxyXG4gICAgKiBodHRwczovL2pzZmlkZGxlLm5ldC9zemp0MGh4cS8xL1xyXG4gICAgKlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHVud3JhcCh3cmFwcGVyKSB7XHJcbiAgICAgICAgdmFyIHdyYXBwZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIHdoaWxlICh3cmFwcGVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgd3JhcHBlckNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlci5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdyYXBwZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQod3JhcHBlckNvbnRlbnQsIHdyYXBwZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyMTAwODUzL2RvbS1wdXJlLWphdmFzY3JpcHQtc29sdXRpb24tdG8tanF1ZXJ5LWNsb3Nlc3QtaW1wbGVtZW50YXRpb25cclxuICAgICogUmV0dXJucyB0aGUgZWxlbWVudCBvciBgZmFsc2VgIGlmIHRoZXJlJ3Mgbm9uZVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGNsb3Nlc3QoZWwsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgaWYoZWwgJiYgZWwubm9kZVR5cGUgPT09IDEpe1xyXG4gICAgICAgICAgICBpZihtYXRjaGVzKGVsLCBzZWxlY3Rvcikpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjbG9zZXN0KGVsLnBhcmVudE5vZGUsIHNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFBsYWNlcyBvbmUgZWxlbWVudCAocmVsKSBhZnRlciBhbm90aGVyIG9uZSBvciBncm91cCBvZiB0aGVtIChyZWZlcmVuY2UpLlxyXG4gICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2VcclxuICAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxOb2RlTGlzdHxTdHJpbmd9IGVsXHJcbiAgICAqIGh0dHBzOi8vanNmaWRkbGUubmV0LzlzOTdoaHp2LzEvXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gYWZ0ZXIocmVmZXJlbmNlLCBlbCkge1xyXG4gICAgICAgIGluc2VydEJlZm9yZShyZWZlcmVuY2UsIHJlZmVyZW5jZS5uZXh0U2libGluZywgZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBQbGFjZXMgb25lIGVsZW1lbnQgKHJlbCkgYmVmb3JlIGFub3RoZXIgb25lIG9yIGdyb3VwIG9mIHRoZW0gKHJlZmVyZW5jZSkuXHJcbiAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZVxyXG4gICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fE5vZGVMaXN0fFN0cmluZ30gZWxcclxuICAgICogaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvOXM5N2hoenYvMS9cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBiZWZvcmUocmVmZXJlbmNlLCBlbCkge1xyXG4gICAgICAgIGluc2VydEJlZm9yZShyZWZlcmVuY2UsIHJlZmVyZW5jZSwgZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBCYXNlZCBpbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTkzMTYwMjQvMTA4MTM5NlxyXG4gICAgKiBhbmQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3OTM2MzAvMTA4MTM5NlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGluc2VydEJlZm9yZShyZWZlcmVuY2UsIGJlZm9yZUVsZW1lbnQsIGVsKXtcclxuICAgICAgICBpZighaXNBcnJheU9yTGlzdChlbCkpe1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZWwgPT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICAgICAgZWwgPSBjcmVhdGVFbGVtZW50RnJvbUhUTUwoZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsID0gW2VsXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8ZWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICByZWZlcmVuY2UucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxbaV0sIGJlZm9yZUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzQ2NDg3Ni9qYXZhc2NyaXB0LWdldC13aW5kb3cteC15LXBvc2l0aW9uLWZvci1zY3JvbGxcclxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpe1xyXG4gICAgICAgIHZhciBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLnNjcm9sbFRvcCkgIC0gKGRvYy5jbGllbnRUb3AgfHwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBwYXNzZWQgZWxlbWVudFxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHNpYmxpbmdzKGVsKXtcclxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGVsLnBhcmVudE5vZGUuY2hpbGRyZW4sIGZ1bmN0aW9uKGNoaWxkKXtcclxuICAgICAgICAgIHJldHVybiBjaGlsZCAhPT0gZWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9mb3IgSUUgOSA/XHJcbiAgICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChldmVudCl7XHJcbiAgICAgICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpe1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXNzZWQgaXRlbSBpcyBvZiBmdW5jdGlvbiB0eXBlLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoaXRlbSk7XHJcbiAgICAgIHJldHVybiB0eXBlID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFRyaWdnZXIgY3VzdG9tIGV2ZW50c1xyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHRyaWdnZXIoZWwsIGV2ZW50TmFtZSwgZGF0YSl7XHJcbiAgICAgICAgdmFyIGV2ZW50O1xyXG4gICAgICAgIGRhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IGRhdGE7XHJcblxyXG4gICAgICAgIC8vIE5hdGl2ZVxyXG4gICAgICAgIGlmKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIiApe1xyXG4gICAgICAgICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtkZXRhaWw6IGRhdGF9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuICAgICAgICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogUG9seWZpbGwgb2YgLm1hdGNoZXMoKVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIG1hdGNoZXMoZWwsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIChlbC5tYXRjaGVzIHx8IGVsLm1hdGNoZXNTZWxlY3RvciB8fCBlbC5tc01hdGNoZXNTZWxlY3RvciB8fCBlbC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm9NYXRjaGVzU2VsZWN0b3IpLmNhbGwoZWwsIHNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgcGFzc2VkIGVsZW1lbnQgZWwuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gdG9nZ2xlKGVsLCB2YWx1ZSl7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIil7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8ZWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgZWxbaV0uc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3dlIGRvbid0IHVzZSBpdCBpbiBvdGhlciB3YXksIHNvIG5vIGVsc2UgOilcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDcmVhdGVzIGEgSFRNTEVsZW1lbnQgZnJvbSB0aGUgcGFzc2VkIEhUTUwgc3RyaW5nLlxyXG4gICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDk0MzQ4LzEwODEzOTZcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50RnJvbUhUTUwoaHRtbFN0cmluZykge1xyXG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFN0cmluZy50cmltKCk7XHJcblxyXG4gICAgICAgIC8vIENoYW5nZSB0aGlzIHRvIGRpdi5jaGlsZE5vZGVzIHRvIHN1cHBvcnQgbXVsdGlwbGUgdG9wLWxldmVsIG5vZGVzXHJcbiAgICAgICAgcmV0dXJuIGRpdi5maXJzdENoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZW1vdmVzIHRoZSBwYXNzZWQgaXRlbS9zIGZyb20gdGhlIERPTS5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmUoaXRlbXMpe1xyXG4gICAgICAgIGl0ZW1zID0gZ2V0TGlzdChpdGVtcyk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxpdGVtcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gJiYgaXRlbS5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEZpbHRlcnMgYW4gYXJyYXkgYnkgdGhlIHBhc3NlZCBmaWx0ZXIgZnVudGlvbi5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBmaWx0ZXIoZWwsIGZpbHRlckZuKXtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZWwsIGZpbHRlckZuKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2h0dHBzOi8vanNmaWRkbGUubmV0L3cxcmt0ZWN6L1xyXG4gICAgZnVuY3Rpb24gdW50aWxBbGwoaXRlbSwgc2VsZWN0b3IsIGZuKXtcclxuICAgICAgICB2YXIgc2libGluZyA9IGl0ZW1bZm5dO1xyXG4gICAgICAgIHZhciBzaWJsaW5ncyA9IFtdO1xyXG4gICAgICAgIHdoaWxlKHNpYmxpbmcpe1xyXG4gICAgICAgICAgICBpZihtYXRjaGVzKHNpYmxpbmcsIHNlbGVjdG9yKSB8fCBzZWxlY3RvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nW2ZuXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzaWJsaW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyBhbGwgbmV4dCBlbGVtZW50cyBtYXRjaGluZyB0aGUgcGFzc2VkIHNlbGVjdG9yLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIG5leHRBbGwoaXRlbSwgc2VsZWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiB1bnRpbEFsbChpdGVtLCBzZWxlY3RvciwgJ25leHRFbGVtZW50U2libGluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIGFsbCBwcmV2aW91cyBlbGVtZW50cyBtYXRjaGluZyB0aGUgcGFzc2VkIHNlbGVjdG9yLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHByZXZBbGwoaXRlbSwgc2VsZWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiB1bnRpbEFsbChpdGVtLCBzZWxlY3RvciwgJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQ29udmVydHMgYW4gb2JqZWN0IHRvIGFuIGFycmF5LlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHRvQXJyYXkob2JqZWN0RGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdERhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICByZXR1cm4gb2JqZWN0RGF0YVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBmb3JFYWNoIHBvbHlmaWxsIGZvciBJRVxyXG4gICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZUxpc3QvZm9yRWFjaCNCcm93c2VyX0NvbXBhdGliaWxpdHlcclxuICAgICovXHJcbiAgICBpZiAod2luZG93Lk5vZGVMaXN0ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xyXG4gICAgICAgIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XHJcbiAgICAgICAgICAgIHRoaXNBcmcgPSB0aGlzQXJnIHx8IHdpbmRvdztcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXNbaV0sIGksIHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvL3V0aWxzIGFyZSBwdWJsaWMsIHNvIHdlIGNhbiB1c2UgaXQgd2hlcmV2ZXIgd2Ugd2FudFxyXG4gICAgd2luZG93LmZwX3V0aWxzID0ge1xyXG4gICAgICAgICQ6ICQsXHJcbiAgICAgICAgZGVlcEV4dGVuZDogZGVlcEV4dGVuZCxcclxuICAgICAgICBoYXNDbGFzczogaGFzQ2xhc3MsXHJcbiAgICAgICAgZ2V0V2luZG93SGVpZ2h0OiBnZXRXaW5kb3dIZWlnaHQsXHJcbiAgICAgICAgY3NzOiBjc3MsXHJcbiAgICAgICAgdW50aWw6IHVudGlsLFxyXG4gICAgICAgIHByZXZVbnRpbDogcHJldlVudGlsLFxyXG4gICAgICAgIG5leHRVbnRpbDogbmV4dFVudGlsLFxyXG4gICAgICAgIHByZXY6IHByZXYsXHJcbiAgICAgICAgbmV4dDogbmV4dCxcclxuICAgICAgICBsYXN0OiBsYXN0LFxyXG4gICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICBnZXRMaXN0OiBnZXRMaXN0LFxyXG4gICAgICAgIGhpZGU6IGhpZGUsXHJcbiAgICAgICAgc2hvdzogc2hvdyxcclxuICAgICAgICBpc0FycmF5T3JMaXN0OiBpc0FycmF5T3JMaXN0LFxyXG4gICAgICAgIGFkZENsYXNzOiBhZGRDbGFzcyxcclxuICAgICAgICByZW1vdmVDbGFzczogcmVtb3ZlQ2xhc3MsXHJcbiAgICAgICAgYXBwZW5kVG86IGFwcGVuZFRvLFxyXG4gICAgICAgIHdyYXA6IHdyYXAsXHJcbiAgICAgICAgd3JhcEFsbDogd3JhcEFsbCxcclxuICAgICAgICB3cmFwSW5uZXI6IHdyYXBJbm5lcixcclxuICAgICAgICB1bndyYXA6IHVud3JhcCxcclxuICAgICAgICBjbG9zZXN0OiBjbG9zZXN0LFxyXG4gICAgICAgIGFmdGVyOiBhZnRlcixcclxuICAgICAgICBiZWZvcmU6IGJlZm9yZSxcclxuICAgICAgICBpbnNlcnRCZWZvcmU6IGluc2VydEJlZm9yZSxcclxuICAgICAgICBnZXRTY3JvbGxUb3A6IGdldFNjcm9sbFRvcCxcclxuICAgICAgICBzaWJsaW5nczogc2libGluZ3MsXHJcbiAgICAgICAgcHJldmVudERlZmF1bHQ6IHByZXZlbnREZWZhdWx0LFxyXG4gICAgICAgIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXHJcbiAgICAgICAgdHJpZ2dlcjogdHJpZ2dlcixcclxuICAgICAgICBtYXRjaGVzOiBtYXRjaGVzLFxyXG4gICAgICAgIHRvZ2dsZTogdG9nZ2xlLFxyXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRGcm9tSFRNTDogY3JlYXRlRWxlbWVudEZyb21IVE1MLFxyXG4gICAgICAgIHJlbW92ZTogcmVtb3ZlLFxyXG4gICAgICAgIGZpbHRlcjogZmlsdGVyLFxyXG4gICAgICAgIHVudGlsQWxsOiB1bnRpbEFsbCxcclxuICAgICAgICBuZXh0QWxsOiBuZXh0QWxsLFxyXG4gICAgICAgIHByZXZBbGw6IHByZXZBbGwsXHJcbiAgICAgICAgc2hvd0Vycm9yOiBzaG93RXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGluaXRpYWxpc2U7XHJcbn0pKTtcclxuXHJcbi8qKlxyXG4gKiBqUXVlcnkgYWRhcHRlciBmb3IgZnVsbFBhZ2UuanMgMy4wLjBcclxuICovXHJcbmlmKHdpbmRvdy5qUXVlcnkgJiYgd2luZG93LmZ1bGxwYWdlKXtcclxuICAgIChmdW5jdGlvbiAoJCwgZnVsbHBhZ2UpIHtcclxuICAgICAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgICAgIC8vIE5vIGpRdWVyeSBObyBHb1xyXG4gICAgICAgIGlmICghJCB8fCAhZnVsbHBhZ2UpIHtcclxuICAgICAgICAgICAgd2luZG93LmZwX3V0aWxzLnNob3dFcnJvcignZXJyb3InLCAnalF1ZXJ5IGlzIHJlcXVpcmVkIHRvIHVzZSB0aGUgalF1ZXJ5IGZ1bGxwYWdlIGFkYXB0ZXIhJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuZm4uZnVsbHBhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgb3B0aW9ucywgeyckJzogJH0pO1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgZnVsbHBhZ2UodGhpc1swXSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pKHdpbmRvdy5qUXVlcnksIHdpbmRvdy5mdWxscGFnZSk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyohXG4gKiBcbiAqICAgdHlwZWQuanMgLSBBIEphdmFTY3JpcHQgVHlwaW5nIEFuaW1hdGlvbiBMaWJyYXJ5XG4gKiAgIEF1dGhvcjogTWF0dCBCb2xkdCA8bWVAbWF0dGJvbGR0LmNvbT5cbiAqICAgVmVyc2lvbjogdjIuMC4xMVxuICogICBVcmw6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0Ym9sZHQvdHlwZWQuanNcbiAqICAgTGljZW5zZShzKTogTUlUXG4gKiBcbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVHlwZWRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHlwZWRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgX2luaXRpYWxpemVySnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0dmFyIF9odG1sUGFyc2VySnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHRcblx0LyoqXG5cdCAqIFdlbGNvbWUgdG8gVHlwZWQuanMhXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgSFRNTCBlbGVtZW50IElEIF9PUl8gSFRNTCBlbGVtZW50XG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG5cdCAqIEByZXR1cm5zIHtvYmplY3R9IGEgbmV3IFR5cGVkIG9iamVjdFxuXHQgKi9cblx0XG5cdHZhciBUeXBlZCA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gVHlwZWQoZWxlbWVudElkLCBvcHRpb25zKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHlwZWQpO1xuXHRcblx0ICAgIC8vIEluaXRpYWxpemUgaXQgdXBcblx0ICAgIF9pbml0aWFsaXplckpzLmluaXRpYWxpemVyLmxvYWQodGhpcywgb3B0aW9ucywgZWxlbWVudElkKTtcblx0ICAgIC8vIEFsbCBzeXN0ZW1zIGdvIVxuXHQgICAgdGhpcy5iZWdpbigpO1xuXHQgIH1cblx0XG5cdCAgLyoqXG5cdCAgICogVG9nZ2xlIHN0YXJ0KCkgYW5kIHN0b3AoKSBvZiB0aGUgVHlwZWQgaW5zdGFuY2Vcblx0ICAgKiBAcHVibGljXG5cdCAgICovXG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhUeXBlZCwgW3tcblx0ICAgIGtleTogJ3RvZ2dsZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlKCkge1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA/IHRoaXMuc3RhcnQoKSA6IHRoaXMuc3RvcCgpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3RvcCB0eXBpbmcgLyBiYWNrc3BhY2luZyBhbmQgZW5hYmxlIGN1cnNvciBibGlua2luZ1xuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc3RvcCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcblx0ICAgICAgaWYgKHRoaXMudHlwaW5nQ29tcGxldGUpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID0gdHJ1ZTtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RvcCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFN0YXJ0IHR5cGluZyAvIGJhY2tzcGFjaW5nIGFmdGVyIGJlaW5nIHN0b3BwZWRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3N0YXJ0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcblx0ICAgICAgaWYgKHRoaXMudHlwaW5nQ29tcGxldGUpIHJldHVybjtcblx0ICAgICAgaWYgKCF0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA9IGZhbHNlO1xuXHQgICAgICBpZiAodGhpcy5wYXVzZS50eXBld3JpdGUpIHtcblx0ICAgICAgICB0aGlzLnR5cGV3cml0ZSh0aGlzLnBhdXNlLmN1clN0cmluZywgdGhpcy5wYXVzZS5jdXJTdHJQb3MpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuYmFja3NwYWNlKHRoaXMucGF1c2UuY3VyU3RyaW5nLCB0aGlzLnBhdXNlLmN1clN0clBvcyk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RhcnQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBEZXN0cm95IHRoaXMgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2Rlc3Ryb3knLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdCAgICAgIHRoaXMucmVzZXQoZmFsc2UpO1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25EZXN0cm95KHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogUmVzZXQgVHlwZWQgYW5kIG9wdGlvbmFsbHkgcmVzdGFydHNcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzdGFydFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVzZXQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuXHQgICAgICB2YXIgcmVzdGFydCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF07XG5cdFxuXHQgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZW91dCk7XG5cdCAgICAgIHRoaXMucmVwbGFjZVRleHQoJycpO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IgJiYgdGhpcy5jdXJzb3IucGFyZW50Tm9kZSkge1xuXHQgICAgICAgIHRoaXMuY3Vyc29yLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jdXJzb3IpO1xuXHQgICAgICAgIHRoaXMuY3Vyc29yID0gbnVsbDtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnN0clBvcyA9IDA7XG5cdCAgICAgIHRoaXMuYXJyYXlQb3MgPSAwO1xuXHQgICAgICB0aGlzLmN1ckxvb3AgPSAwO1xuXHQgICAgICBpZiAocmVzdGFydCkge1xuXHQgICAgICAgIHRoaXMuaW5zZXJ0Q3Vyc29yKCk7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zLm9uUmVzZXQodGhpcyk7XG5cdCAgICAgICAgdGhpcy5iZWdpbigpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCZWdpbnMgdGhlIHR5cGluZyBhbmltYXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiZWdpbicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmVnaW4oKSB7XG5cdCAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdFxuXHQgICAgICB0aGlzLm9wdGlvbnMub25CZWdpbih0aGlzKTtcblx0ICAgICAgdGhpcy50eXBpbmdDb21wbGV0ZSA9IGZhbHNlO1xuXHQgICAgICB0aGlzLnNodWZmbGVTdHJpbmdzSWZOZWVkZWQodGhpcyk7XG5cdCAgICAgIHRoaXMuaW5zZXJ0Q3Vyc29yKCk7XG5cdCAgICAgIGlmICh0aGlzLmJpbmRJbnB1dEZvY3VzRXZlbnRzKSB0aGlzLmJpbmRGb2N1c0V2ZW50cygpO1xuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBzb21lIHRleHQgaW4gdGhlIGVsZW1lbnQsIGlmIHllcyBzdGFydCBieSBiYWNrc3BhY2luZyB0aGUgZGVmYXVsdCBtZXNzYWdlXG5cdCAgICAgICAgaWYgKCFfdGhpcy5jdXJyZW50RWxDb250ZW50IHx8IF90aGlzLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgICBfdGhpcy50eXBld3JpdGUoX3RoaXMuc3RyaW5nc1tfdGhpcy5zZXF1ZW5jZVtfdGhpcy5hcnJheVBvc11dLCBfdGhpcy5zdHJQb3MpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAvLyBTdGFydCB0eXBpbmdcblx0ICAgICAgICAgIF90aGlzLmJhY2tzcGFjZShfdGhpcy5jdXJyZW50RWxDb250ZW50LCBfdGhpcy5jdXJyZW50RWxDb250ZW50Lmxlbmd0aCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9LCB0aGlzLnN0YXJ0RGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQ2FsbGVkIGZvciBlYWNoIGNoYXJhY3RlciB0eXBlZFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3R5cGV3cml0ZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdHlwZXdyaXRlKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKHRoaXMuZmFkZU91dCAmJiB0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmZhZGVPdXRDbGFzcykpIHtcblx0ICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5mYWRlT3V0Q2xhc3MpO1xuXHQgICAgICAgIGlmICh0aGlzLmN1cnNvcikgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcyk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBodW1hbml6ZSA9IHRoaXMuaHVtYW5pemVyKHRoaXMudHlwZVNwZWVkKTtcblx0ICAgICAgdmFyIG51bUNoYXJzID0gMTtcblx0XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cyA9PT0gdHJ1ZSkge1xuXHQgICAgICAgIHRoaXMuc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHRydWUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gY29udGFpbiB0eXBpbmcgZnVuY3Rpb24gaW4gYSB0aW1lb3V0IGh1bWFuaXplJ2QgZGVsYXlcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLy8gc2tpcCBvdmVyIGFueSBIVE1MIGNoYXJzXG5cdCAgICAgICAgY3VyU3RyUG9zID0gX2h0bWxQYXJzZXJKcy5odG1sUGFyc2VyLnR5cGVIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIF90aGlzMik7XG5cdFxuXHQgICAgICAgIHZhciBwYXVzZVRpbWUgPSAwO1xuXHQgICAgICAgIHZhciBzdWJzdHIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyk7XG5cdCAgICAgICAgLy8gY2hlY2sgZm9yIGFuIGVzY2FwZSBjaGFyYWN0ZXIgYmVmb3JlIGEgcGF1c2UgdmFsdWVcblx0ICAgICAgICAvLyBmb3JtYXQ6IFxcXlxcZCsgLi4gZWc6IF4xMDAwIC4uIHNob3VsZCBiZSBhYmxlIHRvIHByaW50IHRoZSBeIHRvbyB1c2luZyBeXlxuXHQgICAgICAgIC8vIHNpbmdsZSBeIGFyZSByZW1vdmVkIGZyb20gc3RyaW5nXG5cdCAgICAgICAgaWYgKHN1YnN0ci5jaGFyQXQoMCkgPT09ICdeJykge1xuXHQgICAgICAgICAgaWYgKC9eXFxeXFxkKy8udGVzdChzdWJzdHIpKSB7XG5cdCAgICAgICAgICAgIHZhciBza2lwID0gMTsgLy8gc2tpcCBhdCBsZWFzdCAxXG5cdCAgICAgICAgICAgIHN1YnN0ciA9IC9cXGQrLy5leGVjKHN1YnN0cilbMF07XG5cdCAgICAgICAgICAgIHNraXAgKz0gc3Vic3RyLmxlbmd0aDtcblx0ICAgICAgICAgICAgcGF1c2VUaW1lID0gcGFyc2VJbnQoc3Vic3RyKTtcblx0ICAgICAgICAgICAgX3RoaXMyLnRlbXBvcmFyeVBhdXNlID0gdHJ1ZTtcblx0ICAgICAgICAgICAgX3RoaXMyLm9wdGlvbnMub25UeXBpbmdQYXVzZWQoX3RoaXMyLmFycmF5UG9zLCBfdGhpczIpO1xuXHQgICAgICAgICAgICAvLyBzdHJpcCBvdXQgdGhlIGVzY2FwZSBjaGFyYWN0ZXIgYW5kIHBhdXNlIHZhbHVlIHNvIHRoZXkncmUgbm90IHByaW50ZWRcblx0ICAgICAgICAgICAgY3VyU3RyaW5nID0gY3VyU3RyaW5nLnN1YnN0cmluZygwLCBjdXJTdHJQb3MpICsgY3VyU3RyaW5nLnN1YnN0cmluZyhjdXJTdHJQb3MgKyBza2lwKTtcblx0ICAgICAgICAgICAgX3RoaXMyLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gY2hlY2sgZm9yIHNraXAgY2hhcmFjdGVycyBmb3JtYXR0ZWQgYXNcblx0ICAgICAgICAvLyBcInRoaXMgaXMgYSBgc3RyaW5nIHRvIHByaW50IE5PV2AgLi4uXCJcblx0ICAgICAgICBpZiAoc3Vic3RyLmNoYXJBdCgwKSA9PT0gJ2AnKSB7XG5cdCAgICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgKyBudW1DaGFycykuY2hhckF0KDApICE9PSAnYCcpIHtcblx0ICAgICAgICAgICAgbnVtQ2hhcnMrKztcblx0ICAgICAgICAgICAgaWYgKGN1clN0clBvcyArIG51bUNoYXJzID4gY3VyU3RyaW5nLmxlbmd0aCkgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICAvLyBzdHJpcCBvdXQgdGhlIGVzY2FwZSBjaGFyYWN0ZXJzIGFuZCBhcHBlbmQgYWxsIHRoZSBzdHJpbmcgaW4gYmV0d2VlblxuXHQgICAgICAgICAgdmFyIHN0cmluZ0JlZm9yZVNraXAgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKDAsIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB2YXIgc3RyaW5nU2tpcHBlZCA9IGN1clN0cmluZy5zdWJzdHJpbmcoc3RyaW5nQmVmb3JlU2tpcC5sZW5ndGggKyAxLCBjdXJTdHJQb3MgKyBudW1DaGFycyk7XG5cdCAgICAgICAgICB2YXIgc3RyaW5nQWZ0ZXJTa2lwID0gY3VyU3RyaW5nLnN1YnN0cmluZyhjdXJTdHJQb3MgKyBudW1DaGFycyArIDEpO1xuXHQgICAgICAgICAgY3VyU3RyaW5nID0gc3RyaW5nQmVmb3JlU2tpcCArIHN0cmluZ1NraXBwZWQgKyBzdHJpbmdBZnRlclNraXA7XG5cdCAgICAgICAgICBudW1DaGFycy0tO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gdGltZW91dCBmb3IgYW55IHBhdXNlIGFmdGVyIGEgY2hhcmFjdGVyXG5cdCAgICAgICAgX3RoaXMyLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgIC8vIEFjY291bnRzIGZvciBibGlua2luZyB3aGlsZSBwYXVzZWRcblx0ICAgICAgICAgIF90aGlzMi50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdFxuXHQgICAgICAgICAgLy8gV2UncmUgZG9uZSB3aXRoIHRoaXMgc2VudGVuY2UhXG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zID49IGN1clN0cmluZy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgX3RoaXMyLmRvbmVUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXMyLmtlZXBUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIG51bUNoYXJzKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIC8vIGVuZCBvZiBjaGFyYWN0ZXIgcGF1c2Vcblx0ICAgICAgICAgIGlmIChfdGhpczIudGVtcG9yYXJ5UGF1c2UpIHtcblx0ICAgICAgICAgICAgX3RoaXMyLnRlbXBvcmFyeVBhdXNlID0gZmFsc2U7XG5cdCAgICAgICAgICAgIF90aGlzMi5vcHRpb25zLm9uVHlwaW5nUmVzdW1lZChfdGhpczIuYXJyYXlQb3MsIF90aGlzMik7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSwgcGF1c2VUaW1lKTtcblx0XG5cdCAgICAgICAgLy8gaHVtYW5pemVkIHZhbHVlIGZvciB0eXBpbmdcblx0ICAgICAgfSwgaHVtYW5pemUpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQ29udGludWUgdG8gdGhlIG5leHQgc3RyaW5nICYgYmVnaW4gdHlwaW5nXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAna2VlcFR5cGluZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24ga2VlcFR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcywgbnVtQ2hhcnMpIHtcblx0ICAgICAgLy8gY2FsbCBiZWZvcmUgZnVuY3Rpb25zIGlmIGFwcGxpY2FibGVcblx0ICAgICAgaWYgKGN1clN0clBvcyA9PT0gMCkge1xuXHQgICAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucy5wcmVTdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgICAgfVxuXHQgICAgICAvLyBzdGFydCB0eXBpbmcgZWFjaCBuZXcgY2hhciBpbnRvIGV4aXN0aW5nIHN0cmluZ1xuXHQgICAgICAvLyBjdXJTdHJpbmc6IGFyZywgdGhpcy5lbC5odG1sOiBvcmlnaW5hbCB0ZXh0IGluc2lkZSBlbGVtZW50XG5cdCAgICAgIGN1clN0clBvcyArPSBudW1DaGFycztcblx0ICAgICAgdmFyIG5leHRTdHJpbmcgPSBjdXJTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcyk7XG5cdCAgICAgIHRoaXMucmVwbGFjZVRleHQobmV4dFN0cmluZyk7XG5cdCAgICAgIC8vIGxvb3AgdGhlIGZ1bmN0aW9uXG5cdCAgICAgIHRoaXMudHlwZXdyaXRlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFdlJ3JlIGRvbmUgdHlwaW5nIHRoZSBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2RvbmVUeXBpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRvbmVUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cdFxuXHQgICAgICAvLyBmaXJlcyBjYWxsYmFjayBmdW5jdGlvblxuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgLy8gaXMgdGhpcyB0aGUgZmluYWwgc3RyaW5nXG5cdCAgICAgIGlmICh0aGlzLmFycmF5UG9zID09PSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMSkge1xuXHQgICAgICAgIC8vIGNhbGxiYWNrIHRoYXQgb2NjdXJzIG9uIHRoZSBsYXN0IHR5cGVkIHN0cmluZ1xuXHQgICAgICAgIHRoaXMuY29tcGxldGUoKTtcblx0ICAgICAgICAvLyBxdWl0IGlmIHdlIHdvbnQgbG9vcCBiYWNrXG5cdCAgICAgICAgaWYgKHRoaXMubG9vcCA9PT0gZmFsc2UgfHwgdGhpcy5jdXJMb29wID09PSB0aGlzLmxvb3BDb3VudCkge1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBfdGhpczMuYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgfSwgdGhpcy5iYWNrRGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmFja3NwYWNlcyAxIGNoYXJhY3RlciBhdCBhIHRpbWVcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiYWNrc3BhY2UnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJhY2tzcGFjZShjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblx0XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cyA9PT0gdHJ1ZSkge1xuXHQgICAgICAgIHRoaXMuc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHRydWUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAodGhpcy5mYWRlT3V0KSByZXR1cm4gdGhpcy5pbml0RmFkZU91dCgpO1xuXHRcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdCAgICAgIHZhciBodW1hbml6ZSA9IHRoaXMuaHVtYW5pemVyKHRoaXMuYmFja1NwZWVkKTtcblx0XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGN1clN0clBvcyA9IF9odG1sUGFyc2VySnMuaHRtbFBhcnNlci5iYWNrU3BhY2VIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIF90aGlzNCk7XG5cdCAgICAgICAgLy8gcmVwbGFjZSB0ZXh0IHdpdGggYmFzZSB0ZXh0ICsgdHlwZWQgY2hhcmFjdGVyc1xuXHQgICAgICAgIHZhciBjdXJTdHJpbmdBdFBvc2l0aW9uID0gY3VyU3RyaW5nLnN1YnN0cigwLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgIF90aGlzNC5yZXBsYWNlVGV4dChjdXJTdHJpbmdBdFBvc2l0aW9uKTtcblx0XG5cdCAgICAgICAgLy8gaWYgc21hcnRCYWNrIGlzIGVuYWJsZWRcblx0ICAgICAgICBpZiAoX3RoaXM0LnNtYXJ0QmFja3NwYWNlKSB7XG5cdCAgICAgICAgICAvLyB0aGUgcmVtYWluaW5nIHBhcnQgb2YgdGhlIGN1cnJlbnQgc3RyaW5nIGlzIGVxdWFsIG9mIHRoZSBzYW1lIHBhcnQgb2YgdGhlIG5ldyBzdHJpbmdcblx0ICAgICAgICAgIHZhciBuZXh0U3RyaW5nID0gX3RoaXM0LnN0cmluZ3NbX3RoaXM0LmFycmF5UG9zICsgMV07XG5cdCAgICAgICAgICBpZiAobmV4dFN0cmluZyAmJiBjdXJTdHJpbmdBdFBvc2l0aW9uID09PSBuZXh0U3RyaW5nLnN1YnN0cigwLCBjdXJTdHJQb3MpKSB7XG5cdCAgICAgICAgICAgIF90aGlzNC5zdG9wTnVtID0gY3VyU3RyUG9zO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnN0b3BOdW0gPSAwO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gaWYgdGhlIG51bWJlciAoaWQgb2YgY2hhcmFjdGVyIGluIGN1cnJlbnQgc3RyaW5nKSBpc1xuXHQgICAgICAgIC8vIGxlc3MgdGhhbiB0aGUgc3RvcCBudW1iZXIsIGtlZXAgZ29pbmdcblx0ICAgICAgICBpZiAoY3VyU3RyUG9zID4gX3RoaXM0LnN0b3BOdW0pIHtcblx0ICAgICAgICAgIC8vIHN1YnRyYWN0IGNoYXJhY3RlcnMgb25lIGJ5IG9uZVxuXHQgICAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgICAgICAvLyBsb29wIHRoZSBmdW5jdGlvblxuXHQgICAgICAgICAgX3RoaXM0LmJhY2tzcGFjZShjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICAgICAgfSBlbHNlIGlmIChjdXJTdHJQb3MgPD0gX3RoaXM0LnN0b3BOdW0pIHtcblx0ICAgICAgICAgIC8vIGlmIHRoZSBzdG9wIG51bWJlciBoYXMgYmVlbiByZWFjaGVkLCBpbmNyZWFzZVxuXHQgICAgICAgICAgLy8gYXJyYXkgcG9zaXRpb24gdG8gbmV4dCBzdHJpbmdcblx0ICAgICAgICAgIF90aGlzNC5hcnJheVBvcysrO1xuXHQgICAgICAgICAgLy8gV2hlbiBsb29waW5nLCBiZWdpbiBhdCB0aGUgYmVnaW5uaW5nIGFmdGVyIGJhY2tzcGFjZSBjb21wbGV0ZVxuXHQgICAgICAgICAgaWYgKF90aGlzNC5hcnJheVBvcyA9PT0gX3RoaXM0LnN0cmluZ3MubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIF90aGlzNC5hcnJheVBvcyA9IDA7XG5cdCAgICAgICAgICAgIF90aGlzNC5vcHRpb25zLm9uTGFzdFN0cmluZ0JhY2tzcGFjZWQoKTtcblx0ICAgICAgICAgICAgX3RoaXM0LnNodWZmbGVTdHJpbmdzSWZOZWVkZWQoKTtcblx0ICAgICAgICAgICAgX3RoaXM0LmJlZ2luKCk7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczQudHlwZXdyaXRlKF90aGlzNC5zdHJpbmdzW190aGlzNC5zZXF1ZW5jZVtfdGhpczQuYXJyYXlQb3NdXSwgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgLy8gaHVtYW5pemVkIHZhbHVlIGZvciB0eXBpbmdcblx0ICAgICAgfSwgaHVtYW5pemUpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogRnVsbCBhbmltYXRpb24gaXMgY29tcGxldGVcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdjb21wbGV0ZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vbkNvbXBsZXRlKHRoaXMpO1xuXHQgICAgICBpZiAodGhpcy5sb29wKSB7XG5cdCAgICAgICAgdGhpcy5jdXJMb29wKys7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy50eXBpbmdDb21wbGV0ZSA9IHRydWU7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEhhcyB0aGUgdHlwaW5nIGJlZW4gc3RvcHBlZFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtib29sZWFufSBpc1R5cGluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3NldFBhdXNlU3RhdHVzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgaXNUeXBpbmcpIHtcblx0ICAgICAgdGhpcy5wYXVzZS50eXBld3JpdGUgPSBpc1R5cGluZztcblx0ICAgICAgdGhpcy5wYXVzZS5jdXJTdHJpbmcgPSBjdXJTdHJpbmc7XG5cdCAgICAgIHRoaXMucGF1c2UuY3VyU3RyUG9zID0gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogVG9nZ2xlIHRoZSBibGlua2luZyBjdXJzb3Jcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNCbGlua2luZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3RvZ2dsZUJsaW5raW5nJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGVCbGlua2luZyhpc0JsaW5raW5nKSB7XG5cdCAgICAgIGlmICghdGhpcy5jdXJzb3IpIHJldHVybjtcblx0ICAgICAgLy8gaWYgaW4gcGF1c2VkIHN0YXRlLCBkb24ndCB0b2dnbGUgYmxpbmtpbmcgYSAybmQgdGltZVxuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yQmxpbmtpbmcgPT09IGlzQmxpbmtpbmcpIHJldHVybjtcblx0ICAgICAgdGhpcy5jdXJzb3JCbGlua2luZyA9IGlzQmxpbmtpbmc7XG5cdCAgICAgIGlmIChpc0JsaW5raW5nKSB7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZCgndHlwZWQtY3Vyc29yLS1ibGluaycpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUoJ3R5cGVkLWN1cnNvci0tYmxpbmsnKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3BlZWQgaW4gTVMgdG8gdHlwZVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaHVtYW5pemVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBodW1hbml6ZXIoc3BlZWQpIHtcblx0ICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHNwZWVkIC8gMikgKyBzcGVlZDtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFNodWZmbGUgdGhlIHNlcXVlbmNlIG9mIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCgpIHtcblx0ICAgICAgaWYgKCF0aGlzLnNodWZmbGUpIHJldHVybjtcblx0ICAgICAgdGhpcy5zZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2Uuc29ydChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgLSAwLjU7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQWRkcyBhIENTUyBjbGFzcyB0byBmYWRlIG91dCBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2luaXRGYWRlT3V0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0RmFkZU91dCgpIHtcblx0ICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cdFxuXHQgICAgICB0aGlzLmVsLmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmZhZGVPdXRDbGFzcztcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yKSB0aGlzLmN1cnNvci5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBfdGhpczUuYXJyYXlQb3MrKztcblx0ICAgICAgICBfdGhpczUucmVwbGFjZVRleHQoJycpO1xuXHRcblx0ICAgICAgICAvLyBSZXNldHMgY3VycmVudCBzdHJpbmcgaWYgZW5kIG9mIGxvb3AgcmVhY2hlZFxuXHQgICAgICAgIGlmIChfdGhpczUuc3RyaW5ncy5sZW5ndGggPiBfdGhpczUuYXJyYXlQb3MpIHtcblx0ICAgICAgICAgIF90aGlzNS50eXBld3JpdGUoX3RoaXM1LnN0cmluZ3NbX3RoaXM1LnNlcXVlbmNlW190aGlzNS5hcnJheVBvc11dLCAwKTtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgX3RoaXM1LnR5cGV3cml0ZShfdGhpczUuc3RyaW5nc1swXSwgMCk7XG5cdCAgICAgICAgICBfdGhpczUuYXJyYXlQb3MgPSAwO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSwgdGhpcy5mYWRlT3V0RGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogUmVwbGFjZXMgY3VycmVudCB0ZXh0IGluIHRoZSBIVE1MIGVsZW1lbnRcblx0ICAgICAqIGRlcGVuZGluZyBvbiBlbGVtZW50IHR5cGVcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZXBsYWNlVGV4dCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZVRleHQoc3RyKSB7XG5cdCAgICAgIGlmICh0aGlzLmF0dHIpIHtcblx0ICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSh0aGlzLmF0dHIsIHN0cik7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgaWYgKHRoaXMuaXNJbnB1dCkge1xuXHQgICAgICAgICAgdGhpcy5lbC52YWx1ZSA9IHN0cjtcblx0ICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29udGVudFR5cGUgPT09ICdodG1sJykge1xuXHQgICAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSBzdHI7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHRoaXMuZWwudGV4dENvbnRlbnQgPSBzdHI7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBJZiB1c2luZyBpbnB1dCBlbGVtZW50cywgYmluZCBmb2N1cyBpbiBvcmRlciB0b1xuXHQgICAgICogc3RhcnQgYW5kIHN0b3AgdGhlIGFuaW1hdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JpbmRGb2N1c0V2ZW50cycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEZvY3VzRXZlbnRzKCkge1xuXHQgICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblx0XG5cdCAgICAgIGlmICghdGhpcy5pc0lucHV0KSByZXR1cm47XG5cdCAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgICAgIF90aGlzNi5zdG9wKCk7XG5cdCAgICAgIH0pO1xuXHQgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoZSkge1xuXHQgICAgICAgIGlmIChfdGhpczYuZWwudmFsdWUgJiYgX3RoaXM2LmVsLnZhbHVlLmxlbmd0aCAhPT0gMCkge1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBfdGhpczYuc3RhcnQoKTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBPbiBpbml0LCBpbnNlcnQgdGhlIGN1cnNvciBlbGVtZW50XG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaW5zZXJ0Q3Vyc29yJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBpbnNlcnRDdXJzb3IoKSB7XG5cdCAgICAgIGlmICghdGhpcy5zaG93Q3Vyc29yKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvcikgcmV0dXJuO1xuXHQgICAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0ICAgICAgdGhpcy5jdXJzb3IuY2xhc3NOYW1lID0gJ3R5cGVkLWN1cnNvcic7XG5cdCAgICAgIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IHRoaXMuY3Vyc29yQ2hhcjtcblx0ICAgICAgdGhpcy5lbC5wYXJlbnROb2RlICYmIHRoaXMuZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jdXJzb3IsIHRoaXMuZWwubmV4dFNpYmxpbmcpO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIFR5cGVkO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gVHlwZWQ7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIF9kZWZhdWx0c0pzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdHZhciBfZGVmYXVsdHNKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0c0pzKTtcblx0XG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHRoZSBUeXBlZCBvYmplY3Rcblx0ICovXG5cdFxuXHR2YXIgSW5pdGlhbGl6ZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIEluaXRpYWxpemVyKCkge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluaXRpYWxpemVyKTtcblx0ICB9XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhJbml0aWFsaXplciwgW3tcblx0ICAgIGtleTogJ2xvYWQnLFxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogTG9hZCB1cCBkZWZhdWx0cyAmIG9wdGlvbnMgb24gdGhlIFR5cGVkIGluc3RhbmNlXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBvcHRpb25zIG9iamVjdFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBIVE1MIGVsZW1lbnQgSUQgX09SXyBpbnN0YW5jZSBvZiBIVE1MIGVsZW1lbnRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0XG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZChzZWxmLCBvcHRpb25zLCBlbGVtZW50SWQpIHtcblx0ICAgICAgLy8gY2hvc2VuIGVsZW1lbnQgdG8gbWFuaXB1bGF0ZSB0ZXh0XG5cdCAgICAgIGlmICh0eXBlb2YgZWxlbWVudElkID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHNlbGYuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRJZCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc2VsZi5lbCA9IGVsZW1lbnRJZDtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgc2VsZi5vcHRpb25zID0gX2V4dGVuZHMoe30sIF9kZWZhdWx0c0pzMlsnZGVmYXVsdCddLCBvcHRpb25zKTtcblx0XG5cdCAgICAgIC8vIGF0dHJpYnV0ZSB0byB0eXBlIGludG9cblx0ICAgICAgc2VsZi5pc0lucHV0ID0gc2VsZi5lbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCc7XG5cdCAgICAgIHNlbGYuYXR0ciA9IHNlbGYub3B0aW9ucy5hdHRyO1xuXHQgICAgICBzZWxmLmJpbmRJbnB1dEZvY3VzRXZlbnRzID0gc2VsZi5vcHRpb25zLmJpbmRJbnB1dEZvY3VzRXZlbnRzO1xuXHRcblx0ICAgICAgLy8gc2hvdyBjdXJzb3Jcblx0ICAgICAgc2VsZi5zaG93Q3Vyc29yID0gc2VsZi5pc0lucHV0ID8gZmFsc2UgOiBzZWxmLm9wdGlvbnMuc2hvd0N1cnNvcjtcblx0XG5cdCAgICAgIC8vIGN1c3RvbSBjdXJzb3Jcblx0ICAgICAgc2VsZi5jdXJzb3JDaGFyID0gc2VsZi5vcHRpb25zLmN1cnNvckNoYXI7XG5cdFxuXHQgICAgICAvLyBJcyB0aGUgY3Vyc29yIGJsaW5raW5nXG5cdCAgICAgIHNlbGYuY3Vyc29yQmxpbmtpbmcgPSB0cnVlO1xuXHRcblx0ICAgICAgLy8gdGV4dCBjb250ZW50IG9mIGVsZW1lbnRcblx0ICAgICAgc2VsZi5lbENvbnRlbnQgPSBzZWxmLmF0dHIgPyBzZWxmLmVsLmdldEF0dHJpYnV0ZShzZWxmLmF0dHIpIDogc2VsZi5lbC50ZXh0Q29udGVudDtcblx0XG5cdCAgICAgIC8vIGh0bWwgb3IgcGxhaW4gdGV4dFxuXHQgICAgICBzZWxmLmNvbnRlbnRUeXBlID0gc2VsZi5vcHRpb25zLmNvbnRlbnRUeXBlO1xuXHRcblx0ICAgICAgLy8gdHlwaW5nIHNwZWVkXG5cdCAgICAgIHNlbGYudHlwZVNwZWVkID0gc2VsZi5vcHRpb25zLnR5cGVTcGVlZDtcblx0XG5cdCAgICAgIC8vIGFkZCBhIGRlbGF5IGJlZm9yZSB0eXBpbmcgc3RhcnRzXG5cdCAgICAgIHNlbGYuc3RhcnREZWxheSA9IHNlbGYub3B0aW9ucy5zdGFydERlbGF5O1xuXHRcblx0ICAgICAgLy8gYmFja3NwYWNpbmcgc3BlZWRcblx0ICAgICAgc2VsZi5iYWNrU3BlZWQgPSBzZWxmLm9wdGlvbnMuYmFja1NwZWVkO1xuXHRcblx0ICAgICAgLy8gb25seSBiYWNrc3BhY2Ugd2hhdCBkb2Vzbid0IG1hdGNoIHRoZSBwcmV2aW91cyBzdHJpbmdcblx0ICAgICAgc2VsZi5zbWFydEJhY2tzcGFjZSA9IHNlbGYub3B0aW9ucy5zbWFydEJhY2tzcGFjZTtcblx0XG5cdCAgICAgIC8vIGFtb3VudCBvZiB0aW1lIHRvIHdhaXQgYmVmb3JlIGJhY2tzcGFjaW5nXG5cdCAgICAgIHNlbGYuYmFja0RlbGF5ID0gc2VsZi5vcHRpb25zLmJhY2tEZWxheTtcblx0XG5cdCAgICAgIC8vIEZhZGUgb3V0IGluc3RlYWQgb2YgYmFja3NwYWNlXG5cdCAgICAgIHNlbGYuZmFkZU91dCA9IHNlbGYub3B0aW9ucy5mYWRlT3V0O1xuXHQgICAgICBzZWxmLmZhZGVPdXRDbGFzcyA9IHNlbGYub3B0aW9ucy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIHNlbGYuZmFkZU91dERlbGF5ID0gc2VsZi5vcHRpb25zLmZhZGVPdXREZWxheTtcblx0XG5cdCAgICAgIC8vIHZhcmlhYmxlIHRvIGNoZWNrIHdoZXRoZXIgdHlwaW5nIGlzIGN1cnJlbnRseSBwYXVzZWRcblx0ICAgICAgc2VsZi5pc1BhdXNlZCA9IGZhbHNlO1xuXHRcblx0ICAgICAgLy8gaW5wdXQgc3RyaW5ncyBvZiB0ZXh0XG5cdCAgICAgIHNlbGYuc3RyaW5ncyA9IHNlbGYub3B0aW9ucy5zdHJpbmdzLm1hcChmdW5jdGlvbiAocykge1xuXHQgICAgICAgIHJldHVybiBzLnRyaW0oKTtcblx0ICAgICAgfSk7XG5cdFxuXHQgICAgICAvLyBkaXYgY29udGFpbmluZyBzdHJpbmdzXG5cdCAgICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50ID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudCA9IHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudDtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgaWYgKHNlbGYuc3RyaW5nc0VsZW1lbnQpIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3MgPSBbXTtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgICAgICAgdmFyIHN0cmluZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoc2VsZi5zdHJpbmdzRWxlbWVudC5jaGlsZHJlbik7XG5cdCAgICAgICAgdmFyIHN0cmluZ3NMZW5ndGggPSBzdHJpbmdzLmxlbmd0aDtcblx0XG5cdCAgICAgICAgaWYgKHN0cmluZ3NMZW5ndGgpIHtcblx0ICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nc0xlbmd0aDsgaSArPSAxKSB7XG5cdCAgICAgICAgICAgIHZhciBzdHJpbmdFbCA9IHN0cmluZ3NbaV07XG5cdCAgICAgICAgICAgIHNlbGYuc3RyaW5ncy5wdXNoKHN0cmluZ0VsLmlubmVySFRNTC50cmltKCkpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gY2hhcmFjdGVyIG51bWJlciBwb3NpdGlvbiBvZiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICBzZWxmLnN0clBvcyA9IDA7XG5cdFxuXHQgICAgICAvLyBjdXJyZW50IGFycmF5IHBvc2l0aW9uXG5cdCAgICAgIHNlbGYuYXJyYXlQb3MgPSAwO1xuXHRcblx0ICAgICAgLy8gaW5kZXggb2Ygc3RyaW5nIHRvIHN0b3AgYmFja3NwYWNpbmcgb25cblx0ICAgICAgc2VsZi5zdG9wTnVtID0gMDtcblx0XG5cdCAgICAgIC8vIExvb3BpbmcgbG9naWNcblx0ICAgICAgc2VsZi5sb29wID0gc2VsZi5vcHRpb25zLmxvb3A7XG5cdCAgICAgIHNlbGYubG9vcENvdW50ID0gc2VsZi5vcHRpb25zLmxvb3BDb3VudDtcblx0ICAgICAgc2VsZi5jdXJMb29wID0gMDtcblx0XG5cdCAgICAgIC8vIHNodWZmbGUgdGhlIHN0cmluZ3Ncblx0ICAgICAgc2VsZi5zaHVmZmxlID0gc2VsZi5vcHRpb25zLnNodWZmbGU7XG5cdCAgICAgIC8vIHRoZSBvcmRlciBvZiBzdHJpbmdzXG5cdCAgICAgIHNlbGYuc2VxdWVuY2UgPSBbXTtcblx0XG5cdCAgICAgIHNlbGYucGF1c2UgPSB7XG5cdCAgICAgICAgc3RhdHVzOiBmYWxzZSxcblx0ICAgICAgICB0eXBld3JpdGU6IHRydWUsXG5cdCAgICAgICAgY3VyU3RyaW5nOiAnJyxcblx0ICAgICAgICBjdXJTdHJQb3M6IDBcblx0ICAgICAgfTtcblx0XG5cdCAgICAgIC8vIFdoZW4gdGhlIHR5cGluZyBpcyBjb21wbGV0ZSAod2hlbiBub3QgbG9vcGVkKVxuXHQgICAgICBzZWxmLnR5cGluZ0NvbXBsZXRlID0gZmFsc2U7XG5cdFxuXHQgICAgICAvLyBTZXQgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBzdHJpbmdzIGFyZSB0eXBlZFxuXHQgICAgICBmb3IgKHZhciBpIGluIHNlbGYuc3RyaW5ncykge1xuXHQgICAgICAgIHNlbGYuc2VxdWVuY2VbaV0gPSBpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBJZiB0aGVyZSBpcyBzb21lIHRleHQgaW4gdGhlIGVsZW1lbnRcblx0ICAgICAgc2VsZi5jdXJyZW50RWxDb250ZW50ID0gdGhpcy5nZXRDdXJyZW50RWxDb250ZW50KHNlbGYpO1xuXHRcblx0ICAgICAgc2VsZi5hdXRvSW5zZXJ0Q3NzID0gc2VsZi5vcHRpb25zLmF1dG9JbnNlcnRDc3M7XG5cdFxuXHQgICAgICB0aGlzLmFwcGVuZEFuaW1hdGlvbkNzcyhzZWxmKTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdnZXRDdXJyZW50RWxDb250ZW50Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50RWxDb250ZW50KHNlbGYpIHtcblx0ICAgICAgdmFyIGVsQ29udGVudCA9ICcnO1xuXHQgICAgICBpZiAoc2VsZi5hdHRyKSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoc2VsZi5hdHRyKTtcblx0ICAgICAgfSBlbHNlIGlmIChzZWxmLmlzSW5wdXQpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLnZhbHVlO1xuXHQgICAgICB9IGVsc2UgaWYgKHNlbGYuY29udGVudFR5cGUgPT09ICdodG1sJykge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwuaW5uZXJIVE1MO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwudGV4dENvbnRlbnQ7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGVsQ29udGVudDtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdhcHBlbmRBbmltYXRpb25Dc3MnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZEFuaW1hdGlvbkNzcyhzZWxmKSB7XG5cdCAgICAgIHZhciBjc3NEYXRhTmFtZSA9ICdkYXRhLXR5cGVkLWpzLWNzcyc7XG5cdCAgICAgIGlmICghc2VsZi5hdXRvSW5zZXJ0Q3NzKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICghc2VsZi5zaG93Q3Vyc29yICYmICFzZWxmLmZhZGVPdXQpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1snICsgY3NzRGF0YU5hbWUgKyAnXScpKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0ICAgICAgY3NzLnR5cGUgPSAndGV4dC9jc3MnO1xuXHQgICAgICBjc3Muc2V0QXR0cmlidXRlKGNzc0RhdGFOYW1lLCB0cnVlKTtcblx0XG5cdCAgICAgIHZhciBpbm5lckNzcyA9ICcnO1xuXHQgICAgICBpZiAoc2VsZi5zaG93Q3Vyc29yKSB7XG5cdCAgICAgICAgaW5uZXJDc3MgKz0gJ1xcbiAgICAgICAgLnR5cGVkLWN1cnNvcntcXG4gICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG4gICAgICAgIC50eXBlZC1jdXJzb3IudHlwZWQtY3Vyc29yLS1ibGlua3tcXG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICB9XFxuICAgICAgICBAa2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICB9XFxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICB9XFxuICAgICAgJztcblx0ICAgICAgfVxuXHQgICAgICBpZiAoc2VsZi5mYWRlT3V0KSB7XG5cdCAgICAgICAgaW5uZXJDc3MgKz0gJ1xcbiAgICAgICAgLnR5cGVkLWZhZGUtb3V0e1xcbiAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXM7XFxuICAgICAgICB9XFxuICAgICAgICAudHlwZWQtY3Vyc29yLnR5cGVkLWN1cnNvci0tYmxpbmsudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgICBhbmltYXRpb246IDA7XFxuICAgICAgICB9XFxuICAgICAgJztcblx0ICAgICAgfVxuXHQgICAgICBpZiAoY3NzLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBjc3MuaW5uZXJIVE1MID0gaW5uZXJDc3M7XG5cdCAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBJbml0aWFsaXplcjtcblx0fSkoKTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEluaXRpYWxpemVyO1xuXHR2YXIgaW5pdGlhbGl6ZXIgPSBuZXcgSW5pdGlhbGl6ZXIoKTtcblx0ZXhwb3J0cy5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogRGVmYXVsdHMgJiBvcHRpb25zXG5cdCAqIEByZXR1cm5zIHtvYmplY3R9IFR5cGVkIGRlZmF1bHRzICYgb3B0aW9uc1xuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHthcnJheX0gc3RyaW5ncyBzdHJpbmdzIHRvIGJlIHR5cGVkXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IHN0cmluZ3NFbGVtZW50IElEIG9mIGVsZW1lbnQgY29udGFpbmluZyBzdHJpbmcgY2hpbGRyZW5cblx0ICAgKi9cblx0ICBzdHJpbmdzOiBbJ1RoZXNlIGFyZSB0aGUgZGVmYXVsdCB2YWx1ZXMuLi4nLCAnWW91IGtub3cgd2hhdCB5b3Ugc2hvdWxkIGRvPycsICdVc2UgeW91ciBvd24hJywgJ0hhdmUgYSBncmVhdCBkYXkhJ10sXG5cdCAgc3RyaW5nc0VsZW1lbnQ6IG51bGwsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0eXBlU3BlZWQgdHlwZSBzcGVlZCBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICB0eXBlU3BlZWQ6IDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydERlbGF5IHRpbWUgYmVmb3JlIHR5cGluZyBzdGFydHMgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgc3RhcnREZWxheTogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJhY2tTcGVlZCBiYWNrc3BhY2luZyBzcGVlZCBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBiYWNrU3BlZWQ6IDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc21hcnRCYWNrc3BhY2Ugb25seSBiYWNrc3BhY2Ugd2hhdCBkb2Vzbid0IG1hdGNoIHRoZSBwcmV2aW91cyBzdHJpbmdcblx0ICAgKi9cblx0ICBzbWFydEJhY2tzcGFjZTogdHJ1ZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzaHVmZmxlIHNodWZmbGUgdGhlIHN0cmluZ3Ncblx0ICAgKi9cblx0ICBzaHVmZmxlOiBmYWxzZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJhY2tEZWxheSB0aW1lIGJlZm9yZSBiYWNrc3BhY2luZyBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBiYWNrRGVsYXk6IDcwMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBmYWRlT3V0IEZhZGUgb3V0IGluc3RlYWQgb2YgYmFja3NwYWNlXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGZhZGVPdXRDbGFzcyBjc3MgY2xhc3MgZm9yIGZhZGUgYW5pbWF0aW9uXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBmYWRlT3V0RGVsYXkgRmFkZSBvdXQgZGVsYXkgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgZmFkZU91dDogZmFsc2UsXG5cdCAgZmFkZU91dENsYXNzOiAndHlwZWQtZmFkZS1vdXQnLFxuXHQgIGZhZGVPdXREZWxheTogNTAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGxvb3AgbG9vcCBzdHJpbmdzXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IGxvb3BDb3VudCBhbW91bnQgb2YgbG9vcHNcblx0ICAgKi9cblx0ICBsb29wOiBmYWxzZSxcblx0ICBsb29wQ291bnQ6IEluZmluaXR5LFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNob3dDdXJzb3Igc2hvdyBjdXJzb3Jcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gY3Vyc29yQ2hhciBjaGFyYWN0ZXIgZm9yIGN1cnNvclxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYXV0b0luc2VydENzcyBpbnNlcnQgQ1NTIGZvciBjdXJzb3IgYW5kIGZhZGVPdXQgaW50byBIVE1MIDxoZWFkPlxuXHQgICAqL1xuXHQgIHNob3dDdXJzb3I6IHRydWUsXG5cdCAgY3Vyc29yQ2hhcjogJ3wnLFxuXHQgIGF1dG9JbnNlcnRDc3M6IHRydWUsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhdHRyIGF0dHJpYnV0ZSBmb3IgdHlwaW5nXG5cdCAgICogRXg6IGlucHV0IHBsYWNlaG9sZGVyLCB2YWx1ZSwgb3IganVzdCBIVE1MIHRleHRcblx0ICAgKi9cblx0ICBhdHRyOiBudWxsLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGJpbmRJbnB1dEZvY3VzRXZlbnRzIGJpbmQgdG8gZm9jdXMgYW5kIGJsdXIgaWYgZWwgaXMgdGV4dCBpbnB1dFxuXHQgICAqL1xuXHQgIGJpbmRJbnB1dEZvY3VzRXZlbnRzOiBmYWxzZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGNvbnRlbnRUeXBlICdodG1sJyBvciAnbnVsbCcgZm9yIHBsYWludGV4dFxuXHQgICAqL1xuXHQgIGNvbnRlbnRUeXBlOiAnaHRtbCcsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEJlZm9yZSBpdCBiZWdpbnMgdHlwaW5nXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uQmVnaW46IGZ1bmN0aW9uIG9uQmVnaW4oc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFsbCB0eXBpbmcgaXMgY29tcGxldGVcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZShzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQmVmb3JlIGVhY2ggc3RyaW5nIGlzIHR5cGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIHByZVN0cmluZ1R5cGVkOiBmdW5jdGlvbiBwcmVTdHJpbmdUeXBlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIGVhY2ggc3RyaW5nIGlzIHR5cGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RyaW5nVHlwZWQ6IGZ1bmN0aW9uIG9uU3RyaW5nVHlwZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBEdXJpbmcgbG9vcGluZywgYWZ0ZXIgbGFzdCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25MYXN0U3RyaW5nQmFja3NwYWNlZDogZnVuY3Rpb24gb25MYXN0U3RyaW5nQmFja3NwYWNlZChzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogVHlwaW5nIGhhcyBiZWVuIHN0b3BwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25UeXBpbmdQYXVzZWQ6IGZ1bmN0aW9uIG9uVHlwaW5nUGF1c2VkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogVHlwaW5nIGhhcyBiZWVuIHN0YXJ0ZWQgYWZ0ZXIgYmVpbmcgc3RvcHBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblR5cGluZ1Jlc3VtZWQ6IGZ1bmN0aW9uIG9uVHlwaW5nUmVzdW1lZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHJlc2V0XG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uUmVzZXQ6IGZ1bmN0aW9uIG9uUmVzZXQoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHN0b3Bcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdG9wOiBmdW5jdGlvbiBvblN0b3AoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBzdGFydFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0YXJ0OiBmdW5jdGlvbiBvblN0YXJ0KGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgZGVzdHJveVxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveShzZWxmKSB7fVxuXHR9O1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZGVmYXVsdHM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogVE9ETzogVGhlc2UgbWV0aG9kcyBjYW4gcHJvYmFibHkgYmUgY29tYmluZWQgc29tZWhvd1xuXHQgKiBQYXJzZSBIVE1MIHRhZ3MgJiBIVE1MIENoYXJhY3RlcnNcblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgSFRNTFBhcnNlciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gSFRNTFBhcnNlcigpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MUGFyc2VyKTtcblx0ICB9XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhIVE1MUGFyc2VyLCBbe1xuXHQgICAga2V5OiAndHlwZUh0bWxDaGFycycsXG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBUeXBlIEhUTUwgdGFncyAmIEhUTUwgQ2hhcmFjdGVyc1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyBDdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyBQb3NpdGlvbiBpbiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtUeXBlZH0gc2VsZiBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHJldHVybnMge251bWJlcn0gYSBuZXcgc3RyaW5nIHBvc2l0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHR5cGVIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHNlbGYpIHtcblx0ICAgICAgaWYgKHNlbGYuY29udGVudFR5cGUgIT09ICdodG1sJykgcmV0dXJuIGN1clN0clBvcztcblx0ICAgICAgdmFyIGN1ckNoYXIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcykuY2hhckF0KDApO1xuXHQgICAgICBpZiAoY3VyQ2hhciA9PT0gJzwnIHx8IGN1ckNoYXIgPT09ICcmJykge1xuXHQgICAgICAgIHZhciBlbmRUYWcgPSAnJztcblx0ICAgICAgICBpZiAoY3VyQ2hhciA9PT0gJzwnKSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnPic7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc7Jztcblx0ICAgICAgICB9XG5cdCAgICAgICAgd2hpbGUgKGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zICsgMSkuY2hhckF0KDApICE9PSBlbmRUYWcpIHtcblx0ICAgICAgICAgIGN1clN0clBvcysrO1xuXHQgICAgICAgICAgaWYgKGN1clN0clBvcyArIDEgPiBjdXJTdHJpbmcubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBjdXJTdHJQb3MrKztcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmFja3NwYWNlIEhUTUwgdGFncyBhbmQgSFRNTCBDaGFyYWN0ZXJzXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIEN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIFBvc2l0aW9uIGluIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBhIG5ldyBzdHJpbmcgcG9zaXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiYWNrU3BhY2VIdG1sQ2hhcnMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJhY2tTcGFjZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgc2VsZikge1xuXHQgICAgICBpZiAoc2VsZi5jb250ZW50VHlwZSAhPT0gJ2h0bWwnKSByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgICB2YXIgY3VyQ2hhciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKS5jaGFyQXQoMCk7XG5cdCAgICAgIGlmIChjdXJDaGFyID09PSAnPicgfHwgY3VyQ2hhciA9PT0gJzsnKSB7XG5cdCAgICAgICAgdmFyIGVuZFRhZyA9ICcnO1xuXHQgICAgICAgIGlmIChjdXJDaGFyID09PSAnPicpIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc8Jztcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZW5kVGFnID0gJyYnO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgLSAxKS5jaGFyQXQoMCkgIT09IGVuZFRhZykge1xuXHQgICAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zIDwgMCkge1xuXHQgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGN1clN0clBvcztcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBIVE1MUGFyc2VyO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gSFRNTFBhcnNlcjtcblx0dmFyIGh0bWxQYXJzZXIgPSBuZXcgSFRNTFBhcnNlcigpO1xuXHRleHBvcnRzLmh0bWxQYXJzZXIgPSBodG1sUGFyc2VyO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuOyIsIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQgVHlwZWQgZnJvbSAndHlwZWQuanMnO1xyXG5pbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcy9saWIvYW5pbWUuZXMuanMnO1xyXG5pbXBvcnQgZnVsbHBhZ2UgZnJvbSAnZnVsbHBhZ2UuanMnO1xyXG5cclxuaW1wb3J0ICcuL3Jlc2V0LmNzcyc7XHJcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuLy8gaW1wb3J0ICcuL2ZvbnRzL2ZvbnRzLmNzcydcclxuXHJcbmNvbnN0IGNvdmVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3ZlclRleHQnKTtcclxuY29uc3QgbXlTa2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXlTa2lsbHMnKTtcclxuY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jb250YWN0Jyk7XHJcbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwQmFja2dyb3VuZCcpO1xyXG5cclxuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uQ29udGFjdENsaWNrKTtcclxucG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblBvcHVwQmFja2dyb3VuZENsaWNrKVxyXG5cclxuaW5pdCgpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGluaXRUeXBlZFRleHQoKTtcclxuICAgIGluaXRQYWdlU2Nyb2xsKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQ29udGFjdENsaWNrKCkge1xyXG4gICAgc2hvd1BvcHVwKCk7XHJcbiAgICBwb3B1cEFuaW1lKDEpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gb25Qb3B1cEJhY2tncm91bmRDbGljayhlKSB7XHJcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwQmFja2dyb3VuZCcpKSB7XHJcbiAgICAgICAgcG9wdXBBbmltZSgwLCBoaWRlUG9wdXApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlUG9wdXAoKSB7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93UG9wdXAnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1BvcHVwKCkge1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnc2hvd1BvcHVwJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRUeXBlZFRleHQoKSB7XHJcbiAgICB2YXIgdHlwZWQgPSBuZXcgVHlwZWQoJy5tYWluVGV4dCcsIHtcclxuICAgICAgICBzdHJpbmdzOiBcclxuICAgICAgICBbJzxzcGFuIGNsYXNzPVwidGV4dFwiPiBIaSEgPC9zcGFuPiA8c3BhbiBjbGFzcz1cInRleHRcIj4gTXkgbmFtZSBpcyBEaW1hLiA8L3NwYW4+IDxzcGFuIGNsYXNzPVwidGV4dFwiPiBBbmQgSSBhbSBGcm9udGVuZCBkZXZlbG9wZXIuIDwvc3Bhbj4nXSxcclxuICAgICAgICB0eXBlU3BlZWQ6IDUwLFxyXG4gICAgICAgIHNob3dDdXJzb3I6IGZhbHNlXHJcbiAgICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGluaXRQYWdlU2Nyb2xsKCkge1xyXG4gICAgbmV3IGZ1bGxwYWdlKCcjZnVsbHBhZ2UnLCB7XHJcbiAgICAgICAgYXV0b1Njcm9sbGluZzogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRpb25Qb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICBmaXhlZEVsZW1lbnRzOiAnbmF2JyxcclxuICAgICAgICBhZnRlckxvYWQ6IGZ1bmN0aW9uKG9yaWdpbiwgZGVzdGluYXRpb24sIGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uaW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFuaW1lU2tpbGxzKDEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlc3RpbmF0aW9uLmluZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhbmltZVRlY2hub2xvZ2llcygxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZnVsbHBhZ2VfYXBpLnNldEFsbG93U2Nyb2xsaW5nKHRydWUpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYW5pbWVTa2lsbHMob3BhY2l0eSkge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICAgIHRhcmdldHM6IFsnLmZpcnN0RWwnLCAnLnNlY29uZEVsJywgJy50aGlyZEVsJ10sXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0RXhwbycsXHJcbiAgICAgICAgb3BhY2l0eTogb3BhY2l0eSxcclxuICAgICAgICB0cmFuc2xhdGVYOiAnMTg1JScsXHJcbiAgICAgICAgZGVsYXk6IGFuaW1lLnN0YWdnZXIoNTAwLCB7ZWFzaW5nOiAnZWFzZUluT3V0RXhwbyd9KSxcclxuICAgICAgICBkaXJlY3Rpb246ICdub3JtYWwnLFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwb3B1cEFuaW1lKG9wYWNpdHksIGNvbXBsZXRlRnVuY3Rpb24pIHtcclxuICAgIGFuaW1lKHtcclxuICAgICAgICB0YXJnZXRzOiBwb3B1cCxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRFeHBvJyxcclxuICAgICAgICBkaXJlY3Rpb246ICdub3JtYWwnLFxyXG4gICAgICAgIG9wYWNpdHk6IG9wYWNpdHksXHJcbiAgICAgICAgY29tcGxldGU6IGNvbXBsZXRlRnVuY3Rpb24sXHJcbiAgICB9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFuaW1lVGVjaG5vbG9naWVzKG9wYWNpdHkpIHtcclxuICAgIGFuaW1lKHtcclxuICAgICAgICB0YXJnZXRzOiBbJy50ZWNobm9sb2dpZXNMaXN0J10sXHJcbiAgICAgICAgd2lkdGg6ICc2MCUnLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dEV4cG8nLFxyXG4gICAgICAgIGRpcmVjdGlvbjogJ25vcm1hbCcsXHJcbiAgICAgICAgb3BhY2l0eTogb3BhY2l0eSxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=