//szükséges csomagok
const express = require('express');
const hbs = require('hbs'); //template motor
const path = require("path"); //path kezelő
// const cors = require('cors');
//express app létrehozása
const app = express();
const weatherdata=require("./weatherdata");//weatherdata.js
//elérési utak beállítása
const publicpath=path.join(__dirname,"../public");
const viewspath=path.join(__dirname,"../templates/views");
const partialspath=path.join(__dirname,"../templates/partials");
//hbs beállítás
app.set("view engine", "hbs");
app.set("views",viewspath);
hbs.registerPartials(partialspath);
app.use(express.static(publicpath));//statikus fájlok public mappából
//port beállítása
const port = process.env.PORT || 3000;
//alap oldal
app.get('/', (req, res) => {
    res.render("index",{title:"idojaras v2"});
});
//weather route
app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send("Address is required"); //ha nincs cím
    }
    //lekérdezés
    weatherdata(req.query.address,(error,result)=>{
        if(error){
            return res.send(error); //ha hiba
        }
        res.send(result); //ha siker, visszaküldi az adatokat
    });
});
//404 route
app.get("*",(req,res)=>{
    res.render("404",{title:"not found"});
});
//server inditása
app.listen(port, () => {
    console.log(' Szerver ok  http://localhost:'+port+' címen');
});