function updateDateTime() {
  const now = new Date();
  document.getElementById("date").textContent = now.toLocaleDateString();
  document.getElementById("time").textContent = now.toLocaleTimeString();
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Run immediately

document.getElementById('card-inserted').addEventListener('click', function () {
  this.style.animation = 'insertCard 1s forwards';
  setTimeout(() => {
      window.location.href = 'pin.html'; 
  }, 1200);
});

async function fetchWeather() {
  const apiKey = '1dbde85125cfee06914e5b0946c3e379'; // Replace with a real API key
  const city = 'kuwait city';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
      const response = await fetch(url);
      const data = await response.json();
      const temp = data.main.temp;
      document.getElementById("weather").textContent = `${temp}°C`;
  } catch (error) {
      console.error("Weather data fetch failed", error);
  }
}

fetchWeather();
