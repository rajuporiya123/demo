import axios from "axios";
// import Cookies from "js-cookie";

export const categoryListApi = (data) => {
  return axios.get(
    'https://dummyjson.com/products/category-list',
    {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }
  );
};
