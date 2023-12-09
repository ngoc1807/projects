import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getUserProfile, loginSuccessAction } from "app/actions/userAction";
import { getStorage } from "utils/common";
import { message } from "antd";

export const PrivateRoute = ({ children, ...rest }) => {
	const dispatch = useDispatch();
	const { isAuth } = useSelector((state) => state.login);
	const { user } = useSelector((state) => state.user);
	const role = user.role;

	useEffect(() => {
		!user.id && dispatch(getUserProfile());
		!isAuth && dispatch(loginSuccessAction());
		checkIsAdmin();
	}, [dispatch, isAuth, user.id]);

	const checkIsAdmin = async () => {
		const a = await getStorage("role");
		if (a !== "admin") {
			message.error("Bạn không có quyền Admin ");
		}
	};

	return (
		<Route
			{...rest}
			render={() =>
				role === "admin" ? children : <Redirect to="/login/signIn" />
			}
		/>
	);
};
