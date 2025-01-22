//Objects
//Key-value pairs in curly braces
const myObj = { name: "Suru" };
const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Playing", "Reading", "Travelling"],
  beverages: {
    morning: "coffee",
    afternoon: "burger",
    dinner: "pizza",
  },
  action: function () {
    return `Time for ${this.beverages.morning}`;
  },
};

console.log(myObj);
console.log(myObj.name);

console.log(anotherObj);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj["alive"]);
console.log(anotherObj["beverages"]);
console.log(anotherObj.beverages.morning);

console.log(anotherObj.action);
console.log(anotherObj.action());

//

const vehicle = {
  wheels: 4,
  engine: function () {
    return "vroom";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck); //Inheritance
console.log(truck.wheels);

const car = Object.create(vehicle);
car.doors = 4; //overwriting
car.engine = function () {
  return " yayyyyy";
};
console.log(car.engine());
console.log(car.wheels);

//keys and values
console.log(Object.keys(vehicle));
console.log(Object.values(vehicle));

for (let parts in vehicle) {
  console.log(`On ${parts}, it's ${vehicle[parts]}!`);
}

//destructuring objects

const { wheels: myVariable, engine: myBass } = vehicle;
console.log(myVariable);
console.log(myBass());

//

function wheelss({ wheels }) {
  return `${wheels} wheels are present`;
}
console.log(wheelss(vehicle));
