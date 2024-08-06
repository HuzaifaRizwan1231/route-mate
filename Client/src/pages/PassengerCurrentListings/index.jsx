import PassengerNavbar from "@/components/PassengerNavbar";
import React, { useEffect } from "react";
import { usePassengerCurrentListings } from "./usePassengerCurrentListings";
import CurrentListingCard from "@/components/CurrentListingCard";

const PassengerCurrentListings = () => {
  const { loading, passengerListings, getPassengerListings } =
    usePassengerCurrentListings();

  useEffect(() => {
    getPassengerListings();
  }, []);

  return (
    <>
      <div>
        <PassengerNavbar />
        <div className="flex flex-col gap-10 bg-white text-black h-screen rounded-t-[2.5rem] p-4">
          <div className="mx-10 flex flex-col gap-10">
            <h1 className="text-4xl font-bold text-center">Your Listings</h1>
            {/* Card Items */}
            <div className="flex flex-col gap-5 ">
              {loading ? (
                <>Loading...</>
              ) : passengerListings.length === 0 ? (
                <>No Listings</>
              ) : (
                passengerListings.map((listingItem) => (
                  <CurrentListingCard
                    listingId={listingItem.listingId}
                    rating={listingItem.rating}
                    vehicleName={listingItem.vehicleName}
                    price={listingItem.price}
                    startLocationName={listingItem.startLocationName}
                    endLocationName={listingItem.endLocationName}
                    driverName={listingItem.driverName}
                    phone={listingItem.phone}
                    startLocation={listingItem.startLocation}
                    endLocation={listingItem.endLocation}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassengerCurrentListings;
