import PassengerNavbar from "@/components/PassengerNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchListing } from "./useSearchListing";
import { useSelector } from "react-redux";
import ListingCardSkeleton from "@/components/ui/Skeleton/ListingCardSkeleton";
import { SearchBox } from "@mapbox/search-js-react";
import { Loader2 } from "lucide-react";
import SearchMessage from "@/components/SearchMessage";
import Footer from "@/components/Footer";

const SearchListing = () => {
  const { listing } = useSelector((state) => state.listing);
  const { getListingsByLocation, loading, setCoordinates, coordinates } =
    useSearchListing();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div>
        <PassengerNavbar />
        <div className="flex flex-col gap-10 bg-white text-black min-h-[80vh] rounded-t-[2.5rem] md:p-4 p-1">
          <form
            className="md:flex-row flex-col flex md:mt-10 mx-10 justify-center rounded-3xl md:px-20 py-6 gap-8"
            onSubmit={getListingsByLocation}
          >
            <div className="flex  gap-2 items-center">
              <div className="flex items-center justify-center bg-gray-800 text-white w-12 h-10 rounded-md">
                <i class="fa-solid fa-location-crosshairs"></i>
              </div>
              <SearchBox
                placeholder="Enter start location"
                value=""
                accessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
                onRetrieve={(res) =>
                  setCoordinates({
                    ...coordinates,
                    start: res.features[0].geometry.coordinates,
                  })
                }
              />
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex items-center justify-center bg-gray-800 text-white w-12 h-10 rounded-md">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <SearchBox
                placeholder="Enter end location"
                value=""
                accessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
                onRetrieve={(res) =>
                  setCoordinates({
                    ...coordinates,
                    end: res.features[0].geometry.coordinates,
                  })
                }
              />
            </div>
            <Button
              disabled={loading}
              className="bg-green-600 hover:bg-green-900"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Search
            </Button>
          </form>
          <div className="md:mx-10 mx-4 text-center md:text-left flex flex-col gap-10">
            <h1 className="text-4xl font-bold">
              Search results for your locations
            </h1>
            {/* Card Items */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
              {/* Card Item */}

              {loading ? (
                <>
                  {Array(6)
                    .fill(0)
                    .map(() => (
                      <ListingCardSkeleton />
                    ))}
                </>
              ) : !listing ? (
                <>
                  <SearchMessage message="Enter start and end locations to search" />
                </>
              ) : listing.length === 0 ? (
                <>
                  <SearchMessage message="No Results Found" />
                </>
              ) : (
                <>
                  {listing.map((listingItem) => (
                    <Link
                      to={`/passenger/searchListing/${listingItem.listingId}`}
                      className="flex flex-col border border-gray-200 shadow-lg p-4 rounded-3xl hover:scale-105 transition-transform cursor-pointer"
                    >
                      {/* Top bar */}
                      <div className="flex gap-2">
                        <div className="border-gray-400 border-[1px] py-1 px-2 rounded-lg font-semibold flex items-center gap-0.5">
                          <i class="fa-solid fa-star text-yellow-500"></i>
                          {listingItem.rating}
                          {/*  <span className="text-xs font-normal">(12)</span> */}
                        </div>
                        {listingItem.status === "pending" ? (
                          <div className="border-gray-400 border-[1px] py-1 px-2 rounded-lg bg-green-200 text-green-950">
                            Available now
                          </div>
                        ) : (
                          <div className="border-red-400 border-[1px] py-1 px-2 rounded-lg bg-red-200 text-red-950">
                            Booked
                          </div>
                        )}

                        <div className="py-1 px-2 rounded-lg">
                          <i class="fa-sharp fa-solid fa-person-walking"></i>{" "}
                          {Math.floor(listingItem.distanceFromStart)}m
                        </div>
                      </div>
                      {/* IMage */}
                      <div className="flex justify-center items-center">
                        <img
                          src={
                            listingItem.type === "car"
                              ? "/images/car.webp"
                              : "/images/bike.webp"
                          }
                          alt=""
                          className="object-contain w-full h-full rounded-3xl"
                        />
                      </div>
                      {/* Info */}
                      <div>
                        {/* Company  */}
                        <div className="text-sm text-left text-gray-400 font-semibold">
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
      <Footer />
    </>
  );
};

export default SearchListing;
