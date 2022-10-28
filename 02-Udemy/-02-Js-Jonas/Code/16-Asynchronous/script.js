"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const errorMsg = (msg) => {
  countriesContainer.insertAdjacentText("beforeend", msg);
};

// https://restcountries.com/v2/name/portugal

// const getCountry = (country) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", () => {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);

//     const population = (data.population / 1_000_000).toFixed(2);
//     const { name: currency, symbol } = data.currencies[0];
//     const { name: countryLang } = data.languages[0];

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${population}</p>
//         <p class="country__row"><span>🗣️</span>${countryLang}</p>
//         <p class="country__row"><span>💰</span>${symbol + " " + currency}</p>
//       </div>
//   </article>
//   `;

//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = "1";
//   });
// };

// getCountry("usa");
// getCountry("germany");

// // call back hell
// // __________
const renderCountry = (data, className = "") => {
  const population = (data.population / 1_000_000).toFixed(2);
  const { name: currency, symbol } = data.currencies[0];
  const { name: countryLang } = data.languages[0];

  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${population}</p>
          <p class="country__row"><span>🗣️</span>${countryLang}</p>
          <p class="country__row"><span>💰</span>${symbol + " " + currency}</p>
        </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
};

// const getCountryAndNeighbour = (country) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", () => {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);

//     renderCountry(data);

//     // Get neighhour country;
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", () => {
//       const data2 = JSON.parse(request2.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };
// getCountryAndNeighbour("usa");

//// Promises and the Fetch API
////---------------------------

// 255. Throwing Errors Manually

// const getCountryData = (country) => {
//   const request = fetch(`https://restcountries.com/v2/name/${country}`); // return a promise;
//   request
//     .then((response) => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     // To Read DATA from response-body
//     // -> will return a new promise with data
//     .then((data) => {
//       // To parse the new promise-data
//       renderCountry(data[0]);

//       // get neighbour
//       const neighbour = data[0].borders?.[0];

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`); // -> a new promise
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       response.json();
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((error) =>
//       renderError(`Something went worng 🔥🔥🔥 ${error}. Try again!`)
//     )
//     .finally(() => (countriesContainer.style.opacity = "1"));
// };

// btn.addEventListener("click", () => {
//   getCountryData("ffsdf");
// });
/*
const getJSON = function (url, errorMsg = "Something went wrong") {
  const request = fetch(url).then((response) => {
    // return a promise;
    if (!response.ok) throw new Error(`${errorMsg}...(${response.status})`);
    return response.json();
  });

  return request;
};

const getCountryData = (country) => {
  getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];

      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        "Country Neighbour not found"
      ); // -> a new promise
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((error) =>
      renderError(`Something went worng 🔥🔥🔥 ${error}. Try again!`)
    )
    .finally(() => (countriesContainer.style.opacity = "1"));
};

btn.addEventListener("click", () => {
  getCountryData("australia");
});
*/

// 256. Coding Challenge #1
/*
// https://geocode.xyz/api

const whereAmI = (lat, lng) => {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      const { city, country } = data;
      console.log(`You are in ${city} Your Country is ${country}`);
      return fetch(`https://restcountries.com/v2/name/${country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`);
      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((error) => console.error(error.message + "" + "🔥"))
    .finally(() => (countriesContainer.style.opacity = "1"));
};

whereAmI(52.508, 13.381);
// whereAmI(52.508, 13.381);
// whereAmI(52.508, 13.381);
*/

// 258. The Event Loop in Practice

// 262. Consuming Promises with Async/Await
// // ------------------------------------
