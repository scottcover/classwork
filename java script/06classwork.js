let gamesPlayed = 0;
let wins = 0;
let losses = 0;
let ties = 0;

const gamesPlayedElement = document.getElementById('games-played');
const winsElement = document.getElementById('wins');
const lossesElement = document.getElementById('losses');
const tiesElement = document.getElementById('ties');
const computerPickElement = document.getElementById('computer-pick');
const resultElement = document.getElementById('result');

const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', () => userChoice('rock'));
document.getElementById('paper').addEventListener('click', () => userChoice('paper'));
document.getElementById('scissors').addEventListener('click', () => userChoice('scissors'));

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function userChoice(choice) {
    const computerChoice = getRandomChoice();
    const result = determineWinner(choice, computerChoice);

    gamesPlayed++;
    gamesPlayedElement.textContent = gamesPlayed;

    if (result === 'win') {
        wins++;
        winsElement.textContent = wins;
    } else if (result === 'lose') {
        losses++;
        lossesElement.textContent = losses;
    } else {
        ties++;
        tiesElement.textContent = ties;
    }

    computerPickElement.textContent = computerChoice;
    resultElement.textContent = result.charAt(0).toUpperCase() + result.slice(1);
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    }

    return 'lose';
}
