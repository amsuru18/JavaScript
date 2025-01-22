//Arrays
const myArray = [];

//add elements to an array
myArray[0] = "Dave";
myArray[1] = 2;
myArray[2] = true;

//refer to an array
console.log(myArray);

//length property
console.log(myArray.length);

//last element in an array
console.log(myArray[myArray.length - 1]);

//refer to any one item in an array
console.log(myArray[1]);

//add data in an array
myArray.push("school"); //add at last
console.log(myArray);

myArray.unshift("school1"); //add at first
console.log(myArray);

//remove data in an array  -->when something is removed or added the indexing is redone
myArray.pop(); //from last
console.log(myArray);

myArray.shift(); //from first
console.log(myArray);

//remove data in middle
delete myArray[1]; //Don't use this as it leaves undefined data in place of deleted item
console.log(myArray);

//This method is used
myArray.splice(1, 1); //(1->shows from where to begin, 1->which index)
console.log(myArray);

//replacing an element
myArray.splice(1, 1, 24);
console.log(myArray);

// if you don't want to delete any value to add new value
myArray.splice(1, 0, 224);
console.log(myArray);

//Other methods
const myArray2 = ["A", "B", "C", "D", "E", "F"];
const newArray = myArray2.slice(2, 5); //% is not included
console.log(newArray);
console.log(myArray2); /* --> This array will not be changed */

myArray2.reverse();
console.log(myArray2);

//creat new string
const newString = myArray2.join();
const newArray1 = newString.split(",");
console.log(newArray1);

//join two array

const myArrayA = ["a", "b", "c"];
const myArrayB = ["e", "f", "g"];

// const newArray2 = myArrayB.concat(myArrayA);
//OR
const newArray2 = [...myArrayA, ...myArrayB]; //...->is spread operator
console.log(newArray2);

//Nested Array
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis ball"];

const clothesShelfA = ["tank tops", "shirts", "jerseys"];
const clothesShelfB = ["sweatshirts", "sweatpants", "hoodies"];

console.log(equipShelfA[1]);
//or
console.log(equipShelfB[1]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

//2D
console.log(equipDept[0]);
console.log(equipDept[0][2]);
console.log(clothesDept);

//3D
const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[0][1][0]);
