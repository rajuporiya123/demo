import axios from "axios";

export const deleteProductApi = (id) => {
  return axios.delete(
    `https://dummyjson.com/products/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
