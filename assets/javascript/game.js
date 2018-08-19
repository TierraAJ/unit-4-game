//Set initial variables.
var computerNumText = document.getElementById("computer-num")
var userTotalText = document.getElementById("user-total")   
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var wins = 0;
var losses = 0;
var yourTotal = 0;
var crystalsRandom = [ 1, 3, 5, 10,]
var crystal1 = Math.floor(Math.random() * crystalsRandom.length);
var crystal2 = Math.floor(Math.random() * crystalsRandom.length);
var crystal3 = Math.floor(Math.random() * crystalsRandom.length);
var crystal4 = Math.floor(Math.random() * crystalsRandom.length);


console.log("Crystal 1: " + crystal1);
console.log("Crystal 2: " + crystal2);
console.log("Crystal 3: " + crystal3);
console.log("Crystal 4: " + crystal4);



//Generate computer's random number.
function computerRandom() {
    var random = Math.floor((Math.random() * 100) + 2);
    return random;
}

computerNumText = computerRandom();
console.log("Computer Target Number: " + computerNumText);

$("#computer-num").text();

//Assign crystals a random number.
function crystal1Num() {
    var random = Math.floor(Math.random() * crystalsRandom);
    return crystalsRandom[random];
}
console.log("Crystal 1: " + crystal1Num());



//Crystal Onclick Function.
$(this).onkeyup = function(event) {
    // Prints key that user selects.
    $(yourTotal).text(crystal1Random) = event.key;
    
  }; 


//Add additional Clicks to value of first.


//Set up if statements to define wins an losses.


//