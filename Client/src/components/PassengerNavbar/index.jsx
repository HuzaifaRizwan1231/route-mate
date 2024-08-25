import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfilePopUp from "../ProfilePopUp";
import MobileProfilePopUp from "../MobileProfilePopUp";

const PassengerNavbar = () => {
  const { passenger } = useSelector((state) => state.passenger);

  const [showProfilePopUp, setShowProfilePopUp] = useState(false);
  const [showMobileProfilePopUp, setShowMobileProfilePopUp] = useState(false);

  return (
    <>
      <div className="flex text-white bg-black items-center justify-between px-6 py-7 font-normal text-xl rounded-3xl m-4">
        <Link
          to="/passenger/home"
          className="font-semibold text-2xl flex gap-2 items-center"
        >
          <img
            src="/images/logo/logo-no-background.png"
            alt=""
            className="w-8 h-8"
          />
          <div>RouteMate</div>
        </Link>
        <div className="hidden md:flex gap-24 flex-1 justify-center">
          <Link to="/passenger/home" className="flex items-center gap-4">
            <i class="fa-solid fa-house"></i> Home
          </Link>
          <Link
            to="/passenger/searchListing"
            className="flex items-center gap-4"
          >
            <i class="fa-solid fa-search"></i> Search
          </Link>

          <Link
            to="/passenger/currentListings"
            className="flex items-center gap-4"
          >
            <i class="fa-solid fa-list"></i>Your Listings
          </Link>
        </div>
        {/* Mobile navbar */}
        <div
          className="md:hidden"
          onClick={() => {
            setShowMobileProfilePopUp(!showMobileProfilePopUp);
          }}
        >
          <i class={`fa-solid fa-${showMobileProfilePopUp ? "x" : "bars"}`}></i>
        </div>
        <div
          onClick={() => {
            setShowProfilePopUp(!showProfilePopUp);
          }}
          className="hidden md:flex items-center gap-3 cursor-pointer"
        >
          {/* <div className="w-12 h-12 bg-white rounded-full">
            <img
              src="/src/assets/images/bike.webp"
              alt=""
              className="w-full h-full rounded-full object-contain"
            />
          </div> */}
          <div>{passenger.name}</div>
          <div className="text-base">
            <i
              class={`fa-solid fa-chevron-${showProfilePopUp ? "up" : "down"}`}
            ></i>
          </div>
        </div>
        {showProfilePopUp && <ProfilePopUp role="passenger" />}
        {showMobileProfilePopUp && <MobileProfilePopUp role="passenger" />}
      </div>
    </>
  );
};

export default PassengerNavbar;
