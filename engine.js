

//gethumanchoice
//prompt player for choice
//validate that choice is a string, if not, prompt again
//validate that choice is rock, paper or scissors, if not, prompt again
//return choice





const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    
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
    const getHumanChoice = () => {
        let choice = window.prompt('Rock, paper or scissors?')
        while (typeof choice != 'string') {
            console.log(typeof choice)
            choice = window.prompt('Please, provide a valid choice between rock, paper and scissors')
        }
        choice = choice.toLowerCase()
        console.log('passed a string correctly. current value:', choice ) 
        while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
            choice = window.prompt('Please, provide a valid choice between rock, paper and scissors')
        }
        return choice;
    }
    
    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            console.log(`Draw! ${humanChoice} X ${computerChoice}`)
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('Human Wins! Paper beats Rocks')
            humanScore++
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log('Human Wins! Scissors beats Papers')
            humanScore++
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log('Human Wins! Rock beats Scissors')
            humanScore++
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log('Computer Wins! Paper beats Rocks')
            computerScore++
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log('Computer Wins! Scissors beats Paper')
            computerScore++
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log('Computer Wins! Rocks beats Scissors')
            computerScore++
        }
    }

    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    
    if (computerScore === humanScore) {
        console.log('Draw!')
    } else if (computerScore > humanScore) {
        console.log('Computer Wins!')
    } else if (computerScore < humanScore) {
        console.log('Human wins!')
    }


    console.log('computer', computerScore, 'human', humanScore)
}




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


