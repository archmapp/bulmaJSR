webpackHotUpdate("main",{

/***/ "./app/components/N/Nreact.js":
/*!************************************!*\
  !*** ./app/components/N/Nreact.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($$) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _C_ComponentA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../C/ComponentA */ \"./app/components/C/ComponentA.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction Nreact() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"section\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"is-size-4 has-text-weight-medium\"\n  }, \"[React]\"), \"Nreact\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"is-flex is-justify-content-center is-align-items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"useRef\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppuseRef, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppuseRefValue, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"is-flex is-justify-content-center is-align-items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"useReducer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Counter, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CounterActions, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CounterObject, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"is-flex is-justify-content-center is-align-items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"useContext\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2em',\n      textAlign: 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Learn useContext\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_C_ComponentA__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button has-background-grey has-text-white-ter is-pulled-right mr-5 mt-3\",\n    onClick: function onClick() {\n      return $$.scrTT('#top');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-arrow-circle-o-up\"\n  }), \"\\xA0\\xA0\\u30C8\\u30C3\\u30D7\"))));\n\n  function AppuseRef() {\n    var inputEl = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n        _useState2 = _slicedToArray(_useState, 2),\n        name = _useState2[0],\n        setName = _useState2[1];\n\n    var handleOnChange = function handleOnChange(e) {\n      setName(e.target.value);\n      console.log($$.Id('inputEl').value);\n      console.log($$.Id('inputEl') === inputEl.current);\n      console.log(inputEl.current.getBoundingClientRect());\n    };\n\n    var handleOnClick = function handleOnClick() {\n      return $$.Id('inputEl').focus();\n    }; // const handleOnClick = () => inputEl.current.focus()\n\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        margin: '2em'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"inputEl\",\n      ref: inputEl,\n      type: \"text\",\n      value: name,\n      onChange: handleOnChange\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u540D\\u524D\\uFF1A\", name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: handleOnClick\n    }, \"\\u30D5\\u30A9\\u30FC\\u30AB\\u30B9\\u3092\\u5F53\\u3066\\u308B\"));\n  }\n}\n\nfunction AppuseRefValue() {\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      _useState4 = _slicedToArray(_useState3, 2),\n      count = _useState4[0],\n      setCount = _useState4[1];\n\n  var countRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(0);\n\n  var handleOnClick = function handleOnClick() {\n    return setCount(count + 1);\n  };\n\n  var handleOnClick2 = function handleOnClick2() {\n    return countRef.current++;\n  };\n\n  console.log('再描写');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2em'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleOnClick\n  }, \"Count\\u30A2\\u30C3\\u30D7\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, countRef.current), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleOnClick2\n  }, \"Count2\\u30A2\\u30C3\\u30D7\"));\n}\n\n\nvar initialState = {\n  count: 0\n}; // (state, action) => newState\n\nvar reducer = function reducer(state, action) {\n  if (action === 'INCREMENT') {\n    return {\n      count: state.count + 1\n    };\n  } else {\n    return {\n      count: state.count - 1\n    };\n  }\n}; // const [state, dispatch] = useReducer(reducer, initialState);\n\n\nfunction Counter() {\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, initialState),\n      _useReducer2 = _slicedToArray(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2em'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Counter\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"\\u30AB\\u30A6\\u30F3\\u30C8: \", state.count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch('INCREMENT');\n    }\n  }, \"+\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch('DECREMENT');\n    }\n  }, \"-\"));\n}\n\nvar initialStateActions = {\n  count: 2\n};\n\nvar reducerActions = function reducerActions(state, action) {\n  switch (action) {\n    case 'INCREMENT':\n      return {\n        count: state.count + 1\n      };\n\n    case 'DECREMENT':\n      return {\n        count: state.count - 1\n      };\n\n    case 'DOUBLE_INCRE':\n      return {\n        count: state.count * 2\n      };\n\n    case 'RESET':\n      return {\n        count: 0\n      };\n\n    default:\n      return state;\n  }\n};\n\nfunction CounterActions() {\n  var _useReducer3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducerActions, initialStateActions),\n      _useReducer4 = _slicedToArray(_useReducer3, 2),\n      state = _useReducer4[0],\n      dispatch = _useReducer4[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2em'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Counter Actions\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"\\u30AB\\u30A6\\u30F3\\u30C8: \", state.count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch('INCREMENT');\n    }\n  }, \"+\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch('DECREMENT');\n    }\n  }, \"-\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch('DOUBLE_INCRE');\n    }\n  }, \"++\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch('RESET');\n    }\n  }, \"0\"));\n}\n\nvar initialStateObject = {\n  count: 2\n};\n\nvar reducerObject = function reducerObject(state, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return {\n        count: state.count + action.payload\n      };\n\n    case 'DECREMENT':\n      return {\n        count: state.count - action.payload\n      };\n\n    default:\n      return state;\n  }\n};\n\nfunction CounterObject() {\n  var _useReducer5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducerObject, initialStateObject),\n      _useReducer6 = _slicedToArray(_useReducer5, 2),\n      state = _useReducer6[0],\n      dispatch = _useReducer6[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2em'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Counter Object\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"\\u30AB\\u30A6\\u30F3\\u30C8: \", state.count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'INCREMENT',\n        payload: 5\n      });\n    }\n  }, \"+\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'DECREMENT',\n        payload: 5\n      });\n    }\n  }, \"-\"));\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nreact);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./app/js/shortJS.js */ \"./app/js/shortJS.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9OL05yZWFjdC5qcz9hYmFlIl0sIm5hbWVzIjpbIk5yZWFjdCIsIm1hcmdpbiIsInRleHRBbGlnbiIsIiQkIiwic2NyVFQiLCJBcHB1c2VSZWYiLCJpbnB1dEVsIiwidXNlUmVmIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsImhhbmRsZU9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIklkIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhhbmRsZU9uQ2xpY2siLCJmb2N1cyIsIkFwcHVzZVJlZlZhbHVlIiwiY291bnQiLCJzZXRDb3VudCIsImNvdW50UmVmIiwiaGFuZGxlT25DbGljazIiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJDb3VudGVyIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwiaW5pdGlhbFN0YXRlQWN0aW9ucyIsInJlZHVjZXJBY3Rpb25zIiwiQ291bnRlckFjdGlvbnMiLCJpbml0aWFsU3RhdGVPYmplY3QiLCJyZWR1Y2VyT2JqZWN0IiwidHlwZSIsInBheWxvYWQiLCJDb3VudGVyT2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUNqQixzQkFDQyxxSUFDQztBQUFTLGFBQVMsRUFBQztBQUFuQixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLHFGQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsZUFERCxXQURELGVBS0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyxpRkFERCxlQUVDLDJEQUFDLFNBQUQsT0FGRCxlQUdDLDJEQUFDLGNBQUQsT0FIRCxDQUxELGVBVUMsc0VBVkQsZUFZQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLHFGQURELGVBRUMsMkRBQUMsT0FBRCxPQUZELGVBR0MsMkRBQUMsY0FBRCxP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QUFDVTtBQUE5QixPQUFQOztBQUNEO0FBQ0MsYUFBT1gsS0FBUDtBQU5GO0FBUUEsQ0FURDs7QUFXQSxTQUFTWSxhQUFULEdBQXlCO0FBQ3hCLHFCQUEwQlQsd0RBQVUsQ0FBQ00sYUFBRCxFQUFnQkQsa0JBQWhCLENBQXBDO0FBQUE7QUFBQSxNQUFPUixLQUFQO0FBQUEsTUFBY0ksUUFBZDs7QUFFQSxzQkFDQztBQUFLLFNBQUssRUFBRTtBQUFFaEMsWUFBTSxFQUFFO0FBQVY7QUFBWixrQkFDQyx3RkFERCxlQUVDLHFHQUFXNEIsS0FBSyxDQUFDTixLQUFqQixDQUZELGVBR0M7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNVSxRQUFRLENBQUM7QUFBRU0sWUFBSSxFQUFFLFdBQVI7QUFBcUJDLGVBQU8sRUFBRTtBQUE5QixPQUFELENBQWQ7QUFBQTtBQUFqQixTQUhELGVBTUM7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNUCxRQUFRLENBQUM7QUFBRU0sWUFBSSxFQUFFLFdBQVI7QUFBcUJDLGVBQU8sRUFBRTtBQUE5QixPQUFELENBQWQ7QUFBQTtBQUFqQixTQU5ELENBREQ7QUFZQTs7QUFHRDtBQUVleEMscUVBQWYsRSIsImZpbGUiOiIuL2FwcC9jb21wb25lbnRzL04vTnJlYWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIE5yZWFjdCgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLXNpemUtNCBoYXMtdGV4dC13ZWlnaHQtbWVkaXVtXCI+W1JlYWN0XTwvZGl2PlxyXG5cdFx0XHRcdFx0XHROcmVhY3RcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcy1mbGV4IGlzLWp1c3RpZnktY29udGVudC1jZW50ZXIgaXMtYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXY+dXNlUmVmPC9kaXY+XHJcblx0XHRcdFx0XHRcdDxBcHB1c2VSZWYgLz5cclxuXHRcdFx0XHRcdFx0PEFwcHVzZVJlZlZhbHVlIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXMtZmxleCBpcy1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGlzLWFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PnVzZVJlZHVjZXI8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PENvdW50ZXIgLz5cclxuXHRcdFx0XHRcdFx0PENvdW50ZXJBY3Rpb25zIC8+XHJcblx0XHRcdFx0XHRcdDxDb3VudGVyT2JqZWN0IC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxociAvPlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXMtZmxleCBpcy1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGlzLWFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PnVzZUNvbnRleHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBtYXJnaW46ICcyZW0nLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdDxoMT5MZWFybiB1c2VDb250ZXh0PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8Q29tcG9uZW50QSAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b24gaGFzLWJhY2tncm91bmQtZ3JleSBoYXMtdGV4dC13aGl0ZS10ZXIgaXMtcHVsbGVkLXJpZ2h0IG1yLTUgbXQtM1wiXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+ICQkLnNjclRUKCcjdG9wJyl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LWNpcmNsZS1vLXVwXCI+PC9pPiZuYnNwOyZuYnNwO+ODiOODg+ODl1xyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvPlxyXG5cdClcclxuXHJcblx0ZnVuY3Rpb24gQXBwdXNlUmVmKCkge1xyXG5cdFx0Y29uc3QgaW5wdXRFbCA9IHVzZVJlZihudWxsKVxyXG5cdFx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcblx0XHRjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRcdHNldE5hbWUoZS50YXJnZXQudmFsdWUpXHJcblx0XHRcdGNvbnNvbGUubG9nKCQkLklkKCdpbnB1dEVsJykudmFsdWUpXHJcblx0XHRcdGNvbnNvbGUubG9nKCQkLklkKCdpbnB1dEVsJykgPT09IGlucHV0RWwuY3VycmVudClcclxuXHRcdFx0Y29uc29sZS5sb2coaW5wdXRFbC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKVxyXG5cdFx0fVxyXG5cdFx0Y29uc3QgaGFuZGxlT25DbGljayA9ICgpID0+ICQkLklkKCdpbnB1dEVsJykuZm9jdXMoKVxyXG5cdFx0Ly8gY29uc3QgaGFuZGxlT25DbGljayA9ICgpID0+IGlucHV0RWwuY3VycmVudC5mb2N1cygpXHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBzdHlsZT17eyBtYXJnaW46ICcyZW0nIH19PlxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0aWQ9XCJpbnB1dEVsXCJcclxuXHRcdFx0XHRcdHJlZj17aW5wdXRFbH1cclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PHA+5ZCN5YmN77yae25hbWV9PC9wPlxyXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlT25DbGlja30+44OV44Kp44O844Kr44K544KS5b2T44Gm44KLPC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gQXBwdXNlUmVmVmFsdWUoKSB7XHJcblx0Y29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG5cdGNvbnN0IGNvdW50UmVmID0gdXNlUmVmKDApXHJcblx0Y29uc3QgaGFuZGxlT25DbGljayA9ICgpID0+IHNldENvdW50KGNvdW50ICsgMSlcclxuXHRjb25zdCBoYW5kbGVPbkNsaWNrMiA9ICgpID0+IGNvdW50UmVmLmN1cnJlbnQrK1xyXG5cclxuXHRjb25zb2xlLmxvZygn5YaN5o+P5YaZJylcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMmVtJyB9fT5cclxuXHRcdFx0PGRpdj57Y291bnR9PC9kaXY+XHJcblx0XHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlT25DbGlja30+Q291bnTjgqLjg4Pjg5c8L2J1dHRvbj5cclxuXHRcdFx0PGRpdj57Y291bnRSZWYuY3VycmVudH08L2Rpdj5cclxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrMn0+Q291bnQy44Ki44OD44OXPC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuXHRjb3VudDogMCxcclxufVxyXG5cclxuLy8gKHN0YXRlLCBhY3Rpb24pID0+IG5ld1N0YXRlXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdGlmIChhY3Rpb24gPT09ICdJTkNSRU1FTlQnKSB7XHJcblx0XHRyZXR1cm4geyBjb3VudDogc3RhdGUuY291bnQgKyAxIH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHsgY291bnQ6IHN0YXRlLmNvdW50IC0gMSB9XHJcblx0fVxyXG59XHJcblxyXG4vLyBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuZnVuY3Rpb24gQ291bnRlcigpIHtcclxuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBzdHlsZT17eyBtYXJnaW46ICcyZW0nIH19PlxyXG5cdFx0XHQ8aDE+Q291bnRlcjwvaDE+XHJcblx0XHRcdDxoMj7jgqvjgqbjg7Pjg4g6IHtzdGF0ZS5jb3VudH08L2gyPlxyXG5cdFx0XHR7Lyogc3RhdGXlhoXjga7lgKTjgpLmm7TmlrDjgZnjgovjgZ/jgoHjgavjga9kaXNwYXRjaOOCkuWIqeeUqOOBl+OBvuOBmeOAguOBvuOBn2Rpc3BhdGNo44Gr5YWl44KM44KL5byV5pWw44Gr44GvcmVkdWNlcuOBp+ioreWumuOBl+OBn2FjdGlvbuOCkuaMh+WumuOBmeOCi+W/heimgeOBjOOBguOCiuOBvuOBmeOAgiAqL31cclxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCgnSU5DUkVNRU5UJyl9Pis8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCgnREVDUkVNRU5UJyl9Pi08L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZUFjdGlvbnMgPSB7XHJcblx0Y291bnQ6IDIsXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXJBY3Rpb25zID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbikge1xyXG5cdFx0Y2FzZSAnSU5DUkVNRU5UJzpcclxuXHRcdFx0cmV0dXJuIHsgY291bnQ6IHN0YXRlLmNvdW50ICsgMSB9XHJcblx0XHRjYXNlICdERUNSRU1FTlQnOlxyXG5cdFx0XHRyZXR1cm4geyBjb3VudDogc3RhdGUuY291bnQgLSAxIH1cclxuXHRcdGNhc2UgJ0RPVUJMRV9JTkNSRSc6XHJcblx0XHRcdHJldHVybiB7IGNvdW50OiBzdGF0ZS5jb3VudCAqIDIgfVxyXG5cdFx0Y2FzZSAnUkVTRVQnOlxyXG5cdFx0XHRyZXR1cm4geyBjb3VudDogMCB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvdW50ZXJBY3Rpb25zKCkge1xyXG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyQWN0aW9ucywgaW5pdGlhbFN0YXRlQWN0aW9ucylcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMmVtJyB9fT5cclxuXHRcdFx0PGgxPkNvdW50ZXIgQWN0aW9uczwvaDE+XHJcblx0XHRcdDxoMj7jgqvjgqbjg7Pjg4g6IHtzdGF0ZS5jb3VudH08L2gyPlxyXG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKCdJTkNSRU1FTlQnKX0+KzwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKCdERUNSRU1FTlQnKX0+LTwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKCdET1VCTEVfSU5DUkUnKX0+Kys8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCgnUkVTRVQnKX0+MDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGVPYmplY3QgPSB7XHJcblx0Y291bnQ6IDIsXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXJPYmplY3QgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgJ0lOQ1JFTUVOVCc6XHJcblx0XHRcdHJldHVybiB7IGNvdW50OiBzdGF0ZS5jb3VudCArIGFjdGlvbi5wYXlsb2FkIH1cclxuXHRcdGNhc2UgJ0RFQ1JFTUVOVCc6XHJcblx0XHRcdHJldHVybiB7IGNvdW50OiBzdGF0ZS5jb3VudCAtIGFjdGlvbi5wYXlsb2FkIH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ291bnRlck9iamVjdCgpIHtcclxuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlck9iamVjdCwgaW5pdGlhbFN0YXRlT2JqZWN0KVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBzdHlsZT17eyBtYXJnaW46ICcyZW0nIH19PlxyXG5cdFx0XHQ8aDE+Q291bnRlciBPYmplY3Q8L2gxPlxyXG5cdFx0XHQ8aDI+44Kr44Km44Oz44OIOiB7c3RhdGUuY291bnR9PC9oMj5cclxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdJTkNSRU1FTlQnLCBwYXlsb2FkOiA1IH0pfT5cclxuXHRcdFx0XHQrXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ0RFQ1JFTUVOVCcsIHBheWxvYWQ6IDUgfSl9PlxyXG5cdFx0XHRcdC1cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcblxyXG5pbXBvcnQgQ29tcG9uZW50QSBmcm9tICcuLi9DL0NvbXBvbmVudEEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOcmVhY3RcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/N/Nreact.js\n");

/***/ })

})