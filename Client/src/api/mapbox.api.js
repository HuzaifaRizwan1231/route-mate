export const convertCoordsToLocationApi = async (coordinates) => {
  const response = await fetch(
    `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${
      coordinates[0]
    }&latitude=${coordinates[1]}&access_token=${
      import.meta.env.VITE_MAPBOX_ACCESS_TOKEN
    }`,
    { method: "GET" }
  );
  const jsonRepsonse = await response.json();
  return jsonRepsonse.features[0].properties.name;
};
