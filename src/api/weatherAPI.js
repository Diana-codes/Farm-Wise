import axios from 'axios';

// Base URL for the OpenWeatherMap API
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key

/**
 * Fetches weather data for a specific location.
 * @param {string} location - The city or coordinates for the weather query.
 * @returns {Promise<Object>} - The weather data.
 */
export const fetchWeather = async (location) => {
  try {
    const response = await axios.get(`${WEATHER_API_URL}/weather`, {
      params: {
        q: location, // Example: "Kigali"
        appid: API_KEY,
        units: 'metric', // Converts temperature to Celsius
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
