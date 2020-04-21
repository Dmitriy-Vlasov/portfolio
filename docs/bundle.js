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
exports.push([module.i, "body {\r\n    font-family: 'Press Start 2P', cursive;\r\n}\r\n\r\n.section {\r\n    padding: 0 15px;\r\n}\r\n\r\n.section:nth-child(2n) {\r\n    background-color: #042E44;\r\n}\r\n\r\n.section:nth-child(2n + 1) {\r\n    background-color: white;\r\n}\r\n\r\nh2 {\r\n    color: #FA6622;\r\n    font-size: 30px;\r\n    margin-bottom: 80px;\r\n    text-align: center;\r\n}\r\n\r\nnav {\r\n    position: fixed;\r\n    top: 30px;\r\n    left: 0;\r\n    right: 0;\r\n    margin: 0 auto;\r\n    height: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 80%;\r\n}\r\n\r\n.navLink {\r\n    color: black;\r\n    margin-right: 5%;\r\n    display: block;\r\n    min-height: 40px;\r\n    min-width: 40px;\r\n    filter: grayscale(100%); \r\n    transition: all .4s;\r\n}\r\n\r\n.openMore {\r\n    font-size: 25px;\r\n}\r\n\r\n.github {\r\n    background: url(https://github.githubassets.com/images/modules/logos_page/Octocat.png) center/contain no-repeat; \r\n}\r\n\r\n.linkedin {\r\n    background: url(https://images.squarespace-cdn.com/content/v1/54bd36abe4b0ff9569953efa/1540973429405-3HY7G3IEYXXVGUI0CDO5/ke17ZwdGBToddI8pDm48kLXCf88_9uNTKXkq27cF4sB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmwbA6upbL5Bu97tJociXJklKprRMdH2Tl4F1PjaoPT3YUs5wkl5ojCV1O900UJ7ME/LinkedIn_logo_initials.png) center/contain no-repeat;\r\n}\r\n\r\n.telegram {\r\n    background: url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png) center/contain no-repeat;\r\n}\r\n\r\n.codewars {\r\n    background: url(https://miro.medium.com/max/1760/1*W-OZsYSFMIJg_M-bPHH0-w.png) center/cover no-repeat;\r\n}\r\n\r\n.contact {\r\n    background: url(https://s1.iconbird.com/ico/2013/12/518/w512h5121386956989Contacts01.png) center/cover no-repeat;\r\n    margin-left: 10%;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.contact:after {\r\n    content: 'my contacts';\r\n    position: absolute;\r\n    left: 60px;\r\n    font-size: 14px;\r\n    opacity: 0;\r\n    transition: all .6s;\r\n}\r\n\r\n.contact:hover:after {\r\n    opacity: 1;\r\n}\r\n\r\n.navLink:hover {\r\n    cursor: pointer;\r\n    filter: none;\r\n}\r\n\r\n.aboutMe {\r\n    padding: 60px;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.text {\r\n    display: block;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.mainText {\r\n    font-size: 25px;\r\n}\r\n\r\n.mySkills {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.skillTitle {\r\n    font-size: 30px;\r\n    margin-bottom: 60px;\r\n}\r\n\r\n.skillsItems {\r\n    margin: 0 auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 90%;\r\n}\r\n\r\n.skillItem {\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    opacity: 0;\r\n}\r\n\r\n.skillItem:nth-child(2) {\r\n    margin: 0 160px;\r\n}\r\n\r\n.skillIMG {\r\n    height: 80px;\r\n    width: 80px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.skillIMG.html {\r\n    background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png) center/contain no-repeat;\r\n}\r\n.skillIMG.css {\r\n    background: url(https://hsto.org/webt/et/vg/um/etvgumvdqz6_rs1dp3kjyjt-spm.png) center/contain no-repeat;\r\n}\r\n.skillIMG.javascript{\r\n    background: url(https://partner.biz.ua/images/blogi/206_1480059951_javascript-function-declaration-vs-function-expression.png) center/contain no-repeat;\r\n}\r\n\r\n.itemTitle {\r\n    font-size: 15px;\r\n}\r\n\r\n.skillLevel img {\r\n    height: 20px;\r\n}\r\n\r\n.itemTitle {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.nonActive {\r\n    filter: grayscale(100%); \r\n}\r\n\r\n.technologies {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.technologiesTitle {\r\n    margin-bottom: 80px;\r\n    text-align: center;\r\n}\r\n\r\n.technologiesList {\r\n    text-align: center;\r\n    column-count: 2;\r\n    width: 60%;\r\n    opacity: 0;\r\n}\r\n\r\n.technologiesItem {\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n}\r\n\r\n.technologiesItem:before {\r\n    content: \"\";\r\n    display: block;\r\n    height: 8px;\r\n    width: 8px;\r\n    background-color: #FA6622;\r\n    position: absolute;\r\n    left: 15%;\r\n    top: calc(50% - 4px);\r\n}\r\n\r\n.coverText {\r\n    font-size: 20px;\r\n    margin-top: 80px;\r\n    text-align: center;\r\n}\r\n\r\ndiv.fp-tooltip.fp-right {\r\n    color: #FA6622;\r\n}\r\n\r\n.certificate {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\nh2.certificatesTitle {\r\n    margin-bottom: 80px;\r\n}\r\n\r\n.certificatesItems {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    width: 90%;\r\n}\r\n\r\n.certificateItem {\r\n    display: block;\r\n    height: 350px;\r\n    width: 500px;\r\n    transition: all .4s;\r\n}\r\n\r\n.certificateItem:first-child {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.certificateItem:hover {\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n.hillelBasic {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center/contain no-repeat;\r\n}\r\n\r\n.hillelAdvanced {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center/contain no-repeat;\r\n}\r\n\r\n.contacts {\r\n    height: 100vh;\r\n    background-color: white;\r\n}\r\n\r\ndiv.fp-slidesNav {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ndiv.fp-slidesNav a.active span {\r\n    background-color: #FA6622;\r\n}\r\n\r\n.fp-controlArrow {\r\n    margin: 0 100px;\r\n}\r\n\r\n.popupBackground {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, .7);\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 999;\r\n}\r\n\r\n.popupBackground:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.showPopup {\r\n    display: flex;\r\n    opacity: 0;\r\n}\r\n\r\n.popupContact {\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    padding: 40px 30px;\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    cursor: default;\r\n    text-align: center;\r\n}\r\n\r\n.photo {\r\n    height: 300px;\r\n    width: 300px;\r\n    background-color: lightgrey;\r\n    margin-bottom: 30px;\r\n    background-color: #FA6622;\r\n    position: relative;\r\n}\r\n\r\n.photo:after {\r\n    content: \"\";\r\n    height: 300px;\r\n    width: 300px;\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 10px;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 100%/cover no-repeat;\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.profileItem {\r\n    margin-bottom: 20px;\r\n} \r\n\r\n.profileTitle {\r\n    font-weight: 900;\r\n    color: #FA6622;\r\n}\r\n\r\n@media (max-width: 1300px) {\r\n    .technologiesItem:before {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 1145px) {\r\n    .certificateItem {\r\n        height: 300px;\r\n        width: 430px;\r\n    }\r\n}\r\n\r\n@media (max-width: 985px) {\r\n\r\n    .certificate h2 {\r\n        margin-bottom: 40px;\r\n    }\r\n    .certificateItem {\r\n        height: 210px;\r\n        width: 300px;\r\n    }\r\n\r\n    .certificateItem.hillelAdvanced {\r\n        margin-bottom: 0;\r\n    }\r\n}\r\n\r\n@media (max-width: 940px) {\r\n\r\n    .skillItem:nth-child(2) {\r\n        margin: 10px 0;\r\n    }\r\n\r\n    .mySkills h2 {\r\n        margin-bottom: 40px;\r\n    }\r\n\r\n    .skillIMG {\r\n        height: 70px;\r\n        width: 70px;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .itemTitle {\r\n        font-size: 12px;\r\n    }\r\n\r\n    .skillLevel {\r\n        font-size: 5px;\r\n    }\r\n}\r\n\r\n@media (max-width: 940px) {\r\n    .technologiesList {\r\n        column-count: 1;\r\n        font-size: 15px;\r\n    }\r\n}\r\n\r\n@media (max-width: 715px) {\r\n    .popupContact {\r\n        font-size: 15px;\r\n        width: 100%;\r\n    }\r\n\r\n    .profileTitle {\r\n        display: block;\r\n        margin-bottom: 5px;\r\n    }\r\n}\r\n\r\n@media (max-width: 589px) {\r\n    .mainText {\r\n        font-size: 20px;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 20px;\r\n    }\r\n\r\n    .skillsItems {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .navLink {\r\n        height: 20px;\r\n        width: 20px;\r\n    }\r\n\r\n    .skillItem:nth-child(2) {\r\n        margin: 20px 0;\r\n    }\r\n\r\n    .skillLevel {\r\n        font-size: 2px;\r\n    }\r\n\r\n    .technologies h2 {\r\n        margin-bottom: 40px;\r\n    }\r\n\r\n    .technologiesList {\r\n        font-size: 15px;\r\n    }\r\n\r\n    .coverText {\r\n        font-size: 17px;\r\n        margin-top: 60px;\r\n    }\r\n}\r\n\r\n\r\n\r\n", ""]);
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
                animeSkills(1);
            } else if (destination.index === 2) {
                animeTechnologies(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW1nL0Zyb250RW5kQmFzaWMucG5nIiwid2VicGFjazovLy8uL2ltZy9Gcm9udEVuZFByby5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1nL0lNR180NzI0LkpQRyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW5pbWVqcy9saWIvYW5pbWUuZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuY3NzIiwid2VicGFjazovLy8uL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuY3NzPzMzOGUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90eXBlZC5qcy9saWIvdHlwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzZXQuY3NzP2VkZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFD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LENBQUMsd0lBQStDOztBQUVqRjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBMEM7QUFDbEQ7QUFDQSxRQUFRLG1DQUFRO0FBQ2hCO0FBQ0E7QUFDQSxTQUFTO0FBQUEsb0dBQUU7QUFDWCxLQUFLLE1BQU0sRUFNTjtBQUNMLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSwyREFBMkQsR0FBRzs7QUFFcEk7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsbUJBQW1CLFFBQVE7O0FBRWhFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQiwyQkFBMkI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGtFQUFrRTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxxQkFBcUI7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQix5QkFBeUI7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFLGlCQUFpQjtBQUNqQiwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQSwwQkFBMEIsS0FBSTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1QkFBdUI7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxRQUFRLEVBQUU7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvSkFBb0osUUFBUTs7QUFFNUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLE1BQUs7O0FBRTdCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFC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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIseUJBQXlCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwrQ0FBK0M7O0FBRXJFO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFNBQVM7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxxQkFBcUI7QUFDbkMsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsYUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0EsMEJBQTBCLGFBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQixjQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDOztBQUUvQztBQUNBO0FBQ0EsZ0RBQWdELGFBQWE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFVjtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFF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dHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NjkzYWQ0OTMwNDQ2YTE5YjAzM2ViMmJiYTQ4OWFlNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYWQ5ZjdiOWQwYTNlN2I5ZTM0Y2I5MGM4YTZkNDAyNjMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI0ZjBjOWFhMzM5NTU0NDJjY2ViN2NmMmQ3ZTc2ZTM1LkpQR1wiOyIsIi8qXG4gKiBhbmltZS5qcyB2My4xLjBcbiAqIChjKSAyMDE5IEp1bGlhbiBHYXJuaWVyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGFuaW1lanMuY29tXG4gKi9cblxuLy8gRGVmYXVsdHNcblxudmFyIGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzID0ge1xuICB1cGRhdGU6IG51bGwsXG4gIGJlZ2luOiBudWxsLFxuICBsb29wQmVnaW46IG51bGwsXG4gIGNoYW5nZUJlZ2luOiBudWxsLFxuICBjaGFuZ2U6IG51bGwsXG4gIGNoYW5nZUNvbXBsZXRlOiBudWxsLFxuICBsb29wQ29tcGxldGU6IG51bGwsXG4gIGNvbXBsZXRlOiBudWxsLFxuICBsb29wOiAxLFxuICBkaXJlY3Rpb246ICdub3JtYWwnLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgdGltZWxpbmVPZmZzZXQ6IDBcbn07XG5cbnZhciBkZWZhdWx0VHdlZW5TZXR0aW5ncyA9IHtcbiAgZHVyYXRpb246IDEwMDAsXG4gIGRlbGF5OiAwLFxuICBlbmREZWxheTogMCxcbiAgZWFzaW5nOiAnZWFzZU91dEVsYXN0aWMoMSwgLjUpJyxcbiAgcm91bmQ6IDBcbn07XG5cbnZhciB2YWxpZFRyYW5zZm9ybXMgPSBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICd0cmFuc2xhdGVaJywgJ3JvdGF0ZScsICdyb3RhdGVYJywgJ3JvdGF0ZVknLCAncm90YXRlWicsICdzY2FsZScsICdzY2FsZVgnLCAnc2NhbGVZJywgJ3NjYWxlWicsICdza2V3JywgJ3NrZXdYJywgJ3NrZXdZJywgJ3BlcnNwZWN0aXZlJ107XG5cbi8vIENhY2hpbmdcblxudmFyIGNhY2hlID0ge1xuICBDU1M6IHt9LFxuICBzcHJpbmdzOiB7fVxufTtcblxuLy8gVXRpbHNcblxuZnVuY3Rpb24gbWluTWF4KHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nQ29udGFpbnMoc3RyLCB0ZXh0KSB7XG4gIHJldHVybiBzdHIuaW5kZXhPZih0ZXh0KSA+IC0xO1xufVxuXG5mdW5jdGlvbiBhcHBseUFyZ3VtZW50cyhmdW5jLCBhcmdzKSB7XG4gIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xufVxuXG52YXIgaXMgPSB7XG4gIGFycjogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSk7IH0sXG4gIG9iajogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIHN0cmluZ0NvbnRhaW5zKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSwgJ09iamVjdCcpOyB9LFxuICBwdGg6IGZ1bmN0aW9uIChhKSB7IHJldHVybiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKTsgfSxcbiAgc3ZnOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7IH0sXG4gIGlucDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50OyB9LFxuICBkb206IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKTsgfSxcbiAgc3RyOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICdzdHJpbmcnOyB9LFxuICBmbmM6IGZ1bmN0aW9uIChhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJzsgfSxcbiAgdW5kOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnOyB9LFxuICBoZXg6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKTsgfSxcbiAgcmdiOiBmdW5jdGlvbiAoYSkgeyByZXR1cm4gL15yZ2IvLnRlc3QoYSk7IH0sXG4gIGhzbDogZnVuY3Rpb24gKGEpIHsgcmV0dXJuIC9eaHNsLy50ZXN0KGEpOyB9LFxuICBjb2w6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAoaXMuaGV4KGEpIHx8IGlzLnJnYihhKSB8fCBpcy5oc2woYSkpOyB9LFxuICBrZXk6IGZ1bmN0aW9uIChhKSB7IHJldHVybiAhZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgIWRlZmF1bHRUd2VlblNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmIGEgIT09ICd0YXJnZXRzJyAmJiBhICE9PSAna2V5ZnJhbWVzJzsgfVxufTtcblxuLy8gRWFzaW5nc1xuXG5mdW5jdGlvbiBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoc3RyaW5nKSB7XG4gIHZhciBtYXRjaCA9IC9cXCgoW14pXSspXFwpLy5leGVjKHN0cmluZyk7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwYXJzZUZsb2F0KHApOyB9KSA6IFtdO1xufVxuXG4vLyBTcHJpbmcgc29sdmVyIGluc3BpcmVkIGJ5IFdlYmtpdCBDb3B5cmlnaHQgwqkgMjAxNiBBcHBsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIGh0dHBzOi8vd2Via2l0Lm9yZy9kZW1vcy9zcHJpbmcvc3ByaW5nLmpzXG5cbmZ1bmN0aW9uIHNwcmluZyhzdHJpbmcsIGR1cmF0aW9uKSB7XG5cbiAgdmFyIHBhcmFtcyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpO1xuICB2YXIgbWFzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzBdKSA/IDEgOiBwYXJhbXNbMF0sIC4xLCAxMDApO1xuICB2YXIgc3RpZmZuZXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMV0pID8gMTAwIDogcGFyYW1zWzFdLCAuMSwgMTAwKTtcbiAgdmFyIGRhbXBpbmcgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1syXSkgPyAxMCA6IHBhcmFtc1syXSwgLjEsIDEwMCk7XG4gIHZhciB2ZWxvY2l0eSA9ICBtaW5NYXgoaXMudW5kKHBhcmFtc1szXSkgPyAwIDogcGFyYW1zWzNdLCAuMSwgMTAwKTtcbiAgdmFyIHcwID0gTWF0aC5zcXJ0KHN0aWZmbmVzcyAvIG1hc3MpO1xuICB2YXIgemV0YSA9IGRhbXBpbmcgLyAoMiAqIE1hdGguc3FydChzdGlmZm5lc3MgKiBtYXNzKSk7XG4gIHZhciB3ZCA9IHpldGEgPCAxID8gdzAgKiBNYXRoLnNxcnQoMSAtIHpldGEgKiB6ZXRhKSA6IDA7XG4gIHZhciBhID0gMTtcbiAgdmFyIGIgPSB6ZXRhIDwgMSA/ICh6ZXRhICogdzAgKyAtdmVsb2NpdHkpIC8gd2QgOiAtdmVsb2NpdHkgKyB3MDtcblxuICBmdW5jdGlvbiBzb2x2ZXIodCkge1xuICAgIHZhciBwcm9ncmVzcyA9IGR1cmF0aW9uID8gKGR1cmF0aW9uICogdCkgLyAxMDAwIDogdDtcbiAgICBpZiAoemV0YSA8IDEpIHtcbiAgICAgIHByb2dyZXNzID0gTWF0aC5leHAoLXByb2dyZXNzICogemV0YSAqIHcwKSAqIChhICogTWF0aC5jb3Mod2QgKiBwcm9ncmVzcykgKyBiICogTWF0aC5zaW4od2QgKiBwcm9ncmVzcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9ncmVzcyA9IChhICsgYiAqIHByb2dyZXNzKSAqIE1hdGguZXhwKC1wcm9ncmVzcyAqIHcwKTtcbiAgICB9XG4gICAgaWYgKHQgPT09IDAgfHwgdCA9PT0gMSkgeyByZXR1cm4gdDsgfVxuICAgIHJldHVybiAxIC0gcHJvZ3Jlc3M7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICB2YXIgY2FjaGVkID0gY2FjaGUuc3ByaW5nc1tzdHJpbmddO1xuICAgIGlmIChjYWNoZWQpIHsgcmV0dXJuIGNhY2hlZDsgfVxuICAgIHZhciBmcmFtZSA9IDEvNjtcbiAgICB2YXIgZWxhcHNlZCA9IDA7XG4gICAgdmFyIHJlc3QgPSAwO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIGVsYXBzZWQgKz0gZnJhbWU7XG4gICAgICBpZiAoc29sdmVyKGVsYXBzZWQpID09PSAxKSB7XG4gICAgICAgIHJlc3QrKztcbiAgICAgICAgaWYgKHJlc3QgPj0gMTYpIHsgYnJlYWs7IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3QgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZHVyYXRpb24gPSBlbGFwc2VkICogZnJhbWUgKiAxMDAwO1xuICAgIGNhY2hlLnNwcmluZ3Nbc3RyaW5nXSA9IGR1cmF0aW9uO1xuICAgIHJldHVybiBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiBkdXJhdGlvbiA/IHNvbHZlciA6IGdldER1cmF0aW9uO1xuXG59XG5cbi8vIEJhc2ljIHN0ZXBzIGVhc2luZyBpbXBsZW1lbnRhdGlvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cblxuZnVuY3Rpb24gc3RlcHMoc3RlcHMpIHtcbiAgaWYgKCBzdGVwcyA9PT0gdm9pZCAwICkgc3RlcHMgPSAxMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIE1hdGgucm91bmQodCAqIHN0ZXBzKSAqICgxIC8gc3RlcHMpOyB9O1xufVxuXG4vLyBCZXppZXJFYXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXG5cbnZhciBiZXppZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gIHZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XG4gIHZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XG5cbiAgZnVuY3Rpb24gQShhQTEsIGFBMikgeyByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExIH1cbiAgZnVuY3Rpb24gQihhQTEsIGFBMikgeyByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExIH1cbiAgZnVuY3Rpb24gQyhhQTEpICAgICAgeyByZXR1cm4gMy4wICogYUExIH1cblxuICBmdW5jdGlvbiBjYWxjQmV6aWVyKGFULCBhQTEsIGFBMikgeyByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQgfVxuICBmdW5jdGlvbiBnZXRTbG9wZShhVCwgYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSkgfVxuXG4gIGZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZShhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xuICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICAgIGRvIHtcbiAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7IGFCID0gY3VycmVudFQ7IH0gZWxzZSB7IGFBID0gY3VycmVudFQ7IH1cbiAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiAwLjAwMDAwMDEgJiYgKytpIDwgMTApO1xuICAgIHJldHVybiBjdXJyZW50VDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XG4gICAgICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7IHJldHVybiBhR3Vlc3NUOyB9XG4gICAgICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICB9XG4gICAgcmV0dXJuIGFHdWVzc1Q7XG4gIH1cblxuICBmdW5jdGlvbiBiZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG5cbiAgICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHsgcmV0dXJuOyB9XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XG5cbiAgICBpZiAobVgxICE9PSBtWTEgfHwgbVgyICE9PSBtWTIpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XG4gICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRGb3JYKGFYKSB7XG5cbiAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMDtcbiAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG5cbiAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgICAgfVxuXG4gICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgIHZhciBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcblxuICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSAwLjAwMSkge1xuICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHsgcmV0dXJuIHg7IH1cbiAgICAgIGlmICh4ID09PSAwIHx8IHggPT09IDEpIHsgcmV0dXJuIHg7IH1cbiAgICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XG4gICAgfVxuXG4gIH1cblxuICByZXR1cm4gYmV6aWVyO1xuXG59KSgpO1xuXG52YXIgcGVubmVyID0gKGZ1bmN0aW9uICgpIHtcblxuICAvLyBCYXNlZCBvbiBqUXVlcnkgVUkncyBpbXBsZW1lbmF0aW9uIG9mIGVhc2luZyBlcXVhdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyIChodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nKVxuXG4gIHZhciBlYXNlcyA9IHsgbGluZWFyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTsgfSB9O1xuXG4gIHZhciBmdW5jdGlvbkVhc2luZ3MgPSB7XG4gICAgU2luZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIDEgLSBNYXRoLmNvcyh0ICogTWF0aC5QSSAvIDIpOyB9OyB9LFxuICAgIENpcmM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCk7IH07IH0sXG4gICAgQmFjazogZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIHQgKiB0ICogKDMgKiB0IC0gMik7IH07IH0sXG4gICAgQm91bmNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgdmFyIHBvdzIsIGIgPSA0O1xuICAgICAgd2hpbGUgKHQgPCAoKCBwb3cyID0gTWF0aC5wb3coMiwgLS1iKSkgLSAxKSAvIDExKSB7fVxuICAgICAgcmV0dXJuIDEgLyBNYXRoLnBvdyg0LCAzIC0gYikgLSA3LjU2MjUgKiBNYXRoLnBvdygoIHBvdzIgKiAzIC0gMiApIC8gMjIgLSB0LCAyKVxuICAgIH07IH0sXG4gICAgRWxhc3RpYzogZnVuY3Rpb24gKGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gICAgICBpZiAoIGFtcGxpdHVkZSA9PT0gdm9pZCAwICkgYW1wbGl0dWRlID0gMTtcbiAgICAgIGlmICggcGVyaW9kID09PSB2b2lkIDAgKSBwZXJpb2QgPSAuNTtcblxuICAgICAgdmFyIGEgPSBtaW5NYXgoYW1wbGl0dWRlLCAxLCAxMCk7XG4gICAgICB2YXIgcCA9IG1pbk1heChwZXJpb2QsIC4xLCAyKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gKHQgPT09IDAgfHwgdCA9PT0gMSkgPyB0IDogXG4gICAgICAgICAgLWEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICogTWF0aC5zaW4oKCgodCAtIDEpIC0gKHAgLyAoTWF0aC5QSSAqIDIpICogTWF0aC5hc2luKDEgLyBhKSkpICogKE1hdGguUEkgKiAyKSkgLyBwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIGJhc2VFYXNpbmdzID0gWydRdWFkJywgJ0N1YmljJywgJ1F1YXJ0JywgJ1F1aW50JywgJ0V4cG8nXTtcblxuICBiYXNlRWFzaW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpKSB7XG4gICAgZnVuY3Rpb25FYXNpbmdzW25hbWVdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHQpIHsgcmV0dXJuIE1hdGgucG93KHQsIGkgKyAyKTsgfTsgfTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoZnVuY3Rpb25FYXNpbmdzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGVhc2VJbiA9IGZ1bmN0aW9uRWFzaW5nc1tuYW1lXTtcbiAgICBlYXNlc1snZWFzZUluJyArIG5hbWVdID0gZWFzZUluO1xuICAgIGVhc2VzWydlYXNlT3V0JyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiAxIC0gZWFzZUluKGEsIGIpKDEgLSB0KTsgfTsgfTtcbiAgICBlYXNlc1snZWFzZUluT3V0JyArIG5hbWVdID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGZ1bmN0aW9uICh0KSB7IHJldHVybiB0IDwgMC41ID8gZWFzZUluKGEsIGIpKHQgKiAyKSAvIDIgOiBcbiAgICAgIDEgLSBlYXNlSW4oYSwgYikodCAqIC0yICsgMikgLyAyOyB9OyB9O1xuICB9KTtcblxuICByZXR1cm4gZWFzZXM7XG5cbn0pKCk7XG5cbmZ1bmN0aW9uIHBhcnNlRWFzaW5ncyhlYXNpbmcsIGR1cmF0aW9uKSB7XG4gIGlmIChpcy5mbmMoZWFzaW5nKSkgeyByZXR1cm4gZWFzaW5nOyB9XG4gIHZhciBuYW1lID0gZWFzaW5nLnNwbGl0KCcoJylbMF07XG4gIHZhciBlYXNlID0gcGVubmVyW25hbWVdO1xuICB2YXIgYXJncyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhlYXNpbmcpO1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlICdzcHJpbmcnIDogcmV0dXJuIHNwcmluZyhlYXNpbmcsIGR1cmF0aW9uKTtcbiAgICBjYXNlICdjdWJpY0JlemllcicgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoYmV6aWVyLCBhcmdzKTtcbiAgICBjYXNlICdzdGVwcycgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoc3RlcHMsIGFyZ3MpO1xuICAgIGRlZmF1bHQgOiByZXR1cm4gYXBwbHlBcmd1bWVudHMoZWFzZSwgYXJncyk7XG4gIH1cbn1cblxuLy8gU3RyaW5nc1xuXG5mdW5jdGlvbiBzZWxlY3RTdHJpbmcoc3RyKSB7XG4gIHRyeSB7XG4gICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzdHIpO1xuICAgIHJldHVybiBub2RlcztcbiAgfSBjYXRjaChlKSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vIEFycmF5c1xuXG5mdW5jdGlvbiBmaWx0ZXJBcnJheShhcnIsIGNhbGxiYWNrKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMiA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGkgaW4gYXJyKSB7XG4gICAgICB2YXIgdmFsID0gYXJyW2ldO1xuICAgICAgaWYgKGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsLCBpLCBhcnIpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuY29uY2F0KGlzLmFycihiKSA/IGZsYXR0ZW5BcnJheShiKSA6IGIpOyB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkobykge1xuICBpZiAoaXMuYXJyKG8pKSB7IHJldHVybiBvOyB9XG4gIGlmIChpcy5zdHIobykpIHsgbyA9IHNlbGVjdFN0cmluZyhvKSB8fCBvOyB9XG4gIGlmIChvIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSB7IHJldHVybiBbXS5zbGljZS5jYWxsKG8pOyB9XG4gIHJldHVybiBbb107XG59XG5cbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMoYXJyLCB2YWwpIHtcbiAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChhKSB7IHJldHVybiBhID09PSB2YWw7IH0pO1xufVxuXG4vLyBPYmplY3RzXG5cbmZ1bmN0aW9uIGNsb25lT2JqZWN0KG8pIHtcbiAgdmFyIGNsb25lID0ge307XG4gIGZvciAodmFyIHAgaW4gbykgeyBjbG9uZVtwXSA9IG9bcF07IH1cbiAgcmV0dXJuIGNsb25lO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlT2JqZWN0UHJvcHMobzEsIG8yKSB7XG4gIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xuICBmb3IgKHZhciBwIGluIG8xKSB7IG9bcF0gPSBvMi5oYXNPd25Qcm9wZXJ0eShwKSA/IG8yW3BdIDogbzFbcF07IH1cbiAgcmV0dXJuIG87XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhvMSwgbzIpIHtcbiAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XG4gIGZvciAodmFyIHAgaW4gbzIpIHsgb1twXSA9IGlzLnVuZChvMVtwXSkgPyBvMltwXSA6IG8xW3BdOyB9XG4gIHJldHVybiBvO1xufVxuXG4vLyBDb2xvcnNcblxuZnVuY3Rpb24gcmdiVG9SZ2JhKHJnYlZhbHVlKSB7XG4gIHZhciByZ2IgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMocmdiVmFsdWUpO1xuICByZXR1cm4gcmdiID8gKFwicmdiYShcIiArIChyZ2JbMV0pICsgXCIsMSlcIikgOiByZ2JWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaGV4VG9SZ2JhKGhleFZhbHVlKSB7XG4gIHZhciByZ3ggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICB2YXIgaGV4ID0gaGV4VmFsdWUucmVwbGFjZShyZ3gsIGZ1bmN0aW9uIChtLCByLCBnLCBiKSB7IHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7IH0gKTtcbiAgdmFyIHJnYiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICB2YXIgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xuICB2YXIgZyA9IHBhcnNlSW50KHJnYlsyXSwgMTYpO1xuICB2YXIgYiA9IHBhcnNlSW50KHJnYlszXSwgMTYpO1xuICByZXR1cm4gKFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIiwxKVwiKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2JhKGhzbFZhbHVlKSB7XG4gIHZhciBoc2wgPSAvaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhoc2xWYWx1ZSkgfHwgL2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoaHNsVmFsdWUpO1xuICB2YXIgaCA9IHBhcnNlSW50KGhzbFsxXSwgMTApIC8gMzYwO1xuICB2YXIgcyA9IHBhcnNlSW50KGhzbFsyXSwgMTApIC8gMTAwO1xuICB2YXIgbCA9IHBhcnNlSW50KGhzbFszXSwgMTApIC8gMTAwO1xuICB2YXIgYSA9IGhzbFs0XSB8fCAxO1xuICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcbiAgICBpZiAodCA8IDApIHsgdCArPSAxOyB9XG4gICAgaWYgKHQgPiAxKSB7IHQgLT0gMTsgfVxuICAgIGlmICh0IDwgMS82KSB7IHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0OyB9XG4gICAgaWYgKHQgPCAxLzIpIHsgcmV0dXJuIHE7IH1cbiAgICBpZiAodCA8IDIvMykgeyByZXR1cm4gcCArIChxIC0gcCkgKiAoMi8zIC0gdCkgKiA2OyB9XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgdmFyIHIsIGcsIGI7XG4gIGlmIChzID09IDApIHtcbiAgICByID0gZyA9IGIgPSBsO1xuICB9IGVsc2Uge1xuICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcbiAgICB2YXIgcCA9IDIgKiBsIC0gcTtcbiAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMS8zKTtcbiAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcbiAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMS8zKTtcbiAgfVxuICByZXR1cm4gKFwicmdiYShcIiArIChyICogMjU1KSArIFwiLFwiICsgKGcgKiAyNTUpICsgXCIsXCIgKyAoYiAqIDI1NSkgKyBcIixcIiArIGEgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIGNvbG9yVG9SZ2IodmFsKSB7XG4gIGlmIChpcy5yZ2IodmFsKSkgeyByZXR1cm4gcmdiVG9SZ2JhKHZhbCk7IH1cbiAgaWYgKGlzLmhleCh2YWwpKSB7IHJldHVybiBoZXhUb1JnYmEodmFsKTsgfVxuICBpZiAoaXMuaHNsKHZhbCkpIHsgcmV0dXJuIGhzbFRvUmdiYSh2YWwpOyB9XG59XG5cbi8vIFVuaXRzXG5cbmZ1bmN0aW9uIGdldFVuaXQodmFsKSB7XG4gIHZhciBzcGxpdCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPyglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKHZhbCk7XG4gIGlmIChzcGxpdCkgeyByZXR1cm4gc3BsaXRbMV07IH1cbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSkge1xuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICd0cmFuc2xhdGUnKSB8fCBwcm9wTmFtZSA9PT0gJ3BlcnNwZWN0aXZlJykgeyByZXR1cm4gJ3B4JzsgfVxuICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdyb3RhdGUnKSB8fCBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NrZXcnKSkgeyByZXR1cm4gJ2RlZyc7IH1cbn1cblxuLy8gVmFsdWVzXG5cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uVmFsdWUodmFsLCBhbmltYXRhYmxlKSB7XG4gIGlmICghaXMuZm5jKHZhbCkpIHsgcmV0dXJuIHZhbDsgfVxuICByZXR1cm4gdmFsKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltYXRhYmxlLmlkLCBhbmltYXRhYmxlLnRvdGFsKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSB7XG4gIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUocHJvcCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIHtcbiAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xuICBpZiAoYXJyYXlDb250YWlucyhbdW5pdCwgJ2RlZycsICdyYWQnLCAndHVybiddLCB2YWx1ZVVuaXQpKSB7IHJldHVybiB2YWx1ZTsgfVxuICB2YXIgY2FjaGVkID0gY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF07XG4gIGlmICghaXMudW5kKGNhY2hlZCkpIHsgcmV0dXJuIGNhY2hlZDsgfVxuICB2YXIgYmFzZWxpbmUgPSAxMDA7XG4gIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsLnRhZ05hbWUpO1xuICB2YXIgcGFyZW50RWwgPSAoZWwucGFyZW50Tm9kZSAmJiAoZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQpKSA/IGVsLnBhcmVudE5vZGUgOiBkb2N1bWVudC5ib2R5O1xuICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0ZW1wRWwpO1xuICB0ZW1wRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICB0ZW1wRWwuc3R5bGUud2lkdGggPSBiYXNlbGluZSArIHVuaXQ7XG4gIHZhciBmYWN0b3IgPSBiYXNlbGluZSAvIHRlbXBFbC5vZmZzZXRXaWR0aDtcbiAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEVsKTtcbiAgdmFyIGNvbnZlcnRlZFVuaXQgPSBmYWN0b3IgKiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF0gPSBjb252ZXJ0ZWRVbml0O1xuICByZXR1cm4gY29udmVydGVkVW5pdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q1NTVmFsdWUoZWwsIHByb3AsIHVuaXQpIHtcbiAgaWYgKHByb3AgaW4gZWwuc3R5bGUpIHtcbiAgICB2YXIgdXBwZXJjYXNlUHJvcE5hbWUgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIHZhbHVlID0gZWwuc3R5bGVbcHJvcF0gfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSh1cHBlcmNhc2VQcm9wTmFtZSkgfHwgJzAnO1xuICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25UeXBlKGVsLCBwcm9wKSB7XG4gIGlmIChpcy5kb20oZWwpICYmICFpcy5pbnAoZWwpICYmIChnZXRBdHRyaWJ1dGUoZWwsIHByb3ApIHx8IChpcy5zdmcoZWwpICYmIGVsW3Byb3BdKSkpIHsgcmV0dXJuICdhdHRyaWJ1dGUnOyB9XG4gIGlmIChpcy5kb20oZWwpICYmIGFycmF5Q29udGFpbnModmFsaWRUcmFuc2Zvcm1zLCBwcm9wKSkgeyByZXR1cm4gJ3RyYW5zZm9ybSc7IH1cbiAgaWYgKGlzLmRvbShlbCkgJiYgKHByb3AgIT09ICd0cmFuc2Zvcm0nICYmIGdldENTU1ZhbHVlKGVsLCBwcm9wKSkpIHsgcmV0dXJuICdjc3MnOyB9XG4gIGlmIChlbFtwcm9wXSAhPSBudWxsKSB7IHJldHVybiAnb2JqZWN0JzsgfVxufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkge1xuICBpZiAoIWlzLmRvbShlbCkpIHsgcmV0dXJuOyB9XG4gIHZhciBzdHIgPSBlbC5zdHlsZS50cmFuc2Zvcm0gfHwgJyc7XG4gIHZhciByZWcgID0gLyhcXHcrKVxcKChbXildKilcXCkvZztcbiAgdmFyIHRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XG4gIHZhciBtOyB3aGlsZSAobSA9IHJlZy5leGVjKHN0cikpIHsgdHJhbnNmb3Jtcy5zZXQobVsxXSwgbVsyXSk7IH1cbiAgcmV0dXJuIHRyYW5zZm9ybXM7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVZhbHVlKGVsLCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCkge1xuICB2YXIgZGVmYXVsdFZhbCA9IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2NhbGUnKSA/IDEgOiAwICsgZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSk7XG4gIHZhciB2YWx1ZSA9IGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKS5nZXQocHJvcE5hbWUpIHx8IGRlZmF1bHRWYWw7XG4gIGlmIChhbmltYXRhYmxlKSB7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLmxpc3Quc2V0KHByb3BOYW1lLCB2YWx1ZSk7XG4gICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zWydsYXN0J10gPSBwcm9wTmFtZTtcbiAgfVxuICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCwgYW5pbWF0YWJsZSkge1xuICBzd2l0Y2ggKGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wTmFtZSkpIHtcbiAgICBjYXNlICd0cmFuc2Zvcm0nOiByZXR1cm4gZ2V0VHJhbnNmb3JtVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCk7XG4gICAgY2FzZSAnY3NzJzogcmV0dXJuIGdldENTU1ZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQpO1xuICAgIGNhc2UgJ2F0dHJpYnV0ZSc6IHJldHVybiBnZXRBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wTmFtZSk7XG4gICAgZGVmYXVsdDogcmV0dXJuIHRhcmdldFtwcm9wTmFtZV0gfHwgMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSB7XG4gIHZhciBvcGVyYXRvciA9IC9eKFxcKj18XFwrPXwtPSkvLmV4ZWModG8pO1xuICBpZiAoIW9wZXJhdG9yKSB7IHJldHVybiB0bzsgfVxuICB2YXIgdSA9IGdldFVuaXQodG8pIHx8IDA7XG4gIHZhciB4ID0gcGFyc2VGbG9hdChmcm9tKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KHRvLnJlcGxhY2Uob3BlcmF0b3JbMF0sICcnKSk7XG4gIHN3aXRjaCAob3BlcmF0b3JbMF1bMF0pIHtcbiAgICBjYXNlICcrJzogcmV0dXJuIHggKyB5ICsgdTtcbiAgICBjYXNlICctJzogcmV0dXJuIHggLSB5ICsgdTtcbiAgICBjYXNlICcqJzogcmV0dXJuIHggKiB5ICsgdTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbCwgdW5pdCkge1xuICBpZiAoaXMuY29sKHZhbCkpIHsgcmV0dXJuIGNvbG9yVG9SZ2IodmFsKTsgfVxuICBpZiAoL1xccy9nLnRlc3QodmFsKSkgeyByZXR1cm4gdmFsOyB9XG4gIHZhciBvcmlnaW5hbFVuaXQgPSBnZXRVbml0KHZhbCk7XG4gIHZhciB1bml0TGVzcyA9IG9yaWdpbmFsVW5pdCA/IHZhbC5zdWJzdHIoMCwgdmFsLmxlbmd0aCAtIG9yaWdpbmFsVW5pdC5sZW5ndGgpIDogdmFsO1xuICBpZiAodW5pdCkgeyByZXR1cm4gdW5pdExlc3MgKyB1bml0OyB9XG4gIHJldHVybiB1bml0TGVzcztcbn1cblxuLy8gZ2V0VG90YWxMZW5ndGgoKSBlcXVpdmFsZW50IGZvciBjaXJjbGUsIHJlY3QsIHBvbHlsaW5lLCBwb2x5Z29uIGFuZCBsaW5lIHNoYXBlc1xuLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1NlYkxhbWJsYS8zZTA1NTBjNDk2YzIzNjcwOTc0NFxuXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xufVxuXG5mdW5jdGlvbiBnZXRDaXJjbGVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIE1hdGguUEkgKiAyICogZ2V0QXR0cmlidXRlKGVsLCAncicpO1xufVxuXG5mdW5jdGlvbiBnZXRSZWN0TGVuZ3RoKGVsKSB7XG4gIHJldHVybiAoZ2V0QXR0cmlidXRlKGVsLCAnd2lkdGgnKSAqIDIpICsgKGdldEF0dHJpYnV0ZShlbCwgJ2hlaWdodCcpICogMik7XG59XG5cbmZ1bmN0aW9uIGdldExpbmVMZW5ndGgoZWwpIHtcbiAgcmV0dXJuIGdldERpc3RhbmNlKFxuICAgIHt4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MScpLCB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MScpfSwgXG4gICAge3g6IGdldEF0dHJpYnV0ZShlbCwgJ3gyJyksIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kyJyl9XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSB7XG4gIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XG4gIHZhciB0b3RhbExlbmd0aCA9IDA7XG4gIHZhciBwcmV2aW91c1BvcztcbiAgZm9yICh2YXIgaSA9IDAgOyBpIDwgcG9pbnRzLm51bWJlck9mSXRlbXM7IGkrKykge1xuICAgIHZhciBjdXJyZW50UG9zID0gcG9pbnRzLmdldEl0ZW0oaSk7XG4gICAgaWYgKGkgPiAwKSB7IHRvdGFsTGVuZ3RoICs9IGdldERpc3RhbmNlKHByZXZpb3VzUG9zLCBjdXJyZW50UG9zKTsgfVxuICAgIHByZXZpb3VzUG9zID0gY3VycmVudFBvcztcbiAgfVxuICByZXR1cm4gdG90YWxMZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGdldFBvbHlnb25MZW5ndGgoZWwpIHtcbiAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcbiAgcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSArIGdldERpc3RhbmNlKHBvaW50cy5nZXRJdGVtKHBvaW50cy5udW1iZXJPZkl0ZW1zIC0gMSksIHBvaW50cy5nZXRJdGVtKDApKTtcbn1cblxuLy8gUGF0aCBhbmltYXRpb25cblxuZnVuY3Rpb24gZ2V0VG90YWxMZW5ndGgoZWwpIHtcbiAgaWYgKGVsLmdldFRvdGFsTGVuZ3RoKSB7IHJldHVybiBlbC5nZXRUb3RhbExlbmd0aCgpOyB9XG4gIHN3aXRjaChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdjaXJjbGUnOiByZXR1cm4gZ2V0Q2lyY2xlTGVuZ3RoKGVsKTtcbiAgICBjYXNlICdyZWN0JzogcmV0dXJuIGdldFJlY3RMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ2xpbmUnOiByZXR1cm4gZ2V0TGluZUxlbmd0aChlbCk7XG4gICAgY2FzZSAncG9seWxpbmUnOiByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpO1xuICAgIGNhc2UgJ3BvbHlnb24nOiByZXR1cm4gZ2V0UG9seWdvbkxlbmd0aChlbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RGFzaG9mZnNldChlbCkge1xuICB2YXIgcGF0aExlbmd0aCA9IGdldFRvdGFsTGVuZ3RoKGVsKTtcbiAgZWwuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgcGF0aExlbmd0aCk7XG4gIHJldHVybiBwYXRoTGVuZ3RoO1xufVxuXG4vLyBNb3Rpb24gcGF0aFxuXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmdFbChlbCkge1xuICB2YXIgcGFyZW50RWwgPSBlbC5wYXJlbnROb2RlO1xuICB3aGlsZSAoaXMuc3ZnKHBhcmVudEVsKSkge1xuICAgIGlmICghaXMuc3ZnKHBhcmVudEVsLnBhcmVudE5vZGUpKSB7IGJyZWFrOyB9XG4gICAgcGFyZW50RWwgPSBwYXJlbnRFbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBwYXJlbnRFbDtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnKHBhdGhFbCwgc3ZnRGF0YSkge1xuICB2YXIgc3ZnID0gc3ZnRGF0YSB8fCB7fTtcbiAgdmFyIHBhcmVudFN2Z0VsID0gc3ZnLmVsIHx8IGdldFBhcmVudFN2Z0VsKHBhdGhFbCk7XG4gIHZhciByZWN0ID0gcGFyZW50U3ZnRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciB2aWV3Qm94QXR0ciA9IGdldEF0dHJpYnV0ZShwYXJlbnRTdmdFbCwgJ3ZpZXdCb3gnKTtcbiAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcbiAgdmFyIGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICB2YXIgdmlld0JveCA9IHN2Zy52aWV3Qm94IHx8ICh2aWV3Qm94QXR0ciA/IHZpZXdCb3hBdHRyLnNwbGl0KCcgJykgOiBbMCwgMCwgd2lkdGgsIGhlaWdodF0pO1xuICByZXR1cm4ge1xuICAgIGVsOiBwYXJlbnRTdmdFbCxcbiAgICB2aWV3Qm94OiB2aWV3Qm94LFxuICAgIHg6IHZpZXdCb3hbMF0gLyAxLFxuICAgIHk6IHZpZXdCb3hbMV0gLyAxLFxuICAgIHc6IHdpZHRoIC8gdmlld0JveFsyXSxcbiAgICBoOiBoZWlnaHQgLyB2aWV3Qm94WzNdXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGF0aChwYXRoLCBwZXJjZW50KSB7XG4gIHZhciBwYXRoRWwgPSBpcy5zdHIocGF0aCkgPyBzZWxlY3RTdHJpbmcocGF0aClbMF0gOiBwYXRoO1xuICB2YXIgcCA9IHBlcmNlbnQgfHwgMTAwO1xuICByZXR1cm4gZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgZWw6IHBhdGhFbCxcbiAgICAgIHN2ZzogZ2V0UGFyZW50U3ZnKHBhdGhFbCksXG4gICAgICB0b3RhbExlbmd0aDogZ2V0VG90YWxMZW5ndGgocGF0aEVsKSAqIChwIC8gMTAwKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQYXRoUHJvZ3Jlc3MocGF0aCwgcHJvZ3Jlc3MpIHtcbiAgZnVuY3Rpb24gcG9pbnQob2Zmc2V0KSB7XG4gICAgaWYgKCBvZmZzZXQgPT09IHZvaWQgMCApIG9mZnNldCA9IDA7XG5cbiAgICB2YXIgbCA9IHByb2dyZXNzICsgb2Zmc2V0ID49IDEgPyBwcm9ncmVzcyArIG9mZnNldCA6IDA7XG4gICAgcmV0dXJuIHBhdGguZWwuZ2V0UG9pbnRBdExlbmd0aChsKTtcbiAgfVxuICB2YXIgc3ZnID0gZ2V0UGFyZW50U3ZnKHBhdGguZWwsIHBhdGguc3ZnKTtcbiAgdmFyIHAgPSBwb2ludCgpO1xuICB2YXIgcDAgPSBwb2ludCgtMSk7XG4gIHZhciBwMSA9IHBvaW50KCsxKTtcbiAgc3dpdGNoIChwYXRoLnByb3BlcnR5KSB7XG4gICAgY2FzZSAneCc6IHJldHVybiAocC54IC0gc3ZnLngpICogc3ZnLnc7XG4gICAgY2FzZSAneSc6IHJldHVybiAocC55IC0gc3ZnLnkpICogc3ZnLmg7XG4gICAgY2FzZSAnYW5nbGUnOiByZXR1cm4gTWF0aC5hdGFuMihwMS55IC0gcDAueSwgcDEueCAtIHAwLngpICogMTgwIC8gTWF0aC5QSTtcbiAgfVxufVxuXG4vLyBEZWNvbXBvc2UgdmFsdWVcblxuZnVuY3Rpb24gZGVjb21wb3NlVmFsdWUodmFsLCB1bml0KSB7XG4gIC8vIGNvbnN0IHJneCA9IC8tP1xcZCpcXC4/XFxkKy9nOyAvLyBoYW5kbGVzIGJhc2ljIG51bWJlcnNcbiAgLy8gY29uc3Qgcmd4ID0gL1srLV0/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxuICB2YXIgcmd4ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXG4gIHZhciB2YWx1ZSA9IHZhbGlkYXRlVmFsdWUoKGlzLnB0aCh2YWwpID8gdmFsLnRvdGFsTGVuZ3RoIDogdmFsKSwgdW5pdCkgKyAnJztcbiAgcmV0dXJuIHtcbiAgICBvcmlnaW5hbDogdmFsdWUsXG4gICAgbnVtYmVyczogdmFsdWUubWF0Y2gocmd4KSA/IHZhbHVlLm1hdGNoKHJneCkubWFwKE51bWJlcikgOiBbMF0sXG4gICAgc3RyaW5nczogKGlzLnN0cih2YWwpIHx8IHVuaXQpID8gdmFsdWUuc3BsaXQocmd4KSA6IFtdXG4gIH1cbn1cblxuLy8gQW5pbWF0YWJsZXNcblxuZnVuY3Rpb24gcGFyc2VUYXJnZXRzKHRhcmdldHMpIHtcbiAgdmFyIHRhcmdldHNBcnJheSA9IHRhcmdldHMgPyAoZmxhdHRlbkFycmF5KGlzLmFycih0YXJnZXRzKSA/IHRhcmdldHMubWFwKHRvQXJyYXkpIDogdG9BcnJheSh0YXJnZXRzKSkpIDogW107XG4gIHJldHVybiBmaWx0ZXJBcnJheSh0YXJnZXRzQXJyYXksIGZ1bmN0aW9uIChpdGVtLCBwb3MsIHNlbGYpIHsgcmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PT0gcG9zOyB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cykge1xuICB2YXIgcGFyc2VkID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICByZXR1cm4gcGFyc2VkLm1hcChmdW5jdGlvbiAodCwgaSkge1xuICAgIHJldHVybiB7dGFyZ2V0OiB0LCBpZDogaSwgdG90YWw6IHBhcnNlZC5sZW5ndGgsIHRyYW5zZm9ybXM6IHsgbGlzdDogZ2V0RWxlbWVudFRyYW5zZm9ybXModCkgfSB9O1xuICB9KTtcbn1cblxuLy8gUHJvcGVydGllc1xuXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwcm9wLCB0d2VlblNldHRpbmdzKSB7XG4gIHZhciBzZXR0aW5ncyA9IGNsb25lT2JqZWN0KHR3ZWVuU2V0dGluZ3MpO1xuICAvLyBPdmVycmlkZSBkdXJhdGlvbiBpZiBlYXNpbmcgaXMgYSBzcHJpbmdcbiAgaWYgKC9ec3ByaW5nLy50ZXN0KHNldHRpbmdzLmVhc2luZykpIHsgc2V0dGluZ3MuZHVyYXRpb24gPSBzcHJpbmcoc2V0dGluZ3MuZWFzaW5nKTsgfVxuICBpZiAoaXMuYXJyKHByb3ApKSB7XG4gICAgdmFyIGwgPSBwcm9wLmxlbmd0aDtcbiAgICB2YXIgaXNGcm9tVG8gPSAobCA9PT0gMiAmJiAhaXMub2JqKHByb3BbMF0pKTtcbiAgICBpZiAoIWlzRnJvbVRvKSB7XG4gICAgICAvLyBEdXJhdGlvbiBkaXZpZGVkIGJ5IHRoZSBudW1iZXIgb2YgdHdlZW5zXG4gICAgICBpZiAoIWlzLmZuYyh0d2VlblNldHRpbmdzLmR1cmF0aW9uKSkgeyBzZXR0aW5ncy5kdXJhdGlvbiA9IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24gLyBsOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyYW5zZm9ybSBbZnJvbSwgdG9dIHZhbHVlcyBzaG9ydGhhbmQgdG8gYSB2YWxpZCB0d2VlbiB2YWx1ZVxuICAgICAgcHJvcCA9IHt2YWx1ZTogcHJvcH07XG4gICAgfVxuICB9XG4gIHZhciBwcm9wQXJyYXkgPSBpcy5hcnIocHJvcCkgPyBwcm9wIDogW3Byb3BdO1xuICByZXR1cm4gcHJvcEFycmF5Lm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgIHZhciBvYmogPSAoaXMub2JqKHYpICYmICFpcy5wdGgodikpID8gdiA6IHt2YWx1ZTogdn07XG4gICAgLy8gRGVmYXVsdCBkZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBmaXJzdCB0d2VlblxuICAgIGlmIChpcy51bmQob2JqLmRlbGF5KSkgeyBvYmouZGVsYXkgPSAhaSA/IHR3ZWVuU2V0dGluZ3MuZGVsYXkgOiAwOyB9XG4gICAgLy8gRGVmYXVsdCBlbmREZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBsYXN0IHR3ZWVuXG4gICAgaWYgKGlzLnVuZChvYmouZW5kRGVsYXkpKSB7IG9iai5lbmREZWxheSA9IGkgPT09IHByb3BBcnJheS5sZW5ndGggLSAxID8gdHdlZW5TZXR0aW5ncy5lbmREZWxheSA6IDA7IH1cbiAgICByZXR1cm4gb2JqO1xuICB9KS5tYXAoZnVuY3Rpb24gKGspIHsgcmV0dXJuIG1lcmdlT2JqZWN0cyhrLCBzZXR0aW5ncyk7IH0pO1xufVxuXG5cbmZ1bmN0aW9uIGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSB7XG4gIHZhciBwcm9wZXJ0eU5hbWVzID0gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGtleWZyYW1lcy5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gT2JqZWN0LmtleXMoa2V5KTsgfSkpLCBmdW5jdGlvbiAocCkgeyByZXR1cm4gaXMua2V5KHApOyB9KVxuICAucmVkdWNlKGZ1bmN0aW9uIChhLGIpIHsgaWYgKGEuaW5kZXhPZihiKSA8IDApIHsgYS5wdXNoKGIpOyB9IHJldHVybiBhOyB9LCBbXSk7XG4gIHZhciBwcm9wZXJ0aWVzID0ge307XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBpICkge1xuICAgIHZhciBwcm9wTmFtZSA9IHByb3BlcnR5TmFtZXNbaV07XG4gICAgcHJvcGVydGllc1twcm9wTmFtZV0gPSBrZXlmcmFtZXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBuZXdLZXkgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4ga2V5KSB7XG4gICAgICAgIGlmIChpcy5rZXkocCkpIHtcbiAgICAgICAgICBpZiAocCA9PSBwcm9wTmFtZSkgeyBuZXdLZXkudmFsdWUgPSBrZXlbcF07IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdLZXlbcF0gPSBrZXlbcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdLZXk7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSBsb29wKCBpICk7XG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcykge1xuICB2YXIgcHJvcGVydGllcyA9IFtdO1xuICB2YXIga2V5ZnJhbWVzID0gcGFyYW1zLmtleWZyYW1lcztcbiAgaWYgKGtleWZyYW1lcykgeyBwYXJhbXMgPSBtZXJnZU9iamVjdHMoZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpLCBwYXJhbXMpOyB9XG4gIGZvciAodmFyIHAgaW4gcGFyYW1zKSB7XG4gICAgaWYgKGlzLmtleShwKSkge1xuICAgICAgcHJvcGVydGllcy5wdXNoKHtcbiAgICAgICAgbmFtZTogcCxcbiAgICAgICAgdHdlZW5zOiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwYXJhbXNbcF0sIHR3ZWVuU2V0dGluZ3MpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbi8vIFR3ZWVuc1xuXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlblZhbHVlcyh0d2VlbiwgYW5pbWF0YWJsZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHR3ZWVuKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZSh0d2VlbltwXSwgYW5pbWF0YWJsZSk7XG4gICAgaWYgKGlzLmFycih2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBnZXRGdW5jdGlvblZhbHVlKHYsIGFuaW1hdGFibGUpOyB9KTtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHsgdmFsdWUgPSB2YWx1ZVswXTsgfVxuICAgIH1cbiAgICB0W3BdID0gdmFsdWU7XG4gIH1cbiAgdC5kdXJhdGlvbiA9IHBhcnNlRmxvYXQodC5kdXJhdGlvbik7XG4gIHQuZGVsYXkgPSBwYXJzZUZsb2F0KHQuZGVsYXkpO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpIHtcbiAgdmFyIHByZXZpb3VzVHdlZW47XG4gIHJldHVybiBwcm9wLnR3ZWVucy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgdHdlZW4gPSBub3JtYWxpemVUd2VlblZhbHVlcyh0LCBhbmltYXRhYmxlKTtcbiAgICB2YXIgdHdlZW5WYWx1ZSA9IHR3ZWVuLnZhbHVlO1xuICAgIHZhciB0byA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMV0gOiB0d2VlblZhbHVlO1xuICAgIHZhciB0b1VuaXQgPSBnZXRVbml0KHRvKTtcbiAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSwgdG9Vbml0LCBhbmltYXRhYmxlKTtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLnRvLm9yaWdpbmFsIDogb3JpZ2luYWxWYWx1ZTtcbiAgICB2YXIgZnJvbSA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMF0gOiBwcmV2aW91c1ZhbHVlO1xuICAgIHZhciBmcm9tVW5pdCA9IGdldFVuaXQoZnJvbSkgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcbiAgICB2YXIgdW5pdCA9IHRvVW5pdCB8fCBmcm9tVW5pdDtcbiAgICBpZiAoaXMudW5kKHRvKSkgeyB0byA9IHByZXZpb3VzVmFsdWU7IH1cbiAgICB0d2Vlbi5mcm9tID0gZGVjb21wb3NlVmFsdWUoZnJvbSwgdW5pdCk7XG4gICAgdHdlZW4udG8gPSBkZWNvbXBvc2VWYWx1ZShnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSwgdW5pdCk7XG4gICAgdHdlZW4uc3RhcnQgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi5lbmQgOiAwO1xuICAgIHR3ZWVuLmVuZCA9IHR3ZWVuLnN0YXJ0ICsgdHdlZW4uZGVsYXkgKyB0d2Vlbi5kdXJhdGlvbiArIHR3ZWVuLmVuZERlbGF5O1xuICAgIHR3ZWVuLmVhc2luZyA9IHBhcnNlRWFzaW5ncyh0d2Vlbi5lYXNpbmcsIHR3ZWVuLmR1cmF0aW9uKTtcbiAgICB0d2Vlbi5pc1BhdGggPSBpcy5wdGgodHdlZW5WYWx1ZSk7XG4gICAgdHdlZW4uaXNDb2xvciA9IGlzLmNvbCh0d2Vlbi5mcm9tLm9yaWdpbmFsKTtcbiAgICBpZiAodHdlZW4uaXNDb2xvcikgeyB0d2Vlbi5yb3VuZCA9IDE7IH1cbiAgICBwcmV2aW91c1R3ZWVuID0gdHdlZW47XG4gICAgcmV0dXJuIHR3ZWVuO1xuICB9KTtcbn1cblxuLy8gVHdlZW4gcHJvZ3Jlc3NcblxudmFyIHNldFByb2dyZXNzVmFsdWUgPSB7XG4gIGNzczogZnVuY3Rpb24gKHQsIHAsIHYpIHsgcmV0dXJuIHQuc3R5bGVbcF0gPSB2OyB9LFxuICBhdHRyaWJ1dGU6IGZ1bmN0aW9uICh0LCBwLCB2KSB7IHJldHVybiB0LnNldEF0dHJpYnV0ZShwLCB2KTsgfSxcbiAgb2JqZWN0OiBmdW5jdGlvbiAodCwgcCwgdikgeyByZXR1cm4gdFtwXSA9IHY7IH0sXG4gIHRyYW5zZm9ybTogZnVuY3Rpb24gKHQsIHAsIHYsIHRyYW5zZm9ybXMsIG1hbnVhbCkge1xuICAgIHRyYW5zZm9ybXMubGlzdC5zZXQocCwgdik7XG4gICAgaWYgKHAgPT09IHRyYW5zZm9ybXMubGFzdCB8fCBtYW51YWwpIHtcbiAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgIHRyYW5zZm9ybXMubGlzdC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkgeyBzdHIgKz0gcHJvcCArIFwiKFwiICsgdmFsdWUgKyBcIikgXCI7IH0pO1xuICAgICAgdC5zdHlsZS50cmFuc2Zvcm0gPSBzdHI7XG4gICAgfVxuICB9XG59O1xuXG4vLyBTZXQgVmFsdWUgaGVscGVyXG5cbmZ1bmN0aW9uIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XG4gIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHRhcmdldHMpO1xuICBhbmltYXRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbmltYXRhYmxlKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZShwcm9wZXJ0aWVzW3Byb3BlcnR5XSwgYW5pbWF0YWJsZSk7XG4gICAgICB2YXIgdGFyZ2V0ID0gYW5pbWF0YWJsZS50YXJnZXQ7XG4gICAgICB2YXIgdmFsdWVVbml0ID0gZ2V0VW5pdCh2YWx1ZSk7XG4gICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWVVbml0LCBhbmltYXRhYmxlKTtcbiAgICAgIHZhciB1bml0ID0gdmFsdWVVbml0IHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XG4gICAgICB2YXIgdG8gPSBnZXRSZWxhdGl2ZVZhbHVlKHZhbGlkYXRlVmFsdWUodmFsdWUsIHVuaXQpLCBvcmlnaW5hbFZhbHVlKTtcbiAgICAgIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW1UeXBlXSh0YXJnZXQsIHByb3BlcnR5LCB0bywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBBbmltYXRpb25zXG5cbmZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKSB7XG4gIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSk7XG4gIGlmIChhbmltVHlwZSkge1xuICAgIHZhciB0d2VlbnMgPSBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSk7XG4gICAgdmFyIGxhc3RUd2VlbiA9IHR3ZWVuc1t0d2VlbnMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGFuaW1UeXBlLFxuICAgICAgcHJvcGVydHk6IHByb3AubmFtZSxcbiAgICAgIGFuaW1hdGFibGU6IGFuaW1hdGFibGUsXG4gICAgICB0d2VlbnM6IHR3ZWVucyxcbiAgICAgIGR1cmF0aW9uOiBsYXN0VHdlZW4uZW5kLFxuICAgICAgZGVsYXk6IHR3ZWVuc1swXS5kZWxheSxcbiAgICAgIGVuZERlbGF5OiBsYXN0VHdlZW4uZW5kRGVsYXlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcykge1xuICByZXR1cm4gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGFuaW1hdGFibGVzLm1hcChmdW5jdGlvbiAoYW5pbWF0YWJsZSkge1xuICAgIHJldHVybiBwcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKTtcbiAgICB9KTtcbiAgfSkpLCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gIWlzLnVuZChhKTsgfSk7XG59XG5cbi8vIENyZWF0ZSBJbnN0YW5jZVxuXG5mdW5jdGlvbiBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncykge1xuICB2YXIgYW5pbUxlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xuICB2YXIgZ2V0VGxPZmZzZXQgPSBmdW5jdGlvbiAoYW5pbSkgeyByZXR1cm4gYW5pbS50aW1lbGluZU9mZnNldCA/IGFuaW0udGltZWxpbmVPZmZzZXQgOiAwOyB9O1xuICB2YXIgdGltaW5ncyA9IHt9O1xuICB0aW1pbmdzLmR1cmF0aW9uID0gYW5pbUxlbmd0aCA/IE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uIChhbmltKSB7IHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb247IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb247XG4gIHRpbWluZ3MuZGVsYXkgPSBhbmltTGVuZ3RoID8gTWF0aC5taW4uYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kZWxheTsgfSkpIDogdHdlZW5TZXR0aW5ncy5kZWxheTtcbiAgdGltaW5ncy5lbmREZWxheSA9IGFuaW1MZW5ndGggPyB0aW1pbmdzLmR1cmF0aW9uIC0gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24gKGFuaW0pIHsgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbiAtIGFuaW0uZW5kRGVsYXk7IH0pKSA6IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXk7XG4gIHJldHVybiB0aW1pbmdzO1xufVxuXG52YXIgaW5zdGFuY2VJRCA9IDA7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcykge1xuICB2YXIgaW5zdGFuY2VTZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncywgcGFyYW1zKTtcbiAgdmFyIHR3ZWVuU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XG4gIHZhciBwcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpO1xuICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyhwYXJhbXMudGFyZ2V0cyk7XG4gIHZhciBhbmltYXRpb25zID0gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcyk7XG4gIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpO1xuICB2YXIgaWQgPSBpbnN0YW5jZUlEO1xuICBpbnN0YW5jZUlEKys7XG4gIHJldHVybiBtZXJnZU9iamVjdHMoaW5zdGFuY2VTZXR0aW5ncywge1xuICAgIGlkOiBpZCxcbiAgICBjaGlsZHJlbjogW10sXG4gICAgYW5pbWF0YWJsZXM6IGFuaW1hdGFibGVzLFxuICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMsXG4gICAgZHVyYXRpb246IHRpbWluZ3MuZHVyYXRpb24sXG4gICAgZGVsYXk6IHRpbWluZ3MuZGVsYXksXG4gICAgZW5kRGVsYXk6IHRpbWluZ3MuZW5kRGVsYXlcbiAgfSk7XG59XG5cbi8vIENvcmVcblxudmFyIGFjdGl2ZUluc3RhbmNlcyA9IFtdO1xudmFyIHBhdXNlZEluc3RhbmNlcyA9IFtdO1xudmFyIHJhZjtcblxudmFyIGVuZ2luZSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHBsYXkoKSB7IFxuICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgfVxuICBmdW5jdGlvbiBzdGVwKHQpIHtcbiAgICB2YXIgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDtcbiAgICBpZiAoYWN0aXZlSW5zdGFuY2VzTGVuZ3RoKSB7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IGFjdGl2ZUluc3RhbmNlc0xlbmd0aCkge1xuICAgICAgICB2YXIgYWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XG4gICAgICAgIGlmICghYWN0aXZlSW5zdGFuY2UucGF1c2VkKSB7XG4gICAgICAgICAgYWN0aXZlSW5zdGFuY2UudGljayh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW5zdGFuY2VJbmRleCA9IGFjdGl2ZUluc3RhbmNlcy5pbmRleE9mKGFjdGl2ZUluc3RhbmNlKTtcbiAgICAgICAgICBpZiAoaW5zdGFuY2VJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKGluc3RhbmNlSW5kZXgsIDEpO1xuICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgcGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByYWYgPSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGxheTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICBhY3RpdmVJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5zKSB7IHJldHVybiBpbnMucGF1c2UoKTsgfSk7XG4gICAgcGF1c2VkSW5zdGFuY2VzID0gYWN0aXZlSW5zdGFuY2VzLnNsaWNlKDApO1xuICAgIGFuaW1lLnJ1bm5pbmcgPSBhY3RpdmVJbnN0YW5jZXMgPSBbXTtcbiAgfSBlbHNlIHtcbiAgICBwYXVzZWRJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5zKSB7IHJldHVybiBpbnMucGxheSgpOyB9KTtcbiAgfVxufVxuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG59XG5cbi8vIFB1YmxpYyBJbnN0YW5jZVxuXG5mdW5jdGlvbiBhbmltZShwYXJhbXMpIHtcbiAgaWYgKCBwYXJhbXMgPT09IHZvaWQgMCApIHBhcmFtcyA9IHt9O1xuXG5cbiAgdmFyIHN0YXJ0VGltZSA9IDAsIGxhc3RUaW1lID0gMCwgbm93ID0gMDtcbiAgdmFyIGNoaWxkcmVuLCBjaGlsZHJlbkxlbmd0aCA9IDA7XG4gIHZhciByZXNvbHZlID0gbnVsbDtcblxuICBmdW5jdGlvbiBtYWtlUHJvbWlzZShpbnN0YW5jZSkge1xuICAgIHZhciBwcm9taXNlID0gd2luZG93LlByb21pc2UgJiYgbmV3IFByb21pc2UoZnVuY3Rpb24gKF9yZXNvbHZlKSB7IHJldHVybiByZXNvbHZlID0gX3Jlc29sdmU7IH0pO1xuICAgIGluc3RhbmNlLmZpbmlzaGVkID0gcHJvbWlzZTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHZhciBpbnN0YW5jZSA9IGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcyk7XG4gIHZhciBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gJ2FsdGVybmF0ZScpIHtcbiAgICAgIGluc3RhbmNlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiAhPT0gJ25vcm1hbCcgPyAnbm9ybWFsJyA6ICdyZXZlcnNlJztcbiAgICB9XG4gICAgaW5zdGFuY2UucmV2ZXJzZWQgPSAhaW5zdGFuY2UucmV2ZXJzZWQ7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLnJldmVyc2VkID0gaW5zdGFuY2UucmV2ZXJzZWQ7IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRqdXN0VGltZSh0aW1lKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gLSB0aW1lIDogdGltZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VGltZSgpIHtcbiAgICBzdGFydFRpbWUgPSAwO1xuICAgIGxhc3RUaW1lID0gYWRqdXN0VGltZShpbnN0YW5jZS5jdXJyZW50VGltZSkgKiAoMSAvIGFuaW1lLnNwZWVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlZWtDaGlsZCh0aW1lLCBjaGlsZCkge1xuICAgIGlmIChjaGlsZCkgeyBjaGlsZC5zZWVrKHRpbWUgLSBjaGlsZC50aW1lbGluZU9mZnNldCk7IH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmNJbnN0YW5jZUNoaWxkcmVuKHRpbWUpIHtcbiAgICBpZiAoIWluc3RhbmNlLnJldmVyc2VQbGF5YmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7IHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpXSk7IH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSQxID0gY2hpbGRyZW5MZW5ndGg7IGkkMS0tOykgeyBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baSQxXSk7IH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XG4gICAgdmFyIGFuaW1hdGlvbnNMZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcbiAgICB3aGlsZSAoaSA8IGFuaW1hdGlvbnNMZW5ndGgpIHtcbiAgICAgIHZhciBhbmltID0gYW5pbWF0aW9uc1tpXTtcbiAgICAgIHZhciBhbmltYXRhYmxlID0gYW5pbS5hbmltYXRhYmxlO1xuICAgICAgdmFyIHR3ZWVucyA9IGFuaW0udHdlZW5zO1xuICAgICAgdmFyIHR3ZWVuTGVuZ3RoID0gdHdlZW5zLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgdHdlZW4gPSB0d2VlbnNbdHdlZW5MZW5ndGhdO1xuICAgICAgLy8gT25seSBjaGVjayBmb3Iga2V5ZnJhbWVzIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgdHdlZW5cbiAgICAgIGlmICh0d2Vlbkxlbmd0aCkgeyB0d2VlbiA9IGZpbHRlckFycmF5KHR3ZWVucywgZnVuY3Rpb24gKHQpIHsgcmV0dXJuIChpbnNUaW1lIDwgdC5lbmQpOyB9KVswXSB8fCB0d2VlbjsgfVxuICAgICAgdmFyIGVsYXBzZWQgPSBtaW5NYXgoaW5zVGltZSAtIHR3ZWVuLnN0YXJ0IC0gdHdlZW4uZGVsYXksIDAsIHR3ZWVuLmR1cmF0aW9uKSAvIHR3ZWVuLmR1cmF0aW9uO1xuICAgICAgdmFyIGVhc2VkID0gaXNOYU4oZWxhcHNlZCkgPyAxIDogdHdlZW4uZWFzaW5nKGVsYXBzZWQpO1xuICAgICAgdmFyIHN0cmluZ3MgPSB0d2Vlbi50by5zdHJpbmdzO1xuICAgICAgdmFyIHJvdW5kID0gdHdlZW4ucm91bmQ7XG4gICAgICB2YXIgbnVtYmVycyA9IFtdO1xuICAgICAgdmFyIHRvTnVtYmVyc0xlbmd0aCA9IHR3ZWVuLnRvLm51bWJlcnMubGVuZ3RoO1xuICAgICAgdmFyIHByb2dyZXNzID0gKHZvaWQgMCk7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHRvTnVtYmVyc0xlbmd0aDsgbisrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9ICh2b2lkIDApO1xuICAgICAgICB2YXIgdG9OdW1iZXIgPSB0d2Vlbi50by5udW1iZXJzW25dO1xuICAgICAgICB2YXIgZnJvbU51bWJlciA9IHR3ZWVuLmZyb20ubnVtYmVyc1tuXSB8fCAwO1xuICAgICAgICBpZiAoIXR3ZWVuLmlzUGF0aCkge1xuICAgICAgICAgIHZhbHVlID0gZnJvbU51bWJlciArIChlYXNlZCAqICh0b051bWJlciAtIGZyb21OdW1iZXIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGdldFBhdGhQcm9ncmVzcyh0d2Vlbi52YWx1ZSwgZWFzZWQgKiB0b051bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdW5kKSB7XG4gICAgICAgICAgaWYgKCEodHdlZW4uaXNDb2xvciAmJiBuID4gMikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIHJvdW5kKSAvIHJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBudW1iZXJzLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgICAgLy8gTWFudWFsIEFycmF5LnJlZHVjZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlc1xuICAgICAgdmFyIHN0cmluZ3NMZW5ndGggPSBzdHJpbmdzLmxlbmd0aDtcbiAgICAgIGlmICghc3RyaW5nc0xlbmd0aCkge1xuICAgICAgICBwcm9ncmVzcyA9IG51bWJlcnNbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9ncmVzcyA9IHN0cmluZ3NbMF07XG4gICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgc3RyaW5nc0xlbmd0aDsgcysrKSB7XG4gICAgICAgICAgdmFyIGEgPSBzdHJpbmdzW3NdO1xuICAgICAgICAgIHZhciBiID0gc3RyaW5nc1tzICsgMV07XG4gICAgICAgICAgdmFyIG4kMSA9IG51bWJlcnNbc107XG4gICAgICAgICAgaWYgKCFpc05hTihuJDEpKSB7XG4gICAgICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgJyAnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbS50eXBlXShhbmltYXRhYmxlLnRhcmdldCwgYW5pbS5wcm9wZXJ0eSwgcHJvZ3Jlc3MsIGFuaW1hdGFibGUudHJhbnNmb3Jtcyk7XG4gICAgICBhbmltLmN1cnJlbnRWYWx1ZSA9IHByb2dyZXNzO1xuICAgICAgaSsrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENhbGxiYWNrKGNiKSB7XG4gICAgaWYgKGluc3RhbmNlW2NiXSAmJiAhaW5zdGFuY2UucGFzc1Rocm91Z2gpIHsgaW5zdGFuY2VbY2JdKGluc3RhbmNlKTsgfVxuICB9XG5cbiAgZnVuY3Rpb24gY291bnRJdGVyYXRpb24oKSB7XG4gICAgaWYgKGluc3RhbmNlLnJlbWFpbmluZyAmJiBpbnN0YW5jZS5yZW1haW5pbmcgIT09IHRydWUpIHtcbiAgICAgIGluc3RhbmNlLnJlbWFpbmluZy0tO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEluc3RhbmNlUHJvZ3Jlc3MoZW5naW5lVGltZSkge1xuICAgIHZhciBpbnNEdXJhdGlvbiA9IGluc3RhbmNlLmR1cmF0aW9uO1xuICAgIHZhciBpbnNEZWxheSA9IGluc3RhbmNlLmRlbGF5O1xuICAgIHZhciBpbnNFbmREZWxheSA9IGluc0R1cmF0aW9uIC0gaW5zdGFuY2UuZW5kRGVsYXk7XG4gICAgdmFyIGluc1RpbWUgPSBhZGp1c3RUaW1lKGVuZ2luZVRpbWUpO1xuICAgIGluc3RhbmNlLnByb2dyZXNzID0gbWluTWF4KChpbnNUaW1lIC8gaW5zRHVyYXRpb24pICogMTAwLCAwLCAxMDApO1xuICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGluc1RpbWUgPCBpbnN0YW5jZS5jdXJyZW50VGltZTtcbiAgICBpZiAoY2hpbGRyZW4pIHsgc3luY0luc3RhbmNlQ2hpbGRyZW4oaW5zVGltZSk7IH1cbiAgICBpZiAoIWluc3RhbmNlLmJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgaW5zdGFuY2UuYmVnYW4gPSB0cnVlO1xuICAgICAgc2V0Q2FsbGJhY2soJ2JlZ2luJyk7XG4gICAgfVxuICAgIGlmICghaW5zdGFuY2UubG9vcEJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gdHJ1ZTtcbiAgICAgIHNldENhbGxiYWNrKCdsb29wQmVnaW4nKTtcbiAgICB9XG4gICAgaWYgKGluc1RpbWUgPD0gaW5zRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IDApIHtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcygwKTtcbiAgICB9XG4gICAgaWYgKChpbnNUaW1lID49IGluc0VuZERlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSBpbnNEdXJhdGlvbikgfHwgIWluc0R1cmF0aW9uKSB7XG4gICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zRHVyYXRpb24pO1xuICAgIH1cbiAgICBpZiAoaW5zVGltZSA+IGluc0RlbGF5ICYmIGluc1RpbWUgPCBpbnNFbmREZWxheSkge1xuICAgICAgaWYgKCFpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQmVnaW4nKTtcbiAgICAgIH1cbiAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2UnKTtcbiAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XG4gICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VDb21wbGV0ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IG1pbk1heChpbnNUaW1lLCAwLCBpbnNEdXJhdGlvbik7XG4gICAgaWYgKGluc3RhbmNlLmJlZ2FuKSB7IHNldENhbGxiYWNrKCd1cGRhdGUnKTsgfVxuICAgIGlmIChlbmdpbmVUaW1lID49IGluc0R1cmF0aW9uKSB7XG4gICAgICBsYXN0VGltZSA9IDA7XG4gICAgICBjb3VudEl0ZXJhdGlvbigpO1xuICAgICAgaWYgKCFpbnN0YW5jZS5yZW1haW5pbmcpIHtcbiAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5jb21wbGV0ZWQpIHtcbiAgICAgICAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcbiAgICAgICAgICBzZXRDYWxsYmFjaygnY29tcGxldGUnKTtcbiAgICAgICAgICBpZiAoIWluc3RhbmNlLnBhc3NUaHJvdWdoICYmICdQcm9taXNlJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHByb21pc2UgPSBtYWtlUHJvbWlzZShpbnN0YW5jZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydFRpbWUgPSBub3c7XG4gICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcbiAgICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gZmFsc2U7XG4gICAgICAgIGlmIChpbnN0YW5jZS5kaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnKSB7XG4gICAgICAgICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluc3RhbmNlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcbiAgICBpbnN0YW5jZS5wYXNzVGhyb3VnaCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gMDtcbiAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IDA7XG4gICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcbiAgICBpbnN0YW5jZS5iZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY29tcGxldGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gZmFsc2U7XG4gICAgaW5zdGFuY2UucmV2ZXJzZWQgPSBkaXJlY3Rpb24gPT09ICdyZXZlcnNlJztcbiAgICBpbnN0YW5jZS5yZW1haW5pbmcgPSBpbnN0YW5jZS5sb29wO1xuICAgIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XG4gICAgY2hpbGRyZW5MZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuTGVuZ3RoOyBpLS07KSB7IGluc3RhbmNlLmNoaWxkcmVuW2ldLnJlc2V0KCk7IH1cbiAgICBpZiAoaW5zdGFuY2UucmV2ZXJzZWQgJiYgaW5zdGFuY2UubG9vcCAhPT0gdHJ1ZSB8fCAoZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJyAmJiBpbnN0YW5jZS5sb29wID09PSAxKSkgeyBpbnN0YW5jZS5yZW1haW5pbmcrKzsgfVxuICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnN0YW5jZS5yZXZlcnNlZCA/IGluc3RhbmNlLmR1cmF0aW9uIDogMCk7XG4gIH07XG5cbiAgLy8gU2V0IFZhbHVlIGhlbHBlclxuXG4gIGluc3RhbmNlLnNldCA9IGZ1bmN0aW9uKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcbiAgICBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcyk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xuXG4gIGluc3RhbmNlLnRpY2sgPSBmdW5jdGlvbih0KSB7XG4gICAgbm93ID0gdDtcbiAgICBpZiAoIXN0YXJ0VGltZSkgeyBzdGFydFRpbWUgPSBub3c7IH1cbiAgICBzZXRJbnN0YW5jZVByb2dyZXNzKChub3cgKyAobGFzdFRpbWUgLSBzdGFydFRpbWUpKSAqIGFuaW1lLnNwZWVkKTtcbiAgfTtcblxuICBpbnN0YW5jZS5zZWVrID0gZnVuY3Rpb24odGltZSkge1xuICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoYWRqdXN0VGltZSh0aW1lKSk7XG4gIH07XG5cbiAgaW5zdGFuY2UucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xuICAgIHJlc2V0VGltZSgpO1xuICB9O1xuXG4gIGluc3RhbmNlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWluc3RhbmNlLnBhdXNlZCkgeyByZXR1cm47IH1cbiAgICBpZiAoaW5zdGFuY2UuY29tcGxldGVkKSB7IGluc3RhbmNlLnJlc2V0KCk7IH1cbiAgICBpbnN0YW5jZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBhY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgcmVzZXRUaW1lKCk7XG4gICAgaWYgKCFyYWYpIHsgZW5naW5lKCk7IH1cbiAgfTtcblxuICBpbnN0YW5jZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7XG4gICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcbiAgICByZXNldFRpbWUoKTtcbiAgfTtcblxuICBpbnN0YW5jZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaW5zdGFuY2UucmVzZXQoKTtcbiAgICBpbnN0YW5jZS5wbGF5KCk7XG4gIH07XG5cbiAgaW5zdGFuY2UucmVzZXQoKTtcblxuICBpZiAoaW5zdGFuY2UuYXV0b3BsYXkpIHsgaW5zdGFuY2UucGxheSgpOyB9XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xuXG59XG5cbi8vIFJlbW92ZSB0YXJnZXRzIGZyb20gYW5pbWF0aW9uXG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpIHtcbiAgZm9yICh2YXIgYSA9IGFuaW1hdGlvbnMubGVuZ3RoOyBhLS07KSB7XG4gICAgaWYgKGFycmF5Q29udGFpbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zW2FdLmFuaW1hdGFibGUudGFyZ2V0KSkge1xuICAgICAgYW5pbWF0aW9ucy5zcGxpY2UoYSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHModGFyZ2V0cykge1xuICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xuICBmb3IgKHZhciBpID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDsgaS0tOykge1xuICAgIHZhciBpbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XG4gICAgdmFyIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucyk7XG4gICAgZm9yICh2YXIgYyA9IGNoaWxkcmVuLmxlbmd0aDsgYy0tOykge1xuICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5bY107XG4gICAgICB2YXIgY2hpbGRBbmltYXRpb25zID0gY2hpbGQuYW5pbWF0aW9ucztcbiAgICAgIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGNoaWxkQW5pbWF0aW9ucyk7XG4gICAgICBpZiAoIWNoaWxkQW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkLmNoaWxkcmVuLmxlbmd0aCkgeyBjaGlsZHJlbi5zcGxpY2UoYywgMSk7IH1cbiAgICB9XG4gICAgaWYgKCFhbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGRyZW4ubGVuZ3RoKSB7IGluc3RhbmNlLnBhdXNlKCk7IH1cbiAgfVxufVxuXG4vLyBTdGFnZ2VyIGhlbHBlcnNcblxuZnVuY3Rpb24gc3RhZ2dlcih2YWwsIHBhcmFtcykge1xuICBpZiAoIHBhcmFtcyA9PT0gdm9pZCAwICkgcGFyYW1zID0ge307XG5cbiAgdmFyIGRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb24gfHwgJ25vcm1hbCc7XG4gIHZhciBlYXNpbmcgPSBwYXJhbXMuZWFzaW5nID8gcGFyc2VFYXNpbmdzKHBhcmFtcy5lYXNpbmcpIDogbnVsbDtcbiAgdmFyIGdyaWQgPSBwYXJhbXMuZ3JpZDtcbiAgdmFyIGF4aXMgPSBwYXJhbXMuYXhpcztcbiAgdmFyIGZyb21JbmRleCA9IHBhcmFtcy5mcm9tIHx8IDA7XG4gIHZhciBmcm9tRmlyc3QgPSBmcm9tSW5kZXggPT09ICdmaXJzdCc7XG4gIHZhciBmcm9tQ2VudGVyID0gZnJvbUluZGV4ID09PSAnY2VudGVyJztcbiAgdmFyIGZyb21MYXN0ID0gZnJvbUluZGV4ID09PSAnbGFzdCc7XG4gIHZhciBpc1JhbmdlID0gaXMuYXJyKHZhbCk7XG4gIHZhciB2YWwxID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzBdKSA6IHBhcnNlRmxvYXQodmFsKTtcbiAgdmFyIHZhbDIgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMV0pIDogMDtcbiAgdmFyIHVuaXQgPSBnZXRVbml0KGlzUmFuZ2UgPyB2YWxbMV0gOiB2YWwpIHx8IDA7XG4gIHZhciBzdGFydCA9IHBhcmFtcy5zdGFydCB8fCAwICsgKGlzUmFuZ2UgPyB2YWwxIDogMCk7XG4gIHZhciB2YWx1ZXMgPSBbXTtcbiAgdmFyIG1heFZhbHVlID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbCwgaSwgdCkge1xuICAgIGlmIChmcm9tRmlyc3QpIHsgZnJvbUluZGV4ID0gMDsgfVxuICAgIGlmIChmcm9tQ2VudGVyKSB7IGZyb21JbmRleCA9ICh0IC0gMSkgLyAyOyB9XG4gICAgaWYgKGZyb21MYXN0KSB7IGZyb21JbmRleCA9IHQgLSAxOyB9XG4gICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdDsgaW5kZXgrKykge1xuICAgICAgICBpZiAoIWdyaWQpIHtcbiAgICAgICAgICB2YWx1ZXMucHVzaChNYXRoLmFicyhmcm9tSW5kZXggLSBpbmRleCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBmcm9tWCA9ICFmcm9tQ2VudGVyID8gZnJvbUluZGV4JWdyaWRbMF0gOiAoZ3JpZFswXS0xKS8yO1xuICAgICAgICAgIHZhciBmcm9tWSA9ICFmcm9tQ2VudGVyID8gTWF0aC5mbG9vcihmcm9tSW5kZXgvZ3JpZFswXSkgOiAoZ3JpZFsxXS0xKS8yO1xuICAgICAgICAgIHZhciB0b1ggPSBpbmRleCVncmlkWzBdO1xuICAgICAgICAgIHZhciB0b1kgPSBNYXRoLmZsb29yKGluZGV4L2dyaWRbMF0pO1xuICAgICAgICAgIHZhciBkaXN0YW5jZVggPSBmcm9tWCAtIHRvWDtcbiAgICAgICAgICB2YXIgZGlzdGFuY2VZID0gZnJvbVkgLSB0b1k7XG4gICAgICAgICAgdmFyIHZhbHVlID0gTWF0aC5zcXJ0KGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWSk7XG4gICAgICAgICAgaWYgKGF4aXMgPT09ICd4JykgeyB2YWx1ZSA9IC1kaXN0YW5jZVg7IH1cbiAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3knKSB7IHZhbHVlID0gLWRpc3RhbmNlWTsgfVxuICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBtYXhWYWx1ZSA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgICBpZiAoZWFzaW5nKSB7IHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gZWFzaW5nKHZhbCAvIG1heFZhbHVlKSAqIG1heFZhbHVlOyB9KTsgfVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnKSB7IHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gYXhpcyA/ICh2YWwgPCAwKSA/IHZhbCAqIC0xIDogLXZhbCA6IE1hdGguYWJzKG1heFZhbHVlIC0gdmFsKTsgfSk7IH1cbiAgICB9XG4gICAgdmFyIHNwYWNpbmcgPSBpc1JhbmdlID8gKHZhbDIgLSB2YWwxKSAvIG1heFZhbHVlIDogdmFsMTtcbiAgICByZXR1cm4gc3RhcnQgKyAoc3BhY2luZyAqIChNYXRoLnJvdW5kKHZhbHVlc1tpXSAqIDEwMCkgLyAxMDApKSArIHVuaXQ7XG4gIH1cbn1cblxuLy8gVGltZWxpbmVcblxuZnVuY3Rpb24gdGltZWxpbmUocGFyYW1zKSB7XG4gIGlmICggcGFyYW1zID09PSB2b2lkIDAgKSBwYXJhbXMgPSB7fTtcblxuICB2YXIgdGwgPSBhbmltZShwYXJhbXMpO1xuICB0bC5kdXJhdGlvbiA9IDA7XG4gIHRsLmFkZCA9IGZ1bmN0aW9uKGluc3RhbmNlUGFyYW1zLCB0aW1lbGluZU9mZnNldCkge1xuICAgIHZhciB0bEluZGV4ID0gYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YodGwpO1xuICAgIHZhciBjaGlsZHJlbiA9IHRsLmNoaWxkcmVuO1xuICAgIGlmICh0bEluZGV4ID4gLTEpIHsgYWN0aXZlSW5zdGFuY2VzLnNwbGljZSh0bEluZGV4LCAxKTsgfVxuICAgIGZ1bmN0aW9uIHBhc3NUaHJvdWdoKGlucykgeyBpbnMucGFzc1Rocm91Z2ggPSB0cnVlOyB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykgeyBwYXNzVGhyb3VnaChjaGlsZHJlbltpXSk7IH1cbiAgICB2YXIgaW5zUGFyYW1zID0gbWVyZ2VPYmplY3RzKGluc3RhbmNlUGFyYW1zLCByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcykpO1xuICAgIGluc1BhcmFtcy50YXJnZXRzID0gaW5zUGFyYW1zLnRhcmdldHMgfHwgcGFyYW1zLnRhcmdldHM7XG4gICAgdmFyIHRsRHVyYXRpb24gPSB0bC5kdXJhdGlvbjtcbiAgICBpbnNQYXJhbXMuYXV0b3BsYXkgPSBmYWxzZTtcbiAgICBpbnNQYXJhbXMuZGlyZWN0aW9uID0gdGwuZGlyZWN0aW9uO1xuICAgIGluc1BhcmFtcy50aW1lbGluZU9mZnNldCA9IGlzLnVuZCh0aW1lbGluZU9mZnNldCkgPyB0bER1cmF0aW9uIDogZ2V0UmVsYXRpdmVWYWx1ZSh0aW1lbGluZU9mZnNldCwgdGxEdXJhdGlvbik7XG4gICAgcGFzc1Rocm91Z2godGwpO1xuICAgIHRsLnNlZWsoaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0KTtcbiAgICB2YXIgaW5zID0gYW5pbWUoaW5zUGFyYW1zKTtcbiAgICBwYXNzVGhyb3VnaChpbnMpO1xuICAgIGNoaWxkcmVuLnB1c2goaW5zKTtcbiAgICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhjaGlsZHJlbiwgcGFyYW1zKTtcbiAgICB0bC5kZWxheSA9IHRpbWluZ3MuZGVsYXk7XG4gICAgdGwuZW5kRGVsYXkgPSB0aW1pbmdzLmVuZERlbGF5O1xuICAgIHRsLmR1cmF0aW9uID0gdGltaW5ncy5kdXJhdGlvbjtcbiAgICB0bC5zZWVrKDApO1xuICAgIHRsLnJlc2V0KCk7XG4gICAgaWYgKHRsLmF1dG9wbGF5KSB7IHRsLnBsYXkoKTsgfVxuICAgIHJldHVybiB0bDtcbiAgfTtcbiAgcmV0dXJuIHRsO1xufVxuXG5hbmltZS52ZXJzaW9uID0gJzMuMS4wJztcbmFuaW1lLnNwZWVkID0gMTtcbmFuaW1lLnJ1bm5pbmcgPSBhY3RpdmVJbnN0YW5jZXM7XG5hbmltZS5yZW1vdmUgPSByZW1vdmVUYXJnZXRzO1xuYW5pbWUuZ2V0ID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZTtcbmFuaW1lLnNldCA9IHNldFRhcmdldHNWYWx1ZTtcbmFuaW1lLmNvbnZlcnRQeCA9IGNvbnZlcnRQeFRvVW5pdDtcbmFuaW1lLnBhdGggPSBnZXRQYXRoO1xuYW5pbWUuc2V0RGFzaG9mZnNldCA9IHNldERhc2hvZmZzZXQ7XG5hbmltZS5zdGFnZ2VyID0gc3RhZ2dlcjtcbmFuaW1lLnRpbWVsaW5lID0gdGltZWxpbmU7XG5hbmltZS5lYXNpbmcgPSBwYXJzZUVhc2luZ3M7XG5hbmltZS5wZW5uZXIgPSBwZW5uZXI7XG5hbmltZS5yYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IH07XG5cbmV4cG9ydCBkZWZhdWx0IGFuaW1lO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohXFxyXFxuICogZnVsbFBhZ2UgMy4wLjhcXHJcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanNcXHJcXG4gKlxcclxcbiAqIEBsaWNlbnNlIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2Ugb25seVxcclxcbiAqIG9yIEZ1bGxwYWdlIENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcXHJcXG4gKiBodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL3ByaWNpbmcvXFxyXFxuICpcXHJcXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggaHR0cDovL2FsdmFyb3RyaWdvLmNvbS9mdWxsUGFnZSAtIEEgcHJvamVjdCBieSBBbHZhcm8gVHJpZ29cXHJcXG4gKi9cXHJcXG5odG1sLmZwLWVuYWJsZWQsXFxyXFxuLmZwLWVuYWJsZWQgYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcclxcblxcclxcbiAgICAvKkF2b2lkIGZsaWNrZXIgb24gc2xpZGVzIHRyYW5zaXRpb25zIGZvciBtb2JpbGUgcGhvbmVzICMzMzYgKi9cXHJcXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcclxcbn1cXHJcXG4uZnAtc2VjdGlvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmk8PTUgQW5kcm9pZDw9MyAqL1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDw9MjggKi9cXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmZwLXNsaWRlIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxufVxcclxcbi5mcC1zbGlkZSwgLmZwLXNsaWRlc0NvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5mcC1zbGlkZXMge1xcclxcbiAgICB6LWluZGV4OjE7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0OyAvKiBTYWZhcmk8PTYgQW5kcm9pZDw9NC4zICovXFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG4uZnAtc2VjdGlvbi5mcC10YWJsZSwgLmZwLXNsaWRlLmZwLXRhYmxlIHtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIHRhYmxlLWxheW91dDpmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5mcC10YWJsZUNlbGwge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uZnAtc2xpZGVzQ29udGFpbmVyIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmZwLWNvbnRyb2xBcnJvdyB7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIHdlYmtpdCAoc2FmYXJpLCBjaHJvbWUpIGJyb3dzZXJzICovXFxyXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIG1vemlsbGEgYnJvd3NlcnMgKi9cXHJcXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiB3ZWJraXQgKGtvbnF1ZXJvcikgYnJvd3NlcnMgKi9cXHJcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRTEwKyAqL1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0zOHB4O1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xcclxcbn1cXHJcXG4uZnAtY29udHJvbEFycm93LmZwLXByZXYge1xcclxcbiAgICBsZWZ0OiAxNXB4O1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzOC41cHggMzRweCAzOC41cHggMDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4uZnAtY29udHJvbEFycm93LmZwLW5leHQge1xcclxcbiAgICByaWdodDogMTVweDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzOC41cHggMCAzOC41cHggMzRweDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmO1xcclxcbn1cXHJcXG4uZnAtc2Nyb2xsYWJsZSB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmZwLXNjcm9sbGVye1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4uaVNjcm9sbEluZGljYXRvcntcXHJcXG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5mcC1ub3RyYW5zaXRpb24ge1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4jZnAtbmF2IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0zMnB4O1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcXHJcXG59XFxyXFxuI2ZwLW5hdi5mcC1yaWdodCB7XFxyXFxuICAgIHJpZ2h0OiAxN3B4O1xcclxcbn1cXHJcXG4jZnAtbmF2LmZwLWxlZnQge1xcclxcbiAgICBsZWZ0OiAxN3B4O1xcclxcbn1cXHJcXG4uZnAtc2xpZGVzTmF2e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDQ7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XFxyXFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XFxyXFxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5mcC1zbGlkZXNOYXYuZnAtYm90dG9tIHtcXHJcXG4gICAgYm90dG9tOiAxN3B4O1xcclxcbn1cXHJcXG4uZnAtc2xpZGVzTmF2LmZwLXRvcCB7XFxyXFxuICAgIHRvcDogMTdweDtcXHJcXG59XFxyXFxuI2ZwLW5hdiB1bCxcXHJcXG4uZnAtc2xpZGVzTmF2IHVsIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbiNmcC1uYXYgdWwgbGksXFxyXFxuLmZwLXNsaWRlc05hdiB1bCBsaSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTRweDtcXHJcXG4gICAgaGVpZ2h0OiAxM3B4O1xcclxcbiAgICBtYXJnaW46IDdweDtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxufVxcclxcbi5mcC1zbGlkZXNOYXYgdWwgbGkge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcbiNmcC1uYXYgdWwgbGkgYSxcXHJcXG4uZnAtc2xpZGVzTmF2IHVsIGxpIGEge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuI2ZwLW5hdiB1bCBsaSBhLmFjdGl2ZSBzcGFuLFxcclxcbi5mcC1zbGlkZXNOYXYgdWwgbGkgYS5hY3RpdmUgc3BhbixcXHJcXG4jZnAtbmF2IHVsIGxpOmhvdmVyIGEuYWN0aXZlIHNwYW4sXFxyXFxuLmZwLXNsaWRlc05hdiB1bCBsaTpob3ZlciBhLmFjdGl2ZSBzcGFue1xcclxcbiAgICBoZWlnaHQ6IDEycHg7XFxyXFxuICAgIHdpZHRoOiAxMnB4O1xcclxcbiAgICBtYXJnaW46IC02cHggMCAwIC02cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuIH1cXHJcXG4jZnAtbmF2IHVsIGxpIGEgc3BhbixcXHJcXG4uZnAtc2xpZGVzTmF2IHVsIGxpIGEgc3BhbiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgd2lkdGg6IDRweDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBtYXJnaW46IC0ycHggMCAwIC0ycHg7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuI2ZwLW5hdiB1bCBsaTpob3ZlciBhIHNwYW4sXFxyXFxuLmZwLXNsaWRlc05hdiB1bCBsaTpob3ZlciBhIHNwYW57XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogLTVweCAwcHggMHB4IC01cHg7XFxyXFxufVxcclxcbiNmcC1uYXYgdWwgbGkgLmZwLXRvb2x0aXAge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLTJweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jZnAtbmF2IHVsIGxpOmhvdmVyIC5mcC10b29sdGlwLFxcclxcbiNmcC1uYXYuZnAtc2hvdy1hY3RpdmUgYS5hY3RpdmUgKyAuZnAtdG9vbHRpcCB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluO1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuI2ZwLW5hdiB1bCBsaSAuZnAtdG9vbHRpcC5mcC1yaWdodCB7XFxyXFxuICAgIHJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG4jZnAtbmF2IHVsIGxpIC5mcC10b29sdGlwLmZwLWxlZnQge1xcclxcbiAgICBsZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG4uZnAtYXV0by1oZWlnaHQuZnAtc2VjdGlvbixcXHJcXG4uZnAtYXV0by1oZWlnaHQgLmZwLXNsaWRlLFxcclxcbi5mcC1hdXRvLWhlaWdodCAuZnAtdGFibGVDZWxse1xcclxcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmZwLXJlc3BvbnNpdmUgLmZwLWF1dG8taGVpZ2h0LXJlc3BvbnNpdmUuZnAtc2VjdGlvbixcXHJcXG4uZnAtcmVzcG9uc2l2ZSAuZnAtYXV0by1oZWlnaHQtcmVzcG9uc2l2ZSAuZnAtc2xpZGUsXFxyXFxuLmZwLXJlc3BvbnNpdmUgLmZwLWF1dG8taGVpZ2h0LXJlc3BvbnNpdmUgLmZwLXRhYmxlQ2VsbCB7XFxyXFxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKk9ubHkgZGlzcGxheSBjb250ZW50IHRvIHNjcmVlbiByZWFkZXJzKi9cXHJcXG4uZnAtc3Itb25seXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMXB4O1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcblxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIgIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5idXR0b24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbnB1dDo6LW1zLWNsZWFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6MDtcXG4gIG1hcmdpbjowO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvRnJvbnRFbmRCYXNpYy5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vaW1nL0Zyb250RW5kUHJvLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCIuLi9pbWcvSU1HXzQ3MjQuSlBHXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uOm50aC1jaGlsZCgybikge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQyRTQ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbjpudGgtY2hpbGQoMm4gKyAxKSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGNvbG9yOiAjRkE2NjIyO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDMwcHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpbmsge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtaW4td2lkdGg6IDQwcHg7XFxyXFxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyBcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW5Nb3JlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0aHViIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZ2l0aHViLmdpdGh1YmFzc2V0cy5jb20vaW1hZ2VzL21vZHVsZXMvbG9nb3NfcGFnZS9PY3RvY2F0LnBuZykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0OyBcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtlZGluIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS81NGJkMzZhYmU0YjBmZjk1Njk5NTNlZmEvMTU0MDk3MzQyOTQwNS0zSFk3RzNJRVlYWFZHVUkwQ0RPNS9rZTE3WndkR0JUb2RkSThwRG00OGtMWENmODhfOXVOVEtYa3EyN2NGNHNCN2dRYTNINzhIM1kwdHhqYWl2XzBmRG9PdnhjZE1tTUtrRHN5VXFNU3NNV3hIazcyNXlpaUhDQ0xmcmg4TzF6NVFIeU5PcUJVVUV0RERzUldySkxUbXdiQTZ1cGJMNUJ1OTd0Sm9jaVhKa2xLcHJSTWRIMlRsNEYxUGphb1BUM1lVczV3a2w1b2pDVjFPOTAwVUo3TUUvTGlua2VkSW5fbG9nb19pbml0aWFscy5wbmcpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbGVncmFtIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNS81Yy9UZWxlZ3JhbV9NZXNzZW5nZXIucG5nKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5jb2Rld2FycyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvMTc2MC8xKlctT1pzWVNGTUlKZ19NLWJQSEgwLXcucG5nKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3MxLmljb25iaXJkLmNvbS9pY28vMjAxMy8xMi81MTgvdzUxMmg1MTIxMzg2OTU2OTg5Q29udGFjdHMwMS5wbmcpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Q6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnbXkgY29udGFjdHMnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDYwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC42cztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Q6aG92ZXI6YWZ0ZXIge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2TGluazpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmlsdGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXRNZSB7XFxyXFxuICAgIHBhZGRpbmc6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpblRleHQge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5teVNraWxscyB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxsVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5za2lsbHNJdGVtcyB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNraWxsSXRlbSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5za2lsbEl0ZW06bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgbWFyZ2luOiAwIDE2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGxJTUcge1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2tpbGxJTUcuaHRtbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzYvNjEvSFRNTDVfbG9nb19hbmRfd29yZG1hcmsuc3ZnLzEyMDBweC1IVE1MNV9sb2dvX2FuZF93b3JkbWFyay5zdmcucG5nKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxufVxcclxcbi5za2lsbElNRy5jc3Mge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9oc3RvLm9yZy93ZWJ0L2V0L3ZnL3VtL2V0dmd1bXZkcXo2X3JzMWRwM2tqeWp0LXNwbS5wbmcpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuLnNraWxsSU1HLmphdmFzY3JpcHR7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3BhcnRuZXIuYml6LnVhL2ltYWdlcy9ibG9naS8yMDZfMTQ4MDA1OTk1MV9qYXZhc2NyaXB0LWZ1bmN0aW9uLWRlY2xhcmF0aW9uLXZzLWZ1bmN0aW9uLWV4cHJlc3Npb24ucG5nKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5za2lsbExldmVsIGltZyB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1UaXRsZSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ub25BY3RpdmUge1xcclxcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgXFxyXFxufVxcclxcblxcclxcbi50ZWNobm9sb2dpZXMge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGVjaG5vbG9naWVzVGl0bGUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZWNobm9sb2dpZXNMaXN0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tY291bnQ6IDI7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi50ZWNobm9sb2dpZXNJdGVtIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udGVjaG5vbG9naWVzSXRlbTpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGhlaWdodDogOHB4O1xcclxcbiAgICB3aWR0aDogOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2NjIyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDE1JTtcXHJcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDRweCk7XFxyXFxufVxcclxcblxcclxcbi5jb3ZlclRleHQge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmZwLXRvb2x0aXAuZnAtcmlnaHQge1xcclxcbiAgICBjb2xvcjogI0ZBNjYyMjtcXHJcXG59XFxyXFxuXFxyXFxuLmNlcnRpZmljYXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbmgyLmNlcnRpZmljYXRlc1RpdGxlIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlcnRpZmljYXRlc0l0ZW1zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlcnRpZmljYXRlSXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxyXFxufVxcclxcblxcclxcbi5jZXJ0aWZpY2F0ZUl0ZW06Zmlyc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VydGlmaWNhdGVJdGVtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5oaWxsZWxCYXNpYyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlsbGVsQWR2YW5jZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RzIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmRpdi5mcC1zbGlkZXNOYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LmZwLXNsaWRlc05hdiBhLmFjdGl2ZSBzcGFuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBNjYyMjtcXHJcXG59XFxyXFxuXFxyXFxuLmZwLWNvbnRyb2xBcnJvdyB7XFxyXFxuICAgIG1hcmdpbjogMCAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwQmFja2dyb3VuZCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwQmFja2dyb3VuZDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3dQb3B1cCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cENvbnRhY3Qge1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5waG90byB7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2NjIyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5waG90bzphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICBsZWZ0OiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIDEwMCUvY292ZXIgbm8tcmVwZWF0O1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZUl0ZW0ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn0gXFxyXFxuXFxyXFxuLnByb2ZpbGVUaXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGNvbG9yOiAjRkE2NjIyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XFxyXFxuICAgIC50ZWNobm9sb2dpZXNJdGVtOmJlZm9yZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTQ1cHgpIHtcXHJcXG4gICAgLmNlcnRpZmljYXRlSXRlbSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDQzMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5ODVweCkge1xcclxcblxcclxcbiAgICAuY2VydGlmaWNhdGUgaDIge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuY2VydGlmaWNhdGVJdGVtIHtcXHJcXG4gICAgICAgIGhlaWdodDogMjEwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNlcnRpZmljYXRlSXRlbS5oaWxsZWxBZHZhbmNlZCB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xcclxcblxcclxcbiAgICAuc2tpbGxJdGVtOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubXlTa2lsbHMgaDIge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2tpbGxJTUcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pdGVtVGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5za2lsbExldmVsIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xcclxcbiAgICAudGVjaG5vbG9naWVzTGlzdCB7XFxyXFxuICAgICAgICBjb2x1bW4tY291bnQ6IDE7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcxNXB4KSB7XFxyXFxuICAgIC5wb3B1cENvbnRhY3Qge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2ZpbGVUaXRsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTg5cHgpIHtcXHJcXG4gICAgLm1haW5UZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoMiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNraWxsc0l0ZW1zIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdkxpbmsge1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNraWxsSXRlbTpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNraWxsTGV2ZWwge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAycHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRlY2hub2xvZ2llcyBoMiB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZWNobm9sb2dpZXNMaXN0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY292ZXJUZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZnVsbHBhZ2UuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8qIVxyXG4gKiBmdWxsUGFnZSAzLjAuOFxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanNcclxuICpcclxuICogQGxpY2Vuc2UgR1BMdjMgZm9yIG9wZW4gc291cmNlIHVzZSBvbmx5XHJcbiAqIG9yIEZ1bGxwYWdlIENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcclxuICogaHR0cDovL2FsdmFyb3RyaWdvLmNvbS9mdWxsUGFnZS9wcmljaW5nL1xyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggaHR0cDovL2FsdmFyb3RyaWdvLmNvbS9mdWxsUGFnZSAtIEEgcHJvamVjdCBieSBBbHZhcm8gVHJpZ29cclxuICovXHJcbihmdW5jdGlvbiggcm9vdCwgd2luZG93LCBkb2N1bWVudCwgZmFjdG9yeSwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xyXG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cclxuICAgICAgICBkZWZpbmUoIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByb290LmZ1bGxwYWdlID0gZmFjdG9yeSh3aW5kb3csIGRvY3VtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3QuZnVsbHBhZ2U7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfSBlbHNlIGlmKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XHJcbiAgICAgICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUy5cclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnkod2luZG93LCBkb2N1bWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFscy5cclxuICAgICAgICB3aW5kb3cuZnVsbHBhZ2UgPSBmYWN0b3J5KHdpbmRvdywgZG9jdW1lbnQpO1xyXG4gICAgfVxyXG59KHRoaXMsIHdpbmRvdywgZG9jdW1lbnQsIGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpe1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIC8vIGtlZXBpbmcgY2VudHJhbCBzZXQgb2YgY2xhc3NuYW1lcyBhbmQgc2VsZWN0b3JzXHJcbiAgICB2YXIgV1JBUFBFUiA9ICAgICAgICAgICAgICAgJ2Z1bGxwYWdlLXdyYXBwZXInO1xyXG4gICAgdmFyIFdSQVBQRVJfU0VMID0gICAgICAgICAgICcuJyArIFdSQVBQRVI7XHJcblxyXG4gICAgLy8gc2xpbXNjcm9sbFxyXG4gICAgdmFyIFNDUk9MTEFCTEUgPSAgICAgICAgICAgICdmcC1zY3JvbGxhYmxlJztcclxuICAgIHZhciBTQ1JPTExBQkxFX1NFTCA9ICAgICAgICAnLicgKyBTQ1JPTExBQkxFO1xyXG5cclxuICAgIC8vIHV0aWxcclxuICAgIHZhciBSRVNQT05TSVZFID0gICAgICAgICAgICAnZnAtcmVzcG9uc2l2ZSc7XHJcbiAgICB2YXIgTk9fVFJBTlNJVElPTiA9ICAgICAgICAgJ2ZwLW5vdHJhbnNpdGlvbic7XHJcbiAgICB2YXIgREVTVFJPWUVEID0gICAgICAgICAgICAgJ2ZwLWRlc3Ryb3llZCc7XHJcbiAgICB2YXIgRU5BQkxFRCA9ICAgICAgICAgICAgICAgJ2ZwLWVuYWJsZWQnO1xyXG4gICAgdmFyIFZJRVdJTkdfUFJFRklYID0gICAgICAgICdmcC12aWV3aW5nJztcclxuICAgIHZhciBBQ1RJVkUgPSAgICAgICAgICAgICAgICAnYWN0aXZlJztcclxuICAgIHZhciBBQ1RJVkVfU0VMID0gICAgICAgICAgICAnLicgKyBBQ1RJVkU7XHJcbiAgICB2YXIgQ09NUExFVEVMWSA9ICAgICAgICAgICAgJ2ZwLWNvbXBsZXRlbHknO1xyXG4gICAgdmFyIENPTVBMRVRFTFlfU0VMID0gICAgICAgICcuJyArIENPTVBMRVRFTFk7XHJcblxyXG4gICAgLy8gc2VjdGlvblxyXG4gICAgdmFyIFNFQ1RJT05fREVGQVVMVF9TRUwgPSAgICcuc2VjdGlvbic7XHJcbiAgICB2YXIgU0VDVElPTiA9ICAgICAgICAgICAgICAgJ2ZwLXNlY3Rpb24nO1xyXG4gICAgdmFyIFNFQ1RJT05fU0VMID0gICAgICAgICAgICcuJyArIFNFQ1RJT047XHJcbiAgICB2YXIgU0VDVElPTl9BQ1RJVkVfU0VMID0gICAgU0VDVElPTl9TRUwgKyBBQ1RJVkVfU0VMO1xyXG4gICAgdmFyIFRBQkxFX0NFTEwgPSAgICAgICAgICAgICdmcC10YWJsZUNlbGwnO1xyXG4gICAgdmFyIFRBQkxFX0NFTExfU0VMID0gICAgICAgICcuJyArIFRBQkxFX0NFTEw7XHJcbiAgICB2YXIgQVVUT19IRUlHSFQgPSAgICAgICAgICAgJ2ZwLWF1dG8taGVpZ2h0JztcclxuICAgIHZhciBBVVRPX0hFSUdIVF9TRUwgPSAgICAgICAnLicgKyBBVVRPX0hFSUdIVDtcclxuICAgIHZhciBBVVRPX0hFSUdIVF9SRVNQT05TSVZFID0gJ2ZwLWF1dG8taGVpZ2h0LXJlc3BvbnNpdmUnO1xyXG4gICAgdmFyIEFVVE9fSEVJR0hUX1JFU1BPTlNJVkVfU0VMID0gJy4nICsgQVVUT19IRUlHSFRfUkVTUE9OU0lWRTtcclxuICAgIHZhciBOT1JNQUxfU0NST0xMID0gICAgICAgICAnZnAtbm9ybWFsLXNjcm9sbCc7XHJcbiAgICB2YXIgTk9STUFMX1NDUk9MTF9TRUwgPSAgICAgJy4nICsgTk9STUFMX1NDUk9MTDtcclxuXHJcbiAgICAvLyBzZWN0aW9uIG5hdlxyXG4gICAgdmFyIFNFQ1RJT05fTkFWID0gICAgICAgICAgICdmcC1uYXYnO1xyXG4gICAgdmFyIFNFQ1RJT05fTkFWX1NFTCA9ICAgICAgICcjJyArIFNFQ1RJT05fTkFWO1xyXG4gICAgdmFyIFNFQ1RJT05fTkFWX1RPT0xUSVAgPSAgICdmcC10b29sdGlwJztcclxuICAgIHZhciBTRUNUSU9OX05BVl9UT09MVElQX1NFTD0nLicrU0VDVElPTl9OQVZfVE9PTFRJUDtcclxuICAgIHZhciBTSE9XX0FDVElWRV9UT09MVElQID0gICAnZnAtc2hvdy1hY3RpdmUnO1xyXG5cclxuICAgIC8vIHNsaWRlXHJcbiAgICB2YXIgU0xJREVfREVGQVVMVF9TRUwgPSAgICAgJy5zbGlkZSc7XHJcbiAgICB2YXIgU0xJREUgPSAgICAgICAgICAgICAgICAgJ2ZwLXNsaWRlJztcclxuICAgIHZhciBTTElERV9TRUwgPSAgICAgICAgICAgICAnLicgKyBTTElERTtcclxuICAgIHZhciBTTElERV9BQ1RJVkVfU0VMID0gICAgICBTTElERV9TRUwgKyBBQ1RJVkVfU0VMO1xyXG4gICAgdmFyIFNMSURFU19XUkFQUEVSID0gICAgICAgICdmcC1zbGlkZXMnO1xyXG4gICAgdmFyIFNMSURFU19XUkFQUEVSX1NFTCA9ICAgICcuJyArIFNMSURFU19XUkFQUEVSO1xyXG4gICAgdmFyIFNMSURFU19DT05UQUlORVIgPSAgICAgICdmcC1zbGlkZXNDb250YWluZXInO1xyXG4gICAgdmFyIFNMSURFU19DT05UQUlORVJfU0VMID0gICcuJyArIFNMSURFU19DT05UQUlORVI7XHJcbiAgICB2YXIgVEFCTEUgPSAgICAgICAgICAgICAgICAgJ2ZwLXRhYmxlJztcclxuXHJcbiAgICAvLyBzbGlkZSBuYXZcclxuICAgIHZhciBTTElERVNfTkFWID0gICAgICAgICAgICAnZnAtc2xpZGVzTmF2JztcclxuICAgIHZhciBTTElERVNfTkFWX1NFTCA9ICAgICAgICAnLicgKyBTTElERVNfTkFWO1xyXG4gICAgdmFyIFNMSURFU19OQVZfTElOS19TRUwgPSAgIFNMSURFU19OQVZfU0VMICsgJyBhJztcclxuICAgIHZhciBTTElERVNfQVJST1cgPSAgICAgICAgICAnZnAtY29udHJvbEFycm93JztcclxuICAgIHZhciBTTElERVNfQVJST1dfU0VMID0gICAgICAnLicgKyBTTElERVNfQVJST1c7XHJcbiAgICB2YXIgU0xJREVTX1BSRVYgPSAgICAgICAgICAgJ2ZwLXByZXYnO1xyXG4gICAgdmFyIFNMSURFU19QUkVWX1NFTCA9ICAgICAgICcuJyArIFNMSURFU19QUkVWO1xyXG4gICAgdmFyIFNMSURFU19BUlJPV19QUkVWID0gICAgIFNMSURFU19BUlJPVyArICcgJyArIFNMSURFU19QUkVWO1xyXG4gICAgdmFyIFNMSURFU19BUlJPV19QUkVWX1NFTCA9IFNMSURFU19BUlJPV19TRUwgKyBTTElERVNfUFJFVl9TRUw7XHJcbiAgICB2YXIgU0xJREVTX05FWFQgPSAgICAgICAgICAgJ2ZwLW5leHQnO1xyXG4gICAgdmFyIFNMSURFU19ORVhUX1NFTCA9ICAgICAgICcuJyArIFNMSURFU19ORVhUO1xyXG4gICAgdmFyIFNMSURFU19BUlJPV19ORVhUID0gICAgIFNMSURFU19BUlJPVyArICcgJyArIFNMSURFU19ORVhUO1xyXG4gICAgdmFyIFNMSURFU19BUlJPV19ORVhUX1NFTCA9IFNMSURFU19BUlJPV19TRUwgKyBTTElERVNfTkVYVF9TRUw7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGlzZShjb250YWluZXJTZWxlY3Rvciwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBpc09LID0gb3B0aW9ucyAmJiBuZXcgUmVnRXhwKCcoW1xcXFxkXFxcXHddezh9LSl7M31bXFxcXGRcXFxcd117OH18Xig/PS4qP1tBLVldKSg/PS4qP1thLXldKSg/PS4qP1swLThdKSg/PS4qP1sjPyFAJCVeJiotXSkuezgsfSQnKS50ZXN0KG9wdGlvbnNbJ2xpJysnY2VuJysnc2VLJyArICdlJyArICd5J10pIHx8IGRvY3VtZW50LmRvbWFpbi5pbmRleE9mKCdhbCcrJ3Zhcm90cmknICsnZ28nICsgJy4nICsgJ2NvbScpID4gLTE7XHJcblxyXG4gICAgICAgIC8vIGNhY2hlIGNvbW1vbiBlbGVtZW50c1xyXG4gICAgICAgIHZhciAkaHRtbEJvZHkgPSAkKCdodG1sLCBib2R5Jyk7XHJcbiAgICAgICAgdmFyICRodG1sID0gJCgnaHRtbCcpWzBdO1xyXG4gICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKVswXTtcclxuXHJcbiAgICAgICAgLy9vbmx5IG9uY2UgbXkgZnJpZW5kIVxyXG4gICAgICAgIGlmKGhhc0NsYXNzKCRodG1sLCBFTkFCTEVEKSl7IGRpc3BsYXlXYXJuaW5ncygpOyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgdmFyIEZQID0ge307XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHNvbWUgZGVmYXVsdHMsIGV4dGVuZGluZyB0aGVtIHdpdGggYW55IG9wdGlvbnMgdGhhdCB3ZXJlIHByb3ZpZGVkXHJcbiAgICAgICAgb3B0aW9ucyA9IGRlZXBFeHRlbmQoe1xyXG4gICAgICAgICAgICAvL25hdmlnYXRpb25cclxuICAgICAgICAgICAgbWVudTogZmFsc2UsXHJcbiAgICAgICAgICAgIGFuY2hvcnM6W10sXHJcbiAgICAgICAgICAgIGxvY2tBbmNob3JzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25Qb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgbmF2aWdhdGlvblRvb2x0aXBzOiBbXSxcclxuICAgICAgICAgICAgc2hvd0FjdGl2ZVRvb2x0aXA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbGlkZXNOYXZpZ2F0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVzTmF2UG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICBzY3JvbGxCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBoeWJyaWQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgLy9zY3JvbGxpbmdcclxuICAgICAgICAgICAgY3NzMzogdHJ1ZSxcclxuICAgICAgICAgICAgc2Nyb2xsaW5nU3BlZWQ6IDcwMCxcclxuICAgICAgICAgICAgYXV0b1Njcm9sbGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgZml0VG9TZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBmaXRUb1NlY3Rpb25EZWxheTogMTAwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0Q3ViaWMnLFxyXG4gICAgICAgICAgICBlYXNpbmdjc3MzOiAnZWFzZScsXHJcbiAgICAgICAgICAgIGxvb3BCb3R0b206IGZhbHNlLFxyXG4gICAgICAgICAgICBsb29wVG9wOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9vcEhvcml6b250YWw6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNWZXJ0aWNhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNIb3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgc2Nyb2xsSG9yaXpvbnRhbGx5OiBmYWxzZSxcclxuICAgICAgICAgICAgaW50ZXJsb2NrZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBkcmFnQW5kTW92ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIG9mZnNldFNlY3Rpb25zOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVzZXRTbGlkZXJzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkaW5nRWZmZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgbm9ybWFsU2Nyb2xsRWxlbWVudHM6IG51bGwsXHJcbiAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93OiBmYWxzZSxcclxuICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3dSZXNldDogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcm9sbE92ZXJmbG93SGFuZGxlcjogd2luZG93LmZwX3Njcm9sbG92ZXJmbG93ID8gd2luZG93LmZwX3Njcm9sbG92ZXJmbG93LmlzY3JvbGxIYW5kbGVyIDogbnVsbCxcclxuICAgICAgICAgICAgc2Nyb2xsT3ZlcmZsb3dPcHRpb25zOiBudWxsLFxyXG4gICAgICAgICAgICB0b3VjaFNlbnNpdGl2aXR5OiA1LFxyXG4gICAgICAgICAgICB0b3VjaFdyYXBwZXI6IHR5cGVvZiBjb250YWluZXJTZWxlY3RvciA9PT0gJ3N0cmluZycgPyAkKGNvbnRhaW5lclNlbGVjdG9yKVswXSA6IGNvbnRhaW5lclNlbGVjdG9yLFxyXG4gICAgICAgICAgICBiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uOiBudWxsLFxyXG5cclxuICAgICAgICAgICAgLy9BY2Nlc3NpYmlsaXR5XHJcbiAgICAgICAgICAgIGtleWJvYXJkU2Nyb2xsaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBhbmltYXRlQW5jaG9yOiB0cnVlLFxyXG4gICAgICAgICAgICByZWNvcmRIaXN0b3J5OiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgLy9kZXNpZ25cclxuICAgICAgICAgICAgY29udHJvbEFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgY29udHJvbEFycm93Q29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgdmVydGljYWxDZW50ZXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgc2VjdGlvbnNDb2xvciA6IFtdLFxyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAwLFxyXG4gICAgICAgICAgICBmaXhlZEVsZW1lbnRzOiBudWxsLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiAwLCAvL2JhY2t3YXJkcyBjb21wYWJpdGlsaXR5IHdpdGggcmVzcG9uc2l2ZVdpZGR0aFxyXG4gICAgICAgICAgICByZXNwb25zaXZlV2lkdGg6IDAsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmVIZWlnaHQ6IDAsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmVTbGlkZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXJhbGxheDogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcmFsbGF4T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3JldmVhbCcsXHJcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiA2MixcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiAndHJhbnNsYXRlJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYXJkczogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhcmRzT3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDEwMCxcclxuICAgICAgICAgICAgICAgIGZhZGVDb250ZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZmFkZUJhY2tncm91bmQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIC8vQ3VzdG9tIHNlbGVjdG9yc1xyXG4gICAgICAgICAgICBzZWN0aW9uU2VsZWN0b3I6IFNFQ1RJT05fREVGQVVMVF9TRUwsXHJcbiAgICAgICAgICAgIHNsaWRlU2VsZWN0b3I6IFNMSURFX0RFRkFVTFRfU0VMLFxyXG5cclxuICAgICAgICAgICAgLy9ldmVudHNcclxuICAgICAgICAgICAgdjJjb21wYXRpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgYWZ0ZXJMb2FkOiBudWxsLFxyXG4gICAgICAgICAgICBvbkxlYXZlOiBudWxsLFxyXG4gICAgICAgICAgICBhZnRlclJlbmRlcjogbnVsbCxcclxuICAgICAgICAgICAgYWZ0ZXJSZXNpemU6IG51bGwsXHJcbiAgICAgICAgICAgIGFmdGVyUmVCdWlsZDogbnVsbCxcclxuICAgICAgICAgICAgYWZ0ZXJTbGlkZUxvYWQ6IG51bGwsXHJcbiAgICAgICAgICAgIG9uU2xpZGVMZWF2ZTogbnVsbCxcclxuICAgICAgICAgICAgYWZ0ZXJSZXNwb25zaXZlOiBudWxsLFxyXG5cclxuICAgICAgICAgICAgbGF6eUxvYWRpbmc6IHRydWVcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy9mbGFnIHRvIGF2b2lkIHZlcnkgZmFzdCBzbGlkaW5nIGZvciBsYW5kc2NhcGUgc2xpZGVyc1xyXG4gICAgICAgIHZhciBzbGlkZU1vdmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgaXNUb3VjaERldmljZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkfEFuZHJvaWR8cGxheWJvb2t8c2lsa3xCbGFja0JlcnJ5fEJCMTB8V2luZG93cyBQaG9uZXxUaXplbnxCYWRhfHdlYk9TfElFTW9iaWxlfE9wZXJhIE1pbmkpLyk7XHJcbiAgICAgICAgdmFyIGlzVG91Y2ggPSAoKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgKG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMCkgfHwgKG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cykpO1xyXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0eXBlb2YgY29udGFpbmVyU2VsZWN0b3IgPT09ICdzdHJpbmcnID8gJChjb250YWluZXJTZWxlY3RvcilbMF0gOiBjb250YWluZXJTZWxlY3RvcjtcclxuICAgICAgICB2YXIgd2luZG93c0hlaWdodCA9IGdldFdpbmRvd0hlaWdodCgpO1xyXG4gICAgICAgIHZhciB3aW5kb3dzV2lkdGggPSBnZXRXaW5kb3dXaWR0aCgpO1xyXG4gICAgICAgIHZhciBpc1Jlc2l6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGlzV2luZG93Rm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxlZERlc3Rpbnk7XHJcbiAgICAgICAgdmFyIGxhc3RTY3JvbGxlZFNsaWRlO1xyXG4gICAgICAgIHZhciBjYW5TY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzY3JvbGxpbmdzID0gW107XHJcbiAgICAgICAgdmFyIGNvbnRyb2xQcmVzc2VkO1xyXG4gICAgICAgIHZhciBzdGFydGluZ1NlY3Rpb247XHJcbiAgICAgICAgdmFyIGlzU2Nyb2xsQWxsb3dlZCA9IHt9O1xyXG4gICAgICAgIGlzU2Nyb2xsQWxsb3dlZC5tID0geyAgJ3VwJzp0cnVlLCAnZG93bic6dHJ1ZSwgJ2xlZnQnOnRydWUsICdyaWdodCc6dHJ1ZSB9O1xyXG4gICAgICAgIGlzU2Nyb2xsQWxsb3dlZC5rID0gZGVlcEV4dGVuZCh7fSwgaXNTY3JvbGxBbGxvd2VkLm0pO1xyXG4gICAgICAgIHZhciBNU1BvaW50ZXIgPSBnZXRNU1BvaW50ZXIoKTtcclxuICAgICAgICB2YXIgZXZlbnRzID0ge1xyXG4gICAgICAgICAgICB0b3VjaG1vdmU6ICdvbnRvdWNobW92ZScgaW4gd2luZG93ID8gJ3RvdWNobW92ZScgOiAgTVNQb2ludGVyLm1vdmUsXHJcbiAgICAgICAgICAgIHRvdWNoc3RhcnQ6ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyA/ICd0b3VjaHN0YXJ0JyA6ICBNU1BvaW50ZXIuZG93blxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHNjcm9sbEJhckhhbmRsZXI7XHJcblxyXG4gICAgICAgIC8vIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3VkYWNpdHkvdWQ4OTEvYmxvYi9naC1wYWdlcy9sZXNzb24yLWZvY3VzLzA3LW1vZGFscy1hbmQta2V5Ym9hcmQtdHJhcHMvc29sdXRpb24vbW9kYWwuanNcclxuICAgICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSAnYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlmcmFtZSwgb2JqZWN0LCBlbWJlZCwgW3RhYmluZGV4PVwiMFwiXSwgW2NvbnRlbnRlZGl0YWJsZV0nO1xyXG5cclxuICAgICAgICAvL2NoZWtzIGZvciBwYXNzaXZlIGV2ZW50IHN1cHBvcnRcclxuICAgICAgICB2YXIgZ19zdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIGdfc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RQYXNzaXZlXCIsIG51bGwsIG9wdHMpO1xyXG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLCBudWxsLCBvcHRzKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICAgICAgICAvL3RpbWVvdXRzXHJcbiAgICAgICAgdmFyIHJlc2l6ZUlkO1xyXG4gICAgICAgIHZhciByZXNpemVIYW5kbGVySWQ7XHJcbiAgICAgICAgdmFyIGFmdGVyU2VjdGlvbkxvYWRzSWQ7XHJcbiAgICAgICAgdmFyIGFmdGVyU2xpZGVMb2Fkc0lkO1xyXG4gICAgICAgIHZhciBzY3JvbGxJZDtcclxuICAgICAgICB2YXIgc2Nyb2xsSWQyO1xyXG4gICAgICAgIHZhciBrZXlkb3duSWQ7XHJcbiAgICAgICAgdmFyIGdfZG91YmxlQ2hlY2tIZWlnaHRJZDtcclxuICAgICAgICB2YXIgb3JpZ2luYWxzID0gZGVlcEV4dGVuZCh7fSwgb3B0aW9ucyk7IC8vZGVlcCBjb3B5XHJcbiAgICAgICAgdmFyIGFjdGl2ZUFuaW1hdGlvbjtcclxuICAgICAgICB2YXIgZ19pbml0aWFsQW5jaG9yc0luRG9tID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGdfY2FuRmlyZU1vdXNlRW50ZXJOb3JtYWxTY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgIHZhciBnX21lZGlhTG9hZGVkSWQ7XHJcbiAgICAgICAgdmFyIGV4dGVuc2lvbnMgPSBbXHJcbiAgICAgICAgICAgICdwYXJhbGxheCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxPdmVyZmxvd1Jlc2V0JyxcclxuICAgICAgICAgICAgJ2RyYWdBbmRNb3ZlJyxcclxuICAgICAgICAgICAgJ29mZnNldFNlY3Rpb25zJyxcclxuICAgICAgICAgICAgJ2ZhZGluZ0VmZmVjdCcsXHJcbiAgICAgICAgICAgICdyZXNwb25zaXZlU2xpZGVzJyxcclxuICAgICAgICAgICAgJ2NvbnRpbnVvdXNIb3Jpem9udGFsJyxcclxuICAgICAgICAgICAgJ2ludGVybG9ja2VkU2xpZGVzJyxcclxuICAgICAgICAgICAgJ3Njcm9sbEhvcml6b250YWxseScsXHJcbiAgICAgICAgICAgICdyZXNldFNsaWRlcnMnLFxyXG4gICAgICAgICAgICAnY2FyZHMnXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZGlzcGxheVdhcm5pbmdzKCk7XHJcblxyXG4gICAgICAgIC8vZWFzZUluT3V0Q3ViaWMgYW5pbWF0aW9uIGluY2x1ZGVkIGluIHRoZSBwbHVnaW5cclxuICAgICAgICB3aW5kb3cuZnBfZWFzaW5ncyA9IGRlZXBFeHRlbmQod2luZG93LmZwX2Vhc2luZ3MsIHtcclxuICAgICAgICAgICAgZWFzZUluT3V0Q3ViaWM6IGZ1bmN0aW9uICh0LCBiLCBjLCBkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0ICsgYjtyZXR1cm4gYy8yKigodC09MikqdCp0ICsgMikgKyBiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgYXV0b1Njcm9sbCBvcHRpb24uXHJcbiAgICAgICAgKiBJdCBjaGFuZ2VzIHRoZSBzY3JvbGwgYmFyIHZpc2liaWxpdHkgYW5kIHRoZSBoaXN0b3J5IG9mIHRoZSBzaXRlIGFzIGEgcmVzdWx0LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0QXV0b1Njcm9sbGluZyh2YWx1ZSwgdHlwZSl7XHJcbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgdGhlIHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgICAgICAgIGlmKCF2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBzaWxlbnRTY3JvbGwoMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldFZhcmlhYmxlU3RhdGUoJ2F1dG9TY3JvbGxpbmcnLCB2YWx1ZSwgdHlwZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXTtcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiAhb3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgY3NzKCRodG1sQm9keSwge1xyXG4gICAgICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMTAwJSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFJlY29yZEhpc3Rvcnkob3JpZ2luYWxzLnJlY29yZEhpc3RvcnksICdpbnRlcm5hbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vZm9yIElFIHRvdWNoIGRldmljZXNcclxuICAgICAgICAgICAgICAgIGNzcyhjb250YWluZXIsIHtcclxuICAgICAgICAgICAgICAgICAgICAnLW1zLXRvdWNoLWFjdGlvbic6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAndG91Y2gtYWN0aW9uJzogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50ICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbW92aW5nIHRoZSBjb250YWluZXIgdXBcclxuICAgICAgICAgICAgICAgICAgICBzaWxlbnRTY3JvbGwoZWxlbWVudC5vZmZzZXRUb3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNzcygkaHRtbEJvZHksIHtcclxuICAgICAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnIDogJ3Zpc2libGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdoZWlnaHQnIDogJ2luaXRpYWwnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVjb3JkSGlzdG9yeSA9ICFvcHRpb25zLmF1dG9TY3JvbGxpbmcgPyBmYWxzZSA6IG9yaWdpbmFscy5yZWNvcmRIaXN0b3J5O1xyXG4gICAgICAgICAgICAgICAgc2V0UmVjb3JkSGlzdG9yeShyZWNvcmRIaXN0b3J5LCAnaW50ZXJuYWwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2ZvciBJRSB0b3VjaCBkZXZpY2VzXHJcbiAgICAgICAgICAgICAgICBjc3MoY29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJy1tcy10b3VjaC1hY3Rpb24nOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAndG91Y2gtYWN0aW9uJzogJydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHRoZSBwYWdlIHRvIHRoZSBzZWN0aW9uIHdpdGggbm8gYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFNldHRpbmdzID0gZ2V0U2Nyb2xsU2V0dGluZ3MoZWxlbWVudC5vZmZzZXRUb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFNldHRpbmdzLmVsZW1lbnQuc2Nyb2xsVG8oMCwgc2Nyb2xsU2V0dGluZ3Mub3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGVmaW5lcyB3aGV0ZXIgdG8gcmVjb3JkIHRoZSBoaXN0b3J5IGZvciBlYWNoIGhhc2ggY2hhbmdlIGluIHRoZSBVUkwuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRSZWNvcmRIaXN0b3J5KHZhbHVlLCB0eXBlKXtcclxuICAgICAgICAgICAgc2V0VmFyaWFibGVTdGF0ZSgncmVjb3JkSGlzdG9yeScsIHZhbHVlLCB0eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGVmaW5lcyB0aGUgc2Nyb2xsaW5nIHNwZWVkXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRTY3JvbGxpbmdTcGVlZCh2YWx1ZSwgdHlwZSl7XHJcbiAgICAgICAgICAgIHNldFZhcmlhYmxlU3RhdGUoJ3Njcm9sbGluZ1NwZWVkJywgdmFsdWUsIHR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIGZpdFRvU2VjdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Rml0VG9TZWN0aW9uKHZhbHVlLCB0eXBlKXtcclxuICAgICAgICAgICAgc2V0VmFyaWFibGVTdGF0ZSgnZml0VG9TZWN0aW9uJywgdmFsdWUsIHR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIGxvY2tBbmNob3JzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRMb2NrQW5jaG9ycyh2YWx1ZSl7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubG9ja0FuY2hvcnMgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBvciByZW1vdmUgdGhlIHBvc3NpYmlsaXR5IG9mIHNjcm9sbGluZyB0aHJvdWdoIHNlY3Rpb25zIGJ5IHVzaW5nIHRoZSBtb3VzZSB3aGVlbCBvciB0aGUgdHJhY2twYWQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRNb3VzZVdoZWVsU2Nyb2xsaW5nKHZhbHVlKXtcclxuICAgICAgICAgICAgaWYodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgYWRkTW91c2VXaGVlbEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIGFkZE1pZGRsZVdoZWVsSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZU1vdXNlV2hlZWxIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVNaWRkbGVXaGVlbEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIG9yIHJlbW92ZSB0aGUgcG9zc2liaWxpdHkgb2Ygc2Nyb2xsaW5nIHRocm91Z2ggc2VjdGlvbnMgYnkgdXNpbmcgdGhlIG1vdXNlIHdoZWVsL3RyYWNrcGFkIG9yIHRvdWNoIGdlc3R1cmVzLlxyXG4gICAgICAgICogT3B0aW9uYWxseSBhIHNlY29uZCBwYXJhbWV0ZXIgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSB0aGUgZGlyZWN0aW9uIGZvciB3aGljaCB0aGUgYWN0aW9uIHdpbGwgYmUgYXBwbGllZC5cclxuICAgICAgICAqXHJcbiAgICAgICAgKiBAcGFyYW0gZGlyZWN0aW9ucyBzdHJpbmcgY29udGFpbmluZyB0aGUgZGlyZWN0aW9uIG9yIGRpcmVjdGlvbnMgc2VwYXJhdGVkIGJ5IGNvbW1hLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0QWxsb3dTY3JvbGxpbmcodmFsdWUsIGRpcmVjdGlvbnMpe1xyXG4gICAgICAgICAgICBpZih0eXBlb2YgZGlyZWN0aW9ucyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnMucmVwbGFjZSgvIC9nLCcnKS5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJc1Njcm9sbEFsbG93ZWQodmFsdWUsIGRpcmVjdGlvbiwgJ20nKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Njcm9sbEFsbG93ZWQodmFsdWUsICdhbGwnLCAnbScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgb3IgcmVtb3ZlIHRoZSBtb3VzZSB3aGVlbCBoaWphY2tpbmdcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldE1vdXNlSGlqYWNrKHZhbHVlKXtcclxuICAgICAgICAgICAgaWYodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgc2V0TW91c2VXaGVlbFNjcm9sbGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGFkZFRvdWNoSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldE1vdXNlV2hlZWxTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlVG91Y2hIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBvciByZW1vdmUgdGhlIHBvc3NpYmlsaXR5IG9mIHNjcm9sbGluZyB0aHJvdWdoIHNlY3Rpb25zIGJ5IHVzaW5nIHRoZSBrZXlib2FyZCBhcnJvdyBrZXlzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRLZXlib2FyZFNjcm9sbGluZyh2YWx1ZSwgZGlyZWN0aW9ucyl7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBkaXJlY3Rpb25zICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zID0gZGlyZWN0aW9ucy5yZXBsYWNlKC8gL2csJycpLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNTY3JvbGxBbGxvd2VkKHZhbHVlLCBkaXJlY3Rpb24sICdrJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRJc1Njcm9sbEFsbG93ZWQodmFsdWUsICdhbGwnLCAnaycpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5rZXlib2FyZFNjcm9sbGluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIE1vdmVzIHRoZSBwYWdlIHVwIG9uZSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVNlY3Rpb25VcCgpe1xyXG4gICAgICAgICAgICB2YXIgcHJldiA9IHByZXZVbnRpbCgkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0sIFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgIC8vbG9vcGluZyB0byB0aGUgYm90dG9tIGlmIHRoZXJlJ3Mgbm8gbW9yZSBzZWN0aW9ucyBhYm92ZVxyXG4gICAgICAgICAgICBpZiAoIXByZXYgJiYgKG9wdGlvbnMubG9vcFRvcCB8fCBvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCkpIHtcclxuICAgICAgICAgICAgICAgIHByZXYgPSBsYXN0KCQoU0VDVElPTl9TRUwpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHByZXYgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFnZShwcmV2LCBudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNb3ZlcyB0aGUgcGFnZSBkb3duIG9uZSBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVNlY3Rpb25Eb3duKCl7XHJcbiAgICAgICAgICAgIHZhciBuZXh0ID0gbmV4dFVudGlsKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSwgU0VDVElPTl9TRUwpO1xyXG5cclxuICAgICAgICAgICAgLy9sb29waW5nIHRvIHRoZSB0b3AgaWYgdGhlcmUncyBubyBtb3JlIHNlY3Rpb25zIGJlbG93XHJcbiAgICAgICAgICAgIGlmKCFuZXh0ICYmXHJcbiAgICAgICAgICAgICAgICAob3B0aW9ucy5sb29wQm90dG9tIHx8IG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsKSl7XHJcbiAgICAgICAgICAgICAgICBuZXh0ID0gJChTRUNUSU9OX1NFTClbMF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG5leHQgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQYWdlKG5leHQsIG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNb3ZlcyB0aGUgcGFnZSB0byB0aGUgZ2l2ZW4gc2VjdGlvbiBhbmQgc2xpZGUgd2l0aCBubyBhbmltYXRpb24uXHJcbiAgICAgICAgKiBBbmNob3JzIG9yIGluZGV4IHBvc2l0aW9ucyBjYW4gYmUgdXNlZCBhcyBwYXJhbXMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzaWxlbnRNb3ZlVG8oc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3Ipe1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxpbmdTcGVlZCAoMCwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgIG1vdmVUbyhzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcik7XHJcbiAgICAgICAgICAgIHNldFNjcm9sbGluZ1NwZWVkIChvcmlnaW5hbHMuc2Nyb2xsaW5nU3BlZWQsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNb3ZlcyB0aGUgcGFnZSB0byB0aGUgZ2l2ZW4gc2VjdGlvbiBhbmQgc2xpZGUuXHJcbiAgICAgICAgKiBBbmNob3JzIG9yIGluZGV4IHBvc2l0aW9ucyBjYW4gYmUgdXNlZCBhcyBwYXJhbXMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBtb3ZlVG8oc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3Ipe1xyXG4gICAgICAgICAgICB2YXIgZGVzdGlueSA9IGdldFNlY3Rpb25CeUFuY2hvcihzZWN0aW9uQW5jaG9yKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2xpZGVBbmNob3IgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2VBbmRTbGlkZShzZWN0aW9uQW5jaG9yLCBzbGlkZUFuY2hvcik7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGRlc3RpbnkgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQYWdlKGRlc3RpbnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNsaWRlcyByaWdodCB0aGUgc2xpZGVyIG9mIHRoZSBhY3RpdmUgc2VjdGlvbi5cclxuICAgICAgICAqIE9wdGlvbmFsIGBzZWN0aW9uYCBwYXJhbS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVTbGlkZVJpZ2h0KHNlY3Rpb24pe1xyXG4gICAgICAgICAgICBtb3ZlU2xpZGUoJ3JpZ2h0Jywgc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNsaWRlcyBsZWZ0IHRoZSBzbGlkZXIgb2YgdGhlIGFjdGl2ZSBzZWN0aW9uLlxyXG4gICAgICAgICogT3B0aW9uYWwgYHNlY3Rpb25gIHBhcmFtLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gbW92ZVNsaWRlTGVmdChzZWN0aW9uKXtcclxuICAgICAgICAgICAgbW92ZVNsaWRlKCdsZWZ0Jywgc2VjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaGVuIHJlc2l6aW5nIGlzIGZpbmlzaGVkLCB3ZSBhZGp1c3QgdGhlIHNsaWRlcyBzaXplcyBhbmQgcG9zaXRpb25zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVCdWlsZChyZXNpemluZyl7XHJcbiAgICAgICAgICAgIGlmKGhhc0NsYXNzKGNvbnRhaW5lciwgREVTVFJPWUVEKSl7IHJldHVybjsgfSAgLy9ub3RoaW5nIHRvIGRvIGlmIHRoZSBwbHVnaW4gd2FzIGRlc3Ryb3llZFxyXG5cclxuICAgICAgICAgICAgaXNSZXNpemluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvL3VwZGF0aW5nIGdsb2JhbCB2YXJzXHJcbiAgICAgICAgICAgIHdpbmRvd3NIZWlnaHQgPSBnZXRXaW5kb3dIZWlnaHQoKTtcclxuICAgICAgICAgICAgd2luZG93c1dpZHRoID0gZ2V0V2luZG93V2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9ucyA9ICQoU0VDVElPTl9TRUwpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbiA9IHNlY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlc1dyYXAgPSAkKFNMSURFU19XUkFQUEVSX1NFTCwgc2VjdGlvbilbMF07XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVzID0gJChTTElERV9TRUwsIHNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWRqdXN0aW5nIHRoZSBoZWlnaHQgb2YgdGhlIHRhYmxlLWNlbGwgZm9yIElFIGFuZCBGaXJlZm94XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNzcygkKFRBQkxFX0NFTExfU0VMLCBzZWN0aW9uKSwgeydoZWlnaHQnOiBnZXRUYWJsZUhlaWdodChzZWN0aW9uKSArICdweCd9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjc3Moc2VjdGlvbiwgeydoZWlnaHQnOiB3aW5kb3dzSGVpZ2h0ICsgJ3B4J30pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWRqdXN0aW5nIHRoZSBwb3NpdGlvbiBmbyB0aGUgRlVMTCBXSURUSCBzbGlkZXMuLi5cclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmRzY2FwZVNjcm9sbChzbGlkZXNXcmFwLCAkKFNMSURFX0FDVElWRV9TRUwsIHNsaWRlc1dyYXApWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxCYXJIYW5kbGVyLmNyZWF0ZVNjcm9sbEJhckZvckFsbCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VjdGlvbiA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXTtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25JbmRleCA9IGluZGV4KGFjdGl2ZVNlY3Rpb24sIFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgIC8vaXNuJ3QgaXQgdGhlIGZpcnN0IHNlY3Rpb24/XHJcbiAgICAgICAgICAgIGlmKHNlY3Rpb25JbmRleCl7XHJcbiAgICAgICAgICAgICAgICAvL2FkanVzdGluZyB0aGUgcG9zaXRpb24gZm9yIHRoZSBjdXJyZW50IHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIHNpbGVudE1vdmVUbyhzZWN0aW9uSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXNSZXNpemluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZihpc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyUmVzaXplICkgJiYgcmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlclJlc2l6ZS5jYWxsKGNvbnRhaW5lciwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaXNGdW5jdGlvbiggb3B0aW9ucy5hZnRlclJlQnVpbGQgKSAmJiAhcmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlclJlQnVpbGQuY2FsbChjb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVybWluZXMgd2hldGhlciBmdWxscGFnZS5qcyBpcyBpbiByZXNwb25zaXZlIG1vZGUgb3Igbm90LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gaXNSZXNwb25zaXZlTW9kZSgpe1xyXG4gICAgICAgICAgIHJldHVybiBoYXNDbGFzcygkYm9keSwgUkVTUE9OU0lWRSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFR1cm5zIGZ1bGxQYWdlLmpzIHRvIG5vcm1hbCBzY3JvbGxpbmcgbW9kZSB3aGVuIHRoZSB2aWV3cG9ydCBgd2lkdGhgIG9yIGBoZWlnaHRgXHJcbiAgICAgICAgKiBhcmUgc21hbGxlciB0aGFuIHRoZSBzZXQgbGltaXQgdmFsdWVzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0UmVzcG9uc2l2ZShhY3RpdmUpe1xyXG4gICAgICAgICAgICB2YXIgaXNSZXNwb25zaXZlID0gaXNSZXNwb25zaXZlTW9kZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYoYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgIGlmKCFpc1Jlc3BvbnNpdmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEF1dG9TY3JvbGxpbmcoZmFsc2UsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEZpdFRvU2VjdGlvbihmYWxzZSwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZSgkKFNFQ1RJT05fTkFWX1NFTCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKCRib2R5LCBSRVNQT05TSVZFKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihpc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyUmVzcG9uc2l2ZSApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlclJlc3BvbnNpdmUuY2FsbCggY29udGFpbmVyLCBhY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy93aGVuIG9uIHBhZ2UgbG9hZCwgd2Ugd2lsbCByZW1vdmUgc2Nyb2xsb3ZlcmZsb3cgaWYgbmVjZXNzYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbEJhckhhbmRsZXIuY3JlYXRlU2Nyb2xsQmFyRm9yQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoaXNSZXNwb25zaXZlKXtcclxuICAgICAgICAgICAgICAgIHNldEF1dG9TY3JvbGxpbmcob3JpZ2luYWxzLmF1dG9TY3JvbGxpbmcsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICAgICAgc2V0Rml0VG9TZWN0aW9uKG9yaWdpbmFscy5hdXRvU2Nyb2xsaW5nLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICAgICAgICAgIHNob3coJChTRUNUSU9OX05BVl9TRUwpKTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKCRib2R5LCBSRVNQT05TSVZFKTtcclxuICAgICAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJSZXNwb25zaXZlICkpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYWZ0ZXJSZXNwb25zaXZlLmNhbGwoIGNvbnRhaW5lciwgYWN0aXZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoY29udGFpbmVyKXtcclxuICAgICAgICAgICAgLy9wdWJsaWMgZnVuY3Rpb25zXHJcbiAgICAgICAgICAgIEZQLnZlcnNpb24gPSAnMy4wLjgnO1xyXG4gICAgICAgICAgICBGUC5zZXRBdXRvU2Nyb2xsaW5nID0gc2V0QXV0b1Njcm9sbGluZztcclxuICAgICAgICAgICAgRlAuc2V0UmVjb3JkSGlzdG9yeSA9IHNldFJlY29yZEhpc3Rvcnk7XHJcbiAgICAgICAgICAgIEZQLnNldFNjcm9sbGluZ1NwZWVkID0gc2V0U2Nyb2xsaW5nU3BlZWQ7XHJcbiAgICAgICAgICAgIEZQLnNldEZpdFRvU2VjdGlvbiA9IHNldEZpdFRvU2VjdGlvbjtcclxuICAgICAgICAgICAgRlAuc2V0TG9ja0FuY2hvcnMgPSBzZXRMb2NrQW5jaG9ycztcclxuICAgICAgICAgICAgRlAuc2V0TW91c2VXaGVlbFNjcm9sbGluZyA9IHNldE1vdXNlV2hlZWxTY3JvbGxpbmc7XHJcbiAgICAgICAgICAgIEZQLnNldEFsbG93U2Nyb2xsaW5nID0gc2V0QWxsb3dTY3JvbGxpbmc7XHJcbiAgICAgICAgICAgIEZQLnNldEtleWJvYXJkU2Nyb2xsaW5nID0gc2V0S2V5Ym9hcmRTY3JvbGxpbmc7XHJcbiAgICAgICAgICAgIEZQLm1vdmVTZWN0aW9uVXAgPSBtb3ZlU2VjdGlvblVwO1xyXG4gICAgICAgICAgICBGUC5tb3ZlU2VjdGlvbkRvd24gPSBtb3ZlU2VjdGlvbkRvd247XHJcbiAgICAgICAgICAgIEZQLnNpbGVudE1vdmVUbyA9IHNpbGVudE1vdmVUbztcclxuICAgICAgICAgICAgRlAubW92ZVRvID0gbW92ZVRvO1xyXG4gICAgICAgICAgICBGUC5tb3ZlU2xpZGVSaWdodCA9IG1vdmVTbGlkZVJpZ2h0O1xyXG4gICAgICAgICAgICBGUC5tb3ZlU2xpZGVMZWZ0ID0gbW92ZVNsaWRlTGVmdDtcclxuICAgICAgICAgICAgRlAuZml0VG9TZWN0aW9uID0gZml0VG9TZWN0aW9uO1xyXG4gICAgICAgICAgICBGUC5yZUJ1aWxkID0gcmVCdWlsZDtcclxuICAgICAgICAgICAgRlAuc2V0UmVzcG9uc2l2ZSA9IHNldFJlc3BvbnNpdmU7XHJcbiAgICAgICAgICAgIEZQLmdldEZ1bGxwYWdlRGF0YSA9IGZ1bmN0aW9uKCl7IHJldHVybiBvcHRpb25zOyB9O1xyXG4gICAgICAgICAgICBGUC5kZXN0cm95ID0gZGVzdHJveTtcclxuICAgICAgICAgICAgRlAuZ2V0QWN0aXZlU2VjdGlvbiA9IGdldEFjdGl2ZVNlY3Rpb247XHJcbiAgICAgICAgICAgIEZQLmdldEFjdGl2ZVNsaWRlID0gZ2V0QWN0aXZlU2xpZGU7XHJcblxyXG4gICAgICAgICAgICBGUC50ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAnMHB4JyxcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTNkOiAndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCknLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlM2RIOiAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAkKG9wdGlvbnMuc2VjdGlvblNlbGVjdG9yLCBjb250YWluZXIpLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKCd0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgIH0pKCksXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAkKG9wdGlvbnMuc2VjdGlvblNlbGVjdG9yLCBjb250YWluZXIpLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgIH0pKCksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgc2V0QXV0b1Njcm9sbGluZzogc2V0QXV0b1Njcm9sbGluZ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9mdW5jdGlvbnMgd2Ugd2FudCB0byBzaGFyZSBhY3Jvc3MgZmlsZXMgYnV0IHdoaWNoIGFyZSBub3RcclxuICAgICAgICAgICAgLy9tZWFuIHRvIGJlIHVzZWQgb24gdGhlaXIgb3duIGJ5IGRldmVsb3BlcnNcclxuICAgICAgICAgICAgRlAuc2hhcmVkID0ge1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXJSZW5kZXJBY3Rpb25zOiBhZnRlclJlbmRlckFjdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBpc05vcm1hbFNjcm9sbEVsZW1lbnQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuZnVsbHBhZ2VfYXBpID0gRlA7XHJcblxyXG4gICAgICAgICAgICAvL3VzaW5nIGpRdWVyeSBpbml0aWFsaXphdGlvbj8gQ3JlYXRpbmcgdGhlICQuZm4uZnVsbHBhZ2Ugb2JqZWN0XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuJCl7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhGUCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuJC5mbi5mdWxscGFnZVtrZXldID0gRlBba2V5XTsgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbml0KCk7XHJcblxyXG4gICAgICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAgICAgICAgIC8vaWYgY3NzMyBpcyBub3Qgc3VwcG9ydGVkLCBpdCB3aWxsIHVzZSBqUXVlcnkgYW5pbWF0aW9uc1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLmNzczMpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jc3MzID0gc3VwcG9ydDNkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsQmFyID0gb3B0aW9ucy5zY3JvbGxCYXIgfHwgb3B0aW9ucy5oeWJyaWQ7XHJcblxyXG4gICAgICAgICAgICBzZXRPcHRpb25zRnJvbURPTSgpO1xyXG4gICAgICAgICAgICBwcmVwYXJlRG9tKCk7XHJcbiAgICAgICAgICAgIHNldEFsbG93U2Nyb2xsaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRNb3VzZUhpamFjayh0cnVlKTtcclxuICAgICAgICAgICAgc2V0QXV0b1Njcm9sbGluZyhvcHRpb25zLmF1dG9TY3JvbGxpbmcsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICByZXNwb25zaXZlKCk7XHJcblxyXG4gICAgICAgICAgICAvL3NldHRpbmcgdGhlIGNsYXNzIGZvciB0aGUgYm9keSBlbGVtZW50XHJcbiAgICAgICAgICAgIHNldEJvZHlDbGFzcygpO1xyXG5cclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyl7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb0FuY2hvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc2Nyb2xsVG9BbmNob3IpO1xyXG5cclxuICAgICAgICAgICAgLy9pZiB3ZSB1c2Ugc2Nyb2xsT3ZlcmZsb3cgd2UnbGwgZmlyZSBhZnRlclJlbmRlciBpbiB0aGUgc2Nyb2xsb3ZlcmZsb3cgZmlsZVxyXG4gICAgICAgICAgICBpZighb3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBhZnRlclJlbmRlckFjdGlvbnMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZG91YmxlQ2hlY2tIZWlnaHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKXtcclxuXHJcbiAgICAgICAgICAgIC8vd2hlbiBzY3JvbGxpbmcuLi5cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgLy9kZXRlY3RpbmcgYW55IGNoYW5nZSBvbiB0aGUgVVJMIHRvIHNjcm9sbCB0byB0aGUgZ2l2ZW4gYW5jaG9yIGxpbmtcclxuICAgICAgICAgICAgLy8oYSB3YXkgdG8gZGV0ZWN0IGJhY2sgaGlzdG9yeSBidXR0b24gYXMgd2UgcGxheSB3aXRoIHRoZSBoYXNoZXMgb24gdGhlIFVSTClcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBoYXNoQ2hhbmdlSGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICAvL3doZW4gb3BlbmluZyBhIG5ldyB0YWIgKGN0cmwgKyB0KSwgYGNvbnRyb2xgIHdvbid0IGJlIHByZXNzZWQgd2hlbiBjb21pbmcgYmFjay5cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBibHVySGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICAvL3doZW4gcmVzaXppbmcgdGhlIHNpdGUsIHdlIGFkanVzdCB0aGUgaGVpZ2h0cyBvZiB0aGUgc2VjdGlvbnMsIHNsaW1TY3JvbGwuLi5cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgLy9TbGlkaW5nIHdpdGggYXJyb3cga2V5cywgYm90aCwgdmVydGljYWwgYW5kIGhvcml6b250YWxcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd25IYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vdG8gcHJldmVudCBzY3JvbGxpbmcgd2hpbGUgem9vbWluZ1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICAvL1Njcm9sbHMgdG8gdGhlIHNlY3Rpb24gd2hlbiBjbGlja2luZyB0aGUgbmF2aWdhdGlvbiBidWxsZXRcclxuICAgICAgICAgICAgLy9zaW11bGF0aW5nIHRoZSBqUXVlcnkgLm9uKCdjbGljaycpIGV2ZW50IHVzaW5nIGRlbGVnYXRpb25cclxuICAgICAgICAgICAgWydjbGljaycsICd0b3VjaHN0YXJ0J10uZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGRlbGVnYXRlZEV2ZW50cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICogQXBwbHlpbmcgbm9ybWFsU2Nyb2xsIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICAqIElnbm9yaW5nIHRoZSBzY3JvbGxzIG92ZXIgdGhlIHNwZWNpZmllZCBzZWxlY3RvcnMuXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMubm9ybWFsU2Nyb2xsRWxlbWVudHMpe1xyXG4gICAgICAgICAgICAgICAgWydtb3VzZWVudGVyJywgJ3RvdWNoc3RhcnQnXS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50TmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yTW91c2VMZWF2ZU9yVG91Y2goZXZlbnROYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBbJ21vdXNlbGVhdmUnLCAndG91Y2hlbmQnXS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50TmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICBmb3JNb3VzZUxlYXZlT3JUb3VjaChldmVudE5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRlbGVnYXRlZEV2ZW50cyhlKXtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgaWYodGFyZ2V0ICYmIGNsb3Nlc3QodGFyZ2V0LCBTRUNUSU9OX05BVl9TRUwgKyAnIGEnKSl7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uQnVsbGV0SGFuZGxlci5jYWxsKHRhcmdldCwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihtYXRjaGVzKHRhcmdldCwgU0VDVElPTl9OQVZfVE9PTFRJUF9TRUwpKXtcclxuICAgICAgICAgICAgICAgIHRvb2x0aXBUZXh0SGFuZGxlci5jYWxsKHRhcmdldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihtYXRjaGVzKHRhcmdldCwgU0xJREVTX0FSUk9XX1NFTCkpe1xyXG4gICAgICAgICAgICAgICAgc2xpZGVBcnJvd0hhbmRsZXIuY2FsbCh0YXJnZXQsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYobWF0Y2hlcyh0YXJnZXQsIFNMSURFU19OQVZfTElOS19TRUwpIHx8IGNsb3Nlc3QodGFyZ2V0LCBTTElERVNfTkFWX0xJTktfU0VMKSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHNsaWRlQnVsbGV0SGFuZGxlci5jYWxsKHRhcmdldCwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihjbG9zZXN0KHRhcmdldCwgb3B0aW9ucy5tZW51ICsgJyBbZGF0YS1tZW51YW5jaG9yXScpKXtcclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtc0hhbmRsZXIuY2FsbCh0YXJnZXQsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmb3JNb3VzZUxlYXZlT3JUb3VjaChldmVudE5hbWUsIGFsbG93U2Nyb2xsaW5nKXtcclxuICAgICAgICAgICAgLy9hIHdheSB0byBwYXNzIGFyZ3VtZW50cyB0byB0aGUgb25Nb3VzZUVudGVyT3JMZWF2ZSBmdW5jdGlvblxyXG4gICAgICAgICAgICBkb2N1bWVudFsnZnBfJyArIGV2ZW50TmFtZV0gPSBhbGxvd1Njcm9sbGluZztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG9uTW91c2VFbnRlck9yTGVhdmUsIHRydWUpOyAvL2NhcHR1cmluZyBwaGFzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZUVudGVyT3JMZWF2ZShlKSB7XHJcbiAgICAgICAgICAgIHZhciB0eXBlID0gZS50eXBlO1xyXG4gICAgICAgICAgICB2YXIgaXNJbnNpZGVPbmVOb3JtYWxTY3JvbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGlzVXNpbmdTY3JvbGxPdmVyZmxvdyA9IG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3c7XHJcblxyXG4gICAgICAgICAgICAvL29uTW91c2VMZWF2ZSB3aWxsIHVzZSB0aGUgZGVzdGluYXRpb24gdGFyZ2V0LCBub3QgdGhlIG9uZSB3ZSBhcmUgbW92aW5nIGF3YXkgZnJvbVxyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdHlwZSA9PT0gJ21vdXNlbGVhdmUnID8gZS50b0VsZW1lbnQgfHwgZS5yZWxhdGVkVGFyZ2V0IDogZS50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvL2NvbWluZyBmcm9tIGNsb3NpbmcgYSBub3JtYWxTY3JvbGxFbGVtZW50cyBtb2RhbCBvciBtb3Zpbmcgb3V0c2lkZSB2aWV3cG9ydD9cclxuICAgICAgICAgICAgaWYodGFyZ2V0ID09IGRvY3VtZW50IHx8ICF0YXJnZXQpe1xyXG4gICAgICAgICAgICAgICAgc2V0TW91c2VIaWphY2sodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXNVc2luZ1Njcm9sbE92ZXJmbG93KXtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5zZXRJc2Nyb2xsKHRhcmdldCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT09ICd0b3VjaGVuZCcpe1xyXG4gICAgICAgICAgICAgICAgZ19jYW5GaXJlTW91c2VFbnRlck5vcm1hbFNjcm9sbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGdfY2FuRmlyZU1vdXNlRW50ZXJOb3JtYWxTY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSwgODAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9wcmV2ZW50aW5nIG1vdXNlZW50ZXIgZXZlbnQgdG8gZG8gYW55dGhpbmcgd2hlbiBjb21pbmcgZnJvbSBhIHRvdWNoRW5kIGV2ZW50XHJcbiAgICAgICAgICAgIC8vZml4aW5nIGlzc3VlICMzNTc2XHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT09ICdtb3VzZWVudGVyJyAmJiAhZ19jYW5GaXJlTW91c2VFbnRlck5vcm1hbFNjcm9sbCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBub3JtYWxTZWxlY3RvcnMgPSBvcHRpb25zLm5vcm1hbFNjcm9sbEVsZW1lbnRzLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICBub3JtYWxTZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbihub3JtYWxTZWxlY3Rvcil7XHJcbiAgICAgICAgICAgICAgICBpZighaXNJbnNpZGVPbmVOb3JtYWxTY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc05vcm1hbFNjcm9sbFRhcmdldCA9IG1hdGNoZXModGFyZ2V0LCBub3JtYWxTZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vbGVhdmluZyBhIGNoaWxkIGluc2lkZSB0aGUgbm9ybWFsU2NvbGwgZWxlbWVudCBpcyBub3QgbGVhdmluZyB0aGUgbm9ybWFsU2Nyb2xsICMzNjYxXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzTm9ybWFsU2Nyb2xsQ2hpbGRGb2N1c2VkID0gY2xvc2VzdCh0YXJnZXQsIG5vcm1hbFNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNOb3JtYWxTY3JvbGxUYXJnZXQgfHzCoGlzTm9ybWFsU2Nyb2xsQ2hpbGRGb2N1c2VkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIUZQLnNoYXJlZC5pc05vcm1hbFNjcm9sbEVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TW91c2VIaWphY2soZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzVXNpbmdTY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2V0SXNjcm9sbCh0YXJnZXQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGUC5zaGFyZWQuaXNOb3JtYWxTY3JvbGxFbGVtZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnNpZGVPbmVOb3JtYWxTY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL25vdCBpbnNpZGUgYSBzaW5nbGUgbm9ybWFsIHNjcm9sbCBlbGVtZW50IGFueW1vcmU/XHJcbiAgICAgICAgICAgIGlmKCFpc0luc2lkZU9uZU5vcm1hbFNjcm9sbCAmJiBGUC5zaGFyZWQuaXNOb3JtYWxTY3JvbGxFbGVtZW50KXtcclxuICAgICAgICAgICAgICAgIHNldE1vdXNlSGlqYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpc1VzaW5nU2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnNldElzY3JvbGwodGFyZ2V0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBGUC5zaGFyZWQuaXNOb3JtYWxTY3JvbGxFbGVtZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQ2hlY2tzIHRoZSB2aWV3cG9ydCBhIGZldyB0aW1lcyBvbiBhIGRlZmluZSBpbnRlcnZhbCBvZiB0aW1lIHRvIFxyXG4gICAgICAgICogc2VlIGlmIGl0IGhhcyBjaGFuZ2VkIGluIGFueSBvZiB0aG9zZS4gSWYgdGhhdCdzIHRoZSBjYXNlLCBpdCByZXNpemVzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZG91YmxlQ2hlY2tIZWlnaHQoKXtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8IDQ7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBnX2RvdWJsZUNoZWNrSGVpZ2h0SWQgPSBzZXRUaW1lb3V0KGFkanVzdFRvTmV3Vmlld3BvcnQsIDM1MCAqIGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkanVzdHMgYSBzZWN0aW9uIHRvIHRoZSB2aWV3cG9ydCBpZiBpdCBoYXMgY2hhbmdlZC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkanVzdFRvTmV3Vmlld3BvcnQoKXtcclxuICAgICAgICAgICAgdmFyIG5ld1dpbmRvd0hlaWdodCA9IGdldFdpbmRvd0hlaWdodCgpO1xyXG4gICAgICAgICAgICB2YXIgbmV3V2luZG93V2lkdGggPSBnZXRXaW5kb3dXaWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgaWYod2luZG93c0hlaWdodCAhPT0gbmV3V2luZG93SGVpZ2h0IHx8IHdpbmRvd3NXaWR0aCAhPT0gbmV3V2luZG93V2lkdGgpe1xyXG4gICAgICAgICAgICAgICAgd2luZG93c0hlaWdodCA9IG5ld1dpbmRvd0hlaWdodDtcclxuICAgICAgICAgICAgICAgIHdpbmRvd3NXaWR0aCA9IG5ld1dpbmRvd1dpZHRoO1xyXG4gICAgICAgICAgICAgICAgcmVCdWlsZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXR0aW5nIG9wdGlvbnMgZnJvbSBET00gZWxlbWVudHMgaWYgdGhleSBhcmUgbm90IHByb3ZpZGVkLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0T3B0aW9uc0Zyb21ET00oKXtcclxuXHJcbiAgICAgICAgICAgIC8vbm8gYW5jaG9ycyBvcHRpb24/IENoZWNraW5nIGZvciB0aGVtIGluIHRoZSBET00gYXR0cmlidXRlc1xyXG4gICAgICAgICAgICBpZighb3B0aW9ucy5hbmNob3JzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yc0F0dHJpYnV0ZSA9ICdbZGF0YS1hbmNob3JdJztcclxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JzID0gJChvcHRpb25zLnNlY3Rpb25TZWxlY3Rvci5zcGxpdCgnLCcpLmpvaW4oYW5jaG9yc0F0dHJpYnV0ZSArICcsJykgKyBhbmNob3JzQXR0cmlidXRlLCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYoYW5jaG9ycy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGdfaW5pdGlhbEFuY2hvcnNJbkRvbSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9ycy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmFuY2hvcnMucHVzaChpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9ubyB0b29sdGlwcyBvcHRpb24/IENoZWNraW5nIGZvciB0aGVtIGluIHRoZSBET00gYXR0cmlidXRlc1xyXG4gICAgICAgICAgICBpZighb3B0aW9ucy5uYXZpZ2F0aW9uVG9vbHRpcHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHZhciB0b29sdGlwc0F0dHJpYnV0ZSA9ICdbZGF0YS10b29sdGlwXSc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9vbHRpcHMgPSAkKG9wdGlvbnMuc2VjdGlvblNlbGVjdG9yLnNwbGl0KCcsJykuam9pbih0b29sdGlwc0F0dHJpYnV0ZSArICcsJykgKyB0b29sdGlwc0F0dHJpYnV0ZSwgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGlmKHRvb2x0aXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5uYXZpZ2F0aW9uVG9vbHRpcHMucHVzaChpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10b29sdGlwJykudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogV29ya3Mgb3ZlciB0aGUgRE9NIHN0cnVjdHVyZSB0byBzZXQgaXQgdXAgZm9yIHRoZSBjdXJyZW50IGZ1bGxwYWdlIG9wdGlvbnMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBwcmVwYXJlRG9tKCl7XHJcbiAgICAgICAgICAgIGNzcyhjb250YWluZXIsIHtcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAncmVsYXRpdmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9hZGRpbmcgYSBjbGFzcyB0byByZWNvZ25pemUgdGhlIGNvbnRhaW5lciBpbnRlcm5hbGx5IGluIHRoZSBjb2RlXHJcbiAgICAgICAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgV1JBUFBFUik7XHJcbiAgICAgICAgICAgIGFkZENsYXNzKCRodG1sLCBFTkFCTEVEKTtcclxuXHJcbiAgICAgICAgICAgIC8vZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9mdWxsUGFnZS5qcy9pc3N1ZXMvMTUwMlxyXG4gICAgICAgICAgICB3aW5kb3dzSGVpZ2h0ID0gZ2V0V2luZG93SGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICByZW1vdmVDbGFzcyhjb250YWluZXIsIERFU1RST1lFRCk7IC8vaW4gY2FzZSBpdCB3YXMgZGVzdHJveWVkIGJlZm9yZSBpbml0aWFsaXppbmcgaXQgYWdhaW5cclxuXHJcbiAgICAgICAgICAgIGFkZEludGVybmFsU2VsZWN0b3JzKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbnMgPSAkKFNFQ1RJT05fU0VMKTtcclxuXHJcbiAgICAgICAgICAgIC8vc3R5bGluZyB0aGUgc2VjdGlvbnMgLyBzbGlkZXMgLyBtZW51XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8c2VjdGlvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb25JbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbiA9IHNlY3Rpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlcyA9ICQoU0xJREVfU0VMLCBzZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIHZhciBudW1TbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY2FjaGluZyB0aGUgb3JpZ2luYWwgc3R5bGVzIHRvIGFkZCB0aGVtIGJhY2sgb24gZGVzdHJveSgnYWxsJylcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdkYXRhLWZwLXN0eWxlcycsIHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdzdHlsZScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNlY3Rpb24oc2VjdGlvbiwgc2VjdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgICAgIHN0eWxlTWVudShzZWN0aW9uLCBzZWN0aW9uSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3MgYW55IHNsaWRlXHJcbiAgICAgICAgICAgICAgICBpZiAobnVtU2xpZGVzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2xpZGVzKHNlY3Rpb24sIHNsaWRlcywgbnVtU2xpZGVzKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMudmVydGljYWxDZW50ZXJlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRhYmxlQ2xhc3Moc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2ZpeGVkIGVsZW1lbnRzIG5lZWQgdG8gYmUgbW92ZWQgb3V0IG9mIHRoZSBwbHVnaW4gY29udGFpbmVyIGR1ZSB0byBwcm9ibGVtcyB3aXRoIENTUzMuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuZml4ZWRFbGVtZW50cyAmJiBvcHRpb25zLmNzczMpe1xyXG4gICAgICAgICAgICAgICAgJChvcHRpb25zLmZpeGVkRWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy92ZXJ0aWNhbCBjZW50ZXJlZCBvZiB0aGUgbmF2aWdhdGlvbiArIGFjdGl2ZSBidWxsZXRcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5uYXZpZ2F0aW9uKXtcclxuICAgICAgICAgICAgICAgIGFkZFZlcnRpY2FsTmF2aWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbmFibGVZb3V0dWJlQVBJKCk7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93KXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbEJhckhhbmRsZXIgPSBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5pbml0KG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFN0eWxlcyB0aGUgaG9yaXpvbnRhbCBzbGlkZXMgZm9yIGEgc2VjdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHN0eWxlU2xpZGVzKHNlY3Rpb24sIHNsaWRlcywgbnVtU2xpZGVzKXtcclxuICAgICAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gbnVtU2xpZGVzICogMTAwO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVXaWR0aCA9IDEwMCAvIG51bVNsaWRlcztcclxuXHJcbiAgICAgICAgICAgIHZhciBzbGlkZXNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHNsaWRlc1dyYXBwZXIuY2xhc3NOYW1lID0gU0xJREVTX1dSQVBQRVI7IC8vZnAtc2xpZGVzXHJcbiAgICAgICAgICAgIHdyYXBBbGwoc2xpZGVzLCBzbGlkZXNXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzbGlkZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgc2xpZGVzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFNMSURFU19DT05UQUlORVI7IC8vZnAtc2xpZGVzQ29udGFpbmVyXHJcbiAgICAgICAgICAgIHdyYXBBbGwoc2xpZGVzLCBzbGlkZXNDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgY3NzKCQoU0xJREVTX0NPTlRBSU5FUl9TRUwsIHNlY3Rpb24pLCB7J3dpZHRoJzogc2xpZGVyV2lkdGggKyAnJSd9KTtcclxuXHJcbiAgICAgICAgICAgIGlmKG51bVNsaWRlcyA+IDEpe1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5jb250cm9sQXJyb3dzKXtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVTbGlkZUFycm93cyhzZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnNsaWRlc05hdmlnYXRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFNsaWRlc05hdmlnYXRpb24oc2VjdGlvbiwgbnVtU2xpZGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2xpZGVzLmZvckVhY2goZnVuY3Rpb24oc2xpZGUpIHtcclxuICAgICAgICAgICAgICAgIGNzcyhzbGlkZSwgeyd3aWR0aCc6IHNsaWRlV2lkdGggKyAnJSd9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFRhYmxlQ2xhc3Moc2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzdGFydGluZ1NsaWRlID0gJChTTElERV9BQ1RJVkVfU0VMLCBzZWN0aW9uKVswXTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgdGhlIHNsaWRlIHdvbid0IGJlIGFuIHN0YXJ0aW5nIHBvaW50LCB0aGUgZGVmYXVsdCB3aWxsIGJlIHRoZSBmaXJzdCBvbmVcclxuICAgICAgICAgICAgLy90aGUgYWN0aXZlIHNlY3Rpb24gaXNuJ3QgdGhlIGZpcnN0IG9uZT8gSXMgbm90IHRoZSBmaXJzdCBzbGlkZSBvZiB0aGUgZmlyc3Qgc2VjdGlvbj8gVGhlbiB3ZSBsb2FkIHRoYXQgc2VjdGlvbi9zbGlkZSBieSBkZWZhdWx0LlxyXG4gICAgICAgICAgICBpZiggc3RhcnRpbmdTbGlkZSAhPSBudWxsICYmIChpbmRleCgkKFNFQ1RJT05fQUNUSVZFX1NFTCksIFNFQ1RJT05fU0VMKSAhPT0gMCB8fCAoaW5kZXgoJChTRUNUSU9OX0FDVElWRV9TRUwpLCBTRUNUSU9OX1NFTCkgPT09IDAgJiYgaW5kZXgoc3RhcnRpbmdTbGlkZSkgIT09IDApKSl7XHJcbiAgICAgICAgICAgICAgICBzaWxlbnRMYW5kc2NhcGVTY3JvbGwoc3RhcnRpbmdTbGlkZSwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3Moc2xpZGVzWzBdLCBBQ1RJVkUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFN0eWxpbmcgdmVydGljYWwgc2VjdGlvbnNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHN0eWxlU2VjdGlvbihzZWN0aW9uLCBpbmRleCl7XHJcbiAgICAgICAgICAgIC8vaWYgbm8gYWN0aXZlIHNlY3Rpb24gaXMgZGVmaW5lZCwgdGhlIDFzdCBvbmUgd2lsbCBiZSB0aGUgZGVmYXVsdCBvbmVcclxuICAgICAgICAgICAgaWYoIWluZGV4ICYmICQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBhZGRDbGFzcyhzZWN0aW9uLCBBQ1RJVkUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXJ0aW5nU2VjdGlvbiA9ICQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXTtcclxuXHJcbiAgICAgICAgICAgIGNzcyhzZWN0aW9uLCB7J2hlaWdodCc6IHdpbmRvd3NIZWlnaHQgKyAncHgnfSk7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnBhZGRpbmdUb3Ape1xyXG4gICAgICAgICAgICAgICAgY3NzKHNlY3Rpb24sIHsncGFkZGluZy10b3AnOiBvcHRpb25zLnBhZGRpbmdUb3B9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5wYWRkaW5nQm90dG9tKXtcclxuICAgICAgICAgICAgICAgIGNzcyhzZWN0aW9uLCB7J3BhZGRpbmctYm90dG9tJzogb3B0aW9ucy5wYWRkaW5nQm90dG9tfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zZWN0aW9uc0NvbG9yW2luZGV4XSAhPT0gICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjc3Moc2VjdGlvbiwgeydiYWNrZ3JvdW5kLWNvbG9yJzogb3B0aW9ucy5zZWN0aW9uc0NvbG9yW2luZGV4XX0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuYW5jaG9yc1tpbmRleF0gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InLCBvcHRpb25zLmFuY2hvcnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIHRoZSBkYXRhLWFuY2hvciBhdHRyaWJ1dGVzIHRvIHRoZSBtZW51IGVsZW1lbnRzIGFuZCBhY3RpdmF0ZXMgdGhlIGN1cnJlbnQgb25lLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc3R5bGVNZW51KHNlY3Rpb24sIGluZGV4KXtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmFuY2hvcnNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgLy9hY3RpdmF0aW5nIHRoZSBtZW51IC8gbmF2IGVsZW1lbnQgb24gbG9hZFxyXG4gICAgICAgICAgICAgICAgaWYoaGFzQ2xhc3Moc2VjdGlvbiwgQUNUSVZFKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVNZW51QW5kTmF2KG9wdGlvbnMuYW5jaG9yc1tpbmRleF0sIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9tb3ZpbmcgdGhlIG1lbnUgb3V0c2lkZSB0aGUgbWFpbiBjb250YWluZXIgaWYgaXQgaXMgaW5zaWRlIChhdm9pZCBwcm9ibGVtcyB3aXRoIGZpeGVkIHBvc2l0aW9ucyB3aGVuIHVzaW5nIENTUzMgdHJhbmZvcm1zKVxyXG4gICAgICAgICAgICBpZihvcHRpb25zLm1lbnUgJiYgb3B0aW9ucy5jc3MzICYmIGNsb3Nlc3QoJChvcHRpb25zLm1lbnUpWzBdLCBXUkFQUEVSX1NFTCkgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAkKG9wdGlvbnMubWVudSkuZm9yRWFjaChmdW5jdGlvbihtZW51KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIGludGVybmFsIGNsYXNzZXMgdG8gYmUgYWJsZSB0byBwcm92aWRlIGN1c3RvbWl6YWJsZSBzZWxlY3RvcnNcclxuICAgICAgICAqIGtlZXBpbmcgdGhlIGxpbmsgd2l0aCB0aGUgc3R5bGUgc2hlZXQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRJbnRlcm5hbFNlbGVjdG9ycygpe1xyXG4gICAgICAgICAgICBhZGRDbGFzcygkKG9wdGlvbnMuc2VjdGlvblNlbGVjdG9yLCBjb250YWluZXIpLCBTRUNUSU9OKTtcclxuICAgICAgICAgICAgYWRkQ2xhc3MoJChvcHRpb25zLnNsaWRlU2VsZWN0b3IsIGNvbnRhaW5lciksIFNMSURFKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQ3JlYXRlcyB0aGUgY29udHJvbCBhcnJvd3MgZm9yIHRoZSBnaXZlbiBzZWN0aW9uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTbGlkZUFycm93cyhzZWN0aW9uKXtcclxuICAgICAgICAgICAgdmFyIGFycm93cyA9IFtjcmVhdGVFbGVtZW50RnJvbUhUTUwoJzxkaXYgY2xhc3M9XCInICsgU0xJREVTX0FSUk9XX1BSRVYgKyAnXCI+PC9kaXY+JyksIGNyZWF0ZUVsZW1lbnRGcm9tSFRNTCgnPGRpdiBjbGFzcz1cIicgKyBTTElERVNfQVJST1dfTkVYVCArICdcIj48L2Rpdj4nKV07XHJcbiAgICAgICAgICAgIGFmdGVyKCQoU0xJREVTX1dSQVBQRVJfU0VMLCBzZWN0aW9uKVswXSwgYXJyb3dzKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuY29udHJvbEFycm93Q29sb3IgIT09ICcjZmZmJyl7XHJcbiAgICAgICAgICAgICAgICBjc3MoJChTTElERVNfQVJST1dfTkVYVF9TRUwsIHNlY3Rpb24pLCB7J2JvcmRlci1jb2xvcic6ICd0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAnK29wdGlvbnMuY29udHJvbEFycm93Q29sb3J9KTtcclxuICAgICAgICAgICAgICAgIGNzcygkKFNMSURFU19BUlJPV19QUkVWX1NFTCwgc2VjdGlvbiksIHsnYm9yZGVyLWNvbG9yJzogJ3RyYW5zcGFyZW50ICcrIG9wdGlvbnMuY29udHJvbEFycm93Q29sb3IgKyAnIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50J30pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighb3B0aW9ucy5sb29wSG9yaXpvbnRhbCl7XHJcbiAgICAgICAgICAgICAgICBoaWRlKCQoU0xJREVTX0FSUk9XX1BSRVZfU0VMLCBzZWN0aW9uKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQ3JlYXRlcyBhIHZlcnRpY2FsIG5hdmlnYXRpb24gYmFyLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkVmVydGljYWxOYXZpZ2F0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBuYXZpZ2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb24uc2V0QXR0cmlidXRlKCdpZCcsIFNFQ1RJT05fTkFWKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkaXZVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb24uYXBwZW5kQ2hpbGQoZGl2VWwpO1xyXG5cclxuICAgICAgICAgICAgYXBwZW5kVG8obmF2aWdhdGlvbiwgJGJvZHkpO1xyXG4gICAgICAgICAgICB2YXIgbmF2ID0gJChTRUNUSU9OX05BVl9TRUwpWzBdO1xyXG5cclxuICAgICAgICAgICAgYWRkQ2xhc3MobmF2LCAnZnAtJyArIG9wdGlvbnMubmF2aWdhdGlvblBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2hvd0FjdGl2ZVRvb2x0aXApe1xyXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MobmF2LCBTSE9XX0FDVElWRV9UT09MVElQKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGxpID0gJyc7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICQoU0VDVElPTl9TRUwpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGluayA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5jaG9ycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rID0gb3B0aW9ucy5hbmNob3JzW2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpICs9ICc8bGk+PGEgaHJlZj1cIiMnICsgbGluayArICdcIj48c3BhbiBjbGFzcz1cImZwLXNyLW9ubHlcIj4nICsgZ2V0QnVsbGV0TGlua05hbWUoaSwgJ1NlY3Rpb24nKSArICc8L3NwYW4+PHNwYW4+PC9zcGFuPjwvYT4nO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgYWRkIHRvb2x0aXAgaWYgbmVlZGVkIChkZWZpbmVkIGJ5IHVzZXIpXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9vbHRpcCA9IG9wdGlvbnMubmF2aWdhdGlvblRvb2x0aXBzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9vbHRpcCAhPT0gJ3VuZGVmaW5lZCcgJiYgdG9vbHRpcCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaSArPSAnPGRpdiBjbGFzcz1cIicgKyBTRUNUSU9OX05BVl9UT09MVElQICsgJyBmcC0nICsgb3B0aW9ucy5uYXZpZ2F0aW9uUG9zaXRpb24gKyAnXCI+JyArIHRvb2x0aXAgKyAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaSArPSAnPC9saT4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoJ3VsJywgbmF2KVswXS5pbm5lckhUTUwgPSBsaTtcclxuXHJcbiAgICAgICAgICAgIC8vY2VudGVyaW5nIGl0IHZlcnRpY2FsbHlcclxuICAgICAgICAgICAgY3NzKCQoU0VDVElPTl9OQVZfU0VMKSwgeydtYXJnaW4tdG9wJzogJy0nICsgKCQoU0VDVElPTl9OQVZfU0VMKVswXS5vZmZzZXRIZWlnaHQvMikgKyAncHgnfSk7XHJcblxyXG4gICAgICAgICAgICAvL2FjdGl2YXRpbmcgdGhlIGN1cnJlbnQgYWN0aXZlIHNlY3Rpb25cclxuXHJcbiAgICAgICAgICAgIHZhciBidWxsZXQgPSAkKCdsaScsICQoU0VDVElPTl9OQVZfU0VMKVswXSlbaW5kZXgoJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdLCBTRUNUSU9OX1NFTCldO1xyXG4gICAgICAgICAgICBhZGRDbGFzcygkKCdhJywgYnVsbGV0KSwgQUNUSVZFKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgbmFtZSBmb3Igc2NyZWVuIHJlYWRlcnMgZm9yIGEgc2VjdGlvbi9zbGlkZSBuYXZpZ2F0aW9uIGJ1bGxldC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEJ1bGxldExpbmtOYW1lKGksIGRlZmF1bHROYW1lKXtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMubmF2aWdhdGlvblRvb2x0aXBzW2ldXHJcbiAgICAgICAgICAgICAgICB8fCBvcHRpb25zLmFuY2hvcnNbaV1cclxuICAgICAgICAgICAgICAgIHx8IGRlZmF1bHROYW1lICsgJyAnICsgKGkrMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogRW5hYmxlcyB0aGUgWW91dHViZSB2aWRlb3MgQVBJIHNvIHdlIGNhbiBjb250cm9sIHRoZWlyIGZsb3cgaWYgbmVjZXNzYXJ5LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZW5hYmxlWW91dHViZUFQSSgpe1xyXG4gICAgICAgICAgICAkKCdpZnJhbWVbc3JjKj1cInlvdXR1YmUuY29tL2VtYmVkL1wiXScsIGNvbnRhaW5lcikuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgIGFkZFVSTFBhcmFtKGl0ZW0sICdlbmFibGVqc2FwaT0xJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIGEgbmV3IHBhcmFtZXRlciBhbmQgaXRzIHZhbHVlIHRvIHRoZSBgc3JjYCBvZiBhIGdpdmVuIGVsZW1lbnRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFVSTFBhcmFtKGVsZW1lbnQsIG5ld1BhcmFtKXtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsU3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgb3JpZ2luYWxTcmMgKyBnZXRVcmxQYXJhbVNpZ24ob3JpZ2luYWxTcmMpICsgbmV3UGFyYW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIFJldHVybnMgdGhlIHByZWZpeCBzaWduIHRvIHVzZSBmb3IgYSBuZXcgcGFyYW1ldGVyIGluIGFuIGV4aXN0ZW4gVVJMLlxyXG4gICAgICAgICpcclxuICAgICAgICAqIEByZXR1cm4ge1N0cmluZ30gID8gfCAmXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRVcmxQYXJhbVNpZ24odXJsKXtcclxuICAgICAgICAgICAgcmV0dXJuICggIS9cXD8vLnRlc3QoIHVybCApICkgPyAnPycgOiAnJic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFjdGlvbnMgYW5kIGNhbGxiYWNrcyB0byBmaXJlIGFmdGVyUmVuZGVyXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZnRlclJlbmRlckFjdGlvbnMoKXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF07XHJcblxyXG4gICAgICAgICAgICBhZGRDbGFzcyhzZWN0aW9uLCBDT01QTEVURUxZKTtcclxuXHJcbiAgICAgICAgICAgIGxhenlMb2FkKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICBsYXp5TG9hZE90aGVycygpO1xyXG4gICAgICAgICAgICBwbGF5TWVkaWEoc2VjdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93KXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmFmdGVyTG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihpc0Rlc3RpbnlUaGVTdGFydGluZ1NlY3Rpb24oKSAmJiBpc0Z1bmN0aW9uKG9wdGlvbnMuYWZ0ZXJMb2FkKSApe1xyXG4gICAgICAgICAgICAgICAgZmlyZUNhbGxiYWNrKCdhZnRlckxvYWQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbjogc2VjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBzZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogbnVsbCxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9mb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgY2FsbGJhY2sgKHRvIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUhKVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckxpbms6IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleDogaW5kZXgoc2VjdGlvbiwgU0VDVElPTl9TRUwpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaXNGdW5jdGlvbihvcHRpb25zLmFmdGVyUmVuZGVyKSl7XHJcbiAgICAgICAgICAgICAgICBmaXJlQ2FsbGJhY2soJ2FmdGVyUmVuZGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgVVJMIGFuY2hvciBkZXN0aW55IGlzIHRoZSBzdGFydGluZyBzZWN0aW9uICh0aGUgb25lIHVzaW5nICdhY3RpdmUnIGNsYXNzIGJlZm9yZSBpbml0aWFsaXphdGlvbilcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzRGVzdGlueVRoZVN0YXJ0aW5nU2VjdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgYW5jaG9yID0gZ2V0QW5jaG9yc1VSTCgpO1xyXG4gICAgICAgICAgICB2YXIgZGVzdGluYXRpb25TZWN0aW9uID0gZ2V0U2VjdGlvbkJ5QW5jaG9yKGFuY2hvci5zZWN0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuICFhbmNob3Iuc2VjdGlvbiB8fCAhZGVzdGluYXRpb25TZWN0aW9uIHx8IHR5cGVvZiBkZXN0aW5hdGlvblNlY3Rpb24gIT09J3VuZGVmaW5lZCcgJiYgaW5kZXgoZGVzdGluYXRpb25TZWN0aW9uKSA9PT0gaW5kZXgoc3RhcnRpbmdTZWN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpc1Njcm9sbGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBsYXN0U2Nyb2xsID0gMDtcclxuXHJcbiAgICAgICAgLy93aGVuIHNjcm9sbGluZy4uLlxyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWN0aW9uO1xyXG5cclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMuYXV0b1Njcm9sbGluZyB8fCBvcHRpb25zLnNjcm9sbEJhcil7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFNjcm9sbCA9IGdldFNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbERpcmVjdGlvbiA9IGdldFNjcm9sbERpcmVjdGlvbihjdXJyZW50U2Nyb2xsKTtcclxuICAgICAgICAgICAgICAgIHZhciB2aXNpYmxlU2VjdGlvbkluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JlZW5fbWlkID0gY3VycmVudFNjcm9sbCArIChnZXRXaW5kb3dIZWlnaHQoKSAvIDIuMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNBdEJvdHRvbSA9ICRib2R5Lm9mZnNldEhlaWdodCAtIGdldFdpbmRvd0hlaWdodCgpID09PSBjdXJyZW50U2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb25zID0gICQoU0VDVElPTl9TRUwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vd2hlbiB1c2luZyBgYXV0by1oZWlnaHRgIGZvciBhIHNtYWxsIGxhc3Qgc2VjdGlvbiBpdCB3b24ndCBiZSBjZW50ZXJlZCBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgICAgIGlmKGlzQXRCb3R0b20pe1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVTZWN0aW9uSW5kZXggPSBzZWN0aW9ucy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9pcyBhdCB0b3A/IHdoZW4gdXNpbmcgYGF1dG8taGVpZ2h0YCBmb3IgYSBzbWFsbCBmaXJzdCBzZWN0aW9uIGl0IHdvbid0IGJlIGNlbnRlcmVkIGluIHRoZSB2aWV3cG9ydFxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZighY3VycmVudFNjcm9sbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZVNlY3Rpb25JbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy90YWtpbmcgdGhlIHNlY3Rpb24gd2hpY2ggaXMgc2hvd2luZyBtb3JlIGNvbnRlbnQgaW4gdGhlIHZpZXdwb3J0XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBzZWN0aW9uc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBpY2sgdGhlIHRoZSBsYXN0IHNlY3Rpb24gd2hpY2ggcGFzc2VzIHRoZSBtaWRkbGUgbGluZSBvZiB0aGUgc2NyZWVuLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VjdGlvbi5vZmZzZXRUb3AgPD0gc2NyZWVuX21pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZVNlY3Rpb25JbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXNDb21wbGV0ZWx5SW5WaWV3UG9ydChzY3JvbGxEaXJlY3Rpb24pKXtcclxuICAgICAgICAgICAgICAgICAgICBpZighaGFzQ2xhc3MoJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdLCBDT01QTEVURUxZKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSwgQ09NUExFVEVMWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKHNpYmxpbmdzKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSksIENPTVBMRVRFTFkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL2dldGluZyB0aGUgbGFzdCBvbmUsIHRoZSBjdXJyZW50IG9uZSBvbiB0aGUgc2NyZWVuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2VjdGlvbiA9IHNlY3Rpb25zW3Zpc2libGVTZWN0aW9uSW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vc2V0dGluZyB0aGUgdmlzaWJsZSBzZWN0aW9uIGFzIGFjdGl2ZSB3aGVuIG1hbnVhbGx5IHNjcm9sbGluZ1xyXG4gICAgICAgICAgICAgICAgLy9leGVjdXRpbmcgb25seSBvbmNlIHRoZSBmaXJzdCB0aW1lIHdlIHJlYWNoIHRoZSBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBpZighaGFzQ2xhc3MoY3VycmVudFNlY3Rpb24sIEFDVElWRSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2Nyb2xsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGVhdmluZ1NlY3Rpb24gPSAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlYXZpbmdTZWN0aW9uSW5kZXggPSBpbmRleChsZWF2aW5nU2VjdGlvbiwgU0VDVElPTl9TRUwpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeU1vdmVtZW50ID0gZ2V0WW1vdmVtZW50KGN1cnJlbnRTZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYW5jaG9yTGluayAgPSBjdXJyZW50U2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlY3Rpb25JbmRleCA9IGluZGV4KGN1cnJlbnRTZWN0aW9uLCBTRUNUSU9OX1NFTCkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVTbGlkZSA9ICQoU0xJREVfQUNUSVZFX1NFTCwgY3VycmVudFNlY3Rpb24pWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzbGlkZUFuY2hvckxpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrc1BhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbjogbGVhdmluZ1NlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleDogc2VjdGlvbkluZGV4IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JMaW5rOiBhbmNob3JMaW5rLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBjdXJyZW50U2VjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmluZ1NlY3Rpb246IGxlYXZpbmdTZWN0aW9uSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogeU1vdmVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYWN0aXZlU2xpZGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZUFuY2hvckxpbmsgPSBhY3RpdmVTbGlkZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpbmRleChhY3RpdmVTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihjYW5TY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRDbGFzcyhjdXJyZW50U2VjdGlvbiwgQUNUSVZFKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2libGluZ3MoY3VycmVudFNlY3Rpb24pLCBBQ1RJVkUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNGdW5jdGlvbiggb3B0aW9ucy5vbkxlYXZlICkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyZUNhbGxiYWNrKCdvbkxlYXZlJywgY2FsbGJhY2tzUGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc0Z1bmN0aW9uKCBvcHRpb25zLmFmdGVyTG9hZCApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmVDYWxsYmFjaygnYWZ0ZXJMb2FkJywgY2FsbGJhY2tzUGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcE1lZGlhKGxlYXZpbmdTZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF6eUxvYWQoY3VycmVudFNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5TWVkaWEoY3VycmVudFNlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVNZW51QW5kTmF2KGFuY2hvckxpbmssIHNlY3Rpb25JbmRleCAtIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9ucy5hbmNob3JzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL25lZWRlZCB0byBlbnRlciBpbiBoYXNoQ2hhbmdlIGV2ZW50IHdoZW4gdXNpbmcgdGhlIG1lbnUgd2l0aCBhbmNob3IgbGlua3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTY3JvbGxlZERlc3RpbnkgPSBhbmNob3JMaW5rO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHNsaWRlSW5kZXgsIHNsaWRlQW5jaG9yTGluaywgYW5jaG9yTGluaywgc2VjdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vc21hbGwgdGltZW91dCBpbiBvcmRlciB0byBhdm9pZCBlbnRlcmluZyBpbiBoYXNoQ2hhbmdlIGV2ZW50IHdoZW4gc2Nyb2xsaW5nIGlzIG5vdCBmaW5pc2hlZCB5ZXRcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbElkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1Njcm9sbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5maXRUb1NlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZm9yIHRoZSBhdXRvIGFkanVzdCBvZiB0aGUgdmlld3BvcnQgdG8gZml0IGEgd2hvbGUgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChzY3JvbGxJZDIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxJZDIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2tpbmcgaXQgYWdhaW4gaW4gY2FzZSBpdCBjaGFuZ2VkIGR1cmluZyB0aGUgZGVsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9ucy5maXRUb1NlY3Rpb24gJiZcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lzIHRoZSBkZXN0aW5hdGlvbiBlbGVtZW50IGJpZ2dlciB0aGFuIHRoZSB2aWV3cG9ydD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXS5vZmZzZXRIZWlnaHQgPD0gd2luZG93c0hlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZml0VG9TZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCBvcHRpb25zLmZpdFRvU2VjdGlvbkRlbGF5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBGaXRzIHRoZSBzaXRlIHRvIHRoZSBuZWFyZXN0IGFjdGl2ZSBzZWN0aW9uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBmaXRUb1NlY3Rpb24oKXtcclxuICAgICAgICAgICAgLy9jaGVja2luZyBmaXRUb1NlY3Rpb24gYWdhaW4gaW4gY2FzZSBpdCB3YXMgc2V0IHRvIGZhbHNlIGJlZm9yZSB0aGUgdGltZW91dCBkZWxheVxyXG4gICAgICAgICAgICBpZihjYW5TY3JvbGwpe1xyXG4gICAgICAgICAgICAgICAgLy9hbGxvd3MgdG8gc2Nyb2xsIHRvIGFuIGFjdGl2ZSBzZWN0aW9uIGFuZFxyXG4gICAgICAgICAgICAgICAgLy9pZiB0aGUgc2VjdGlvbiBpcyBhbHJlYWR5IGFjdGl2ZSwgd2UgcHJldmVudCBmaXJpbmcgY2FsbGJhY2tzXHJcbiAgICAgICAgICAgICAgICBpc1Jlc2l6aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxQYWdlKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSk7XHJcbiAgICAgICAgICAgICAgICBpc1Jlc2l6aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBhY3RpdmUgc2VjdGlvbiBoYXMgc2VlbiBpbiBpdHMgd2hvbGUgb3Igbm90LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gaXNDb21wbGV0ZWx5SW5WaWV3UG9ydChtb3ZlbWVudCl7XHJcbiAgICAgICAgICAgIHZhciB0b3AgPSAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0ub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB2YXIgYm90dG9tID0gdG9wICsgZ2V0V2luZG93SGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICBpZihtb3ZlbWVudCA9PSAndXAnKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBib3R0b20gPj0gKGdldFNjcm9sbFRvcCgpICsgZ2V0V2luZG93SGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0b3AgPD0gZ2V0U2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVybWluZXMgd2hldGhlciBhIHNlY3Rpb24gaXMgaW4gdGhlIHZpZXdwb3J0IG9yIG5vdC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzU2VjdGlvbkluVmlld3BvcnQgKGVsKSB7XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIHZhciB0b3AgPSByZWN0LnRvcDtcclxuICAgICAgICAgICAgdmFyIGJvdHRvbSA9IHJlY3QuYm90dG9tO1xyXG5cclxuICAgICAgICAgICAgLy9zb21ldGltZXMgdGhlcmUncyBhIDFweCBvZmZzZXQgb24gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuIGV2ZW4gd2hlbiB0aGUgXHJcbiAgICAgICAgICAgIC8vc2VjdGlvbidzIGhlaWdodCBpcyB0aGUgd2luZG93LmlubmVySGVpZ2h0IG9uZS4gSSBndWVzcyBiZWNhdXNlIHBpeGVscyB3b24ndCBhbGxvdyBkZWNpbWFscy5cclxuICAgICAgICAgICAgLy91c2luZyB0aGlzIHByZXZlbnRzIGZyb20gbGF6eUxvYWRpbmcgdGhlIHNlY3Rpb24gdGhhdCBpcyBub3QgeWV0IHZpc2libGUgXHJcbiAgICAgICAgICAgIC8vKG9ubHkgMSBwaXhlbCBvZmZzZXQgaXMpXHJcbiAgICAgICAgICAgIHZhciBwaXhlbE9mZnNldCA9IDI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgaXNUb3BJblZpZXcgPSB0b3AgKyBwaXhlbE9mZnNldCA8IHdpbmRvd3NIZWlnaHQgJiYgdG9wID4gMDtcclxuICAgICAgICAgICAgdmFyIGlzQm90dG9tSW5WaWV3ID0gYm90dG9tID4gcGl4ZWxPZmZzZXQgJiYgYm90dG9tIDwgd2luZG93c0hlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpc1RvcEluVmlldyB8fCBpc0JvdHRvbUluVmlldztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgZGlyZWN0b24gb2YgdGhlIHRoZSBzY3JvbGxpbmcgZmlyZWQgYnkgdGhlIHNjcm9sbCBldmVudC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFNjcm9sbERpcmVjdGlvbihjdXJyZW50U2Nyb2xsKXtcclxuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGN1cnJlbnRTY3JvbGwgPiBsYXN0U2Nyb2xsID8gJ2Rvd24nIDogJ3VwJztcclxuXHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGwgPSBjdXJyZW50U2Nyb2xsO1xyXG5cclxuICAgICAgICAgICAgLy9uZWVkZWQgZm9yIGF1dG8taGVpZ2h0IHNlY3Rpb25zIHRvIGRldGVybWluZSBpZiB3ZSB3YW50IHRvIHNjcm9sbCB0byB0aGUgdG9wIG9yIGJvdHRvbSBvZiB0aGUgZGVzdGluYXRpb25cclxuICAgICAgICAgICAgcHJldmlvdXNEZXN0VG9wID0gY3VycmVudFNjcm9sbDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIERldGVybWluZXMgdGhlIHdheSBvZiBzY3JvbGxpbmcgdXAgb3IgZG93bjpcclxuICAgICAgICAqIGJ5ICdhdXRvbWF0aWNhbGx5JyBzY3JvbGxpbmcgYSBzZWN0aW9uIG9yIGJ5IHVzaW5nIHRoZSBkZWZhdWx0IGFuZCBub3JtYWwgc2Nyb2xsaW5nLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsaW5nKHR5cGUpe1xyXG4gICAgICAgICAgICBpZiAoIWlzU2Nyb2xsQWxsb3dlZC5tW3R5cGVdKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNjcm9sbFNlY3Rpb24gPSAodHlwZSA9PT0gJ2Rvd24nKSA/IG1vdmVTZWN0aW9uRG93biA6IG1vdmVTZWN0aW9uVXA7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93KXtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxhYmxlID0gb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2Nyb2xsYWJsZSgkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gKHR5cGUgPT09ICdkb3duJykgPyAnYm90dG9tJyA6ICd0b3AnO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNjcm9sbGFibGUgIT0gbnVsbCApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaXMgdGhlIHNjcm9sbGJhciBhdCB0aGUgc3RhcnQvZW5kIG9mIHRoZSBzY3JvbGw/XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuaXNTY3JvbGxlZChjaGVjaywgc2Nyb2xsYWJsZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxTZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1vdmVkIHVwL2Rvd25cclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxTZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gbW92ZWQgdXAvZG93blxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsU2VjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogUHJldmVudGluZyBib3VuY2luZyBpbiBpT1MgIzIyODVcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHByZXZlbnRCb3VuY2luZyhlKXtcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmIGlzUmVhbGx5VG91Y2goZSkgJiYgaXNTY3JvbGxBbGxvd2VkLm0udXApe1xyXG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50aW5nIHRoZSBlYXNpbmcgb24gaU9TIGRldmljZXNcclxuICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdG91Y2hTdGFydFkgPSAwO1xyXG4gICAgICAgIHZhciB0b3VjaFN0YXJ0WCA9IDA7XHJcbiAgICAgICAgdmFyIHRvdWNoRW5kWSA9IDA7XHJcbiAgICAgICAgdmFyIHRvdWNoRW5kWCA9IDA7XHJcblxyXG4gICAgICAgIC8qIERldGVjdGluZyB0b3VjaCBldmVudHNcclxuXHJcbiAgICAgICAgKiBBcyB3ZSBhcmUgY2hhbmdpbmcgdGhlIHRvcCBwcm9wZXJ0eSBvZiB0aGUgcGFnZSBvbiBzY3JvbGxpbmcsIHdlIGNhbiBub3QgdXNlIHRoZSB0cmFkaXRpb25hbCB3YXkgdG8gZGV0ZWN0IGl0LlxyXG4gICAgICAgICogVGhpcyB3YXksIHRoZSB0b3VjaHN0YXJ0IGFuZCB0aGUgdG91Y2ggbW92ZXMgc2hvd3MgYW4gc21hbGwgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZW0gd2hpY2ggaXMgdGhlXHJcbiAgICAgICAgKiB1c2VkIG9uZSB0byBkZXRlcm1pbmUgdGhlIGRpcmVjdGlvbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHRvdWNoTW92ZUhhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVTZWN0aW9uID0gY2xvc2VzdChlLnRhcmdldCwgU0VDVElPTl9TRUwpIHx8wqAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF07XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNSZWFsbHlUb3VjaChlKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcHJldmVudGluZyB0aGUgZWFzaW5nIG9uIGlPUyBkZXZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoRXZlbnRzID0gZ2V0RXZlbnRzUGFnZShlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b3VjaEVuZFkgPSB0b3VjaEV2ZW50cy55O1xyXG4gICAgICAgICAgICAgICAgdG91Y2hFbmRYID0gdG91Y2hFdmVudHMueDtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2lmIG1vdmVtZW50IGluIHRoZSBYIGF4eXMgaXMgZ3JlYXRlciB0aGFuIGluIHRoZSBZIGFuZCB0aGUgY3VycmVjdCBzZWN0aW9uIGhhcyBzbGlkZXMuLi5cclxuICAgICAgICAgICAgICAgIGlmICgkKFNMSURFU19XUkFQUEVSX1NFTCwgYWN0aXZlU2VjdGlvbikubGVuZ3RoICYmIE1hdGguYWJzKHRvdWNoU3RhcnRYIC0gdG91Y2hFbmRYKSA+IChNYXRoLmFicyh0b3VjaFN0YXJ0WSAtIHRvdWNoRW5kWSkpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaXMgdGhlIG1vdmVtZW50IGdyZWF0ZXIgdGhhbiB0aGUgbWluaW11bSByZXNpc3RhbmNlIHRvIHNjcm9sbD9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNsaWRlTW92aW5nICYmIE1hdGguYWJzKHRvdWNoU3RhcnRYIC0gdG91Y2hFbmRYKSA+IChnZXRXaW5kb3dXaWR0aCgpIC8gMTAwICogb3B0aW9ucy50b3VjaFNlbnNpdGl2aXR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hTdGFydFggPiB0b3VjaEVuZFgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5tLnJpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGVSaWdodChhY3RpdmVTZWN0aW9uKTsgLy9uZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQubS5sZWZ0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGVMZWZ0KGFjdGl2ZVNlY3Rpb24pOyAvL3ByZXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL3ZlcnRpY2FsIHNjcm9sbGluZyAob25seSB3aGVuIGF1dG9TY3JvbGxpbmcgaXMgZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYob3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmIGNhblNjcm9sbCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaXMgdGhlIG1vdmVtZW50IGdyZWF0ZXIgdGhhbiB0aGUgbWluaW11bSByZXNpc3RhbmNlIHRvIHNjcm9sbD9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModG91Y2hTdGFydFkgLSB0b3VjaEVuZFkpID4gKHdpbmRvdy5pbm5lckhlaWdodCAvIDEwMCAqIG9wdGlvbnMudG91Y2hTZW5zaXRpdml0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoU3RhcnRZID4gdG91Y2hFbmRZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmcoJ2Rvd24nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b3VjaEVuZFkgPiB0b3VjaFN0YXJ0WSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nKCd1cCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFzIElFID49IDEwIGZpcmVzIGJvdGggdG91Y2ggYW5kIG1vdXNlIGV2ZW50cyB3aGVuIHVzaW5nIGEgbW91c2UgaW4gYSB0b3VjaHNjcmVlblxyXG4gICAgICAgICogdGhpcyB3YXkgd2UgbWFrZSBzdXJlIHRoYXQgaXMgcmVhbGx5IGEgdG91Y2ggZXZlbnQgd2hhdCBJRSBpcyBkZXRlY3RpbmcuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBpc1JlYWxseVRvdWNoKGUpe1xyXG4gICAgICAgICAgICAvL2lmIGlzIG5vdCBJRSAgIHx8ICBJRSBpcyBkZXRlY3RpbmcgYHRvdWNoYCBvciBgcGVuYFxyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGUucG9pbnRlclR5cGUgPT09ICd1bmRlZmluZWQnIHx8IGUucG9pbnRlclR5cGUgIT0gJ21vdXNlJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogSGFuZGxlciBmb3IgdGhlIHRvdWNoIHN0YXJ0IGV2ZW50LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gdG91Y2hTdGFydEhhbmRsZXIoZSl7XHJcblxyXG4gICAgICAgICAgICAvL3N0b3BwaW5nIHRoZSBhdXRvIHNjcm9sbCB0byBhZGp1c3QgdG8gYSBzZWN0aW9uXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuZml0VG9TZWN0aW9uKXtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUFuaW1hdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihpc1JlYWxseVRvdWNoKGUpKXtcclxuICAgICAgICAgICAgICAgIHZhciB0b3VjaEV2ZW50cyA9IGdldEV2ZW50c1BhZ2UoZSk7XHJcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXJ0WSA9IHRvdWNoRXZlbnRzLnk7XHJcbiAgICAgICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IHRvdWNoRXZlbnRzLng7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgYXZlcmFnZSBvZiB0aGUgbGFzdCBgbnVtYmVyYCBlbGVtZW50cyBvZiB0aGUgZ2l2ZW4gYXJyYXkuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRBdmVyYWdlKGVsZW1lbnRzLCBudW1iZXIpe1xyXG4gICAgICAgICAgICB2YXIgc3VtID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vdGFraW5nIGBudW1iZXJgIGVsZW1lbnRzIGZyb20gdGhlIGVuZCB0byBtYWtlIHRoZSBhdmVyYWdlLCBpZiB0aGVyZSBhcmUgbm90IGVub3VnaHQsIDFcclxuICAgICAgICAgICAgdmFyIGxhc3RFbGVtZW50cyA9IGVsZW1lbnRzLnNsaWNlKE1hdGgubWF4KGVsZW1lbnRzLmxlbmd0aCAtIG51bWJlciwgMSkpO1xyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxhc3RFbGVtZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBzdW0gPSBzdW0gKyBsYXN0RWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwoc3VtL251bWJlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEZXRlY3RpbmcgbW91c2V3aGVlbCBzY3JvbGxpbmdcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIGh0dHA6Ly9ibG9ncy5zaXRlcG9pbnRzdGF0aWMuY29tL2V4YW1wbGVzL3RlY2gvbW91c2Utd2hlZWwvaW5kZXguaHRtbFxyXG4gICAgICAgICAqIGh0dHA6Ly93d3cuc2l0ZXBvaW50LmNvbS9odG1sNS1qYXZhc2NyaXB0LW1vdXNlLXdoZWVsL1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBwcmV2VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBNb3VzZVdoZWVsSGFuZGxlcihlKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHZhciBpc05vcm1hbFNjcm9sbCA9IGhhc0NsYXNzKCQoQ09NUExFVEVMWV9TRUwpWzBdLCBOT1JNQUxfU0NST0xMKTtcclxuXHJcbiAgICAgICAgICAgIC8vaXMgc2Nyb2xsIGFsbG93ZWQ/XHJcbiAgICAgICAgICAgIGlmICghaXNTY3JvbGxBbGxvd2VkLm0uZG93biAmJiAhaXNTY3JvbGxBbGxvd2VkLm0udXApIHtcclxuICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2F1dG9zY3JvbGxpbmcgYW5kIG5vdCB6b29taW5nP1xyXG4gICAgICAgICAgICBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgIWNvbnRyb2xQcmVzc2VkICYmICFpc05vcm1hbFNjcm9sbCl7XHJcbiAgICAgICAgICAgICAgICAvLyBjcm9zcy1icm93c2VyIHdoZWVsIGRlbHRhXHJcbiAgICAgICAgICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBlLndoZWVsRGVsdGEgfHwgLWUuZGVsdGFZIHx8IC1lLmRldGFpbDtcclxuICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCB2YWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBob3Jpem9udGFsRGV0ZWN0aW9uID0gdHlwZW9mIGUud2hlZWxEZWx0YVggIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBlLmRlbHRhWCAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNTY3JvbGxpbmdWZXJ0aWNhbGx5ID0gKE1hdGguYWJzKGUud2hlZWxEZWx0YVgpIDwgTWF0aC5hYnMoZS53aGVlbERlbHRhKSkgfHwgKE1hdGguYWJzKGUuZGVsdGFYICkgPCBNYXRoLmFicyhlLmRlbHRhWSkgfHwgIWhvcml6b250YWxEZXRlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vTGltaXRpbmcgdGhlIGFycmF5IHRvIDE1MCAobGV0cyBub3Qgd2FzdGUgbWVtb3J5ISlcclxuICAgICAgICAgICAgICAgIGlmKHNjcm9sbGluZ3MubGVuZ3RoID4gMTQ5KXtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmdzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9rZWVwaW5nIHJlY29yZCBvZiB0aGUgcHJldmlvdXMgc2Nyb2xsaW5nc1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5ncy5wdXNoKE1hdGguYWJzKHZhbHVlKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50aW5nIHRvIHNjcm9sbCB0aGUgc2l0ZSBvbiBtb3VzZSB3aGVlbCB3aGVuIHNjcm9sbGJhciBpcyBwcmVzZW50XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbEJhcil7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy90aW1lIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbGFzdCBzY3JvbGwgYW5kIHRoZSBjdXJyZW50IG9uZVxyXG4gICAgICAgICAgICAgICAgdmFyIHRpbWVEaWZmID0gY3VyVGltZS1wcmV2VGltZTtcclxuICAgICAgICAgICAgICAgIHByZXZUaW1lID0gY3VyVGltZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2hhdmVuJ3QgdGhleSBzY3JvbGxlZCBpbiBhIHdoaWxlP1xyXG4gICAgICAgICAgICAgICAgLy8oZW5vdWdoIHRvIGJlIGNvbnNpZGVyIGEgZGlmZmVyZW50IHNjcm9sbGluZyBhY3Rpb24gdG8gc2Nyb2xsIGFub3RoZXIgc2VjdGlvbilcclxuICAgICAgICAgICAgICAgIGlmKHRpbWVEaWZmID4gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAvL2VtcHR5aW5nIHRoZSBhcnJheSwgd2UgZG9udCBjYXJlIGFib3V0IG9sZCBzY3JvbGxpbmdzIGZvciBvdXIgYXZlcmFnZXNcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmdzID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoY2FuU2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXZlcmFnZUVuZCA9IGdldEF2ZXJhZ2Uoc2Nyb2xsaW5ncywgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdmVyYWdlTWlkZGxlID0gZ2V0QXZlcmFnZShzY3JvbGxpbmdzLCA3MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzQWNjZWxlcmF0aW5nID0gYXZlcmFnZUVuZCA+PSBhdmVyYWdlTWlkZGxlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3RvIGF2b2lkIGRvdWJsZSBzd2lwZXMuLi5cclxuICAgICAgICAgICAgICAgICAgICBpZihpc0FjY2VsZXJhdGluZyAmJiBpc1Njcm9sbGluZ1ZlcnRpY2FsbHkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Njcm9sbGluZyBkb3duP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsdGEgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmcoJ2Rvd24nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIHVwP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmcoJ3VwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmZpdFRvU2VjdGlvbil7XHJcbiAgICAgICAgICAgICAgICAvL3N0b3BwaW5nIHRoZSBhdXRvIHNjcm9sbCB0byBhZGp1c3QgdG8gYSBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVBbmltYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTbGlkZXMgYSBzbGlkZXIgdG8gdGhlIGdpdmVuIGRpcmVjdGlvbi5cclxuICAgICAgICAqIE9wdGlvbmFsIGBzZWN0aW9uYCBwYXJhbS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVTbGlkZShkaXJlY3Rpb24sIHNlY3Rpb24pe1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VjdGlvbiA9IHNlY3Rpb24gPT0gbnVsbCA/ICQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXSA6IHNlY3Rpb247XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXMgPSAkKFNMSURFU19XUkFQUEVSX1NFTCwgYWN0aXZlU2VjdGlvbilbMF07XHJcblxyXG4gICAgICAgICAgICAvLyBtb3JlIHRoYW4gb25lIHNsaWRlIG5lZWRlZCBhbmQgbm90aGluZyBzaG91bGQgYmUgc2xpZGluZ1xyXG4gICAgICAgICAgICBpZiAoc2xpZGVzID09IG51bGwgfHwgc2xpZGVNb3ZpbmcgfHwgJChTTElERV9TRUwsIHNsaWRlcykubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNsaWRlID0gJChTTElERV9BQ1RJVkVfU0VMLCBzbGlkZXMpWzBdO1xyXG4gICAgICAgICAgICB2YXIgZGVzdGlueSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZihkaXJlY3Rpb24gPT09ICdsZWZ0Jyl7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW55ID0gcHJldlVudGlsKGN1cnJlbnRTbGlkZSwgU0xJREVfU0VMKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW55ID0gbmV4dFVudGlsKGN1cnJlbnRTbGlkZSwgU0xJREVfU0VMKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9pc24ndCB0aGVyZSBhIG5leHQgc2xpZGUgaW4gdGhlIHNlY3VlbmNlP1xyXG4gICAgICAgICAgICBpZihkZXN0aW55ID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgLy9yZXNwZWN0IGxvb3BIb3Jpem9udGFsIHNldHRpblxyXG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmxvb3BIb3Jpem9udGFsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlU2libGluZ3MgPSBzaWJsaW5ncyhjdXJyZW50U2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgaWYoZGlyZWN0aW9uID09PSAnbGVmdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbnkgPSBzbGlkZVNpYmxpbmdzW3NsaWRlU2libGluZ3MubGVuZ3RoIC0gMV07IC8vbGFzdFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzdGlueSA9IHNsaWRlU2libGluZ3NbMF07IC8vZmlyc3RcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2xpZGVNb3ZpbmcgPSB0cnVlICYmICFGUC50ZXN0LmlzVGVzdGluZztcclxuICAgICAgICAgICAgbGFuZHNjYXBlU2Nyb2xsKHNsaWRlcywgZGVzdGlueSwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTWFpbnRhaW5zIHRoZSBhY3RpdmUgc2xpZGVzIGluIHRoZSB2aWV3cG9ydFxyXG4gICAgICAgICogKEJlY2F1c2UgdGhlIGBzY3JvbGxgIGFuaW1hdGlvbiBtaWdodCBnZXQgbG9zdCB3aXRoIHNvbWUgYWN0aW9ucywgc3VjaCBhcyB3aGVuIHVzaW5nIGNvbnRpbnVvdXNWZXJ0aWNhbClcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGtlZXBTbGlkZXNQb3NpdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2xpZGVzID0gJChTTElERV9BQ1RJVkVfU0VMKTtcclxuICAgICAgICAgICAgZm9yKCB2YXIgaSA9MDsgaTxhY3RpdmVTbGlkZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgc2lsZW50TGFuZHNjYXBlU2Nyb2xsKGFjdGl2ZVNsaWRlc1tpXSwgJ2ludGVybmFsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwcmV2aW91c0Rlc3RUb3AgPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmV0dXJucyB0aGUgZGVzdGluYXRpb24gWSBwb3NpdGlvbiBiYXNlZCBvbiB0aGUgc2Nyb2xsaW5nIGRpcmVjdGlvbiBhbmRcclxuICAgICAgICAqIHRoZSBoZWlnaHQgb2YgdGhlIHNlY3Rpb24uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXREZXN0aW5hdGlvblBvc2l0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudFRvcCA9IGVsZW1lbnQub2Zmc2V0VG9wO1xyXG5cclxuICAgICAgICAgICAgLy90b3Agb2YgdGhlIGRlc2luYXRpb24gd2lsbCBiZSBhdCB0aGUgdG9wIG9mIHRoZSB2aWV3cG9ydFxyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBlbGVtZW50VG9wO1xyXG4gICAgICAgICAgICB2YXIgaXNTY3JvbGxpbmdEb3duID0gIGVsZW1lbnRUb3AgPiBwcmV2aW91c0Rlc3RUb3A7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uQm90dG9tID0gcG9zaXRpb24gLSB3aW5kb3dzSGVpZ2h0ICsgZWxlbWVudEhlaWdodDtcclxuICAgICAgICAgICAgdmFyIGJpZ1NlY3Rpb25zRGVzdGluYXRpb24gPSBvcHRpb25zLmJpZ1NlY3Rpb25zRGVzdGluYXRpb247XHJcblxyXG4gICAgICAgICAgICAvL2lzIHRoZSBkZXN0aW5hdGlvbiBlbGVtZW50IGJpZ2dlciB0aGFuIHRoZSB2aWV3cG9ydD9cclxuICAgICAgICAgICAgaWYoZWxlbWVudEhlaWdodCA+IHdpbmRvd3NIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgLy9zY3JvbGxpbmcgdXA/XHJcbiAgICAgICAgICAgICAgICBpZighaXNTY3JvbGxpbmdEb3duICYmICFiaWdTZWN0aW9uc0Rlc3RpbmF0aW9uIHx8IGJpZ1NlY3Rpb25zRGVzdGluYXRpb24gPT09ICdib3R0b20nICl7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSBzZWN0aW9uQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3NlY3Rpb25zIGVxdWFsIG9yIHNtYWxsZXIgdGhhbiB0aGUgdmlld3BvcnQgaGVpZ2h0ICYmIHNjcm9sbGluZyBkb3duPyB8fCAgaXMgcmVzaXppbmcgYW5kIGl0cyBpbiB0aGUgbGFzdCBzZWN0aW9uXHJcbiAgICAgICAgICAgIGVsc2UgaWYoaXNTY3JvbGxpbmdEb3duIHx8IChpc1Jlc2l6aW5nICYmIG5leHQoZWxlbWVudCkgPT0gbnVsbCkgKXtcclxuICAgICAgICAgICAgICAgIC8vVGhlIGJvdHRvbSBvZiB0aGUgZGVzdGluYXRpb24gd2lsbCBiZSBhdCB0aGUgYm90dG9tIG9mIHRoZSB2aWV3cG9ydFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBzZWN0aW9uQm90dG9tO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBLZWVwaW5nIHJlY29yZCBvZiB0aGUgbGFzdCBzY3JvbGxlZCBwb3NpdGlvbiB0byBkZXRlcm1pbmUgdGhlIHNjcm9sbGluZyBkaXJlY3Rpb24uXHJcbiAgICAgICAgICAgIE5vIGNvbnZlbnRpb25hbCBtZXRob2RzIGNhbiBiZSB1c2VkIGFzIHRoZSBzY3JvbGwgYmFyIG1pZ2h0IG5vdCBiZSBwcmVzZW50XHJcbiAgICAgICAgICAgIEFORCB0aGUgc2VjdGlvbiBtaWdodCBub3QgYmUgYWN0aXZlIGlmIGl0IGlzIGF1dG8taGVpZ2h0IGFuZCBkaWRudCByZWFjaCB0aGUgbWlkZGxlXHJcbiAgICAgICAgICAgIG9mIHRoZSB2aWV3cG9ydC5cclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgcHJldmlvdXNEZXN0VG9wID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyB0aGUgc2l0ZSB0byB0aGUgZ2l2ZW4gZWxlbWVudCBhbmQgc2Nyb2xscyB0byB0aGUgc2xpZGUgaWYgYSBjYWxsYmFjayBpcyBnaXZlbi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbFBhZ2UoZWxlbWVudCwgY2FsbGJhY2ssIGlzTW92ZW1lbnRVcCl7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQgPT0gbnVsbCl7IHJldHVybjsgfSAvL3RoZXJlJ3Mgbm8gZWxlbWVudCB0byBzY3JvbGwsIGxlYXZpbmcgdGhlIGZ1bmN0aW9uXHJcblxyXG4gICAgICAgICAgICB2YXIgZHRvcCA9IGdldERlc3RpbmF0aW9uUG9zaXRpb24oZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZUFuY2hvckxpbms7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZUluZGV4O1xyXG5cclxuICAgICAgICAgICAgLy9sb2NhbCB2YXJpYWJsZXNcclxuICAgICAgICAgICAgdmFyIHYgPSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgaXNNb3ZlbWVudFVwOiBpc01vdmVtZW50VXAsXHJcbiAgICAgICAgICAgICAgICBkdG9wOiBkdG9wLFxyXG4gICAgICAgICAgICAgICAgeU1vdmVtZW50OiBnZXRZbW92ZW1lbnQoZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICBhbmNob3JMaW5rOiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKSxcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleDogaW5kZXgoZWxlbWVudCwgU0VDVElPTl9TRUwpLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2xpZGU6ICQoU0xJREVfQUNUSVZFX1NFTCwgZWxlbWVudClbMF0sXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTZWN0aW9uOiAkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0sXHJcbiAgICAgICAgICAgICAgICBsZWF2aW5nU2VjdGlvbjogaW5kZXgoJChTRUNUSU9OX0FDVElWRV9TRUwpLCBTRUNUSU9OX1NFTCkgKyAxLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vY2FjaGluZyB0aGUgdmFsdWUgb2YgaXNSZXNpemluZyBhdCB0aGUgbW9tbWVudCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkXHJcbiAgICAgICAgICAgICAgICAvL2JlY2F1c2UgaXQgd2lsbCBiZSBjaGVja2VkIGxhdGVyIGluc2lkZSBhIHNldFRpbWVvdXQgYW5kIHRoZSB2YWx1ZSBtaWdodCBjaGFuZ2VcclxuICAgICAgICAgICAgICAgIGxvY2FsSXNSZXNpemluZzogaXNSZXNpemluZ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9xdWl0aW5nIHdoZW4gZGVzdGluYXRpb24gc2Nyb2xsIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IG9uZVxyXG4gICAgICAgICAgICBpZigodi5hY3RpdmVTZWN0aW9uID09IGVsZW1lbnQgJiYgIWlzUmVzaXppbmcpIHx8IChvcHRpb25zLnNjcm9sbEJhciAmJiBnZXRTY3JvbGxUb3AoKSA9PT0gdi5kdG9wICYmICFoYXNDbGFzcyhlbGVtZW50LCBBVVRPX0hFSUdIVCkgKSl7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgaWYodi5hY3RpdmVTbGlkZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHNsaWRlQW5jaG9yTGluayA9IHYuYWN0aXZlU2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWFuY2hvcicpO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGluZGV4KHYuYWN0aXZlU2xpZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NhbGxiYWNrIChvbkxlYXZlKSBpZiB0aGUgc2l0ZSBpcyBub3QganVzdCByZXNpemluZyBhbmQgcmVhZGp1c3RpbmcgdGhlIHNsaWRlc1xyXG4gICAgICAgICAgICBpZighdi5sb2NhbElzUmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHYueU1vdmVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vcmVxdWlyZWQgZm9yIGNvbnRpbm91c1ZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgaXNNb3ZlbWVudFVwICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gaXNNb3ZlbWVudFVwID8gJ3VwJyA6ICdkb3duJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL2ZvciB0aGUgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgIHYuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24ob3B0aW9ucy5vbkxlYXZlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZmlyZUNhbGxiYWNrKCdvbkxlYXZlJywgdikgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSWYgY29udGludW91c1ZlcnRpY2FsICYmIHdlIG5lZWQgdG8gd3JhcCBhcm91bmRcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiBvcHRpb25zLmNvbnRpbnVvdXNWZXJ0aWNhbCAmJiB0eXBlb2YgKHYuaXNNb3ZlbWVudFVwKSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxyXG4gICAgICAgICAgICAgICAgKCghdi5pc01vdmVtZW50VXAgJiYgdi55TW92ZW1lbnQgPT0gJ3VwJykgfHwgLy8gSW50ZW5kaW5nIHRvIHNjcm9sbCBkb3duIGJ1dCBhYm91dCB0byBnbyB1cCBvclxyXG4gICAgICAgICAgICAgICAgKHYuaXNNb3ZlbWVudFVwICYmIHYueU1vdmVtZW50ID09ICdkb3duJykpKSB7IC8vIGludGVuZGluZyB0byBzY3JvbGwgdXAgYnV0IGFib3V0IHRvIGdvIGRvd25cclxuXHJcbiAgICAgICAgICAgICAgICB2ID0gY3JlYXRlSW5maW5pdGVTZWN0aW9ucyh2KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9wYXVzaW5nIG1lZGlhIG9mIHRoZSBsZWF2aW5nIHNlY3Rpb24gKGlmIHdlIGFyZSBub3QganVzdCByZXNpemluZywgYXMgZGVzdGluYXRpbm8gd2lsbCBiZSB0aGUgc2FtZSBvbmUpXHJcbiAgICAgICAgICAgIGlmKCF2LmxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICBzdG9wTWVkaWEodi5hY3RpdmVTZWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxPdmVyZmxvdyl7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5iZWZvcmVMZWF2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhZGRDbGFzcyhlbGVtZW50LCBBQ1RJVkUpO1xyXG4gICAgICAgICAgICByZW1vdmVDbGFzcyhzaWJsaW5ncyhlbGVtZW50KSwgQUNUSVZFKTtcclxuICAgICAgICAgICAgbGF6eUxvYWQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93KXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLm9uTGVhdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9wcmV2ZW50aW5nIGZyb20gYWN0aXZhdGluZyB0aGUgTW91c2VXaGVlbEhhbmRsZXIgZXZlbnRcclxuICAgICAgICAgICAgLy9tb3JlIHRoYW4gb25jZSBpZiB0aGUgcGFnZSBpcyBzY3JvbGxpbmdcclxuICAgICAgICAgICAgY2FuU2Nyb2xsID0gZmFsc2UgfHwgRlAudGVzdC5pc1Rlc3Rpbmc7XHJcblxyXG4gICAgICAgICAgICBzZXRTdGF0ZShzbGlkZUluZGV4LCBzbGlkZUFuY2hvckxpbmssIHYuYW5jaG9yTGluaywgdi5zZWN0aW9uSW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgcGVyZm9ybU1vdmVtZW50KHYpO1xyXG5cclxuICAgICAgICAgICAgLy9mbGFnIHRvIGF2b2lkIGNhbGxpbmduIGBzY3JvbGxQYWdlKClgIHR3aWNlIGluIGNhc2Ugb2YgdXNpbmcgYW5jaG9yIGxpbmtzXHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGxlZERlc3RpbnkgPSB2LmFuY2hvckxpbms7XHJcblxyXG4gICAgICAgICAgICAvL2F2b2lkIGZpcmluZyBpdCB0d2ljZSAoYXMgaXQgZG9lcyBhbHNvIG9uIHNjcm9sbClcclxuICAgICAgICAgICAgYWN0aXZhdGVNZW51QW5kTmF2KHYuYW5jaG9yTGluaywgdi5zZWN0aW9uSW5kZXgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEaXNwYXRjaCBldmVudHMgJiBjYWxsYmFja3MgbWFraW5nIHN1cmUgaXQgZG9lcyBpdCBvbiB0aGUgcmlnaHQgZm9ybWF0LCBkZXBlbmRpbmcgb25cclxuICAgICAgICAqIHdoZXRoZXIgdjJjb21wYXRpYmxlIGlzIGJlaW5nIHVzZWQgb3Igbm90LlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZmlyZUNhbGxiYWNrKGV2ZW50TmFtZSwgdil7XHJcbiAgICAgICAgICAgIHZhciBldmVudERhdGEgPSBnZXRFdmVudERhdGEoZXZlbnROYW1lLCB2KTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLnYyY29tcGF0aWJsZSl7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKGNvbnRhaW5lciwgZXZlbnROYW1lLCBldmVudERhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnNbZXZlbnROYW1lXS5hcHBseShldmVudERhdGFbT2JqZWN0LmtleXMoZXZlbnREYXRhKVswXV0sIHRvQXJyYXkoZXZlbnREYXRhKSkgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKG9wdGlvbnNbZXZlbnROYW1lXS5hcHBseShldmVudERhdGFbMF0sIGV2ZW50RGF0YS5zbGljZSgxKSkgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNYWtlcyBzdXJlIHRvIG9ubHkgY3JlYXRlIGEgUGFuZWwgb2JqZWN0IGlmIHRoZSBlbGVtZW50IGV4aXN0XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBudWxsT3JTZWN0aW9uKGVsKXtcclxuICAgICAgICAgICAgcmV0dXJuIGVsID8gbmV3IFNlY3Rpb24oZWwpIDogbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG51bGxPclNsaWRlKGVsKXtcclxuICAgICAgICAgICAgcmV0dXJuIGVsID8gbmV3IFNsaWRlKGVsKSA6IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGV2ZW50J3MgZGF0YSBmb3IgdGhlIGdpdmVuIGV2ZW50IG9uIHRoZSByaWdodCBmb3JtYXQuIERlcGVuZGluZyBvbiB3aGV0aGVyXHJcbiAgICAgICAgKiB2MmNvbXBhdGlibGUgaXMgYmVpbmcgdXNlZCBvciBub3QuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRFdmVudERhdGEoZXZlbnROYW1lLCB2KXtcclxuICAgICAgICAgICAgdmFyIHBhcmFtc1BlckV2ZW50O1xyXG5cclxuICAgICAgICAgICAgaWYoIW9wdGlvbnMudjJjb21wYXRpYmxlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3VzaW5nIGZ1bmN0aW9ucyB0byBydW4gb25seSB0aGUgbmVjZXNzYXJ5IGJpdHMgd2l0aGluIHRoZSBvYmplY3RcclxuICAgICAgICAgICAgICAgIHBhcmFtc1BlckV2ZW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbjogbnVsbE9yU2VjdGlvbigkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGU6IG51bGxPclNsaWRlKCQoU0xJREVfQUNUSVZFX1NFTCwgJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdKVswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uTGVhdmU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IG51bGxPclNlY3Rpb24odi5hY3RpdmVTZWN0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBudWxsT3JTZWN0aW9uKHYuZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHYuZGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJMb2FkOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1zUGVyRXZlbnQub25MZWF2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyU2xpZGVMb2FkOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbjogbnVsbE9yU2VjdGlvbih2LnNlY3Rpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBudWxsT3JTbGlkZSh2LnByZXZTbGlkZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogbnVsbE9yU2xpZGUodi5kZXN0aW55KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogdi5kaXJlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvblNsaWRlTGVhdmU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbXNQZXJFdmVudC5hZnRlclNsaWRlTG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1BlckV2ZW50ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyUmVuZGVyOiBmdW5jdGlvbigpeyByZXR1cm4gW2NvbnRhaW5lcl07IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25MZWF2ZTogZnVuY3Rpb24oKXsgcmV0dXJuIFt2LmFjdGl2ZVNlY3Rpb24sIHYubGVhdmluZ1NlY3Rpb24sICh2LnNlY3Rpb25JbmRleCArIDEpLCB2LmRpcmVjdGlvbl07IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJMb2FkOiBmdW5jdGlvbigpeyByZXR1cm4gW3YuZWxlbWVudCwgdi5hbmNob3JMaW5rLCAodi5zZWN0aW9uSW5kZXggKyAxKV07IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTbGlkZUxvYWQ6IGZ1bmN0aW9uKCl7IHJldHVybiBbdi5kZXN0aW55LCB2LmFuY2hvckxpbmssICh2LnNlY3Rpb25JbmRleCArIDEpLCB2LnNsaWRlQW5jaG9yLCB2LnNsaWRlSW5kZXhdOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2xpZGVMZWF2ZTogZnVuY3Rpb24oKXsgcmV0dXJuIFt2LnByZXZTbGlkZSwgdi5hbmNob3JMaW5rLCAodi5zZWN0aW9uSW5kZXggKyAxKSwgdi5wcmV2U2xpZGVJbmRleCwgdi5kaXJlY3Rpb24sIHYuc2xpZGVJbmRleF07IH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zUGVyRXZlbnRbZXZlbnROYW1lXSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBQZXJmb3JtcyB0aGUgdmVydGljYWwgbW92ZW1lbnQgKGJ5IENTUzMgb3IgYnkgalF1ZXJ5KVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcGVyZm9ybU1vdmVtZW50KHYpe1xyXG4gICAgICAgICAgICAvLyB1c2luZyBDU1MzIHRyYW5zbGF0ZSBmdW5jdGlvbmFsaXR5XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNzczMgJiYgb3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmICFvcHRpb25zLnNjcm9sbEJhcikge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRoZSBmaXJzdCBzZWN0aW9uIGNhbiBoYXZlIGEgbmVnYXRpdmUgdmFsdWUgaW4gaU9TIDEwLiBOb3QgcXVpdGUgc3VyZSB3aHk6IC0wLjAxNDI4MjIyNjU2MjVcclxuICAgICAgICAgICAgICAgIC8vIHRoYXQncyB3aHkgd2Ugcm91bmQgaXQgdG8gMC5cclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGUzZCA9ICd0cmFuc2xhdGUzZCgwcHgsIC0nICsgTWF0aC5yb3VuZCh2LmR0b3ApICsgJ3B4LCAwcHgpJztcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUNvbnRhaW5lcih0cmFuc2xhdGUzZCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9ldmVuIHdoZW4gdGhlIHNjcm9sbGluZ1NwZWVkIGlzIDAgdGhlcmUncyBhIGxpdHRsZSBkZWxheSwgd2hpY2ggbWlnaHQgY2F1c2UgdGhlXHJcbiAgICAgICAgICAgICAgICAvL3Njcm9sbGluZ1NwZWVkIHRvIGNoYW5nZSBpbiBjYXNlIG9mIHVzaW5nIHNpbGVudE1vdmVUbygpO1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5zY3JvbGxpbmdTcGVlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFmdGVyU2VjdGlvbkxvYWRzSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZWN0aW9uTG9hZHModik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBhZnRlclNlY3Rpb25Mb2Fkcyh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdXNpbmcgSlMgdG8gYW5pbWF0ZVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFNldHRpbmdzID0gZ2V0U2Nyb2xsU2V0dGluZ3Modi5kdG9wKTtcclxuICAgICAgICAgICAgICAgIEZQLnRlc3QudG9wID0gLXYuZHRvcCArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG8oc2Nyb2xsU2V0dGluZ3MuZWxlbWVudCwgc2Nyb2xsU2V0dGluZ3Mub3B0aW9ucywgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbEJhcil7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBIYWNrIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgdGltZW91dCBwcmV2ZW50cyBzZXR0aW5nIHRoZSBtb3N0IGRvbWluYW50IHNlY3Rpb24gaW4gdGhlIHZpZXdwb3J0IGFzIFwiYWN0aXZlXCIgd2hlbiB0aGUgdXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxlZCB0byBhIHNtYWxsZXIgc2VjdGlvbiBieSB1c2luZyB0aGUgbW91c2V3aGVlbCAoYXV0byBzY3JvbGxpbmcpIHJhdGhlciB0aGFuIGRyYWdpbmcgdGhlIHNjcm9sbCBiYXIuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXaGVuIHVzaW5nIHNjcm9sbEJhcjp0cnVlIEl0IHNlZW1zIGxpa2UgdGhlIHNjcm9sbCBldmVudHMgc3RpbGwgZ2V0dGluZyBwcm9wYWdhdGVkIGV2ZW4gYWZ0ZXIgdGhlIHNjcm9sbGluZyBhbmltYXRpb24gaGFzIGZpbmlzaGVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNlY3Rpb25Mb2Fkcyh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIHNjcm9sbGluZyBzZXR0aW5ncyBkZXBlbmRpbmcgb24gdGhlIHBsdWdpbiBhdXRvU2Nyb2xsaW5nIG9wdGlvblxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2Nyb2xsU2V0dGluZ3ModG9wKXtcclxuICAgICAgICAgICAgdmFyIHNjcm9sbCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgLy90b3AgcHJvcGVydHkgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuYXV0b1Njcm9sbGluZyAmJiAhb3B0aW9ucy5zY3JvbGxCYXIpe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsLm9wdGlvbnMgPSAtdG9wO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsLmVsZW1lbnQgPSAkKFdSQVBQRVJfU0VMKVswXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy93aW5kb3cgcmVhbCBzY3JvbGxpbmdcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbC5vcHRpb25zID0gdG9wO1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsLmVsZW1lbnQgPSB3aW5kb3c7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzY3JvbGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFkZHMgc2VjdGlvbnMgYmVmb3JlIG9yIGFmdGVyIHRoZSBjdXJyZW50IG9uZSB0byBjcmVhdGUgdGhlIGluZmluaXRlIGVmZmVjdC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUluZmluaXRlU2VjdGlvbnModil7XHJcbiAgICAgICAgICAgIC8vIFNjcm9sbGluZyBkb3duXHJcbiAgICAgICAgICAgIGlmICghdi5pc01vdmVtZW50VXApIHtcclxuICAgICAgICAgICAgICAgIC8vIE1vdmUgYWxsIHByZXZpb3VzIHNlY3Rpb25zIHRvIGFmdGVyIHRoZSBhY3RpdmUgc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgYWZ0ZXIoJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdLCBwcmV2QWxsKHYuYWN0aXZlU2VjdGlvbiwgU0VDVElPTl9TRUwpLnJldmVyc2UoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7IC8vIFNjcm9sbGluZyB1cFxyXG4gICAgICAgICAgICAgICAgLy8gTW92ZSBhbGwgbmV4dCBzZWN0aW9ucyB0byBiZWZvcmUgdGhlIGFjdGl2ZSBzZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBiZWZvcmUoJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdLCBuZXh0QWxsKHYuYWN0aXZlU2VjdGlvbiwgU0VDVElPTl9TRUwpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTWFpbnRhaW4gdGhlIGRpc3BsYXllZCBwb3NpdGlvbiAobm93IHRoYXQgd2UgY2hhbmdlZCB0aGUgZWxlbWVudCBvcmRlcilcclxuICAgICAgICAgICAgc2lsZW50U2Nyb2xsKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXS5vZmZzZXRUb3ApO1xyXG5cclxuICAgICAgICAgICAgLy8gTWFpbnRhaW4gdGhlIGFjdGl2ZSBzbGlkZXMgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAga2VlcFNsaWRlc1Bvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzYXZlIGZvciBsYXRlciB0aGUgZWxlbWVudHMgdGhhdCBzdGlsbCBuZWVkIHRvIGJlIHJlb3JkZXJlZFxyXG4gICAgICAgICAgICB2LndyYXBBcm91bmRFbGVtZW50cyA9IHYuYWN0aXZlU2VjdGlvbjtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIGFuaW1hdGlvbiB2YXJpYWJsZXNcclxuICAgICAgICAgICAgdi5kdG9wID0gdi5lbGVtZW50Lm9mZnNldFRvcDtcclxuICAgICAgICAgICAgdi55TW92ZW1lbnQgPSBnZXRZbW92ZW1lbnQodi5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBGaXggc2VjdGlvbiBvcmRlciBhZnRlciBjb250aW51b3VzVmVydGljYWwgY2hhbmdlcyBoYXZlIGJlZW4gYW5pbWF0ZWRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGNvbnRpbnVvdXNWZXJ0aWNhbEZpeFNlY3Rpb25PcmRlciAodikge1xyXG4gICAgICAgICAgICAvLyBJZiBjb250aW51b3VzVmVydGljYWwgaXMgaW4gZWZmZWN0IChhbmQgYXV0b1Njcm9sbGluZyB3b3VsZCBhbHNvIGJlIGluIGVmZmVjdCB0aGVuKSxcclxuICAgICAgICAgICAgLy8gZmluaXNoIG1vdmluZyB0aGUgZWxlbWVudHMgYXJvdW5kIHNvIHRoZSBkaXJlY3QgbmF2aWdhdGlvbiB3aWxsIGZ1bmN0aW9uIG1vcmUgc2ltcGx5XHJcbiAgICAgICAgICAgIGlmICh2LndyYXBBcm91bmRFbGVtZW50cyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2LmlzTW92ZW1lbnRVcCkge1xyXG4gICAgICAgICAgICAgICAgYmVmb3JlKCQoU0VDVElPTl9TRUwpWzBdLCB2LndyYXBBcm91bmRFbGVtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZnRlcigkKFNFQ1RJT05fU0VMKVskKFNFQ1RJT05fU0VMKS5sZW5ndGgtMV0sIHYud3JhcEFyb3VuZEVsZW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2lsZW50U2Nyb2xsKCQoU0VDVElPTl9BQ1RJVkVfU0VMKVswXS5vZmZzZXRUb3ApO1xyXG5cclxuICAgICAgICAgICAgLy8gTWFpbnRhaW4gdGhlIGFjdGl2ZSBzbGlkZXMgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAga2VlcFNsaWRlc1Bvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFjdGlvbnMgdG8gZG8gb25jZSB0aGUgc2VjdGlvbiBpcyBsb2FkZWQuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZnRlclNlY3Rpb25Mb2FkcyAodil7XHJcbiAgICAgICAgICAgIGNvbnRpbnVvdXNWZXJ0aWNhbEZpeFNlY3Rpb25PcmRlcih2KTtcclxuXHJcbiAgICAgICAgICAgIC8vY2FsbGJhY2sgKGFmdGVyTG9hZCkgaWYgdGhlIHNpdGUgaXMgbm90IGp1c3QgcmVzaXppbmcgYW5kIHJlYWRqdXN0aW5nIHRoZSBzbGlkZXNcclxuICAgICAgICAgICAgaWYoaXNGdW5jdGlvbihvcHRpb25zLmFmdGVyTG9hZCkgJiYgIXYubG9jYWxJc1Jlc2l6aW5nKXtcclxuICAgICAgICAgICAgICAgIGZpcmVDYWxsYmFjaygnYWZ0ZXJMb2FkJywgdik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuYWZ0ZXJMb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCF2LmxvY2FsSXNSZXNpemluZyl7XHJcbiAgICAgICAgICAgICAgICBwbGF5TWVkaWEodi5lbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYWRkQ2xhc3Modi5lbGVtZW50LCBDT01QTEVURUxZKTtcclxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2libGluZ3Modi5lbGVtZW50KSwgQ09NUExFVEVMWSk7XHJcbiAgICAgICAgICAgIGxhenlMb2FkT3RoZXJzKCk7XHJcblxyXG4gICAgICAgICAgICBjYW5TY3JvbGwgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYoaXNGdW5jdGlvbih2LmNhbGxiYWNrKSl7XHJcbiAgICAgICAgICAgICAgICB2LmNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgdmFsdWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgZnJvbSB0aGUgYGRhdGEtYCBhdHRyaWJ1dGUgd2l0aCB0aGUgc2FtZSBzdWZmaXhcclxuICAgICAgICAqIGllOiBkYXRhLXNyY3NldCA9PT4gc3Jjc2V0ICB8ICBkYXRhLXNyYyA9PT4gc3JjXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzZXRTcmMoZWxlbWVudCwgYXR0cmlidXRlKXtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS0nICsgYXR0cmlidXRlKSk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLScgKyBhdHRyaWJ1dGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBNYWtlcyBzdXJlIGxhenlsb2FkIGlzIGRvbmUgZm9yIG90aGVyIHNlY3Rpb25zIGluIHRoZSB2aWV3cG9ydCB0aGF0IGFyZSBub3QgdGhlXHJcbiAgICAgICAgKiBhY3RpdmUgb25lLiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGxhenlMb2FkT3RoZXJzKCl7XHJcbiAgICAgICAgICAgIHZhciBoYXNBdXRvSGVpZ2h0U2VjdGlvbnMgPSAkKEFVVE9fSEVJR0hUX1NFTClbMF0gfHwgaXNSZXNwb25zaXZlTW9kZSgpICYmICQoQVVUT19IRUlHSFRfUkVTUE9OU0lWRV9TRUwpWzBdO1xyXG5cclxuICAgICAgICAgICAgLy9xdWl0dGluZyB3aGVuIGl0IGRvZXNuJ3QgYXBwbHlcclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmxhenlMb2FkaW5nIHx8ICFoYXNBdXRvSGVpZ2h0U2VjdGlvbnMpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL21ha2luZyBzdXJlIHRvIGxhenkgbG9hZCBhdXRvLWhlaWdodCBzZWN0aW9ucyB0aGF0IGFyZSBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgICAgICAgJChTRUNUSU9OX1NFTCArICc6bm90KCcgKyBBQ1RJVkVfU0VMICsgJyknKS5mb3JFYWNoKGZ1bmN0aW9uKHNlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgaWYoaXNTZWN0aW9uSW5WaWV3cG9ydChzZWN0aW9uKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF6eUxvYWQoc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBMYXp5IGxvYWRzIGltYWdlLCB2aWRlbyBhbmQgYXVkaW8gZWxlbWVudHMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBsYXp5TG9hZChkZXN0aW55KXtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmxhenlMb2FkaW5nKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhbmVsID0gZ2V0U2xpZGVPclNlY3Rpb24oZGVzdGlueSk7XHJcblxyXG4gICAgICAgICAgICAkKCdpbWdbZGF0YS1zcmNdLCBpbWdbZGF0YS1zcmNzZXRdLCBzb3VyY2VbZGF0YS1zcmNdLCBzb3VyY2VbZGF0YS1zcmNzZXRdLCB2aWRlb1tkYXRhLXNyY10sIGF1ZGlvW2RhdGEtc3JjXSwgaWZyYW1lW2RhdGEtc3JjXScsIHBhbmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgWydzcmMnLCAnc3Jjc2V0J10uZm9yRWFjaChmdW5jdGlvbih0eXBlKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGF0dHJpYnV0ZSAhPSBudWxsICYmIGF0dHJpYnV0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNyYyhlbGVtZW50LCB0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTWVkaWFMb2FkKGRlc3RpbnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihtYXRjaGVzKGVsZW1lbnQsICdzb3VyY2UnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRUb1BsYXkgPSAgY2xvc2VzdChlbGVtZW50LCAndmlkZW8sIGF1ZGlvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudFRvUGxheSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUb1BsYXkubG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VG9QbGF5Lm9ubG9hZGVkZGF0YSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1lZGlhTG9hZChkZXN0aW55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBDYWxsYmFjayBmaXJpbmcgd2hlbiBhIGxhenkgbG9hZCBtZWRpYSBlbGVtZW50IGhhcyBsb2FkZWQuXHJcbiAgICAgICAgKiBNYWtpbmcgc3VyZSBpdCBvbmx5IGZpcmVzIG9uZSBwZXIgc2VjdGlvbiBpbiBub3JtYWwgY29uZGl0aW9ucyAoaWYgbG9hZCB0aW1lIGlzIG5vdCBodWdlKVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gb25NZWRpYUxvYWQoc2VjdGlvbil7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3cpe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGdfbWVkaWFMb2FkZWRJZCk7XHJcbiAgICAgICAgICAgICAgICBnX21lZGlhTG9hZGVkSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsQmFySGFuZGxlci5jcmVhdGVTY3JvbGxCYXIoc2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFBsYXlzIHZpZGVvIGFuZCBhdWRpbyBlbGVtZW50cy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHBsYXlNZWRpYShkZXN0aW55KXtcclxuICAgICAgICAgICAgdmFyIHBhbmVsID0gZ2V0U2xpZGVPclNlY3Rpb24oZGVzdGlueSk7XHJcblxyXG4gICAgICAgICAgICAvL3BsYXlpbmcgSFRNTDUgbWVkaWEgZWxlbWVudHNcclxuICAgICAgICAgICAgJCgndmlkZW8sIGF1ZGlvJywgcGFuZWwpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICBpZiggZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYXV0b3BsYXknKSAmJiB0eXBlb2YgZWxlbWVudC5wbGF5ID09PSAnZnVuY3Rpb24nICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8veW91dHViZSB2aWRlb3NcclxuICAgICAgICAgICAgJCgnaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nLCBwYW5lbCkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYXV0b3BsYXknKSApe1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlZb3V0dWJlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vaW4gY2FzZSB0aGUgVVJMIHdhcyBub3QgbG9hZGVkIHlldC4gT24gcGFnZSBsb2FkIHdlIG5lZWQgdGltZSBmb3IgdGhlIG5ldyBVUkwgKHdpdGggdGhlIEFQSSBzdHJpbmcpIHRvIGxvYWQuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYXV0b3BsYXknKSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5WW91dHViZShlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUGxheXMgYSB5b3V0dWJlIHZpZGVvXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBwbGF5WW91dHViZShlbGVtZW50KXtcclxuICAgICAgICAgICAgZWxlbWVudC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCd7XCJldmVudFwiOlwiY29tbWFuZFwiLFwiZnVuY1wiOlwicGxheVZpZGVvXCIsXCJhcmdzXCI6XCJcIn0nLCAnKicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTdG9wcyB2aWRlbyBhbmQgYXVkaW8gZWxlbWVudHMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzdG9wTWVkaWEoZGVzdGlueSl7XHJcbiAgICAgICAgICAgIHZhciBwYW5lbCA9IGdldFNsaWRlT3JTZWN0aW9uKGRlc3RpbnkpO1xyXG5cclxuICAgICAgICAgICAgLy9zdG9wcGluZyBIVE1MNSBtZWRpYSBlbGVtZW50c1xyXG4gICAgICAgICAgICAkKCd2aWRlbywgYXVkaW8nLCBwYW5lbCkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgICAgIGlmKCAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEta2VlcHBsYXlpbmcnKSAmJiB0eXBlb2YgZWxlbWVudC5wYXVzZSA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy95b3V0dWJlIHZpZGVvc1xyXG4gICAgICAgICAgICAkKCdpZnJhbWVbc3JjKj1cInlvdXR1YmUuY29tL2VtYmVkL1wiXScsIHBhbmVsKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgaWYoIC95b3V0dWJlXFwuY29tXFwvZW1iZWRcXC8vLnRlc3QoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3NyYycpKSAmJiAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEta2VlcHBsYXlpbmcnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCd7XCJldmVudFwiOlwiY29tbWFuZFwiLFwiZnVuY1wiOlwicGF1c2VWaWRlb1wiLFwiYXJnc1wiOlwiXCJ9JywnKicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgYWN0aXZlIHNsaWRlIChvciBzZWN0aW9uKSBmb3IgdGhlIGdpdmVuIHNlY3Rpb25cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFNsaWRlT3JTZWN0aW9uKGRlc3Rpbnkpe1xyXG4gICAgICAgICAgICB2YXIgc2xpZGUgPSAkKFNMSURFX0FDVElWRV9TRUwsIGRlc3RpbnkpO1xyXG4gICAgICAgICAgICBpZiggc2xpZGUubGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgZGVzdGlueSA9IHNsaWRlWzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGVzdGlueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyB0byB0aGUgYW5jaG9yIGluIHRoZSBVUkwgd2hlbiBsb2FkaW5nIHRoZSBzaXRlXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxUb0FuY2hvcigpe1xyXG4gICAgICAgICAgICB2YXIgYW5jaG9ycyA9ICBnZXRBbmNob3JzVVJMKCk7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uQW5jaG9yID0gYW5jaG9ycy5zZWN0aW9uO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGVBbmNob3IgPSBhbmNob3JzLnNsaWRlO1xyXG5cclxuICAgICAgICAgICAgaWYoc2VjdGlvbkFuY2hvcil7ICAvL2lmIHRoZXJlcyBhbnkgI1xyXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5hbmltYXRlQW5jaG9yKXtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxQYWdlQW5kU2xpZGUoc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3IpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc2lsZW50TW92ZVRvKHNlY3Rpb25BbmNob3IsIHNsaWRlQW5jaG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBEZXRlY3RpbmcgYW55IGNoYW5nZSBvbiB0aGUgVVJMIHRvIHNjcm9sbCB0byB0aGUgZ2l2ZW4gYW5jaG9yIGxpbmtcclxuICAgICAgICAqIChhIHdheSB0byBkZXRlY3QgYmFjayBoaXN0b3J5IGJ1dHRvbiBhcyB3ZSBwbGF5IHdpdGggdGhlIGhhc2hlcyBvbiB0aGUgVVJMKVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gaGFzaENoYW5nZUhhbmRsZXIoKXtcclxuICAgICAgICAgICAgaWYoIWlzU2Nyb2xsaW5nICYmICFvcHRpb25zLmxvY2tBbmNob3JzKXtcclxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JzID0gZ2V0QW5jaG9yc1VSTCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb25BbmNob3IgPSBhbmNob3JzLnNlY3Rpb247XHJcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVBbmNob3IgPSBhbmNob3JzLnNsaWRlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vd2hlbiBtb3ZpbmcgdG8gYSBzbGlkZSBpbiB0aGUgZmlyc3Qgc2VjdGlvbiBmb3IgdGhlIGZpcnN0IHRpbWUgKGZpcnN0IHRpbWUgdG8gYWRkIGFuIGFuY2hvciB0byB0aGUgVVJMKVxyXG4gICAgICAgICAgICAgICAgdmFyIGlzRmlyc3RTbGlkZU1vdmUgPSAgKHR5cGVvZiBsYXN0U2Nyb2xsZWREZXN0aW55ID09PSAndW5kZWZpbmVkJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNGaXJzdFNjcm9sbE1vdmUgPSAodHlwZW9mIGxhc3RTY3JvbGxlZERlc3RpbnkgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBzbGlkZUFuY2hvciA9PT0gJ3VuZGVmaW5lZCcgJiYgIXNsaWRlTW92aW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzZWN0aW9uQW5jaG9yICYmIHNlY3Rpb25BbmNob3IubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAvKmluIG9yZGVyIHRvIGNhbGwgc2Nyb2xscGFnZSgpIG9ubHkgb25jZSBmb3IgZWFjaCBkZXN0aW5hdGlvbiBhdCBhIHRpbWVcclxuICAgICAgICAgICAgICAgICAgICBJdCBpcyBjYWxsZWQgdHdpY2UgZm9yIGVhY2ggc2Nyb2xsIG90aGVyd2lzZSwgYXMgaW4gY2FzZSBvZiB1c2luZyBhbmNob3JsaW5rcyBgaGFzaENoYW5nZWBcclxuICAgICAgICAgICAgICAgICAgICBldmVudCBpcyBmaXJlZCBvbiBldmVyeSBzY3JvbGwgdG9vLiovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChzZWN0aW9uQW5jaG9yICYmIHNlY3Rpb25BbmNob3IgIT09IGxhc3RTY3JvbGxlZERlc3RpbnkpICYmICFpc0ZpcnN0U2xpZGVNb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IGlzRmlyc3RTY3JvbGxNb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICghc2xpZGVNb3ZpbmcgJiYgbGFzdFNjcm9sbGVkU2xpZGUgIT0gc2xpZGVBbmNob3IgKSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxQYWdlQW5kU2xpZGUoc2VjdGlvbkFuY2hvciwgc2xpZGVBbmNob3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9nZXRzIHRoZSBVUkwgYW5jaG9ycyAoc2VjdGlvbiBhbmQgc2xpZGUpXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QW5jaG9yc1VSTCgpe1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbjtcclxuICAgICAgICAgICAgdmFyIHNsaWRlO1xyXG4gICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG5cclxuICAgICAgICAgICAgaWYoaGFzaC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgLy9nZXR0aW5nIHRoZSBhbmNob3IgbGluayBpbiB0aGUgVVJMIGFuZCBkZWxldGluZyB0aGUgYCNgXHJcbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yc1BhcnRzID0gIGhhc2gucmVwbGFjZSgnIycsICcnKS5zcGxpdCgnLycpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdXNpbmcgLyBmb3IgdmlzdWFsIHJlYXNvbnMgYW5kIG5vdCBhcyBhIHNlY3Rpb24vc2xpZGUgc2VwYXJhdG9yICMyODAzXHJcbiAgICAgICAgICAgICAgICB2YXIgaXNGdW5reUFuY2hvciA9IGhhc2guaW5kZXhPZignIy8nKSA+IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgIHNlY3Rpb24gPSBpc0Z1bmt5QW5jaG9yID8gJy8nICsgYW5jaG9yc1BhcnRzWzFdIDogZGVjb2RlVVJJQ29tcG9uZW50KGFuY2hvcnNQYXJ0c1swXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlQW5jaG9yID0gaXNGdW5reUFuY2hvciA/IGFuY2hvcnNQYXJ0c1syXSA6IGFuY2hvcnNQYXJ0c1sxXTtcclxuICAgICAgICAgICAgICAgIGlmKHNsaWRlQW5jaG9yICYmIHNsaWRlQW5jaG9yLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUgPSBkZWNvZGVVUklDb21wb25lbnQoc2xpZGVBbmNob3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbjogc2VjdGlvbixcclxuICAgICAgICAgICAgICAgIHNsaWRlOiBzbGlkZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TbGlkaW5nIHdpdGggYXJyb3cga2V5cywgYm90aCwgdmVydGljYWwgYW5kIGhvcml6b250YWxcclxuICAgICAgICBmdW5jdGlvbiBrZXlkb3duSGFuZGxlcihlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChrZXlkb3duSWQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZTtcclxuXHJcbiAgICAgICAgICAgIC8vdGFiP1xyXG4gICAgICAgICAgICBpZihrZXlDb2RlID09PSA5KXtcclxuICAgICAgICAgICAgICAgIG9uVGFiKGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIGlmKCFtYXRjaGVzKGFjdGl2ZUVsZW1lbnQsICd0ZXh0YXJlYScpICYmICFtYXRjaGVzKGFjdGl2ZUVsZW1lbnQsICdpbnB1dCcpICYmICFtYXRjaGVzKGFjdGl2ZUVsZW1lbnQsICdzZWxlY3QnKSAmJlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnRFZGl0YWJsZScpICE9PSBcInRydWVcIiAmJiBhY3RpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJykgIT09ICcnICYmXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmtleWJvYXJkU2Nyb2xsaW5nICYmIG9wdGlvbnMuYXV0b1Njcm9sbGluZyl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50aW5nIHRoZSBzY3JvbGwgd2l0aCBhcnJvdyBrZXlzICYgc3BhY2ViYXIgJiBQYWdlIFVwICYgRG93biBrZXlzXHJcbiAgICAgICAgICAgICAgICB2YXIga2V5Q29udHJvbHMgPSBbNDAsIDM4LCAzMiwgMzMsIDM0XTtcclxuICAgICAgICAgICAgICAgIGlmKGtleUNvbnRyb2xzLmluZGV4T2Yoa2V5Q29kZSkgPiAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29udHJvbFByZXNzZWQgPSBlLmN0cmxLZXk7XHJcblxyXG4gICAgICAgICAgICAgICAga2V5ZG93bklkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIG9ua2V5ZG93bihlKTtcclxuICAgICAgICAgICAgICAgIH0sMTUwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdG9vbHRpcFRleHRIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXHJcbiAgICAgICAgICAgIHRyaWdnZXIocHJldih0aGlzKSwgJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3RvIHByZXZlbnQgc2Nyb2xsaW5nIHdoaWxlIHpvb21pbmdcclxuICAgICAgICBmdW5jdGlvbiBrZXlVcEhhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIGlmKGlzV2luZG93Rm9jdXNlZCl7IC8vdGhlIGtleXVwIGdldHMgZmlyZWQgb24gbmV3IHRhYiBjdHJsICsgdCBpbiBGaXJlZm94XHJcbiAgICAgICAgICAgICAgICBjb250cm9sUHJlc3NlZCA9IGUuY3RybEtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9iaW5kaW5nIHRoZSBtb3VzZW1vdmUgd2hlbiB0aGUgbW91c2UncyBtaWRkbGUgYnV0dG9uIGlzIHJlbGVhc2VkXHJcbiAgICAgICAgZnVuY3Rpb24gbW91c2VEb3duSGFuZGxlcihlKXtcclxuICAgICAgICAgICAgLy9taWRkbGUgYnV0dG9uXHJcbiAgICAgICAgICAgIGlmIChlLndoaWNoID09IDIpe1xyXG4gICAgICAgICAgICAgICAgb2xkUGFnZVkgPSBlLnBhZ2VZO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3VuYmluZGluZyB0aGUgbW91c2Vtb3ZlIHdoZW4gdGhlIG1vdXNlJ3MgbWlkZGxlIGJ1dHRvbiBpcyByZWxlYXNlZFxyXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlVXBIYW5kbGVyKGUpe1xyXG4gICAgICAgICAgICAvL21pZGRsZSBidXR0b25cclxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gMil7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogTWFrZXMgc3VyZSB0aGUgdGFiIGtleSB3aWxsIG9ubHkgZm9jdXMgZWxlbWVudHMgd2l0aGluIHRoZSBjdXJyZW50IHNlY3Rpb24vc2xpZGVcclxuICAgICAgICAqIHByZXZlbnRpbmcgdGhpcyB3YXkgZnJvbSBicmVha2luZyB0aGUgcGFnZS5cclxuICAgICAgICAqIEJhc2VkIG9uIFwiTW9kYWxzIGFuZCBrZXlib2FyZCB0cmFwc1wiXHJcbiAgICAgICAgKiBmcm9tIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvYWNjZXNzaWJpbGl0eS9mb2N1cy91c2luZy10YWJpbmRleFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gb25UYWIoZSl7XHJcbiAgICAgICAgICAgIHZhciBpc1NoaWZ0UHJlc3NlZCA9IGUuc2hpZnRLZXk7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlcyhnZXRTbGlkZU9yU2VjdGlvbigkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0pKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHByZXZlbnRBbmRGb2N1c0ZpcnN0KGUpe1xyXG4gICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9jdXNhYmxlRWxlbWVudHNbMF0gPyBmb2N1c2FibGVFbGVtZW50c1swXS5mb2N1cygpIDogbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9vdXRzaWRlIGFueSBzZWN0aW9uIG9yIHNsaWRlPyBMZXQncyBub3QgaGlqYWNrIHRoZSB0YWIhXHJcbiAgICAgICAgICAgIGlmKGlzRm9jdXNPdXRzaWRlKGUpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9pcyB0aGVyZSBhbiBlbGVtZW50IHdpdGggZm9jdXM/XHJcbiAgICAgICAgICAgIGlmKGFjdGl2ZUVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgaWYoY2xvc2VzdChhY3RpdmVFbGVtZW50LCBTRUNUSU9OX0FDVElWRV9TRUwgKyAnLCcgKyBTRUNUSU9OX0FDVElWRV9TRUwgKyAnICcgKyBTTElERV9BQ1RJVkVfU0VMKSA9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gcHJldmVudEFuZEZvY3VzRmlyc3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbm8gZWxlbWVudCBpZiBmb2N1c2VkPyBMZXQncyBmb2N1cyB0aGUgZmlyc3Qgb25lIG9mIHRoZSBzZWN0aW9uL3NsaWRlXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwcmV2ZW50QW5kRm9jdXNGaXJzdChlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy93aGVuIHJlYWNoZWQgdGhlIGZpcnN0IG9yIGxhc3QgZm9jdXNhYmxlIGVsZW1lbnQgb2YgdGhlIHNlY3Rpb24vc2xpZGVcclxuICAgICAgICAgICAgLy93ZSBwcmV2ZW50IHRoZSB0YWIgYWN0aW9uIHRvIGtlZXAgaXQgaW4gdGhlIGxhc3QgZm9jdXNhYmxlIGVsZW1lbnRcclxuICAgICAgICAgICAgaWYoIWlzU2hpZnRQcmVzc2VkICYmIGFjdGl2ZUVsZW1lbnQgPT0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV0gfHxcclxuICAgICAgICAgICAgICAgIGlzU2hpZnRQcmVzc2VkICYmIGFjdGl2ZUVsZW1lbnQgPT0gZm9jdXNhYmxlRWxlbWVudHNbMF1cclxuICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgYWxsIHRoZSBmb2N1c2FibGUgZWxlbWVudHMgaW5zaWRlIHRoZSBwYXNzZWQgZWxlbWVudC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEZvY3VzYWJsZXMoZWwpe1xyXG4gICAgICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbCgkKGZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nLCBlbCkpLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICE9PSAnLTEnXHJcbiAgICAgICAgICAgICAgICAgICAgLy9hcmUgYWxzbyBub3QgaGlkZGVuIGVsZW1lbnRzIChvciB3aXRoIGhpZGRlbiBwYXJlbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIGl0ZW0ub2Zmc2V0UGFyZW50ICE9PSBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBmb2N1cyBpcyBvdXRzaWRlIGZ1bGxwYWdlLmpzIHNlY3Rpb25zL3NsaWRlcyBvciBub3QuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBpc0ZvY3VzT3V0c2lkZShlKXtcclxuICAgICAgICAgICAgdmFyIGFsbEZvY3VzYWJsZXMgPSBnZXRGb2N1c2FibGVzKGRvY3VtZW50KTtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRGb2N1c0luZGV4ID0gYWxsRm9jdXNhYmxlcy5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICB2YXIgZm9jdXNEZXN0aW5hdGlvbkluZGV4ID0gZS5zaGlmdEtleSA/IGN1cnJlbnRGb2N1c0luZGV4IC0gMSA6IGN1cnJlbnRGb2N1c0luZGV4ICsgMTtcclxuICAgICAgICAgICAgdmFyIGZvY3VzRGVzdGluYXRpb24gPSBhbGxGb2N1c2FibGVzW2ZvY3VzRGVzdGluYXRpb25JbmRleF07XHJcbiAgICAgICAgICAgIHZhciBkZXN0aW5hdGlvbkl0ZW1TbGlkZSA9IG51bGxPclNsaWRlKGNsb3Nlc3QoZm9jdXNEZXN0aW5hdGlvbiwgU0xJREVfU0VMKSk7XHJcbiAgICAgICAgICAgIHZhciBkZXN0aW5hdGlvbkl0ZW1TZWN0aW9uID0gbnVsbE9yU2VjdGlvbihjbG9zZXN0KGZvY3VzRGVzdGluYXRpb24sIFNFQ1RJT05fU0VMKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gIWRlc3RpbmF0aW9uSXRlbVNsaWRlICYmICFkZXN0aW5hdGlvbkl0ZW1TZWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TY3JvbGxpbmcgaG9yaXpvbnRhbGx5IHdoZW4gY2xpY2tpbmcgb24gdGhlIHNsaWRlciBjb250cm9scy5cclxuICAgICAgICBmdW5jdGlvbiBzbGlkZUFycm93SGFuZGxlcigpe1xyXG4gICAgICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xyXG4gICAgICAgICAgICB2YXIgc2VjdGlvbiA9IGNsb3Nlc3QodGhpcywgU0VDVElPTl9TRUwpO1xyXG5cclxuICAgICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cclxuICAgICAgICAgICAgaWYgKGhhc0NsYXNzKHRoaXMsIFNMSURFU19QUkVWKSkge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLm0ubGVmdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlTGVmdChzZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5tLnJpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlU2xpZGVSaWdodChzZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy93aGVuIG9wZW5pbmcgYSBuZXcgdGFiIChjdHJsICsgdCksIGBjb250cm9sYCB3b24ndCBiZSBwcmVzc2VkIHdoZW4gY29taW5nIGJhY2suXHJcbiAgICAgICAgZnVuY3Rpb24gYmx1ckhhbmRsZXIoKXtcclxuICAgICAgICAgICAgaXNXaW5kb3dGb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnRyb2xQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1Njcm9sbHMgdG8gdGhlIHNlY3Rpb24gd2hlbiBjbGlja2luZyB0aGUgbmF2aWdhdGlvbiBidWxsZXRcclxuICAgICAgICBmdW5jdGlvbiBzZWN0aW9uQnVsbGV0SGFuZGxlcihlKXtcclxuICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XHJcblxyXG4gICAgICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xyXG4gICAgICAgICAgICB2YXIgaW5kZXhCdWxsZXQgPSBpbmRleChjbG9zZXN0KHRoaXMsIFNFQ1RJT05fTkFWX1NFTCArICcgbGknKSk7XHJcbiAgICAgICAgICAgIHNjcm9sbFBhZ2UoJChTRUNUSU9OX1NFTClbaW5kZXhCdWxsZXRdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vU2Nyb2xscyB0aGUgc2xpZGVyIHRvIHRoZSBnaXZlbiBzbGlkZSBkZXN0aW5hdGlvbiBmb3IgdGhlIGdpdmVuIHNlY3Rpb25cclxuICAgICAgICBmdW5jdGlvbiBzbGlkZUJ1bGxldEhhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xyXG5cclxuICAgICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cclxuICAgICAgICAgICAgdmFyIHNsaWRlcyA9ICQoU0xJREVTX1dSQVBQRVJfU0VMLCBjbG9zZXN0KHRoaXMsIFNFQ1RJT05fU0VMKSlbMF07XHJcbiAgICAgICAgICAgIHZhciBkZXN0aW55ID0gJChTTElERV9TRUwsIHNsaWRlcylbaW5kZXgoY2xvc2VzdCh0aGlzLCAnbGknKSldO1xyXG5cclxuICAgICAgICAgICAgbGFuZHNjYXBlU2Nyb2xsKHNsaWRlcywgZGVzdGlueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL01lbnUgaXRlbSBoYW5kbGVyIHdoZW4gbm90IHVzaW5nIGFuY2hvcnMgb3IgdXNpbmcgbG9ja0FuY2hvcnM6dHJ1ZVxyXG4gICAgICAgIGZ1bmN0aW9uIG1lbnVJdGVtc0hhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIGlmKCQob3B0aW9ucy5tZW51KVswXSAmJiAob3B0aW9ucy5sb2NrQW5jaG9ycyB8fCAhb3B0aW9ucy5hbmNob3JzLmxlbmd0aCkpe1xyXG4gICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XHJcbiAgICAgICAgICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xyXG4gICAgICAgICAgICAgICAgbW92ZVRvKHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLW1lbnVhbmNob3InKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogS2V5ZG93biBldmVudFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gb25rZXlkb3duKGUpe1xyXG4gICAgICAgICAgICB2YXIgc2hpZnRQcmVzc2VkID0gZS5zaGlmdEtleTtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICB2YXIgaXNNZWRpYUZvY3VzZWQgPSBtYXRjaGVzKGFjdGl2ZUVsZW1lbnQsICd2aWRlbycpIHx8IG1hdGNoZXMoYWN0aXZlRWxlbWVudCwgJ2F1ZGlvJyk7XHJcblxyXG4gICAgICAgICAgICAvL2RvIG5vdGhpbmcgaWYgd2UgY2FuIG5vdCBzY3JvbGwgb3Igd2UgYXJlIG5vdCB1c2luZyBob3Jpem90bmFsIGtleSBhcnJvd3MuXHJcbiAgICAgICAgICAgIGlmKCFjYW5TY3JvbGwgJiYgWzM3LDM5XS5pbmRleE9mKGUua2V5Q29kZSkgPCAwKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgICAgIC8vdXBcclxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDMzOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5rLnVwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNlY3Rpb25VcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAvL2Rvd25cclxuICAgICAgICAgICAgICAgIGNhc2UgMzI6IC8vc3BhY2ViYXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2hpZnRQcmVzc2VkICYmIGlzU2Nyb2xsQWxsb3dlZC5rLnVwICYmICFpc01lZGlhRm9jdXNlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVTZWN0aW9uVXAoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLmsuZG93bil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNwYWNlIGJhcj9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS5rZXlDb2RlICE9PSAzMiB8fCAhaXNNZWRpYUZvY3VzZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNlY3Rpb25Eb3duKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9Ib21lXHJcbiAgICAgICAgICAgICAgICBjYXNlIDM2OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5rLnVwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVRvKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAvL0VuZFxyXG4gICAgICAgICAgICAgICAgY2FzZSAzNTpcclxuICAgICAgICAgICAgICAgICAgICAgaWYoaXNTY3JvbGxBbGxvd2VkLmsuZG93bil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVUbyggJChTRUNUSU9OX1NFTCkubGVuZ3RoICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vbGVmdFxyXG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcclxuICAgICAgICAgICAgICAgICAgICBpZihpc1Njcm9sbEFsbG93ZWQuay5sZWZ0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlTGVmdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAvL3JpZ2h0XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzU2Nyb2xsQWxsb3dlZC5rLnJpZ2h0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVNsaWRlUmlnaHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIGV4aXQgdGhpcyBoYW5kbGVyIGZvciBvdGhlciBrZXlzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGV0ZWN0aW5nIHRoZSBkaXJlY3Rpb24gb2YgdGhlIG1vdXNlIG1vdmVtZW50LlxyXG4gICAgICAgICogVXNlZCBvbmx5IGZvciB0aGUgbWlkZGxlIGJ1dHRvbiBvZiB0aGUgbW91c2UuXHJcbiAgICAgICAgKi9cclxuICAgICAgICB2YXIgb2xkUGFnZVkgPSAwO1xyXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZSl7XHJcbiAgICAgICAgICAgIGlmKCFvcHRpb25zLmF1dG9TY3JvbGxpbmcpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNhblNjcm9sbCl7XHJcbiAgICAgICAgICAgICAgICAvLyBtb3ZpbmcgdXBcclxuICAgICAgICAgICAgICAgIGlmIChlLnBhZ2VZIDwgb2xkUGFnZVkgJiYgaXNTY3JvbGxBbGxvd2VkLm0udXApe1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVTZWN0aW9uVXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBtb3ZpbmcgZG93blxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihlLnBhZ2VZID4gb2xkUGFnZVkgJiYgaXNTY3JvbGxBbGxvd2VkLm0uZG93bil7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZVNlY3Rpb25Eb3duKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2xkUGFnZVkgPSBlLnBhZ2VZO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTY3JvbGxzIGhvcml6b250YWwgc2xpZGVycy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGxhbmRzY2FwZVNjcm9sbChzbGlkZXMsIGRlc3RpbnksIGRpcmVjdGlvbil7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gY2xvc2VzdChzbGlkZXMsIFNFQ1RJT05fU0VMKTtcclxuICAgICAgICAgICAgdmFyIHYgPSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXM6IHNsaWRlcyxcclxuICAgICAgICAgICAgICAgIGRlc3Rpbnk6IGRlc3RpbnksXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcclxuICAgICAgICAgICAgICAgIGRlc3RpbnlQb3M6IHtsZWZ0OiBkZXN0aW55Lm9mZnNldExlZnR9LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVJbmRleDogaW5kZXgoZGVzdGlueSksXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBzZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbkluZGV4OiBpbmRleChzZWN0aW9uLCBTRUNUSU9OX1NFTCksXHJcbiAgICAgICAgICAgICAgICBhbmNob3JMaW5rOiBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1hbmNob3InKSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc05hdjogJChTTElERVNfTkFWX1NFTCwgc2VjdGlvbilbMF0sXHJcbiAgICAgICAgICAgICAgICBzbGlkZUFuY2hvcjogZ2V0QW5jaG9yKGRlc3RpbnkpLFxyXG4gICAgICAgICAgICAgICAgcHJldlNsaWRlOiAkKFNMSURFX0FDVElWRV9TRUwsIHNlY3Rpb24pWzBdLFxyXG4gICAgICAgICAgICAgICAgcHJldlNsaWRlSW5kZXg6IGluZGV4KCQoU0xJREVfQUNUSVZFX1NFTCwgc2VjdGlvbilbMF0pLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vY2FjaGluZyB0aGUgdmFsdWUgb2YgaXNSZXNpemluZyBhdCB0aGUgbW9tbWVudCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkXHJcbiAgICAgICAgICAgICAgICAvL2JlY2F1c2UgaXQgd2lsbCBiZSBjaGVja2VkIGxhdGVyIGluc2lkZSBhIHNldFRpbWVvdXQgYW5kIHRoZSB2YWx1ZSBtaWdodCBjaGFuZ2VcclxuICAgICAgICAgICAgICAgIGxvY2FsSXNSZXNpemluZzogaXNSZXNpemluZ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB2LnhNb3ZlbWVudCA9IGdldFhtb3ZlbWVudCh2LnByZXZTbGlkZUluZGV4LCB2LnNsaWRlSW5kZXgpO1xyXG4gICAgICAgICAgICB2LmRpcmVjdGlvbiA9IHYuZGlyZWN0aW9uID8gdi5kaXJlY3Rpb24gOiB2LnhNb3ZlbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vaW1wb3J0YW50ISEgT25seSBkbyBpdCB3aGVuIG5vdCByZXNpemluZ1xyXG4gICAgICAgICAgICBpZighdi5sb2NhbElzUmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50aW5nIGZyb20gc2Nyb2xsaW5nIHRvIHRoZSBuZXh0L3ByZXYgc2VjdGlvbiB3aGVuIHVzaW5nIHNjcm9sbEhvcml6b250YWxseVxyXG4gICAgICAgICAgICAgICAgY2FuU2Nyb2xsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMub25TbGlkZUxlYXZlKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2lmIHRoZSBzaXRlIGlzIG5vdCBqdXN0IHJlc2l6aW5nIGFuZCByZWFkanVzdGluZyB0aGUgc2xpZGVzXHJcbiAgICAgICAgICAgICAgICBpZighdi5sb2NhbElzUmVzaXppbmcgJiYgdi54TW92ZW1lbnQhPT0nbm9uZScpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24oIG9wdGlvbnMub25TbGlkZUxlYXZlICkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggZmlyZUNhbGxiYWNrKCdvblNsaWRlTGVhdmUnLCB2KSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYWRkQ2xhc3MoZGVzdGlueSwgQUNUSVZFKTtcclxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3Moc2libGluZ3MoZGVzdGlueSksIEFDVElWRSk7XHJcblxyXG4gICAgICAgICAgICBpZighdi5sb2NhbElzUmVzaXppbmcpe1xyXG4gICAgICAgICAgICAgICAgc3RvcE1lZGlhKHYucHJldlNsaWRlKTtcclxuICAgICAgICAgICAgICAgIGxhenlMb2FkKGRlc3RpbnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighb3B0aW9ucy5sb29wSG9yaXpvbnRhbCAmJiBvcHRpb25zLmNvbnRyb2xBcnJvd3Mpe1xyXG4gICAgICAgICAgICAgICAgLy9oaWRkaW5nIGl0IGZvciB0aGUgZmlzdCBzbGlkZSwgc2hvd2luZyBmb3IgdGhlIHJlc3RcclxuICAgICAgICAgICAgICAgIHRvZ2dsZSgkKFNMSURFU19BUlJPV19QUkVWX1NFTCwgc2VjdGlvbiksIHYuc2xpZGVJbmRleCE9PTApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vaGlkZGluZyBpdCBmb3IgdGhlIGxhc3Qgc2xpZGUsIHNob3dpbmcgZm9yIHRoZSByZXN0XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUoJChTTElERVNfQVJST1dfTkVYVF9TRUwsIHNlY3Rpb24pLCBuZXh0KGRlc3RpbnkpICE9IG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL29ubHkgY2hhbmdpbmcgdGhlIFVSTCBpZiB0aGUgc2xpZGVzIGFyZSBpbiB0aGUgY3VycmVudCBzZWN0aW9uIChub3QgZm9yIHJlc2l6ZSByZS1hZGp1c3RpbmcpXHJcbiAgICAgICAgICAgIGlmKGhhc0NsYXNzKHNlY3Rpb24sIEFDVElWRSkgJiYgIXYubG9jYWxJc1Jlc2l6aW5nKXtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKHYuc2xpZGVJbmRleCwgdi5zbGlkZUFuY2hvciwgdi5hbmNob3JMaW5rLCB2LnNlY3Rpb25JbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBlcmZvcm1Ib3Jpem9udGFsTW92ZShzbGlkZXMsIHYsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFmdGVyU2xpZGVMb2Fkcyh2KXtcclxuICAgICAgICAgICAgYWN0aXZlU2xpZGVzTmF2aWdhdGlvbih2LnNsaWRlc05hdiwgdi5zbGlkZUluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgdGhlIHNpdGUgaXMgbm90IGp1c3QgcmVzaXppbmcgYW5kIHJlYWRqdXN0aW5nIHRoZSBzbGlkZXNcclxuICAgICAgICAgICAgaWYoIXYubG9jYWxJc1Jlc2l6aW5nKXtcclxuICAgICAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24oIG9wdGlvbnMuYWZ0ZXJTbGlkZUxvYWQgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZUNhbGxiYWNrKCdhZnRlclNsaWRlTG9hZCcsIHYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vbmVlZHMgdG8gYmUgaW5zaWRlIHRoZSBjb25kaXRpb24gdG8gcHJldmVudCBwcm9ibGVtcyB3aXRoIGNvbnRpbnVvdXNWZXJ0aWNhbCBhbmQgc2Nyb2xsSG9yaXpvbnRhbGx5XHJcbiAgICAgICAgICAgICAgICAvL2FuZCB0byBwcmV2ZW50IGRvdWJsZSBzY3JvbGwgcmlnaHQgYWZ0ZXIgYSB3aW5kb3dzIHJlc2l6ZVxyXG4gICAgICAgICAgICAgICAgY2FuU2Nyb2xsID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5TWVkaWEodi5kZXN0aW55KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9sZXR0aW5nIHRoZW0gc2xpZGUgYWdhaW5cclxuICAgICAgICAgICAgc2xpZGVNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUGVyZm9ybXMgdGhlIGhvcml6b250YWwgbW92ZW1lbnQuIChDU1MzIG9yIGpRdWVyeSlcclxuICAgICAgICAqXHJcbiAgICAgICAgKiBAcGFyYW0gZmlyZUNhbGxiYWNrIHtCb29sfSAtIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdG8gZmlyZSB0aGUgY2FsbGJhY2tcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHBlcmZvcm1Ib3Jpem9udGFsTW92ZShzbGlkZXMsIHYsIGZpcmVDYWxsYmFjayl7XHJcbiAgICAgICAgICAgIHZhciBkZXN0aW55UG9zID0gdi5kZXN0aW55UG9zO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5jc3MzKXtcclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGUzZCA9ICd0cmFuc2xhdGUzZCgtJyArIE1hdGgucm91bmQoZGVzdGlueVBvcy5sZWZ0KSArICdweCwgMHB4LCAwcHgpJztcclxuXHJcbiAgICAgICAgICAgICAgICBGUC50ZXN0LnRyYW5zbGF0ZTNkSFt2LnNlY3Rpb25JbmRleF0gPSB0cmFuc2xhdGUzZDtcclxuICAgICAgICAgICAgICAgIGNzcyhhZGRBbmltYXRpb24oJChTTElERVNfQ09OVEFJTkVSX1NFTCwgc2xpZGVzKSksIGdldFRyYW5zZm9ybXModHJhbnNsYXRlM2QpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhZnRlclNsaWRlTG9hZHNJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihmaXJlQ2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNsaWRlTG9hZHModik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgRlAudGVzdC5sZWZ0W3Yuc2VjdGlvbkluZGV4XSA9IE1hdGgucm91bmQoZGVzdGlueVBvcy5sZWZ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUbyhzbGlkZXMsIE1hdGgucm91bmQoZGVzdGlueVBvcy5sZWZ0KSwgb3B0aW9ucy5zY3JvbGxpbmdTcGVlZCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihmaXJlQ2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlclNsaWRlTG9hZHModik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgc3RhdGUgZm9yIHRoZSBob3Jpem9udGFsIGJ1bGxldCBuYXZpZ2F0aW9ucy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2ZVNsaWRlc05hdmlnYXRpb24oc2xpZGVzTmF2LCBzbGlkZUluZGV4KXtcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5zbGlkZXNOYXZpZ2F0aW9uICYmIHNsaWRlc05hdiAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKCQoQUNUSVZFX1NFTCwgc2xpZGVzTmF2KSwgQUNUSVZFKTtcclxuICAgICAgICAgICAgICAgIGFkZENsYXNzKCAkKCdhJywgJCgnbGknLCBzbGlkZXNOYXYpW3NsaWRlSW5kZXhdICksIEFDVElWRSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwcmV2aW91c0hlaWdodCA9IHdpbmRvd3NIZWlnaHQ7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBSZXNpemUgZXZlbnQgaGFuZGxlci5cclxuICAgICAgICAqLyAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplSWQpO1xyXG5cclxuICAgICAgICAgICAgLy9pbiBvcmRlciB0byBjYWxsIHRoZSBmdW5jdGlvbnMgb25seSB3aGVuIHRoZSByZXNpemUgaXMgZmluaXNoZWRcclxuICAgICAgICAgICAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQyOTg2MTIvanF1ZXJ5LWhvdy10by1jYWxsLXJlc2l6ZS1ldmVudC1vbmx5LW9uY2UtaXRzLWZpbmlzaGVkLXJlc2l6aW5nICAgIFxyXG4gICAgICAgICAgICByZXNpemVJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2lzc3VlICMzMzM2IFxyXG4gICAgICAgICAgICAgICAgLy8oc29tZSBhcHBzIG9yIGJyb3dzZXJzLCBsaWtlIENocm9tZS9GaXJlZm94IGZvciBNb2JpbGUgdGFrZSB0aW1lIHRvIHJlcG9ydCB0aGUgcmVhbCBoZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAvL3NvIHdlIGNoZWNrIGl0IDMgdGltZXMgd2l0aCBpbnRlcnZhbHMgaW4gdGhhdCBjYXNlXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPCA0OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZUhhbmRsZXJJZCA9IHNldFRpbWVvdXQocmVzaXplQWN0aW9ucywgMjAwICogaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFdoZW4gcmVzaXppbmcgdGhlIHNpdGUsIHdlIGFkanVzdCB0aGUgaGVpZ2h0cyBvZiB0aGUgc2VjdGlvbnMsIHNsaW1TY3JvbGwuLi5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUFjdGlvbnMoKXtcclxuXHJcbiAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgaXQgbmVlZHMgdG8gZ2V0IHJlc3BvbnNpdmVcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVidWlsZCBpbW1lZGlhdGVseSBvbiB0b3VjaCBkZXZpY2VzXHJcbiAgICAgICAgICAgIGlmIChpc1RvdWNoRGV2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pZiB0aGUga2V5Ym9hcmQgaXMgTk9UIHZpc2libGVcclxuICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlcyhhY3RpdmVFbGVtZW50LCAndGV4dGFyZWEnKSAmJiAhbWF0Y2hlcyhhY3RpdmVFbGVtZW50LCAnaW5wdXQnKSAmJiAhbWF0Y2hlcyhhY3RpdmVFbGVtZW50LCAnc2VsZWN0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudEhlaWdodCA9IGdldFdpbmRvd0hlaWdodCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL21ha2luZyBzdXJlIHRoZSBjaGFuZ2UgaW4gdGhlIHZpZXdwb3J0IHNpemUgaXMgZW5vdWdoIHRvIGZvcmNlIGEgcmVidWlsZC4gKDIwICUgb2YgdGhlIHdpbmRvdyB0byBhdm9pZCBwcm9ibGVtcyB3aGVuIGhpZGRpbmcgc2Nyb2xsIGJhcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIE1hdGguYWJzKGN1cnJlbnRIZWlnaHQgLSBwcmV2aW91c0hlaWdodCkgPiAoMjAgKiBNYXRoLm1heChwcmV2aW91c0hlaWdodCwgY3VycmVudEhlaWdodCkgLyAxMDApICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlQnVpbGQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzSGVpZ2h0ID0gY3VycmVudEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGFkanVzdFRvTmV3Vmlld3BvcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBDaGVja3MgaWYgdGhlIHNpdGUgbmVlZHMgdG8gZ2V0IHJlc3BvbnNpdmUgYW5kIGRpc2FibGVzIGF1dG9TY3JvbGxpbmcgaWYgc28uXHJcbiAgICAgICAgKiBBIGNsYXNzIGBmcC1yZXNwb25zaXZlYCBpcyBhZGRlZCB0byB0aGUgcGx1Z2luJ3MgY29udGFpbmVyIGluIGNhc2UgdGhlIHVzZXIgd2FudHMgdG8gdXNlIGl0IGZvciBoaXMgb3duIHJlc3BvbnNpdmUgQ1NTLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzcG9uc2l2ZSgpe1xyXG4gICAgICAgICAgICB2YXIgd2lkdGhMaW1pdCA9IG9wdGlvbnMucmVzcG9uc2l2ZSB8fCBvcHRpb25zLnJlc3BvbnNpdmVXaWR0aDsgLy9iYWNrd2FyZHMgY29tcGF0aWJsaXR5XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHRMaW1pdCA9IG9wdGlvbnMucmVzcG9uc2l2ZUhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIC8vb25seSBjYWxjdWxhdGluZyB3aGF0IHdlIG5lZWQuIFJlbWVtYmVyIGl0cyBjYWxsZWQgb24gdGhlIHJlc2l6ZSBldmVudC5cclxuICAgICAgICAgICAgdmFyIGlzQnJlYWtpbmdQb2ludFdpZHRoID0gd2lkdGhMaW1pdCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8IHdpZHRoTGltaXQ7XHJcbiAgICAgICAgICAgIHZhciBpc0JyZWFraW5nUG9pbnRIZWlnaHQgPSBoZWlnaHRMaW1pdCAmJiB3aW5kb3cuaW5uZXJIZWlnaHQgPCBoZWlnaHRMaW1pdDtcclxuXHJcbiAgICAgICAgICAgIGlmKHdpZHRoTGltaXQgJiYgaGVpZ2h0TGltaXQpe1xyXG4gICAgICAgICAgICAgICAgc2V0UmVzcG9uc2l2ZShpc0JyZWFraW5nUG9pbnRXaWR0aCB8fCBpc0JyZWFraW5nUG9pbnRIZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYod2lkdGhMaW1pdCl7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zaXZlKGlzQnJlYWtpbmdQb2ludFdpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGhlaWdodExpbWl0KXtcclxuICAgICAgICAgICAgICAgIHNldFJlc3BvbnNpdmUoaXNCcmVha2luZ1BvaW50SGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBZGRzIHRyYW5zaXRpb24gYW5pbWF0aW9ucyBmb3IgdGhlIGdpdmVuIGVsZW1lbnRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGFkZEFuaW1hdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb24gPSAnYWxsICcgKyBvcHRpb25zLnNjcm9sbGluZ1NwZWVkICsgJ21zICcgKyBvcHRpb25zLmVhc2luZ2NzczM7XHJcblxyXG4gICAgICAgICAgICByZW1vdmVDbGFzcyhlbGVtZW50LCBOT19UUkFOU0lUSU9OKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNzcyhlbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2l0aW9uJzogdHJhbnNpdGlvbixcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uJzogdHJhbnNpdGlvblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmVtb3ZlIHRyYW5zaXRpb24gYW5pbWF0aW9ucyBmb3IgdGhlIGdpdmVuIGVsZW1lbnRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgcmV0dXJuIGFkZENsYXNzKGVsZW1lbnQsIE5PX1RSQU5TSVRJT04pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBY3RpdmF0aW5nIHRoZSB2ZXJ0aWNhbCBuYXZpZ2F0aW9uIGJ1bGxldHMgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBzbGlkZSBuYW1lLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGVOYXZEb3RzKG5hbWUsIHNlY3Rpb25JbmRleCl7XHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMubmF2aWdhdGlvbiAmJiAkKFNFQ1RJT05fTkFWX1NFTClbMF0gIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoJChBQ1RJVkVfU0VMLCAkKFNFQ1RJT05fTkFWX1NFTClbMF0pLCBBQ1RJVkUpO1xyXG4gICAgICAgICAgICAgICAgaWYobmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3MoICQoJ2FbaHJlZj1cIiMnICsgbmFtZSArICdcIl0nLCAkKFNFQ1RJT05fTkFWX1NFTClbMF0pLCBBQ1RJVkUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ2xhc3MoJCgnYScsICQoJ2xpJywgJChTRUNUSU9OX05BVl9TRUwpWzBdKVtzZWN0aW9uSW5kZXhdKSwgQUNUSVZFKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBBY3RpdmF0aW5nIHRoZSB3ZWJzaXRlIG1haW4gbWVudSBlbGVtZW50cyBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIHNsaWRlIG5hbWUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZU1lbnVFbGVtZW50KG5hbWUpe1xyXG4gICAgICAgICAgICAkKG9wdGlvbnMubWVudSkuZm9yRWFjaChmdW5jdGlvbihtZW51KSB7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLm1lbnUgJiYgbWVudSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzcygkKEFDVElWRV9TRUwsIG1lbnUpLCBBQ1RJVkUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZENsYXNzKCQoJ1tkYXRhLW1lbnVhbmNob3I9XCInK25hbWUrJ1wiXScsIG1lbnUpLCBBQ1RJVkUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0byBhY3RpdmUgdGhlIGN1cnJlbnQgbWVudSBhbmQgdmVydGljYWwgbmF2IGl0ZW1zLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGVNZW51QW5kTmF2KGFuY2hvciwgaW5kZXgpe1xyXG4gICAgICAgICAgICBhY3RpdmF0ZU1lbnVFbGVtZW50KGFuY2hvcik7XHJcbiAgICAgICAgICAgIGFjdGl2YXRlTmF2RG90cyhhbmNob3IsIGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmV0dW5zIGB1cGAgb3IgYGRvd25gIGRlcGVuZGluZyBvbiB0aGUgc2Nyb2xsaW5nIG1vdmVtZW50IHRvIHJlYWNoIGl0cyBkZXN0aW5hdGlvblxyXG4gICAgICAgICogZnJvbSB0aGUgY3VycmVudCBzZWN0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0WW1vdmVtZW50KGRlc3Rpbnkpe1xyXG4gICAgICAgICAgICB2YXIgZnJvbUluZGV4ID0gaW5kZXgoJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdLCBTRUNUSU9OX1NFTCk7XHJcbiAgICAgICAgICAgIHZhciB0b0luZGV4ID0gaW5kZXgoZGVzdGlueSwgU0VDVElPTl9TRUwpO1xyXG4gICAgICAgICAgICBpZiggZnJvbUluZGV4ID09IHRvSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihmcm9tSW5kZXggPiB0b0luZGV4KXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndXAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnZG93bic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJldHVucyBgcmlnaHRgIG9yIGBsZWZ0YCBkZXBlbmRpbmcgb24gdGhlIHNjcm9sbGluZyBtb3ZlbWVudCB0byByZWFjaCBpdHMgZGVzdGluYXRpb25cclxuICAgICAgICAqIGZyb20gdGhlIGN1cnJlbnQgc2xpZGUuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRYbW92ZW1lbnQoZnJvbUluZGV4LCB0b0luZGV4KXtcclxuICAgICAgICAgICAgaWYoIGZyb21JbmRleCA9PSB0b0luZGV4KXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZnJvbUluZGV4ID4gdG9JbmRleCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2xlZnQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAncmlnaHQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkVGFibGVDbGFzcyhlbGVtZW50KXtcclxuICAgICAgICAgICAgLy9JbiBjYXNlIHdlIGFyZSBzdHlsaW5nIGZvciB0aGUgMm5kIHRpbWUgYXMgaW4gd2l0aCByZXBvbnNpdmVTbGlkZXNcclxuICAgICAgICAgICAgaWYoIWhhc0NsYXNzKGVsZW1lbnQsIFRBQkxFKSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSBUQUJMRV9DRUxMO1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBnZXRUYWJsZUhlaWdodChlbGVtZW50KSArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3MoZWxlbWVudCwgVEFCTEUpO1xyXG4gICAgICAgICAgICAgICAgd3JhcElubmVyKGVsZW1lbnQsIHdyYXBwZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRUYWJsZUhlaWdodChlbGVtZW50KXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25IZWlnaHQgPSB3aW5kb3dzSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5wYWRkaW5nVG9wIHx8IG9wdGlvbnMucGFkZGluZ0JvdHRvbSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VjdGlvbiA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZighaGFzQ2xhc3Moc2VjdGlvbiwgU0VDVElPTikpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb24gPSBjbG9zZXN0KGVsZW1lbnQsIFNFQ1RJT05fU0VMKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ3MgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24pWydwYWRkaW5nLXRvcCddKSArIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbilbJ3BhZGRpbmctYm90dG9tJ10pO1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbkhlaWdodCA9ICh3aW5kb3dzSGVpZ2h0IC0gcGFkZGluZ3MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbkhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyBhIGNzczMgdHJhbnNmb3JtIHByb3BlcnR5IHRvIHRoZSBjb250YWluZXIgY2xhc3Mgd2l0aCBvciB3aXRob3V0IGFuaW1hdGlvbiBkZXBlbmRpbmcgb24gdGhlIGFuaW1hdGVkIHBhcmFtLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gdHJhbnNmb3JtQ29udGFpbmVyKHRyYW5zbGF0ZTNkLCBhbmltYXRlZCl7XHJcbiAgICAgICAgICAgIGlmKGFuaW1hdGVkKXtcclxuICAgICAgICAgICAgICAgIGFkZEFuaW1hdGlvbihjb250YWluZXIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUFuaW1hdGlvbihjb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjc3MoY29udGFpbmVyLCBnZXRUcmFuc2Zvcm1zKHRyYW5zbGF0ZTNkKSk7XHJcbiAgICAgICAgICAgIEZQLnRlc3QudHJhbnNsYXRlM2QgPSB0cmFuc2xhdGUzZDtcclxuXHJcbiAgICAgICAgICAgIC8vc3luY3Jvbm91c2x5IHJlbW92aW5nIHRoZSBjbGFzcyBhZnRlciB0aGUgYW5pbWF0aW9uIGhhcyBiZWVuIGFwcGxpZWQuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGNvbnRhaW5lciwgTk9fVFJBTlNJVElPTik7XHJcbiAgICAgICAgICAgIH0sMTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIGEgc2VjdGlvbiBieSBpdHMgYW5jaG9yIC8gaW5kZXhcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFNlY3Rpb25CeUFuY2hvcihzZWN0aW9uQW5jaG9yKXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSAkKFNFQ1RJT05fU0VMICsgJ1tkYXRhLWFuY2hvcj1cIicrc2VjdGlvbkFuY2hvcisnXCJdJywgY29udGFpbmVyKVswXTtcclxuICAgICAgICAgICAgaWYoIXNlY3Rpb24pe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlY3Rpb25JbmRleCA9IHR5cGVvZiBzZWN0aW9uQW5jaG9yICE9PSAndW5kZWZpbmVkJyA/IHNlY3Rpb25BbmNob3IgLTEgOiAwO1xyXG4gICAgICAgICAgICAgICAgc2VjdGlvbiA9ICQoU0VDVElPTl9TRUwpW3NlY3Rpb25JbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIGEgc2xpZGUgaW5zaWRlIGEgZ2l2ZW4gc2VjdGlvbiBieSBpdHMgYW5jaG9yIC8gaW5kZXhcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFNsaWRlQnlBbmNob3Ioc2xpZGVBbmNob3IsIHNlY3Rpb24pe1xyXG4gICAgICAgICAgICB2YXIgc2xpZGUgPSAkKFNMSURFX1NFTCArICdbZGF0YS1hbmNob3I9XCInK3NsaWRlQW5jaG9yKydcIl0nLCBzZWN0aW9uKVswXTtcclxuICAgICAgICAgICAgaWYoc2xpZGUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBzbGlkZUFuY2hvciA9IHR5cGVvZiBzbGlkZUFuY2hvciAhPT0gJ3VuZGVmaW5lZCcgPyBzbGlkZUFuY2hvciA6IDA7XHJcbiAgICAgICAgICAgICAgICBzbGlkZSA9ICQoU0xJREVfU0VMLCBzZWN0aW9uKVtzbGlkZUFuY2hvcl07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzbGlkZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyB0byB0aGUgZ2l2ZW4gc2VjdGlvbiBhbmQgc2xpZGUgYW5jaG9yc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsUGFnZUFuZFNsaWRlKHNlY3Rpb25BbmNob3IsIHNsaWRlQW5jaG9yKXtcclxuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBnZXRTZWN0aW9uQnlBbmNob3Ioc2VjdGlvbkFuY2hvcik7XHJcblxyXG4gICAgICAgICAgICAvL2RvIG5vdGhpbmcgaWYgdGhlcmUncyBubyBzZWN0aW9uIHdpdGggdGhlIGdpdmVuIGFuY2hvciBuYW1lXHJcbiAgICAgICAgICAgIGlmKHNlY3Rpb24gPT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNsaWRlID0gZ2V0U2xpZGVCeUFuY2hvcihzbGlkZUFuY2hvciwgc2VjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAvL3dlIG5lZWQgdG8gc2Nyb2xsIHRvIHRoZSBzZWN0aW9uIGFuZCB0aGVuIHRvIHRoZSBzbGlkZVxyXG4gICAgICAgICAgICBpZiAoZ2V0QW5jaG9yKHNlY3Rpb24pICE9PSBsYXN0U2Nyb2xsZWREZXN0aW55ICYmICFoYXNDbGFzcyhzZWN0aW9uLCBBQ1RJVkUpKXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFBhZ2Uoc2VjdGlvbiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxTbGlkZXIoc2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9pZiB3ZSB3ZXJlIGFscmVhZHkgaW4gdGhlIHNlY3Rpb25cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFNsaWRlcihzbGlkZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyB0aGUgc2xpZGVyIHRvIHRoZSBnaXZlbiBzbGlkZSBkZXN0aW5hdGlvbiBmb3IgdGhlIGdpdmVuIHNlY3Rpb25cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbFNsaWRlcihzbGlkZSl7XHJcbiAgICAgICAgICAgIGlmKHNsaWRlICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgbGFuZHNjYXBlU2Nyb2xsKGNsb3Nlc3Qoc2xpZGUsIFNMSURFU19XUkFQUEVSX1NFTCksIHNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBDcmVhdGVzIGEgbGFuZHNjYXBlIG5hdmlnYXRpb24gYmFyIHdpdGggZG90cyBmb3IgaG9yaXpvbnRhbCBzbGlkZXJzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkU2xpZGVzTmF2aWdhdGlvbihzZWN0aW9uLCBudW1TbGlkZXMpe1xyXG4gICAgICAgICAgICBhcHBlbmRUbyhjcmVhdGVFbGVtZW50RnJvbUhUTUwoJzxkaXYgY2xhc3M9XCInICsgU0xJREVTX05BViArICdcIj48dWw+PC91bD48L2Rpdj4nKSwgc2VjdGlvbik7XHJcbiAgICAgICAgICAgIHZhciBuYXYgPSAkKFNMSURFU19OQVZfU0VMLCBzZWN0aW9uKVswXTtcclxuXHJcbiAgICAgICAgICAgIC8vdG9wIG9yIGJvdHRvbVxyXG4gICAgICAgICAgICBhZGRDbGFzcyhuYXYsICdmcC0nICsgb3B0aW9ucy5zbGlkZXNOYXZQb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTwgbnVtU2xpZGVzOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgYXBwZW5kVG8oY3JlYXRlRWxlbWVudEZyb21IVE1MKCc8bGk+PGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImZwLXNyLW9ubHlcIj4nKyBnZXRCdWxsZXRMaW5rTmFtZShpLCAnU2xpZGUnKSArJzwvc3Bhbj48c3Bhbj48L3NwYW4+PC9hPjwvbGk+JyksICQoJ3VsJywgbmF2KVswXSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NlbnRlcmluZyBpdFxyXG4gICAgICAgICAgICBjc3MobmF2LCB7J21hcmdpbi1sZWZ0JzogJy0nICsgKG5hdi5pbm5lcldpZHRoLzIpICsgJ3B4J30pO1xyXG5cclxuICAgICAgICAgICAgYWRkQ2xhc3MoJCgnYScsICQoJ2xpJywgbmF2KVswXSApLCBBQ1RJVkUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2V0cyB0aGUgc3RhdGUgb2YgdGhlIHdlYnNpdGUgZGVwZW5kaW5nIG9uIHRoZSBhY3RpdmUgc2VjdGlvbi9zbGlkZS5cclxuICAgICAgICAqIEl0IGNoYW5nZXMgdGhlIFVSTCBoYXNoIHdoZW4gbmVlZGVkIGFuZCB1cGRhdGVzIHRoZSBib2R5IGNsYXNzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0U3RhdGUoc2xpZGVJbmRleCwgc2xpZGVBbmNob3IsIGFuY2hvckxpbmssIHNlY3Rpb25JbmRleCl7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uSGFzaCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5hbmNob3JzLmxlbmd0aCAmJiAhb3B0aW9ucy5sb2NrQW5jaG9ycyl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9pc24ndCBpdCB0aGUgZmlyc3Qgc2xpZGU/XHJcbiAgICAgICAgICAgICAgICBpZihzbGlkZUluZGV4KXtcclxuICAgICAgICAgICAgICAgICAgICBpZihhbmNob3JMaW5rICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uSGFzaCA9IGFuY2hvckxpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NsaWRlIHdpdGhvdXQgYW5jaG9yIGxpbms/IFdlIHRha2UgdGhlIGluZGV4IGluc3RlYWQuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc2xpZGVBbmNob3IgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlQW5jaG9yID0gc2xpZGVJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTY3JvbGxlZFNsaWRlID0gc2xpZGVBbmNob3I7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXJsSGFzaChzZWN0aW9uSGFzaCArICcvJyArIHNsaWRlQW5jaG9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2ZpcnN0IHNsaWRlIHdvbid0IGhhdmUgc2xpZGUgYW5jaG9yLCBqdXN0IHRoZSBzZWN0aW9uIG9uZVxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoc2xpZGVJbmRleCAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsZWRTbGlkZSA9IHNsaWRlQW5jaG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVybEhhc2goYW5jaG9yTGluayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9zZWN0aW9uIHdpdGhvdXQgc2xpZGVzXHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVybEhhc2goYW5jaG9yTGluayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNldEJvZHlDbGFzcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIHRoZSBVUkwgaGFzaC5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFVybEhhc2godXJsKXtcclxuICAgICAgICAgICAgaWYob3B0aW9ucy5yZWNvcmRIaXN0b3J5KXtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSB1cmw7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy9Nb2JpbGUgQ2hyb21lIGRvZXNuJ3Qgd29yayB0aGUgbm9ybWFsIHdheSwgc28uLi4gbGV0cyB1c2UgSFRNTDUgZm9yIHBob25lcyA6KVxyXG4gICAgICAgICAgICAgICAgaWYoaXNUb3VjaERldmljZSB8fCBpc1RvdWNoKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUodW5kZWZpbmVkLCB1bmRlZmluZWQsICcjJyArIHVybCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYmFzZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoIGJhc2VVcmwgKyAnIycgKyB1cmwgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBhbmNob3IgZm9yIHRoZSBnaXZlbiBzbGlkZSAvIHNlY3Rpb24uIEl0cyBpbmRleCB3aWxsIGJlIHVzZWQgaWYgdGhlcmUncyBub25lLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0QW5jaG9yKGVsZW1lbnQpe1xyXG4gICAgICAgICAgICBpZighZWxlbWVudCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgYW5jaG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJyk7XHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50SW5kZXggPSBpbmRleChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vU2xpZGUgd2l0aG91dCBhbmNob3IgbGluaz8gV2UgdGFrZSB0aGUgaW5kZXggaW5zdGVhZC5cclxuICAgICAgICAgICAgaWYoYW5jaG9yID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yID0gZWxlbWVudEluZGV4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYW5jaG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTZXRzIGEgY2xhc3MgZm9yIHRoZSBib2R5IG9mIHRoZSBwYWdlIGRlcGVuZGluZyBvbiB0aGUgYWN0aXZlIHNlY3Rpb24gLyBzbGlkZVxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Qm9keUNsYXNzKCl7XHJcbiAgICAgICAgICAgIHZhciBzZWN0aW9uID0gJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdO1xyXG4gICAgICAgICAgICB2YXIgc2xpZGUgPSAkKFNMSURFX0FDVElWRV9TRUwsIHNlY3Rpb24pWzBdO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlY3Rpb25BbmNob3IgPSBnZXRBbmNob3Ioc2VjdGlvbik7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZUFuY2hvciA9IGdldEFuY2hvcihzbGlkZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IFN0cmluZyhzZWN0aW9uQW5jaG9yKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHNsaWRlKXtcclxuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0ICsgJy0nICsgc2xpZGVBbmNob3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vY2hhbmdpbmcgc2xhc2ggZm9yIGRhc2ggdG8gbWFrZSBpdCBhIHZhbGlkIENTUyBzdHlsZVxyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKCcvJywgJy0nKS5yZXBsYWNlKCcjJywnJyk7XHJcblxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIHByZXZpb3VzIGFuY2hvciBjbGFzc2VzXHJcbiAgICAgICAgICAgIHZhciBjbGFzc1JlID0gbmV3IFJlZ0V4cCgnXFxcXGJcXFxccz8nICsgVklFV0lOR19QUkVGSVggKyAnLVteXFxcXHNdK1xcXFxiJywgXCJnXCIpO1xyXG4gICAgICAgICAgICAkYm9keS5jbGFzc05hbWUgPSAkYm9keS5jbGFzc05hbWUucmVwbGFjZShjbGFzc1JlLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAvL2FkZGluZyB0aGUgY3VycmVudCBhbmNob3JcclxuICAgICAgICAgICAgYWRkQ2xhc3MoJGJvZHksIFZJRVdJTkdfUFJFRklYICsgJy0nICsgdGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIENoZWNrcyBmb3IgdHJhbnNsYXRlM2Qgc3VwcG9ydFxyXG4gICAgICAgICogQHJldHVybiBib29sZWFuXHJcbiAgICAgICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2NjE2NzEvZGV0ZWN0aW5nLXRyYW5zZm9ybS10cmFuc2xhdGUzZC1zdXBwb3J0XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzdXBwb3J0M2QoKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcclxuICAgICAgICAgICAgICAgIGhhczNkLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnd2Via2l0VHJhbnNmb3JtJzonLXdlYmtpdC10cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICdPVHJhbnNmb3JtJzonLW8tdHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgICAgICAgICAnbXNUcmFuc2Zvcm0nOictbXMtdHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgICAgICAgICAnTW96VHJhbnNmb3JtJzonLW1vei10cmFuc2Zvcm0nLFxyXG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOid0cmFuc2Zvcm0nXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9wcmV2ZW50aW5nIHRoZSBzdHlsZSBwOmVtcHR5e2Rpc3BsYXk6IG5vbmU7fSBmcm9tIHJldHVybmluZyB0aGUgd3JvbmcgcmVzdWx0XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGl0IHRvIHRoZSBib2R5IHRvIGdldCB0aGUgY29tcHV0ZWQgc3R5bGUuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGVsLCBudWxsKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHQgaW4gdHJhbnNmb3Jtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZVt0XSA9ICd0cmFuc2xhdGUzZCgxcHgsMXB4LDFweCknO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhczNkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUodHJhbnNmb3Jtc1t0XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChoYXMzZCAhPT0gdW5kZWZpbmVkICYmIGhhczNkLmxlbmd0aCA+IDAgJiYgaGFzM2QgIT09ICdub25lJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFJlbW92ZXMgdGhlIGF1dG8gc2Nyb2xsaW5nIGFjdGlvbiBmaXJlZCBieSB0aGUgbW91c2Ugd2hlZWwgYW5kIHRyYWNrcGFkLlxyXG4gICAgICAgICogQWZ0ZXIgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSBtb3VzZXdoZWVsIGFuZCB0cmFja3BhZCBtb3ZlbWVudHMgd29uJ3Qgc2Nyb2xsIHRocm91Z2ggc2VjdGlvbnMuXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVNb3VzZVdoZWVsSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIE1vdXNlV2hlZWxIYW5kbGVyLCBmYWxzZSk7IC8vSUU5LCBDaHJvbWUsIFNhZmFyaSwgT3BlclxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBNb3VzZVdoZWVsSGFuZGxlciwgZmFsc2UpOyAvL0ZpcmVmb3hcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01vek1vdXNlUGl4ZWxTY3JvbGwnLCBNb3VzZVdoZWVsSGFuZGxlciwgZmFsc2UpOyAvL29sZCBGaXJlZm94XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kZXRhY2hFdmVudCgnb25tb3VzZXdoZWVsJywgTW91c2VXaGVlbEhhbmRsZXIpOyAvL0lFIDYvNy84XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyB0aGUgYXV0byBzY3JvbGxpbmcgYWN0aW9uIGZvciB0aGUgbW91c2Ugd2hlZWwgYW5kIHRyYWNrcGFkLlxyXG4gICAgICAgICogQWZ0ZXIgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSBtb3VzZXdoZWVsIGFuZCB0cmFja3BhZCBtb3ZlbWVudHMgd2lsbCBzY3JvbGwgdGhyb3VnaCBzZWN0aW9uc1xyXG4gICAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL3doZWVsXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRNb3VzZVdoZWVsSGFuZGxlcigpe1xyXG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gJyc7XHJcbiAgICAgICAgICAgIHZhciBfYWRkRXZlbnRMaXN0ZW5lcjtcclxuXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcil7XHJcbiAgICAgICAgICAgICAgICBfYWRkRXZlbnRMaXN0ZW5lciA9IFwiYWRkRXZlbnRMaXN0ZW5lclwiO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIF9hZGRFdmVudExpc3RlbmVyID0gXCJhdHRhY2hFdmVudFwiO1xyXG4gICAgICAgICAgICAgICAgcHJlZml4ID0gJ29uJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZWN0IGF2YWlsYWJsZSB3aGVlbCBldmVudFxyXG4gICAgICAgICAgICB2YXIgc3VwcG9ydCA9ICdvbndoZWVsJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSA/ICd3aGVlbCcgOiAvLyBNb2Rlcm4gYnJvd3NlcnMgc3VwcG9ydCBcIndoZWVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V3aGVlbCAhPT0gdW5kZWZpbmVkID8gJ21vdXNld2hlZWwnIDogLy8gV2Via2l0IGFuZCBJRSBzdXBwb3J0IGF0IGxlYXN0IFwibW91c2V3aGVlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAnRE9NTW91c2VTY3JvbGwnOyAvLyBsZXQncyBhc3N1bWUgdGhhdCByZW1haW5pbmcgYnJvd3NlcnMgYXJlIG9sZGVyIEZpcmVmb3hcclxuICAgICAgICAgICAgdmFyIHBhc3NpdmVFdmVudCA9IGdfc3VwcG9ydHNQYXNzaXZlID8ge3Bhc3NpdmU6IGZhbHNlIH06IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYoc3VwcG9ydCA9PSAnRE9NTW91c2VTY3JvbGwnKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50WyBfYWRkRXZlbnRMaXN0ZW5lciBdKHByZWZpeCArICdNb3pNb3VzZVBpeGVsU2Nyb2xsJywgTW91c2VXaGVlbEhhbmRsZXIsIHBhc3NpdmVFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vaGFuZGxlIE1vek1vdXNlUGl4ZWxTY3JvbGwgaW4gb2xkZXIgRmlyZWZveFxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnRbIF9hZGRFdmVudExpc3RlbmVyIF0ocHJlZml4ICsgc3VwcG9ydCwgTW91c2VXaGVlbEhhbmRsZXIsIHBhc3NpdmVFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQmluZGluZyB0aGUgbW91c2Vtb3ZlIHdoZW4gdGhlIG1vdXNlJ3MgbWlkZGxlIGJ1dHRvbiBpcyBwcmVzc2VkXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBhZGRNaWRkbGVXaGVlbEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bkhhbmRsZXIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogVW5iaW5kaW5nIHRoZSBtb3VzZW1vdmUgd2hlbiB0aGUgbW91c2UncyBtaWRkbGUgYnV0dG9uIGlzIHJlbGVhc2VkXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVNaWRkbGVXaGVlbEhhbmRsZXIoKXtcclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bkhhbmRsZXIpO1xyXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogQWRkcyB0aGUgcG9zc2liaWxpdHkgdG8gYXV0byBzY3JvbGwgdGhyb3VnaCBzZWN0aW9ucyBvbiB0b3VjaCBkZXZpY2VzLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkVG91Y2hIYW5kbGVyKCl7XHJcbiAgICAgICAgICAgIGlmKGlzVG91Y2hEZXZpY2UgfHwgaXNUb3VjaCl7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLnRvdWNobW92ZSwgcHJldmVudEJvdW5jaW5nLCB7cGFzc2l2ZTogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICAkYm9keS5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy50b3VjaG1vdmUsIHByZXZlbnRCb3VuY2luZywge3Bhc3NpdmU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoV3JhcHBlciA9IG9wdGlvbnMudG91Y2hXcmFwcGVyO1xyXG4gICAgICAgICAgICAgICAgdG91Y2hXcmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLnRvdWNoc3RhcnQsIHRvdWNoU3RhcnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIHRvdWNoV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy50b3VjaG1vdmUsIHRvdWNoTW92ZUhhbmRsZXIsIHtwYXNzaXZlOiBmYWxzZX0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvdWNoV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy50b3VjaHN0YXJ0LCB0b3VjaFN0YXJ0SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB0b3VjaFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMudG91Y2htb3ZlLCB0b3VjaE1vdmVIYW5kbGVyLCB7cGFzc2l2ZTogZmFsc2V9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBSZW1vdmVzIHRoZSBhdXRvIHNjcm9sbGluZyBmb3IgdG91Y2ggZGV2aWNlcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVRvdWNoSGFuZGxlcigpe1xyXG4gICAgICAgICAgICBpZihpc1RvdWNoRGV2aWNlIHx8IGlzVG91Y2gpe1xyXG4gICAgICAgICAgICAgICAgLy8gbm9ybWFsU2Nyb2xsRWxlbWVudHMgcmVxdWlyZXMgaXQgb2ZmICMyNjkxXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLnRvdWNobW92ZSwgdG91Y2hNb3ZlSGFuZGxlciwge3Bhc3NpdmU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMudG91Y2htb3ZlLCBwcmV2ZW50Qm91bmNpbmcsIHtwYXNzaXZlOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0b3VjaFdyYXBwZXIgPSBvcHRpb25zLnRvdWNoV3JhcHBlcjtcclxuICAgICAgICAgICAgICAgIHRvdWNoV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy50b3VjaHN0YXJ0LCB0b3VjaFN0YXJ0SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICB0b3VjaFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMudG91Y2htb3ZlLCB0b3VjaE1vdmVIYW5kbGVyLCB7cGFzc2l2ZTogZmFsc2V9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIFJldHVybnMgYW5kIG9iamVjdCB3aXRoIE1pY3Jvc29mdCBwb2ludGVycyAoZm9yIElFPDExIGFuZCBmb3IgSUUgPj0gMTEpXHJcbiAgICAgICAgKiBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZG4zMDQ4ODYodj12cy44NSkuYXNweFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0TVNQb2ludGVyKCl7XHJcbiAgICAgICAgICAgIHZhciBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgLy9JRSA+PSAxMSAmIHJlc3Qgb2YgYnJvd3NlcnNcclxuICAgICAgICAgICAgaWYod2luZG93LlBvaW50ZXJFdmVudCl7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyID0geyBkb3duOiAncG9pbnRlcmRvd24nLCBtb3ZlOiAncG9pbnRlcm1vdmUnfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9JRSA8IDExXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyID0geyBkb3duOiAnTVNQb2ludGVyRG93bicsIG1vdmU6ICdNU1BvaW50ZXJNb3ZlJ307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXRzIHRoZSBwYWdlWCBhbmQgcGFnZVkgcHJvcGVydGllcyBkZXBlbmRpbmcgb24gdGhlIGJyb3dzZXIuXHJcbiAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanMvaXNzdWVzLzE5NCNpc3N1ZWNvbW1lbnQtMzQwNjk4NTRcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEV2ZW50c1BhZ2UoZSl7XHJcbiAgICAgICAgICAgIHZhciBldmVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50cy55ID0gKHR5cGVvZiBlLnBhZ2VZICE9PSAndW5kZWZpbmVkJyAmJiAoZS5wYWdlWSB8fCBlLnBhZ2VYKSA/IGUucGFnZVkgOiBlLnRvdWNoZXNbMF0ucGFnZVkpO1xyXG4gICAgICAgICAgICBldmVudHMueCA9ICh0eXBlb2YgZS5wYWdlWCAhPT0gJ3VuZGVmaW5lZCcgJiYgKGUucGFnZVkgfHwgZS5wYWdlWCkgPyBlLnBhZ2VYIDogZS50b3VjaGVzWzBdLnBhZ2VYKTtcclxuXHJcbiAgICAgICAgICAgIC8vaW4gdG91Y2ggZGV2aWNlcyB3aXRoIHNjcm9sbEJhcjp0cnVlLCBlLnBhZ2VZIGlzIGRldGVjdGVkLCBidXQgd2UgaGF2ZSB0byBkZWFsIHdpdGggdG91Y2ggZXZlbnRzLiAjMTAwOFxyXG4gICAgICAgICAgICBpZihpc1RvdWNoICYmIGlzUmVhbGx5VG91Y2goZSkgJiYgb3B0aW9ucy5zY3JvbGxCYXIgJiYgdHlwZW9mIGUudG91Y2hlcyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLnkgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XHJcbiAgICAgICAgICAgICAgICBldmVudHMueCA9IGUudG91Y2hlc1swXS5wYWdlWDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2xpZGVzIHNpbGVudGx5ICh3aXRoIG5vIGFuaW1hdGlvbikgdGhlIGFjdGl2ZSBzbGlkZXIgdG8gdGhlIGdpdmVuIHNsaWRlLlxyXG4gICAgICAgICogQHBhcmFtIG5vQ2FsbGJhY2sge2Jvb2x9IHRydWUgb3IgZGVmaW5lZCAtPiBubyBjYWxsYmFja3NcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNpbGVudExhbmRzY2FwZVNjcm9sbChhY3RpdmVTbGlkZSwgbm9DYWxsYmFja3Mpe1xyXG4gICAgICAgICAgICBzZXRTY3JvbGxpbmdTcGVlZCgwLCAnaW50ZXJuYWwnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBub0NhbGxiYWNrcyAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgLy9wcmV2ZW50aW5nIGZpcmluZyBjYWxsYmFja3MgYWZ0ZXJTbGlkZUxvYWQgZXRjLlxyXG4gICAgICAgICAgICAgICAgaXNSZXNpemluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhbmRzY2FwZVNjcm9sbChjbG9zZXN0KGFjdGl2ZVNsaWRlLCBTTElERVNfV1JBUFBFUl9TRUwpLCBhY3RpdmVTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICBpZih0eXBlb2Ygbm9DYWxsYmFja3MgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGlzUmVzaXppbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0U2Nyb2xsaW5nU3BlZWQob3JpZ2luYWxzLnNjcm9sbGluZ1NwZWVkLCAnaW50ZXJuYWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2Nyb2xscyBzaWxlbnRseSAod2l0aCBubyBhbmltYXRpb24pIHRoZSBwYWdlIHRvIHRoZSBnaXZlbiBZIHBvc2l0aW9uLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gc2lsZW50U2Nyb2xsKHRvcCl7XHJcbiAgICAgICAgICAgIC8vIFRoZSBmaXJzdCBzZWN0aW9uIGNhbiBoYXZlIGEgbmVnYXRpdmUgdmFsdWUgaW4gaU9TIDEwLiBOb3QgcXVpdGUgc3VyZSB3aHk6IC0wLjAxNDI4MjIyNjU2MjVcclxuICAgICAgICAgICAgLy8gdGhhdCdzIHdoeSB3ZSByb3VuZCBpdCB0byAwLlxyXG4gICAgICAgICAgICB2YXIgcm91bmRlZFRvcCA9IE1hdGgucm91bmQodG9wKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNzczMgJiYgb3B0aW9ucy5hdXRvU2Nyb2xsaW5nICYmICFvcHRpb25zLnNjcm9sbEJhcil7XHJcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNsYXRlM2QgPSAndHJhbnNsYXRlM2QoMHB4LCAtJyArIHJvdW5kZWRUb3AgKyAncHgsIDBweCknO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtQ29udGFpbmVyKHRyYW5zbGF0ZTNkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihvcHRpb25zLmF1dG9TY3JvbGxpbmcgJiYgIW9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgIGNzcyhjb250YWluZXIsIHsndG9wJzogLXJvdW5kZWRUb3AgKyAncHgnfSk7XHJcbiAgICAgICAgICAgICAgICBGUC50ZXN0LnRvcCA9IC1yb3VuZGVkVG9wICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFNldHRpbmdzID0gZ2V0U2Nyb2xsU2V0dGluZ3Mocm91bmRlZFRvcCk7XHJcbiAgICAgICAgICAgICAgICBzZXRTY3JvbGxpbmcoc2Nyb2xsU2V0dGluZ3MuZWxlbWVudCwgc2Nyb2xsU2V0dGluZ3Mub3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogUmV0dXJucyB0aGUgY3Jvc3MtYnJvd3NlciB0cmFuc2Zvcm0gc3RyaW5nLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VHJhbnNmb3Jtcyh0cmFuc2xhdGUzZCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiB0cmFuc2xhdGUzZCxcclxuICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHRyYW5zbGF0ZTNkLFxyXG4gICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOnRyYW5zbGF0ZTNkLFxyXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IHRyYW5zbGF0ZTNkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEFsbG93aW5nIG9yIGRpc2FsbG93aW5nIHRoZSBtb3VzZS9zd2lwZSBzY3JvbGwgaW4gYSBnaXZlbiBkaXJlY3Rpb24uIChub3QgZm9yIGtleWJvYXJkKVxyXG4gICAgICAgICogQHR5cGUgIG0gKG1vdXNlKSBvciBrIChrZXlib2FyZClcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldElzU2Nyb2xsQWxsb3dlZCh2YWx1ZSwgZGlyZWN0aW9uLCB0eXBlKXtcclxuICAgICAgICAgICAgLy91cCwgZG93biwgbGVmdCwgcmlnaHRcclxuICAgICAgICAgICAgaWYoZGlyZWN0aW9uICE9PSAnYWxsJyl7XHJcbiAgICAgICAgICAgICAgICBpc1Njcm9sbEFsbG93ZWRbdHlwZV1bZGlyZWN0aW9uXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2FsbCBkaXJlY3Rpb25zP1xyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaXNTY3JvbGxBbGxvd2VkW3R5cGVdKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTY3JvbGxBbGxvd2VkW3R5cGVdW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICogRGVzdHJveXMgZnVsbHBhZ2UuanMgcGx1Z2luIGV2ZW50cyBhbmQgb3B0aW5hbGx5IGl0cyBodG1sIG1hcmt1cCBhbmQgc3R5bGVzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KGFsbCl7XHJcbiAgICAgICAgICAgIHNldEF1dG9TY3JvbGxpbmcoZmFsc2UsICdpbnRlcm5hbCcpO1xyXG4gICAgICAgICAgICBzZXRBbGxvd1Njcm9sbGluZyh0cnVlKTtcclxuICAgICAgICAgICAgc2V0TW91c2VIaWphY2soZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRLZXlib2FyZFNjcm9sbGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgREVTVFJPWUVEKTtcclxuXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIGFmdGVyU2xpZGVMb2Fkc0lkLCBcclxuICAgICAgICAgICAgICAgIGFmdGVyU2VjdGlvbkxvYWRzSWQsXHJcbiAgICAgICAgICAgICAgICByZXNpemVJZCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbElkLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSWQyLFxyXG4gICAgICAgICAgICAgICAgZ19kb3VibGVDaGVja0hlaWdodElkLFxyXG4gICAgICAgICAgICAgICAgcmVzaXplSGFuZGxlcklkXHJcbiAgICAgICAgICAgIF0uZm9yRWFjaChmdW5jdGlvbih0aW1lb3V0SWQpe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGhhc2hDaGFuZ2VIYW5kbGVyKTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd25IYW5kbGVyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgWydjbGljaycsICd0b3VjaHN0YXJ0J10uZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGRlbGVnYXRlZEV2ZW50cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgWydtb3VzZWVudGVyJywgJ3RvdWNoc3RhcnQnLCAnbW91c2VsZWF2ZScsICd0b3VjaGVuZCddLmZvckVhY2goZnVuY3Rpb24oZXZlbnROYW1lKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBvbk1vdXNlRW50ZXJPckxlYXZlLCB0cnVlKTsgLy90cnVlIGlzIHJlcXVpcmVkIVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vbGV0cyBtYWtlIGEgbWVzcyFcclxuICAgICAgICAgICAgaWYoYWxsKXtcclxuICAgICAgICAgICAgICAgIGRlc3Ryb3lTdHJ1Y3R1cmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAqIFJlbW92ZXMgaW5saW5lIHN0eWxlcyBhZGRlZCBieSBmdWxscGFnZS5qc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZGVzdHJveVN0cnVjdHVyZSgpe1xyXG4gICAgICAgICAgICAvL3Jlc2V0aW5nIHRoZSBgdG9wYCBvciBgdHJhbnNsYXRlYCBwcm9wZXJ0aWVzIHRvIDBcclxuICAgICAgICAgICAgc2lsZW50U2Nyb2xsKDApO1xyXG5cclxuICAgICAgICAgICAgLy9sb2FkaW5nIGFsbCB0aGUgbGF6eSBsb2FkIGNvbnRlbnRcclxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtc3JjXSwgc291cmNlW2RhdGEtc3JjXSwgYXVkaW9bZGF0YS1zcmNdLCBpZnJhbWVbZGF0YS1zcmNdJywgY29udGFpbmVyKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgc2V0U3JjKGl0ZW0sICdzcmMnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCdpbWdbZGF0YS1zcmNzZXRdJykuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgIHNldFNyYyhpdGVtLCAnc3Jjc2V0Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVtb3ZlKCQoU0VDVElPTl9OQVZfU0VMICsgJywgJyArIFNMSURFU19OQVZfU0VMICsgICcsICcgKyBTTElERVNfQVJST1dfU0VMKSk7XHJcblxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIGlubGluZSBzdHlsZXNcclxuICAgICAgICAgICAgY3NzKCQoU0VDVElPTl9TRUwpLCB7XHJcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJycsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcicgOiAnJyxcclxuICAgICAgICAgICAgICAgICdwYWRkaW5nJzogJydcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjc3MoJChTTElERV9TRUwpLCB7XHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNzcyhjb250YWluZXIsIHtcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiAnJyxcclxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICcnLFxyXG4gICAgICAgICAgICAgICAgJy1tcy10b3VjaC1hY3Rpb24nOiAnJyxcclxuICAgICAgICAgICAgICAgICd0b3VjaC1hY3Rpb24nOiAnJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNzcygkaHRtbEJvZHksIHtcclxuICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICcnLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlIC5mcC1lbmFibGVkIGNsYXNzXHJcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKCRodG1sLCBFTkFCTEVEKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSAuZnAtcmVzcG9uc2l2ZSBjbGFzc1xyXG4gICAgICAgICAgICByZW1vdmVDbGFzcygkYm9keSwgUkVTUE9OU0lWRSk7XHJcblxyXG4gICAgICAgICAgICAvLyByZW1vdmUgYWxsIG9mIHRoZSAuZnAtdmlld2luZy0gY2xhc3Nlc1xyXG4gICAgICAgICAgICAkYm9keS5jbGFzc05hbWUuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZihWSUVXSU5HX1BSRUZJWCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVDbGFzcygkYm9keSwgY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIGFkZGVkIGNsYXNzZXNcclxuICAgICAgICAgICAgJChTRUNUSU9OX1NFTCArICcsICcgKyBTTElERV9TRUwpLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlciAmJiBvcHRpb25zLnNjcm9sbE92ZXJmbG93KXtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlci5yZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBUQUJMRSArICcgJyArIEFDVElWRSArICcgJyArIENPTVBMRVRFTFkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzU3R5bGVzID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZnAtc3R5bGVzJyk7XHJcbiAgICAgICAgICAgICAgICBpZihwcmV2aW91c1N0eWxlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZnAtc3R5bGVzJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vcmVtb3ZpbmcgYW5jaG9ycyBpZiB0aGV5IHdlcmUgbm90IHNldCB1c2luZyB0aGUgSFRNTCBtYXJrdXBcclxuICAgICAgICAgICAgICAgIGlmKGhhc0NsYXNzKGl0ZW0sIFNFQ1RJT04pICYmICFnX2luaXRpYWxBbmNob3JzSW5Eb20pe1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFuY2hvcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vcmVtb3ZpbmcgdGhlIGFwcGxpZWQgdHJhbnNpdGlvbiBmcm9tIHRoZSBmdWxscGFnZSB3cmFwcGVyXHJcbiAgICAgICAgICAgIHJlbW92ZUFuaW1hdGlvbihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgLy9VbndyYXBwaW5nIGNvbnRlbnRcclxuICAgICAgICAgICAgW1RBQkxFX0NFTExfU0VMLCBTTElERVNfQ09OVEFJTkVSX1NFTCxTTElERVNfV1JBUFBFUl9TRUxdLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICAgICAgJChzZWxlY3RvciwgY29udGFpbmVyKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdW53cmFwIG5vdCBiZWluZyB1c2UgaW4gY2FzZSB0aGVyZSdzIG5vIGNoaWxkIGVsZW1lbnQgaW5zaWRlIGFuZCBpdHMganVzdCB0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgdW53cmFwKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9yZW1vdmluZyB0aGUgYXBwbGllZCB0cmFuc2l0aW9uIGZyb20gdGhlIGZ1bGxwYWdlIHdyYXBwZXJcclxuICAgICAgICAgICAgY3NzKGNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNpdGlvbic6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICd0cmFuc2l0aW9uJzogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9zY3JvbGxpbmcgdGhlIHBhZ2UgdG8gdGhlIHRvcCB3aXRoIG5vIGFuaW1hdGlvblxyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG4gICAgICAgICAgICAvL3JlbW92aW5nIHNlbGVjdG9yc1xyXG4gICAgICAgICAgICB2YXIgdXNlZFNlbGVjdG9ycyA9IFtTRUNUSU9OLCBTTElERSwgU0xJREVTX0NPTlRBSU5FUl07XHJcbiAgICAgICAgICAgIHVzZWRTZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKCQoJy4nICsgaXRlbSksIGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgKiBTZXRzIHRoZSBzdGF0ZSBmb3IgYSB2YXJpYWJsZSB3aXRoIG11bHRpcGxlIHN0YXRlcyAob3JpZ2luYWwsIGFuZCB0ZW1wb3JhbClcclxuICAgICAgICAqIFNvbWUgdmFyaWFibGVzIHN1Y2ggYXMgYGF1dG9TY3JvbGxpbmdgIG9yIGByZWNvcmRIaXN0b3J5YCBtaWdodCBjaGFuZ2UgYXV0b21hdGljYWxseSBpdHMgc3RhdGUgd2hlbiB1c2luZyBgcmVzcG9uc2l2ZWAgb3IgYGF1dG9TY3JvbGxpbmc6ZmFsc2VgLlxyXG4gICAgICAgICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGtlZXAgdHJhY2sgb2YgYm90aCBzdGF0ZXMsIHRoZSBvcmlnaW5hbCBhbmQgdGhlIHRlbXBvcmFsIG9uZS5cclxuICAgICAgICAqIElmIHR5cGUgaXMgbm90ICdpbnRlcm5hbCcsIHRoZW4gd2UgYXNzdW1lIHRoZSB1c2VyIGlzIGdsb2JhbGx5IGNoYW5naW5nIHRoZSB2YXJpYWJsZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFZhcmlhYmxlU3RhdGUodmFyaWFibGUsIHZhbHVlLCB0eXBlKXtcclxuICAgICAgICAgICAgb3B0aW9uc1t2YXJpYWJsZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYodHlwZSAhPT0gJ2ludGVybmFsJyl7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW5hbHNbdmFyaWFibGVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogRGlzcGxheXMgd2FybmluZ3NcclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGRpc3BsYXlXYXJuaW5ncygpe1xyXG4gICAgICAgICAgICB2YXIgbCA9IG9wdGlvbnNbJ2xpJyArICdjJyArICdlbnNlSycgKyAnZScgKyAneSddO1xyXG4gICAgICAgICAgICB2YXIgbXNnU3R5bGUgPSAnZm9udC1zaXplOiAxNXB4O2JhY2tncm91bmQ6eWVsbG93Oyc7XHJcblxyXG4gICAgICAgICAgICBpZighaXNPSyl7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ2Vycm9yJywgJ0Z1bGxwYWdlLmpzIHZlcnNpb24gMyBoYXMgY2hhbmdlZCBpdHMgbGljZW5zZSB0byBHUEx2MyBhbmQgaXQgcmVxdWlyZXMgYSBgbGljZW5zZUtleWAgb3B0aW9uLiBSZWFkIGFib3V0IGl0IGhlcmU6Jyk7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ2Vycm9yJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9mdWxsUGFnZS5qcyNvcHRpb25zLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYobCAmJiBsLmxlbmd0aCA8IDIwKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignJWMgVGhpcyB3ZWJzaXRlIHdhcyBtYWRlIHVzaW5nIGZ1bGxQYWdlLmpzIHNsaWRlci4gTW9yZSBpbmZvIG9uIHRoZSBmb2xsb3dpbmcgd2Vic2l0ZTonLCBtc2dTdHlsZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJyVjIGh0dHBzOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlLycsIG1zZ1N0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaGFzQ2xhc3MoJGh0bWwsIEVOQUJMRUQpKXtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcignZXJyb3InLCAnRnVsbHBhZ2UuanMgY2FuIG9ubHkgYmUgaW5pdGlhbGl6ZWQgb25jZSBhbmQgeW91IGFyZSBkb2luZyBpdCBtdWx0aXBsZSB0aW1lcyEnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRGlzYWJsZSBtdXR1YWxseSBleGNsdXNpdmUgc2V0dGluZ3NcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsICYmXHJcbiAgICAgICAgICAgICAgICAob3B0aW9ucy5sb29wVG9wIHx8IG9wdGlvbnMubG9vcEJvdHRvbSkpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ3dhcm4nLCAnT3B0aW9uIGBsb29wVG9wL2xvb3BCb3R0b21gIGlzIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBjb250aW51b3VzVmVydGljYWxgOyBgY29udGludW91c1ZlcnRpY2FsYCBkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLnNjcm9sbE92ZXJmbG93ICYmXHJcbiAgICAgICAgICAgICAgIChvcHRpb25zLnNjcm9sbEJhciB8fCAhb3B0aW9ucy5hdXRvU2Nyb2xsaW5nKSl7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ3dhcm4nLCAnT3B0aW9ucyBzY3JvbGxCYXI6dHJ1ZSBhbmQgYXV0b1Njcm9sbGluZzpmYWxzZSBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlIHdpdGggc2Nyb2xsT3ZlcmZsb3c6dHJ1ZS4gU2VjdGlvbnMgd2l0aCBzY3JvbGxPdmVyZmxvdyBtaWdodCBub3Qgd29yayB3ZWxsIGluIEZpcmVmb3gnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob3B0aW9ucy5jb250aW51b3VzVmVydGljYWwgJiYgKG9wdGlvbnMuc2Nyb2xsQmFyIHx8ICFvcHRpb25zLmF1dG9TY3JvbGxpbmcpKXtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuY29udGludW91c1ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ3dhcm4nLCAnU2Nyb2xsIGJhcnMgKGBzY3JvbGxCYXI6dHJ1ZWAgb3IgYGF1dG9TY3JvbGxpbmc6ZmFsc2VgKSBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlIHdpdGggYGNvbnRpbnVvdXNWZXJ0aWNhbGA7IGBjb250aW51b3VzVmVydGljYWxgIGRpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKG9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3cgJiYgb3B0aW9ucy5zY3JvbGxPdmVyZmxvd0hhbmRsZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNjcm9sbE92ZXJmbG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ2Vycm9yJywgJ1RoZSBvcHRpb24gYHNjcm9sbE92ZXJmbG93OnRydWVgIHJlcXVpcmVzIHRoZSBmaWxlIGBzY3JvbGxvdmVyZmxvdy5taW4uanNgLiBQbGVhc2UgaW5jbHVkZSBpdCBiZWZvcmUgZnVsbFBhZ2UuanMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vdXNpbmcgZXh0ZW5zaW9ucz8gV3JvbmcgZmlsZSFcclxuICAgICAgICAgICAgZXh0ZW5zaW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGV4dGVuc2lvbil7XHJcbiAgICAgICAgICAgICAgICAvL2lzIHRoZSBvcHRpb24gc2V0IHRvIHRydWU/XHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25zW2V4dGVuc2lvbl0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dFcnJvcignd2FybicsICdmdWxscGFnZS5qcyBleHRlbnNpb25zIHJlcXVpcmUgZnVsbHBhZ2UuZXh0ZW5zaW9ucy5taW4uanMgZmlsZSBpbnN0ZWFkIG9mIHRoZSB1c3VhbCBmdWxscGFnZS5qcy4gUmVxdWVzdGVkOiAnKyBleHRlbnNpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vYW5jaG9ycyBjYW4gbm90IGhhdmUgdGhlIHNhbWUgdmFsdWUgYXMgYW55IGVsZW1lbnQgSUQgb3IgTkFNRVxyXG4gICAgICAgICAgICBvcHRpb25zLmFuY2hvcnMuZm9yRWFjaChmdW5jdGlvbihuYW1lKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2Nhc2UgaW5zZW5zaXRpdmUgc2VsZWN0b3JzIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xOTQ2NTE4Ny8xMDgxMzk2KVxyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWVBdHRyID0gW10uc2xpY2UuY2FsbCgkKCdbbmFtZV0nKSkuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKSAmJiBpdGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpLnRvTG93ZXJDYXNlKCkgPT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGlkQXR0ciA9IFtdLnNsaWNlLmNhbGwoJCgnW2lkXScpKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmdldEF0dHJpYnV0ZSgnaWQnKSAmJiBpdGVtLmdldEF0dHJpYnV0ZSgnaWQnKS50b0xvd2VyQ2FzZSgpID09IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGlkQXR0ci5sZW5ndGggfHwgbmFtZUF0dHIubGVuZ3RoICl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yKCdlcnJvcicsICdkYXRhLWFuY2hvciB0YWdzIGNhbiBub3QgaGF2ZSB0aGUgc2FtZSB2YWx1ZSBhcyBhbnkgYGlkYCBlbGVtZW50IG9uIHRoZSBzaXRlIChvciBgbmFtZWAgZWxlbWVudCBmb3IgSUUpLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSBpZEF0dHIubGVuZ3RoID8gJ2lkJyA6ICduYW1lJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaWRBdHRyLmxlbmd0aCB8fCBuYW1lQXR0ci5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RXJyb3IoJ2Vycm9yJywgJ1wiJyArIG5hbWUgKyAnXCIgaXMgaXMgYmVpbmcgdXNlZCBieSBhbm90aGVyIGVsZW1lbnQgYCcrIHByb3BlcnR5TmFtZSArJ2AgcHJvcGVydHknKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBHZXR0aW5nIHRoZSBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCB0byBzY3JvbGwgd2hlbiB1c2luZyBqUXVlcnkgYW5pbWF0aW9uc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2Nyb2xsZWRQb3NpdGlvbihlbGVtZW50KXtcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgLy9pcyBub3QgdGhlIHdpbmRvdyBlbGVtZW50IGFuZCBpcyBhIHNsaWRlP1xyXG4gICAgICAgICAgICBpZihlbGVtZW50LnNlbGYgIT0gd2luZG93ICYmIGhhc0NsYXNzKGVsZW1lbnQsIFNMSURFU19XUkFQUEVSKSl7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKCFvcHRpb25zLmF1dG9TY3JvbGxpbmcgIHx8IG9wdGlvbnMuc2Nyb2xsQmFyKXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gZ2V0U2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gZWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vZ2V0cyB0aGUgdG9wIHByb3BlcnR5IG9mIHRoZSB3cmFwcGVyXHJcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogU2ltdWxhdGVzIHRoZSBhbmltYXRlZCBzY3JvbGxUb3Agb2YgalF1ZXJ5LiBVc2VkIHdoZW4gY3NzMzpmYWxzZSBvciBzY3JvbGxCYXI6dHJ1ZSBvciBhdXRvU2Nyb2xsaW5nOmZhbHNlXHJcbiAgICAgICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjEzNjc4OS8xMDgxMzk2XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IGdldFNjcm9sbGVkUG9zaXRpb24oZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSB0byAtIHN0YXJ0O1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB2YXIgaW5jcmVtZW50ID0gMjA7XHJcbiAgICAgICAgICAgIGFjdGl2ZUFuaW1hdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5pbWF0ZVNjcm9sbCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBpZihhY3RpdmVBbmltYXRpb24peyAvL2luIG9yZGVyIHRvIHN0b3BlIGl0IGZyb20gb3RoZXIgZnVuY3Rpb24gd2hlbmV2ZXIgd2Ugd2FudFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSB0bztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbWUgKz0gaW5jcmVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihkdXJhdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHdpbmRvdy5mcF9lYXNpbmdzW29wdGlvbnMuZWFzaW5nXShjdXJyZW50VGltZSwgc3RhcnQsIGNoYW5nZSwgZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2Nyb2xsaW5nKGVsZW1lbnQsIHZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lIDwgZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChhbmltYXRlU2Nyb2xsLCBpbmNyZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHR5cGVvZiBjYWxsYmFjayAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmIChjdXJyZW50VGltZSA8IGR1cmF0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgYW5pbWF0ZVNjcm9sbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBTY3JvbGxzIHRoZSBwYWdlIC8gc2xpZGVyIHRoZSBnaXZlbiBudW1iZXIgb2YgcGl4ZWxzLlxyXG4gICAgICAgICogSXQgd2lsbCBkbyBpdCBvbmUgb3IgYW5vdGhlciB3YXkgZGVwZW5kaW9uZyBvbiB0aGUgbGlicmFyeSdzIGNvbmZpZy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIHNldFNjcm9sbGluZyhlbGVtZW50LCB2YWwpe1xyXG4gICAgICAgICAgICBpZighb3B0aW9ucy5hdXRvU2Nyb2xsaW5nIHx8IG9wdGlvbnMuc2Nyb2xsQmFyIHx8IChlbGVtZW50LnNlbGYgIT0gd2luZG93ICYmIGhhc0NsYXNzKGVsZW1lbnQsIFNMSURFU19XUkFQUEVSKSkpe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vc2Nyb2xsaW5nIGhvcml6b250YWxseSB0aHJvdWdoIHRoZSBzbGlkZXM/XHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LnNlbGYgIT0gd2luZG93ICAmJiBoYXNDbGFzcyhlbGVtZW50LCBTTElERVNfV1JBUFBFUikpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IHZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vdmVydGljYWwgc2Nyb2xsXHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsVG8oMCwgdmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSB2YWwgKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIEdldHMgdGhlIGFjdGl2ZSBzbGlkZS5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEFjdGl2ZVNsaWRlKCl7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVTbGlkZSA9ICQoU0xJREVfQUNUSVZFX1NFTCwgJChTRUNUSU9OX0FDVElWRV9TRUwpWzBdKVswXTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxPclNsaWRlKGFjdGl2ZVNsaWRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogR2V0cyB0aGUgYWN0aXZlIHNlY3Rpb24uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBnZXRBY3RpdmVTZWN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2VjdGlvbigkKFNFQ1RJT05fQUNUSVZFX1NFTClbMF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBJdGVtLiBTbGlkZSBvciBTZWN0aW9uIG9iamVjdHMgc2hhcmUgdGhlIHNhbWUgcHJvcGVydGllcy5cclxuICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIEl0ZW0oZWwsIHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgdGhpcy5hbmNob3IgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5jaG9yJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGVsO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXgoZWwsIHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgdGhpcy5pc0xhc3QgPSB0aGlzLmluZGV4ID09PSBlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmxlbmd0aCAtMTtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gIXRoaXMuaW5kZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNlY3Rpb24gb2JqZWN0XHJcbiAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBTZWN0aW9uKGVsKXtcclxuICAgICAgICAgICAgSXRlbS5jYWxsKHRoaXMsIGVsLCBTRUNUSU9OX1NFTCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAqIFNsaWRlIG9iamVjdFxyXG4gICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gU2xpZGUoZWwpe1xyXG4gICAgICAgICAgICBJdGVtLmNhbGwodGhpcywgZWwsIFNMSURFX1NFTCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gRlA7XHJcbiAgICB9IC8vZW5kIG9mICQuZm4uZnVsbHBhZ2VcclxuXHJcbiAgICAvL3V0aWxzXHJcbiAgICAvKipcclxuICAgICogU2hvd3MgYSBtZXNzYWdlIGluIHRoZSBjb25zb2xlIG9mIHRoZSBnaXZlbiB0eXBlLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHNob3dFcnJvcih0eXBlLCB0ZXh0KXtcclxuICAgICAgICB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZVt0eXBlXSAmJiB3aW5kb3cuY29uc29sZVt0eXBlXSgnZnVsbFBhZ2U6ICcgKyB0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogRXF1aXZhbGVudCBvciBqUXVlcnkgZnVuY3Rpb24gJCgpLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uICQoc2VsZWN0b3IsIGNvbnRleHQpe1xyXG4gICAgICAgIGNvbnRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGNvbnRleHQgOiBkb2N1bWVudDtcclxuICAgICAgICByZXR1cm4gY29udGV4dCA/IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBFeHRlbmRzIGEgZ2l2ZW4gT2JqZWN0IHByb3BlcnRpZXMgYW5kIGl0cyBjaGlsZHMuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGVlcEV4dGVuZChvdXQpIHtcclxuICAgICAgICBvdXQgPSBvdXQgfHwge307XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47ICsraSl7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcblxyXG4gICAgICAgICAgICBpZighb2JqKXtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gb2JqKXtcclxuICAgICAgICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLy8gYmFzZWQgb24gaHR0cHM6Ly9qYXZhc2NyaXB0d2VibG9nLndvcmRwcmVzcy5jb20vMjAxMS8wOC8wOC9maXhpbmctdGhlLWphdmFzY3JpcHQtdHlwZW9mLW9wZXJhdG9yL1xyXG4gICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW2tleV0pID09PSAnW29iamVjdCBPYmplY3RdJyl7XHJcbiAgICAgICAgICAgICAgICBvdXRba2V5XSA9IGRlZXBFeHRlbmQob3V0W2tleV0sIG9ialtrZXldKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgb3V0W2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDaGVja3MgaWYgdGhlIHBhc3NlZCBlbGVtZW50IGNvbnRhaW5zIHRoZSBwYXNzZWQgY2xhc3MuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSl7XHJcbiAgICAgICAgaWYoZWwgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCl7XHJcbiAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJyhefCApJyArIGNsYXNzTmFtZSArICcoIHwkKScsICdnaScpLnRlc3QoZWwuY2xhc3NOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyB0aGUgd2luZG93IGhlaWdodC4gQ3Jvc3Nicm93c2VyLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldFdpbmRvd0hlaWdodCgpe1xyXG4gICAgICAgIHJldHVybiAnaW5uZXJIZWlnaHQnIGluIHdpbmRvdyA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHdpbmRvdyB3aWR0aC5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRXaW5kb3dXaWR0aCgpe1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogU2V0J3MgdGhlIENTUyBwcm9wZXJ0aWVzIGZvciB0aGUgcGFzc2VkIGl0ZW0vcy5cclxuICAgICogQHBhcmFtIHtOb2RlTGlzdHxIVE1MRWxlbWVudH0gaXRlbXNcclxuICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzIGNzcyBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3NzKGl0ZW1zLCBwcm9wcykge1xyXG4gICAgICAgIGl0ZW1zID0gZ2V0TGlzdChpdGVtcyk7XHJcblxyXG4gICAgICAgIHZhciBrZXk7XHJcbiAgICAgICAgZm9yIChrZXkgaW4gcHJvcHMpIHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGVba2V5XSA9IHByb3BzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdlbmVyaWMgZnVuY3Rpb24gdG8gZ2V0IHRoZSBwcmV2aW91cyBvciBuZXh0IGVsZW1lbnQuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gdW50aWwoaXRlbSwgc2VsZWN0b3IsIGZuKXtcclxuICAgICAgICB2YXIgc2libGluZyA9IGl0ZW1bZm5dO1xyXG4gICAgICAgIHdoaWxlKHNpYmxpbmcgJiYgIW1hdGNoZXMoc2libGluZywgc2VsZWN0b3IpKXtcclxuICAgICAgICAgICAgc2libGluZyA9IHNpYmxpbmdbZm5dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHByZXZpb3VzIGVsZW1lbnQgdG8gdGhlIHBhc3NlZCBlbGVtZW50IHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNlbGVjdG9yLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHByZXZVbnRpbChpdGVtLCBzZWxlY3Rvcil7XHJcbiAgICAgICAgcmV0dXJuIHVudGlsKGl0ZW0sIHNlbGVjdG9yLCAncHJldmlvdXNFbGVtZW50U2libGluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIHRoZSBuZXh0IGVsZW1lbnQgdG8gdGhlIHBhc3NlZCBlbGVtZW50IHRoYXQgbWF0Y2hlcyB0aGUgcGFzc2VkIHNlbGVjdG9yLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIG5leHRVbnRpbChpdGVtLCBzZWxlY3Rvcil7XHJcbiAgICAgICAgcmV0dXJuIHVudGlsKGl0ZW0sIHNlbGVjdG9yLCAnbmV4dEVsZW1lbnRTaWJsaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgdGhlIHByZXZpb3VzIGVsZW1lbnQgdG8gdGhlIHBhc3NlZCBlbGVtZW50LlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHByZXYoaXRlbSl7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyB0aGUgbmV4dCBlbGVtZW50IHRvIHRoZSBwYXNzZWQgZWxlbWVudC5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBuZXh0KGl0ZW0pe1xyXG4gICAgICAgIHJldHVybiBpdGVtLm5leHRFbGVtZW50U2libGluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyB0aGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIHBhc3NlZCBsaXN0IG9mIGVsZW1lbnRzLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGxhc3QoaXRlbSl7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1baXRlbS5sZW5ndGgtMV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgaW5kZXggZnJvbSB0aGUgcGFzc2VkIGVsZW1lbnQuXHJcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBpcyBvcHRpb25hbC5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBpbmRleChpdGVtLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIGl0ZW0gPSBpc0FycmF5T3JMaXN0KGl0ZW0pID8gaXRlbVswXSA6IGl0ZW07XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gc2VsZWN0b3IgIT0gbnVsbD8gJChzZWxlY3RvciwgaXRlbS5wYXJlbnROb2RlKSA6IGl0ZW0ucGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xyXG4gICAgICAgIHZhciBudW0gPSAwO1xyXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2ldID09IGl0ZW0pIHJldHVybiBudW07XHJcbiAgICAgICAgICAgICBpZiAoY2hpbGRyZW5baV0ubm9kZVR5cGU9PTEpIG51bSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgYW4gaXRlcmFibGUgZWxlbWVudCBmb3IgdGhlIHBhc3NlZCBlbGVtZW50L3NcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRMaXN0KGl0ZW0pe1xyXG4gICAgICAgIHJldHVybiAhaXNBcnJheU9yTGlzdChpdGVtKSA/IFtpdGVtXSA6IGl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEFkZHMgdGhlIGRpc3BsYXk9bm9uZSBwcm9wZXJ0eSBmb3IgdGhlIHBhc3NlZCBlbGVtZW50L3NcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBoaWRlKGVsKXtcclxuICAgICAgICBlbCA9IGdldExpc3QoZWwpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgZWxbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBBZGRzIHRoZSBkaXNwbGF5PWJsb2NrIHByb3BlcnR5IGZvciB0aGUgcGFzc2VkIGVsZW1lbnQvc1xyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHNob3coZWwpe1xyXG4gICAgICAgIGVsID0gZ2V0TGlzdChlbCk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8ZWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBlbFtpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDaGVja3MgaWYgdGhlIHBhc3NlZCBlbGVtZW50IGlzIGFuIGl0ZXJhYmxlIGVsZW1lbnQgb3Igbm90XHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXNBcnJheU9yTGlzdChlbCl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggZWwgKSA9PT0gJ1tvYmplY3QgQXJyYXldJyB8fFxyXG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIGVsICkgPT09ICdbb2JqZWN0IE5vZGVMaXN0XSc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEFkZHMgdGhlIHBhc3NlZCBjbGFzcyB0byB0aGUgcGFzc2VkIGVsZW1lbnQvc1xyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbGFzc05hbWUpIHtcclxuICAgICAgICBlbCA9IGdldExpc3QoZWwpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBlbFtpXTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0KXtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogUmVtb3ZlcyB0aGUgcGFzc2VkIGNsYXNzIHRvIHRoZSBwYXNzZWQgZWxlbWVudC9zXHJcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBgY2xhc3NOYW1lYCBjYW4gYmUgbXVsdGlwbGUgY2xhc3NuYW1lcyBzZXBhcmF0ZWQgYnkgd2hpdGVzcGFjZVxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBjbGFzc05hbWUpe1xyXG4gICAgICAgIGVsID0gZ2V0TGlzdChlbCk7XHJcblxyXG4gICAgICAgIHZhciBjbGFzc05hbWVzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgYSA9IDA7IGE8Y2xhc3NOYW1lcy5sZW5ndGg7IGErKyl7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbYV07XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8ZWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBlbFtpXTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gaXRlbS5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQXBwZW5kcyB0aGUgZ2l2ZW4gZWxlbWVudCBvdCB0aGUgZ2l2ZW4gcGFyZW50LlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGFwcGVuZFRvKGVsLCBwYXJlbnQpe1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICBVc2FnZTpcclxuXHJcbiAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgd3JhcHBlci5jbGFzc05hbWUgPSAnZnAtc2xpZGVzJztcclxuICAgIHdyYXAoJCgnLnNsaWRlJyksIHdyYXBwZXIpO1xyXG5cclxuICAgIGh0dHBzOi8vanNmaWRkbGUubmV0L3F3emM3b3kzLzE1LyAodmFuaWxsYSlcclxuICAgIGh0dHBzOi8vanNmaWRkbGUubmV0L295YTZuZGthLzEvIChqcXVlcnkgZXF1aXZhbGVudClcclxuICAgICovXHJcbiAgICBmdW5jdGlvbiB3cmFwKHRvV3JhcCwgd3JhcHBlciwgaXNXcmFwQWxsKSB7XHJcbiAgICAgICAgdmFyIG5ld1BhcmVudDtcclxuICAgICAgICB3cmFwcGVyID0gd3JhcHBlciB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdG9XcmFwLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0b1dyYXBbaV07XHJcbiAgICAgICAgICAgIGlmKGlzV3JhcEFsbCAmJiAhaSB8fCAhaXNXcmFwQWxsKXtcclxuICAgICAgICAgICAgICAgIG5ld1BhcmVudCA9IHdyYXBwZXIuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdQYXJlbnQsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1BhcmVudC5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvV3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgIFVzYWdlOlxyXG4gICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gJ2ZwLXNsaWRlcyc7XHJcbiAgICB3cmFwKCQoJy5zbGlkZScpLCB3cmFwcGVyKTtcclxuXHJcbiAgICBodHRwczovL2pzZmlkZGxlLm5ldC9xd3pjN295My8yNy8gKHZhbmlsbGEpXHJcbiAgICBodHRwczovL2pzZmlkZGxlLm5ldC9veWE2bmRrYS80LyAoanF1ZXJ5IGVxdWl2YWxlbnQpXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gd3JhcEFsbCh0b1dyYXAsIHdyYXBwZXIpIHtcclxuICAgICAgICB3cmFwKHRvV3JhcCwgd3JhcHBlciwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFVzYWdlOlxyXG4gICAgKiB3cmFwSW5uZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcGUnKSwgJzxkaXYgY2xhc3M9XCJ0ZXN0XCI+YWZkYXM8L2Rpdj4nKTtcclxuICAgICogd3JhcElubmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXBlJyksIGVsZW1lbnQpO1xyXG4gICAgKlxyXG4gICAgKiBodHRwczovL2pzZmlkZGxlLm5ldC96ZXh4ejB0dy82L1xyXG4gICAgKlxyXG4gICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjE4MTc1OTAvMTA4MTM5NlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHdyYXBJbm5lcihwYXJlbnQsIHdyYXBwZXIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXIgPT09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICB3cmFwcGVyID0gY3JlYXRlRWxlbWVudEZyb21IVE1MKHdyYXBwZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG5cclxuICAgICAgICB3aGlsZShwYXJlbnQuZmlyc3RDaGlsZCAhPT0gd3JhcHBlcil7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBVc2FnZTpcclxuICAgICogdW53cmFwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXBlJykpO1xyXG4gICAgKiB1bndyYXAoZWxlbWVudCk7XHJcbiAgICAqXHJcbiAgICAqIGh0dHBzOi8vanNmaWRkbGUubmV0L3N6anQwaHhxLzEvXHJcbiAgICAqXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gdW53cmFwKHdyYXBwZXIpIHtcclxuICAgICAgICB2YXIgd3JhcHBlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgd2hpbGUgKHdyYXBwZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyQ29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd3JhcHBlci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh3cmFwcGVyQ29udGVudCwgd3JhcHBlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjIxMDA4NTMvZG9tLXB1cmUtamF2YXNjcmlwdC1zb2x1dGlvbi10by1qcXVlcnktY2xvc2VzdC1pbXBsZW1lbnRhdGlvblxyXG4gICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IG9yIGBmYWxzZWAgaWYgdGhlcmUncyBub25lXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gY2xvc2VzdChlbCwgc2VsZWN0b3IpIHtcclxuICAgICAgICBpZihlbCAmJiBlbC5ub2RlVHlwZSA9PT0gMSl7XHJcbiAgICAgICAgICAgIGlmKG1hdGNoZXMoZWwsIHNlbGVjdG9yKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNsb3Nlc3QoZWwucGFyZW50Tm9kZSwgc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogUGxhY2VzIG9uZSBlbGVtZW50IChyZWwpIGFmdGVyIGFub3RoZXIgb25lIG9yIGdyb3VwIG9mIHRoZW0gKHJlZmVyZW5jZSkuXHJcbiAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZVxyXG4gICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fE5vZGVMaXN0fFN0cmluZ30gZWxcclxuICAgICogaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvOXM5N2hoenYvMS9cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiBhZnRlcihyZWZlcmVuY2UsIGVsKSB7XHJcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHJlZmVyZW5jZSwgcmVmZXJlbmNlLm5leHRTaWJsaW5nLCBlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFBsYWNlcyBvbmUgZWxlbWVudCAocmVsKSBiZWZvcmUgYW5vdGhlciBvbmUgb3IgZ3JvdXAgb2YgdGhlbSAocmVmZXJlbmNlKS5cclxuICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlXHJcbiAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8Tm9kZUxpc3R8U3RyaW5nfSBlbFxyXG4gICAgKiBodHRwczovL2pzZmlkZGxlLm5ldC85czk3aGh6di8xL1xyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGJlZm9yZShyZWZlcmVuY2UsIGVsKSB7XHJcbiAgICAgICAgaW5zZXJ0QmVmb3JlKHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEJhc2VkIGluIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xOTMxNjAyNC8xMDgxMzk2XHJcbiAgICAqIGFuZCBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc5MzYzMC8xMDgxMzk2XHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5zZXJ0QmVmb3JlKHJlZmVyZW5jZSwgYmVmb3JlRWxlbWVudCwgZWwpe1xyXG4gICAgICAgIGlmKCFpc0FycmF5T3JMaXN0KGVsKSl7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBlbCA9PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgICAgICAgICBlbCA9IGNyZWF0ZUVsZW1lbnRGcm9tSFRNTChlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWwgPSBbZWxdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbFtpXSwgYmVmb3JlRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNDY0ODc2L2phdmFzY3JpcHQtZ2V0LXdpbmRvdy14LXktcG9zaXRpb24tZm9yLXNjcm9sbFxyXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCl7XHJcbiAgICAgICAgdmFyIGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2Muc2Nyb2xsVG9wKSAgLSAoZG9jLmNsaWVudFRvcCB8fCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogR2V0cyB0aGUgc2libGluZ3Mgb2YgdGhlIHBhc3NlZCBlbGVtZW50XHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gc2libGluZ3MoZWwpe1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZWwucGFyZW50Tm9kZS5jaGlsZHJlbiwgZnVuY3Rpb24oY2hpbGQpe1xyXG4gICAgICAgICAgcmV0dXJuIGNoaWxkICE9PSBlbDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2ZvciBJRSA5ID9cclxuICAgIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGV2ZW50KXtcclxuICAgICAgICBpZihldmVudC5wcmV2ZW50RGVmYXVsdCl7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHBhc3NlZCBpdGVtIGlzIG9mIGZ1bmN0aW9uIHR5cGUuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyhpdGVtKTtcclxuICAgICAgcmV0dXJuIHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogVHJpZ2dlciBjdXN0b20gZXZlbnRzXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gdHJpZ2dlcihlbCwgZXZlbnROYW1lLCBkYXRhKXtcclxuICAgICAgICB2YXIgZXZlbnQ7XHJcbiAgICAgICAgZGF0YSA9IHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/IHt9IDogZGF0YTtcclxuXHJcbiAgICAgICAgLy8gTmF0aXZlXHJcbiAgICAgICAgaWYodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gXCJmdW5jdGlvblwiICl7XHJcbiAgICAgICAgICAgIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge2RldGFpbDogZGF0YX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG4gICAgICAgICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlLCBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBQb2x5ZmlsbCBvZiAubWF0Y2hlcygpXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gbWF0Y2hlcyhlbCwgc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gKGVsLm1hdGNoZXMgfHwgZWwubWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWwub01hdGNoZXNTZWxlY3RvcikuY2FsbChlbCwgc2VsZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBwYXNzZWQgZWxlbWVudCBlbC5cclxuICAgICovXHJcbiAgICBmdW5jdGlvbiB0b2dnbGUoZWwsIHZhbHVlKXtcclxuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKXtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaTxlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBlbFtpXS5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyAnYmxvY2snIDogJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vd2UgZG9uJ3QgdXNlIGl0IGluIG90aGVyIHdheSwgc28gbm8gZWxzZSA6KVxyXG5cclxuICAgICAgICByZXR1cm4gZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENyZWF0ZXMgYSBIVE1MRWxlbWVudCBmcm9tIHRoZSBwYXNzZWQgSFRNTCBzdHJpbmcuXHJcbiAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80OTQzNDgvMTA4MTM5NlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRGcm9tSFRNTChodG1sU3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sU3RyaW5nLnRyaW0oKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlIHRoaXMgdG8gZGl2LmNoaWxkTm9kZXMgdG8gc3VwcG9ydCBtdWx0aXBsZSB0b3AtbGV2ZWwgbm9kZXNcclxuICAgICAgICByZXR1cm4gZGl2LmZpcnN0Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJlbW92ZXMgdGhlIHBhc3NlZCBpdGVtL3MgZnJvbSB0aGUgRE9NLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZShpdGVtcyl7XHJcbiAgICAgICAgaXRlbXMgPSBnZXRMaXN0KGl0ZW1zKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGl0ZW1zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcclxuICAgICAgICAgICAgaWYoaXRlbSAmJiBpdGVtLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogRmlsdGVycyBhbiBhcnJheSBieSB0aGUgcGFzc2VkIGZpbHRlciBmdW50aW9uLlxyXG4gICAgKi9cclxuICAgIGZ1bmN0aW9uIGZpbHRlcihlbCwgZmlsdGVyRm4pe1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbCwgZmlsdGVyRm4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvdzFya3RlY3ovXHJcbiAgICBmdW5jdGlvbiB1bnRpbEFsbChpdGVtLCBzZWxlY3RvciwgZm4pe1xyXG4gICAgICAgIHZhciBzaWJsaW5nID0gaXRlbVtmbl07XHJcbiAgICAgICAgdmFyIHNpYmxpbmdzID0gW107XHJcbiAgICAgICAgd2hpbGUoc2libGluZyl7XHJcbiAgICAgICAgICAgIGlmKG1hdGNoZXMoc2libGluZywgc2VsZWN0b3IpIHx8IHNlbGVjdG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNpYmxpbmdzLnB1c2goc2libGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2libGluZyA9IHNpYmxpbmdbZm5dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNpYmxpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBHZXRzIGFsbCBuZXh0IGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBwYXNzZWQgc2VsZWN0b3IuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gbmV4dEFsbChpdGVtLCBzZWxlY3Rvcil7XHJcbiAgICAgICAgcmV0dXJuIHVudGlsQWxsKGl0ZW0sIHNlbGVjdG9yLCAnbmV4dEVsZW1lbnRTaWJsaW5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldHMgYWxsIHByZXZpb3VzIGVsZW1lbnRzIG1hdGNoaW5nIHRoZSBwYXNzZWQgc2VsZWN0b3IuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gcHJldkFsbChpdGVtLCBzZWxlY3Rvcil7XHJcbiAgICAgICAgcmV0dXJuIHVudGlsQWxsKGl0ZW0sIHNlbGVjdG9yLCAncHJldmlvdXNFbGVtZW50U2libGluZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDb252ZXJ0cyBhbiBvYmplY3QgdG8gYW4gYXJyYXkuXHJcbiAgICAqL1xyXG4gICAgZnVuY3Rpb24gdG9BcnJheShvYmplY3REYXRhKXtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0RGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgIHJldHVybiBvYmplY3REYXRhW2tleV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIGZvckVhY2ggcG9seWZpbGwgZm9yIElFXHJcbiAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Ob2RlTGlzdC9mb3JFYWNoI0Jyb3dzZXJfQ29tcGF0aWJpbGl0eVxyXG4gICAgKi9cclxuICAgIGlmICh3aW5kb3cuTm9kZUxpc3QgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XHJcbiAgICAgICAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcclxuICAgICAgICAgICAgdGhpc0FyZyA9IHRoaXNBcmcgfHwgd2luZG93O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpc1tpXSwgaSwgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vdXRpbHMgYXJlIHB1YmxpYywgc28gd2UgY2FuIHVzZSBpdCB3aGVyZXZlciB3ZSB3YW50XHJcbiAgICB3aW5kb3cuZnBfdXRpbHMgPSB7XHJcbiAgICAgICAgJDogJCxcclxuICAgICAgICBkZWVwRXh0ZW5kOiBkZWVwRXh0ZW5kLFxyXG4gICAgICAgIGhhc0NsYXNzOiBoYXNDbGFzcyxcclxuICAgICAgICBnZXRXaW5kb3dIZWlnaHQ6IGdldFdpbmRvd0hlaWdodCxcclxuICAgICAgICBjc3M6IGNzcyxcclxuICAgICAgICB1bnRpbDogdW50aWwsXHJcbiAgICAgICAgcHJldlVudGlsOiBwcmV2VW50aWwsXHJcbiAgICAgICAgbmV4dFVudGlsOiBuZXh0VW50aWwsXHJcbiAgICAgICAgcHJldjogcHJldixcclxuICAgICAgICBuZXh0OiBuZXh0LFxyXG4gICAgICAgIGxhc3Q6IGxhc3QsXHJcbiAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgIGdldExpc3Q6IGdldExpc3QsXHJcbiAgICAgICAgaGlkZTogaGlkZSxcclxuICAgICAgICBzaG93OiBzaG93LFxyXG4gICAgICAgIGlzQXJyYXlPckxpc3Q6IGlzQXJyYXlPckxpc3QsXHJcbiAgICAgICAgYWRkQ2xhc3M6IGFkZENsYXNzLFxyXG4gICAgICAgIHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcclxuICAgICAgICBhcHBlbmRUbzogYXBwZW5kVG8sXHJcbiAgICAgICAgd3JhcDogd3JhcCxcclxuICAgICAgICB3cmFwQWxsOiB3cmFwQWxsLFxyXG4gICAgICAgIHdyYXBJbm5lcjogd3JhcElubmVyLFxyXG4gICAgICAgIHVud3JhcDogdW53cmFwLFxyXG4gICAgICAgIGNsb3Nlc3Q6IGNsb3Nlc3QsXHJcbiAgICAgICAgYWZ0ZXI6IGFmdGVyLFxyXG4gICAgICAgIGJlZm9yZTogYmVmb3JlLFxyXG4gICAgICAgIGluc2VydEJlZm9yZTogaW5zZXJ0QmVmb3JlLFxyXG4gICAgICAgIGdldFNjcm9sbFRvcDogZ2V0U2Nyb2xsVG9wLFxyXG4gICAgICAgIHNpYmxpbmdzOiBzaWJsaW5ncyxcclxuICAgICAgICBwcmV2ZW50RGVmYXVsdDogcHJldmVudERlZmF1bHQsXHJcbiAgICAgICAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcclxuICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VyLFxyXG4gICAgICAgIG1hdGNoZXM6IG1hdGNoZXMsXHJcbiAgICAgICAgdG9nZ2xlOiB0b2dnbGUsXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudEZyb21IVE1MOiBjcmVhdGVFbGVtZW50RnJvbUhUTUwsXHJcbiAgICAgICAgcmVtb3ZlOiByZW1vdmUsXHJcbiAgICAgICAgZmlsdGVyOiBmaWx0ZXIsXHJcbiAgICAgICAgdW50aWxBbGw6IHVudGlsQWxsLFxyXG4gICAgICAgIG5leHRBbGw6IG5leHRBbGwsXHJcbiAgICAgICAgcHJldkFsbDogcHJldkFsbCxcclxuICAgICAgICBzaG93RXJyb3I6IHNob3dFcnJvclxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gaW5pdGlhbGlzZTtcclxufSkpO1xyXG5cclxuLyoqXHJcbiAqIGpRdWVyeSBhZGFwdGVyIGZvciBmdWxsUGFnZS5qcyAzLjAuMFxyXG4gKi9cclxuaWYod2luZG93LmpRdWVyeSAmJiB3aW5kb3cuZnVsbHBhZ2Upe1xyXG4gICAgKGZ1bmN0aW9uICgkLCBmdWxscGFnZSkge1xyXG4gICAgICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAgICAgLy8gTm8galF1ZXJ5IE5vIEdvXHJcbiAgICAgICAgaWYgKCEkIHx8ICFmdWxscGFnZSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuZnBfdXRpbHMuc2hvd0Vycm9yKCdlcnJvcicsICdqUXVlcnkgaXMgcmVxdWlyZWQgdG8gdXNlIHRoZSBqUXVlcnkgZnVsbHBhZ2UgYWRhcHRlciEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJC5mbi5mdWxscGFnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBvcHRpb25zLCB7JyQnOiAkfSk7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBmdWxscGFnZSh0aGlzWzBdLCBvcHRpb25zKTtcclxuICAgICAgICB9O1xyXG4gICAgfSkod2luZG93LmpRdWVyeSwgd2luZG93LmZ1bGxwYWdlKTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKiFcbiAqIFxuICogICB0eXBlZC5qcyAtIEEgSmF2YVNjcmlwdCBUeXBpbmcgQW5pbWF0aW9uIExpYnJhcnlcbiAqICAgQXV0aG9yOiBNYXR0IEJvbGR0IDxtZUBtYXR0Ym9sZHQuY29tPlxuICogICBWZXJzaW9uOiB2Mi4wLjExXG4gKiAgIFVybDogaHR0cHM6Ly9naXRodWIuY29tL21hdHRib2xkdC90eXBlZC5qc1xuICogICBMaWNlbnNlKHMpOiBNSVRcbiAqIFxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUeXBlZFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUeXBlZFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBfaW5pdGlhbGl6ZXJKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX2h0bWxQYXJzZXJKcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdFxuXHQvKipcblx0ICogV2VsY29tZSB0byBUeXBlZC5qcyFcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBIVE1MIGVsZW1lbnQgSUQgX09SXyBIVE1MIGVsZW1lbnRcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgb3B0aW9ucyBvYmplY3Rcblx0ICogQHJldHVybnMge29iamVjdH0gYSBuZXcgVHlwZWQgb2JqZWN0XG5cdCAqL1xuXHRcblx0dmFyIFR5cGVkID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBUeXBlZChlbGVtZW50SWQsIG9wdGlvbnMpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUeXBlZCk7XG5cdFxuXHQgICAgLy8gSW5pdGlhbGl6ZSBpdCB1cFxuXHQgICAgX2luaXRpYWxpemVySnMuaW5pdGlhbGl6ZXIubG9hZCh0aGlzLCBvcHRpb25zLCBlbGVtZW50SWQpO1xuXHQgICAgLy8gQWxsIHN5c3RlbXMgZ28hXG5cdCAgICB0aGlzLmJlZ2luKCk7XG5cdCAgfVxuXHRcblx0ICAvKipcblx0ICAgKiBUb2dnbGUgc3RhcnQoKSBhbmQgc3RvcCgpIG9mIHRoZSBUeXBlZCBpbnN0YW5jZVxuXHQgICAqIEBwdWJsaWNcblx0ICAgKi9cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKFR5cGVkLCBbe1xuXHQgICAga2V5OiAndG9nZ2xlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID8gdGhpcy5zdGFydCgpIDogdGhpcy5zdG9wKCk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTdG9wIHR5cGluZyAvIGJhY2tzcGFjaW5nIGFuZCBlbmFibGUgY3Vyc29yIGJsaW5raW5nXG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzdG9wJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuXHQgICAgICBpZiAodGhpcy50eXBpbmdDb21wbGV0ZSkgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5wYXVzZS5zdGF0dXMpIHJldHVybjtcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgdGhpcy5wYXVzZS5zdGF0dXMgPSB0cnVlO1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdG9wKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3RhcnQgdHlwaW5nIC8gYmFja3NwYWNpbmcgYWZ0ZXIgYmVpbmcgc3RvcHBlZFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc3RhcnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuXHQgICAgICBpZiAodGhpcy50eXBpbmdDb21wbGV0ZSkgcmV0dXJuO1xuXHQgICAgICBpZiAoIXRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID0gZmFsc2U7XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnR5cGV3cml0ZSkge1xuXHQgICAgICAgIHRoaXMudHlwZXdyaXRlKHRoaXMucGF1c2UuY3VyU3RyaW5nLCB0aGlzLnBhdXNlLmN1clN0clBvcyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5iYWNrc3BhY2UodGhpcy5wYXVzZS5jdXJTdHJpbmcsIHRoaXMucGF1c2UuY3VyU3RyUG9zKTtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdGFydCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIERlc3Ryb3kgdGhpcyBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnZGVzdHJveScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0ICAgICAgdGhpcy5yZXNldChmYWxzZSk7XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vbkRlc3Ryb3kodGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBSZXNldCBUeXBlZCBhbmQgb3B0aW9uYWxseSByZXN0YXJ0c1xuXHQgICAgICogQHBhcmFtIHtib29sZWFufSByZXN0YXJ0XG5cdCAgICAgKiBAcHVibGljXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZXNldCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG5cdCAgICAgIHZhciByZXN0YXJ0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1swXTtcblx0XG5cdCAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0KTtcblx0ICAgICAgdGhpcy5yZXBsYWNlVGV4dCgnJyk7XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvciAmJiB0aGlzLmN1cnNvci5wYXJlbnROb2RlKSB7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmN1cnNvcik7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IgPSBudWxsO1xuXHQgICAgICB9XG5cdCAgICAgIHRoaXMuc3RyUG9zID0gMDtcblx0ICAgICAgdGhpcy5hcnJheVBvcyA9IDA7XG5cdCAgICAgIHRoaXMuY3VyTG9vcCA9IDA7XG5cdCAgICAgIGlmIChyZXN0YXJ0KSB7XG5cdCAgICAgICAgdGhpcy5pbnNlcnRDdXJzb3IoKTtcblx0ICAgICAgICB0aGlzLm9wdGlvbnMub25SZXNldCh0aGlzKTtcblx0ICAgICAgICB0aGlzLmJlZ2luKCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEJlZ2lucyB0aGUgdHlwaW5nIGFuaW1hdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JlZ2luJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiZWdpbigpIHtcblx0ICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0XG5cdCAgICAgIHRoaXMub3B0aW9ucy5vbkJlZ2luKHRoaXMpO1xuXHQgICAgICB0aGlzLnR5cGluZ0NvbXBsZXRlID0gZmFsc2U7XG5cdCAgICAgIHRoaXMuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCh0aGlzKTtcblx0ICAgICAgdGhpcy5pbnNlcnRDdXJzb3IoKTtcblx0ICAgICAgaWYgKHRoaXMuYmluZElucHV0Rm9jdXNFdmVudHMpIHRoaXMuYmluZEZvY3VzRXZlbnRzKCk7XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIHNvbWUgdGV4dCBpbiB0aGUgZWxlbWVudCwgaWYgeWVzIHN0YXJ0IGJ5IGJhY2tzcGFjaW5nIHRoZSBkZWZhdWx0IG1lc3NhZ2Vcblx0ICAgICAgICBpZiAoIV90aGlzLmN1cnJlbnRFbENvbnRlbnQgfHwgX3RoaXMuY3VycmVudEVsQ29udGVudC5sZW5ndGggPT09IDApIHtcblx0ICAgICAgICAgIF90aGlzLnR5cGV3cml0ZShfdGhpcy5zdHJpbmdzW190aGlzLnNlcXVlbmNlW190aGlzLmFycmF5UG9zXV0sIF90aGlzLnN0clBvcyk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8vIFN0YXJ0IHR5cGluZ1xuXHQgICAgICAgICAgX3RoaXMuYmFja3NwYWNlKF90aGlzLmN1cnJlbnRFbENvbnRlbnQsIF90aGlzLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoKTtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHRoaXMuc3RhcnREZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBDYWxsZWQgZm9yIGVhY2ggY2hhcmFjdGVyIHR5cGVkXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAndHlwZXdyaXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiB0eXBld3JpdGUoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAodGhpcy5mYWRlT3V0ICYmIHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZmFkZU91dENsYXNzKSkge1xuXHQgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcyk7XG5cdCAgICAgICAgaWYgKHRoaXMuY3Vyc29yKSB0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKTtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgdmFyIGh1bWFuaXplID0gdGhpcy5odW1hbml6ZXIodGhpcy50eXBlU3BlZWQpO1xuXHQgICAgICB2YXIgbnVtQ2hhcnMgPSAxO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzID09PSB0cnVlKSB7XG5cdCAgICAgICAgdGhpcy5zZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgdHJ1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBjb250YWluIHR5cGluZyBmdW5jdGlvbiBpbiBhIHRpbWVvdXQgaHVtYW5pemUnZCBkZWxheVxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBza2lwIG92ZXIgYW55IEhUTUwgY2hhcnNcblx0ICAgICAgICBjdXJTdHJQb3MgPSBfaHRtbFBhcnNlckpzLmh0bWxQYXJzZXIudHlwZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgX3RoaXMyKTtcblx0XG5cdCAgICAgICAgdmFyIHBhdXNlVGltZSA9IDA7XG5cdCAgICAgICAgdmFyIHN1YnN0ciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKTtcblx0ICAgICAgICAvLyBjaGVjayBmb3IgYW4gZXNjYXBlIGNoYXJhY3RlciBiZWZvcmUgYSBwYXVzZSB2YWx1ZVxuXHQgICAgICAgIC8vIGZvcm1hdDogXFxeXFxkKyAuLiBlZzogXjEwMDAgLi4gc2hvdWxkIGJlIGFibGUgdG8gcHJpbnQgdGhlIF4gdG9vIHVzaW5nIF5eXG5cdCAgICAgICAgLy8gc2luZ2xlIF4gYXJlIHJlbW92ZWQgZnJvbSBzdHJpbmdcblx0ICAgICAgICBpZiAoc3Vic3RyLmNoYXJBdCgwKSA9PT0gJ14nKSB7XG5cdCAgICAgICAgICBpZiAoL15cXF5cXGQrLy50ZXN0KHN1YnN0cikpIHtcblx0ICAgICAgICAgICAgdmFyIHNraXAgPSAxOyAvLyBza2lwIGF0IGxlYXN0IDFcblx0ICAgICAgICAgICAgc3Vic3RyID0gL1xcZCsvLmV4ZWMoc3Vic3RyKVswXTtcblx0ICAgICAgICAgICAgc2tpcCArPSBzdWJzdHIubGVuZ3RoO1xuXHQgICAgICAgICAgICBwYXVzZVRpbWUgPSBwYXJzZUludChzdWJzdHIpO1xuXHQgICAgICAgICAgICBfdGhpczIudGVtcG9yYXJ5UGF1c2UgPSB0cnVlO1xuXHQgICAgICAgICAgICBfdGhpczIub3B0aW9ucy5vblR5cGluZ1BhdXNlZChfdGhpczIuYXJyYXlQb3MsIF90aGlzMik7XG5cdCAgICAgICAgICAgIC8vIHN0cmlwIG91dCB0aGUgZXNjYXBlIGNoYXJhY3RlciBhbmQgcGF1c2UgdmFsdWUgc28gdGhleSdyZSBub3QgcHJpbnRlZFxuXHQgICAgICAgICAgICBjdXJTdHJpbmcgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKDAsIGN1clN0clBvcykgKyBjdXJTdHJpbmcuc3Vic3RyaW5nKGN1clN0clBvcyArIHNraXApO1xuXHQgICAgICAgICAgICBfdGhpczIudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBjaGVjayBmb3Igc2tpcCBjaGFyYWN0ZXJzIGZvcm1hdHRlZCBhc1xuXHQgICAgICAgIC8vIFwidGhpcyBpcyBhIGBzdHJpbmcgdG8gcHJpbnQgTk9XYCAuLi5cIlxuXHQgICAgICAgIGlmIChzdWJzdHIuY2hhckF0KDApID09PSAnYCcpIHtcblx0ICAgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyArIG51bUNoYXJzKS5jaGFyQXQoMCkgIT09ICdgJykge1xuXHQgICAgICAgICAgICBudW1DaGFycysrO1xuXHQgICAgICAgICAgICBpZiAoY3VyU3RyUG9zICsgbnVtQ2hhcnMgPiBjdXJTdHJpbmcubGVuZ3RoKSBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIC8vIHN0cmlwIG91dCB0aGUgZXNjYXBlIGNoYXJhY3RlcnMgYW5kIGFwcGVuZCBhbGwgdGhlIHN0cmluZyBpbiBiZXR3ZWVuXG5cdCAgICAgICAgICB2YXIgc3RyaW5nQmVmb3JlU2tpcCA9IGN1clN0cmluZy5zdWJzdHJpbmcoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgICAgIHZhciBzdHJpbmdTa2lwcGVkID0gY3VyU3RyaW5nLnN1YnN0cmluZyhzdHJpbmdCZWZvcmVTa2lwLmxlbmd0aCArIDEsIGN1clN0clBvcyArIG51bUNoYXJzKTtcblx0ICAgICAgICAgIHZhciBzdHJpbmdBZnRlclNraXAgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKGN1clN0clBvcyArIG51bUNoYXJzICsgMSk7XG5cdCAgICAgICAgICBjdXJTdHJpbmcgPSBzdHJpbmdCZWZvcmVTa2lwICsgc3RyaW5nU2tpcHBlZCArIHN0cmluZ0FmdGVyU2tpcDtcblx0ICAgICAgICAgIG51bUNoYXJzLS07XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyB0aW1lb3V0IGZvciBhbnkgcGF1c2UgYWZ0ZXIgYSBjaGFyYWN0ZXJcblx0ICAgICAgICBfdGhpczIudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgLy8gQWNjb3VudHMgZm9yIGJsaW5raW5nIHdoaWxlIHBhdXNlZFxuXHQgICAgICAgICAgX3RoaXMyLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0XG5cdCAgICAgICAgICAvLyBXZSdyZSBkb25lIHdpdGggdGhpcyBzZW50ZW5jZSFcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgPj0gY3VyU3RyaW5nLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBfdGhpczIuZG9uZVR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczIua2VlcFR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcywgbnVtQ2hhcnMpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgICAgLy8gZW5kIG9mIGNoYXJhY3RlciBwYXVzZVxuXHQgICAgICAgICAgaWYgKF90aGlzMi50ZW1wb3JhcnlQYXVzZSkge1xuXHQgICAgICAgICAgICBfdGhpczIudGVtcG9yYXJ5UGF1c2UgPSBmYWxzZTtcblx0ICAgICAgICAgICAgX3RoaXMyLm9wdGlvbnMub25UeXBpbmdSZXN1bWVkKF90aGlzMi5hcnJheVBvcywgX3RoaXMyKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9LCBwYXVzZVRpbWUpO1xuXHRcblx0ICAgICAgICAvLyBodW1hbml6ZWQgdmFsdWUgZm9yIHR5cGluZ1xuXHQgICAgICB9LCBodW1hbml6ZSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBDb250aW51ZSB0byB0aGUgbmV4dCBzdHJpbmcgJiBiZWdpbiB0eXBpbmdcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdrZWVwVHlwaW5nJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBrZWVwVHlwaW5nKGN1clN0cmluZywgY3VyU3RyUG9zLCBudW1DaGFycykge1xuXHQgICAgICAvLyBjYWxsIGJlZm9yZSBmdW5jdGlvbnMgaWYgYXBwbGljYWJsZVxuXHQgICAgICBpZiAoY3VyU3RyUG9zID09PSAwKSB7XG5cdCAgICAgICAgdGhpcy50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zLnByZVN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgICB9XG5cdCAgICAgIC8vIHN0YXJ0IHR5cGluZyBlYWNoIG5ldyBjaGFyIGludG8gZXhpc3Rpbmcgc3RyaW5nXG5cdCAgICAgIC8vIGN1clN0cmluZzogYXJnLCB0aGlzLmVsLmh0bWw6IG9yaWdpbmFsIHRleHQgaW5zaWRlIGVsZW1lbnRcblx0ICAgICAgY3VyU3RyUG9zICs9IG51bUNoYXJzO1xuXHQgICAgICB2YXIgbmV4dFN0cmluZyA9IGN1clN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgdGhpcy5yZXBsYWNlVGV4dChuZXh0U3RyaW5nKTtcblx0ICAgICAgLy8gbG9vcCB0aGUgZnVuY3Rpb25cblx0ICAgICAgdGhpcy50eXBld3JpdGUoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogV2UncmUgZG9uZSB0eXBpbmcgdGhlIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnZG9uZVR5cGluZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZG9uZVR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblx0XG5cdCAgICAgIC8vIGZpcmVzIGNhbGxiYWNrIGZ1bmN0aW9uXG5cdCAgICAgIHRoaXMub3B0aW9ucy5vblN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsIHRoaXMpO1xuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICAvLyBpcyB0aGlzIHRoZSBmaW5hbCBzdHJpbmdcblx0ICAgICAgaWYgKHRoaXMuYXJyYXlQb3MgPT09IHRoaXMuc3RyaW5ncy5sZW5ndGggLSAxKSB7XG5cdCAgICAgICAgLy8gY2FsbGJhY2sgdGhhdCBvY2N1cnMgb24gdGhlIGxhc3QgdHlwZWQgc3RyaW5nXG5cdCAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuXHQgICAgICAgIC8vIHF1aXQgaWYgd2Ugd29udCBsb29wIGJhY2tcblx0ICAgICAgICBpZiAodGhpcy5sb29wID09PSBmYWxzZSB8fCB0aGlzLmN1ckxvb3AgPT09IHRoaXMubG9vcENvdW50KSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIF90aGlzMy5iYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICB9LCB0aGlzLmJhY2tEZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCYWNrc3BhY2VzIDEgY2hhcmFjdGVyIGF0IGEgdGltZVxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JhY2tzcGFjZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzID09PSB0cnVlKSB7XG5cdCAgICAgICAgdGhpcy5zZXRQYXVzZVN0YXR1cyhjdXJTdHJpbmcsIGN1clN0clBvcywgdHJ1ZSk7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICh0aGlzLmZhZGVPdXQpIHJldHVybiB0aGlzLmluaXRGYWRlT3V0KCk7XG5cdFxuXHQgICAgICB0aGlzLnRvZ2dsZUJsaW5raW5nKGZhbHNlKTtcblx0ICAgICAgdmFyIGh1bWFuaXplID0gdGhpcy5odW1hbml6ZXIodGhpcy5iYWNrU3BlZWQpO1xuXHRcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgY3VyU3RyUG9zID0gX2h0bWxQYXJzZXJKcy5odG1sUGFyc2VyLmJhY2tTcGFjZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgX3RoaXM0KTtcblx0ICAgICAgICAvLyByZXBsYWNlIHRleHQgd2l0aCBiYXNlIHRleHQgKyB0eXBlZCBjaGFyYWN0ZXJzXG5cdCAgICAgICAgdmFyIGN1clN0cmluZ0F0UG9zaXRpb24gPSBjdXJTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcyk7XG5cdCAgICAgICAgX3RoaXM0LnJlcGxhY2VUZXh0KGN1clN0cmluZ0F0UG9zaXRpb24pO1xuXHRcblx0ICAgICAgICAvLyBpZiBzbWFydEJhY2sgaXMgZW5hYmxlZFxuXHQgICAgICAgIGlmIChfdGhpczQuc21hcnRCYWNrc3BhY2UpIHtcblx0ICAgICAgICAgIC8vIHRoZSByZW1haW5pbmcgcGFydCBvZiB0aGUgY3VycmVudCBzdHJpbmcgaXMgZXF1YWwgb2YgdGhlIHNhbWUgcGFydCBvZiB0aGUgbmV3IHN0cmluZ1xuXHQgICAgICAgICAgdmFyIG5leHRTdHJpbmcgPSBfdGhpczQuc3RyaW5nc1tfdGhpczQuYXJyYXlQb3MgKyAxXTtcblx0ICAgICAgICAgIGlmIChuZXh0U3RyaW5nICYmIGN1clN0cmluZ0F0UG9zaXRpb24gPT09IG5leHRTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcykpIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnN0b3BOdW0gPSBjdXJTdHJQb3M7XG5cdCAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBfdGhpczQuc3RvcE51bSA9IDA7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIChpZCBvZiBjaGFyYWN0ZXIgaW4gY3VycmVudCBzdHJpbmcpIGlzXG5cdCAgICAgICAgLy8gbGVzcyB0aGFuIHRoZSBzdG9wIG51bWJlciwga2VlcCBnb2luZ1xuXHQgICAgICAgIGlmIChjdXJTdHJQb3MgPiBfdGhpczQuc3RvcE51bSkge1xuXHQgICAgICAgICAgLy8gc3VidHJhY3QgY2hhcmFjdGVycyBvbmUgYnkgb25lXG5cdCAgICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgICAgIC8vIGxvb3AgdGhlIGZ1bmN0aW9uXG5cdCAgICAgICAgICBfdGhpczQuYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgICB9IGVsc2UgaWYgKGN1clN0clBvcyA8PSBfdGhpczQuc3RvcE51bSkge1xuXHQgICAgICAgICAgLy8gaWYgdGhlIHN0b3AgbnVtYmVyIGhhcyBiZWVuIHJlYWNoZWQsIGluY3JlYXNlXG5cdCAgICAgICAgICAvLyBhcnJheSBwb3NpdGlvbiB0byBuZXh0IHN0cmluZ1xuXHQgICAgICAgICAgX3RoaXM0LmFycmF5UG9zKys7XG5cdCAgICAgICAgICAvLyBXaGVuIGxvb3BpbmcsIGJlZ2luIGF0IHRoZSBiZWdpbm5pbmcgYWZ0ZXIgYmFja3NwYWNlIGNvbXBsZXRlXG5cdCAgICAgICAgICBpZiAoX3RoaXM0LmFycmF5UG9zID09PSBfdGhpczQuc3RyaW5ncy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgX3RoaXM0LmFycmF5UG9zID0gMDtcblx0ICAgICAgICAgICAgX3RoaXM0Lm9wdGlvbnMub25MYXN0U3RyaW5nQmFja3NwYWNlZCgpO1xuXHQgICAgICAgICAgICBfdGhpczQuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCgpO1xuXHQgICAgICAgICAgICBfdGhpczQuYmVnaW4oKTtcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzNC50eXBld3JpdGUoX3RoaXM0LnN0cmluZ3NbX3RoaXM0LnNlcXVlbmNlW190aGlzNC5hcnJheVBvc11dLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICAvLyBodW1hbml6ZWQgdmFsdWUgZm9yIHR5cGluZ1xuXHQgICAgICB9LCBodW1hbml6ZSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBGdWxsIGFuaW1hdGlvbiBpcyBjb21wbGV0ZVxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2NvbXBsZXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uQ29tcGxldGUodGhpcyk7XG5cdCAgICAgIGlmICh0aGlzLmxvb3ApIHtcblx0ICAgICAgICB0aGlzLmN1ckxvb3ArKztcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLnR5cGluZ0NvbXBsZXRlID0gdHJ1ZTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogSGFzIHRoZSB0eXBpbmcgYmVlbiBzdG9wcGVkXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVHlwaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc2V0UGF1c2VTdGF0dXMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFBhdXNlU3RhdHVzKGN1clN0cmluZywgY3VyU3RyUG9zLCBpc1R5cGluZykge1xuXHQgICAgICB0aGlzLnBhdXNlLnR5cGV3cml0ZSA9IGlzVHlwaW5nO1xuXHQgICAgICB0aGlzLnBhdXNlLmN1clN0cmluZyA9IGN1clN0cmluZztcblx0ICAgICAgdGhpcy5wYXVzZS5jdXJTdHJQb3MgPSBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBUb2dnbGUgdGhlIGJsaW5raW5nIGN1cnNvclxuXHQgICAgICogQHBhcmFtIHtib29sZWFufSBpc0JsaW5raW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAndG9nZ2xlQmxpbmtpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZUJsaW5raW5nKGlzQmxpbmtpbmcpIHtcblx0ICAgICAgaWYgKCF0aGlzLmN1cnNvcikgcmV0dXJuO1xuXHQgICAgICAvLyBpZiBpbiBwYXVzZWQgc3RhdGUsIGRvbid0IHRvZ2dsZSBibGlua2luZyBhIDJuZCB0aW1lXG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3JCbGlua2luZyA9PT0gaXNCbGlua2luZykgcmV0dXJuO1xuXHQgICAgICB0aGlzLmN1cnNvckJsaW5raW5nID0gaXNCbGlua2luZztcblx0ICAgICAgaWYgKGlzQmxpbmtpbmcpIHtcblx0ICAgICAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKCd0eXBlZC1jdXJzb3ItLWJsaW5rJyk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSgndHlwZWQtY3Vyc29yLS1ibGluaycpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTcGVlZCBpbiBNUyB0byB0eXBlXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdodW1hbml6ZXInLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGh1bWFuaXplcihzcGVlZCkge1xuXHQgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogc3BlZWQgLyAyKSArIHNwZWVkO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU2h1ZmZsZSB0aGUgc2VxdWVuY2Ugb2YgdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzaHVmZmxlU3RyaW5nc0lmTmVlZGVkJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzaHVmZmxlU3RyaW5nc0lmTmVlZGVkKCkge1xuXHQgICAgICBpZiAoIXRoaXMuc2h1ZmZsZSkgcmV0dXJuO1xuXHQgICAgICB0aGlzLnNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZS5zb3J0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAtIDAuNTtcblx0ICAgICAgfSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBBZGRzIGEgQ1NTIGNsYXNzIHRvIGZhZGUgb3V0IGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnaW5pdEZhZGVPdXQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRGYWRlT3V0KCkge1xuXHQgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblx0XG5cdCAgICAgIHRoaXMuZWwuY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuZmFkZU91dENsYXNzO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IpIHRoaXMuY3Vyc29yLmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmZhZGVPdXRDbGFzcztcblx0ICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIF90aGlzNS5hcnJheVBvcysrO1xuXHQgICAgICAgIF90aGlzNS5yZXBsYWNlVGV4dCgnJyk7XG5cdFxuXHQgICAgICAgIC8vIFJlc2V0cyBjdXJyZW50IHN0cmluZyBpZiBlbmQgb2YgbG9vcCByZWFjaGVkXG5cdCAgICAgICAgaWYgKF90aGlzNS5zdHJpbmdzLmxlbmd0aCA+IF90aGlzNS5hcnJheVBvcykge1xuXHQgICAgICAgICAgX3RoaXM1LnR5cGV3cml0ZShfdGhpczUuc3RyaW5nc1tfdGhpczUuc2VxdWVuY2VbX3RoaXM1LmFycmF5UG9zXV0sIDApO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBfdGhpczUudHlwZXdyaXRlKF90aGlzNS5zdHJpbmdzWzBdLCAwKTtcblx0ICAgICAgICAgIF90aGlzNS5hcnJheVBvcyA9IDA7XG5cdCAgICAgICAgfVxuXHQgICAgICB9LCB0aGlzLmZhZGVPdXREZWxheSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBSZXBsYWNlcyBjdXJyZW50IHRleHQgaW4gdGhlIEhUTUwgZWxlbWVudFxuXHQgICAgICogZGVwZW5kaW5nIG9uIGVsZW1lbnQgdHlwZVxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3JlcGxhY2VUZXh0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlVGV4dChzdHIpIHtcblx0ICAgICAgaWYgKHRoaXMuYXR0cikge1xuXHQgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKHRoaXMuYXR0ciwgc3RyKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBpZiAodGhpcy5pc0lucHV0KSB7XG5cdCAgICAgICAgICB0aGlzLmVsLnZhbHVlID0gc3RyO1xuXHQgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50VHlwZSA9PT0gJ2h0bWwnKSB7XG5cdCAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHN0cjtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgdGhpcy5lbC50ZXh0Q29udGVudCA9IHN0cjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIElmIHVzaW5nIGlucHV0IGVsZW1lbnRzLCBiaW5kIGZvY3VzIGluIG9yZGVyIHRvXG5cdCAgICAgKiBzdGFydCBhbmQgc3RvcCB0aGUgYW5pbWF0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnYmluZEZvY3VzRXZlbnRzJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRm9jdXNFdmVudHMoKSB7XG5cdCAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKCF0aGlzLmlzSW5wdXQpIHJldHVybjtcblx0ICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgICAgX3RoaXM2LnN0b3AoKTtcblx0ICAgICAgfSk7XG5cdCAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChlKSB7XG5cdCAgICAgICAgaWYgKF90aGlzNi5lbC52YWx1ZSAmJiBfdGhpczYuZWwudmFsdWUubGVuZ3RoICE9PSAwKSB7XG5cdCAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgfVxuXHQgICAgICAgIF90aGlzNi5zdGFydCgpO1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIE9uIGluaXQsIGluc2VydCB0aGUgY3Vyc29yIGVsZW1lbnRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdpbnNlcnRDdXJzb3InLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGluc2VydEN1cnNvcigpIHtcblx0ICAgICAgaWYgKCF0aGlzLnNob3dDdXJzb3IpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMuY3Vyc29yKSByZXR1cm47XG5cdCAgICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHQgICAgICB0aGlzLmN1cnNvci5jbGFzc05hbWUgPSAndHlwZWQtY3Vyc29yJztcblx0ICAgICAgdGhpcy5jdXJzb3IuaW5uZXJIVE1MID0gdGhpcy5jdXJzb3JDaGFyO1xuXHQgICAgICB0aGlzLmVsLnBhcmVudE5vZGUgJiYgdGhpcy5lbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmN1cnNvciwgdGhpcy5lbC5uZXh0U2libGluZyk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXHRcblx0ICByZXR1cm4gVHlwZWQ7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBUeXBlZDtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgX2RlZmF1bHRzSnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0dmFyIF9kZWZhdWx0c0pzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRzSnMpO1xuXHRcblx0LyoqXG5cdCAqIEluaXRpYWxpemUgdGhlIFR5cGVkIG9iamVjdFxuXHQgKi9cblx0XG5cdHZhciBJbml0aWFsaXplciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gSW5pdGlhbGl6ZXIoKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5pdGlhbGl6ZXIpO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKEluaXRpYWxpemVyLCBbe1xuXHQgICAga2V5OiAnbG9hZCcsXG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBMb2FkIHVwIGRlZmF1bHRzICYgb3B0aW9ucyBvbiB0aGUgVHlwZWQgaW5zdGFuY2Vcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEhUTUwgZWxlbWVudCBJRCBfT1JfIGluc3RhbmNlIG9mIEhUTUwgZWxlbWVudFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHRcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHNlbGYsIG9wdGlvbnMsIGVsZW1lbnRJZCkge1xuXHQgICAgICAvLyBjaG9zZW4gZWxlbWVudCB0byBtYW5pcHVsYXRlIHRleHRcblx0ICAgICAgaWYgKHR5cGVvZiBlbGVtZW50SWQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgc2VsZi5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudElkKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzZWxmLmVsID0gZWxlbWVudElkO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBzZWxmLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgX2RlZmF1bHRzSnMyWydkZWZhdWx0J10sIG9wdGlvbnMpO1xuXHRcblx0ICAgICAgLy8gYXR0cmlidXRlIHRvIHR5cGUgaW50b1xuXHQgICAgICBzZWxmLmlzSW5wdXQgPSBzZWxmLmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jztcblx0ICAgICAgc2VsZi5hdHRyID0gc2VsZi5vcHRpb25zLmF0dHI7XG5cdCAgICAgIHNlbGYuYmluZElucHV0Rm9jdXNFdmVudHMgPSBzZWxmLm9wdGlvbnMuYmluZElucHV0Rm9jdXNFdmVudHM7XG5cdFxuXHQgICAgICAvLyBzaG93IGN1cnNvclxuXHQgICAgICBzZWxmLnNob3dDdXJzb3IgPSBzZWxmLmlzSW5wdXQgPyBmYWxzZSA6IHNlbGYub3B0aW9ucy5zaG93Q3Vyc29yO1xuXHRcblx0ICAgICAgLy8gY3VzdG9tIGN1cnNvclxuXHQgICAgICBzZWxmLmN1cnNvckNoYXIgPSBzZWxmLm9wdGlvbnMuY3Vyc29yQ2hhcjtcblx0XG5cdCAgICAgIC8vIElzIHRoZSBjdXJzb3IgYmxpbmtpbmdcblx0ICAgICAgc2VsZi5jdXJzb3JCbGlua2luZyA9IHRydWU7XG5cdFxuXHQgICAgICAvLyB0ZXh0IGNvbnRlbnQgb2YgZWxlbWVudFxuXHQgICAgICBzZWxmLmVsQ29udGVudCA9IHNlbGYuYXR0ciA/IHNlbGYuZWwuZ2V0QXR0cmlidXRlKHNlbGYuYXR0cikgOiBzZWxmLmVsLnRleHRDb250ZW50O1xuXHRcblx0ICAgICAgLy8gaHRtbCBvciBwbGFpbiB0ZXh0XG5cdCAgICAgIHNlbGYuY29udGVudFR5cGUgPSBzZWxmLm9wdGlvbnMuY29udGVudFR5cGU7XG5cdFxuXHQgICAgICAvLyB0eXBpbmcgc3BlZWRcblx0ICAgICAgc2VsZi50eXBlU3BlZWQgPSBzZWxmLm9wdGlvbnMudHlwZVNwZWVkO1xuXHRcblx0ICAgICAgLy8gYWRkIGEgZGVsYXkgYmVmb3JlIHR5cGluZyBzdGFydHNcblx0ICAgICAgc2VsZi5zdGFydERlbGF5ID0gc2VsZi5vcHRpb25zLnN0YXJ0RGVsYXk7XG5cdFxuXHQgICAgICAvLyBiYWNrc3BhY2luZyBzcGVlZFxuXHQgICAgICBzZWxmLmJhY2tTcGVlZCA9IHNlbGYub3B0aW9ucy5iYWNrU3BlZWQ7XG5cdFxuXHQgICAgICAvLyBvbmx5IGJhY2tzcGFjZSB3aGF0IGRvZXNuJ3QgbWF0Y2ggdGhlIHByZXZpb3VzIHN0cmluZ1xuXHQgICAgICBzZWxmLnNtYXJ0QmFja3NwYWNlID0gc2VsZi5vcHRpb25zLnNtYXJ0QmFja3NwYWNlO1xuXHRcblx0ICAgICAgLy8gYW1vdW50IG9mIHRpbWUgdG8gd2FpdCBiZWZvcmUgYmFja3NwYWNpbmdcblx0ICAgICAgc2VsZi5iYWNrRGVsYXkgPSBzZWxmLm9wdGlvbnMuYmFja0RlbGF5O1xuXHRcblx0ICAgICAgLy8gRmFkZSBvdXQgaW5zdGVhZCBvZiBiYWNrc3BhY2Vcblx0ICAgICAgc2VsZi5mYWRlT3V0ID0gc2VsZi5vcHRpb25zLmZhZGVPdXQ7XG5cdCAgICAgIHNlbGYuZmFkZU91dENsYXNzID0gc2VsZi5vcHRpb25zLmZhZGVPdXRDbGFzcztcblx0ICAgICAgc2VsZi5mYWRlT3V0RGVsYXkgPSBzZWxmLm9wdGlvbnMuZmFkZU91dERlbGF5O1xuXHRcblx0ICAgICAgLy8gdmFyaWFibGUgdG8gY2hlY2sgd2hldGhlciB0eXBpbmcgaXMgY3VycmVudGx5IHBhdXNlZFxuXHQgICAgICBzZWxmLmlzUGF1c2VkID0gZmFsc2U7XG5cdFxuXHQgICAgICAvLyBpbnB1dCBzdHJpbmdzIG9mIHRleHRcblx0ICAgICAgc2VsZi5zdHJpbmdzID0gc2VsZi5vcHRpb25zLnN0cmluZ3MubWFwKGZ1bmN0aW9uIChzKSB7XG5cdCAgICAgICAgcmV0dXJuIHMudHJpbSgpO1xuXHQgICAgICB9KTtcblx0XG5cdCAgICAgIC8vIGRpdiBjb250YWluaW5nIHN0cmluZ3Ncblx0ICAgICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50KTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50ID0gc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50O1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAoc2VsZi5zdHJpbmdzRWxlbWVudCkge1xuXHQgICAgICAgIHNlbGYuc3RyaW5ncyA9IFtdO1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0ICAgICAgICB2YXIgc3RyaW5ncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShzZWxmLnN0cmluZ3NFbGVtZW50LmNoaWxkcmVuKTtcblx0ICAgICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xuXHRcblx0ICAgICAgICBpZiAoc3RyaW5nc0xlbmd0aCkge1xuXHQgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmdzTGVuZ3RoOyBpICs9IDEpIHtcblx0ICAgICAgICAgICAgdmFyIHN0cmluZ0VsID0gc3RyaW5nc1tpXTtcblx0ICAgICAgICAgICAgc2VsZi5zdHJpbmdzLnB1c2goc3RyaW5nRWwuaW5uZXJIVE1MLnRyaW0oKSk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBjaGFyYWN0ZXIgbnVtYmVyIHBvc2l0aW9uIG9mIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgIHNlbGYuc3RyUG9zID0gMDtcblx0XG5cdCAgICAgIC8vIGN1cnJlbnQgYXJyYXkgcG9zaXRpb25cblx0ICAgICAgc2VsZi5hcnJheVBvcyA9IDA7XG5cdFxuXHQgICAgICAvLyBpbmRleCBvZiBzdHJpbmcgdG8gc3RvcCBiYWNrc3BhY2luZyBvblxuXHQgICAgICBzZWxmLnN0b3BOdW0gPSAwO1xuXHRcblx0ICAgICAgLy8gTG9vcGluZyBsb2dpY1xuXHQgICAgICBzZWxmLmxvb3AgPSBzZWxmLm9wdGlvbnMubG9vcDtcblx0ICAgICAgc2VsZi5sb29wQ291bnQgPSBzZWxmLm9wdGlvbnMubG9vcENvdW50O1xuXHQgICAgICBzZWxmLmN1ckxvb3AgPSAwO1xuXHRcblx0ICAgICAgLy8gc2h1ZmZsZSB0aGUgc3RyaW5nc1xuXHQgICAgICBzZWxmLnNodWZmbGUgPSBzZWxmLm9wdGlvbnMuc2h1ZmZsZTtcblx0ICAgICAgLy8gdGhlIG9yZGVyIG9mIHN0cmluZ3Ncblx0ICAgICAgc2VsZi5zZXF1ZW5jZSA9IFtdO1xuXHRcblx0ICAgICAgc2VsZi5wYXVzZSA9IHtcblx0ICAgICAgICBzdGF0dXM6IGZhbHNlLFxuXHQgICAgICAgIHR5cGV3cml0ZTogdHJ1ZSxcblx0ICAgICAgICBjdXJTdHJpbmc6ICcnLFxuXHQgICAgICAgIGN1clN0clBvczogMFxuXHQgICAgICB9O1xuXHRcblx0ICAgICAgLy8gV2hlbiB0aGUgdHlwaW5nIGlzIGNvbXBsZXRlICh3aGVuIG5vdCBsb29wZWQpXG5cdCAgICAgIHNlbGYudHlwaW5nQ29tcGxldGUgPSBmYWxzZTtcblx0XG5cdCAgICAgIC8vIFNldCB0aGUgb3JkZXIgaW4gd2hpY2ggdGhlIHN0cmluZ3MgYXJlIHR5cGVkXG5cdCAgICAgIGZvciAodmFyIGkgaW4gc2VsZi5zdHJpbmdzKSB7XG5cdCAgICAgICAgc2VsZi5zZXF1ZW5jZVtpXSA9IGk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIC8vIElmIHRoZXJlIGlzIHNvbWUgdGV4dCBpbiB0aGUgZWxlbWVudFxuXHQgICAgICBzZWxmLmN1cnJlbnRFbENvbnRlbnQgPSB0aGlzLmdldEN1cnJlbnRFbENvbnRlbnQoc2VsZik7XG5cdFxuXHQgICAgICBzZWxmLmF1dG9JbnNlcnRDc3MgPSBzZWxmLm9wdGlvbnMuYXV0b0luc2VydENzcztcblx0XG5cdCAgICAgIHRoaXMuYXBwZW5kQW5pbWF0aW9uQ3NzKHNlbGYpO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2dldEN1cnJlbnRFbENvbnRlbnQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRFbENvbnRlbnQoc2VsZikge1xuXHQgICAgICB2YXIgZWxDb250ZW50ID0gJyc7XG5cdCAgICAgIGlmIChzZWxmLmF0dHIpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLmdldEF0dHJpYnV0ZShzZWxmLmF0dHIpO1xuXHQgICAgICB9IGVsc2UgaWYgKHNlbGYuaXNJbnB1dCkge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwudmFsdWU7XG5cdCAgICAgIH0gZWxzZSBpZiAoc2VsZi5jb250ZW50VHlwZSA9PT0gJ2h0bWwnKSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC5pbm5lckhUTUw7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC50ZXh0Q29udGVudDtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gZWxDb250ZW50O1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2FwcGVuZEFuaW1hdGlvbkNzcycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kQW5pbWF0aW9uQ3NzKHNlbGYpIHtcblx0ICAgICAgdmFyIGNzc0RhdGFOYW1lID0gJ2RhdGEtdHlwZWQtanMtY3NzJztcblx0ICAgICAgaWYgKCFzZWxmLmF1dG9JbnNlcnRDc3MpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKCFzZWxmLnNob3dDdXJzb3IgJiYgIXNlbGYuZmFkZU91dCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignWycgKyBjc3NEYXRhTmFtZSArICddJykpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHQgICAgICBjc3MudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdCAgICAgIGNzcy5zZXRBdHRyaWJ1dGUoY3NzRGF0YU5hbWUsIHRydWUpO1xuXHRcblx0ICAgICAgdmFyIGlubmVyQ3NzID0gJyc7XG5cdCAgICAgIGlmIChzZWxmLnNob3dDdXJzb3IpIHtcblx0ICAgICAgICBpbm5lckNzcyArPSAnXFxuICAgICAgICAudHlwZWQtY3Vyc29ye1xcbiAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnR5cGVkLWN1cnNvci50eXBlZC1jdXJzb3ItLWJsaW5re1xcbiAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBrZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgIH1cXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgIH1cXG4gICAgICAnO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChzZWxmLmZhZGVPdXQpIHtcblx0ICAgICAgICBpbm5lckNzcyArPSAnXFxuICAgICAgICAudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcXG4gICAgICAgIH1cXG4gICAgICAgIC50eXBlZC1jdXJzb3IudHlwZWQtY3Vyc29yLS1ibGluay50eXBlZC1mYWRlLW91dHtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDA7XFxuICAgICAgICAgIGFuaW1hdGlvbjogMDtcXG4gICAgICAgIH1cXG4gICAgICAnO1xuXHQgICAgICB9XG5cdCAgICAgIGlmIChjc3MubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGNzcy5pbm5lckhUTUwgPSBpbm5lckNzcztcblx0ICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjc3MpO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIEluaXRpYWxpemVyO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gSW5pdGlhbGl6ZXI7XG5cdHZhciBpbml0aWFsaXplciA9IG5ldyBJbml0aWFsaXplcigpO1xuXHRleHBvcnRzLmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0cyAmIG9wdGlvbnNcblx0ICogQHJldHVybnMge29iamVjdH0gVHlwZWQgZGVmYXVsdHMgJiBvcHRpb25zXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2FycmF5fSBzdHJpbmdzIHN0cmluZ3MgdG8gYmUgdHlwZWRcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gc3RyaW5nc0VsZW1lbnQgSUQgb2YgZWxlbWVudCBjb250YWluaW5nIHN0cmluZyBjaGlsZHJlblxuXHQgICAqL1xuXHQgIHN0cmluZ3M6IFsnVGhlc2UgYXJlIHRoZSBkZWZhdWx0IHZhbHVlcy4uLicsICdZb3Uga25vdyB3aGF0IHlvdSBzaG91bGQgZG8/JywgJ1VzZSB5b3VyIG93biEnLCAnSGF2ZSBhIGdyZWF0IGRheSEnXSxcblx0ICBzdHJpbmdzRWxlbWVudDogbnVsbCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IHR5cGVTcGVlZCB0eXBlIHNwZWVkIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIHR5cGVTcGVlZDogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0RGVsYXkgdGltZSBiZWZvcmUgdHlwaW5nIHN0YXJ0cyBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBzdGFydERlbGF5OiAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gYmFja1NwZWVkIGJhY2tzcGFjaW5nIHNwZWVkIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGJhY2tTcGVlZDogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzbWFydEJhY2tzcGFjZSBvbmx5IGJhY2tzcGFjZSB3aGF0IGRvZXNuJ3QgbWF0Y2ggdGhlIHByZXZpb3VzIHN0cmluZ1xuXHQgICAqL1xuXHQgIHNtYXJ0QmFja3NwYWNlOiB0cnVlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNodWZmbGUgc2h1ZmZsZSB0aGUgc3RyaW5nc1xuXHQgICAqL1xuXHQgIHNodWZmbGU6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gYmFja0RlbGF5IHRpbWUgYmVmb3JlIGJhY2tzcGFjaW5nIGluIG1pbGxpc2Vjb25kc1xuXHQgICAqL1xuXHQgIGJhY2tEZWxheTogNzAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZhZGVPdXQgRmFkZSBvdXQgaW5zdGVhZCBvZiBiYWNrc3BhY2Vcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gZmFkZU91dENsYXNzIGNzcyBjbGFzcyBmb3IgZmFkZSBhbmltYXRpb25cblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGZhZGVPdXREZWxheSBGYWRlIG91dCBkZWxheSBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBmYWRlT3V0OiBmYWxzZSxcblx0ICBmYWRlT3V0Q2xhc3M6ICd0eXBlZC1mYWRlLW91dCcsXG5cdCAgZmFkZU91dERlbGF5OiA1MDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9vcCBsb29wIHN0cmluZ3Ncblx0ICAgKiBAcHJvcGVydHkge251bWJlcn0gbG9vcENvdW50IGFtb3VudCBvZiBsb29wc1xuXHQgICAqL1xuXHQgIGxvb3A6IGZhbHNlLFxuXHQgIGxvb3BDb3VudDogSW5maW5pdHksXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc2hvd0N1cnNvciBzaG93IGN1cnNvclxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjdXJzb3JDaGFyIGNoYXJhY3RlciBmb3IgY3Vyc29yXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBhdXRvSW5zZXJ0Q3NzIGluc2VydCBDU1MgZm9yIGN1cnNvciBhbmQgZmFkZU91dCBpbnRvIEhUTUwgPGhlYWQ+XG5cdCAgICovXG5cdCAgc2hvd0N1cnNvcjogdHJ1ZSxcblx0ICBjdXJzb3JDaGFyOiAnfCcsXG5cdCAgYXV0b0luc2VydENzczogdHJ1ZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGF0dHIgYXR0cmlidXRlIGZvciB0eXBpbmdcblx0ICAgKiBFeDogaW5wdXQgcGxhY2Vob2xkZXIsIHZhbHVlLCBvciBqdXN0IEhUTUwgdGV4dFxuXHQgICAqL1xuXHQgIGF0dHI6IG51bGwsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYmluZElucHV0Rm9jdXNFdmVudHMgYmluZCB0byBmb2N1cyBhbmQgYmx1ciBpZiBlbCBpcyB0ZXh0IGlucHV0XG5cdCAgICovXG5cdCAgYmluZElucHV0Rm9jdXNFdmVudHM6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gY29udGVudFR5cGUgJ2h0bWwnIG9yICdudWxsJyBmb3IgcGxhaW50ZXh0XG5cdCAgICovXG5cdCAgY29udGVudFR5cGU6ICdodG1sJyxcblx0XG5cdCAgLyoqXG5cdCAgICogQmVmb3JlIGl0IGJlZ2lucyB0eXBpbmdcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25CZWdpbjogZnVuY3Rpb24gb25CZWdpbihzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWxsIHR5cGluZyBpcyBjb21wbGV0ZVxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkNvbXBsZXRlOiBmdW5jdGlvbiBvbkNvbXBsZXRlKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBCZWZvcmUgZWFjaCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgcHJlU3RyaW5nVHlwZWQ6IGZ1bmN0aW9uIHByZVN0cmluZ1R5cGVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgZWFjaCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdHJpbmdUeXBlZDogZnVuY3Rpb24gb25TdHJpbmdUeXBlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIER1cmluZyBsb29waW5nLCBhZnRlciBsYXN0IHN0cmluZyBpcyB0eXBlZFxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkxhc3RTdHJpbmdCYWNrc3BhY2VkOiBmdW5jdGlvbiBvbkxhc3RTdHJpbmdCYWNrc3BhY2VkKHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUeXBpbmcgaGFzIGJlZW4gc3RvcHBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblR5cGluZ1BhdXNlZDogZnVuY3Rpb24gb25UeXBpbmdQYXVzZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBUeXBpbmcgaGFzIGJlZW4gc3RhcnRlZCBhZnRlciBiZWluZyBzdG9wcGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uVHlwaW5nUmVzdW1lZDogZnVuY3Rpb24gb25UeXBpbmdSZXN1bWVkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgcmVzZXRcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25SZXNldDogZnVuY3Rpb24gb25SZXNldChzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgc3RvcFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0b3A6IGZ1bmN0aW9uIG9uU3RvcChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHN0YXJ0XG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RhcnQ6IGZ1bmN0aW9uIG9uU3RhcnQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBkZXN0cm95XG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uRGVzdHJveTogZnVuY3Rpb24gb25EZXN0cm95KHNlbGYpIHt9XG5cdH07XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBkZWZhdWx0cztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBUT0RPOiBUaGVzZSBtZXRob2RzIGNhbiBwcm9iYWJseSBiZSBjb21iaW5lZCBzb21laG93XG5cdCAqIFBhcnNlIEhUTUwgdGFncyAmIEhUTUwgQ2hhcmFjdGVyc1xuXHQgKi9cblx0XG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblx0XG5cdHZhciBIVE1MUGFyc2VyID0gKGZ1bmN0aW9uICgpIHtcblx0ICBmdW5jdGlvbiBIVE1MUGFyc2VyKCkge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxQYXJzZXIpO1xuXHQgIH1cblx0XG5cdCAgX2NyZWF0ZUNsYXNzKEhUTUxQYXJzZXIsIFt7XG5cdCAgICBrZXk6ICd0eXBlSHRtbENoYXJzJyxcblx0XG5cdCAgICAvKipcblx0ICAgICAqIFR5cGUgSFRNTCB0YWdzICYgSFRNTCBDaGFyYWN0ZXJzXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIEN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIFBvc2l0aW9uIGluIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBhIG5ldyBzdHJpbmcgcG9zaXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0XG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdHlwZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgc2VsZikge1xuXHQgICAgICBpZiAoc2VsZi5jb250ZW50VHlwZSAhPT0gJ2h0bWwnKSByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgICB2YXIgY3VyQ2hhciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKS5jaGFyQXQoMCk7XG5cdCAgICAgIGlmIChjdXJDaGFyID09PSAnPCcgfHwgY3VyQ2hhciA9PT0gJyYnKSB7XG5cdCAgICAgICAgdmFyIGVuZFRhZyA9ICcnO1xuXHQgICAgICAgIGlmIChjdXJDaGFyID09PSAnPCcpIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc+Jztcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZW5kVGFnID0gJzsnO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgKyAxKS5jaGFyQXQoMCkgIT09IGVuZFRhZykge1xuXHQgICAgICAgICAgY3VyU3RyUG9zKys7XG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zICsgMSA+IGN1clN0cmluZy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGN1clN0clBvcysrO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCYWNrc3BhY2UgSFRNTCB0YWdzIGFuZCBIVE1MIENoYXJhY3RlcnNcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgQ3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgUG9zaXRpb24gaW4gY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGYgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGEgbmV3IHN0cmluZyBwb3NpdGlvblxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2JhY2tTcGFjZUh0bWxDaGFycycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmFja1NwYWNlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBzZWxmKSB7XG5cdCAgICAgIGlmIChzZWxmLmNvbnRlbnRUeXBlICE9PSAnaHRtbCcpIHJldHVybiBjdXJTdHJQb3M7XG5cdCAgICAgIHZhciBjdXJDaGFyID0gY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MpLmNoYXJBdCgwKTtcblx0ICAgICAgaWYgKGN1ckNoYXIgPT09ICc+JyB8fCBjdXJDaGFyID09PSAnOycpIHtcblx0ICAgICAgICB2YXIgZW5kVGFnID0gJyc7XG5cdCAgICAgICAgaWYgKGN1ckNoYXIgPT09ICc+Jykge1xuXHQgICAgICAgICAgZW5kVGFnID0gJzwnO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnJic7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHdoaWxlIChjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyAtIDEpLmNoYXJBdCgwKSAhPT0gZW5kVGFnKSB7XG5cdCAgICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgICAgIGlmIChjdXJTdHJQb3MgPCAwKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBjdXJTdHJQb3MtLTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIEhUTUxQYXJzZXI7XG5cdH0pKCk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBIVE1MUGFyc2VyO1xuXHR2YXIgaHRtbFBhcnNlciA9IG5ldyBIVE1MUGFyc2VyKCk7XG5cdGV4cG9ydHMuaHRtbFBhcnNlciA9IGh0bWxQYXJzZXI7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVxufSk7XG47IiwiJ3VzZSBzdHJpY3QnXHJcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcyc7XHJcbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzL2xpYi9hbmltZS5lcy5qcyc7XHJcbmltcG9ydCBmdWxscGFnZSBmcm9tICdmdWxscGFnZS5qcyc7XHJcblxyXG5pbXBvcnQgJy4vcmVzZXQuY3NzJztcclxuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvZnVsbHBhZ2UuanMvZGlzdC9mdWxscGFnZS5jc3MnXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG4vLyBpbXBvcnQgJy4vZm9udHMvZm9udHMuY3NzJ1xyXG5cclxuY29uc3QgY292ZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyVGV4dCcpO1xyXG5jb25zdCBteVNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teVNraWxscycpO1xyXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNvbnRhY3QnKTtcclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBCYWNrZ3JvdW5kJyk7XHJcblxyXG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25Db250YWN0Q2xpY2spO1xyXG5wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uUG9wdXBCYWNrZ3JvdW5kQ2xpY2spXHJcblxyXG5pbml0KCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaW5pdFR5cGVkVGV4dCgpO1xyXG4gICAgaW5pdFBhZ2VTY3JvbGwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Db250YWN0Q2xpY2soKSB7XHJcbiAgICBzaG93UG9wdXAoKTtcclxuICAgIHBvcHVwQW5pbWUoMSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvblBvcHVwQmFja2dyb3VuZENsaWNrKGUpIHtcclxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBCYWNrZ3JvdW5kJykpIHtcclxuICAgICAgICBwb3B1cEFuaW1lKDAsIGhpZGVQb3B1cCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVQb3B1cCgpIHtcclxuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dQb3B1cCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UG9wdXAoKSB7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdzaG93UG9wdXAnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFR5cGVkVGV4dCgpIHtcclxuICAgIHZhciB0eXBlZCA9IG5ldyBUeXBlZCgnLm1haW5UZXh0Jywge1xyXG4gICAgICAgIHN0cmluZ3M6IFxyXG4gICAgICAgIFsnPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+IEhpISA8L3NwYW4+IDxzcGFuIGNsYXNzPVwidGV4dFwiPiBNeSBuYW1lIGlzIERpbWEuIDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+IEFuZCBJIGFtIEZyb250ZW5kIGRldmVsb3Blci4gPC9zcGFuPiddLFxyXG4gICAgICAgIHR5cGVTcGVlZDogNTAsXHJcbiAgICAgICAgc2hvd0N1cnNvcjogZmFsc2VcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdFBhZ2VTY3JvbGwoKSB7XHJcbiAgICBuZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcclxuICAgICAgICBhdXRvU2Nyb2xsaW5nOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGlvblBvc2l0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgIGZpeGVkRWxlbWVudHM6ICduYXYnLFxyXG4gICAgICAgIGFmdGVyTG9hZDogZnVuY3Rpb24ob3JpZ2luLCBkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5pbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYW5pbWVTa2lsbHMoMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVzdGluYXRpb24uaW5kZXggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1lVGVjaG5vbG9naWVzKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBmdWxscGFnZV9hcGkuc2V0QWxsb3dTY3JvbGxpbmcodHJ1ZSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhbmltZVNraWxscyhvcGFjaXR5KSB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogWycuZmlyc3RFbCcsICcuc2Vjb25kRWwnLCAnLnRoaXJkRWwnXSxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRFeHBvJyxcclxuICAgICAgICBvcGFjaXR5OiBvcGFjaXR5LFxyXG4gICAgICAgIGRlbGF5OiBhbmltZS5zdGFnZ2VyKDUwMCwge2Vhc2luZzogJ2Vhc2VJbk91dEV4cG8nfSksXHJcbiAgICAgICAgZGlyZWN0aW9uOiAnbm9ybWFsJyxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcG9wdXBBbmltZShvcGFjaXR5LCBjb21wbGV0ZUZ1bmN0aW9uKSB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogcG9wdXAsXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0RXhwbycsXHJcbiAgICAgICAgZGlyZWN0aW9uOiAnbm9ybWFsJyxcclxuICAgICAgICBvcGFjaXR5OiBvcGFjaXR5LFxyXG4gICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZUZ1bmN0aW9uLFxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhbmltZVRlY2hub2xvZ2llcyhvcGFjaXR5KSB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogWycudGVjaG5vbG9naWVzTGlzdCddLFxyXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dEV4cG8nLFxyXG4gICAgICAgIGRpcmVjdGlvbjogJ25vcm1hbCcsXHJcbiAgICAgICAgb3BhY2l0eTogb3BhY2l0eSxcclxuICAgIH0pO1xyXG59O1xyXG5cclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=