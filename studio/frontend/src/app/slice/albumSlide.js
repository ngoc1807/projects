const { createSlice } = require("@reduxjs/toolkit");

const Album = createSlice({
	name: "album",
	initialState: {
		album: [],
		loading: true,
		error: "",
		temp: [],
	},
	reducers: {
		addAlbum: (state, { payload }) => {
			state.loading = false;

			state.album = [...state.album, payload];
			state.album = state.album.concat(payload);
		},
		removeAlbum: (state, { payload }) => {
			state.loading = false;
			state.album = state.album.filter((value) => value.id !== +payload);
		},

		updateAlbum: (state, { payload }) => {
			// console.log(payload.id, "payload", payload);

			state.loading = false;
			const index = state.album.findIndex(
				(value) => value.id === +payload.id
			);
			state.album[index] = payload;
		},

		updateAlbumStatus: (state, { payload }) => {
			state.loading = false;
			const a = state.album.findIndex((value) => value.id === payload.id);
			state.album[a].published = payload.published;
		},

		filterAlbum: (state, { payload }) => {
			// console.log(payload, "payload");
			const cate = payload.cate;
			const place = payload.place;

			// console.log(cate, "-", place);

			let e = state.album;

			let c;

			if (cate.length === 0 && place.length > 0) {
				c = e.filter((x) => handlePlace(place, x) === true);
				// console.log("cate []");
			} else if (place.length === 0 && cate.length > 0) {
				// console.log("place []");
				c = e.filter((x) => handleCate(cate, x) === true);
			} else if (cate.length > 0 && place.length > 0) {
				c = e.filter(
					(x) =>
						handleCate(cate, x) === true && handlePlace(place, x) === true
				);
			} else {
				c = state.temp;
			}

			state.album = c;
			state.loading = false;
		},
		AlbumSuccessTemp: (state, { payload }) => {
			state.album = payload;
			state.temp = payload;
			state.loading = false;
		},
		AlbumSuccess: (state, { payload }) => {
			state.loading = false;
			state.album = payload;
			state.temp = [];
		},
		AlbumPending: (state, { payload }) => {
			state.loading = true;
		},
		AlbumFail: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},

		AlbumSuccessUser: (state, { payload }) => {
			const c = payload.filter((x) => x.published === true);
			state.album = c;
			state.temp = c;
			state.loading = false;
		},
		AlbumSuccessUserProfile: (state, { payload }) => {
			let a = payload.map((x) => x.Album);

			state.loading = false;
			state.album = a;
			state.temp = [];
		},
	},
});

const { reducer, actions } = Album;
export const {
	addAlbum,
	removeAlbum,
	updateAlbum,
	AlbumFail,
	AlbumPending,
	AlbumSuccess,
	updateAlbumStatus,
	filterAlbum,
	AlbumSuccessTemp,
	AlbumSuccessUser,
	AlbumSuccessUserProfile,
} = actions;

export default reducer;

const handleCate = (data, v) => {
	let a = [];
	data.forEach((element) => {
		const res = v.Album_NN_Cate.includes(
			v.Album_NN_Cate.find((a) => a.id === element)
		);
		a.push(res);
	});

	const c = a.indexOf(false) > -1;
	if (c) {
		return false;
	} else {
		return true;
	}
};

const handlePlace = (data, v) => {
	let a = [];
	data.forEach((element) => {
		const res = v.Album_NN_Place.includes(
			v.Album_NN_Place.find((a) => a.id === element)
		);
		a.push(res);
	});

	const c = a.indexOf(false) > -1;
	if (c) {
		return false;
	} else {
		return true;
	}
};
