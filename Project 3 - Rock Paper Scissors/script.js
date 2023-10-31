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

function checkGameOver(playedRounds, totalRounds, playerScore, computerScore) {
    if (playedRounds == totalRounds) {
        let result = ""
        const body = document.querySelector("body")
        gameOverDiv = document.createElement("div")
        buttons = document.querySelectorAll("button")
        body.append(gameOverDiv)
        if (playerScore>computerScore) {
            result = `You win! ${playerScore} - ${computerScore}`
        } else if (playerScore<computerScore) {
            result = `You Lose :(. ${playerScore} - ${computerScore}`
        } else {
            result = `Draw! ${playerScore} - ${computerScore}`
        }
        buttons.forEach(button => {
            button.disabled = true
        });
        gameOverDiv.textContent = result
    }
}

function game(rounds = 5) {
    const body = document.querySelector("body")
    const rockButton = document.querySelector("#rock")
    const paperButton = document.querySelector("#paper")
    const scissorsButton = document.querySelector("#scissors")

    let playerScore = 0
    let computerScore = 0
    let playedRounds = 0

    rockButton.addEventListener('click', function () {
        const computerSelection = getComputerChoice()
        let outcome = playRound('rock', computerSelection)
        let outcomeDiv = document.createElement("div")
        outcomeDiv.textContent = outcome
        body.append(outcomeDiv)

        playedRounds++
        if (outcome.includes("Win")) {
            playerScore++
        } else if (outcome.includes("Lose")) {
            computerScore++
        }
        checkGameOver(playedRounds, rounds, playerScore, computerScore)
    })

    paperButton.addEventListener('click', function () {
        const computerSelection = getComputerChoice()
        let outcome = playRound('paper', computerSelection)
        let outcomeDiv = document.createElement("div")
        outcomeDiv.textContent = outcome
        body.append(outcomeDiv)

        playedRounds++
        if (outcome.includes("Win")) {
            playerScore++
        } else if (outcome.includes("Lose")) {
            computerScore++
        }
        checkGameOver(playedRounds, rounds, playerScore, computerScore)
    })

    scissorsButton.addEventListener('click', function () {
        const computerSelection = getComputerChoice()
        let outcome = playRound('scissors', computerSelection)
        let outcomeDiv = document.createElement("div")
        outcomeDiv.textContent = outcome
        body.append(outcomeDiv)

        playedRounds++
        if (outcome.includes("Win")) {
            playerScore++
        } else if (outcome.includes("Lose")) {
            computerScore++
        }
        checkGameOver(playedRounds, rounds, playerScore, computerScore)
    })

}

game(5) 