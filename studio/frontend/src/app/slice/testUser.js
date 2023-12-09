import userApi from "api/userApi";
// import { stringify } from "query-string";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// ThunkApi

export const dataUser = createAsyncThunk(
	"Users/getAll",
	async (params, thunkAPI) => {
		//  trong tinh huống này không xài params cũng không xài thunkAPI nên có thể bỏ

		const user = await userApi.getAll();
		return user.data;
	}
);

// ---------------------

//      MAIN SLICE
// ---------------------

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: [],
		loading: true,
		error: "",
	},
	reducers: {
		signInUser: (state, action) => {
			userApi.signIn(action.payload);
		},
		addUser: (state, action) => {
			userApi.postUser(action.payload);
		},
		removeUser: (state, action) => {
			userApi.deleteUser(action.payload);
		},
		updateUser: (state, action) => {
			userApi.updateUser(action.payload);
		},
	},
	extraReducers: {
		//  Có 3 trạng thái

		// khi bắt đâu chạy sẽ là pending ,sẽ bật loading
		[dataUser.pending]: (state) => {
			state.loading = true;
		},
		// khi có lỗi sẽ chạy rejected , tắt loading
		[dataUser.rejected]: (state, action) => {
			state.loading = true;
			state.error = action.error;
		},
		// khi chạy ok , tắt loading
		[dataUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload;
		},
	},
});

const { reducer, actions } = userSlice;
export const { addUser, removeUser, updateUser, signInUser } = actions;

export default reducer;
