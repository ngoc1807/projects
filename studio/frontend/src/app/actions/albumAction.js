import { message } from "antd";
import albumApi from "api/albumApi";

import {
	AlbumFail,
	AlbumPending,
	AlbumSuccess,
	addAlbum,
	removeAlbum,
	updateAlbum,
	updateAlbumStatus,
	filterAlbum,
	AlbumSuccessTemp,
	AlbumSuccessUser,
	AlbumSuccessUserProfile,
} from "app/slice/albumSlide";

export const fetchAlbumData = () => async (dispatch) => {
	dispatch(AlbumPending());

	try {
		const result = await albumApi.getAll();
		if (result.status === "error") {
			return dispatch(AlbumFail(result.message));
		}
		await dispatch(AlbumSuccess(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(AlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const fetchAlbumTempData = () => async (dispatch) => {
	dispatch(AlbumPending());

	try {
		const result = await albumApi.getAll();
		if (result.status === "error") {
			return dispatch(AlbumFail(result.message));
		}
		await dispatch(AlbumSuccessTemp(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(AlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const fetchAlbumUserData = () => async (dispatch) => {
	dispatch(AlbumPending());

	try {
		const result = await albumApi.getAll();
		if (result.status === "error") {
			return dispatch(AlbumFail(result.message));
		}
		await dispatch(AlbumSuccessUser(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(AlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const fetchAlbumUserDataProfile = (params) => async (dispatch) => {
	dispatch(AlbumPending());

	try {
		const result = await albumApi.getAllUserAlbumProfile(params);
		console.log(result);

		if (result.status === "error") {
			return dispatch(AlbumFail(result.message));
		}
		await dispatch(AlbumSuccessUserProfile(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(AlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const addAlbumAction = (params) => async (dispatch) => {
	try {
		dispatch(AlbumPending());
		const result = await albumApi.addAlbum(params);
		if (result.status === "success") {
			await dispatch(addAlbum(result.data));

			message.success("Thêm bài viết thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(AlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const removeAlbumAction = (id) => async (dispatch) => {
	try {
		dispatch(AlbumPending());
		const res = await albumApi.deleteAlbum(id);

		if (res.status === "success") {
			await dispatch(removeAlbum(id));
			message.success("Xóa  bài viết thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(AlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const updateAlbumStatusAction = (params) => async (dispatch) => {
	try {
		dispatch(AlbumPending());
		const res = await albumApi.updateStatusAlbum(params);

		if (res.status === "success") {
			await dispatch(updateAlbumStatus(params));
			message.success("Cập nhật trạng thái  thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(AlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};
export const updateAlbumAction = (params) => async (dispatch) => {
	try {
		dispatch(AlbumPending());
		const res = await albumApi.updateAlbum(params);

		// console.log(res, "resAction");

		if (res.status === "success") {
			await dispatch(updateAlbum(params));
			message.success("Cập nhật thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(AlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const sortAlbumAction = (params) => async (dispatch) => {
	try {
		await dispatch(AlbumPending());
		// console.log(params, "params");
		await dispatch(filterAlbum(params));
	} catch (error) {
		console.log(error);
		dispatch(AlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};
