webpackHotUpdate("main",{

/***/ "./app/components/N/Nreact.js":
/*!************************************!*\
  !*** ./app/components/N/Nreact.js ***!
  \************************************/
/*! exports provided: UserCount, UseContextUseState, UseContextUseReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($$) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserCount\", function() { return UserCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UseContextUseState\", function() { return UseContextUseState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UseContextUseReducer\", function() { return UseContextUseReducer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _C_ComponentA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../C/ComponentA */ \"./app/components/C/ComponentA.js\");\n/* harmony import */ var _CuseReducer_ComponentA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CuseReducer/ComponentA */ \"./app/components/CuseReducer/ComponentA.js\");\n/* harmony import */ var _context_CountContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/CountContext */ \"./app/components/context/CountContext.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// https://reffect.co.jp/react/react-usecontext-understanding\n\n\n\n\n\nfunction Nreact() {\n  var count = 100;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(100),\n      _useState2 = _slicedToArray(_useState, 2),\n      countUseState = _useState2[0],\n      setCountUseState = _useState2[1];\n\n  var valueUseState = {\n    count: count,\n    countUseState: countUseState,\n    setCountUseState: setCountUseState\n  };\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducerContext, initialStateReducer),\n      _useReducer2 = _slicedToArray(_useReducer, 2),\n      state = _useReducer2[0],\n      dispatch = _useReducer2[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"section\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"is-size-4 has-text-weight-medium\"\n  }, \"[React]\"), \"Nreact\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"is-flex is-justify-content-center is-align-items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"useRef\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppuseRef, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppuseRefValue, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"is-flex is-justify-content-center is-align-items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"useReducer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Counter, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CounterActions, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CounterObject, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"is-flex is-justify-content-center is-align-items-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"useContext\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2em',\n      textAlign: 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Learn useContext\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2em',\n      textAlign: 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Learn useContextUseState\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UseContextUseState.Provider, {\n    value: valueUseState\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_C_ComponentA__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2em',\n      textAlign: 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Learn useContextUseReducer\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UseContextUseReducer.Provider, {\n    value: {\n      state: state,\n      dispatch: dispatch\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CuseReducer_ComponentA__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2em',\n      textAlign: 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Learn ContextComponent\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_CountContext__WEBPACK_IMPORTED_MODULE_3__[\"CountProvider\"], {\n    value: {\n      state: state,\n      dispatch: dispatch\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentA_C, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button has-background-grey has-text-white-ter is-pulled-right mr-5 mt-3\",\n    onClick: function onClick() {\n      return $$.scrTT('#top');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-arrow-circle-o-up\"\n  }), \"\\xA0\\xA0\\u30C8\\u30C3\\u30D7\"))));\n\n  function AppuseRef() {\n    var inputEl = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n        _useState4 = _slicedToArray(_useState3, 2),\n        name = _useState4[0],\n        setName = _useState4[1];\n\n    var handleOnChange = function handleOnChange(e) {\n      setName(e.target.value);\n      console.log($$.Id('inputEl').value);\n      console.log($$.Id('inputEl') === inputEl.current);\n      console.log(inputEl.current.getBoundingClientRect());\n    };\n\n    var handleOnClick = function handleOnClick() {\n      return $$.Id('inputEl').focus();\n    }; // const handleOnClick = () => inputEl.current.focus()\n\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        margin: '2em'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"inputEl\",\n      ref: inputEl,\n      type: \"text\",\n      value: name,\n      onChange: handleOnChange\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"\\u540D\\u524D\\uFF1A\", name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: handleOnClick\n    }, \"\\u30D5\\u30A9\\u30FC\\u30AB\\u30B9\\u3092\\u5F53\\u3066\\u308B\"));\n  }\n}\n\nfunction AppuseRefValue() {\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      _useState6 = _slicedToArray(_useState5, 2),\n      count = _useState6[0],\n      setCount = _useState6[1];\n\n  var countRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(0);\n\n  var handleOnClick = function handleOnClick() {\n    return setCount(count + 1);\n  };\n\n  var handleOnClick2 = function handleOnClick2() {\n    return countRef.current++;\n  };\n\n  console.log('再描写');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2em'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleOnClick\n  }, \"Count\\u30A2\\u30C3\\u30D7\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, countRef.current), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleOnClick2\n  }, \"Count2\\u30A2\\u30C3\\u30D7\"));\n}\n\n\nvar initialState = {\n  count: 0\n}; // (state, action) => newState\n\nvar reducer = function reducer(state, action) {\n  if (action === 'INCREMENT') {\n    return {\n      count: state.count + 1\n    };\n  } else {\n    return {\n      count: state.count - 1\n    };\n  }\n}; // const [state, dispatch] = useReducer(reducer, initialState);\n\n\nfunction Counter() {\n  var _useReducer3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducer, initialState),\n      _useReducer4 = _slicedToArray(_useReducer3, 2),\n      state = _useReducer4[0],\n      dispatch = _useReducer4[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2em'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Counter\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"\\u30AB\\u30A6\\u30F3\\u30C8: \", state.count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch('INCREMENT');\n    }\n  }, \"+\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch('DECREMENT');\n    }\n  }, \"-\"));\n}\n\nvar initialStateActions = {\n  count: 2\n};\n\nvar reducerActions = function reducerActions(state, action) {\n  switch (action) {\n    case 'INCREMENT':\n      return {\n        count: state.count + 1\n      };\n\n    case 'DECREMENT':\n      return {\n        count: state.count - 1\n      };\n\n    case 'DOUBLE_INCRE':\n      return {\n        count: state.count * 2\n      };\n\n    case 'RESET':\n      return {\n        count: 0\n      };\n\n    default:\n      return state;\n  }\n};\n\nfunction CounterActions() {\n  var _useReducer5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducerActions, initialStateActions),\n      _useReducer6 = _slicedToArray(_useReducer5, 2),\n      state = _useReducer6[0],\n      dispatch = _useReducer6[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2em'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Counter Actions\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"\\u30AB\\u30A6\\u30F3\\u30C8: \", state.count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch('INCREMENT');\n    }\n  }, \"+\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch('DECREMENT');\n    }\n  }, \"-\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch('DOUBLE_INCRE');\n    }\n  }, \"++\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch('RESET');\n    }\n  }, \"0\"));\n}\n\nvar initialStateObject = {\n  count: 2\n};\n\nvar reducerObject = function reducerObject(state, action) {\n  switch (action.type) {\n    case 'INCREMENT':\n      return {\n        count: state.count + action.payload\n      };\n\n    case 'DECREMENT':\n      return {\n        count: state.count - action.payload\n      };\n\n    default:\n      return state;\n  }\n};\n\nfunction CounterObject() {\n  var _useReducer7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(reducerObject, initialStateObject),\n      _useReducer8 = _slicedToArray(_useReducer7, 2),\n      state = _useReducer8[0],\n      dispatch = _useReducer8[1];\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: '2em'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Counter Object\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"\\u30AB\\u30A6\\u30F3\\u30C8: \", state.count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'INCREMENT',\n        payload: 5\n      });\n    }\n  }, \"+\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dispatch({\n        type: 'DECREMENT',\n        payload: 5\n      });\n    }\n  }, \"-\"));\n}\n\nvar initialStateReducer = {\n  count: 100\n};\n\nvar reducerContext = function reducerContext(state, action) {\n  if (action === 'INCREMENT') {\n    return {\n      count: state.count + 1\n    };\n  } else {\n    return {\n      count: state.count - 1\n    };\n  }\n};\n\nvar UserCount = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\nvar UseContextUseState = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\nvar UseContextUseReducer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nreact);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./app/js/shortJS.js */ \"./app/js/shortJS.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9OL05yZWFjdC5qcz9hYmFlIl0sIm5hbWVzIjpbIk5yZWFjdCIsImNvdW50IiwidXNlU3RhdGUiLCJjb3VudFVzZVN0YXRlIiwic2V0Q291bnRVc2VTdGF0ZSIsInZhbHVlVXNlU3RhdGUiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlckNvbnRleHQiLCJpbml0aWFsU3RhdGVSZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsIm1hcmdpbiIsInRleHRBbGlnbiIsIiQkIiwic2NyVFQiLCJBcHB1c2VSZWYiLCJpbnB1dEVsIiwidXNlUmVmIiwibmFtZSIsInNldE5hbWUiLCJoYW5kbGVPbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJJZCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoYW5kbGVPbkNsaWNrIiwiZm9jdXMiLCJBcHB1c2VSZWZWYWx1ZSIsInNldENvdW50IiwiY291bnRSZWYiLCJoYW5kbGVPbkNsaWNrMiIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXIiLCJhY3Rpb24iLCJDb3VudGVyIiwiaW5pdGlhbFN0YXRlQWN0aW9ucyIsInJlZHVjZXJBY3Rpb25zIiwiQ291bnRlckFjdGlvbnMiLCJpbml0aWFsU3RhdGVPYmplY3QiLCJyZWR1Y2VyT2JqZWN0IiwidHlwZSIsInBheWxvYWQiLCJDb3VudGVyT2JqZWN0IiwiVXNlckNvdW50IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiVXNlQ29udGV4dFVzZVN0YXRlIiwiVXNlQ29udGV4dFVzZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBR0EsU0FBU0EsTUFBVCxHQUFrQjtBQUNqQixNQUFNQyxLQUFLLEdBQUcsR0FBZDs7QUFDQSxrQkFBMENDLHNEQUFRLENBQUMsR0FBRCxDQUFsRDtBQUFBO0FBQUEsTUFBT0MsYUFB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TixXQUFPO0FBQUVBLFdBQUssRUFBRVEsS0FBSyxDQUFDUixLQUFOLEdBQWM7QUFBdkIsS0FBUDtBQUNBO0FBQ0QsQ0FORDs7QUFRTyxJQUFNOEMsU0FBUyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixFQUFsQjtBQUVBLElBQU1DLGtCQUFrQixnQkFBR0YsNENBQUssQ0FBQ0MsYUFBTixFQUEzQjtBQUNBLElBQU1FLG9CQUFvQixnQkFBR0gsNENBQUssQ0FBQ0MsYUFBTixFQUE3QjtBQUVRakQscUVBQWYsRSIsImZpbGUiOiIuL2FwcC9jb21wb25lbnRzL04vTnJlYWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9yZWZmZWN0LmNvLmpwL3JlYWN0L3JlYWN0LXVzZWNvbnRleHQtdW5kZXJzdGFuZGluZ1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbXBvbmVudEEgZnJvbSAnLi4vQy9Db21wb25lbnRBJ1xyXG5pbXBvcnQgQ29tcG9uZW50QVJlZHVjZXIgZnJvbSAnLi4vQ3VzZVJlZHVjZXIvQ29tcG9uZW50QSdcclxuXHJcbmltcG9ydCB7IENvdW50UHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0NvdW50Q29udGV4dCdcclxuXHJcblxyXG5mdW5jdGlvbiBOcmVhY3QoKSB7XHJcblx0Y29uc3QgY291bnQgPSAxMDBcclxuXHRjb25zdCBbY291bnRVc2VTdGF0ZSwgc2V0Q291bnRVc2VTdGF0ZV0gPSB1c2VTdGF0ZSgxMDApXHJcblx0Y29uc3QgdmFsdWVVc2VTdGF0ZSA9IHtcclxuXHRcdGNvdW50LFxyXG5cdFx0Y291bnRVc2VTdGF0ZSxcclxuXHRcdHNldENvdW50VXNlU3RhdGUsXHJcblx0fVxyXG5cclxuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlckNvbnRleHQsIGluaXRpYWxTdGF0ZVJlZHVjZXIpXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IGhhcy10ZXh0LXdlaWdodC1tZWRpdW1cIj5bUmVhY3RdPC9kaXY+XHJcblx0XHRcdFx0XHRcdE5yZWFjdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLWZsZXggaXMtanVzdGlmeS1jb250ZW50LWNlbnRlciBpcy1hbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj51c2VSZWY8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PEFwcHVzZVJlZiAvPlxyXG5cdFx0XHRcdFx0XHQ8QXBwdXNlUmVmVmFsdWUgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcy1mbGV4IGlzLWp1c3RpZnktY29udGVudC1jZW50ZXIgaXMtYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXY+dXNlUmVkdWNlcjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8Q291bnRlciAvPlxyXG5cdFx0XHRcdFx0XHQ8Q291bnRlckFjdGlvbnMgLz5cclxuXHRcdFx0XHRcdFx0PENvdW50ZXJPYmplY3QgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpcy1mbGV4IGlzLWp1c3RpZnktY29udGVudC1jZW50ZXIgaXMtYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXY+dXNlQ29udGV4dDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzJlbScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0PGgxPkxlYXJuIHVzZUNvbnRleHQ8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdHsvKiA8VXNlckNvdW50LlByb3ZpZGVyIHZhbHVlPXsxMDB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PENvbXBvbmVudEEgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1VzZXJDb3VudC5Qcm92aWRlcj4gKi99XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzJlbScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0PGgxPkxlYXJuIHVzZUNvbnRleHRVc2VTdGF0ZTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PFVzZUNvbnRleHRVc2VTdGF0ZS5Qcm92aWRlciB2YWx1ZT17dmFsdWVVc2VTdGF0ZX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q29tcG9uZW50QSAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvVXNlQ29udGV4dFVzZVN0YXRlLlByb3ZpZGVyPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBtYXJnaW46ICcyZW0nLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG5cdFx0XHRcdFx0XHRcdDxoMT5MZWFybiB1c2VDb250ZXh0VXNlUmVkdWNlcjwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PFVzZUNvbnRleHRVc2VSZWR1Y2VyLlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDb21wb25lbnRBUmVkdWNlciAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvVXNlQ29udGV4dFVzZVJlZHVjZXIuUHJvdmlkZXI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzJlbScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcblx0XHRcdFx0XHRcdFx0PGgxPkxlYXJuIENvbnRleHRDb21wb25lbnQ8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxDb3VudFByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDb21wb25lbnRBX0MgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L0NvdW50UHJvdmlkZXI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHJcblx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbiBoYXMtYmFja2dyb3VuZC1ncmV5IGhhcy10ZXh0LXdoaXRlLXRlciBpcy1wdWxsZWQtcmlnaHQgbXItNSBtdC0zXCJcclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gJCQuc2NyVFQoJyN0b3AnKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3ctY2lyY2xlLW8tdXBcIj48L2k+Jm5ic3A7Jm5ic3A744OI44OD44OXXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0PC8+XHJcblx0KVxyXG5cclxuXHRmdW5jdGlvbiBBcHB1c2VSZWYoKSB7XHJcblx0XHRjb25zdCBpbnB1dEVsID0gdXNlUmVmKG51bGwpXHJcblx0XHRjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuXHRcdGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdFx0c2V0TmFtZShlLnRhcmdldC52YWx1ZSlcclxuXHRcdFx0Y29uc29sZS5sb2coJCQuSWQoJ2lucHV0RWwnKS52YWx1ZSlcclxuXHRcdFx0Y29uc29sZS5sb2coJCQuSWQoJ2lucHV0RWwnKSA9PT0gaW5wdXRFbC5jdXJyZW50KVxyXG5cdFx0XHRjb25zb2xlLmxvZyhpbnB1dEVsLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpXHJcblx0XHR9XHJcblx0XHRjb25zdCBoYW5kbGVPbkNsaWNrID0gKCkgPT4gJCQuSWQoJ2lucHV0RWwnKS5mb2N1cygpXHJcblx0XHQvLyBjb25zdCBoYW5kbGVPbkNsaWNrID0gKCkgPT4gaW5wdXRFbC5jdXJyZW50LmZvY3VzKClcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzJlbScgfX0+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRpZD1cImlucHV0RWxcIlxyXG5cdFx0XHRcdFx0cmVmPXtpbnB1dEVsfVxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0dmFsdWU9e25hbWV9XHJcblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8cD7lkI3liY3vvJp7bmFtZX08L3A+XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfT7jg5Xjgqnjg7zjgqvjgrnjgpLlvZPjgabjgos8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBBcHB1c2VSZWZWYWx1ZSgpIHtcclxuXHRjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApXHJcblx0Y29uc3QgY291bnRSZWYgPSB1c2VSZWYoMClcclxuXHRjb25zdCBoYW5kbGVPbkNsaWNrID0gKCkgPT4gc2V0Q291bnQoY291bnQgKyAxKVxyXG5cdGNvbnN0IGhhbmRsZU9uQ2xpY2syID0gKCkgPT4gY291bnRSZWYuY3VycmVudCsrXHJcblxyXG5cdGNvbnNvbGUubG9nKCflho3mj4/lhpknKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBzdHlsZT17eyBtYXJnaW46ICcyZW0nIH19PlxyXG5cdFx0XHQ8ZGl2Pntjb3VudH08L2Rpdj5cclxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfT5Db3VudOOCouODg+ODlzwvYnV0dG9uPlxyXG5cdFx0XHQ8ZGl2Pntjb3VudFJlZi5jdXJyZW50fTwvZGl2PlxyXG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9uQ2xpY2syfT5Db3VudDLjgqLjg4Pjg5c8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG5cdGNvdW50OiAwLFxyXG59XHJcblxyXG4vLyAoc3RhdGUsIGFjdGlvbikgPT4gbmV3U3RhdGVcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0aWYgKGFjdGlvbiA9PT0gJ0lOQ1JFTUVOVCcpIHtcclxuXHRcdHJldHVybiB7IGNvdW50OiBzdGF0ZS5jb3VudCArIDEgfVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4geyBjb3VudDogc3RhdGUuY291bnQgLSAxIH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5mdW5jdGlvbiBDb3VudGVyKCkge1xyXG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzJlbScgfX0+XHJcblx0XHRcdDxoMT5Db3VudGVyPC9oMT5cclxuXHRcdFx0PGgyPuOCq+OCpuODs+ODiDoge3N0YXRlLmNvdW50fTwvaDI+XHJcblx0XHRcdHsvKiBzdGF0ZeWGheOBruWApOOCkuabtOaWsOOBmeOCi+OBn+OCgeOBq+OBr2Rpc3BhdGNo44KS5Yip55So44GX44G+44GZ44CC44G+44GfZGlzcGF0Y2jjgavlhaXjgozjgovlvJXmlbDjgavjga9yZWR1Y2Vy44Gn6Kit5a6a44GX44GfYWN0aW9u44KS5oyH5a6a44GZ44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCICovfVxyXG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKCdJTkNSRU1FTlQnKX0+KzwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKCdERUNSRU1FTlQnKX0+LTwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGVBY3Rpb25zID0ge1xyXG5cdGNvdW50OiAyLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyQWN0aW9ucyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24pIHtcclxuXHRcdGNhc2UgJ0lOQ1JFTUVOVCc6XHJcblx0XHRcdHJldHVybiB7IGNvdW50OiBzdGF0ZS5jb3VudCArIDEgfVxyXG5cdFx0Y2FzZSAnREVDUkVNRU5UJzpcclxuXHRcdFx0cmV0dXJuIHsgY291bnQ6IHN0YXRlLmNvdW50IC0gMSB9XHJcblx0XHRjYXNlICdET1VCTEVfSU5DUkUnOlxyXG5cdFx0XHRyZXR1cm4geyBjb3VudDogc3RhdGUuY291bnQgKiAyIH1cclxuXHRcdGNhc2UgJ1JFU0VUJzpcclxuXHRcdFx0cmV0dXJuIHsgY291bnQ6IDAgfVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb3VudGVyQWN0aW9ucygpIHtcclxuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlckFjdGlvbnMsIGluaXRpYWxTdGF0ZUFjdGlvbnMpXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzJlbScgfX0+XHJcblx0XHRcdDxoMT5Db3VudGVyIEFjdGlvbnM8L2gxPlxyXG5cdFx0XHQ8aDI+44Kr44Km44Oz44OIOiB7c3RhdGUuY291bnR9PC9oMj5cclxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCgnSU5DUkVNRU5UJyl9Pis8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCgnREVDUkVNRU5UJyl9Pi08L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCgnRE9VQkxFX0lOQ1JFJyl9PisrPC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goJ1JFU0VUJyl9PjA8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlT2JqZWN0ID0ge1xyXG5cdGNvdW50OiAyLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyT2JqZWN0ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlICdJTkNSRU1FTlQnOlxyXG5cdFx0XHRyZXR1cm4geyBjb3VudDogc3RhdGUuY291bnQgKyBhY3Rpb24ucGF5bG9hZCB9XHJcblx0XHRjYXNlICdERUNSRU1FTlQnOlxyXG5cdFx0XHRyZXR1cm4geyBjb3VudDogc3RhdGUuY291bnQgLSBhY3Rpb24ucGF5bG9hZCB9XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gc3RhdGVcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvdW50ZXJPYmplY3QoKSB7XHJcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXJPYmplY3QsIGluaXRpYWxTdGF0ZU9iamVjdClcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMmVtJyB9fT5cclxuXHRcdFx0PGgxPkNvdW50ZXIgT2JqZWN0PC9oMT5cclxuXHRcdFx0PGgyPuOCq+OCpuODs+ODiDoge3N0YXRlLmNvdW50fTwvaDI+XHJcblx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnSU5DUkVNRU5UJywgcGF5bG9hZDogNSB9KX0+XHJcblx0XHRcdFx0K1xyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdERUNSRU1FTlQnLCBwYXlsb2FkOiA1IH0pfT5cclxuXHRcdFx0XHQtXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGVSZWR1Y2VyID0ge1xyXG5cdGNvdW50OiAxMDAsXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXJDb250ZXh0ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRpZiAoYWN0aW9uID09PSAnSU5DUkVNRU5UJykge1xyXG5cdFx0cmV0dXJuIHsgY291bnQ6IHN0YXRlLmNvdW50ICsgMSB9XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiB7IGNvdW50OiBzdGF0ZS5jb3VudCAtIDEgfVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJDb3VudCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZUNvbnRleHRVc2VTdGF0ZSA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxyXG5leHBvcnQgY29uc3QgVXNlQ29udGV4dFVzZVJlZHVjZXIgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5yZWFjdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/N/Nreact.js\n");

/***/ })

})