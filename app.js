//global constant variables
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('.btn__reset');

//global let variables
let missed = 0;

//global constant arrays
const phrases = [
    "Ctrl Shift I",
    "Developer Tools",
    "Mobile First Design",
    "Good Code is Simple Code",
    "DRY Dont Repeat Yourself",
    "Good Documentation is Essential"
];

//Attach a event listener to the “Start Game” button to hide the start screen overlay
startButton.addEventListener('click', () => {
    overlay.classList.add('hide');
});



