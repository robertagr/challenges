console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

function showWelcomeMessage(userName) {
  console.log("Welcome again", userName);
}

handleUserLogin(showWelcomeMessage);

handleUserLogin((userName) => {
  console.log("Hey", userName);
});
