import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    // Check if passwords match
    if (user.password != user.cpassword) {
      setError("Passwords do not match");
      setLoading(false);

      return;
    }

    // try to insert new user into database
    axios
      .post("http://localhost:3000/signup", { user })
      .then((res) => {
        setLoading(false);
        if (res.data == "User Already Exists") {
          setError("User already exists");
        } else {
          // Route the user to the home page
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return { user, setUser, handleInputChange, error, handleSignUp, loading };
};
