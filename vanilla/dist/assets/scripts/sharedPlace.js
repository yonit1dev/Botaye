/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/sharedPlace.js":
/*!***************************************!*\
  !*** ./src/components/sharedPlace.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globals */ \"./src/utils/globals.js\");\n\n\nclass SharedPlace {\n  constructor(coords, address) {\n    this.location = {\n      lat,\n      lng,\n    };\n    this.address;\n  }\n\n  collectParams() {}\n\n  renderSharedPlace() {}\n}\n\n\n//# sourceURL=webpack://myplace/./src/components/sharedPlace.js?");

/***/ }),

/***/ "./src/models/domHelper.js":
/*!*********************************!*\
  !*** ./src/models/domHelper.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMHelper\": () => (/* binding */ DOMHelper)\n/* harmony export */ });\n/* harmony import */ var _ui_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/modal */ \"./src/ui/modal.js\");\n\n\nclass DOMHelper {\n  constructor() {\n    this.modalTemplate = document.getElementById(\"modal-template\");\n    this.modalTemplateContent = document.getElementById(\n      \"modal-template-content\"\n    );\n\n    this.map = document.getElementById(\"map\");\n\n    this.shareInput = document.getElementById(\"share-link\");\n    this.shareBtn = document.getElementById(\"share-place\");\n\n    this.findInput = document.getElementById(\"find-input\");\n    this.findBtn = document.getElementById(\"find-btn\");\n\n    this.locateBtn = document.getElementById(\"locate-btn\");\n  }\n\n  appendToBody(element, position) {\n    document.body.insertAdjacentElement(position, element);\n  }\n\n  removeFromBody(element) {\n    document.body.removeChild(element);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://myplace/./src/models/domHelper.js?");

/***/ }),

/***/ "./src/ui/modal.js":
/*!*************************!*\
  !*** ./src/ui/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _utils_globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globals.js */ \"./src/utils/globals.js\");\n\n\nclass Modal {\n  constructor() {\n    this.modalTemplate = _utils_globals_js__WEBPACK_IMPORTED_MODULE_0__.DOM.modalTemplate;\n    this.modalContent = _utils_globals_js__WEBPACK_IMPORTED_MODULE_0__.DOM.modalTemplateContent;\n  }\n  show() {\n    const modalEl = document.importNode(this.modalTemplate.content, true);\n    const contentEl = document.importNode(this.modalContent.content, true);\n\n    this.overlay = modalEl.querySelector(\".overlay\");\n    this.modal = modalEl.querySelector(\".modal\");\n\n    this.modal.appendChild(contentEl);\n\n    _utils_globals_js__WEBPACK_IMPORTED_MODULE_0__.DOM.appendToBody(this.overlay, \"afterbegin\");\n    _utils_globals_js__WEBPACK_IMPORTED_MODULE_0__.DOM.appendToBody(this.modal, \"afterbegin\");\n    document.body.style.overflow = \"hidden\";\n  }\n\n  hide() {\n    if (this.modal) {\n      _utils_globals_js__WEBPACK_IMPORTED_MODULE_0__.DOM.removeFromBody(this.overlay);\n      _utils_globals_js__WEBPACK_IMPORTED_MODULE_0__.DOM.removeFromBody(this.modal);\n      document.body.style.overflow = \"scroll\";\n\n      this.modal = null;\n      this.overlay = null;\n    } else {\n      return;\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://myplace/./src/ui/modal.js?");

/***/ }),

/***/ "./src/utils/globals.js":
/*!******************************!*\
  !*** ./src/utils/globals.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_KEY\": () => (/* binding */ API_KEY),\n/* harmony export */   \"DOM\": () => (/* binding */ DOM),\n/* harmony export */   \"MAP\": () => (/* binding */ MAP),\n/* harmony export */   \"MODAL\": () => (/* binding */ MODAL)\n/* harmony export */ });\n/* harmony import */ var _models_domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/domHelper */ \"./src/models/domHelper.js\");\n/* harmony import */ var _ui_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/modal */ \"./src/ui/modal.js\");\n\n\n\nconst API_KEY = \"AIzaSyANQpFE8EDzAaOQKGzc8dVrLi2ShQ1u9MA\";\nconst DOM = new _models_domHelper__WEBPACK_IMPORTED_MODULE_0__.DOMHelper();\nconst MODAL = new _ui_modal__WEBPACK_IMPORTED_MODULE_1__.Modal();\n\nconst MAP = {\n  map(DOMElement, location) {\n    return new Microsoft.Maps.Map(DOMElement, {\n      credentials:\n        \"ApsPvdlfOBGbjg_12qq7n0rx4I7AoJrTjyUinZvqSAsCOLqRhzhG25CBdub5sHWh\",\n      center: new Microsoft.Maps.Location(\n        location.latitude,\n        location.longitude\n      ),\n      zoom: 12,\n    });\n  },\n\n  marker(location, map, searchedLocation = undefined, markerColor) {\n    const center = new Microsoft.Maps.Location(\n      location.latitude,\n      location.longitude\n    );\n    const pushpin = new Microsoft.Maps.Pushpin(center, {\n      title: searchedLocation,\n      subTitle: \"Location\",\n      color: markerColor,\n    });\n    map.entities.push(pushpin);\n\n    return pushpin;\n  },\n\n  geocoder(address = undefined, map = undefined) {\n    if (!this.searchManager) {\n      Microsoft.Maps.loadModule(\"Microsoft.Maps.Search\", () => {\n        this.searchManager = new Microsoft.Maps.Search.SearchManager(map);\n        this.geocoder(address, map);\n      });\n    } else {\n      let request = {\n        where: address,\n        callback: (result) => {\n          this.marker(result.results[0].location, map, address, \"green\");\n        },\n      };\n\n      this.searchManager.geocode(request);\n    }\n  },\n};\n\n\n\n\n//# sourceURL=webpack://myplace/./src/utils/globals.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/sharedPlace.js");
/******/ 	
/******/ })()
;