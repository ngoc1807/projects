import { Spin } from "antd";
import {
	fetchCommentClientData,
	showMoreCommentClientAction,
} from "app/actions/commentAction";
import { formatDate } from "./../../../../../../constants";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { IMAGE_DEFAULT } from "utils/image";
import { useState } from "react";

function BookingComment(props) {
	// const dataComment = useSelector((state) => state.comment.comment);
	// const dataCommentTemp = useSelector((state) => state.comment.temp);

	const { dataComment, dataCommentTemp } = props;
	console.log(dataComment, "s");
	console.log(dataCommentTemp, "â");

	const dispatch = useDispatch();
	const [state, setState] = useState();
	// console.log(dataComment);
	// console.log(loading);
	const { detailBookingId } = useParams();
	useEffect(() => {
		getDetail();
	}, []);
	const getDetail = () => {
		if (dataComment.length < 1) {
			const b = {
				type: "booking",
				CommentId: detailBookingId,
			};
			dispatch(fetchCommentClientData(b));
		} else {
			if (dataComment) setState(dataComment);
		}
	};
	const [count, setCount] = useState(2);
	const onShowMore = (e) => {
		e.preventDefault();

		dispatch(showMoreCommentClientAction());
		setCount(count + 2);
	};

	return (
		<div className="boxContent-Comment">
			<div className="title">
				<p>Nhận xét</p>
			</div>

			{dataComment &&
				dataComment.length > 0 &&
				dataComment.map((item, index) => (
					<div className="box" key={index}>
						<div className="box-items">
							<div className="userInfo">
								<div className="avatar">
									<img
										src={item.avatar ? item.avatar : IMAGE_DEFAULT}
										alt=""
									/>
								</div>
								<div className="info">
									<div className="name">
										{item.name ? item.name : ""}
									</div>
									<div className="time">
										{item.createdAt ? formatDate(item.createdAt) : ""}
									</div>
								</div>

								<div className="like">
									<a href="/"> </a>
								</div>
							</div>

							<div className="content">
								<div className="point">
									<span>{item.point}</span>
									<span>{item.title ? item.title : ""}</span>
								</div>
								<div className="text">{item.content}</div>
							</div>
						</div>
					</div>
				))}

			<div className="moreComment">
				<a
					href="/"
					onClick={onShowMore}
					disabled={dataCommentTemp.length <= count ? true : false}
				>
					Xem thêm
				</a>
			</div>
		</div>
	);
}

export default BookingComment;
