const { createSlice } = require("@reduxjs/toolkit");

const Comment = createSlice({
	name: "comment",
	initialState: {
		comment: [],
		loading: true,
		error: "",
		temp: [],
		total: 2,
	},
	reducers: {
		addComment: (state, { payload }) => {
			state.loading = false;
			state.temp = state.temp.concat(payload).reverse();

			if (state.temp.length <= state.total) {
				state.comment = state.temp;
			} else {
				let b = [];

				for (let i = 0; i < state.temp.length; i++) {
					b.push(state.temp[i]);
					if (i == +state.total - 1) {
						break;
					}
				}
				state.comment = b;
			}

			// state.comment = state.temp;
		},
		removeComment: (state, { payload }) => {
			state.loading = false;
			state.comment = state.comment.filter((value) => value.id !== +payload);
		},

		updateComment: (state, { payload }) => {
			// console.log(payload.id, "payload", payload);

			state.loading = false;
			const index = state.comment.findIndex(
				(value) => value.id === +payload.id
			);
			state.comment[index] = payload;
		},

		CommentSuccess: (state, { payload }) => {
			if (payload.length <= state.total) {
				state.comment = payload;
			} else {
				let b = [];

				for (let i = 0; i < payload.length; i++) {
					b.push(payload[i]);
					if (i == 1) {
						break;
					}
				}
				state.comment = b;
			}
			state.temp = payload;
			state.loading = false;
			// const c = payload
		},
		showMoreComment: (state, { payload }) => {
			const a = +state.total + 2;
			if (state.temp.length <= a) {
				state.comment = state.temp;
			} else {
				let b = [];

				for (let i = 0; i < state.temp.length; i++) {
					b.push(state.temp[i]);
					if (i == a - 1) {
						break;
					}
				}
				state.comment = b;
			}
			state.total = a;
			state.loading = false;
		},
		CommentPending: (state, { payload }) => {
			state.loading = true;
		},
		CommentFail: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		CommentSuccessUser: (state, { payload }) => {
			state.comment = payload;
			state.temp = payload;
			state.loading = false;
		},
		CommentSuccessAll: (state, { payload }) => {
			state.comment = payload;
			state.loading = false;
		},
	},
});

const { reducer, actions } = Comment;
export const {
	addComment,
	removeComment,
	updateComment,
	CommentFail,
	CommentPending,
	CommentSuccess,
	CommentSuccessUser,
	showMoreComment,
	CommentSuccessAll,
} = actions;
export default reducer;
