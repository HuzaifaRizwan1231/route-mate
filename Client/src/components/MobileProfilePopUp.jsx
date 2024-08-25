import Cookies from "js-cookie";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const MobileProfilePopUp = (props) => {
  const { role } = props;
  const navigate = useNavigate();
  const { driver } = useSelector((state) => state.driver);
  const { passenger } = useSelector((state) => state.passenger);

  const logout = () => {
    if (role === "passenger") {
      Cookies.remove("passenger_token");
      navigate("/passenger/signin");
    } else if (role === "driver") {
      navigate("/driver/signin");
    }
  };

  return (
    <div className="absolute z-20 top-[5.5rem] right-[2.25rem] bg-white text-black rounded-xl flex flex-col gap-2 justify-center p-2 w-60 border border-gray-200 shadow-lg">
      <div className="flex flex-col gap-2 justify-center items-center p-2 text-base">
        <div>{role === "driver" ? driver.name : passenger.name}</div>
        <div className="border border-b-[0px] border-gray-200 w-full"></div>
        <Link
          to={`/${role}/home`}
          className="grid grid-cols-3 items-center w-full px-4"
        >
          <div className="col-span-1 justify-center flex">
            <i class="fa-solid fa-house"></i>
          </div>
          <div className="col-span-2">Home</div>
        </Link>

        {role === "driver" ? (
          <>
            <Link
              to="/driver/createListing"
              className="grid grid-cols-3 items-center w-full px-4"
            >
              <div className="col-span-1 justify-center flex">
                <i class="fa-solid fa-plus"></i>
              </div>
              <div className="col-span-2 ">Create Listing</div>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/passenger/searchListing"
              className="grid grid-cols-3 items-center w-full px-4"
            >
              <div className="col-span-1 justify-center flex">
                <i class="fa-solid fa-search"></i>
              </div>
              <div className="col-span-2 ">Search Listing</div>
            </Link>
          </>
        )}

        <Link
          to={`/${role}/currentListings`}
          className="grid grid-cols-3 items-center w-full px-4"
        >
          <div className="col-span-1 justify-center flex">
            <i class="fa-solid fa-list"></i>
          </div>
          <div className="col-span-2 ">Your Listings</div>
        </Link>
        <div
          onClick={logout}
          className="text-red-600 grid grid-cols-3 items-center w-full px-4 cursor-pointer"
        >
          <div className="col-span-1 justify-center flex">
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
          <div className="col-span-2 ">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default MobileProfilePopUp;
