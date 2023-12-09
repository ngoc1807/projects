import React from "react";
import "./SignIn.scss";
import FormSignIn from "features/Auth/SignIn/FormSignIn.jsx";
import { message } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFail } from "app/slice/loginSlice";

import userApi from "api/userApi";
import { getUserProfile, loginSuccessAction } from "app/actions/userAction";
import { useEffect } from "react";
import { getStorage } from "utils/common";
SignIn.propTypes = {};

function SignIn(props) {
	const dispatch = useDispatch();
	const history = useHistory();

	const { isLoading } = useSelector((state) => state.login);
	let a = getStorage("isAuth");
	useEffect(() => {
		handleIsLogin();
	}, []);

	const handleIsLogin = async () => {
		// console.log(a, "aaaa");
		if (a) {
			history.push("/");
		}
	};

	// handleLogin
	const handleSubmit = async (values) => {
		const user = {
			...values,
		};

		// dispatch(loginPending());

		try {
			// isAuth

			const isAuth = await userApi.login(user);

			if (isAuth.status === "error") {
				dispatch(loginFail(isAuth.message));
				return message.error("Sai email hoặc mật khẩu");
			}
			// await dispatch(loginSuccess());
			dispatch(loginSuccessAction());
			dispatch(getUserProfile());
			message.success(" Đăng nhập thành công ");
			history.push("/home");
		} catch (error) {
			dispatch(loginFail(error.message));
		}
	};
	return (
		<div className=" SignIn container-fluid">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Đăng nhập</h3>
						<div className="d-flex justify-content-end social_icon">
							<span>
								<i className="fab fa-facebook-square"></i>
							</span>
							<span>
								<i className="fab fa-google-plus-square"></i>
							</span>
							<span>
								<i className="fab fa-twitter-square"></i>
							</span>
						</div>
					</div>
					<div className="card-body">
						<FormSignIn
							confirmLoading={isLoading}
							onSignInSubmit={handleSubmit}
						/>
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-center links">
							Bạn chưa có tài khoản ?<a href="/login/signUp">Đăng kí</a>
						</div>
						<div className="d-flex justify-content-center links ">
							<a href="/login/forgotPassword"> Quên mật khẩu ?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
