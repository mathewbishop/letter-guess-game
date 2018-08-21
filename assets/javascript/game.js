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

// global variables

var wins = 0;
var losses = 0;
var guessesRemaining = 12;

// text variables for displaying html
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var guessedLettersText = document.getElementById("guessedLetters-text");
var invalidInputText = document.getElementById("invalidInput-text")



var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    

document.onkeypress = function(event) {
    var userGuess = event.key.toLowerCase();    
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 

    
            

        if (userGuess === computerGuess) {
            ++wins;
            guessesRemaining = 12;
            guessedLettersText.textContent = "";
        }
        else {
            --guessesRemaining;   
        };

        if (guessesRemaining === 0) {
            ++losses;
            guessesRemaining = 12;
            guessedLettersText.textContent = "";
        };


    var guessedLetters = userGuess;
    // hide directions
    directionsText.textContent = "";

    winsText.textContent = "Breakthroughs: " + wins;
    lossesText.textContent = "Failures: " + losses;
    guessesRemainingText.textContent = "Guesses Remaining " + guessesRemaining;
    guessedLettersText.textContent += guessedLetters.toUpperCase();

}


    


  

