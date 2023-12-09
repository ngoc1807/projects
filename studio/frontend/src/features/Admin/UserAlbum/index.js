import React, { useEffect, useState } from "react";

import {
	Table,
	Space,
	Popconfirm,
	Select,
	Tooltip,
	Button,
	Form,
	message,
	Row,
	Col,
	Input,
} from "antd";
import { RULES_ANTD, layout, tailLayout } from "./../../../constants";
import {
	DeleteOutlined,
	EditOutlined,
	QuestionCircleOutlined,
} from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { storage } from "firebaseConfig";
import { handleShortString, formatDate } from "./../../../constants";
import { fetchAlbumUserData } from "app/actions/albumAction";
import {
	fetchUserAlbumData,
	addUserAlbumAction,
	removeUserAlbumAction,
	updateUserAlbumAction,
} from "app/actions/UserAlbumAction";

// import ModalTourAdmin from "./ModalTourAdmin";
const { Option } = Select;
function UserAlbumAdmin(props) {
	const [form] = Form.useForm();
	const history = useHistory();
	const dispatch = useDispatch();
	const dataUserAlbum = useSelector((items) => items.UserAlbum.UserAlbum);
	const dataUser = useSelector((i) => i.listUser.user);
	const dataAlbum = useSelector((i) => i.album.album);
	const [loading, setLoading] = useState();
	const [isEdit, setIsEdit] = useState(false);

	// console.log(dataUserAlbum, "UserLink");
	// console.log(dataUser, "User");
	// console.log(dataAlbum, "Album");

	const [state, setState] = useState({
		id: "",
		album: null,
		drive: "",
		user: null,
	});

	const { id, album, drive, user } = state;

	const [isModalVisible, setIsModalVisible] = useState(false);
	useEffect(() => {
		fetchData();
	}, []);
	let initialValues = {
		id: id ? id : null,
		album: album ? +album : null,
		drive: drive ? drive : null,
		user: user ? +user : null,
	};

	useEffect(() => {
		form.setFieldsValue(initialValues);
	}, [form, initialValues]);

	const fetchData = async () => {
		setLoading(true);

		dispatch(fetchUserAlbumData());
		dispatch(fetchAlbumUserData());

		setLoading(false);
	};

	const handleDelete = async (id) => {
		dispatch(removeUserAlbumAction(id));
	};

	const handleEdit = (id) => {
		setIsEdit(true);
		let a = dataUserAlbum.find((x) => x.id === +id);

		// console.log(a);

		setState({
			id: a.id,
			album: a.Album.id,
			drive: a.linkDrive,
			user: a.User.id,
		});
	};

	const onSubmit = async (value) => {
		if (id) {
			setLoading(true);
			const newValue = {
				id: value.id,
				UserId: value.user,
				AlbumId: value.album,
				linkDrive: value.drive,
			};
			await dispatch(updateUserAlbumAction(newValue));
			setLoading(false);
			// console.log(value);
		} else {
			// add
			setLoading(true);
			// console.log(value, "sss");
			const newValue = {
				UserId: value.user,
				AlbumId: value.album,
				linkDrive: value.drive,
			};

			await dispatch(addUserAlbumAction(newValue));
			setLoading(false);
		}

		setState({
			id: "",
			album: null,
			drive: "",
			user: null,
		});
		setIsEdit(false);
		// form.resetFields();
	};

	const data =
		dataUserAlbum && dataUserAlbum.length > 0
			? dataUserAlbum.map((item, index) => ({
					stt: index + 1,
					key: item.id,
					username: item.User.username || "",
					albumName: item.Album.name || "",

					linkDrive: item.linkDrive || "",
			  }))
			: null;

	const columns = [
		{
			title: "STT",
			dataIndex: "stt",
			key: "stt",
			width: "3%",
			align: "center",
			defaultSortOrder: "ascend",

			sorter: (a, b) => a.stt - b.stt,
		},
		{
			title: "Tên người dùng",
			dataIndex: "username",
			key: "username",
			align: "center",
		},
		{
			title: "Tên album",
			dataIndex: "albumName",
			key: "albumName",
			align: "center",
		},
		{
			title: "Link drive",
			dataIndex: "linkDrive",
			key: "linkDrive",
			align: "center",
			width: "40%",
		},
		{
			title: "Tùy chọn",
			key: "action",
			width: "8%",
			align: "center",
			render: (text, record) => (
				<>
					<Space size="middle">
						<Popconfirm
							title="Bạn có muốn sửa？"
							onConfirm={() => {
								handleEdit(record.key);
							}}
						>
							<EditOutlined
								style={{ fontSize: "18px", color: "green" }}
							/>
						</Popconfirm>

						<Popconfirm
							title="Bạn có muốn xóa？"
							onConfirm={() => {
								handleDelete(record.key);
							}}
							icon={<QuestionCircleOutlined style={{ color: "red" }} />}
						>
							<DeleteOutlined
								style={{ fontSize: "18px", color: "red" }}
							/>
						</Popconfirm>
					</Space>
				</>
			),
		},
	];

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
		message.error("Bạn chưa nhập đầy đủ thông tin");
		return;
	};

	// console.log(state);

	return (
		<div className="OrderAdmin">
			<div className="text-center heading">
				<h2 style={{ fontWeight: "bolder" }}>
					{" "}
					Gắn Album và link cho người dùng
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
			</div>

			<div>
				<Form
					{...layout}
					onFinish={onSubmit}
					onFinishFailed={onFinishFailed}
					initialValues={initialValues}
					form={form}
				>
					<Row gutter={[16, 4]}>
						<Col md={24} xl={12} sm={24} className="gutter-row">
							<Form.Item
								name="user"
								label="Danh sách User"
								hasFeedback
								rules={RULES_ANTD.select}
							>
								<Select
									placeholder="Chọn người dùng"
									showArrow
									allowClear
									showSearch
									filterOption={(input, option) => {
										return (
											option.className
												.toLowerCase()
												.indexOf(input.toLowerCase()) >= 0
										);
									}}
								>
									{dataUser &&
										dataUser.map((item, index) => (
											<Select.Option
												key={index}
												className={item.username}
												value={item.id}
											>
												{item.username}
											</Select.Option>
										))}
								</Select>
							</Form.Item>
						</Col>
						<Col md={24} xl={12} sm={24} className="gutter-row">
							<Form.Item
								name="album"
								label="Danh sách Album"
								hasFeedback
								rules={RULES_ANTD.select}
							>
								<Select
									placeholder="Chọn Album"
									showArrow
									allowClear
									showSearch
									filterOption={(input, option) => {
										return (
											option.className
												.toLowerCase()
												.indexOf(input.toLowerCase()) >= 0
										);
									}}
								>
									{dataAlbum &&
										dataAlbum.map((item, index) => (
											<Select.Option
												key={index}
												className={item.name}
												value={item.id}
											>
												{item.name}
											</Select.Option>
										))}
								</Select>
							</Form.Item>
						</Col>
						<Col span={24}>
							<Form.Item
								name="drive"
								label="Đường đẫn drive"
								hasFeedback
								rules={RULES_ANTD.common}
							>
								<Input />
							</Form.Item>
						</Col>

						<Col span={24} className="d-none">
							<Form.Item name="id" label="id">
								<Input />
							</Form.Item>
						</Col>
						<Col>
							<Form.Item {...tailLayout}>
								<Button
									loading={loading}
									type={"primary"}
									htmlType="submit"
								>
									{isEdit ? "Sửa" : "Thêm"}
								</Button>
							</Form.Item>
						</Col>
						{/* <Col>
							<Form.Item {...tailLayout}>
								<Button
									loading={loading}
									type={"primary"}
									onClick={handleEditButton}
									disabled={isEdit}
								>
								
								</Button>
							</Form.Item>
						</Col> */}
					</Row>
				</Form>

				<Table
					bordered
					size="middle"
					scroll={{ x: 1200 }}
					columns={columns}
					dataSource={data}
					loading={loading}
				/>
			</div>
		</div>
	);
}

export default UserAlbumAdmin;
