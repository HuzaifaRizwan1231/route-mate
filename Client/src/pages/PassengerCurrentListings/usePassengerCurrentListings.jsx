import { getPassengerListingsApi } from "@/api/listing.api";
import { useState } from "react";

export const usePassengerCurrentListings = () => {
  const [loading, setLoading] = useState(true);
  const [passengerListings, setPassengerListings] = useState(null);

  const calculateDistance = (coordinateOne, coordinateTwo) => {
    const toRad = (x) => (x * Math.PI) / 180;

    const lat1 = coordinateOne[0];
    const lon1 = coordinateOne[1];
    const lat2 = coordinateTwo[0];
    const lon2 = coordinateTwo[1];
    console.log(lat1);

    const R = 6371000; // Earth radius in meters
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const getPassengerListings = async () => {
    const response = await getPassengerListingsApi();

    if (response.success) {
      setPassengerListings(response.listing);
      setLoading(false);
    }
  };
  return {
    loading,
    passengerListings,
    getPassengerListings,
    calculateDistance,
  };
};
