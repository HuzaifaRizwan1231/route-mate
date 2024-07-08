import { uploadImageApi } from "@/api/profile.api";
import { setCustomer } from "@/redux/customer/customerSlice";
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
    const res = await uploadImageApi(formData);
    dispatch(
      setCustomer({
        ...customer,
        image: res.data,
      })
    );
  };
  return { clickOnFileInput, uploadProfilePic };
};
