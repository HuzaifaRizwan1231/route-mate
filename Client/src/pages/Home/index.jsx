import React, { useEffect } from "react";
import "/src/assets/css/Home.css";
import Navbar from "@/components/Navbar";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useLocalStorage } from "@/hooks/useLocalStorage";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHV6YWlmYS1yaXp3YW4iLCJhIjoiY2x5NXExd3A2MDJhczJ2cjFnamozOGVtMiJ9.Z57HUmqikHJnZ1iaRuPQmQ";

const Home = () => {
  const { setCustomerFromLocalStorage } = useLocalStorage();
  useEffect(() => {
    setCustomerFromLocalStorage();
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
        <div className="map-area flex-1 h-1/2" id="map">
          {/* Map Area */}
        </div>
        <div className="services-area flex flex-col h-1/2 px-4 flex-1 rounded-3xl">
          <div className="py-2 text-gray-700 border-b border-gray-300 text-center services-header">
            <h1>Choose a ride or swipe up for more</h1>
          </div>
          <div className="services pr-2 py-4 overflow-y-scroll grid grid-cols-2 gap-2">
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
            <div className="col-span-2 pb-[4.5rem]"></div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Home;
