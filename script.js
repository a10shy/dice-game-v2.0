"use strict";
//it was 43 AND 24 at begining
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentEl0 = document.querySelector("#current--0");
const currentEl1 = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const winn = document.querySelector(".loo");
//switch player
const switchplayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
//initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
//rolling dice
btnRoll.addEventListener("click", function () {
  const ran = Math.trunc(Math.random() * 6 + 1);
  //generate random dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${ran}.png`;
  //display dice
  console.log(ran);
  //check for 1, then next player
  if (ran != 1) {
    currentScore += ran;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchplayer();
  }
});
btnHold.addEventListener("click", function () {
  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    //player WON
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    btnHold.classList.add("hidden");
    diceEl.classList.add("hidden");
    btnRoll.classList.add("hidden");
    document.querySelector(".cop").textContent = `Player ${
      activePlayer + 1
    } wins`;
  } else switchplayer();
});
btnNew.addEventListener("click", function () {
  document.querySelector(".cop").textContent = ` `;
  scores = [0, 0];
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentEl0.textContent = 0;
  currentEl1.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  btnHold.classList.remove("hidden");
  diceEl.classList.add("hidden");
  btnRoll.classList.remove("hidden");
});
