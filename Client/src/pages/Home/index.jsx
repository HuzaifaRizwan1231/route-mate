import React from "react";
import "/src/css/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-wrapper flex flex-col h-screen">
        <div className="map-area flex-1 border border-black">Hello</div>
        <div className="services-area px-4 flex-1 border border-black">
          <div className="poppins-bold py-2 text-3xl services-header">
            <h1>Services</h1>
          </div>
          <div className="services grid grid-cols-2 gap-2">
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
    </>
  );
};

export default Home;
