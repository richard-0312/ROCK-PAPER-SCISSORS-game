const choices = ["rock", "paper", "scissors"];

const playerChoiceDisplay = document.getElementById("playerChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScore")
const computerScoreDisplay = document.getElementById("computerScore")
const tiecountDisplay = document.getElementById("tieCount")

let computerScore = 0
let playerScore = 0
let tiecount = 0

function playerChoice(playerSelection) {
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerSelection === computerSelection) {
        result = "IT'S A TIE";
    } else {
        switch (playerSelection) {
            case "rock":
                result = (computerSelection === "scissors") ? "YOU WON" : "YOU LOSE";
                break;
            case "paper":
                result = (computerSelection === "rock") ? "YOU WON" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerSelection === "paper") ? "YOU WON" : "YOU LOSE";
                break;
        }
    }

    playerChoiceDisplay.textContent = `PLAYER: ${playerSelection.toUpperCase()}`;
    computerChoiceDisplay.textContent = `COMPUTER: ${computerSelection.toUpperCase()}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext","red","grey")

switch(result){
    case "YOU WON":
        resultDisplay.classList.add("greentext")
        playerScore++
        playerScoreDisplay.textContent = playerScore
        break
    case "YOU LOSE":
        resultDisplay.classList.add("red")
        computerScore++
        computerScoreDisplay.textContent = computerScore
        break
    case "IT'S A TIE":
        resultDisplay.classList.add("grey")
        tiecount++
        tiecountDisplay.textContent = tiecount
    break
}
}
