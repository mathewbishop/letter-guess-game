// letter guess game
// computer guesses a letter, and the user must guess the correct letter to win
// components
    // list of computer choices  
    // computer picks a random letter
    // record user input to get the user's guess
    // compare the user guess with the computer guess to determine a winner
        // counters
            // wins
            // losses
            // number of remaining guesses
            // guesses so far (display letters
    // on win or lose, restart game without page refresh

var wins = 0;
var losses = 0;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var guessedLettersText = document.getElementById("guessedLetters-text");
var test = document.getElementById("test-text");


var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    

document.onkeyup = function(event) {
    var userGuess = event.key;    
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
    var guessesRemaining = 7;
    for (var i = 0; i>0; i--) {
        guessesRemaining[i];
    }

        if (userGuess === computerGuess) {
            wins++;
        }
        else {
            losses++;
        }
    

    winsText.textContent = "Breakthroughs: " + wins;
    lossesText.textContent = "Failures: " + losses;
    guessesRemainingText.textContent = "Guesses Remaining " + guessesRemaining;
  
};