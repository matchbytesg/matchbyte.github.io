$(function() {
	initializeSlickSlider();

	initializeCookieConsent();

	validForm();

	/**
	 * Right Side Menu - Close when click outside
	 */
	$('.header-nav-right-wrapper').click(function(e) {
		var $menu = $('.header-nav-right-content');

		if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
			$('#navi-toggle').prop('checked', false);
		}
	});

	/**
	 * Quote Form - Display and Hide
	 */

	$('.request-quote-btn-js').click(function() {
		$('#navi-toggle').prop('checked', false);
		$('.quote-form-wrapper-js').addClass('quote-form--open');
	});

	$('header, .main-content, .quote-form-close-btn-js').click(function(e) {
		var $requestQuoteBtn = $('.request-quote-btn-js');
		if (!$requestQuoteBtn.is(e.target) && $requestQuoteBtn.has(e.target).length === 0) {
			$('.quote-form-wrapper-js').removeClass('quote-form--open');
		}
	});
});

function initializeSlickSlider() {
	$('.banner-main').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		lazyLoad: 'ondemand'
	});
}

function initializeCookieConsent() {
	var cookieConsentMessage =
		'<div class="cookie-consent-msg"><h3>This website uses cookies</h3>\
	<p>We use cookies to personalise content and ads, to provide social media features and to analyze our traffic.</p>\
	<p>We also share information about your use of our site with social media, \
	advertising and analytics partners who may combine it with other information that you\'ve provided to them or that they\'ve \
	collected from your use of their services consent to our cookies if you continue to use this website.</p></div>';
	window.cookieconsent.initialise({
		cookie: {
			domain: 'matchbyte.sg'
		},
		palette: {
			popup: {
				background: 'rgba(0, 0, 0, .7)',
				text: '#ffffff'
			},
			button: {
				background: '#4791b1',
				text: '#ffffff'
			}
		},
		theme: 'classic',
		showLink: false,
		content: {
			header: 'This website uses cookies',
			message: cookieConsentMessage,
			dismiss: 'I ACCEPT'
		}
	});
}

function validForm() {
	var formElement = document.querySelector('form')
	ValidForm(formElement, {
		errorPlacement: 'after'
	});
}
