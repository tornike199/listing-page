// const boxElement = document.getElementById("box_1");

// const boxElement = document.getElementsByClassName("box_12");

// const boxElement = document.getElementsByName("zvio");

// const boxElement = document.getElementsByTagName("div");

// const boxElement = document.querySelectorAll(".box_12");

// console.log(boxElement);

// const boxElement = document.querySelectorAll(".box_12");

// console.log(boxElement);

// const idelement = document.querySelector("#box_12");
// document.body.setAttribute("class", "dark");

// const element = document.querySelectorAll(".box_12");

// element.classList.remove("box");

// console.log(idelement);

// document.body.innerHTML = `<div id='box_1'></div>`;

// const elem = document.createElement("div");
// elem.classList.add("georgia");
// elem.setAttribute("id", "123");

// document.body.append(elem);

// const createElements = (
//   element,
//   whereWhantToCreate,
//   before,
//   className,
//   idName,
//   name,
//   src,
//   alt
// ) => {
//   if (element) {
//     const elem = document.createElement(element);

//     if (className) {
//       elem.classList.add(className);
//     }
//     if (idName) {
//       elem.setAttribute("id", idName);
//     }
//     if (name) {
//       elem.setAttribute("name", name);
//     }
//     if (src) {
//       elem.setAttribute("src", src);
//     }
//     if (alt) {
//       elem.setAttribute("alt", alt);
//     }
//     if (before) {
//       whereWhantToCreate.insertBefore(elem, before);
//     } else {
//       whereWhantToCreate.append(elem);
//     }
//   }
// };

// createElements("h2", document.body, null, "container");

let student = {
  name: "gio",
  lastName: "zzz",
  "personal-id": "111111111",

  logName() {
    console.log(this.name);
  },
};

// console.log(student);

// let keyses = Object.keys(student);

// console.log(keyses);

// let values = Object.values(student);

// console.log(values);

// let entries = Object.entries(student);

// console.log(entries);

// student.logName();
// console.log(student);

// function myFunction(text) {
//   console.log(text);
// }

// myFunction("olaaaa");

// const myfunction = (text) => {
//   console.log(text);
// };

// myfunction("kiugr");

let array = [1, 2, 3, 4, 5, 6, 7, 8];

let newArray = array.map((item) => {
  return item * 2;
});

console.log(newArray);
