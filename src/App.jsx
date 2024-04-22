import {  Route, Routes } from "react-router-dom";
import Counter from './Components/counter';
import Navbar from './Components/navbar';
import ReverseString from './Components/reverse';
import Weather from './Components/weather/weather';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/counterapp" element={<Counter />} />
        <Route path="/reverse" element={<ReverseString />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </>

  )
}

export default App