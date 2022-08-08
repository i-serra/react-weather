import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="app">
      <div className="container weather-app">
        <Weather />
      </div>
      <footer>
        This project was coded by{" "}
        <a href="https://golden-pasca-71ada2.netlify.app/" target="_blank" rel="noopener noreferrer">
          Inês Serra
        </a>{" "}
        and is{" "}
        <a href="https://github.com/i-serra/react-weather" target="_blank" rel="noopener noreferrer">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
