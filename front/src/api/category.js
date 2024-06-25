import axios from "axios";
// import Cookies from "js-cookie";

export const categoryApi = (category) => {
  return axios.get(
    `https://dummyjson.com/products/category/${category}`,
    {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }
  );
};
