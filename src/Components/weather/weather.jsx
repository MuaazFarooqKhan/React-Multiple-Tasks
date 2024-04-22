import React, { useState } from 'react';
import Search from './search';
import Display from './display';
import '../../styling/weather.css'; 

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${23}&lon=${58}&appid=1c448885074b1fc44be47221a91b1725`)
if(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1c448885074b1fc44be47221a91b1725`)
  .then(response => response.json())
  .then(data => {
    debugger
    // Handle the weather data
    setWeatherData(data)
  })
  .catch(error => {
    setError('Fetching Data Failed');
    console.error('Error fetching weather data:', error);
  });}
  else{
    setError('Please Enter City Name');
  }
  };

  return (
    <div className="weather-app-container">
    <h1>Weather App</h1>
    <Search onSearch={handleSearch} />
    {weatherData && <Display weatherData={weatherData} />}
    {error && <p className="error">{error}</p>}
  </div>
  );
}

export default Weather;
