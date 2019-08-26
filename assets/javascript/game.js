//How The Game Works
//4 crystals with random numbers between 1-12 assigned
//Random number between 19-120 to try to match with crystals
//4 crystals will be displayed as buttons, so will need click functions
//need to add random amount from crystal clicked to "score" that's trying to match random number at top
//crystal amounts remain hidden, player will know value when it's added to "score"
//player loses if score goes above random number
//player wins if score matches random number
//game restarts at win or loss
//new random number at top & with each crystal on restart
//show number of wins & losses, don't refresh page to restart game

//what I'll need

//var for random number
var randomNum = Math.floor(Math.random() * 102) + 19;
console.log(randomNum);
//var for each crystal? or one var that will update all?
var crystalOneNum = Math.floor(Math.random() * 13);
console.log("C 1: " + crystalOneNum);
var crystalTwoNum = Math.floor(Math.random() * 13);
console.log("c 2: " + crystalTwoNum);
var crystalThreeNum = Math.floor(Math.random() * 13);
console.log("c 3: " + crystalThreeNum);
var crystalFourNum = Math.floor(Math.random() * 13);
console.log("c 4: " + crystalFourNum);
//var for wins
var wins = 0;
//var for losses
var losses = 0;
//var for score
var score = 0;
//click functions for each crystal

//function to increase score as crystals are clicked

//function to determine win or loss, if loop

//functions to post wins & losses
