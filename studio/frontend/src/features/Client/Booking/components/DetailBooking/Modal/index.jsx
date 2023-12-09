import React, { useState } from "react";
import { Modal, Col, Row, Tag, DatePicker, message } from "antd";
import { handleSale, getStorage } from "utils/common";
import { useParams } from "react-router";
// import moment from "moment";
import orderApi from "api/orderApi";
import "./Modal.scss";
function ModalDetailBooking(props) {
	const { detailBookingId } = useParams();
	const [confirmLoading, setConfirmLoading] = useState(false);
	const { handleShowModal, data, isModalVisible } = props;

	const [state, setState] = useState({
		time: "",
		UserId: getStorage("id") ? getStorage("id") : "",
		BookingId: detailBookingId ? +detailBookingId : "",
		phone: getStorage("phone") ? getStorage("phone") : "",
	});

	const {
		title,
		duration,
		people,
		clothes,

		price,
		sale,
		Booking_NN_Place,
		Booking_NN_Cate,
	} = data;

	const handleCancel = () => {
		if (handleShowModal) {
			handleShowModal(false);
		}
	};
	const handleOk = async () => {
		const { time } = state;
		if (!time) {
			return message.error("Bạn chưa chọn ngày tháng");
		} else {
			const a = await orderApi.addOrder(state);
			// console.log(a);
			if (a.status === "success") {
				message.success("Đặt lịch thành công");
				setTimeout(() => {
					window.location.href = `/home/booking/${detailBookingId}`;
				}, 1000);
			}
		}

		console.log(state);
	};

	const onChangeDatePicker = (date, dateString) => {
		setState({
			...state,
			time: dateString,
		});
	};

	const disabledDate = (current) => {
		// Can not select days before today and today
		return (
			current && current.valueOf() < Date.now()
			//  &&
			// current > moment().add(3, "day")
		);
	};

	// console.log(state);
	return (
		<Modal
			className="BookingModal"
			title="Đặt lịch"
			centered
			visible={isModalVisible}
			onOk={() => handleOk()}
			onCancel={() => handleCancel()}
			width={1000}
			confirmLoading={confirmLoading}
		>
			<Row gutter={[16, 8]}>
				<Col span={24} className="title">
					Bạn đã chọn gói " {title} "{" "}
				</Col>
				<Col md={3} className="gutter-row">
					<span className="colLeft"> Thể loại : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight">
						{Booking_NN_Cate && Booking_NN_Cate[0] ? (
							<Tag color="#D52A2D">{Booking_NN_Cate[0]["name"]}</Tag>
						) : null}
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
						{clothes ? "Shop chuẩn bị" : "Khách chuẩn bị"}{" "}
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
									{i.name}
								</Tag>
							))}
					</span>
				</Col>
				<Col md={3} className="gutter-row">
					<span className="colLeft"> Giá tiền : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight">
						{" "}
						{price ? handleSale(price, sale) : null} VND{" "}
					</span>
				</Col>
				<Col md={3} className="gutter-row">
					<span className="colLeft"> Chọn ngày : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight">
						<DatePicker
							disabledDate={disabledDate}
							onChange={onChangeDatePicker}
						/>
					</span>
				</Col>
			</Row>
		</Modal>
	);
}

export default ModalDetailBooking;
