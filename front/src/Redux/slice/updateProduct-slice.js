import { createSlice } from "@reduxjs/toolkit";
import { addProductApi } from "../../api/addProduct";
import { updateProductApi } from "../../api/updateProduct";

const data = {
  isloading: false,
  error: "",
  message: null,
  data: null,
};

const updateProductSlice = createSlice({
  name: "updateProduct",
  initialState: data,
  reducers: {
    updateProductSlice(state) {
      state.isloading = true;
    },
    updateProductSliceSuccess(state, action) {
      state.isloading = false;
      state.data = action.payload;
    },
    updateProductSliceFailure(state, action) {
      state.isloading = false;
      state.data = action.payload;
    },
    updateProductSliceReset(state) {
      state.isloading = false;
      state.data = null;
    },
  },
});

export const updateProductHandler = (id,data) => async (dispatch) => {
  try {
    dispatch(updateProductAction.updateProductSlice(data));
    const res = await updateProductApi(id,data)
    dispatch(updateProductAction.updateProductSliceSuccess(res));
  } catch (error) {
    dispatch(updateProductAction.updateProductSliceFailure(error.message));
  }
};

export default updateProductSlice.reducer;
export const updateProductAction = updateProductSlice.actions;
