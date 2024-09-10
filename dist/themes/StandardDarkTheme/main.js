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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var osjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! osjs */ "osjs");
/* harmony import */ var osjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(osjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metadata_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata.json */ "./metadata.json");
var _metadata_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./metadata.json */ "./metadata.json", 1);
!(function webpackMissingModule() { var e = new Error("Cannot find module './src/base/src/theme.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */





osjs__WEBPACK_IMPORTED_MODULE_1___default.a.register(_metadata_json__WEBPACK_IMPORTED_MODULE_2__["name"], !(function webpackMissingModule() { var e = new Error("Cannot find module './src/base/src/theme.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/***/ }),

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from C:/Users/user/Documents/GitHub/OS.js/node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from C:/Users/user/Documents/GitHub/OS.js/node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n31 │ @import \"src/base/src/variables\";\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  index.scss 31:9  root stylesheet\n    at C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass-loader\\dist\\index.js:49:7\n    at Function.call$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:118540:16)\n    at render_closure1.call$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:101842:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:37294:18)\n    at _FutureListener.handleError$1 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35809:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:36124:49)\n    at Object._Future__propagateToListeners (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:5089:77)\n    at _Future._completeError$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35975:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35573:12)\n    at Object._asyncRethrow (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:4875:17)\n    at C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:26739:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:4900:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35592:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35586:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:37294:18)\n    at _FutureListener.handleError$1 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35809:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:36124:49)\n    at Object._Future__propagateToListeners (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:5089:77)\n    at _Future._completeError$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35975:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35573:12)\n    at Object._asyncRethrow (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:4875:17)\n    at C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:19589:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:4900:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35592:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35586:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:37294:18)\n    at _FutureListener.handleError$1 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35809:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:36124:49)\n    at Object._Future__propagateToListeners (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:5089:77)\n    at _Future._completeError$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35975:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35573:12)\n    at Object._asyncRethrow (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:4875:17)\n    at C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:19633:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:4900:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35592:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35586:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:37294:18)\n    at _FutureListener.handleError$1 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35809:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:36124:49)\n    at Object._Future__propagateToListeners (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:5089:77)\n    at _Future._completeError$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35975:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35573:12)\n    at Object._asyncRethrow (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:4875:17)\n    at C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:81412:24\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:4900:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\user\\Documents\\GitHub\\OS.js\\node_modules\\sass\\sass.dart.js:35592:12)");

/***/ }),

/***/ "./metadata.json":
/*!***********************!*\
  !*** ./metadata.json ***!
  \***********************/
/*! exports provided: type, name, title, description, files, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"theme\",\"name\":\"StandardDarkTheme\",\"title\":{\"en_EN\":\"Standard Dark Theme\",\"fr_FR\":\"Thème Noir Standard\",\"sl_SI\":\"Standardna Temna Tema\",\"pt_BR\":\"Tema Dark Padrão\"},\"description\":{\"en_EN\":\"Standard Dark Theme\",\"fr_FR\":\"Thème Noir Standard\",\"sl_SI\":\"Standardna Temna Tema\",\"pt_BR\":\"Tema Dark Padrão\"},\"files\":[\"main.js\",\"main.css\"]}");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Documents\GitHub\OS.js\src\packages\osjs-standard-dark-theme-master\index.js */"./index.js");


/***/ }),

/***/ "osjs":
/*!***********************!*\
  !*** external "OSjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = OSjs;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map