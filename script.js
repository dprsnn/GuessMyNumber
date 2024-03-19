'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;
let hightScore = 0;

document.querySelector('.check').addEventListener('click', checkResult);

function checkResult() {
  const guess = Number(document.querySelector('.guess').value);

  // When no input
  if (!guess) {
    displayMessage('No number ⛔🔞');
    return;
  }
  // When user wins
  if (guess === secretNumber) {
    displayMessage('You win! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (gameScore > hightScore) {
      hightScore = gameScore;
      document.querySelector('.highscore').textContent = hightScore;
    }
  }
  //   When user loose
  else {
    if (gameScore > 1) {
      if (guess < secretNumber) displayMessage('Too low! 👇');
      else displayMessage('Too hight! 👆');

      gameScore--;
      document.querySelector('.score').textContent = gameScore;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('You lost the game! 👽');
    }
  }
}

document.querySelector('.again').addEventListener('click', reload);

function reload() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  gameScore = 20;
  document.querySelector('.score').textContent = '20';

  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
