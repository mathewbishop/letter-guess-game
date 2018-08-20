
// display words/placeholder
// user input to guess letters          keypress event
// limited number of letter guesses     if statements?
// guesses remaining recorder           if statement/loop?
// placeholder for the word user is trying to guess(underscores)
// determine whether guess was correct or incorrect         if statement
// record wins                                          
// record losses
// game over and restart


var wordList = ["Grey Hat", "Back Door", "Brute Force Attack", "Doxing", "Keylogger"];
var wordSetText = document.getElementById("wordSet-text"); 
var wrongGuessText = document.getElementById("wrongGuess-text");
var wordChoice = wordList[Math.floor(Math.random() * wordSet.length)];


document.onkeypress = function(event) {
    var userGuess = event.key;

    if (userGuess === wordChoice[]) {
        
    }   



}