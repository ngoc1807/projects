import FormSignUp from "features/Auth/SignUp/FormSignUp.jsx";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SignUp.scss";
// import userApi from "api/userApi";
import { useDispatch } from "react-redux";
// import { addUser } from "app/userSlice";
// import { unwrapResult } from "@reduxjs/toolkit";
import { message } from "antd";
import userApi from "api/userApi";
import { registerFail } from "app/slice/loginSlice";
import moment from "moment";

SignUp.propTypes = {
	handleSubmit: PropTypes.func,
};

function SignUp(props) {
	const [confirmLoading] = useState(false);
	const dispatch = useDispatch();
	const handleSubmit = async (values) => {
		const newValues = {
			...values,
			date: moment().format("DD-MM-YYYY"),
		};
		try {
			const user = await userApi.postUser(newValues);
			// console.log(user, "newUser");

			if (user.status === "error") {
				dispatch(registerFail(user.message));
				return message.error(user.message);
			}

			message.success("Tạo tài khoản thành công ");
			// history.push("/signIn");
			setTimeout(() => {
				window.location.href = "/login/signIn";
			}, 300);
		} catch (error) {
			dispatch(registerFail(error.message));
			return;
		}
	};
	return (
		<div className=" SignUp container-fluid">
			<div className="d-flex justify-content-center h-100">
				<div className="card">
					<div className="card-header">
						<h3>Đăng kí</h3>
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
						<FormSignUp
							confirmLoading={confirmLoading}
							onSignInSubmit={handleSubmit}
						/>
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-center links">
							Bạn đã có tài khoản ? <a href="/login/signIn">Đăng nhập</a>
						</div>
						<div className="d-flex justify-content-center links">
							<a href="/login/forgotPassword">Quên mật khẩu ?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
