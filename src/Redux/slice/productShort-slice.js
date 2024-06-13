import { createSlice } from "@reduxjs/toolkit";
import { productShortApi } from "../../api/productShort";

const data = {
  isLoading: false,
  error: "",
  message: null,
  data: null,
};

const productShortSlice = createSlice({
  name: "productShort",
  initialState: data,
  reducers: {
    productShortSlice(state) {
      state.isLoading = true;
    },
    productShortSliceSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    productShortSliceFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    productShortSliceReset(state) {
      state.isLoading = false;
      state.data = null;
      state.error = "";
    },
  },
});

export const productShortHandler = (sortBy,order) => async (dispatch) => {
  try {
    dispatch(productShortAction.productShortSlice());
    const res = await productShortApi(sortBy,order);
    dispatch(productShortAction.productShortSliceSuccess(res));
  } catch (error) {
    dispatch(productShortAction.productShortSliceFailure(error.message));
  }
};

export default productShortSlice.reducer;
export const productShortAction = productShortSlice.actions;
