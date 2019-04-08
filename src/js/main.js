import './vendor';
$(document).ready(function () {

	(function initStockSlider() {

		initSlider($('.js-stock-slider'));
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
