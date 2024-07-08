import axios from "axios";

export const signUpApi = async (customer) => {
  try {
    const response = await axios.post("http://localhost:3000/signup", {
      customer,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
