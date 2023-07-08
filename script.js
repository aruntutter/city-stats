"use strict";

const button = document.querySelector("button");

button.addEventListener("click", displayStats);
function displayStats() {
  // console.log('clicked')
  const input = document.getElementById("input");
  const city = input.options[input.selectedIndex].value;
  let population = 0,
    literacyRate = 0,
    language = "";

  switch (city) {
    case "Bengaluru":
      population = 8443675;
      literacyRate = 88.71;
      language = "kannada";
      break;

    case "Chennai":
      population = 4646732;
      literacyRate = 90.2;
      language = "Tamil";
      break;

    case "Delhi":
      population = 16787941;
      literacyRate = 86.2;
      language = "Hindi";
      break;

    case "Mumbai":
      population = 12442373;
      literacyRate = 89.73;
      language = "Marathi";
      break;
  }

  let text = `The Indian city ${city} has a population of ${population}, language spoken is ${language} and literacy rate is ${literacyRate} %.`;
  let resultDiv = document.createElement("div");
  resultDiv.id = "result";
  document.getElementById("wrapper").appendChild(resultDiv);
  document.getElementById("result").innerHTML = text;
}
