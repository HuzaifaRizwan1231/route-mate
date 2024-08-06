import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export const useMapBox = () => {
  const loadMap = (id) => {
    // Loading map
    const map = new mapboxgl.Map({
      container: `map-${id}`,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [74.3587, 31.5204],
      zoom: 10,
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

  const getDirectionGeoJson = async (coordinates) => {
    const { start, end } = coordinates;
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${
        start[1]
      };${end[0]},${end[1]}?steps=false&geometries=geojson&access_token=${
        import.meta.env.VITE_MAPBOX_ACCESS_TOKEN
      }`,
      { method: "GET" }
    );
    const jsonResponse = await response.json();
    const routeReponse = await jsonResponse.routes[0];
    const route = await routeReponse.geometry.coordinates;
    const geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };
    return geojson;
  };

  return {
    loadMap,
    getCurrentLocation,
    getDirectionGeoJson,
  };
};
