import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const { name, main, weather } = weatherData;

  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>
        <strong>Temperature:</strong> {main.temp}°C
      </p>
      <p>
        <strong>Condition:</strong> {weather[0].description}
      </p>
      <p>
        <strong>Humidity:</strong> {main.humidity}%
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    backgroundColor: '#f9f9f9',
  },
};

export default WeatherCard;
