console.log("hello")
console.log("i wanna sleep")


function getComputerChoice() {
    let ans = Math.random()
    if (ans <= 1/3) {
        return "rock"
    } else if (ans >= 2/3) {
        return "paper"
    } else {
        return "scissors"
    }
}

console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("pick a choice from RPS")
    return choice 
}

/*console.log(getHumanChoice())*/

let humanScore = 0
let computerScore = 0

function playRound() {
    cOption = getComputerChoice()
    hOption = getHumanChoice().toLowerCase()
    if (cOption == hOption) {
        return 
    } else if (cOption == "rock" && hOption == "scissors") {
        computerScore += 1
    } else if (cOption == "paper" && hOption == "rock") {
        computerScore += 1
    } else if (cOption == "scissors" && hOption == "paper") {
        computerScore += 1
    } else {
        humanScore += 1
    }
    console.log(humanScore)
    console.log(computerScore)
}

function playGame() {
    let i = 0
    while (i!=5) {
        playRound()
        i+=1
    }
}

playGame()


