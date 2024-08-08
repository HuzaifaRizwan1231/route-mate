import axios from "../config/axios.config";

export const createListingApi = async (
  listing,
  startLocationName,
  endLocationName
) => {
  try {
    const response = await axios.post(`/api/listing/create`, {
      listing,
      startLocationName,
      endLocationName,
    });
    return response.data;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getListingsApi = async (coordinates) => {
  try {
    const response = await axios.post(`/api/listing/get`, { coordinates });
    return response.data;
  } catch (error) {
    return { success: false, message: error };
  }
};

export const getListingByListingIdApi = async (listingId) => {
  try {
    const response = await axios.post(`/api/listing/getById`, { listingId });
    return response.data;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getDriverListingsApi = async () => {
  try {
    const response = await axios.get(`/api/listing/getDriverListings`);
    return response.data;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const bookListingApi = async (listingId) => {
  try {
    const response = await axios.post(`/api/listing/book`, { listingId });
    return response.data;
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getPassengerListingsApi = async () => {
  try {
    const response = await axios.get(`/api/listing/getPassengerListings`, {
      withCredentials: true,
      headers: {
        SameSite: "none",
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    return { success: false, message: error.message };
  }
};
