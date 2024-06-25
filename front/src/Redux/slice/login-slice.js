import { createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../../api/login";
import Cookies from "js-cookie";

const data = {
  isloading: false,
  error: "",
  message: null,
  data: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState: data,
  reducers: {
    loginSlice(state) {
      state.isloading = true;
    },
    loginSliceSuccess(state, action) {
      state.isloading = false;
      state.data = action.payload;
    },
    loginSliceFailure(state, action) {
      state.isloading = false;
      state.data = action.payload;
    },
    loginSliceReset(state) {
      state.isloading = false;
      state.data = null;
    },
  },
});

export const loginHandler = (data) => async (dispatch) => {
  try {
    dispatch(authAction.loginSlice(data));
    const res = await loginApi(data)
    Cookies.set('token',res?.data?.token)
    // localStorage.setItem('userToken',res?.data?.token)
    dispatch(authAction.loginSliceSuccess(res));
  } catch (error) {
    dispatch(authAction.loginSliceReset(error));
  }
};

export default loginSlice.reducer;
export const authAction = loginSlice.actions;
