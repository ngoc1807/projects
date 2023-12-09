import axiosClient from "./axiosClient";

const tourApi = {
	getAll: () => {
		const url = "/tour";
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

	getOne: (id) => {
		const url = `/tour/${id}`;
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

	addTour: (params) => {
		const url = "/tour";

		// console.log(params, "params");
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

	deleteTour: (id) => {
		const url = `/tour/${id}`;

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

	updateTourStatus: (params) => {
		// console.log(params.status, "params");
		const url = `/tourStatus/${params.id}`;

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

	updateTour: (params) => {
		// console.log(params, "params");
		const url = `/tour/${params.id}`;

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
	tourHomeAll: () => {
		const url = "/tour-home";
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
};

export default tourApi;
