/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/rainbow/full",{

/***/ "./components/FullScreenContainer.tsx":
/*!********************************************!*\
  !*** ./components/FullScreenContainer.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FillParent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FillParent */ \"./components/FillParent.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jaimehoeks/Projects/personal/mood-light/components/FullScreenContainer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar FullScreenContainer = function FullScreenContainer(_ref) {\n  _s();\n\n  var onClickBack = _ref.onClickBack,\n      children = _ref.children;\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isFullScreen = _useState[0],\n      setIsFullScreen = _useState[1];\n\n  var handleClickBack = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {\n    e.preventDefault();\n\n    if (isFullScreen) {\n      document.exitFullscreen();\n    } else if (ref.current) {\n      onClickBack();\n    }\n  }, [isFullScreen, ref]);\n  var handleClickToggle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (e) {\n    e.preventDefault();\n\n    if (isFullScreen) {\n      document.exitFullscreen();\n    } else if (ref.current) {\n      ref.current.requestFullscreen({\n        navigationUI: 'hide'\n      });\n    }\n  }, [isFullScreen, ref]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handler = function handler() {\n      setIsFullScreen(document.fullscreenElement != null);\n    };\n\n    document.addEventListener('fullscreenchange', handler);\n    return function () {\n      document.removeEventListener('fullscreenchange', handler);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FillParent__WEBPACK_IMPORTED_MODULE_2__.default, {\n    ref: ref,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: \"btn\",\n      style: {\n        position: 'absolute',\n        top: 0,\n        left: 0,\n        width: '4em',\n        height: '4em'\n      },\n      type: \"button\",\n      onClick: handleClickBack,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"h-6 w-6\",\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        stroke: \"currentColor\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n          strokeLinecap: \"round\",\n          strokeLinejoin: \"round\",\n          strokeWidth: 2,\n          d: \"M10 19l-7-7m0 0l7-7m-7 7h18\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: \"btn\",\n      style: {\n        position: 'absolute',\n        bottom: 0,\n        right: 0,\n        width: '4em',\n        height: '4em'\n      },\n      type: \"button\",\n      onClick: handleClickToggle,\n      children: isFullScreen ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"h-6 w-6\",\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        stroke: \"currentColor\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n          strokeLinecap: \"round\",\n          strokeLinejoin: \"round\",\n          strokeWidth: 2,\n          d: \"M6 18L18 6M6 6l12 12\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        className: \"h-6 w-6\",\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        stroke: \"currentColor\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n          strokeLinecap: \"round\",\n          strokeLinejoin: \"round\",\n          strokeWidth: 2,\n          d: \"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FullScreenContainer, \"CIaKTWaeW3xV7AVxaRYdSuuZN14=\");\n\n_c = FullScreenContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullScreenContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"FullScreenContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdWxsU2NyZWVuQ29udGFpbmVyLnRzeD83YWM3Il0sIm5hbWVzIjpbIkZ1bGxTY3JlZW5Db250YWluZXIiLCJvbkNsaWNrQmFjayIsImNoaWxkcmVuIiwicmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc0Z1bGxTY3JlZW4iLCJzZXRJc0Z1bGxTY3JlZW4iLCJoYW5kbGVDbGlja0JhY2siLCJ1c2VDYWxsYmFjayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiZXhpdEZ1bGxzY3JlZW4iLCJjdXJyZW50IiwiaGFuZGxlQ2xpY2tUb2dnbGUiLCJyZXF1ZXN0RnVsbHNjcmVlbiIsIm5hdmlnYXRpb25VSSIsInVzZUVmZmVjdCIsImhhbmRsZXIiLCJmdWxsc2NyZWVuRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJib3R0b20iLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBTUEsSUFBTUEsbUJBQW9DLEdBQUcsU0FBdkNBLG1CQUF1QyxPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxXQUE0QixRQUE1QkEsV0FBNEI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDMUUsTUFBTUMsR0FBRyxHQUFHQyw2Q0FBTSxFQUFsQjs7QUFEMEUsa0JBRWxDQywrQ0FBUSxDQUFVLEtBQVYsQ0FGMEI7QUFBQSxNQUVuRUMsWUFGbUU7QUFBQSxNQUVyREMsZUFGcUQ7O0FBSTFFLE1BQU1DLGVBQWUsR0FBR0Msa0RBQVcsQ0FBNkMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3JGQSxLQUFDLENBQUNDLGNBQUY7O0FBQ0EsUUFBSUwsWUFBSixFQUFrQjtBQUNoQk0sY0FBUSxDQUFDQyxjQUFUO0FBQ0QsS0FGRCxNQUVPLElBQUlWLEdBQUcsQ0FBQ1csT0FBUixFQUFp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QjtBQUE0Qix3QkFBYyxFQUFDLE9BQTNDO0FBQW1ELHFCQUFXLEVBQUUsQ0FBaEU7QUFBbUUsV0FBQyxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkYsRUF1Q0dKLFFBdkNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkNELENBN0VEOztHQUFNRixtQjs7S0FBQUEsbUI7QUErRU4sK0RBQWVBLG1CQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9GdWxsU2NyZWVuQ29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsbFBhcmVudCBmcm9tICcuL0ZpbGxQYXJlbnQnO1xuXG50eXBlIFByb3BzID0ge1xuICBvbkNsaWNrQmFjazogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgRnVsbFNjcmVlbkNvbnRhaW5lcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25DbGlja0JhY2ssIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuICBjb25zdCBbaXNGdWxsU2NyZWVuLCBzZXRJc0Z1bGxTY3JlZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrQmFjayA9IHVzZUNhbGxiYWNrPFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50Pj4oKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGlzRnVsbFNjcmVlbikge1xuICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2UgaWYgKHJlZi5jdXJyZW50KSB7XG4gICAgICBvbkNsaWNrQmFjaygpO1xuICAgIH1cbiAgfSwgW2lzRnVsbFNjcmVlbiwgcmVmXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tUb2dnbGUgPSB1c2VDYWxsYmFjazxSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD4+KChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChpc0Z1bGxTY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgcmVmLmN1cnJlbnQucmVxdWVzdEZ1bGxzY3JlZW4oe1xuICAgICAgICBuYXZpZ2F0aW9uVUk6ICdoaWRlJyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2lzRnVsbFNjcmVlbiwgcmVmXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgc2V0SXNGdWxsU2NyZWVuKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ICE9IG51bGwpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZnVsbHNjcmVlbmNoYW5nZScsIGhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmdWxsc2NyZWVuY2hhbmdlJywgaGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEZpbGxQYXJlbnQgcmVmPXtyZWZ9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHdpZHRoOiAnNGVtJyxcbiAgICAgICAgICBoZWlnaHQ6ICc0ZW0nLFxuICAgICAgICB9fVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tCYWNrfVxuICAgICAgPlxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTYgdy02XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTEwIDE5bC03LTdtMCAwbDctN20tNyA3aDE4XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgd2lkdGg6ICc0ZW0nLFxuICAgICAgICAgIGhlaWdodDogJzRlbScsXG4gICAgICAgIH19XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja1RvZ2dsZX1cbiAgICAgID5cbiAgICAgICAge2lzRnVsbFNjcmVlbiA/IChcbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTYgdy02XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC02IHctNlwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTQgOFY0bTAgMGg0TTQgNGw1IDVtMTEtMVY0bTAgMGgtNG00IDBsLTUgNU00IDE2djRtMCAwaDRtLTQgMGw1LTVtMTEgNWwtNS01bTUgNXYtNG0wIDRoLTRcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICApfVxuICAgICAgPC9idXR0b24+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9GaWxsUGFyZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnVsbFNjcmVlbkNvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FullScreenContainer.tsx\n");

/***/ })

});