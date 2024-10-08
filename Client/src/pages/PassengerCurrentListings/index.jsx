import PassengerNavbar from "@/components/PassengerNavbar";
import React, { useEffect } from "react";
import { usePassengerCurrentListings } from "./usePassengerCurrentListings";
import CurrentListingCard from "@/components/CurrentListingCard";
import { calculateDistance } from "@/utils/calculateDistance.utils";
import CurrentListingSkeleton from "@/components/ui/Skeleton/CurrentListingSkeleton";
import Footer from "@/components/Footer";

const PassengerCurrentListings = () => {
  const { loading, passengerListings, getPassengerListings } =
    usePassengerCurrentListings();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getPassengerListings();
  }, []);

  return (
    <>
      <div>
        <PassengerNavbar />
        <div className="flex flex-col gap-10 bg-white min-h-[80vh] text-black rounded-t-[2.5rem] p-4">
          <div className="md:mx-10 m-1 flex flex-col gap-10">
            <h1 className="text-4xl font-bold text-center">Your Listings</h1>
            {/* Card Items */}
            <div className="flex flex-col gap-5 ">
              {loading ? (
                <>
                  {Array(3)
                    .fill(0)
                    .map(() => (
                      <CurrentListingSkeleton />
                    ))}
                </>
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
                    distanceFromStart={calculateDistance(
                      JSON.parse(listingItem.startLocation),
                      JSON.parse(listingItem.endLocation)
                    )}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PassengerCurrentListings;
