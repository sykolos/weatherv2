var weatherApi= "/weather"; //api végpont
//dom elemek
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const weatherIcon = document.querySelector('.weather-icon i');
const weatherCondition = document.querySelector('.weather-condition');
const temperature = document.querySelector('.weather-temp span');
const locationElement = document.querySelector('.place');
const dateElement = document.querySelector('.date');
//dátum
const currentDate = new Date();
dateElement.textContent = new Date(currentDate).toDateString();
//ha lehet, akkor a jelenlegi helyet használja
if ("geolocation" in navigator) {
    locationElement.textContent = "Loading...";
    navigator.geolocation.getCurrentPosition(
        function (position) {
            const lat=position.coords.latitude;
            const lon=position.coords.longitude;
            const apiurl='https://nominatim.openstreetmap.org/reverse?format=json&lat='+lat+'&lon='+lon;
            
            fetch(apiurl).then((response) => response.json()).then((data) => {
                
                if(data && data.address.country && data.address.town){
                    const city=data.address.town;
                    showData(city);
                }
                else{
                    locationElement.textContent = "Location not found 1";
                    console.log("error 1", error.message);
                }
            }).catch((error) => {
                locationElement.textContent = "Location not found 2";
                console.log("error 2", error.message);
            });
        }
    );
}else{
    locationElement.textContent = "Location not found 3";
    console.log("error 3", error.message);
}
    
//ha rákeres más városra
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault(); //ne frissítse az oldalt
    locationElement.textContent = "Loading...";
    //console.log(search.value);
    weatherIcon.className = "";
    temperature.textContent = "";
    weatherCondition.textContent = "";
    showData(search.value);
});
//egy adott városhoz az időjárás
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
//időjárás adatok lekérése
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