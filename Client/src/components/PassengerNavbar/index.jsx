import React from "react";

const PassengerNavbar = () => {
  return (
    <>
      <div className="flex text-white items-center justify-between px-6 py-8 font-semibold text-lg ">
        <div>RouteMate</div>
        <div className="flex gap-24 flex-1 justify-center">
          <div>Home</div>
          <div>Listings</div>
          <div>About</div>
          <div>Contact</div>
        </div>
        <div>Login</div>
      </div>
    </>
  );
};

export default PassengerNavbar;
