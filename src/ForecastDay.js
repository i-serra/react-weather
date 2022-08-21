import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <hr />
      <div className="Forecast-day">{day()}</div>
      <div className="Forecast-temp">
        <span className="Forecast-temp-max">{maxTemp()}</span>|<span className="Forecast-temp-min">{minTemp()}</span>
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
    </div>
  );
}
