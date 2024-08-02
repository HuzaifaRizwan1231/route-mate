import { useMapBox } from "@/hooks/useMapBox";
import React, { useEffect } from "react";

const MapBox = (props) => {
  const { startCoordinates, endCoordinates, setMapInstance } = props;

  const { loadMap, getCurrentLocation, getDirectionGeoJson } = useMapBox();
  useEffect(() => {
    try {
      // loading the map
      const map = loadMap();

      const currentLocation = getCurrentLocation();
      // Add geolocate control to the map.
      map.addControl(currentLocation);

      setMapInstance(map);
      // Trigger the geolocate control
      map.on("load", async () => {
        if (!startCoordinates && !endCoordinates) {
          currentLocation.trigger();
        }

        if (startCoordinates && !endCoordinates) {
          map.flyTo({ center: startCoordinates });
        }

        if (!startCoordinates && endCoordinates) {
          map.flyTo({ center: endCoordinates });
        }

        if (startCoordinates) {
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
                      coordinates: startCoordinates,
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
        }

        if (endCoordinates) {
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
                      coordinates: endCoordinates,
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
        }

        if (startCoordinates && endCoordinates) {
          const geojson = await getDirectionGeoJson({
            start: startCoordinates,
            end: endCoordinates,
          });
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

          map.fitBounds(
            [
              startCoordinates, // [lng, lat] - southwestern corner of the bounds
              endCoordinates, // [lng, lat] - northeastern corner of the bounds
            ],
            { padding: { top: 25, bottom: 25, left: 25, right: 25 } }
          );

          map.padding(10);
        }
      });

      return () => {
        map.remove();
      };
    } catch (error) {
      console.error(error);
    }
  }, [startCoordinates, endCoordinates]);
  return <div className={`h-full rounded-3xl`} id="map"></div>;
};

export default MapBox;
