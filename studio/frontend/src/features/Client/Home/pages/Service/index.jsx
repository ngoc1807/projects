import React from "react";
import "./Service.scss";

function ClientService(props) {
	return (
		<div className="configService container-fluid ">
			<div className="row">
				<div className="title text-center col-12 ">
					<p>Giới thiệu</p>
					<h3>DỊCH VỤ NỔI BẬT</h3>
				</div>

				<div className="body container ">
					<div className="row">
						<div className="body-content store col-sm-12 col-md-4">
							<div className="store">
								<div className="store-img">
									<div className="top">
										<i className="fas far fa-image"></i>
									</div>
								</div>
								<div className="store-text">
									<h4> Thư viện ảnh </h4>
									<p>
										Album ảnh của gia đình, album cưới, album lớp, sổ
										lưu niệm hay làm quà tặng cho bạn bè, người thân,
										người yêu… rất ý nghĩa, độc đáo và ấn tượng.
									</p>
									<a href="/home/album">
										{" "}
										Read more{" "}
										<i
											className="fa fa-arrow-right"
											aria-hidden="true"
										></i>{" "}
									</a>
								</div>
							</div>
						</div>

						<div className="body-content booking col-sm-12  col-md-4">
							<div className="booking">
								<div className="booking-img">
									<div className="top">
										<i className="fas fa-camera"></i>
									</div>
								</div>
								<div className="booking-text">
									<h4> Đặt lịch chụp </h4>
									<p>
										Với kinh nghiệm 4 năm chụp ảnh của Studio sẽ cũng
										cấp các gói chụp đáp ứng nhu cầu mọi người. Với uy
										tín, chất lượng cao, mạng lại sự hài lòng về hình
										ảnh cũng như quá trình chụp.
									</p>
									<a href="/home/booking">
										{" "}
										Read more{" "}
										<i
											className="fa fa-arrow-right"
											aria-hidden="true"
										></i>{" "}
									</a>
								</div>
							</div>
						</div>

						<div className="body-content makeup col-sm-12  col-md-4">
							<div className="makeup">
								<div className="makeup-img">
									<div className="top">
										<i className="fas fa-newspaper	"></i>
									</div>
								</div>
								<div className="makeup-text">
									<h4> Bài viết </h4>
									<p>
										Mỗi quyển album sẽ là một câu chuyện về tình bạn,
										tình yêu, gia đình, con yêu, những chuyến đi chơi
										đầy thú vị, những kỷ niệm đáng nhớ trong đời. Đó
										sẽ là một món quà ý nghĩa với những hình ảnh ngộ
										nghĩnh, những lời chúc tốt đẹp, những khoảng khắc
										tuyệt vời trong cuộc sống thông qua các bài viết.
									</p>
									<a href="/home/blog">
										{" "}
										Read more{" "}
										<i
											className="fa fa-arrow-right"
											aria-hidden="true"
										></i>{" "}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ClientService;
