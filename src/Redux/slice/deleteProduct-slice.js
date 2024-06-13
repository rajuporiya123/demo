import { createSlice } from "@reduxjs/toolkit";
import { getAllProductApi } from "../../api/getAllProduct";
import { categoryListApi } from "../../api/categoryList";
import { categoryApi } from "../../api/category";
import { deleteProductApi } from "../../api/deleteProduct";

const data = {
  isLoading: false,
  error: "",
  message: null,
  data: null,
};

const deleteProductSlice = createSlice({
  name: "deleteProduct",
  initialState: data,
  reducers: {
    deleteProductSlice(state) {
      state.isLoading = true;
    },
    deleteProductSliceSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    deleteProductSliceFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteProductSliceReset(state) {
      state.isLoading = false;
      state.data = null;
      state.error = "";
    },
  },
});

export const deleteProductHandler = (id) => async (dispatch) => {
  try {
    dispatch(deleteProductAction.deleteProductSlice());
    const res = await deleteProductApi(id);
    dispatch(deleteProductAction.deleteProductSliceSuccess(res));
  } catch (error) {
    dispatch(deleteProductAction.deleteProductSliceFailure(error.message));
  }
};

export default deleteProductSlice.reducer;
export const deleteProductAction = deleteProductSlice.actions;
