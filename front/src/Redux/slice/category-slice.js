import { createSlice } from "@reduxjs/toolkit";
import { getAllProductApi } from "../../api/getAllProduct";
import { categoryListApi } from "../../api/categoryList";
import { categoryApi } from "../../api/category";

const data = {
  isLoading: false,
  error: "",
  message: null,
  data: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState: data,
  reducers: {
    categorySlice(state) {
      state.isLoading = true;
    },
    categorySliceSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    categorySliceFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    categorySliceReset(state) {
      state.isLoading = false;
      state.data = null;
      state.error = "";
    },
  },
});

export const categoryHandler = (category) => async (dispatch) => {
  try {
    dispatch(categoryAction.categorySlice());
    const res = await categoryApi(category);
    dispatch(categoryAction.categorySliceSuccess(res));
  } catch (error) {
    dispatch(categoryAction.categorySliceFailure(error.message));
  }
};

export default categorySlice.reducer;
export const categoryAction = categorySlice.actions;
