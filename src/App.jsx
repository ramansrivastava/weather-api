import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Weather from './components/Weather';
import WeatherAnimation from './WeatherAnimation'; // Import the animation component

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '4986d0e9897b3b54a62dcdbbe3dd4e83'; // Your API key here

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
      setError('');
    } catch (err) {
      setWeather(null);
      setError('City not found. Please try again.');
    }
  };

  return (
    <div className="app container">
      <WeatherAnimation /> {/* Add the animation here */}
      <h1 className="text-center my-4">Weather App</h1>

      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter city name" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
        />
        <button className="btn btn-primary" onClick={fetchWeather}>
          Get Weather
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
      {weather && <Weather weather={weather} />}
    </div>
  );
}

export default App;
