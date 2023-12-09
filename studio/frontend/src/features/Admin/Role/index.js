import React, { useState } from "react";
import { Table, Space, Popconfirm, Spin } from "antd";
import {
	DeleteOutlined,
	EditOutlined,
	QuestionCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { removeRole, roleData } from "./roleSlide";
import { formatDate } from "./../../../constants";

function RoleAdmin(props) {
	const history = useHistory();
	const dataRole = useSelector((items) => items.role.role);
	const loading = useSelector((items) => items.role.loading);
	const [loadingTable, setLoadingTable] = useState(false);

	const dispatch = useDispatch();

	const stateRole = async () => {
		await dispatch(roleData());
	};

	const handleEdit = (id) => {
		history.replace(`${props.url}/role/CreateOrEditRole/${id}`);
	};

	const handleDelete = async (id) => {
		setLoadingTable(true);
		await dispatch(removeRole(id));
		setTimeout(() => {
			stateRole();
			setLoadingTable(false);
		}, 500);
	};

	const data =
		dataRole.length > 0
			? dataRole.map((item, index) => ({
					stt: index + 1,
					key: item.id,
					name: item.name,
					createdAt: item.createdAt,
			  }))
			: null;

	const columns = [
		{
			title: "STT",
			dataIndex: "stt",
			key: "stt",
			width: "5%",
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
			title: "Thời gian",
			dataIndex: "createdAt",
			key: "createdAt",
			align: "center",
			width: "20%",

			render: (value, record) => formatDate(value),
		},

		{
			title: "Tùy chọn",
			key: "action",
			width: "20%",
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
			<div className="text-center heading">
				<h2 style={{ fontWeight: "bold" }}>Phân quyền </h2>
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

			<p className="py-3 text-center">
				<Link to={`${props.url}/role/CreateOrEditRole`}>
					<button className=" btn btn-success ">
						<i
							className="fas fa-plus pr-2"
							style={{ fontSize: "16px" }}
						></i>
						Thêm quyền
					</button>
				</Link>
			</p>
			{loading ? (
				<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
					<Spin className="mt-5" />
				</div>
			) : (
				<Table
					bordered
					size="middle"
					// scroll={{ x: 1300 }}
					columns={columns}
					dataSource={data}
					loading={loadingTable}
				/>
			)}
		</div>
	);
}

export default RoleAdmin;
