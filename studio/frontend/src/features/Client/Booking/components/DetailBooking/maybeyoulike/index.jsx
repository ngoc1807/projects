import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spin } from "antd";
import { fetchTourUserData } from "app/actions/tourAction";
import { handleSale, numberWithCommas, randomArray } from "utils/common";
import { useState } from "react";
function MaybeYouLikeTour(props) {
	const match = useRouteMatch();
	const dispatch = useDispatch();

	const dataTour = useSelector((items) => items.tour.tour);
	const loading = useSelector((items) => items.tour.loading);
	const [state, setState] = useState();

	useEffect(() => {
		getHighlight();
	}, [dataTour]);

	const getHighlight = async () => {
		if (dataTour.length < 1) {
			dispatch(fetchTourUserData());
		} else {
			setState(dataTour);
		}
	};

	return (
		<div className="maybeyoulike">
			<div className="title">
				<p>Có thể bạn thích</p>
			</div>

			<div className="content row">
				{state ? (
					randomArray(state, 4).map((item, k) => (
						<div className="trending-item col-lg-3 col-md-12 " key={k}>
							<div className="box">
								<div className="box-img">
									<a href={`/home/booking/${item.id}`}>
										<img src={item.image} alt="" />
										<div className="category">
											{item.Booking_NN_Cate[0].name}
										</div>
										<div className="sale">
											<div>{item.sale}% </div>
										</div>
									</a>
								</div>

								<div className="box-desc">
									<div className="place">
										<i className="fas fa-map-marker-alt"></i>Nevada,
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
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
											<i className="fas fa-star"></i>
										</div>
										<div className="count"> 7 Reviews </div>
									</div>

									<div className="oldPrice">
										{" "}
										{numberWithCommas(item.price) + " " + "đ"}
									</div>

									<div className="time">
										<div className="duration">
											<i className="far fa-clock"></i>{" "}
											{item.duration} giờ
										</div>

										<div className="newPrice">
											{" "}
											{handleSale(item.price, item.sale)}đ
										</div>
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
						<Spin className="mt-5" size="small" />
					</div>
				)}
			</div>
		</div>
	);
}

export default MaybeYouLikeTour;
