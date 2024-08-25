import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DriverNavbar from "@/components/DriverNavbar";
import { SearchBox } from "@mapbox/search-js-react";
import MapBox from "@/components/MapBox";
import { useCreateListing } from "./useCreateListing";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import Footer from "@/components/Footer";

const CreateListing = () => {
  const [mapInstance, setMapInstance] = useState();

  const {
    handleListingDetailChange,
    createListing,
    setListingDetails,
    listingDetails,
    handleVehicleTypeChange,
    loading,
    error,
  } = useCreateListing();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div>
        <DriverNavbar />
        <div className="bg-white min-h-[80vh] text-black rounded-[2.5rem] flex">
          <div className="w-2/3 h-full rounded-tl-[2.5rem] px-16 py-8">
            <h1 className="text-4xl font-bold">Create a Listing</h1>
            <form
              className="grid grid-cols-2 gap-10 py-10"
              onSubmit={createListing}
            >
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">
                  Vehicle Name
                </div>
                <Input
                  required
                  onChange={handleListingDetailChange}
                  name="vehicleName"
                  className="text-2xl py-6 px-4"
                  placeholder="Honda civic"
                />
              </div>
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">
                  Vehicle Type
                </div>
                <Select
                  onValueChange={(value) => handleVehicleTypeChange(value)}
                >
                  <SelectTrigger className="text-2xl py-6 px-4">
                    <SelectValue placeholder="Car" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="bike">Bike</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">
                  Registration No.
                </div>
                <Input
                  required
                  onChange={handleListingDetailChange}
                  name="registrationNumber"
                  className="text-2xl py-6 px-4"
                  placeholder="LEAXXXX"
                />
              </div>
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">Color</div>
                <Input
                  required
                  onChange={handleListingDetailChange}
                  name="color"
                  className="text-2xl py-6 px-4"
                  placeholder="black"
                />
              </div>
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">
                  Start Location
                </div>

                <SearchBox
                  value=""
                  accessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
                  map={mapInstance}
                  onRetrieve={(res) =>
                    setListingDetails({
                      ...listingDetails,
                      startCoordinates: res.features[0].geometry.coordinates,
                    })
                  }
                />
              </div>
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">
                  End Location
                </div>

                <SearchBox
                  value=""
                  accessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
                  map={mapInstance}
                  onRetrieve={(res) =>
                    setListingDetails({
                      ...listingDetails,
                      endCoordinates: res.features[0].geometry.coordinates,
                    })
                  }
                />
              </div>
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">Price</div>
                <Input
                  required
                  onChange={handleListingDetailChange}
                  name="price"
                  className="text-2xl py-6 px-4"
                  placeholder="100"
                  type="number"
                />
              </div>

              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">
                  Contact No.
                </div>
                <Input
                  onChange={handleListingDetailChange}
                  name="contact"
                  required
                  className="text-2xl py-6 px-4"
                  placeholder="03XXXXXXXXX"
                  type="number"
                />
              </div>

              {error != "" && (
                <div className="text-red-500 text-lg col-span-2">* {error}</div>
              )}

              <Button
                type="submit"
                className="col-span-2 text-xl py-6"
                disabled={loading}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Create
              </Button>
            </form>
          </div>
          <div className="w-1/3 rounded-3xl shadow-xl m-4">
            <MapBox
              startCoordinates={listingDetails.startCoordinates}
              endCoordinates={listingDetails.endCoordinates}
              setMapInstance={setMapInstance}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateListing;
