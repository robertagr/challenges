console.clear();

// `while` loop

let number = 0;
let count = 0;

// --v-- write/change code here --v--

while (number.length <= 0.9) {
  number = Math.random();
  console.log("number:", number);
  count++;
}

// --^-- write/change code here --^--

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
);
