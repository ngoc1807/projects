import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchBlogUserData } from "app/actions/blogAction";
import { Spin } from "antd";
import { handleShortString, formatDate } from "./../../../../../constants";
import { useState } from "react";
import { randomArray } from "utils/common";

function MaybeYouLikeBlog(props) {
	const dispatch = useDispatch();

	const dataBlog = useSelector((items) => items.blog.blog);
	const loading = useSelector((items) => items.blog.loading);

	const [state, setState] = useState();

	useEffect(() => {
		getHighlight();
	}, [dataBlog]);

	const getHighlight = async () => {
		if (dataBlog.length < 1) {
			dispatch(fetchBlogUserData());
		} else {
			setState(dataBlog);
		}
	};
	return (
		<div className="row blogCaring">
			<div className="titleBox col-12">
				<p>Có thể bạn quan tâm</p>
			</div>

			{state ? (
				randomArray(state, 2).map((i, k) => (
					<div className="col-lg-6 col-md-12 box" key={k}>
						<div className="imgBox">
							<img src={i.image} alt="" />
							<a href={`/home/blog/${i.id}`}></a>
						</div>
						<div className="contentBox">
							<div className="title">
								<a href={`/home/blog/${i.id}`}>{i.title}</a>
							</div>
							<div className="author">{i.author}</div>
							<div className="time"> {formatDate(i.createdAt)}</div>
						</div>
					</div>
				))
			) : (
				<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
					<Spin className="mt-5" size="small" />
				</div>
			)}
		</div>
	);
}

export default MaybeYouLikeBlog;
