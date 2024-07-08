import axios from "axios";

const url = "http://localhost:3000";

export const signUpApi = async (customer) => {
  try {
    const response = await axios.post(`${url}/signup`, {
      customer,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signInApi = async (customer) => {
  try {
    const response = await axios.post(`${url}/signin`, {
      customer,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
