import placeApi from "api/placeApi";
// import { stringify } from "query-string";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const placeData = createAsyncThunk("Places/PlacesData", async () => {
	const place = await placeApi.getAll();
	return place.data;
});

const Place = createSlice({
	name: "place",
	initialState: {
		place: [],
		loading: true,
		error: "",
	},
	reducers: {
		addPlace: (state, action) => {
			placeApi.postPlace(action.payload);
		},
		removePlace: (state, action) => {
			placeApi.deletePlace(action.payload);
		},
		updatePlace: (state, action) => {
			placeApi.updatePlace(action.payload);
		},
	},
	extraReducers: {
		[placeData.pending]: (state) => {
			state.loading = true;
		},
		[placeData.rejected]: (state, action) => {
			state.loading = true;
			state.error = action.error;
		},
		[placeData.fulfilled]: (state, action) => {
			state.loading = false;
			state.place = action.payload;
		},
	},
});

const { reducer, actions } = Place;
export const { addPlace, removePlace, updatePlace } = actions;

export default reducer;
