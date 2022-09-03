//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=38ae2a0414572b046162426c49023945

let input = document.querySelector(".input");
let country = document.querySelector(".country");
let btn = document.querySelector(".btn");
let sky = document.querySelector(".sky");
let wind = document.querySelector(".wind");
let icon = document.querySelector(".icon");
let err = document.querySelector(".error");

async function getWeather() {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=c7bb9ca63dc0912c3626c68c31f4769e`
  );
  let data = await response.json();
  console.log(data);
  display = `Weather in ${data["name"]}`;
  sky.innerHTML = (data["main"]["temp"] - 273.15).toFixed(2) + "&degC";
  icon.setAttribute(
    "src",
    "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png"
  );
  wind.innerHTML = `${data["weather"][0]["description"]}`.toUpperCase();
  country.innerHTML = display;
}
getWeather();

btn.addEventListener("click", async function getWeather() {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c7bb9ca63dc0912c3626c68c31f4769e`
  );
  let data = await response.json();
  console.log(data);
  if (data["cod"] != 404) {
    display = `Weather in ${data["name"]}`;
    sky.innerHTML = Math.floor(data["main"]["temp"] - 273.15).toFixed(2) + "&degC";
    wind.innerHTML = `${data["weather"][0]["description"]}`.toUpperCase();
    icon.setAttribute(
      "src",
      "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png"
    );
    country.innerHTML = display;
} else {
      err.innerHTML = "Location Not Found";
    if (err.classList.contains("active")) {
        err.classList.add("active");
    } else {
        setTimeout(() => {
            err.innerHTML = '';
            err.classList.remove("active");
      }, 3000);
    }
  }
});
