const API_KEY = "edc5c244d49a15ae2af9307cbbd804fe";
const weather = document.querySelector("#weather .temp");
const city = document.querySelector("#weather .city");
//getCurrentPosition은 두개의 인자가 필요

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // const weatherIcon = document.createElement("img");
      // const weatherIconCode = data.weather[0].icon;
      const weatherIcon = document.createElement("img");
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      weatherIcon.alt = "icon";
      const weatherRow = document.querySelector("#weather .weatherIcon");
      weatherRow.appendChild(weatherIcon);
      weatherIcon.alt = "icon";
      weather.innerText = `${Math.ceil(data.main.temp)}°C`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const weatherContainer = document.querySelector("#weather");
function goToKMA() {
  window.open("https://www.weather.go.kr/", "_blank");
}
weatherContainer.addEventListener("click", goToKMA);
