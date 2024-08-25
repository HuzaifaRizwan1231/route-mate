import React from "react";
import MapBox from "./MapBox";
import { Link } from "react-router-dom";

const CurrentListingCard = (props) => {
  const {
    rating,
    vehicleName,
    price,
    startLocationName,
    endLocationName,
    driverName,
    phone,
    startLocation,
    endLocation,
    listingId,
    distanceFromStart,
  } = props;
  return (
    <>
      {/* Card Item */}
      <div className="flex md:gap-0 gap-4 md:flex-row flex-col-reverse md:w-4/5 w-full mx-auto border border-gray-200 shadow-lg p-4 rounded-3xl ">
        {/* Card Info Section */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {/* Top bar */}
          <div className="flex gap-2">
            <div className="border-gray-400 border-[1px] py-1 px-2 rounded-lg font-semibold flex items-center gap-0.5">
              <i class="fa-solid fa-star text-yellow-500"></i>
              {rating}
              {/*  <span className="text-xs font-normal">(12)</span> */}
            </div>

            <div className="py-1 px-2 rounded-lg">
              <i class="fa-sharp fa-solid fa-person-walking"></i>{" "}
              {Math.floor(distanceFromStart) > 1000
                ? Math.floor(Math.floor(distanceFromStart) / 1000) + "km"
                : Math.floor(distanceFromStart) + "m"}
            </div>
          </div>
          {/* Info grid */}
          <div className="grid grid-cols-2 gap-7">
            {/* One Item */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 font-semibold">Vehicle</div>
              <div className="font-semibold text-lg">{vehicleName}</div>
            </div>

            {/* One Item */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 font-semibold">Price</div>
              <div className="font-semibold text-lg">
                Rs. {price} <span className="text-xs ">/ per trip</span>
              </div>
            </div>

            {/* One Item */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 font-semibold">Pickup</div>
              <div className="font-semibold text-lg text-green-600">
                {" "}
                {startLocationName}
              </div>
            </div>

            {/* One Item */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 font-semibold">
                Destination
              </div>
              <div className="font-semibold text-lg text-red-600">
                {endLocationName}
              </div>
            </div>

            {/* One Item */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 font-semibold">Name</div>
              <div className="font-semibold text-lg">{driverName}</div>
            </div>

            {/* One Item */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 font-semibold">Contact</div>
              <Link className="font-semibold text-lg">{phone}</Link>
            </div>
          </div>
        </div>
        {/* Card Map Section */}
        <div className="md:w-1/2 md:h-auto h-72 ">
          <MapBox
            id={listingId}
            startCoordinates={JSON.parse(startLocation)}
            endCoordinates={JSON.parse(endLocation)}
            setMapInstance={(map) => {}}
          />
        </div>
      </div>
    </>
  );
};

export default CurrentListingCard;
