import React, { useEffect, useRef, useState } from "react";
import { useMapBox } from "@/hooks/useMapBox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DriverNavbar from "@/components/DriverNavbar";
import { SearchBox } from "@mapbox/search-js-react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

const CreateListing = () => {
  const [mapInstance, setMapInstance] = useState();
  const { loadMap, getCurrentLocation, getDirectionGeoJson } = useMapBox();
  useEffect(() => {
    try {
      // loading the map
      const map = loadMap();

      const currentLocation = getCurrentLocation();
      // Add geolocate control to the map.
      map.addControl(currentLocation);

      // Trigger the geolocate control
      map.on("load", async () => {
        currentLocation.trigger();

        const geojson = await getDirectionGeoJson({
          start: [74.283002, 31.418175],
          end: [74.288856, 31.431781],
        });

        setMapInstance(map);

        // adding line based on the geojson
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#3887be",
            "line-width": 5,
            "line-opacity": 0.75,
          },
        });

        map.addLayer({
          id: "start",
          type: "circle",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [74.283002, 31.418175],
                  },
                },
              ],
            },
          },
          paint: {
            "circle-radius": 10,
            "circle-color": "#f30",
          },
        });

        map.addLayer({
          id: "end",
          type: "circle",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [74.288856, 31.431781],
                  },
                },
              ],
            },
          },
          paint: {
            "circle-radius": 10,
            "circle-color": "#f30",
          },
        });
      });

      return () => {
        map.remove();
      };
    } catch (error) {
      console.error(error);
    }
  }, []);

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
                  mapboxgl={mapboxgl}
                  marker
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
                  mapboxgl={mapboxgl}
                  marker
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
          <div className="w-1/3 rounded-3xl shadow-xl m-4" id="map"></div>
        </div>
      </div>
    </>
  );
};

export default CreateListing;
