document.addEventListener('DOMContentLoaded', () => {
    const symbols = ['🍎', '🍌', '🍇', '🍓', '🍊', '🍐', '🍒', '🍉'];
    let flippedCards = [];
    let matchedCards = [];
    let score = 0; // Added score variable
    let time = 0;
    let timerInterval;
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

    function checkForMatch() {
        const [card1, card2] = flippedCards;
        const symbol1 = card1.querySelector('.front-face').textContent;
        const symbol2 = card2.querySelector('.front-face').textContent;

        if (symbol1 === symbol2) {
            matchedCards.push(card1, card2);
            score += 1; // Increment score if cards match
            updateScore(); // Update score display
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
        score = 0; // Reset score
        updateScore(); // Update score display
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
        startGame();
    }

    startNewGame();

    function startGame() {
        timerInterval = setInterval(updateTimer, 1000); // Start the timer
    }

    function updateScore() {
        document.getElementById('score').innerText = `Score: ${score}`;
    }

    function updateTimer() {
        document.getElementById('timer').innerText = `Time: ${time}`;
        time++;
    }
});