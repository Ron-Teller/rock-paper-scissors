

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 0) {
        return "rock";
    } else if (randomInt == 1) { 
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?");
    return choice;
}

function getOutcome(hand, opponentHand) {
    if (hand === opponentHand) {
        return "tie";
    } else if (
        (hand === "rock" && opponentHand === "paper") ||
        (hand === "paper" && opponentHand === "scissors") ||
        (hand === "scissors" && opponentHand === "rock")
        )
        {
            return "lose";
    } else {
        return "win";
    }
}

function capitalize(str) {
    let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}


function playGame() {
    humanScore = 0;
    computerScore = 0;

    function playRound() {
        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice();
        console.log(`Human: ${capitalize(humanChoice)}  |  Computer: ${capitalize(computerChoice)}`)
        let outcome = getOutcome(humanChoice, computerChoice);
        if (outcome == "tie") {
            console.log(`Tie! ${capitalize(humanChoice)} ties ${capitalize(computerChoice)}`)
        } else if (outcome == "lose") {
            computerScore++;
            console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`)
        } else {
            humanScore++;
            console.log(`You Win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`)
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound()
        console.log(`Score: Human - ${humanScore}  |  Computer - ${computerScore}`);
    }

}
