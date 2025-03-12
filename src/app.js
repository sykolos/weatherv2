//szükséges csomagok
const express = require('express');
const hbs = require('hbs');
const path = require("path");
// const cors = require('cors');

//express alkalmazás létrehozása
const app = express();
//port beállítása
const port = process.env.PORT || 3000;
//alap oldal
app.get('/', (req, res) => {
    res.send("itsok");
});
app.listen(port, () => {
    console.log(' Szerver ok  http://localhost:'+port+' címen');
});