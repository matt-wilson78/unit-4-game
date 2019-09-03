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

//$(function(){
// Short Document Ready
//});

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
//function to reset/ start game
function reset() {
    $(function () {
        score = 0;
        wins = 0;
        losses = 0;
    })
}

$("#numberToMatch").html(randomNum);

//click functions for each crystal
$("#crystal1").on("click", function () {
    score + crystalOneNum;
    console.log(score);
    $("#totalScore").html(score);
})
$("#crystal2").on("click", function () {
    score + crystalTwoNum;
    $("#totalScore").html(score);

})
$("#crystal3").on("click", function () {
    score + crystalThreeNum;
    $("#totalScore").html(score);

})
$("#crystal4").on("click", function () {
    score + crystalFourNum;
    $("#totalScore").html(score);

})
//function to increase score as crystals are clicked

//function to determine win or loss, if loop

//functions to post wins & losses
