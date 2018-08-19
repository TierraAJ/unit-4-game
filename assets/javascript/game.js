//Set initial variables.
var computerNumText = document.getElementById("computer-num")
var userTotalText = document.getElementById("user-total")   
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var wins = 0;
var losses = 0;
var yourTotal = 0;
var crystalsRandom = [1, 3, 5, 10, 12, 20]

//Generate computer's random number.
function computerRandom() {
    var random = Math.floor((Math.random() * 100) + 2);
    return random;
}

computerNumText = computerRandom();
console.log(computerNumText);

$("#computer-num").text();

//Assign crystals a random number.
function crystal1Random() {
    var random = Math.floor((Math.random() * crystalsRandom.length));
    return crystalsRandom[random];
}

$("#button-1").text() = crystal1Random();
console.log(crystal1Random);



//Crystal Onclick Function.
$(this).onkeyup = function(event) {
    // Prints key that user selects.
    $(yourTotal).text(crystal1Random) = event.key;
    
  }; 


//Add additional Clicks to value of first.


//Set up if statements to define wins an losses.


//