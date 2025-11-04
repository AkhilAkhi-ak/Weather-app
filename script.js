const apiKey = "55cad6bdc65abc63df0909516c9989db"; // Get your free key from https://openweathermap.org/api

async function getWeather() {
  const city = document.getElementById("city").value;
  if (city === "") {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found!");
      return;
    }

    document.getElementById("city-name").textContent = `📍 ${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `🌡️ Temperature: ${data.main.temp}°C`;
    document.getElementById("description").textContent = `☁️ Condition: ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `🌬️ Wind Speed: ${data.wind.speed} m/s`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Unable to fetch weather data. Try again later!");
  }
}
