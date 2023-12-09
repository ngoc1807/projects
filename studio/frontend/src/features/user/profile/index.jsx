import React from "react";
import {
	Form,
	message,
	Input,
	Button,
	Row,
	Col,
	Image,
	DatePicker,
} from "antd";
import { layout, RULES_ANTD } from "./../../../constants/index";
import { useState } from "react";
import defaultImage from "assets/images/defaultImage.jpg";
import moment from "moment";
import "./profile.scss";
import { getStorage } from "utils/common";
import { storage } from "firebaseConfig";
import { updateUser } from "app/slice/listUserSlice";
import { useDispatch } from "react-redux";
import { getUserProfile } from "app/actions/userAction";

function ProfileUser(props) {
	const dispatch = useDispatch();

	const initialValues = getStorage();
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState({
		idEdit: initialValues ? initialValues.id : "",
		name: initialValues ? initialValues.username : "",
		email: initialValues ? initialValues.email : "",
		phone: initialValues ? initialValues.phone : "",
		avatar: initialValues ? initialValues.avatar : "",
		address: initialValues ? initialValues.address : "",
		date: initialValues ? initialValues.date : moment().format("DD-MM-YYYY"),
		status: initialValues ? initialValues.status : "",
		role: initialValues ? initialValues.role : "",

		note: initialValues ? initialValues.note : "",

		img: "",
		linkImg: "",
	});

	const {
		name,
		email,
		phone,
		avatar,
		address,
		date,
		img,
		linkImg,
		role,
		note,
	} = state;
	const onSubmit = async (value) => {
		// console.log(value);
		// console.log(state, "ss");

		setLoading(true);
		let anh;
		if (img) {
			if (avatar) {
				await storage
					.refFromURL(avatar)
					.delete()
					.then(() => console.log("delete img success"))
					.catch((err) => {
						console.log(err);
					});
			}
			const uniqueSuffix =
				Date.now() + "-" + Math.round(Math.random() * 1e9) + img.name;
			await storage.ref(`imagesUser/${uniqueSuffix}`).put(img);
			anh = await storage
				.ref("imagesUser")
				.child(uniqueSuffix)
				.getDownloadURL();
		}
		const newState = {
			idEdit: initialValues.userId,
			username: name,
			email,
			phone,
			avatar: anh ? anh : avatar,
			address,
			date,
			status: 0,
			note,
		};

		// console.log(newState, "aaa");
		await dispatch(updateUser(newState));
		await dispatch(getUserProfile());
		setLoading(false);
		// let anh;`
	};

	const handleOnChangeAvatar = async (e) => {
		try {
			const newImg = (await e.target.files) ? e.target.files[0] : null;
			if (newImg) {
				await setState({
					...state,
					linkImg: URL.createObjectURL(e.target.files[0]),
					img: e.target.files[0],
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleChangeDate = (date, dateString) => {
		setState({
			...state,
			date: dateString,
		});
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

	return (
		<div className="profileUser container-fluid ">
			<Form
				{...layout}
				onFinish={onSubmit}
				onFinishFailed={onFinishFailed}
				onChange={handleOnChange}
				initialValues={initialValues}
			>
				<Row gutter={[16, 16]}>
					<Col md={24} xl={6} className="gutter-row left">
						<Form.Item>
							{linkImg ? (
								<Image
									src={linkImg}
									re
									className="img-thumbnail imageMain"
								/>
							) : (
								<Image
									src={avatar ? avatar : defaultImage}
									className="img-thumbnail imageMain"
								/>
							)}

							<div className="left__upload pt-2">
								<label
									htmlFor="icon-button-file"
									className="left__upload-image"
									type="primary"
								>
									Đổi ảnh đại điện
								</label>
							</div>

							<Input
								style={{ display: "none" }}
								accept="image/*"
								id="icon-button-file"
								type="file"
								onChange={handleOnChangeAvatar}
							/>
						</Form.Item>

						<Row gutter={[4, 16]} className="left ">
							<Col span={8}>
								<div className="left__title">Chức vụ :</div>
							</Col>
							<Col span={16}>
								<div className="left__content">
									{role === "admin" ? "Quản lí" : "Người dùng"}
								</div>
							</Col>

							<Col span={8}>
								<div className="left__title">Ngày sinh :</div>
							</Col>
							<Col span={16}>
								<Form.Item hasFeedback>
									<DatePicker
										placeholder="Ngày sinh"
										onChange={handleChangeDate}
										style={{ width: "100%" }}
										format="DD-MM-YYYY"
										defaultValue={
											date ? moment(date, "DD-MM-YYYY") : moment()
										}
									/>
								</Form.Item>
							</Col>
						</Row>
					</Col>
					<Col md={24} xl={18} className="gutter-row right">
						<Row gutter={[32, 32]} className="right__one ">
							<Col span={8} className=" gutter-row ">
								<div className="right__one-statistical">
									<span>4</span> Album ảnh
								</div>
							</Col>
							<Col span={8} className=" gutter-row ">
								<div className="right__one-statistical">
									<span>1</span> Bài viết
								</div>
							</Col>
							<Col span={8} className=" gutter-row ">
								<div className="right__one-statistical">
									<span>4</span> Đã đặt
								</div>
							</Col>
						</Row>

						<Row gutter={[32, 8]} className="right__two pt-3">
							<Col className="gutter-row" span={12}>
								<Form.Item
									{...layout}
									name="username"
									label="Họ tên"
									hasFeedback
									rules={RULES_ANTD.common}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col className="gutter-row" span={12}>
								<Form.Item
									{...layout}
									name="email"
									label="Email"
									hasFeedback
									rules={RULES_ANTD.email}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col className="gutter-row" span={12}>
								<Form.Item
									{...layout}
									name="phone"
									label="Điện thoại"
									hasFeedback
									rules={RULES_ANTD.phone}
								>
									<Input type="number" />
								</Form.Item>
							</Col>

							<Col className="gutter-row" span={12}>
								<Form.Item
									{...layout}
									name="address"
									label="Địa chỉ"
									hasFeedback
									rules={RULES_ANTD.common}
								>
									<Input />
								</Form.Item>
							</Col>

							<Col className="gutter-row" span={24}>
								<Form.Item
									{...layout}
									name="note"
									label="Ghi chú"
									hasFeedback
								>
									<Input.TextArea autoSize={{ minRows: 10 }} />
								</Form.Item>
							</Col>

							<Col className="gutter-row" span={24}>
								<Form.Item>
									<Button
										loading={loading}
										type={"primary"}
										htmlType="submit"
									>
										Sửa
									</Button>
								</Form.Item>
							</Col>
						</Row>
					</Col>
				</Row>
			</Form>
		</div>
	);
}

export default ProfileUser;
