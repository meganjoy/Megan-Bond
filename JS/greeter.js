var firstName = prompt("Hi there! What's your first name?");
var lastName = prompt("What's your last name?");
var output = document.querySelector('#greeting');

var checkName = function() {
if(firstName && lastName){
    output.innerHTML = "<p>Thanks for visiting, " + firstName + " " + lastName + ".</p>";
} else {
    firstName = prompt('What is your first name, for real this time?');
    lastName = prompt('What is your last name, for real this time?');
    checkName();
}
}

checkName();
