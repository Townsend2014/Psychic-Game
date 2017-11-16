var letters = ["a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z'"];

// Scoreboard
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesSoFar = [];

// Computer random guessing
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);

// Event Listeners
document.onkeypress = function(event) {
    var userGuess = event.key;
    console.log(userGuess);

// Scoring

    if(userGuess === computerGuess){
        wins++;
        document.getElementById('wins').innerHTML = wins;
    }else{
        guesses--;
        document.getElementById('guesses').innerHTML = guesses;
        guessesSoFar.push(userGuess);
        document.getElementById('guessesSoFar').innerHTML = guessesSoFar;

    }
    if(guesses === 0){
        losses++;
        guesses = 10;
        guessesSoFar = [];
        document.getElementById('losses').innerHTML = losses;
    }  
 
    
}  

// How to push userGuess var guessesSoFar = userGuess.push(); or guessesSoFar.push(userGuess);