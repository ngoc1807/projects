import React, { useState } from "react";
import {
	Table,
	Space,
	Popconfirm,
	Spin,
	Image,
	Modal,
	Card,
	Row,
	Col,
} from "antd";
import {
	DeleteOutlined,
	EditOutlined,
	QuestionCircleOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { placeData, removePlace } from "./placeSlide";
import { storage } from "firebaseConfig";
function PlaceAdmin(props) {
	const history = useHistory();
	const dataPlace = useSelector((items) => items.place.place);
	const loading = useSelector((items) => items.place.loading);
	const [loadingTable, setLoadingTable] = useState(false);
	const [image, setImage] = useState([]);
	const dispatch = useDispatch();

	const statePlace = async () => {
		await dispatch(placeData());
	};

	// MODAL
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = (e) => {
		setIsModalVisible(true);
		setImage(e);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	// HANDLE FORM

	const handleEdit = (id) => {
		history.replace(`${props.url}/place/CreateOrEditPlace/${id}`);
	};

	const handleDelete = async (id) => {
		setLoadingTable(true);

		const a = dataPlace.find((x) => x.id === +id);
		const b = a.Place_Imgs;
		// console.log(b.length);

		for (let i = 0; i < b.length; i++) {
			if (b[i].image) {
				await storage
					.refFromURL(b[i].image)
					.delete()
					.then(() => console.log("delete img success"))
					.catch((err) => {
						console.log(err);
					});
			} else {
				break;
			}
		}

		await dispatch(removePlace(id));
		setTimeout(() => {
			statePlace();
			setLoadingTable(false);
		}, 500);
	};

	const data = dataPlace.map((item, index) => ({
		stt: index + 1,
		key: item.id,

		name: item.name,
		desc: item.desc,
		image: item.Place_Imgs,
		createdAt: item.createdAt,
	}));
	// console.log(dataPlace[3].Place_Imgs[0], "122");

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
			title: "List ảnh",
			dataIndex: "image",
			key: "image",
			align: "center",
			render: (value, record) => (
				<Space size="middle">
					<a href="#" onClick={() => showModal(value)}>
						Xem ảnh
					</a>
				</Space>
			),
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
				<h2 style={{ fontWeight: "bolder" }}>Địa điểm </h2>
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
				<Link to={`${props.url}/place/CreateOrEditPlace`}>
					<button className=" btn btn-success ">
						<i
							className="fas fa-plus pr-2"
							style={{ fontSize: "16px" }}
						></i>
						Thêm địa điểm
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

					<Modal
						title="Danh sách ảnh"
						visible={isModalVisible}
						onCancel={handleCancel}
						centered
						width="1200px"
						footer={null}
					>
						<Row gutter={[16, 16]}>
							<Image.PreviewGroup>
								{image &&
									image.map((item, index) => (
										<Col span={4} key={index}>
											<Card hoverable bordered>
												<Image src={item.image} />
											</Card>
										</Col>
									))}
							</Image.PreviewGroup>
						</Row>
					</Modal>
				</div>
			)}
		</div>
	);
}

export default PlaceAdmin;
