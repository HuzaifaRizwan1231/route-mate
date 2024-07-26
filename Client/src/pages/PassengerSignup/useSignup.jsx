import { signUpApi } from "@/api/auth.api";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { setCustomer } from "@/redux/customer/customerSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const { saveInLocalStorage } = useLocalStorage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const customer = useSelector((state) => state.customer.customer);

  const handleInputChange = (event) => {
    dispatch(
      setCustomer({
        ...customer,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    // Check if passwords match
    if (customer.password != customer.cpassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // try to insert new user into database
    const res = await signUpApi(customer);
    setLoading(false);
    if (res.data == "User Already Exists") {
      setError("User already exists");
    } else {
      const { name, email, password, phone, image } = res.data[0];
      dispatch(
        setCustomer({
          name: name,
          email: email,
          password: password,
          phone: phone,
          image: image,
        })
      );
      // Route the user to the home page
      // saveInLocalStorage();
      navigate("/");
    }
  };
  return {
    handleInputChange,
    error,
    handleSignUp,
    loading,
  };
};
