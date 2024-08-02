import axios from "../config/axios.config";

export const createListingApi = async (listing) => {
  try {
    const response = await axios.post(`/api/listing/create`, { listing });
    return response.data;
  } catch (error) {
    return { success: false, message: error.message };
  }
};
