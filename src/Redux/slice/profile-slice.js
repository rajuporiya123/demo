import { createSlice } from "@reduxjs/toolkit";
import { profileApi } from "../../api/profile";

const data = {
  isLoading: false,
  error: "",
  message: null,
  data: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: data,
  reducers: {
    profileSlice(state) {
      state.isLoading = true;
    },
    profileSliceSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    profileSliceFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    profileSliceReset(state) {
      state.isLoading = false;
      state.data = null;
      state.error = "";
    },
  },
});

export const profileHandler = () => async (dispatch) => {
  try {
    dispatch(profileAction.profileSlice());
    const res = await profileApi();
    dispatch(profileAction.profileSliceSuccess(res));
  } catch (error) {
    dispatch(profileAction.profileSliceFailure(error.message));
  }
};

export default profileSlice.reducer;
export const profileAction = profileSlice.actions;
