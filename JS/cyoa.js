var response = prompt("The gravel road leads to a village, its tall houses dark as tombstones. Nestled among these solemn dwellings are a handful of closed-up shops. Even the tavern is shut tight. A soft whimpering draws your eye toward a pair of children standing in the middle of an otherwise lifeless street.  Type 'approach' if you want to go near or you can decide to 'run away' .");

if(response === "approach"){
    response = prompt("Rose is clutching a small doll.  After shushing the boy, the girl turns to you and says, `There’s a monster in our house!` She then points to a tall brick row house that has seen better days. Its windows are dark. It has a gated portico on the ground floor, and the rusty gate is slightly ajar. Do you 'go in' or 'question' the children?");
    if(response === "go in"){
            response = alert("Your mom would be so proud!");
            } else if (response === "question") {
              response = alert("The children call you a coward and tell you to get in there and kill the monster.");
          } else {
              alert("Please type in a valid input! Refresh the page to try again.");
          }
} else if (response === "run away") {
    response = alert("You stupid coward.  Go and help the children...");
} else {
    alert("Please type in a valid input! Refresh the page to try again.");
}

var response = prompt("Rose and Thorn say that they won’t go back in the house until they know the monster is gone. As you head through the main hall, you notice a spiral staircase leading to a second floor.  Do you 'head upstairs' or 'explore below'?");
if(response === "head upstairs"){
    response = prompt("You find yourself in the master bedroom. Resting on the yellowed tablecloth is an empty porcelain bowl and a matching jug.  The door facing the foot of the bed has a full-length mirror mounted on it. The door opens to reveal an empty, dust-choked closet. A door in the parlor leads to an outside balcony.  Do you need to 'smoke' outside or 'check' the other rooms?");
    if(response === "smoke"){
            response = alert("You're going to get lung cancer.");
          } else if (response === "check") {
              response = alert("You head down a narrow passageway into what appears to be servant's quarters.");
          } else {
              alert("Please type in a valid input! Refresh the page to try again.");
          }
} else if (response === "explore below") {
    response = alert("You step on a loose floorboard and slip into the basement unconscious.  Sorry--game over.");
} else {
    alert("Please type in a valid input! Refresh the page to try again.");
}

var response = prompt("An undecorated bedroom contains a pair of beds with straw-stuffed mattresses. At the foot of each bed is an empty footlocker. Tidy servants’ uniforms hang from hooks in the adjoining closet.  Do you 'open' the locker or 'redecorate' the room?");
if(response === "redecorate"){
    response = prompt("Where will you find the paint?  A dumbwaiter in the corner of the west wall has a button on the wall next to it. Pressing the button rings a tiny bell below. A growl emanates from below... Do you 'ride' the dumbwaiter down or 'call' the decorator?");
    if(response === "ride"){
            response = alert("After ten minutes of fighting spiders in the dumbwaiter, you're in the basement.");
          } else if (response === "call" || response === "Call") {
              response = alert("It's 6:00 pm--of course the decorator closed at 5:00!  What were you thinking?");
          // } else if ((response === "call " && response === "ride") || (response === "ride " && response === "call")){
              // alert("You're right.  Redecorate first.  Ride later.");
          } else {
            alert("Please type in a valid input! Refresh the page to try again.");
          }
} else if (response === "open") {
    response = alert("Before you open the locker, a poisoned dart flies across the room and lands in your shoulder.  You're out for the count.");
} else {
    alert("Please type in a valid input! Refresh the page to try again.");
}

response = prompt("This basement room contains a bricked-up window flanked by two dusty, wood-framed beds sized for children. Closer to the door is a toy chest with windmills painted on its sides and a dollhouse that’s a perfect replica of the dreary edifice in which you stand. These furnishings are draped in cobwebs. The groaning you hear appears to be from the loose plumbing.  Do you 'open' the toy chest or 'check' out the bricked window?");
  if(response === "open"){
      response = alert("Two skeletons wear tattered clothing, and there's a stuffed doll you recognize.  It appears as though the children are ghosts.");
  } else if (response === "check") {
      response = alert("You're right.  Let's get the hell out of here and tell the kids that it's just the pipes.");
  } else {
      alert("Please type in a valid input! Refresh the page to try again.");
  }
