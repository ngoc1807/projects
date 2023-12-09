import React, { useState } from "react";
import { Table, Space, Popconfirm, Spin, Image } from "antd";
import {
	DeleteOutlined,
	EditOutlined,
	QuestionCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { storage } from "firebaseConfig";

import { categoryData, removeCategory } from "./categorySlide";
import "./categoryAdmin.scss";
CategoryAdmin.propTypes = {};

function CategoryAdmin(props) {
	const history = useHistory();
	const dataCategory = useSelector((items) => items.category.category);
	const loading = useSelector((items) => items.category.loading);
	const [loadingTable, setLoadingTable] = useState(false);
	const dispatch = useDispatch();

	const stateCategory = async () => {
		await dispatch(categoryData());
	};

	// HANDLE FORM

	const handleEdit = (id) => {
		history.replace(`${props.url}/category/CreateOrEditCategory/${id}`);
	};
	const handleDelete = async (id) => {
		setLoadingTable(true);
		const a = dataCategory.find((x) => x.id === +id);
		if (a.images) {
			await storage
				.refFromURL(a.images)
				.delete()
				.then(() => console.log("delete img success"))
				.catch((err) => {
					console.log(err);
				});
		}

		await dispatch(removeCategory(id));
		setTimeout(() => {
			stateCategory();
			setLoadingTable(false);
		}, 500);
	};

	const data = dataCategory.map((item, index) => ({
		stt: index + 1,
		key: item.id,

		name: item.name,
		desc: item.desc,
		image: item.images,
		createdAt: item.createdAt,
	}));

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
			title: "Miêu tả",
			dataIndex: "desc",
			key: "desc",
			align: "center",
			// width: "30%",
		},
		{
			title: "Ảnh",
			dataIndex: "image",
			key: "image",
			align: "center",
			render: (value) => {
				return value ? (
					<Image
						src={value}
						style={{ cursor: "pointer" }}
						width="100px"
						height="100px"
					/>
				) : (
					""
				);
				// return value ? value : "Empty";
			},
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
		<div className="CategoryAdmin">
			<div className="text-center heading">
				<h2 style={{ fontWeight: "bolder" }}>Kiểu chụp </h2>
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
				<Link to={`${props.url}/category/CreateOrEditCategory`}>
					<button className=" btn btn-success ">
						<i
							className="fas fa-plus pr-2"
							style={{ fontSize: "16px" }}
						></i>
						Thêm kiểu chụp
					</button>
				</Link>
			</p>
			{loading ? (
				<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
					<Spin className="mt-5" />
				</div>
			) : (
				<div>
					<Table
						bordered
						size="middle"
						// scroll={{ x: 1300 }}
						columns={columns}
						dataSource={data}
						loading={loadingTable}
					/>
				</div>
			)}
		</div>
	);
}

export default CategoryAdmin;
