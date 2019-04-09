import './vendor';
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
function validationForm(formInit, textGood, textBad) {
	var thisTitle = $(formInit).siblings('.form-title');
	$(formInit).validate({
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
						thisTitle.html(textGood);
					} else {
						$(formInit).addClass('hide-information');
						thisTitle.html(textBad);
					}
				},
				error: function() {
					$(formInit).addClass('hide-information');
					thisTitle.html(textBad);
				}
			});
			return false;
		},
	});
}
