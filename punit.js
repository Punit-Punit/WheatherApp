function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "2fa73590fd8b5a4c6e68098ad5625395"; // Replace this with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }
