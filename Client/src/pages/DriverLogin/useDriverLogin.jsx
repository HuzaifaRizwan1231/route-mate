import { signInDriverApi } from "@/api/auth.api";
import { setDriver } from "@/redux/driver/driverSlice";
import { setPassenger } from "@/redux/passenger/passengerSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useDriverLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { driver } = useSelector((state) => state.driver);

  const handleDriverLoginInputChange = (event) => {
    dispatch(
      setDriver({
        ...driver,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleDriverSignIn = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    //api calls
    const response = await signInDriverApi(driver);
    setLoading(false);

    if (response.success) {
      // Correct credentials
      dispatch(setDriver(response.driver));
      toast.success("Logged In");
      navigate("/driver/home");
    } else {
      setError(response.error);
    }
  };
  return { handleDriverLoginInputChange, handleDriverSignIn, error, loading };
};
