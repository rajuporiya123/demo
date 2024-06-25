import { createSlice } from "@reduxjs/toolkit";
import { getAllProductApi } from "../../api/getAllProduct";

const data = {
  isLoading: false,
  error: "",
  message: null,
  data: null,
};

const getAllProductSlice = createSlice({
  name: "profile",
  initialState: data,
  reducers: {
    getAllProductSlice(state) {
      state.isLoading = true;
    },
    getAllProductSliceSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    getAllProductSliceFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getAllProductSliceReset(state) {
      state.isLoading = false;
      state.data = null;
      state.error = "";
    },
  },
});

export const getAllProductHandler = () => async (dispatch) => {
  try {
    dispatch(profileAction.getAllProductSlice());
    const res = await getAllProductApi();
    dispatch(profileAction.getAllProductSliceSuccess(res));
  } catch (error) {
    dispatch(profileAction.getAllProductSliceFailure(error.message));
  }
};

export default getAllProductSlice.reducer;
export const profileAction = getAllProductSlice.actions;
