// import { stringify } from "query-string";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const Blog = createSlice({
	name: "blog",
	initialState: {
		blog: [],
		loading: true,
		error: "",
		temp: [],
	},
	reducers: {
		addBlog: (state, { payload }) => {
			state.loading = false;
			// console.log(payload, "payload");

			// state.blog = [...state.blog, payload];
			state.blog = state.blog.concat(payload);

			// blogApi.postBlog(action.payload);
			// console.log(state.blog, "newBlog");
		},
		removeBlog: (state, { payload }) => {
			state.loading = false;
			state.blog = state.blog.filter((value) => value.id !== +payload);
		},

		updateBlogStatus: (state, { payload }) => {
			state.loading = false;
			const a = state.blog.findIndex((value) => value.id === payload.id);
			state.blog[a].published = payload.published;
		},
		updateBlog: (state, { payload }) => {
			// console.log(payload.id, "payload", payload);

			state.loading = false;
			const index = state.blog.findIndex(
				(value) => value.id === +payload.id
			);
			state.blog[index] = payload;
		},

		BlogSuccess: (state, { payload }) => {
			state.loading = false;
			state.blog = payload;
		},
		BlogPending: (state, { payload }) => {
			state.loading = true;
		},
		BlogFail: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		BlogUserSuccess: (state, { payload }) => {
			const c = payload.filter((x) => x.published === true);
			state.blog = c;
			state.temp = c;
			state.loading = false;
		},
	},
});

const { reducer, actions } = Blog;
export const {
	addBlog,
	removeBlog,
	updateBlog,
	BlogFail,
	BlogPending,
	BlogSuccess,
	updateBlogStatus,
	BlogUserSuccess,
} = actions;

export default reducer;
