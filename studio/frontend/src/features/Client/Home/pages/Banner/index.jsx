import React from "react";

import banner1 from "assets/images/banner1.jpg";
import banner2 from "assets/images/banner2.jpg";
import banner3 from "assets/images/banner3.jpg";

import banner4 from "assets/images/banner4.jpg";

import "./Banner.scss";

function ClientBanner(props) {
	return (
		<div className="configBanner container-fluid">
			<div
				id="carouselIndicators"
				className="carousel slide"
				data-ride="carousel"
			>
				<ol className="carousel-indicators">
					<li
						data-target="#carouselIndicators"
						data-slide-to="0"
						className="active"
					></li>
					<li data-target="#carouselIndicators" data-slide-to="1"></li>
					<li data-target="#carouselIndicators" data-slide-to="2"></li>
					<li data-target="#carouselIndicators" data-slide-to="3"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							className="d-block w-100"
							src={banner1}
							alt="First slide"
						/>
						<div className="carousel-caption d-none d-md-block">
							<p
								style={{
									color: "white",
									fontWeight: "500",
									fontSize: "18px",
									animation: "fadeRight 3s forwards",
								}}
							>
								PHOTO BY HYA STUDIO
							</p>
							<h2
								style={{
									fontWeight: "900",
									color: "white",
									fontSize: "35px",
									animation: "fadeLeft 4s forwards",
								}}
							>
								ART OF BLACK AND WHITE
							</h2>
						</div>
					</div>

					<div className="carousel-item">
						<img
							className="d-block w-100"
							src={banner3}
							alt="Second slide"
						/>
						<div className="carousel-caption d-none d-md-block">
							<p
								style={{
									color: "white",
									fontWeight: "500",
									fontSize: "18px",
									animation: "fadeRight 3s forwards",
								}}
							>
								PHOTO BY HYA STUDIO
							</p>
							<h2
								style={{
									fontWeight: "900",
									color: "white",
									fontSize: "35px",
									animation: "fadeRight 4s forwards",
								}}
							>
								ART OF THE OUTSIDE
							</h2>
						</div>
					</div>

					<div className="carousel-item">
						<img
							className="d-block w-100"
							src={banner2}
							alt="Second slide"
						/>
						<div className="carousel-caption d-none d-md-block">
							<p
								style={{
									color: "white",
									fontWeight: "500",
									fontSize: "18px",
									animation: "fadeLeft 3s forwards",
								}}
							>
								PHOTO BY HYA STUDIO
							</p>
							<h2
								style={{
									fontWeight: "900",
									color: "white",
									fontSize: "35px",
									animation: "fadeLeft 4s forwards",
								}}
							>
								ART OF THE FASHION
							</h2>
						</div>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src={banner4}
							alt="Second slide"
						/>
						<div className="carousel-caption d-none d-md-block">
							<p
								style={{
									color: "white",
									fontWeight: "500",
									fontSize: "18px",
									animation: "fadeLeft 3s forwards",
								}}
							>
								PHOTO BY HYA STUDIO
							</p>
							<h2
								style={{
									fontWeight: "900",
									color: "white",
									fontSize: "35px",
									animation: "fadeRight 4s forwards",
								}}
							>
								ART OF THE WEDDING
							</h2>
						</div>
					</div>
				</div>

				<a
					className="carousel-control-prev"
					href="#carouselIndicators"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselIndicators"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
}

export default ClientBanner;
