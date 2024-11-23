import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherAPI';
import WeatherCard from '../components/WeatherCard.jsx';
const Weather = () => {
  const [location, setLocation] = useState('Kigali'); // Default location
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch weather data when the component mounts or location changes
    const getWeatherData = async () => {
      try {
        const data = await fetchWeather(location);
        setWeatherData(data);
      } catch (err) {
        setError('Failed to fetch weather data. Please try again.');
      }
    };

    getWeatherData();
  }, [location]);

  return (
    <div style={styles.container}>
      <h1>Weather Forecast</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={styles.input}
      />
      <button onClick={() => setWeatherData(null)} style={styles.button}>
        Search
      </button>

      {error && <p style={styles.error}>{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

const styles = {
  container: {
    padding: '16px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    width: '60%',
    marginBottom: '8px',
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
};

export default Weather;
