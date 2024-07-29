import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Button } from "../ui/button";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHV6YWlmYS1yaXp3YW4iLCJhIjoiY2x5NXExd3A2MDJhczJ2cjFnamozOGVtMiJ9.Z57HUmqikHJnZ1iaRuPQmQ";

const ListingDetail = () => {
  useEffect(() => {
    try {
      // Loading map
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [0, 0],
        zoom: 0,
      });

      //   // Get geoLocateControl
      //   const currentLocation = new mapboxgl.GeolocateControl({
      //     positionOptions: {
      //       enableHighAccuracy: true,
      //     },
      //     trackUserLocation: true,
      //     showUserHeading: true,
      //   });

      //   // Add geolocate control to the map.
      //   map.addControl(currentLocation);

      //   // Trigger the geolocate control
      //   map.on("load", () => {
      //     currentLocation.trigger();
      //   });
      return () => {
        map.remove();
      };
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div className="fixed top-0 right-0 w-[40vw] shadow-xl bg-white h-[100%]">
      <div className="h-1/2" id="map">
        <Button className="z-10 fixed rounded-full m-2 ">
          <i class="fa-solid fa-x"></i>
        </Button>
      </div>
      <div className="h-1/2 py-4 px-8 flex flex-col gap-4">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">Listing Details</h1>
            <Button>Book now</Button>
          </div>
          <div className="grid grid-cols-2 gap-7 py-4">
            {/* One Item */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 font-semibold">Car</div>
              <div className="font-semibold text-lg">Honda Civic</div>
            </div>

            {/* One Item */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 font-semibold">Price</div>
              <div className="font-semibold text-lg">
                Rs. 100 <span className="text-xs ">/ per trip</span>
              </div>
            </div>

            {/* One Item */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 font-semibold">Pickup</div>
              <div className="font-semibold text-lg">Model Town</div>
            </div>

            {/* One Item */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 font-semibold">
                Destination
              </div>
              <div className="font-semibold text-lg">Gulberg</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-2xl">Driver Details</h1>
            <Button variant="secondary">Contact</Button>
          </div>
          <div className="grid grid-cols-2 gap-7 py-4">
            {/* One Item */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 font-semibold">Name</div>
              <div className="font-semibold text-lg">Huzaifa Rizwan</div>
            </div>

            {/* One Item */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-400 font-semibold">Rating</div>
              <div className="font-semibold text-lg flex items-center gap-1">
                <i class="fa-solid fa-star text-yellow-500"></i>
                4.8 <span className="text-xs font-normal">(12)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
