//Array for playerSelection and computerSelector
const selection = ["rock", "paper", "scissors"];

//Generates computerSelection
//See playRound function for computerSelection variable
function computerSelector() {
	return selection[Math.floor(Math.random() * selection.length)];
}

//Variable for computerSelector in player button functions
var computerSelection;

//Selector for computer-buttons
//Used in selectCompStyle and playAgain functions
var selectComp = document.querySelectorAll(".select-comp");

//Styles computer-buttons html based on computerSelection
function selectCompStyle(computerSelection) {
	[...selectComp].forEach((item) => {
		item.style.cssText = `
      opacity: 50%;
      transform: scale(1.0);
    `;
	});
	if (computerSelection === "rock") {
		document.getElementById("comp-rock").style.cssText = `
      opacity: 100%;
      transition: transform 0.1s;
      transform: scale(1.2);
    `;
	} else if (computerSelection === "paper") {
		document.getElementById("comp-paper").style.cssText = `
    opacity: 100%;
    transition: transform 0.1s;
    transform: scale(1.2);
  `;
	} else if (computerSelection === "scissors") {
		document.getElementById("comp-scissors").style.cssText = `
    opacity: 100%;
    transition: transform 0.1s;
    transform: scale(1.2);
  `;
	}
}

//Player button functions
//Rock button
const buttonRock = document.getElementById("btn-rock");
buttonRock.addEventListener("click", playRock);
function playRock() {
	const playerSelection = selection[0];
	computerSelection = computerSelector();
	declareRound(playerSelection);
	selectCompStyle(computerSelection);
	updateScore();
	decideWinner();
	playAgain();
}

//Paper button
const buttonPaper = document.getElementById("btn-paper");
buttonPaper.addEventListener("click", playPaper);
function playPaper() {
	const playerSelection = selection[1];
	computerSelection = computerSelector();
	declareRound(playerSelection);
	selectCompStyle(computerSelection);
	updateScore();
	decideWinner();
	playAgain();
}

//Scissors button
const buttonScissors = document.getElementById("btn-scissors");
buttonScissors.addEventListener("click", playScissors);
function playScissors() {
	const playerSelection = selection[2];
	computerSelection = computerSelector();
	declareRound(playerSelection);
	selectCompStyle(computerSelection);
	updateScore();
	decideWinner();
	playAgain();
}

//Plays round and decides winner by comparing playerSelection to computerSelection
function playRound(playerSelection) {
	if (playerSelection === computerSelection) {
		return "TIE";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		playerScore++;
		return "PLAYER +1";
	} else {
		computerScore++;
		return "COMPUTER +1";
	}
}

//Displays the output of each playRound call and decideWinner
const roundParent = document.getElementById("round-parent");
function declareRound(playerSelection) {
	const roundOutput = document.createElement("p");
	const winner = document.createElement("div");
	winner.classList.add("winner");
	roundParent.insertBefore(roundOutput, roundParent.firstChild);
	roundParent.insertBefore(winner, roundParent.firstChild);
	roundOutput.textContent = `${playRound(playerSelection)}`;
	winner.textContent = `${decideWinner()}`;
}

//Score variables
let playerScore = 0;
let computerScore = 0;

//Updates the score after each round
function updateScore() {
	const playerScoreboard = document.getElementById("player-score");
	const computerScoreboard = document.getElementById("computer-score");

	playerScoreboard.textContent = `Player: ${playerScore}`;
	computerScoreboard.textContent = `Computer: ${computerScore}`;
}

//Decides winner after a score reaches 5
function decideWinner() {
	if (playerScore === 5) {
		return "PLAYER WINS";
	} else if (computerScore === 5) {
		return "COMPUTER WINS";
	}
	return "";
}

//Creates playAgainBtn
function playAgain() {
	if (playerScore === 5 || computerScore === 5) {
		const playAgainBtn = document.createElement("div");
		playAgainBtn.setAttribute("id", "play-again-btn");
		roundParent.insertBefore(playAgainBtn, roundParent.firstChild);
		playAgainBtn.textContent = "Play Again?";
		//Adds click which resets score, select-comp styles and roundParent div
		playAgainBtn.addEventListener("click", () => {
			playerScore = 0;
			computerScore = 0;
			updateScore();
			[...selectComp].forEach((item) => {
				item.style.cssText = `
        opacity: 50%;
        transform: scale(1.0);
      `;
			});
			while (roundParent.firstChild) {
				roundParent.removeChild(roundParent.lastChild);
			}
		});
	}
}