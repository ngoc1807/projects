import { message } from "antd";
import axiosClient from "./axiosClient";

const userApi = {
	login: (params) => {
		const url = "/login";
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axiosClient.post(url, params);

				resolve(res.data);

				if (res.data.status === "success") {
					localStorage.setItem(
						"crmSite",
						JSON.stringify(res.data.accessJWT)
					);
				}
			} catch (error) {
				reject(error);
			}
		});
	},

	fetchUser: () => {
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axiosClient.get("/getMe");

				resolve(res.data);
			} catch (error) {
				console.log(error);
				reject(error.message);
			}
		});
	},

	getUser: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const accessJWT = JSON.parse(localStorage.getItem("crmSite"));

				if (!accessJWT) {
					reject("Token not found!");
				}

				// console.log(user, "user");
				const res = await axiosClient.get("/getMe", {
					headers: {
						Authorization: accessJWT,
					},
				});
				resolve(res.data);
				// console.log(res.data, "res");
			} catch (error) {
				console.log(error);
				reject(error.message);
			}
		});
	},

	findOneUser: async (id) => {
		const url = `/user/${id}`;

		const result = await axiosClient.get(url);
		return result;
	},

	getAll: (params) => {
		const url = "/user";
		return axiosClient.get(url);
	},

	postUser: (params) => {
		const url = "/register";

		return new Promise(async (resolve, reject) => {
			try {
				const res = await axiosClient.post(url, params);
				resolve(res.data);
			} catch (error) {
				reject(error);
			}
		});
	},

	deleteUser: (id) => {
		const url = `/user/${id}`;
		return axiosClient
			.delete(url)
			.then((data) => {
				message.success("Xóa thành công");
			})
			.catch((err) => {
				message.error("Xóa thất bại");
			});
	},

	updateUser: (params) => {
		const url = `/user/${params.idEdit}`;
		return axiosClient
			.patch(url, params)
			.then((data) => {
				message.success("Sửa thành công!");
			})
			.catch((err) => {
				message.error("Có lỗi xảy ra!");
			});
	},

	checkEmail: (params) => {
		const url = `/user/check-email`;
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axiosClient.post(url, params);
				resolve(res.data);
			} catch (error) {
				reject(error);
			}
		});
	},

	updatePassword: (params) => {
		const url = `/user/change-password`;

		return new Promise(async (resolve, reject) => {
			try {
				const res = await axiosClient.post(url, params);
				resolve(res.data);
			} catch (error) {
				reject(error);
			}
		});
	},
};

export default userApi;
