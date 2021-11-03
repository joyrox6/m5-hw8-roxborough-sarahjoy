// Create an Array of at least 3 losing messages
var losingMessages = [

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
        console.log(event.target.innerHTML)
        // within each click event...
        // determine which box was clicked with 'this.textContent' or event.target.textContent
        // convert that value to a number and store it to a variable
        var numWasClicked = Number(event.target.textContent)
        console.log(numWasClicked)
        //console.log(typeof boxNumWasClicked, boxNumWasClicked)
        //console.log(typeof parseInt(boxNumWasClicked, 10), parseInt(boxNumWasClicked, 10))
        //console.log(parseInt(boxNumWasClicked, 10))
        //console.log(Number(boxNumWasClicked))
        // create a random number between 1-3 and store it to a variable
        // This number will represent the winning box
        var randomNumber = Math.floor((Math.random() * boxElements.length) + 1);
        console.log(randomNumber)
        
        // determine if the box clicked is equal to the random number
        // if the numbers match, display a winning message by changing the text content of the div#message element
        // if the numbers match, increment wins and display the win count in div#wins
        // if the numbers don't match, change the div#message element's text to a random losing message from the array above
        // if the numbers don't match, increment losses and display the loss count in div#losses
        
        if (randomNumber === numWasClicked) {
            console.log("You've won!")
            messageEl.innerHTML = "You've won!"
            wins ++
            winsEl.innerHTML = "Wins: " + wins;
        } else {
            console.log("You've lost")
            //lossesEl.innerHTML = messages;
            messageEl.innerHTML = losingMessages[Math.floor((Math.random() * losingMessages.length))]
            losses ++
            lossesEl.innerHTML = "Losses: " + losses;
        }
  
       


    }
}


