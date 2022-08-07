import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input type="search" placeholder="Enter a city" />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
      <h6>Monday | 07/08 | 16:39</h6>
      <h1>Lisbon</h1>
      <div className="row">
        <div className="col-6">
          <h2>22° C|F</h2>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 10%</li>
            <li>Wind: 10 km/h</li>
            <li>Description: Sunny</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
