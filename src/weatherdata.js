const request = require('request'); //http kérésekhez
require('dotenv').config();

// openweather api kulcs és url
const openweathermap={
    BASE_URL:"https://api.openweathermap.org/data/2.5/weather?q=",
    API_KEY: process.env.WEATHER_API_KEY
}
//időjárás lekérdezés
const weatherdata=(address,callback)=>{
    const url=openweathermap.BASE_URL+encodeURIComponent(address)+"&APPID="+openweathermap.API_KEY;
    // console.log(url);
    //http kérés az apihoz
    request({url, json:true}, ( error, data ) => {
        if(error){
            callback(true,"Unable to fetch data, try again"+error); //hiba esetén
        }
        callback(false,data?.body); //siker esetén
    });  
};
//export hogy más fájlok is használhassák
module.exports=weatherdata;