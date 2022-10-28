'use strict';

// console.log(document.querySelector(".message").textContent);

// let contentNumber = document.querySelector(".number").textContent = 13;
//                     console.log(contentNumber);

// let msg = document.querySelector(".message").textContent = "correct number 🌟";

// let score = document.querySelector(".score").textContent = 10;


// let input = document.querySelector(".guess").value = 23;
//             console.log(input)

function displayMsg (msg) {
  document.querySelector(".message").textContent = msg;
}

const btnCheck = document.querySelector(".check");
const guess    = document.querySelector(".guess");
    let score  = 20;


const displayedNumber = document.querySelector(".number");
    let secretNumber  = Math.trunc(Math.random() * 20) + 1; // A SECRET NUMBER


let getScore     = document.querySelector(".score");
let getHighScore = document.querySelector('.highscore');
let highScore    = 0;



btnCheck.addEventListener("click", function () {
    
  let guessValue = +guess.value;  //  transform the input value to Number

  if (!guessValue) {       // !guess = guess === 0
      displayMsg("🛑 No Number!") 

  } else if (guessValue === secretNumber) {  // IF the Guess Number Is True
              displayMsg("🌟 Correct Number");
              displayedNumber.textContent = secretNumber;

              //STYLING
              document.querySelector("body").style.backgroundColor = "#60b347";
              displayedNumber.style.width = '30rem';

              // HIGH SCORE
            let numOfScore = getScore.textContent;
              highScore += +numOfScore; // ASSGIN SCORE INTO highScore 
                                       //&& transform the numOfScore to Number
              getHighScore.textContent = highScore
  } else if (guessValue !== secretNumber) {
            let whichMsg =  guessValue > secretNumber  ?
                            "↗️ Too high" : "↘️ Too low";
            if(score > 1) {
              displayMsg(whichMsg);
              score--
              getScore.textContent = score;

            } else {
              displayMsg("💥 You lost the game");
              getScore.textContent = 0;
            }

  }
  
    // else if (guessValue !== secretNumber) {
    //   if (score > 1) {
    //     msg.textContent = guess > secretNumber ?
    //       "↗️ Too high" : "↘️ Too low";
    //     score--
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     msg.textContent = "💥 You lost the game";
    //     document.querySelector(".score").textContent = 0;
  
    //   }
  
  // else if (guessValue === secretNumber) {
  //   msg.textContent = "🌟 Correct Number";
  //   displayedNumber.textContent = secretNumber;
  //   //STYLING
  //   document.querySelector("body").style.backgroundColor = "#60b347";
  //   displayedNumber.style.width = '30rem';

  //   if (getScore > getHighScore) {
  //     let scoreNumber = getHighScore.textContent += getScore.textContent;     // highScore.textContent = highScore;
  //     // let scoreNumber = parseInt(getHighScore.textContent);
  //     console.log(scoreNumber)
  //     // console.log(getHighScore.textContent += +score)    
  //   }


















  // }

  // } else if (guessValue > secretNumber) {
  //   if (score > 1) {
  //     msg.textContent = "↗️ Too high";
  //     score--
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     msg.textContent = "💥 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  //   }

  // } else if (guessValue < secretNumber) {
  //   if (score > 1) {
  //     msg.textContent = "↘️ Too low";
  //     score--
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     msg.textContent = "💥 You lost the game";
  //     document.querySelector(".score").textContent = 0;

  //   }
  // }
});



/*----------Chalenage #1------------- */
let btnAgain = document.querySelector(".again");

btnAgain.addEventListener('click', function () {

  displayedNumber.textContent = "?";
  displayedNumber.style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMsg('Start Guessing...');
  guess.value = "";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.body.style.backgroundColor = '#333';

});



