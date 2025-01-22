// Conditionals: Switch Statements

/* Syntax-
switch(expression OR value){
  case choice1:
    //run this code
    break;
  case choice2:
    //run different code
    break;
  default:
    //run this code if no case switches
    //no need for a break here
} */

let playerOne = "rock";
let computer = "paper";

switch (playerOne) {
  case computer:
    console.log("Tie game!");
    break;
  case "rock":
    if (computer === "paper") {
      console.log("computer wins");
    } else {
      console.log("playerOne wins");
    }
    break;
  case "paper":
    if (computer === "scissors") {
      console.log("computer wins");
    } else {
      console.log("playerOne wins");
    }
    break;
  default:
    if (computer === "rock") {
      console.log("computer wins");
    } else {
      console.log("playerOne wins");
    }
}
