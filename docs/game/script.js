var givenTime = 60;
var emojiAnimals = ["🐟", "🐙", "🐸", "🐞", "🐰", "🐭"]
var cardBacks = Array.from(document.querySelectorAll(".play-card__back"));
var cards = Array.from(document.querySelectorAll(".play-card"));
var timer = document.querySelector(".timer");
var cardPair = [];
var cardPairBacks = [];
var numOfRevealedCards = 0
var modal = document.querySelector(".modal");
var replayButton = document.querySelector(".modal__button");
var timeoutID, intervalID;
var spellWinArr = ["W", "i", "n"];
var spellLoseArr = ["L", "o", "s", "e"];
var modalMessage = document.querySelector(".modal__message");
var firstCardFlipped = true;

// добавляем крточкам обработчик клика
// по клику карточке добавится класс flipped
cards.forEach( function (card) {
	card.addEventListener("click", function() {
		if (firstCardFlipped) {
			startGame();
			firstCardFlipped = false;
		}
		matchPairs(card);
	});
})

window.onload = function () {shuffleCards();}

replayButton.addEventListener("click", function() {restart();});

function startGame() {
	setTimer(givenTime, timer);
	countdownUntilLose();
}

function countdownUntilLose() {
	timeoutID = setTimeout (gameOverLose, (givenTime + 1)*1000);
}

function setTimer(duration, display) {
	var time = duration, minutes, secends;
	intervalID = setInterval (function (){
		minutes = Math.floor(time / 60);
		seconds = time % 60;
		minutes = (minutes < 10) ? "0" + minutes: minutes;
		seconds = (seconds < 10) ? "0" + seconds: seconds;
		display.innerHTML = minutes + ":" + seconds;
		if (--time < 0) time = duration;
	}, 1000)
}

function shuffle(arr) { // функция для перемешивания элементов в массиве
	var i, j, item
	for (i = arr.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		item = arr[i];
		arr[i] = arr[j];
		arr[j] = item;
	}
}

function shuffleCards() {
	shuffle(cardBacks); // перемешиваем задние стороны карточек в массиве
	// теперь добавляем в атрибуты смайлики
	// они будут располагаться в случайном порядке
	emojiAnimals.forEach(function (emoji, index){
		cardBacks[index].dataset.emoji = emoji;
		cardBacks[index + emojiAnimals.length].dataset.emoji = emoji;
	})
}
function matchPairs (card) {
	if (card.classList.contains("card-flipped")) {
		return;
	}
	card.classList.add("card-flipped");
	cardPair.push(card);
	cardPairBacks.push(card.lastElementChild);
	if (cardPair.length === 2) {
		checkIfMatches();
	} else if(cardPair.length ===3) {
		var thirdCard = cardPair.pop();
		var thirdCardBack = cardPairBacks.pop();
		flipBackPair();
		cardPair.push(thirdCard);
		cardPairBacks.push(thirdCardBack);
	}
}

function checkIfMatches() {
	var firstEmoji = cardPairBacks[0].dataset.emoji;
	var secondEmoji = cardPairBacks[1].dataset.emoji;
	if (firstEmoji === secondEmoji) {
		cardPairBacks.forEach(function (cardBack) {
			cardBack.style.backgroundColor = "#5AD66F";
		})
		clearPairs();
		numOfRevealedCards += 2;
		if (numOfRevealedCards === 12) {
			gameOverWin();
		}
	} else {
		cardPairBacks.forEach(function (cardBack) {
			cardBack.style.backgroundColor = "#F44336";
		})

	}
}

function flipBackPair () {
	cardPair.forEach(function (card) {
		card.classList.remove("card-flipped");
	})
	cardPairBacks.forEach(function (cardBack) {
		cardBack.style.backgroundColor = "#FFFFFF";
	})
	clearPairs();
}

function clearPairs () {
	cardPair = [];
	cardPairBacks = [];
}

function gameOverLose() {
	addMessageToModal(spellLoseArr);
	replayButton.innerHTML = "Try again";
	gameOver();
}

function gameOverWin() {
	addMessageToModal(spellWinArr);
	replayButton.innerHTML = "Play again";
	gameOver();
}

function gameOver() {
	clearTimeout(timeoutID);
	clearInterval(intervalID);
	modal.style.display = "block";
}

function restart() {
	cardBacks.forEach(function (cardBack) {
		cardBack.style.backgroundColor = "#fff";
	})
	cards.forEach(function (card) {
		card.classList.remove("card-flipped");
	})
	modal.style.display = "none";
	numOfRevealedCards = 0;
	clearPairs();
	shuffleCards();
	firstCardFlipped = true;
	timer.innerHTML = "01:00";
}

function addMessageToModal(spellArr) {
	while (modalMessage.firstChild) {
		modalMessage.removeChild(modalMessage.firstChild);
	}
	for (var i = 0; i < spellArr.length; i++) {
			var letter = document.createElement("span");
			letter.classList.add("modal-message__letter");
			letter.innerHTML = spellArr[i];
			modalMessage.appendChild(letter);
	}
}
