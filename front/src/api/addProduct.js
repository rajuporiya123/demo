import axios from "axios";

export const addProductApi = (data) => {
  return axios.post("https://dummyjson.com/products/add",data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
