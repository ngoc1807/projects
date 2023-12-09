import { message } from "antd";
import tourApi from "api/tourApi";

import {
	TourFail,
	TourPending,
	TourSuccess,
	addTour,
	removeTour,
	updateTour,
	updateTourStatus,
	TourSuccessTemp,
	filterTour,
	filterTitleTour,
	filterPriceTour,
	TourSuccessUser,
} from "app/slice/tourSlide";

export const fetchTourData = () => async (dispatch) => {
	dispatch(TourPending());

	try {
		const result = await tourApi.getAll();
		if (result.status === "error") {
			return dispatch(TourFail(result.message));
		}
		await dispatch(TourSuccess(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(TourFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const fetchTourTempData = () => async (dispatch) => {
	dispatch(TourPending());

	try {
		const result = await tourApi.getAll();
		if (result.status === "error") {
			return dispatch(TourFail(result.message));
		}
		await dispatch(TourSuccessTemp(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(TourFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const fetchTourUserData = () => async (dispatch) => {
	dispatch(TourPending());

	try {
		const result = await tourApi.getAll();
		if (result.status === "error") {
			return dispatch(TourFail(result.message));
		}
		await dispatch(TourSuccessUser(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(TourFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const addTourAction = (params) => async (dispatch) => {
	try {
		dispatch(TourPending());
		const result = await tourApi.addTour(params);
		// console.log(result, "addBlog");
		if (result.status === "success") {
			await dispatch(addTour(result.data));

			message.success("Thêm bài viết thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(TourFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const removeTourAction = (id) => async (dispatch) => {
	try {
		dispatch(TourPending());
		const res = await tourApi.deleteTour(id);

		if (res.status === "success") {
			await dispatch(removeTour(id));
			message.success("Xóa  bài viết thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(TourFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const updateTourStatusAction = (params) => async (dispatch) => {
	try {
		dispatch(TourPending());
		const res = await tourApi.updateTourStatus(params);

		if (res.status === "success") {
			await dispatch(updateTourStatus(params));
			message.success("Cập nhật trạng thái  thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(TourFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};
export const updateTourAction = (params) => async (dispatch) => {
	try {
		dispatch(TourPending());
		const res = await tourApi.updateTour(params);

		// console.log(res, "resAction");

		if (res.status === "success") {
			await dispatch(updateTour(params));
			message.success("Cập nhật thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(TourFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const sortTourAction = (params) => async (dispatch) => {
	try {
		// console.log(params, "sss");
		await dispatch(TourPending());
		await dispatch(filterTour(params));
	} catch (error) {
		console.log(error);
		dispatch(TourFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const filterTitleTourAction = (params) => async (dispatch) => {
	try {
		// console.log(params, "sss");
		await dispatch(TourPending());
		await dispatch(filterTitleTour(params));
	} catch (error) {
		console.log(error);
		dispatch(TourFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const filterPriceTourAction = (params) => async (dispatch) => {
	try {
		// console.log(params, "sss");
		await dispatch(TourPending());
		await dispatch(filterPriceTour(params));
	} catch (error) {
		console.log(error);
		dispatch(TourFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};
