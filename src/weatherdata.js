const request = require('request');
// api kulcs!!
const openweathermap={
    BASE_URL:"https://api.openweathermap.org/data/2.5/weather?q=",
    API_KEY: "be53a4a359cc6c8ed0097e17bf9fd27e"
}
const weatherdata=(address,callback)=>{
    const url=openweathermap.BASE_URL+encodeURIComponent(address)+"&APPID="+openweathermap.API_KEY;
    console.log(url);
    request({url, json:true}, ( error, data ) => {
        if(error){
            callback(true,"Unable to fetch data, try again"+error);
        }
        callback(false,data?.body);
    });  
};
module.exports=weatherdata;