import React from "react";
import { Form, Input, Button, Modal, message } from "antd";
import userApi from "api/userApi";

function ModalForgot(props) {
	const [loading, setLoading] = React.useState(false);
	const { onShowModalForgot, isModalVisible, data } = props;

	const handleCancel = () => {
		if (onShowModalForgot) {
			onShowModalForgot(false);
		}
	};

	const onFinish = async (values) => {
		setLoading(true);
		const { password } = values;
		const res = await userApi.updatePassword({ email: data, password });
		console.log(res, "res");
		if (res.status === "success") {
			setTimeout(() => {
				message.success("Đổi thành công ");
				window.location.href = "/signIn";
			}, 300);
		}
		setLoading(false);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	const layout = {
		labelCol: { span: 24 },
		wrapperCol: { span: 24 },
	};
	return (
		<div>
			<Modal
				centered
				title="Đổi mật khẩu"
				visible={isModalVisible}
				footer={null}
				onCancel={handleCancel}
				// width="auto"
			>
				<p>{data}</p>

				<Form
					{...layout}
					name="basic"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					hasFeedback
				>
					<Form.Item
						label="Mật khẩu mới"
						name="password"
						rules={[{ required: true, message: "Chưa nhập mật khẩu" }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						label="Nhập lại mật khẩu mới"
						name="re-password"
						hasFeedback
						rules={[
							{
								required: true,
								message: "Please confirm your password!",
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue("password") === value) {
										return Promise.resolve();
									}

									return Promise.reject(
										new Error("Mật khẩu phải giống nhau")
									);
								},
							}),
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" loading={loading}>
							Xác nhận
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
}

export default ModalForgot;
