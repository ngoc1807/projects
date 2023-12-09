import React, { useEffect, useState } from "react";

import { Table, Space, Popconfirm, Select, Tag } from "antd";

import {
	SelectOutlined,
	DeleteOutlined,
	EditOutlined,
	QuestionCircleOutlined,
} from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";

import { fetchOrderDataUser, removeOrderAction } from "app/actions/orderAction";
import { getStorage, handleSale, numberWithCommas } from "utils/common";
// import ModalTourAdmin from "./ModalTourAdmin";
const { Option } = Select;

function OrderUser(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	const dataOrder = useSelector((items) => items.order.order);
	let loading = useSelector((items) => items.order.loading);

	// console.log(dataOrder);
	// console.log(loading);

	useEffect(() => {
		const a = {
			UserId: getStorage("id"),
		};
		dispatch(fetchOrderDataUser(a));
	}, []);

	const handleDelete = async (id) => {
		await dispatch(removeOrderAction(id));
	};

	const data =
		dataOrder && dataOrder.length > 0
			? dataOrder.map((item, index) => ({
					stt: index + 1,
					key: item.id,
					stt: index + 1,
					time: item.time,
					pay: item.pay,
					note: item.note,
					status: item.status,
					user: {
						name: item.User.username,
						phone: "0" + item.User.phone,
						email: item.User.email,
					},
					nameTour: item.Booking.title,
					booking: {
						root: numberWithCommas(item.Booking.price),
						sale: item.Booking.sale,
						price: handleSale(+item.Booking.price, +item.Booking.sale),
					},
					phone: "0" + item.phone,
					createdAt: item.createdAt,
					updatedAt: item.updatedAt,
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
			title: "Người đặt",
			dataIndex: "user",
			key: "user",
			align: "center",
			render: (value, record) => {
				// console.log(value);
				return (
					<ul style={{ listStyle: "none" }}>
						<li>Tên : {value.name} </li>
						<li> Điện thoại : {value.phone} </li>
						<li> email : {value.email} </li>
					</ul>
				);
			},
		},
		{
			title: "Gói chụp",
			dataIndex: "booking",
			key: "usbookinger",
			align: "center",
			render: (value, record) => {
				// console.log(value);
				return (
					<ul style={{ listStyle: "none" }}>
						<li>Giá gốc : {value.root} đ </li>
						<li> Sale : {value.sale} % </li>
						<li> Tổng : {value.price} đ </li>
					</ul>
				);
			},
		},
		{
			title: "Thời gian đặt",
			dataIndex: "time",
			key: "time",
			align: "center",
		},

		{
			title: "Trạng thái",
			dataIndex: "status",
			key: "status",
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
			onFilter: (value, record) => record.status === value,
			render: (value, record) => {
				if (value === true) return <Tag color="#2db7f5">Đã duyệt</Tag>;
				else return <Tag color="#CD201F">Đang chờ duyệt</Tag>;
			},
		},

		{
			title: "Thanh toán",
			dataIndex: "pay",
			key: "pay",
			align: "center",
			width: "10%",
			filters: [
				{
					text: "Đã thanh toán",
					value: true,
				},
				{
					text: "Chưa thanh toán",
					value: false,
				},
			],
			onFilter: (value, record) => record.pay === value,
			render: (value, record) => {
				if (value === true) return <Tag color="#2db7f5">Đã thanh toán</Tag>;
				else return <Tag color="#CD201F">Chưa thanh toán</Tag>;
			},
		},

		{
			title: "Tùy chọn",
			key: "action",
			width: "5%",
			align: "center",
			render: (text, record) => {
				return (
					<>
						<Space size="middle">
							<Popconfirm
								disabled={record.status}
								title="Bạn có muốn xóa？"
								onConfirm={() => {
									handleDelete(record.key);
								}}
								icon={
									<QuestionCircleOutlined style={{ color: "red" }} />
								}
							>
								<DeleteOutlined
									style={
										record.status
											? { fontSize: "18px", color: "black" }
											: { fontSize: "18px", color: "red" }
									}
								/>
							</Popconfirm>
						</Space>
					</>
				);
			},
		},
	];
	return (
		<div className="OrderAdmin">
			<div className="text-center heading">
				<h2 style={{ fontWeight: "bolder" }}> Order </h2>
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

export default OrderUser;
