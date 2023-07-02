console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

const headlineElement = document.getElementById("headline");

// Second part

function addNewListEntry(headline, task) {
  const newLi = document.createElement("li");
  const newHeadline = document.createElement("h2");
  const newTask = document.createElement("p");

  newHeadline.textContent = headline;
  newTask.textContent = task;

  newLi.append(newHeadline, newTask);

  todoList.append(newLi);
}

// First part
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const headline = headlineElement.value;
  const task = form.elements.task.value;

  form.reset(); //or form.reset()
  headlineElement.focus();

  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);

  addNewListEntry(headline, task);
});
