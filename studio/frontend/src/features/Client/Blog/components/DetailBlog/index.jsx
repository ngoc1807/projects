import React from "react";
import MaybeYouLikeBlog from "../MaybeYouLike";
import "./DetailBlog.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import blogApi from "api/blogApi";
import { formatDate } from "./../../../../../constants";
import { IMAGE_DEFAULT } from "utils/image";
import reactParser from "react-html-parser";
import FormCommentBlog from "../formComment";
import CommentBlog from "../comment";
import { fetchCommentClientData } from "app/actions/commentAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function DetailBlog(props) {
	const { detailBlogId } = useParams();
	const dispatch = useDispatch();
	const [detailBlog, setDetailBlog] = useState("");

	const dataComment = useSelector((state) => state.comment.comment);
	const dataCommentTemp = useSelector((state) => state.comment.temp);
	useEffect(() => {
		getDetail();
	}, []);
	const getDetail = async () => {
		const res = await blogApi.getOne(detailBlogId);
		// console.log(res.data, "res");
		if (res.status === "success") {
			setDetailBlog(res.data);
		}
		const b = {
			type: "blog",
			CommentId: detailBlogId,
		};
		dispatch(fetchCommentClientData(b));
	};

	return (
		<div className="configDetailBlog container-fluid">
			<div className="row generalBox">
				<div className="titleBox col-12">
					<div className="title">{detailBlog.title}</div>
					<div className="infoUser">
						<div className="imgUser">
							<img
								src={
									detailBlog && detailBlog.avatarAuthor
										? detailBlog.avatarAuthor
										: IMAGE_DEFAULT
								}
								alt=""
							/>
						</div>

						<div>
							<div className="author">{detailBlog.author}</div>
							<div className="time">
								{formatDate(detailBlog.createdAt)}
							</div>
						</div>
					</div>
				</div>
				<div className="imgBox col-12">
					<img src={detailBlog.image} alt="" />
				</div>

				<div className="contentBox col-12">
					{reactParser(detailBlog ? detailBlog.content : "")}
				</div>

				<div className="Tag col-12">
					<div className="tags">
						<span>Tags:</span>
						<ul className="ListTag">
							{detailBlog
								? detailBlog.Blog_NN_Cate.map((i, k) => (
										<li key={k}>
											<a href="#">#{i.name}</a>
										</li>
								  ))
								: ""}

							{detailBlog
								? detailBlog.Blog_NN_Place.map((i, k) => (
										<li key={k}>
											<a href="#">#{i.name}</a>
										</li>
								  ))
								: ""}
						</ul>
					</div>
					<div className="share">
						<span>Share:</span>
						<ul className="ListTag">
							<li>
								<a href="/">
									<i className="fab fa-facebook-f"></i>
								</a>
							</li>

							<li>
								<a href="/">
									<i className="fab fa-instagram"></i>
								</a>
							</li>

							<li>
								<a href="/">
									<i className="fab fa-google-plus-g"></i>
								</a>
							</li>

							<li>
								<a href="/">
									<i className="fab fa-twitter"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<CommentBlog
					dataComment={dataComment}
					dataCommentTemp={dataCommentTemp}
				/>
				<FormCommentBlog />
			</div>

			<MaybeYouLikeBlog />
		</div>
	);
}

export default DetailBlog;
