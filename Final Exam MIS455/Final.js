const apiKey = 'b721f91606aea9e62f91c1a22bd73172'; 

    async function getWeather() {
      const city = document.getElementById('cityInput').value;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        const weatherInfo = document.getElementById('weatherInfo');
        if (data.cod === 200) {
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}, ${data.sys.country}</h2>
                                 <p>Temperature: ${data.main.temp}°C</p>
                                 <p>Description: ${data.weather[0].description}</p>`;
        } else {
          weatherInfo.innerHTML = `<p>City not found. Please enter a valid city name.</p>`;
        }
      } catch (error) {
        console.log('Error fetching weather data: ', error);
      }
    }

    
  