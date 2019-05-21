

function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randChoice = Math.floor(Math.random() * 3);
    return choices[randChoice];
}

function playRound(playerSelection, computerSelection) {
    let computerChoice = computerSelection.toLowerCase();
    let playerChoice = playerSelection.toLowerCase();


    if ((playerChoice == "rock" &&  computerChoice == "scissors") || (playerChoice == "scissors" &&  computerChoice == "paper") || (playerChoice == "paper" &&  computerChoice == "rock")) { 
        return "win"

    } else if ((computerChoice == "rock" &&  playerChoice == "scissors") || (computerChoice == "scissors" &&  playerChoice == "paper") || (computerChoice == "paper" &&  playerChoice == "rock")) { 
        return "lose"

    } else if (computerChoice == playerChoice) {
        return "tie"

    } else {
        return "Invalid input."
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (var i = 0; i < 5; i++) {
        const playerSelection = window.prompt("Choose a weapon: ");
        const computerSelection = computerPlay();

        //takes player input and makes the first letter capital and the rest lower.
        const playerSelectionDisplay = playerSelection[0].toUpperCase() + playerSelection.substring(1, playerSelection.length + 1).toLocaleLowerCase();

        let result = playRound(playerSelection, computerSelection);
        if (result == "win") {
            console.log(`You Win! ${playerSelectionDisplay} beats ${computerSelection}`);
            playerScore++;

        } else if (result == "lose") {
            console.log(`You Lose! ${computerSelection} beats ${playerSelectionDisplay}`);
            computerScore++;

        } else if (result == "tie") {
            console.log(`Tie! Both choices were ${computerSelection}`);


        } else {
            console.log("Invalid input, you lose a point.");
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You won ${playerScore}:${computerScore}`);
    
    } else if (playerScore < computerScore) {
        console.log(`You lost ${playerScore}:${computerScore}`);

    } else {
        console.log(`You tied ${playerScore}:${computerScore}`);
    }
}

game();

