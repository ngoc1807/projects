import React, { useEffect, useState } from "react";

import { Table, Space, Popconfirm, Select, Tooltip, Button } from "antd";

import {
	SelectOutlined,
	DeleteOutlined,
	EditOutlined,
	QuestionCircleOutlined,
} from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { storage } from "firebaseConfig";
import { handleShortString, formatDate } from "./../../../constants";
import {
	fetchTourData,
	updateTourStatusAction,
	removeTourAction,
} from "app/actions/tourAction";
import ModalTourAdmin from "./ModalTourAdmin";
const { Option } = Select;

function TourAdmin(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	const dataTour = useSelector((items) => items.tour.tour);
	let loading = useSelector((items) => items.tour.loading);

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [detailTour, setDetailTour] = useState([]);

	useEffect(() => {
		dispatch(fetchTourData());
	}, []);

	// Modal  detail
	const handleModal = (value) => {
		const info = dataTour.find((x) => x.id === +value);
		setDetailTour(info);
		setIsModalVisible(true);
	};

	const showModal = (v) => {
		setDetailTour([]);

		setIsModalVisible(false);
	};

	const data =
		dataTour && dataTour.length > 0
			? dataTour.map((item, index) => ({
					stt: index + 1,
					key: item.id,
					title: handleShortString(item.title, 100),
					Booking_NN_Place: item.Booking_NN_Place,
					Booking_NN_Cate: item.Booking_NN_Cate,
					desc: handleShortString(item.desc, 150),
					package: {
						duration: item.duration,
						category:
							item.Booking_NN_Cate && item.Booking_NN_Cate[0]
								? item.Booking_NN_Cate[0]["name"]
								: null,
						people: item.people,
						clothes: item.clothes,
					},
					published: item.published,
					image: item.image,
					price: item.price,
					sale: item.sale,
					updatedAt: item.updatedAt,
					createdAt: item.createdAt,
			  }))
			: null;

	// handle

	const numberWithCommas = (x) => {
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	};
	const handleEdit = (id) => {
		// const BlogEdit = dataBlog.find((x) => x.id === +id);
		// localStorage.setItem("BlogEdit", JSON.stringify(BlogEdit));
		history.replace(`${props.url}/tour/CreateOrEditTour/${id}`);
	};

	const handleUpdate = async (value) => {
		const { status, id } = value;
		const newValue = {
			id,
			published: !status,
		};

		// console.log(newValue, "newValue");
		await dispatch(updateTourStatusAction(newValue));
	};

	const handleDelete = async (id) => {
		loading = true;
		const a = dataTour.find((x) => x.id === +id);
		if (a.image) {
			await storage
				.refFromURL(a.image)
				.delete()
				.then(() => console.log("delete img success"))
				.catch((err) => {
					console.log(err);
				});
		}
		await dispatch(removeTourAction(id));
		setTimeout(() => {
			loading = false;
		}, 1000);
	};

	// Table
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
			title: "Tiêu đề",
			dataIndex: "title",
			key: "title",
			align: "center",
		},

		{
			title: "Thể loại",
			dataIndex: "package",
			key: "package",
			align: "center",
			render: (value, record) => {
				// console.log(value);
				return (
					<ul style={{ listStyle: "none" }}>
						<li>Thời lượng : {value.duration} tiếng </li>
						<li>Thể loại : {value.category} </li>
						<li>Số người : {value.people} người </li>
						<li>Quần áo : {value.clothes ? "Có sẵn" : "Tự chuẩn bị"}</li>
					</ul>
				);
			},
		},
		{
			title: "Giá tiền",
			dataIndex: "price",
			key: "price",
			align: "center",
			render: (value, record) => numberWithCommas(value) + ` VND`,
		},
		{
			title: "Sale",
			dataIndex: "sale",
			key: "sale",
			align: "center",
		},

		{
			title: "Thời gian",
			dataIndex: "createdAt",
			key: "createdAt",
			align: "center",

			render: (value, record) => formatDate(value),
		},

		{
			title: "Trạng thái",
			dataIndex: "published",
			key: "published",
			align: "center",
			width: "10%",
			filters: [
				{
					text: "Đã duyệt",
					value: true,
				},
				{
					text: "Đang chờ duyệt",
					value: false,
				},
			],
			onFilter: (value, record) => record.published === value,
			render: (value, record) => {
				const data = {
					status: value,
					id: record.key,
				};
				return (
					<Select
						defaultValue={value ? 1 : 0}
						style={{
							width: "100%",
						}}
						onChange={() => handleUpdate(data)}
					>
						<Option style={{ width: "100%", color: "green" }} value={1}>
							Đã duyệt
						</Option>
						<Option style={{ width: "100%", color: "red" }} value={0}>
							Đang chờ duyệt
						</Option>
					</Select>
				);
			},
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
						<Tooltip title="Xem chi tiết">
							<Button
								type="primary"
								style={{ padding: "0px 0px 2px 0px", margin: "0px" }}
								icon={
									<SelectOutlined
										style={{ fontSize: 20, color: "white" }}
									/>
								}
								onClick={() => handleModal(record.key)}
							></Button>
						</Tooltip>
					</Space>
				</>
			),
		},
	];

	return (
		<div className="TourAdmin">
			<div className="text-center heading">
				<h2 style={{ fontWeight: "bolder" }}>Tour </h2>
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
				{/* <Link to={`${match.url}/CreateOrEditBlog`}> */}
				<Link to={`${props.url}/tour/CreateOrEditTour`}>
					<button className=" btn btn-success ">
						<i
							className="fas fa-plus pr-2"
							style={{ fontSize: "16px" }}
						></i>
						Thêm tour
					</button>
				</Link>
			</p>

			<div>
				<Table
					bordered
					size="middle"
					scroll={{ x: 1200 }}
					columns={columns}
					dataSource={data}
					loading={loading}
				/>

				<ModalTourAdmin
					isModalVisible={isModalVisible}
					handleShowModal={showModal}
					data={detailTour}
				/>
			</div>
		</div>
	);
}

export default TourAdmin;
