//Web Storage API

//Not part of the DOM - refers to the window API
//Available to JS via the global variable: window

//We do not have to type window. It is implies:

// window.alert("ok!");
// alert("Ok!"); //These are same
// window.alert(window.location);
// alert(location); //These are same

const myArray = ["suru", "sleep", "code", "money"];
const myObj = {
  name: "dave",
  hobbies: ["suru", "sleep", "code", "money"],
  logName: function () {
    console.log(this.name);
  },
};

myObj.logName();

// sessionStorage.setItem("mySessionStorage", myObj);
// const mySessionData = sessionStorage.getItem("mySessionStorage");
// console.log(mySessionData);
// sessionStorage.setItem("mySessionStorage", myArray);
// const mySessionData = sessionStorage.getItem("mySessionStorage");
// console.log(mySessionData);
// console.log(typeof mySessionData);
sessionStorage.setItem("mySessionStorage", JSON.stringify(myObj));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStorage"));
console.log(mySessionData); //JSON do not store method like function
console.log(typeof mySessionData);

//Local Storage will stay- Can be used in To-Do List like

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore");
// localStorage.clear();
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);

const key = localStorage.key(0);
console.log(key);
