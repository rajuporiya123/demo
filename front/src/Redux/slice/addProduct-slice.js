import { createSlice } from "@reduxjs/toolkit";
import { addProductApi } from "../../api/addProduct";

const data = {
  isloading: false,
  error: "",
  message: null,
  data: null,
};

const addProductSlice = createSlice({
  name: "addProduct",
  initialState: data,
  reducers: {
    addProductSlice(state) {
      state.isloading = true;
    },
    addProductSliceSuccess(state, action) {
      state.isloading = false;
      state.data = action.payload;
    },
    addProductSliceFailure(state, action) {
      state.isloading = false;
      state.data = action.payload;
    },
    addProductSliceReset(state) {
      state.isloading = false;
      state.data = null;
    },
  },
});

export const addProductHandler = (data) => async (dispatch) => {
  try {
    dispatch(addProductAction.addProductSlice(data));
    const res = await addProductApi(data)
    dispatch(addProductAction.addProductSliceSuccess(res));
  } catch (error) {
    dispatch(addProductAction.addProductSliceFailure(error.message));
  }
};

export default addProductSlice.reducer;
export const addProductAction = addProductSlice.actions;
