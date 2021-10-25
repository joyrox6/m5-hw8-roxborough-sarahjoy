// Create an Array of at least 3 losing messages
var p = lose;

lose = ["Try again next time", "Sorry, you didn't win", "Oops, better luck next turn"];
console.log(lose);

// Create variables to count wins and losses
let count = losses;
let count = wins;

console.log(count);

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var message;

var wins;

var losses;

// target all .box elements and attach a click event listener to each one using a loop
document.querySelector('box-1').addEventListener("click", function() {alert("Enter number "); });
document.querySelector('box-2').addEventListener("click", function() {alert("Enter number "); });
document.querySelector('box-3').addEventListener("click", function() {alert("Enter number "); });

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable
this.textContent = event.target.textContent


// create a random number between 1-3 and store it to a variable
// This number will represent the winning box
var x = 3;

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
if (x = 3) {
    wins = true;
} else {
    wins = false; 
}

console.log("You've won!" + (wins + 1))

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
if (x != 3) {
    losses = true;
} else {
    losses = false; 
}

console.log(lose + (losses + 1))
