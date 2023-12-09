import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, message, Input, Button } from "antd";
import { RULES_ANTD } from "../../../constants/index";
FromSignIn.propTypes = {
	onSubmit: PropTypes.func,
	confirmLoading: PropTypes.bool,
};

FromSignIn.defaultProps = {
	onSubmit: null,
	confirmLoading: false,
};

function FromSignIn(props) {
	const { confirmLoading } = props;

	const onSubmit = (values) => {
		const { onSignInSubmit } = props;
		if (onSignInSubmit) onSignInSubmit(values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
		message.error("This is an error message");
		return;
	};

	const [state, setState] = useState({
		email: "admin@gmail.com",
		password: "admin",
	});
	const { email, password } = state;

	const initialValues = {
		email: email,
		password: password,
	};
	return (
		<Form
			initialValues={initialValues}
			onFinish={onSubmit}
			onFinishFailed={onFinishFailed}
		>
			<div className="input-group form-group">
				<div className="input-group-prepend">
					<span className="input-group-text">
						<i className="fas fa-user"></i>
					</span>
				</div>
				<Form.Item
					name="email"
					className="form-control"
					hasFeedback
					rules={RULES_ANTD.email}
				>
					<Input placeholder="Email " />
				</Form.Item>
			</div>
			<div className="input-group form-group">
				<div className="input-group-prepend">
					<span className="input-group-text">
						<i className="fas fa-key"></i>
					</span>
				</div>
				<Form.Item
					name="password"
					className="form-control"
					hasFeedback
					rules={[{ required: true, message: "Mật Khẩu" }]}
				>
					<Input.Password placeholder="Password" />
				</Form.Item>
			</div>

			<Form.Item className="form-group  ">
				<Button
					loading={confirmLoading}
					className="btn float-right login_btn"
					htmlType="submit"
				>
					Đăng nhập
				</Button>
			</Form.Item>
		</Form>
	);
}

export default FromSignIn;
