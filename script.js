'use strict';

// OTPless Callback Function
function otpless(otplessUser) {
  console.log(JSON.stringify(otplessUser));
}

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Display Message Function : 
const DisplayMessage = function(messgae) {
    document.querySelector('.message').textContent = messgae;
}

// Display Number Function :
const DisplayNumber = function(number) {
    document.querySelector('.number').textContent = number;
}

// Display Score Function : 
const DisplayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

// Game Code : 
document.querySelector('.check').addEventListener('click' , function() {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no Input
    if (!guess) {
        DisplayMessage('No Number!');
    } 

    // When Player WINS
    else if (guess === SecretNumber) {
        DisplayMessage('Correct Number!');
        DisplayNumber(SecretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347'; // Green Color
        document.querySelector('.number').style.width = '30rem';

        // HighScore Code :
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } 

    // When Guess is Wrong : 
    else if (guess !== SecretNumber) {
        if (score > 1) {
            DisplayMessage(guess > SecretNumber ? 'Too High!' : 'Too Low!');
            score--;
            DisplayScore(score);
        } else {
            DisplayMessage('You Lost the Game!');
            DisplayScore(0);
            document.querySelector('body').style.backgroundColor = '#ff0000'; // Red Color
        }
    }
});

// Again Button Code : 
document.querySelector('.again').addEventListener('click' , function() {
    score = 20;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;

    DisplayMessage('Start Guessing...');
    DisplayScore(score);
    DisplayNumber('?');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222'; // Default Color
    document.querySelector('.number').style.width = '15rem';
});
