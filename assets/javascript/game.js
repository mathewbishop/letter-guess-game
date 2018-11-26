//===================================================================
// DOM Nodes
//===================================================================
// const hiddenWord = document.getElementById("hidden-word");
// const hint = document.getElementById("hint");
// const clock = document.getElementById("clock");
// const guessed = document.getElementById("guessed-letters");
// const usrInput = document.getElementById("user-input");
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



console.log(wordGen());
