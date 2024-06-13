import axios from "axios";
import Cookies from "js-cookie";

export const loginApi = (data) => {
  return axios.post(
    "https://dummyjson.com/auth/login",
    {
      username: data.username,
      password: data.password,
    },
    {
      headers: { 
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${Cookies.get('token')}`
     },
    }
  );
};
