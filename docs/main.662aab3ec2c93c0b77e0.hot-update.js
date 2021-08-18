webpackHotUpdate("main",{

/***/ "./app/components/R/Rform.js":
/*!***********************************!*\
  !*** ./app/components/R/Rform.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($$) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction Rform() {\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      reset = _useForm.reset,\n      watch = _useForm.watch,\n      errors = _useForm.formState.errors;\n\n  var onSubmit = function onSubmit(data) {\n    console.log(data);\n    dispData2(data);\n  }; // your form submit function which will invoke after successful validation\n  // console.log('watching...', watch('example')) // you can watch individual input by pass the name of the input\n\n\n  var dispData2 = function dispData2(data) {\n    $$.Id('disp-data').innerHTML = \"<blockquote><pre>\".concat(JSON.stringify(data, null, '\\t'), \"</pre></blockquote>\"); // $$.Id('disp-data').innerHTML = <pre>{JSON.stringify(data, null, '\\t')}</pre>\n  };\n\n  var dispData = function dispData() {\n    var data = '';\n    data += mkData('name', '#name');\n    data += mkData('email', '#email');\n    data += mkData('sel', '#sel');\n    data += mkData('msg', '#msg');\n    data += mkData('chkEx', \"\".concat($$.Id('#chkEx').value, \": \").concat($$.Id('#chkEx').checked));\n    data += mkData('rGroupEx', getRadioValue('question2'));\n    $$.q('.data').innerHTML = \"<div class=\\\"\\\">\".concat(data, \"</div>\");\n  };\n\n  var mkData = function mkData(hd, sel) {\n    if (['chk', 'chkEx', 'rGroup', 'rGroupEx'].includes(hd)) {\n      return \"\\n          <span class=\\\"panel-block px-4\\\">\\n            #\".concat(hd, \": &nbsp;<strong>\").concat(sel, \"</strong>\\n          </span>\\n          \");\n    } else {\n      return \"\\n          <span class=\\\"panel-block px-4\\\">\\n            #\".concat(hd, \": &nbsp;<strong>\").concat($$.q(sel).value, \"</strong>\\n          </span>\\n          \");\n    }\n  };\n\n  var getRadioValue = function getRadioValue(na) {\n    var ret = '';\n    $$.na(na).forEach(function (elm) {\n      if (elm.checked) {\n        ret = elm.value;\n      }\n    });\n    return ret;\n  };\n\n  var Email = watch('email');\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"section\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"is-size-4 has-text-weight-medium\"\n  }, \"[React]\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"section\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"notification is-bold mb-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"title\"\n  }, \"Form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"subtitle is-5\"\n  }, \"Form \\u306E\\u30B5\\u30F3\\u30D7\\u30EB\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"columns mt-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"column\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"column is-8 content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n    className: \"message is-primary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"message-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"is-size-4 p-3\"\n  }, \"react-hook-form\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"box\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit(onSubmit)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"firstName\"\n  }, \"\\u540D\\u524D\\xA0\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n    // defaultValue=\"太郎\"\n    className: \"input\",\n    type: \"text\",\n    placeholder: \"Text input\"\n  }, register('firstName', {\n    required: true\n  })))), errors.firstName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"e\"\n  }, \"This field is required\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"field\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"email\"\n  }, \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\\xA0\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"control\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n    className: \"input\",\n    type: \"mail\",\n    placeholder: \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\\u3092\\u5165\\u529B\"\n  }, register('email', {\n    required: true,\n    pattern: {\n      value: /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/,\n      message: 'メールアドレスの形式が不正です'\n    } // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i,\n\n  }))), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"formError e\"\n  }, \"\\u30E1\\u30FC\\u30EB\\u30A2\\u30C9\\u30EC\\u30B9\\u3092\\u6B63\\u3057\\u304F\\u5165\\u529B\\u3057\\u3066\\u4E0B\\u3055\\u3044\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"field is-grouped\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"control\",\n    id: \"submit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button is-link mt-4\"\n  }, \"Submit\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"control\",\n    id: \"reset\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return reset();\n    },\n    className: \"button is-link is-light mt-4\"\n  }, \"\\u30AF\\u30EA\\u30A2\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n    className: \"panel\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"panel-heading mb-1\"\n  }, \"\\u9001\\u4FE1\\u30C7\\u30FC\\u30BF\\u306E\\u60C5\\u5831\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"disp-data\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"data has-background-white-bis\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"column\"\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"button has-background-grey has-text-white-ter is-pulled-right mr-5 mt-3\",\n    onClick: function onClick() {\n      return $$.scrTT('#top');\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fa fa-arrow-circle-o-up\"\n  }), \"\\xA0\\xA0\\u30C8\\u30C3\\u30D7\"))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rform);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./app/js/shortJS.js */ \"./app/js/shortJS.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SL1Jmb3JtLmpzPzgyYTgiXSwibmFtZXMiOlsiUmZvcm0iLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyZXNldCIsIndhdGNoIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpc3BEYXRhMiIsIiQkIiwiSWQiLCJpbm5lckhUTUwiLCJKU09OIiwic3RyaW5naWZ5IiwiZGlzcERhdGEiLCJta0RhdGEiLCJ2YWx1ZSIsImNoZWNrZWQiLCJnZXRSYWRpb1ZhbHVlIiwicSIsImhkIiwic2VsIiwiaW5jbHVkZXMiLCJuYSIsInJldCIsImZvckVhY2giLCJlbG0iLCJFbWFpbCIsInJlcXVpcmVkIiwiZmlyc3ROYW1lIiwicGF0dGVybiIsIm1lc3NhZ2UiLCJlbWFpbCIsInNjclRUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDaEIsaUJBTUlDLCtEQUFPLEVBTlg7QUFBQSxNQUNDQyxRQURELFlBQ0NBLFFBREQ7QUFBQSxNQUVDQyxZQUZELFlBRUNBLFlBRkQ7QUFBQSxNQUdDQyxLQUhELFlBR0NBLEtBSEQ7QUFBQSxNQUlDQyxLQUpELFlBSUNBLEtBSkQ7QUFBQSxNQUtjQyxNQUxkLFlBS0NDLFNBTEQsQ0FLY0QsTUFMZDs7QUFRQSxNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQVU7QUFDMUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FHLGFBQVMsQ0FBQ0gsSUFBRCxDQUFUO0FBQ0EsR0FIRCxDQVRnQixDQVlkO0FBRUY7OztBQUVBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNILElBQUQsRUFBVTtBQUMzQkksTUFBRSxDQUFDQyxFQUFILENBQU0sV0FBTixFQUFtQkMsU0FBbkIsOEJBQW1EQyxJQUFJLENBQUNDLFNBQUws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LENBdEVELGVBNEVDLHNFQTVFRCxDQUZELGVBZ0ZDO0FBQUssYUFBUyxFQUFDO0FBQWYsSUFoRkQsQ0FSRCxDQURELENBTEQsZUFtR0M7QUFDQyxhQUFTLEVBQUMseUVBRFg7QUFFQyxXQUFPLEVBQUU7QUFBQSxhQUFNUyxFQUFFLENBQUN3QixLQUFILENBQVMsTUFBVCxDQUFOO0FBQUE7QUFGVixrQkFJQztBQUFHLGFBQVMsRUFBQztBQUFiLElBSkQsK0JBbkdELENBREQsQ0FERCxDQUREO0FBZ0hBOztBQUVjckMsb0VBQWYsRSIsImZpbGUiOiIuL2FwcC9jb21wb25lbnRzL1IvUmZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcblxyXG5mdW5jdGlvbiBSZm9ybSgpIHtcclxuXHRjb25zdCB7XHJcblx0XHRyZWdpc3RlcixcclxuXHRcdGhhbmRsZVN1Ym1pdCxcclxuXHRcdHJlc2V0LFxyXG5cdFx0d2F0Y2gsXHJcblx0XHRmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXHJcblx0fSA9IHVzZUZvcm0oKVxyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKVxyXG5cdFx0ZGlzcERhdGEyKGRhdGEpXHJcblx0fSAvLyB5b3VyIGZvcm0gc3VibWl0IGZ1bmN0aW9uIHdoaWNoIHdpbGwgaW52b2tlIGFmdGVyIHN1Y2Nlc3NmdWwgdmFsaWRhdGlvblxyXG5cclxuXHQvLyBjb25zb2xlLmxvZygnd2F0Y2hpbmcuLi4nLCB3YXRjaCgnZXhhbXBsZScpKSAvLyB5b3UgY2FuIHdhdGNoIGluZGl2aWR1YWwgaW5wdXQgYnkgcGFzcyB0aGUgbmFtZSBvZiB0aGUgaW5wdXRcclxuXHJcblx0Y29uc3QgZGlzcERhdGEyID0gKGRhdGEpID0+IHtcclxuXHRcdCQkLklkKCdkaXNwLWRhdGEnKS5pbm5lckhUTUwgPSBgPGJsb2NrcXVvdGU+PHByZT4ke0pTT04uc3RyaW5naWZ5KFxyXG5cdFx0XHRkYXRhLFxyXG5cdFx0XHRudWxsLFxyXG5cdFx0XHQnXFx0J1xyXG5cdFx0KX08L3ByZT48L2Jsb2NrcXVvdGU+YFxyXG5cdFx0Ly8gJCQuSWQoJ2Rpc3AtZGF0YScpLmlubmVySFRNTCA9IDxwcmU+e0pTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsICdcXHQnKX08L3ByZT5cclxuXHR9XHJcblxyXG5cdGNvbnN0IGRpc3BEYXRhID0gKCkgPT4ge1xyXG5cdFx0bGV0IGRhdGEgPSAnJ1xyXG5cclxuXHRcdGRhdGEgKz0gbWtEYXRhKCduYW1lJywgJyNuYW1lJylcclxuXHRcdGRhdGEgKz0gbWtEYXRhKCdlbWFpbCcsICcjZW1haWwnKVxyXG5cdFx0ZGF0YSArPSBta0RhdGEoJ3NlbCcsICcjc2VsJylcclxuXHRcdGRhdGEgKz0gbWtEYXRhKCdtc2cnLCAnI21zZycpXHJcblx0XHRkYXRhICs9IG1rRGF0YShcclxuXHRcdFx0J2Noa0V4JyxcclxuXHRcdFx0YCR7JCQuSWQoJyNjaGtFeCcpLnZhbHVlfTogJHskJC5JZCgnI2Noa0V4JykuY2hlY2tlZH1gXHJcblx0XHQpXHJcblx0XHRkYXRhICs9IG1rRGF0YSgnckdyb3VwRXgnLCBnZXRSYWRpb1ZhbHVlKCdxdWVzdGlvbjInKSlcclxuXHRcdCQkLnEoJy5kYXRhJykuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJcIj4ke2RhdGF9PC9kaXY+YFxyXG5cdH1cclxuXHJcblx0Y29uc3QgbWtEYXRhID0gKGhkLCBzZWwpID0+IHtcclxuXHRcdGlmIChbJ2NoaycsICdjaGtFeCcsICdyR3JvdXAnLCAnckdyb3VwRXgnXS5pbmNsdWRlcyhoZCkpIHtcclxuXHRcdFx0cmV0dXJuIGBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFuZWwtYmxvY2sgcHgtNFwiPlxyXG4gICAgICAgICAgICAjJHtoZH06ICZuYnNwOzxzdHJvbmc+JHtzZWx9PC9zdHJvbmc+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICBgXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gYFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYW5lbC1ibG9jayBweC00XCI+XHJcbiAgICAgICAgICAgICMke2hkfTogJm5ic3A7PHN0cm9uZz4keyQkLnEoc2VsKS52YWx1ZX08L3N0cm9uZz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIGBcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGdldFJhZGlvVmFsdWUgPSAobmEpID0+IHtcclxuXHRcdGxldCByZXQgPSAnJ1xyXG5cclxuXHRcdCQkLm5hKG5hKS5mb3JFYWNoKChlbG0pID0+IHtcclxuXHRcdFx0aWYgKGVsbS5jaGVja2VkKSB7XHJcblx0XHRcdFx0cmV0ID0gZWxtLnZhbHVlXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHRyZXR1cm4gcmV0XHJcblx0fVxyXG5cclxuXHRjb25zdCBFbWFpbCA9IHdhdGNoKCdlbWFpbCcpXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IGhhcy10ZXh0LXdlaWdodC1tZWRpdW1cIj5bUmVhY3RdPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24gaXMtYm9sZCBtYi0xXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5Gb3JtPC9oMT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlIGlzLTVcIj5Gb3JtIOOBruOCteODs+ODl+ODqzwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIG10LTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy04IGNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGFydGljbGUgY2xhc3NOYW1lPVwibWVzc2FnZSBpcy1wcmltYXJ5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWhlYWRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IHAtM1wiPnJlYWN0LWhvb2stZm9ybTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+5ZCN5YmNJm5ic3A7PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBkZWZhdWx0VmFsdWU9XCLlpKrpg45cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5wdXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJUZXh0IGlucHV0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZmlyc3ROYW1lJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5maXJzdE5hbWUgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZVwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPuODoeODvOODq+OCouODieODrOOCuSZuYnNwOzwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5wdXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm1haWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLjg6Hjg7zjg6vjgqLjg4njg6zjgrnjgpLlhaXliptcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm46IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC9eW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC8sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ+ODoeODvOODq+OCouODieODrOOCueOBruW9ouW8j+OBjOS4jeato+OBp+OBmScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHZhbHVlOiAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5lbWFpbCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb3JtRXJyb3IgZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHTjg6Hjg7zjg6vjgqLjg4njg6zjgrnjgpLmraPjgZfjgY/lhaXlipvjgZfjgabkuIvjgZXjgYRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtZ3JvdXBlZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCIgaWQ9XCJzdWJtaXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rIG10LTRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFN1Ym1pdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCIgaWQ9XCJyZXNldFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHJlc2V0KCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b24gaXMtbGluayBpcy1saWdodCBtdC00XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHTjgq/jg6rjgqJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogbWFrZSBzdXJlIHlvdSBkb24ndCBwYXNzIGV2ZW50IGFzIGFyZ3VtZW50LiBJIHdpbGwgcGF0Y2ggdGhpcyBpc3N1ZSB3aXRoIHNoYWxsb3cgY2xvbmUgdG8gYXZvaWQgdGhpcyBwcm9ibGVtIGFzIHdlbGwuICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9XCJwYW5lbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmcgbWItMVwiPumAgeS/oeODh+ODvOOCv+OBruaDheWgsTwvcD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cImRpc3AtZGF0YVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0YSBoYXMtYmFja2dyb3VuZC13aGl0ZS1iaXNcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hcnRpY2xlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L3NlY3Rpb24+XHJcblxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b24gaGFzLWJhY2tncm91bmQtZ3JleSBoYXMtdGV4dC13aGl0ZS10ZXIgaXMtcHVsbGVkLXJpZ2h0IG1yLTUgbXQtM1wiXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+ICQkLnNjclRUKCcjdG9wJyl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LWNpcmNsZS1vLXVwXCI+PC9pPiZuYnNwOyZuYnNwO+ODiOODg+ODl1xyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvc2VjdGlvbj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmZvcm1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/components/R/Rform.js\n");

/***/ })

})