$(function() {

	// toogle menu button functionality
	$('.menu__toggle').click(function() {
		$('.menu').slideToggle();
		$(this).html(escape($(this).html()) == '%u2261' ? '&#x2715;' : '&#x2261;');
	});



	// iframe document manipulation on load
	const cartoonIframe = $('.portfolio__iframe');

	cartoonIframe.contents().ready(function () {
		const cartoonIframeHtml = cartoonIframe.contents().find("html");
		const cartoonIframeCanvas = cartoonIframeHtml.find(".canvas");

		// change cursor to pointer on cartoon click
		cartoonIframeHtml.css('cursor', 'pointer');

		// open cartoon in separate tab on click
		cartoonIframe.contents().click(function() {
			window.open(cartoonIframe.attr('src'));
		});


		//scale cartoon canvas so it would fit into iframe
		let scale = cartoonIframeHtml.width()/cartoonIframeCanvas.width();
		cartoonIframeHtml.css('transform', `scale(${scale})`);

	});
})
