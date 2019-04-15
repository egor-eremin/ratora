import './vendor';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import TweenMax from 'gsap/src/uncompressed/TweenMax';
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
		$('.input-phone').mask('+7 (000) 000-00-00', {placeholder: "+7 ( _ _ _ ) _ _ _ - _ _ - _ _"});
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
		$('.js-producer-slider').on('init', function(slick){
			$('.js-producer-slider .slider-arrow').wrapAll('<div class="slider-arrow-wrapper"></div>');
		});

		$('.js-producer-slider').slick({
			slidesToShow: 5,
			prevArrow: '<button type="button" class="slider-arrow slider-arrow_prev slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16.72" height="25.94" viewBox="0 0 16.72 25.94">\n' +
				'<defs>\n' +
				'    <style>\n' +
				'      .slider-arrow-path {\n' +
				'        fill: #29bdaa;\n' +
				'        fill-rule: evenodd;\n' +
				'      }\n' +
				'    </style>\n' +
				'  </defs>\n' +
				'  <path id="left" class="slider-arrow-path" d="M1433.54,1157L1420,1169.96l13.54,12.96,3.16-3.03-10.39-9.93,4.5-4.3,5.89-5.64Z" transform="translate(-1420 -1157)"/>\n' +
				'</svg></button>',
			nextArrow: '<button type="button" class="slider-arrow slider-arrow_next slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16.94" height="26.06" viewBox="0 0 16.94 26.06">\n' +
				'<defs>\n' +
				'    <style>\n' +
				'      .slider-arrow-path {\n' +
				'        fill: #29bdaa;\n' +
				'        fill-rule: evenodd;\n' +
				'      }\n' +
				'    </style>\n' +
				'  </defs>\n' +
				'  <path id="right" class="slider-arrow-path" d="M1479.89,1156l13.75,13.02-13.75,13.03-3.21-3.04,10.55-9.99-4.56-4.32-5.99-5.66Z" transform="translate(-1476.69 -1156)"/>\n' +
				'</svg>\n</button>',
		});
	})();

	(function initWorksSlider() {
		$('.js-work-slider').on('init', function(slick){
			$('.js-work-slider .slider-arrow').wrapAll('<div class="slider-arrow-wrapper"></div>');
		});
		$('.js-work-slider').slick({
			slidesToShow: 1,
			fade: true,
			prevArrow: '<button type="button" class="slider-arrow slider-arrow_prev slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16.72" height="25.94" viewBox="0 0 16.72 25.94">\n' +
				'<defs>\n' +
				'    <style>\n' +
				'      .slider-arrow-path {\n' +
				'        fill: #29bdaa;\n' +
				'        fill-rule: evenodd;\n' +
				'      }\n' +
				'    </style>\n' +
				'  </defs>\n' +
				'  <path id="left" class="slider-arrow-path" d="M1433.54,1157L1420,1169.96l13.54,12.96,3.16-3.03-10.39-9.93,4.5-4.3,5.89-5.64Z" transform="translate(-1420 -1157)"/>\n' +
				'</svg></button>',
			nextArrow: '<button type="button" class="slider-arrow slider-arrow_next slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16.94" height="26.06" viewBox="0 0 16.94 26.06">\n' +
				'<defs>\n' +
				'    <style>\n' +
				'      .slider-arrow-path {\n' +
				'        fill: #29bdaa;\n' +
				'        fill-rule: evenodd;\n' +
				'      }\n' +
				'    </style>\n' +
				'  </defs>\n' +
				'  <path id="right" class="slider-arrow-path" d="M1479.89,1156l13.75,13.02-13.75,13.03-3.21-3.04,10.55-9.99-4.56-4.32-5.99-5.66Z" transform="translate(-1476.69 -1156)"/>\n' +
				'</svg>\n</button>',
		});
	})();

	(function initMap() {
		ymaps.ready(init);

		function init() {
			var myMap = new ymaps.Map('map', {
					center: [52.25931248322663,104.32997297063594],
					zoom: 16,
					controls: []
				}, {
					searchControlProvider: 'yandex#search'
				}),

				myPlacemark  = new ymaps.Placemark([52.259414528620695,104.32759653344877], {
					hintContent: 'Ratora Group',
					balloonContent: '<b>Ratora Group</b><br>' +
						'Станиславского, 1'
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
			if($(this).scrollTop() > 500) {
				$('.arrow-top').addClass('active');
			} else {
				$('.arrow-top').removeClass('active');
			}
		});
	})();

	(function openCallbackPopup() {
		$('.callback-button').magnificPopup({
			type: 'inline',
			mainClass: 'callback-popup-form',
			focus: '#callback-user',
			callbacks: {
				beforeClose: function () {
					if ($('.callback-popup-form .callback__title-error').hasClass('show')) {
						$('.callback-popup-form .callback__title-error').removeClass('show');
						$('.callback__form').removeClass('hide-information');
					} else if ($('.callback-popup-form .callback__title-good').hasClass('show')) {
						$('.callback-popup-form .callback__title-good').removeClass('show');
						$('.callback__form').removeClass('hide-information');
						$('.callback .form-input').prop('value', '');
					}
				}
			},
		});
	})();

	(function validatioCallbackForm() {
		validationForm('.js-callback-form', '.callback__title-good', '.callback__title-error');
	})();
	(function switchingFixedMenu() {

		var lastId,
			topMenu = $(".header-wrapper"),
			topMenuHeight = topMenu.outerHeight()+15,
			menuItems = topMenu.find(".main-nav__item a"),
			scrollItems = menuItems.map(function(){
				var item = $($(this).attr("href"));
				if (item.length) { return item; }
			});

// Bind click handler to menu items
// so we can get a fancy scroll animation
		menuItems.click(function(e){
			var href = $(this).attr("href"),
				offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
			$('html, body').stop().animate({
				scrollTop: offsetTop
			}, 300);
			e.preventDefault();
		});

// Bind to scroll
		$(window).scroll(function(){
			// Get container scroll position
			var fromTop = $(this).scrollTop()+topMenuHeight;

			// Get id of current scroll item
			var cur = scrollItems.map(function(){
				if ($(this).offset().top < fromTop)
					return this;
			});
			// Get the id of the current element
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : "";

			if (lastId !== id) {
				lastId = id;
				// Set/remove active class
				menuItems
					.parent().removeClass("active")
					.end().filter("[href='#"+id+"']").parent().addClass("active");
			}
		});

		// $(window).scroll(function () {
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
	(function animateFirstScreen() {
		var controller = new ScrollMagic.Controller();
		var scene = new ScrollMagic.Scene({
			triggerElement: ".stock-slider",
			duration: 200
		})
			.setTween(new TweenMax.to('.main-header', .5, {css: {opacity: '0'}}))
			.addTo(controller);
	})();

	media ('all and (min-width: 1169px)', function () {
		(function initMenu() {
			$(window).on('scroll', function () {
				if($(this).scrollTop() > 112) {
					$('.fixed-menu').addClass('show');
				} else {
					$('.fixed-menu').removeClass('show');
				}
			});
		})();
	});
	media ('all and (max-width: 1170px)', function () {
		$('.fixed-menu').removeClass('show');
	});
});

function initSlider(initSelector) {
	initSelector.on('init', function(slick){
		$('.slider-arrow').wrapAll('<div class="slider-arrow-wrapper"></div>');
	});
	initSelector.slick({
		fade: true,
		arrows: true,
		dots: true,
		prevArrow: '<button type="button" class="slider-arrow slider-arrow_prev slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16.72" height="25.94" viewBox="0 0 16.72 25.94">\n' +
			'<defs>\n' +
			'    <style>\n' +
			'      .slider-arrow-path {\n' +
			'        fill: #29bdaa;\n' +
			'        fill-rule: evenodd;\n' +
			'      }\n' +
			'    </style>\n' +
			'  </defs>\n' +
			'  <path id="left" class="slider-arrow-path" d="M1433.54,1157L1420,1169.96l13.54,12.96,3.16-3.03-10.39-9.93,4.5-4.3,5.89-5.64Z" transform="translate(-1420 -1157)"/>\n' +
			'</svg></button>',
		nextArrow: '<button type="button" class="slider-arrow slider-arrow_next slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16.94" height="26.06" viewBox="0 0 16.94 26.06">\n' +
			'<defs>\n' +
			'    <style>\n' +
			'      .slider-arrow-path {\n' +
			'        fill: #29bdaa;\n' +
			'        fill-rule: evenodd;\n' +
			'      }\n' +
			'    </style>\n' +
			'  </defs>\n' +
			'  <path id="right" class="slider-arrow-path" d="M1479.89,1156l13.75,13.02-13.75,13.03-3.21-3.04,10.55-9.99-4.56-4.32-5.99-5.66Z" transform="translate(-1476.69 -1156)"/>\n' +
			'</svg>\n</button>',
	});
}
function media(mediaQueryString, action){
	'use strict';
	var handleMatchMedia = function (mediaQuery) {
		if (mediaQuery.matches) { //Попадает в запроc
			if (action  && typeof(action) === 'function') {
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
	$(formInit)	.validate({
		submitHandler: function(form) {
			$.ajax({
				type: $(form).attr('method'),
				url: $(form).attr('action'),
				data: new FormData(form),

				cache: false,
				contentType: false,
				processData: false,

				dataType: 'json',
				success: function (data) {
					if(parseInt(data.success) == 1) {
						$(formInit).addClass('hide-information');
						$(sectionGood).addClass('show');
					} else {
						$(formInit).addClass('hide-information');
						$(sectionBad).addClass('show');
					}
				},
				error: function() {
					$(formInit).addClass('hide-information');
					$(sectionBad).addClass('show');
				}
			});
			return false;
		},
	});
}
function animatedScrollToPosition($selector, position, duration){
	$($selector).animate({
		scrollTop: position
	}, duration);
	return false;
}
