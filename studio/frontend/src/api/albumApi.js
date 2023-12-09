import axiosClient from "./axiosClient";
import { message } from "antd";
const albumApi = {
	getAll: () => {
		const url = "/album";

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
		const url = `/album/${id}`;
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
	addAlbum: (params) => {
		const url = "/album";

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
	deleteAlbum: (id) => {
		const url = `/album/${id}`;

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
	updateAlbum: (params) => {
		const url = `/album/${params.idEdit}`;

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
	updateStatusAlbum: (params) => {
		const url = `/albumStatus/${params.id}`;

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

	getAllUserAlbum: () => {
		const url = "/user-album";

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
	getAllUserAlbumProfile: (id) => {
		const url = `/user-album-user/${id}`;

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

	getOneUserAlbum: (id) => {
		const url = `/user-album/${id}`;
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
	getOneUserAlbumDetail: (params) => {
		const url = `/user-album-one-user`;
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

	addUserAlbum: (params) => {
		const url = "/user-album";

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
	deleteUserAlbum: (id) => {
		const url = `/user-album/${id}`;

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
	updateUserAlbum: (params) => {
		const url = `/user-album/${params.id}`;

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

	getImageRandom: () => {
		const url = "/image";

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

export default albumApi;
