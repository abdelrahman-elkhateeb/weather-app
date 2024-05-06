const apiKey = "59dbd177704f52c3d71db0f0172fe086";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");
const imgIcon = document.getElementById("weatherIcon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  //update the values of the city and its data
  document.querySelector(".city").innerHTML = data.name;

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  if (data.weather[0].main == "Clouds") imgIcon.src = "images/clouds.png";
  else if (data.weather[0].main == "Clear") imgIcon.src = "images/clear.png";
  else if (data.weather[0].main == "Rain") imgIcon.src = "images/rain.png";
  else if (data.weather[0].main == "Snow") imgIcon.src = "images/snow.png";
  else if (data.weather[0].main == "Drizzle")
    imgIcon.src = "images/drizzle.png";
  else if (data.weather[0].main == "Mist") imgIcon.src = "images/mist.png";
}
searchBtn.addEventListener("click", () => {
  let searchValue = searchBar.value;
  checkWeather(searchValue);
});
