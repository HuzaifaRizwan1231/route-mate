import React from "react";
import { useSelector } from "react-redux";

const PassengerNavbar = () => {
  const { passenger } = useSelector((state) => state.passenger);
  return (
    <>
      <div className="flex text-white bg-black items-center justify-between px-6 py-5 font-normal text-xl rounded-3xl m-4">
        <div className="font-semibold text-2xl">RouteMate</div>
        <div className="flex gap-24 flex-1 justify-center">
          <div className="flex items-center gap-4">
            <i class="fa-solid fa-house"></i> Home
          </div>
          <div className="flex items-center gap-4">
            <i class="fa-solid fa-list"></i> Listings
          </div>

          <div className="flex items-center gap-4">
            <i class="fa-solid fa-person"></i>About
          </div>
          <div className="flex items-center gap-4">
            <i class="fa-solid fa-phone"></i> Contact
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full">
            <img
              src="/src/assets/images/bike.webp"
              alt=""
              className="w-full h-full rounded-full object-contain"
            />
          </div>
          <div>{passenger.name}</div>
          <div className="text-base">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassengerNavbar;
