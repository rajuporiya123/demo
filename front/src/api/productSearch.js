import axios from "axios";
import Cookies from "js-cookie";

export const productSearchApi = (search) => {
  return axios.get(
    `https://dummyjson.com/products/search?q=${search}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }
  );
};
