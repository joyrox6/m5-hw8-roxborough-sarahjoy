// Create an Array of at least 3 losing messages
var messages = [

'Try again next time',
'Sorry, you lost', 
'Oops, better luck next turn'

]

// Create variables to count wins and losses
var wins = 0
var losses = 0

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var messageEl = document.getElementById('message')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')

// target all .box elements and attach a click event listener to each one using a loop
var boxElements = document.querySelectorAll('.box')
// console.log(boxElements)

for (var i = 0; i < boxElements.length; i++) {
    // 0, 1, 2
    var boxElement = boxElements[i];
    // console.log(boxElements[i])
    console.log(boxElement)
    boxElement.onclick = function(event) {
        // within each click event...
        // determine which box was clicked with 'this.textContent' or event.target.textContent
        // convert that value to a number and store it to a variable
        var numWasClicked = Number(event.target.textContent)
        //console.log(typeof boxNumWasClicked, boxNumWasClicked)
        //console.log(typeof parseInt(boxNumWasClicked, 10), parseInt(boxNumWasClicked, 10))
        //console.log(parseInt(boxNumWasClicked, 10))
        //console.log(Number(boxNumWasClicked))
    }
}

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

console.log(messageEl + (losses + 1))
