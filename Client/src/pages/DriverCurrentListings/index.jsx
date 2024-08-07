import DriverNavbar from "@/components/DriverNavbar";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { useDriverCurrentListings } from "./useDriverCurrentListings";
import CurrentListingCard from "@/components/CurrentListingCard";
import { calculateDistance } from "@/utils/calculateDistance.utils";
import CurrentListingSkeleton from "@/components/ui/Skeleton/CurrentListingSkeleton";
import SearchMessage from "@/components/SearchMessage";

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
                <>
                  {" "}
                  {Array(3)
                    .fill(0)
                    .map(() => (
                      <CurrentListingSkeleton />
                    ))}
                </>
              ) : showActiveListings ? (
                activeDriverListings.length === 0 ? (
                  <>
                    <SearchMessage message="No Active Listings" />
                  </>
                ) : (
                  activeDriverListings.map((listingItem) => (
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
                )
              ) : pendingDriverListings.length === 0 ? (
                <>
                  <SearchMessage message="No Pending Listings" />
                </>
              ) : (
                pendingDriverListings.map((listingItem) => (
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
    </>
  );
};

export default DriverCurrentListings;
