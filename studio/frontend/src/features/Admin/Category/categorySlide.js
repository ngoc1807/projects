import categoryApi from "api/categoryApi";
// import { stringify } from "query-string";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const categoryData = createAsyncThunk(
	"Category/CategoryData",
	async () => {
		const category = await categoryApi.getAll();
		return category.data;
	}
);

const Category = createSlice({
	name: "category",
	initialState: {
		category: [],
		loading: true,
		error: "",
	},
	reducers: {
		addCategory: (state, action) => {
			categoryApi.postCategory(action.payload);
		},
		removeCategory: (state, action) => {
			categoryApi.deleteCategory(action.payload);
		},
		updateCategory: (state, action) => {
			categoryApi.updateCategory(action.payload);
		},
	},
	extraReducers: {
		[categoryData.pending]: (state) => {
			state.loading = true;
		},
		[categoryData.rejected]: (state, action) => {
			state.loading = true;
			state.error = action.error;
		},
		[categoryData.fulfilled]: (state, action) => {
			state.loading = false;
			state.category = action.payload;
		},
	},
});

const { reducer, actions } = Category;
export const { addCategory, removeCategory, updateCategory } = actions;

export default reducer;
