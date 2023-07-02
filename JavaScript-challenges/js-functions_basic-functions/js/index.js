console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--

const bookTitle = "Hello Word";
const author = "Me";
let rating = 4.5;
let numberOfSales = 70;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
function increaseNumberOfSales(a) {
  return a + 1;
}

function changeRating(b) {
  return b + -0.5;
}

console.log("Title", bookTitle);
console.log("Author", author);
console.log("Rating", rating);
console.log("Number of sales", numberOfSales);

numberOfSales = increaseNumberOfSales(numberOfSales);
console.log(numberOfSales);

rating = changeRating(rating);
console.log(rating);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

function logBookData() {
  console.log("Title", bookTitle);
  console.log("Author", author);
  console.log("Rating", rating);
  console.log("Number of sales", numberOfSales);
}

logBookData();

function increaseSales1(a) {
  return a + 2;
}

function increaseSales2(a) {
  return a + 3;
}

numberOfSales = increaseSales1(numberOfSales);
console.log(numberOfSales);

numberOfSales = increaseSales2(numberOfSales);
console.log(numberOfSales);

// Arrive to 85 using the functions created //

numberOfSales = increaseSales2(numberOfSales);
numberOfSales = increaseSales2(numberOfSales);
numberOfSales = increaseSales2(numberOfSales);
console.log(numberOfSales);

// Arrive to 96 using the functions created //

numberOfSales = increaseSales2(numberOfSales);
numberOfSales = increaseSales2(numberOfSales);
numberOfSales = increaseSales2(numberOfSales);
numberOfSales = increaseSales1(numberOfSales);
console.log(numberOfSales);

// --^-- write your code here --^--
