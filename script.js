
let choices = ["rock", "paper", "scissors"];
let totalPlayerScore = 0;
let totalComputerScore = 0;

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random()*choices.length);
    let randomChoice = choices[randomIndex];
    return randomChoice;
}

computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    let computerselection = getComputerChoice()
    console.log(`I choose ${computerSelection}.`)
    if (playerSelection == computerSelection) {
         console.log("It is a draw");
         totalComputerScore++;
         totalPlayerScore++;
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") || 
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")) {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
            totalComputerScore++;
              } 
      else {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
            totalPlayerScore++
      }
}

function game() {
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice()
        let playerSelectionRaw = prompt("Rock, Paper or Scissors?", "Your answer");
        let playerSelection = playerSelectionRaw.toLowerCase();
        playRound(playerSelection, computerSelection);
        console.log(totalComputerScore, totalPlayerScore);
}
    if (totalPlayerScore > totalComputerScore) {
        console.log(`You win! Total score is ${totalPlayerScore} - ${totalComputerScore} to your advantage.`)
    } else if (totalPlayerScore < totalComputerScore) {
        console.log(`I win! Total score is ${totalComputerScore} - ${totalPlayerScore} to my advantage.`)
    } else {
        console.log(`It is a tie! The score is ${totalPlayerScore} - ${totalComputerScore}. Lets do a rematch.`)
    }

}
console.log(game())


