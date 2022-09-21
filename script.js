'use strict';
let secnumber = Math.trunc(Math.random() * 20) + 1;
const newscore = Number(document.querySelector(`.score`));
let message = document.querySelector(`.message`);
let number = document.querySelector(`.number`);
let score = document.querySelector(`.score`);
let count = 20;
let highscore = 0;
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  if (!guess) {
    message.innerHTML = `insert a number`;
  } else if (guess > 20) {
    message.innerHTML = `guess a number between 1 - 20📈📉`;
  } else if (guess == secnumber) {
    message.innerHTML = `correct guess`;
    document.querySelector(`body`).style.backgroundColor = `blue`;
    number.style.width = `20rem`;
    number.innerHTML = secnumber;
    document.querySelector(
      `.between`
    ).innerHTML = ` you guessed the correct score `;
    // number.style.fontSize = `80px`;
    if (count > highscore) {
      highscore = count;
      document.querySelector(`.highscore`).innerHTML = highscore;
    }
  } else if (guess !== secnumber) {
    if (count > 1) {
      message.innerHTML = guess > secnumber ? `too high📉` : `too low📈`;
      count = count - 1;
      score.innerHTML = count;
    } else {
      message.innerHTML = `you lost the game.`;
      score.innerHTML = 0;
      document.querySelector(`body`).style.backgroundColor = `red`;
      document.querySelector(`.header`).innerHTML = ` Buy points to continue`;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  let score = 20;
  secnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.between`).innerHTML = `(Between 1 and 20)`;
  message.textContent = `Start guessing...`;
  score = score;
  score.textContent = score;
  number.textContent = `?`;
  document.querySelector(`.guess`).value = ``;

  document.querySelector(`body`).style.backgroundColor = `#222`;
  number.style.width = `15rem`;
});
