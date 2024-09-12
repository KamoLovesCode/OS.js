/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "osjs":
/*!***********************!*\
  !*** external "OSjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = OSjs;

/***/ }),

/***/ "./metadata.json":
/*!***********************!*\
  !*** ./metadata.json ***!
  \***********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"type":"application","name":"Welcome","icon":"icon.png","category":null,"server":null,"autostart":true,"title":{"en_EN":"Welcome"},"description":{"en_EN":"Welcome"},"files":["main.js"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var osjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! osjs */ "osjs");
/* harmony import */ var osjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(osjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _metadata_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metadata.json */ "./metadata.json");



// Our launcher
var register = function register(core, args, options, metadata) {
  // Create a new Application instance
  var proc = core.make('osjs/application', {
    args: args,
    options: options,
    metadata: metadata
  });

  // Create a new Window instance and center it on the screen
  proc.createWindow({
    id: 'WelcomeWindow',
    title: metadata.title.en_EN,
    icon: proc.resource(proc.metadata.icon),
    dimension: {
      width: 500,
      height: 400
    },
    // Fixed window size
    position: 'center',
    // Automatically centers the window
    attributes: {
      resizable: false,
      // Make window non-resizable
      minDimension: {
        width: 500,
        height: 400
      },
      // Set minimum size to prevent resizing below fixed size
      maxDimension: {
        width: 500,
        height: 400
      },
      // Set maximum size to prevent resizing above fixed size
      overflow: 'hidden' // Ensure no overflow within the window
    }
  }).on('destroy', function () {
    return proc.destroy();
  }).render(function ($content) {
    var iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.src = proc.resource('/data/index.html');
    iframe.setAttribute('border', '0');
    iframe.style.overflow = 'hidden'; // Disable overflow inside the iframe
    $content.appendChild(iframe);
  });
  return proc;
};

// Creates the internal callback function when OS.js launches an application
osjs__WEBPACK_IMPORTED_MODULE_0___default().register(_metadata_json__WEBPACK_IMPORTED_MODULE_1__.name, register);
/******/ })()
;
//# sourceMappingURL=main.js.map