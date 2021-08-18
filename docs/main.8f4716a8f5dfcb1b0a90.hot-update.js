webpackHotUpdate("main",{

/***/ "./app/components/R/Rform.js":
/*!***********************************!*\
  !*** ./app/components/R/Rform.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($$) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction Rform() {\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      reset = _useForm.reset,\n      watch = _useForm.watch,\n      errors = _useForm.formState.errors;\n\n  var onSubmit = function onSubmit(data) {\n    console.log(data);\n    dispData2(data);\n  }; // your form submit function which will invoke after successful validation\n  // console.log('watching...', watch('example')) // you can watch individual input by pass the name of the input\n\n\n  var dispData2 = function dispData2(data) {\n    $$.Id('disp-data').innerHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", null, JSON.stringify(data, null, '\\t'));\n  };\n\n  var dispData = function dispData() {\n    var data = '';\n    data += mkData('name', '#name');\n    data += mkData('email', '#email');\n    data += mkData('sel', '#sel');\n    data += mkData('msg', '#msg');\n    data += mkData('chkEx', \"\".concat($$.Id('#chkEx').value, \": \").concat($$.Id('#chkEx').checked));\n    data += mkData('rGroupEx', getRadioValue('question2'));\n    $$.q('.data').innerHTML = \"<div class=\\\"\\\">\".concat(data, \"</div>\");\n  };\n\n  var mkData = function mkData(hd, sel) {\n    if (['chk', 'chkEx', 'rGroup', 'rGroupEx'].includes(hd)) {\n      return \"\\n          <span class=\\\"panel-block px-4\\\">\\n            #\".concat(hd, \": &nbsp;<strong>\").concat(sel, \"</strong>\\n          </span>\\n          \");\n    } else {\n      return \"\\n          <span class=\\\"panel-block px-4\\\">\\n            #\".concat(hd, \": &nbsp;<strong>\").concat($$.q(sel).value, \"</strong>\\n          </span>\\n          \");\n    }\n  };\n\n  var getRadioValue = function getRadioValue(na) {\n    var ret = '';\n    $$.na(na).forEach(function (elm) {\n      if (elm.checked) {\n        ret = elm.value;\n      }\n    });\n    return ret;\n  };\n\n  var Email = watch('email');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"section\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"is-size-4 has-text-weight-medium\"\n  }, \"[React]\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"section\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"notification is-bold mb-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"title\"\n  }, \"Form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"subtitle is-5\"\n  }, \"Form \\u306E\\u30B5\\u30F3\\u30D7\\u30EB\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"columns mt-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"column\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"column is-8 content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n    className: \"message is-primary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"message-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"is-size-4 p-3\"\n  }, \"react-hook-form\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"box\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit(onSubmit)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"firstName\"\n  }, \"\\u540D\\u524D\\xA0\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n    // defaultValue=\"太郎\"\n    placeholder: \"Text input\"\n  }, register('firstName', {\n    required: true\n  }))), errors.firstName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"This field is required\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"email\"\n  }, \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\\xA0\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n    type: \"email\",\n    placeholder: \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\\u3092\\u5165\\u529B\"\n  }, register('email', {\n    required: true,\n    pattern: {\n      value: /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/,\n      message: 'メールアドレスの形式が不正です'\n    } // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i,\n\n  }))), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"formError\"\n  }, \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\\u3092\\u6B63\\u3057\\u304F\\u5165\\u529B\\u3057\\u3066\\u4E0B\\u3055\\u3044\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"field is-grouped\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"control\",\n    id: \"submit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button is-link mt-4\"\n  }, \"Submit\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"control\",\n    id: \"reset\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return reset();\n    },\n    className: \"button is-link is-light mt-4\"\n  }, \"\\u30AF\\u30EA\\u30A2\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n    className: \"panel\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"panel-heading mb-1\"\n  }, \"\\u9001\\u4FE1\\u30C7\\u30FC\\u30BF\\u306E\\u60C5\\u5831\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"disp-data\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"data has-background-white-bis\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"column\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button has-background-grey has-text-white-ter is-pulled-right mr-5 mt-3\",\n    onClick: function onClick() {\n      return $$.scrTT('#top');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-arrow-circle-o-up\"\n  }), \"\\xA0\\xA0\\u30C8\\u30C3\\u30D7\"))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rform);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./app/js/shortJS.js */ \"./app/js/shortJS.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SL1Jmb3JtLmpzPzgyYTgiXSwibmFtZXMiOlsiUmZvcm0iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsIndhdGNoIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpc3BEYXRhMiIsIiQkIiwiSWQiLCJpbm5lckhUTUwiLCJKU09OIiwic3RyaW5naWZ5IiwiZGlzcERhdGEiLCJta0RhdGEiLCJ2YWx1ZSIsImNoZWNrZWQiLCJnZXRSYWRpb1ZhbHVlIiwicSIsImhkIiwic2VsIiwiaW5jbHVkZXMiLCJuYSIsInJldCIsImZvckVhY2giLCJlbG0iLCJFbWFpbCIsInJlcXVpcmVkIiwiZmlyc3ROYW1lIiwicGF0dGVybiIsIm1lc3NhZ2UiLCJlbWFpbCIsInNjclRUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDaEIsaUJBTUlDLCtEQUFPLEVBTlg7QUFBQSxNQUNDQyxRQURELFlBQ0NBLFFBREQ7QUFBQSxNQUVDQyxZQUZELFlBRUNBLFlBRkQ7QUFBQSxNQUdDQyxLQUhELFlBR0NBLEtBSEQ7QUFBQSxNQUlDQyxLQUpELFlBSUNBLEtBSkQ7QUFBQSxNQUtjQyxNQUxkLFlBS0NDLFNBTEQsQ0FLY0QsTUFMZDs7QUFRQSxNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDMUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FHLGFBQVMsQ0FBQ0gsSUFBRCxDQUFUO0FBQ0EsR0FIRCxDQVRnQixDQVlkO0FBRUY7OztBQUVBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNILElBQUQsRUFBVTtBQUMzQkksTUFBRSxDQUFDQyxFQUFILENBQU0sV0FBTixFQUFtQkMsU0FBbkIsZ0JBQStCLHdFQUFNQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsSUFBZixFQUFxQixJQUFyQixFQUEyQixJQUEzQixDQUFOLENBQS9CO0FBQ0EsR0FGRDs7QUFJQSxNQUFNUyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3RCLFFBQUlULElBQUksR0FBRyxFQUFYO0FBRUFBLFFBQUksSUFBSVUsTUFBTSxDQUFDLE1BQUQsRUFBUyxPQUFULENBQWQ7QUFDQVYsUUFBSSxJQUFJVSxNQUFNLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FBZDtBQUNBVixRQUFJLElBQUlVLE1BQU0sQ0FBQyxLQUFELEVBQVEsTUFBUixDQUFkO0FBQ0FWLFFBQUksSUFBSVUsTUFBTSxDQUFDLEtBQUQsRUFBUSxNQUFSLENBQWQ7QUFDQVYsUUFBSSxJQUFJVSxNQUFNLENBQ2IsT0FEYSxZQUVWTixFQUFFLENBQUNDLEVBQUgsQ0FBTSxRQUFOLEVBQWdCTSxLQUZOLGVBRWdCUCxFQUFFLENBQUNDLEVBQUgsQ0FBTSxRQUFOLEVBQWdCTyxPQUZoQyxFQUFkO0FBSUFaLFFBQUksSUFBSVUsTUFBTSxDQUFDLFVBQUQsRUFBYUcsYUFBYSxDQUFDLFdBQUQsQ0FBMUIsQ0FBZDtBQUNBVCxNQUFFLENBQUNVLENBQUgsQ0FBSyxPQUFMLEVBQWNSLFNBQWQsNkJBQTJDTixJQUEzQztBQUNBLEdBYkQ7O0FBZUEsTUFBTVUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0ssRUFBRCxFQUFLQyxHQUFMLEVBQWE7QUFDM0IsUUFBSSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLFVBQTNCLEVBQXVDQyxRQUF2QyxDQUFnREYsRUFBaEQsQ0FBSixFQUF5RDtBQUN4RCxtRkFFWUEsRUFGWiw2QkFFaUNDLEdBRmpDO0FBS0EsS0FORCxNQU1PO0FBQ04sbUZBRVlELEVBRlosNkJBRWlDWCxFQUFFLENBQUNVLENBQUgsQ0FBS0UsR0FBTCxFQUFVTCxLQUYzQztBQUtBO0FBQ0QsR0FkRDs7QUFnQkEsTUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDSyxFQUFELEVBQVE7QUFDN0IsUUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFFQWYsTUFBRSxDQUFDYyxFQUFILENBQU1BLEVBQU4sRUFBVUUsT0FBVixDQUFrQixVQUFDQyxHQUFELEVBQVM7QUFDMUIsVUFBSUEsR0FBRyxDQUFDVCxPQUFSLEVBQWlCO0FBQ2hCTyxXQUFHLEdBQUdFLEdBQUcsQ0FBQ1YsS0FBVjtBQUNBO0FBQ0QsS0FKRDtBQUtBLFdBQU9RLEdBQVA7QUFDQSxHQVREOztBQVdBLE1BQU1HLEtBQUssR0FBRzFCLEtBQUssQ0FBQyxPQUFELENBQW5CO0FBRUEsc0JBQ0MscUZBQ0M7QUFBUyxhQUFTLEVBQUM7QUFBbkIsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyxxRkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGVBREQsQ0FERCxlQUtDO0FBQVMsYUFBUyxFQUFDO0FBQW5CLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUksYUFBUyxFQUFDO0FBQWQsWUFERCxlQUVDO0FBQUksYUFBUyxFQUFDO0FBQWQsMkNBRkQsQ0FERCxDQURELGVBUUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLElBREQsZUFFQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQVMsYUFBUyxFQUFDO0FBQW5CLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBRyxhQUFTLEVBQUM7QUFBYix1QkFERCxDQURELENBREQsZUFPQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQU0sWUFBUSxFQUFFRixZQUFZLENBQUNLLFFBQUQ7QUFBNUIsa0JBQ0M7QUFBTyxXQUFPLEVBQUM7QUFBZix3QkFERCxlQUVDO0FBQ0M7QUFDQSxlQUFXLEVBQUM7QUFGYixLQUdLTixRQUFRLENBQUMsV0FBRCxFQUFjO0FBQUU4QixZQUFRLEVBQUU7QUFBWixHQUFkLENBSGIsRUFGRCxFQU9FMUIsTUFBTSxDQUFDMkIsU0FBUCxpQkFBb0IsaUdBUHRCLGVBU0M7QUFBTyxXQUFPLEVBQUM7QUFBZixzREFURCxlQVVDO0FBQ0MsUUFBSSxFQUFDLE9BRE47QUFFQyxlQUFXLEVBQUM7QUFGYixLQUdLL0IsUUFBUSxDQUFDLE9BQUQsRUFBVTtBQUNyQjhCLFlBQVEsRUFBRSxJQURXO0FBRXJCRSxXQUFPLEVBQUU7QUFDUmQsV0FBSyxFQUNKLHVFQUZPO0FBR1JlLGFBQU8sRUFBRTtBQUhELEtBRlksQ0FPckI7O0FBUHFCLEdBQVYsQ0FIYixFQVZELEVBdUJFN0IsTUFBTSxDQUFDOEIsS0FBUCxpQkFDQTtBQUFHLGFBQVMsRUFBQztBQUFiLG9IQXhCRixlQTZCQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUVDO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsTUFBRSxFQUFDO0FBQTVCLGtCQUNDO0FBQVEsYUFBUyxFQUFDO0FBQWxCLGNBREQsQ0FGRCxlQU9DO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsTUFBRSxFQUFDO0FBQTVCLGtCQUNDO0FBQ0MsV0FBTyxFQUFFO0FBQUEsYUFBTWhDLEtBQUssRUFBWDtBQUFBLEtBRFY7QUFFQyxhQUFTLEVBQUM7QUFGWCwwQkFERCxDQVBELENBN0JELENBREQsQ0FQRCxlQXlEQztBQUFTLGFBQVMsRUFBQztBQUFuQixrQkFDQztBQUFHLGFBQVMsRUFBQztBQUFiLHdEQURELGVBR0M7QUFBSyxNQUFFLEVBQUM7QUFBUixJQUhELGVBSUM7QUFBSyxhQUFTLEVBQUM7QUFBZixJQUpELENBekRELGVBK0RDLHNFQS9ERCxDQUZELGVBbUVDO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFuRUQsQ0FSRCxDQURELENBTEQsZUFzRkM7QUFDQyxhQUFTLEVBQUMseUVBRFg7QUFFQyxXQUFPLEVBQUU7QUFBQSxhQUFNUyxFQUFFLENBQUN3QixLQUFILENBQVMsTUFBVCxDQUFOO0FBQUE7QUFGVixrQkFJQztBQUFHLGFBQVMsRUFBQztBQUFiLElBSkQsK0JBdEZELENBREQsQ0FERCxDQUREO0FBbUdBOztBQUVjckMsb0VBQWYsRSIsImZpbGUiOiIuL2FwcC9jb21wb25lbnRzL1IvUmZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcblxyXG5mdW5jdGlvbiBSZm9ybSgpIHtcclxuXHRjb25zdCB7XHJcblx0XHRyZWdpc3RlcixcclxuXHRcdGhhbmRsZVN1Ym1pdCxcclxuXHRcdHJlc2V0LFxyXG5cdFx0d2F0Y2gsXHJcblx0XHRmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXHJcblx0fSA9IHVzZUZvcm0oKVxyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0ZGlzcERhdGEyKGRhdGEpXHJcblx0fSAvLyB5b3VyIGZvcm0gc3VibWl0IGZ1bmN0aW9uIHdoaWNoIHdpbGwgaW52b2tlIGFmdGVyIHN1Y2Nlc3NmdWwgdmFsaWRhdGlvblxyXG5cclxuXHQvLyBjb25zb2xlLmxvZygnd2F0Y2hpbmcuLi4nLCB3YXRjaCgnZXhhbXBsZScpKSAvLyB5b3UgY2FuIHdhdGNoIGluZGl2aWR1YWwgaW5wdXQgYnkgcGFzcyB0aGUgbmFtZSBvZiB0aGUgaW5wdXRcclxuXHJcblx0Y29uc3QgZGlzcERhdGEyID0gKGRhdGEpID0+IHtcclxuXHRcdCQkLklkKCdkaXNwLWRhdGEnKS5pbm5lckhUTUwgPSA8cHJlPntKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAnXFx0Jyl9PC9wcmU+XHJcblx0fVxyXG5cclxuXHRjb25zdCBkaXNwRGF0YSA9ICgpID0+IHtcclxuXHRcdGxldCBkYXRhID0gJydcclxuXHJcblx0XHRkYXRhICs9IG1rRGF0YSgnbmFtZScsICcjbmFtZScpXHJcblx0XHRkYXRhICs9IG1rRGF0YSgnZW1haWwnLCAnI2VtYWlsJylcclxuXHRcdGRhdGEgKz0gbWtEYXRhKCdzZWwnLCAnI3NlbCcpXHJcblx0XHRkYXRhICs9IG1rRGF0YSgnbXNnJywgJyNtc2cnKVxyXG5cdFx0ZGF0YSArPSBta0RhdGEoXHJcblx0XHRcdCdjaGtFeCcsXHJcblx0XHRcdGAkeyQkLklkKCcjY2hrRXgnKS52YWx1ZX06ICR7JCQuSWQoJyNjaGtFeCcpLmNoZWNrZWR9YFxyXG5cdFx0KVxyXG5cdFx0ZGF0YSArPSBta0RhdGEoJ3JHcm91cEV4JywgZ2V0UmFkaW9WYWx1ZSgncXVlc3Rpb24yJykpXHJcblx0XHQkJC5xKCcuZGF0YScpLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiXCI+JHtkYXRhfTwvZGl2PmBcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1rRGF0YSA9IChoZCwgc2VsKSA9PiB7XHJcblx0XHRpZiAoWydjaGsnLCAnY2hrRXgnLCAnckdyb3VwJywgJ3JHcm91cEV4J10uaW5jbHVkZXMoaGQpKSB7XHJcblx0XHRcdHJldHVybiBgXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhbmVsLWJsb2NrIHB4LTRcIj5cclxuICAgICAgICAgICAgIyR7aGR9OiAmbmJzcDs8c3Ryb25nPiR7c2VsfTwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgYFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFuZWwtYmxvY2sgcHgtNFwiPlxyXG4gICAgICAgICAgICAjJHtoZH06ICZuYnNwOzxzdHJvbmc+JHskJC5xKHNlbCkudmFsdWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICBgXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBnZXRSYWRpb1ZhbHVlID0gKG5hKSA9PiB7XHJcblx0XHRsZXQgcmV0ID0gJydcclxuXHJcblx0XHQkJC5uYShuYSkuZm9yRWFjaCgoZWxtKSA9PiB7XHJcblx0XHRcdGlmIChlbG0uY2hlY2tlZCkge1xyXG5cdFx0XHRcdHJldCA9IGVsbS52YWx1ZVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuIHJldFxyXG5cdH1cclxuXHJcblx0Y29uc3QgRW1haWwgPSB3YXRjaCgnZW1haWwnKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlzLXNpemUtNCBoYXMtdGV4dC13ZWlnaHQtbWVkaXVtXCI+W1JlYWN0XTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uIGlzLWJvbGQgbWItMVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+Rm9ybTwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBpcy01XCI+Rm9ybSDjga7jgrXjg7Pjg5fjg6s8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBtdC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtOCBjb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lc3NhZ2UgaXMtcHJpbWFyeVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1oZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImlzLXNpemUtNCBwLTNcIj5yZWFjdC1ob29rLWZvcm08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVcIj7lkI3liY0mbmJzcDs8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGRlZmF1bHRWYWx1ZT1cIuWkqumDjlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVGV4dCBpbnB1dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZmlyc3ROYW1lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmZpcnN0TmFtZSAmJiA8ZGl2PlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj59XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPuODoeODvOODq+OCouODieODrOOCuSZuYnNwOzwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLjg6Hjg7zjg6vjgqLjg4njg6zjgrnjgpLlhaXliptcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ2VtYWlsJywge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm46IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvXlthLXpBLVowLTkuISMkJSYnKitcXC89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ+ODoeODvOODq+OCouODieODrOOCueOBruW9ouW8j+OBjOS4jeato+OBp+OBmScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB2YWx1ZTogL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2ksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMuZW1haWwgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb3JtRXJyb3JcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHTjg6Hjg7zjg6vjgqLjg4njg6zjgrnjgpLmraPjgZfjgY/lhaXlipvjgZfjgabkuIvjgZXjgYRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIGlzLWdyb3VwZWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz4gKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiIGlkPVwic3VibWl0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gaXMtbGluayBtdC00XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTdWJtaXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiIGlkPVwicmVzZXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByZXNldCgpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uIGlzLWxpbmsgaXMtbGlnaHQgbXQtNFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx044Kv44Oq44KiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIG1ha2Ugc3VyZSB5b3UgZG9uJ3QgcGFzcyBldmVudCBhcyBhcmd1bWVudC4gSSB3aWxsIHBhdGNoIHRoaXMgaXNzdWUgd2l0aCBzaGFsbG93IGNsb25lIHRvIGF2b2lkIHRoaXMgcHJvYmxlbSBhcyB3ZWxsLiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPVwicGFuZWxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nIG1iLTFcIj7pgIHkv6Hjg4fjg7zjgr/jga7mg4XloLE8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJkaXNwLWRhdGFcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGEgaGFzLWJhY2tncm91bmQtd2hpdGUtYmlzXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYXJ0aWNsZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9zZWN0aW9uPlxyXG5cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uIGhhcy1iYWNrZ3JvdW5kLWdyZXkgaGFzLXRleHQtd2hpdGUtdGVyIGlzLXB1bGxlZC1yaWdodCBtci01IG10LTNcIlxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiAkJC5zY3JUVCgnI3RvcCcpfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1jaXJjbGUtby11cFwiPjwvaT4mbmJzcDsmbmJzcDvjg4jjg4Pjg5dcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJmb3JtXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/components/R/Rform.js\n");

/***/ })

})