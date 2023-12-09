import React, { useState } from "react";
import { Modal, Row, Col, Image, Tag } from "antd";
import reactParser from "react-html-parser";
import moment from "moment";
function ModalBlogUser(props) {
	const [confirmLoading, setConfirmLoading] = useState(false);
	const { handleShowModal, data, isModalVisible } = props;

	const {
		title,
		summary,
		// slug,
		published,
		like,
		image,
		createdAt,
		content,
		author,
		Blog_NN_Cate,
		Blog_NN_Place,
	} = data;

	// const handleOk = () => {
	// 	setConfirmLoading(true);
	// 	if (handleShowModal) {
	// 		setTimeout(() => {
	// 			handleShowModal(false);
	// 			setConfirmLoading(false);
	// 		}, 300);
	// 	}
	// };
	const handleCancel = () => {
		if (handleShowModal) {
			handleShowModal(false);
		}
	};

	return (
		<Modal
			className="modalDetailBlog"
			title={title}
			centered
			visible={isModalVisible}
			// onOk={() => handleOk()}
			onCancel={() => handleCancel()}
			footer={false}
			width={1200}
			confirmLoading={confirmLoading}
		>
			<Row gutter={[16, 16]} className="modalDetailBlog__body">
				<Col md={3} className="gutter-row">
					<span className="colLeft"> Tác giả </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight"> {author} </span>
				</Col>

				<Col md={3} className="gutter-row">
					<span className="colLeft"> Tóm tắt </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight"> {summary} </span>
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

				<Col md={3} className="gutter-row">
					<span className="colLeft"> Ngày tạo : </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight">
						{moment({ createdAt }).format("DD-MM-YYYY")}
					</span>
				</Col>

				<Col md={3} className="gutter-row">
					<span className="colLeft"> Thẻ </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight">
						{Blog_NN_Cate &&
							Blog_NN_Cate.map((i, k) => (
								<Tag color="#f50" key={k}>
									{" "}
									{i.name}{" "}
								</Tag>
							))}
						{Blog_NN_Place &&
							Blog_NN_Place.map((i, k) => (
								<Tag color="#2db7f5" key={k}>
									{" "}
									{i.name}{" "}
								</Tag>
							))}
					</span>
				</Col>

				<Col md={3} className="gutter-row">
					<span className="colLeft"> Lượt thích </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight">{like}</span>
				</Col>

				<Col md={3} className="gutter-row">
					<span className="colLeft"> Ảnh </span>
				</Col>
				<Col md={21} className="gutter-row">
					<span className="colRight">
						{image ? <Image src={image} /> : "Trống"}
					</span>
				</Col>

				<Col md={24} className="gutter-row">
					<span className="colLeft"> Nội dung bài viết </span>
				</Col>
				<Col md={24} className="gutter-row">
					<div className="colRight  ">{reactParser(content)}</div>
				</Col>
			</Row>
		</Modal>
	);
}

export default ModalBlogUser;
