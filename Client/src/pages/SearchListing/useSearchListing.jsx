import { getListingsApi } from "@/api/listing.api";
import { setListing } from "@/redux/listing/listingSlice";
import { useDispatch } from "react-redux";

export const useSearchListing = () => {
  const dispatch = useDispatch();
  const getListingsByLocation = async () => {
    // get custom location

    const response = await getListingsApi();
    if (response.success) {
      dispatch(setListing(response.listing));
    }
  };
  return { getListingsByLocation };
};
