//Functions

//Methods = Built-in Functions!

// console.log("Suraj".toLowerCase());
// console.log(Math.random());

//Function declaration synatax-
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(2, 6));

function sum(num1, num2) {
  if (num2 === undefined) {
    return num1 + num1;
  }
  return num1 + num2;
}
console.log(sum(2));

//Get username
function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("user@github.com"));
//function getUserNameFromEmail(email) {} === const getUserNameFromEmail = function (email) {}

//arrow function

const getUserNameFromEmail1 = (email) => {
  return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail1("suraj@github.com"));

//Functions are reusable blocks of code