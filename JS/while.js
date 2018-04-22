
var n = 1;
var outputTarget = document.querySelector("#exerciseOne");
var outputHtml = "<ul>";

while (n <= 10) {
    console.log(n);
    outputHtml += "<li>" + n + "</li>";
    n++;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;

//Exercise 2
var i = 2;
var outputTarget = document.querySelector("#exerciseTwo");
var outputHtml = "<ul>";

while (i <= 20) {
    console.log(i);
    outputHtml += "<li>" + i + "</li>";
    i+=2;
}

outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;


//Exercise 3
var h = 100;
var outputTarget = document.querySelector("#exerciseThree");
var outputHtml = "<ul>";
var j = 1;
var sum = 0;

while (j < h) {
    sum += j;
    outputHtml += "<li>" + sum + "</li>";
    console.log(sum);
    j++;
}

outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

//Exercise 4
var n = 15;
var outputTarget = document.querySelector("#exerciseFour");
var outputHtml = "<ul>";

while (n > 0) {
    console.log(n);
    if ( n % 2 === 0) {
        outputHtml += "<li>even</li>";
    } else {
        outputHtml += "<li>odd</li>";
    }
    n--;
}

outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

//Exercise 5 Fizz Buzz
var n = 1;
var outputTarget = document.querySelector("#exerciseFive");
var outputHtml = "<ul>";

while (n <= 100) {
    if(n % 3 === 0 && n % 5 == 0){
        console.log("FizzBuzz");
        outputHtml += "<li>FizzBuzz</li>";
    } else if (n % 3 === 0) {
        console.log("Fizz");
        outputHtml += "<li>Fizz</li>";
    } else if (n % 5 === 0) {
        console.log("Buzz");
        outputHtml += "<li>Buzz</li>";
    } else {
        console.log(n);
        outputHtml += "<li>" + n + "</li>";
    }

    n++;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;
