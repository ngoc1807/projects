import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addCommentClientAction } from "app/actions/commentAction";
import { getStorage } from "utils/common";
import { RULES_ANTD, layout } from "./../../../../../constants";
import { Input, message, Form } from "antd";

function FormCommentBlog(props) {
	const { detailBlogId } = useParams();
	const dispatch = useDispatch();

	const onFinish = (values) => {
		const newComment = {
			name: values.name,
			email: values.email,
			avatar: getStorage("avatar") ? getStorage("avatar") : "",
			content: values.content,
			type: "blog",
			CommentId: detailBlogId,
		};

		console.log(newComment);
		dispatch(addCommentClientAction(newComment));
	};

	const onFinishFailed = (errorInfo) => {
		return message.error("Bạn chưa nhập đủ thông tin");
	};

	return (
		<div className="userComment col-12">
			<p> Nhận xét của bạn </p>
			<span>
				Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc
				được đánh dấu *
			</span>

			<Form {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
				<div className="row">
					<div className="content col-12">
						<Form.Item name="content" rules={RULES_ANTD.text} hasFeedback>
							<Input.TextArea
								rows="10"
								placeholder="Nội dung"
								size="large"
							/>
						</Form.Item>
					</div>

					<div className="  name col-lg-6 col-md-12">
						<Form.Item name="name" rules={RULES_ANTD.common} hasFeedback>
							<Input placeholder="Họ tên" size="large" />
						</Form.Item>
					</div>
					<div className=" email col-lg-6 col-md-12">
						<Form.Item name="email" rules={RULES_ANTD.email} hasFeedback>
							<Input placeholder="Email" size="large" />
						</Form.Item>
					</div>

					<div className="col-12 text-right">
						<button className="btn btn-warning" htmlType="submit">
							Đăng bình luận
						</button>
					</div>
				</div>
			</Form>
		</div>
	);
}

export default FormCommentBlog;
