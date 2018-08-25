
// global variables
// counters
var wins = 0;
var losses = 0;
var guessesRemaining = 10;


// text variables for displaying html
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var guessedLettersText = document.getElementById("guessedLetters-text");
var invalidInputText = document.getElementById("invalidInput-text");
var winLossText = document.getElementById("winLoss-text");
var storyText = document.getElementById("story-text");

// an empty array to store the userGuess
var guessedLetters = [];
// list of options to choose from
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// function that resets the game, called upon a met win/loss condition
function gameReset() {
    var code = event.charCode;
if (code === 13) { 
    document.location.reload();
    }
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
    storyText.style.display = "none";
    
    
    //var duplicateCheck = guessedLetters.includes(userGuess);
    // an if statement that only allows game to run if user presses an alphabetical key or enter
        if ((options.indexOf(userGuess) > -1) || (event.charCode === 13)) {
    
                        
                        
                
                        // if userGuess is equal to computerGuess, adds to wins and resets guessesRemaining
                        if (userGuess === computerGuess) {
                            ++wins;
                            guessesRemaining = 10;
                        }
                        // if the above are not equal...
                        else  {
                            if (guessedLetters.includes(userGuess)) {  // does not allow duplicate guesses
                            
                            }
                            // subtracts from guessesRemaining and pushes the guessedletter to the appropriate array
                            else {                                     
                            --guessesRemaining;
                            guessedLetters.push(userGuess);
                            }
                        }
    
                        // if the guesses remaining falls to zero, 1 is added to losses, guessesRemaining and guessedLetters reset
                        if (guessesRemaining === 0) {
                            ++losses;
                            guessesRemaining = 10;
                            guessedLetters = [];
                        }
                    

                        // win and loss conditions, enter runs a function gameReset() to restart the game
                        if (wins >= 3) {
                            winLossText.textContent = "You win! Press 'enter' to restart";
                            gameReset();
                        }

                        if (losses >= 4) {
                            winLossText.textContent = "You lose! Press 'enter' to restart";
                            gameReset(); 
                        }


    // hide directions
    directionsText.textContent = "";

    // display counters and guessed letters
    winsText.textContent = "Breakthroughs: " + wins;
    lossesText.textContent = "Failures: " + losses;
    guessesRemainingText.textContent = "Guesses Remaining " + guessesRemaining;
    guessedLettersText.textContent = guessedLetters.join("").toUpperCase();
        

    }

}




    


  

