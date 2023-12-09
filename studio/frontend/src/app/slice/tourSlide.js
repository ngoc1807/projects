const { createSlice } = require("@reduxjs/toolkit");

const Tour = createSlice({
	name: "tour",
	initialState: {
		tour: [],
		loading: true,
		error: "",
		temp: [],
	},
	reducers: {
		addTour: (state, { payload }) => {
			state.loading = false;

			state.tour = state.tour.concat(payload);
		},
		removeTour: (state, { payload }) => {
			state.loading = false;
			state.tour = state.tour.filter((value) => value.id !== +payload);
		},

		updateTour: (state, { payload }) => {
			// console.log(payload.id, "payload", payload);

			state.loading = false;
			const index = state.tour.findIndex(
				(value) => value.id === +payload.id
			);
			state.tour[index] = payload;
		},

		updateTourStatus: (state, { payload }) => {
			state.loading = false;
			const a = state.tour.findIndex((value) => value.id === payload.id);
			state.tour[a].published = payload.published;
		},

		TourSuccess: (state, { payload }) => {
			state.loading = false;
			state.tour = payload;
		},
		TourPending: (state, { payload }) => {
			state.loading = true;
		},
		TourFail: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		TourSuccessTemp: (state, { payload }) => {
			state.tour = payload;
			state.temp = payload;
			state.loading = false;
		},

		filterTour: (state, { payload }) => {
			// console.log(payload, "payload");
			const cate = payload.cate;
			const place = payload.place;

			// console.log(cate, "-", place);

			let e = state.tour;

			let c;

			if (cate.length === 0 && place.length > 0) {
				c = e.filter((x) => handlePlace(place, x) === true);
				console.log("cate []");
			} else if (place.length === 0 && cate.length > 0) {
				console.log("place []");
				c = e.filter((x) => handleCate(cate, x) === true);
			} else if (cate.length > 0 && place.length > 0) {
				console.log("place [] cate[]");

				c = e.filter(
					(x) =>
						handleCate(cate, x) === true && handlePlace(place, x) === true
				);
			} else {
				c = state.temp;
			}

			state.tour = c;
			state.loading = false;
		},

		filterTitleTour: (state, { payload }) => {
			// state.tour = payload;
			// state.temp = payload;

			console.log(payload, "sss", typeof payload);
			let a = state.tour;
			let c;

			if (payload !== "") {
				c = a.filter((x) => x.title.includes(payload) === true);
			} else {
				c = state.temp;
			}

			state.tour = c;
			state.loading = false;
		},

		filterPriceTour: (state, { payload }) => {
			const { minNumber, maxNumber } = payload;
			console.log(minNumber, maxNumber, "sss");
			let a = state.tour;
			let result;
			if (+minNumber > +maxNumber) {
				// giảm dần DEC
				const d = a.filter(
					(x) => maxNumber < +x.price && +x.price < minNumber
				);

				result = handleDEC(d);
			} else {
				// tăng dần
				const d = a.filter(
					(x) => minNumber < +x.price && +x.price < maxNumber
				);

				result = handleINC(d);
			}

			state.tour = result;

			state.loading = false;
		},
		TourSuccessUser: (state, { payload }) => {
			const c = payload.filter((x) => x.published === true);
			state.tour = c;
			state.temp = c;
			state.loading = false;
		},
	},
});

const { reducer, actions } = Tour;
export const {
	addTour,
	removeTour,
	updateTour,
	TourFail,
	TourPending,
	TourSuccess,
	updateTourStatus,
	TourSuccessTemp,
	filterTour,
	filterTitleTour,
	filterPriceTour,
	TourSuccessUser,
} = actions;

export default reducer;
const handleCate = (data, v) => {
	let a = [];
	data.forEach((element) => {
		const res = v.Booking_NN_Cate.includes(
			v.Booking_NN_Cate.find((a) => a.id === element)
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
		const res = v.Booking_NN_Place.includes(
			v.Booking_NN_Place.find((a) => a.id === element)
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
// tang
const handleINC = (v) => {
	return v.sort((a, b) =>
		a.price > b.price ? 1 : a.price < b.price ? -1 : 0
	);
};

// giam
const handleDEC = (v) => {
	return v.sort((a, b) =>
		a.price < b.price ? 1 : a.price > b.price ? -1 : 0
	);
};
