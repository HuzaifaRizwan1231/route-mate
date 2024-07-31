import { signUpDriverApi } from "@/api/auth.api";
import { setDriver } from "@/redux/driver/driverSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useDriverSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { driver } = useSelector((state) => state.driver);

  const handleDriverInputChange = (event) => {
    dispatch(
      setDriver({
        ...driver,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleDriverSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    // Check if passwords match
    if (driver.password != driver.cpassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    // Check CNIC error
    if (driver.cnic.length != 13) {
      setError("CNIC must be 13 Characters without dashes");
      setLoading(false);
      return;
    }

    // Check License error
    if (driver.license.length != 9) {
      setError("License must be 9 Characters without dashes");
      setLoading(false);
      return;
    }

    // try to insert new passenger into database
    const response = await signUpDriverApi(driver);
    setLoading(false);
    if (response.success) {
      dispatch(setDriver({ ...response.driver, image: null, rating: "0.0" }));
      // Route the user to the home page
      navigate("/driver/home");
      console.log(driver);
    } else {
      setError(response.error);
    }
  };
  return {
    handleDriverInputChange,
    error,
    handleDriverSignUp,
    loading,
  };
};
