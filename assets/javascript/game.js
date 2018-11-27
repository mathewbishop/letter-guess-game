//===================================================================
// DOM Nodes
//===================================================================
const hiddenWord = document.getElementById("hidden-word");
const hint = document.getElementById("hint");
const clock = document.getElementById("clock");
const guessed = document.getElementById("guessed-letters");
const userInput = document.getElementById("user-input");
//===================================================================
// Generate Hidden Word
//===================================================================
function wordGen() {
    let wordBank = [
        {
            word: "Alpha",
            hint: "Greek for 'first'."
        },
        {
            word: "Propaganda",
            hint: "The vehicle that carries the 'big lie' to the masses."
        },
        {
            word: "Darknet",
            hint: "The internet, with the lights turned off."
        },
        {
            word: "Corporatocracy",
            hint: "Rule by the corporations."
        },
        {
            word: "Neon",
            hint: "The light that bathes modern cities."
        }
    ]
    let wordChosen =  wordBank[Math.floor(Math.random() * wordBank.length)]
    return wordChosen.word;
}
//===================================================================
// Compare guess to hidden word
//===================================================================
function guessCompare(currentWord, usrGuess) {
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord.includes(usrGuess)) {
            currentWord.replace(i, usrGuess);
        }
    }
}
//===================================================================
// Listen for user guess via input submit
//===================================================================
userInput.addEventListener("submit", event => {
    event.preventDefault();

})