'use strict';

let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let score = 20;
let highScore = 0;

const displayMessage = function (className, message) {
  document.querySelector(className).textContent = message;
};
let intendedNumber;
const getIntendedNumber = function () {
  return (intendedNumber = Math.floor(Math.random() * 20) + 1);
};
getIntendedNumber();

checkBtn.addEventListener('click', function () {
  let guessInput = Number(document.querySelector('.guess').value);

  if (!guessInput) {
    displayMessage('.message', 'No number!');
  } else if (guessInput !== intendedNumber) {
    if (score > 1) {
      displayMessage(
        '.message',
        guessInput > intendedNumber ? 'To high!' : 'To low!'
      );
      score--;
      displayMessage('.score', score);
    } else {
      displayMessage('.message', 'You lost the game');
      displayMessage('.score', 0);
    }
  } else if (guessInput === intendedNumber) {
    displayMessage('.message', 'Correct number!!!');
    if (score > highScore) {
      highScore = score;
      score = 20;
      displayMessage('.highscore', highScore);
      displayMessage('.number', intendedNumber);
      document.body.classList.add('green');
    }
  }
});

againBtn.addEventListener('click', function () {
  getIntendedNumber();
  displayMessage('.message', 'Start guessing...');
  displayMessage('.score', 20);
  document.querySelector('.guess').value = '';
  displayMessage('.number', '?');
  document.body.classList.remove('green');
});
