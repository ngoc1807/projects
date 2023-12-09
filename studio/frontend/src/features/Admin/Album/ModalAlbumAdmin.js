import React, { useState } from "react";
import { Modal, Row, Col, Image, Tag } from "antd";
import reactParser from "react-html-parser";
import moment from "moment";

function ModalAlbumAdmin(props) {
	const [confirmLoading, setConfirmLoading] = useState(false);
	const { handleShowModal, data, isModalVisible } = props;
	const {
		name,
		published,
		like,
		desc,
		createdAt,
		camera_stopwatch,
		camera_name,
		camera_len,
		camera_iso,
		camera_eyes,
		avatar,
		author,
		Album_NN_Place,
		Album_NN_Cate,
		Album_Imgs,
	} = data;

	const handleCancel = () => {
		if (handleShowModal) {
			handleShowModal(false);
		}
	};

	return (
		<Modal
			className="modalDetailAlbum"
			title={name ? name : ""}
			centered
			visible={isModalVisible}
			// onOk={() => handleOk()}
			onCancel={() => handleCancel()}
			footer={null}
			width={1200}
			confirmLoading={confirmLoading}
		>
			<Row gutter={[16, 16]} className="modalDetailAlbum__body">
				<Col md={3} className="gutter-row">
					<span className="colLeft"> Nhiếp ảnh : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight"> {author} </span>
				</Col>

				<Col md={3} className="gutter-row">
					<span className="colLeft"> Ảnh đại diện : </span>
				</Col>
				<Col md={9} className="gutter-row">
					{avatar ? <Image src={avatar} /> : "Trống"}
				</Col>
				<Col md={10} className="gutter-row">
					<div className="">
						<span className="camera">Lượt thích</span> : {like}
					</div>
					<div className="">
						<span className="camera">Máy ảnh</span> : {camera_name}
					</div>
					<div className="">
						<span className="camera">Camera_len </span> : f/{camera_len}
					</div>
					<div className="">
						<span className="camera">Camera_iso</span> : {camera_iso}
					</div>
					<div className="">
						<span className="camera">Camera_eyes</span> : {camera_eyes} mm
					</div>
					<div className="">
						<span className="camera">Camera_stopwatch</span> : 1/
						{camera_stopwatch}
					</div>
					<div className="">
						<span className="camera">Ngày tạo</span> :
						{moment({ createdAt }).format("DD-MM-YYYY")}
					</div>
				</Col>

				<Col md={3} className="gutter-row">
					<span className="colLeft"> Thẻ : </span>
				</Col>
				<Col md={21} className="gutter-row">
					{Album_NN_Place &&
						Album_NN_Place.map((i, k) => (
							<Tag color="#2db7f5" key={k}>
								{" "}
								{i.name}{" "}
							</Tag>
						))}

					{Album_NN_Cate &&
						Album_NN_Cate.map((i, k) => (
							<Tag color="#f50" key={k}>
								{" "}
								{i.name}{" "}
							</Tag>
						))}
				</Col>

				<Col md={3} className="gutter-row">
					<span className="colLeft"> Trạng thái : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight">
						{" "}
						{published === true ? "Đã duyệt" : "Đang chờ duyệt"}{" "}
					</span>
				</Col>
				<Col md={24} className="gutter-row">
					<span className="colLeft"> Giới thiệu : </span>
				</Col>
				<Col md={24} className="gutter-row">
					<div className="colRight  ">
						{desc ? reactParser(desc) : null}
					</div>
				</Col>
				<Col md={24} className="gutter-row">
					<span className="colLeft"> Danh sách ảnh : </span>
				</Col>
				<Col md={24} className="gutter-row">
					<div className="colRight  ">
						<Image.PreviewGroup>
							{Album_Imgs &&
								Album_Imgs.map((i, k) => (
									<Image
										src={i.image}
										key={k}
										width={200}
										height={150}
										className="img-thumbnail"
									/>
								))}
						</Image.PreviewGroup>
					</div>
				</Col>
			</Row>
		</Modal>
	);
}

export default ModalAlbumAdmin;
