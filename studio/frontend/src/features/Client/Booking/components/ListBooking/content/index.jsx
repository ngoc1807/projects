import React from "react";

import "./content.scss";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spin } from "antd";
import { fetchTourUserData } from "app/actions/tourAction";
import { handleSale, numberWithCommas } from "utils/common";
function ContentListBooking(props) {
	const match = useRouteMatch();
	const dispatch = useDispatch();

	const dataTour = useSelector((items) => items.tour.tour);
	const loading = useSelector((items) => items.tour.loading);

	// console.log(dataTour);
	// console.log(loading);
	useEffect(() => {
		dispatch(fetchTourUserData());
	}, []);
	return (
		<div className="content col-lg-9 col-md-12">
			<div className="title">
				<p>Danh sách các gói chụp</p>
			</div>

			<div className="row">
				{loading ? (
					<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
						<Spin className="mt-5" />
					</div>
				) : (
					dataTour &&
					dataTour.length > 0 &&
					dataTour.map((item, index) => (
						<div
							key={index}
							className="trending-item col-lg-4 col-md-12 "
						>
							<div className="box">
								<div className="box-img">
									<Link to={`${match.url}/${item.id}`}>
										<img src={item.image} alt="" />
										<div className="category">
											{item.Booking_NN_Cate[0].name}
										</div>
										<div className="sale">
											<div>{item.sale}% </div>
										</div>
									</Link>
								</div>

								<div className="box-desc">
									<div className="place">
										<i className="fas fa-map-marker-alt"></i>
										{item.Booking_NN_Place.map((i) => i.name + " ")}
									</div>
									<div className="boxTitle">
										<a href={`/home/booking/${item.id}`}>
											{item.title}
										</a>
									</div>
									<div className="rating">
										<div>
											<i className="fas fa-star active"></i>
											<i className="fas fa-star active"></i>
											<i className="fas fa-star active"></i>
											<i className="fas fa-star active"></i>
											<i className="fas fa-star"></i>
										</div>
										<div className="count"> 7 Reviews </div>
									</div>

									<div className="oldPrice">
										{numberWithCommas(item.price) + " " + "đ"}
									</div>

									<div className="time">
										<div className="duration">
											<i className="far fa-clock"></i>{" "}
											{item.duration} giờ
										</div>

										<div className="newPrice">
											{handleSale(item.price, item.sale)}đ
										</div>
									</div>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
}

export default ContentListBooking;
