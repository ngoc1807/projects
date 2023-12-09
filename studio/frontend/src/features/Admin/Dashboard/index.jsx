import React from "react";

import dashboardApi from "api/dashboardApi";

import "./DashboardAdmin.scss";
import { Link } from "react-router-dom";

function DashboardAdmin(props) {
	const [state, setState] = React.useState([]);
	React.useEffect(() => {
		const fetchTotalDashboard = async () => {
			const res = await dashboardApi.countTotal();
			// console.log(res.data);
			if (res.status === "success") {
				setState(res.data);
			}
		};

		fetchTotalDashboard();
	}, []);

	// console.log(state[0].image, "state");
	return (
		<>
			<div className="text-center heading">
				<h2 style={{ fontWeight: "bolder" }}> Thống kê </h2>
				<div className="d-flex justify-content-center ">
					<hr
						style={{
							width: "15%",
							backgroundColor: "#ffa801",
							padding: "0.2px 0",
						}}
					/>
				</div>
			</div>

			<div className="container-fluid DashboardAdmin pt-5 ">
				<div className="row">
					<div className="col-md-6 pt-3 col-lg-3 col-sm-12">
						<div className="box image">
							<div className="box__content">
								<div className="box__content-title">
									<p>Ảnh</p>
									<h1>{state ? state.image : 0} </h1>
								</div>
								<div className="box__content-image">
									<i className="far fa-image"></i>
								</div>
							</div>

							<Link to="/admin/album" className="box__footer">
								<div className="box__footer-link">Album</div>
								<i className="fa fa-arrow-right" aria-hidden="true"></i>
							</Link>
						</div>
					</div>
					<div className="col-md-6 pt-3 col-lg-3 col-sm-12">
						<div className="box album">
							<div className="box__content">
								<div className="box__content-title">
									<p>Album</p>
									<h1>{state ? state.album : 0} </h1>
								</div>
								<div className="box__content-image">
									<i className="far fa-image"></i>
								</div>
							</div>

							<Link to="/admin/album" className="box__footer">
								<div className="box__footer-link">Album</div>
								<i className="fa fa-arrow-right" aria-hidden="true"></i>
							</Link>
						</div>
					</div>
					<div className="col-md-6 pt-3 col-lg-3 col-sm-12">
						<div className="box blog">
							<div className="box__content">
								<div className="box__content-title">
									<p>Bài viết</p>
									<h1>{state ? state.blog : 0} </h1>
								</div>
								<div className="box__content-image">
									<i className="fas fa-newspaper"></i>
								</div>
							</div>

							<Link to="/admin/blog" className="box__footer">
								<div className="box__footer-link">Blog</div>
								<i className="fa fa-arrow-right" aria-hidden="true"></i>
							</Link>
						</div>
					</div>

					<div className="col-md-6 pt-3 col-lg-3 col-sm-12">
						<div className="box booking">
							<div className="box__content">
								<div className="box__content-title">
									<p>Gói chụp</p>
									<h1>{state ? state.tour : 0} </h1>
								</div>
								<div className="box__content-image">
									<i className="fas fa-plane"></i>
								</div>
							</div>

							<Link to="/admin/tour" className="box__footer">
								<div className="box__footer-link">Gói chụp</div>
								<i className="fa fa-arrow-right" aria-hidden="true"></i>
							</Link>
						</div>
					</div>

					<div className="col-md-6 pt-3 col-lg-3 col-sm-12">
						<div className="box order">
							<div className="box__content">
								<div className="box__content-title">
									<p>Đặt lịch</p>
									<h1>{state ? state.order : 0} </h1>
								</div>
								<div className="box__content-image">
									<i className="fas fa-shopping-cart"></i>
								</div>
							</div>

							<Link to="/admin/order" className="box__footer">
								<div className="box__footer-link">Order</div>
								<i className="fa fa-arrow-right" aria-hidden="true"></i>
							</Link>
						</div>
					</div>

					<div className="col-md-6 pt-3 col-lg-3 col-sm-12">
						<div className="box comment">
							<div className="box__content">
								<div className="box__content-title">
									<p>Comment</p>
									<h1>{state ? state.comment : 0} </h1>
								</div>
								<div className="box__content-image">
									<i className="fas fa-comments"></i>
								</div>
							</div>

							<Link to="/admin/comment" className="box__footer">
								<div className="box__footer-link">Comment</div>
								<i className="fa fa-arrow-right" aria-hidden="true"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default DashboardAdmin;
