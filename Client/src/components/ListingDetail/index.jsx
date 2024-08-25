import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Link, useParams } from "react-router-dom";
import MapBox from "../MapBox";
import { useListingDetail } from "./useListingDetail";
import ListingDetailSkeleton from "../ui/Skeleton/ListingDetailSkeleton";
import { Loader2 } from "lucide-react";

const ListingDetail = () => {
  const { listingId } = useParams();
  const { getListingByListingId, filteredListingItem, bookListing, loading } =
    useListingDetail();

  useEffect(() => {
    getListingByListingId();
  }, [listingId]);

  return (
    <div className="fixed top-0 right-0 md:w-[40vw] w-[100vw] shadow-xl bg-white h-[100%] z-10 ">
      {!filteredListingItem ? (
        <>
          <ListingDetailSkeleton />
        </>
      ) : (
        <>
          <div className="h-1/2 m-3" id="map">
            <Link to="/passenger/searchListing">
              <Button className="z-10 fixed rounded-full m-2 ">
                <i class="fa-solid fa-x"></i>
              </Button>
            </Link>
            <MapBox
              startCoordinates={filteredListingItem.startLocation}
              endCoordinates={filteredListingItem.endLocation}
              setMapInstance={(map) => {}}
            />
          </div>
          <div className="h-1/2 overflow-y-auto py-4 px-8 flex flex-col gap-4">
            <div>
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Listing Details</h1>

                <Button
                  disabled={filteredListingItem.status === "active" || loading}
                  onClick={bookListing}
                  className={
                    filteredListingItem.status === "active" && "bg-red-600"
                  }
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {filteredListingItem.status === "active"
                    ? "Booked"
                    : "Book now"}
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-7 py-4">
                {/* One Item */}
                <div className="flex flex-col">
                  <div className="text-sm text-gray-400 font-semibold">
                    Vehicle
                  </div>
                  <div className="font-semibold text-lg">
                    {filteredListingItem.vehicleName}
                  </div>
                </div>

                {/* One Item */}
                <div className="flex flex-col">
                  <div className="text-sm text-gray-400 font-semibold">
                    Price
                  </div>
                  <div className="font-semibold text-lg">
                    Rs. {filteredListingItem.price}{" "}
                    <span className="text-xs ">/ per trip</span>
                  </div>
                </div>

                {/* One Item */}
                <div className="flex flex-col">
                  <div className="text-sm text-gray-400 font-semibold">
                    Pickup
                  </div>
                  <div className="font-semibold text-lg text-green-600">
                    {" "}
                    {filteredListingItem.startLocationName}
                  </div>
                </div>

                {/* One Item */}
                <div className="flex flex-col">
                  <div className="text-sm text-gray-400 font-semibold">
                    Destination
                  </div>
                  <div className="font-semibold text-lg text-red-600">
                    {filteredListingItem.endLocationName}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl">Driver Details</h1>
                <Link
                  target="_blank"
                  to={`https://wa.me/${filteredListingItem.phone}`}
                >
                  <Button variant="secondary">Contact</Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-7 py-4">
                {/* One Item */}
                <div className="flex flex-col">
                  <div className="text-sm text-gray-400 font-semibold">
                    Name
                  </div>
                  <div className="font-semibold text-lg">
                    {filteredListingItem.driverName}
                  </div>
                </div>

                {/* One Item */}
                <div className="flex flex-col">
                  <div className="text-sm text-gray-400 font-semibold">
                    Rating
                  </div>
                  <div className="font-semibold text-lg flex items-center gap-1">
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    {filteredListingItem.rating}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListingDetail;
