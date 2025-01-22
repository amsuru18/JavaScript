// var, let and const

// var x = 1;
// var x = 2;
// console.log(x);

// let y = 1;
// y = 2;
// console.log(y);

// const z = 1;
// z = 2;
// console.log(z);

//Global scope

/* var x = 1;
let y = 2;
const z = 3;

//local scope
{
  let y = 4;
}

//local scope
function myFunc() {
  const z = 5;
} */

var x = 1; // function scoped
let y = 2; //block scoped //Let will reassign the value
const z = 3; //block scopes

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
  var x = 10;
  const z = 30;

  {
    var x = 100; //var-->Function scoped
    const z = 300; //const-->Block scoped
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
  console.log(`Fuction: ${x}`);
  console.log(`Fuction: ${y}`);
  console.log(`Fuction: ${z}`);
}

myFunc();

console.log(`Final: ${x}`);
console.log(`Final: ${y}`);
console.log(`Final: ${z}`);
