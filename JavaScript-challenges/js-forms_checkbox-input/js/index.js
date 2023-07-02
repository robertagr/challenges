console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //1.run the function:
  hideTosError();
  hideSuccess();

  // --v-- write your code here --v--

  console.log(event.target.element.tos.checked);
  const tos = event.target.element.tos.checked;
  if (tos) {
    hideTosError();
    alert("Form submitted");
    return;
  }

  showTosError();
});
