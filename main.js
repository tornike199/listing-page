const dropdownBtns = document.querySelectorAll(".region-button");

let previousDiv = null;
let previousButton = null;

dropdownBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const currentDiv = button.nextElementSibling;

    if (previousDiv && previousDiv !== currentDiv) {
      previousDiv.classList.add("hide");
      previousButton.children[0].classList.remove("rotate");
    }

    currentDiv.classList.toggle("hide");
    button.children[0].classList.toggle("rotate");

    if (!currentDiv.classList.contains("hide")) {
      previousDiv = currentDiv;
      previousButton = button;
    } else {
      previousDiv = null;
      previousButton = null;
    }
  });
});
