console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newEntry = document.createElement("li");
  newEntry.classList.add("toast-container__message");
  newEntry.textContent = "Let's see";
  toastContainer.append(newEntry);
  console.log("new entry");
});

clearButton.addEventListener("click", () => {
  const clearMessages = document.querySelector('[data-js="toast-container"]');
  clearMessages.innerHTML = "";
});
