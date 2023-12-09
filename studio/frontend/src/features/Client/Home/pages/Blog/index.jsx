import React, { useState, useEffect } from "react";
import "./HomeBlog.scss";

import { Spin } from "antd";
import { IMAGE_DEFAULT } from "utils/image";
import blogApi from "api/blogApi";
import moment from "moment";
// import { handleSale, numberWithCommas } from "utils/common";

function ClientBlog(props) {
	const [state, setState] = useState({ one: [], two: [] });
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getData();
	}, []);
	const getData = async () => {
		setLoading(true);
		const a = await blogApi.getAllBlogHome();
		if (a.status === "success") {
			setState({
				one: [a.data[0]],
				two: [a.data[1], a.data[2]],
			});
			setLoading(false);
		}
	};

	const { one, two } = state;
	console.log(state);

	return (
		<div className="configBlogHome container-fluid">
			<div className="row">
				<div className="title text-center col-12 ">
					<p>Giới thiệu</p>
					<h3>BÀI VIẾT NỔI BẬT</h3>
				</div>
			</div>

			<div className="Box  ">
				{loading ? (
					<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
						<Spin className="mt-5" />
					</div>
				) : (
					one &&
					one.length > 0 &&
					one.map((i, k) => (
						<div className="BlogBoxLeft" key={k}>
							<div className="ImgBox">
								{i.image ? (
									<img src={i.image} alt="dfg" />
								) : (
									<img src={IMAGE_DEFAULT} alt="dfg" />
								)}
							</div>

							<div className="ContentBox">
								<div className="InfoBox">
									<div className="Author">
										{" "}
										<i className="fas fa-user-alt"></i> {i.author}
									</div>
									<div className="Time">
										{" "}
										<i className="far fa-clock"></i>Tháng{" "}
										{moment(i.createdAt).format("MM")}
									</div>
									<div className="TotalLike">
										{" "}
										<i className="far fa-heart"></i> {i.like}
									</div>
									<div className="TotalComment">
										{" "}
										<i className="far fa-comment"></i>1
									</div>
								</div>
								<div className="TitleBox">
									<a href={`/home/blog/${i.id}`}>{i.title}</a>
								</div>
							</div>
						</div>
					))
				)}

				<div className="BlogBoxRight">
					{loading ? (
						<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
							<Spin className="mt-5" />
						</div>
					) : (
						two &&
						two.length > 0 &&
						two.map((i, k) => (
							<div className="BoxRight" key={k}>
								<div className="ImgBox">
									{i.image ? (
										<img src={i.image} alt="dfg" />
									) : (
										<img src={IMAGE_DEFAULT} alt="dfg" />
									)}
								</div>

								<div className="ContentBox">
									<div className="InfoBox">
										<div className="Author">
											{" "}
											<i className="fas fa-user-alt"></i> {i.author}
										</div>
										<div className="Time">
											{" "}
											<i className="far fa-clock"></i>Tháng{" "}
											{moment(i.createdAt).format("MM")}
										</div>
										<div className="TotalLike">
											{" "}
											<i className="far fa-heart"></i> {i.like}
										</div>
										<div className="TotalComment">
											{" "}
											<i className="far fa-comment"></i>1
										</div>
									</div>
									<div className="TitleBox">
										<a href={`/home/blog/${i.id}`}>{i.title}</a>
									</div>
								</div>
							</div>
						))
					)}

					{/* <div className="BoxRight">
						<div className="ImgBox">
							<img
								src="https://loustudio.vn/wp-content/uploads/2019/06/48143480807_b8d2b51a12_o-960x750.jpg"
								alt=""
							/>
						</div>

						<div className="ContentBox">
							<div className="InfoBox">
								<div className="Author">
									{" "}
									<i className="fas fa-user-alt"></i> Admin
								</div>
								<div className="Time">
									{" "}
									<i className="far fa-clock"></i> Tháng 6
								</div>
								<div className="TotalLike">
									{" "}
									<i className="far fa-heart"></i> 2
								</div>
								<div className="TotalComment">
									{" "}
									<i className="far fa-comment"></i>1
								</div>
							</div>
							<div className="TitleBox">
								<a href="/">
									TRẢI NGHIỆM CƯỚI ĐÁNG GIÁ “NGÀY CHUNG ĐÔI” – CÙNG LOU
									STUDIO – SUMMER 2019{" "}
								</a>
							</div>
						</div>
					</div>

					<div className="BoxRight">
						<div className="ImgBox">
							<img
								src="https://loustudio.vn/wp-content/uploads/2019/06/48143480807_b8d2b51a12_o-960x750.jpg"
								alt=""
							/>
						</div>

						<div className="ContentBox">
							<div className="InfoBox">
								<div className="Author">
									{" "}
									<i className="fas fa-user-alt"></i> Admin
								</div>
								<div className="Time">
									{" "}
									<i className="far fa-clock"></i> Tháng 6
								</div>
								<div className="TotalLike">
									{" "}
									<i className="far fa-heart"></i> 2
								</div>
								<div className="TotalComment">
									{" "}
									<i className="far fa-comment"></i>1
								</div>
							</div>
							<div className="TitleBox">
								<a href="/">
									TRẢI NGHIỆM CƯỚI ĐÁNG GIÁ “NGÀY CHUNG ĐÔI” – CÙNG LOU
									STUDIO – SUMMER 2019{" "}
								</a>
							</div>
						</div>
					</div>
			
			 */}
				</div>
			</div>
		</div>
	);
}

export default ClientBlog;
