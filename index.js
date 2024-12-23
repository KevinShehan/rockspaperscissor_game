const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore= 0 ;


function playGame(playChoices) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice);
    let result = "";
    if (playChoices === computerChoice) {
        result = "IT'S A TIE"
    }
    else {
        switch (playChoices) {
            case 'rock':
                result = (computerChoice === 'paper')? 'Computer wins!' : 'Player wins!';
                break;
            case 'paper':
                result = (computerChoice === 'scissors')? 'Computer wins!' : 'Player wins!';
                break;
            case'scissors':
                result = (computerChoice === 'rock')? 'Computer wins!' : 'Player wins!';
                break;
         }
    }
    playerDisplay.textContent = "Player chose: " + playChoices;
    computerDisplay.textContent = "Computer chose: " + computerChoice;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText");

    switch(result){
        case 'Player wins!':
           resultDisplay.classList.add("greenText");
           playerScore++;
           playerScoreDisplay.textContent =playerScore;
            break;
        case 'Computer wins!':
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent =computerScore;
            break;
       
    }
}

// playGame(choices)