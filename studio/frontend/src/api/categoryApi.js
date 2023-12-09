import { message } from "antd";
import axiosClient from "./axiosClient";

const categoryApi = {
	getAll: (params) => {
		const url = "/category";
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

	postCategory: (params) => {
		const url = "/category";
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

	deleteCategory: (id) => {
		const url = `/category/${id}`;
		return axiosClient
			.delete(url)
			.then((data) => {
				message.success("Xóa thành công");
			})
			.catch((err) => {
				message.error("Xóa thất bại");
			});
	},

	updateCategory: (params) => {
		const url = `/category/${params.idEdit}`;
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

export default categoryApi;
