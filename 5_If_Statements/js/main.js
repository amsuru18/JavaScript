// Conditionals: If Statements

/* Syntax-
if (condition) {
  run some code
} else {
    run some different code
} */

let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = false;
let reply;

if (customerIsBanned) {
  reply = "No soup";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers`;
} else if (soup) {
  reply = `Here's your order of ${soup}`;
} else {
  reply = "Sorry";
}

console.log(reply);

