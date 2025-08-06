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

/***/ "../pkg/tic_tac_toe.js":
/*!*****************************!*\
  !*** ../pkg/tic_tac_toe.js ***!
  \*****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _tic_tac_toe_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),\n/* harmony export */   __wbindgen_init_externref_table: () => (/* reexport safe */ _tic_tac_toe_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_init_externref_table),\n/* harmony export */   compute_next_move: () => (/* reexport safe */ _tic_tac_toe_bg_js__WEBPACK_IMPORTED_MODULE_0__.compute_next_move)\n/* harmony export */ });\n/* harmony import */ var _tic_tac_toe_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tic_tac_toe_bg.wasm */ \"../pkg/tic_tac_toe_bg.wasm\");\n/* harmony import */ var _tic_tac_toe_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tic_tac_toe_bg.js */ \"../pkg/tic_tac_toe_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tic_tac_toe_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);\n_tic_tac_toe_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n(0,_tic_tac_toe_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_tic_tac_toe_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);\n_tic_tac_toe_bg_wasm__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_start();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../pkg/tic_tac_toe.js?");

/***/ }),

/***/ "../pkg/tic_tac_toe_bg.js":
/*!********************************!*\
  !*** ../pkg/tic_tac_toe_bg.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),\n/* harmony export */   __wbindgen_init_externref_table: () => (/* binding */ __wbindgen_init_externref_table),\n/* harmony export */   compute_next_move: () => (/* binding */ compute_next_move)\n/* harmony export */ });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nlet cachedUint8ArrayMemory0 = null;\n\nfunction getUint8ArrayMemory0() {\n    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {\n        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8ArrayMemory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray8ToWasm0(arg, malloc) {\n    const ptr = malloc(arg.length * 1, 1) >>> 0;\n    getUint8ArrayMemory0().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n * @param {Uint8Array} grid\n * @param {boolean} player\n * @returns {Uint8Array}\n */\nfunction compute_next_move(grid, player) {\n    const ptr0 = passArray8ToWasm0(grid, wasm.__wbindgen_malloc);\n    const len0 = WASM_VECTOR_LEN;\n    const ret = wasm.compute_next_move(ptr0, len0, player);\n    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();\n    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);\n    return v2;\n}\n\nfunction __wbindgen_init_externref_table() {\n    const table = wasm.__wbindgen_export_0;\n    const offset = table.grow(4);\n    table.set(0, undefined);\n    table.set(offset + 0, undefined);\n    table.set(offset + 1, null);\n    table.set(offset + 2, true);\n    table.set(offset + 3, false);\n    ;\n};\n\n\n\n//# sourceURL=webpack:///../pkg/tic_tac_toe_bg.js?");

/***/ }),

/***/ "../pkg/tic_tac_toe_bg.wasm":
/*!**********************************!*\
  !*** ../pkg/tic_tac_toe_bg.wasm ***!
  \**********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./tic_tac_toe_bg.js */ \"../pkg/tic_tac_toe_bg.js\");\nmodule.exports = __webpack_require__.v(exports, module.id, \"e24e514b5957c53a79d7\", {\n\t\"./tic_tac_toe_bg.js\": {\n\t\t\"__wbindgen_init_externref_table\": WEBPACK_IMPORTED_MODULE_0.__wbindgen_init_externref_table\n\t}\n});\n\n//# sourceURL=webpack:///../pkg/tic_tac_toe_bg.wasm?");

/***/ }),

/***/ "./class/tic-tac-toe.js":
/*!******************************!*\
  !*** ./class/tic-tac-toe.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TicTacToe: () => (/* binding */ TicTacToe)\n/* harmony export */ });\n/* harmony import */ var front_end__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! front-end */ \"../pkg/tic_tac_toe.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([front_end__WEBPACK_IMPORTED_MODULE_0__]);\nfront_end__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nclass TicTacToe {\n    #body = document.querySelector('body');\n    #game = document.createElement('div');\n\n    #emptyGrid = [\n        [0, 0, 0],\n        [0, 0, 0],\n        [0, 0, 0],\n    ]\n\n    #grid = this.#emptyGrid;\n    #player = false;\n\n    constructor() {\n        this.#game.classList.add(\"game\");\n        this.#body.append(this.#game);\n\n        this._createPlayerChoice();\n    }\n\n    // This function creates the player selector in the DOM.\n    _createPlayerChoice() {\n        const choiceContainer = document.createElement('div');\n        choiceContainer.classList.add(\"choice-container\");\n\n        const choiceCross = document.createElement('button');\n        const choiceCircle = document.createElement('button');\n\n        choiceCross.classList.add('choice-cross');\n        choiceCircle.classList.add('choice-circle');\n\n        choiceContainer.appendChild(choiceCross);\n        choiceContainer.appendChild(choiceCircle);\n\n        choiceCross.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 640 640\\\"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\\\"M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z\\\"/></svg>\";\n        choiceCircle.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 640 640\\\"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\\\"M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z\\\"/></svg>\"\n\n        this.#game.appendChild(choiceContainer);\n\n\n        choiceCross.addEventListener('click', () => {\n            this._choosePlayer(false);\n        });\n\n        choiceCircle.addEventListener('click', () => {\n            this._choosePlayer(true);\n        })\n    }\n\n    _choosePlayer(player) {\n        this.#player = player;\n\n        if (player == true) {\n            this._computeNextMove();\n        }\n\n        this._updateGrid();\n    }\n\n    _updateGrid() {\n        this.#game.innerHTML = \"\";\n        const grid = document.createElement('div');\n        grid.classList.add('grid');\n\n        for(let x = 0; x < 3; x ++) {\n            for(let y = 0; y < 3; y ++) {\n                const box = document.createElement('div');\n                box.classList.add('game-box');\n\n                box.addEventListener('click', () => {\n                    this._play(x, y);\n                });\n\n                if (this.#grid[x][y] == 1) {\n                    box.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 640 640\\\"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\\\"M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z\\\"/></svg>\";\n                } else if (this.#grid[x][y] == 2) {\n                    box.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 640 640\\\"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\\\"M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z\\\"/></svg>\";\n                }\n\n                grid.appendChild(box);\n            }\n        }\n\n        this.#game.appendChild(grid);\n    }\n\n    _play(x, y) {\n        if (this.#grid[x][y] !== 0) {\n            return;\n        }\n\n        this.#grid[x][y] = this.#player ? 2 : 1;\n\n        this._updateGrid();\n\n        if (this._checkWinner()) {\n            return;\n        }\n\n        this._computeNextMove();\n\n        if (this._checkWinner()) {\n            return;\n        }\n    }\n\n    _computeNextMove() {\n        console.log(\"old grid = \", this.#grid.flat());\n\n        const newGrid = front_end__WEBPACK_IMPORTED_MODULE_0__.compute_next_move(this.#grid.flat(), !this.#player);\n\n        console.log(\"new grid = \", newGrid);\n\n        for (let y = 0; y < 3; y++) {\n            for (let x = 0; x < 3; x ++) {\n                this.#grid[y][x] = newGrid[(y * 3) + x];\n            }\n        }\n\n        this._updateGrid();\n    }\n\n    _checkWinner() {\n        let diag1 = [];\n        let diag2 = [];\n        for(let a = 0; a < 3; a++) {\n            let line = [];\n            let col = [];\n            \n            diag1.push(this.#grid[a][a]);\n            diag2.push(this.#grid[a][2 - a])\n\n            for(let b = 0; b < 3; b++) {\n                line.push(this.#grid[a][b]);\n                col.push(this.#grid[b][a]);\n            }\n\n            if (line.every(v => v === line[0])) {\n                if (line[0] !== 0) {\n                    this._displayWinner(line[0]);\n                    return true;\n                }\n            }\n\n            if (col.every(v => v === col[0])) {\n                if (col[0] !== 0) {\n                    this._displayWinner(col[0]);\n                    return true;\n                }\n            }\n\n            let found0 = false;\n\n            this.#grid.forEach(e => {\n                if (e.includes(0)) {\n                    found0 = true;\n                }\n            });\n\n            if (!found0) {\n                return true;\n            }\n        }\n\n        if (diag1.every(v => v === diag1[0])) {\n            if (diag1[0] !== 0) {\n                this._displayWinner(diag1[0]);\n                return true;\n            }\n        }\n\n        if (diag2.every(v => v === diag2[0])) {\n            if (diag2[0] !== 0) {\n                this._displayWinner(diag2[0]);\n                return true;\n            }\n        }\n\n        return false;\n    }\n\n    _displayWinner(winner) {\n        this.#game.innerHTML = \"\";\n\n        const winnerContainer = document.createElement('div');\n        winnerContainer.classList.add(\"winner-container\");\n\n        const winnerDisplay = document.createElement('div');\n        winnerDisplay.classList.add(\"winner-display\");\n\n        if (winner === 1) {\n            winnerDisplay.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 640 640\\\"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\\\"M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z\\\"/></svg>\";\n        } else if (winner === 2) {\n            winnerDisplay.innerHTML = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 640 640\\\"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\\\"M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z\\\"/></svg>\";\n        } else {\n            return;\n        }\n\n        winnerContainer.append(winnerDisplay);\n\n        this.#game.append(winnerContainer);\n    }\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./class/tic-tac-toe.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_tic_tac_toe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/tic-tac-toe */ \"./class/tic-tac-toe.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_class_tic_tac_toe__WEBPACK_IMPORTED_MODULE_0__]);\n_class_tic_tac_toe__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// We import the tic-tac-toe class to be able to instenciate it\n// import { Sudoku } from './class/sudoku';\n\n\n// An array that will contain all the tic-tac-toes objects\nlet games = [];\n\n// We add a first game\ngames.push(new _class_tic_tac_toe__WEBPACK_IMPORTED_MODULE_0__.TicTacToe);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 		
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			var fallback = () => (req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports))));
/******/ 			return req.then((res) => {
/******/ 				if (typeof WebAssembly.instantiateStreaming === "function") {
/******/ 		
/******/ 					return WebAssembly.instantiateStreaming(res, importsObj)
/******/ 						.then(
/******/ 							(res) => (Object.assign(exports, res.instance.exports)),
/******/ 							(e) => {
/******/ 								if(res.headers.get("Content-Type") !== "application/wasm") {
/******/ 									console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
/******/ 									return fallback();
/******/ 								}
/******/ 								throw e;
/******/ 							}
/******/ 						);
/******/ 				}
/******/ 				return fallback();
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;