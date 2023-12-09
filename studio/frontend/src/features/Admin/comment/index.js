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

import {
	fetchCommentData,
	removeCommentActions,
} from "app/actions/commentAction";

const { Option } = Select;

function CommentAdmin(props) {
	const dataComment = useSelector((state) => state.comment.comment);
	const loading = useSelector((state) => state.comment.loading);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCommentData());
	}, []);
	const handleDelete = (id) => {
		dispatch(removeCommentActions(id));
	};

	// console.log(dataComment);
	const data =
		dataComment && dataComment.length > 0
			? dataComment.map((item, index) => ({
					stt: index + 1,
					key: item.id,
					name: item.name || "",
					title: item.title || "",
					email: item.email || "",
					type: item.type || "",
					point: item.point || "",
					content: item.content || "",
					linkDrive: item.linkDrive || "",
					createdAt: item.createdAt || "",
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
			title: "Danh mục",
			dataIndex: "type",
			key: "type",
			align: "center",
			filters: [
				{
					text: "Gói chụp",
					value: "booking",
				},
				{
					text: "Bài viết",
					value: "blog",
				},
			],
			onFilter: (value, record) => record.type.includes(value),
		},

		{
			title: "Họ tên",
			dataIndex: "name",
			key: "name",
			align: "center",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
			align: "center",
		},
		{
			title: "Tiêu đề",
			dataIndex: "title",
			key: "title",
			align: "center",
		},
		{
			title: "Nội dung",
			dataIndex: "content",
			key: "content",
			align: "center",
			width: "45%",
		},
		{
			title: "Tùy chọn",
			key: "action",
			width: "4%",
			align: "center",
			render: (text, record) => (
				<>
					<Space size="middle">
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
	return (
		<div>
			<div className="OrderAdmin">
				<div className="text-center heading">
					<h2 style={{ fontWeight: "bolder" }}> Comment</h2>
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
			</div>

			<Table
				bordered
				size="middle"
				scroll={{ x: 1200 }}
				columns={columns}
				dataSource={data}
				loading={loading}
			/>
		</div>
	);
}

export default CommentAdmin;
