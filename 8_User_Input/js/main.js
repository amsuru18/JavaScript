//User Input

// alert("Hello World");

// myBoolean = confirm("Ok === True\nCancel === False");
// console.log(myBoolean);

// let name1 = prompt("Please Enter your name:");
// if (name1) {
//   console.log(name1);
// } else {
//   console.log("You didn't enter your name");
// }

let name1 = prompt("Please Enter your name:");
if (name1) {
  console.log(name1.length);
  console.log(name1.trim().length);
  console.log(name1.trim());
} else {
  console.log("You didn't enter your name");
}
