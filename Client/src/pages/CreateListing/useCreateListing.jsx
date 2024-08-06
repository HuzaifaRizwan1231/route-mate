import { createListingApi } from "@/api/listing.api";
import { convertCoordsToLocationApi } from "@/api/mapbox.api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCreateListing = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [listingDetails, setListingDetails] = useState({
    vehicleName: null,
    vehicleType: "car",
    registrationNumber: null,
    color: null,
    startCoordinates: null,
    endCoordinates: null,
    price: null,
    contact: null,
  });

  const handleListingDetailChange = (e) => {
    setListingDetails({ ...listingDetails, [e.target.name]: e.target.value });
  };

  const handleVehicleTypeChange = (type) => {
    setListingDetails({ ...listingDetails, vehicleType: type });
  };

  const createListing = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    // frontend error handlings

    if (!listingDetails.startCoordinates || !listingDetails.endCoordinates) {
      setError("Select Both Locations to proceed");
      setLoading(false);
      return;
    }

    if (
      listingDetails.registrationNumber.length < 6 ||
      listingDetails.registrationNumber.length > 7
    ) {
      setError("Invalid Registration Number");
      setLoading(false);
      return;
    }

    if (listingDetails.contact.length !== 11) {
      setError("Phone no should be 11 digits");
      setLoading(false);
      return;
    }

    // adding location names
    const startLocationName = await convertCoordsToLocationApi(
      listingDetails.startCoordinates
    );
    const endLocationName = await convertCoordsToLocationApi(
      listingDetails.endCoordinates
    );

    // Create the listing here
    const response = await createListingApi(
      listingDetails,
      startLocationName,
      endLocationName
    );

    if (!response.success) {
      setError(response.message);
    } else {
      navigate("/driver/home");
    }
    setLoading(false);
  };
  return {
    handleListingDetailChange,
    createListing,
    setListingDetails,
    listingDetails,
    loading,
    error,
    handleVehicleTypeChange,
  };
};
