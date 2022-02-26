function computerPlay() {
    return options[(Math.floor(Math.random() * 3))];

}

function playRound(playerSelection, computerSelection) {
    let winner = "";
    if (playerSelection == "rock" && computerSelection == "paper") {
        winner = "Computer";
        computerSCore++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        winner = "Player";
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winner = "Player";
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        winner = "Computer";
        computerSCore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winner = "Player";
        playerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        winner = "Computer";
        computerSCore++;
    } else {
       winner = "Nobody won! It's a Draw!";
    } 
    return winner;
}

let options = ["ROCK", "PAPER", "SCISSORS"];
let rounds = 5;
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerSCore = 0;
let result = "";

for(let i = 1; i <= rounds; i++) {
    playerSelection = prompt("Enter your choice: ").toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    console.log("Round "+ i);
    console.log("Computer Selection: " + computerSelection.toUpperCase());
    console.log("Player Selection: " + playerSelection.toUpperCase());
    result = playRound( playerSelection, computerSelection);
    console.log(`Round ${i} winner: ${result}`);
}
if(computerSCore > playerScore) {
    winner = "COMPUTER";
} else if(playerScore > computerSCore) {
    winner = "PLAYER";
} else {
    winner = "It's a DRAW!";
}
console.log(`Computer Score: ${computerSCore}`);
console.log(`Player Score: ${playerScore}`);

console.log(`Final winner: ${winner}`);



