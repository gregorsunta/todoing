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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _modules_TaskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/TaskList */ \"./src/modules/TaskList.js\");\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n//this index file starts the whole web app\n\n\n\n\n_modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addMainEventListeners();\n_modules_UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addModalEventListeners();\n\n\n//# sourceURL=webpack://todo-tastic/./src/index.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(\n    title,\n    description = \"No description.\",\n    priority = \"No priority added.\",\n    dueDate = \"No date added.\"\n  ) {\n    this.title = title;\n    this.description = description;\n    this.priority = priority;\n    this.dueDate = dueDate;\n  }\n  taskName() {\n    console.log(this.title);\n  }\n}\n\n\n//# sourceURL=webpack://todo-tastic/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/TaskList.js":
/*!*********************************!*\
  !*** ./src/modules/TaskList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./src/modules/UI.js\");\n\n\n\nclass TaskList {\n  static taskArray = [];\n  static addNewTask = function () {\n    const input = _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getModalInput();\n    console.log(input);\n    const newTask = new _Task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](...input);\n    TaskList.taskArray.push(newTask);\n    console.log(\"Updated array: \" + TaskList.taskArray[0]);\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);\n\n\n//# sourceURL=webpack://todo-tastic/./src/modules/TaskList.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _TaskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskList */ \"./src/modules/TaskList.js\");\n\n\n\nclass UI {\n  static addMainEventListeners = function () {\n    const addBtn = document.querySelector(\"#add-btn\");\n    const profileBtn = document.querySelector(\"#profile-btn\");\n    const settingsBtn = document.querySelector(\"#settings-btn\");\n    addBtn.addEventListener(\"click\", UI.openModal);\n  };\n\n  static addModalEventListeners = function () {\n    const modal = document.querySelector(\".modal\");\n    const closeModalBtn = document.querySelector(\".modal-close-btn\");\n    // const confirmModalBtn = document.querySelector(\".modal-confirm-btn\");\n    const priorityBtns = document.querySelectorAll(\".priority-btn\");\n\n    closeModalBtn.addEventListener(\"click\", UI.closeModal);\n\n    priorityBtns.forEach((el) => {\n      el.addEventListener(\"click\", function (e) {\n        priorityBtns.forEach((el) => el.classList.remove(\"checked-priority\"));\n        e.preventDefault();\n        el.classList.add(\"checked-priority\");\n      });\n    });\n\n    modal.addEventListener(\"submit\", function (e) {\n      e.preventDefault();\n      _TaskList__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addNewTask();\n      UI.closeModal();\n      UI.resetModal();\n    });\n  };\n\n  static getModalInput = function () {\n    const getName = function () {\n      return document.getElementById(\"task-name\").value;\n    };\n    const getProject = function () {\n      return document.getElementById(\"project-name\").value;\n    };\n    const getDate = function () {\n      const input = document.getElementById(\"task-date\").value;\n      return new Date(input);\n    };\n    const getPriority = function () {};\n\n    return [getName(), getProject(), getPriority(), getDate()];\n  };\n\n  static openModal = function () {\n    const taskInputModal = document.querySelector(\".modal\");\n    taskInputModal.classList.remove(\"hide\");\n  };\n\n  static closeModal = function () {\n    const taskInputModal = document.querySelector(\".modal\");\n    taskInputModal.classList.add(\"hide\");\n  };\n\n  static resetModal = function () {\n    const taskName = document.getElementById(\"task-name\").textContent;\n    const projectName = document.getElementById(\"project-name\").textContent;\n    const taskDate = document.getElementById(\"task-date\").textContent;\n    const priorityBtns = Array.from(\n      document.getElementsByClassName(\"priority-btn\")\n    );\n    console.log(priorityBtns);\n    priorityBtns.forEach((element) => {\n      (el) => /* el.removeAttribute(\"clicked\") */ console.log(\"da\");\n    });\n  };\n\n  static populateTasks = function () {\n    const div = document.createElement(\"div\");\n    const form = document.createElement(\"form\");\n    const p = document.createElement(\"p\");\n  };\n}\n\n\n//# sourceURL=webpack://todo-tastic/./src/modules/UI.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;