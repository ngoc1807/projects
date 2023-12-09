import React, { useState } from "react";
import { Table, Space, Tag, Popconfirm, Spin, Image } from "antd";

import {
	DeleteOutlined,
	EditOutlined,
	QuestionCircleOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataListUser, removeUser } from "app/slice/listUserSlice";
import defaultImage from "assets/images/defaultImage.jpg";

function UserAdmin(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	const listUser = useSelector((items) => items.listUser.user);
	const loading = useSelector((items) => items.listUser.loading);
	const [loadingTable, setLoadingTable] = useState(false);

	const stateUser = async () => {
		await dispatch(dataListUser());
	};

	const data =
		listUser.length > 0
			? listUser.map((item, index) => ({
					stt: index + 1,
					key: item.id,
					name: item.username ? item.username : "",
					email: item.email ? item.email : "",
					phone: item.phone ? item.phone : "",
					avatar: item.avatar ? item.avatar : "",
					address: item.address ? item.address : "",
					date: item.date ? item.date : "",
					status: item.status ? item.status : "",

					createdAt: item.createdAt,
					role: item.Roles[0] ? item.Roles[0].name : "",
			  }))
			: "";

	const handleEdit = (id) => {
		history.replace(`${props.url}/user/CreateOrEditUser/${id}`);
	};

	const handleDelete = async (id) => {
		setLoadingTable(true);
		await dispatch(removeUser(id));
		setTimeout(() => {
			stateUser();
			setLoadingTable(false);
		}, 500);
	};

	const formatDate = (e) => {
		if (e) {
			let ngay = e.substr(8, 2);
			let thang = e.substr(5, 2);
			let nam = e.substr(0, 4);
			return ngay + "/" + thang + "/" + nam;
		}
	};
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
			title: "Tên",
			dataIndex: "name",
			key: "name",
			align: "center",
			// width: "30%",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
			align: "center",
			// width: "30%",
			render: (value) => {
				return value ? value : "Empty";
			},
		},
		{
			title: "SĐT",
			dataIndex: "phone",
			key: "phone",
			align: "center",
			// width: "30%",
			render: (value) => {
				return value ? `0${value}` : "Empty";
			},
		},
		{
			title: "Avatar",
			dataIndex: "avatar",
			key: "avatar",
			align: "center",
			// width: "30%",
			render: (value) => {
				return value ? (
					<Image src={value} width="100px" height="100px" />
				) : (
					<Image
						src={defaultImage}
						style={{ objectFit: "cover" }}
						width="100px"
						height="100px"
					/>
				);
			},
		},
		{
			title: "Địa chỉ",
			dataIndex: "address",
			key: "address",
			align: "center",
			// width: "30%",
			render: (value) => {
				return value ? value : "Empty";
			},
		},
		{
			title: "Ngày sinh",
			dataIndex: "date",
			key: "date",
			align: "center",
			// width: "30%",
			render: (value) => {
				return value ? value : "Empty";
			},
		},

		{
			title: "Thời gian tạo",
			dataIndex: "createdAt",
			key: "createdAt",
			align: "center",
			// width: "20%",

			render: (value, record) => formatDate(value),
		},
		{
			title: "Role",
			key: "role",
			dataIndex: "role",
			align: "center",
			filters: [
				{
					text: "ADMIN",
					value: "admin",
				},
				{
					text: "USER",
					value: "user",
				},
			],
			onFilter: (value, record) => {
				console.log(value, "value", "-", record.role);
				return record.role.indexOf(value) === 0;
			},
			render: (role) => {
				let color = role === "admin" ? "red" : "green";
				if (role === "loser") {
					color = "volcano";
				}

				return (
					<span>
						<Tag color={color} key={role}>
							{role.toUpperCase()}
						</Tag>
					</span>
				);
			},
		},

		{
			title: "Action",
			key: "action",
			width: "10%",
			align: "center",
			render: (text, record) => (
				<Space size="middle">
					<Popconfirm
						title="Bạn có muốn sửa？"
						onConfirm={() => {
							handleEdit(record.key);
						}}
					>
						<EditOutlined style={{ fontSize: "18px", color: "green" }} />
					</Popconfirm>

					<Popconfirm
						title="Bạn có muốn xóa？"
						onConfirm={() => {
							handleDelete(record.key);
						}}
						icon={<QuestionCircleOutlined style={{ color: "red" }} />}
					>
						<DeleteOutlined style={{ fontSize: "18px", color: "red" }} />
					</Popconfirm>
				</Space>
			),
		},
	];
	return (
		<div>
			<div className="text-center heading pb-4">
				<h2 style={{ fontWeight: "bolder" }}> Danh sách người dùng </h2>
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

			{loading ? (
				<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
					<Spin className="mt-5" />
				</div>
			) : (
				<Table
					bordered
					size="middle"
					scroll={{ x: 1300 }}
					columns={columns}
					dataSource={data}
					loading={loadingTable}
				/>
			)}
		</div>
	);
}

export default UserAdmin;
