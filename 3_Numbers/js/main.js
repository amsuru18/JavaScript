//Numbers

//An integer is a whole number
const myNumber = 42;

console.log(myNumber);

//A number with a decimal point is a float which references the "floating point"

const myFloat = 42.01;

console.log(myFloat);

const myString = "42"; //String is white in console

console.log(myString);

console.log(myNumber === myString);

console.log(myString + 3);
console.log(Number(myString) + 3);
console.log(Number("A")); //NaN --> Not A Number
console.log(Number(true));
console.log(Number(false));

console.log(myNumber + 3);

console.log(myFloat + 3);

//Number Methods

//The Number.isInteger() method determines whether the passed value is an integer.

console.log(Number.isInteger(myString));

//The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myNumber));

const myString1 = "42.4ag";
console.log(Number.parseFloat(myString1));

//The toFixed() method formats a number according to how manny decimal points you provide as the parameter.

console.log(Number.parseFloat(myString1).toFixed(2)); //This returns string data

//The Number.parseInt() method parses a string argument and returns and Integer.

console.log(Number.parseInt(myString));

//The toString() method returns a string representing the number.

console.log(myNumber.toString());

console.log(typeof Number.parseFloat(myString1));

//Chaining = Using several methods chained together

console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

//The Number.isNaN() mehtod determines whether the passed value is NaN AND its type is number.

console.log(Number.isNaN("dabe"));

//The global isNaN() function determines whether a value is NaN or not.

console.log(isNaN("Suraj"));