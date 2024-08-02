import React, { useState } from "react";
import { useMapBox } from "@/hooks/useMapBox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DriverNavbar from "@/components/DriverNavbar";
import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapBox from "@/components/MapBox";

const CreateListing = () => {
  const [mapInstance, setMapInstance] = useState();

  const [startCoordinates, setStartCoordinates] = useState(null);
  const [endCoordinates, setEndCoordinates] = useState(null);

  return (
    <>
      <div>
        <DriverNavbar />
        <div className="bg-white h-screen text-black rounded-[2.5rem] flex">
          <div className="w-2/3 h-full rounded-tl-[2.5rem] px-16 py-8">
            <h1 className="text-4xl font-bold">Create a Listing</h1>
            <form className="grid grid-cols-2 gap-10 py-10">
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">
                  Vehicle Name
                </div>
                <Input
                  className="text-2xl py-6 px-4"
                  placeholder="e.g. Honda civic"
                />
              </div>
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">
                  Vehicle Type
                </div>
                <Input
                  className="text-2xl py-6 px-4"
                  placeholder="e.g. car / bike"
                />
              </div>
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">
                  Registration No.
                </div>
                <Input className="text-2xl py-6 px-4" placeholder="XXX-XXXX" />
              </div>
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">Color</div>
                <Input
                  className="text-2xl py-6 px-4"
                  placeholder="e.g. black"
                />
              </div>
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">
                  Start Location
                </div>
                {/* <Input
                  className="text-2xl py-6 px-4"
                  placeholder="e.g. black"
                /> */}
                <SearchBox
                  value=""
                  accessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
                  map={mapInstance}
                  onRetrieve={(res) =>
                    setStartCoordinates(res.features[0].geometry.coordinates)
                  }
                />
              </div>
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">
                  End Location
                </div>
                {/* <Input
                  className="text-2xl py-6 px-4"
                  placeholder="e.g. black"
                /> */}
                <SearchBox
                  value=""
                  accessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
                  map={mapInstance}
                  onRetrieve={(res) =>
                    setEndCoordinates(res.features[0].geometry.coordinates)
                  }
                />
              </div>
              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">Price</div>
                <Input
                  className="text-2xl py-6 px-4"
                  placeholder="e.g. black"
                />
              </div>

              {/* One Item */}
              <div className="flex flex-col gap-2">
                <div className="text-xl text-gray-400 font-semibold">
                  Contact No.
                </div>
                <Input
                  className="text-2xl py-6 px-4"
                  placeholder="e.g. 03XX-XXXXXXX"
                />
              </div>

              <Button type="submit" className="col-span-2 text-xl py-6">
                Create
              </Button>
            </form>
          </div>
          <div className="w-1/3 rounded-3xl shadow-xl m-4">
            <MapBox
              startCoordinates={startCoordinates}
              endCoordinates={endCoordinates}
              setMapInstance={setMapInstance}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateListing;
