import { createCircle } from "./components/Circle/circle.js";
import { createPentagon } from "./components/Pentagon/Pentagon.js";
import { createSquare } from "./components/Square/Square.js";
import getRandomColor from "./utils/randomColor.js";

console.clear();

const root = document.getElementById("root");

// const circle = document.createElement("div");
// circle.classList.add("circle");
// circle.addEventListener("click", () => {
//   circle.style.backgroundColor = getRandomColor();
// });

// const square = document.createElement("div");
// square.classList.add("square");
// square.addEventListener("click", () => {
//   square.style.backgroundColor = getRandomColor();
// });

// const pentagon = document.createElement("div");
// pentagon.classList.add("pentagon");
// pentagon.addEventListener("click", () => {
//   pentagon.style.backgroundColor = getRandomColor();
// });

const circle = createCircle();
const square = createSquare();
const pentagon = createPentagon();
root.append(circle, square, pentagon);
