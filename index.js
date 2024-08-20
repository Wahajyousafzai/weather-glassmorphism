const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
let img = document.querySelectorAll("img");
let country = document.getElementById("country");
let time = document.getElementById("time");
let Cloud_Cover = document.getElementById("Cloud_Cover");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let visibility = document.getElementById("visibility");
let uv = document.getElementById("uv");
let feels_like = document.getElementById("feels_like");
let temp = document.getElementById("temp");
let myDocument = document.documentElement;

async function getData(cityname) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=f0692da22f0a46ca93e64137241508&q=${cityname}&aqi=yes`
  );
  return await promise.json();
}
button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  console.log(result);
  country.innerText = ` ${result.location.country}, ${result.location.name}`;
  time.innerText = `  Time : ${result.location.localtime}`;
  Cloud_Cover.innerText = `  Cloud Cover : ${result.current.cloud}%`;
  wind.innerHTML = `  Wind Direction : ${result.current.wind_dir}    | |    Wind Speed : ${result.current.gust_kph} km`;
  humidity.innerHTML = `   Humidity : ${result.current.humidity}%`;
  visibility.innerHTML = `   Visibility : ${result.current.vis_km} km`;
  uv.innerText = `   UV : ${result.current.uv}`;
  feels_like.innerText = `   Feels Like : ${result.current.feelslike_c}°C`;
  temp.innerText = `  Temperature : ${result.current.temp_c}°C`;
});

const divs = document.querySelectorAll(".container");
for (let div of divs) {
  div.ondblclick = deleteDiv;
  div.onclick = dis;
}

function dis() {
  myDocument.requestFullscreen();
}

function deleteDiv() {
  this.remove();
  myDocument.requestFullscreen();
}

const div = document.querySelectorAll(".contain");

for (let divs of div) {
  divs.ondblclick = dele;
}

function dele() {
  this.remove();
}

