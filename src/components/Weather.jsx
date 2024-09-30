import React from "react";
import './Weather.css';

const Weather = ({ weather }) => {
  const { name, sys, weather: weatherDetails, main, wind } = weather;

  return (
    <div className="weather-card card mx-auto">
      <div className="card-body">
        <h2 className="card-title">{name}, {sys.country}</h2>
        <h5 className="card-subtitle mb-2 text-muted">{weatherDetails[0].description}</h5>
        <p className="card-text">
          <strong>Temperature:</strong> {main.temp}°C <br />
          <strong>Humidity:</strong> {main.humidity}% <br />
          <strong>Wind Speed:</strong> {wind.speed} m/s
        </p>
      </div>
    </div>
  );
};

export default Weather;
