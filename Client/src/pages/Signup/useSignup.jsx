import { signUpApi } from "@/api/auth.api";
import { setCustomer } from "@/redux/customer/customerSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const customer = useSelector((state) => state.customer.value);

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
    } else if (res.data == "Inserted Successfully") {
      // Route the user to the home page
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
