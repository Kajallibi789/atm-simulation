function updateDateTime() {
    const now = new Date();
    document.getElementById("date").textContent = now.toLocaleDateString();
    document.getElementById("time").textContent = now.toLocaleTimeString();
  }
  
  // Update time every second
  setInterval(updateDateTime, 1000);
  updateDateTime(); // Run immediately
  
  // Fetch and update weather data
  async function fetchWeather() {
    const apiKey = "1dbde85125cfee06914e5b0946c3e379"; // Your API Key
    const city = "kuwait city";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      const temp = data.main.temp;
      
      // Update weather
      document.getElementById("weather").textContent = `${temp}°C`;
    } catch (error) {
      console.error("Weather data fetch failed", error);
    }
  }
  
  // Fetch weather every 10 minutes to keep it updated
  fetchWeather();
  setInterval(fetchWeather, 600000); // 600000ms = 10 minutes
  