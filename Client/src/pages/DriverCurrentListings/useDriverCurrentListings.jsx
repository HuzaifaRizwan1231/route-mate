import { getDriverListingsApi } from "@/api/listing.api";
import { useState } from "react";

export const useDriverCurrentListings = () => {
  const [showActiveListings, setShowActiveListings] = useState(true);
  const [showPendingListings, setShowPendingListings] = useState(false);
  const [activeDriverListings, setActiveDriverListings] = useState([]);
  const [pendingDriverListings, setPendingDriverListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDriverListings = async () => {
    const response = await getDriverListingsApi();
    if (response.success) {
      // filtering listings according to status
      const activeListings = response.listing.filter((listingItem) => {
        return listingItem.status === "active";
      });
      const pendingListings = response.listing.filter((listingItem) => {
        return listingItem.status === "pending";
      });
      setActiveDriverListings(activeListings);
      setPendingDriverListings(pendingListings);
      setLoading(false);
    }
  };
  return {
    activeDriverListings,
    pendingDriverListings,
    showActiveListings,
    showPendingListings,
    setShowActiveListings,
    setShowPendingListings,
    getDriverListings,
    loading,
  };
};
