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

async function getApartmentInfo() {
  const token = "9ec0894b-2b23-42c5-85b2-1f039b7280a4";

  const response = await axios.get(
    "https://api.real-estate-manager.redberryinternship.ge/api/cities",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  let data = await response.data;

  console.log(data);
}

// getApartmentInfo();

const input = document.getElementById("customFileInput");
const fileName = document.getElementById("fileName");

input.addEventListener("change", function () {
  fileName.textContent = this.files[0] ? this.files[0].name : "ფაილი არჩეული არაა";
});

const agentsEddingBtn = document.querySelector(".adding-agent-button");
console.log(agentsEddingBtn);

const agentsEddingDiv = document.querySelector(".agents-edding-div");

agentsEddingBtn.addEventListener("click", () => {
  agentsEddingDiv.classList.remove("hidden");
});

const resetBtn = document.querySelector(".reset-btn").addEventListener("click", () => {
  agentsEddingDiv.classList.add("hidden");
});
