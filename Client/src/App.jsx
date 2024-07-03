import "/src/css/App.css";
import React, { useRef, useEffect, useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHV6YWlmYS1yaXp3YW4iLCJhIjoiY2x5NXExd3A2MDJhczJ2cjFnamozOGVtMiJ9.Z57HUmqikHJnZ1iaRuPQmQ";

function App() {
  useEffect(() => {
    // Loading map
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 3,
    });
  }, []);
  return (
    <>
      {/* <Login /> */}
      <Home />
    </>
  );
}

export default App;
