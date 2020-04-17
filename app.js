//global constant variables
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase ul');
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('.btn__reset');
const tries = document.querySelector('#scoreboard ol');

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

//event listener to the “Start Game” button to hide the start screen overlay
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';

    let phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray); 
});


//randomly choose a phrase from the phrases array and split that phrase into a new array of characters. then return the new character array.
function getRandomPhraseAsArray(arr) {
    let pLength = arr.length;
    let randomP = Math.floor(Math.random() *  pLength);
    let thisP = arr[randomP];
    let characterArr= thisP.split('');
    return characterArr;
} 

//function that loops through an array of characters. Inside the loop, for each character in the array, reate a list item, put the character inside of the list item, and append that list item to the #phrase ul in the HTML. If the character in the array is a letter and not a space, the function will add the class “letter” to the list item.
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        const li = document.createElement('li');
        const char = arr[i];
        li.textContent = char;
    
        // adds classes according to character type for css styling
        if (li.textContent === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
        // puts characters in the DOM
        phrase.append(li);
    };
}

//function that checks the clicked letter against the phrase displayed in the DOM.
function checkLetter(key) {
    let response = null;
    //querySelector specifically for li with .letter class
    let letterArr = phrase.querySelectorAll('li.letter');
    for (i = 0; i < letterArr.length; i += 1) {
        const letter = letterArr[i].textContent.toLowerCase();
        if (letter === key.textContent) {
            //shows the clicked letter in the phrase
            letterArr[i].classList.add('show'); 
            response = letter;
        }
    }
    return response; 
}

// adds event listener to keyboard buttons and uses the checkletter function. 
qwerty.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.tagName === 'BUTTON') {
        //adds chosen CSS styling to button and disables button
        e.target.classList.add('chosen');
        e.target.disabled = true;

        const letterFound = checkLetter(e.target);
        
        // keeps track of wrong guesses and removes one heart for each wrong guess
        if (letterFound === null) {
            missed += 1;
            tries.removeChild(tries.children[0]);
        }
    }
});



