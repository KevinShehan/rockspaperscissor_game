const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = getElementById('playerDisplay');
const computerDisplay = getElementById('computerDisplay');
const resultDisplay = getElementById('resultDisplay');


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
}

playGame(choices)