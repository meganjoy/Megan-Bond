var output = document.querySelector('#game');
var roundCounter = 0;

//check for correct choice
// var checkChoice = function() {
// if(userChoice === 'R'||'P'||'S') {
//     output.innerHTML = "<p>" + userChoice + "</p>";
// } else {
//     userChoice = prompt("Choose wisely.");
//     checkChoice();
// }
// }
// checkChoice();
var roundNumber = function () {
var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'");



var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
  }

var compare = function(userChoice,computerChoice){
    if(userChoice===computerChoice){
        alert("The result is a tie!");
    }
    if(userChoice==="R"){
        if(computerChoice==="scissors"){
            alert("rock wins");
        }
        else{
            alert("paper wins");
        }
    }
    if(userChoice==="P"){
        if(computerChoice==="rock"){
            alert("paper wins");
        }
        else{
            alert("scissors wins");
        }
    }
    if(userChoice==="S"){
        if(computerChoice==="rock"){
            alert("rock wins");
        }
        else{
            alert("scissors wins");
        }
    }
};
compare(userChoice,computerChoice);
}
while (roundCounter < 5) {
    roundNumber();
    roundCounter++;

}
