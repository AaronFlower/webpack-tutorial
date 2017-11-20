webpackJsonp([2],{

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(27),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/easonzhan/learning/git_repos/webpack-tutorial/04-vue-ssr/src/components/Bar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Bar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-323cc3d8", Component.options)
  } else {
    hotAPI.reload("data-v-323cc3d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data () {
		return {
			isH5: false
		}
	},
	mounted () {
		this.isH5 = !!window.FormData
	}
});


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', [_vm._v("Bar...")]), _vm._v(" "), _c('p', [_vm._v("isH5: " + _vm._s(_vm.isH5))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-323cc3d8", module.exports)
  }
}

/***/ })

});