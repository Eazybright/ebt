webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
module.exports = __webpack_require__(55);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uikit__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit_dist_js_uikit_icons__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uikit_dist_js_uikit_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uikit_dist_js_uikit_icons__);



/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(18);

// loads the Icon plugin
__WEBPACK_IMPORTED_MODULE_0_uikit___default.a.use(__WEBPACK_IMPORTED_MODULE_1_uikit_dist_js_uikit_icons___default.a);
window.UIkit = __WEBPACK_IMPORTED_MODULE_0_uikit___default.a;
window.Vue = __webpack_require__(13);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/**
 * Logon components
 */
Vue.component('admin-login-component', __webpack_require__(37));
Vue.component('login-component', __webpack_require__(40));
Vue.component('register-component', __webpack_require__(43));

/**
 * Courses components
 */
Vue.component('create-course', __webpack_require__(46));

/**
 * Questions components
 */
Vue.component('upload-questions', __webpack_require__(49));
Vue.component('input-question', __webpack_require__(52));

var app = new Vue({
  el: '#app'
});

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*! UIkit 3.0.0-rc.11 | http://www.getuikit.com | (c) 2014 - 2018 YOOtheme | MIT License */

(function (global, factory) {
     true ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('uikiticons', factory) :
    (global.UIkitIcons = factory());
}(this, (function () { 'use strict';

    function plugin(UIkit) {

        if (plugin.installed) {
            return;
        }

        UIkit.icon.add({
        "500px": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719\t\tc0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449\t\tc-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045\t\tc-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z\" /> <path d=\"M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066\t\tc0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564\t\tc0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271\t\tc0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z\" /> <path d=\"M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521\t\tc-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53\t\tc-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203\t\tc-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604\t\tc0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645\t\tc1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z\" /> <path d=\"M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461\t\tc0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882\t\tc0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881\t\tc-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461\t\tc-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915\t\tC5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0\t\tc0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408\t\tc0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406\t\tc-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799\t\tc0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468\t\tc-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607\t\tc0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038\t\tc-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113\t\tc-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z\" /></svg>",
        "album": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"5\" y=\"2\" width=\"10\" height=\"1\" /> <rect x=\"3\" y=\"4\" width=\"14\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"6.5\" width=\"17\" height=\"11\" /></svg>",
        "arrow-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66\" /> <line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"4\" x2=\"10.5\" y2=\"15\" /></svg>",
        "arrow-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"10 14 5 9.5 10 5\" /> <line fill=\"none\" stroke=\"#000\" x1=\"16\" y1=\"9.5\" x2=\"5\" y2=\"9.52\" /></svg>",
        "arrow-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"10 5 15 9.5 10 14\" /> <line fill=\"none\" stroke=\"#000\" x1=\"4\" y1=\"9.5\" x2=\"15\" y2=\"9.5\" /></svg>",
        "arrow-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4\" /> <line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"16\" x2=\"10.5\" y2=\"5\" /></svg>",
        "ban": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /> <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"4\" y1=\"3.5\" x2=\"16\" y2=\"16.5\" /></svg>",
        "behance": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z\" /> <path d=\"M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z\" /> <rect x=\"13\" y=\"4\" width=\"5\" height=\"1.4\" /></svg>",
        "bell": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z\" /> <path fill=\"none\" stroke=\"#000\" d=\"M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16\" /></svg>",
        "bold": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z\" /></svg>",
        "bolt": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z\" /></svg>",
        "bookmark": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5\" /></svg>",
        "calendar": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z\" /> <rect width=\"1\" height=\"3\" x=\"6\" y=\"2\" /> <rect width=\"1\" height=\"3\" x=\"13\" y=\"2\" /></svg>",
        "camera": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10.8\" r=\"3.8\" /> <path fill=\"none\" stroke=\"#000\" d=\"M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z\" /></svg>",
        "cart": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\" /> <circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\" /></svg>",
        "check": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"4,10 8,15 17,4\" /></svg>",
        "chevron-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"16 7 10 13 4 7\" /></svg>",
        "chevron-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"13 16 7 10 13 4\" /></svg>",
        "chevron-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"7 4 13 10 7 16\" /></svg>",
        "chevron-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"4 13 10 7 16 13\" /></svg>",
        "clock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /> <rect x=\"9\" y=\"4\" width=\"1\" height=\"7\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\" /></svg>",
        "close": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,16 L4,4\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,4 L4,16\" /></svg>",
        "cloud-download": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"11.75 16 9.5 18.25 7.25 16\" /> <path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\" /></svg>",
        "cloud-upload": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"7.25 11.75 9.5 9.5 11.75 11.75\" /> <path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\" /></svg>",
        "code": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"13,4 19,10 13,16\" /> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"7,4 1,10 7,16\" /></svg>",
        "cog": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" cx=\"9.997\" cy=\"10\" r=\"3.31\" /> <path fill=\"none\" stroke=\"#000\" d=\"M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z\" /></svg>",
        "comment": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z\" /></svg>",
        "commenting": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5\" /> <circle cx=\"10\" cy=\"8\" r=\"1\" /> <circle cx=\"6\" cy=\"8\" r=\"1\" /> <circle cx=\"14\" cy=\"8\" r=\"1\" /></svg>",
        "comments": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"2 0.5 19.5 0.5 19.5 13\" /> <path d=\"M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z\" /></svg>",
        "copy": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\" /></svg>",
        "credit-card": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"4.5\" width=\"17\" height=\"12\" /> <rect x=\"1\" y=\"7\" width=\"18\" height=\"3\" /></svg>",
        "database": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <ellipse fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"4.64\" rx=\"7.5\" ry=\"3.14\" /> <path fill=\"none\" stroke=\"#000\" d=\"M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11\" /> <path fill=\"none\" stroke=\"#000\" d=\"M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25\" /> <path fill=\"none\" stroke=\"#000\" d=\"M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64\" /></svg>",
        "desktop": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"8\" y=\"15\" width=\"1\" height=\"2\" /> <rect x=\"11\" y=\"15\" width=\"1\" height=\"2\" /> <rect x=\"5\" y=\"16\" width=\"10\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"3.5\" width=\"17\" height=\"11\" /></svg>",
        "download": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"14,10 9.5,14.5 5,10\" /> <rect x=\"3\" y=\"17\" width=\"13\" height=\"1\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"13.91\" x2=\"9.5\" y2=\"3\" /></svg>",
        "dribbble": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" cx=\"10\" cy=\"10\" r=\"9\" /></svg>",
        "expand": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"13 2 18 2 18 7 17 7 17 3 13 3\" /> <polygon points=\"2 13 3 13 3 17 7 17 7 18 2 18\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11,9 L17,3\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M3,17 L9,11\" /></svg>",
        "facebook": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z\" /></svg>",
        "file-edit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5\" /></svg>",
        "file": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"1.5\" width=\"13\" height=\"17\" /></svg>",
        "flickr": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"5.5\" cy=\"9.5\" r=\"3.5\" /> <circle cx=\"14.5\" cy=\"9.5\" r=\"3.5\" /></svg>",
        "folder": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5\" /></svg>",
        "forward": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z\" /></svg>",
        "foursquare": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z\" /></svg>",
        "future": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline points=\"19 2 18 2 18 6 14 6 14 7 19 7 19 2\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10\" /> <rect x=\"9\" y=\"4\" width=\"1\" height=\"7\" /> <path d=\"M13.018,14.197 L9.445,10.625\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" /></svg>",
        "git-branch": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"3\" r=\"2\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14\" cy=\"6\" r=\"2\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"17\" r=\"2\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5\" /></svg>",
        "git-fork": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"5.79\" cy=\"2.79\" r=\"1.79\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14.19\" cy=\"2.79\" r=\"1.79\" /> <ellipse fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"10.03\" cy=\"16.79\" rx=\"1.79\" ry=\"1.79\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57\" /></svg>",
        "github-alt": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z\" /></svg>",
        "github": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z\" /></svg>",
        "gitter": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"3.5\" y=\"1\" width=\"1.531\" height=\"11.471\" /> <rect x=\"7.324\" y=\"4.059\" width=\"1.529\" height=\"15.294\" /> <rect x=\"11.148\" y=\"4.059\" width=\"1.527\" height=\"15.294\" /> <rect x=\"14.971\" y=\"4.059\" width=\"1.529\" height=\"8.412\" /></svg>",
        "google-plus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z\" /> <polygon points=\"20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9 \" /></svg>",
        "google": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z\" /></svg>",
        "grid": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"2\" y=\"2\" width=\"3\" height=\"3\" /> <rect x=\"8\" y=\"2\" width=\"3\" height=\"3\" /> <rect x=\"14\" y=\"2\" width=\"3\" height=\"3\" /> <rect x=\"2\" y=\"8\" width=\"3\" height=\"3\" /> <rect x=\"8\" y=\"8\" width=\"3\" height=\"3\" /> <rect x=\"14\" y=\"8\" width=\"3\" height=\"3\" /> <rect x=\"2\" y=\"14\" width=\"3\" height=\"3\" /> <rect x=\"8\" y=\"14\" width=\"3\" height=\"3\" /> <rect x=\"14\" y=\"14\" width=\"3\" height=\"3\" /></svg>",
        "happy": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"13\" cy=\"7\" r=\"1\" /> <circle cx=\"7\" cy=\"7\" r=\"1\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"8.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4\" /></svg>",
        "hashtag": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z\" /></svg>",
        "heart": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\" /></svg>",
        "history": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"#000\" points=\"1 2 2 2 2 6 6 6 6 7 1 7 1 2\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10\" /> <rect x=\"9\" y=\"4\" width=\"1\" height=\"7\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\" id=\"Shape\" /></svg>",
        "home": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65\" /> <polygon points=\"15 4 18 4 18 7 17 7 17 5 15 5\" /> <polygon points=\"3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19\" /></svg>",
        "image": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"16.1\" cy=\"6.1\" r=\"1.1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"0.5\" y=\"2.5\" width=\"19\" height=\"15\" /> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"4,13 8,9 13,14\" /> <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"11,12 12.5,10.5 16,14\" /></svg>",
        "info": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /></svg>",
        "instagram": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z\" /> <circle cx=\"14.87\" cy=\"5.26\" r=\"1.09\" /> <path d=\"M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z\" /></svg>",
        "italic": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z\" /></svg>",
        "joomla": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z\" /> <path d=\"M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8\" /> <path d=\"M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8\" /> <path d=\"M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7\" /></svg>",
        "laptop": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect y=\"16\" width=\"20\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"2.5\" y=\"4.5\" width=\"15\" height=\"10\" /></svg>",
        "lifesaver": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z\" /></svg>",
        "link": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M7.925,11.875 L11.925,7.975\" /></svg>",
        "linkedin": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z\" /> <path d=\"M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z\" /></svg>",
        "list": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"6\" y=\"4\" width=\"12\" height=\"1\" /> <rect x=\"6\" y=\"9\" width=\"12\" height=\"1\" /> <rect x=\"6\" y=\"14\" width=\"12\" height=\"1\" /> <rect x=\"2\" y=\"4\" width=\"2\" height=\"1\" /> <rect x=\"2\" y=\"9\" width=\"2\" height=\"1\" /> <rect x=\"2\" y=\"14\" width=\"2\" height=\"1\" /></svg>",
        "location": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"6.8\" r=\"2.3\" /></svg>",
        "lock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" height=\"10\" width=\"13\" y=\"8.5\" x=\"3.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8\" /></svg>",
        "mail": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"1.4,6.5 10,11 18.6,6.5\" /> <path d=\"M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z\" /></svg>",
        "menu": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"2\" y=\"4\" width=\"16\" height=\"1\" /> <rect x=\"2\" y=\"9\" width=\"16\" height=\"1\" /> <rect x=\"2\" y=\"14\" width=\"16\" height=\"1\" /></svg>",
        "minus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\" /> <line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\" /></svg>",
        "minus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect height=\"1\" width=\"18\" y=\"9\" x=\"1\" /></svg>",
        "more-vertical": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"10\" cy=\"3\" r=\"2\" /> <circle cx=\"10\" cy=\"10\" r=\"2\" /> <circle cx=\"10\" cy=\"17\" r=\"2\" /></svg>",
        "more": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"3\" cy=\"10\" r=\"2\" /> <circle cx=\"10\" cy=\"10\" r=\"2\" /> <circle cx=\"17\" cy=\"10\" r=\"2\" /></svg>",
        "move": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"4,5 1,5 1,9 2,9 2,6 4,6 \" /> <polygon points=\"1,16 2,16 2,18 4,18 4,19 1,19 \" /> <polygon points=\"14,16 14,19 11,19 11,18 13,18 13,16 \" /> <rect fill=\"none\" stroke=\"#000\" x=\"5.5\" y=\"1.5\" width=\"13\" height=\"13\" /> <rect x=\"1\" y=\"11\" width=\"1\" height=\"3\" /> <rect x=\"6\" y=\"18\" width=\"3\" height=\"1\" /></svg>",
        "nut": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"3.5\" /></svg>",
        "pagekit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19 \" /></svg>",
        "paint-bucket": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.42,2.33 L11.7,7.61\" /> <path d=\"M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z\" /></svg>",
        "pencil": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z\" /> <path fill=\"none\" stroke=\"#000\" d=\"M15.98,7.268 L13.851,5.148\" /></svg>",
        "phone-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z\" /> <circle cx=\"3.8\" cy=\"10.5\" r=\"0.8\" /></svg>",
        "phone": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z\" /> <circle cx=\"10.5\" cy=\"16.5\" r=\"0.8\" /></svg>",
        "pinterest": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1\" /></svg>",
        "play-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"8.5 7 13.5 10 8.5 13\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /></svg>",
        "play": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" points=\"6.5,5 14.5,10 6.5,15\" /></svg>",
        "plus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"5\" x2=\"9.5\" y2=\"14\" /> <line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\" /></svg>",
        "plus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"9\" y=\"1\" width=\"1\" height=\"17\" /> <rect x=\"1\" y=\"9\" width=\"17\" height=\"1\" /></svg>",
        "pull": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"11\" x2=\"9.5\" y2=\"2\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5\" /></svg>",
        "push": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"10\" x2=\"9.5\" y2=\"1\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5\" /></svg>",
        "question": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /> <circle cx=\"10.44\" cy=\"14.42\" r=\"1.05\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" d=\"M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75\" /></svg>",
        "quote-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z\" /> <path d=\"M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z\" /></svg>",
        "receiver": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611\" /></svg>",
        "refresh": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"9.9 2 12.79 4.89 9.79 7.9\" /></svg>",
        "reply": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z\" /></svg>",
        "rss": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"3.12\" cy=\"16.8\" r=\"1.85\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5\" /></svg>",
        "search": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\" /></svg>",
        "server": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"3\" y=\"3\" width=\"1\" height=\"2\" /> <rect x=\"5\" y=\"3\" width=\"1\" height=\"2\" /> <rect x=\"7\" y=\"3\" width=\"1\" height=\"2\" /> <rect x=\"16\" y=\"3\" width=\"1\" height=\"1\" /> <rect x=\"16\" y=\"10\" width=\"1\" height=\"1\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"9.9\" cy=\"17.4\" r=\"1.4\" /> <rect x=\"3\" y=\"10\" width=\"1\" height=\"2\" /> <rect x=\"5\" y=\"10\" width=\"1\" height=\"2\" /> <rect x=\"9.5\" y=\"14\" width=\"1\" height=\"2\" /> <rect x=\"3\" y=\"17\" width=\"6\" height=\"1\" /> <rect x=\"11\" y=\"17\" width=\"6\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"1.5\" width=\"17\" height=\"5\" /> <rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"8.5\" width=\"17\" height=\"5\" /></svg>",
        "settings": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"3.55\" rx=\"2.11\" ry=\"2.15\" /> <ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"15.55\" rx=\"2.11\" ry=\"2.15\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"13.15\" cy=\"9.55\" r=\"2.15\" /> <rect x=\"1\" y=\"3\" width=\"3\" height=\"1\" /> <rect x=\"10\" y=\"3\" width=\"8\" height=\"1\" /> <rect x=\"1\" y=\"9\" width=\"8\" height=\"1\" /> <rect x=\"15\" y=\"9\" width=\"3\" height=\"1\" /> <rect x=\"1\" y=\"15\" width=\"3\" height=\"1\" /> <rect x=\"10\" y=\"15\" width=\"8\" height=\"1\" /></svg>",
        "shrink": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"11 4 12 4 12 8 16 8 16 9 11 9\" /> <polygon points=\"4 11 9 11 9 16 8 16 8 12 4 12\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M12,8 L18,2\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2,18 L8,12\" /></svg>",
        "sign-in": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3\" /> <polygon points=\"9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5\" /></svg>",
        "sign-out": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5\" /> <polygon points=\"13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3\" /></svg>",
        "social": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.4\" y1=\"14\" x2=\"6.3\" y2=\"10.7\" /> <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.5\" y1=\"5.5\" x2=\"6.5\" y2=\"8.8\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"4.6\" r=\"2.3\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"14.8\" r=\"2.3\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"4.5\" cy=\"9.8\" r=\"2.3\" /></svg>",
        "soundcloud": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z\" /> <rect x=\"6\" y=\"6.5\" width=\"1.5\" height=\"8.5\" /> <rect x=\"3\" y=\"8\" width=\"1.5\" height=\"7\" /> <rect y=\"10\" width=\"1.5\" height=\"5\" /></svg>",
        "star": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27\" /></svg>",
        "strikethrough": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z\" /> <rect x=\"3\" y=\"10\" width=\"15\" height=\"1\" /></svg>",
        "table": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"1\" y=\"3\" width=\"18\" height=\"1\" /> <rect x=\"1\" y=\"7\" width=\"18\" height=\"1\" /> <rect x=\"1\" y=\"11\" width=\"18\" height=\"1\" /> <rect x=\"1\" y=\"15\" width=\"18\" height=\"1\" /></svg>",
        "tablet-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z\" /> <circle cx=\"3.7\" cy=\"10.5\" r=\"0.8\" /></svg>",
        "tablet": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z\" /> <circle cx=\"10.5\" cy=\"16.3\" r=\"0.8\" /></svg>",
        "tag": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z\" /> <circle cx=\"14\" cy=\"6\" r=\"1\" /></svg>",
        "thumbnails": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"3.5\" width=\"5\" height=\"5\" /> <rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"3.5\" width=\"5\" height=\"5\" /> <rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"11.5\" width=\"5\" height=\"5\" /> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"11.5\" width=\"5\" height=\"5\" /></svg>",
        "trash": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"6.5 3 6.5 1.5 13.5 1.5 13.5 3\" /> <polyline fill=\"none\" stroke=\"#000\" points=\"4.5 4 4.5 18.5 15.5 18.5 15.5 4\" /> <rect x=\"8\" y=\"7\" width=\"1\" height=\"9\" /> <rect x=\"11\" y=\"7\" width=\"1\" height=\"9\" /> <rect x=\"2\" y=\"3\" width=\"16\" height=\"1\" /></svg>",
        "triangle-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"5 7 15 7 10 12\" /></svg>",
        "triangle-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"12 5 7 10 12 15\" /></svg>",
        "triangle-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"8 5 13 10 8 15\" /></svg>",
        "triangle-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"5 13 10 8 15 13\" /></svg>",
        "tripadvisor": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z\" /></svg>",
        "tumblr": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z\" /></svg>",
        "tv": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect x=\"7\" y=\"16\" width=\"6\" height=\"1\" /> <rect fill=\"none\" stroke=\"#000\" x=\"0.5\" y=\"3.5\" width=\"19\" height=\"11\" /></svg>",
        "twitter": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74\" /></svg>",
        "uikit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3\" /> <polygon points=\"9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3\" /></svg>",
        "unlock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"8.5\" width=\"13\" height=\"10\" /> <path fill=\"none\" stroke=\"#000\" d=\"M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9\" /></svg>",
        "upload": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polyline fill=\"none\" stroke=\"#000\" points=\"5 8 9.5 3.5 14 8 \" /> <rect x=\"3\" y=\"17\" width=\"13\" height=\"1\" /> <line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"15\" x2=\"9.5\" y2=\"4\" /></svg>",
        "user": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.9\" cy=\"6.4\" r=\"4.4\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2\" /></svg>",
        "users": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"7.7\" cy=\"8.6\" r=\"3.5\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3\" /> <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1\" /></svg>",
        "video-camera": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <polygon points=\"18,6 18,14 12,10 \" /> <rect x=\"2\" y=\"5\" width=\"12\" height=\"10\" /></svg>",
        "vimeo": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z\" /></svg>",
        "warning": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <circle cx=\"10\" cy=\"14\" r=\"1\" /> <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\" /> <path d=\"M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z\" /></svg>",
        "whatsapp": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9\" /></svg>",
        "wordpress": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z\" /></svg>",
        "world": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill=\"none\" stroke=\"#000\" d=\"M1,10.5 L19,10.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M2.35,15.5 L17.65,15.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M2.35,5.5 L17.523,5.5\" /> <path fill=\"none\" stroke=\"#000\" d=\"M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z\" /> <circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10.5\" r=\"9\" /></svg>",
        "xing": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z\" /> <path d=\"M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z\" /></svg>",
        "yelp": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z\" /></svg>",
        "youtube": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z\" /></svg>"
    });

    }

    if (typeof window !== 'undefined' && window.UIkit) {
        window.UIkit.use(plugin);
    }

    return plugin;

})));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// window._ = require('lodash');
// window.Popper = require('popper.js').default;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(3);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(38)
/* template */
var __vue_template__ = __webpack_require__(39)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/epanel/auth/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ac3ed8b", Component.options)
  } else {
    hotAPI.reload("data-v-5ac3ed8b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 38 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Admin-Login",
  data: function data() {
    return {
      details: {
        email: "",
        password: ""
      }
    };
  },
  mounted: function mounted() {
    console.log("Component mounted.");
  },

  methods: {
    submit: function submit(form) {
      window.axios.post("/epanel/login", form).then(function () {
        window.location.reload();
      }).catch(function (val) {
        window.UIkit.notification("Unable to login!");
      });
    }
  }
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "admin-login-container" }, [
    _c("article", { staticClass: "uk-article" }, [
      _c("section", { staticClass: "uk-section" }, [
        _c(
          "div",
          {
            staticClass: "uk-card uk-card-default uk-width-1-2@m uk-margin-auto"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-body" }, [
              _c(
                "form",
                {
                  ref: "details",
                  staticClass: "uk-form uk-form-horizontal",
                  attrs: { action: "", id: "admin-login-form" }
                },
                [
                  _c("div", [
                    _c(
                      "label",
                      { staticClass: "uk-form-label", attrs: { for: "email" } },
                      [_vm._v("Email")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.email,
                            expression: "details.email"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: { type: "email", name: "email", id: "email" },
                        domProps: { value: _vm.details.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.details, "email", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-icon" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "password" }
                      },
                      [_vm._v("Password")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.password,
                            expression: "details.password"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "password",
                          name: "password",
                          id: "password"
                        },
                        domProps: { value: _vm.details.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "password",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-footer" }, [
              _c(
                "button",
                {
                  staticClass: "uk-button uk-button-primary",
                  attrs: { form: "admin-login-form" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.submit(_vm.details)
                    }
                  }
                },
                [_vm._v("Login")]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-card-header" }, [
      _c("h3", { staticClass: "uk-heading" }, [_vm._v("Admin Epanel Login")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ac3ed8b", module.exports)
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(41)
/* template */
var __vue_template__ = __webpack_require__(42)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/auth/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a3b4499", Component.options)
  } else {
    hotAPI.reload("data-v-1a3b4499", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Login",
  data: function data() {
    return {
      details: {
        email: "",
        password: ""
      }
    };
  },
  mounted: function mounted() {
    console.log("Component mounted.");
  },

  methods: {
    submit: function submit(form) {
      console.log(form);
      window.axios.post("/login", form).then(function () {
        window.location.reload();
      }).catch(function (val) {
        window.UIkit.notification("Incorrect Login Details");
      });
    }
  }
});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "uk-container login-container" }, [
    _c("article", { staticClass: "uk-article" }, [
      _c("section", { staticClass: "uk-section uk-section-default" }, [
        _c(
          "div",
          {
            staticClass: "uk-card uk-card-default uk-width-1-2@m uk-margin-auto"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-body" }, [
              _c(
                "form",
                {
                  ref: "details",
                  staticClass: "uk-form uk-form-horizontal",
                  attrs: { action: "", id: "login-form" }
                },
                [
                  _c("div", [
                    _c(
                      "label",
                      { staticClass: "uk-form-label", attrs: { for: "email" } },
                      [_vm._v("Email")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.email,
                            expression: "details.email"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: { type: "email", name: "email", id: "email" },
                        domProps: { value: _vm.details.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.details, "email", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-icon" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "password" }
                      },
                      [_vm._v("Password")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.password,
                            expression: "details.password"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "password",
                          name: "password",
                          id: "password"
                        },
                        domProps: { value: _vm.details.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "password",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-footer" }, [
              _c(
                "button",
                {
                  staticClass: "uk-button uk-button-primary",
                  attrs: { form: "login-form" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.submit(_vm.details)
                    }
                  }
                },
                [_vm._v("Login")]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-card-header" }, [
      _c("h3", { staticClass: "uk-heading" }, [_vm._v("Login")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1a3b4499", module.exports)
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(44)
/* template */
var __vue_template__ = __webpack_require__(45)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/auth/register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5564e1a3", Component.options)
  } else {
    hotAPI.reload("data-v-5564e1a3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var genders = ["male", "female", "others"];

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Register",
    props: {
        courses: Array
    },
    data: function data() {
        var _user;

        return {
            genders: genders,
            uploadPicture: false,
            user: (_user = {
                username: "",
                surname: "",
                firstname: "",
                othernames: "",
                email: "",
                password: "",
                password_confirmation: "",
                gender: "",
                courses: []
            }, _defineProperty(_user, "password", ""), _defineProperty(_user, "picture", []), _user)
        };
    },
    mounted: function mounted() {
        console.log("Component mounted.");
    },

    computed: {},
    methods: {
        toggleUpload: function toggleUpload() {
            this.uploadPicture = !this.uploadPicture;
            if (this.uploadPicture == false) {
                this.question.picture = [];
            }
        },
        fileChange: function fileChange() {
            this.user.picture = this.$refs.picture.files[0];
        },
        submit: function submit(form) {
            var formData = new FormData();
            /*
             *Add the form data we need to submit
             */
            Object.entries(form).forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                formData.append(key, value);
            });

            window.axios.post("/epanel/register/user", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(function (res) {
                return res.json;
            }).then(function (response) {
                if (response.status === "success") {
                    window.UIkit.notification(response.message);
                    window.location.reload;
                }
            }).catch(function (val) {
                //   if (response.status === "success") {
                //     UIkit.notification(response.message);
                //     window.location.reload;
                //   } else {
                //     UIkit.notification("Incorrect Login Details");
                //   }
            });
        }
    }
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "register-container" }, [
    _c("article", { staticClass: "uk-article uk-background-muted" }, [
      _c("section", { staticClass: "uk-section" }, [
        _c(
          "div",
          {
            staticClass: "uk-card uk-card-default uk-width-1-2@m uk-margin-auto"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-body" }, [
              _c(
                "form",
                {
                  ref: "user",
                  staticClass: "uk-form uk-form-horizontal",
                  attrs: {
                    action: "",
                    id: "register-form",
                    enctype: "multipart/form-data",
                    name: "myForm"
                  }
                },
                [
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "username" }
                      },
                      [_vm._v("Username: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.username,
                            expression: "user.username"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "text",
                          name: "username",
                          id: "username"
                        },
                        domProps: { value: _vm.user.username },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "username", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "surname" }
                      },
                      [_vm._v("Surname: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.surname,
                            expression: "user.surname"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "text",
                          name: "surname",
                          id: "surname",
                          required: ""
                        },
                        domProps: { value: _vm.user.surname },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "surname", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "firstname" }
                      },
                      [_vm._v("First Name: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.firstname,
                            expression: "user.firstname"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "text",
                          name: "firstname",
                          id: "firstname",
                          required: ""
                        },
                        domProps: { value: _vm.user.firstname },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "firstname", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "othernames" }
                      },
                      [_vm._v("Other Names: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.othernames,
                            expression: "user.othernames"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "text",
                          name: "othernames",
                          id: "othernames"
                        },
                        domProps: { value: _vm.user.othernames },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "othernames",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      { staticClass: "uk-form-label", attrs: { for: "email" } },
                      [_vm._v("Email: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.email,
                            expression: "user.email"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "email",
                          name: "email",
                          id: "email",
                          required: ""
                        },
                        domProps: { value: _vm.user.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "email", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c("fieldset", { staticClass: "uk-fieldset" }, [
                      _c("legend", { staticClass: "uk-legend" }, [
                        _vm._v("Gender")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "uk-flex uk-flex-column" },
                        _vm._l(_vm.genders, function(gender) {
                          return _c("div", { key: gender.index }, [
                            _c(
                              "label",
                              {
                                staticClass: "uk-form-label uk-text-capitalize",
                                attrs: { for: gender }
                              },
                              [_vm._v(_vm._s(gender) + " ")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "uk-form-controls" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.gender,
                                    expression: "user.gender"
                                  }
                                ],
                                staticClass: "uk-radio",
                                attrs: {
                                  type: "radio",
                                  name: "gender",
                                  id: gender,
                                  required: ""
                                },
                                domProps: {
                                  value: gender,
                                  checked: _vm._q(_vm.user.gender, gender)
                                },
                                on: {
                                  change: function($event) {
                                    _vm.$set(_vm.user, "gender", gender)
                                  }
                                }
                              })
                            ])
                          ])
                        })
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c("fieldset", [
                      _c("legend", [_vm._v("Courses")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "uk-flex uk-flex-column" },
                        _vm._l(_vm.courses, function(course) {
                          return _c("div", { key: course.index }, [
                            _c(
                              "label",
                              {
                                staticClass: "uk-form-label uk-text-capitalize",
                                attrs: { for: course.title }
                              },
                              [
                                _vm._v(
                                  _vm._s(course.title) +
                                    "\n                                            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "uk-form-controls" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.courses,
                                    expression: "user.courses"
                                  }
                                ],
                                staticClass: "uk-checkbox",
                                attrs: {
                                  type: "checkbox",
                                  name: "courses",
                                  id: course.title
                                },
                                domProps: {
                                  value: course.id,
                                  checked: Array.isArray(_vm.user.courses)
                                    ? _vm._i(_vm.user.courses, course.id) > -1
                                    : _vm.user.courses
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.user.courses,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = course.id,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            _vm.user,
                                            "courses",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            _vm.user,
                                            "courses",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(_vm.user, "courses", $$c)
                                    }
                                  }
                                }
                              })
                            ])
                          ])
                        })
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "password" }
                      },
                      [_vm._v("Password: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.password,
                            expression: "user.password"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "password",
                          name: "password",
                          id: "password",
                          required: ""
                        },
                        domProps: { value: _vm.user.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.user, "password", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "password_confirmation" }
                      },
                      [_vm._v("Confirm Password: ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.user.password_confirmation,
                            expression: "user.password_confirmation"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "password",
                          name: "password_confirmation",
                          id: "password_confirmation",
                          required: ""
                        },
                        domProps: { value: _vm.user.password_confirmation },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.user,
                              "password_confirmation",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "upload" }
                      },
                      [_vm._v("Upload Picture")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        staticClass: "uk-checkbox",
                        attrs: { type: "checkbox", id: "upload" },
                        domProps: { value: _vm.uploadPicture },
                        on: {
                          click: function($event) {
                            _vm.toggleUpload()
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm.uploadPicture === true
                      ? _c("div", [
                          _c(
                            "label",
                            {
                              staticClass: "uk-form-label",
                              attrs: { for: "Picture" }
                            },
                            [_vm._v("Picture: ")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "uk-form-controls" }, [
                            _c("input", {
                              ref: "picture",
                              attrs: {
                                type: "file",
                                name: "picture",
                                id: "picture",
                                accept: "image/*"
                              },
                              on: {
                                change: function($event) {
                                  _vm.fileChange()
                                }
                              }
                            })
                          ])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider-small" })
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-footer" }, [
              _c(
                "button",
                {
                  staticClass: "uk-button uk-button-primary",
                  attrs: { form: "login-form", type: "submit" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.submit(_vm.user)
                    }
                  }
                },
                [_vm._v("Register")]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-card-header" }, [
      _c("h3", { staticClass: "uk-heading" }, [_vm._v("Add New User")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5564e1a3", module.exports)
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(47)
/* template */
var __vue_template__ = __webpack_require__(48)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/epanel/courses/create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17755108", Component.options)
  } else {
    hotAPI.reload("data-v-17755108", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 47 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Create-Course-Form",
  data: function data() {
    return {
      course: {
        title: "",
        code: "",
        questions: 0,
        points: 1,
        duration: 0
      }
    };
  },
  mounted: function mounted() {
    console.log("Component mounted.");
  },

  methods: {
    submit: function submit(form) {
      window.axios.post("/epanel/courses", form).then(function (val) {
        return val.json();
      }).then(function (res) {
        if (res.status == "success") {
          console.log(res);
        }
      }).catch(function (error) {
        window.UIkit.notification("Unable to complete! Please try again");
      });
    }
  }
});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "courses-container" }, [
    _c("article", { staticClass: "uk-article" }, [
      _c("section", { staticClass: "uk-section" }, [
        _c(
          "div",
          {
            staticClass: "uk-card uk-card-default uk-width-1-2@m uk-margin-auto"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-body" }, [
              _c(
                "form",
                {
                  ref: "course",
                  staticClass: "uk-form uk-form-horizontal",
                  attrs: { id: "course-creation-form" }
                },
                [
                  _c("div", [
                    _c(
                      "label",
                      { staticClass: "uk-form-label", attrs: { for: "title" } },
                      [_vm._v("Title")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.course.title,
                            expression: "course.title"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: { type: "text", name: "title", id: "title" },
                        domProps: { value: _vm.course.title },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.course, "title", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      { staticClass: "uk-form-label", attrs: { for: "code" } },
                      [_vm._v("Code")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.course.code,
                            expression: "course.code"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: { type: "text", name: "code", id: "code" },
                        domProps: { value: _vm.course.code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.course, "code", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "questions" }
                      },
                      [_vm._v("No of Questions")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.course.questions,
                            expression: "course.questions"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "number",
                          name: "questions",
                          id: "questions"
                        },
                        domProps: { value: _vm.course.questions },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.course,
                              "questions",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "points" }
                      },
                      [_vm._v("Points Per Question")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.course.points,
                            expression: "course.points"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: { type: "number", name: "points", id: "points" },
                        domProps: { value: _vm.course.points },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.course, "points", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "duration" }
                      },
                      [_vm._v("Duration")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.course.duration,
                            expression: "course.duration"
                          }
                        ],
                        staticClass: "uk-input",
                        attrs: {
                          type: "number",
                          name: "duration",
                          id: "duration"
                        },
                        domProps: { value: _vm.course.duration },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.course,
                              "duration",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-footer" }, [
              _c(
                "button",
                {
                  staticClass: "uk-button uk-button-primary",
                  attrs: { form: "course-creation-form" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.submit(_vm.course)
                    }
                  }
                },
                [_vm._v("Create")]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-card-header" }, [
      _c("h3", { staticClass: "uk-heading" }, [_vm._v("Add New Course")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-17755108", module.exports)
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(50)
/* template */
var __vue_template__ = __webpack_require__(51)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/epanel/questions/upload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dfa095e8", Component.options)
  } else {
    hotAPI.reload("data-v-dfa095e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UploadQuestion",
  props: {
    courses: Array
  },
  data: function data() {
    return {
      questions: {
        course: 1,
        file: ""
      }
    };
  },
  mounted: function mounted() {
    console.log("Component mounted.");
  },

  methods: {
    fileChange: function fileChange() {
      this.questions.file = this.$refs.file.files[0];
    },
    upload: function upload(form) {
      var formData = new FormData();
      /*
        *Add the form data we need to submit
      */
      Object.entries(form).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        formData.append(key, value);
      });

      window.axios.post("/epanel/question", form).then(function (val) {
        return val.json();
      }).then(function (res) {
        if (res.status == "success") {
          console.log(res);
        }
      }).catch(function (error) {
        window.UIkit.notification("Unable to complete! Please try again");
      });
    }
  }
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "courses-container" }, [
    _c("article", { staticClass: "uk-article" }, [
      _c("section", { staticClass: "uk-section" }, [
        _c(
          "div",
          {
            staticClass: "uk-card uk-card-default uk-width-1-2@m uk-margin-auto"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-body" }, [
              _c(
                "form",
                {
                  ref: "uploadQuestions",
                  staticClass: "uk-form uk-form-horizontal",
                  attrs: { id: "upload-question-form" }
                },
                [
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "course" }
                      },
                      [_vm._v("Course")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.questions.course,
                              expression: "questions.course"
                            }
                          ],
                          staticClass: "uk-select",
                          attrs: { name: "course", id: "course" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.questions,
                                "course",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.courses, function(course) {
                          return _c(
                            "option",
                            {
                              key: course.index,
                              attrs: { name: course },
                              domProps: { value: course.id }
                            },
                            [_vm._v(_vm._s(course.title))]
                          )
                        })
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      { staticClass: "uk-form-label", attrs: { for: "file" } },
                      [_vm._v("File")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        ref: "uploadFile",
                        staticClass: "uk-input",
                        attrs: { type: "file", name: "file", id: "file" },
                        on: {
                          change: function($event) {
                            _vm.fileChange()
                          }
                        }
                      })
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-footer" }, [
              _c(
                "button",
                {
                  staticClass: "uk-button uk-button-primary",
                  attrs: { form: "upload-question-form" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.upload(_vm.question)
                    }
                  }
                },
                [_vm._v("Create")]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-card-header" }, [
      _c("h3", { staticClass: "uk-heading" }, [_vm._v("Upload Question")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dfa095e8", module.exports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(53)
/* template */
var __vue_template__ = __webpack_require__(54)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/epanel/questions/input.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d7d363e2", Component.options)
  } else {
    hotAPI.reload("data-v-d7d363e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UploadQuestion",
  props: {
    courses: Array
  },
  data: function data() {
    return {
      uploadPicture: false,
      question: {
        course: 1,
        text: "",
        a: "",
        b: "",
        c: "",
        d: "",
        answer: "",
        picture: []
      }
    };
  },
  mounted: function mounted() {},

  methods: {
    toggleUpload: function toggleUpload() {
      this.uploadPicture = !this.uploadPicture;
      if (this.uploadPicture == false) {
        this.question.picture = [];
      }
    },
    pictureChange: function pictureChange() {
      this.question.picture = this.$refs.picture.files[0];
    },
    upload: function upload(form) {
      var formData = new FormData();
      /*
                 *Add the form data we need to submit
                 */
      Object.entries(form).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        formData.append(key, value);
      });

      window.axios.post("/epanel/questions", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        console.log(res);
        if (res.data.status == "success") {
          UIkit.notification("" + res.data.message, "success");
        }
      }).catch(function (error) {
        console.log(error);
        UIkit.notification("Unable to complete! Please try again", "warning");
      });
    }
  }
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "courses-container" }, [
    _c("article", { staticClass: "uk-article" }, [
      _c("section", { staticClass: "uk-section" }, [
        _c(
          "div",
          {
            staticClass:
              "uk-card uk-card-default uk-width-1-2@m uk-margin-auto uk-card-hover"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-body" }, [
              _c(
                "form",
                {
                  ref: "uploadQuestions",
                  staticClass: "uk-form uk-form-horizontal",
                  attrs: { id: "upload-question-form" }
                },
                [
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "course" }
                      },
                      [_vm._v("Course")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.question.course,
                              expression: "question.course"
                            }
                          ],
                          staticClass: "uk-select",
                          attrs: { name: "course", id: "course" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.question,
                                "course",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.courses, function(course) {
                          return _c(
                            "option",
                            {
                              key: course.index,
                              attrs: { name: course },
                              domProps: { value: course.id }
                            },
                            [_vm._v(_vm._s(course.title))]
                          )
                        })
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "question" }
                      },
                      [_vm._v("Question")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls-text" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.question.text,
                            expression: "question.text"
                          }
                        ],
                        staticClass: "uk-textarea",
                        attrs: {
                          name: "question",
                          id: "question",
                          cols: "10",
                          rows: "5"
                        },
                        domProps: { value: _vm.question.text },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.question, "text", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "option-a" }
                      },
                      [_vm._v("Option A")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls-text" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.question.a,
                            expression: "question.a"
                          }
                        ],
                        staticClass: "uk-textarea",
                        attrs: {
                          name: "optionA",
                          id: "option-a",
                          cols: "10",
                          rows: "2"
                        },
                        domProps: { value: _vm.question.a },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.question, "a", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "option-b" }
                      },
                      [_vm._v("Option B")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls-text" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.question.b,
                            expression: "question.b"
                          }
                        ],
                        staticClass: "uk-textarea",
                        attrs: {
                          name: "optionB",
                          id: "option-b",
                          cols: "10",
                          rows: "2"
                        },
                        domProps: { value: _vm.question.b },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.question, "b", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "option-c" }
                      },
                      [_vm._v("Option C")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls-text" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.question.c,
                            expression: "question.c"
                          }
                        ],
                        staticClass: "uk-textarea",
                        attrs: {
                          name: "optionC",
                          id: "option-c",
                          cols: "10",
                          rows: "2"
                        },
                        domProps: { value: _vm.question.c },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.question, "c", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "option-d" }
                      },
                      [_vm._v("Option D")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls-text" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.question.d,
                            expression: "question.d"
                          }
                        ],
                        staticClass: "uk-textarea",
                        attrs: {
                          name: "optionD",
                          id: "option-d",
                          cols: "10",
                          rows: "2"
                        },
                        domProps: { value: _vm.question.d },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.question, "d", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c("fieldset", { staticClass: "uk-fieldset" }, [
                      _c("legend", { staticClass: "uk-legend" }, [
                        _vm._v(
                          "\n                                    Correct Option\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "uk-flex uk-flex-row uk-flex-wrap" },
                        [
                          _c(
                            "div",
                            { staticClass: "uk-flex uk-flex-row uk-flex-wrap" },
                            [
                              _c(
                                "label",
                                { attrs: { for: "correct-option-a" } },
                                [_vm._v("Option A")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "uk-form-controls" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.question.correct,
                                      expression: "question.correct"
                                    }
                                  ],
                                  staticClass: "uk-radio",
                                  attrs: {
                                    type: "radio",
                                    id: "correct-option-a",
                                    name: "correct",
                                    value: "a"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.question.correct, "a")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.$set(_vm.question, "correct", "a")
                                    }
                                  }
                                })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "uk-flex uk-flex-row uk-flex-wrap" },
                            [
                              _c(
                                "label",
                                { attrs: { for: "correct-option-b" } },
                                [_vm._v("Option B")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "uk-form-controls" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.question.correct,
                                      expression: "question.correct"
                                    }
                                  ],
                                  staticClass: "uk-radio",
                                  attrs: {
                                    type: "radio",
                                    id: "correct-option-b",
                                    name: "correct",
                                    value: "b"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.question.correct, "b")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.$set(_vm.question, "correct", "b")
                                    }
                                  }
                                })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "uk-flex uk-flex-row uk-flex-wrap" },
                            [
                              _c(
                                "label",
                                { attrs: { for: "correct-option-c" } },
                                [_vm._v("Option C")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "uk-form-controls" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.question.correct,
                                      expression: "question.correct"
                                    }
                                  ],
                                  staticClass: "uk-radio",
                                  attrs: {
                                    type: "radio",
                                    id: "correct-option-c",
                                    name: "correct",
                                    value: "c"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.question.correct, "c")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.$set(_vm.question, "correct", "c")
                                    }
                                  }
                                })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "uk-flex uk-flex-row uk-flex-wrap" },
                            [
                              _c(
                                "label",
                                { attrs: { for: "correct-option-d" } },
                                [_vm._v("Option D")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "uk-form-controls" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.question.correct,
                                      expression: "question.correct"
                                    }
                                  ],
                                  staticClass: "uk-radio",
                                  attrs: {
                                    type: "radio",
                                    id: "correct-option-d",
                                    name: "correct",
                                    value: "d"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.question.correct, "d")
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.$set(_vm.question, "correct", "d")
                                    }
                                  }
                                })
                              ])
                            ]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr", { staticClass: "uk-divider" }),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "label",
                      {
                        staticClass: "uk-form-label",
                        attrs: { for: "upload" }
                      },
                      [_vm._v("Upload Picture")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-form-controls" }, [
                      _c("input", {
                        staticClass: "uk-checkbox",
                        attrs: { type: "checkbox", id: "upload" },
                        domProps: { value: _vm.uploadPicture },
                        on: {
                          click: function($event) {
                            _vm.toggleUpload()
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _vm.uploadPicture === true
                      ? _c("div", [
                          _c(
                            "label",
                            {
                              staticClass: "uk-form-label",
                              attrs: { for: "picture" }
                            },
                            [_vm._v("File")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "uk-form-controls" }, [
                            _c("input", {
                              ref: "picture",
                              staticClass: "uk-input",
                              attrs: {
                                type: "file",
                                name: "picture",
                                id: "picture"
                              },
                              on: {
                                change: function($event) {
                                  _vm.pictureChange()
                                }
                              }
                            })
                          ])
                        ])
                      : _vm._e()
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "uk-card-footer" }, [
              _c(
                "button",
                {
                  staticClass: "uk-button uk-button-primary",
                  attrs: { form: "upload-question-form" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.upload(_vm.question)
                    }
                  }
                },
                [_vm._v("Create")]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "uk-card-header uk-card-primary" }, [
      _c("h3", { staticClass: "uk-heading" }, [_vm._v("Upload Question")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d7d363e2", module.exports)
  }
}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[14]);