let gameSequence = [];
let playerSequence = [];
let score = 0;
const colors = ['red', 'blue', 'green', 'yellow'];

document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
  gameSequence = [];
  playerSequence = [];
  score = 0;
  nextRound();
}

function nextRound() {
  playerSequence = [];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  gameSequence.push(randomColor);
  playSequence();
}

function playSequence() {
  gameSequence.forEach((color, index) => {
    setTimeout(() => {
      flashColor(color);
    }, (index + 1) * 600);
  });
}

function flashColor(color) {
  const button = document.getElementById(color);
  button.classList.add('active');
  setTimeout(() => {
    button.classList.remove('active');
  }, 300);
}

document.querySelectorAll('.game-button').forEach(button => {
  button.addEventListener('click', handlePlayerInput);
});

function handlePlayerInput(event) {
  const clickedColor = event.target.id;
  playerSequence.push(clickedColor);
  flashColor(clickedColor);
  checkPlayerInput();
}

function checkPlayerInput() {
  const currentMove = playerSequence.length - 1;
  if (playerSequence[currentMove] !== gameSequence[currentMove]) {
    alert('Wrong move! Game Over');
    document.getElementById('score').textContent = `Score: 0`;
    return;
  }

  if (playerSequence.length === gameSequence.length) {
    score++;
    document.getElementById('score').textContent = `Score: ${score}`;
    setTimeout(nextRound, 1000);
  }
}
