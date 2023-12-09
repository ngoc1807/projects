import { Dropdown, Menu, message } from "antd";
import React, { useState, useEffect } from "react";
import "./content.scss";

import MaybeYouLikeTour from "../maybeyoulike";
import { useParams } from "react-router";
import tourApi from "api/tourApi";
import { getStorage, randomShortArrayTour } from "utils/common";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import reactParser from "react-html-parser";
import { handleSale, numberWithCommas } from "utils/common";
import ModalDetailBooking from "../Modal";
import BookingComment from "../comments";
import FormCommentBooking from "../FormComent";
import { useDispatch } from "react-redux";
import { fetchCommentClientData } from "app/actions/commentAction";
import { useSelector } from "react-redux";
function ContentDetailBooking(props) {
	const { detailBookingId } = useParams();
	const dispatch = useDispatch();

	const [detailTour, setDetailTour] = useState({ tour: "", list: [] });
	const { list, tour } = detailTour;
	const dataComment = useSelector((state) => state.comment.comment);
	const dataCommentTemp = useSelector((state) => state.comment.temp);
	console.log(dataComment, "aa");
	console.log(dataCommentTemp, "aa1");

	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleModal = (value) => {
		const a = getStorage("id");

		if (!a) {
			return message.error("Bạn phải đăng nhập để đặt lịch");
		} else {
			setIsModalVisible(true);
		}
	};

	const showModal = (v) => {
		setIsModalVisible(false);
	};

	useEffect(() => {
		getDetail();
	}, []);

	const getDetail = async () => {
		const res = await tourApi.getOne(detailBookingId);
		// console.log(res, "res");
		if (res.status === "success") {
			// setDetailTour(res.data);
			const a = randomShortArrayTour(res.data, 4);

			setDetailTour({
				tour: res.data,
				list: a,
			});
		}

		const b = {
			type: "booking",
			CommentId: detailBookingId,
		};
		dispatch(fetchCommentClientData(b));
	};

	let images = list && list.map((i) => ({ src: i }));

	const menu = (
		<Menu className="listShare">
			<Menu.Item key="0" className="listShare-items">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="#"
					className="facebook"
				>
					<i className="fab fa-facebook-f "></i>
				</a>
			</Menu.Item>
			<Menu.Item key="1" className="listShare-items">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="#"
					className="twitter"
				>
					<i className="fab fa-twitter "></i>
				</a>
			</Menu.Item>
			<Menu.Item key="2" className="listShare-items">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="#"
					className="google"
				>
					<i className="fab fa-google "></i>
				</a>
			</Menu.Item>
			<Menu.Item key="3" className="listShare-items">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="#"
					className="instagram"
				>
					<i className="fab fa-instagram "></i>
				</a>
			</Menu.Item>
		</Menu>
	);

	return (
		<div className="col-lg-12 ContentDetailBooking  ">
			<div className="boxContent-Header">
				<div className="box-title">
					<p>{tour ? tour.title : ""}</p>

					<div className="like">
						<i
							className="far fa-heart"
							data-toggle="tooltip"
							data-placement="top"
							title="Thả tim !!!"
						></i>
					</div>
					<div className="share">
						<Dropdown overlay={menu} placement="bottomLeft">
							<i
								className="fas fa-share ant-dropdown-link"
								onClick={(e) => e.preventDefault()}
								data-toggle="tooltip"
								data-placement="top"
								title="Chia sẻ !!!"
							></i>
						</Dropdown>
					</div>
				</div>
				<div className="box-rating">
					<div>
						<i className="fas fa-star active"></i>
						<i className="fas fa-star active"></i>
						<i className="fas fa-star active"></i>
						<i className="fas fa-star active"></i>
						<i className="fas fa-star active"></i>
					</div>
					<div className="count"> from 7 reviews </div>
				</div>
				<div className="box-place">
					<i className="fas fa-map-marker-alt"></i>
					{tour && tour.Booking_NN_Place.map((i) => i.name + " ")}
				</div>
				<div className="row headerContent ">
					<div className="col-lg-4 col-md-12">
						<div className="box-desc">
							<div className="title">Tổng quát</div>

							<div className="desc-items">
								<div className="item">
									<i className="far fa-calendar-alt"></i>
									<div className="text">
										<div className="name">Giờ chụp</div>
										<div className="content">
											{tour ? tour.duration : ""} tiếng
										</div>
									</div>
								</div>
								<div className="item">
									<i className="fas fa-camera "></i>
									<div className="text">
										<div className="name">Kiểu chụp</div>
										<div className="content">
											{tour ? tour.Booking_NN_Cate[0].name : ""}
										</div>
									</div>
								</div>
								<div className="item">
									<i className="fas fa-user-friends"></i>
									<div className="text">
										<div className="name"> Đi cùng </div>
										<div className="content">
											{" "}
											{tour ? tour.people : ""} Người{" "}
										</div>
									</div>
								</div>

								<div className="item">
									<i className="fas fa-tshirt"></i>
									<div className="text">
										<div className="name"> Trang phục </div>
										<div className="content">
											{" "}
											{tour && tour.clothes
												? "Shop chuẩn bị"
												: "Khách chuẩn bị"}{" "}
										</div>
									</div>
								</div>
							</div>

							{/* <div className="title">Đánh giá</div>
							<div className="desc-reviews">
								
								<div className="item">
									<div className="label">
										<span> Ảnh</span>
										<span>2/5</span>
									</div>
									<Progress percent={80} showInfo={false} />
								</div>

								<div className="item">
									<div className="label">
										<span>Dịch vụ</span>
										<span>2/5</span>
									</div>
									<Progress percent={40} showInfo={false} />
								</div>

								<div className="item">
									<div className="label">
										<span> Địa điểm </span>
										<span>2.3/5</span>
									</div>
									<Progress percent={50} showInfo={false} />
								</div>

								<div className="item">
									<div className="label">
										<span> MakeUp </span>
										<span>2/5</span>
									</div>
									<Progress percent={50} showInfo={false} />
								</div>
							</div>
							 */}

							<div className="title"> Giá tiền </div>
							<div className="price">
								<div className="oldPrice">
									{tour ? numberWithCommas(tour.price) : ""} đ
								</div>
								<div className="newPrice">
									{tour ? handleSale(tour.price, tour.sale) : ""} đ
								</div>
							</div>

							<div className="btnBooking">
								<button
									onClick={() => handleModal()}
									className="btn btn-warning text-white"
								>
									Đặt lịch
								</button>

								<ModalDetailBooking
									isModalVisible={isModalVisible}
									handleShowModal={showModal}
									data={tour}
								/>
							</div>
						</div>
					</div>
					<div className="col-lg-8 col-md-12">
						<div className="boxSlideShow w-100">
							<Carousel shouldLazyLoad={true} images={images} />
						</div>
					</div>
				</div>
			</div>
			<div className="boxContent-Desc">
				<div className="title">Giới thiệu</div>
				<div className="content">
					{tour ? reactParser(tour.desc) : null}
				</div>
			</div>

			<BookingComment
				dataComment={dataComment}
				dataCommentTemp={dataCommentTemp}
			/>
			<FormCommentBooking />
			<MaybeYouLikeTour />
		</div>
	);
}

export default ContentDetailBooking;
