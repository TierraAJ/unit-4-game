$(document).ready(function() {

//Set initial variables.
var computerNumText = document.getElementById("computer-num")
var userTotalText = document.getElementById("user-total")   
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var wins = 0;
var losses = 0;
var yourTotal = 0;

//Generate computer's random number.
function computerRandom() {
    var random = Math.floor((Math.random() * 100) + 10);
    $("#computer-num").html("<h1>Target: <h1>" + random);
    return random;
}

computerNumText = computerRandom();
console.log("Computer Target Number: " + computerNumText);

//Assign crystals a random number.
function crysNum() {
    var crystal1 = Math.floor((Math.random() * 3) + 1);
    var crystal2 = Math.floor((Math.random() * 5) + 1);
    var crystal3 = Math.floor((Math.random() * 10) + 2);
    var crystal4 = Math.floor((Math.random() * 10) + 2);
    console.log("Crystal 1: " + crystal1);
    console.log("Crystal 2: " + crystal2);
    console.log("Crystal 3: " + crystal3);
    console.log("Crystal 4: " + crystal4);
}
 crysNum()  

$("user-total").on("click", function(event) {

    $(".crystals").append(crystal);

    //Log out random crystal values in Console.


userTotalText = yourTotal; 
$(userTotalText).text("#user-total");    

//Crystal Onclick Function.
// $(".crystal-icon").click(function(event){
    $(this).append("#user-total");
    //crysNum + yourTotal;
    // Prints key that user selects.
    //$("#user-total").append(userTotalText);
    
  }); 


//Add additional Clicks to value of first.


//Set up if statements to define wins an losses.


})