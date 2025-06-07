const currentPage = window.location.pathname.split("/").pop();
//html elements
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myHumidity = document.querySelector('#humidity');
const mySunrise = document.querySelector('#sunrise');
const mySunset = document.querySelector('#sunset');
const myGraphic = document.querySelector('#graphic');

const myForecast = document.querySelector('#forecast');

const myAPI = "98d437cc58adb55ddd0c72032f24b9ac"; //OpenWeatherMap API key
const myLat = "30.374071730603774"; // Latitude for the location
const myLon = "-107.95511200001594"; // Longitude for the location
const myUnits = "metric"; // Units for temperature (metric, imperial, or standard)

//call whether API
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myAPI}&units=${myUnits}`;

//const url = `api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myAPI}`

async function apiFetch(){
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(await response.text());
    }
    else if (response.ok) {
      const data = await response.json();
      console.log(data);

    //console.log("Hello from the Weather API");
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
  //console.log(data);
  myTown.innerHTML = data.name;
  myDescription.innerHTML = data.weather[0].description;
  myTemperature.innerHTML = `<strong> Temp: ${data.main.temp.toFixed(1)} &deg;C</strong>`; 
  myHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  mySunrise.innerHTML = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
  mySunset.innerHTML = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  myGraphic.setAttribute('src', iconSrc);
  myGraphic.setAttribute('alt', data.weather[0].description);
  myGraphic.setAttribute('loading', 'lazy');
  myForecast.innerHTML = `Today: <strong>90°F</strong><br />Wednesday: <strong>89°F</strong
						><br />Thursday: <strong>68°F</strong>`
  
} 
// End of Weather API

function displayForecast(){

}

export {apiFetch};