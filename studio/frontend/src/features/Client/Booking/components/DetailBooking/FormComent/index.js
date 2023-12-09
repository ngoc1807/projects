import { Input, message, Rate, Form } from "antd";
import React from "react";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addCommentClientAction } from "app/actions/commentAction";
import { getStorage } from "utils/common";
import { RULES_ANTD, layout } from "./../../../../../../constants";
const customIcons = {
	1: <FrownOutlined />,
	2: <FrownOutlined />,
	3: <MehOutlined />,
	4: <SmileOutlined />,
	5: <SmileOutlined />,
};
function FormCommentBooking(props) {
	const { detailBookingId } = useParams();
	const dispatch = useDispatch();
	const [state, setState] = useState({
		content: "",
		email: "",
		name: "",
		title: "",
	});
	const [rateCF, setRateCF] = useState({
		rateOne: 4,
		rateTwo: 4,
		rateThere: 4,
		rateFour: 4,
	});

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};
	const handleRateOne = (value) => {
		setRateCF({
			...rateCF,
			rateOne: value,
		});
	};
	const handleRateTwo = (value) => {
		setRateCF({
			...rateCF,
			rateTwo: value,
		});
	};
	const handleRateThere = (value) => {
		setRateCF({
			...rateCF,
			rateThere: value,
		});
	};
	const handleRateFour = (value) => {
		setRateCF({
			...rateCF,
			rateFour: value,
		});
	};

	const onFinish = (values) => {
		console.log(values, "sss");
		const { name, email, content, title } = values;
		const { rateOne, rateFour, rateThere, rateTwo } = rateCF;

		const b = (rateOne + rateFour + rateThere + rateTwo) / 4;

		const c = Math.round(b * 10) / 10;

		const newComment = {
			name,
			email,
			avatar: getStorage("avatar") ? getStorage("avatar") : "",
			title,
			content,
			point: c,
			type: "booking",
			CommentId: detailBookingId,
		};
		// console.log(newComment, "comment");
		dispatch(addCommentClientAction(newComment));
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Bạn chưa nhập đủ thông tin:", errorInfo);
	};

	return (
		<div className="writeReview">
			<div className="title">Viết nhận xét</div>
			<Form {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
				<div className="box row">
					<div className="col-6 name pl-0">
						<Form.Item name="name" rules={RULES_ANTD.common} hasFeedback>
							<Input placeholder="Họ tên" size="large" />
						</Form.Item>
					</div>
					<div className="col-6 email pr-0">
						<Form.Item name="email" rules={RULES_ANTD.email} hasFeedback>
							<Input placeholder="Email" size="large" />
						</Form.Item>
					</div>
					<div className="col-12 pt-4  px-0  titleComment">
						<Form.Item name="title" rules={RULES_ANTD.common} hasFeedback>
							<Input placeholder="Tiêu đề" size="large" />
						</Form.Item>
					</div>

					<div className="col-lg-9 pt-4 pl-0 col-md-12">
						<Form.Item name="content" rules={RULES_ANTD.text} hasFeedback>
							<Input.TextArea
								rows="10"
								placeholder="Nội dung"
								size="large"
							/>
						</Form.Item>
					</div>
					<div className="col-lg-3  col-md-12  evaluate ">
						<div className="items   ">
							<div className="text">Ảnh</div>
							<Rate
								defaultValue={
									rateCF && rateCF.rateOne ? rateCF.rateOne : 0
								}
								onChange={handleRateOne}
								character={({ index }) => {
									return customIcons[index + 1];
								}}
							/>
						</div>
						<div className="items   ">
							<div className="text">Dịch vụ</div>
							<Rate
								onChange={handleRateTwo}
								defaultValue={
									rateCF && rateCF.rateTwo ? rateCF.rateTwo : 0
								}
								character={({ index }) => {
									return customIcons[index + 1];
								}}
							/>
						</div>
						<div className="items   ">
							<div className="text">Địa điểm</div>
							<Rate
								onChange={handleRateThere}
								defaultValue={
									rateCF && rateCF.rateThere ? rateCF.rateThere : 0
								}
								character={({ index }) => {
									return customIcons[index + 1];
								}}
							/>
						</div>
						<div className="items   ">
							<div className="text">Trang phục</div>
							<Rate
								onChange={handleRateFour}
								defaultValue={
									rateCF && rateCF.rateFour ? rateCF.rateFour : 0
								}
								character={({ index }) => {
									return customIcons[index + 1];
								}}
							/>
						</div>
					</div>

					<div className="sendReview col-12 ">
						<button className="btn btn-warning" htmlType="submit">
							Gửi nhận xét
						</button>
					</div>
				</div>
			</Form>
		</div>
	);
}

export default FormCommentBooking;
