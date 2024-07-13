import { setCustomer } from "@/redux/customer/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useLocalStorage = () => {
  const customer = useSelector((state) => state.customer.customer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const saveInLocalStorage = () => {
    localStorage.clear();
    console.log(customer);
    localStorage.setItem("customer", JSON.stringify(customer));
  };

  const setCustomerFromLocalStorage = () => {
    const value = JSON.parse(localStorage.getItem("customer"));
    if (value) {
      dispatch(
        setCustomer({
          value,
        })
      );
    } else {
      navigate("/login");
    }
  };
  return { saveInLocalStorage, setCustomerFromLocalStorage };
};
