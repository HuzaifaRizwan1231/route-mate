import React from "react";
import "/src/css/Home.css";
import Navbar from "@/components/Navbar";

const Home = () => {
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
