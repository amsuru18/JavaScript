//javaScript Event Listeners

//Syntax : addEventListener(event, function, useCapture)

/* const doSomething = () => {
  alert("doing something");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

//anonymus function
h2.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.textContent = "Clicked";
}); */

/* const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");
  view.addEventListener("click", (event) => {
    view.style.backgroundColor = "purple";
  });
  div.addEventListener("click", (event) => {
    div.style.backgroundColor = "red";
  });
  h2.addEventListener("click", (event) => {
    event.target.textContent = "clicked";
  });
}; */

//useCapture true starts from outer to inner and vice versa

/* const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");
  view.addEventListener(
    "click",
    (event) => {
      view.style.backgroundColor = "purple";
    },
    false
  );
  div.addEventListener(
    "click",
    (event) => {
    //   event.stopPropagation();
      div.style.backgroundColor = "red";
    },
    false
  );
  h2.addEventListener(
    "click",
    (event) => {
      event.target.textContent = "clicked";
      //event.target is actually refering to what is actually clicked on
    },
    false
  );
}; */

/* const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");
  view.addEventListener(
    "click",
    (event) => {
    //   view.classList.add("purple");
    //   view.classList.remove("darkblue"); //but there is no going back
      view.classList.toggle("purple");
      view.classList.toggle("darkblue");
    },
    false
  );
  div.addEventListener(
    "click",
    (event) => {
      //   event.stopPropagation();
      div.classList.toggle("blue");
      div.classList.toggle("black");
    },
    false
  );
  h2.addEventListener(
    "click",
    (event) => {
      const myText = event.target.textContent;
      myText === "My 2nd View"
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd View");
      //event.target is actually refering to what is actually clicked on
    },
    false
  );

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
  });
  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  });
};*/

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault(); //to stop from reloading
    console.log("submit event");
  });
};
