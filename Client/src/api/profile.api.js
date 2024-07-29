import axios from "../config/axios.config";

export const uploadImageApi = async (formData) => {
  try {
    const response = await axios.post(`/uploadimage`, formData);
    return response;
  } catch (error) {
    console.log(error);
  }
};
