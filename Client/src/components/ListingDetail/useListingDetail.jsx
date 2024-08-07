import { bookListingApi, getListingByListingIdApi } from "@/api/listing.api";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useListingDetail = () => {
  const { listingId } = useParams();
  const [filteredListingItem, setFilteredListingItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const bookListing = async () => {
    setLoading(true);
    const response = await bookListingApi(listingId);

    if (response.success) {
      console.log(response.message);
      navigate("/passenger/currentListings");
    }
    setLoading(false);
  };

  return { getListingByListingId, filteredListingItem, bookListing, loading };
};
