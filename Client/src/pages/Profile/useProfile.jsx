import { uploadImageApi } from "@/api/profile.api";
import { useDispatch, useSelector } from "react-redux";

export const useProfile = () => {
  const customer = useSelector((state) => state.customer.value);
  const dispatch = useDispatch();
  const clickOnFileInput = () => {
    document.getElementById("profile-pic-file").click();
  };

  const uploadProfilePic = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", customer.email);
    formData.append("oldFileName", customer.image);
    console.log(customer);
    const res = await uploadImageApi(formData);
    dispatch(
      setCustomer({
        name: customer.name,
        email: customer.email,
        password: customer.password,
        phone: customer.phone,
        image: res.data,
      })
    );
  };
  return { clickOnFileInput, uploadProfilePic };
};
