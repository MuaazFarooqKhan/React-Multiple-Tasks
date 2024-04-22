import React, { useState } from 'react';
import '../styling/reverse.css'; // Import CSS file for styling

function ReverseString() {
  // Here I simple initailize the states
  const [input, setInput] = useState('');
  const [reversed, setReversed] = useState('');
  const [error, setError] = useState('');

  // Here we get data from the input field and removing error
  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError('');
  };

  // this is the logic for reverse string
  const reverseString = () => {
    if (!input.trim()) {
      setError('Input cannot be blank');
    } else if (typeof input === 'string') {
      let reversedString = '';
      for (let i = input.length - 1; i >= 0; i--) {
        reversedString += input[i];
      }
      setReversed(reversedString);
    } else {
      setError('Input must be a string');
    }
  };

  // this is simple UI for reverse string component
  return (
    <div className="reverse-string-container">
    <input
      type="text"
      value={input}
      onChange={handleInputChange}
      placeholder="Enter a string"
      className="input-field"
    />
    <button onClick={reverseString} className="reverse-button">Reverse</button>
    <p className="reversed-string">Reversed String: {reversed}</p>
    {error && <p className="error">{error}</p>}
  </div>
);
}

export default ReverseString;
