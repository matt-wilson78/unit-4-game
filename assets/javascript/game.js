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

$(function() {
    // Short Document Ready
});

//what I'll need

//var for random number to match
var randomNum = generateNumberToMatch();

//var for each crystal
var crystalOneNum = generateCrystalNumber();
var crystalTwoNum = generateCrystalNumber();
var crystalThreeNum = generateCrystalNumber();
var crystalFourNum = generateCrystalNumber();

//var for wins
var wins = 0;
//var for losses
var losses = 0;
//var for score
var score = 0;

//function to assign random numbers between 1-12 to crystals
function generateCrystalNumber() {
    return Math.floor(Math.random() * 12) + 1;
}

//function to generate the number that needs to be matched
function generateNumberToMatch() {
    return Math.floor(Math.random() * 102) + 19;
}


        //function to reset after win or loss
        function reset() {
            $("#totalScore").html(0);
            score = 0;
            randomNum = generateNumberToMatch();
            $("#numberToMatch").html(randomNum);
            crystalOneNum = generateCrystalNumber();
            crystalTwoNum = generateCrystalNumber();
            crystalThreeNum = generateCrystalNumber();
            crystalFourNum = generateCrystalNumber();
        }

        $("#numberToMatch").html(randomNum);

        //click functions for each crystal
        $("#crystal1").on("click", function() {
            score += crystalOneNum;
            console.log(score);
            $("#totalScore").html(score);
            didIWin();

        })

        $("#crystal2").on("click", function() {
            score += crystalTwoNum;
            $("#totalScore").html(score);
            didIWin();

        })

        $("#crystal3").on("click", function() {
            score += crystalThreeNum;
            $("#totalScore").html(score);
            didIWin();

        })

        $("#crystal4").on("click", function() {
            score += crystalFourNum;
            $("#totalScore").html(score);
            didIWin();

        })

        //function to determine win or loss, if loop
        function didIWin() {
            if (score === randomNum) {
                wins++;
                $("#numWins").html("Wins: " + wins);
                reset();
            } else if (score > randomNum) {
                losses++;
                $("#numLosses").html("Losses: " + losses);
                reset();
            }
        }

        //function to restart the game
        $("#restart").on("click", function() {
        score = 0;
        wins = 0;
        losses = 0;
        $("#totalScore").html(0);
        $("#numWins").html("Wins: " + 0);
        $("#numLosses").html("Losses: " + 0);
        randomNum = generateNumberToMatch();
        $("#numberToMatch").html(randomNum);
        crystalOneNum = generateCrystalNumber();
        crystalTwoNum = generateCrystalNumber();
        crystalThreeNum = generateCrystalNumber();
        crystalFourNum = generateCrystalNumber();
});


