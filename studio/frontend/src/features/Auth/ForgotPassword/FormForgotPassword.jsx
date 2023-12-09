import React, { useState } from "react";
import { Form, message, Input, Button, Row, Col } from "antd";
import { RULES_ANTD } from "./../../../constants/index";

import emailjs from "emailjs-com";
import userApi from "api/userApi";
import ModalForgot from "./ModalForgot";

function FormForgotPassword(props) {
	const [state, setState] = useState({
		email: "",
		code: "",
		check: "",
	});

	const [loading, setLoading] = useState(false);

	const [isModalVisible, setIsModalVisible] = useState(false);

	const onShowModalForgot = (value) => {
		setIsModalVisible(value);
	};

	const randomId = (length) => {
		var result = [];
		// var characters =
		// 	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		var characters = "0123456789";

		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result.push(
				characters.charAt(Math.floor(Math.random() * charactersLength))
			);
		}
		return result.join("");
	};
	const onSubmit = () => {
		console.log(state);

		if (+state.check === +state.code) {
			setIsModalVisible(true);
		} else {
			return message.error("Mã  không chính xác");
		}
	};

	const handleSendMail = async (e) => {
		e.preventDefault(e);
		const { email } = state;
		if (!email) {
			return message.error("Bạn chưa nhập email");
		}

		try {
			setLoading(true);

			const code = randomId(6);

			const res = await userApi.checkEmail({ email });
			if (res.status !== "success") {
				setLoading(false);

				return message.error("Email không chính xác");
			}
			const resE = await emailjs.send(
				"service_fofcb6a",
				"template_vrt2igc",
				{
					name: "Studio",
					email: email,
					message: code,
				},
				"user_PJW868aUItIU35vAKUQgO"
			);

			if (resE.status === 200) {
				setTimeout(() => {
					setState({ ...state, check: code });
					message.success("Gửi mã thành công");
				}, 300);
			}
		} catch (err) {
			message.error("Có lỗi khi gửi mã");
		}

		setLoading(false);
	};
	const handleOnChange = (e) => {
		setState({
			...state,
			[e.target.id]: e.target.value,
		});
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
		message.error("Bạn chưa nhập đầy đủ thông tin");
		return;
	};

	const initialValues = {
		email: "",
		code: "",
	};

	// console.log(state, "state");

	return (
		<>
			<Form
				initialValues={initialValues}
				onFinish={onSubmit}
				onFinishFailed={onFinishFailed}
				onChange={handleOnChange}
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

				<div className="input-group form-group pt-2">
					<Form.Item
						name="code"
						className="form-control"
						hasFeedback
						rules={RULES_ANTD.common}
					>
						<Input type="number" placeholder="Nhập mã" />
					</Form.Item>
				</div>

				<Row justify="space-between" className="pt-3">
					<Col span={4}>
						<Form.Item className="form-group  ">
							<Button
								loading={loading}
								className="btn  login_btn"
								onClick={handleSendMail}
							>
								Gửi mã
							</Button>
						</Form.Item>
					</Col>

					<Col span={6}>
						<Form.Item className="form-group  ">
							<Button
								// loading={confirmLoading}
								className="btn  login_btn"
								htmlType="submit"
							>
								Xác nhận
							</Button>
						</Form.Item>
					</Col>
				</Row>
			</Form>

			<ModalForgot
				onShowModalForgot={onShowModalForgot}
				isModalVisible={isModalVisible}
				data={state.email}
			/>
		</>
	);
}

export default FormForgotPassword;
