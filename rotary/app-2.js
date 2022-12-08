
(function ($) {

  Drupal.behaviors.rotary_news_features = {
    attach: function (context, settings) {

      var faders = context.querySelectorAll(".fade-in");
      var sliders = context.querySelectorAll(".slide-in");

      var sectionOneOptions = {
          rootMargin: "-200px 0px 0px 0px"
      };

      var appearOptions = {
          threshold: 0,
          rootMargin: "0px 0px -250px 0px"
      };

      var appearOnScroll = new IntersectionObserver(function (
          entries,
          appearOnScroll
      ) {
          entries.forEach(function(entry) {
              if (!entry.isIntersecting) {
                  return;
              } else {
                  entry.target.classList.add("appear");
                  appearOnScroll.unobserve(entry.target);
              }
          });
      },
          appearOptions);

      faders.forEach(function(fader) {
          appearOnScroll.observe(fader);
      });

      sliders.forEach(function(slider) {
          appearOnScroll.observe(slider);
      });

    }
  };
})(jQuery);
;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Vars = __webpack_require__(3);

module.exports = {

  getMobileOperatingSystem: function() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (
      userAgent.match( /iPad/i ) ||
      userAgent.match( /iPhone/i ) ||
      userAgent.match( /iPod/i )
    ) {
      return 'iOS';
    } else if (
      userAgent.match( /Android/i )
    ) {
      return 'Android';
    } else {
      return 'unknown';
    }
  },

  getIsMobile: function() {
    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
      isMobile = true;
    }
    return isMobile;
  },

  // extracts the file path from a background image computed style
  getStyleSrc: function(src) {
    return (src.match( /url\([^\)]+\)/gi ) || [''])[0].split(/[()'"]+/)[1];
  },

  // loops over an array of method names and executes them
  fire: function(instance, methods) {
    for (var i = 0, len = methods.length; i < len; i++) {
      instance[methods[i]].call(instance);
    }
  },

  // debounce function via: https://davidwalsh.name/javascript-debounce-function
  debounce: function(func, wait, immediate) {
    var timeout;

    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

  loadScript: function(src) {
    var scriptTag = document.createElement('script');
    var scripts = document.getElementsByTagName('script')[0];

    scriptTag.type = 'text/javascript';
    scriptTag.src = src;
    scripts.parentNode.insertBefore(scriptTag, scripts);
  },

  scrollTo: function(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollLeft;
    var perTick = difference / duration * 10;

    setTimeout(function() {
      element.scrollLeft = element.scrollLeft + perTick;
      if (element.scrollLeft === to) return;
      this.scrollTo(element, to, duration - 10);
    }.bind(this), 10);
  },

  guid: function() {
    var s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };

    return s4() + s4() + s4();
  },

  focusRestrict: function(event, container, condition) {
    if (event.which === Vars.keys.TAB && condition) {
      var list = container.querySelectorAll('a, button, input, select, textarea, video, audio, iframe, embed, object');
      var focusableTmp = Array.prototype.slice.call(list);
      var focusable = [];

      // loop over list and filter out any elements with a tabindex of -1
      for (var i = 0, len = focusableTmp.length; i < len; i++) {
        if (focusableTmp[i].getAttribute('tabindex') !== '-1') {
          focusable.push(focusableTmp[i]);
        }
      }

      var listLength = focusable.length;
      var focused = document.activeElement;
      var focusIndex = focusable.indexOf(focused);
      var nextIndex;
      var manageFocus;

      // meet all the conditions!
      if (focusIndex < listLength - 1 && !event.shiftKey) {
        nextIndex = focusIndex + 1;
        manageFocus = false;
      } else if (focusIndex > 0 && event.shiftKey) {
        nextIndex = focusIndex -1;
        manageFocus = false;
      } else if (focusIndex === listLength -1 && !event.shiftKey) {
        nextIndex = 0;
        manageFocus = true;
      } else {
        nextIndex = listLength -1;
        manageFocus = true;
      }

      if (manageFocus) {
        focusable[nextIndex].focus();

        event.preventDefault();
      }
    }
  },

  // finds a specific dom element in the collection
  // and returns the array position
  getArrayPosition: function(array, elem) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i] === elem) return i;
    }
  },

  // returns the height of the tallest element in a collection
  returnTallest: function(arr) {
    var maxHeight = 0;

    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i].style.height = null;

      var h = arr[i].offsetHeight;
      if (h > maxHeight) maxHeight = h;
    }

    return maxHeight;
  },

  // get an element's exact position
  // modified from: https://www.kirupa.com/html5/get_element_position_using_javascript.htm
  getPosition: function(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
      xPos += (el.offsetLeft + el.clientLeft);
      yPos += (el.offsetTop + el.clientTop);

      el = el.offsetParent;
    }

    return {
      x: xPos,
      y: yPos
    };
  },

  scrollY: function() {
    return window.scrollY || window.pageYOffset;
  }

};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {

  mq: {
    small: '(min-width: 30em)', // 480px
    medium: '(min-width: 47.5em)', // 760px
    navigation: '(min-width: 62.5em)' // 1000px
  },

  keys: {
    DOWN: 40,
    RIGHT: 39,
    UP: 38,
    LEFT: 37,
    ESC: 27,
    TAB: 9
  },

  nav: document.querySelector('[data-nav]')

};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// polyfill scripts needed for all browsers
__webpack_require__(6);

// scripts that self-init and just need to be required
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(13);

// third-party scripts included globally
var EQ = __webpack_require__(14);
var smoothScroll = __webpack_require__(16);
var whatInput = __webpack_require__(17);

// requires specific to this file
var Util = __webpack_require__(2);

if (
  // cut the mustard
  'querySelector' in document &&
  'addEventListener' in window
) {

  // Grab all the modules used on the page
  var modules = document.querySelectorAll('[data-module]');

  // Loop over all the modules and, if a constructor exists,
  // start a new instance and pass the element in as a param
  for (var m = 0, len = modules.length; m < len; m++) {

    // get list of modules to init, can be a comma-separated list
    var moduleList = modules[m].getAttribute('data-module').split(',');

    // also get list of features to add
    var features = modules[m].getAttribute('data-features');
    var featureList = (features) ? features.split(',') : [];

    // loop over all modules to init
    for (var i = 0, lengthModules = moduleList.length; i < lengthModules; i++) {
      try {
        var Module = __webpack_require__(18)("./" + moduleList[i]);
        new Module(
          modules[m], // pass in the object as a param
          featureList // pass in feature list as array
        );
      }
      catch (error) {
        console.warn(error);
      }
    }
  }

  // start up smooth scroll
  smoothScroll.init();

  // start up css element queries
  EQ.listen();

}

// load ls.respimg polyfill if srcset attribute isn't supported (IE10/11)
if (!Modernizr.srcset) {
  Util.loadScript(Drupal.settings.rotary_rotaryorg.themeBasePath + '/scripts/vendor/ls.respimg.js');
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// Array.prototype.includes()
// via: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

// focusin/out event polyfill (firefox)
(function() {
  var w = window,
    d = w.document;

  if (w.onfocusin === undefined) {
    d.addEventListener('focus', addPolyfill, true);
    d.addEventListener('blur', addPolyfill, true);
    d.addEventListener('focusin', removePolyfill, true);
    d.addEventListener('focusout', removePolyfill, true);
  }

  function addPolyfill(e) {
    var type = e.type === 'focus' ? 'focusin' : 'focusout';
    var event = new CustomEvent(type, {
      bubbles: true,
      cancelable: false
    });
    event.c1Generated = true;
    e.target.dispatchEvent(event);
  }

  function removePolyfill(e) {
    if (!e.c1Generated) { // focus after focusin, so chrome will the first time trigger tow times focusin
      d.removeEventListener('focus', addPolyfill, true);
      d.removeEventListener('blur', addPolyfill, true);
      d.removeEventListener('focusin', removePolyfill, true);
      d.removeEventListener('focusout', removePolyfill, true);
    }
    setTimeout(function() {
      d.removeEventListener('focusin', removePolyfill, true);
      d.removeEventListener('focusout', removePolyfill, true);
    });
  }
})();

// closest() polyfill
// via: https://www.snip2code.com/Snippet/964738/closest()-polyfill
(function (ELEMENT) {
  ELEMENT.matches = ELEMENT.matches ||
    ELEMENT.mozMatchesSelector ||
    ELEMENT.msMatchesSelector ||
    ELEMENT.oMatchesSelector ||
    ELEMENT.webkitMatchesSelector;

  ELEMENT.closest = ELEMENT.closest || function closest(selector) {
    var element = this;

    while (element) {
      if (element.matches(selector)) {
        return element;
      } else {
        element = element.parentElement;
      }
    }

    return null;
  };
}(Element.prototype));

// IntersectionObserver Polyfill
// https://github.com/w3c/IntersectionObserver/tree/main/polyfill
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {
  'use strict';

  // Exit early if we're not running in a browser.
  if (typeof window !== 'object') {
    return;
  }

  // Exit early if all IntersectionObserver and IntersectionObserverEntry
  // features are natively supported.
  if ('IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

    // Minimal polyfill for Edge 15's lack of `isIntersecting`
    // See: https://github.com/w3c/IntersectionObserver/issues/211
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype,
        'isIntersecting', {
        get: function () {
          return this.intersectionRatio > 0;
        }
      });
    }
    return;
  }

  /**
   * Returns the embedding frame element, if any.
   * @param {!Document} doc
   * @return {!Element}
   */
  function getFrameElement(doc) {
    try {
      return doc.defaultView && doc.defaultView.frameElement || null;
    } catch (e) {
      // Ignore the error.
      return null;
    }
  }

  /**
   * A local reference to the root document.
   */
  var document = (function(startDoc) {
    var doc = startDoc;
    var frame = getFrameElement(doc);
    while (frame) {
      doc = frame.ownerDocument;
      frame = getFrameElement(doc);
    }
    return doc;
  })(window.document);

  /**
   * An IntersectionObserver registry. This registry exists to hold a strong
   * reference to IntersectionObserver instances currently observing a target
   * element. Without this registry, instances without another reference may be
   * garbage collected.
   */
  var registry = [];

  /**
   * The signal updater for cross-origin intersection. When not null, it means
   * that the polyfill is configured to work in a cross-origin mode.
   * @type {function(DOMRect|ClientRect, DOMRect|ClientRect)}
   */
  var crossOriginUpdater = null;

  /**
   * The current cross-origin intersection. Only used in the cross-origin mode.
   * @type {DOMRect|ClientRect}
   */
  var crossOriginRect = null;


  /**
   * Creates the global IntersectionObserverEntry constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
   * @param {Object} entry A dictionary of instance properties.
   * @constructor
   */
  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = ensureDOMRect(entry.rootBounds);
    this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
    this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
    this.isIntersecting = !!entry.intersectionRect;

    // Calculates the intersection ratio.
    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height;

    // Sets intersection ratio.
    if (targetArea) {
      // Round the intersection ratio to avoid floating point math issues:
      // https://github.com/w3c/IntersectionObserver/issues/324
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      // If area is zero and is intersecting, sets to 1, otherwise to 0
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }


  /**
   * Creates the global IntersectionObserver constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
   * @param {Function} callback The function to be invoked after intersection
   *     changes have queued. The function is not invoked if the queue has
   *     been emptied by calling the `takeRecords` method.
   * @param {Object=} opt_options Optional configuration options.
   * @constructor
   */
  function IntersectionObserver(callback, opt_options) {

    var options = opt_options || {};

    if (typeof callback != 'function') {
      throw new Error('callback must be a function');
    }

    if (
      options.root &&
      options.root.nodeType != 1 &&
      options.root.nodeType != 9
    ) {
      throw new Error('root must be a Document or Element');
    }

    // Binds and throttles `this._checkForIntersections`.
    this._checkForIntersections = throttle(
        this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

    // Private properties.
    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin);

    // Public properties.
    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function(margin) {
      return margin.value + margin.unit;
    }).join(' ');

    /** @private @const {!Array<!Document>} */
    this._monitoringDocuments = [];
    /** @private @const {!Array<function()>} */
    this._monitoringUnsubscribes = [];
  }


  /**
   * The minimum interval within which the document will be checked for
   * intersection changes.
   */
  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


  /**
   * The frequency in which the polyfill polls for intersection changes.
   * this can be updated on a per instance basis and must be set prior to
   * calling `observe` on the first target.
   */
  IntersectionObserver.prototype.POLL_INTERVAL = null;

  /**
   * Use a mutation observer on the root element
   * to detect intersection changes.
   */
  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


  /**
   * Sets up the polyfill in the cross-origin mode. The result is the
   * updater function that accepts two arguments: `boundingClientRect` and
   * `intersectionRect` - just as these fields would be available to the
   * parent via `IntersectionObserverEntry`. This function should be called
   * each time the iframe receives intersection information from the parent
   * window, e.g. via messaging.
   * @return {function(DOMRect|ClientRect, DOMRect|ClientRect)}
   */
  IntersectionObserver._setupCrossOriginUpdater = function() {
    if (!crossOriginUpdater) {
      /**
       * @param {DOMRect|ClientRect} boundingClientRect
       * @param {DOMRect|ClientRect} intersectionRect
       */
      crossOriginUpdater = function(boundingClientRect, intersectionRect) {
        if (!boundingClientRect || !intersectionRect) {
          crossOriginRect = getEmptyRect();
        } else {
          crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
        }
        registry.forEach(function(observer) {
          observer._checkForIntersections();
        });
      };
    }
    return crossOriginUpdater;
  };


  /**
   * Resets the cross-origin mode.
   */
  IntersectionObserver._resetCrossOriginUpdater = function() {
    crossOriginUpdater = null;
    crossOriginRect = null;
  };


  /**
   * Starts observing a target element for intersection changes based on
   * the thresholds values.
   * @param {Element} target The DOM element to observe.
   */
  IntersectionObserver.prototype.observe = function(target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
      return item.element == target;
    });

    if (isTargetAlreadyObserved) {
      return;
    }

    if (!(target && target.nodeType == 1)) {
      throw new Error('target must be an Element');
    }

    this._registerInstance();
    this._observationTargets.push({element: target, entry: null});
    this._monitorIntersections(target.ownerDocument);
    this._checkForIntersections();
  };


  /**
   * Stops observing a target element for intersection changes.
   * @param {Element} target The DOM element to observe.
   */
  IntersectionObserver.prototype.unobserve = function(target) {
    this._observationTargets =
        this._observationTargets.filter(function(item) {
          return item.element != target;
        });
    this._unmonitorIntersections(target.ownerDocument);
    if (this._observationTargets.length == 0) {
      this._unregisterInstance();
    }
  };


  /**
   * Stops observing all target elements for intersection changes.
   */
  IntersectionObserver.prototype.disconnect = function() {
    this._observationTargets = [];
    this._unmonitorAllIntersections();
    this._unregisterInstance();
  };


  /**
   * Returns any queue entries that have not yet been reported to the
   * callback and clears the queue. This can be used in conjunction with the
   * callback to obtain the absolute most up-to-date intersection information.
   * @return {Array} The currently queued entries.
   */
  IntersectionObserver.prototype.takeRecords = function() {
    var records = this._queuedEntries.slice();
    this._queuedEntries = [];
    return records;
  };


  /**
   * Accepts the threshold value from the user configuration object and
   * returns a sorted array of unique threshold values. If a value is not
   * between 0 and 1 and error is thrown.
   * @private
   * @param {Array|number=} opt_threshold An optional threshold value or
   *     a list of threshold values, defaulting to [0].
   * @return {Array} A sorted list of unique and valid threshold values.
   */
  IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold)) threshold = [threshold];

    return threshold.sort().filter(function(t, i, a) {
      if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
        throw new Error('threshold must be a number between 0 and 1 inclusively');
      }
      return t !== a[i - 1];
    });
  };


  /**
   * Accepts the rootMargin value from the user configuration object
   * and returns an array of the four margin values as an object containing
   * the value and unit properties. If any of the values are not properly
   * formatted or use a unit other than px or %, and error is thrown.
   * @private
   * @param {string=} opt_rootMargin An optional rootMargin value,
   *     defaulting to '0px'.
   * @return {Array<Object>} An array of margin objects with the keys
   *     value and unit.
   */
  IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
    var marginString = opt_rootMargin || '0px';
    var margins = marginString.split(/\s+/).map(function(margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
      if (!parts) {
        throw new Error('rootMargin must be specified in pixels or percent');
      }
      return {value: parseFloat(parts[1]), unit: parts[2]};
    });

    // Handles shorthand.
    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];

    return margins;
  };


  /**
   * Starts polling for intersection changes if the polling is not already
   * happening, and if the page's visibility state is visible.
   * @param {!Document} doc
   * @private
   */
  IntersectionObserver.prototype._monitorIntersections = function(doc) {
    var win = doc.defaultView;
    if (!win) {
      // Already destroyed.
      return;
    }
    if (this._monitoringDocuments.indexOf(doc) != -1) {
      // Already monitoring.
      return;
    }

    // Private state for monitoring.
    var callback = this._checkForIntersections;
    var monitoringInterval = null;
    var domObserver = null;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
    } else {
      addEvent(win, 'resize', callback, true);
      addEvent(doc, 'scroll', callback, true);
      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in win) {
        domObserver = new win.MutationObserver(callback);
        domObserver.observe(doc, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }

    this._monitoringDocuments.push(doc);
    this._monitoringUnsubscribes.push(function() {
      // Get the window object again. When a friendly iframe is destroyed, it
      // will be null.
      var win = doc.defaultView;

      if (win) {
        if (monitoringInterval) {
          win.clearInterval(monitoringInterval);
        }
        removeEvent(win, 'resize', callback, true);
      }

      removeEvent(doc, 'scroll', callback, true);
      if (domObserver) {
        domObserver.disconnect();
      }
    });

    // Also monitor the parent.
    var rootDoc =
      (this.root && (this.root.ownerDocument || this.root)) || document;
    if (doc != rootDoc) {
      var frame = getFrameElement(doc);
      if (frame) {
        this._monitorIntersections(frame.ownerDocument);
      }
    }
  };


  /**
   * Stops polling for intersection changes.
   * @param {!Document} doc
   * @private
   */
  IntersectionObserver.prototype._unmonitorIntersections = function(doc) {
    var index = this._monitoringDocuments.indexOf(doc);
    if (index == -1) {
      return;
    }

    var rootDoc =
      (this.root && (this.root.ownerDocument || this.root)) || document;

    // Check if any dependent targets are still remaining.
    var hasDependentTargets =
        this._observationTargets.some(function(item) {
          var itemDoc = item.element.ownerDocument;
          // Target is in this context.
          if (itemDoc == doc) {
            return true;
          }
          // Target is nested in this context.
          while (itemDoc && itemDoc != rootDoc) {
            var frame = getFrameElement(itemDoc);
            itemDoc = frame && frame.ownerDocument;
            if (itemDoc == doc) {
              return true;
            }
          }
          return false;
        });
    if (hasDependentTargets) {
      return;
    }

    // Unsubscribe.
    var unsubscribe = this._monitoringUnsubscribes[index];
    this._monitoringDocuments.splice(index, 1);
    this._monitoringUnsubscribes.splice(index, 1);
    unsubscribe();

    // Also unmonitor the parent.
    if (doc != rootDoc) {
      var frame = getFrameElement(doc);
      if (frame) {
        this._unmonitorIntersections(frame.ownerDocument);
      }
    }
  };


  /**
   * Stops polling for intersection changes.
   * @param {!Document} doc
   * @private
   */
  IntersectionObserver.prototype._unmonitorAllIntersections = function() {
    var unsubscribes = this._monitoringUnsubscribes.slice(0);
    this._monitoringDocuments.length = 0;
    this._monitoringUnsubscribes.length = 0;
    for (var i = 0; i < unsubscribes.length; i++) {
      unsubscribes[i]();
    }
  };


  /**
   * Scans each observation target for intersection changes and adds them
   * to the internal entries queue. If new entries are found, it
   * schedules the callback to be invoked.
   * @private
   */
  IntersectionObserver.prototype._checkForIntersections = function() {
    if (!this.root && crossOriginUpdater && !crossOriginRect) {
      // Cross origin monitoring, but no initial data available yet.
      return;
    }

    var rootIsInDom = this._rootIsInDom();
    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

    this._observationTargets.forEach(function(item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);
      var rootContainsTarget = this._rootContainsTarget(target);
      var oldEntry = item.entry;
      var intersectionRect = rootIsInDom && rootContainsTarget &&
          this._computeTargetAndRootIntersection(target, targetRect, rootRect);

      var rootBounds = null;
      if (!this._rootContainsTarget(target)) {
        rootBounds = getEmptyRect();
      } else if (!crossOriginUpdater || this.root) {
        rootBounds = rootRect;
      }

      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target: target,
        boundingClientRect: targetRect,
        rootBounds: rootBounds,
        intersectionRect: intersectionRect
      });

      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        // If the new entry intersection ratio has crossed any of the
        // thresholds, add a new entry.
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        // If the root is not in the DOM or target is not contained within
        // root but the previous entry for this target had an intersection,
        // add a new record indicating removal.
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);

    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };


  /**
   * Accepts a target and root rect computes the intersection between then
   * following the algorithm in the spec.
   * TODO(philipwalton): at this time clip-path is not considered.
   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
   * @param {Element} target The target DOM element
   * @param {Object} targetRect The bounding rect of the target.
   * @param {Object} rootRect The bounding rect of the root after being
   *     expanded by the rootMargin value.
   * @return {?Object} The final intersection rect object or undefined if no
   *     intersection is found.
   * @private
   */
  IntersectionObserver.prototype._computeTargetAndRootIntersection =
      function(target, targetRect, rootRect) {
    // If the element isn't displayed, an intersection can't happen.
    if (window.getComputedStyle(target).display == 'none') return;

    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;

    while (!atRoot && parent) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ?
          window.getComputedStyle(parent) : {};

      // If the parent isn't displayed, an intersection can't happen.
      if (parentComputedStyle.display == 'none') return null;

      if (parent == this.root || parent.nodeType == /* DOCUMENT */ 9) {
        atRoot = true;
        if (parent == this.root || parent == document) {
          if (crossOriginUpdater && !this.root) {
            if (!crossOriginRect ||
                crossOriginRect.width == 0 && crossOriginRect.height == 0) {
              // A 0-size cross-origin intersection means no-intersection.
              parent = null;
              parentRect = null;
              intersectionRect = null;
            } else {
              parentRect = crossOriginRect;
            }
          } else {
            parentRect = rootRect;
          }
        } else {
          // Check if there's a frame that can be navigated to.
          var frame = getParentNode(parent);
          var frameRect = frame && getBoundingClientRect(frame);
          var frameIntersect =
              frame &&
              this._computeTargetAndRootIntersection(frame, frameRect, rootRect);
          if (frameRect && frameIntersect) {
            parent = frame;
            parentRect = convertFromParentRect(frameRect, frameIntersect);
          } else {
            parent = null;
            intersectionRect = null;
          }
        }
      } else {
        // If the element has a non-visible overflow, and it's not the <body>
        // or <html> element, update the intersection rect.
        // Note: <body> and <html> cannot be clipped to a rect that's not also
        // the document rect, so no need to compute a new intersection.
        var doc = parent.ownerDocument;
        if (parent != doc.body &&
            parent != doc.documentElement &&
            parentComputedStyle.overflow != 'visible') {
          parentRect = getBoundingClientRect(parent);
        }
      }

      // If either of the above conditionals set a new parentRect,
      // calculate new intersection data.
      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
      }
      if (!intersectionRect) break;
      parent = parent && getParentNode(parent);
    }
    return intersectionRect;
  };


  /**
   * Returns the root rect after being expanded by the rootMargin value.
   * @return {ClientRect} The expanded root rect.
   * @private
   */
  IntersectionObserver.prototype._getRootRect = function() {
    var rootRect;
    if (this.root && !isDoc(this.root)) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      // Use <html>/<body> instead of window since scroll bars affect size.
      var doc = isDoc(this.root) ? this.root : document;
      var html = doc.documentElement;
      var body = doc.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }
    return this._expandRectByRootMargin(rootRect);
  };


  /**
   * Accepts a rect and expands it by the rootMargin value.
   * @param {DOMRect|ClientRect} rect The rect object to expand.
   * @return {ClientRect} The expanded rect.
   * @private
   */
  IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
    var margins = this._rootMarginValues.map(function(margin, i) {
      return margin.unit == 'px' ? margin.value :
          margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });
    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;

    return newRect;
  };


  /**
   * Accepts an old and new entry and returns true if at least one of the
   * threshold values has been crossed.
   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
   *    particular target element or null if no previous entry exists.
   * @param {IntersectionObserverEntry} newEntry The current entry for a
   *    particular target element.
   * @return {boolean} Returns true if a any threshold has been crossed.
   * @private
   */
  IntersectionObserver.prototype._hasCrossedThreshold =
      function(oldEntry, newEntry) {

    // To make comparing easier, an entry that has a ratio of 0
    // but does not actually intersect is given a value of -1
    var oldRatio = oldEntry && oldEntry.isIntersecting ?
        oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ?
        newEntry.intersectionRatio || 0 : -1;

    // Ignore unchanged ratios
    if (oldRatio === newRatio) return;

    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i];

      // Return true if an entry matches a threshold or if the new ratio
      // and the old ratio are on the opposite sides of a threshold.
      if (threshold == oldRatio || threshold == newRatio ||
          threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };


  /**
   * Returns whether or not the root element is an element and is in the DOM.
   * @return {boolean} True if the root element is an element and is in the DOM.
   * @private
   */
  IntersectionObserver.prototype._rootIsInDom = function() {
    return !this.root || containsDeep(document, this.root);
  };


  /**
   * Returns whether or not the target element is a child of root.
   * @param {Element} target The target element to check.
   * @return {boolean} True if the target element is a child of root.
   * @private
   */
  IntersectionObserver.prototype._rootContainsTarget = function(target) {
    var rootDoc =
      (this.root && (this.root.ownerDocument || this.root)) || document;
    return (
      containsDeep(rootDoc, target) &&
      (!this.root || rootDoc == target.ownerDocument)
    );
  };


  /**
   * Adds the instance to the global IntersectionObserver registry if it isn't
   * already present.
   * @private
   */
  IntersectionObserver.prototype._registerInstance = function() {
    if (registry.indexOf(this) < 0) {
      registry.push(this);
    }
  };


  /**
   * Removes the instance from the global IntersectionObserver registry.
   * @private
   */
  IntersectionObserver.prototype._unregisterInstance = function() {
    var index = registry.indexOf(this);
    if (index != -1) registry.splice(index, 1);
  };


  /**
   * Returns the result of the performance.now() method or null in browsers
   * that don't support the API.
   * @return {number} The elapsed time since the page was requested.
   */
  function now() {
    return window.performance && performance.now && performance.now();
  }


  /**
   * Throttles a function and delays its execution, so it's only called at most
   * once within a given time period.
   * @param {Function} fn The function to throttle.
   * @param {number} timeout The amount of time that must pass before the
   *     function can be called again.
   * @return {Function} The throttled function.
   */
  function throttle(fn, timeout) {
    var timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(function() {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }


  /**
   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
   * @param {Node} node The DOM node to add the event handler to.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to add.
   * @param {boolean} opt_useCapture Optionally adds the even to the capture
   *     phase. Note: this only works in modern browsers.
   */
  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener == 'function') {
      node.addEventListener(event, fn, opt_useCapture || false);
    }
    else if (typeof node.attachEvent == 'function') {
      node.attachEvent('on' + event, fn);
    }
  }


  /**
   * Removes a previously added event handler from a DOM node.
   * @param {Node} node The DOM node to remove the event handler from.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to remove.
   * @param {boolean} opt_useCapture If the event handler was added with this
   *     flag set to true, it should be set to true here in order to remove it.
   */
  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener == 'function') {
      node.removeEventListener(event, fn, opt_useCapture || false);
    }
    else if (typeof node.detatchEvent == 'function') {
      node.detatchEvent('on' + event, fn);
    }
  }


  /**
   * Returns the intersection between two rect objects.
   * @param {Object} rect1 The first rect.
   * @param {Object} rect2 The second rect.
   * @return {?Object|?ClientRect} The intersection rect or undefined if no
   *     intersection is found.
   */
  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;

    return (width >= 0 && height >= 0) && {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    } || null;
  }


  /**
   * Shims the native getBoundingClientRect for compatibility with older IE.
   * @param {Element} el The element whose bounding rect to get.
   * @return {DOMRect|ClientRect} The (possibly shimmed) rect of the element.
   */
  function getBoundingClientRect(el) {
    var rect;

    try {
      rect = el.getBoundingClientRect();
    } catch (err) {
      // Ignore Windows 7 IE11 "Unspecified error"
      // https://github.com/w3c/IntersectionObserver/pull/205
    }

    if (!rect) return getEmptyRect();

    // Older IE
    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }
    return rect;
  }


  /**
   * Returns an empty rect object. An empty rect is returned when an element
   * is not in the DOM.
   * @return {ClientRect} The empty rect.
   */
  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }


  /**
   * Ensure that the result has all of the necessary fields of the DOMRect.
   * Specifically this ensures that `x` and `y` fields are set.
   *
   * @param {?DOMRect|?ClientRect} rect
   * @return {?DOMRect}
   */
  function ensureDOMRect(rect) {
    // A `DOMRect` object has `x` and `y` fields.
    if (!rect || 'x' in rect) {
      return rect;
    }
    // A IE's `ClientRect` type does not have `x` and `y`. The same is the case
    // for internally calculated Rect objects. For the purposes of
    // `IntersectionObserver`, it's sufficient to simply mirror `left` and `top`
    // for these fields.
    return {
      top: rect.top,
      y: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      right: rect.right,
      width: rect.width,
      height: rect.height
    };
  }


  /**
   * Inverts the intersection and bounding rect from the parent (frame) BCR to
   * the local BCR space.
   * @param {DOMRect|ClientRect} parentBoundingRect The parent's bound client rect.
   * @param {DOMRect|ClientRect} parentIntersectionRect The parent's own intersection rect.
   * @return {ClientRect} The local root bounding rect for the parent's children.
   */
  function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
    var top = parentIntersectionRect.top - parentBoundingRect.top;
    var left = parentIntersectionRect.left - parentBoundingRect.left;
    return {
      top: top,
      left: left,
      height: parentIntersectionRect.height,
      width: parentIntersectionRect.width,
      bottom: top + parentIntersectionRect.height,
      right: left + parentIntersectionRect.width
    };
  }


  /**
   * Checks to see if a parent element contains a child element (including inside
   * shadow DOM).
   * @param {Node} parent The parent element.
   * @param {Node} child The child element.
   * @return {boolean} True if the parent node contains the child node.
   */
  function containsDeep(parent, child) {
    var node = child;
    while (node) {
      if (node == parent) return true;

      node = getParentNode(node);
    }
    return false;
  }


  /**
   * Gets the parent node of an element or its host element if the parent node
   * is a shadow root.
   * @param {Node} node The node whose parent to get.
   * @return {Node|null} The parent node or null if no parent exists.
   */
  function getParentNode(node) {
    var parent = node.parentNode;

    if (node.nodeType == /* DOCUMENT */ 9 && node != document) {
      // If this node is a document node, look for the embedding frame.
      return getFrameElement(node);
    }

    // If the parent has element that is assigned through shadow root slot
    if (parent && parent.assignedSlot) {
      parent = parent.assignedSlot.parentNode
    }

    if (parent && parent.nodeType == 11 && parent.host) {
      // If the parent is a shadow root, return the host element.
      return parent.host;
    }

    return parent;
  }

  /**
   * Returns true if `node` is a Document.
   * @param {!Node} node
   * @returns {boolean}
   */
  function isDoc(node) {
    return node && node.nodeType === 9;
  }


  // Exposes the constructors globally.
  window.IntersectionObserver = IntersectionObserver;
  window.IntersectionObserverEntry = IntersectionObserverEntry;

}());

// NodeList.forEach polyfill
// https://github.com/imagitama/nodelist-foreach-polyfill/
if (typeof window !== 'undefined' &&  window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * focuser - Ditch those ugly focus styles and use Focuser! A stylable, traveling focus indicator.
 * @version v1.1.0
 * @link https://github.com/ten1seven/focuser
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports) {

	'use strict';

	module.exports = function () {
	  // object containing the focuser's current dimensions
	  var focuserBox = {
	    width: 0,
	    height: 0,
	    top: 0,
	    left: 0

	    // block-level elements
	    // that should not receive a focus indicator
	  };var formInputs = ['body', 'div', 'form', 'main', 'nav'];

	  // empty variable for holding the curretly-focused element
	  var currentElem = null;

	  // empty variable for the focuser element
	  var focuserElem = null;

	  // extra "padding" between focuser and the element it's focusing
	  var focuserElemPadding = 0;

	  // boolean containing whether something is currently focused
	  var isFocused = false;

	  /**
	   * Set up
	   */

	  var createFocuser = function createFocuser() {
	    focuserElem = document.createElement('div');
	    focuserElem.classList.add('a11y-focuser');

	    document.body.appendChild(focuserElem);

	    // set attribute on body to indicate that focuser is available
	    document.body.setAttribute('data-focuser', '');
	  };

	  var updateFocuser = function updateFocuser() {
	    if (isFocused && currentElem) {
	      var elemInfo = currentElem.getBoundingClientRect();

	      // reasons to stop an active focuser
	      if (

	      // if the current element is one of the block level elements
	      formInputs.indexOf(currentElem.nodeName.toLowerCase()) !== -1 ||

	      // OR the element is less than 1px in height and width
	      // this catches elements that may be using accessible techniques for hidden content
	      // via: https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
	      elemInfo.height <= 1 && elemInfo.width <= 1) {
	        stopFocuser();

	        // only update the focuser element if
	        // the dimensions have changed to save on processing
	      } else if (focuserBox.width !== elemInfo.width || focuserBox.height !== elemInfo.height || focuserBox.top !== elemInfo.top || focuserBox.left !== elemInfo.left) {
	        // save the current dimensions for comparison
	        focuserBox.width = elemInfo.width;
	        focuserBox.height = elemInfo.height;
	        focuserBox.top = elemInfo.top;
	        focuserBox.left = elemInfo.left;

	        // set the style on the focuser
	        focuserElem.style.width = elemInfo.width + focuserElemPadding * 2 + 'px';
	        focuserElem.style.height = elemInfo.height + focuserElemPadding * 2 + 'px';
	        focuserElem.style.top = elemInfo.top + window.pageYOffset - focuserElemPadding + 'px';
	        focuserElem.style.left = elemInfo.left + window.pageXOffset - focuserElemPadding + 'px';
	      }

	      window.requestAnimationFrame(updateFocuser);
	    }
	  };

	  /**
	   * Events
	   */

	  var startFocuser = function startFocuser(event) {
	    isFocused = true;
	    currentElem = event.target;

	    focuserElem.classList.add('-focus');

	    updateFocuser();
	  };

	  var stopFocuser = function stopFocuser() {
	    isFocused = false;
	    currentElem = null;

	    focuserElem.classList.remove('-focus');
	  };

	  var addListeners = function addListeners() {
	    document.body.addEventListener('focusin', startFocuser);
	    document.body.addEventListener('focusout', stopFocuser);
	  };

	  /**
	   * Init
	   */

	  createFocuser();
	  addListeners();
	  updateFocuser();
	}();

/***/ })
/******/ ])
});
;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

(function(window, factory) {
	var lazySizes = factory(window, window.document, Date);
	window.lazySizes = lazySizes;
	if( true && module.exports){
		module.exports = lazySizes;
	}
}(typeof window != 'undefined' ?
      window : {}, function l(window, document, Date) { // Pass in the windoe Date function also for SSR because the Date class can be lost
	'use strict';
	/*jshint eqnull:true */

	var lazysizes, lazySizesCfg;

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = lazySizesDefaults[prop];
			}
		}
	})();

	if (!document || !document.getElementsByClassName) {
		return {
			init: function () {},
			cfg: lazySizesCfg,
			noSupport: true,
		};
	}

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	/**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */
	var addEventListener = window[_addEventListener].bind(window);

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesCfg.throttleDelay;
		var rICTimeout = lazySizesCfg.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesCfg.ricTimeout){
					rICTimeout = lazySizesCfg.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if (!defaultExpand) {
						defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
							docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
							lazySizesCfg.expand;

						lazysizes._defEx = defaultExpand;

						preloadExpand = defaultExpand * lazySizesCfg.expFactor;
						hFac = lazySizesCfg.hFac;
						isBodyHidden = null;

						if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
							currentExpand = preloadExpand;
							lowRuns = 0;
						} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
							currentExpand = defaultExpand;
						} else {
							currentExpand = shrinkExpand;
						}
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesCfg.loadedClass);
			removeClass(elem, lazySizesCfg.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			try {
				elem.contentWindow.location.replace(src);
			} catch(e){
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

			if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesCfg.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
				src = elem[_getAttribute](lazySizesCfg.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesCfg.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesCfg.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if( !firesLoad || isLoaded){
					if (isLoaded) {
						addClass(elem, 'ls-is-cached');
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
				if (elem.loading == 'lazy') {
					isLoading--;
				}
			}, true);
		});

		var unveilElement = function (elem){
			if (elem._lazyRace) {return;}
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var afterScroll = debounce(function(){
			lazySizesCfg.loadMode = 3;
			throttledCheckElements();
		});

		var altLoadmodeScrollListner = function(){
			if(lazySizesCfg.loadMode == 3){
				lazySizesCfg.loadMode = 2;
			}
			afterScroll();
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}


			isCompleted = true;

			lazySizesCfg.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', altLoadmodeScrollListner, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				addEventListener('pageshow', function (e) {
					if (e.persisted) {
						var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

						if (loadingElements.length && loadingElements.forEach) {
							requestAnimationFrame(function () {
								loadingElements.forEach( function (img) {
									if (img.complete) {
										unveilElement(img);
									}
								});
							});
						}
					}
				});

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement,
			_aLSL: altLoadmodeScrollListner,
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i && document.getElementsByClassName){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	setTimeout(function(){
		if(lazySizesCfg.init){
			init();
		}
	});

	lazysizes = {
		cfg: lazySizesCfg,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/*!
 * modernizr v3.3.1
 * Build https://modernizr.com/download?-backgroundblendmode-cssfilters-cssmask-flexbox-srcset-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;(function(window, document, undefined){
  var classes = [];


  var tests = [];


  /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */

  var ModernizrProto = {
    // The current version, dummy
    _version: '3.3.1',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': true,
      'enableJSClass': true,
      'usePrefixes': true
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function(test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function() {
        cb(self[test]);
      }, 0);
    },

    addTest: function(name, fn, options) {
      tests.push({name: name, fn: fn, options: options});
    },

    addAsyncTest: function(fn) {
      tests.push({name: null, fn: fn});
    }
  };



  // Fake some of Object.create so we can force non test results to be non "own" properties.
  var Modernizr = function() {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();



  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */

  function is(obj, type) {
    return typeof obj === type;
  }
  ;

  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */

  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());

          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        }

        // Run the test, or use the raw value if it's not a function
        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split('.');

          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already
            /* jshint -W053 */
            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }

            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }

          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }
  ;

  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */

  var docElement = document.documentElement;


  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */

  var isSVG = docElement.nodeName.toLowerCase() === 'svg';


  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */

  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';

    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }

    if (Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      isSVG ? docElement.className.baseVal = className : docElement.className = className;
    }

  }

  ;

  /**
   * createElement is a convenience wrapper around document.createElement. Since we
   * use createElement all over the place, this allows for (slightly) smaller code
   * as well as abstracting away issues with creating elements in contexts other than
   * HTML documents (e.g. SVG documents).
   *
   * @access private
   * @function createElement
   * @returns {HTMLElement|SVGElement} An HTML or SVG element
   */

  function createElement() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (isSVG) {
      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  }

  ;
/*!
{
  "name": "srcset attribute",
  "property": "srcset",
  "tags": ["image"],
  "notes": [{
    "name": "Smashing Magazine Article",
    "href": "https://en.wikipedia.org/wiki/APNG"
    },{
    "name": "Generate multi-resolution images for srcset with Grunt",
    "href": "https://addyosmani.com/blog/generate-multi-resolution-images-for-srcset-with-grunt/"
    }]
}
!*/
/* DOC
Test for the srcset attribute of images
*/

  Modernizr.addTest('srcset', 'srcset' in createElement('img'));


  /**
   * List of property values to set for css tests. See ticket #21
   * http://git.io/vUGl4
   *
   * @memberof Modernizr
   * @name Modernizr._prefixes
   * @optionName Modernizr._prefixes
   * @optionProp prefixes
   * @access public
   * @example
   *
   * Modernizr._prefixes is the internal list of prefixes that we test against
   * inside of things like [prefixed](#modernizr-prefixed) and [prefixedCSS](#-code-modernizr-prefixedcss). It is simply
   * an array of kebab-case vendor prefixes you can use within your code.
   *
   * Some common use cases include
   *
   * Generating all possible prefixed version of a CSS property
   * ```js
   * var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
   *
   * rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'
   * ```
   *
   * Generating all possible prefixed version of a CSS value
   * ```js
   * rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
   *
   * rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'
   * ```
   */

  // we use ['',''] rather than an empty array in order to allow a pattern of .`join()`ing prefixes to test
  // values in feature detects to continue to work
  var prefixes = (ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : ['','']);

  // expose these for the plugin API. Look in the source for how to join() them against your input
  ModernizrProto._prefixes = prefixes;


/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/

  var newSyntax = 'CSS' in window && 'supports' in window.CSS;
  var oldSyntax = 'supportsCSS' in window;
  Modernizr.addTest('supports', newSyntax || oldSyntax);


  /**
   * cssToDOM takes a kebab-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of kebab-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */

  function cssToDOM(name) {
    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  }
  ;

  /**
   * If the browsers follow the spec, then they would expose vendor-specific style as:
   *   elem.style.WebkitBorderRadius
   * instead of something like the following, which would be technically incorrect:
   *   elem.style.webkitBorderRadius

   * Webkit ghosts their properties in lowercase but Opera & Moz do not.
   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
   *   erik.eae.net/archives/2008/03/10/21.48.10/

   * More here: github.com/Modernizr/Modernizr/issues/issue/21
   *
   * @access private
   * @returns {string} The string representing the vendor-specific style properties
   */

  var omPrefixes = 'Moz O ms Webkit';


  var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);
  ModernizrProto._cssomPrefixes = cssomPrefixes;


  /**
   * atRule returns a given CSS property at-rule (eg @keyframes), possibly in
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @memberof Modernizr
   * @name Modernizr.atRule
   * @optionName Modernizr.atRule()
   * @optionProp atRule
   * @access public
   * @function atRule
   * @param {string} prop - String name of the @-rule to test for
   * @returns {string|boolean} The string representing the (possibly prefixed)
   * valid version of the @-rule, or `false` when it is unsupported.
   * @example
   * ```js
   *  var keyframes = Modernizr.atRule('@keyframes');
   *
   *  if (keyframes) {
   *    // keyframes are supported
   *    // could be `@-webkit-keyframes` or `@keyframes`
   *  } else {
   *    // keyframes === `false`
   *  }
   * ```
   *
   */

  var atRule = function(prop) {
    var length = prefixes.length;
    var cssrule = window.CSSRule;
    var rule;

    if (typeof cssrule === 'undefined') {
      return undefined;
    }

    if (!prop) {
      return false;
    }

    // remove literal @ from beginning of provided property
    prop = prop.replace(/^@/, '');

    // CSSRules use underscores instead of dashes
    rule = prop.replace(/-/g, '_').toUpperCase() + '_RULE';

    if (rule in cssrule) {
      return '@' + prop;
    }

    for (var i = 0; i < length; i++) {
      // prefixes gives us something like -o-, and we want O_
      var prefix = prefixes[i];
      var thisRule = prefix.toUpperCase() + '_' + rule;

      if (thisRule in cssrule) {
        return '@-' + prefix.toLowerCase() + '-' + prop;
      }
    }

    return false;
  };

  ModernizrProto.atRule = atRule;



  /**
   * List of JavaScript DOM values used for tests
   *
   * @memberof Modernizr
   * @name Modernizr._domPrefixes
   * @optionName Modernizr._domPrefixes
   * @optionProp domPrefixes
   * @access public
   * @example
   *
   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
   * than kebab-case properties, all properties are their Capitalized variant
   *
   * ```js
   * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
   * ```
   */

  var domPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : []);
  ModernizrProto._domPrefixes = domPrefixes;



  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean}
   */

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  ;

  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {function} fn - a function you want to change `this` reference to
   * @param {object} that - the `this` you want to call the function with
   * @returns {function} The wrapped version of the supplied function
   */

  function fnBind(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  }

  ;

  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   *
   * @access private
   * @function testDOMProps
   * @param {array.<string>} props - An array of properties to test for
   * @param {object} obj - An object or Element you want to use to test the parameters again
   * @param {boolean|object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
   */
  function testDOMProps(props, obj, elem) {
    var item;

    for (var i in props) {
      if (props[i] in obj) {

        // return the property name as a string
        if (elem === false) {
          return props[i];
        }

        item = obj[props[i]];

        // let's bind a function
        if (is(item, 'function')) {
          // bind to obj unless overriden
          return fnBind(item, elem || obj);
        }

        // return the unbound function or obj or value
        return item;
      }
    }
    return false;
  }

  ;

  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */

  var modElem = {
    elem: createElement('modernizr')
  };

  // Clean up this element
  Modernizr._q.push(function() {
    delete modElem.elem;
  });



  var mStyle = {
    style: modElem.elem.style
  };

  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function() {
    delete mStyle.style;
  });



  /**
   * domToCSS takes a camelCase string and converts it to kebab-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The kebab-case version of the supplied name
   */

  function domToCSS(name) {
    return name.replace(/([A-Z])/g, function(str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }
  ;

  /**
   * getBody returns the body of a document, or an element that can stand in for
   * the body if a real body does not exist
   *
   * @access private
   * @function getBody
   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
   * artificially created element that stands in for the body
   */

  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if (!body) {
      // Can't use the real body create a fake one.
      body = createElement(isSVG ? 'svg' : 'body');
      body.fake = true;
    }

    return body;
  }

  ;

  /**
   * injectElementWithStyles injects an element with style element and some CSS rules
   *
   * @access private
   * @function injectElementWithStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   */

  function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();

    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    style = createElement('style');
    style.type = 'text/css';
    style.id = 's' + mod;

    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }
    div.id = mod;

    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if (body.fake) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;

  }

  ;

  /**
   * nativeTestProps allows for us to use native feature detection functionality if available.
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @access private
   * @function nativeTestProps
   * @param {array} props - An array of property names
   * @param {string} value - A string representing the value we want to check via @supports
   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
   */

  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available
  function nativeTestProps(props, value) {
    var i = props.length;
    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface
    if ('CSS' in window && 'supports' in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise fall back to at-rule (for Opera 12.x)
    else if ('CSSSupportsRule' in window) {
      // Build a condition string for every prefixed variant
      var conditionText = [];
      while (i--) {
        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
      }
      conditionText = conditionText.join(' or ');
      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function(node) {
        return getComputedStyle(node, null).position == 'absolute';
      });
    }
    return undefined;
  }
  ;

  // testProps is a generic CSS / DOM property test.

  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Property names can be provided in either camelCase or kebab-case.

  function testProps(props, prefixed, value, skipValueTest) {
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

    // Try native detect first
    if (!is(value, 'undefined')) {
      var result = nativeTestProps(props, value);
      if (!is(result, 'undefined')) {
        return result;
      }
    }

    // Otherwise do it properly
    var afterInit, i, propsLength, prop, before;

    // If we don't have a style element, that means we're running async or after
    // the core tests, so we'll need to create our own elements to use

    // inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.
    // for strict XHTML browsers the hardly used samp element is used
    var elems = ['modernizr', 'tspan', 'samp'];
    while (!mStyle.style && elems.length) {
      afterInit = true;
      mStyle.modElem = createElement(elems.shift());
      mStyle.style = mStyle.modElem.style;
    }

    // Delete the objects if we created them.
    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }

    propsLength = props.length;
    for (i = 0; i < propsLength; i++) {
      prop = props[i];
      before = mStyle.style[prop];

      if (contains(prop, '-')) {
        prop = cssToDOM(prop);
      }

      if (mStyle.style[prop] !== undefined) {

        // If value to test has been passed in, do a set-and-check test.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, 'undefined')) {

          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {}

          // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()
          if (mStyle.style[prop] != before) {
            cleanElems();
            return prefixed == 'pfx' ? prop : true;
          }
        }
        // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
          cleanElems();
          return prefixed == 'pfx' ? prop : true;
        }
      }
    }
    cleanElems();
    return false;
  }

  ;

  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   * We specify literally ALL possible (known and/or likely) properties on
   * the element including the non-vendor prefixed one, for forward-
   * compatibility.
   *
   * @access private
   * @function testPropsAll
   * @param {string} prop - A string of the property to test for
   * @param {string|object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
   * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against
   * @param {string} [value] - A string of a css value
   * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set
   */
  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {

    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
    props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    // did they call .prefixed('boxSizing') or are we just testing a prop?
    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed, value, skipValueTest);

      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  // Modernizr.testAllProps() investigates whether a given style property,
  // or any of its vendor-prefixed variants, is recognized
  //
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')
  ModernizrProto.testAllProps = testPropsAll;



  /**
   * prefixed returns the prefixed or nonprefixed property name variant of your input
   *
   * @memberof Modernizr
   * @name Modernizr.prefixed
   * @optionName Modernizr.prefixed()
   * @optionProp prefixed
   * @access public
   * @function prefixed
   * @param {string} prop - String name of the property to test for
   * @param {object} [obj] - An object to test for the prefixed properties on
   * @param {HTMLElement} [elem] - An element used to test specific properties against
   * @returns {string|false} The string representing the (possibly prefixed) valid
   * version of the property, or `false` when it is unsupported.
   * @example
   *
   * Modernizr.prefixed takes a string css value in the DOM style camelCase (as
   * opposed to the css style kebab-case) form and returns the (possibly prefixed)
   * version of that property that the browser actually supports.
   *
   * For example, in older Firefox...
   * ```js
   * prefixed('boxSizing')
   * ```
   * returns 'MozBoxSizing'
   *
   * In newer Firefox, as well as any other browser that support the unprefixed
   * version would simply return `boxSizing`. Any browser that does not support
   * the property at all, it will return `false`.
   *
   * By default, prefixed is checked against a DOM element. If you want to check
   * for a property on another object, just pass it as a second argument
   *
   * ```js
   * var rAF = prefixed('requestAnimationFrame', window);
   *
   * raf(function() {
   *  renderFunction();
   * })
   * ```
   *
   * Note that this will return _the actual function_ - not the name of the function.
   * If you need the actual name of the property, pass in `false` as a third argument
   *
   * ```js
   * var rAFProp = prefixed('requestAnimationFrame', window, false);
   *
   * rafProp === 'WebkitRequestAnimationFrame' // in older webkit
   * ```
   *
   * One common use case for prefixed is if you're trying to determine which transition
   * end event to bind to, you might do something like...
   * ```js
   * var transEndEventNames = {
   *     'WebkitTransition' : 'webkitTransitionEnd', * Saf 6, Android Browser
   *     'MozTransition'    : 'transitionend',       * only for FF < 15
   *     'transition'       : 'transitionend'        * IE10, Opera, Chrome, FF 15+, Saf 7+
   * };
   *
   * var transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];
   * ```
   *
   * If you want a similar lookup, but in kebab-case, you can use [prefixedCSS](#modernizr-prefixedcss).
   */

  var prefixed = ModernizrProto.prefixed = function(prop, obj, elem) {
    if (prop.indexOf('@') === 0) {
      return atRule(prop);
    }

    if (prop.indexOf('-') != -1) {
      // Convert kebab-case to camelCase
      prop = cssToDOM(prop);
    }
    if (!obj) {
      return testPropsAll(prop, 'pfx');
    } else {
      // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
      return testPropsAll(prop, obj, elem);
    }
  };


/*!
{
  "name": "CSS Background Blend Mode",
  "property": "backgroundblendmode",
  "caniuse": "css-backgroundblendmode",
  "tags": ["css"],
  "notes": [
    {
      "name": "CSS Blend Modes could be the next big thing in Web Design",
      "href": " https://medium.com/@bennettfeely/css-blend-modes-could-be-the-next-big-thing-in-web-design-6b51bf53743a"
    }, {
      "name": "Demo",
      "href": "http://bennettfeely.com/gradients/"
    }
  ]
}
!*/
/* DOC
Detects the ability for the browser to composite backgrounds using blending modes similar to ones found in Photoshop or Illustrator.
*/

  Modernizr.addTest('backgroundblendmode', prefixed('backgroundBlendMode', 'text'));


  /**
   * testAllProps determines whether a given CSS property is supported in the browser
   *
   * @memberof Modernizr
   * @name Modernizr.testAllProps
   * @optionName Modernizr.testAllProps()
   * @optionProp testAllProps
   * @access public
   * @function testAllProps
   * @param {string} prop - String naming the property to test (either camelCase or kebab-case)
   * @param {string} [value] - String of the value to test
   * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection
   * @example
   *
   * testAllProps determines whether a given CSS property, in some prefixed form,
   * is supported by the browser.
   *
   * ```js
   * testAllProps('boxSizing')  // true
   * ```
   *
   * It can optionally be given a CSS value in string form to test if a property
   * value is valid
   *
   * ```js
   * testAllProps('display', 'block') // true
   * testAllProps('display', 'penguin') // false
   * ```
   *
   * A boolean can be passed as a third parameter to skip the value check when
   * native detection (@supports) isn't available.
   *
   * ```js
   * testAllProps('shapeOutside', 'content-box', true);
   * ```
   */

  function testAllProps(prop, value, skipValueTest) {
    return testPropsAll(prop, undefined, undefined, value, skipValueTest);
  }
  ModernizrProto.testAllProps = testAllProps;

/*!
{
  "name": "CSS Filters",
  "property": "cssfilters",
  "caniuse": "css-filters",
  "polyfills": ["polyfilter"],
  "tags": ["css"],
  "builderAliases": ["css_filters"],
  "notes": [{
    "name": "MDN article on CSS filters",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
  }]
}
!*/

  Modernizr.addTest('cssfilters', function() {
    if (Modernizr.supports) {
      return testAllProps('filter', 'blur(2px)');
    } else {
      var el = createElement('a');
      el.style.cssText = prefixes.join('filter:blur(2px); ');
      // https://github.com/Modernizr/Modernizr/issues/615
      // documentMode is needed for false positives in oldIE, please see issue above
      return !!el.style.length && ((document.documentMode === undefined || document.documentMode > 9));
    }
  });


/*!
{
  "name": "Flexbox",
  "property": "flexbox",
  "caniuse": "flexbox",
  "tags": ["css"],
  "notes": [{
    "name": "The _new_ flexbox",
    "href": "http://dev.w3.org/csswg/css3-flexbox"
  }],
  "warnings": [
    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
  ]
}
!*/
/* DOC
Detects support for the Flexible Box Layout model, a.k.a. Flexbox, which allows easy manipulation of layout order and sizing within a container.
*/

  Modernizr.addTest('flexbox', testAllProps('flexBasis', '1px', true));

/*!
{
  "name": "CSS Mask",
  "caniuse": "css-masks",
  "property": "cssmask",
  "tags": ["css"],
  "builderAliases": ["css_mask"],
  "notes": [
    {
      "name": "Webkit blog on CSS Masks",
      "href": "https://webkit.org/blog/181/css-masks/"
    },
    {
      "name": "Safari Docs",
      "href": "https://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Masks/Masks.html"
    },
    {
      "name": "CSS SVG mask",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/mask"
    },
    {
      "name": "Combine with clippaths for awesomeness",
      "href": "https://generic.cx/for/webkit/test.html"
    }
  ]
}
!*/

  Modernizr.addTest('cssmask', testAllProps('maskRepeat', 'repeat-x', true));


  // Run each test
  testRunner();

  // Remove the "no-js" class if it exists
  setClasses(classes);

  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;


;

})(window, document);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * https://github.com/paulmillr/es6-shim
 * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
 *   and contributors,  MIT License
 * es6-shim: v0.35.4
 * see https://github.com/paulmillr/es6-shim/blob/0.35.3/LICENSE
 * Details and documentation:
 * https://github.com/paulmillr/es6-shim/
 */
(function(e,t){if(true){!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else {}})(this,function(){"use strict";var e=Function.call.bind(Function.apply);var t=Function.call.bind(Function.call);var r=Array.isArray;var n=Object.keys;var o=function notThunker(t){return function notThunk(){return!e(t,this,arguments)}};var i=function(e){try{e();return false}catch(t){return true}};var a=function valueOrFalseIfThrows(e){try{return e()}catch(t){return false}};var u=o(i);var f=function(){return!i(function(){return Object.defineProperty({},"x",{get:function(){}})})};var s=!!Object.defineProperty&&f();var c=function foo(){}.name==="foo";var l=Function.call.bind(Array.prototype.forEach);var p=Function.call.bind(Array.prototype.reduce);var v=Function.call.bind(Array.prototype.filter);var y=Function.call.bind(Array.prototype.some);var h=function(e,t,r,n){if(!n&&t in e){return}if(s){Object.defineProperty(e,t,{configurable:true,enumerable:false,writable:true,value:r})}else{e[t]=r}};var b=function(e,t,r){l(n(t),function(n){var o=t[n];h(e,n,o,!!r)})};var g=Function.call.bind(Object.prototype.toString);var d= false?undefined:function IsCallableFast(e){return typeof e==="function"};var m={getter:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}Object.defineProperty(e,t,{configurable:true,enumerable:false,get:r})},proxy:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,{configurable:n.configurable,enumerable:n.enumerable,get:function getKey(){return e[t]},set:function setKey(r){e[t]=r}})},redefine:function(e,t,r){if(s){var n=Object.getOwnPropertyDescriptor(e,t);n.value=r;Object.defineProperty(e,t,n)}else{e[t]=r}},defineByDescriptor:function(e,t,r){if(s){Object.defineProperty(e,t,r)}else if("value"in r){e[t]=r.value}},preserveToString:function(e,t){if(t&&d(t.toString)){h(e,"toString",t.toString.bind(t),true)}}};var O=Object.create||function(e,t){var r=function Prototype(){};r.prototype=e;var o=new r;if(typeof t!=="undefined"){n(t).forEach(function(e){m.defineByDescriptor(o,e,t[e])})}return o};var w=function(e,t){if(!Object.setPrototypeOf){return false}return a(function(){var r=function Subclass(t){var r=new e(t);Object.setPrototypeOf(r,Subclass.prototype);return r};Object.setPrototypeOf(r,e);r.prototype=O(e.prototype,{constructor:{value:r}});return t(r)})};var j=function(){if(typeof self!=="undefined"){return self}if(typeof window!=="undefined"){return window}if(typeof global!=="undefined"){return global}throw new Error("unable to locate global object")};var S=j();var T=S.isFinite;var I=Function.call.bind(String.prototype.indexOf);var E=Function.apply.bind(Array.prototype.indexOf);var P=Function.call.bind(Array.prototype.concat);var C=Function.call.bind(String.prototype.slice);var M=Function.call.bind(Array.prototype.push);var x=Function.apply.bind(Array.prototype.push);var N=Function.call.bind(Array.prototype.join);var A=Function.call.bind(Array.prototype.shift);var R=Math.max;var _=Math.min;var k=Math.floor;var L=Math.abs;var F=Math.exp;var D=Math.log;var z=Math.sqrt;var q=Function.call.bind(Object.prototype.hasOwnProperty);var W;var G=function(){};var H=S.Map;var V=H&&H.prototype["delete"];var B=H&&H.prototype.get;var U=H&&H.prototype.has;var $=H&&H.prototype.set;var J=S.Symbol||{};var X=J.species||"@@species";var K=Number.isNaN||function isNaN(e){return e!==e};var Z=Number.isFinite||function isFinite(e){return typeof e==="number"&&T(e)};var Y=d(Math.sign)?Math.sign:function sign(e){var t=Number(e);if(t===0){return t}if(K(t)){return t}return t<0?-1:1};var Q=function log1p(e){var t=Number(e);if(t<-1||K(t)){return NaN}if(t===0||t===Infinity){return t}if(t===-1){return-Infinity}return 1+t-1===0?t:t*(D(1+t)/(1+t-1))};var ee=function isArguments(e){return g(e)==="[object Arguments]"};var te=function isArguments(e){return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&g(e)!=="[object Array]"&&g(e.callee)==="[object Function]"};var re=ee(arguments)?ee:te;var ne={primitive:function(e){return e===null||typeof e!=="function"&&typeof e!=="object"},string:function(e){return g(e)==="[object String]"},regex:function(e){return g(e)==="[object RegExp]"},symbol:function(e){return typeof S.Symbol==="function"&&typeof e==="symbol"}};var oe=function overrideNative(e,t,r){var n=e[t];h(e,t,r,true);m.preserveToString(e[t],n)};var ie=typeof J==="function"&&typeof J["for"]==="function"&&ne.symbol(J());var ae=ne.symbol(J.iterator)?J.iterator:"_es6-shim iterator_";if(S.Set&&typeof(new S.Set)["@@iterator"]==="function"){ae="@@iterator"}if(!S.Reflect){h(S,"Reflect",{},true)}var ue=S.Reflect;var fe=String;var se=typeof document==="undefined"||!document?null:document.all;var ce=se==null?function isNullOrUndefined(e){return e==null}:function isNullOrUndefinedAndNotDocumentAll(e){return e==null&&e!==se};var le={Call:function Call(t,r){var n=arguments.length>2?arguments[2]:[];if(!le.IsCallable(t)){throw new TypeError(t+" is not a function")}return e(t,r,n)},RequireObjectCoercible:function(e,t){if(ce(e)){throw new TypeError(t||"Cannot call method on "+e)}return e},TypeIsObject:function(e){if(e===void 0||e===null||e===true||e===false){return false}return typeof e==="function"||typeof e==="object"||e===se},ToObject:function(e,t){return Object(le.RequireObjectCoercible(e,t))},IsCallable:d,IsConstructor:function(e){return le.IsCallable(e)},ToInt32:function(e){return le.ToNumber(e)>>0},ToUint32:function(e){return le.ToNumber(e)>>>0},ToNumber:function(e){if(ie&&g(e)==="[object Symbol]"){throw new TypeError("Cannot convert a Symbol value to a number")}return+e},ToInteger:function(e){var t=le.ToNumber(e);if(K(t)){return 0}if(t===0||!Z(t)){return t}return(t>0?1:-1)*k(L(t))},ToLength:function(e){var t=le.ToInteger(e);if(t<=0){return 0}if(t>Number.MAX_SAFE_INTEGER){return Number.MAX_SAFE_INTEGER}return t},SameValue:function(e,t){if(e===t){if(e===0){return 1/e===1/t}return true}return K(e)&&K(t)},SameValueZero:function(e,t){return e===t||K(e)&&K(t)},IsIterable:function(e){return le.TypeIsObject(e)&&(typeof e[ae]!=="undefined"||re(e))},GetIterator:function(e){if(re(e)){return new W(e,"value")}var t=le.GetMethod(e,ae);if(!le.IsCallable(t)){throw new TypeError("value is not an iterable")}var r=le.Call(t,e);if(!le.TypeIsObject(r)){throw new TypeError("bad iterator")}return r},GetMethod:function(e,t){var r=le.ToObject(e)[t];if(ce(r)){return void 0}if(!le.IsCallable(r)){throw new TypeError("Method not callable: "+t)}return r},IteratorComplete:function(e){return!!e.done},IteratorClose:function(e,t){var r=le.GetMethod(e,"return");if(r===void 0){return}var n,o;try{n=le.Call(r,e)}catch(i){o=i}if(t){return}if(o){throw o}if(!le.TypeIsObject(n)){throw new TypeError("Iterator's return method returned a non-object.")}},IteratorNext:function(e){var t=arguments.length>1?e.next(arguments[1]):e.next();if(!le.TypeIsObject(t)){throw new TypeError("bad iterator")}return t},IteratorStep:function(e){var t=le.IteratorNext(e);var r=le.IteratorComplete(t);return r?false:t},Construct:function(e,t,r,n){var o=typeof r==="undefined"?e:r;if(!n&&ue.construct){return ue.construct(e,t,o)}var i=o.prototype;if(!le.TypeIsObject(i)){i=Object.prototype}var a=O(i);var u=le.Call(e,a,t);return le.TypeIsObject(u)?u:a},SpeciesConstructor:function(e,t){var r=e.constructor;if(r===void 0){return t}if(!le.TypeIsObject(r)){throw new TypeError("Bad constructor")}var n=r[X];if(ce(n)){return t}if(!le.IsConstructor(n)){throw new TypeError("Bad @@species")}return n},CreateHTML:function(e,t,r,n){var o=le.ToString(e);var i="<"+t;if(r!==""){var a=le.ToString(n);var u=a.replace(/"/g,"&quot;");i+=" "+r+'="'+u+'"'}var f=i+">";var s=f+o;return s+"</"+t+">"},IsRegExp:function IsRegExp(e){if(!le.TypeIsObject(e)){return false}var t=e[J.match];if(typeof t!=="undefined"){return!!t}return ne.regex(e)},ToString:function ToString(e){if(ie&&g(e)==="[object Symbol]"){throw new TypeError("Cannot convert a Symbol value to a number")}return fe(e)}};if(s&&ie){var pe=function defineWellKnownSymbol(e){if(ne.symbol(J[e])){return J[e]}var t=J["for"]("Symbol."+e);Object.defineProperty(J,e,{configurable:false,enumerable:false,writable:false,value:t});return t};if(!ne.symbol(J.search)){var ve=pe("search");var ye=String.prototype.search;h(RegExp.prototype,ve,function search(e){return le.Call(ye,e,[this])});var he=function search(e){var t=le.RequireObjectCoercible(this);if(!ce(e)){var r=le.GetMethod(e,ve);if(typeof r!=="undefined"){return le.Call(r,e,[t])}}return le.Call(ye,t,[le.ToString(e)])};oe(String.prototype,"search",he)}if(!ne.symbol(J.replace)){var be=pe("replace");var ge=String.prototype.replace;h(RegExp.prototype,be,function replace(e,t){return le.Call(ge,e,[this,t])});var de=function replace(e,t){var r=le.RequireObjectCoercible(this);if(!ce(e)){var n=le.GetMethod(e,be);if(typeof n!=="undefined"){return le.Call(n,e,[r,t])}}return le.Call(ge,r,[le.ToString(e),t])};oe(String.prototype,"replace",de)}if(!ne.symbol(J.split)){var me=pe("split");var Oe=String.prototype.split;h(RegExp.prototype,me,function split(e,t){return le.Call(Oe,e,[this,t])});var we=function split(e,t){var r=le.RequireObjectCoercible(this);if(!ce(e)){var n=le.GetMethod(e,me);if(typeof n!=="undefined"){return le.Call(n,e,[r,t])}}return le.Call(Oe,r,[le.ToString(e),t])};oe(String.prototype,"split",we)}var je=ne.symbol(J.match);var Se=je&&function(){var e={};e[J.match]=function(){return 42};return"a".match(e)!==42}();if(!je||Se){var Te=pe("match");var Ie=String.prototype.match;h(RegExp.prototype,Te,function match(e){return le.Call(Ie,e,[this])});var Ee=function match(e){var t=le.RequireObjectCoercible(this);if(!ce(e)){var r=le.GetMethod(e,Te);if(typeof r!=="undefined"){return le.Call(r,e,[t])}}return le.Call(Ie,t,[le.ToString(e)])};oe(String.prototype,"match",Ee)}}var Pe=function wrapConstructor(e,t,r){m.preserveToString(t,e);if(Object.setPrototypeOf){Object.setPrototypeOf(e,t)}if(s){l(Object.getOwnPropertyNames(e),function(n){if(n in G||r[n]){return}m.proxy(e,n,t)})}else{l(Object.keys(e),function(n){if(n in G||r[n]){return}t[n]=e[n]})}t.prototype=e.prototype;m.redefine(e.prototype,"constructor",t)};var Ce=function(){return this};var Me=function(e){if(s&&!q(e,X)){m.getter(e,X,Ce)}};var xe=function(e,t){var r=t||function iterator(){return this};h(e,ae,r);if(!e[ae]&&ne.symbol(ae)){e[ae]=r}};var Ne=function createDataProperty(e,t,r){if(s){Object.defineProperty(e,t,{configurable:true,enumerable:true,writable:true,value:r})}else{e[t]=r}};var Ae=function createDataPropertyOrThrow(e,t,r){Ne(e,t,r);if(!le.SameValue(e[t],r)){throw new TypeError("property is nonconfigurable")}};var Re=function(e,t,r,n){if(!le.TypeIsObject(e)){throw new TypeError("Constructor requires `new`: "+t.name)}var o=t.prototype;if(!le.TypeIsObject(o)){o=r}var i=O(o);for(var a in n){if(q(n,a)){var u=n[a];h(i,a,u,true)}}return i};if(String.fromCodePoint&&String.fromCodePoint.length!==1){var _e=String.fromCodePoint;oe(String,"fromCodePoint",function fromCodePoint(e){return le.Call(_e,this,arguments)})}var ke={fromCodePoint:function fromCodePoint(e){var t=[];var r;for(var n=0,o=arguments.length;n<o;n++){r=Number(arguments[n]);if(!le.SameValue(r,le.ToInteger(r))||r<0||r>1114111){throw new RangeError("Invalid code point "+r)}if(r<65536){M(t,String.fromCharCode(r))}else{r-=65536;M(t,String.fromCharCode((r>>10)+55296));M(t,String.fromCharCode(r%1024+56320))}}return N(t,"")},raw:function raw(e){var t=arguments.length-1;var r=le.ToObject(e,"bad template");var raw=le.ToObject(r.raw,"bad raw value");var n=raw.length;var o=le.ToLength(n);if(o<=0){return""}var i=[];var a=0;var u,f,s,c;while(a<o){u=le.ToString(a);s=le.ToString(raw[u]);M(i,s);if(a+1>=o){break}f=a+1<arguments.length?arguments[a+1]:"";c=le.ToString(f);M(i,c);a+=1}return N(i,"")}};if(String.raw&&String.raw({raw:{0:"x",1:"y",length:2}})!=="xy"){oe(String,"raw",ke.raw)}b(String,ke);var Le=function repeat(e,t){if(t<1){return""}if(t%2){return repeat(e,t-1)+e}var r=repeat(e,t/2);return r+r};var Fe=Infinity;var De={repeat:function repeat(e){var t=le.ToString(le.RequireObjectCoercible(this));var r=le.ToInteger(e);if(r<0||r>=Fe){throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")}return Le(t,r)},startsWith:function startsWith(e){var t=le.ToString(le.RequireObjectCoercible(this));if(le.IsRegExp(e)){throw new TypeError('Cannot call method "startsWith" with a regex')}var r=le.ToString(e);var n;if(arguments.length>1){n=arguments[1]}var o=R(le.ToInteger(n),0);return C(t,o,o+r.length)===r},endsWith:function endsWith(e){var t=le.ToString(le.RequireObjectCoercible(this));if(le.IsRegExp(e)){throw new TypeError('Cannot call method "endsWith" with a regex')}var r=le.ToString(e);var n=t.length;var o;if(arguments.length>1){o=arguments[1]}var i=typeof o==="undefined"?n:le.ToInteger(o);var a=_(R(i,0),n);return C(t,a-r.length,a)===r},includes:function includes(e){if(le.IsRegExp(e)){throw new TypeError('"includes" does not accept a RegExp')}var t=le.ToString(e);var r;if(arguments.length>1){r=arguments[1]}return I(this,t,r)!==-1},codePointAt:function codePointAt(e){var t=le.ToString(le.RequireObjectCoercible(this));var r=le.ToInteger(e);var n=t.length;if(r>=0&&r<n){var o=t.charCodeAt(r);var i=r+1===n;if(o<55296||o>56319||i){return o}var a=t.charCodeAt(r+1);if(a<56320||a>57343){return o}return(o-55296)*1024+(a-56320)+65536}}};if(String.prototype.includes&&"a".includes("a",Infinity)!==false){oe(String.prototype,"includes",De.includes)}if(String.prototype.startsWith&&String.prototype.endsWith){var ze=i(function(){return"/a/".startsWith(/a/)});var qe=a(function(){return"abc".startsWith("a",Infinity)===false});if(!ze||!qe){oe(String.prototype,"startsWith",De.startsWith);oe(String.prototype,"endsWith",De.endsWith)}}if(ie){var We=a(function(){var e=/a/;e[J.match]=false;return"/a/".startsWith(e)});if(!We){oe(String.prototype,"startsWith",De.startsWith)}var Ge=a(function(){var e=/a/;e[J.match]=false;return"/a/".endsWith(e)});if(!Ge){oe(String.prototype,"endsWith",De.endsWith)}var He=a(function(){var e=/a/;e[J.match]=false;return"/a/".includes(e)});if(!He){oe(String.prototype,"includes",De.includes)}}b(String.prototype,De);var Ve=["\t\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join("");var Be=new RegExp("(^["+Ve+"]+)|(["+Ve+"]+$)","g");var Ue=function trim(){return le.ToString(le.RequireObjectCoercible(this)).replace(Be,"")};var $e=["\x85","\u200b","\ufffe"].join("");var Je=new RegExp("["+$e+"]","g");var Xe=/^[-+]0x[0-9a-f]+$/i;var Ke=$e.trim().length!==$e.length;h(String.prototype,"trim",Ue,Ke);var Ze=function(e){return{value:e,done:arguments.length===0}};var Ye=function(e){le.RequireObjectCoercible(e);this._s=le.ToString(e);this._i=0};Ye.prototype.next=function(){var e=this._s;var t=this._i;if(typeof e==="undefined"||t>=e.length){this._s=void 0;return Ze()}var r=e.charCodeAt(t);var n,o;if(r<55296||r>56319||t+1===e.length){o=1}else{n=e.charCodeAt(t+1);o=n<56320||n>57343?1:2}this._i=t+o;return Ze(e.substr(t,o))};xe(Ye.prototype);xe(String.prototype,function(){return new Ye(this)});var Qe={from:function from(e){var r=this;var n;if(arguments.length>1){n=arguments[1]}var o,i;if(typeof n==="undefined"){o=false}else{if(!le.IsCallable(n)){throw new TypeError("Array.from: when provided, the second argument must be a function")}if(arguments.length>2){i=arguments[2]}o=true}var a=typeof(re(e)||le.GetMethod(e,ae))!=="undefined";var u,f,s;if(a){f=le.IsConstructor(r)?Object(new r):[];var c=le.GetIterator(e);var l,p;s=0;while(true){l=le.IteratorStep(c);if(l===false){break}p=l.value;try{if(o){p=typeof i==="undefined"?n(p,s):t(n,i,p,s)}f[s]=p}catch(v){le.IteratorClose(c,true);throw v}s+=1}u=s}else{var y=le.ToObject(e);u=le.ToLength(y.length);f=le.IsConstructor(r)?Object(new r(u)):new Array(u);var h;for(s=0;s<u;++s){h=y[s];if(o){h=typeof i==="undefined"?n(h,s):t(n,i,h,s)}Ae(f,s,h)}}f.length=u;return f},of:function of(){var e=arguments.length;var t=this;var n=r(t)||!le.IsCallable(t)?new Array(e):le.Construct(t,[e]);for(var o=0;o<e;++o){Ae(n,o,arguments[o])}n.length=e;return n}};b(Array,Qe);Me(Array);W=function(e,t){this.i=0;this.array=e;this.kind=t};b(W.prototype,{next:function(){var e=this.i;var t=this.array;if(!(this instanceof W)){throw new TypeError("Not an ArrayIterator")}if(typeof t!=="undefined"){var r=le.ToLength(t.length);if(e<r){var n=this.kind;var o;if(n==="key"){o=e}else if(n==="value"){o=t[e]}else if(n==="entry"){o=[e,t[e]]}this.i=e+1;return Ze(o)}}this.array=void 0;return Ze()}});xe(W.prototype);var et=Array.of===Qe.of||function(){var e=function Foo(e){this.length=e};e.prototype=[];var t=Array.of.apply(e,[1,2]);return t instanceof e&&t.length===2}();if(!et){oe(Array,"of",Qe.of)}var tt={copyWithin:function copyWithin(e,t){var r=le.ToObject(this);var n=le.ToLength(r.length);var o=le.ToInteger(e);var i=le.ToInteger(t);var a=o<0?R(n+o,0):_(o,n);var u=i<0?R(n+i,0):_(i,n);var f;if(arguments.length>2){f=arguments[2]}var s=typeof f==="undefined"?n:le.ToInteger(f);var c=s<0?R(n+s,0):_(s,n);var l=_(c-u,n-a);var p=1;if(u<a&&a<u+l){p=-1;u+=l-1;a+=l-1}while(l>0){if(u in r){r[a]=r[u]}else{delete r[a]}u+=p;a+=p;l-=1}return r},fill:function fill(e){var t;if(arguments.length>1){t=arguments[1]}var r;if(arguments.length>2){r=arguments[2]}var n=le.ToObject(this);var o=le.ToLength(n.length);t=le.ToInteger(typeof t==="undefined"?0:t);r=le.ToInteger(typeof r==="undefined"?o:r);var i=t<0?R(o+t,0):_(t,o);var a=r<0?o+r:r;for(var u=i;u<o&&u<a;++u){n[u]=e}return n},find:function find(e){var r=le.ToObject(this);var n=le.ToLength(r.length);if(!le.IsCallable(e)){throw new TypeError("Array#find: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0,a;i<n;i++){a=r[i];if(o){if(t(e,o,a,i,r)){return a}}else if(e(a,i,r)){return a}}},findIndex:function findIndex(e){var r=le.ToObject(this);var n=le.ToLength(r.length);if(!le.IsCallable(e)){throw new TypeError("Array#findIndex: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0;i<n;i++){if(o){if(t(e,o,r[i],i,r)){return i}}else if(e(r[i],i,r)){return i}}return-1},keys:function keys(){return new W(this,"key")},values:function values(){return new W(this,"value")},entries:function entries(){return new W(this,"entry")}};if(Array.prototype.keys&&!le.IsCallable([1].keys().next)){delete Array.prototype.keys}if(Array.prototype.entries&&!le.IsCallable([1].entries().next)){delete Array.prototype.entries}if(Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[ae]){b(Array.prototype,{values:Array.prototype[ae]});if(ne.symbol(J.unscopables)){Array.prototype[J.unscopables].values=true}}if(c&&Array.prototype.values&&Array.prototype.values.name!=="values"){var rt=Array.prototype.values;oe(Array.prototype,"values",function values(){return le.Call(rt,this,arguments)});h(Array.prototype,ae,Array.prototype.values,true)}b(Array.prototype,tt);if(1/[true].indexOf(true,-0)<0){h(Array.prototype,"indexOf",function indexOf(e){var t=E(this,arguments);if(t===0&&1/t<0){return 0}return t},true)}xe(Array.prototype,function(){return this.values()});if(Object.getPrototypeOf){xe(Object.getPrototypeOf([].values()))}var nt=function(){return a(function(){return Array.from({length:-1}).length===0})}();var ot=function(){var e=Array.from([0].entries());return e.length===1&&r(e[0])&&e[0][0]===0&&e[0][1]===0}();if(!nt||!ot){oe(Array,"from",Qe.from)}var it=function(){return a(function(){return Array.from([0],void 0)})}();if(!it){var at=Array.from;oe(Array,"from",function from(e){if(arguments.length>1&&typeof arguments[1]!=="undefined"){return le.Call(at,this,arguments)}else{return t(at,this,e)}})}var ut=-(Math.pow(2,32)-1);var ft=function(e,r){var n={length:ut};n[r?(n.length>>>0)-1:0]=true;return a(function(){t(e,n,function(){throw new RangeError("should not reach here")},[]);return true})};if(!ft(Array.prototype.forEach)){var st=Array.prototype.forEach;oe(Array.prototype,"forEach",function forEach(e){return le.Call(st,this.length>=0?this:[],arguments)})}if(!ft(Array.prototype.map)){var ct=Array.prototype.map;oe(Array.prototype,"map",function map(e){return le.Call(ct,this.length>=0?this:[],arguments)})}if(!ft(Array.prototype.filter)){var lt=Array.prototype.filter;oe(Array.prototype,"filter",function filter(e){return le.Call(lt,this.length>=0?this:[],arguments)})}if(!ft(Array.prototype.some)){var pt=Array.prototype.some;oe(Array.prototype,"some",function some(e){return le.Call(pt,this.length>=0?this:[],arguments)})}if(!ft(Array.prototype.every)){var vt=Array.prototype.every;oe(Array.prototype,"every",function every(e){return le.Call(vt,this.length>=0?this:[],arguments)})}if(!ft(Array.prototype.reduce)){var yt=Array.prototype.reduce;oe(Array.prototype,"reduce",function reduce(e){return le.Call(yt,this.length>=0?this:[],arguments)})}if(!ft(Array.prototype.reduceRight,true)){var ht=Array.prototype.reduceRight;oe(Array.prototype,"reduceRight",function reduceRight(e){return le.Call(ht,this.length>=0?this:[],arguments)})}var bt=Number("0o10")!==8;var gt=Number("0b10")!==2;var dt=y($e,function(e){return Number(e+0+e)===0});if(bt||gt||dt){var mt=Number;var Ot=/^0b[01]+$/i;var wt=/^0o[0-7]+$/i;var jt=Ot.test.bind(Ot);var St=wt.test.bind(wt);var Tt=function(e,t){var r;if(typeof e.valueOf==="function"){r=e.valueOf();if(ne.primitive(r)){return r}}if(typeof e.toString==="function"){r=e.toString();if(ne.primitive(r)){return r}}throw new TypeError("No default value")};var It=Je.test.bind(Je);var Et=Xe.test.bind(Xe);var Pt=function(){var e=function Number(t){var r;if(arguments.length>0){r=ne.primitive(t)?t:Tt(t,"number")}else{r=0}if(typeof r==="string"){r=le.Call(Ue,r);if(jt(r)){r=parseInt(C(r,2),2)}else if(St(r)){r=parseInt(C(r,2),8)}else if(It(r)||Et(r)){r=NaN}}var n=this;var o=a(function(){mt.prototype.valueOf.call(n);return true});if(n instanceof e&&!o){return new mt(r)}return mt(r)};return e}();Pe(mt,Pt,{});b(Pt,{NaN:mt.NaN,MAX_VALUE:mt.MAX_VALUE,MIN_VALUE:mt.MIN_VALUE,NEGATIVE_INFINITY:mt.NEGATIVE_INFINITY,POSITIVE_INFINITY:mt.POSITIVE_INFINITY});Number=Pt;m.redefine(S,"Number",Pt)}var Ct=Math.pow(2,53)-1;b(Number,{MAX_SAFE_INTEGER:Ct,MIN_SAFE_INTEGER:-Ct,EPSILON:2.220446049250313e-16,parseInt:S.parseInt,parseFloat:S.parseFloat,isFinite:Z,isInteger:function isInteger(e){return Z(e)&&le.ToInteger(e)===e},isSafeInteger:function isSafeInteger(e){return Number.isInteger(e)&&L(e)<=Number.MAX_SAFE_INTEGER},isNaN:K});h(Number,"parseInt",S.parseInt,Number.parseInt!==S.parseInt);if([,1].find(function(){return true})===1){oe(Array.prototype,"find",tt.find)}if([,1].findIndex(function(){return true})!==0){oe(Array.prototype,"findIndex",tt.findIndex)}var Mt=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable);var xt=function ensureEnumerable(e,t){if(s&&Mt(e,t)){Object.defineProperty(e,t,{enumerable:false})}};var Nt=function sliceArgs(){var e=Number(this);var t=arguments.length;var r=t-e;var n=new Array(r<0?0:r);for(var o=e;o<t;++o){n[o-e]=arguments[o]}return n};var At=function assignTo(e){return function assignToSource(t,r){t[r]=e[r];return t}};var Rt=function(e,t){var r=n(Object(t));var o;if(le.IsCallable(Object.getOwnPropertySymbols)){o=v(Object.getOwnPropertySymbols(Object(t)),Mt(t))}return p(P(r,o||[]),At(t),e)};var _t={assign:function(e,t){var r=le.ToObject(e,"Cannot convert undefined or null to object");return p(le.Call(Nt,1,arguments),Rt,r)},is:function is(e,t){return le.SameValue(e,t)}};var kt=Object.assign&&Object.preventExtensions&&function(){var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return e[1]==="y"}}();if(kt){oe(Object,"assign",_t.assign)}b(Object,_t);if(s){var Lt={setPrototypeOf:function(e,r){var n;var o=function(e,t){if(!le.TypeIsObject(e)){throw new TypeError("cannot set prototype on a non-object")}if(!(t===null||le.TypeIsObject(t))){throw new TypeError("can only set prototype to an object or null"+t)}};var i=function(e,r){o(e,r);t(n,e,r);return e};try{n=e.getOwnPropertyDescriptor(e.prototype,r).set;t(n,{},null)}catch(a){if(e.prototype!=={}[r]){return}n=function(e){this[r]=e};i.polyfill=i(i({},null),e.prototype)instanceof e}return i}(Object,"__proto__")};b(Object,Lt)}if(Object.setPrototypeOf&&Object.getPrototypeOf&&Object.getPrototypeOf(Object.setPrototypeOf({},null))!==null&&Object.getPrototypeOf(Object.create(null))===null){(function(){var e=Object.create(null);var t=Object.getPrototypeOf;var r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=t(r);return n===e?null:n};Object.setPrototypeOf=function(t,n){var o=n===null?e:n;return r(t,o)};Object.setPrototypeOf.polyfill=false})()}var Ft=!i(function(){return Object.keys("foo")});if(!Ft){var Dt=Object.keys;oe(Object,"keys",function keys(e){return Dt(le.ToObject(e))});n=Object.keys}var zt=i(function(){return Object.keys(/a/g)});if(zt){var qt=Object.keys;oe(Object,"keys",function keys(e){if(ne.regex(e)){var t=[];for(var r in e){if(q(e,r)){M(t,r)}}return t}return qt(e)});n=Object.keys}if(Object.getOwnPropertyNames){var Wt=!i(function(){return Object.getOwnPropertyNames("foo")});if(!Wt){var Gt=typeof window==="object"?Object.getOwnPropertyNames(window):[];var Ht=Object.getOwnPropertyNames;oe(Object,"getOwnPropertyNames",function getOwnPropertyNames(e){var t=le.ToObject(e);if(g(t)==="[object Window]"){try{return Ht(t)}catch(r){return P([],Gt)}}return Ht(t)})}}if(Object.getOwnPropertyDescriptor){var Vt=!i(function(){return Object.getOwnPropertyDescriptor("foo","bar")});if(!Vt){var Bt=Object.getOwnPropertyDescriptor;oe(Object,"getOwnPropertyDescriptor",function getOwnPropertyDescriptor(e,t){return Bt(le.ToObject(e),t)})}}if(Object.seal){var Ut=!i(function(){return Object.seal("foo")});if(!Ut){var $t=Object.seal;oe(Object,"seal",function seal(e){if(!le.TypeIsObject(e)){return e}return $t(e)})}}if(Object.isSealed){var Jt=!i(function(){return Object.isSealed("foo")});if(!Jt){var Xt=Object.isSealed;oe(Object,"isSealed",function isSealed(e){if(!le.TypeIsObject(e)){return true}return Xt(e)})}}if(Object.freeze){var Kt=!i(function(){return Object.freeze("foo")});if(!Kt){var Zt=Object.freeze;oe(Object,"freeze",function freeze(e){if(!le.TypeIsObject(e)){return e}return Zt(e)})}}if(Object.isFrozen){var Yt=!i(function(){return Object.isFrozen("foo")});if(!Yt){var Qt=Object.isFrozen;oe(Object,"isFrozen",function isFrozen(e){if(!le.TypeIsObject(e)){return true}return Qt(e)})}}if(Object.preventExtensions){var er=!i(function(){return Object.preventExtensions("foo")});if(!er){var tr=Object.preventExtensions;oe(Object,"preventExtensions",function preventExtensions(e){if(!le.TypeIsObject(e)){return e}return tr(e)})}}if(Object.isExtensible){var rr=!i(function(){return Object.isExtensible("foo")});if(!rr){var nr=Object.isExtensible;oe(Object,"isExtensible",function isExtensible(e){if(!le.TypeIsObject(e)){return false}return nr(e)})}}if(Object.getPrototypeOf){var or=!i(function(){return Object.getPrototypeOf("foo")});if(!or){var ir=Object.getPrototypeOf;oe(Object,"getPrototypeOf",function getPrototypeOf(e){return ir(le.ToObject(e))})}}var ar=s&&function(){var e=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags");return e&&le.IsCallable(e.get)}();if(s&&!ar){var ur=function flags(){if(!le.TypeIsObject(this)){throw new TypeError("Method called on incompatible type: must be an object.")}var e="";if(this.global){e+="g"}if(this.ignoreCase){e+="i"}if(this.multiline){e+="m"}if(this.unicode){e+="u"}if(this.sticky){e+="y"}return e};m.getter(RegExp.prototype,"flags",ur)}var fr=s&&a(function(){return String(new RegExp(/a/g,"i"))==="/a/i"});var sr=ie&&s&&function(){var e=/./;e[J.match]=false;return RegExp(e)===e}();var cr=a(function(){return RegExp.prototype.toString.call({source:"abc"})==="/abc/"});var lr=cr&&a(function(){return RegExp.prototype.toString.call({source:"a",flags:"b"})==="/a/b"});if(!cr||!lr){var pr=RegExp.prototype.toString;h(RegExp.prototype,"toString",function toString(){var e=le.RequireObjectCoercible(this);if(ne.regex(e)){return t(pr,e)}var r=fe(e.source);var n=fe(e.flags);return"/"+r+"/"+n},true);m.preserveToString(RegExp.prototype.toString,pr)}if(s&&(!fr||sr)){var vr=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags").get;var yr=Object.getOwnPropertyDescriptor(RegExp.prototype,"source")||{};var hr=function(){return this.source};var br=le.IsCallable(yr.get)?yr.get:hr;var gr=RegExp;var dr=function(){return function RegExp(e,t){var r=le.IsRegExp(e);var n=this instanceof RegExp;if(!n&&r&&typeof t==="undefined"&&e.constructor===RegExp){return e}var o=e;var i=t;if(ne.regex(e)){o=le.Call(br,e);i=typeof t==="undefined"?le.Call(vr,e):t;return new RegExp(o,i)}else if(r){o=e.source;i=typeof t==="undefined"?e.flags:t}return new gr(e,t)}}();Pe(gr,dr,{$input:true});RegExp=dr;m.redefine(S,"RegExp",dr)}if(s){var mr={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$'"};l(n(mr),function(e){if(e in RegExp&&!(mr[e]in RegExp)){m.getter(RegExp,mr[e],function get(){return RegExp[e]})}})}Me(RegExp);var Or=1/Number.EPSILON;var wr=function roundTiesToEven(e){return e+Or-Or};var jr=Math.pow(2,-23);var Sr=Math.pow(2,127)*(2-jr);var Tr=Math.pow(2,-126);var Ir=Math.E;var Er=Math.LOG2E;var Pr=Math.LOG10E;var Cr=Number.prototype.clz;delete Number.prototype.clz;var Mr={acosh:function acosh(e){var t=Number(e);if(K(t)||e<1){return NaN}if(t===1){return 0}if(t===Infinity){return t}var r=1/(t*t);if(t<2){return Q(t-1+z(1-r)*t)}var n=t/2;return Q(n+z(1-r)*n-1)+1/Er},asinh:function asinh(e){var t=Number(e);if(t===0||!T(t)){return t}var r=L(t);var n=r*r;var o=Y(t);if(r<1){return o*Q(r+n/(z(n+1)+1))}return o*(Q(r/2+z(1+1/n)*r/2-1)+1/Er)},atanh:function atanh(e){var t=Number(e);if(t===0){return t}if(t===-1){return-Infinity}if(t===1){return Infinity}if(K(t)||t<-1||t>1){return NaN}var r=L(t);return Y(t)*Q(2*r/(1-r))/2},cbrt:function cbrt(e){var t=Number(e);if(t===0){return t}var r=t<0;var n;if(r){t=-t}if(t===Infinity){n=Infinity}else{n=F(D(t)/3);n=(t/(n*n)+2*n)/3}return r?-n:n},clz32:function clz32(e){var t=Number(e);var r=le.ToUint32(t);if(r===0){return 32}return Cr?le.Call(Cr,r):31-k(D(r+.5)*Er)},cosh:function cosh(e){var t=Number(e);if(t===0){return 1}if(K(t)){return NaN}if(!T(t)){return Infinity}var r=F(L(t)-1);return(r+1/(r*Ir*Ir))*(Ir/2)},expm1:function expm1(e){var t=Number(e);if(t===-Infinity){return-1}if(!T(t)||t===0){return t}if(L(t)>.5){return F(t)-1}var r=t;var n=0;var o=1;while(n+r!==n){n+=r;o+=1;r*=t/o}return n},hypot:function hypot(e,t){var r=0;var n=0;for(var o=0;o<arguments.length;++o){var i=L(Number(arguments[o]));if(n<i){r*=n/i*(n/i);r+=1;n=i}else{r+=i>0?i/n*(i/n):i}}return n===Infinity?Infinity:n*z(r)},log2:function log2(e){return D(e)*Er},log10:function log10(e){return D(e)*Pr},log1p:Q,sign:Y,sinh:function sinh(e){var t=Number(e);if(!T(t)||t===0){return t}var r=L(t);if(r<1){var n=Math.expm1(r);return Y(t)*n*(1+1/(n+1))/2}var o=F(r-1);return Y(t)*(o-1/(o*Ir*Ir))*(Ir/2)},tanh:function tanh(e){var t=Number(e);if(K(t)||t===0){return t}if(t>=20){return 1}if(t<=-20){return-1}return(Math.expm1(t)-Math.expm1(-t))/(F(t)+F(-t))},trunc:function trunc(e){var t=Number(e);return t<0?-k(-t):k(t)},imul:function imul(e,t){var r=le.ToUint32(e);var n=le.ToUint32(t);var o=r>>>16&65535;var i=r&65535;var a=n>>>16&65535;var u=n&65535;return i*u+(o*u+i*a<<16>>>0)|0},fround:function fround(e){var t=Number(e);if(t===0||t===Infinity||t===-Infinity||K(t)){return t}var r=Y(t);var n=L(t);if(n<Tr){return r*wr(n/Tr/jr)*Tr*jr}var o=(1+jr/Number.EPSILON)*n;var i=o-(o-n);if(i>Sr||K(i)){return r*Infinity}return r*i}};var xr=function withinULPDistance(e,t,r){return L(1-e/t)/Number.EPSILON<(r||8)};b(Math,Mr);h(Math,"sinh",Mr.sinh,Math.sinh(710)===Infinity);h(Math,"cosh",Mr.cosh,Math.cosh(710)===Infinity);h(Math,"log1p",Mr.log1p,Math.log1p(-1e-17)!==-1e-17);h(Math,"asinh",Mr.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7));
h(Math,"asinh",Mr.asinh,Math.asinh(1e300)===Infinity);h(Math,"atanh",Mr.atanh,Math.atanh(1e-300)===0);h(Math,"tanh",Mr.tanh,Math.tanh(-2e-17)!==-2e-17);h(Math,"acosh",Mr.acosh,Math.acosh(Number.MAX_VALUE)===Infinity);h(Math,"acosh",Mr.acosh,!xr(Math.acosh(1+Number.EPSILON),Math.sqrt(2*Number.EPSILON)));h(Math,"cbrt",Mr.cbrt,!xr(Math.cbrt(1e-300),1e-100));h(Math,"sinh",Mr.sinh,Math.sinh(-2e-17)!==-2e-17);var Nr=Math.expm1(10);h(Math,"expm1",Mr.expm1,Nr>22025.465794806718||Nr<22025.465794806718);h(Math,"hypot",Mr.hypot,Math.hypot(Infinity,NaN)!==Infinity);var Ar=Math.round;var Rr=Math.round(.5-Number.EPSILON/4)===0&&Math.round(-.5+Number.EPSILON/3.99)===1;var _r=Or+1;var kr=2*Or-1;var Lr=[_r,kr].every(function(e){return Math.round(e)===e});h(Math,"round",function round(e){var t=k(e);var r=t===-1?-0:t+1;return e-t<.5?t:r},!Rr||!Lr);m.preserveToString(Math.round,Ar);var Fr=Math.imul;if(Math.imul(4294967295,5)!==-5){Math.imul=Mr.imul;m.preserveToString(Math.imul,Fr)}if(Math.imul.length!==2){oe(Math,"imul",function imul(e,t){return le.Call(Fr,Math,arguments)})}var Dr=function(){var e=S.setTimeout;if(typeof e!=="function"&&typeof e!=="object"){return}le.IsPromise=function(e){if(!le.TypeIsObject(e)){return false}if(typeof e._promise==="undefined"){return false}return true};var r=function(e){if(!le.IsConstructor(e)){throw new TypeError("Bad promise constructor")}var t=this;var r=function(e,r){if(t.resolve!==void 0||t.reject!==void 0){throw new TypeError("Bad Promise implementation!")}t.resolve=e;t.reject=r};t.resolve=void 0;t.reject=void 0;t.promise=new e(r);if(!(le.IsCallable(t.resolve)&&le.IsCallable(t.reject))){throw new TypeError("Bad promise constructor")}};var n;if(typeof window!=="undefined"&&le.IsCallable(window.postMessage)){n=function(){var e=[];var t="zero-timeout-message";var r=function(r){M(e,r);window.postMessage(t,"*")};var n=function(r){if(r.source===window&&r.data===t){r.stopPropagation();if(e.length===0){return}var n=A(e);n()}};window.addEventListener("message",n,true);return r}}var o=function(){var e=S.Promise;var t=e&&e.resolve&&e.resolve();return t&&function(e){return t.then(e)}};var i=le.IsCallable(S.setImmediate)?S.setImmediate:typeof process==="object"&&process.nextTick?process.nextTick:o()||(le.IsCallable(n)?n():function(t){e(t,0)});var a=function(e){return e};var u=function(e){throw e};var f=0;var s=1;var c=2;var l=0;var p=1;var v=2;var y={};var h=function(e,t,r){i(function(){g(e,t,r)})};var g=function(e,t,r){var n,o;if(t===y){return e(r)}try{n=e(r);o=t.resolve}catch(i){n=i;o=t.reject}o(n)};var d=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.fulfillReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+l],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=s;r.reactionLength=0};var m=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.rejectReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+p],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=c;r.reactionLength=0};var O=function(e){var t=false;var r=function(r){var n;if(t){return}t=true;if(r===e){return m(e,new TypeError("Self resolution"))}if(!le.TypeIsObject(r)){return d(e,r)}try{n=r.then}catch(o){return m(e,o)}if(!le.IsCallable(n)){return d(e,r)}i(function(){j(e,r,n)})};var n=function(r){if(t){return}t=true;return m(e,r)};return{resolve:r,reject:n}};var w=function(e,r,n,o){if(e===I){t(e,r,n,o,y)}else{t(e,r,n,o)}};var j=function(e,t,r){var n=O(e);var o=n.resolve;var i=n.reject;try{w(r,t,o,i)}catch(a){i(a)}};var T,I;var E=function(){var e=function Promise(t){if(!(this instanceof e)){throw new TypeError('Constructor Promise requires "new"')}if(this&&this._promise){throw new TypeError("Bad construction")}if(!le.IsCallable(t)){throw new TypeError("not a valid resolver")}var r=Re(this,e,T,{_promise:{result:void 0,state:f,reactionLength:0,fulfillReactionHandler0:void 0,rejectReactionHandler0:void 0,reactionCapability0:void 0}});var n=O(r);var o=n.reject;try{t(n.resolve,o)}catch(i){o(i)}return r};return e}();T=E.prototype;var P=function(e,t,r,n){var o=false;return function(i){if(o){return}o=true;t[e]=i;if(--n.count===0){var a=r.resolve;a(t)}}};var C=function(e,t,r){var n=e.iterator;var o=[];var i={count:1};var a,u;var f=0;while(true){try{a=le.IteratorStep(n);if(a===false){e.done=true;break}u=a.value}catch(s){e.done=true;throw s}o[f]=void 0;var c=t.resolve(u);var l=P(f,o,r,i);i.count+=1;w(c.then,c,l,r.reject);f+=1}if(--i.count===0){var p=r.resolve;p(o)}return r.promise};var x=function(e,t,r){var n=e.iterator;var o,i,a;while(true){try{o=le.IteratorStep(n);if(o===false){e.done=true;break}i=o.value}catch(u){e.done=true;throw u}a=t.resolve(i);w(a.then,a,r.resolve,r.reject)}return r.promise};b(E,{all:function all(e){var t=this;if(!le.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=le.GetIterator(e);i={iterator:o,done:false};return C(i,t,n)}catch(a){var u=a;if(i&&!i.done){try{le.IteratorClose(o,true)}catch(f){u=f}}var s=n.reject;s(u);return n.promise}},race:function race(e){var t=this;if(!le.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=le.GetIterator(e);i={iterator:o,done:false};return x(i,t,n)}catch(a){var u=a;if(i&&!i.done){try{le.IteratorClose(o,true)}catch(f){u=f}}var s=n.reject;s(u);return n.promise}},reject:function reject(e){var t=this;if(!le.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}var n=new r(t);var o=n.reject;o(e);return n.promise},resolve:function resolve(e){var t=this;if(!le.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}if(le.IsPromise(e)){var n=e.constructor;if(n===t){return e}}var o=new r(t);var i=o.resolve;i(e);return o.promise}});b(T,{"catch":function(e){return this.then(null,e)},then:function then(e,t){var n=this;if(!le.IsPromise(n)){throw new TypeError("not a promise")}var o=le.SpeciesConstructor(n,E);var i;var b=arguments.length>2&&arguments[2]===y;if(b&&o===E){i=y}else{i=new r(o)}var g=le.IsCallable(e)?e:a;var d=le.IsCallable(t)?t:u;var m=n._promise;var O;if(m.state===f){if(m.reactionLength===0){m.fulfillReactionHandler0=g;m.rejectReactionHandler0=d;m.reactionCapability0=i}else{var w=3*(m.reactionLength-1);m[w+l]=g;m[w+p]=d;m[w+v]=i}m.reactionLength+=1}else if(m.state===s){O=m.result;h(g,i,O)}else if(m.state===c){O=m.result;h(d,i,O)}else{throw new TypeError("unexpected Promise state")}return i.promise}});y=new r(E);I=T.then;return E}();if(S.Promise){delete S.Promise.accept;delete S.Promise.defer;delete S.Promise.prototype.chain}if(typeof Dr==="function"){b(S,{Promise:Dr});var zr=w(S.Promise,function(e){return e.resolve(42).then(function(){})instanceof e});var qr=!i(function(){return S.Promise.reject(42).then(null,5).then(null,G)});var Wr=i(function(){return S.Promise.call(3,G)});var Gr=function(e){var t=e.resolve(5);t.constructor={};var r=e.resolve(t);try{r.then(null,G).then(null,G)}catch(n){return true}return t===r}(S.Promise);var Hr=s&&function(){var e=0;var t=Object.defineProperty({},"then",{get:function(){e+=1}});Promise.resolve(t);return e===1}();var Vr=function BadResolverPromise(e){var t=new Promise(e);e(3,function(){});this.then=t.then;this.constructor=BadResolverPromise};Vr.prototype=Promise.prototype;Vr.all=Promise.all;var Br=a(function(){return!!Vr.all([1,2])});if(!zr||!qr||!Wr||Gr||!Hr||Br){Promise=Dr;oe(S,"Promise",Dr)}if(Promise.all.length!==1){var Ur=Promise.all;oe(Promise,"all",function all(e){return le.Call(Ur,this,arguments)})}if(Promise.race.length!==1){var $r=Promise.race;oe(Promise,"race",function race(e){return le.Call($r,this,arguments)})}if(Promise.resolve.length!==1){var Jr=Promise.resolve;oe(Promise,"resolve",function resolve(e){return le.Call(Jr,this,arguments)})}if(Promise.reject.length!==1){var Xr=Promise.reject;oe(Promise,"reject",function reject(e){return le.Call(Xr,this,arguments)})}xt(Promise,"all");xt(Promise,"race");xt(Promise,"resolve");xt(Promise,"reject");Me(Promise)}var Kr=function(e){var t=n(p(e,function(e,t){e[t]=true;return e},{}));return e.join(":")===t.join(":")};var Zr=Kr(["z","a","bb"]);var Yr=Kr(["z",1,"a","3",2]);if(s){var Qr=function fastkey(e,t){if(!t&&!Zr){return null}if(ce(e)){return"^"+le.ToString(e)}else if(typeof e==="string"){return"$"+e}else if(typeof e==="number"){if(!Yr){return"n"+e}return e}else if(typeof e==="boolean"){return"b"+e}return null};var en=function emptyObject(){return Object.create?Object.create(null):{}};var tn=function addIterableToMap(e,n,o){if(r(o)||ne.string(o)){l(o,function(e){if(!le.TypeIsObject(e)){throw new TypeError("Iterator value "+e+" is not an entry object")}n.set(e[0],e[1])})}else if(o instanceof e){t(e.prototype.forEach,o,function(e,t){n.set(t,e)})}else{var i,a;if(!ce(o)){a=n.set;if(!le.IsCallable(a)){throw new TypeError("bad map")}i=le.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=le.IteratorStep(i);if(u===false){break}var f=u.value;try{if(!le.TypeIsObject(f)){throw new TypeError("Iterator value "+f+" is not an entry object")}t(a,n,f[0],f[1])}catch(s){le.IteratorClose(i,true);throw s}}}}};var rn=function addIterableToSet(e,n,o){if(r(o)||ne.string(o)){l(o,function(e){n.add(e)})}else if(o instanceof e){t(e.prototype.forEach,o,function(e){n.add(e)})}else{var i,a;if(!ce(o)){a=n.add;if(!le.IsCallable(a)){throw new TypeError("bad set")}i=le.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=le.IteratorStep(i);if(u===false){break}var f=u.value;try{t(a,n,f)}catch(s){le.IteratorClose(i,true);throw s}}}}};var nn={Map:function(){var e={};var r=function MapEntry(e,t){this.key=e;this.value=t;this.next=null;this.prev=null};r.prototype.isRemoved=function isRemoved(){return this.key===e};var n=function isMap(e){return!!e._es6map};var o=function requireMapSlot(e,t){if(!le.TypeIsObject(e)||!n(e)){throw new TypeError("Method Map.prototype."+t+" called on incompatible receiver "+le.ToString(e))}};var i=function MapIterator(e,t){o(e,"[[MapIterator]]");this.head=e._head;this.i=this.head;this.kind=t};i.prototype={isMapIterator:true,next:function next(){if(!this.isMapIterator){throw new TypeError("Not a MapIterator")}var e=this.i;var t=this.kind;var r=this.head;if(typeof this.i==="undefined"){return Ze()}while(e.isRemoved()&&e!==r){e=e.prev}var n;while(e.next!==r){e=e.next;if(!e.isRemoved()){if(t==="key"){n=e.key}else if(t==="value"){n=e.value}else{n=[e.key,e.value]}this.i=e;return Ze(n)}}this.i=void 0;return Ze()}};xe(i.prototype);var a;var u=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}if(this&&this._es6map){throw new TypeError("Bad construction")}var e=Re(this,Map,a,{_es6map:true,_head:null,_map:H?new H:null,_size:0,_storage:en()});var t=new r(null,null);t.next=t.prev=t;e._head=t;if(arguments.length>0){tn(Map,e,arguments[0])}return e};a=u.prototype;m.getter(a,"size",function(){if(typeof this._size==="undefined"){throw new TypeError("size method called on incompatible Map")}return this._size});b(a,{get:function get(e){o(this,"get");var t;var r=Qr(e,true);if(r!==null){t=this._storage[r];if(t){return t.value}else{return}}if(this._map){t=B.call(this._map,e);if(t){return t.value}else{return}}var n=this._head;var i=n;while((i=i.next)!==n){if(le.SameValueZero(i.key,e)){return i.value}}},has:function has(e){o(this,"has");var t=Qr(e,true);if(t!==null){return typeof this._storage[t]!=="undefined"}if(this._map){return U.call(this._map,e)}var r=this._head;var n=r;while((n=n.next)!==r){if(le.SameValueZero(n.key,e)){return true}}return false},set:function set(e,t){o(this,"set");var n=this._head;var i=n;var a;var u=Qr(e,true);if(u!==null){if(typeof this._storage[u]!=="undefined"){this._storage[u].value=t;return this}else{a=this._storage[u]=new r(e,t);i=n.prev}}else if(this._map){if(U.call(this._map,e)){B.call(this._map,e).value=t}else{a=new r(e,t);$.call(this._map,e,a);i=n.prev}}while((i=i.next)!==n){if(le.SameValueZero(i.key,e)){i.value=t;return this}}a=a||new r(e,t);if(le.SameValue(-0,e)){a.key=+0}a.next=this._head;a.prev=this._head.prev;a.prev.next=a;a.next.prev=a;this._size+=1;return this},"delete":function(t){o(this,"delete");var r=this._head;var n=r;var i=Qr(t,true);if(i!==null){if(typeof this._storage[i]==="undefined"){return false}n=this._storage[i].prev;delete this._storage[i]}else if(this._map){if(!U.call(this._map,t)){return false}n=B.call(this._map,t).prev;V.call(this._map,t)}while((n=n.next)!==r){if(le.SameValueZero(n.key,t)){n.key=e;n.value=e;n.prev.next=n.next;n.next.prev=n.prev;this._size-=1;return true}}return false},clear:function clear(){o(this,"clear");this._map=H?new H:null;this._size=0;this._storage=en();var t=this._head;var r=t;var n=r.next;while((r=n)!==t){r.key=e;r.value=e;n=r.next;r.next=r.prev=t}t.next=t.prev=t},keys:function keys(){o(this,"keys");return new i(this,"key")},values:function values(){o(this,"values");return new i(this,"value")},entries:function entries(){o(this,"entries");return new i(this,"key+value")},forEach:function forEach(e){o(this,"forEach");var r=arguments.length>1?arguments[1]:null;var n=this.entries();for(var i=n.next();!i.done;i=n.next()){if(r){t(e,r,i.value[1],i.value[0],this)}else{e(i.value[1],i.value[0],this)}}}});xe(a,a.entries);return u}(),Set:function(){var e=function isSet(e){return e._es6set&&typeof e._storage!=="undefined"};var r=function requireSetSlot(t,r){if(!le.TypeIsObject(t)||!e(t)){throw new TypeError("Set.prototype."+r+" called on incompatible receiver "+le.ToString(t))}};var o;var i=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}if(this&&this._es6set){throw new TypeError("Bad construction")}var e=Re(this,Set,o,{_es6set:true,"[[SetData]]":null,_storage:en()});if(!e._es6set){throw new TypeError("bad set")}if(arguments.length>0){rn(Set,e,arguments[0])}return e};o=i.prototype;var a=function(e){var t=e;if(t==="^null"){return null}else if(t==="^undefined"){return void 0}else{var r=t.charAt(0);if(r==="$"){return C(t,1)}else if(r==="n"){return+C(t,1)}else if(r==="b"){return t==="btrue"}}return+t};var u=function ensureMap(e){if(!e["[[SetData]]"]){var t=new nn.Map;e["[[SetData]]"]=t;l(n(e._storage),function(e){var r=a(e);t.set(r,r)});e["[[SetData]]"]=t}e._storage=null};m.getter(i.prototype,"size",function(){r(this,"size");if(this._storage){return n(this._storage).length}u(this);return this["[[SetData]]"].size});b(i.prototype,{has:function has(e){r(this,"has");var t;if(this._storage&&(t=Qr(e))!==null){return!!this._storage[t]}u(this);return this["[[SetData]]"].has(e)},add:function add(e){r(this,"add");var t;if(this._storage&&(t=Qr(e))!==null){this._storage[t]=true;return this}u(this);this["[[SetData]]"].set(e,e);return this},"delete":function(e){r(this,"delete");var t;if(this._storage&&(t=Qr(e))!==null){var n=q(this._storage,t);return delete this._storage[t]&&n}u(this);return this["[[SetData]]"]["delete"](e)},clear:function clear(){r(this,"clear");if(this._storage){this._storage=en()}if(this["[[SetData]]"]){this["[[SetData]]"].clear()}},values:function values(){r(this,"values");u(this);return new f(this["[[SetData]]"].values())},entries:function entries(){r(this,"entries");u(this);return new f(this["[[SetData]]"].entries())},forEach:function forEach(e){r(this,"forEach");var n=arguments.length>1?arguments[1]:null;var o=this;u(o);this["[[SetData]]"].forEach(function(r,i){if(n){t(e,n,i,i,o)}else{e(i,i,o)}})}});h(i.prototype,"keys",i.prototype.values,true);xe(i.prototype,i.prototype.values);var f=function SetIterator(e){this.it=e};f.prototype={isSetIterator:true,next:function next(){if(!this.isSetIterator){throw new TypeError("Not a SetIterator")}return this.it.next()}};xe(f.prototype);return i}()};var on=S.Set&&!Set.prototype["delete"]&&Set.prototype.remove&&Set.prototype.items&&Set.prototype.map&&Array.isArray((new Set).keys);if(on){S.Set=nn.Set}if(S.Map||S.Set){var an=a(function(){return new Map([[1,2]]).get(1)===2});if(!an){S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new H;if(arguments.length>0){tn(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,S.Map.prototype);return e};S.Map.prototype=O(H.prototype);h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,H)}var un=new Map;var fn=function(){var e=new Map([[1,0],[2,0],[3,0],[4,0]]);e.set(-0,e);return e.get(0)===e&&e.get(-0)===e&&e.has(0)&&e.has(-0)}();var sn=un.set(1,2)===un;if(!fn||!sn){oe(Map.prototype,"set",function set(e,r){t($,this,e===0?0:e,r);return this})}if(!fn){b(Map.prototype,{get:function get(e){return t(B,this,e===0?0:e)},has:function has(e){return t(U,this,e===0?0:e)}},true);m.preserveToString(Map.prototype.get,B);m.preserveToString(Map.prototype.has,U)}var cn=new Set;var ln=Set.prototype["delete"]&&Set.prototype.add&&Set.prototype.has&&function(e){e["delete"](0);e.add(-0);return!e.has(0)}(cn);var pn=cn.add(1)===cn;if(!ln||!pn){var vn=Set.prototype.add;Set.prototype.add=function add(e){t(vn,this,e===0?0:e);return this};m.preserveToString(Set.prototype.add,vn)}if(!ln){var yn=Set.prototype.has;Set.prototype.has=function has(e){return t(yn,this,e===0?0:e)};m.preserveToString(Set.prototype.has,yn);var hn=Set.prototype["delete"];Set.prototype["delete"]=function SetDelete(e){return t(hn,this,e===0?0:e)};m.preserveToString(Set.prototype["delete"],hn)}var bn=w(S.Map,function(e){var t=new e([]);t.set(42,42);return t instanceof e});var gn=Object.setPrototypeOf&&!bn;var dn=function(){try{return!(S.Map()instanceof S.Map)}catch(e){return e instanceof TypeError}}();if(S.Map.length!==0||gn||!dn){S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new H;if(arguments.length>0){tn(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Map.prototype);return e};S.Map.prototype=H.prototype;h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,H)}var mn=w(S.Set,function(e){var t=new e([]);t.add(42,42);return t instanceof e});var On=Object.setPrototypeOf&&!mn;var wn=function(){try{return!(S.Set()instanceof S.Set)}catch(e){return e instanceof TypeError}}();if(S.Set.length!==0||On||!wn){var jn=S.Set;S.Set=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}var e=new jn;if(arguments.length>0){rn(Set,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Set.prototype);return e};S.Set.prototype=jn.prototype;h(S.Set.prototype,"constructor",S.Set,true);m.preserveToString(S.Set,jn)}var Sn=new S.Map;var Tn=!a(function(){return Sn.keys().next().done});if(typeof S.Map.prototype.clear!=="function"||(new S.Set).size!==0||Sn.size!==0||typeof S.Map.prototype.keys!=="function"||typeof S.Set.prototype.keys!=="function"||typeof S.Map.prototype.forEach!=="function"||typeof S.Set.prototype.forEach!=="function"||u(S.Map)||u(S.Set)||typeof Sn.keys().next!=="function"||Tn||!bn){b(S,{Map:nn.Map,Set:nn.Set},true)}if(S.Set.prototype.keys!==S.Set.prototype.values){h(S.Set.prototype,"keys",S.Set.prototype.values,true)}xe(Object.getPrototypeOf((new S.Map).keys()));xe(Object.getPrototypeOf((new S.Set).keys()));if(c&&S.Set.prototype.has.name!=="has"){var In=S.Set.prototype.has;oe(S.Set.prototype,"has",function has(e){return t(In,this,e)})}}b(S,nn);Me(S.Map);Me(S.Set)}var En=function throwUnlessTargetIsObject(e){if(!le.TypeIsObject(e)){throw new TypeError("target must be an object")}};var Pn={apply:function apply(){return le.Call(le.Call,null,arguments)},construct:function construct(e,t){if(!le.IsConstructor(e)){throw new TypeError("First argument must be a constructor.")}var r=arguments.length>2?arguments[2]:e;if(!le.IsConstructor(r)){throw new TypeError("new.target must be a constructor.")}return le.Construct(e,t,r,"internal")},deleteProperty:function deleteProperty(e,t){En(e);if(s){var r=Object.getOwnPropertyDescriptor(e,t);if(r&&!r.configurable){return false}}return delete e[t]},has:function has(e,t){En(e);return t in e}};if(Object.getOwnPropertyNames){Object.assign(Pn,{ownKeys:function ownKeys(e){En(e);var t=Object.getOwnPropertyNames(e);if(le.IsCallable(Object.getOwnPropertySymbols)){x(t,Object.getOwnPropertySymbols(e))}return t}})}var Cn=function ConvertExceptionToBoolean(e){return!i(e)};if(Object.preventExtensions){Object.assign(Pn,{isExtensible:function isExtensible(e){En(e);return Object.isExtensible(e)},preventExtensions:function preventExtensions(e){En(e);return Cn(function(){return Object.preventExtensions(e)})}})}if(s){var Mn=function get(e,t,r){var n=Object.getOwnPropertyDescriptor(e,t);if(!n){var o=Object.getPrototypeOf(e);if(o===null){return void 0}return Mn(o,t,r)}if("value"in n){return n.value}if(n.get){return le.Call(n.get,r)}return void 0};var xn=function set(e,r,n,o){var i=Object.getOwnPropertyDescriptor(e,r);if(!i){var a=Object.getPrototypeOf(e);if(a!==null){return xn(a,r,n,o)}i={value:void 0,writable:true,enumerable:true,configurable:true}}if("value"in i){if(!i.writable){return false}if(!le.TypeIsObject(o)){return false}var u=Object.getOwnPropertyDescriptor(o,r);if(u){return ue.defineProperty(o,r,{value:n})}else{return ue.defineProperty(o,r,{value:n,writable:true,enumerable:true,configurable:true})}}if(i.set){t(i.set,o,n);return true}return false};Object.assign(Pn,{defineProperty:function defineProperty(e,t,r){En(e);return Cn(function(){return Object.defineProperty(e,t,r)})},getOwnPropertyDescriptor:function getOwnPropertyDescriptor(e,t){En(e);return Object.getOwnPropertyDescriptor(e,t)},get:function get(e,t){En(e);var r=arguments.length>2?arguments[2]:e;return Mn(e,t,r)},set:function set(e,t,r){En(e);var n=arguments.length>3?arguments[3]:e;return xn(e,t,r,n)}})}if(Object.getPrototypeOf){var Nn=Object.getPrototypeOf;Pn.getPrototypeOf=function getPrototypeOf(e){En(e);return Nn(e)}}if(Object.setPrototypeOf&&Pn.getPrototypeOf){var An=function(e,t){var r=t;while(r){if(e===r){return true}r=Pn.getPrototypeOf(r)}return false};Object.assign(Pn,{setPrototypeOf:function setPrototypeOf(e,t){En(e);if(t!==null&&!le.TypeIsObject(t)){throw new TypeError("proto must be an object or null")}if(t===ue.getPrototypeOf(e)){return true}if(ue.isExtensible&&!ue.isExtensible(e)){return false}if(An(e,t)){return false}Object.setPrototypeOf(e,t);return true}})}var Rn=function(e,t){if(!le.IsCallable(S.Reflect[e])){h(S.Reflect,e,t)}else{var r=a(function(){S.Reflect[e](1);S.Reflect[e](NaN);S.Reflect[e](true);return true});if(r){oe(S.Reflect,e,t)}}};Object.keys(Pn).forEach(function(e){Rn(e,Pn[e])});var _n=S.Reflect.getPrototypeOf;if(c&&_n&&_n.name!=="getPrototypeOf"){oe(S.Reflect,"getPrototypeOf",function getPrototypeOf(e){return t(_n,S.Reflect,e)})}if(S.Reflect.setPrototypeOf){if(a(function(){S.Reflect.setPrototypeOf(1,{});return true})){oe(S.Reflect,"setPrototypeOf",Pn.setPrototypeOf)}}if(S.Reflect.defineProperty){if(!a(function(){var e=!S.Reflect.defineProperty(1,"test",{value:1});var t=typeof Object.preventExtensions!=="function"||!S.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return e&&t})){oe(S.Reflect,"defineProperty",Pn.defineProperty)}}if(S.Reflect.construct){if(!a(function(){var e=function F(){};return S.Reflect.construct(function(){},[],e)instanceof e})){oe(S.Reflect,"construct",Pn.construct)}}if(String(new Date(NaN))!=="Invalid Date"){var kn=Date.prototype.toString;var Ln=function toString(){var e=+this;if(e!==e){return"Invalid Date"}return le.Call(kn,this)};oe(Date.prototype,"toString",Ln)}var Fn={anchor:function anchor(e){return le.CreateHTML(this,"a","name",e)},big:function big(){return le.CreateHTML(this,"big","","")},blink:function blink(){return le.CreateHTML(this,"blink","","")},bold:function bold(){return le.CreateHTML(this,"b","","")},fixed:function fixed(){return le.CreateHTML(this,"tt","","")},fontcolor:function fontcolor(e){return le.CreateHTML(this,"font","color",e)},fontsize:function fontsize(e){return le.CreateHTML(this,"font","size",e)},italics:function italics(){return le.CreateHTML(this,"i","","")},link:function link(e){return le.CreateHTML(this,"a","href",e)},small:function small(){return le.CreateHTML(this,"small","","")},strike:function strike(){return le.CreateHTML(this,"strike","","")},sub:function sub(){return le.CreateHTML(this,"sub","","")},sup:function sub(){return le.CreateHTML(this,"sup","","")}};l(Object.keys(Fn),function(e){var r=String.prototype[e];var n=false;if(le.IsCallable(r)){var o=t(r,"",' " ');var i=P([],o.match(/"/g)).length;n=o!==o.toLowerCase()||i>2}else{n=true}if(n){oe(String.prototype,e,Fn[e])}});var Dn=function(){if(!ie){return false}var e=typeof JSON==="object"&&typeof JSON.stringify==="function"?JSON.stringify:null;if(!e){return false}if(typeof e(J())!=="undefined"){return true}if(e([J()])!=="[null]"){return true}var t={a:J()};t[J()]=true;if(e(t)!=="{}"){return true}return false}();var zn=a(function(){if(!ie){return true}return JSON.stringify(Object(J()))==="{}"&&JSON.stringify([Object(J())])==="[{}]"});if(Dn||!zn){var qn=JSON.stringify;oe(JSON,"stringify",function stringify(e){if(typeof e==="symbol"){return}var n;if(arguments.length>1){n=arguments[1]}var o=[e];if(!r(n)){var i=le.IsCallable(n)?n:null;var a=function(e,r){var n=i?t(i,this,e,r):r;if(typeof n!=="symbol"){if(ne.symbol(n)){return At({})(n)}else{return n}}};o.push(a)}else{o.push(n)}if(arguments.length>2){o.push(arguments[2])}return qn.apply(this,o)})}return S});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11), __webpack_require__(12)))

/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Private */
  Waypoint.invokeAll = function(method) {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    Waypoint.invokeAll('destroy')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
  Waypoint.disableAll = function() {
    Waypoint.invokeAll('disable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
  Waypoint.enableAll = function() {
    Waypoint.Context.refreshAll()
    for (var waypointKey in allWaypoints) {
      allWaypoints[waypointKey].enabled = true
    }
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}())
;(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1
    if (!Waypoint.windowContext) {
      Waypoint.windowContext = true
      Waypoint.windowContext = new Context(window)
    }

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    var isWindow = this.element == this.element.window
    if (horizontalEmpty && verticalEmpty && !isWindow) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        Waypoint.requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        Waypoint.requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        if (waypoint.triggerPoint === null) {
          continue
        }
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window
    /*eslint-enable eqeqeq */
    var contextOffset = isWindow ? undefined : this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        }
        else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > - 1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment)
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    Waypoint.requestAnimationFrame(function() {
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers()
      }
    })

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }


  Waypoint.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      requestAnimationFrameShim
    requestFn.call(window, callback)
  }
  Waypoint.Context = Context
}())
;(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}())
;(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function isWindow(element) {
    return element === element.window
  }

  function getWindow(element) {
    if (isWindow(element)) {
      return element
    }
    return element.defaultView
  }

  function NoFrameworkAdapter(element) {
    this.element = element
    this.handlers = {}
  }

  NoFrameworkAdapter.prototype.innerHeight = function() {
    var isWin = isWindow(this.element)
    return isWin ? this.element.innerHeight : this.element.clientHeight
  }

  NoFrameworkAdapter.prototype.innerWidth = function() {
    var isWin = isWindow(this.element)
    return isWin ? this.element.innerWidth : this.element.clientWidth
  }

  NoFrameworkAdapter.prototype.off = function(event, handler) {
    function removeListeners(element, listeners, handler) {
      for (var i = 0, end = listeners.length - 1; i < end; i++) {
        var listener = listeners[i]
        if (!handler || handler === listener) {
          element.removeEventListener(listener)
        }
      }
    }

    var eventParts = event.split('.')
    var eventType = eventParts[0]
    var namespace = eventParts[1]
    var element = this.element

    if (namespace && this.handlers[namespace] && eventType) {
      removeListeners(element, this.handlers[namespace][eventType], handler)
      this.handlers[namespace][eventType] = []
    }
    else if (eventType) {
      for (var ns in this.handlers) {
        removeListeners(element, this.handlers[ns][eventType] || [], handler)
        this.handlers[ns][eventType] = []
      }
    }
    else if (namespace && this.handlers[namespace]) {
      for (var type in this.handlers[namespace]) {
        removeListeners(element, this.handlers[namespace][type], handler)
      }
      this.handlers[namespace] = {}
    }
  }

  /* Adapted from jQuery 1.x offset() */
  NoFrameworkAdapter.prototype.offset = function() {
    if (!this.element.ownerDocument) {
      return null
    }

    var documentElement = this.element.ownerDocument.documentElement
    var win = getWindow(this.element.ownerDocument)
    var rect = {
      top: 0,
      left: 0
    }

    if (this.element.getBoundingClientRect) {
      rect = this.element.getBoundingClientRect()
    }

    return {
      top: rect.top + win.pageYOffset - documentElement.clientTop,
      left: rect.left + win.pageXOffset - documentElement.clientLeft
    }
  }

  NoFrameworkAdapter.prototype.on = function(event, handler) {
    var eventParts = event.split('.')
    var eventType = eventParts[0]
    var namespace = eventParts[1] || '__default'
    var nsHandlers = this.handlers[namespace] = this.handlers[namespace] || {}
    var nsTypeList = nsHandlers[eventType] = nsHandlers[eventType] || []

    nsTypeList.push(handler)
    this.element.addEventListener(eventType, handler)
  }

  NoFrameworkAdapter.prototype.outerHeight = function(includeMargin) {
    var height = this.innerHeight()
    var computedStyle

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element)
      height += parseInt(computedStyle.marginTop, 10)
      height += parseInt(computedStyle.marginBottom, 10)
    }

    return height
  }

  NoFrameworkAdapter.prototype.outerWidth = function(includeMargin) {
    var width = this.innerWidth()
    var computedStyle

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element)
      width += parseInt(computedStyle.marginLeft, 10)
      width += parseInt(computedStyle.marginRight, 10)
    }

    return width
  }

  NoFrameworkAdapter.prototype.scrollLeft = function() {
    var win = getWindow(this.element)
    return win ? win.pageXOffset : this.element.scrollLeft
  }

  NoFrameworkAdapter.prototype.scrollTop = function() {
    var win = getWindow(this.element)
    return win ? win.pageYOffset : this.element.scrollTop
  }

  NoFrameworkAdapter.extend = function() {
    var args = Array.prototype.slice.call(arguments)

    function merge(target, obj) {
      if (typeof target === 'object' && typeof obj === 'object') {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            target[key] = obj[key]
          }
        }
      }

      return target
    }

    for (var i = 1, end = args.length; i < end; i++) {
      merge(args[0], args[i])
    }
    return args[0]
  }

  NoFrameworkAdapter.inArray = function(element, array, i) {
    return array == null ? -1 : array.indexOf(element, i)
  }

  NoFrameworkAdapter.isEmptyObject = function(obj) {
    /* eslint no-unused-vars: 0 */
    for (var name in obj) {
      return false
    }
    return true
  }

  Waypoint.adapters.push({
    name: 'noframework',
    Adapter: NoFrameworkAdapter
  })
  Waypoint.Adapter = NoFrameworkAdapter
}())
;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(15)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(typeof window !== 'undefined' ? window : this, function (ResizeSensor) {

    /**
     *
     * @type {Function}
     * @constructor
     */
    var ElementQueries = function () {
        //<style> element with our dynamically created styles
        var cssStyleElement;

        //all rules found for element queries
        var allQueries = {};

        //association map to identify which selector belongs to a element from the animationstart event.
        var idToSelectorMapping = [];

        /**
         *
         * @param element
         * @returns {Number}
         */
        function getEmSize(element) {
            if (!element) {
                element = document.documentElement;
            }
            var fontSize = window.getComputedStyle(element, null).fontSize;
            return parseFloat(fontSize) || 16;
        }

        /**
         * Get element size
         * @param {HTMLElement} element
         * @returns {Object} {width, height}
         */
        function getElementSize(element) {
            if (!element.getBoundingClientRect) {
                return {
                    width: element.offsetWidth,
                    height: element.offsetHeight
                }
            }

            var rect = element.getBoundingClientRect();
            return {
                width: Math.round(rect.width),
                height: Math.round(rect.height)
            }
        }

        /**
         *
         * @copyright https://github.com/Mr0grog/element-query/blob/master/LICENSE
         *
         * @param {HTMLElement} element
         * @param {*} value
         * @returns {*}
         */
        function convertToPx(element, value) {
            var numbers = value.split(/\d/);
            var units = numbers[numbers.length - 1];
            value = parseFloat(value);
            switch (units) {
                case "px":
                    return value;
                case "em":
                    return value * getEmSize(element);
                case "rem":
                    return value * getEmSize();
                // Viewport units!
                // According to http://quirksmode.org/mobile/tableViewport.html
                // documentElement.clientWidth/Height gets us the most reliable info
                case "vw":
                    return value * document.documentElement.clientWidth / 100;
                case "vh":
                    return value * document.documentElement.clientHeight / 100;
                case "vmin":
                case "vmax":
                    var vw = document.documentElement.clientWidth / 100;
                    var vh = document.documentElement.clientHeight / 100;
                    var chooser = Math[units === "vmin" ? "min" : "max"];
                    return value * chooser(vw, vh);
                default:
                    return value;
                // for now, not supporting physical units (since they are just a set number of px)
                // or ex/ch (getting accurate measurements is hard)
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {String} id
         * @constructor
         */
        function SetupInformation(element, id) {
            this.element = element;
            var key, option, elementSize, value, actualValue, attrValues, attrValue, attrName;

            var attributes = ['min-width', 'min-height', 'max-width', 'max-height'];

            /**
             * Extracts the computed width/height and sets to min/max- attribute.
             */
            this.call = function () {
                // extract current dimensions
                elementSize = getElementSize(this.element);

                attrValues = {};

                for (key in allQueries[id]) {
                    if (!allQueries[id].hasOwnProperty(key)) {
                        continue;
                    }
                    option = allQueries[id][key];

                    value = convertToPx(this.element, option.value);

                    actualValue = option.property === 'width' ? elementSize.width : elementSize.height;
                    attrName = option.mode + '-' + option.property;
                    attrValue = '';

                    if (option.mode === 'min' && actualValue >= value) {
                        attrValue += option.value;
                    }

                    if (option.mode === 'max' && actualValue <= value) {
                        attrValue += option.value;
                    }

                    if (!attrValues[attrName]) attrValues[attrName] = '';
                    if (attrValue && -1 === (' ' + attrValues[attrName] + ' ').indexOf(' ' + attrValue + ' ')) {
                        attrValues[attrName] += ' ' + attrValue;
                    }
                }

                for (var k in attributes) {
                    if (!attributes.hasOwnProperty(k)) continue;

                    if (attrValues[attributes[k]]) {
                        this.element.setAttribute(attributes[k], attrValues[attributes[k]].substr(1));
                    } else {
                        this.element.removeAttribute(attributes[k]);
                    }
                }
            };
        }

        /**
         * @param {HTMLElement} element
         * @param {Object}      id
         */
        function setupElement(element, id) {
            if (!element.elementQueriesSetupInformation) {
                element.elementQueriesSetupInformation = new SetupInformation(element, id);
            }

            if (!element.elementQueriesSensor) {
                element.elementQueriesSensor = new ResizeSensor(element, function () {
                    element.elementQueriesSetupInformation.call();
                });
            }
        }

        /**
         * Stores rules to the selector that should be applied once resized.
         *
         * @param {String} selector
         * @param {String} mode min|max
         * @param {String} property width|height
         * @param {String} value
         */
        function queueQuery(selector, mode, property, value) {
            if (typeof(allQueries[selector]) === 'undefined') {
                allQueries[selector] = [];
                // add animation to trigger animationstart event, so we know exactly when a element appears in the DOM

                var id = idToSelectorMapping.length;
                cssStyleElement.innerHTML += '\n' + selector + ' {animation: 0.1s element-queries;}';
                cssStyleElement.innerHTML += '\n' + selector + ' > .resize-sensor {min-width: '+id+'px;}';
                idToSelectorMapping.push(selector);
            }

            allQueries[selector].push({
                mode: mode,
                property: property,
                value: value
            });
        }

        function getQuery(container) {
            var query;
            if (document.querySelectorAll) query = (container) ? container.querySelectorAll.bind(container) : document.querySelectorAll.bind(document);
            if (!query && 'undefined' !== typeof $$) query = $$;
            if (!query && 'undefined' !== typeof jQuery) query = jQuery;

            if (!query) {
                throw 'No document.querySelectorAll, jQuery or Mootools\'s $$ found.';
            }

            return query;
        }

        /**
         * If animationStart didn't catch a new element in the DOM, we can manually search for it
         */
        function findElementQueriesElements(container) {
            var query = getQuery(container);

            for (var selector in allQueries) if (allQueries.hasOwnProperty(selector)) {
                // find all elements based on the extract query selector from the element query rule
                var elements = query(selector, container);

                for (var i = 0, j = elements.length; i < j; i++) {
                    setupElement(elements[i], selector);
                }
            }
        }

        /**
         *
         * @param {HTMLElement} element
         */
        function attachResponsiveImage(element) {
            var children = [];
            var rules = [];
            var sources = [];
            var defaultImageId = 0;
            var lastActiveImage = -1;
            var loadedImages = [];

            for (var i in element.children) {
                if (!element.children.hasOwnProperty(i)) continue;

                if (element.children[i].tagName && element.children[i].tagName.toLowerCase() === 'img') {
                    children.push(element.children[i]);

                    var minWidth = element.children[i].getAttribute('min-width') || element.children[i].getAttribute('data-min-width');
                    //var minHeight = element.children[i].getAttribute('min-height') || element.children[i].getAttribute('data-min-height');
                    var src = element.children[i].getAttribute('data-src') || element.children[i].getAttribute('url');

                    sources.push(src);

                    var rule = {
                        minWidth: minWidth
                    };

                    rules.push(rule);

                    if (!minWidth) {
                        defaultImageId = children.length - 1;
                        element.children[i].style.display = 'block';
                    } else {
                        element.children[i].style.display = 'none';
                    }
                }
            }

            lastActiveImage = defaultImageId;

            function check() {
                var imageToDisplay = false, i;

                for (i in children) {
                    if (!children.hasOwnProperty(i)) continue;

                    if (rules[i].minWidth) {
                        if (element.offsetWidth > rules[i].minWidth) {
                            imageToDisplay = i;
                        }
                    }
                }

                if (!imageToDisplay) {
                    //no rule matched, show default
                    imageToDisplay = defaultImageId;
                }

                if (lastActiveImage !== imageToDisplay) {
                    //image change

                    if (!loadedImages[imageToDisplay]) {
                        //image has not been loaded yet, we need to load the image first in memory to prevent flash of
                        //no content

                        var image = new Image();
                        image.onload = function () {
                            children[imageToDisplay].src = sources[imageToDisplay];

                            children[lastActiveImage].style.display = 'none';
                            children[imageToDisplay].style.display = 'block';

                            loadedImages[imageToDisplay] = true;

                            lastActiveImage = imageToDisplay;
                        };

                        image.src = sources[imageToDisplay];
                    } else {
                        children[lastActiveImage].style.display = 'none';
                        children[imageToDisplay].style.display = 'block';
                        lastActiveImage = imageToDisplay;
                    }
                } else {
                    //make sure for initial check call the .src is set correctly
                    children[imageToDisplay].src = sources[imageToDisplay];
                }
            }

            element.resizeSensorInstance = new ResizeSensor(element, check);
            check();
        }

        function findResponsiveImages() {
            var query = getQuery();

            var elements = query('[data-responsive-image],[responsive-image]');
            for (var i = 0, j = elements.length; i < j; i++) {
                attachResponsiveImage(elements[i]);
            }
        }

        var regex = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi;
        var attrRegex = /\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi;

        /**
         * @param {String} css
         */
        function extractQuery(css) {
            var match, smatch, attrs, attrMatch;

            css = css.replace(/'/g, '"');
            while (null !== (match = regex.exec(css))) {
                smatch = match[1] + match[3];
                attrs = match[2];

                while (null !== (attrMatch = attrRegex.exec(attrs))) {
                    queueQuery(smatch, attrMatch[1], attrMatch[2], attrMatch[3]);
                }
            }
        }

        /**
         * @param {CssRule[]|String} rules
         */
        function readRules(rules) {
            var selector = '';

            if (!rules) {
                return;
            }

            if ('string' === typeof rules) {
                rules = rules.toLowerCase();
                if (-1 !== rules.indexOf('min-width') || -1 !== rules.indexOf('max-width')) {
                    extractQuery(rules);
                }
            } else {
                for (var i = 0, j = rules.length; i < j; i++) {
                    if (1 === rules[i].type) {
                        selector = rules[i].selectorText || rules[i].cssText;
                        if (-1 !== selector.indexOf('min-height') || -1 !== selector.indexOf('max-height')) {
                            extractQuery(selector);
                        } else if (-1 !== selector.indexOf('min-width') || -1 !== selector.indexOf('max-width')) {
                            extractQuery(selector);
                        }
                    } else if (4 === rules[i].type) {
                        readRules(rules[i].cssRules || rules[i].rules);
                    } else if (3 === rules[i].type) {
                        if(rules[i].styleSheet.hasOwnProperty("cssRules")) {
                            readRules(rules[i].styleSheet.cssRules);
                        }
                    }
                }
            }
        }

        var defaultCssInjected = false;

        /**
         * Searches all css rules and setups the event listener to all elements with element query rules..
         */
        this.init = function () {
            var animationStart = 'animationstart';
            if (typeof document.documentElement.style['webkitAnimationName'] !== 'undefined') {
                animationStart = 'webkitAnimationStart';
            } else if (typeof document.documentElement.style['MozAnimationName'] !== 'undefined') {
                animationStart = 'mozanimationstart';
            } else if (typeof document.documentElement.style['OAnimationName'] !== 'undefined') {
                animationStart = 'oanimationstart';
            }

            document.body.addEventListener(animationStart, function (e) {
                var element = e.target;
                var styles = element && window.getComputedStyle(element, null);
                var animationName = styles && styles.getPropertyValue('animation-name');
                var requiresSetup = animationName && (-1 !== animationName.indexOf('element-queries'));

                if (requiresSetup) {
                    element.elementQueriesSensor = new ResizeSensor(element, function () {
                        if (element.elementQueriesSetupInformation) {
                            element.elementQueriesSetupInformation.call();
                        }
                    });

                    var sensorStyles = window.getComputedStyle(element.resizeSensor, null);
                    var id = sensorStyles.getPropertyValue('min-width');
                    id = parseInt(id.replace('px', ''));
                    setupElement(e.target, idToSelectorMapping[id]);
                }
            });

            if (!defaultCssInjected) {
                cssStyleElement = document.createElement('style');
                cssStyleElement.type = 'text/css';
                cssStyleElement.innerHTML = '[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}';

                //safari wants at least one rule in keyframes to start working
                cssStyleElement.innerHTML += '\n@keyframes element-queries { 0% { visibility: inherit; } }';
                document.getElementsByTagName('head')[0].appendChild(cssStyleElement);
                defaultCssInjected = true;
            }

            for (var i = 0, j = document.styleSheets.length; i < j; i++) {
                try {
                    if (document.styleSheets[i].href && 0 === document.styleSheets[i].href.indexOf('file://')) {
                        console.warn("CssElementQueries: unable to parse local css files, " + document.styleSheets[i].href);
                    }

                    readRules(document.styleSheets[i].cssRules || document.styleSheets[i].rules || document.styleSheets[i].cssText);
                } catch (e) {
                }
            }

            findResponsiveImages();
        };

        /**
         * Go through all collected rules (readRules()) and attach the resize-listener.
         * Not necessary to call it manually, since we detect automatically when new elements
         * are available in the DOM. However, sometimes handy for dirty DOM modifications.
         *
         * @param {HTMLElement} container only elements of the container are considered (document.body if not set)
         */
        this.findElementQueriesElements = function (container) {
            findElementQueriesElements(container);
        };

        this.update = function () {
            this.init();
        };
    };

    ElementQueries.update = function () {
        ElementQueries.instance.update();
    };

    /**
     * Removes all sensor and elementquery information from the element.
     *
     * @param {HTMLElement} element
     */
    ElementQueries.detach = function (element) {
        if (element.elementQueriesSetupInformation) {
            //element queries
            element.elementQueriesSensor.detach();
            delete element.elementQueriesSetupInformation;
            delete element.elementQueriesSensor;

        } else if (element.resizeSensorInstance) {
            //responsive image

            element.resizeSensorInstance.detach();
            delete element.resizeSensorInstance;
        }
    };

    ElementQueries.init = function () {
        if (!ElementQueries.instance) {
            ElementQueries.instance = new ElementQueries();
        }

        ElementQueries.instance.init();
    };

    var domLoaded = function (callback) {
        /* Mozilla, Chrome, Opera */
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callback, false);
        }
        /* Safari, iCab, Konqueror */
        else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
            var DOMLoadTimer = setInterval(function () {
                if (/loaded|complete/i.test(document.readyState)) {
                    callback();
                    clearInterval(DOMLoadTimer);
                }
            }, 10);
        }
        /* Other web browsers */
        else window.onload = callback;
    };

    ElementQueries.findElementQueriesElements = function (container) {
        ElementQueries.instance.findElementQueriesElements(container);
    };

    ElementQueries.listen = function () {
        domLoaded(ElementQueries.init);
    };

    return ElementQueries;

}));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
(function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(typeof window !== 'undefined' ? window : this, function () {

    // Make sure it does not throw in a SSR (Server Side Rendering) situation
    if (typeof window === "undefined") {
        return null;
    }
    // https://github.com/Semantic-Org/Semantic-UI/issues/3855
    // https://github.com/marcj/css-element-queries/issues/257
    var globalWindow = typeof window != 'undefined' && window.Math == Math
        ? window
        : typeof self != 'undefined' && self.Math == Math
            ? self
            : Function('return this')();
    // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
    // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
    // would generate too many unnecessary events.
    var requestAnimationFrame = globalWindow.requestAnimationFrame ||
        globalWindow.mozRequestAnimationFrame ||
        globalWindow.webkitRequestAnimationFrame ||
        function (fn) {
            return globalWindow.setTimeout(fn, 20);
        };

    var cancelAnimationFrame = globalWindow.cancelAnimationFrame ||
        globalWindow.mozCancelAnimationFrame ||
        globalWindow.webkitCancelAnimationFrame ||
        function (timer) {
            globalWindow.clearTimeout(timer);
        };

    /**
     * Iterate over each of the provided element(s).
     *
     * @param {HTMLElement|HTMLElement[]} elements
     * @param {Function}                  callback
     */
    function forEachElement(elements, callback){
        var elementsType = Object.prototype.toString.call(elements);
        var isCollectionTyped = ('[object Array]' === elementsType
            || ('[object NodeList]' === elementsType)
            || ('[object HTMLCollection]' === elementsType)
            || ('[object Object]' === elementsType)
            || ('undefined' !== typeof jQuery && elements instanceof jQuery) //jquery
            || ('undefined' !== typeof Elements && elements instanceof Elements) //mootools
        );
        var i = 0, j = elements.length;
        if (isCollectionTyped) {
            for (; i < j; i++) {
                callback(elements[i]);
            }
        } else {
            callback(elements);
        }
    }

    /**
    * Get element size
    * @param {HTMLElement} element
    * @returns {Object} {width, height}
    */
    function getElementSize(element) {
        if (!element.getBoundingClientRect) {
            return {
                width: element.offsetWidth,
                height: element.offsetHeight
            }
        }

        var rect = element.getBoundingClientRect();
        return {
            width: Math.round(rect.width),
            height: Math.round(rect.height)
        }
    }

    /**
     * Apply CSS styles to element.
     *
     * @param {HTMLElement} element
     * @param {Object} style
     */
    function setStyle(element, style) {
        Object.keys(style).forEach(function(key) {
            element.style[key] = style[key];
        });
    }

    /**
     * Class for dimension change detection.
     *
     * @param {Element|Element[]|Elements|jQuery} element
     * @param {Function} callback
     *
     * @constructor
     */
    var ResizeSensor = function(element, callback) {
        //Is used when checking in reset() only for invisible elements
        var lastAnimationFrameForInvisibleCheck = 0;

        /**
         *
         * @constructor
         */
        function EventQueue() {
            var q = [];
            this.add = function(ev) {
                q.push(ev);
            };

            var i, j;
            this.call = function(sizeInfo) {
                for (i = 0, j = q.length; i < j; i++) {
                    q[i].call(this, sizeInfo);
                }
            };

            this.remove = function(ev) {
                var newQueue = [];
                for(i = 0, j = q.length; i < j; i++) {
                    if(q[i] !== ev) newQueue.push(q[i]);
                }
                q = newQueue;
            };

            this.length = function() {
                return q.length;
            }
        }

        /**
         *
         * @param {HTMLElement} element
         * @param {Function}    resized
         */
        function attachResizeEvent(element, resized) {
            if (!element) return;
            if (element.resizedAttached) {
                element.resizedAttached.add(resized);
                return;
            }

            element.resizedAttached = new EventQueue();
            element.resizedAttached.add(resized);

            element.resizeSensor = document.createElement('div');
            element.resizeSensor.dir = 'ltr';
            element.resizeSensor.className = 'resize-sensor';

            var style = {
                pointerEvents: 'none',
                position: 'absolute',
                left: '0px',
                top: '0px',
                right: '0px',
                bottom: '0px',
                overflow: 'hidden',
                zIndex: '-1',
                visibility: 'hidden',
                maxWidth: '100%'
            };
            var styleChild = {
                position: 'absolute',
                left: '0px',
                top: '0px',
                transition: '0s',
            };

            setStyle(element.resizeSensor, style);

            var expand = document.createElement('div');
            expand.className = 'resize-sensor-expand';
            setStyle(expand, style);

            var expandChild = document.createElement('div');
            setStyle(expandChild, styleChild);
            expand.appendChild(expandChild);

            var shrink = document.createElement('div');
            shrink.className = 'resize-sensor-shrink';
            setStyle(shrink, style);

            var shrinkChild = document.createElement('div');
            setStyle(shrinkChild, styleChild);
            setStyle(shrinkChild, { width: '200%', height: '200%' });
            shrink.appendChild(shrinkChild);

            element.resizeSensor.appendChild(expand);
            element.resizeSensor.appendChild(shrink);
            element.appendChild(element.resizeSensor);

            var computedStyle = window.getComputedStyle(element);
            var position = computedStyle ? computedStyle.getPropertyValue('position') : null;
            if ('absolute' !== position && 'relative' !== position && 'fixed' !== position && 'sticky' !== position) {
                element.style.position = 'relative';
            }

            var dirty = false;

            //last request animation frame id used in onscroll event
            var rafId = 0;
            var size = getElementSize(element);
            var lastWidth = 0;
            var lastHeight = 0;
            var initialHiddenCheck = true;
            lastAnimationFrameForInvisibleCheck = 0;

            var resetExpandShrink = function () {
                var width = element.offsetWidth;
                var height = element.offsetHeight;

                expandChild.style.width = (width + 10) + 'px';
                expandChild.style.height = (height + 10) + 'px';

                expand.scrollLeft = width + 10;
                expand.scrollTop = height + 10;

                shrink.scrollLeft = width + 10;
                shrink.scrollTop = height + 10;
            };

            var reset = function() {
                // Check if element is hidden
                if (initialHiddenCheck) {
                    var invisible = element.offsetWidth === 0 && element.offsetHeight === 0;
                    if (invisible) {
                        // Check in next frame
                        if (!lastAnimationFrameForInvisibleCheck){
                            lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function(){
                                lastAnimationFrameForInvisibleCheck = 0;
                                reset();
                            });
                        }

                        return;
                    } else {
                        // Stop checking
                        initialHiddenCheck = false;
                    }
                }

                resetExpandShrink();
            };
            element.resizeSensor.resetSensor = reset;

            var onResized = function() {
                rafId = 0;

                if (!dirty) return;

                lastWidth = size.width;
                lastHeight = size.height;

                if (element.resizedAttached) {
                    element.resizedAttached.call(size);
                }
            };

            var onScroll = function() {
                size = getElementSize(element);
                dirty = size.width !== lastWidth || size.height !== lastHeight;

                if (dirty && !rafId) {
                    rafId = requestAnimationFrame(onResized);
                }

                reset();
            };

            var addEvent = function(el, name, cb) {
                if (el.attachEvent) {
                    el.attachEvent('on' + name, cb);
                } else {
                    el.addEventListener(name, cb);
                }
            };

            addEvent(expand, 'scroll', onScroll);
            addEvent(shrink, 'scroll', onScroll);

            // Fix for custom Elements and invisible elements
            lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function(){
                lastAnimationFrameForInvisibleCheck = 0;
                reset();
            });
        }

        forEachElement(element, function(elem){
            attachResizeEvent(elem, callback);
        });

        this.detach = function(ev) {
            // clean up the unfinished animation frame to prevent a potential endless requestAnimationFrame of reset
            if (!lastAnimationFrameForInvisibleCheck) {
                cancelAnimationFrame(lastAnimationFrameForInvisibleCheck);
                lastAnimationFrameForInvisibleCheck = 0;
            }
            ResizeSensor.detach(element, ev);
        };

        this.reset = function() {
            element.resizeSensor.resetSensor();
        };
    };

    ResizeSensor.reset = function(element) {
        forEachElement(element, function(elem){
            elem.resizeSensor.resetSensor();
        });
    };

    ResizeSensor.detach = function(element, ev) {
        forEachElement(element, function(elem){
            if (!elem) return;
            if(elem.resizedAttached && typeof ev === "function"){
                elem.resizedAttached.remove(ev);
                if(elem.resizedAttached.length()) return;
            }
            if (elem.resizeSensor) {
                if (elem.contains(elem.resizeSensor)) {
                    elem.removeChild(elem.resizeSensor);
                }
                delete elem.resizeSensor;
                delete elem.resizedAttached;
            }
        });
    };

    if (typeof MutationObserver !== "undefined") {
        var observer = new MutationObserver(function (mutations) {
            for (var i in mutations) {
                if (mutations.hasOwnProperty(i)) {
                    var items = mutations[i].addedNodes;
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].resizeSensor) {
                            ResizeSensor.reset(items[j]);
                        }
                    }
                }
            }
        });

        document.addEventListener("DOMContentLoaded", function (event) {
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
        });
    }

    return ResizeSensor;

}));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! smooth-scroll v11.1.0 | (c) 2017 Chris Ferdinandi | GPL-3.0 License | http://github.com/cferdinandi/smooth-scroll */
!(function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t(e)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})("undefined"!=typeof global?global:this.window||this.global,(function(e){"use strict";var t,n,o,r,a,i,c,l={},s="querySelector"in document&&"addEventListener"in e,u={selector:"[data-scroll]",ignore:"[data-scroll-ignore]",selectorHeader:null,speed:500,offset:0,easing:"easeInOutCubic",easingPatterns:{},before:function(){},after:function(){}},f=function(){var e={},t=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(;n<o;n++){var r=arguments[n];!(function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t&&"[object Object]"===Object.prototype.toString.call(n[o])?e[o]=f(!0,e[o],n[o]):e[o]=n[o])})(r)}return e},d=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},h=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},m=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,r=-1,a="",i=n.charCodeAt(0);++r<o;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===r&&t>=48&&t<=57||1===r&&t>=48&&t<=57&&45===i?a+="\\"+t.toString(16)+" ":a+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+a},g=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.easingPatterns[e.easing]&&(n=e.easingPatterns[e.easing](t)),n||t},p=function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0),Math.min(o,y()-b())},b=function(){return Math.max(document.documentElement.clientHeight,e.innerHeight||0)},y=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},v=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},O=function(e){return e?d(e)+e.offsetTop:0},S=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))};l.animateScroll=function(n,o,i){var l=v(o?o.getAttribute("data-options"):null),s=f(t||u,i||{},l),d="[object Number]"===Object.prototype.toString.call(n),h=d||!n.tagName?null:n;if(d||h){var m=e.pageYOffset;s.selectorHeader&&!r&&(r=document.querySelector(s.selectorHeader)),a||(a=O(r));var b,E,I=d?n:p(h,a,parseInt("function"==typeof s.offset?s.offset():s.offset,10)),H=I-m,A=y(),j=0,C=function(t,r,a){var i=e.pageYOffset;(t==r||i==r||e.innerHeight+i>=A)&&(clearInterval(a),S(n,r,d),s.after(n,o))},M=function(){j+=16,b=j/parseInt(s.speed,10),b=b>1?1:b,E=m+H*g(s,b),e.scrollTo(0,Math.floor(E)),C(E,I,c)};0===e.pageYOffset&&e.scrollTo(0,0),s.before(n,o),(function(){clearInterval(c),c=setInterval(M,16)})()}};var E=function(t){try{m(decodeURIComponent(e.location.hash))}catch(t){m(e.location.hash)}n&&(n.id=n.getAttribute("data-scroll-id"),l.animateScroll(n,o),n=null,o=null)},I=function(r){if(0===r.button&&!r.metaKey&&!r.ctrlKey&&(o=h(r.target,t.selector))&&"a"===o.tagName.toLowerCase()&&!h(r.target,t.ignore)&&o.hostname===e.location.hostname&&o.pathname===e.location.pathname&&/#/.test(o.href)){var a;try{a=m(decodeURIComponent(o.hash))}catch(e){a=m(o.hash)}if("#"===a){r.preventDefault(),n=document.body;var i=n.id?n.id:"smooth-scroll-top";return n.setAttribute("data-scroll-id",i),n.id="",void(e.location.hash.substring(1)===i?E():e.location.hash=i)}n=document.querySelector(a),n&&(n.setAttribute("data-scroll-id",n.id),n.id="",o.hash===e.location.hash&&(r.preventDefault(),E()))}},H=function(e){i||(i=setTimeout((function(){i=null,a=O(r)}),66))};return l.destroy=function(){t&&(document.removeEventListener("click",I,!1),e.removeEventListener("resize",H,!1),t=null,n=null,o=null,r=null,a=null,i=null,c=null)},l.init=function(n){s&&(l.destroy(),t=f(u,n||{}),r=t.selectorHeader?document.querySelector(t.selectorHeader):null,a=O(r),document.addEventListener("click",I,!1),e.addEventListener("hashchange",E,!1),r&&e.addEventListener("resize",H,!1))},l}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v4.0.6
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	module.exports = (function() {

	  /*
	    ---------------
	    Variables
	    ---------------
	  */

	  // cache document.documentElement
	  var docElem = document.documentElement;

	  // last used input type
	  var currentInput = 'initial';

	  // last used input intent
	  var currentIntent = null;

	  // form input types
	  var formInputs = [
	    'input',
	    'select',
	    'textarea'
	  ];

	  // list of modifier keys commonly used with the mouse and
	  // can be safely ignored to prevent false keyboard detection
	  var ignoreMap = [
	    16, // shift
	    17, // control
	    18, // alt
	    91, // Windows key / left Apple cmd
	    93  // Windows menu / right Apple cmd
	  ];

	  // mapping of events to input types
	  var inputMap = {
	    'keyup': 'keyboard',
	    'mousedown': 'mouse',
	    'mousemove': 'mouse',
	    'MSPointerDown': 'pointer',
	    'MSPointerMove': 'pointer',
	    'pointerdown': 'pointer',
	    'pointermove': 'pointer',
	    'touchstart': 'touch'
	  };

	  // array of all used input types
	  var inputTypes = [];

	  // boolean: true if touch buffer timer is running
	  var isBuffering = false;

	  // map of IE 10 pointer events
	  var pointerMap = {
	    2: 'touch',
	    3: 'touch', // treat pen like touch
	    4: 'mouse'
	  };

	  // touch buffer timer
	  var touchTimer = null;


	  /*
	    ---------------
	    Set up
	    ---------------
	  */

	  var setUp = function() {

	    // add correct mouse wheel event mapping to `inputMap`
	    inputMap[detectWheel()] = 'mouse';

	    addListeners();
	    setInput();
	  };


	  /*
	    ---------------
	    Events
	    ---------------
	  */

	  var addListeners = function() {

	    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
	    // can only demonstrate potential, but not actual, interaction
	    // and are treated separately

	    // pointer events (mouse, pen, touch)
	    if (window.PointerEvent) {
	      docElem.addEventListener('pointerdown', updateInput);
	      docElem.addEventListener('pointermove', setIntent);
	    } else if (window.MSPointerEvent) {
	      docElem.addEventListener('MSPointerDown', updateInput);
	      docElem.addEventListener('MSPointerMove', setIntent);
	    } else {

	      // mouse events
	      docElem.addEventListener('mousedown', updateInput);
	      docElem.addEventListener('mousemove', setIntent);

	      // touch events
	      if ('ontouchstart' in window) {
	        docElem.addEventListener('touchstart', touchBuffer);
	      }
	    }

	    // mouse wheel
	    docElem.addEventListener(detectWheel(), setIntent);

	    // keyboard events
	    docElem.addEventListener('keydown', updateInput);
	    docElem.addEventListener('keyup', updateInput);
	  };

	  // checks conditions before updating new input
	  var updateInput = function(event) {

	    // only execute if the touch buffer timer isn't running
	    if (!isBuffering) {
	      var eventKey = event.which;
	      var value = inputMap[event.type];
	      if (value === 'pointer') value = pointerType(event);

	      if (
	        currentInput !== value ||
	        currentIntent !== value
	      ) {

	        var activeElem = document.activeElement;
	        var activeInput = (
	          activeElem &&
	          activeElem.nodeName &&
	          formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1
	        ) ? true : false;

	        if (
	          value === 'touch' ||

	          // ignore mouse modifier keys
	          (value === 'mouse' && ignoreMap.indexOf(eventKey) === -1) ||

	          // don't switch if the current element is a form input
	          (value === 'keyboard' && activeInput)
	        ) {

	          // set the current and catch-all variable
	          currentInput = currentIntent = value;

	          setInput();
	        }
	      }
	    }
	  };

	  // updates the doc and `inputTypes` array with new input
	  var setInput = function() {
	    docElem.setAttribute('data-whatinput', currentInput);
	    docElem.setAttribute('data-whatintent', currentInput);

	    if (inputTypes.indexOf(currentInput) === -1) {
	      inputTypes.push(currentInput);
	      docElem.className += ' whatinput-types-' + currentInput;
	    }
	  };

	  // updates input intent for `mousemove` and `pointermove`
	  var setIntent = function(event) {

	    // only execute if the touch buffer timer isn't running
	    if (!isBuffering) {
	      var value = inputMap[event.type];
	      if (value === 'pointer') value = pointerType(event);

	      if (currentIntent !== value) {
	        currentIntent = value;

	        docElem.setAttribute('data-whatintent', currentIntent);
	      }
	    }
	  };

	  // buffers touch events because they frequently also fire mouse events
	  var touchBuffer = function(event) {

	    // clear the timer if it happens to be running
	    window.clearTimeout(touchTimer);

	    // set the current input
	    updateInput(event);

	    // set the isBuffering to `true`
	    isBuffering = true;

	    // run the timer
	    touchTimer = window.setTimeout(function() {

	      // if the timer runs out, set isBuffering back to `false`
	      isBuffering = false;
	    }, 200);
	  };


	  /*
	    ---------------
	    Utilities
	    ---------------
	  */

	  var pointerType = function(event) {
	   if (typeof event.pointerType === 'number') {
	      return pointerMap[event.pointerType];
	   } else {
	      return (event.pointerType === 'pen') ? 'touch' : event.pointerType; // treat pen like touch
	   }
	  };

	  // detect version of mouse wheel event to use
	  // via https://developer.mozilla.org/en-US/docs/Web/Events/wheel
	  var detectWheel = function() {
	    return 'onwheel' in document.createElement('div') ?
	      'wheel' : // Modern browsers support "wheel"

	      document.onmousewheel !== undefined ?
	        'mousewheel' : // Webkit and IE support at least "mousewheel"
	        'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox
	  };


	  /*
	    ---------------
	    Init

	    don't start script unless browser cuts the mustard
	    (also passes if polyfills are used)
	    ---------------
	  */

	  if (
	    'addEventListener' in window &&
	    Array.prototype.indexOf
	  ) {
	    setUp();
	  }


	  /*
	    ---------------
	    API
	    ---------------
	  */

	  return {

	    // returns string: the current input type
	    // opt: 'loose'|'strict'
	    // 'strict' (default): returns the same value as the `data-whatinput` attribute
	    // 'loose': includes `data-whatintent` value if it's more current than `data-whatinput`
	    ask: function(opt) { return (opt === 'loose') ? currentIntent : currentInput; },

	    // returns array: all the detected input types
	    types: function() { return inputTypes; }

	  };

	}());


/***/ }
/******/ ])
});
;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./accordion": 19,
	"./accordion.js": 19,
	"./article-grid": 20,
	"./article-grid.js": 20,
	"./audio-player": 21,
	"./audio-player.js": 21,
	"./carousel": 22,
	"./carousel.js": 22,
	"./collapsible": 23,
	"./collapsible.js": 23,
	"./functionality-toggles": 24,
	"./functionality-toggles.js": 24,
	"./hero": 25,
	"./hero-type": 26,
	"./hero-type.js": 26,
	"./hero.js": 25,
	"./home-hero": 27,
	"./home-hero.js": 27,
	"./image-callout": 28,
	"./image-callout.js": 28,
	"./impact-statistics": 29,
	"./impact-statistics.js": 29,
	"./in-view": 30,
	"./in-view.js": 30,
	"./link-dropdown": 31,
	"./link-dropdown.js": 31,
	"./modal": 32,
	"./modal.js": 32,
	"./nav-group": 33,
	"./nav-group.js": 33,
	"./nav-toggle": 34,
	"./nav-toggle.js": 34,
	"./news-features": 35,
	"./news-features.js": 35,
	"./parallax": 36,
	"./parallax.js": 36,
	"./responsive-video": 37,
	"./responsive-video.js": 37,
	"./search": 38,
	"./search.js": 38,
	"./share": 41,
	"./share.js": 41,
	"./slideshow": 42,
	"./slideshow.js": 42,
	"./styles": 43,
	"./styles.js": 43,
	"./text-stat": 44,
	"./text-stat.js": 44
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 18;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);
var Vars = __webpack_require__(3);

var Accordion = function(elem) {
  this.elem = elem;
  this.init();
};

Accordion.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'setUp', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  setVariables: function() {
    this.currentTab = 0;
    this.panels = [];
    this.contentContainers = [];
    this.containerHeights = [];
    this.tabs = this.elem.querySelectorAll('[data-accordion-tab]');

    this.loopTabs(function(i) {
      var link = this.returnId(this.tabs[i]);
      var panel = document.getElementById(link);
      var contentContainer = panel.querySelector('[data-accordion-content]');

      this.panels.push(panel);
      this.contentContainers.push(contentContainer);
      this.containerHeights.push(0);
    }.bind(this));
  },


  /*
    --------------------
    Set up
    --------------------
  */

  setUp: function() {
    this.loopTabs(function(i) {
      this.setTabState(i);
      this.tabs[i].setAttribute('role', 'tab');
      this.tabs[i].setAttribute('aria-controls', this.returnId(this.tabs[i]));

      this.panels[i].setAttribute('role', 'tabpanel');
      this.measurePanel(i);
      this.setPanelState(i);
      this.setPanelHeight(i);
    }.bind(this));
  },

  updateTabs: function() {
    this.loopTabs(function(i) {
      this.setTabState(i);
      this.setPanelState(i);
      this.setPanelHeight(i);
    }.bind(this));
  },

  setTabState: function(pos) {
    this.tabs[pos].setAttribute('tabindex', (pos === this.currentTab) ? 0 : -1);

    if (pos === this.currentTab) {
      this.tabs[pos].setAttribute('aria-selected', 'true');
    } else {
      this.tabs[pos].removeAttribute('aria-selected');
    }
  },

  measurePanels: function() {
    this.loopTabs(function(i) {
      this.measurePanel(i);
    }.bind(this));
  },

  measurePanel: function(pos) {
    this.containerHeights[pos] = this.contentContainers[pos].offsetHeight;
    this.setPanelHeight(pos);
  },

  setPanelHeight: function(pos) {
    this.panels[pos].style.height = (pos === this.currentTab) ? this.containerHeights[pos] + 'px' : '0';
  },

  setPanelState: function(pos) {

    // set hidden state
    if (pos === this.currentTab) {
      this.panels[pos].removeAttribute('aria-hidden');
    } else {
      this.panels[pos].setAttribute('aria-hidden', 'true');
    }
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {

    // prevent default tab behavior when moving through sub list
    this.elem.addEventListener('keydown', this.blockArrows.bind(this));

    // trap focus within the sub list
    this.elem.addEventListener('keyup', this.manageFocus.bind(this));

    for (var i = 0, len = this.tabs.length; i < len; i++) {
      this.tabs[i].addEventListener('click', this.getNewTab.bind(this));
    }

    window.addEventListener('resize', Util.debounce(this.measurePanels.bind(this), 100));
    window.pubSub.subscribe('fontsLoaded', this.measurePanels.bind(this));
  },

  blockArrows: function(event) {

    // prevents the default behavior of the arrow keys
    // so they don't scroll the page
    if (
      event.which === Vars.keys.DOWN ||
      event.which === Vars.keys.UP
    ) event.preventDefault();
  },

  // customized version of focusRestrict to work specifically for accordion links
  manageFocus: function(event) {
    var key = event.which;
    var focusable = Array.prototype.slice.call(this.tabs);
    var listLength = this.tabs.length;
    var focused = document.activeElement;
    var focusIndex = focusable.indexOf(focused);

    // down/right/up/left cycles through links
    if (
      key === Vars.keys.DOWN ||
      key === Vars.keys.RIGHT ||
      key === Vars.keys.UP ||
      key === Vars.keys.LEFT
    ) {
      var direction = (key === Vars.keys.UP || key === Vars.keys.LEFT) ? 'up' : 'down';

      if (focusIndex < (listLength - 1) && direction === 'down') {
        this.currentTab = focusIndex + 1;
      } else if (focusIndex > 0 && direction === 'up') {
        this.currentTab = focusIndex -1;
      } else if (focusIndex === (listLength - 1) && direction === 'down') {
        this.currentTab = 0;
      } else {
        this.currentTab = listLength -1;
      }

      focusable[this.currentTab].focus();
      this.updateTabs();
    }
  },

  getNewTab: function(event) {
    this.currentTab = Util.getArrayPosition(this.tabs, event.currentTarget);
    this.updateTabs();

    event.preventDefault();
  },


  /*
    --------------------
    Utilities
    --------------------
  */

  loopTabs: function(work) {
    for (var i = 0, len = this.tabs.length; i < len; i++) work(i);
  },

  returnId: function(elem) {
    return elem.getAttribute('href').substring(1);
  }

};

module.exports = Accordion;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);

ArticleGrid = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

ArticleGrid.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'setUp', 'addListeners', 'reSize']);
  },

  reBuild: function() {
    Util.fire(this, ['setVariables', 'setUp', 'reSize']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  lastFeature: null,
  mq: window.matchMedia('(min-width: 30em)'),

  setVariables: function() {
    this.list = this.elem.querySelector('[data-list]');
    this.items = this.list.querySelectorAll('[data-story], [data-feature]');
    this.stories = this.list.querySelectorAll('[data-story]');
    this.features = this.list.querySelectorAll('[data-feature]');
  },


  /*
    --------------------
    Set up
    --------------------
  */

  setUp: function() {
    for (var i = 0, len = this.features.length; i < len; i++) {
      if (Util.getArrayPosition(this.items, this.features[i]) > 0) {
        this.lastFeature = this.features[i];
      }
    }

    if (this.lastFeature) {
      this.lastFeature.classList.add('-last');
      this.moveLastFeature();
    }
  },

  // moves second feature to third from last so it floats correctly
  moveLastFeature: function() {
    var newPos = (this.mq.matches) ? 2 : 0;

    this.list.insertBefore(
      this.lastFeature,
      this.stories[this.stories.length - newPos]
    );
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {
    this.mq.addListener(this.moveLastFeature.bind(this));

    window.addEventListener(
      'resize',
      Util.debounce(this.reSize.bind(this), 50)
    );

    window.pubSub.subscribe('fontsLoaded', this.reSize.bind(this));

    // subscribe to the `rebuildArticles` event
    // that can be called externally
    window.pubSub.subscribe('rebuildArticles', this.reBuild.bind(this));
  },

  reSize: function() {
    this.resetHeight();
    var maxHeight = Util.returnTallest(this.stories);

    // set all elements to the new max height
    var i;
    var len;

    for (i = 0, len = this.features.length; i < len; i++) {
      this.features[i].style.height = (maxHeight * 2) + 'px';
    }

    for (i = 0, len = this.stories.length; i < len; i++) {
      this.stories[i].style.height = maxHeight + 'px';
    }
  },

  // remove inline height so measurement can be taken
  resetHeight: function() {
    for (var i = 0, len = this.stories.length; i < len; i++) {
      this.stories[i].style.height = 'auto';
    }
  }

};

module.exports = ArticleGrid;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);

AudioPlayer = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

AudioPlayer.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'setUp', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  playerInterval: null,
  progress: {
    block: {
      from: 'rgb(2,126,172)',
      to: 'rgb(1,159,203)'
    },
    inline: {
      from: 'rgb(179,226,240)',
      to: 'rgb(229,245,250)'
    }
  },

  setVariables: function() {
    if (this.features.includes('inline')) {
      // Get the href attribute from the audio resource if the inline audio
      // does not have href.
      if (this.elem.getAttribute('href') == '#inline-audio') {
        var crfName = this.elem.getAttribute('data-crf-name');
        var audioResource = document.querySelectorAll('[data-audio-crf-name]');
        for (i=0; i < audioResource.length; i++) {
          if (audioResource[i].getAttribute(['data-audio-crf-name']) == crfName) {
            this.elem.setAttribute('href', audioResource[i].getAttribute('href'));
            break;
          }
        }
      }
      this.audio = new Audio(this.elem.getAttribute('href'));
    } else {
      this.language = JSON.parse(this.elem.getAttribute('data-language'));
      this.audio = this.elem.querySelector('audio');
    }

    this.progressFrom = this.progress[this.features].from;
    this.progressTo = this.progress[this.features].to;
  },


  /*
    --------------------
    Set up
    --------------------
  */

  setUp: function() {
    if (this.features.includes('block')) this.addButton();
  },

  addButton: function() {
    this.playButton = document.createElement('button');
    this.playButton.textContent = this.language.play;

    this.elem.appendChild(this.playButton);
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {
    this.elem.addEventListener('click', this.toggle.bind(this));
  },

  toggle: function(event) {
    this[(this.audio.paused) ? 'play' : 'pause']();

    event.preventDefault();
  },

  play: function() {
    this.audio.play();
    this.elem.setAttribute('data-is', 'playing');

    if (this.features.includes('block')) this.playButton.textContent = this.language.pause;

    this.playerInterval = setInterval(function() {
      var progress = (this.audio.currentTime / this.audio.duration) * 100;

      this.elem.setAttribute(
        'style',
        'background: linear-gradient(90deg, ' + this.progressFrom + ', ' + this.progressFrom + ' ' + progress + '%, ' + this.progressTo + ' ' + progress + '%, ' + this.progressTo + ')'
      );

      if (this.audio.ended) {
        this.pause();
        this.elem.removeAttribute('style');
        this.elem.removeAttribute('data-is');
      }
    }.bind(this), 10);
  },

  pause: function() {
    this.audio.pause();
    this.elem.setAttribute('data-is', 'paused');

    if (this.features.includes('block')) this.playButton.textContent = this.language.play;

    clearInterval(this.playerInterval);
  }

};

module.exports = AudioPlayer;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);
var Vars = __webpack_require__(3);

Carousel = function(elem) {
  this.elem = elem;
  this.init();
};

Carousel.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'toggleSetUp', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  buttonPrev: null,
  buttonNext: null,
  currPos: {
    first: null,
    second: null,
    last: null
  },
  mqSm: window.matchMedia(Vars.mq.small),
  mqMd: window.matchMedia(Vars.mq.medium),
  tallest: null,

  setVariables: function() {
    this.list = this.elem.querySelector('[data-carousel="list"]');
    this.items = this.list.querySelectorAll('[data-carousel="item"]');
    this.itemText = this.list.querySelectorAll('[data-carousel="text"]');

    this.numItems = this.items.length;
  },


  /*
    --------------------
    Set up
    --------------------
  */

  toggleSetUp: function() {
    if (this.mqMd.matches) {
      this.setUpLarge();
    } else if (this.mqSm.matches) {
      this.setUpSmall(60, 40);
    } else {
      this.setUpSmall(80, 20);
    }
  },

  setUpSmall: function(width, gutter) {
    this.list.style.height = null;
    this.list.style.width = ((width * this.numItems) + gutter) + 'vw';

    this.evenHeights();

    for (var i = 0, len = this.numItems; i < len; i++) {
      this.toggleItemInteraction(this.items[i], 'show');
    }
  },

  setUpLarge: function() {
    this.evenHeights();
    this.list.style.width = null;

    if (this.numItems > 1) {
      for (var i = 0, len = this.numItems; i < len; i++) {
        this.toggleItemInteraction(this.items[i], 'hide');
      }

      this.currPos.first = 0;
      this.currPos.second = 1;
      this.currPos.last = this.numItems - 1;

      this.toggleItemInteraction(this.items[this.currPos.first], 'show');
      this.items[this.currPos.first].setAttribute('data-item', 'first');

      this.items[this.currPos.second].setAttribute('data-item', 'second');
      this.items[this.currPos.last].setAttribute('data-item', 'last');

      this.addButtons();
    }
  },

  evenHeights: function() {

    // get tallest content container
    this.tallest = Util.returnTallest(this.itemText) + 'px';

    for (var i = 0, len = this.itemText.length; i < len; i++) {
      this.itemText[i].style.height = this.tallest;
    }

    this.list.style.height = (this.mqMd.matches) ? Util.returnTallest(this.items) + 'px' : null;
  },

  addButtons: function() {
    if (!this.buttonPrev) {
      this.buttonPrev = document.createElement('button');
      this.buttonPrev.classList.add('carousel-button-prev');
      this.buttonPrev.textContent = 'Previous';

      this.elem.insertBefore(this.buttonPrev, this.list);
      this.buttonPrev.addEventListener('click', this.prevItem.bind(this));
    }

    if (!this.buttonNext) {
      this.buttonNext = document.createElement('button');
      this.buttonNext.classList.add('carousel-button-next');
      this.buttonNext.textContent = 'Next';

      this.elem.appendChild(this.buttonNext);
      this.buttonNext.addEventListener('click', this.nextItem.bind(this));
    }
  },

  toggleItemInteraction: function(elem, state) {
    var list = elem.querySelectorAll('a, button, input, select, textarea');

    if (state === 'hide') {
      elem.setAttribute('aria-hidden', 'true');
    } else {
      elem.removeAttribute('aria-hidden');
    }

    for (var i = 0, len = list.length; i < len; i++) {
      list[i].setAttribute(
        'tabindex',
        (state === 'hide') ? '-1' : '0'
      );
    }
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {
    this.mqSm.addListener(this.toggleSetUp.bind(this));
    this.mqMd.addListener(this.toggleSetUp.bind(this));

    window.pubSub.subscribe('fontsLoaded', this.evenHeights.bind(this));
    window.addEventListener('resize', Util.debounce(this.evenHeights.bind(this), 100));
  },

  advanceCarousel: function(dir) {
    this.toggleItemInteraction(this.items[this.currPos.first], 'hide');
    this.items[this.currPos.first].removeAttribute('data-item');
    this.items[this.currPos.second].removeAttribute('data-item');
    this.items[this.currPos.last].removeAttribute('data-item');

    this.advanceItem('first', dir);
    this.advanceItem('second', dir);
    this.advanceItem('last', dir);

    this.toggleItemInteraction(this.items[this.currPos.first], 'show');
    this.items[this.currPos.first].setAttribute('data-item', 'first');
    this.items[this.currPos.first].setAttribute('data-direction', dir);
    this.items[this.currPos.second].setAttribute('data-item', 'second');
    this.items[this.currPos.last].setAttribute('data-item', 'last');
  },

  // pos: position in carousel (first/second/last)
  // dir: direction to move (next/prev)
  advanceItem: function(pos, dir) {
    var newPos;

    if (dir === 'next') {
      newPos = this.currPos[pos] + 1;
      if (newPos > (this.numItems - 1)) newPos = 0;
    } else {
      newPos = this.currPos[pos] - 1;
      if (newPos < 0) newPos = this.numItems - 1;
    }

    this.currPos[pos] = newPos;
  },

  nextItem: function(event) {
    this.advanceCarousel('next');
  },

  prevItem: function(event) {
    this.advanceCarousel('prev');
  }

};

module.exports = Carousel;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);
var whatInput = __webpack_require__(17);

Collapsible = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

Collapsible.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'setUp', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  setVariables: function() {
    if (this.features.includes('open')) {
      this.collapsed = false;
    } else {
      this.collapsed = true;
    }

    this.language = JSON.parse(this.elem.getAttribute('data-language'));
    this.collapsibleRegion = document.getElementById(this.elem.getAttribute('aria-controls'));
    this.collapsibleContent = this.collapsibleRegion.querySelector('[data-collapsible-content]');

    this.setHeight();
  },


  /*
    --------------------
    Set up
    --------------------
  */

  setUp: function() {
    this.collapsibleRegion.setAttribute('data-collapsible-target', '');
    this.collapsibleRegion.setAttribute('tabindex', '-1');

    this.baseToggle();
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {
    this.elem.addEventListener('click', this.handleClick.bind(this));

    window.addEventListener('resize', Util.debounce(this.setHeight.bind(this), 500));
    window.pubSub.subscribe('fontsLoaded', this.setHeight.bind(this));
  },

  setHeight: function() {
    if (this.collapsibleContent) this.targetHeight = this.collapsibleContent.offsetHeight;
    this.collapsibleRegion.style.height = (!this.collapsed) ? this.targetHeight + 'px' : '0';
  },

  handleClick: function(event) {
    this.collapsed = !this.collapsed;
    this.baseToggle();
    this.clickToggle();

    event.preventDefault();
  },

  baseToggle: function() {
    this.elem.setAttribute('aria-expanded', !this.collapsed);
    this.collapsibleRegion[!this.collapsed ? 'removeAttribute' : 'setAttribute']('aria-hidden', this.collapsed);

    this.setHeight();
  },

  clickToggle: function() {
    this.elem.innerHTML = this.language[(this.collapsed) ? 'open' : 'close'];
  }

};

module.exports = Collapsible;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


// Toggle Functionality
    var Util = __webpack_require__(2);
FunctionalityToggles = function(elem, features){
  this.elem = elem;
  this.features = features;
  this.init();
};

FunctionalityToggles.prototype = {
  init: function() {
    Util.fire(this, ['toggleClick']);
  },

  selected:null,
  toggleClick: function(){
    var selected = null;
    var toggles = this.elem.querySelectorAll('.form-functionality-toggle');

    for (var i = 0, len = toggles.length; i < len; i++) {
      if (toggles[i].classList.contains('-selected')) {
        selected = toggles[i];
      }

      toggles[i].addEventListener('click', function() {
        selected.classList.remove('-selected');
        this.classList.add('-selected');

        selected = this;
      });
    }
  }
};

module.exports = FunctionalityToggles;





/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/*
  --------------------
  Page Hero

  Handles progressive loading of background image as well as loading and playing ambient video if the browser requirements allow.

  The Play/Pause video button sets a session variable and prevents subsequent videos from loading and auto-playing if one has been paused -- this assumes that the visitor does not want videos playng for any reason.

  Features: scrollfade
  --------------------
*/

var Util = __webpack_require__(2);

Hero = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

Hero.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'setDimensions', 'setUp', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  currentSlide: null,
  previousSlide: null,
  loadTimer: null,
  loadTimeout: 2000,
  mediaPlaying: false,
  textHeight: null,
  scrollPaused: false,
  slidesLoaded: false,
  slidePos: 0,
  slideTimer: null,
  slideTiming: 5000, // ms
  videoLoaded: false,

  setVariables: function() {
    this.heroText = this.elem.querySelector('.hero-text');
    this.imgContainer = this.elem.querySelector('.hero-background');
    this.placeholderContainer = this.elem.querySelector('.hero-background-placeholder');
    this.videoElem = this.elem.querySelector('.hero-video');

    this.image = this.isImage();
    this.fullHeight = this.elem.classList.contains('-tall');
    this.mobile = this.isMobile();
    this.video = this.isVideo();
    this.slideshow = this.features.includes('slideshow');

    if (this.image) {
      this.imgUrl = this.backgroundImageSrc();
    }

    if (this.video) {
      this.webmSrc = this.videoElem.getAttribute('data-webm');
      this.mp4Src = this.videoElem.getAttribute('data-mp4');
    } else if (this.videoElem && this.mobile) {

      // remove video element on mobile devices
      this.videoElem.parentNode.removeChild(this.videoElem);
    }

    if (this.slideshow) {
      this.slides = this.elem.querySelectorAll('[data-hero-slide]');
    }

    if (this.video || this.slideshow) {
      this.mediaPlaying = (sessionStorage['play-heros'] === 'false') ? false : true;

      this.pauseButton = this.elem.querySelector('.hero-pause');
      this.pauseText = this.pauseButton.textContent;
      this.playText = this.pauseButton.getAttribute('data-toggle-text');
    }
  },

  setDimensions: function() {

    // effectively the header height
    this.heroOffset = this.elem.offsetTop;

    // window height minus header
    this.heroHeight = window.innerHeight - this.heroOffset;
  },

  backgroundImageSrc: function() {
    var imgSrc = window
      .getComputedStyle(this.imgContainer, null)
      .getPropertyValue('background-image');

    return Util.getStyleSrc(imgSrc);
  },

  isImage: function() {
    return (this.imgContainer) ? true : false;
  },

  isMobile: function() {
    return (
      // janky but simple way of filtering out mobile os's that don't support autoplay
      Util.getMobileOperatingSystem() === 'iOS' ||
      Util.getMobileOperatingSystem() === 'Android' ||

      // also don't load up video on smaller screens
      window.matchMedia('(max-width: 799px)').matches
    ) ? true : false;
  },

  isVideo: function() {
    return (
      this.videoElem &&
      !this.mobile
    ) ? true : false;
  },


  /*
    --------------------
    Set up
    --------------------
  */

  setUp: function() {

    // set initial attribute to hide image before it's done loading
    this.elem.setAttribute('data-is', 'loading');

    if (this.video) {
      this.elem.setAttribute('data-video', '');

      // don't load or play video if `play-heros` variable is set to `false`
      if (!this.mediaPlaying) {
        this.pauseButton.textContent = this.playText;
      } else {
        this.loadVideo();
      }
    } else if (this.slideshow) {
      this.elem.setAttribute('data-slideshow', '');

      if (!this.mediaPlaying) {
        this.pauseButton.textContent = this.playText;
      } else {
        this.setUpSlides();
        this.cycleSlides();
      }
    }

    // for full-height images, programatically set height
    if (this.fullHeight) this.setFullHeight();
  },

  loadVideo: function() {
    if (this.webmSrc) {
      this.videoElem.appendChild(this.createSource(this.webmSrc, 'video/webm'));
    }

    if (this.mp4Src) {
      this.videoElem.appendChild(this.createSource(this.mp4Src, 'video/mp4'));
    }

    this.videoLoaded = true;
  },

  createSource: function(src, type) {
    var videoSource = document.createElement('source');
    videoSource.setAttribute('src', src);
    videoSource.setAttribute('type', type);

    return videoSource;
  },

  setUpSlides: function() {
    this.slidesLoaded = true;

    for (var i = 0, len = this.slides.length; i < len; i++) {
      this.slides[i].setAttribute('data-hero-slide', 'ready');
    }
  },

  setFullHeight: function() {

    // set the hero height
    var windowHeight = window.innerHeight;
    this.textHeight = this.heroText.clientHeight;
    var windowMinusHeader = windowHeight - this.heroOffset;
    var heroHeight = (windowMinusHeader > this.textHeight) ? windowMinusHeader : this.textHeight;
    this.elem.style.height = heroHeight + 'px';

    // set the background height to the taller of the size of the screen or the size of the hero
    var heroSetHeight = heroHeight + this.heroOffset;
    var backgroundHeight = (windowHeight > heroSetHeight) ? windowHeight : heroSetHeight;

    if (this.placeholderContainer) this.placeholderContainer.style.height = backgroundHeight + 'px';

    // if this is a slideshow, also set the height of the slides
    if (this.slideshow) {
      for (var i = 0, len = this.slides.length; i < len; i++) {
        this.slides[i].style.height = backgroundHeight + 'px';
      }

    // or just set the single background image
    } else {
      this.imgContainer.style.height = backgroundHeight + 'px';
    }
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {

    // add listener for scrollfade
    if (
      this.features.includes('scrollfade') &&
      this.textHeight <= this.heroHeight
    ) {
      window.addEventListener(
        'scroll',
        Util.debounce(this.fadeText.bind(this), 10)
      );
    }

    // video event listeners
    if (this.video) {
      this.loadImage();

      document.addEventListener(
        'visibilitychange',
        this.handleVisibilityChange.bind(this)
      );

      window.addEventListener(
        'scroll',
        Util.debounce(this.scrollToggle.bind(this), 10)
      );

      this.pauseButton.addEventListener(
        'click',
        this.clickToggle.bind(this)
      );

    // slideshow event listeners
    } else if (this.slideshow) {
      this.loadImage();

      window.addEventListener(
        'scroll',
        Util.debounce(this.scrollToggle.bind(this), 10)
      );

      this.pauseButton.addEventListener(
        'click',
        this.clickToggle.bind(this)
      );

    // start loading process for image
    } else if (this.image) {
      this.loadImage();

    // if text-only, set a short timeout and fire
    // loaded function to transition text
    } else {
      window.setTimeout(this.loaded.bind(this), 100);
    }

    // only resize full height heroes on orientation change
    // resize triggered by scrolling is buggy looking when the UI
    // minimizes on mobile devices on scroll
    if (this.fullHeight) {
      window.pubSub.subscribe(
        'fontsLoaded',
        this.setFullHeight.bind(this)
      );

      if (this.mobile) {
        window.addEventListener(
          'orientationchange',
          function() {
            setTimeout(this.setFullHeight.bind(this), 100);
          }.bind(this)
        );
      } else {
        window.addEventListener(
          'resize',
          Util.debounce(function() {
            this.setDimensions();
            this.setFullHeight();
          }.bind(this), 10)
        );
      }
    }
  },

  handleVisibilityChange: function() {
    if (document.hidden) {
      this.videoElem.pause();
    } else {
      if (this.mediaPlaying && Util.scrollY() < this.heroOffset) {
        this.videoElem.play();
      }
    }
  },

  loadImage: function() {
    // start a timer that triggers the load event if
    // it takes too long for the image to finish loading
    this.loadTimer = window.setTimeout(this.loaded.bind(this), this.loadTimeout);

    var img = new Image();

    // preload image
    img.src = this.imgUrl;
    img.onload = function() {

      // clear the timeout if the image finishes loading
      window.clearTimeout(this.loadTimer);

      this.loaded();
    }.bind(this);
  },

  loaded: function() {
    this.elem.setAttribute('data-is', 'loaded');
  },

  // fades out the text on tall heroes as the page is scrolled
  fadeText: function() {
    var scrollPos = Util.scrollY();
    var fadeDistance = this.heroHeight / 4;

    this.heroText.classList[(scrollPos >= fadeDistance) ? 'add' : 'remove']('-scrolled');
  },

  // generic run/pause utilities
  run: function() {
    this.pauseButton.textContent = this.pauseText;
    this.mediaPlaying = true;

    // set session variable
    sessionStorage['play-heros'] = 'true';
  },

  pause: function() {
    this.pauseButton.textContent = this.playText;
    this.mediaPlaying = false;

    // set session variable
    sessionStorage['play-heros'] = 'false';
  },

  scrollToggle: function() {
    var scrollPos = Util.scrollY();

    // once the page has been scrolled, pause the video/slideshow
    if (scrollPos > this.heroOffset) {
      if (!this.scrollPaused) {
        this.scrollPaused = true;
        this.elem.setAttribute('data-scroll-pause', '');
      }

      if (this.video) {
        if (!this.videoElem.paused) this.videoElem.pause();

      } else {
        if (this.slideTimer) {
          window.clearTimeout(this.slideTimer);
          this.slideTimer = null;
        }

      }
    } else {
      if (this.scrollPaused) {
        this.scrollPaused = false;
        this.elem.removeAttribute('data-scroll-pause');
      }

      if (this.video) {
        if (this.videoElem.paused && this.mediaPlaying) this.videoElem.play();
      } else {
        if (!this.slideTimer && this.mediaPlaying) this.cycleSlides();
      }
    }
  },

  clickToggle: function() {
    if (this.mediaPlaying) {
      this.pause();

      if (this.video) {
        this.videoElem.pause();
      } else {
        window.clearTimeout(this.slideTimer);
      }
    } else {

      // check to see if the slides have been set up
      if (this.video && !this.videoLoaded) {
        this.loadVideo();

      // check to see if the slides have been set up
      } else if (this.slideshow && !this.slidesLoaded) {
        this.setUpSlides();
      }

      this.run();

      if (this.video) {
        this.videoElem.play();
      } else {
        this.cycleSlides();
      }
    }
  },

  cycleSlides: function() {
    if (this.previousSlide) this.previousSlide.removeAttribute('data-is');

    if (this.slidePos > (this.slides.length - 1)) {
      this.slidePos = 0;
    }

    this.previousSlide = this.currentSlide;
    if (this.previousSlide) this.previousSlide.setAttribute('data-is', 'previous');

    this.currentSlide = this.slides[this.slidePos];
    this.currentSlide.setAttribute('data-is', 'current');

    this.slidePos++;

    this.slideTimer = window.setTimeout(
      this.cycleSlides.bind(this),
      this.slideTiming
    );
  }

};

module.exports = Hero;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/*
  --------------------
  Page Slideshow

  Handles progressive loading of background image as well as loading and playing ambient video if the browser requirements allow.

  The Play/Pause video button sets a session variable and prevents subsequent videos from loading and auto-playing if one has been paused -- this assumes that the visitor does not want videos playng for any reason.

  Features: scrollfade
  --------------------
*/

var Util = __webpack_require__(2);

Slideshow = function (elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

Slideshow.prototype = {

  init: function () {
    Util.fire(this, ['setVariables', 'setDimensions', 'setUp', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  currentSlide: null,
  previousSlide: null,
  loadTimer: null,
  loadTimeout: 2000,
  mediaPlaying: false,
  textHeight: null,
  scrollPaused: false,
  slidesLoaded: false,
  slidePos: 0,
  slideTimer: null,
  slideTiming: 5000, // ms
  videoLoaded: false,
  heroTypeOffset: null,
  heroTypeHeight: null,
  heroTypeWidth: null,
  heroTypeAspectRatio: (16/7),
  heroTypeAspectRatioLarge: (16/7),
  heroTypeAspectRatioExtraLarge: (16/5),

  setVariables: function () {
    this.heroTypeText = this.elem.querySelector('.hero-type-text');
    this.imgContainer = this.elem.querySelector('.hero-type-background');
    this.placeholderContainer = this.elem.querySelector('.hero-type-background-placeholder');
    this.videoElem = this.elem.querySelector('.hero-type-video');

    this.image = this.isImage();
    this.fullHeight = this.elem.classList.contains('-tall');
    this.mobile = this.isMobile();
    this.video = this.isVideo();
    this.slideshow = this.features.includes('slideshow');

    if (this.image) {
      this.imgUrl = this.backgroundImageSrc();
    }

    if (this.video) {
      this.webmSrc = this.videoElem.getAttribute('data-webm');
      this.mp4Src = this.videoElem.getAttribute('data-mp4');
    } else if (this.videoElem && this.mobile) {

      // remove video element on mobile devices
      this.videoElem.parentNode.removeChild(this.videoElem);
    }

    if (this.slideshow) {
      this.slides = this.elem.querySelectorAll('[data-hero-type-slide]');
    }

    if (this.video || this.slideshow) {
      this.mediaPlaying = (sessionStorage['play-hero-types'] === 'false') ? false : true;

      this.pauseButton = this.elem.querySelector('.hero-type-pause');
      this.pauseText = this.pauseButton.textContent;
      this.playText = this.pauseButton.getAttribute('data-toggle-text');
    }
  },

  setDimensions: function () {
    this.heroTypeWidth = this.elem.offsetWidth;

    // get the header navbar height
    this.heroTypeOffset = this.elem.offsetTop;

    // window height minus header
    this.heroTypeHeight = this.elem.offsetHeight;
  },

  backgroundImageSrc: function () {
    var imgSrc = window
      .getComputedStyle(this.imgContainer, null)
      .getPropertyValue('background-image');

    return Util.getStyleSrc(imgSrc);
  },

  isImage: function () {
    return (this.imgContainer) ? true : false;
  },

  isMobile: function () {
    return (
      // janky but simple way of filtering out mobile os's that don't support autoplay
      Util.getMobileOperatingSystem() === 'iOS' ||
      Util.getMobileOperatingSystem() === 'Android' ||
      Util.getIsMobile() ||
      // also don't load up video on smaller screens
      window.matchMedia('(max-width: 799px)').matches
    ) ? true : false;
  },

  isVideo: function () {
    return (
      this.videoElem &&
      !this.mobile
    ) ? true : false;
  },


  /*
    --------------------
    Set up
    --------------------
  */

  setUp: function () {

    // set initial attribute to hide image before it's done loading
    this.elem.setAttribute('data-is', 'loading');

    if (this.video) {
      this.elem.setAttribute('data-video', '');

      // don't load or play video if `play-hero-types` variable is set to `false`
      if (!this.mediaPlaying) {
        this.pauseButton.textContent = this.playText;
      } else {
        this.loadVideo();
      }
    } else if (this.slideshow) {
      this.elem.setAttribute('data-slideshow', '');

      if (!this.mediaPlaying) {
        this.pauseButton.textContent = this.playText;
      } else {
        this.setUpSlides();
        this.cycleSlides();
      }
    }

    // for full-height images, programatically set height
    if (this.fullHeight) this.setFullHeight();
  },

  loadVideo: function () {
    if (this.webmSrc) {
      this.videoElem.appendChild(this.createSource(this.webmSrc, 'video/webm'));
    }

    if (this.mp4Src) {
      this.videoElem.appendChild(this.createSource(this.mp4Src, 'video/mp4'));
    }

    this.videoLoaded = true;
  },

  createSource: function (src, type) {
    var videoSource = document.createElement('source');
    videoSource.setAttribute('src', src);
    videoSource.setAttribute('type', type);

    return videoSource;
  },

  setUpSlides: function () {
    this.slidesLoaded = true;

    for (var i = 0, len = this.slides.length; i < len; i++) {
      this.slides[i].setAttribute('data-hero-type-slide', 'ready');
    }
  },

  setFullHeight: function () {
    var heroHeightTarget, backgroundHeight;

    // set the hero type height
    this.textHeight = this.heroTypeText.clientHeight;

    // Target 16x9 aspect ratio
    if (window.innerWidth > 1600) {
      heroHeightTarget = this.heroTypeWidth / this.heroTypeAspectRatioExtraLarge;
    }
    else if (window.innerWidth > 1200) {
      heroHeightTarget = this.heroTypeWidth / this.heroTypeAspectRatioLarge;
    }
    else {
      heroHeightTarget = this.heroTypeWidth / this.heroTypeAspectRatio;
    }

    // If the 16x9 height is not enough to accomate the text, make it as tall as the text
    if (heroHeightTarget < this.textHeight) {
      heroHeightTarget = this.textHeight;
    }

    this.elem.style.height = heroHeightTarget + 'px';

    // set the background height to the hero height
    backgroundHeight = heroHeightTarget;

    if (this.placeholderContainer) this.placeholderContainer.style.height = backgroundHeight + 'px';

    // if this is a slideshow, also set the height of the slides
    if (this.slideshow) {
      for (var i = 0, len = this.slides.length; i < len; i++) {
        this.slides[i].style.height = backgroundHeight + 'px';
      }

      // or just set the single background image
    } else {
      this.imgContainer.style.height = backgroundHeight + 'px';
    }
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function () {

    // add listener for scrollfade
    if (
      this.features.includes('scrollfade') &&
      this.textHeight <= this.heroTypeHeight
    ) {
      window.addEventListener(
        'scroll',
        Util.debounce(this.fadeText.bind(this), 10)
      );
    }

    // video event listeners
    if (this.video) {
      this.loadImage();

      document.addEventListener(
        'visibilitychange',
        this.handleVisibilityChange.bind(this)
      );

      // window.addEventListener(
      //   'scroll',
      //   Util.debounce(this.scrollToggle.bind(this), 10)
      // );

      this.pauseButton.addEventListener(
        'click',
        this.clickToggle.bind(this)
      );

      // slideshow event listeners
    } else if (this.slideshow) {
      this.loadImage();

      // window.addEventListener(
      //   'scroll',
      //   Util.debounce(this.scrollToggle.bind(this), 10)
      // );

      this.pauseButton.addEventListener(
        'click',
        this.clickToggle.bind(this)
      );

      // start loading process for image
    } else if (this.image) {
      this.loadImage();

      // if text-only, set a short timeout and fire
      // loaded function to transition text
    } else {
      window.setTimeout(this.loaded.bind(this), 100);
    }

    // only resize full height hero types on orientation change
    // resize triggered by scrolling is buggy looking when the UI
    // minimizes on mobile devices on scroll
    if (this.fullHeight) {
      window.pubSub.subscribe(
        'fontsLoaded',
        this.setFullHeight.bind(this)
      );

      if (this.mobile) {
        window.addEventListener(
          'orientationchange',
          function () {
            setTimeout(this.setFullHeight.bind(this), 100);
          }.bind(this)
        );
      } else {
        window.addEventListener(
          'resize',
          Util.debounce(function () {
            this.setDimensions();
            this.setFullHeight();
          }.bind(this), 10)
        );
      }
    }
  },

  handleVisibilityChange: function () {
    if (document.hidden) {
      this.videoElem.pause();
    } else {
      if (this.mediaPlaying && Util.scrollY() < this.heroTypeOffset) {
        this.videoElem.play();
      }
    }
  },

  loadImage: function () {
    // start a timer that triggers the load event if
    // it takes too long for the image to finish loading
    this.loadTimer = window.setTimeout(this.loaded.bind(this), this.loadTimeout);

    var img = new Image();

    // preload image
    img.src = this.imgUrl;
    img.onload = function () {

      // clear the timeout if the image finishes loading
      window.clearTimeout(this.loadTimer);

      this.loaded();
    }.bind(this);
  },

  loaded: function () {
    this.elem.setAttribute('data-is', 'loaded');
  },

  // fades out the text on tall hero types as the page is scrolled
  fadeText: function () {
    var scrollPos = Util.scrollY();
    var fadeDistance = this.heroTypeHeight / 4;

    this.heroTypeText.classList[(scrollPos >= fadeDistance) ? 'add' : 'remove']('-scrolled');
  },

  // generic run/pause utilities
  run: function () {
    this.pauseButton.textContent = this.pauseText;
    this.mediaPlaying = true;

    // set session variable
    sessionStorage['play-hero-types'] = 'true';
  },

  pause: function () {
    this.pauseButton.textContent = this.playText;
    this.mediaPlaying = false;

    // set session variable
    sessionStorage['play-hero-types'] = 'false';
  },

  scrollToggle: function () {
    var scrollPos = Util.scrollY();

    // once the page has been scrolled, pause the video/slideshow
    if (scrollPos > this.heroTypeOffset) {
      if (!this.scrollPaused) {
        this.scrollPaused = true;
        this.elem.setAttribute('data-scroll-pause', '');
      }

      if (this.video) {
        if (!this.videoElem.paused) this.videoElem.pause();

      } else {
        if (this.slideTimer) {
          window.clearTimeout(this.slideTimer);
          this.slideTimer = null;
        }

      }
    } else {
      if (this.scrollPaused) {
        this.scrollPaused = false;
        this.elem.removeAttribute('data-scroll-pause');
      }

      if (this.video) {
        if (this.videoElem.paused && this.mediaPlaying) this.videoElem.play();
      } else {
        if (!this.slideTimer && this.mediaPlaying) this.cycleSlides();
      }
    }
  },

  clickToggle: function () {
    if (this.mediaPlaying) {
      this.pause();

      if (this.video) {
        this.videoElem.pause();
      } else {
        window.clearTimeout(this.slideTimer);
      }
    } else {

      // check to see if the slides have been set up
      if (this.video && !this.videoLoaded) {
        this.loadVideo();

        // check to see if the slides have been set up
      } else if (this.slideshow && !this.slidesLoaded) {
        this.setUpSlides();
      }

      this.run();

      if (this.video) {
        this.videoElem.play();
      } else {
        this.cycleSlides();
      }
    }
  },

  cycleSlides: function () {
    if (this.previousSlide) this.previousSlide.removeAttribute('data-is');

    if (this.slidePos > (this.slides.length - 1)) {
      this.slidePos = 0;
    }

    this.previousSlide = this.currentSlide;
    if (this.previousSlide) this.previousSlide.setAttribute('data-is', 'previous');

    this.currentSlide = this.slides[this.slidePos];
    this.currentSlide.setAttribute('data-is', 'current');

    this.slidePos++;

    this.slideTimer = window.setTimeout(
      this.cycleSlides.bind(this),
      this.slideTiming
    );
  }

};

module.exports = Slideshow;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/*
  --------------------
  Page Hero

  Handles progressive loading of background image as well as loading and playing ambient video if the browser requirements allow.

  The Play/Pause video button sets a session variable and prevents subsequent videos from loading and auto-playing if one has been paused -- this assumes that the visitor does not want videos playng for any reason.

  Features: scrollfade
  --------------------
*/

var Util = __webpack_require__(2);

Hero = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

Hero.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'setDimensions', 'setUp', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  currentSlide: null,
  previousSlide: null,
  loadTimer: null,
  loadTimeout: 2000,
  mediaPlaying: false,
  textHeight: null,
  scrollPaused: false,
  slidesLoaded: false,
  slidePos: 0,
  slideTimer: null,
  slideTiming: 5000, // ms
  videoLoaded: false,

  setVariables: function() {
    this.heroText = this.elem.querySelector('.hero-text');
    this.imgContainer = this.elem.querySelector('.hero-background');
    this.placeholderContainer = this.elem.querySelector('.hero-background-placeholder');
    this.videoElem = this.elem.querySelector('.hero-video');

    this.image = this.isImage();
    this.fullHeight = this.elem.classList.contains('-tall');
    this.mobile = this.isMobile();
    this.video = this.isVideo();
    this.slideshow = this.features.includes('slideshow');

    if (this.image) {
      this.imgUrl = this.backgroundImageSrc();
    }

    if (this.video) {
      this.webmSrc = this.videoElem.getAttribute('data-webm');
      this.mp4Src = this.videoElem.getAttribute('data-mp4');
    } else if (this.videoElem && this.mobile) {

      // remove video element on mobile devices
      this.videoElem.parentNode.removeChild(this.videoElem);
    }

    if (this.slideshow) {
      this.slides = this.elem.querySelectorAll('[data-hero-slide]');
    }

    if (this.video || this.slideshow) {
      this.mediaPlaying = (sessionStorage['play-heros'] === 'false') ? false : true;

      this.pauseButton = this.elem.querySelector('.hero-pause');
      this.pauseText = this.pauseButton.textContent;
      this.playText = this.pauseButton.getAttribute('data-toggle-text');
    }
  },

  setDimensions: function() {

    // effectively the header height
    this.heroOffset = this.elem.offsetTop;

    // window height minus header
    this.heroHeight = window.innerHeight - this.heroOffset;
  },

  backgroundImageSrc: function() {
    var imgSrc = window
      .getComputedStyle(this.imgContainer, null)
      .getPropertyValue('background-image');

    return Util.getStyleSrc(imgSrc);
  },

  isImage: function() {
    return (this.imgContainer) ? true : false;
  },

  isMobile: function() {
    return (
      // janky but simple way of filtering out mobile os's that don't support autoplay
      Util.getMobileOperatingSystem() === 'iOS' ||
      Util.getMobileOperatingSystem() === 'Android' ||

      // also don't load up video on smaller screens
      window.matchMedia('(max-width: 760px').matches
    ) ? true : false;
  },

  isVideo: function() {
    return (
      this.videoElem &&
      !this.mobile
    ) ? true : false;
  },


  /*
    --------------------
    Set up
    --------------------
  */

  setUp: function() {

    // set initial attribute to hide image before it's done loading
    this.elem.setAttribute('data-is', 'loading');

    if (this.video) {
      this.elem.setAttribute('data-video', '');

      // don't load or play video if `play-heros` variable is set to `false`
      if (!this.mediaPlaying) {
        this.pauseButton.textContent = this.playText;
      } else {
        this.loadVideo();
      }
    } else if (this.slideshow) {
      this.elem.setAttribute('data-slideshow', '');

      if (!this.mediaPlaying) {
        this.pauseButton.textContent = this.playText;
      } else {
        this.setUpSlides();
        this.cycleSlides();
      }
    }

    // for full-height images, programatically set height
    if (this.fullHeight) this.setFullHeight();
  },

  loadVideo: function() {
    if (this.webmSrc) {
      this.videoElem.appendChild(this.createSource(this.webmSrc, 'video/webm'));
    }

    if (this.mp4Src) {
      this.videoElem.appendChild(this.createSource(this.mp4Src, 'video/mp4'));
    }

    this.videoLoaded = true;
  },

  createSource: function(src, type) {
    var videoSource = document.createElement('source');
    videoSource.setAttribute('src', src);
    videoSource.setAttribute('type', type);

    return videoSource;
  },

  setUpSlides: function() {
    this.slidesLoaded = true;

    for (var i = 0, len = this.slides.length; i < len; i++) {
      this.slides[i].setAttribute('data-hero-slide', 'ready');
    }
  },

  setFullHeight: function() {

    // set the hero height
    var windowHeight = window.innerHeight;
    this.textHeight = this.heroText.clientHeight;
    var windowMinusHeader = windowHeight - this.heroOffset;
    var heroHeight = (windowMinusHeader > this.textHeight) ? windowMinusHeader : this.textHeight;
    // Home hero is a special snowflake, conditional checking to see what we're dealing with.
    if (this.elem.id != "home-hero") {
      this.elem.style.height = heroHeight + 'px';

      // set the background height to the taller of the size of the screen or the size of the hero
      var heroSetHeight = heroHeight + this.heroOffset;
      var backgroundHeight = (windowHeight > heroSetHeight) ? windowHeight : heroSetHeight;

      if (this.placeholderContainer) this.placeholderContainer.style.height = backgroundHeight + 'px';

      // if this is a slideshow, also set the height of the slides
      if (this.slideshow) {
        for (var i = 0, len = this.slides.length; i < len; i++) {
          this.slides[i].style.height = backgroundHeight + 'px';
        }

        // or just set the single background image
      } else {
        this.imgContainer.style.height = backgroundHeight + 'px';
      }
    }
    else {
      if (this.mobile) {
        this.elem.style.height = heroHeight + "px";
      }
      else if (this.videoElem.clientHeight + this.heroOffset > windowHeight) {
        this.heroText.style.top = windowMinusHeader - this.textHeight + "px";
        this.pauseButton.style.top = windowMinusHeader - this.pauseButton.clientHeight + "px";
      }
      else {
        this.heroText.style.top = this.videoElem.clientHeight - this.textHeight + "px";
        this.pauseButton.style.top = this.videoElem.clientHeight - this.pauseButton.clientHeight + "px";
      }
    }
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {

    // add listener for scrollfade
    if (
      this.features.includes('scrollfade') &&
      this.textHeight <= this.heroHeight
    ) {
      window.addEventListener(
        'scroll',
        Util.debounce(this.fadeText.bind(this), 10)
      );
    }

    // video event listeners
    if (this.video) {
      this.loadImage();

      document.addEventListener(
        'visibilitychange',
        this.handleVisibilityChange.bind(this)
      );

      window.addEventListener(
        'scroll',
        Util.debounce(this.scrollToggle.bind(this), 10)
      );

      this.pauseButton.addEventListener(
        'click',
        this.clickToggle.bind(this)
      );

    // slideshow event listeners
    } else if (this.slideshow) {
      this.loadImage();

      window.addEventListener(
        'scroll',
        Util.debounce(this.scrollToggle.bind(this), 10)
      );

      this.pauseButton.addEventListener(
        'click',
        this.clickToggle.bind(this)
      );

    // start loading process for image
    } else if (this.image) {
      this.loadImage();

    // if text-only, set a short timeout and fire
    // loaded function to transition text
    } else {
      window.setTimeout(this.loaded.bind(this), 100);
    }

    // only resize full height heroes on orientation change
    // resize triggered by scrolling is buggy looking when the UI
    // minimizes on mobile devices on scroll
    if (this.fullHeight) {
      window.pubSub.subscribe(
        'fontsLoaded',
        this.setFullHeight.bind(this)
      );

      if (this.mobile) {
        window.addEventListener(
          'orientationchange',
          function() {
            setTimeout(this.setFullHeight.bind(this), 100);
          }.bind(this)
        );
      } else {
        window.addEventListener(
          'resize',
          Util.debounce(function() {
            this.setDimensions();
            this.setFullHeight();
          }.bind(this), 10)
        );
      }
    }
  },

  handleVisibilityChange: function() {
    if (document.hidden) {
      this.videoElem.pause();
    } else {
      if (this.mediaPlaying && Util.scrollY() < this.heroOffset) {
        this.videoElem.play();
      }
    }
  },

  loadImage: function() {
    // start a timer that triggers the load event if
    // it takes too long for the image to finish loading
    this.loadTimer = window.setTimeout(this.loaded.bind(this), this.loadTimeout);

    var img = new Image();

    // preload image
    img.src = this.imgUrl;
    img.onload = function() {

      // clear the timeout if the image finishes loading
      window.clearTimeout(this.loadTimer);

      this.loaded();
    }.bind(this);
  },

  loaded: function() {
    this.elem.setAttribute('data-is', 'loaded');
  },

  // fades out the text on tall heroes as the page is scrolled
  fadeText: function() {
    // var scrollPos = Util.scrollY();
    // var fadeDistance = this.heroHeight / 4;
    //
    // this.heroText.classList[(scrollPos >= fadeDistance) ? 'add' : 'remove']('-scrolled');
  },

  // generic run/pause utilities
  run: function() {
    this.pauseButton.textContent = this.pauseText;
    this.mediaPlaying = true;

    // set session variable
    sessionStorage['play-heros'] = 'true';
  },

  pause: function() {
    this.pauseButton.textContent = this.playText;
    this.mediaPlaying = false;

    // set session variable
    sessionStorage['play-heros'] = 'false';
  },

  scrollToggle: function() {
    var scrollPos = Util.scrollY();

    // once the page has been scrolled, pause the video/slideshow
    if (scrollPos > this.heroHeight / 2) {
      if (!this.scrollPaused) {
        this.scrollPaused = true;
        this.elem.setAttribute('data-scroll-pause', '');
      }

      if (this.video) {
        if (!this.videoElem.paused) this.videoElem.pause();

      } else {
        if (this.slideTimer) {
          window.clearTimeout(this.slideTimer);
          this.slideTimer = null;
        }

      }
    } else {
      if (this.scrollPaused) {
        this.scrollPaused = false;
        this.elem.removeAttribute('data-scroll-pause');
      }

      if (this.video) {
        if (this.videoElem.paused && this.mediaPlaying) this.videoElem.play();
      } else {
        if (!this.slideTimer && this.mediaPlaying) this.cycleSlides();
      }
    }
  },

  clickToggle: function() {
    if (this.mediaPlaying) {
      this.pause();

      if (this.video) {
        this.videoElem.pause();
      } else {
        window.clearTimeout(this.slideTimer);
      }
    } else {

      // check to see if the slides have been set up
      if (this.video && !this.videoLoaded) {
        this.loadVideo();

      // check to see if the slides have been set up
      } else if (this.slideshow && !this.slidesLoaded) {
        this.setUpSlides();
      }

      this.run();

      if (this.video) {
        this.videoElem.play();
      } else {
        this.cycleSlides();
      }
    }
  },

  cycleSlides: function() {
    if (this.previousSlide) this.previousSlide.removeAttribute('data-is');

    if (this.slidePos > (this.slides.length - 1)) {
      this.slidePos = 0;
    }

    this.previousSlide = this.currentSlide;
    if (this.previousSlide) this.previousSlide.setAttribute('data-is', 'previous');

    this.currentSlide = this.slides[this.slidePos];
    this.currentSlide.setAttribute('data-is', 'current');

    this.slidePos++;

    this.slideTimer = window.setTimeout(
      this.cycleSlides.bind(this),
      this.slideTiming
    );
  }

};

module.exports = Hero;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);

ImageCallout = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

ImageCallout.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'setUp', 'setHeight', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  captionState: true,

  setVariables: function() {
    this.img = this.elem.querySelector('[data-image-callout="image"]');
    this.imgText = this.elem.querySelector('[data-image-callout="text"]');
    this.imgHeight = this.elem.getAttribute('data-image-height');
    this.imgWidth = this.elem.getAttribute('data-image-width');
    this.imgCaption = this.elem.querySelector('[data-image-callout="caption"]');

    this.offsetAttr = this.elem.getAttribute('data-offset');
    this.offset = (this.offsetAttr) ? this.offsetAttr : '40%';

    this.language = (this.imgCaption) ? JSON.parse(this.imgCaption.getAttribute('data-language')) : {};

    this.ratio = this.imgHeight / this.imgWidth;

    // save for comparison on resize
    this.currentWidth = window.innerWidth;
  },


  /*
    --------------------
    Set Up
    --------------------
  */

  setUp: function() {
    if (this.imgCaption) this.addCaptionToggle();
    if (this.imgText) this.setUpWaypoint();
  },

  addCaptionToggle: function() {
    this.captionToggle = document.createElement('button');

    // caption is always visible to screen readers
    // so toggle button should be hidden
    this.captionToggle.setAttribute('aria-hidden', 'true');
    this.captionToggle.classList.add('image-callout-caption-toggle');
    this.captionToggle.textContent = this.language.caption;

    this.imgCaption.appendChild(this.captionToggle);

    this.toggleCaption();
  },

  setUpWaypoint: function() {
    new Waypoint({
      element: this.elem,
      handler: function() {
        this.elem.setAttribute('data-in-view', '');
      }.bind(this),
      offset: this.offset
    });
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {
    if (this.captionToggle) {
      this.captionToggle.addEventListener('click', this.toggleCaption.bind(this));
    }

    window.pubSub.subscribe('fontsLoaded', this.setHeight.bind(this));
    window.addEventListener('resize', Util.debounce(this.testResize.bind(this), 100));
  },

  testResize: function() {

    // only execut if width changes
    if (window.innerWidth !== this.currentWidth) {
      this.currentWidth = window.innerWidth;
      this.setHeight();
    }
  },

  // container and image sizing
  setHeight: function() {

    // set styles on container
    var newHeight = this.containerHeight();

    this.elem.setAttribute('data-init', '');
    this.elem.style.height = newHeight + 'px';

    // set styles on image
    var imgSizes = this.imageSizes(newHeight);

    if (this.img !== null && typeof this.img !== 'undefined' ) {
      this.img.style.height = imgSizes.height + 'px';
      this.img.style.width = imgSizes.width + 'px';
    }
  },

  containerHeight: function() {
    var newHeight = this.ratio * this.elem.parentElement.clientWidth;

    // don't let container get taller than 90% of the window...
    if (newHeight > (window.innerHeight * 0.9)) {
      newHeight = window.innerHeight * 0.9;
    }
    // Set the height of image-callout div according to the inner content
    // for mobile devices.
    // We are getting the height of just one child div of image-callout
    // considering that image-callouts will have only one sizing container.
    if (window.matchMedia("(max-width: 769px)").matches) {
      var contentHeight = this.elem.querySelector('.u-container').clientHeight;
      if (newHeight < contentHeight) {
        newHeight = contentHeight;
        this.elem.querySelector('.image-callout-img-container').style.display = 'none';
      }
    }

    if (this.imgText) {
      var textHeight = this.imgText.offsetHeight;

      // re-evaluate new height to make sure it's not taller than the text
      if (
        newHeight < textHeight ||
        (this.features.includes('text-center') && !this.features.includes('image-height'))
      ) {
        newHeight = textHeight;
      }
    }

    return newHeight;
  },

  imageSizes: function(h) {
    var parentWidth = this.elem.parentElement.clientWidth;
    var containerRatio = h / parentWidth;

    return {
      'height': (containerRatio < this.ratio) ? (parentWidth * this.ratio) : h,
      'width': (containerRatio < this.ratio) ? parentWidth : (h / this.ratio)
    };
  },

  // caption toggling
  toggleCaption: function() {
    this.captionState = !this.captionState;

    this.elem.setAttribute('data-caption-visible', this.captionState);
  }

};

module.exports = ImageCallout;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/*
  --------------------
  ImpactStatistics
  Generic utility for triggering CSS animations when a container
  is scrolled into view. Uses waypoints.js.

  Required: data-module="impact-statistics"
  --------------------
*/
var Util = __webpack_require__(2);

ImpactStatistics = function() {
  this.init();
};

ImpactStatistics.prototype = {

  init: function () {

    // get ID for element
    var containerImg = document.querySelectorAll(".layout-container.stat-background-img");
    var impactStatsContainer = document.getElementById('impactstat');
    var scrollPos = 0;
    var elements = document.getElementsByClassName("stat-set");
    var flagUp = document.querySelectorAll(".impact-statitics-bottom");
    var flagDown = document.querySelectorAll(".impact-statitics-top");
    var impactStatDivs = document.querySelectorAll(".impact-stat-list div");
    var animate = 'fade-up';

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function checkPosition() {
      const visibleUp = isInViewport(flagUp.item(0)) ? true : false;
      const visibleDown = isInViewport(flagDown.item(0)) ? true : false;
      var visibleDivs = false;
      for (var i = 0; i < impactStatDivs.length; i++) {
        if (isInViewport(impactStatDivs.item(i))) {
          visibleDivs = true;
        }
      }

      if (visibleUp) {
        animate = 'fade-down';
      }
      if (visibleDown) {
        animate = 'fade-up';
      }
      var windowY = window.scrollY;
      if (visibleUp || visibleDown || visibleDivs) {
        setTimeout(function () {
          elements.item(0).setAttribute("data-is", "visible");
          elements.item(1).setAttribute("data-is", "visible");
          elements.item(2).setAttribute("data-is", "visible");
        }, 250);
      }
      else {
        elements.item(0).setAttribute("data-animate", animate);
        elements.item(1).setAttribute("data-animate", animate);
        elements.item(2).setAttribute("data-animate", animate);
        setTimeout(function () {
          elements.item(0).setAttribute("data-is", "ready");
          elements.item(1).setAttribute("data-is", "ready");
          elements.item(2).setAttribute("data-is", "ready");
        }, 250);
      }
      scrollPos = windowY;
    }

    checkPosition();
    window.addEventListener('scroll', checkPosition);

    function outerHeight(element) {
      const height = element.offsetHeight,
        style = window.getComputedStyle(element);

      return ['top', 'bottom']
        .map(function(side) { return parseInt(style['margin-' + side], 10) })
        .reduce(function(total, side) { return total + side, height })
    }

    function resizeCards() {
      var maxSize = 20;
      var boxes = document.getElementsByClassName("stat-wrapper-description");
      Array.prototype.forEach.call(boxes, function (box, index) {
        var titleh = outerHeight(box.querySelectorAll('.impact-stat-description')[0]);
        var descriptionh = outerHeight(box.querySelectorAll('.text-stat-title')[0]);
        var totalh = titleh + descriptionh + 20;
        if (totalh > maxSize) {
          maxSize = totalh;
        }
      })
      Array.prototype.forEach.call(boxes, function (box, index) {
        box.style.height = maxSize + "px";
      });
    }
    window.addEventListener('resize', resizeCards);

    function resizeTitle() {
      var slides = document.querySelectorAll('.impact-stat-number span');
      Array.prototype.forEach.call(slides, function (slide, index) {
        if (slide.offsetWidth > 121) {
          slide.parentElement.parentElement.style.flexBasis = '60%';
        }
      });
    }
    window.addEventListener('resize', resizeTitle);
    resizeCards();
    resizeTitle();
  }

};

module.exports = ImpactStatistics;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/*
  --------------------
  InView
  Generic utility for triggering CSS animations when a container
  is scrolled into view. Uses waypoints.js.

  Required: data-module="in-view"
  Optional: data-offset="percentage|number|bottom-in-view" (any value that waypoints.js accepts - http://imakewebthings.com/waypoints/api/offset-option/)
  --------------------
*/

var Util = __webpack_require__(2);

InView = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

InView.prototype = {

  init: function() {

    // add data attribute to indicate an element is being watched
    this.elem.setAttribute('data-is', 'ready');

    // get optional offset
    var elemOffset = this.elem.getAttribute('data-offset') || '0';

    // add new Waypoint
    new Waypoint({
      element: this.elem,
      handler: function() {
        this.element.setAttribute('data-is', 'visible');
      },
      offset: elemOffset
    });
  }

};

module.exports = InView;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);
var Vars = __webpack_require__(3);
var whatInput = __webpack_require__(17);

LinkDropdown = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

LinkDropdown.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'setUp', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  isOpen: true,

  setVariables: function() {
    this.list = this.elem.querySelector('[data-dropdown-list]');
    this.links = this.list.querySelectorAll('a');

    // set unique id on list if id doesn't already exist
    this.listId = this.list.getAttribute('id');

    if (!this.listId) {
      this.listId = 'dropdown-' + Util.guid();
      this.list.setAttribute('id', this.listId);
    }

    // get the language data attribute
    this.language = JSON.parse(this.elem.getAttribute('data-language'));
  },


  /*
    --------------------
    Set up
    --------------------
  */

  setUp: function() {
    Util.fire(this, ['addToggle', 'toggleDropdown']);
  },

  addToggle: function() {
    this.toggle = document.createElement('button');
    this.toggle.setAttribute('aria-expanded', 'false');
    this.toggle.setAttribute('aria-controls', this.listId);
    this.toggle.classList.add('link-dropdown-toggle');
    this.toggle.textContent = this.language.label;

    this.elem.insertBefore(this.toggle, this.elem.firstChild);
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {
    // named event handlers for binding/unbinding
    this.onCloseHandler = this.closeDropdown.bind(this);
    this.onFocusRestrict = this.a11yFocus.bind(this);
    this.onDismiss = this.dismiss.bind(this);

    this.toggle.addEventListener('click', this.toggleDropdown.bind(this));
  },

  toggleEventListners: function(action) {
    document[action]('keydown', this.onCloseHandler);
    window[action]('keydown', this.onFocusRestrict);

    // click or touch outside dropdown closes it
    document.body[action]('click', this.onDismiss);
  },

  a11yFocus: function(event) {
    Util.focusRestrict(event, this.elem, this.isOpen);
  },

  closeDropdown: function() {
    if (this.isOpen && event.which === Vars.keys.ESC) this.toggleDropdown();
  },

  dismiss: function(event) {
    if (!event.target.closest('[data-module="link-dropdown"]')) this.toggleDropdown();
  },

  toggleDropdown: function() {
    this.isOpen = !this.isOpen;

    this.elem.setAttribute('data-is', (this.isOpen) ? 'open' : 'closed');

    for (var i = 0, len = this.links.length; i < len; i++) {
      this.links[i].setAttribute('tabindex', (this.isOpen) ? '0' : '-1');
    }

    this.toggleEventListners((this.isOpen) ? 'addEventListener' : 'removeEventListener');

    this.manageFocus();
  },

  manageFocus: function() {
    if (whatInput.ask() === 'keyboard') {
      if (this.isOpen) {
        this.links[0].focus();
      } else {
        this.toggle.focus();
      }
    }
  }

};

module.exports = LinkDropdown;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);
var whatInput = __webpack_require__(17);

Modal = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

Modal.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'setUp', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  classContainer: 'modal-container',
  classClose: 'modal-close',
  classCloseAlt: 'modal-close-alt',
  classContent: 'modal-content',
  isOpen: false,

  setVariables: function() {
    this.contentWrapper = document.querySelector('[data-a11y-content-wrapper]');
    this.elemId = this.elem.getAttribute('id');

    // find all the links that point to this modal
    this.triggers = document.querySelectorAll('[href="#' + this.elemId + '"]');

    // get the language data attribute
    this.language = JSON.parse(this.elem.getAttribute('data-language'));

    // remove the element from the dom
    this.elem.parentNode.removeChild(this.elem);
  },


  /*
    --------------------
    Set up
    --------------------
  */

  setUp: function() {

    // is there already a modal container?
    this.modalContainer = document.querySelector('.' + this.classContainer);

    // if not, create one
    if (!this.modalContainer) {
      this.addModal();

    // otherwise save the variables
    } else {
      this.modalClose = this.modalContainer.querySelector('.' + this.classClose);
      this.modalCloseAlt = this.modalContainer.querySelector('.' + this.classCloseAlt);
      this.modalContent = this.modalContainer.querySelector('.' + this.classContent);
    }
  },

  addModal: function() {

    // outer container/ui block
    this.modalContainer = document.createElement('div');
    this.modalContainer.classList.add(this.classContainer);

    // close button
    this.modalClose = document.createElement('button');
    this.modalClose.classList.add(this.classClose);
    this.modalClose.textContent = this.language.close;

    // alternate close links
    this.modalCloseAltP = document.createElement('p');
    this.modalCloseAltP.classList.add(this.classCloseAlt);
    this.modalCloseAltP.classList.add('u-text-centered');

    this.modalCloseAlt = document.createElement('button');
    this.modalCloseAlt.textContent = this.language.close;

    this.modalCloseAltP.appendChild(this.modalCloseAlt);

    // content container
    this.modalContent = document.createElement('div');
    this.modalContent.classList.add(this.classContent);
    this.modalContent.setAttribute('tabindex', '-1');

    this.modalContainer.appendChild(this.modalClose);
    this.modalContainer.appendChild(this.modalContent);
    this.modalContainer.appendChild(this.modalCloseAltP);

    document.body.appendChild(this.modalContainer);
  },

  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {

    // named event handlers for binding/unbinding
    this.onCloseHandler = this.closeModal.bind(this);
    this.onFocusRestrict = this.a11yFocus.bind(this);

    for (var i = 0, len = this.triggers.length; i < len; i++) {
      this.triggers[i].addEventListener('click', this.openModal.bind(this));
      this.triggers[i].addEventListener('mouseenter', this.hoverTriggers.bind(this));
      this.triggers[i].addEventListener('mouseleave', this.hoverTriggers.bind(this));
      this.triggers[i].addEventListener('focus', this.hoverTriggers.bind(this));
      this.triggers[i].addEventListener('blur', this.hoverTriggers.bind(this));
    }
  },

  hoverTriggers: function() {
    for (var i = 0, len = this.triggers.length; i < len; i++) {
      this.triggers[i].classList.toggle('-hover');
    }
  },

  a11yFocus: function(event) {
    Util.focusRestrict(event, this.modalContainer, this.isOpen);
  },

  toggleEventListners: function(action) {
    this.modalClose[action]('click', this.onCloseHandler);
    this.modalCloseAlt[action]('click', this.onCloseHandler);
    document[action]('keydown', this.onCloseHandler);
    window[action]('keydown', this.onFocusRestrict);
  },

  openModal: function(event) {

    // fix page scrolling and save reference to current scroll position
    this.scrollPos = Util.scrollY();
    document.documentElement.setAttribute('data-scroll', 'false');
    document.body.style.top = '-' + this.scrollPos + 'px';

    // save reference to link that was clicked to open modal
    this.opener = document.activeElement;

    // hide all content that's not inside the a11y content wrapper from screen readers
    this.contentWrapper.setAttribute('aria-hidden', 'true');
    this.isOpen = true;

    // add content to modal and set open class
    this.modalContent.innerHTML = this.elem.innerHTML;
    this.modalContainer.classList.add('-modal-open');

    // trigger any module features
    if (this.features.length) {
      var Module = __webpack_require__(18)("./" + this.features[0]);
      new Module(this.modalContent.firstElementChild);
    }

    // bind event listeners on modal
    this.toggleEventListners('addEventListener');

    // safely re-inits element queries on modal content
    // without doubling queries on already-attached elements
    ElementQueries.init();

    // send focus to modal container
    this.modalContent.focus();

    event.preventDefault();
  },

  closeModal: function(event) {
    if (this.isOpen && (!event.keyCode || event.keyCode === 27)) {

      // send focus back to opener
      if (whatInput.ask() === 'keyboard') this.opener.focus();

      // make content visible to screen readers
      this.contentWrapper.removeAttribute('aria-hidden');
      this.isOpen = false;

      // remove open class and empty modal container
      this.modalContainer.classList.remove('-modal-open');

      // setTimeout to give exit animation time to run
      window.setTimeout(function() {
        this.modalContent.innerHTML = '';
      }.bind(this), 500);

      // un-bind all event listeners
      this.toggleEventListners('removeEventListener');

      // reset scroll position and remove scroll restriction
      document.documentElement.removeAttribute('data-scroll');
      document.body.style.top = 'auto';
      window.scroll(0, this.scrollPos);

      event.preventDefault();
    }
  }

};

module.exports = Modal;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);
var Vars = __webpack_require__(3);
var whatInput = __webpack_require__(17);

NavGroup = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

NavGroup.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'toggleSetup', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  isOpen: false,
  mq: window.matchMedia(Vars.mq.navigation),

  setVariables: function() {

    this.guid = Util.guid();

    //
    // dom variables
    //

    this.headingLink = this.elem.querySelector('[data-nav-headinglink]');
    this.subList = this.elem.querySelector('[data-nav-sublist]');
    this.subLinks = this.subList.querySelectorAll('a, button, input, select, textarea');

    //
    // named event handlers for binding/unbinding
    //

    // mouse events
    this.onMouseEnterToggle = this.mouseToggle.bind(this);
    this.onMouseLeaveToggle = this.mouseToggle.bind(this);

    // prevent default tab behavior when moving through sub list
    this.onBlockTab = this.blockTab.bind(this);

    // trap focus within the sub list
    this.onFocusRestrict = this.focusRestrict.bind(this);

  },


  /*
    --------------------
    Set up
    --------------------
  */

  toggleSetup: function() {

    // always set aria expanded
    this.headingLink.setAttribute('aria-expanded', 'false');

    // always reset to data-is="close"
    this.subList.setAttribute('data-is', 'close');

    // always set up tab indexes
    this.toggleTabindex();

    // large screens
    if (this.mq.matches) {

      // only do this once, not for each nav group
      if (!document.body.hasAttribute('data-nav-is')) {
        document.body.setAttribute('data-nav-is', 'close');

        if (this.features.includes('setHeight')) {
          Vars.nav.style.height = this.headingLink.offsetHeight + 'px';
        }
      }

      this.subList.setAttribute(
        'data-columns',
        this.subList.querySelectorAll('.site-nav-subitem').length
      );

      // add desktop event listeners
      this.toggleListeners('addEventListener');

    // small screens
    } else {

      // only do this once, not for each nav group
      if (document.body.hasAttribute('data-nav-is')) {
        document.body.removeAttribute('data-nav-is');

        Vars.nav.style.height = null;
      }

      // remove desktop event listeners
      this.toggleListeners('removeEventListener');
    }
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {
    this.mq.addListener(this.toggleSetup.bind(this));

    // touch events to toggle subnav
    this.headingLink.addEventListener('click', this.clickToggle.bind(this));

    // keyboard events
    this.headingLink.addEventListener('keydown', this.blockScroll.bind(this));
    this.subList.addEventListener('keydown', this.blockScroll.bind(this));

    // down arrow opens subnav and focuses first link
    this.headingLink.addEventListener('keyup', this.keyboardOpen.bind(this));

    // pubsub events
    window.pubSub.subscribe('navOpen', function(obj) {
      if (obj.guid !== this.guid) this.toggleNav('close');
    }.bind(this));

    window.pubSub.subscribe('closeSubNav', function() {
      this.toggleNav('close');
    }.bind(this));
  },

  toggleListeners: function(action) {

    // mouse events
    this.elem[action]('mouseenter', this.onMouseEnterToggle);
    this.elem[action]('mouseleave', this.onMouseLeaveToggle);
  },

  clickToggle: function(event) {

    // desktop/laptop w/ touch, only a `touch` event opens the subnav
    if (this.mq.matches) {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      // verify touch via what-input
      if (whatInput.ask() === 'touch' || navigator.userAgent.match(/(\(iPod|\(iPhone|\(iPad)/)) {
        window.pubSub.publish('navOpen', {
          guid: this.guid
        });

        this.toggleNav((this.isOpen) ? 'close' : 'open');

        event.preventDefault();
      }

    // on the small screen version, any `click` event opens the subnav
    } else {
      window.pubSub.publish('navOpen', {
        guid: this.guid
      });

      this.toggleNav((this.isOpen) ? 'close' : 'open');

      event.preventDefault();
    }
  },

  mouseToggle: function(event) {

    // make sure event is mouse-initiated via what-input
    // and not side effect of touch events that can fire mouse events
    if (whatInput.ask('loose') === 'mouse') {
      this.toggleNav((event.type === 'mouseenter') ? 'open' : 'close');
    }
  },

  keyboardOpen: function(event) {

    // if arrow down key is used, open the subnav
    // and move focus to first link
    if (event.which === Vars.keys.DOWN) {
      this.toggleNav('open');

      // a small delay is necessary to allow menu to open
      // before setting focus
      setTimeout(function() {
        this.subLinks[0].focus();
      }.bind(this), 300);
    }
  },

  toggleNav: function(state) {
    this.isOpen = (state === 'open') ? true : false;

    document.body.setAttribute('data-nav-is', state);
    this.elem.setAttribute('data-is', state);
    this.subList.setAttribute('data-is', state);
    this.headingLink.setAttribute('aria-expanded', this.isOpen);

    this.toggleTabindex();

    if (this.features.includes('setHeight') && this.mq.matches) {
      var headingHeight = this.headingLink.offsetHeight;
      var newHeight = (this.isOpen) ? (this.subList.offsetHeight + headingHeight) : headingHeight;

      Vars.nav.style.height = newHeight + 'px';
    }

    if (this.mq.matches) this.toggleSubListEvents(
      (state === 'open') ? 'addEventListener' : 'removeEventListener'
    );
  },

  toggleSubListEvents: function(action) {

    // prevent default tab behavior when moving through sub list
    this.subList[action]('keydown', this.onBlockTab);

    // trap focus within the sub list
    this.subList[action]('keyup', this.onFocusRestrict);
  },


  /*
    --------------------
    Utilities
    --------------------
  */

  toggleTabindex: function() {
    var tabSetting = (this.isOpen) ? '0' : '-1';

    for (var i = 0, len = this.subLinks.length; i < len; i++) {
      this.subLinks[i].setAttribute('tabindex', tabSetting);
    }
  },

  // prevents the default behavior of the tab key
  // so it can be manually handled
  blockTab: function(event) {
    if (event.which === Vars.keys.TAB) event.preventDefault();
  },

  // prevents scrolling with arrow keys
  // use case: navigating menu items with arrow keys
  blockScroll: function(event) {
    if (
      event.which === Vars.keys.UP ||
      event.which === Vars.keys.DOWN
    ) event.preventDefault();
  },

  // customized version of focusRestrict to work specifically for subnav
  // includes arrow keys for navigation
  focusRestrict: function(event) {
    var key = event.which;
    var focusable = Array.prototype.slice.call(this.subLinks);
    var listLength = this.subLinks.length;
    var focused = document.activeElement;
    var focusIndex = focusable.indexOf(focused);
    var nextIndex;

    // esc key closes subnav
    if (key === Vars.keys.ESC) {
      this.headingLink.focus();
      this.toggleNav('close');

    // up/down/tab/shift+tab cycles through links
    } else if (
      key === Vars.keys.TAB ||
      key === Vars.keys.UP ||
      key === Vars.keys.DOWN
    ) {
      var direction = ((key === Vars.keys.TAB && event.shiftKey) || key === Vars.keys.UP) ? 'up' : 'down';

      if (focusIndex < (listLength - 1) && direction === 'down') {
        nextIndex = focusIndex + 1;
      } else if (focusIndex > 0 && direction === 'up') {
        nextIndex = focusIndex -1;
      } else if (focusIndex === (listLength - 1) && direction === 'down') {
        nextIndex = 0;
      } else {
        nextIndex = listLength -1;
      }

      focusable[nextIndex].focus();
    }
  }

};

module.exports = NavGroup;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);
var Vars = __webpack_require__(3);

NavToggle = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

NavToggle.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'toggleSetup', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  focusoutTimer: null,
  state: null,
  mq: window.matchMedia(Vars.mq.navigation),

  setVariables: function() {
    this.header = document.querySelector('[data-nav-header]');
    this.targetElem = this.elem.getAttribute('data-toggle');
    this.targetContainer = document.getElementById(this.elem.getAttribute('aria-controls'));

    if (this.features.includes('focusInput')) {
      this.focusTarget = this.targetContainer.querySelectorAll('input[type="text"],input[type="search"]');
    }

    if (this.features.includes('toggleInput')) {
      if (this.mq.matches) {
        this.toggles = document.querySelector('[data-toggle-search]');
        this.searchContainer = document.getElementsByClassName('site-nav-utility-search');
      }
    }

    // named event handlers for binding/unbinding
    this.onToggleClick = this.toggleClick.bind(this);
    this.onEscClose = this.escClose.bind(this);
    this.onA11yFocusin = this.a11yFocusin.bind(this);
    this.onA11yFocusout = this.a11yFocusout.bind(this);
  },


  /*
    --------------------
    Set up
    --------------------
  */

  toggleSetup: function() {
    this.elem.setAttribute('aria-expanded', 'false');
    this.toggleEvents();

    if (!this.mq.matches) {

      // only do this once, not for each toggle button
      if (!document.body.hasAttribute('data-mobile')) {
        document.body.setAttribute('data-mobile', '');
      }
    } else {

      if (this.features.includes('setToWindowHeight')) {
        this.unsetHeight();
      }

      // only do this once, not for each toggle button
      if (document.body.hasAttribute('data-mobile')) {
        document.body.removeAttribute('data-mobile');
      }
    }
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {
    this.mq.addListener(this.toggleSetup.bind(this));

    if (this.features.includes('setToWindowHeight')) {
      window.addEventListener('resize', Util.debounce(function() {
        if (this.state === 'open' && !this.mq.matches) this.setHeight();
      }.bind(this), 100));
    }
    if (this.features.includes('toggleInput')) {
      if (this.mq.matches) {
        this.toggles.addEventListener('click', this.toggleClickSearch.bind(this));
      }
    }
    window.pubSub.subscribe('closeNav', this.unsetHeight.bind(this));
  },

  toggleA11y: function(action) {

    // focusin/focusout keeps focus within menu when open
    this.targetContainer[(action === 'open') ? 'addEventListener' : 'removeEventListener']('focusin', this.onA11yFocusin);
    this.targetContainer[(action === 'open') ? 'addEventListener' : 'removeEventListener']('focusout', this.onA11yFocusout);
  },

  a11yFocusin: function(event) {
    window.clearTimeout(this.focusoutTimer);
  },

  a11yFocusout: function(event) {
    var elem = this.elem;

    this.focusoutTimer = window.setTimeout(function() {
      elem.focus();
    }, 10);
  },

  escClose: function(event) {

    // esc key closes
    if (event.which === Vars.keys.ESC) {
      this.toggleClick();
    }
  },

  toggleEsc: function() {
    if (this.state === 'open') {
      document.body.addEventListener('keyup', this.onEscClose);
    } else {
      document.body.removeEventListener('keyup', this.onEscClose);
    }
  },

  show: function() {
    this.searchContainer[0].style.cssText = 'display: block; visiblity: absolute';
    this.toggles.style.cssText = 'display: none; visiblity: hidden';
  },

  toggleEvents: function() {
    this.elem[(!this.mq.matches) ? 'addEventListener' : 'removeEventListener']('click', this.onToggleClick);
  },

  toggleClick: function() {

    // determine action based on data attribute
    // (works better for multiple toggle buttons than storing state locally)
    this.state = this.returnAction();

    // run utilities on all nav panels before opening a new one
    /*if (this.state === 'open') window.pubSub.publish('closeNav');
    if (this.state === 'close') window.pubSub.publish('closeSubNav');*/

    // toggle aria state
    this.elem.setAttribute('aria-expanded', (this.state === 'open') ? 'true' : 'false');

    // set attribute on body
    document.body.setAttribute(
      'data-mobile',
      (this.state === 'open') ? this.targetElem : ''
    );

    // bind/unbind esc key to close target element
    this.toggleEsc();

    // manage focus
    if (this.state === 'open') {
      this.toggleA11y(this.state);

      if (this.focusTarget) {
        var focusElem = (this.features.includes('focusInput')) ? this.focusTarget[0] : this.focusTarget;

        setTimeout(function() {
          focusElem.focus();
        }, 100);
      }
    } else if (this.state === 'close') {
      this.toggleA11y(this.state);
      this.elem.focus();
    }

    if (this.features.includes('setToWindowHeight')) {
      if (this.state === 'open') {
        this.setHeight();
      } else {
        this.unsetHeight();
      }
    }
  },

  toggleClickSearch: function(event) {
    if (this.features.includes('toggleInput')) {
      // Prevent default button behavior
      event.preventDefault();
      // On click show search
      this.show();
    }
  },

  setHeight: function() {
    // calculate window height minus header height
    // this is primarily a fix for iOS Safari where pre-scrolled browser chrome
    // isn't taken into account when using `vh`.
    this.targetContainer.style.height = (window.innerHeight - this.header.offsetHeight) + 'px';
  },

  unsetHeight: function() {
    this.targetContainer.style.height = null;
  },

  returnAction: function() {
    return (document.body.getAttribute('data-mobile') === this.targetElem) ? 'close' : 'open';
  }

};

module.exports = NavToggle;


/***/ }),
/* 35 */
/***/ (function(module, exports) {


(function ($) {

  Drupal.behaviors.rotary_news_features = {
    attach: function (context, settings) {

      var faders = context.querySelectorAll(".fade-in");
      var sliders = context.querySelectorAll(".slide-in");

      var sectionOneOptions = {
          rootMargin: "-200px 0px 0px 0px"
      };

      var appearOptions = {
          threshold: 0,
          rootMargin: "0px 0px -250px 0px"
      };

      var appearOnScroll = new IntersectionObserver(function (
          entries,
          appearOnScroll
      ) {
          entries.forEach(function(entry) {
              if (!entry.isIntersecting) {
                  return;
              } else {
                  entry.target.classList.add("appear");
                  appearOnScroll.unobserve(entry.target);
              }
          });
      },
          appearOptions);

      faders.forEach(function(fader) {
          appearOnScroll.observe(fader);
      });

      sliders.forEach(function(slider) {
          appearOnScroll.observe(slider);
      });

    }
  };
})(jQuery);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);
var Vars = __webpack_require__(3);

var Parallax = function(elem) {
  this.elem = elem;
  this.init();
};

Parallax.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'setUp', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  mq: window.matchMedia(Vars.mq.medium),
  mqMatches: null,

  setVariables: function() {
    this.layers = this.elem.querySelectorAll('[data-parallax-item]');
  },


  /*
    --------------------
    Set up
    --------------------
  */

  setUp: function() {
    this.getPosition();

    if (this.mq.matches) {
      this.mqMatches = true;

      this.doParallax();
    } else {
      this.mqMatches = false;

      for (var i = 0, len = this.layers.length; i < len; i++) {
        this.prefixTransition(this.layers[i], null);
      }
    }
  },

  getPosition: function() {
    this.positionTop = Util.getPosition(this.elem).y;
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {
    this.mq.addListener(this.setUp.bind(this));

    window.addEventListener('resize', Util.debounce(this.getPosition.bind(this), 200));
  },

  doParallax: function() {
    if (this.mqMatches) {
      var topDistance = Util.scrollY() - this.positionTop;

      for (var i = 0, len = this.layers.length; i < len; i++) {
        var depth = this.layers[i].getAttribute('data-depth');
        var movement = -(topDistance * depth);
        var translate3d = 'translate3d(0, ' + movement + 'px, 0)';

        this.prefixTransition(this.layers[i], translate3d);
      }

      requestAnimationFrame(this.doParallax.bind(this));
    }
  },


  /*
    --------------------
    Utilities
    --------------------
  */

  prefixTransition: function(element, value) {
    element.style['-webkit-transform'] = value;
    element.style['-moz-transform'] = value;
    element.style['-ms-transform'] = value;
    element.style['-o-transform'] = value;
    element.style.transform = value;
  }

};

module.exports = Parallax;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);

ResponsiveVideo = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

ResponsiveVideo.prototype = {

  // list of video selectors
  selectors: [
    'iframe',
    'video',
    'object',
    'embed'
  ],

  init: function() {

    // loop over video selectors to find video
    for (var i = 0, len = this.selectors.length; i < len; i++) {
      this.video = this.elem.querySelector(this.selectors[i]);

      // if a video is found, run set up and exit loop
      if (this.video) {
        this.video.classList.add('responsive-video-media');
        Util.fire(this, ['measure', 'wrap']);

        return;
      }
    }
  },

  measure: function() {

    // gets the width and height of the video and
    // returns an aspect ratio

    var attrWidth = parseInt(this.video.getAttribute('width'), 10);
    var attrHeight = parseInt(this.video.getAttribute('height'), 10);

    var ratioWidth = !isNaN(attrWidth) ? attrWidth : 16;
    var ratioHeight = !isNaN(attrHeight) ? attrHeight : 9;

    this.aspectRatio = ratioHeight / ratioWidth;
  },

  wrap: function() {

    // wraps the video in a div container and adds the aspect ratio
    // as bottom padding (http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/)

    var wrapper = document.createElement('div');
    wrapper.classList.add('responsive-video-wrapper');
    wrapper.style.paddingTop = (this.aspectRatio * 100) + '%';

    // remove width and height to ensure element is fluid
    this.video.removeAttribute('width');
    this.video.removeAttribute('height');

    // append video to wrapper
    wrapper.appendChild(this.video);

    // prepend to container
    this.elem.insertBefore(wrapper, this.elem.firstChild);
  }

};

module.exports = ResponsiveVideo;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/*jshint multistr: true */
/*
  --------------------
  Search

  Powers the rotary-federated-solr-client search form
  --------------------
*/

(function($, jwPaginate, dateFormat){
  // Replace localization strings in date format library
  dateFormat.i18n.dayNames = [
    Drupal.t("Sun"),
    Drupal.t("Mon"),
    Drupal.t("Tue"),
    Drupal.t("Wed"),
    Drupal.t("Thu"),
    Drupal.t("Fri"),
    Drupal.t("Sat"),
    Drupal.t("Sunday"),
    Drupal.t("Monday"),
    Drupal.t("Tuesday"),
    Drupal.t("Wednesday"),
    Drupal.t("Thursday"),
    Drupal.t("Friday"),
    Drupal.t("Saturday"),
  ];

  dateFormat.i18n.monthNames = [
    Drupal.t("Jan"),
    Drupal.t("Feb"),
    Drupal.t("Mar"),
    Drupal.t("Apr"),
    Drupal.t("May"),
    Drupal.t("Jun"),
    Drupal.t("Jul"),
    Drupal.t("Aug"),
    Drupal.t("Sep"),
    Drupal.t("Oct"),
    Drupal.t("Nov"),
    Drupal.t("Dec"),
    Drupal.t("January", {}, {context: 'Long month name'}),
    Drupal.t("February", {}, {context: 'Long month name'}),
    Drupal.t("March", {}, {context: 'Long month name'}),
    Drupal.t("April", {}, {context: 'Long month name'}),
    Drupal.t("May", {}, {context: 'Long month name'}),
    Drupal.t("June", {}, {context: 'Long month name'}),
    Drupal.t("July", {}, {context: 'Long month name'}),
    Drupal.t("August", {}, {context: 'Long month name'}),
    Drupal.t("September", {}, {context: 'Long month name'}),
    Drupal.t("October", {}, {context: 'Long month name'}),
    Drupal.t("November", {}, {context: 'Long month name'}),
    Drupal.t("December", {}, {context: 'Long month name'})
  ];
  var FacetHelper = {
    // The facetLabels object provides mappings between the machine names for facet options, and the plaintext label shown to the user.
    facets: {
      content_type: [
        {
          value: "content_page",
          regex: /^content_page$/i,
          label: Drupal.t("Content Page", {}, {context: 'Search Facet Label: content_type'})
        },
        {
          value: "document",
          regex: /^document$/i,
          label: Drupal.t("Document", {}, {context: 'Search Facet Label: content_type'})
        },
        {
          value: "management_tool",
          regex: /^management_tool$/i,
          label: Drupal.t("Management Tool", {}, {context: 'Search Facet Label: content_type'})
        }
      ],
      document_mimetype: [
        {
          value: "application/pdf",
          regex: /^application\/pdf$/i,
          label: Drupal.t("PDF", {}, {context: 'Search Facet Label: document_mimetype'})
        },
        {
          value: "application/vnd.openxmlformats-officedocument.presentationml.presentation || application/vnd.ms-powerpoint",
          regex: /^application\/vnd\.openxmlformats-officedocument\.presentationml\.presentation|application\/vnd\.ms-powerpoint$/i,
          label: Drupal.t("Presentation", {}, {context: 'Search Facet Label: document_mimetype'})
        },
        {
          value: "text/* || application/msword || application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          regex: /^(text\/.+)|application\/msword|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document$/i,
          label: Drupal.t("Text", {}, {context: 'Search Facet Label: document_mimetype'})
        },
        {
          value: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet || application/vnd.ms-excel",
          regex: /^application\/vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet|application\/vnd\.ms-excel/i,
          label: Drupal.t("Table", {}, {context: 'Search Facet Label: document_mimetype'})
        },
        {
          value: "image/*",
          regex: /^image\/.+$/i,
          label: Drupal.t("Image", {}, {context: 'Search Facet Label: document_mimetype'})
        },
        {
          value: "video/*",
          regex: /^video\/.+$/i,
          label: Drupal.t("Video", {}, {context: 'Search Facet Label: document_mimetype'})
        },
        {
          value: "!(application/pdf || '' || (text/* || application/msword || application/vnd.openxmlformats-officedocument.wordprocessingml.document || application/vnd.openxmlformats-officedocument.presentationml.presentation) || (application/vnd.openxmlformats-officedocument.spreadsheetml.sheet || application/vnd.ms-excel) || image/* || video/*)",
          regex: /^.*$/,
          label: Drupal.t("Various", {}, {context: 'Search Facet Label: document_mimetype'})
        }
      ],
      //These are all pre-localized for use across all locales, no need for drupal translation
      langcode: [
        {
          value: "de",
          regex: /de/i,
          label: "Deutsch"
        },
        {
          value: "en",
          regex: /en/i,
          label: "English"
        },
        {
          value: "es",
          regex: /es/i,
          label: "Español"
        },
        {
          value: "fr",
          regex: /fr/i,
          label: "Français",
        },
        {
          value: "it",
          regex: /it/i,
          label: "Italiano"
        },
        {
          value: "ja",
          regex: /ja/i,
          label: "日本語"
        },
        {
          value: "ko",
          regex: /ki/i,
          label: "한국어"
        },
        {
          value: "pt || pt-br",
          regex: /pt|pt-br/i,
          label: "Português"
        }
      ]
    },
    /**
     * Take the facet data from a search result's facet_counts.facet_fields and process it into a set of facet options for use in the front end.
     */
    getFacetFields: function (facetFieldsFromSOLR) {
      var parent = this;
      var results = [];

      var facetsCopy = $.extend(true, {}, this.facets);

      for (var facetName in facetsCopy) {
        var facetDataFromSOLR = facetFieldsFromSOLR[facetName];

        // First pass - convert the facet fields from SOLR into a usable format
        var facetOptions = [];
        var facetOptionsRaw = [];
        for (var i=0;i<facetDataFromSOLR.length;i+=2) {
          var name = facetDataFromSOLR[i];
          var count = facetDataFromSOLR[i+1];

          facetOptionsRaw.push({
            name: name,
            count: count,
            claimed: false //A flag of whether this facet's items have already been 'claimed'
          });
        }

        //Second pass - iterate through the facets to assign solr data to our facets
        for (var j = 0; j < facetsCopy[facetName].length; j++) {
          var facetOption = facetsCopy[facetName][j];

          if (typeof facetOption.count === 'undefined') {
            facetOption.count = 0;
          }

          for (var jj = 0; jj < facetOptionsRaw.length; jj++) {
            var facetOptionRaw = facetOptionsRaw[jj];
            if (facetOptionRaw.claimed) {
              continue;
            }
            if (facetOption.regex.test(facetOptionRaw.name)) {
              facetOption.count += facetOptionRaw.count;
              facetOptionRaw.claimed = true;
            }
          }

          facetOptions.push(facetOption);

        }

        results.push({
          name: facetName,
          options: facetOptions
        });


      }

      return results;
    },
    getFacetLabel: function (name, key) {
      if (typeof this.facets[name] !== 'undefined') {
        var found = this.facets[name].find(function(item){return item.value == key;});
        if (found) {
          return found.label;
        }
      }
      return null;
    }
  }
  var Analytics = {
    dataLayerName: 'rotaryDDO',
    dataLayerExists: function () {
      return (
        typeof window !== 'undefined' &&
        typeof window[this.dataLayerName] !== 'undefined' &&
        typeof window._satellite !== 'undefined'
      );
    },
    fireTrackingEvent: function (eventName, payload) {
      if (!this.dataLayerExists()) {
        return;
      }

      // Don't try and track if we don't have the Launch plugin or we are have a pageview exclusion.
      if (
        typeof window._satellite !== 'undefined'
      ) {
        Object.keys(payload).map(function (key) {
          // Property-specific formatting
          switch (key) {
            case 'searchFilters':
              payload[key] = JSON.stringify(payload[key]);
              break;
            default:
              break;
          }
        });

        window._satellite.track(eventName, payload);
      }

    }
  };

  var SearchHelpers = {
    unescapeReservedCharacters: function (str, reservedCharacters) {      
      /**
       * Escape function for regex characters
       * @see https://stackoverflow.com/a/3561711 
       */
      function escapeRegex(string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      }

      // str = str.replace(/\\\\/g,'\\');
      var regex = new RegExp('\\\\([' + escapeRegex(reservedCharacters)+'])', 'ig');
      return str.replace(regex, '$1');
    },
    trimStringToLength: function (inputString, length) {
      return (inputString.length > length) ? (inputString.substring(0, length) + '...') : inputString;
    },

    /**
     * Convert a raw byte integer to a human readable format
     * @param  {integer} bytes
     * @return {string}
     */
    bytesToSize: function (bytes) {
      if (bytes == 0) return Drupal.t('0 byte');
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)));
      var fileSize = Math.round(bytes / Math.pow(1000, i), 2);
      switch (i) {
        case 0:
          return Drupal.t('@size bytes', {'@size': fileSize});
        case 1:
          return Drupal.t('@size KB', {'@size': fileSize});
        case 2:
          return Drupal.t('@size MB', {'@size': fileSize});
        case 3:
          return Drupal.t('@size GB', {'@size': fileSize});
        case 4:
          return Drupal.t('@size TB', {'@size': fileSize});
      }
    },
  };

  Search = function(elem) {
    this.elem = elem;
    this.pageLanguage = $('html').attr('lang');
    this.config = {
      solr_proxy_endpoint: '/' + this.pageLanguage + '/rotary_federated_solr_client/search',
      my_rotary_cms_base_url: Drupal.settings.rotary_federated_solr_client.my_rotary_cms_base_url,
      my_rotary_base_url: Drupal.settings.rotary_federated_solr_client.my_rotary_base_url,
      lucene_reserved_characters: Drupal.settings.rotary_federated_solr_client.lucene_reserved_characters,
    };
    this.init();
  };

  Search.prototype = {
    pageLanguage: null,
    debugEnabled: false,
    debug: function () {
      if (this.debugEnabled) {
        console.log(arguments);
      }
    },
    /** Search application state */
    state: {},

    /** Default state application state */
    getDefaultState: function () {
      return {
        loading: false,
        initialized: false,
        currentPage: 1,
        resultsPerPage: 10,
        orderBy: 'relevance',
        query : "",
        currentSearchResult: null,
        facets: {
          langcode: this.pageLanguage,
          content_type: '',
          document_mimetype: ''
        },    
      };
    },

    /** Configuration properties */
    config: {
      solr_proxy_endpoint: null
    },

    mappings: {
      sourceIdToDisplaySite: {
        'rotary': 'https://www.rotary.org',
        'rotary_international_convention': 'https://convention.rotary.org',
        'my_rotary_legacy_app': 'https://my.rotary.org',
        'my_rotary_web_app': 'https://my.rotary.org',
        'end_polio': 'https://www.endpolio.org'
      }
    },

    helpers: {

    },

    /**
     * Initialize the state
     */
    initializeState: function () {
      this.state = this.getDefaultState();
    },

    /**
     * Initialize the application. Should be called at bottom of module code.
     */
    init: function () {
      var parent = this;
      this.initializeState();

      // Push query into state on first page load
      if (
        (typeof Drupal.settings.rotary_federated_solr_client.search_query !== "undefined") &&
        (Drupal.settings.rotary_federated_solr_client.search_query)
      ) {
        this.state.query = Drupal.settings.rotary_federated_solr_client.search_query;
      }

      // Handle search form submit event (includes click on button)
      this.elements().$form.on('submit', function (event) {
        event.preventDefault();
        // Perform search
        parent.performSearch({resetPage: true, resetOrderBy: true, resetResultsPerPage: true});
      });

      // Handle clicks on reset button
      this.elements().$resetButton.on('click', function (event) {
        // If we have a default search query, allow the reset button to reload the current page using its href attribute
        if (
          (typeof Drupal.settings.rotary_federated_solr_client.search_query !== "undefined") &&
          (Drupal.settings.rotary_federated_solr_client.search_query)
        ) {
          //Do nothing
        }
        else {
          event.preventDefault();
          parent.resetSearch();
        }
      });
      //handle clicks on result per page dropdown
      var $resultsPerPage=this.elements().$resultsPerPageSelect;

      $resultsPerPage.unbind('change');
      
      $resultsPerPage.bind('change', function () {
        parent.state.currentPage = 1;
        parent.performSearch();
      });
  
      //handle clicks on order by dropdown
      var $resultsOrderby=this.elements().$resultsOrderbySelect;

      $resultsOrderby.unbind('change');
      
      $resultsOrderby.bind('change', function () {
        parent.state.currentPage = 1;
        parent.performSearch();
      });

      this.state.initialized = true;

      this.writeStateToDOM();

      // If initial state has a query, run the search
      if (this.state.query) {
        this.performSearch();
      }
      this.debug('Search initialized');
    },

    /**
     * Reset the search page to its initial state
     */
    resetSearch: function () {
      this.debug('reset');
      this.initializeState();
      this.writeStateToDOM();
      this.elements().$query.focus();
    },

    /**
     * Go to the specified page of results for the current query
     * @param  {int} pageNumber The page to go to. 1-indexed
     */
    gotoPageNumber: function (pageNumber) {
      this.debug('gotoPageNumber: ', pageNumber);
      this.state.currentPage = pageNumber;
      this.performSearch();
    },

    /**
     * Go to the first page of results for the current query
     */
    gotoPageFirst: function () {
      this.gotoPageNumber(1);
    },

    /**
     * Go to the Previous page of results for the current query
     */
    gotoPagePrev: function () {
      this.gotoPageNumber(this.state.currentPage - 1);
    },

    /**
     * Go to the next page of results for the current query
     */
    gotoPageNext: function () {
      this.gotoPageNumber(this.state.currentPage + 1);
    },

    /**
     * Go to the last page of results for the current query
     */
    gotoPageLast: function () {
      this.gotoPageNumber(this.state.pagination.totalPages);
    },

    /**
     * Read form values into state object
     */
    readStateFromDOM: function () {

      this.state.query = this.elements().$query.val().trim();

      if (this.state.currentSearchResult) {
        for (var facetName in this.elements().$facetSelects) {
          var $facetSelect = this.elements().$facetSelects[facetName];
          var value = $facetSelect.val();
          if (typeof this.state.facets[facetName] !== 'undefined') {
            this.state.facets[facetName] = value;
          }
        }

        // Reset facet document_mimetype to null if content_type is not document
        if (this.state.facets.content_type !== 'document') {
          this.state.facets.document_mimetype = null;
        }
      }
      this.state.resultsPerPage=this.elements().$resultsPerPageSelect.val();

      this.state.orderBy=this.elements().$resultsOrderbySelect.val();
     
      this.debug('Updated state from form: ', this.state);
    },

    /**
     * Write the current state back out to the DOM, including search results
     */
    writeStateToDOM: function () {
      var parent = this;

      // Remove the old results from the list
      this.elements().$results.empty();

      // Clear the pagination
      this.elements().$pagination.empty();

      // Update form elements
      this.elements().$query.val(this.state.query);

      for (var facetNameForEmpty in this.elements().$facetSelects) {
        var $facetSelectForEmpty = this.elements().$facetSelects[facetNameForEmpty];
        $facetSelectForEmpty.empty();
      }

      //////////////////////////////
      /// Apply classes to the root element
      //////////////////////////////
      if (this.state.loading) {
        this.elements().$root.addClass('loading');
      }
      else {
        this.elements().$root.removeClass('loading');
      }

      if (this.state.initialized) {
        this.elements().$root.addClass('initialized');
      }
      else {
        this.elements().$root.removeClass('initialized');
      }

      if (this.state.currentSearchResult) {
        this.elements().$root.addClass('has-search-active');
      }
      else {
        this.elements().$root.removeClass('has-search-active');
      }

      // EXIT WRITING FUNCTION IF NO SEARCH RESULTS PRESENT
      if (!this.state.currentSearchResult) {
        return;
      }

      //////////////////////////////
      /// Build Search Results
      //////////////////////////////
      this.state.currentSearchResult.response.docs.forEach(function(result, i) {

        var isCdaLink = (typeof result.bundle !== 'undefined') && (result.bundle == 'cda_link');

        var searchRank = parent.state.currentSearchResult.response.start + i;

        // Create URL
        var url = '';

        // if source_path begins with http://, it is the full url and we use it directly
        if ((typeof result.source_path !== 'undefined') && result.source_path) {
          if (result.source_path.indexOf('http') === 0) {
            url = result.source_path;
          }
          // otherwise we need to prepend the site (protocol+domain+endpoint) to the source path
          else {
            // Trim trailing slash on 'site' and then stick on the path
            url = result.site.replace(/\/+$/,'') + '/' + result.source_path;
          }
        }

        //////////////////////////////
        /// Post-process URL
        //////////////////////////////

        //Remove embed=true querystring (present on some my-cms urls)
        url = url.replace('?embed=true', ''); 


        //For non-document results, replace my-cms*.rotary.org with my*.rotary.org (bypasses a redirect and makes urls 'canonical')
        if (result.content_type !== 'document') {
          url = url.replace('//my-cms','//my'); 
        }

        //////////////////////////////
        /// Create elements
        //////////////////////////////

        // Create list element
        var $li = $('<li>');

        function trackClick() {
          Analytics.fireTrackingEvent('searchResultClicked', {
            searchResultDestination: url,
            searchType: 'Site Search',
            searchResultIndex: searchRank,
          });
        }

        // Create title
        var $titleWrapper;

        if (url) {
          $titleWrapper = $('<a>').attr({href: url}).on('click', trackClick);
        }
        else{
          $titleWrapper = $('<span>');
        }

        $li.append($titleWrapper);

        var $title = $('<h3>').html(result.title_fulltext).appendTo($titleWrapper);

        if (url) {
          var displayUrl = (url.length <= 50) ? url : SearchHelpers.trimStringToLength(url, 47);
          var $url = $('<a>').attr({class:'link', href: url}).text(displayUrl).on('click', trackClick).appendTo($li);
          $li.append($url);
        }

        // Get highlight
        var highlight;

        var highlightRaw = parent.state.currentSearchResult.highlighting[result.id];
        if (
          (typeof highlightRaw.content_fulltext !== 'undefined') &&
          (typeof highlightRaw.content_fulltext[0] !== 'undefined')
        ) {
          highlight = highlightRaw.content_fulltext[0];
        }

        // Create summary
        var summaryText = highlight ? highlight : SearchHelpers.trimStringToLength(result.content_fulltext[0], 234);

        var $summary = $('<p>').html(summaryText);
        $li.append($summary);

        // Add CDA links to summary
        if (isCdaLink) {

          $.ajax({
            method: 'GET',
            url: parent.config.my_rotary_cms_base_url + '/' + parent.pageLanguage + '/restapi/cda/links/' + result.item_id,
            dataType: 'json'
          })
            .done(function(data) {
              parent.debug('CDA link data success', data);

              if (data.length) {
                var $cdaLinksList = $('<ul/>').addClass('cda-links');

                data.forEach(function(cdaLinkData, i) {
                  var $cdaLinkLI= $('<li/>');
                  var $cdaLink = $('<a/>').attr({href: parent.config.my_rotary_base_url + cdaLinkData.path}).html(cdaLinkData.title);
                  $cdaLink.appendTo($cdaLinkLI);
                  $cdaLinkLI.appendTo($cdaLinksList);
                });
                $cdaLinksList.appendTo($summary);
              }
            })
            .fail(function(error) {
              parent.debug('CDA link data fail', error);
            });
        }

        // Build metadata string
        var metaDataComponents = [];

        // Metadata:`` Update date
        var updatedDate = new Date(result.date_modified);
        var displayDate = dateFormat(updatedDate, "d mmm yyyy");
        if (displayDate) {
          // Grab the translated string for e.g. 'Updated 1 Jan 2020'
          var displayDateText = Drupal.t('Updated @updated-date', {'@updated-date': displayDate}, {context: 'Search Results'});

          metaDataComponents.push(displayDateText);
        }

        // Metadata: Document Size
        if (typeof result.document_file_size !== 'undefined') {
          var displayFileSize = Drupal.t('Size @file-size', {'@file-size': SearchHelpers.bytesToSize(result.document_file_size)}, {context: 'Search Results'});
          metaDataComponents.push(displayFileSize);
        }

        // Metadata: Site
        if (result.source_id) {
          var displaySite;
          // Map source ID to a friendly display version e.g. my_rotary_legacy_app' => 'https://my.rotary.org',
          if (typeof parent.mappings.sourceIdToDisplaySite[result.source_id] !== 'undefined')   {
            displaySite = parent.mappings.sourceIdToDisplaySite[result.source_id];
          }
          else {
            displaySite = result.source_id;
          }

          metaDataComponents.push(displaySite);
        }

        var $meta = $('<div><p class="metadata">' + metaDataComponents.join(' | ')+ '</p></div>');
        $li.append($meta);

        // Append to results
        parent.elements().$results.append($li);
      });

      // Update the results count text
      this.elements().$resultsCountOnPage.text(this.state.currentSearchResult.response.docs.length);
      this.elements().$resultsCountTotal.text(this.state.currentSearchResult.response.numFound);
      this.elements().$resultsCountQuery.text(SearchHelpers.unescapeReservedCharacters(this.state.currentSearchResult.responseHeader.params.q, this.config.lucene_reserved_characters));

      //////////////////////////////
      /// Facets: Prep facets data
      //////////////////////////////
      var facetFields = FacetHelper.getFacetFields(this.state.currentSearchResult.facet_counts.facet_fields);

      for (var i = 0; i < facetFields.length; i++) {
        var facetField = facetFields[i];

        $facetSelect = parent.elements().$facetSelects[facetField.name];

        // Check if this facet even exists in the DOM, skip if not
        if (!$facetSelect.length) {
          return; //continue
        }

        //////////////////////////////
        /// Facets: Build select and options elements
        //////////////////////////////
        //remove original options
        $facetSelect.empty();

        // Add 'Any' option as first option
        var $anyOption = $('<option>')
          .val('')
          .html(Drupal.t('Any', {}, {context: 'Search Form'}));

        $anyOption.appendTo($facetSelect);

        // Add options for each element in facetDataArray
        for (var ii = 0; ii < facetField.options.length; ii++) {
          var facetOption = facetField.options[ii];

          var $option = $('<option>')
            .val(facetOption.value)
            .html(facetOption.label + ' (' + facetOption.count + ')')
            .appendTo($facetSelect);
          // Check if this is the currently selected facet in the state
          if (parent.state.facets[facetField.name] === facetOption.value) {
            $option.attr({'selected': 'selected'});
          }
          else if (facetOption.count == 0) {
            $option.attr({disabled: 'disabled'});
            $option.appendTo($facetSelect);
          }
        }
        
        $facetSelect.unbind('change');
        $facetSelect.bind('change', function () {
          parent.state.currentPage = 1;
          parent.performSearch();
        });
        parent.debug('Loaded facet element with options', facetField);

      }



      // Toggle display of 'File Type' facet based on value of 'Content Type' facet
      var $contentTypeFacet = this.elements().$facetSelects.content_type;
      var $documentMimetypeFacet = this.elements().$facetSelects.document_mimetype;
      var $documentMimetypeFacetContainer = $documentMimetypeFacet.closest('.facet-container');

      if ($contentTypeFacet.val() === 'document') {
        $documentMimetypeFacetContainer.show();
      }
      else {
        $documentMimetypeFacetContainer.hide();
      }
     /////update result per page select
     this.elements().$resultsPerPageSelect.val(this.state.resultsPerPage);


    /////update orderby select
    this.elements().$resultsOrderbySelect.val(this.state.orderBy);


      //////////////////////////////
      /// Build Pagination
      //////////////////////////////
      this.debug('this.state.pagination', this.state.pagination);

      // Locally-scoped function to create pagination items
      function _createPaginationItem (label, clickCallback) {
        // Create list item
        var $li = $('<li>');

        // Create link
        var $a = $('<a>')
          .html(label)
          .attr('href', '#')
          .on('click', function(event) {
            event.preventDefault();
            clickCallback();
          });

        $li.append($a);

        return $li;
      }


      // Create numbered pagination items
      this.state.pagination.pages.forEach(function (pageNumber, i) {
        var $paginationItem = _createPaginationItem(pageNumber, function () {
          parent.gotoPageNumber(pageNumber);
        });

        if (parent.state.pagination.currentPage === pageNumber) {
          $paginationItem.addClass('current');
        }

        parent.elements().$pagination.append($paginationItem);
      });

      if (this.state.pagination.currentPage > 1) {
        // Create 'Previous' pagination item
        var $prevPaginationItem = _createPaginationItem('<', function() {parent.gotoPagePrev();});
        this.elements().$pagination.prepend($prevPaginationItem);

        // Create 'First' pagination item
        var $firstPaginationItem = _createPaginationItem('<<', function() {parent.gotoPageFirst();});
        this.elements().$pagination.prepend($firstPaginationItem);
      }

      if (this.state.pagination.currentPage < this.state.pagination.totalPages) {
        // Create 'Next' pagination item
        var $nextPaginationItem = _createPaginationItem('>', function() {parent.gotoPageNext();});
        this.elements().$pagination.append($nextPaginationItem);

        // Create 'Last' pagination item
        var $lastPaginationItem = _createPaginationItem('>>', function() {parent.gotoPageLast();});
        this.elements().$pagination.append($lastPaginationItem);
      }
    },

    throwSearchError: function (errorMsg) {
      alert(errorMsg);
    },

    /**
     * Perform the search operation using the current form state
     */
    performSearch: function (options) {
      var parent = this;
      this.readStateFromDOM();
      var defaults = {
        resetPage: false,
        resetOrderBy: false,
        resetResultsPerPage: false
      }
      var searchSettings = $.extend({}, defaults, options);
      //search reset conditions
      if (searchSettings.resetPage) {
        parent.state.currentPage = 1;
      }
      if (searchSettings.resetOrderBy) {
        parent.state.orderBy = parent.getDefaultState().orderBy;
      }
      if (searchSettings.resetResultsPerPage) {
        parent.state.resultsPerPage = parent.getDefaultState().resultsPerPage;
      }
      // Do not execute search on empty query
      if (!this.state.query) {
        this.elements().$query.focus();
        return;
      }

      this.state.loading = true;
      this.writeStateToDOM();

      // Convert page to 0-indexed before sending to SOLR
      var pageZeroIndexed = (this.state.currentPage - 1);
      if (pageZeroIndexed < 0) {
        pageZeroIndexed = 0;
      }

      $.ajax({
        method: 'GET',
        url: this.config.solr_proxy_endpoint,
        dataType: 'json',
        data: {
          page: pageZeroIndexed,
          query: this.state.query,
          facets: this.state.facets,
          resultsPerPage: this.state.resultsPerPage,
          orderBy: this.state.orderBy,
        }
      })
        .done(function (data) {
          parent.debug('Search success', data);

          parent.state.currentSearchResult = data;

          // Sometimes when SOLR fails it will return an empty array, this represents an error state
          if (Array.isArray(data) && (data.length == 0)) {
            parent.debug('Search error: Empty result');

            parent.resetSearch();
            var errorMsg = Drupal.t("There was an error with your search. Please try again.", {}, {context: 'Search error'});
            parent.throwSearchError(errorMsg);
            return;
          }

          parent.state.pagination = jwPaginate(
            data.response.numFound,           //Num results
            parent.state.currentPage,                //Current page (index starts at 1)
            data.responseHeader.params.rows,  //Results per page
            5                                 //Max number of pages to show in pagination component
          );

          if (data.response.numFound > 0) {
            Analytics.fireTrackingEvent('searchResults', {
              searchTerm: parent.state.query,
              searchTotalResults: data.response.numFound,
              searchType: 'Site Search',
              searchLanguage: parent.state.facets.langcode,
              searchResultsPerPage: parent.state.resultsPerPage,
              searchOrderBy: parent.state.orderBy,
              searchFilters: {
                keywords: parent.state.query,
                content_type: parent.state.facets.content_type,
                document_mimetype: parent.state.facets.document_mimetype,
                langcode: parent.state.facets.langcode,
                topic:""
              },
            });
          }
          else {
            Analytics.fireTrackingEvent('searchResultsEmpty', {
              searchTerm: parent.state.query,
              searchType: 'Site Search',
              searchLanguage: parent.state.facets.langcode,
              searchResultsPerPage: parent.state.resultsPerPage,
              searchOrderBy: parent.state.orderBy,
              searchFilters: {
                keywords: parent.state.query,
                content_type: parent.state.facets.content_type,
                document_mimetype: parent.state.facets.document_mimetype,
                langcode: parent.state.facets.langcode,
                topic:""
              },
            });
          }

          parent.state.loading = false;
          parent.writeStateToDOM();
        })
        .fail(function (error) {
          parent.debug('Search error: AJAX error', error);

          parent.resetSearch();
          var errorMsg = Drupal.t("There was an error with your search. Please try again.", {}, {context: 'Search error'});
          parent.throwSearchError(errorMsg);
          return;
        });
    },

    /** Element cache for elements method */
    cachedElements: {},

    /**
     * Get all of our jQuery elements in one place
     * @param  {boolean} force Whether to force a refresh of the cache
     * @return {Object} Object literal with jquery element objects on each property
     */
    elements: function (force) {
      if (typeof force === 'undefined') {
        force = false;
      }

      if (Object.getOwnPropertyNames(this.cachedElements).length && !force) {
        return this.cachedElements;
      }

      var $root = $(this.elem);

      this.cachedElements = {
        $root: $root,
        $form: $root.find('form'),
        $submitButton: $('.submit-button', $root),
        $resetButton: $('.reset-button', $root),
        $query: $('input[name="query"]', $root),
        $results: $('ul.search-results', $root),
        $resultsCount: $('.results-count', $root),
        $resultsPerPageSelect: $('.results-per-page-select', $root),
        $resultsOrderbySelect: $('.results-orderby-select', $root),
        $resultsCountOnPage: $('.results-count .on-page', $root),
        $resultsCountTotal: $('.results-count .total', $root),
        $resultsCountQuery: $('.results-count .query', $root),
        $pagination: $('ul.pagination', $root),
        $facetSelects : {
          langcode: $('select[data-facet="langcode"]', $root),
          content_type: $('select[data-facet="content_type"]', $root),
          document_mimetype: $('select[data-facet="document_mimetype"]', $root),
        },
      };

      return this.cachedElements;
    }

  };

  module.exports = Search;
})(jQuery, __webpack_require__(39), __webpack_require__(40));




/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * https://github.com/cornflourblue/jw-paginate
 */
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2018 Jason Watmore
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

function paginate(totalItems, currentPage, pageSize, maxPages) {
    if (currentPage === void 0) { currentPage = 1; }
    if (pageSize === void 0) { pageSize = 10; }
    if (maxPages === void 0) { maxPages = 10; }
    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);
    // ensure current page isn't out of range
    if (currentPage < 1) {
        currentPage = 1;
    }
    else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    var startPage, endPage;
    if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    }
    else {
        // total pages more than max so calculate start and end pages
        var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
        }
        else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        }
        else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }
    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}
module.exports = paginate;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

//https://blog.stevenlevithan.com/archives/date-time-format

var dateFormat = function () {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

module.exports = dateFormat;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);

Share = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

Share.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'addListeners']);
  },

  height: 255,
  width: 630,

  setVariables: function() {
    this.url = this.elem.getAttribute('href');
  },

  addListeners: function() {
    this.elem.addEventListener('click', this.openWindow.bind(this));
  },

  // opens a centered popup window
  openWindow: function(event) {
    var left = (screen.width/2)-(this.width/2);
    var top = (screen.height/2)-(this.height/2);

    window.open(this.url, '', 'width=' + this.width + ',height=' + this.height + ', top=' + top + ', left=' + left);

    event.preventDefault();
  }
};

module.exports = Share;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);

Slideshow = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

Slideshow.prototype = {

  init: function() {
    Util.fire(this, ['addScrollTrack', 'setVariables', 'setUp', 'addListeners']);
  },


  /*
    --------------------
    Variables
    --------------------
  */

  current: null,

  setVariables: function() {
    this.list = this.elem.querySelector('[data-list]');
    this.slides = this.list.querySelectorAll('[data-slide]');
    this.numSlides = this.slides.length;

    this.language = JSON.parse(this.elem.getAttribute('data-language'));

    this.setSlideRatio();
    this.getContainerWidth();
  },

  setSlideRatio: function() {
    var slideWidth = this.elem.getAttribute('data-slide-width');
    var slideHeight = this.elem.getAttribute('data-slide-height');

    this.slideRatio = slideHeight / slideWidth;
  },

  getContainerWidth: function() {
    this.containerWidth = this.elem.clientWidth;
  },


  /*
    --------------------
    Set up
    --------------------
  */

  setUp: function() {
    this.elem.setAttribute('data-init', '');
    Util.fire(this, ['addCaptionContainer', 'setDimensions', 'checkScroll', 'addButtons']);
  },

  addScrollTrack: function() {
    this.scrollTrack = this.createElem('div', 'slideshow-scroll-track');
    this.scrollTrack.innerHTML = this.elem.innerHTML;
    this.elem.innerHTML = '';
    this.elem.appendChild(this.scrollTrack);
  },

  addCaptionContainer: function() {
    // main caption container
    var captionContainer = this.createElem('div', 'caption-text slideshow-caption-container');

    // arrow and increment container
    var captionControls = this.createElem('div', 'slideshow-caption-controls');

    // prev/next
    var captionPrevNext = this.createElem('p', 'slideshow-caption-prev-next');
    this.captionPrev = this.createButton(this.language.prev, 'caption-previous');
    this.captionNext = this.createButton(this.language.next, 'caption-next');
    captionPrevNext.appendChild(this.captionPrev);
    captionPrevNext.appendChild(this.captionNext);
    captionControls.appendChild(captionPrevNext);

    // increment text
    this.slideCounter = this.createElem('p', 'slideshow-counter');
    captionControls.appendChild(this.slideCounter);
    captionContainer.appendChild(captionControls);

    // caption container
    this.slideCaption = this.createElem('div', 'slideshow-caption');
    this.slideCaption.setAttribute('aria-live', 'polite');
    this.slideCaption.setAttribute('aria-atomic', 'true');
    captionContainer.appendChild(this.slideCaption);

    // insert caption container after slideshow
    this.elem.parentNode.insertBefore(captionContainer, this.elem.nextSibling);
  },

  setDimensions: function() {
    Util.fire(this, ['setContainerDimensions', 'setSlideDimensions']);
  },

  setContainerDimensions: function() {
    this.elem.style.height = (this.containerWidth * this.slideRatio) + 'px';
    this.list.style.width = (this.containerWidth * this.numSlides) + 'px';
  },

  setSlideDimensions: function() {
    for (var i = 0, len = this.slides.length; i < len; i++) {
      this.slides[i].style.width = this.containerWidth + 'px';
      this.slides[i].style.height = (this.containerWidth * this.slideRatio) + 'px';
    }
  },

  addButtons: function() {
    attrs = {
      'aria-hidden': 'true',
      'tabindex': '-1'
    };

    this.slidePrev = this.createButton(this.language.prev, 'slideshow-previous', attrs);
    this.slideNext = this.createButton(this.language.next, 'slideshow-next', attrs);

    this.elem.appendChild(this.slidePrev);
    this.elem.appendChild(this.slideNext);
  },

  createButton: function(text, klass, attributes) {
    var newButton = document.createElement('button');
    newButton.setAttribute('class', klass);

    if (typeof attributes === 'object') {
      for (var attr in attributes) {
        newButton.setAttribute(attr, attributes[attr]);
      }
    }

    newButton.textContent = text;

    return newButton;
  },

  createElem: function(elem, klass) {
    var newDiv = document.createElement(elem);
    newDiv.setAttribute('class', klass);

    return newDiv;
  },


  /*
    --------------------
    Events
    --------------------
  */

  addListeners: function() {
    this.slidePrev.addEventListener('click', this.prevSlide.bind(this));
    this.captionPrev.addEventListener('click', this.prevSlide.bind(this));

    this.slideNext.addEventListener('click', this.nextSlide.bind(this));
    this.captionNext.addEventListener('click', this.nextSlide.bind(this));

    window.addEventListener(
      'resize',
      Util.debounce(this.updateDimensions.bind(this), 50)
    );

    this.scrollTrack.addEventListener(
      'scroll',
      Util.debounce(this.checkScroll.bind(this), 50)
    );
  },

  checkScroll: function() {
    var scrollPos = Math.round(this.scrollTrack.scrollLeft / this.containerWidth);
    if (scrollPos !== this.current) this.updateCurrent(scrollPos);
  },

  updateCurrent: function(pos) {
    this.current = pos;
    Util.fire(this, ['updateCaption', 'updateCounter']);
  },

  updateDimensions: function() {
    Util.fire(this, ['getContainerWidth', 'setDimensions']);
    Util.scrollTo(this.scrollTrack, (this.containerWidth * this.current), 50);
  },

  updateCaption: function() {
    var caption = this.slides[this.current].querySelector('[data-slide-caption]');
    this.slideCaption.innerHTML = caption.innerHTML;
  },

  updateCounter: function() {
    this.slideCounter.innerHTML = this.slides[this.current].getAttribute('data-slide-increment');
  },

  prevSlide: function() {
    this.changeSlides(-1);
  },

  nextSlide: function() {
    this.changeSlides(1);
  },

  changeSlides: function(dir) {
    var newSlide = this.current + dir;
    this.elem.setAttribute('data-direction', (dir === 1) ? 'next' : 'prev');

    if (newSlide < 0) {
      newSlide = (this.numSlides - 1);
    } else if (newSlide > (this.numSlides - 1)) {
      newSlide = 0;
    }

    Util.scrollTo(this.scrollTrack, (this.containerWidth * newSlide), 200);
  }

};

module.exports = Slideshow;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/*
  --------------------
  Styles

  Simple script that moves any `<style>` blocks into the `<head>` so they don't interfere with :first-child and other pseudo class selectors.
  --------------------
*/

Styles = function(elem) {
  document.head.appendChild(elem);
};

module.exports = Styles;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(2);
var Odometer = __webpack_require__(45);

window.odometerObj = window.odometerObj || {};

TextStat = function(elem, features) {
  this.elem = elem;
  this.features = features;
  this.init();
};

TextStat.prototype = {

  init: function() {
    Util.fire(this, ['setVariables', 'setUp']);
  },

  animated: false,

  setVariables: function() {
    this.elementGuid = Util.guid();
    window.odometerObj[this.elementGuid] = {};

    this.offsetAttr = this.elem.getAttribute('data-offset');
    this.offset = (this.offsetAttr) ? this.offsetAttr : '60%';
    this.stats = this.elem.querySelectorAll('[data-stat]');
    this.numStats = this.stats.length;
  },

  setUp: function() {

    // add elementGuid to the parent container as a data attribute
    this.elem.setAttribute('data-stat-guid', this.elementGuid);

    // loop over stats and set up odometer
    for (var i = 0, len = this.stats.length; i < len; i++) {
      var statGuid = Util.guid();
      var statNum = this.stats[i].querySelector('[data-stat-number]');

      statNum.setAttribute('data-number', statNum.textContent);
      statNum.setAttribute('data-guid', statGuid);

      // add new odometer object to a nested object for referencing when
      // waypoint triggers the animation
      window.odometerObj[this.elementGuid][statGuid] = new Odometer({
        el: statNum,
        duration: 3000,
        value: 0,
        theme: 'minimal'
      });
    }

    // add waypoint trigger
    new Waypoint({
      element: this.elem,
      handler: this.animate.bind(this),
      offset: this.offset
    });
  },

  animate: function() {

    // only do this work if the animation hasn't been triggered
    if (!this.animated) {

      // set a main attribute to trigger the fade-in animation
      this.elem.setAttribute('data-waypoint', 'visible');

      // loop over the odometer objects related to this element's guid
      for (var odometer in window.odometerObj[this.elementGuid]) {

        // get the individual stat element by guid
        var statByGuid = this.elem.querySelector('[data-guid="' + odometer + '"]');

        // trigger the odometer
        window.odometerObj[this.elementGuid][odometer].update(statByGuid.getAttribute('data-number'));
      }

      this.animated = true;
    }
  }

};

module.exports = TextStat;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Specific version of Odometer.js from pull request that fixes AMD exporting issue
  https://github.com/HubSpot/odometer/pull/102
*/

(function() {
  var COUNT_FRAMERATE, COUNT_MS_PER_FRAME, DIGIT_FORMAT, DIGIT_HTML, DIGIT_SPEEDBOOST, DURATION, FORMAT_MARK_HTML, FORMAT_PARSER, FRAMERATE, FRAMES_PER_VALUE, MS_PER_FRAME, MutationObserver, Odometer, RIBBON_HTML, TRANSITION_END_EVENTS, TRANSITION_SUPPORT, VALUE_HTML, addClass, createFromHTML, fractionalPart, now, removeClass, requestAnimationFrame, round, transitionCheckStyles, trigger, truncate, wrapJQuery, _jQueryWrapped, _old, _ref, _ref1,
    __slice = [].slice;

  VALUE_HTML = '<span class="odometer-value"></span>';

  RIBBON_HTML = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + VALUE_HTML + '</span></span>';

  DIGIT_HTML = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + RIBBON_HTML + '</span></span>';

  FORMAT_MARK_HTML = '<span class="odometer-formatting-mark"></span>';

  DIGIT_FORMAT = '(,ddd).dd';

  FORMAT_PARSER = /^\(?([^)]*)\)?(?:(.)(d+))?$/;

  FRAMERATE = 30;

  DURATION = 2000;

  COUNT_FRAMERATE = 20;

  FRAMES_PER_VALUE = 2;

  DIGIT_SPEEDBOOST = .5;

  MS_PER_FRAME = 1000 / FRAMERATE;

  COUNT_MS_PER_FRAME = 1000 / COUNT_FRAMERATE;

  TRANSITION_END_EVENTS = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd';

  transitionCheckStyles = document.createElement('div').style;

  TRANSITION_SUPPORT = (transitionCheckStyles.transition != null) || (transitionCheckStyles.webkitTransition != null) || (transitionCheckStyles.mozTransition != null) || (transitionCheckStyles.oTransition != null);

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

  createFromHTML = function(html) {
    var el;
    el = document.createElement('div');
    el.innerHTML = html;
    return el.children[0];
  };

  removeClass = function(el, name) {
    return el.className = el.className.replace(new RegExp("(^| )" + (name.split(' ').join('|')) + "( |$)", 'gi'), ' ');
  };

  addClass = function(el, name) {
    removeClass(el, name);
    return el.className += " " + name;
  };

  trigger = function(el, name) {
    var evt;
    if (document.createEvent != null) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(name, true, true);
      return el.dispatchEvent(evt);
    }
  };

  now = function() {
    var _ref, _ref1;
    return (_ref = (_ref1 = window.performance) != null ? typeof _ref1.now === "function" ? _ref1.now() : void 0 : void 0) != null ? _ref : +(new Date);
  };

  round = function(val, precision) {
    if (precision == null) {
      precision = 0;
    }
    if (!precision) {
      return Math.round(val);
    }
    val *= Math.pow(10, precision);
    val += 0.5;
    val = Math.floor(val);
    return val /= Math.pow(10, precision);
  };

  truncate = function(val) {
    if (val < 0) {
      return Math.ceil(val);
    } else {
      return Math.floor(val);
    }
  };

  fractionalPart = function(val) {
    return val - round(val);
  };

  _jQueryWrapped = false;

  (wrapJQuery = function() {
    var property, _i, _len, _ref, _results;
    if (_jQueryWrapped) {
      return;
    }
    if (window.jQuery != null) {
      _jQueryWrapped = true;
      _ref = ['html', 'text'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        property = _ref[_i];
        _results.push((function(property) {
          var old;
          old = window.jQuery.fn[property];
          return window.jQuery.fn[property] = function(val) {
            var _ref1;
            if ((val == null) || (((_ref1 = this[0]) != null ? _ref1.odometer : void 0) == null)) {
              return old.apply(this, arguments);
            }
            return this[0].odometer.update(val);
          };
        })(property));
      }
      return _results;
    }
  })();

  setTimeout(wrapJQuery, 0);

  Odometer = (function() {
    function Odometer(options) {
      var e, k, property, v, _base, _i, _len, _ref, _ref1, _ref2,
        _this = this;
      this.options = options;
      this.el = this.options.el;
      if (this.el.odometer != null) {
        return this.el.odometer;
      }
      this.el.odometer = this;
      _ref = Odometer.options;
      for (k in _ref) {
        v = _ref[k];
        if (this.options[k] == null) {
          this.options[k] = v;
        }
      }
      if ((_base = this.options).duration == null) {
        _base.duration = DURATION;
      }
      this.MAX_VALUES = ((this.options.duration / MS_PER_FRAME) / FRAMES_PER_VALUE) | 0;
      this.resetFormat();
      this.value = this.cleanValue((_ref1 = this.options.value) != null ? _ref1 : '');
      this.renderInside();
      this.render();
      try {
        _ref2 = ['innerHTML', 'innerText', 'textContent'];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          property = _ref2[_i];
          if (this.el[property] != null) {
            (function(property) {
              return Object.defineProperty(_this.el, property, {
                get: function() {
                  var _ref3;
                  if (property === 'innerHTML') {
                    return _this.inside.outerHTML;
                  } else {
                    return (_ref3 = _this.inside.innerText) != null ? _ref3 : _this.inside.textContent;
                  }
                },
                set: function(val) {
                  return _this.update(val);
                }
              });
            })(property);
          }
        }
      } catch (_error) {
        e = _error;
        this.watchForMutations();
      }
      this;
    }

    Odometer.prototype.renderInside = function() {
      this.inside = document.createElement('div');
      this.inside.className = 'odometer-inside';
      this.el.innerHTML = '';
      return this.el.appendChild(this.inside);
    };

    Odometer.prototype.watchForMutations = function() {
      var e,
        _this = this;
      if (MutationObserver == null) {
        return;
      }
      try {
        if (this.observer == null) {
          this.observer = new MutationObserver(function(mutations) {
            var newVal;
            newVal = _this.el.innerText;
            _this.renderInside();
            _this.render(_this.value);
            return _this.update(newVal);
          });
        }
        this.watchMutations = true;
        return this.startWatchingMutations();
      } catch (_error) {
        e = _error;
      }
    };

    Odometer.prototype.startWatchingMutations = function() {
      if (this.watchMutations) {
        return this.observer.observe(this.el, {
          childList: true
        });
      }
    };

    Odometer.prototype.stopWatchingMutations = function() {
      var _ref;
      return (_ref = this.observer) != null ? _ref.disconnect() : void 0;
    };

    Odometer.prototype.cleanValue = function(val) {
      var _ref;
      if (typeof val === 'string') {
        val = val.replace((_ref = this.format.radix) != null ? _ref : '.', '<radix>');
        val = val.replace(/[.,]/g, '');
        val = val.replace('<radix>', '.');
        val = parseFloat(val, 10) || 0;
      }
      return round(val, this.format.precision);
    };

    Odometer.prototype.bindTransitionEnd = function() {
      var event, renderEnqueued, _i, _len, _ref, _results,
        _this = this;
      if (this.transitionEndBound) {
        return;
      }
      this.transitionEndBound = true;
      renderEnqueued = false;
      _ref = TRANSITION_END_EVENTS.split(' ');
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        event = _ref[_i];
        _results.push(this.el.addEventListener(event, function() {
          if (renderEnqueued) {
            return true;
          }
          renderEnqueued = true;
          setTimeout(function() {
            _this.render();
            renderEnqueued = false;
            return trigger(_this.el, 'odometerdone');
          }, 0);
          return true;
        }, false));
      }
      return _results;
    };

    Odometer.prototype.resetFormat = function() {
      var format, fractional, parsed, precision, radix, repeating, _ref, _ref1;
      format = (_ref = this.options.format) != null ? _ref : DIGIT_FORMAT;
      format || (format = 'd');
      parsed = FORMAT_PARSER.exec(format);
      if (!parsed) {
        throw new Error("Odometer: Unparsable digit format");
      }
      _ref1 = parsed.slice(1, 4), repeating = _ref1[0], radix = _ref1[1], fractional = _ref1[2];
      precision = (fractional != null ? fractional.length : void 0) || 0;
      return this.format = {
        repeating: repeating,
        radix: radix,
        precision: precision
      };
    };

    Odometer.prototype.render = function(value) {
      var classes, cls, match, newClasses, theme, _i, _len;
      if (value == null) {
        value = this.value;
      }
      this.stopWatchingMutations();
      this.resetFormat();
      this.inside.innerHTML = '';
      theme = this.options.theme;
      classes = this.el.className.split(' ');
      newClasses = [];
      for (_i = 0, _len = classes.length; _i < _len; _i++) {
        cls = classes[_i];
        if (!cls.length) {
          continue;
        }
        if (match = /^odometer-theme-(.+)$/.exec(cls)) {
          theme = match[1];
          continue;
        }
        if (/^odometer(-|$)/.test(cls)) {
          continue;
        }
        newClasses.push(cls);
      }
      newClasses.push('odometer');
      if (!TRANSITION_SUPPORT) {
        newClasses.push('odometer-no-transitions');
      }
      if (theme) {
        newClasses.push("odometer-theme-" + theme);
      } else {
        newClasses.push("odometer-auto-theme");
      }
      this.el.className = newClasses.join(' ');
      this.ribbons = {};
      this.formatDigits(value);
      return this.startWatchingMutations();
    };

    Odometer.prototype.formatDigits = function(value) {
      var digit, valueDigit, valueString, wholePart, _i, _j, _len, _len1, _ref, _ref1;
      this.digits = [];
      if (this.options.formatFunction) {
        valueString = this.options.formatFunction(value);
        _ref = valueString.split('').reverse();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          valueDigit = _ref[_i];
          if (valueDigit.match(/0-9/)) {
            digit = this.renderDigit();
            digit.querySelector('.odometer-value').innerHTML = valueDigit;
            this.digits.push(digit);
            this.insertDigit(digit);
          } else {
            this.addSpacer(valueDigit);
          }
        }
      } else {
        wholePart = !this.format.precision || !fractionalPart(value) || false;
        _ref1 = value.toString().split('').reverse();
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          digit = _ref1[_j];
          if (digit === '.') {
            wholePart = true;
          }
          this.addDigit(digit, wholePart);
        }
      }
    };

    Odometer.prototype.update = function(newValue) {
      var diff,
        _this = this;
      newValue = this.cleanValue(newValue);
      if (!(diff = newValue - this.value)) {
        return;
      }
      removeClass(this.el, 'odometer-animating-up odometer-animating-down odometer-animating');
      if (diff > 0) {
        addClass(this.el, 'odometer-animating-up');
      } else {
        addClass(this.el, 'odometer-animating-down');
      }
      this.stopWatchingMutations();
      this.animate(newValue);
      this.startWatchingMutations();
      setTimeout(function() {
        _this.el.offsetHeight;
        return addClass(_this.el, 'odometer-animating');
      }, 0);
      return this.value = newValue;
    };

    Odometer.prototype.renderDigit = function() {
      return createFromHTML(DIGIT_HTML);
    };

    Odometer.prototype.insertDigit = function(digit, before) {
      if (before != null) {
        return this.inside.insertBefore(digit, before);
      } else if (!this.inside.children.length) {
        return this.inside.appendChild(digit);
      } else {
        return this.inside.insertBefore(digit, this.inside.children[0]);
      }
    };

    Odometer.prototype.addSpacer = function(chr, before, extraClasses) {
      var spacer;
      spacer = createFromHTML(FORMAT_MARK_HTML);
      spacer.innerHTML = chr;
      if (extraClasses) {
        addClass(spacer, extraClasses);
      }
      return this.insertDigit(spacer, before);
    };

    Odometer.prototype.addDigit = function(value, repeating) {
      var chr, digit, resetted, _ref;
      if (repeating == null) {
        repeating = true;
      }
      if (value === '-') {
        return this.addSpacer(value, null, 'odometer-negation-mark');
      }
      if (value === '.') {
        return this.addSpacer((_ref = this.format.radix) != null ? _ref : '.', null, 'odometer-radix-mark');
      }
      if (repeating) {
        resetted = false;
        while (true) {
          if (!this.format.repeating.length) {
            if (resetted) {
              throw new Error("Bad odometer format without digits");
            }
            this.resetFormat();
            resetted = true;
          }
          chr = this.format.repeating[this.format.repeating.length - 1];
          this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1);
          if (chr === 'd') {
            break;
          }
          this.addSpacer(chr);
        }
      }
      digit = this.renderDigit();
      digit.querySelector('.odometer-value').innerHTML = value;
      this.digits.push(digit);
      return this.insertDigit(digit);
    };

    Odometer.prototype.animate = function(newValue) {
      if (!TRANSITION_SUPPORT || this.options.animation === 'count') {
        return this.animateCount(newValue);
      } else {
        return this.animateSlide(newValue);
      }
    };

    Odometer.prototype.animateCount = function(newValue) {
      var cur, diff, last, start, tick,
        _this = this;
      if (!(diff = +newValue - this.value)) {
        return;
      }
      start = last = now();
      cur = this.value;
      return (tick = function() {
        var delta, dist, fraction;
        if ((now() - start) > _this.options.duration) {
          _this.value = newValue;
          _this.render();
          trigger(_this.el, 'odometerdone');
          return;
        }
        delta = now() - last;
        if (delta > COUNT_MS_PER_FRAME) {
          last = now();
          fraction = delta / _this.options.duration;
          dist = diff * fraction;
          cur += dist;
          _this.render(Math.round(cur));
        }
        if (requestAnimationFrame != null) {
          return requestAnimationFrame(tick);
        } else {
          return setTimeout(tick, COUNT_MS_PER_FRAME);
        }
      })();
    };

    Odometer.prototype.getDigitCount = function() {
      var i, max, value, values, _i, _len;
      values = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      for (i = _i = 0, _len = values.length; _i < _len; i = ++_i) {
        value = values[i];
        values[i] = Math.abs(value);
      }
      max = Math.max.apply(Math, values);
      return Math.ceil(Math.log(max + 1) / Math.log(10));
    };

    Odometer.prototype.getFractionalDigitCount = function() {
      var i, parser, parts, value, values, _i, _len;
      values = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      parser = /^\-?\d*\.(\d*?)0*$/;
      for (i = _i = 0, _len = values.length; _i < _len; i = ++_i) {
        value = values[i];
        values[i] = value.toString();
        parts = parser.exec(values[i]);
        if (parts == null) {
          values[i] = 0;
        } else {
          values[i] = parts[1].length;
        }
      }
      return Math.max.apply(Math, values);
    };

    Odometer.prototype.resetDigits = function() {
      this.digits = [];
      this.ribbons = [];
      this.inside.innerHTML = '';
      return this.resetFormat();
    };

    Odometer.prototype.animateSlide = function(newValue) {
      var boosted, cur, diff, digitCount, digits, dist, end, fractionalCount, frame, frames, i, incr, j, mark, numEl, oldValue, start, _base, _i, _j, _k, _l, _len, _len1, _len2, _m, _ref, _results;
      oldValue = this.value;
      fractionalCount = this.getFractionalDigitCount(oldValue, newValue);
      if (fractionalCount) {
        newValue = newValue * Math.pow(10, fractionalCount);
        oldValue = oldValue * Math.pow(10, fractionalCount);
      }
      if (!(diff = newValue - oldValue)) {
        return;
      }
      this.bindTransitionEnd();
      digitCount = this.getDigitCount(oldValue, newValue);
      digits = [];
      boosted = 0;
      for (i = _i = 0; 0 <= digitCount ? _i < digitCount : _i > digitCount; i = 0 <= digitCount ? ++_i : --_i) {
        start = truncate(oldValue / Math.pow(10, digitCount - i - 1));
        end = truncate(newValue / Math.pow(10, digitCount - i - 1));
        dist = end - start;
        if (Math.abs(dist) > this.MAX_VALUES) {
          frames = [];
          incr = dist / (this.MAX_VALUES + this.MAX_VALUES * boosted * DIGIT_SPEEDBOOST);
          cur = start;
          while ((dist > 0 && cur < end) || (dist < 0 && cur > end)) {
            frames.push(Math.round(cur));
            cur += incr;
          }
          if (frames[frames.length - 1] !== end) {
            frames.push(end);
          }
          boosted++;
        } else {
          frames = (function() {
            _results = [];
            for (var _j = start; start <= end ? _j <= end : _j >= end; start <= end ? _j++ : _j--){ _results.push(_j); }
            return _results;
          }).apply(this);
        }
        for (i = _k = 0, _len = frames.length; _k < _len; i = ++_k) {
          frame = frames[i];
          frames[i] = Math.abs(frame % 10);
        }
        digits.push(frames);
      }
      this.resetDigits();
      _ref = digits.reverse();
      for (i = _l = 0, _len1 = _ref.length; _l < _len1; i = ++_l) {
        frames = _ref[i];
        if (!this.digits[i]) {
          this.addDigit(' ', i >= fractionalCount);
        }
        if ((_base = this.ribbons)[i] == null) {
          _base[i] = this.digits[i].querySelector('.odometer-ribbon-inner');
        }
        this.ribbons[i].innerHTML = '';
        if (diff < 0) {
          frames = frames.reverse();
        }
        for (j = _m = 0, _len2 = frames.length; _m < _len2; j = ++_m) {
          frame = frames[j];
          numEl = document.createElement('div');
          numEl.className = 'odometer-value';
          numEl.innerHTML = frame;
          this.ribbons[i].appendChild(numEl);
          if (j === frames.length - 1) {
            addClass(numEl, 'odometer-last-value');
          }
          if (j === 0) {
            addClass(numEl, 'odometer-first-value');
          }
        }
      }
      if (start < 0) {
        this.addDigit('-');
      }
      mark = this.inside.querySelector('.odometer-radix-mark');
      if (mark != null) {
        mark.parent.removeChild(mark);
      }
      if (fractionalCount) {
        return this.addSpacer(this.format.radix, this.digits[fractionalCount - 1], 'odometer-radix-mark');
      }
    };

    return Odometer;

  })();

  Odometer.options = (_ref = window.odometerOptions) != null ? _ref : {};

  setTimeout(function() {
    var k, v, _base, _ref1, _results;
    if (window.odometerOptions) {
      _ref1 = window.odometerOptions;
      _results = [];
      for (k in _ref1) {
        v = _ref1[k];
        _results.push((_base = Odometer.options)[k] != null ? (_base = Odometer.options)[k] : _base[k] = v);
      }
      return _results;
    }
  }, 0);

  Odometer.init = function() {
    var el, elements, _i, _len, _ref1, _results;
    if (document.querySelectorAll == null) {
      return;
    }
    elements = document.querySelectorAll(Odometer.options.selector || '.odometer');
    _results = [];
    for (_i = 0, _len = elements.length; _i < _len; _i++) {
      el = elements[_i];
      _results.push(el.odometer = new Odometer({
        el: el,
        value: (_ref1 = el.innerText) != null ? _ref1 : el.textContent
      }));
    }
    return _results;
  };

  if ((((_ref1 = document.documentElement) != null ? _ref1.doScroll : void 0) != null) && (document.createEventObject != null)) {
    _old = document.onreadystatechange;
    document.onreadystatechange = function() {
      if (document.readyState === 'complete' && Odometer.options.auto !== false) {
        Odometer.init();
      }
      return _old != null ? _old.apply(this, arguments) : void 0;
    };
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      if (Odometer.options.auto !== false) {
        return Odometer.init();
      }
    }, false);
  }

  if ( true && exports !== null) {
    module.exports = Odometer;
  }
  else if (true) {
    __webpack_require__(46)(window.jQuery && ['jquery'], function() {
      return Odometer;
    });
  } else {}

}).call(this);


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ })
/******/ ]);
