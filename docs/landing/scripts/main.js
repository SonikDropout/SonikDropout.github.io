$(function() {

	//form validation
	$('.contact-form').submit(function(event) {
		if (!isEmail($('#email').val())) {
			$('#email').addClass('invalid');
			event.preventDefault();
		}
		if (invalidName($('#name').val())) {
			$('#name').addClass('invalid');
			event.preventDefault();
		}
		if (emptyMessage($('#message').val())) {
			$('#message').addClass('invalid');
			event.preventDefault();
		}
		event.preventDefault();
	})

	function isEmail(email) {
		const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}

	function invalidName(name) {
		const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
		return !regex.test(name);
	}

	function emptyMessage(message) {
		return message.length < 1;
	}



	// remove invalid class from inputs
	// on user focus
	$('input, textarea').focus(function() {
		$(this).removeClass('invalid');
	})



	// menu toggle button functionality
	$('.toggle').click(function() {
		$(this).toggleClass('checked');
		$('.menu').slideToggle();
	})
})