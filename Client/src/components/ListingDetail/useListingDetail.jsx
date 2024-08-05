import { getListingByListingIdApi } from "@/api/listing.api";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const useListingDetail = () => {
  const { listingId } = useParams();
  const [filteredListingItem, setFilteredListingItem] = useState(null);

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
      setFilteredListingItem({
        ...item,
        startLocation: parsedstartCoordinates,
        endLocation: parsedendCoordinates,
      });
    }
  };

  return { getListingByListingId, filteredListingItem };
};
