const visitCount = document.getElementById("visit-count");
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);
visitCount.textContent = visits;

async function getWeather() {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=6.632192667531344&lon=3.3806072978815394&appid=7a24f23ff0f6ddd9ae6572431e5df1b0&units=imperial"
  );
  const data = await res.json();
  const temp = data.main.temp;
  const desc = data.weather[0].description;
  const icon = data.weather[0].icon;

  // Update DOM
  document.getElementById("city").textContent = data.name;
  document.getElementById(
    "temperature"
  ).textContent = `Temperature: ${temp.toFixed(1)} °F`;
  document.getElementById("description").textContent = `Condition: ${desc}`;
  document.getElementById(
    "weather-icon"
  ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  document.getElementById("weather-icon").alt = desc;
}
getWeather();
