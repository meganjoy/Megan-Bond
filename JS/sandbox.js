$("img").hide();

var response = prompt(`Step One: Let's turn the title blue. Type '$("h1").css("color", "blue")' in the box below`);

$("h1").css("color", "blue");


if(response === `$("h1").css("color", "blue")`){
    response = alert("Your mom would be so proud.");
    $("h1").css("color", "blue");
} else {
    alert("Ooh you missed something.  Try again.");
};



$(".secondStep").click(function(){
    alert("The button was clicked.  This was a result of the .click(function())");
});


$(".thirdStep").click(function() {
  var response = prompt(`Step Three: Let's change the margins to make this webpage more attractive. Right click, open inspect, click console, and then type '$("div.container").css("padding", "20px");' into the box `);

if(response === `$("div.container").css("padding", "20px");`){
    response = alert("Your mom would be so proud.");
    $("div.container").css("padding", "20px");
} else {
    alert("Please try again.");
};
});

//
// $(document).ready(function(){
//     $("#hide").click(function(){
//         $("p").hide();
//     });
//     $("#show").click(function(){
//         $("p").show();
//     });
