import axios from "axios";
import Cookies from "js-cookie";

export const productShortApi = (sortBy,order) => {
  return axios.get(
    `https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }
  );
};
