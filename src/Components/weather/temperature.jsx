import React, { useState, useEffect } from 'react';
import '../../styling/weather.css'; 

function Temperature({ temp }) {
  // initializing the state
  const [unit, setUnit] = useState('celsius');
  const [temperature, setTemperature] = useState(temp);

  // it will call when temp changes
  useEffect(() => {
    setTemperature(temp);
    setUnit('celsius');
  }, [temp]);

  // conversion function
  const handleToggleUnit = () => {
    setUnit(unit === 'celsius' ? 'fahrenheit' : 'celsius');
    if (unit === 'celsius') {
      setTemperature((temperature * 9/5) + 32);
    } else {
      setTemperature((temperature - 32) * 5/9);
    }
  };

  // simple button to change the unit

  return (
    <div className="temperature-converter-container">
      <button onClick={handleToggleUnit} className="toggle-button">Toggle Unit</button>
      <p className="temperature-info">Temperature: {temperature.toFixed(2)} {unit === 'celsius' ? '°C' : '°F'}</p>
    </div>
  );
}

export default Temperature;
