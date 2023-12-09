const { createSlice } = require("@reduxjs/toolkit");

const UserAlbum = createSlice({
	name: "UserAlbum",
	initialState: {
		UserAlbum: [],
		loading: true,
		error: "",
		temp: [],
	},
	reducers: {
		addUserAlbum: (state, { payload }) => {
			state.loading = false;

			state.UserAlbum = state.UserAlbum.concat(payload);
		},
		removeUserAlbum: (state, { payload }) => {
			state.loading = false;
			state.UserAlbum = state.UserAlbum.filter(
				(value) => value.id !== +payload
			);
		},

		updateUserAlbum: (state, { payload }) => {
			// console.log(payload.id, "payload", payload);

			state.loading = false;
			const index = state.UserAlbum.findIndex(
				(value) => value.id === +payload.id
			);
			state.UserAlbum[index] = payload;
		},

		UserAlbumSuccess: (state, { payload }) => {
			state.loading = false;
			state.UserAlbum = payload;
		},
		UserAlbumPending: (state, { payload }) => {
			state.loading = true;
		},
		UserAlbumFail: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		UserAlbumSuccessTemp: (state, { payload }) => {
			state.UserAlbum = payload;
			state.temp = payload;
			state.loading = false;
		},
	},
});

const { reducer, actions } = UserAlbum;
export const {
	addUserAlbum,
	removeUserAlbum,
	updateUserAlbum,
	UserAlbumFail,
	UserAlbumPending,
	UserAlbumSuccess,

	UserAlbumSuccessTemp,

	UserAlbumSuccessUser,
} = actions;

export default reducer;
