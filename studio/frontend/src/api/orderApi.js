import axiosClient from "./axiosClient";

const orderApi = {
	getAll: () => {
		const url = "/order";
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
	getAllUser: (params) => {
		const url = "/order-user";
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

	getOne: (id) => {
		const url = `/order/${id}`;
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

	addOrder: (params) => {
		const url = "/order";

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

	deleteOrder: (id) => {
		const url = `/order/${id}`;

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

	updateOrderStatus: (params) => {
		const url = `/order/${params.id}`;

		return new Promise(async (resolve, reject) => {
			try {
				const res = await axiosClient.patch(url, params);
				resolve(res.data);
			} catch (error) {
				console.log(error.response);
				reject(error);
			}
		});
	},

	updateOrder: (params) => {
		const url = `/order/${params.id}`;

		return new Promise(async (resolve, reject) => {
			try {
				const res = await axiosClient.patch(url, params);
				resolve(res.data);
			} catch (error) {
				console.log(error.response);
				reject(error);
			}
		});
	},
};

export default orderApi;
