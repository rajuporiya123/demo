import axios from "axios";
import Cookies from "js-cookie";

export const productDetailsApi = (id) => {
  return axios.get(
    `https://dummyjson.com/products/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }
  );
};
