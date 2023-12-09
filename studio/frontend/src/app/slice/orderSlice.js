const { createSlice } = require("@reduxjs/toolkit");

const Order = createSlice({
	name: "order",
	initialState: {
		order: [],
		loading: true,
		error: "",
		temp: [],
	},
	reducers: {
		addOrder: (state, { payload }) => {
			state.loading = false;

			state.order = state.order.concat(payload);
		},
		removeOrder: (state, { payload }) => {
			state.loading = false;
			state.order = state.order.filter((value) => value.id !== +payload);
		},

		updateOrder: (state, { payload }) => {
			// console.log(payload.id, "payload", payload);

			state.loading = false;
			const index = state.order.findIndex(
				(value) => value.id === +payload.id
			);
			state.order[index] = payload;
		},

		updateOrderStatus: (state, { payload }) => {
			state.loading = false;
			const a = state.order.findIndex((value) => value.id === payload.id);
			state.order[a].status = payload.status;
		},

		updateOrderPay: (state, { payload }) => {
			state.loading = false;
			const a = state.order.findIndex((value) => value.id === payload.id);
			state.order[a].pay = payload.pay;
		},

		OrderSuccess: (state, { payload }) => {
			state.loading = false;
			state.order = payload;
		},
		OrderPending: (state, { payload }) => {
			state.loading = true;
		},
		OrderFail: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		OrderSuccessUser: (state, { payload }) => {
			state.order = payload;
			state.temp = payload;
			state.loading = false;
		},
	},
});

const { reducer, actions } = Order;
export const {
	addOrder,
	removeOrder,
	updateOrder,
	OrderFail,
	OrderPending,
	OrderSuccess,
	updateOrderStatus,
	OrderSuccessUser,

	updateOrderPay,
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
