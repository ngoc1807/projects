import axiosClient from "./axiosClient";

const CommentApi = {
	getAll: () => {
		const url = "/comment";
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axiosClient.get(url);
				resolve(res.data);
			} catch (error) {
				console.log(error.response);
				reject(error);
			}
		});
	},
	getAllClient: (params) => {
		const url = "/comment-type";
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axiosClient.post(url, params);
				resolve(res.data);
			} catch (error) {
				console.log(error.response);
				reject(error);
			}
		});
	},

	addComment: (params) => {
		const url = "/comment";

		return new Promise(async (resolve, reject) => {
			try {
				const res = await axiosClient.post(url, params);
				resolve(res.data);
			} catch (error) {
				console.log(error.response);
				reject(error);
			}
		});
	},

	deleteComment: (id) => {
		const url = `/comment/${id}`;

		return new Promise(async (resolve, reject) => {
			try {
				const res = await axiosClient.delete(url);
				resolve(res.data);
			} catch (error) {
				console.log(error.response);
				reject(error);
			}
		});
	},

	// updateOrderStatus: (params) => {
	// 	const url = `/order/${params.id}`;

	// 	return new Promise(async (resolve, reject) => {
	// 		try {
	// 			const res = await axiosClient.patch(url, params);
	// 			resolve(res.data);
	// 		} catch (error) {
	// 			console.log(error.response);
	// 			reject(error);
	// 		}
	// 	});
	// },

	// updateOrder: (params) => {
	// 	const url = `/order/${params.id}`;

	// 	return new Promise(async (resolve, reject) => {
	// 		try {
	// 			const res = await axiosClient.patch(url, params);
	// 			resolve(res.data);
	// 		} catch (error) {
	// 			console.log(error.response);
	// 			reject(error);
	// 		}
	// 	});
	// },
};

export default CommentApi;
