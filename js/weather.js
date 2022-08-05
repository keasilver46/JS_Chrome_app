const API_KEY = "da4603f53841f686a880e30aa9432e68";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = document.querySelector("#weather div:first-child");
      const city = document.querySelector("#weather div:last-child");
      city.innerText = `${data.name}`;
      temp.innerText = `${data.main.temp}ºC`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);