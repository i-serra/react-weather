import React, { useState } from "react";
import "./Weather.css";
import "./index.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Monday | 07/08 | 16:39",
      city: response.data.name,
      icon: "//ssl.gstatic.com/onebox/weather/64/cloudy.png",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-1">
              <a href=".">
                <span role="img" aria-label="pin">
                  📍
                </span>
              </a>
            </div>
            <div className="col-8">
              <input type="search" placeholder="Enter a city" className="search-city" autoFocus="on" />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="search-button" />
            </div>
          </div>
        </form>
        <hr />
        <h6>{weatherData.date}</h6>
        <hr />
        <h1>{weatherData.city}</h1>
        <div className="row">
          <div className="col-3">
            <img alt={weatherData.description} src={weatherData.icon} />
          </div>
          <div className="col-3">
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C|F</span>
          </div>
          <div className="col-6 description">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
              <li className="text-capitalize">Description: {weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4eb9092a1ec1063ec22057d44d0bacc8";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showResponse);

    return <ThreeDots color="#00BFFF" height={80} width={80} className="loader" />;
  }
}
