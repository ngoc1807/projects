import React, { useState, useEffect } from "react";
import {
	Table,
	Space,
	Popconfirm,
	Spin,
	Select,
	Tooltip,
	Button,
	Tag,
} from "antd";
import {
	SelectOutlined,
	DeleteOutlined,
	EditOutlined,
	QuestionCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import {
	fetchAlbumData,
	updateAlbumStatusAction,
	removeAlbumAction,
} from "app/actions/albumAction";
import { storage } from "firebaseConfig";
import ModalAlbumAdmin from "./ModalAlbumAdmin";

const { Option } = Select;

function AlbumAdmin(props) {
	const history = useHistory();
	const dispatch = useDispatch();

	const dataAlbum = useSelector((items) => items.album.album);
	let loading = useSelector((items) => items.album.loading);

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [detailAlbum, setDetailAlbum] = useState([]);

	// HANDLE MODAL
	useEffect(() => {
		dispatch(fetchAlbumData());
	}, []);

	const handleModal = (value) => {
		const info = dataAlbum.find((x) => x.id === +value);

		setDetailAlbum(info);
		setIsModalVisible(true);
	};

	const showModal = (value) => {
		setDetailAlbum([]);

		setIsModalVisible(false);
	};

	const data =
		dataAlbum && dataAlbum.length > 0
			? dataAlbum.map((item, index) => ({
					stt: index + 1,
					key: item.id,
					name: item.name,
					avatar: item.avatar,
					desc: item.desc,
					author: item.author,

					camera: {
						name: item.camera_name,
						eyes: item.camera_eyes,
						len: item.camera_len,
						stopwatch: item.camera_stopwatch,
						iso: item.camera_iso,
					},

					like: item.like,
					published: item.published,
					listImages: item.Album_Imgs,
					Album_NN_Cate: item.Album_NN_Cate,
					Album_NN_Place: item.Album_NN_Place,
					createdAt: item.createdAt,
			  }))
			: null;

	//handle

	const handleEdit = (value) => {
		history.replace(`${props.url}/album/CreateOrEditAlbum/${value}`);
	};

	const handleUpdate = async (value) => {
		const { status, id } = value;
		const newValue = {
			id,
			published: !status,
		};

		console.log(newValue, "newValue");
		await dispatch(updateAlbumStatusAction(newValue));
	};

	const handleDelete = async (value) => {
		loading = true;

		const data = dataAlbum.find((x) => x.id === +value);
		const avatar = data.avatar;
		const listImage = data.Album_Imgs;

		try {
			if (avatar) {
				await storage
					.refFromURL(avatar)
					.delete()
					.then(() => console.log("delete avatar success"))
					.catch((err) => {
						console.log(err);
					});

				for (let i = 0; i < listImage.length; i++) {
					await storage
						.refFromURL(listImage[i].image)
						.delete()
						.then(() => console.log("delete img success"))
						.catch((err) => {
							console.log(err);
						});
				}
			}
			await dispatch(removeAlbumAction(value));
		} catch (error) {
			throw error;
		}

		setTimeout(() => {
			loading = false;
		}, 1000);
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
			width: "4%",
			align: "center",
			defaultSortOrder: "ascend",

			sorter: (a, b) => a.stt - b.stt,
		},

		{
			title: "Tên Album",
			dataIndex: "name",
			key: "name",
			align: "center",
			// width: "30%",
		},

		{
			title: "Người chụp ",
			dataIndex: "author",
			key: "author",
			align: "center",
			// width: "30%",
		},

		{
			title: " Địa điểm ",
			dataIndex: "Album_NN_Place",
			key: "Album_NN_Place",
			align: "center",
			width: "12%",
			render: (value) => (
				<span>
					{value &&
						value.map((item) => {
							return (
								<Tag color="orange" key={item.id}>
									{item.name.toUpperCase()}
								</Tag>
							);
						})}
				</span>
			),
		},
		{
			title: "Thể loại",
			dataIndex: "Album_NN_Cate",
			key: "Album_NN_Cate",
			align: "center",
			width: "12%",
			render: (value) => (
				<span>
					{value &&
						value.map((item) => {
							return (
								<Tag color={"purple"} key={item.id}>
									{item.name.toUpperCase()}
								</Tag>
							);
						})}
				</span>
			),
		},

		{
			title: "Lượt thích",
			dataIndex: "like",
			key: "like",
			align: "center",
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
		<div>
			<div>
				<div className="text-center heading">
					<h2 style={{ fontWeight: "bolder" }}> Danh sách Album </h2>
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
					<Link to={`${props.url}/album/CreateOrEditAlbum`}>
						<button className=" btn btn-success ">
							<i
								className="fas fa-plus pr-2"
								style={{ fontSize: "16px" }}
							></i>
							Thêm album
						</button>
					</Link>
				</p>
				{loading ? (
					<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
						<Spin className="mt-5" />
					</div>
				) : (
					<>
						<div>
							<Table
								bordered
								size="middle"
								scroll={{ x: 1300 }}
								columns={columns}
								dataSource={data}
								loading={loading}
							/>
						</div>

						<ModalAlbumAdmin
							isModalVisible={isModalVisible}
							handleShowModal={showModal}
							data={detailAlbum}
						/>
					</>
				)}
			</div>
		</div>
	);
}

export default AlbumAdmin;
