// Function Computer Choice
function getComputerChoice() {
   
    const randomNumber = Math.floor(Math.random() * 3);
    
    // Use the random number to pick a choice
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
//   Function Human Choice
  function getHumanChoice() {
    let humanChoice;
    while (true) {
      humanChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
      if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        break;
      } else {
        alert("Invalid choice. Please try again.");
      }
    }
    return humanChoice;
  }
  
//   Function Playground
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    } else if (humanChoice === "rock") {
      return (computerChoice === "scissors") ? "You win! Rock beats Scissors" : "You lose! Paper beats Rock";
    } else if (humanChoice === "paper") {
      return (computerChoice === "rock") ? "You win! Paper beats Rock" : "You lose! Scissors beats Paper";
    } else { // humanChoice === "scissors"
      return (computerChoice === "paper") ? "You win! Scissors beats Paper" : "You lose! Rock beats Scissors";
    }
  }
  
// Function Playgame


  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      const roundResult = playRound(humanSelection, computerSelection);
      console.log(roundResult);
  
      if (roundResult.includes("win")) {
        humanScore++;
      } else if (roundResult.includes("lose")) {
        computerScore++;
      }
    }
  
    if (humanScore > computerScore) {
      console.log("You win the game!");
    } else if (computerScore > humanScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie!");
    }
  }
  
  playGame();
  