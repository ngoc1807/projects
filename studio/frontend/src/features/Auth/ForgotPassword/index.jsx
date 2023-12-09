import React from "react";
import FormForgotPassword from "./FormForgotPassword";
import "./ForgotPassword.scss";
function ForgotPassword(props) {
	return (
		<div>
			<div className=" ForgotPassword container-fluid">
				<div className="d-flex justify-content-center h-100">
					<div className="card">
						<div className="card-header">
							<h3>Quên mật khẩu</h3>
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
							<FormForgotPassword />
						</div>
						<div className="card-footer">
							<div className="d-flex justify-content-center links ">
								<a href="/login/signIn">Đăng nhập</a> /
								<a href="/login/signUp">Đăng kí</a>
							</div>
							<div className="d-flex justify-content-center links ">
								<a href="/login/ForgotPassword"> Quên mật khẩu ?</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ForgotPassword;
