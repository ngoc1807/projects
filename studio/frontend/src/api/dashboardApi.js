import axiosClient from "./axiosClient";

const DashboardApi = {
	countTotal: () => {
		const url = "/dashboard/total";
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

export default DashboardApi;
