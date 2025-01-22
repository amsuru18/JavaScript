//Modules

/* import playGuitar from "./guitar.js";
import { shredding as shred, plucking as pluck } from "./guitar.js";

console.log(playGuitar());
console.log(shred());
console.log(pluck()); */
import * as Guitars from "./guitar.js";

// console.log(Guitars.playGuitar()); error
// console.log(Guitars.default()); //No error
console.log(Guitars.playGuitar()); // can be used if it is not named as default in the export file
console.log(Guitars.shredding());
console.log(Guitars.plucking());

import user from "./user.js";
const me = new user("suraj@gmail.com", "suraj")
console.log(me)
console.log(me.greeting())