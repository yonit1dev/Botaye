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

/***/ "./src/models/domHelper.js":
/*!*********************************!*\
  !*** ./src/models/domHelper.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMHelper\": () => (/* binding */ DOMHelper)\n/* harmony export */ });\nclass DOMHelper {\n  constructor() {\n    this.modalTemplate = document.getElementById(\"modal-template\");\n    this.modalTemplateContent = document.getElementById(\n      \"modal-template-content\"\n    );\n\n    this.map = document.getElementById(\"map\");\n\n    this.shareInput = document.getElementById(\"share-link\");\n    this.shareBtn = document.getElementById(\"share-place\");\n\n    this.findInput = document.getElementById(\"find-input\");\n    this.findBtn = document.getElementById(\"find-btn\");\n\n    this.locateBtn = document.getElementById(\"locate-btn\");\n  }\n\n  appendToBody(element, position) {\n    document.body.insertAdjacentElement(position, element);\n  }\n\n  removeFromBody(element) {\n    document.body.removeChild(element);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://myplace/./src/models/domHelper.js?");

/***/ }),

/***/ "./src/models/userPosition.js":
/*!************************************!*\
  !*** ./src/models/userPosition.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserPosition\": () => (/* binding */ UserPosition)\n/* harmony export */ });\nclass UserPosition {\n  constructor(latitude, longitude) {\n    this.latitude = latitude;\n    this.longitude = longitude;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://myplace/./src/models/userPosition.js?");

/***/ }),

/***/ "./src/sharePlace.js":
/*!***************************!*\
  !*** ./src/sharePlace.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOM\": () => (/* binding */ DOM)\n/* harmony export */ });\n/* harmony import */ var _models_domHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/domHelper.js */ \"./src/models/domHelper.js\");\n/* harmony import */ var _models_userPosition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/userPosition.js */ \"./src/models/userPosition.js\");\n/* harmony import */ var _ui_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/modal.js */ \"./src/ui/modal.js\");\n/* harmony import */ var _ui_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/map.js */ \"./src/ui/map.js\");\n/* harmony import */ var _utils_location_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/location.js */ \"./src/utils/location.js\");\n\n\n\n\n\n\n// global dom object to help with dom manipulations\nconst DOM = new _models_domHelper_js__WEBPACK_IMPORTED_MODULE_0__.DOMHelper();\n\nclass PlaceLocator {\n  constructor() {\n    this.address = DOM.findInput;\n    this.findPlace = DOM.findBtn;\n    this.locateBtn = DOM.locateBtn;\n\n    this.findPlace.addEventListener(\n      \"click\",\n      this.findAddressHandler.bind(this)\n    );\n\n    this.locateBtn.addEventListener(\"click\", this.locateMeHandler.bind(this));\n  }\n\n  pinPointLocation(location, address) {\n    if (this.map) {\n      this.map.render(location);\n    } else {\n      this.map = new _ui_map_js__WEBPACK_IMPORTED_MODULE_3__.Map(location);\n    }\n  }\n\n  findAddressHandler() {\n    // Requires billing to be setup in google maps platform.\n    // const addressEntered = this.address.value;\n    // if (!addressEntered || addressEntered.trim().length === 0) {\n    //   alert(\"Invalid address entered!\");\n    //   return;\n    // }\n    // translateLocation(addressEntered);\n  }\n\n  locateMeHandler() {\n    const loadingModal = new _ui_modal_js__WEBPACK_IMPORTED_MODULE_2__.Modal();\n    loadingModal.show();\n\n    navigator.geolocation.getCurrentPosition(\n      (foundLocation) => {\n        const userPosition = new _models_userPosition_js__WEBPACK_IMPORTED_MODULE_1__.UserPosition(\n          foundLocation.coords.latitude,\n          foundLocation.coords.longitude\n        );\n\n        const address = (0,_utils_location_js__WEBPACK_IMPORTED_MODULE_4__.translateCoords)(userPosition);\n        loadingModal.hide();\n\n        this.pinPointLocation(userPosition, address);\n      },\n      (errorResult) => {\n        loadingModal.hide();\n\n        alert(\"Couldn't locate you. Enter your location manually!\");\n        console.log(errorResult);\n      }\n    );\n  }\n}\n\nconst placeLocator = new PlaceLocator();\n\n\n\n\n//# sourceURL=webpack://myplace/./src/sharePlace.js?");

/***/ }),

/***/ "./src/ui/map.js":
/*!***********************!*\
  !*** ./src/ui/map.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Map\": () => (/* binding */ Map)\n/* harmony export */ });\n/* harmony import */ var _sharePlace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sharePlace.js */ \"./src/sharePlace.js\");\n\n\nclass Map {\n  constructor(location) {\n    this.location = {\n      lat: location.latitude,\n      lng: location.longitude,\n    };\n    this.render(this.location);\n  }\n\n  render(location) {\n    if (!google) {\n      alert(\"Couldn't reach out to Google Maps SDK!\");\n      return;\n    }\n\n    this.map = new google.maps.Map(_sharePlace_js__WEBPACK_IMPORTED_MODULE_0__.DOM.map, {\n      center: location,\n      zoom: 16,\n    });\n\n    this.marker = new google.maps.Marker({\n      position: location,\n      map: this.map,\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://myplace/./src/ui/map.js?");

/***/ }),

/***/ "./src/ui/modal.js":
/*!*************************!*\
  !*** ./src/ui/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _sharePlace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sharePlace.js */ \"./src/sharePlace.js\");\n\n\nclass Modal {\n  constructor() {\n    this.modalTemplate = _sharePlace_js__WEBPACK_IMPORTED_MODULE_0__.DOM.modalTemplate;\n    this.modalContent = _sharePlace_js__WEBPACK_IMPORTED_MODULE_0__.DOM.modalTemplateContent;\n  }\n  show() {\n    const modalEl = document.importNode(this.modalTemplate.content, true);\n    const contentEl = document.importNode(this.modalContent.content, true);\n\n    this.overlay = modalEl.querySelector(\".overlay\");\n    this.modal = modalEl.querySelector(\".modal\");\n\n    this.modal.appendChild(contentEl);\n\n    _sharePlace_js__WEBPACK_IMPORTED_MODULE_0__.DOM.appendToBody(this.overlay, \"afterbegin\");\n    _sharePlace_js__WEBPACK_IMPORTED_MODULE_0__.DOM.appendToBody(this.modal, \"afterbegin\");\n    document.body.style.overflow = \"hidden\";\n  }\n\n  hide() {\n    if (this.modal) {\n      _sharePlace_js__WEBPACK_IMPORTED_MODULE_0__.DOM.removeFromBody(this.overlay);\n      _sharePlace_js__WEBPACK_IMPORTED_MODULE_0__.DOM.removeFromBody(this.modal);\n      document.body.style.overflow = \"scroll\";\n\n      this.modal = null;\n      this.overlay = null;\n    } else {\n      return;\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://myplace/./src/ui/modal.js?");

/***/ }),

/***/ "./src/utils/location.js":
/*!*******************************!*\
  !*** ./src/utils/location.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"translateCoords\": () => (/* binding */ translateCoords),\n/* harmony export */   \"translateLocation\": () => (/* binding */ translateLocation)\n/* harmony export */ });\nconst geocoder = new google.maps.Geocoder();\n\nfunction translateCoords(coords) {\n  const latlng = {\n    lat: coords.latitude,\n    lng: coords.longitude,\n  };\n  let formattedAddress;\n\n  geocoder\n    .geocode({ location: latlng })\n    .then((response) => {\n      if (response.results) {\n        formattedAddress = response.results[0].formattedAddress;\n      }\n    })\n    .catch((error) => {\n      alert(\"Failed to parse\");\n      console.log(error);\n    });\n\n  return formattedAddress;\n}\n\nfunction translateLocation(address) {\n  const formatAddress = encodeURI(address);\n\n  geocoder.geocode({ address: formatAddress }, function (results, status) {\n    if (status == \"OK\") {\n      console.log(results);\n    } else {\n      alert(\"Error\");\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack://myplace/./src/utils/location.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sharePlace.js");
/******/ 	
/******/ })()
;