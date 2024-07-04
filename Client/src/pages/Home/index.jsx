import React, { useEffect } from "react";
import "/src/css/Home.css";
import Navbar from "@/components/Navbar";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHV6YWlmYS1yaXp3YW4iLCJhIjoiY2x5NXExd3A2MDJhczJ2cjFnamozOGVtMiJ9.Z57HUmqikHJnZ1iaRuPQmQ";

const Home = () => {
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
      <div className="home-wrapper flex flex-col h-screen">
        <div className="map-area flex-1" id="map">
          {/* Map Area */}
        </div>
        <div className="services-area px-4 flex-1 rounded-3xl">
          <div className="poppins-bold py-2 text-3xl services-header">
            <h1>Services</h1>
          </div>
          <div className="services mb-24 grid grid-cols-2 gap-2">
            <div className="service-option ">
              <img src="src/assets/images/car.webp" className="" alt="" />
            </div>
            <div className="service-option ">
              {" "}
              <img src="src/assets/images/bike.webp" alt="" />
            </div>
            <div className="service-option ">
              {" "}
              <img src="src/assets/images/metro.jpg" alt="" />
            </div>
            <div className="service-option ">
              {" "}
              <img src="src/assets/images/bus.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Home;
