console.clear();

// EXERCISE 1
// Modify the array exampleArray so that it contains a number and a string.

const exampleArray = ["change me"];
exampleArray.push[(1, "example1")];
console.log("Modify the array:", exampleArray);

// EXERCISE 2
// Nest an array inside array nestedArray. After that nestedArray should contain an array as an element.

const nestedArray = ["example", 10, true];
nestedArray.push = [1, 2];
console.log("Nest and array inside an array:", nestedArray);

// EXERCISE 3
// Change the value of firstNumber to equal the first value of the numbers array using bracket notation.

const numbers = [20, 10, 50];

const firstNumber = "change me";
firstNumber = [0];
console.log("Change value of FirstNumber:", firstNumber);

// EXERCISE 4
// Change the fruit stored at index 0 of fruits to mango.

const fruits = ["apple", "banana", "grapefruit"];
fruits[0] = "mango";
console.log("Change the fruit at index 0: ", fruits);

// EXERCISE 5
// Change the value of nestedNumber to equal the fourth number of nestedNumbers using bracket notation.

const nestedNumbers = [10, [20, 30, [40, 50]]];

let nestedNumber = [1][2][0];
console.log("Exercise 5:", nestedNumber);

// EXERCISE 6
// Put "rat" onto the end of petsWithPush variable by using the array method `.push()`.

const petsWithPush = ["dog", "cat", "rabbit"];
petsWithPush.push("rat");
console.log("Put rat at the end:", petsWithPush);

// EXERCISE 7
// Use the pop method to remove the last item from fruitsWithPop.

const fruitsWithPop = ["apple", "banana", "mango"];
fruitsWithPop.pop(-1);
console.log("Remove the last item:", fruitsWithPop);

// EXERCISE 8
// Put "hamster" onto the start of unshiftedPets variable by using the array method unshift.

const unshiftedPets = ["dog", "cat", "rabbit"];
unshiftedPets.unshift("hamster");
console.log("Add into the start:", unshiftedPets);

// EXERCISE 9
// Use the shift method to remove the first item from shiftedFruits.

const shiftedFruits = ["apple", "banana", "mango"];
shiftedFruits.shift();
console.log("Delete first item:", shiftedFruits);

export {
  exampleArray,
  nestedArray,
  firstNumber,
  fruits,
  nestedNumber,
  petsWithPush,
  fruitsWithPop,
  unshiftedPets,
  shiftedFruits,
};
