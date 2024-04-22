import React, { useState } from 'react';
import '../../styling/weather.css'; 

function Search({ onSearch }) {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };

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
