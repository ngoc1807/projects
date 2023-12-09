import axios from "axios";

import queryString from "query-string";
const accessJWT = JSON.parse(localStorage.getItem("crmSite"));
const axiosClient = axios.create({
	// baseURL: process.env.REACT_APP_API_URL,
	baseURL: `http://localhost:3000`,
	headers: {
		"content-type": "application/json",
		Authorization: accessJWT ? accessJWT : null,
	},
	//
	paramsSerializer: (params) => queryString.stringify(params),
});

// axiosClient.interceptors.request.use(
// 	function (config) {
// 		// Do something before request is sent
// 		const token = localStorage.getItem("token");
// 		console.log(token);
// 		if (token) {
// 			const { data } = JSON.parse(token);
// 			if (data && data.access_token) {
// 				Object.assign(config.headers, {
// 					Authorization: `Bearer ${data.access_token}`,
// 				});
// 			}
// 		}
// 		return config;
// 	},
// 	function (error) {
// 		// Do something with request error
// 		return Promise.reject(error);
// 	}
// );

// axiosClient.interceptors.response.use(
// 	function (response) {
// 		// Do something before request is sent
// 		return response;
// 	},
// 	function (error) {
// 		return Promise.reject(error);
// 	}
// );

// axiosClient.interceptors.request.use(async (config) => {
// 	const customHeaders = {};
// 	const accessToken = localStorage.getItem("crmSite");
// 	if (accessToken) {
// 		customHeaders.Authorization = accessToken;
// 	}
// 	return {
// 		...config,
// 		headers: {
// 			...customHeaders, // auto attach token
// 			...config.headers, // but you can override for some requests
// 		},
// 	};
// });

// axiosClient.interceptors.response.use(async (config) => {});

// axiosClient.interceptors.response.use(
// 	(response) => {
// 		if (response && response.data) {
// 			return response.data;
// 		}

// 		return response;
// 	},
// 	(error) => {
// 		// Handle errors
// 		throw error;
// 	}
// );

export default axiosClient;
