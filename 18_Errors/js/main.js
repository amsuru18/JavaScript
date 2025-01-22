//JS errors and error handeling

"use strict";
const variable = "dave"; //const is necessary -->Reference error
console.log(variable); /* -->TypeError */

// Object..create(); //-->SyntaxError - this can be caught

/* const name = "dave";
name = "joe"; */

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd number");
      }
      console.log("Even number");
    } catch (err) {
      console.error(err.stack);
    } finally {
      console.log("...finally");
      i++;
    }
  }
};
makeError();

//Finally will execute no matter what.
//Catch will execute only if there is an error.
//If there is an error any code following that error will not execute in the try box.
