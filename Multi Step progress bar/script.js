// Dom elements
const circles = document.querySelectorAll(".circle"),
  progressBar = document.querySelector(".indicator"),
  buttons = document.querySelectorAll("button");
// console.log(circles, progressBar, buttons);
let currentStep = 1;

// function that updates the current step and updates the DOM
const updatesSteps = (e) => {
  currentStep = e.target.id === "next" ? ++currentStep : --currentStep;
  //   console.log(currentStep);
  // loop through all circles and add/remove "active" class based on  their index and current step
  circles.forEach((circle, index) => {
    circle.classList[`${index < currentStep ? "add" : "remove"}`]("active");
  });

  //update progress bar width based on current step
  progressBar.style.width = `${
    ((currentStep - 1) / (circles.length - 1)) * 100
  }%`;
  //   console.log(progressBar.style.width);
  // check ì curent step í lát step ỏ first step and dísable corresponding buttons
  if (currentStep === circles.length) {
    buttons[1].disabled = true;
  } else if (currentStep === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((button) => (button.disabled = false));
  }
};

// add click event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", updatesSteps);
});
