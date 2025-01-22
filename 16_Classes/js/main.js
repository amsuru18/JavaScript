// JS Classes

/* class Pizza {
  constructor() {
    this.size = "medium";
    this.crust = "original";
  }
  bake() {
    console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
  }
}

const myPizza = new Pizza();
myPizza.bake(); */

// _________________________________________

/* class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
  }
  // get pizzaCrust()
  getCrust() {
    return this.crust;
  }
  // set pizzaCrust(pizzaCrust)
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  bake() {
    console.log(
      `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
    );
  }
}

const myPizza = new Pizza("pepperoni", "large");
// myPizza.type = "supreme";
// myPizza.pizzaCrust = "thin";
myPizza.setCrust("thin");
myPizza.bake();
// console.log(myPizza.type);?
console.log(myPizza.getCrust()); */

// _________________________________________________________

//parent class

// class Pizza {
//   constructor(pizzaSize) {
//     this._size = pizzaSize; //'_' shows that this is meant to be private
//     this._crust = "original";
//   }
//   getCrust() {
//     return this._crust;
//   }
//   setCrust(pizzaCrust) {
//     this._crust = pizzaCrust;
//   }
// }

//child class

// class SpecialityPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "the works";
//   }
//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
//   }
// }

// const mySpeciality = new SpecialityPizza("medium");
// mySpeciality.slice();

// ____________________________________________

//Factory Function
// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
//   };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

// ________________________________________

class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize; //'_' shows that this is meant to be private
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(`Here's your ${this.crust} ${this.#sauce} ${this.#size}`);
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.getCrust());  //Public Field
console.log(myPizza.size);
// console.log(myPizza.#size);  //Private Field
