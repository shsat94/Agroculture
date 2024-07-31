document.addEventListener('DOMContentLoaded', function() {
    const cropSelect = document.getElementById('crop-select');
    const getWeatherButton = document.getElementById('get-weather');
    const weatherDataContainer = document.getElementById('weather-data');

    const openWeatherMapApiKey = 'afc6173b81fb64ecb76a30e0b1de7e69';

    // Mapping of crops to their typical growing regions (latitude and longitude)
    const cropLocations = {
        corn: { lat: 28.7041, lon: 77.1025 }, // Example coordinates for Delhi, adjust as needed
        wheat: { lat: 26.8467, lon: 80.9462 }, // Example coordinates for London, adjust as needed
        rice: { lat: 28.3670, lon: 79.4304 }  // Example coordinates for Tokyo, adjust as needed
        // Add more crops and their corresponding locations as needed
    };

    getWeatherButton.addEventListener('click', function() {
        const selectedCrop = cropSelect.value;

        if (selectedCrop && cropLocations[selectedCrop]) {
            const { lat, lon } = cropLocations[selectedCrop];
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherMapApiKey}`)
                .then(response => response.json())
                .then(data => {
                    const weatherInfo = `
                        <h3>Weather for ${selectedCrop}</h3>
                        <p>Location: ${data.name}</p>
                        <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Wind Speed: ${data.wind.speed} m/s</p>
                    `;
                    weatherDataContainer.innerHTML = weatherInfo;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    weatherDataContainer.innerHTML = '<p>Sorry, we could not load the weather data at this time.</p>';
                });
        } else {
            weatherDataContainer.innerHTML = '<p>Please select a crop from the list.</p>';
        }
    });
});
