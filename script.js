function getComputerChoice() {
    let computerSelection = "";
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
        computerSelection = "Rock";
    } else if (randomNum == 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissor";
    }

    return computerSelection;
}

function getPlayerChoice() {
    let playerSelection = prompt("Rock || Paper || Scissor");
    return (playerSelection)
}
getPlayerChoice();

function round(player, computer) {
    let roundWinner = "";

    if (player === computer) {
        roundWinner = "Its' a tie!!"
    } else if (player == "Scissor" && computer == "Paper" ||
        player == "Paper" && computer == "Rock" ||
        player == "Rock" && computer == "Scissor") {
        roundWinner = "Player win!!"
    } else {
        roundWinner = "Computer Wins!!"
    }

    return roundWinner

}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        const player = getPlayerChoice();
        const computer = getComputerChoice();

        console.log(`Player = ${player} `);
        console.log(`Computer = ${computer} `);

        const result = round(player, computer)
        console.log(result);

        if (result === "Player win!!") {
            playerScore++
        } else {
            computerScore++
        }

        console.log(`Player Score = ${playerScore} `);
        console.log(`Computer Score = ${computerScore} `);
        console.log("________________________");






    }


    if (playerScore > computerScore) {
        console.log("You Have won")
    } else if (computerScore > playerScore) {
        console.log("AI has won")

    } else {
        console.log("Tie Match")
    }
}
game();
