document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const startButton = document.getElementById('start-button');
    const scoreDisplay = document.getElementById('score');
    const timerDisplay = document.getElementById('timer');
    let score = 0;
    let timeLeft = 30;
    let moleTimer;
    let countdownTimer;

    for (let i = 0; i < 25; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('click', () => {
            if (gridItem.classList.contains('active')) {
                score++;
                scoreDisplay.textContent = score;
                gridItem.classList.remove('active');
            }
        });
        grid.appendChild(gridItem);
    }

    const gridItems = document.querySelectorAll('.grid-item');

    startButton.addEventListener('click', startGame);

    function startGame() {
        score = 0;
        scoreDisplay.textContent = score;
        timeLeft = 30;
        timerDisplay.textContent = timeLeft;
        clearInterval(moleTimer);
        clearInterval(countdownTimer);

        moleTimer = setInterval(randomMole, 1000);
        countdownTimer = setInterval(countdown, 1000);
    }

    function randomMole() {
        gridItems.forEach(item => item.classList.remove('active'));
        const randomIndex = Math.floor(Math.random() * gridItems.length);
        gridItems[randomIndex].classList.add('active');
    }

    function countdown() {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(moleTimer);
            clearInterval(countdownTimer);
            alert(`Time's up! Your score is ${score}`);
        }
    }
});
