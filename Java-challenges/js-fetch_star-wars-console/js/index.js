console.clear();

const url = "https://swapi.dev/api/people";

// async function fetchData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   let results = data.response;
//   console.log(data.results);
// }

async function fetchData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      console.log(data.results[2].eye_color);
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An error occurred");
  }
}
fetchData();
