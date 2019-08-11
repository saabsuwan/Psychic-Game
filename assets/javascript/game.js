// Declares all variables 
	var wins = document.getElementById("wins");
	var losses = document.getElementById("losses");
	var guessesRemaining = document.getElementById("guessesRemaining");
	var guessesSoFar = document.getElementById("guessesSoFar");

	var allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var winsCount = 0;
	var lossesCount = 0;
	var defaultGuessesRemaining = 9;
	var guessesRemainingCount = defaultGuessesRemaining;
	var guessesArray = [];

// This function is for computer to generate random alphabet
	var getRandomLetter = function () {
		randomLetter = allLetters[Math.floor(Math.random()*allLetters.length)]
		console.log(randomLetter);
		return randomLetter
	}	

// This function is to write the document in ID 
	var displayStats = function () {
		wins.innerHTML = "Winner : " + winsCount
		losses.innerHTML = " Losses : " + lossesCount
		guessesRemaining.innerHTML = "Guess Remaining: " + guessesRemainingCount
		guessesSoFar.innerHTML = "You have guessed : " + guessesArray
	}

// This function is to reset the game and let the computer regenerate the new letter	
	var resetGame = function () {
		guessesArray = [];
		guessesRemainingCount = defaultGuessesRemaining;
		currentLetter = getRandomLetter();
	}

// this function is to declare if the user input is the same as computer guessed	
	var userWon = function (userLetter) {
		return userLetter === currentLetter 
	}

// function user loss if the guess remaining is = 0 
	var userLost = function () {
		return guessesRemainingCount === 0;
	}

// this is the function to run the game	
	var currentLetter = getRandomLetter();
	displayStats();
	document.onkeyup = function (event) {
		var userLetter = event.key;
		guessesRemainingCount--
		guessesArray.push(userLetter)

		if (userWon(userLetter)) {
			winsCount++;
			resetGame();
		} 

		if (userLost()) {
			lossesCount++;
			resetGame();
		}

		displayStats();
	}
