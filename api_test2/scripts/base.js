
//html elements
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myAPI = "98d437cc58adb55ddd0c72032f24b9ac"; //OpenWeatherMap API key
const myLat = "27.67678782675957"; // Latitude for the location
const myLon = "-105.16476075040424"; // Longitude for the location
const myUnits = "metric"; // Units for temperature (metric, imperial, or standard)

//call whether API
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myAPI}&units=${myUnits}`;


async function apiFetch(){
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(await response.text());
    }
    else if (response.ok) {
    const data = await response.json();
    displayResults(data);
    }
    else {
      throw Error(await response.text());
    }
  }
  catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  console.log(data);
  myTown.innerHTML = data.name;
  myDescription.innerHTML = data.weather[0].description;
  myTemperature.innerHTML = `<strong>${data.main.temp.toFixed(1)} &deg;C</strong>`; 
  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  myGraphic.setAttribute('src', iconSrc);
  myGraphic.setAttribute('alt', data.weather[0].description);
  myGraphic.setAttribute('loading', 'lazy');
} 



apiFetch();
