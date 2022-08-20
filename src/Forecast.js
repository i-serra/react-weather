import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col column">
          <div className="Forecast-day">Monday</div>
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">20°</span>|<span className="Forecast-temp-min">10°</span>
          </div>
          <WeatherIcon code="01d" size={50} />
        </div>
        <div className="col column">
          <div className="Forecast-day">Monday</div>
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">20°</span>|<span className="Forecast-temp-min">10°</span>
          </div>
          <WeatherIcon code="01d" size={50} />
        </div>
        <div className="col column">
          <div className="Forecast-day">Monday</div>
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">20°</span>|<span className="Forecast-temp-min">10°</span>
          </div>
          <WeatherIcon code="01d" size={50} />
        </div>
        <div className="col column">
          <div className="Forecast-day">Monday</div>
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">20°</span>|<span className="Forecast-temp-min">10°</span>
          </div>
          <WeatherIcon code="01d" size={50} />
        </div>
        <div className="col column">
          <div className="Forecast-day">Monday</div>
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">20°</span>|<span className="Forecast-temp-min">10°</span>
          </div>
          <WeatherIcon code="01d" size={50} />
        </div>
      </div>
      <hr />
    </div>
  );
}
