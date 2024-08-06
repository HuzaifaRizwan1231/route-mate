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

export const getListingsApi = async () => {
  try {
    const response = await axios.get(`/api/listing/get`);
    return response.data;
  } catch (error) {
    return { success: false, message: error.message };
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
