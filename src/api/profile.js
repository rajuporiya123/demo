import axios from "axios";
import Cookies from "js-cookie";

export const profileApi = (data) => {
  return axios.get(
    "https://dummyjson.com/auth/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }
  );
};
