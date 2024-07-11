import { signInApi } from "@/api/auth.api";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { setCustomer } from "@/redux/customer/customerSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { saveInLocalStorage } = useLocalStorage();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const customer = useSelector((state) => state.customer.customer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginInputChange = (event) => {
    dispatch(
      setCustomer({
        ...customer,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    //api call
    const res = await signInApi(customer);
    setLoading(false);
    if (res.data == "Incorrect email or password") {
      setError(res.data);
    } else {
      // Correct credentials
      const updatedCustomer = {
        name: res.data[0].name,
        email: res.data[0].email,
        password: res.data[0].password,
        phone: res.data[0].phone,
        image: res.data[0].image,
      };

      dispatch(setCustomer(updatedCustomer));
      console.log("2", customer);
      // saveInLocalStorage();
      // navigate("/");
    }
  };
  return { handleLoginInputChange, handleSignIn, error, loading };
};
