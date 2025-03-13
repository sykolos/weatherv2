var weatherApi= "/weather";
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const weatherIcon = document.querySelector('.weather-icon i');
const weatherCondition = document.querySelector('.weather-condition');
const temperature = document.querySelector('.weather-temp span');
const locationElement = document.querySelector('.place');
const dateElement = document.querySelector('.date');

//dátum kijelzés
const currentDate = new Date();
dateElement.textContent = new Date(currentDate).toDateString();

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    locationElement.textContent = "Loading...";
    //console.log(search.value);
    weatherIcon.className = "";
    temperature.textContent = "";
    weatherCondition.textContent = "";
    showData(search.value);
});

function showData(city){
    getWeatherData(city, (result) => {
        if(result.cod==200){            
            //icon keresés function..
            weatherIcon.className = "wi wi-day-cloudy";
            locationElement.textContent = result?.name;
            temperature.textContent = Math.floor(result?.main.temp - 273.15) + String.fromCharCode(176);
            weatherCondition.textContent = result?.weather[0].description.toUpperCase();
        }
        else{
            locationElement.textContent = "Location not found";
        }
        //console.log(result);
    });
}
function getWeatherData(city, callback) {
    const locationApi =weatherApi + "?address=" + city;
    fetch(locationApi).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return callback(data.error, undefined);
            }
            callback(data);
        });
    });
}