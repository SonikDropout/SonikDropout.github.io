// load more random images on request
$('.gallery__button').click(loadRandomImages);

function loadRandomImages() {
	let newImageCard = $('<div class="imageCard"></div>');
	appendImage(newImageCard);
	appendOverlay(newImageCard);
	$('.gallery__wrapper').append(newImageCard);
	gallery.imagesLoaded().progress( function() {
		gallery.masonry('layout');
	});
}

function appendOverlay(imageCard) {
	let overlay = $('<div class="imageCard__overlay"</div>');
	let caption = $('<h3 class="imageCard__caption">Lorem Impsum</h3>');
	overlay.append(caption);
	imageCard.append(overlay);
}

function appendImage(imageCard) {
	let src = generateRandomImageUrl();
	let image = $(`<img class="imageCard__image" src=${src} alt="random image"/>`);
	imageCard.append(image);
}

function generateRandomImageUrl() {
	let width = getRandomImageWidth();
	let hieght = getRandomImageHeightBasedOnWidth(width);
	let id = getRandomImageId();
	let url = `https://picsum.photos/${width}/${hieght}/?image=${id}`;
	while(!validImageOnRequestTo(url)) {
		id = getRandomImageId();
		url = `https://picsum.photos/${width}/${hieght}/?image=${id}`;
	}
	return url;
}

function validImageOnRequestTo(url) {
	return true; // TODO
}

function getRandomImageWidth() {
	return (Math.random < 0.5) ? 1920: 1280;
}

function getRandomImageHeightBasedOnWidth(width) {
	switch (width) {
		case 1920:
			return (Math.random < 0.5) ? 1080: 1280;
		case 1280:
			return (Math.random < 0.5) ? 1920: 1600;
	}
}

function getRandomImageId() {
	return Math.floor(Math.random() * 1000);
}