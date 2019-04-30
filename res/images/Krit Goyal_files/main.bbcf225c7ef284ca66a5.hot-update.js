webpackHotUpdate("main",{

/***/ "./src/components/Skills.js":
/*!**********************************!*\
  !*** ./src/components/Skills.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _details_SkillsDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/SkillsDetails */ "./src/components/details/SkillsDetails.js");
var _jsxFileName = "/Users/kritgoyal/React-apps/portfolio/src/components/Skills.js";



const Skills = () => {
  const SkillsBlocks = _details_SkillsDetails__WEBPACK_IMPORTED_MODULE_1__["default"].map(categoryItem => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: categoryItem.id,
      className: "container hoverable curved-edges col l6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "blue-grey-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, categoryItem.category_name)), categoryItem.skills.map(skill => {
      const skillClass = skill.level ? "determinate" : "indeterminate";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: skill.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "grey-text text-darken-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: undefined
      }, skill.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: skillClass,
        style: {
          width: skill.level
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: undefined
      })));
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "padding-80 center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, SkillsBlocks)));
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ })

})
//# sourceMappingURL=main.bbcf225c7ef284ca66a5.hot-update.js.map