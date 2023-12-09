const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
	Place: [],
	loading: true,
	error: "",
};
const Place_v2 = createSlice({
	name: "Place",
	initialState,

	reducers: {
		getPlaceSuccess: (state, { payload }) => {
			state.loading = false;
			state.Place = payload;
		},
		getPlacePending: (state, { payload }) => {
			state.loading = true;
		},
		getPlaceFail: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

const { reducer, actions } = Place_v2;
export const {
	addPlace,
	removePlace,
	updatePlace,
	getPlaceFail,
	getPlacePending,
	getPlaceSuccess,
} = actions;

export default reducer;
