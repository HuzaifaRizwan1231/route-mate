import axios from "axios";

const url = "http://localhost:3000";

export const uploadImageApi = async (formData) => {
  try {
    const response = await axios.post(`${url}/uploadimage`, formData);
    return response;
  } catch (error) {
    console.log(error);
  }
};
