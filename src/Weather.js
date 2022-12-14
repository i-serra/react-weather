import React, { useState } from "react";
import "./Weather.css";
import "./index.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "4eb9092a1ec1063ec22057d44d0bacc8";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handdleCitySearch(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-1">
              <a href=".">
                <span className="pin" role="img" aria-label="pin">
                  📍
                </span>
              </a>
            </div>
            <div className="col-8">
              <input type="search" placeholder="Enter a city" className="search-city form-control" autoFocus="on" onChange={handdleCitySearch} />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="search-button" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <hr className="line"/>
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
