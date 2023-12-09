import React, { useState, useEffect } from "react";
import "./Store.scss";

import { Spin } from "antd";
import { IMAGE_DEFAULT } from "utils/image";
import tourApi from "api/tourApi";
import { handleSale, numberWithCommas } from "utils/common";

function ClientStore(props) {
	const [state, setState] = useState({ cate: [], place: [] });
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getData();
	}, []);
	const getData = async () => {
		setLoading(true);
		const a = await tourApi.tourHomeAll();
		if (a.status === "success") {
			setState({
				cate: [a.data[0], a.data[1], a.data[2]],
				place: [a.data[3], a.data[4], a.data[5]],
			});
			setLoading(false);
		}
	};

	const { cate, place } = state;
	// console.log(state);
	return (
		<div className="configStore container-fluid ">
			<div className="row">
				<div className="title col-sm-12">
					<p>Giới thiệu </p>
					<h3>ĐẶT LỊCH STUDIO </h3>
				</div>
			</div>

			<div className="body container">
				<div className="row">
					<div className="BoxTitle col-12">Đặt lịch / Kiểu chụp</div>

					{loading ? (
						<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
							<Spin className="mt-5" />
						</div>
					) : (
						cate &&
						cate.length > 0 &&
						cate.map((i, k) => (
							<div className="DressBox col-md-4 col-sm-12" key={k}>
								<div className="ImgBox">
									{i.image ? (
										<img src={i.image} alt="dfg" />
									) : (
										<img src={IMAGE_DEFAULT} alt="dfg" />
									)}
									<div className="DetailBox">
										<a href={`/home/booking/${i.id}`}> Chi tiết </a>
									</div>
								</div>
								<div className="LineBox">
									<hr />
								</div>

								<div className="FooterBox">
									<div className="NameBox">{i.title}</div>
									<div className="PriceBox">
										<span className="PriceNewBox">
											{handleSale(i.price, i.sale)}đ
										</span>
										<span className="PriceOldBox">
											{numberWithCommas(i.price)}đ
										</span>
									</div>
								</div>
							</div>
						))
					)}

					<div className="BoxTitle col-12">Đặt lịch / Địa điểm</div>
					{loading ? (
						<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
							<Spin className="mt-5" />
						</div>
					) : (
						place &&
						place.length > 0 &&
						place.map((i, k) => (
							<div className="DressBox col-md-4 col-sm-12" key={k}>
								<div className="ImgBox">
									{i.image ? (
										<img src={i.image} alt="dfg" />
									) : (
										<img src={IMAGE_DEFAULT} alt="dfg" />
									)}
									<div className="DetailBox">
										<a href={`/home/booking/${i.id}`}> Chi tiết </a>
									</div>
								</div>
								<div className="LineBox">
									<hr />
								</div>

								<div className="FooterBox">
									<div className="NameBox">{i.title}</div>
									<div className="PriceBox">
										<span className="PriceNewBox">
											{handleSale(i.price, i.sale)}đ
										</span>
										<span className="PriceOldBox">
											{numberWithCommas(i.price)}đ
										</span>
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

export default ClientStore;
