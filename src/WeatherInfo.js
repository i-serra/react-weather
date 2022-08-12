import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
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
            <img alt={props.data.description} src={props.data.icon} />
          </div>
          <div className="col-3">
            <span className="temperature">{Math.round(props.data.temperature)}</span>
            <span className="unit">°C|F</span>
          </div>
          <div className="col-6 description">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
              <li className="text-capitalize">Description: {props.data.description}</li>
            </ul>
          </div>
        </div>
        </div>)
}