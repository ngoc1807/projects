import { createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

const initialState = {
	user: [],
	isLoading: false,
	error: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		getUserPending: (state) => {
			state.isLoading = true;
		},
		getUserSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.user = payload;
			state.error = "";
		},
		getUserFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

const { reducer, actions } = userSlice;

export const { getUserPending, getUserSuccess, getUserFail } = actions;

export default reducer;
