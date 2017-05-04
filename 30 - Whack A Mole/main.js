const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const highScoreBoard = document.querySelector('.highscore');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector(".start button");


let lastHole;
let timeUp = false;
let score = 0;
let highscore = parseInt(localStorage.getItem('highscore')) || 0;
highScoreBoard.textContent = highscore;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min)  + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if(hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);

  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}


function startGame() {
  startButton.classList.add("hide");
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();

  setTimeout(() => {
    timeUp = true;
    setTimeout(() => startButton.classList.remove("hide"), 1000);
  }, 12000);
}

function bonk(e) {
  if (!e.isTrusted) return; //real mouse click
  score++;

  if (score >= highscore) {
    highscore = score;
    localStorage.setItem("highscore", highscore);
  }

  this.parentNode.classList.remove("up");

  scoreBoard.textContent = score;
  highScoreBoard.textContent = highscore;
}

moles.forEach(mole => mole.addEventListener("click", bonk));
startButton.addEventListener("click", startGame);
