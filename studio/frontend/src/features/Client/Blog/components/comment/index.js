import React from "react";
import { formatDate } from "./../../../../../constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { IMAGE_DEFAULT } from "utils/image";
import { useState } from "react";
import { Spin } from "antd";
import {
	fetchCommentClientData,
	showMoreCommentClientAction,
} from "app/actions/commentAction";
function CommentBlog(props) {
	const { dataComment, dataCommentTemp } = props;

	const dispatch = useDispatch();
	const [state, setState] = useState();
	const { detailBlogId } = useParams();
	useEffect(() => {
		if (dataComment.length < 1) {
			const b = {
				type: "blog",
				CommentId: detailBlogId,
			};
			dispatch(fetchCommentClientData(b));
		} else {
			setState(dataComment);
		}
	}, []);

	const [count, setCount] = useState(2);

	const onShowMore = (e) => {
		e.preventDefault();

		dispatch(showMoreCommentClientAction());
		setCount(count + 2);
	};
	return (
		<div className="listComment col-12">
			<p> Comment ({dataCommentTemp.length})</p>
			{dataComment &&
				dataComment.length > 0 &&
				dataComment.map((item, index) => (
					<div className="comment" key={index}>
						<div className="commentParent">
							<div className="img">
								<img
									src={item.avatar ? item.avatar : IMAGE_DEFAULT}
									alt=""
								/>
							</div>
							<div className="content">
								<div className="name">{item.name ? item.name : ""}</div>
								<div className="time">
									<span>
										{" "}
										{item.createdAt ? formatDate(item.createdAt) : ""}
									</span>
									<span className="reply"></span>
								</div>
								<div className="text">{item.content}</div>
							</div>
						</div>
					</div>
				))}
			<div className="moreComment text-center w-100  ">
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

export default CommentBlog;
