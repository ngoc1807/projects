import { message } from "antd";
import axiosClient from "./axiosClient";

const placeApi = {
	getAll: (params) => {
		const url = "/place";
		return new Promise(async (resolve, reject) => {
			try {
				const accessJWT = JSON.parse(localStorage.getItem("crmSite"));

				if (!accessJWT) {
					reject("Token not found!");
				}
				const res = await axiosClient.get(url, {
					headers: {
						Authorization: accessJWT,
					},
				});
				resolve(res.data);
			} catch (error) {
				console.log(error.response);
				reject(error);
			}
		});
	},

	postPlace: (params) => {
		const url = "/place";
		// return axiosClient
		// 	.post(url, params)
		// 	.then((data) => {
		// 		// console.log(data);
		// 		message.success("Thêm thành công");
		// 	})
		// 	.catch((err) => {
		// 		message.error("Thêm thất bại");
		// 	});
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axiosClient.post(url, params);

				console.log(res, "res");
				if (res.data.status == "success") {
					message.success("Thêm thành công");
				} else {
					message.error(res.data.message);
				}

				resolve(res.data);
			} catch (error) {
				message.error(error.message);
				console.log(error.response);
				reject(error);
			}
		});
	},

	deletePlace: (id) => {
		const url = `/place/${id}`;
		return axiosClient
			.delete(url)
			.then((data) => {
				message.success("Xóa thành công");
			})
			.catch((err) => {
				message.error("Xóa thất bại");
			});
	},

	updatePlace: (params) => {
		const url = `/place/${params.idEdit}`;
		return axiosClient
			.patch(url, params)
			.then((data) => {
				message.success("Sửa thành công!");
			})
			.catch((err) => {
				message.error("Có lỗi xảy ra!");
			});
	},
};

export default placeApi;
