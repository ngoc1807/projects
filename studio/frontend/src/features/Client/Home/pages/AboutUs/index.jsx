import React from "react";
import "./AboutUs.scss";
import AboutUsBG from "assets/images/about.jpg";
function ClientAboutUs(props) {
	const StyleNew = {
		background: `url(${AboutUsBG})  no-repeat top `,
		backgroundSize: "cover",
	};
	return (
		<div className="configAboutUs container-fluid" style={StyleNew}>
			<div className="row">
				<div className="title text-center col-12 ">
					<p>Giới thiệu</p>
					<h3>về chúng tôi</h3>
				</div>
			</div>
			<div className="row">
				<div className="container">
					<div className=" body-content col-md-6 col-sm-12 ">
						<h4>
							Xin chào , chúng tôi là chững nhiếp ảnh gia chuyên nghiệp{" "}
						</h4>
						<p>
							Hya Studio cho thuê váy cưới Studio được thành lập năm 2017
							. Trải qua nhiều thăng trầm của lịch sử thương hiệu và
							ngành chụp ảnh chung đã nhanh chóng trở thành ảnh viện nổi
							tiếng. Với tiêu chí đẹp, sang trọng và gợi cảm, ảnh viện áo
							cưới Studio luôn mong muốn các cô gái trẻ tìm thấy trong bộ
							ảnh cưới của mình. Hya Studio ngày nay đã trở thành một cái
							tên quen thuộc, là nơi thường xuyên được tìm đến của các
							đôi bạn trẻ muốn ghi dấu kỷ niệm đẹp của cuộc đời.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ClientAboutUs;
