import React, { useState } from "react";
import { Form, message, Input, Button, DatePicker, Select, Image } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataListUser, updateUser } from "app/slice/listUserSlice";
import { storage } from "firebaseConfig";
import defaultImage from "assets/images/defaultImage.jpg";
import "./userAdmin.scss";
import { RULES_ANTD } from "./../../../constants";
import moment from "moment";

const { Option } = Select;

CreateOrEditUserAdmin.propTypes = {};

function CreateOrEditUserAdmin(props) {
	const { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const [loading, setLoading] = useState(false);

	const detailUser = useSelector((state) =>
		state.listUser.user.find((x) => x.id === +id)
	);
	const listRole = useSelector((state) => state.role.role);
	const data = [];

	const [state, setState] = useState({
		idEdit: id ? detailUser.id : "",
		name: id ? detailUser.username : "",
		email: id ? detailUser.email : "",
		phone: id ? detailUser.phone : "",
		avatar: id ? detailUser.avatar : "",
		address: id ? detailUser.address : "",
		date: id ? detailUser.date : moment().format("DD-MM-YYYY"),
		status: id ? detailUser.status : "",
		role: id ? detailUser.Roles[0].name : "",
		roleId: id ? detailUser.Roles[0].id : "",

		note: id ? detailUser.note : "",

		img: "",
		linkImg: "",
		nameImg: "",
	});

	const {
		idEdit,
		name,
		email,
		phone,
		avatar,
		address,
		date,
		roleId,
		img,
		linkImg,
		nameImg,
		note,
	} = state;

	const stateUser = async () => {
		await dispatch(dataListUser());
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
		const newImg = e.target.files ? e.target.files[0] : null;
		if (newImg) {
			setState({
				...state,
				linkImg: URL.createObjectURL(e.target.files[0]),

				nameImg: e.target.files[0].name,
				img: e.target.files[0],
			});
		}
	};

	const handleChangeSelect = (value) => {
		setState({
			...state,
			roleId: value,
		});
	};

	const initialValues = {
		name: detailUser ? detailUser.username : "",
		email: detailUser ? detailUser.email : "",
		phone: detailUser ? detailUser.phone : "",
		avatar: detailUser ? detailUser.avatar : "",
		address: detailUser ? detailUser.address : "",
		date: detailUser ? detailUser.date : "",
		status: detailUser ? detailUser.status : "",
		role: detailUser ? detailUser.Roles[0].name : "",
		note: detailUser ? detailUser.note : "",
	};

	const onSubmit = async () => {
		setLoading(true);
		if (id) {
			//edit
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
				idEdit,
				username: name,
				email,
				phone,
				avatar: anh ? anh : avatar,
				address,
				date,
				status: 0,
				note,
				RoleId: roleId,
			};
			console.log(newState);

			await dispatch(updateUser(newState));
			setLoading(false);

			// history.push("/admin/user");
			setTimeout(() => {
				history.push("/admin/user");
				stateUser();
			}, 500);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
		message.error("Bạn chưa nhập đầy đủ thông tin");
		return;
	};

	const layout = {
		labelCol: {
			span: 24,
		},
		wrapperCol: {
			span: 24,
		},
	};
	const tailLayout = {
		wrapperCol: { offset: 0, span: 0 },
	};
	return (
		<div className="userEitAdmin">
			<div className="text-center heading pb-5">
				<h2 style={{ fontWeight: "bolder" }}>
					{" "}
					{id ? "Chỉnh sửa người dùng" : "Thêm người dùng"}{" "}
				</h2>

				<div className="d-flex justify-content-center ">
					<hr
						style={{
							width: "15%",
							backgroundColor: "#ffa801",
							padding: "0.2px 0",
						}}
					/>
				</div>

				<div className="container-fluid">
					<Form
						{...layout}
						initialValues={initialValues}
						onFinish={onSubmit}
						onFinishFailed={onFinishFailed}
						onChange={handleOnChange}
					>
						<Form.Item
							name="name"
							label="Tên người dùng"
							hasFeedback
							rules={RULES_ANTD.common}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name="email"
							label="Email"
							hasFeedback
							rules={RULES_ANTD.email}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name="phone"
							label="Số điện thoại"
							hasFeedback
							rules={RULES_ANTD.phone}
						>
							<Input type="number" />
						</Form.Item>

						<Form.Item
							name="address"
							label="Địa chỉ"
							hasFeedback
							rules={RULES_ANTD.common}
						>
							<Input />
						</Form.Item>

						<Form.Item name="role" label="Quyền hạn">
							<Select
								placeholder="Chọn quyền"
								onChange={handleChangeSelect}
								allowClear
							>
								{listRole &&
									listRole.map((item, index) => (
										<Select.Option key={index} value={item.id}>
											{item.name}
										</Select.Option>
									))}
								{/* (<Option key={listRole[i].id}>{listRole[i].name}); */}
							</Select>
						</Form.Item>
						{/* </Col> */}

						{/* <Col md={24} xl={8} className="gutter-row"> */}
						<Form.Item label="Ngày sinh">
							<DatePicker
								onChange={handleChangeDate}
								style={{ width: "100%" }}
								format="DD-MM-YYYY"
								defaultValue={
									id && detailUser.date
										? moment(detailUser.date, "DD-MM-YYYY")
										: moment()
								}
							/>
						</Form.Item>

						<Form.Item
							name="note"
							label="Ghi chú"
							hasFeedback
							rules={RULES_ANTD.text}
						>
							<Input.TextArea />
						</Form.Item>
						<Form.Item label="Ảnh đai diện">
							<Input
								accept="image/*"
								id="icon-button-file"
								type="file"
							/>

							{linkImg ? (
								<Image
									src={linkImg}
									className="img-thumbnail imageMain"
									alt=""
								/>
							) : (
								<Image
									src={detailUser ? detailUser.avatar : defaultImage}
									className="img-thumbnail imageMain"
									alt=""
								/>
							)}
							<br />
							<span>{nameImg}</span>
						</Form.Item>
						{/* </Col> */}

						<Form.Item {...tailLayout}>
							<Button
								type="primary"
								loading={loading}
								className="btn"
								htmlType="submit"
							>
								{id ? "Sửa" : "Thêm"}
							</Button>
						</Form.Item>
						{/* </Row> */}
					</Form>
				</div>
			</div>
		</div>
	);
}

export default CreateOrEditUserAdmin;
