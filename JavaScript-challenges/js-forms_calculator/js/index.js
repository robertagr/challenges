console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const numA = Number(event.target.elements.numberA.value);
  const numB = Number(event.target.elements.numberB.value);
  const formElements = event.target.elements;
  let result;

  if (formElements.addition.checked) {
    result = add(numA, numB);
  } else if (formElements.subtraction.checked) {
    result = subtract(numA, numB);
  } else if (formElements.multiplication.checked) {
    result = multiply(numA, numB);
  } else {
    result = divide(numA, numB);
  }
  //   result = multiply(numA, numB);
  //   result = divide(numA, numB);
  // }

  resultOutput.textContent = result;
});
