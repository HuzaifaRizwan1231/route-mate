import { signInPassengerApi } from "@/api/auth.api";
import { setPassenger } from "@/redux/passenger/passengerSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const usePassengerLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { passenger } = useSelector((state) => state.passenger);

  const handleLoginInputChange = (event) => {
    dispatch(
      setPassenger({
        ...passenger,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    //api call
    const response = await signInPassengerApi(passenger);
    setLoading(false);

    if (response.success) {
      // Correct credentials
      dispatch(setPassenger(response.passenger));
      toast.success("Logged In");
      navigate("/passenger/home");
    } else {
      setError(response.error);
    }
  };
  return { handleLoginInputChange, handleSignIn, error, loading };
};
