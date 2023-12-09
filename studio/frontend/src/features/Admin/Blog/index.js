import React, { useEffect, useState } from "react";
import { Table, Space, Popconfirm, Select, Tooltip, Button } from "antd";

import {
	SelectOutlined,
	DeleteOutlined,
	EditOutlined,
	QuestionCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { storage } from "firebaseConfig";

import {
	fetchBlogData,
	removeBlogAction,
	updateBlogStatusAction,
} from "app/actions/blogAction";
import ModalBlogAdmin from "./modalBlog";
import { handleShortString, formatDate } from "./../../../constants";
const { Option } = Select;
BlogAdmin.propTypes = {};

function BlogAdmin(props) {
	// SET UP

	const history = useHistory();
	const dataBlog = useSelector((items) => items.blog.blog);
	let loading = useSelector((items) => items.blog.loading);

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [detailBlog, setDetailBlog] = useState([]);
	const handleModal = (value) => {
		// setIsModalVisible(true);
		const info = dataBlog.find((x) => x.id === +value);
		setDetailBlog(info);
		setIsModalVisible(true);
	};

	const showModal = (v) => {
		setDetailBlog([]);

		setIsModalVisible(false);
	};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBlogData());
	}, []);

	const data =
		dataBlog.length > 0
			? dataBlog.map((item, index) => ({
					stt: index + 1,
					key: item.id,

					Blog_NN_Cate: item.Blog_NN_Cate,
					Blog_NN_Comment: item.Blog_NN_Place,
					Blog_NN_Place: item.Blog_NN_Place,
					authorId: item.author,
					content: item.content,
					createdAt: item.createdAt,
					image: item.image,
					like: item.like,
					parentId: item.parentId,
					published: item.published,
					slug: item.slug,
					summary: handleShortString(item.summary, 150),
					title: handleShortString(item.title, 100),
					updatedAt: item.updatedAt,
			  }))
			: null;

	//  HANDLE FROM

	// console.log(data[1]);
	const handleUpdate = async (value) => {
		const { status, id } = value;
		const newValue = {
			id,
			published: !status,
		};

		await dispatch(updateBlogStatusAction(newValue));
	};

	const handleEdit = (id) => {
		const BlogEdit = dataBlog.find((x) => x.id === +id);
		localStorage.setItem("BlogEdit", JSON.stringify(BlogEdit));
		history.replace(`${props.url}/blog/CreateOrEditBlog/${id}`);
	};

	const handleDelete = async (id) => {
		loading = true;
		const a = dataBlog.find((x) => x.id === +id);

		console.log(a);
		if (a.image) {
			await storage
				.refFromURL(a.image)
				.delete()
				.then(() => console.log("delete img success"))
				.catch((err) => {
					console.log(err);
				});
		}
		await dispatch(removeBlogAction(id));
		setTimeout(() => {
			loading = false;
		}, 1000);
	};

	//  TABLE

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
			width: "20%",
		},
		{
			title: "Miêu tả",
			dataIndex: "summary",
			key: "summary",
			align: "center",
			width: "30%",
		},

		{
			title: "Người đăng",
			dataIndex: "authorId",
			key: "authorId",
			align: "center",
		},

		{
			title: "Lượt thích",
			dataIndex: "like",
			key: "like",
			align: "center",
			// width: "30%",
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
		<div className="blogAdmin">
			<div className="text-center heading">
				<h2 style={{ fontWeight: "bolder" }}>Blog </h2>
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
				<Link to={`${props.url}/blog/CreateOrEditBlog`}>
					<button className=" btn btn-success ">
						<i
							className="fas fa-plus pr-2"
							style={{ fontSize: "16px" }}
						></i>
						Thêm Blog
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

				<ModalBlogAdmin
					isModalVisible={isModalVisible}
					handleShowModal={showModal}
					data={detailBlog}
				/>
			</div>
		</div>
	);
}

export default BlogAdmin;
