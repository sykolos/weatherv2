# Időjárás App 🌦️

Egy egyszerű Node.js alkalmazás, 
amely az OpenWeatherMap API-t használja aktuális időjárási adatok megjelenítésére. 
A felhasználói felületet Express és Handlebars (`hbs`) sablonmotor segítségével valósítottam meg.

## 🔧 Technológiák

- Node.js
- Express
- HBS
- OpenWeatherMap API
- Axios (az API-hívásokhoz)

## 🚀 Futtatás
1.Függőségek
 - npm install
2. .env file
 - WEATHER_API_KEY="ide a saját api kulcsod"
3. Indítás
 - npm start


🌍 Funkciók
    Időjárás lekérdezése városnév alapján és lokáció alapján
    Állapot ikon, hőmérséklet, páratartalom, időjárási leírás megjelenítése
    Egyszerű, reszponzív UI

🔑 API
    Az alkalmazás az OpenWeatherMap aktuális időjárás végpontját használja.
    Ingyenes kulcsot itt regisztrálhatsz: https://home.openweathermap.org/users/sign_up

Ez a projekt tanulási célokat szolgál, de alapként felhasználható saját időjárás apphoz.
