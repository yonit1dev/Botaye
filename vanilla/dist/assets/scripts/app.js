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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_placeLocator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/placeLocator */ \"./src/components/placeLocator.js\");\n/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/globals */ \"./src/utils/globals.js\");\n\n\n\nclass App {\n  static init() {\n    new _components_placeLocator__WEBPACK_IMPORTED_MODULE_0__.PlaceLocator(_utils_globals__WEBPACK_IMPORTED_MODULE_1__.DOM, _utils_globals__WEBPACK_IMPORTED_MODULE_1__.MODAL, _utils_globals__WEBPACK_IMPORTED_MODULE_1__.MAP);\n  }\n}\n\nApp.init();\n\n\n//# sourceURL=webpack://myplace/./src/app.js?");

/***/ }),

/***/ "./src/components/placeLocator.js":
/*!****************************************!*\
  !*** ./src/components/placeLocator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlaceLocator\": () => (/* binding */ PlaceLocator)\n/* harmony export */ });\n/* harmony import */ var _models_userPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/userPosition */ \"./src/models/userPosition.js\");\n\n\nclass PlaceLocator {\n  constructor(domObject, modal, mapElement) {\n    this.DOM = domObject;\n    this.MODAL = modal;\n    this.MAP = mapElement;\n\n    this.placeLink = this.DOM.shareInput;\n    this.sharePlaceBtn = this.DOM.shareBtn;\n\n    this.addressField = this.DOM.findInput;\n    this.findPlaceBtn = this.DOM.findBtn;\n    this.locatePlaceBtn = this.DOM.locateBtn;\n\n    this.sharePlaceBtn.addEventListener(\n      \"click\",\n      this.sharePlaceHandler.bind(this)\n    );\n\n    this.findPlaceBtn.addEventListener(\n      \"click\",\n      this.findPlaceHandler.bind(this)\n    );\n    this.locatePlaceBtn.addEventListener(\n      \"click\",\n      this.locateUserHandler.bind(this)\n    );\n  }\n\n  placeMarker(location) {\n    if (this.map) {\n      this.MAP.map(this.DOM.map, location);\n      this.MAP.marker(location, this.map, \"Your Location\", \"blue\");\n    } else {\n      this.map = this.MAP.map(this.DOM.map, location);\n      this.MAP.marker(location, this.map, \"Your Location\", \"blue\");\n    }\n  }\n\n  sharePlaceFormat(coords, address = undefined) {\n    const parsedAddress = `${\n      location.origin\n    }/dist/vanilla/sharedPlace?address=${encodeURI(address)}&lat=${\n      coords.latitude\n    }&lng=${coords.longitude}`;\n    this.placeLink.value = parsedAddress;\n    this.sharePlaceBtn.disabled = false;\n  }\n\n  sharePlaceHandler() {\n    if (!navigator.clipboard) {\n      alert(\"Your browser doesn't support copying to clipboard\");\n      this.placeLink.value.select();\n    } else {\n      navigator.clipboard.writeText(this.placeLink.value);\n    }\n  }\n\n  findPlaceHandler() {\n    const address = this.DOM.findInput.value;\n    this.MODAL.show();\n    if (address && address.trim().length > 0) {\n      this.MAP.geocoder(address, this.map);\n      this.MODAL.hide();\n    } else {\n      this.MODAL.hide();\n      alert(\"Enter a valid address\");\n      return;\n    }\n  }\n\n  locateUserHandler() {\n    this.MODAL.show();\n\n    navigator.geolocation.getCurrentPosition(\n      (userLocation) => {\n        this.MODAL.hide();\n        const userPosition = new _models_userPosition__WEBPACK_IMPORTED_MODULE_0__.UserPosition(\n          userLocation.coords.latitude,\n          userLocation.coords.longitude\n        );\n\n        this.placeMarker(userPosition);\n        this.sharePlaceFormat(userPosition);\n      },\n      (errorResult) => {\n        this.MODAL.hide();\n\n        alert(\"Couldn't locate you. Enter your location manually!\");\n\n        console.log(new Error(errorResult));\n      }\n    );\n  }\n}\n\n\n\n\n//# sourceURL=webpack://myplace/./src/components/placeLocator.js?");

/***/ }),

/***/ "./src/models/domHelper.js":
/*!*********************************!*\
  !*** ./src/models/domHelper.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMHelper\": () => (/* binding */ DOMHelper)\n/* harmony export */ });\n/* harmony import */ var _ui_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/modal */ \"./src/ui/modal.js\");\n\n\nclass DOMHelper {\n  constructor() {\n    this.modalTemplate = document.getElementById(\"modal-template\");\n    this.modalTemplateContent = document.getElementById(\n      \"modal-template-content\"\n    );\n\n    this.map = document.getElementById(\"map\");\n\n    this.shareInput = document.getElementById(\"share-link\");\n    this.shareBtn = document.getElementById(\"share-place\");\n\n    this.findInput = document.getElementById(\"find-input\");\n    this.findBtn = document.getElementById(\"find-btn\");\n\n    this.locateBtn = document.getElementById(\"locate-btn\");\n  }\n\n  appendToBody(element, position) {\n    document.body.insertAdjacentElement(position, element);\n  }\n\n  removeFromBody(element) {\n    document.body.removeChild(element);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://myplace/./src/models/domHelper.js?");

/***/ }),

/***/ "./src/models/userPosition.js":
/*!************************************!*\
  !*** ./src/models/userPosition.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserPosition\": () => (/* binding */ UserPosition)\n/* harmony export */ });\nclass UserPosition {\n  constructor(latitude, longitude) {\n    this.latitude = latitude;\n    this.longitude = longitude;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://myplace/./src/models/userPosition.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;