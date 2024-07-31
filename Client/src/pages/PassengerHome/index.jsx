import React from "react";
import "/src/assets/css/Home.css";

import PassengerNavbar from "@/components/PassengerNavbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

const PassengerHome = () => {
  const { passenger } = useSelector((state) => state.passenger);

  return (
    <>
      <div>
        <PassengerNavbar />
        <div className="home-section text-black h-screen">
          <div className="flex gap-5 flex-col justify-center items-center py-16">
            <h1 className="text-6xl font-bold">Explore a new world!</h1>
            <div className="text-lg text-center">
              <p>Your companion for your daily commute is right here.</p>
              <p>Secure, Fast and Easy!</p>
            </div>
            <form className="flex mt-10 bg-gray-200 rounded-3xl px-20 py-6 gap-8">
              <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center bg-gray-800 text-white w-12 h-10 rounded-md">
                  <i class="fa-solid fa-location-crosshairs"></i>
                </div>
                <Input required type="text" placeholder="Start Location" />
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center bg-gray-800 text-white w-12 h-10 rounded-md">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <Input required type="text" placeholder="End Location" />
              </div>
              <Button className="bg-green-600 hover:bg-green-900">
                Search
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassengerHome;
