var name = prompt('What is your name?');
var output = document.querySelector('#greeting');

  var checkName = function(){
    if(name === "") {
      name = prompt('What is your name, for real this time?');
      checkName(); // repeats until a name exists
    }
  }

  checkName(); // kicks off the name-checking the first time

output.innerHTML = "<h2 id='greeting'> Thanks for visiting " + name + "</h2>";
