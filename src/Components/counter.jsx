import React, { useState } from 'react';
import { Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import '../styling/counter.css'; // Import CSS file for styling

function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // this is the function to add 
  const increment = () => {
    if (count < 40) {
      setError('');
      setCount(count + 1);
    } else {
      setError('The value must not exceed forty');
    }
  };

  // function for decrement
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setError('');
    } else {
      setError('The value must be greater than or equal to zero.');
    }
  };

  // simple UI in which I just added 2 buttons
  return (
    <div className="counter-container">
      <Typography variant="h4" className="counter-title">Counter App</Typography>
      <div className="counter-content">
        <Typography variant="h6" className="counter-value">Current Count: {count}</Typography>
        <div className="counter-buttons">
          <Button
            variant="contained"
            className="counter-button"
            size={isMobile ? "small" : "large"} // Adjust size based on screen size
            onClick={increment}
          >
            +
          </Button>
          <Button
            variant="contained"
            className="counter-button"
            size={isMobile ? "small" : "large"} // Adjust size based on screen size
            onClick={decrement}
          >
            -
          </Button>
        </div>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Counter;
