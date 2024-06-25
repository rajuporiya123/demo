import axios from "axios";
// import Cookies from "js-cookie";

export const getAllProductApi = (data) => {
  return axios.get(
    'https://dummyjson.com/products',
    {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }
  );
};
