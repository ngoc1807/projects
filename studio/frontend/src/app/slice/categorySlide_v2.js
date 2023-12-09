const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
	Cate: [],
	loading: true,
	error: "",
};
const Category_v2 = createSlice({
	name: "Cate",
	initialState,

	reducers: {
		getCateSuccess: (state, { payload }) => {
			state.loading = false;
			state.Cate = payload;
		},
		getCatePending: (state, { payload }) => {
			state.loading = true;
		},
		getCateFail: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

const { reducer, actions } = Category_v2;
export const {
	addCate,
	removeCate,
	updateCate,
	getCateFail,
	getCatePending,
	getCateSuccess,
} = actions;

export default reducer;
