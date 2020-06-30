module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2085":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbs_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("47f1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbs_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbs_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumbs_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "47f1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "76c5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "d227":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("76c5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Header", function() { return /* reexport */ header_header; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12a33afb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/header.vue?vue&type=template&id=298eb75b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['header', _vm.scrolled ? 'scrolled': '', _vm.hasBreadcrumbs ? 'breadcrumbs' : '']},[(_vm.isLoggedIn)?_c('a',{on:{"click":_vm.logout}},[_vm._v("Logout")]):_vm._e(),_c('svg',{staticClass:"logo",attrs:{"viewBox":"0 0 190 48","version":"1.1","id":"svg21","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{staticStyle:{"fill":"#003366"},attrs:{"id":"path-1","d":"M 74.702635,18.339881 H 71.102551 V 9.8164359 C 71.125391,9.0103914 71.000975,8.3446633 70.7263,7.8165957 70.454479,7.2902986 69.881236,7.0161579 69.013484,6.9955014 c -0.653782,0.013279 -1.274507,0.1586121 -1.860973,0.4348185 -0.585413,0.2779769 -1.11493,0.6064146 -1.58825,0.9925428 0.02569,0.1381032 0.03516,0.3060107 0.0293,0.5037225 V 18.339881 H 61.962975 V 9.8763397 C 61.986716,9.068082 61.864104,8.3930584 61.591532,7.8464 61.320463,7.3015121 60.75864,7.0182236 59.905162,6.9955014 59.249727,7.0087806 58.631106,7.1541135 58.043438,7.4303199 57.457123,7.7082968 56.927756,8.0367345 56.454437,8.4228627 V 18.339881 H 52.822948 V 4.294522 h 3.057344 l 0.361977,1.5428899 c 1.578784,-1.2163703 3.204299,-1.8415233 4.871886,-1.8694095 0.897354,0.00546 1.662329,0.1922526 2.297178,0.5633311 0.635,0.3712261 1.121692,0.8840964 1.456322,1.5445129 0.842809,-0.6975981 1.706956,-1.2237476 2.590786,-1.5762353 0.885784,-0.3544058 1.726189,-0.5316087 2.524221,-0.5316087 0.829737,-0.0093 1.59982,0.1361851 2.312655,0.4346709 0.712684,0.3005515 1.288781,0.8038313 1.728893,1.5130856 0.439812,0.7088116 0.665353,1.6731731 0.678425,2.8933796 v 9.5307425"}}),_c('path',{staticStyle:{"fill":"#003366"},attrs:{"id":"path-2","d":"M 89.598935,9.7396972 C 89.574142,8.9506205 89.338684,8.2477107 88.89166,7.628017 88.444786,7.0127496 87.764558,6.6857874 86.845417,6.65436 85.959633,6.6838693 85.272643,7.0068478 84.780241,7.6187216 84.287988,8.2286773 84.039157,8.9360134 84.030292,9.7396972 Z m 3.752447,2.5262848 h -9.228981 c 0.0562,1.05584 0.457242,1.904673 1.206289,2.546056 0.747995,0.640203 1.687873,0.970116 2.81783,0.988707 0.674968,0 1.307864,-0.08218 1.906351,-0.244189 0.599087,-0.165547 1.203584,-0.410178 1.815594,-0.736698 l 0.87827,2.286965 c -0.813508,0.54474 -1.668789,0.940312 -2.569749,1.1845 -0.897655,0.244632 -1.779532,0.364144 -2.634963,0.35839 -1.660225,-0.01859 -3.01452,-0.373144 -4.063937,-1.061447 -1.047464,-0.690368 -1.819952,-1.587744 -2.314157,-2.695963 -0.494356,-1.105858 -0.737628,-2.299801 -0.733721,-3.577846 0.0035,-1.3525553 0.263857,-2.5801391 0.778348,-3.6824563 0.515993,-1.1024647 1.257227,-1.9831676 2.224752,-2.6418135 0.969629,-0.6565803 2.13685,-0.9943134 3.503467,-1.0109861 1.962398,0.029804 3.515638,0.6921389 4.66032,1.9870038 1.14378,1.2945697 1.731147,3.048008 1.754287,5.2606101 z"}}),_c('path',{staticStyle:{"fill":"#003366"},attrs:{"id":"path-3","d":"m 47.089605,11.529638 c -0.0021,1.074431 -0.172799,2.070958 -0.51404,2.982498 -0.342292,0.914343 -0.845965,1.701945 -1.514172,2.362213 -1.285175,1.313456 -3.011064,1.984496 -5.174209,2.018284 -2.021751,-0.01859 -3.66695,-0.602136 -4.93169,-1.75152 -0.715238,-0.658794 -1.261134,-1.454953 -1.639639,-2.389805 -0.377454,-0.934705 -0.568284,-1.968118 -0.570238,-3.103928 0.0039,-1.104678 0.185271,-2.1175819 0.543642,-3.0412207 0.360023,-0.9196551 0.873162,-1.7180272 1.543773,-2.3931983 1.286377,-1.28734 2.981012,-1.9496746 5.083753,-1.9908399 2.224752,0.033936 3.980242,0.7089591 5.265117,2.0187261 1.257227,1.3468011 1.892227,3.1118955 1.907703,5.2887908 z m -3.721945,0.02774 C 43.360147,10.188297 43.056622,9.0970453 42.451374,8.2874596 41.847628,7.477874 40.983933,7.0632694 39.856681,7.0451212 c -1.14889,0.02405 -2.007476,0.4494255 -2.571703,1.277602 -0.566481,0.8264059 -0.84867,1.9031978 -0.84867,3.2346538 0.01022,1.387819 0.317199,2.492644 0.926504,3.313001 0.611259,0.820947 1.4721,1.240863 2.585227,1.263437 1.134615,-0.02803 1.989295,-0.459163 2.559382,-1.298701 0.572191,-0.837471 0.858286,-1.930641 0.860239,-3.277737 z"}}),_c('path',{staticStyle:{"fill":"#003366"},attrs:{"id":"path-4","d":"m 112.06357,18.343628 h -3.63059 v -8.256976 c 0.0245,-0.7645841 -0.0953,-1.4548049 -0.36904,-2.0743511 -0.26986,-0.6211693 -0.85558,-0.9476888 -1.75278,-0.9848705 -0.63455,0.00915 -1.25993,0.1531529 -1.87029,0.4311298 -0.61216,0.2760588 -1.19727,0.628399 -1.7603,1.0539221 V 18.343628 H 99.049985 V 4.2944334 h 3.086945 l 0.39353,1.5150037 c 0.76257,-0.5693805 1.55114,-1.0186585 2.36465,-1.34326 0.81155,-0.3265196 1.69749,-0.4929516 2.65945,-0.4982632 0.74123,-0.00723 1.45242,0.1493166 2.1364,0.4722951 0.68474,0.3206178 1.24686,0.8522265 1.68637,1.5929081 0.44282,0.7386159 0.66881,1.7351425 0.68624,2.9829401 v 9.3275708"}}),_c('path',{staticStyle:{"fill":"#003366"},attrs:{"id":"path-5","d":"m 127.11835,17.136893 c -0.76062,0.518477 -1.57368,0.900622 -2.43888,1.146876 -0.86489,0.24655 -1.65556,0.367685 -2.37426,0.365767 -1.25842,-0.01667 -2.1651,-0.330061 -2.72181,-0.932639 -0.55716,-0.60612 -0.82899,-1.393573 -0.81757,-2.361771 V 1.0707423 L 122.39853,0 v 4.3055437 h 4.44604 l -1.05693,2.6756015 h -3.38911 v 7.0679028 c -0.017,1.08225 0.43695,1.6174 1.35865,1.602793 0.4643,-0.0094 0.90922,-0.0931 1.33476,-0.251713 0.42388,-0.159055 0.77549,-0.33434 1.05888,-0.520396 l 0.96753,2.257161"}}),_c('path',{staticStyle:{"fill":"#003366"},attrs:{"id":"path-6","d":"m 144.98639,18.355004 h -2.99574 l -0.63485,-1.397557 c -0.50187,0.461082 -1.11793,0.854588 -1.85556,1.180812 -0.73372,0.32652 -1.57939,0.498558 -2.53174,0.511395 -0.65002,0.01859 -1.34768,-0.119512 -2.09087,-0.412539 -0.74168,-0.290813 -1.38014,-0.833636 -1.91431,-1.626549 -0.53403,-0.792617 -0.81156,-1.9361 -0.83845,-3.423217 V 4.3056617 h 3.63104 v 8.6730563 c 0,0.886015 0.20901,1.579777 0.62913,2.081876 0.41998,0.505346 1.06986,0.761191 1.94422,0.768126 0.59308,-0.01269 1.12365,-0.139432 1.59351,-0.378456 0.46731,-0.236812 0.85528,-0.496345 1.16106,-0.779782 V 4.3056617 h 3.63104 V 14.463475 c -0.004,1.065136 0.0111,1.896853 0.0475,2.490579 0.032,0.596824 0.10819,1.061299 0.22404,1.40095"}}),_c('path',{staticStyle:{"fill":"#003366"},attrs:{"id":"path-7","d":"m 173.18379,18.339881 h -3.60023 V 9.8164359 c 0.0225,-0.8060445 -0.10278,-1.4717726 -0.3761,-1.9998402 -0.27423,-0.5262971 -0.84431,-0.8004378 -1.71267,-0.8210943 -0.65438,0.013279 -1.27601,0.1586121 -1.86097,0.4348185 -0.58601,0.2779769 -1.11628,0.6064146 -1.58945,0.9925428 0.0268,0.1381032 0.0343,0.3060107 0.0304,0.5037225 v 9.4132958 h -3.63059 V 9.8763397 c 0.0228,-0.8082577 -0.0987,-1.4832813 -0.37264,-2.0299397 -0.26987,-0.5448879 -0.83244,-0.8281764 -1.68787,-0.8508986 -0.65394,0.013279 -1.27391,0.1586121 -1.85887,0.4348185 -0.58572,0.2779769 -1.11583,0.6064146 -1.5896,0.9925428 v 9.9170183 h -3.63209 V 4.294522 h 3.05839 l 0.36123,1.5428899 c 1.57953,-1.2163703 3.20505,-1.8415233 4.87354,-1.8694095 0.89374,0.00546 1.66142,0.1922526 2.29627,0.5633311 0.635,0.3712261 1.11779,0.8840964 1.45602,1.5445129 0.84236,-0.6975981 1.70726,-1.2237476 2.58899,-1.5762353 0.88593,-0.3544058 1.72784,-0.5316087 2.52482,-0.5316087 0.83049,-0.0093 1.60057,0.1361851 2.31491,0.4346709 0.71118,0.3005515 1.28683,0.8038313 1.72589,1.5130856 0.44116,0.7088116 0.6676,1.6731731 0.68067,2.8933796 v 9.5307425"}}),_c('g',{staticClass:"m-wrapper",attrs:{"transform":"translate(0,4) scale(0.89)"}},[_c('path',{staticStyle:{"position":"relative"},attrs:{"id":"app-bar-logo__path","d":"M30.4342647,2.22654989 C29.9431934,1.41901386 29.305141,0.858803223 28.5235114,0.514846939 C27.7332177,0.176483441 26.8872259,-9.76996262e-14 25.962019,-9.76996262e-14 C25.0785857,0.0205068787 24.1474996,0.225264955 23.1956815,0.627945482 C22.2339614,1.00980842 21.3378413,1.57250474 20.3761213,2.22654989 C19.8831934,1.41901386 19.2649448,0.858803223 18.4752699,0.514846939 C17.6831196,0.176483441 16.824441,-9.76996262e-14 15.9094454,-9.76996262e-14 C15.0284876,0.0205068787 14.0946166,0.225264955 13.1285645,0.627945482 C12.1792218,1.00980842 11.2796979,1.57250474 10.3099326,2.22654989 C9.83588016,1.41901386 9.21206176,0.858803223 8.40010766,0.514846939 C7.62126296,0.176483441 6.76970133,-9.76996262e-14 5.84604165,-9.76996262e-14 C4.98117437,0.0205068787 4.04451847,0.225264955 3.07134939,0.627945482 C2.37141029,0.91100255 1.69096552,1.29131194 1,1.73593835 L1,5.0279138 C1.52170527,4.60565853 2.10065578,4.25300236 2.72973455,3.93545645 C3.37676048,3.61604628 4.05968072,3.45292338 4.78932546,3.44111639 C5.75073606,3.45944829 6.36372428,3.76425508 6.67934668,4.36827587 C6.98939928,4.96670388 7.11688598,5.722662 7.09862939,6.62962531 L7.09862939,16.2507692 L11.0661887,16.2507692 L11.0661887,5.49242568 C11.0661887,5.3330313 11.0661887,5.18264752 11.0562868,5.0279138 C11.5708751,4.61125131 12.1532294,4.25579875 12.7934478,3.93545645 C13.4509944,3.61604628 14.1243222,3.45292338 14.8384953,3.44111639 C15.806404,3.45944829 16.4373394,3.76425508 16.7427505,4.36827587 C17.041354,4.96670388 17.188335,5.722662 17.1487275,6.62962531 L17.1487275,16.2507692 L21.1323773,16.2507692 L21.1323773,5.49242568 C21.1323773,5.3330313 21.1100981,5.18264752 21.1100981,5.0279138 C21.6237581,4.61125131 22.207969,4.25579875 22.8497346,3.93545645 C23.4877869,3.61604628 24.1744204,3.45292338 24.9028274,3.44111639 C25.8546455,3.45944829 26.4821771,3.76425508 26.7956335,4.36827587 C27.094237,4.96670388 27.2375048,5.722662 27.1982068,6.62962531 L27.1982068,16.2507692 L31.18,16.2507692 L31.18,5.49242568 C31.1654566,4.11442557 30.9200757,3.01761827 30.4342647,2.22654989"}})])]),(_vm.hasBreadcrumbs)?_c('div',{class:['breadcrumbs-container', _vm.scrolled ? '' : 'container']},[_c('Breadcrumbs',{attrs:{"breadcrumbs":_vm.breadcrumbs}})],1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/header/header.vue?vue&type=template&id=298eb75b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"12a33afb-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumbs/breadcrumbs.vue?vue&type=template&id=49b2aa22&
var breadcrumbsvue_type_template_id_49b2aa22_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['breadcrumbs', 'container']},_vm._l((_vm.breadcrumbs),function(crumb){return _c('a',{key:crumb.name,attrs:{"href":crumb.href}},[_vm._v(_vm._s(crumb.name))])}),0)}
var breadcrumbsvue_type_template_id_49b2aa22_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/breadcrumbs/breadcrumbs.vue?vue&type=template&id=49b2aa22&

// CONCATENATED MODULE: ./src/components/breadcrumbs/breadcrumbs.js
/* harmony default export */ var breadcrumbs = ({
  props: ['breadcrumbs']
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/breadcrumbs/breadcrumbs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var breadcrumbsvue_type_script_lang_js_ = (breadcrumbs);
// CONCATENATED MODULE: ./src/components/breadcrumbs/breadcrumbs.vue?vue&type=script&lang=js&
 /* harmony default export */ var breadcrumbs_breadcrumbsvue_type_script_lang_js_ = (breadcrumbsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/breadcrumbs/breadcrumbs.vue?vue&type=style&index=0&lang=sass&
var breadcrumbsvue_type_style_index_0_lang_sass_ = __webpack_require__("2085");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/breadcrumbs/breadcrumbs.vue






/* normalize component */

var component = normalizeComponent(
  breadcrumbs_breadcrumbsvue_type_script_lang_js_,
  breadcrumbsvue_type_template_id_49b2aa22_render,
  breadcrumbsvue_type_template_id_49b2aa22_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var breadcrumbs_breadcrumbs = (component.exports);
// CONCATENATED MODULE: ./src/components/header/header.js

/* harmony default export */ var header = ({
  components: {
    Breadcrumbs: breadcrumbs_breadcrumbs
  },
  data: function data() {
    return {
      scrolled: window.pageYOffset > 0,
      breadcrumbs: [{
        name: 'Home',
        href: '/'
      }, {
        name: 'Investments and Savings',
        href: '/investments'
      }]
    };
  },
  computed: {
    isLoggedIn: function isLoggedIn() {
      if (this.$store) {
        return this.$store.getters.isLoggedIn;
      } else {
        return false;
      }
    },
    hasBreadcrumbs: function hasBreadcrumbs() {
      return this.breadcrumbs && this.breadcrumbs.length > 0;
    }
  },
  created: function created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function handleScroll() {
      this.scrolled = window.pageYOffset > 0;
    },
    logout: function logout() {
      var _this = this;

      if (this.$store) {
        this.$store.dispatch('logout').then(function () {
          _this.$router.push('/login');
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var headervue_type_script_lang_js_ = (header);
// CONCATENATED MODULE: ./src/components/header/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var header_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/header/header.vue?vue&type=style&index=0&lang=sass&
var headervue_type_style_index_0_lang_sass_ = __webpack_require__("d227");

// CONCATENATED MODULE: ./src/components/header/header.vue






/* normalize component */

var header_component = normalizeComponent(
  header_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var header_header = (header_component.exports);
// CONCATENATED MODULE: ./src/components.js


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
//# sourceMappingURL=mobs-components.common.js.map