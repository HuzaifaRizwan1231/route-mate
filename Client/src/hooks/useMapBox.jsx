import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiaHV6YWlmYS1yaXp3YW4iLCJhIjoiY2x5NXExd3A2MDJhczJ2cjFnamozOGVtMiJ9.Z57HUmqikHJnZ1iaRuPQmQ";

export const useMapBox = () => {
  const loadMap = () => {
    // Loading map
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 0,
    });

    return map;
  };

  const getCurrentLocation = () => {
    // Get geoLocateControl
    const currentLocation = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });
    return currentLocation;
  };
  return { loadMap, getCurrentLocation };
};
