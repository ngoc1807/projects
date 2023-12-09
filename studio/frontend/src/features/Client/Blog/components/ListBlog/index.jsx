import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import "./configBlogPage.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchBlogUserData } from "app/actions/blogAction";
import { Spin, Carousel, Col, Row } from "antd";
import { handleShortString, formatDate } from "./../../../../../constants";
import { useState } from "react";
import { randomArray } from "utils/common";
// import OwlCarousel from "react-owl-carousel";
function ListBlog(props) {
	const match = useRouteMatch();
	const dispatch = useDispatch();

	const dataBlog = useSelector((items) => items.blog.blog);
	const loading = useSelector((items) => items.blog.loading);

	const [state, setState] = useState(dataBlog);
	useEffect(() => {
		getHighlight();
	}, [dataBlog]);

	const getHighlight = async () => {
		if (dataBlog.length < 1) {
			await dispatch(fetchBlogUserData());
			setState(dataBlog);
		} else {
			setState(dataBlog);
		}
	};

	return (
		<div className="configBlogPage container-fluid ">
			<div className="title">
				<p>Bài viết nổi bật</p>
			</div>
			<div className="ListBlogHighlight">
				<Carousel autoplay={false} className="cfCarousel">
					{state ? (
						randomArray(state, 3).map((i, k) => (
							<Row className="box" key={k} style={{ display: "unset" }}>
								<Col span={10} className="imgBox">
									<div className="boxImg ">
										<a href={`${match.url}/${i.id}`}>
											<img src={i.image} alt="" />
										</a>
									</div>
								</Col>
								<Col span={14} className="boxContent">
									<a href={`${match.url}/${i.id}`} className="title">
										{handleShortString(i.title, 200)}
									</a>
									<p className="desc">{i.summary}</p>
									<p className="author">— {i.author} —</p>
									<p className="time"> {formatDate(i.createdAt)} </p>
								</Col>
							</Row>
						))
					) : (
						<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
							<Spin className="mt-5" size="small" />
						</div>
					)}
				</Carousel>
			</div>

			<div className="ListBlog">
				<div className="row">
					{loading ? (
						<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
							<Spin className="mt-5" size="large" />
						</div>
					) : (
						dataBlog &&
						dataBlog.map((item, index) => (
							<div className="col-md-12 col-lg-4" key={index}>
								<div className="box">
									<div className="boxImg">
										<img src={item.image} alt="" />
										<a href={`${match.url}/${item.id}`}> </a>
									</div>

									<div className="boxContent ">
										<a
											href={`${match.url}/${item.id}`}
											className="title"
										>
											{item.title}
										</a>
										<p className="desc">
											{handleShortString(item.summary, 150)}
										</p>
										<p className="author"> — {item.author} —</p>
										<p className="time">
											{" "}
											{formatDate(item.createdAt)}{" "}
										</p>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default ListBlog;
