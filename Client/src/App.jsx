import "/src/css/App.css";
import React, { useRef, useEffect, useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHV6YWlmYS1yaXp3YW4iLCJhIjoiY2x5NXExd3A2MDJhczJ2cjFnamozOGVtMiJ9.Z57HUmqikHJnZ1iaRuPQmQ";

function App() {
  useEffect(() => {
    try {
      // Loading map
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [0, 0],
        zoom: 0,
      });

      // Get geoLocateControl
      const currentLocation = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      });

      // Add geolocate control to the map.
      map.addControl(currentLocation);

      // Trigger the geolocate control
      map.on("load", () => {
        currentLocation.trigger();
      });
      return () => {
        map.remove();
      };
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      {/* <Login /> */}
      <Home />
      <Navbar />
      {/* <Signup /> */}
    </>
  );
}

export default App;
