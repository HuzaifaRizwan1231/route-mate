import { getPassengerListingsApi } from "@/api/listing.api";
import { useState } from "react";

export const usePassengerCurrentListings = () => {
  const [loading, setLoading] = useState(true);
  const [passengerListings, setPassengerListings] = useState(null);
  const getPassengerListings = async () => {
    const response = await getPassengerListingsApi();

    if (response.success) {
      setPassengerListings(response.listing);
      setLoading(false);
    }
  };
  return { loading, passengerListings, getPassengerListings };
};
