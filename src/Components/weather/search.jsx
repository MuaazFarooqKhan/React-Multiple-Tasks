import React, { useState } from 'react';
import '../../styling/weather.css'; 

function Search({ onSearch }) {
  const [city, setCity] = useState('');

  // whenever user enter data then it will added to the city state
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  // when user press enter.
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };

  // UI in which one button and one input field is created.
  return (
    <form onSubmit={handleSubmit} className="search-bar-form">
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city name"
        className="search-bar-input"
      />
      <button type="submit" className="search-bar-button">Search</button>
    </form>
  );
}

export default Search;
