import { getListingByListingIdApi } from "@/api/listing.api";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const useListingDetail = () => {
  const { listingId } = useParams();
  const [filteredListingItem, setFilteredListingItem] = useState(null);

  const convertCoordsToLocation = async (coordinates) => {
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

  // funtion to get listing that is set in the url
  const getListingByListingId = async () => {
    setFilteredListingItem(null);
    const response = await getListingByListingIdApi(listingId);

    if (response.success) {
      const item = response.listing.find((element) => {
        return element.listingId == listingId;
      });
      const parsedstartCoordinates = JSON.parse(item.startLocation);
      const parsedendCoordinates = JSON.parse(item.endLocation);

      // Add location names into the listing item
      const startLocationName = await convertCoordsToLocation(
        parsedstartCoordinates
      );
      const endLocationName = await convertCoordsToLocation(
        parsedendCoordinates
      );
      setFilteredListingItem({
        ...item,
        startLocation: parsedstartCoordinates,
        endLocation: parsedendCoordinates,
        startLocationName: startLocationName,
        endLocationName: endLocationName,
      });
    }
  };

  return { getListingByListingId, filteredListingItem };
};
