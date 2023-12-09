import { message } from "antd";
import UserAlbumApi from "api/albumApi";

import {
	UserAlbumFail,
	UserAlbumPending,
	UserAlbumSuccess,
	UserAlbumSuccessTemp,
	UserAlbumSuccessUser,
	addUserAlbum,
	removeUserAlbum,
	updateUserAlbum,
} from "app/slice/UserAlbumSlice";

export const fetchUserAlbumData = () => async (dispatch) => {
	dispatch(UserAlbumPending());

	try {
		const result = await UserAlbumApi.getAllUserAlbum();
		if (result.status === "error") {
			return dispatch(UserAlbumFail(result.message));
		}
		await dispatch(UserAlbumSuccess(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(UserAlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const fetchUserAlbumTempData = () => async (dispatch) => {
	dispatch(UserAlbumPending());

	try {
		const result = await UserAlbumApi.getAllUserAlbum();
		if (result.status === "error") {
			return dispatch(UserAlbumFail(result.message));
		}
		await dispatch(UserAlbumSuccessTemp(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(UserAlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const fetchUserAlbumUserData = () => async (dispatch) => {
	dispatch(UserAlbumPending());

	try {
		const result = await UserAlbumApi.getAllUserAlbum();
		if (result.status === "error") {
			return dispatch(UserAlbumFail(result.message));
		}
		await dispatch(UserAlbumSuccessUser(result.data.reverse()));
	} catch (error) {
		console.log(error);
		dispatch(UserAlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const addUserAlbumAction = (params) => async (dispatch) => {
	try {
		dispatch(UserAlbumPending());
		const result = await UserAlbumApi.addUserAlbum(params);

		if (result.status === "success") {
			await dispatch(addUserAlbum(result.data));

			message.success("Thêm thành công");
		}
		if (result.status === "error") {
			dispatch(UserAlbumFail(result.message));
			return message.error(result.message);
		}
	} catch (error) {
		console.log(error);
		dispatch(UserAlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const removeUserAlbumAction = (id) => async (dispatch) => {
	try {
		dispatch(UserAlbumPending());
		const res = await UserAlbumApi.deleteUserAlbum(id);

		if (res.status === "success") {
			await dispatch(removeUserAlbum(id));
			message.success("Xóa  thành công");
		}
	} catch (error) {
		console.log(error);
		dispatch(UserAlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const updateUserAlbumAction = (params) => async (dispatch) => {
	try {
		dispatch(UserAlbumPending());
		const res = await UserAlbumApi.updateUserAlbum(params);

		// console.log(res, "resAction");

		if (res.status === "success") {
			await dispatch(updateUserAlbum(res.data));
			message.success("Cập nhật thành công");
		}
		if (res.status === "error") {
			dispatch(UserAlbumFail(res.message));
			return message.error(res.message);
		}
	} catch (error) {
		console.log(error);
		dispatch(UserAlbumFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};
