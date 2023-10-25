console.log("Rock Paper Scissors");

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex]
}

function playRound(playerSelection, computerSelection) {
    // clean input
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    
    let result = ""

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            result = "Draw! Both choose Rock"
        } 
        else if (computerSelection === "paper") {
            result = "You Lose! Paper beats Rock"
        }
        else if (computerSelection === "scissors") {
            result = "You Win! Rock beats Scissors"
        }
    } 
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You Win! Paper beats Rock"
        } 
        else if (computerSelection === "paper") {
            result = "Draw! Both choose Paper"
        }
        else if (computerSelection === "scissors") {
            result = "You Lose! Scissors beats Paper"
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "You Lose! Rock beats Scissors"
        } 
        else if (computerSelection === "paper") {
            result = "You Win! Scissors beats Paper"
        }
        else if (computerSelection === "scissors") {
            result = "Draw! Both choose Scissors"
        }
    }
    else {
        return "Invalid input"
    }

    return result
}

function game(rounds = 5) {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt("Pick out of rock, paper and scissors:")
        const computerSelection = getComputerChoice()
        let outcome = playRound(playerSelection, computerSelection)
        console.log(outcome);
        if (outcome.includes("Win")) {
            playerScore++
        } else if (outcome.includes("Lose")) {
            computerScore++
        }
    }

    if (playerScore>computerScore) {
        console.log(`You win! ${playerScore} - ${computerScore}`);
    } else if (playerScore<computerScore) {
        console.log(`You Lose :(. ${playerScore} - ${computerScore}`);
    } else {
        console.log(`Draw! ${playerScore} - ${computerScore}`);
    }
}

game()