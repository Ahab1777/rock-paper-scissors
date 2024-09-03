

//gethumanchoice
//prompt player for choice
//validate that choice is a string, if not, prompt again
//validate that choice is rock, paper or scissors, if not, prompt again
//return choice




let humanScore = 0;
let computerScore = 0;
const humanScoreDisplay = document.querySelector('#humanSpanScore')
const computerScoreDisplay = document.querySelector('#computerSpanScore')
const roundResult = document.querySelector('#roundResult')
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')


const getComputerChoice = () => {
    const randomNumber = Math.floor((Math.random()) * 100);
    if (randomNumber < 33) {
        return 'rock';
    } else if (randomNumber >= 33 && randomNumber < 66) {
        return 'paper';
    } else if (randomNumber >= 66 && randomNumber < 99) {
        return 'scissors'
    } else {
        //run function again if number is 99, so that all option have equal chance to be returned
        getComputerChoice();
    }
}
// const getHumanChoice = (e) => {
    //     const target = e.target;
    //     console.log(target.value)
    //     return target.value
    // }
    
const finalResultChecker = () => {
    if (computerScore === 5 || humanScore === 5) {
        console.log('final result called')
        if (computerScore === 5){
            roundResult.textContent = 'The Computer wins!'
        } else if (humanScore === 5) {
            roundResult.textContent = 'The Human wins'
        }
        const gameButtons = document.querySelectorAll('.buttonContainer > button')
        gameButtons.forEach( element => element.disabled = true) 
    }
}

const playRound = (e) => {
    const humanChoice = e.target.value
    const computerChoice = getComputerChoice()
    if (humanChoice === computerChoice) {
        console.log(`Draw! ${humanChoice} X ${computerChoice}`)
        roundResult.textContent = `Draw! ${humanChoice} X ${computerChoice}`
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('Human Wins! Paper beats Rock')
        humanScore++
        roundResult.textContent = 'Human Wins! Paper beats Rock'
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('Human Wins! Scissors beats Paper')
        humanScore++
        roundResult.textContent = 'Human Wins! Scissors beats Papers'
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('Human Wins! Rock beats Scissors')
        humanScore++
        roundResult.textContent = 'Human Wins! Rock beats Scissors'
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('Computer Wins! Paper beats Rock')
        computerScore++
        roundResult.textContent = 'Computer Wins! Paper beats Rock'
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('Computer Wins! Scissors beats Paper')
        computerScore++
        roundResult.textContent = 'Computer Wins! Scissors beats Paper'
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('Computer Wins! Rocks beats Scissors')
        computerScore++
        roundResult.textContent = 'Computer Wins! Rocks beats Scissors'
    }
    console.log(humanScore, computerScore)
    humanScoreDisplay.textContent = humanScore
    computerScoreDisplay.textContent = computerScore
    finalResultChecker()
}

// playRound(getHumanChoice(), getComputerChoice())
// playRound(getHumanChoice(), getComputerChoice())
// playRound(getHumanChoice(), getComputerChoice())
// playRound(getHumanChoice(), getComputerChoice())
// playRound(getHumanChoice(), getComputerChoice())


// if (computerScore === humanScore) {
//     console.log('Draw!')
// } else if (computerScore > humanScore) {
//     console.log('Computer Wins!')
// } else if (computerScore < humanScore) {
//     console.log('Human wins!')
// }


rockButton.addEventListener('click', playRound)
paperButton.addEventListener('click', playRound)
scissors.addEventListener('click', playRound)


// const paperButton = document.querySelector('#paper')
// paperButton.addEventListener('click', getHumanChoice)

// const scissorsButton = document.querySelector('#scissors')
// scissorsButton.addEventListener('click', getHumanChoice)







//create round



// const validateChoice = (choice) => {
    
    //     if (typeof choice != 'string') {
        //         choice = window.prompt('Please, provide a valid choice between rock, paper and scissors')
        //         return
        //     }
        //     return true
        // }
        
        // const getHumanChoice = () => {
            //     let choice = window.prompt('Rock, paper or scissors?')
            
            // }

            
// const validateChoice = (choice) => {
//     let currentChoice = choice;
//     if (typeof currentChoice != 'string') {
//         currentChoice = window.prompt('Please, provide a valid choice between rock, paper and scissors')
//         validateChoice(currentChoice);
        
//     }
//     return choice.toLowerCase();
// }

// let humanChoice = window.prompt('Rock, paper or scissors?');

// const getHumanChoice = (humanChoice) => {
//     let choice = validateChoice(humanChoice)
//     return choice;
// }


