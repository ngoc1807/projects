import React, { useRef, useState } from "react";
import { Modal, Row, Col, Image, Tag } from "antd";
import reactParser from "react-html-parser";

function ModalTourAdmin(props) {
	const [confirmLoading, setConfirmLoading] = useState(false);
	const { handleShowModal, data, isModalVisible } = props;
	const {
		title,
		photographer,
		image,
		duration,
		people,
		clothes,
		desc,
		price,
		sale,
		published,
		Booking_NN_Place,
		Booking_NN_Cate,
	} = data;

	const handleCancel = () => {
		if (handleShowModal) {
			handleShowModal(false);
		}
	};

	const numberWithCommas = (x) => {
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	};

	return (
		<Modal
			className="modalDetailTour"
			title={title ? title : ""}
			centered
			visible={isModalVisible}
			// onOk={() => handleOk()}
			onCancel={() => handleCancel()}
			footer={null}
			width={1000}
			confirmLoading={confirmLoading}
		>
			<Row gutter={[16, 16]} className="modalDetailTour__body">
				<Col md={3} className="gutter-row">
					<span className="colLeft"> Nhiếp ảnh : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight"> {photographer} </span>
				</Col>
				<Col md={3} className="gutter-row">
					<span className="colLeft"> Ảnh đại diện : </span>
				</Col>
				<Col md={21} className="gutter-row">
					{image ? <Image src={image} /> : "Trống"}
				</Col>

				<Col md={3} className="gutter-row">
					<span className="colLeft"> Thể loại : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight">
						{" "}
						{Booking_NN_Cate && Booking_NN_Cate[0]
							? Booking_NN_Cate[0]["name"]
							: null}{" "}
					</span>
				</Col>
				<Col md={3} className="gutter-row">
					<span className="colLeft"> Số người đi : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight"> {people} </span>
				</Col>
				<Col md={3} className="gutter-row">
					<span className="colLeft"> Thời gian chụp : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight"> {duration} tiếng </span>
				</Col>
				<Col md={3} className="gutter-row">
					<span className="colLeft"> Quần áo : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight">
						{" "}
						{clothes ? "Shop chuẩn bị" : "Tự chuẩn bị"}{" "}
					</span>
				</Col>

				<Col md={3} className="gutter-row">
					<span className="colLeft"> Địa điểm : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight">
						{Booking_NN_Place &&
							Booking_NN_Place.map((i, k) => (
								<Tag color="#2db7f5" key={k}>
									{" "}
									{i.name}{" "}
								</Tag>
							))}
					</span>
				</Col>

				<Col md={3} className="gutter-row">
					<span className="colLeft"> Giá gốc : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight">
						{" "}
						{price ? numberWithCommas(price) : null} VND{" "}
					</span>
				</Col>

				<Col md={3} className="gutter-row">
					<span className="colLeft"> Giảm giá : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight"> {sale} % </span>
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
			</Row>
		</Modal>
	);
}

export default ModalTourAdmin;
