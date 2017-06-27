webpackJsonp([0],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(32),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/easonzhan/learning/git_repos/webpack-tutorial/04-vue-ssr/src/components/Inc.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Inc.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e88dc5f", Component.options)
  } else {
    hotAPI.reload("data-v-6e88dc5f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_modules_foo__ = __webpack_require__(31);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	asyncData ({store}) {
		store.registerModule('foo', __WEBPACK_IMPORTED_MODULE_0__store_modules_foo__["a" /* default */])
		return store.dispatch('foo/inc')
	},

	// IMPORTANT: avoid duplicate module registration on the client
	// when the route is visited multiple times.
	destroyed () {
	  this.$store.unregisterModule('foo')
	},

	computed: {
	  fooCount () {
	    return this.$store.state.foo.count
	  }
	}
});


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	namespaced: true,
	/**
	 * Important: state must be a function so the module can be instantiated multiple times.
	 */
	state: () => {
		return {
			count: 0
		}
	},

	actions: {
		inc: ({commit}) => commit('inc')
	},

	mutations: {
		inc: state => state.count++
	}
});

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v(_vm._s(_vm.fooCount))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6e88dc5f", module.exports)
  }
}

/***/ })

});