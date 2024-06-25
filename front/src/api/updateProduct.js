import axios from "axios";

export const updateProductApi = (id,data) => {
  return axios.put(`https://dummyjson.com/products/${id}`,data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
