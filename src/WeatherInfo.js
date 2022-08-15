import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <hr />
      <h6>
        <FormattedDate date={props.data.date} />
      </h6>
      <hr />
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-3">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col-3">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6 description">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
            <li className="text-capitalize">Description: {props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
