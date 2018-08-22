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
// counters
var wins = 0;
var losses = 0;
var guessesRemaining = 12;


// text variables for displaying html
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var guessedLettersText = document.getElementById("guessedLetters-text");
var invalidInputText = document.getElementById("invalidInput-text");
var winLossText = document.getElementById("winLoss-text");


// list of options to choose from
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// function that resets the game, called upon a met win/loss condition
function gameReset() {
    var code = event.charCode;
if (code == 13) { 
    document.location.reload();
    }
}
// function for resetting the guessed letters array
function guessedLettersReset() {
    guessedLettersText.textContent = "Guessed Letters: ";
}
// hides "Guessed Letters: " html until user begins game
guessedLettersText.style.display = "none";
// the main function of the game
document.onkeypress = function(event) {
    // stores the keypress of the user and converts it to lower case
    var userGuess = event.key.toLowerCase();    
    // stores the computers guess, a random index number from the array 'options'
    var computerGuess = options[Math.floor(Math.random() * options.length)]; 
    // displays "Guessed Letters: " html once user begins game
    guessedLettersText.style.display = "initial";
    // records guessed letters
    guessedLetters = [];
    // an if statement that only allows game to run if user presses an alphabetical key
        if ((options.indexOf(userGuess) > -1) || (event.charCode == 13)) {
            
            
                        // adds to wins if user guess is same as computer guess, else decreases guesses remaining
                        if (userGuess === computerGuess) {
                            ++wins;
                            guessesRemaining = 12;
                        }
                        else {
                            --guessesRemaining;   
                            guessedLetters.push(userGuess);
                        };

                        // if the guesses remaining falls to zero, 1 is added to losses, guessesRemaining and guessedLetters reset
                        if (guessesRemaining === 0) {
                            ++losses;
                            guessesRemaining = 12;
                            guessedLettersReset();
                        };

                        


                        // win and loss conditions, enter runs a function gameReset() to restart the game
                        if (wins >= 2) {
                            winLossText.textContent = "You win! Press 'enter' to restart";
                            gameReset();
                        }

                        if (losses >= 2) {
                            winLossText.textContent = "You lose! Press 'enter' to restart";
                            gameReset(); 
                        }
        
                        

    

    // hide directions
    directionsText.textContent = "";

    // display counters and guessed letters
    winsText.textContent = "Breakthroughs: " + wins;
    lossesText.textContent = "Failures: " + losses;
    guessesRemainingText.textContent = "Guesses Remaining " + guessesRemaining;
    guessedLettersText.textContent += guessedLetters.join(" ").toUpperCase();

    }
        
    

}




    


  

