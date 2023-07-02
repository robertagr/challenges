import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  //FIND: IS GONNA FIND ONE COUNTRIES
  const foundCountry = countries.find((country) =>
    country.name.startsWith(searchString)
  );

  if (foundCountry) {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }

  //FILTER: IS GONNA FILTER ALL THE COUNTRIES
  const foundCountries = countries.filter((country) =>
    country.name.startsWith(searchString)
  );

  foundCountries.forEach((country) => {
    const countryElement = Country(country);
    container.append(countryElement);
  });
});
