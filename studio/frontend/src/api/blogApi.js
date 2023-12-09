import axiosClient from "./axiosClient";

const blogApi = {
	getAll: () => {
		const url = "/blog";

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

	fetchUserBlog: (id) => {
		const url = `/blogUser/${id}`;
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
		const url = `/blog/${id}`;
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

	addBlog: (params) => {
		const url = "/blog";

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

	deleteBlog: (id) => {
		const url = `/blog/${id}`;

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

	updateBlogStatus: (params) => {
		// console.log(params.status, "params");
		const url = `/blogStatus/${params.id}`;

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

	updateBlog: (params) => {
		console.log(params, "params");
		const url = `/blog/${params.id}`;

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
	getAllBlogHome: () => {
		const url = "/blog-home";

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

export default blogApi;
