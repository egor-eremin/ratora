import './vendor';
$(document).ready(function () {

	(function initStockSlider() {
		$('.js-stock-slider').slick({
			fade: false,
			arrows: false,
			dots: true,
		});
	})();

});

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
