console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
bodyElement.classList.add("dark");

const darkButton = document.querySelector('[data-js="dark-mode-button"]');

darkButton.addEventListener("click", () => {
  console.log("You clicked the dark button");
  bodyElement.classList.add("dark");
});

const lightButton = document.querySelector('[data-js="light-mode-button"]');

lightButton.addEventListener("click", () => {
  console.log("You clicked the light button");
  bodyElement.classList.remove("dark");
});

const toggleButton = document.querySelector('[data-js="toggle-button"]');
toggleButton.addEventListener("click", () => {
  console.log("You clicked the toggle button");
  bodyElement.classList.toggle("dark");
});
