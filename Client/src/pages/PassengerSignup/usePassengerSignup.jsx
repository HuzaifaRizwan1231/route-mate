import { signUpPassengerApi } from "@/api/auth.api";
import { setPassenger } from "@/redux/passenger/passengerSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const usePassengerSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { passenger } = useSelector((state) => state.passenger);

  const handleInputChange = (event) => {
    dispatch(
      setPassenger({
        ...passenger,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    // Check if passwords match
    if (passenger.password != passenger.cpassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    // Check CNIC error
    if (passenger.cnic.length != 13) {
      setError("CNIC must be 13 Characters without dashes");
      setLoading(false);
      return;
    }

    // try to insert new passenger into database
    const response = await signUpPassengerApi(passenger);
    setLoading(false);
    if (response.success) {
      dispatch(setPassenger(response.passenger));
      toast.success("Registered Successfully");
      // Route the user to the home page
      navigate("/passenger/home");
    } else {
      setError(response.error);
    }
  };
  return {
    handleInputChange,
    error,
    handleSignUp,
    loading,
  };
};
