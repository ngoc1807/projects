import { message } from "antd";
import axiosClient from "./axiosClient";

const roleApi = {
	getAll: (params) => {
		const url = "/role";
		return axiosClient.get(url);
	},

	postRole: (params) => {
		const url = "/role";
		return axiosClient
			.post(url, params)
			.then((data) => {
				// console.log(data);
				message.success("Thêm thành công");
			})
			.catch((err) => {
				message.error("Thêm thất bại");
			});
	},

	deleteRole: (id) => {
		const url = `/role/${id}`;
		return axiosClient
			.delete(url)
			.then((data) => {
				message.success("Xóa thành công");
			})
			.catch((err) => {
				message.error("Xóa thất bại");
			});
	},

	updateRole: (params) => {
		const url = `/role/${params.idEdit}`;
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

export default roleApi;
