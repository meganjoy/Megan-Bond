function stringPrinter(starterString) {
  document.querySelector('#output').innerHTML += starterString +'<br>';
}


function funnySentence( adjective, noun, verb, adverb ){
  var sentence = "The " + "<span class='adjective'>" + adjective + "</span>" + " " + "<span class='noun'>" + noun + "</span>" + " " + "<span class='verb'>" + verb + "</span>" + " " + "<span class='adverb'>"+ adverb + "</span>" + ".";

  stringPrinter(sentence);

}



var funnyAdjectives = ['lifelike', 'rabid', 'agile', 'raw'];
var funnyNouns = ['table leg', 'biscuit', '90s cartoons', 'switchblade'];
var funnyVerbs = ['balloons', 'factors', 'closes', 'hollers'];
var funnyAdverbs = ['listlessly', 'morbidly', 'adventurously', 'cruelly'];


//create random sentence
function randomSentence( wordOne, wordTwo, wordThree, wordFour ){
  var wordOne = funnyAdjectives[Math.floor(Math.random() * funnyAdjectives.length)];
  var wordTwo = funnyNouns[Math.floor(Math.random() * funnyNouns.length)];
  var wordThree = funnyVerbs[Math.floor(Math.random() * funnyVerbs.length)];
  var wordFour = funnyAdverbs[Math.floor(Math.random() * funnyAdverbs.length)];
  var sentence = "The " + wordOne + " " + wordTwo + " " + wordThree + " " + wordFour + ".";
  stringPrinter(sentence);
}
