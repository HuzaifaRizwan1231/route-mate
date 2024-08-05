import PassengerNavbar from "@/components/PassengerNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchListing } from "./useSearchListing";
import { useSelector } from "react-redux";
import ListingCardSkeleton from "@/components/ui/Skeleton/ListingCardSkeleton";

const SearchListing = () => {
  const { listing } = useSelector((state) => state.listing);
  const { getListingsByLocation } = useSearchListing();
  useEffect(() => {
    getListingsByLocation();
  }, []);

  return (
    <>
      <div>
        <PassengerNavbar />
        <div className="flex flex-col gap-10 bg-white text-black h-screen rounded-t-[2.5rem] p-4">
          <form className="bg-gray-100 flex mt-10 mx-10 justify-center rounded-3xl px-20 py-6 gap-8">
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
            <Button className="bg-green-600 hover:bg-green-900">Search</Button>
          </form>
          <div className="mx-10 flex flex-col gap-10">
            <h1 className="text-4xl font-bold">
              Search results for your locations
            </h1>
            {/* Card Items */}
            <div className="grid grid-cols-3 gap-5 ">
              {/* Card Item */}

              {!listing ? (
                <>
                  {Array(6)
                    .fill(0)
                    .map(() => (
                      <ListingCardSkeleton />
                    ))}
                </>
              ) : (
                <>
                  {listing.map((listingItem) => (
                    <Link
                      to={`/passenger/searchListing/${listingItem.listingId}`}
                      className="flex flex-col shadow-2xl p-4 rounded-3xl hover:scale-105 transition-transform cursor-pointer"
                    >
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
                      {/* IMage */}
                      <div className="flex justify-center items-center">
                        <img
                          src={
                            listingItem.type === "car"
                              ? "/src/assets/images/car.webp"
                              : "/src/assets/images/bike.webp"
                          }
                          alt=""
                          className="object-contain w-full h-full rounded-3xl"
                        />
                      </div>
                      {/* Info */}
                      <div>
                        {/* Company  */}
                        <div className="text-sm text-gray-400 font-semibold">
                          VEHICLE
                        </div>
                        {/* Name and price */}
                        <div className="flex justify-between font-semibold text-lg">
                          <div>{listingItem.vehicleName}</div>
                          <div>
                            Rs. {listingItem.price}{" "}
                            <span className="text-xs font-normal text-gray-400">
                              / per trip
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchListing;
