//szükséges csomagok
const express = require('express');
const hbs = require('hbs');
const path = require("path");
// const cors = require('cors');

//express alkalmazás létrehozása
const app = express();
const weatherdata=require("../src/weatherdata")
const publicpath=path.join(__dirname,"../public");
const viewspath=path.join(__dirname,"../templates/views");
const partialspath=path.join(__dirname,"../templates/partials");

app.set("view engine, hbs");
app.set("views",viewspath);
hbs.registerPartials(partialspath);
app.use(express.static(publicpath));


//port beállítása
const port = process.env.PORT || 3000;
//alap oldal
app.get('/', (req, res) => {
    res.render("index",{title:"idojaras v2"});
});
//weather
app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send("Address is required");
    }
    weatherdata(req.query.address,(error,result)=>{
        if(error){
            return res.send(error);
        }
        res.send(result);
    });
});
app.get("*",(req,res)=>{
    res.render("404",{title:"not found"});
});
app.listen(port, () => {
    console.log(' Szerver ok  http://localhost:'+port+' címen');
});