/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");

$(document).ready(function () {
  (function initStockSlider() {
    initSlider($('.js-stock-slider'));
  })();

  (function activateServicesTab() {
    $('.services-tabs__list-item').on('click', function () {
      var activeSection = $(this).data('section');

      if (!$(this).hasClass('active')) {
        $('.services-tabs__list-item').removeClass('active');
        $(this).addClass('active');
        $('.services-tabs__section-item.active').fadeOut(150);
        $('.services-tabs__section-item').removeClass('active');
        setTimeout(function () {
          $('#' + activeSection).fadeIn(150).addClass('active');
        }, 150);
      }
    });
  })();

  (function switchedCustomCheckbox() {
    $('.checkbox-label').each(function () {
      if ($(this).find('.custom-checkbox').prop('checked')) {
        $(this).addClass('active');
      }
    });
    $('.checkbox-label').on('click', function () {
      var attrChecked = $(this).find('.custom-checkbox').prop('checked');

      if (attrChecked) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  })();

  (function addedPhoneMask() {
    $('.input-phone').mask('+7 (000) 000-00-00', {
      placeholder: "+7 ( _ _ _ ) _ _ _ - _ _ - _ _"
    });
  })();

  (function addValidation() {
    validationForm('.js-consultation-form', '.succes-block_good', '.succes-block_error');
  })();

  (function closesMessage() {
    $('.js-fill').on('click', function (e) {
      e.preventDefault();
      $('.form-input').prop('value', '');
      $('.succes-block_good').removeClass('show');
      $('.consultation-form').removeClass('hide-information');
    });
    $('.js-send').on('click', function (e) {
      e.preventDefault();
      $('.succes-block_error').removeClass('show');
      $('.consultation-form').removeClass('hide-information');
    });
  })();

  (function initedProducerSlider() {
    $('.js-producer-slider').on('init', function (slick) {
      $('.js-producer-slider .slider-arrow').wrapAll('<div class="slider-arrow-wrapper"></div>');
    });
    $('.js-producer-slider').slick({
      slidesToShow: 5,
      prevArrow: '<button type="button" class="slider-arrow slider-arrow_prev slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16.72" height="25.94" viewBox="0 0 16.72 25.94">\n' + '<defs>\n' + '    <style>\n' + '      .slider-arrow-path {\n' + '        fill: #29bdaa;\n' + '        fill-rule: evenodd;\n' + '      }\n' + '    </style>\n' + '  </defs>\n' + '  <path id="left" class="slider-arrow-path" d="M1433.54,1157L1420,1169.96l13.54,12.96,3.16-3.03-10.39-9.93,4.5-4.3,5.89-5.64Z" transform="translate(-1420 -1157)"/>\n' + '</svg></button>',
      nextArrow: '<button type="button" class="slider-arrow slider-arrow_next slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16.94" height="26.06" viewBox="0 0 16.94 26.06">\n' + '<defs>\n' + '    <style>\n' + '      .slider-arrow-path {\n' + '        fill: #29bdaa;\n' + '        fill-rule: evenodd;\n' + '      }\n' + '    </style>\n' + '  </defs>\n' + '  <path id="right" class="slider-arrow-path" d="M1479.89,1156l13.75,13.02-13.75,13.03-3.21-3.04,10.55-9.99-4.56-4.32-5.99-5.66Z" transform="translate(-1476.69 -1156)"/>\n' + '</svg>\n</button>'
    });
  })();

  (function initWorksSlider() {
    $('.js-work-slider').on('init', function (slick) {
      $('.js-work-slider .slider-arrow').wrapAll('<div class="slider-arrow-wrapper"></div>');
    });
    $('.js-work-slider').slick({
      slidesToShow: 1,
      fade: true,
      prevArrow: '<button type="button" class="slider-arrow slider-arrow_prev slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16.72" height="25.94" viewBox="0 0 16.72 25.94">\n' + '<defs>\n' + '    <style>\n' + '      .slider-arrow-path {\n' + '        fill: #29bdaa;\n' + '        fill-rule: evenodd;\n' + '      }\n' + '    </style>\n' + '  </defs>\n' + '  <path id="left" class="slider-arrow-path" d="M1433.54,1157L1420,1169.96l13.54,12.96,3.16-3.03-10.39-9.93,4.5-4.3,5.89-5.64Z" transform="translate(-1420 -1157)"/>\n' + '</svg></button>',
      nextArrow: '<button type="button" class="slider-arrow slider-arrow_next slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16.94" height="26.06" viewBox="0 0 16.94 26.06">\n' + '<defs>\n' + '    <style>\n' + '      .slider-arrow-path {\n' + '        fill: #29bdaa;\n' + '        fill-rule: evenodd;\n' + '      }\n' + '    </style>\n' + '  </defs>\n' + '  <path id="right" class="slider-arrow-path" d="M1479.89,1156l13.75,13.02-13.75,13.03-3.21-3.04,10.55-9.99-4.56-4.32-5.99-5.66Z" transform="translate(-1476.69 -1156)"/>\n' + '</svg>\n</button>'
    });
  })();

  (function initMap() {
    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map('map', {
        center: [52.25931248322663, 104.32997297063594],
        zoom: 16,
        controls: []
      }, {
        searchControlProvider: 'yandex#search'
      }),
          myPlacemark = new ymaps.Placemark([52.259414528620695, 104.32759653344877], {
        hintContent: 'Ratora Group',
        balloonContent: '<b>Ratora Group</b><br>' + 'Станиславского, 1'
      }, {
        iconLayout: 'default#image',
        iconImageHref: '../images/label.png',
        iconImageSize: [56, 76],
        iconImageOffset: [-23, -76]
      });
      myMap.geoObjects.add(myPlacemark);
    }
  })();

  (function upToTopBottom() {
    $('.arrow-top-button').on('click', function () {
      animatedScrollToPosition($('body, html'), 0, 300);
    });
  })();

  (function initBottomUp() {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 500) {
        $('.arrow-top').addClass('active');
      } else {
        $('.arrow-top').removeClass('active');
      }
    });
  })();

  (function initMenu() {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 112) {
        $('.header-wrapper').addClass('fixed');
      } else {
        $('.header-wrapper').removeClass('fixed');
      }
    });
  })();

  (function openCallbackPopup() {
    $('.callback-button').magnificPopup({
      type: 'inline',
      mainClass: 'callback-popup-form',
      callbacks: {
        beforeClose: function beforeClose() {
          console.log('aaa');

          if ($('.callback-popup-form .callback__title-error').hasClass('show')) {
            $('.callback-popup-form .callback__title-error').removeClass('show');
            $('.callback__form').removeClass('hide-information');
          } else if ($('.callback-popup-form .callback__title-good').hasClass('show')) {
            $('.callback-popup-form .callback__title-good').removeClass('show');
            $('.callback__form').removeClass('hide-information');
            $('.callback .form-input').prop('value', '');
          }
        }
      }
    });
  })();

  (function validatioCallbackForm() {
    validationForm('.js-callback-form', '.callback__title-good', '.callback__title-error');
  })();

  (function switchingFixedMenu() {
    var lastId,
        topMenu = $(".header-wrapper"),
        topMenuHeight = topMenu.outerHeight() + 15,
        menuItems = topMenu.find(".main-nav__item a"),
        scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));

      if (item.length) {
        return item;
      }
    }); // Bind click handler to menu items
    // so we can get a fancy scroll animation

    menuItems.click(function (e) {
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
      $('html, body').stop().animate({
        scrollTop: offsetTop
      }, 300);
      e.preventDefault();
    }); // Bind to scroll

    $(window).scroll(function () {
      // Get container scroll position
      var fromTop = $(this).scrollTop() + topMenuHeight; // Get id of current scroll item

      var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
      }); // Get the id of the current element

      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";

      if (lastId !== id) {
        lastId = id; // Set/remove active class

        menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
      }
    }); // $(window).scroll(function () {
    // 	$('.menu-section').each(function () {
    // 		if () {
    //
    // 		}
    // 	});
    // });
  })();

  (function upToSection() {
    $('.footer-menu__item a').on('click', function (e) {
      e.preventDefault();
      var thisSection = $(this).attr('href');
      var destination = $('' + thisSection + '').offset().top;
      animatedScrollToPosition($('body, html'), destination - 150, 300);
    });
  })();
});

function initSlider(initSelector) {
  initSelector.on('init', function (slick) {
    $('.slider-arrow').wrapAll('<div class="slider-arrow-wrapper"></div>');
  });
  initSelector.slick({
    fade: true,
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slider-arrow slider-arrow_prev slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16.72" height="25.94" viewBox="0 0 16.72 25.94">\n' + '<defs>\n' + '    <style>\n' + '      .slider-arrow-path {\n' + '        fill: #29bdaa;\n' + '        fill-rule: evenodd;\n' + '      }\n' + '    </style>\n' + '  </defs>\n' + '  <path id="left" class="slider-arrow-path" d="M1433.54,1157L1420,1169.96l13.54,12.96,3.16-3.03-10.39-9.93,4.5-4.3,5.89-5.64Z" transform="translate(-1420 -1157)"/>\n' + '</svg></button>',
    nextArrow: '<button type="button" class="slider-arrow slider-arrow_next slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16.94" height="26.06" viewBox="0 0 16.94 26.06">\n' + '<defs>\n' + '    <style>\n' + '      .slider-arrow-path {\n' + '        fill: #29bdaa;\n' + '        fill-rule: evenodd;\n' + '      }\n' + '    </style>\n' + '  </defs>\n' + '  <path id="right" class="slider-arrow-path" d="M1479.89,1156l13.75,13.02-13.75,13.03-3.21-3.04,10.55-9.99-4.56-4.32-5.99-5.66Z" transform="translate(-1476.69 -1156)"/>\n' + '</svg>\n</button>'
  });
}

function media(mediaQueryString, action) {
  'use strict';

  var handleMatchMedia = function handleMatchMedia(mediaQuery) {
    if (mediaQuery.matches) {
      //Попадает в запроc
      if (action && typeof action === 'function') {
        action();
      }
    }
  };

  var mql = window.matchMedia(mediaQueryString); //стандартный медиазапрос для смены режима просмотра

  handleMatchMedia(mql);
  mql.addListener(handleMatchMedia);
}

function validationForm(formInit, sectionGood, sectionBad) {
  // var thisTitle = $(formInit).siblings('.form-title');
  $(formInit).validate({
    submitHandler: function submitHandler(form) {
      $.ajax({
        type: $(form).attr('method'),
        url: $(form).attr('action'),
        data: new FormData(form),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function success(data) {
          if (parseInt(data.success) == 1) {
            $(formInit).addClass('hide-information');
            $(sectionGood).addClass('show');
          } else {
            $(formInit).addClass('hide-information');
            $(sectionBad).addClass('show');
          }
        },
        error: function error() {
          $(formInit).addClass('hide-information');
          $(sectionBad).addClass('show');
        }
      });
      return false;
    }
  });
}

function animatedScrollToPosition($selector, position, duration) {
  $($selector).animate({
    scrollTop: position
  }, duration);
  return false;
}

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(magnific_popup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery-mask-plugin */ "./node_modules/jquery-mask-plugin/dist/jquery.mask.js");
/* harmony import */ var jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery_mask_plugin__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_7__);








object_fit_images__WEBPACK_IMPORTED_MODULE_7___default()();
svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map