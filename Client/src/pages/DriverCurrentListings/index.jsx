import DriverNavbar from "@/components/DriverNavbar";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { useDriverCurrentListings } from "./useDriverCurrentListings";
import { Link } from "react-router-dom";
import MapBox from "@/components/MapBox";

const DriverCurrentListings = () => {
  const {
    activeDriverListings,
    pendingDriverListings,
    showActiveListings,
    showPendingListings,
    setShowActiveListings,
    setShowPendingListings,
    getDriverListings,
    loading,
  } = useDriverCurrentListings();

  useEffect(() => {
    getDriverListings();
  }, []);

  return (
    <>
      <div>
        <DriverNavbar />
        <div className="flex flex-col gap-10 bg-white text-black h-screen rounded-t-[2.5rem] p-4">
          <div className="flex w-fit mx-auto mt-4 mb-2 bg-white shadow-xl border border-gray-200 rounded-3xl">
            <Button
              onClick={() => {
                setShowActiveListings(true);
                setShowPendingListings(false);
              }}
              variant="ghost"
              className={`rounded-3xl w-24 hover:bg-white ${
                showActiveListings &&
                "bg-black text-white hover:bg-black hover:text-white"
              }`}
            >
              Active
            </Button>
            <Button
              onClick={() => {
                setShowActiveListings(false);
                setShowPendingListings(true);
              }}
              variant="ghost"
              className={`rounded-3xl w-24 hover:bg-white ${
                showPendingListings &&
                "bg-black text-white hover:bg-black hover:text-white"
              }`}
            >
              Pending
            </Button>
          </div>
          <div className="mx-10 flex flex-col gap-10">
            <h1 className="text-4xl font-bold text-center">
              {showActiveListings && "Your Active listings"}
              {showPendingListings && "Your Pending listings"}
            </h1>
            {/* Card Items */}
            <div className="flex flex-col gap-5 ">
              {loading ? (
                <>Loading...</>
              ) : showActiveListings ? (
                activeDriverListings.map((listingItem) => (
                  <>
                    {/* Card Item */}
                    <div className="flex w-4/5 mx-auto border border-gray-200 shadow-lg p-4 rounded-3xl ">
                      {/* Card Info Section */}
                      <div className="w-1/2 flex flex-col gap-4">
                        {/* Top bar */}
                        <div className="flex gap-2">
                          <div className="border-gray-400 border-[1px] py-1 px-2 rounded-lg font-semibold flex items-center gap-0.5">
                            <i class="fa-solid fa-star text-yellow-500"></i>
                            {listingItem.rating}
                            {/*  <span className="text-xs font-normal">(12)</span> */}
                          </div>
                          <div className="border-gray-400 border-[1px] py-1 px-2 rounded-lg bg-green-200 text-green-950">
                            Available now
                          </div>
                          <div className="py-1 px-2 rounded-lg">
                            <i class="fa-sharp fa-solid fa-person-walking"></i>{" "}
                            120m
                          </div>
                        </div>
                        {/* Info grid */}
                        <div className="grid grid-cols-2 gap-7">
                          {/* One Item */}
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-400 font-semibold">
                              Vehicle
                            </div>
                            <div className="font-semibold text-lg">
                              {listingItem.vehicleName}
                            </div>
                          </div>

                          {/* One Item */}
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-400 font-semibold">
                              Price
                            </div>
                            <div className="font-semibold text-lg">
                              Rs. {listingItem.price}{" "}
                              <span className="text-xs ">/ per trip</span>
                            </div>
                          </div>

                          {/* One Item */}
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-400 font-semibold">
                              Pickup
                            </div>
                            <div className="font-semibold text-lg">
                              {" "}
                              {listingItem.startLocationName}
                            </div>
                          </div>

                          {/* One Item */}
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-400 font-semibold">
                              Destination
                            </div>
                            <div className="font-semibold text-lg">
                              {listingItem.endLocationName}
                            </div>
                          </div>

                          {/* One Item */}
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-400 font-semibold">
                              Name
                            </div>
                            <div className="font-semibold text-lg">
                              {listingItem.driverName}
                            </div>
                          </div>

                          {/* One Item */}
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-400 font-semibold">
                              Contact
                            </div>
                            <Link className="font-semibold text-lg">
                              {listingItem.phone}
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* Card Map Section */}
                      <div className="w-1/2">
                        <MapBox
                          startCoordinates={JSON.parse(
                            listingItem.startLocation
                          )}
                          endCoordinates={JSON.parse(listingItem.endLocation)}
                          setMapInstance={(map) => {}}
                        />
                      </div>
                    </div>
                  </>
                ))
              ) : (
                pendingDriverListings.map((listingItem) => (
                  <>
                    {/* Card Item */}
                    <div className="flex w-4/5 mx-auto border border-gray-200 shadow-lg p-4 rounded-3xl ">
                      {/* Card Info Section */}
                      <div className="w-1/2 flex flex-col gap-4">
                        {/* Top bar */}
                        <div className="flex gap-2">
                          <div className="border-gray-400 border-[1px] py-1 px-2 rounded-lg font-semibold flex items-center gap-0.5">
                            <i class="fa-solid fa-star text-yellow-500"></i>
                            {listingItem.rating}
                            {/*  <span className="text-xs font-normal">(12)</span> */}
                          </div>
                          <div className="border-gray-400 border-[1px] py-1 px-2 rounded-lg bg-green-200 text-green-950">
                            Available now
                          </div>
                          <div className="py-1 px-2 rounded-lg">
                            <i class="fa-sharp fa-solid fa-person-walking"></i>{" "}
                            120m
                          </div>
                        </div>
                        {/* Info grid */}
                        <div className="grid grid-cols-2 gap-7">
                          {/* One Item */}
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-400 font-semibold">
                              Vehicle
                            </div>
                            <div className="font-semibold text-lg">
                              {listingItem.vehicleName}
                            </div>
                          </div>

                          {/* One Item */}
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-400 font-semibold">
                              Price
                            </div>
                            <div className="font-semibold text-lg">
                              Rs. {listingItem.price}{" "}
                              <span className="text-xs ">/ per trip</span>
                            </div>
                          </div>

                          {/* One Item */}
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-400 font-semibold">
                              Pickup
                            </div>
                            <div className="font-semibold text-lg">
                              {" "}
                              {listingItem.startLocationName}
                            </div>
                          </div>

                          {/* One Item */}
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-400 font-semibold">
                              Destination
                            </div>
                            <div className="font-semibold text-lg">
                              {listingItem.endLocationName}
                            </div>
                          </div>

                          {/* One Item */}
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-400 font-semibold">
                              Name
                            </div>
                            <div className="font-semibold text-lg">
                              {listingItem.driverName}
                            </div>
                          </div>

                          {/* One Item */}
                          <div className="flex flex-col">
                            <div className="text-sm text-gray-400 font-semibold">
                              Contact
                            </div>
                            <Link className="font-semibold text-lg">
                              {listingItem.phone}
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* Card Map Section */}
                      <div className="w-1/2">
                        <MapBox
                          startCoordinates={JSON.parse(
                            listingItem.startLocation
                          )}
                          endCoordinates={JSON.parse(listingItem.endLocation)}
                          setMapInstance={(map) => {}}
                        />
                      </div>
                    </div>
                  </>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverCurrentListings;
