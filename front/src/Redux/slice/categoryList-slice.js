import { createSlice } from "@reduxjs/toolkit";
import { getAllProductApi } from "../../api/getAllProduct";
import { categoryListApi } from "../../api/categoryList";

const data = {
  isLoading: false,
  error: "",
  message: null,
  data: null,
};

const categoryListSlice = createSlice({
  name: "categoryList",
  initialState: data,
  reducers: {
    categoryListSlice(state) {
      state.isLoading = true;
    },
    categoryListSliceSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    categoryListSliceFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    categoryListSliceReset(state) {
      state.isLoading = false;
      state.data = null;
      state.error = "";
    },
  },
});

export const categoryListHandler = () => async (dispatch) => {
  try {
    dispatch(categoryListAction.categoryListSlice());
    const res = await categoryListApi();
    dispatch(categoryListAction.categoryListSliceSuccess(res));
  } catch (error) {
    dispatch(categoryListAction.categoryListSliceFailure(error.message));
  }
};

export default categoryListSlice.reducer;
export const categoryListAction = categoryListSlice.actions;
