import { getListingsApi } from "@/api/listing.api";
import { setListing } from "@/redux/listing/listingSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const useSearchListing = () => {
  const dispatch = useDispatch();
  const [coordinates, setCoordinates] = useState({ start: null, end: null });
  const [loading, setLoading] = useState(false);

  const getListingsByLocation = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!coordinates.start || !coordinates.end) {
      dispatch(setListing(null));
    } else {
      const response = await getListingsApi(coordinates);
      if (response.success) {
        dispatch(setListing(response.listing));
      } else {
        console.log(response);
      }
    }
    setLoading(false);
  };
  return { getListingsByLocation, loading, setCoordinates, coordinates };
};
