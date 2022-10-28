'use strict';
// Get The Element;
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
console.log(player0El)
console.log(player1El)


const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const score0El   = document.querySelector("#score--0");
const score1El   = document.getElementById("score--1");
const diceEl     = document.querySelector(".dice");

const btnRoll  = document.querySelector(".btn--roll")
const btnHold  = document.querySelector(".btn--hold")
const btnNew   = document.querySelector(".btn--new")

let scores, currentScore, acitvePlayer, playing

// 
      score0El.textContent = 0; 
      score1El.textContent = 0;
      diceEl.classList.add("hidden");
  

// Rolling dice functionality
const init = function () {

    currentScore = 0;
    acitvePlayer = 0;
    playing = true;
    scores  = [0, 0];
    
    score0El.textContent = 0; 
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;


    diceEl.classList.add("hidden");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");

}

init();

const swichPlayer = function () {
      document.getElementById(`current--${acitvePlayer}`).textContent =0;
      currentScore = 0;
      acitvePlayer = acitvePlayer === 0 ? 1 : 0;
      player0El.classList.toggle("player--active")
      player1El.classList.toggle("player--active")
}

btnRoll.addEventListener ("click", function (){

  if (playing) {
    // Generating random dice roll;
    const dice = Math.trunc( Math.random() * 6) +1; // A secret number to random
    
    //  display dice;
          diceEl.classList.remove("hidden");
          diceEl.src = `dice-${dice}.png`;
    
    // Check for rolled 1
    

      if (dice !== 1) {

          currentScore += dice;
          document.getElementById(`current--${acitvePlayer}`).textContent = currentScore;
    
        } else {
        // Swich to next player
          swichPlayer();

      }
  }
});


btnHold.addEventListener("click", function () {
  
  if (playing) {
    // Add current score to active player's score;
      scores[acitvePlayer] += currentScore;
      document.getElementById(`current--${acitvePlayer}`).textContent = scores[acitvePlayer];

      if (scores[acitvePlayer] >= 20) {
          //finsh the game;
          playing = false;
          diceEl.classList.add("hidden");

          document.querySelector(`.player--${acitvePlayer}`).classList.add("player--winner");
          document.querySelector(`.player--${acitvePlayer}`).classList.remove("player--active");

      } else {
          swichPlayer();
      }
  }
})


btnNew.addEventListener("click", init);
