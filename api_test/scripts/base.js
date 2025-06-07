const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myAPI = "98d437cc58adb55ddd0c72032f24b9ac"; // OpenWeatherMap API key
const myLat = "49.750796987559916"; // Latitude for the location
const myLon = "6.634350794321664"; // Longitude for the location
const myUnits = "metric"; // Units for temperature (metric, imperial, or standard)


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myAPI}&units=${myUnits}`;


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
  currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
  weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  captionDesc.textContent = data.weather[0].description;
} 



apiFetch();
