const apiKey = "e1e91639cd34b765fe222ad6ff402f61";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

let checkWeather = async (city) => {
  const res = await fetch(url + city + `&appid=${apiKey}&units=metric`);

  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await res.json();
    // const load = data.data;
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data?.main?.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data?.main?.humidity + "%";
    document.querySelector(".wind").innerHTML = data?.wind?.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";

    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
};

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// checkWeather('germany')
