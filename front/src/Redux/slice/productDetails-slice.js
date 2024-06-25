import { createSlice } from "@reduxjs/toolkit";
import { getAllProductApi } from "../../api/getAllProduct";
import { productDetailsApi } from "../../api/productDetails";

const data = {
  isLoading: false,
  error: "",
  message: null,
  data: null,
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: data,
  reducers: {
    productDetailsSlice(state) {
      state.isLoading = true;
    },
    productDetailsSliceSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    productDetailsSliceFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    productDetailsSliceReset(state) {
      state.isLoading = false;
      state.data = null;
      state.error = "";
    },
  },
});

export const productDetailsHandler = (id) => async (dispatch) => {
  try {
    dispatch(productDetailsAction.productDetailsSlice());
    const res = await productDetailsApi(id);
    dispatch(productDetailsAction.productDetailsSliceSuccess(res));
  } catch (error) {
    dispatch(productDetailsAction.productDetailsSliceFailure(error.message));
  }
};

export default productDetailsSlice.reducer;
export const productDetailsAction = productDetailsSlice.actions;
