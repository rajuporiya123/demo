import { createSlice } from "@reduxjs/toolkit";
import { productSearchApi } from "../../api/productSearch";

const data = {
  isLoading: false,
  error: "",
  message: null,
  data: null,
};

const productSearchSlice = createSlice({
  name: "productSearch",
  initialState: data,
  reducers: {
    productSearchSlice(state) {
      state.isLoading = true;
    },
    productSearchSliceSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    productSearchSliceFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    productSearchSliceReset(state) {
      state.isLoading = false;
      state.data = null;
      state.error = "";
    },
  },
});

export const productSearchHandler = (search) => async (dispatch) => {
  try {
    dispatch(profileAction.productSearchSlice());
    const res = await productSearchApi(search);
    dispatch(profileAction.productSearchSliceSuccess(res));
  } catch (error) {
    dispatch(profileAction.productSearchSliceFailure(error.message));
  }
};

export default productSearchSlice.reducer;
export const profileAction = productSearchSlice.actions;
