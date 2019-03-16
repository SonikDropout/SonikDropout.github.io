$(function () {

	// toogle menu button functionality
	$('.menu__toggle').click(function () {
		$('.menu').slideToggle();
		$(this).html(escape($(this).html()) == '%u2261' ? '&#x2715;' : '&#x2261;');
	});



	// iframe document manipulation on load
	const cartoonIframe = $('.portfolio__iframe');

	// open cartoon in separate tab on click
	cartoonIframe.contents().click(function () {
		window.open(cartoonIframe.attr('src'));
	});

	cartoonIframe.contents().ready(function () {
		const cartoonIframeHtml = cartoonIframe.contents().find("html");
		const cartoonIframeCanvas = cartoonIframeHtml.find(".canvas");

		// change cursor to pointer on cartoon click
		cartoonIframeHtml.css('cursor', 'pointer');

		//scale cartoon canvas so it would fit into iframe
		let scale = cartoonIframeHtml.width() / cartoonIframeCanvas.width();
		cartoonIframeHtml.css('transform', `scale(${scale})`);

	});


	// form validation
	$('.contactsForm').submit(function (event) {
		let isAllFieldsValid = true;

		const inputsRe = {
			email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			message: /.{5,}/,
			name: /^[a-zA-Zа-яА-Я ]+$/
		};

		const invalidMesssages = {
			email: 'Please fill in correct email',
			message: 'Please, at least 5 symbols',
			name: 'Please fill in correct name'
		};

		const inputs = {
			name: $('.contactsForm').find('[name="name"]'),
			email: $('.contactsForm').find('[name="email"]'),
			message: $('.contactsForm').find('[name="message"]')
		};

		Object.keys(inputs).forEach(key => {
			inputs[key].removeClass('invalid');
			inputs[key].siblings('.contactsForm__hint').text('');
			if (!inputsRe[key].test(inputs[key].val())) {
				inputs[key].siblings('.contactsForm__hint').text(invalidMesssages[key]);
				inputs[key].addClass('invalid');
				event.preventDefault();
				isAllFieldsValid = false;
			}
		});

		if (isAllFieldsValid) {
			$('.contactsForm').slideUp();
			$('#contact').append('<p class="contacts__successMessage">Thanks for your message! I\'ll contanct you as soon as possible.</p>')
		}
	});
})
