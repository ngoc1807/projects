import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	isAuth: false,
	error: "",
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		loginPending: (state, action) => {
			state.isLoading = true;
		},
		loginSuccess: (state, action) => {
			state.isLoading = false;
			state.isAuth = true;
			state.error = "";
		},
		loginFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		registerPending: (state, action) => {
			state.isLoading = true;
		},
		registerSuccess: (state, action) => {
			state.isLoading = false;
			state.error = "";
		},
		registerFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

const { reducer, actions } = loginSlice;
export const {
	loginPending,
	loginSuccess,
	loginFail,
	registerFail,
	registerPending,
	registerSuccess,
} = actions;

export default reducer;
