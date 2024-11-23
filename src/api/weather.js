import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherAPI';

const Weather = () => {
  const [location, setLocation] = useState('Kigali');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeather(location);
        setWeatherData(data);
      } catch (err) {
        setError('Failed to fetch weather data.');
      }
    };

    fetchData();
  }, [location]);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
