// Conditionals: Ternary Operator

//Synatax-
//condition ? ifTrue : ifFalse;

/* let soup = "chicken noodle soup";
let response = soup ? "yes, we have soup." : "Sorry, no soup today";
console.log(response); */

let soup = "chicken noodle soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned
  ? "sorry, no soup"
  : soup
  ? "yes, we have soup"
  : "nO soup today";
console.log(soupAccess);
