
let choices = ["Rock", "Paper", "Scissors"];
let buttons = document.querySelectorAll("button");

buttons.forEach(button => addEventListener("click", game)); 

function computerPlay() {
    let randChoice = Math.floor(Math.random() * 3);
    return choices[randChoice];
}

function playRound(playerSelection, computerSelection) {

    if ((playerSelection == "Rock" &&  computerSelection == "Scissors") || (playerSelection == "Scissors" &&  computerSelection == "Paper") || (playerSelection == "Paper" &&  computerSelection == "Rock")) { 
        return "win"

    } else if ((computerSelection == "Rock" &&  playerSelection == "Scissors") || (computerSelection == "Scissors" &&  playerSelection == "Paper") || (computerSelection == "Paper" &&  playerSelection == "Rock")) { 
        return "lose"

    } else if (computerSelection == playerSelection) {
        return "tie"

    } else {
        return "Invalid input."
    }
}

let playerScore = 0, computerScore = 0;

function game(e) {

    const playerChoice = choices[e.target.id];
    const computerChoice = computerPlay();
    let result = playRound(playerChoice, computerChoice);

    displayRoundWinner(result, playerChoice, computerChoice);
    displayRunningScore();

    if (playerScore == 5 || computerScore == 5) {
        displayFinalWinner();
    }
}

function displayRunningScore() {
    const scoreDisplay = document.querySelector("#score-display");
    scoreDisplay.textContent = `${playerScore}:${computerScore}`;
}

function displayRoundWinner(result, pChoice, cChoice) {
    const winner = document.getElementById("winner-display");

    if (result == "win") {
        winner.textContent = `You Win! ${pChoice} beats ${cChoice}`;
        playerScore++;

    } else if (result == "lose") {
        winner.textContent = `You Lose! ${cChoice} beats ${pChoice}`;
        computerScore++;

    } else if (result == "tie") {
        winner.textContent = `Tie! Both choices were ${pChoice}`;
    }
}

function displayFinalWinner() {
    const finalWinner = document.querySelector("#final-winner-display");

    if (playerScore > computerScore) {
        finalWinner.textContent = "You win!"

    } else if (computerScore > playerScore) {
        finalWinner.textContent = "You lose!"

    } else {
        finalWinner.textContent = "Tie"
    }
}