import React from 'react';
import '../../styling/weather.css';
import Temperature from './temperature';

function Display({ weatherData }) {
  const { name, main, weather, wind } = weatherData;

  return (
    <div className="weather-display-container">
      <h2 className="weather-display-title">Current Weather</h2>
      <div className="weather-info-container">
        <div className="weather-info-item">
          <p className="info-label">Name:</p>
          <p className="info-value">{name}</p>
        </div>
        <div className="weather-info-item">
          <p className="info-label">Speed:</p>
          <p className="info-value">{wind.speed}</p>
        </div>
        <div className="weather-info-item">
          <p className="info-label">Degree:</p>
          <p className="info-value">{wind.deg}</p>
        </div>
        <div className="weather-info-item">
          <p className="info-label">Description:</p>
          <p className="info-value">{weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)}</p>
        </div>
        <div className="weather-info-item">
          <p className="info-label">Main:</p>
          <p className="info-value">{weather[0].main}</p>
        </div>
        <div className="weather-info-item">
          <p className="info-label">Humidity:</p>
          <p className="info-value">{main.humidity}</p>
        </div>
        <Temperature temp={wind.deg} />
      </div>
    </div>
  );
}

export default Display;
