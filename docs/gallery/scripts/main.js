$(function() {
	// menu toggle button functionality
	$('.menu__toggle').click(function() {
		$('.menu__list').slideToggle(.5);
		$(this).toggleClass('on');
	});



	// toggle modal window on click
	$('.imageCard__overlay').click(function() {
		let hugeImage = $('<img class="modal__image"/>');
		let currentImage = $(this).siblings('img');
		$(this).parent().addClass('current');
		hugeImage.attr('src', currentImage.attr('src'));
		$('.gallery__modal').append(hugeImage);
		$('.gallery__modal').removeClass('hidden');
	});


	// event listener for modal controls
	$('.gallery__modal').click(function(event) {
		if ($(event.target).hasClass('close')) {
			$(this).children().remove('img');
			$(this).addClass('hidden');
		} else if ($(event.target).hasClass('next')) {
			let nextImageCard = $('.imageCard.current').next('.imageCard');
			if (!nextImageCard.length) { return;}
			let nextImage = nextImageCard.children('img');
			$('.imageCard.current').removeClass('current');
			nextImageCard.addClass('current');
			$('.modal__image').attr('src', nextImage.attr('src'));
		} else if ($(event.target).hasClass('previous')) {
			let previousImageCard = $('.imageCard.current').prev();
			if (!previousImageCard.length) { return;}
			let previousImage = previousImageCard.children('img');
			$('.imageCard.current').removeClass('current');
			previousImageCard.addClass('current');
			$('.modal__image').attr('src', previousImage.attr('src'));
		}
	});


	// layout pictures with the help of masonry
	const gallery = $('.gallery__wrapper').imagesLoaded( function() {
		gallery.masonry({
			itemSelector: '.imageCard',
			columnWidth: '.imageCard',
			percentPosition: true,
		}); 
	});



	// show to top anchor if neccessary
	$(window).scroll(function() {
		if (window.scrollY > 60 && window.innerWidth > 576) {
			$('a.to-top').show();
		} else {
			$('a.to-top').hide();
		}
	});

	$(window).resize(function() {
		if (window.innerWidth <= 576) {
			$('a.to-top').hide();
		}
	});
})