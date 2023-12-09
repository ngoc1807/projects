import {
	getUserPending,
	getUserSuccess,
	getUserFail,
} from "app/slice/userSlice";

import { loginSuccess, loginFail, loginPending } from "app/slice/loginSlice";
import userApi from "api/userApi";
import { message } from "antd";

export const getUserProfile = () => async (dispatch) => {
	try {
		await dispatch(getUserPending());
		const result = await userApi.getUser();
		// console.log(result, "result");
		if (result && result.user.id) {
			const newUser = {
				userId: result.user.id || "",
				email: result.user.email || "",
				phone: result.user.phone || "",
				date: result.user.date || "",
				avatar: result.user.avatar || "",
				role: result.user.Roles[0].name || "",
				note: result.user.note || "",
				username: result.user.username || "",
				address: result.user.address || "",
				isAuth: true,
			};
			await dispatch(getUserSuccess(newUser));
		}
	} catch (error) {
		console.log(error.message);
		dispatch(getUserFail(error));
	}
};

export const getOneUser = (id) => async (dispatch) => {
	try {
		// await  dispatch(getUserPending());
		const result = await userApi.findOneUser(id);

		if (result.status === "success") {
			return result.data;
		}
	} catch (error) {
		console.log(error);
		// dispatch(BlogFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};

export const loginSuccessAction = () => async (dispatch) => {
	try {
		await dispatch(loginPending());

		await dispatch(loginSuccess());
	} catch (error) {
		console.log(error);
		dispatch(loginFail(error.message));
		message.error(`Error : ${error.message}`);
	}
};
