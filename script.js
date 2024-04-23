document.addEventListener('DOMContentLoaded', () => {
    const symbols = ['🍎', '🍌', '🍇', '🍓', '🍊', '🍐', '🍒', '🍉'];
    let flippedCards = [];
    let matchedCards = [];
    const memoryGame = document.querySelector('.memory-game');

    function flipCard(card) {
        if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card)) {
            card.classList.add('flip');
            card.querySelector('.front-face').classList.add('visible');
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                checkForMatch();
            }
        }
    }
    // Flipps the cards
    function checkForMatch() {
        const [card1, card2] = flippedCards;
        const symbol1 = card1.querySelector('.front-face').textContent;
        const symbol2 = card2.querySelector('.front-face').textContent;

        if (symbol1 === symbol2) {
            matchedCards.push(card1, card2);
            if (matchedCards.length === symbols.length * 2) {
                clearInterval(timerInterval);
                setTimeout(() => {
                    alert('Congratulations! You win!');
                    startNewGame();
                }, 500);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flip');
                card2.classList.remove('flip');
                card1.querySelector('.front-face').classList.remove('visible');
                card2.querySelector('.front-face').classList.remove('visible');
            }, 1000);
        }

        flippedCards = [];
    }

    // Timer  for how long you took to find matches
    const newGameButton = document.createElement('button');
    newGameButton.textContent = 'New Game';
    newGameButton.id = 'new-game-btn';
    newGameButton.addEventListener('click', startNewGame);
    document.body.replaceChild(newGameButton, document.getElementById('new-game-btn'));

    function startNewGame() {
        clearInterval(timerInterval);
        time = 0; // Reset the time
        updateTimer(); // Update the timer display
        memoryGame.innerHTML = '';
        flippedCards = [];
        matchedCards = [];
        const pairs = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
        pairs.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.classList.add('memory-card');
            card.innerHTML = `
                <div class="front-face">${symbol}</div>
                <div class="back-face"></div>
            `;
            card.addEventListener('click', () => flipCard(card));
            memoryGame.appendChild(card);
        });
        startGame(); // Start the new game
    }

    startNewGame(); // Automatically start a new game when the page loads
});

// Variables
let score = 0;
let time = 0;
let chances = 3;
let timerInterval;
let isGameActive = false;

// Function to start the game
function startGame() {
    // Reset game state
    score = 0;
    chances = 3;
    updateScore();
    isGameActive = true;
    timerInterval = setInterval(updateTimer, 1000); // Start the timer
}

// Function to update the score display
function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
}

// Function to update the timer display
function updateTimer() {
    document.getElementById('timer').innerText = `Time: ${time}`;
    time++;
}

// Call startGame() to begin the game
startGame();