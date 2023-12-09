import React from "react";
import PropTypes from "prop-types";
import { Form, message, Input, Button } from "antd";
import { RULES_ANTD } from "../../../constants";
FormSignUp.propTypes = {
	onSubmit: PropTypes.func,
	confirmLoading: PropTypes.bool,
};

FormSignUp.defaultProps = {
	onSubmit: null,
	confirmLoading: false,
};

function FormSignUp(props) {
	const { confirmLoading } = props;

	const onSubmit = (values) => {
		const { onSignInSubmit } = props;
		if (onSignInSubmit) onSignInSubmit(values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
		message.error("Bạn chưa nhập đầy đủ thông tin");
		return;
	};
	return (
		<Form
			initialValues={{ remember: true }}
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
					name="username"
					className="form-control"
					hasFeedback
					rules={RULES_ANTD.common}
				>
					<Input placeholder="Họ tên" />
				</Form.Item>
			</div>

			<div className="input-group form-group">
				<div className="input-group-prepend">
					<span className="input-group-text">
						<i className="fas fa-at"></i>
					</span>
				</div>
				<Form.Item
					name="email"
					className="form-control"
					hasFeedback
					rules={RULES_ANTD.email}
				>
					<Input placeholder="Email" />
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
					rules={RULES_ANTD.common}
				>
					<Input.Password placeholder="Mật khẩu" />
				</Form.Item>
			</div>

			<div className="input-group form-group">
				<div className="input-group-prepend">
					<span className="input-group-text">
						<i className="fas fa-phone-alt"></i>
					</span>
				</div>
				<Form.Item
					name="phone"
					className="form-control"
					hasFeedback
					rules={RULES_ANTD.phone}
				>
					<Input
						type="number"
						placeholder="Số điện thoại"
						style={{ width: "100%" }}
					/>
				</Form.Item>
			</div>

			<Form.Item className="form-group">
				<Button
					loading={confirmLoading}
					className="btn float-right login_btn"
					htmlType="submit"
				>
					Sign Up
				</Button>
			</Form.Item>
		</Form>
	);
}

export default FormSignUp;
