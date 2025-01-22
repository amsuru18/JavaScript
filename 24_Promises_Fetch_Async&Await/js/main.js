// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, and Async/Await

// Callbacks
/* function firstFunction(parameters, callback) {
  //do stuff
  callback();
}

// AKA "callback hell"
firstFunction(para, function () {
  //do stuff
  secondFunction(para, function () {
    thirdFunction(para, function () {

    });
  });
}); */

//Promises
//3 States: Pending, Fulfilled, Rejected

/* const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("yes resolved the promise");
  } else {
    reject("No rejected the promise");
  }
}); */
// console.log(myPromise);

/* myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  }); */

/* const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise is resolved!");
  }, 3000);
});
console.log(myNextPromise);

myNextPromise.then((value) => {
  console.log(value);
});
myPromise.then((value) => {
  console.log(value);
}); */

/* const users = fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  }); */

// Async/Await
// const myUsers = {
//   userList: [],
// };

// async function myCoolFunction(params) {
/* const myCoolFunction = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  // console.log(jsonUserData);
  return jsonUserData;
};

// myCoolFunction();

const anotherFunction = async () => {
  const data = await myCoolFunction();
  // console.log(data);
  myUsers.userList = data;
  console.log(myUsers.userList);
}; 
anotherFunction();
console.log(myUsers.userList); */

// Workflow function

/* const getAllUserEmail = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });
  // console.log(userEmailArray);
  postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
  console.log(data);
};

getAllUserEmail(); */

// 2nd parameter of fetch is a object

/* const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();

  console.log(jsonJokeData);
};

getDadJoke(); */

const getDataFromForm = () => {
  const requestObj = {
    type: "programming", // Joke type (e.g., programming, general, etc.)
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `https://official-joke-api.appspot.com/jokes/${requestData.type}/random`;
};

const requestJoke = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonResponse = await response.json();
    const joke = `${jsonResponse[0].setup} - ${jsonResponse[0].punchline}`;
    postJokeToPage(joke);
  } catch (error) {
    console.error("Error fetching joke:", error.message);
    postJokeToPage("Sorry, we couldn't fetch a joke for you.");
  }
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

// Procedural "workflow" function
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("Finished!");
};

processJokeRequest();
