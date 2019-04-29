(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n\n.main-content {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  padding-top: 40px;\n}\n\n.sticky-nav {\n  position: fixed;\n  z-index: 999;\n}\n\n.list-inline li {\n  display: inline;\n  list-style-type: none;\n  padding-right: 20px;\n}\n\n.text-justify {\n  text-align: justify;\n  text-justify: inter-word;\n}\n\n.card-img {\n  object-fit: cover;\n  height:200px;\n  overflow: hidden;\n}\n\n.profile-img {\n  margin : 50px;\n  object-fit: cover;\n  width:250px;\n  height:250px;\n  overflow: hidden;\n}\n\n.theme-bg {\n  background: #37474f;\n}\n\n.padding-top-left-20 {\n  padding-top: 20px;\n  padding-left: 20px;\n}\n\n.padding-20 {\n  padding: 20px;\n}\n\n.padding-40 {\n  padding-top: 40px;\n}\n\n.padding-80 {\n  padding: 80px;\n}\n\n.test {\n  display: flex;\n}\n\n.curved-edges {\n  border-radius: 8px;\n}\n\n.rounded-edges {\n  border-radius: 25px;\n}", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/About */ "./src/components/About.js");
/* harmony import */ var _components_WorkAndEducation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/WorkAndEducation */ "./src/components/WorkAndEducation.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Projects */ "./src/components/Projects.js");
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Skills */ "./src/components/Skills.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Contact */ "./src/components/Contact.js");
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/NotFound */ "./src/components/NotFound.js");
var _jsxFileName = "/Users/kritgoyal/React-apps/portfolio/src/App.js";










class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-content grey lighten-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/",
      component: _components_About__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/worknedu",
      component: _components_WorkAndEducation__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/projects",
      component: _components_Projects__WEBPACK_IMPORTED_MODULE_5__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/skills",
      component: _components_Skills__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/*",
      component: _components_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/GitHub-Mark-64px.png":
/*!**********************************!*\
  !*** ./src/GitHub-Mark-64px.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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"

/***/ }),

/***/ "./src/In-White-48.png":
/*!*****************************!*\
  !*** ./src/In-White-48.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAABK0lEQVR42u3YvUoDQRiF4VMoCAoWgaCQ1juwDJYBmdZLEAvbNHbprMVGtkmT5Cpio+0U3oRFUFJYBAkir4UQsrObsHHnI8TsKb9heNj5Y3Yk4fBMiZ0pHicJh2Wc8KaAl8HgpAZKGGcNwJg+HfqMbYAhdUmSqDOMD4yoaRZqjGIDiVIhiQ20A6C9cV9gPgfmq+h3H/To0LPaB//hqCied57ockuC57sgECzTnCpXADxzwc5ctcEdX7GAT66VE5p5y3p14JJzLQinTMoDB1qS7OGyMrA87PEaCeCYFmfsZ+r3EQCOGMxOr1bQ5koD7PIy12VCI9V6Uh64CebxIdV6WB54zFyucnv9HXgLgI/YQHa3VkAFVEAFRAW27GZXEDD/ETd/SrB+DLF+zvkBReqHG1X9kRsAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _details_AboutDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/AboutDetails */ "./src/components/details/AboutDetails.js");
var _jsxFileName = "/Users/kritgoyal/React-apps/portfolio/src/components/About.js";



const About = () => {
  const img_src = _details_AboutDetails__WEBPACK_IMPORTED_MODULE_1__["default"].img_src,
        subtitle = _details_AboutDetails__WEBPACK_IMPORTED_MODULE_1__["default"].subtitle,
        content = _details_AboutDetails__WEBPACK_IMPORTED_MODULE_1__["default"].content,
        post_script = _details_AboutDetails__WEBPACK_IMPORTED_MODULE_1__["default"].post_script;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container center padding-20 rounded-edges ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "profile-img circle responsive hoverable",
    src: img_src,
    alt: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "blue-grey-text text-darken-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content center teal-text text-darken-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content center teal-text text-darken-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, post_script));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _In_White_48_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../In-White-48.png */ "./src/In-White-48.png");
/* harmony import */ var _In_White_48_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_In_White_48_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GitHub_Mark_64px_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GitHub-Mark-64px.png */ "./src/GitHub-Mark-64px.png");
/* harmony import */ var _GitHub_Mark_64px_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GitHub_Mark_64px_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kritgoyal/React-apps/portfolio/src/components/Contact.js";




class Contact extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      className: "page-footer theme-bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "white-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Reach me @"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col l6 s12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "mailto:goyal.kri@husky.neu.edu",
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons medium white-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "email")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "white-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "goyal.kri@husky.neu.edu")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col l6 s12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://goo.gl/maps/BMQaCwwZGupQ6jGA6",
      rel: "noopener noreferrer",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons medium white-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "location_on")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "white-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Boston, MA")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-inline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://github.com/krit95",
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _GitHub_Mark_64px_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "github account",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://www.linkedin.com/in/krit-goyal-5096761a/",
      target: "_blank",
      rel: "noopener noreferrer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _In_White_48_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      alt: "linkedin account",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-copyright",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "\xA9 2019 Krit Goyal")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/kritgoyal/React-apps/portfolio/src/components/Navbar.js";



class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "nav-wrapper theme-bg sticky-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/",
      className: "brand-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Krit Goyal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/worknedu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Work and Education")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/projects",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Projects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/skills",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Skills")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/NotFound.js":
/*!************************************!*\
  !*** ./src/components/NotFound.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kritgoyal/React-apps/portfolio/src/components/NotFound.js";


class NotFound extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "center red-text darken-text-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "404"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: "content center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "You shall not pass!"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/components/Projects.js":
/*!************************************!*\
  !*** ./src/components/Projects.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vertical_timeline_component_for_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vertical-timeline-component-for-react */ "./node_modules/vertical-timeline-component-for-react/dist/index.js");
/* harmony import */ var vertical_timeline_component_for_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vertical_timeline_component_for_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _details_ProjectsDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details/ProjectsDetails */ "./src/components/details/ProjectsDetails.js");
var _jsxFileName = "/Users/kritgoyal/React-apps/portfolio/src/components/Projects.js";




const Projects = () => {
  const ProjectsList = _details_ProjectsDetails__WEBPACK_IMPORTED_MODULE_2__["default"].map(project => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vertical_timeline_component_for_react__WEBPACK_IMPORTED_MODULE_1__["TimelineItem"], {
      key: project.id,
      dateText: project.period,
      dateInnerStyle: {
        background: '#00695c'
      },
      style: {
        color: '#00695c'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "card-img",
      src: project.img_src,
      alt: "project screenshot",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-stacked",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "padding-top-left-20",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-title teal-text text-darken-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }, project.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "teal-text text-darken-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }, project.subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "red-text text-darken-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, "Keywords"), ": ", project.keywords)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, project.content)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-action",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, project.links.map(link => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        key: link.display_text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "orange-text text-darken-4 focusable",
        href: link.url,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: undefined
      }, link.display_text));
    })))));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vertical_timeline_component_for_react__WEBPACK_IMPORTED_MODULE_1__["Timeline"], {
    lineColor: '#bdbdbd',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, ProjectsList);
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

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

/***/ }),

/***/ "./src/components/WorkAndEducation.js":
/*!********************************************!*\
  !*** ./src/components/WorkAndEducation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vertical_timeline_component_for_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vertical-timeline-component-for-react */ "./node_modules/vertical-timeline-component-for-react/dist/index.js");
/* harmony import */ var vertical_timeline_component_for_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vertical_timeline_component_for_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _details_WorkNEduDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details/WorkNEduDetails */ "./src/components/details/WorkNEduDetails.js");
var _jsxFileName = "/Users/kritgoyal/React-apps/portfolio/src/components/WorkAndEducation.js";




const WorkAndEducation = () => {
  const WorkEduList = _details_WorkNEduDetails__WEBPACK_IMPORTED_MODULE_2__["default"].map(item => {
    const itemColor = item.type === "work" ? "#e86971" : "#0277bd";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vertical_timeline_component_for_react__WEBPACK_IMPORTED_MODULE_1__["TimelineItem"], {
      key: item.id,
      dateText: item.period,
      dateInnerStyle: {
        background: itemColor
      },
      style: {
        color: itemColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hoverable padding-20 curved-edges",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "grey-text text-darken-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      className: "grey-text text-darken-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, item.subtitle), item.secondary_text ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "grey-text text-darken-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, item.secondary_text) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "collection curved-edges",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, item.content.map(bullet => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: bullet,
        className: "collection-item grey lighten-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: undefined
      }, bullet);
    }))));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(vertical_timeline_component_for_react__WEBPACK_IMPORTED_MODULE_1__["Timeline"], {
    lineColor: '#bdbdbd',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, WorkEduList);
};

/* harmony default export */ __webpack_exports__["default"] = (WorkAndEducation);

/***/ }),

/***/ "./src/components/details/AboutDetails.js":
/*!************************************************!*\
  !*** ./src/components/details/AboutDetails.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const AboutDetails = {
  img_src: "images/my_photo.jpg",
  subtitle: "Graduate Student | Android/Web developer | AI Enthusiast | Culé",
  content: "Candidate for MS in Computer Science at Northeastern University. I am an avid learner and my latest obsession is Machine Learning and AI. I have extensive experience in Android and web development.",
  post_script: "Always looking for interesting opportunities to collaborate and learn in mobile/web development and Machine Learning."
};
/* harmony default export */ __webpack_exports__["default"] = (AboutDetails);

/***/ }),

/***/ "./src/components/details/ProjectsDetails.js":
/*!***************************************************!*\
  !*** ./src/components/details/ProjectsDetails.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ProjectsDetails = [{
  id: "004",
  img_src: "images/rts_1.png",
  period: "Mar 2019 - Apr 2019",
  title: "Resource Management Simulator",
  subtitle: "Game AI course, NEU",
  keywords: "A*, Search-based classical planner, Iterative Depth A*, Memory Bound A*, Unity, C#",
  content: "Developed an AI that can build a plan to get to a target resources stockpile and income. Also built a small resource management game for the AI to play.\nUI built using Unity, scripting in C#.",
  links: [{
    display_text: "SOURCE CODE",
    url: "https://github.com/krit95/Capston"
  }]
}, {
  id: "003",
  img_src: "images/emergency_caller_1.jpg",
  period: "Feb 2019",
  title: "Emergency Caller",
  subtitle: "Brickhack V, RIT, NY",
  keywords: "Android, FCM, node js, express js",
  content: "Built Emergency calling android which rings callee phone even if on silent/vibrate by leveraging Firebase Cloud Messaging",
  links: [{
    display_text: "SOURCE CODE",
    url: "https://github.com/krit95/EmergencyCaller"
  }]
}, {
  id: "002",
  img_src: "images/nst_1.png",
  period: "Oct 2018 - Dec 2018",
  title: "Neural Style Transfer: Analysis and Improvement",
  subtitle: "Foundations of AI course, NEU",
  keywords: "CNN, VGG, Neural Style Transfer",
  content: "Studied, analyzed and reduced loss of neural style transfer using VGG network introduced by Gatys et. al.",
  links: [{
    display_text: "SOURCE CODE",
    url: "https://github.com/krit95/neural_style_transfer"
  }]
}, {
  id: "001",
  img_src: "images/rge_screenshot.webp",
  period: "Apr 2018 - July 2018",
  title: "Inventory showcase/management Android app",
  keywords: "Android, Firebase authentication, node js, express js, mongoDB",
  content: "Built android apps for SMEs to showcase and manage inventory. Used Firebase for user sign in and authentication, stored data in MongoDB Atlas with the REST APIs being served by a node JS server",
  links: [{
    display_text: "PLAY STORE LINK",
    url: "https://play.google.com/store/apps/details?id=com.tiklyo.bpih.rge"
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (ProjectsDetails);

/***/ }),

/***/ "./src/components/details/SkillsDetails.js":
/*!*************************************************!*\
  !*** ./src/components/details/SkillsDetails.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SkillsDetails = [{
  id: "1",
  category_name: "Scripting",
  skills: [{
    id: "1_1",
    name: "Java",
    level: "90%"
  }, {
    id: "1_2",
    name: "Python",
    level: "60%"
  }, {
    id: "1_3",
    name: "C#",
    level: "70%"
  }]
}, {
  id: "2",
  category_name: "Web Dev Frameworks",
  skills: [{
    id: "2_1",
    name: "PHP",
    level: "70%"
  }, {
    id: "2_2",
    name: "React"
  }]
}, {
  id: "3",
  category_name: "Mobile Dev",
  skills: [{
    id: "3_1",
    name: "Android",
    level: "90%"
  }, {
    id: "3_2",
    name: "React-native"
  }]
}, {
  id: "4",
  category_name: "Others",
  skills: [{
    id: "4_1",
    name: "git",
    level: "80%"
  }, {
    id: "4_2",
    name: "Unity",
    level: "60%"
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (SkillsDetails);

/***/ }),

/***/ "./src/components/details/WorkNEduDetails.js":
/*!***************************************************!*\
  !*** ./src/components/details/WorkNEduDetails.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const WorkNEduDetails = [{
  id: "001",
  type: "work",
  period: "Oct 2018 - Present",
  title: "mHealth Research Group, Boston MA",
  subtitle: "Graduate Research Assistant, Smartphone Programmer",
  secondary_text: "Android Wear 2.0, Firebase, Wearables and sensors",
  content: ["Developed Android Wear and Mobile OS applications designed for Micro Ecological Momentary Assessments(μEMA)", "Collected data using in-built sensors, MessageApi for inter-device communication, and firebase for database, storage and authentication"]
}, {
  id: "002",
  type: "education",
  period: "Sept 2018 - Present",
  title: "Northeastern University, Boston",
  subtitle: "Master of Science in Computer Science",
  secondary_text: "GPA: 4.0 / 4.0",
  content: ["Related courses: Programming Design Paradigm, Algorithms, Foundations of AI, Game AI"]
}, {
  id: "003",
  type: "work",
  period: "June 2017 - July 2018",
  title: "Samsung Research Institute, Noida, India",
  subtitle: "Engineer I, Codec Team, Media Services",
  secondary_text: "Android, Google ML kit, Mobile Video/Audio codec, FFMPEG",
  content: ["Developed POC for automatic camera mode selection in phone with Google’s ML kit", "Created POC android app for in-place video editing using FFMPEG", "Built POC for storage efficient image file format for Android with help of CMake and Nokia’s open source library"]
}, {
  id: "004",
  type: "education",
  period: "Aug 2013 - May 2017",
  title: "Birla Institute of Technology and Science(BITS) Pilani",
  subtitle: "B.E. (Hons.) in Electrical and Electronics Engineering",
  secondary_text: "GPA: 7.78 / 10",
  content: ["Related courses: Machine Learning, Object Oriented Programming, Data Structures and Algorithms, Discrete Mathematics, Operating Systems"]
}, {
  id: "005",
  type: "work",
  period: "June 2016 - Dec 2016",
  title: "Oracle, Bangalore, India",
  subtitle: "Software Development Intern",
  secondary_text: "REST APIs, Java, Oracle JET(knockout js, jQuery, jQuery UI, promise), ADF, Swagger",
  content: ["Developed POC for Oracle JET integration with ADF for a faster, lighter and more responsive app UI", "Harnessed the power of OracleJET, a Javascript library bundle, to implement ad-hoc web page generation", "Deployed REST APIs using Java for new UI"]
}, {
  id: "006",
  type: "work",
  period: "June 2016 - Nov 2016",
  title: "SilicoSense Technologies, New Delhi, India",
  subtitle: "Software Development Intern",
  secondary_text: "REST APIs, PHP, PDO, mySQL, python, sqlite, bs4",
  content: ["Built web app backend coupled securely with REST APIs using PHP and PDO", "Created and managed SQL database schemas for app data", "Built web crawler to scrape, collate and store data using sqlite and BeautifulSoup4(bs4) libraries in python"]
}];
/* harmony default export */ __webpack_exports__["default"] = (WorkNEduDetails);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/kritgoyal/React-apps/portfolio/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kritgoyal/React-apps/portfolio/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/kritgoyal/React-apps/portfolio/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map