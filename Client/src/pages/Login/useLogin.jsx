import { signInApi } from "@/api/auth.api";
import { setCustomer } from "@/redux/customer/customerSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const customer = useSelector((state) => state.customer.value);
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
      navigate("/");
    }
  };
  return { handleLoginInputChange, handleSignIn, error, loading };
};
