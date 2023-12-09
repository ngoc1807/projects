import React from "react";
import "./Category.scss";
import ListCateProducts from "components/ListCateProducts";

import OwlCarousel from "react-owl-carousel";

function Category(props) {
	return (
		<div className="configCategory">
			<div className="row">
				<ListCateProducts />
				{/*  */}
				<div className="BestSellers col-12">
					<div className="title">
						<p>Bán chạy nhất</p>
					</div>

					<div className="row box">
						<div className="box-img col-6">
							<a href="/">
								<img
									src="http://demo.posthemes.com/pos_sagitta17/38-home_default/printed-dress.jpg"
									alt=""
								/>
							</a>
						</div>
						<div className="box-desc col-6">
							<div className="name">
								<a href="/">Printed Dress</a>
							</div>
							<div className="price">
								<div className="newPrice">$100</div>
								<div className="oldPrice">$259.9</div>
							</div>
							<div className="addCart">
								<a href="/">
									<i className="fas fa-plus"></i>
									Thêm vào giỏ hàng
								</a>
							</div>
						</div>
					</div>
					<div className="row box">
						<div className="box-img col-6">
							<a href="/">
								<img
									src="http://demo.posthemes.com/pos_sagitta17/38-home_default/printed-dress.jpg"
									alt=""
								/>
							</a>
						</div>
						<div className="box-desc col-6">
							<div className="name">
								<a href="/">Printed Dress</a>
							</div>
							<div className="price">
								<div className="newPrice">$100</div>
								<div className="oldPrice">$259.9</div>
							</div>
							<div className="addCart">
								<a href="/">
									<i className="fas fa-plus"></i>
									Thêm vào giỏ hàng
								</a>
							</div>
						</div>
					</div>
					<div className="row box">
						<div className="box-img col-6">
							<a href="/">
								<img
									src="http://demo.posthemes.com/pos_sagitta17/38-home_default/printed-dress.jpg"
									alt=""
								/>
							</a>
						</div>
						<div className="box-desc col-6">
							<div className="name">
								<a href="/">Printed Dress</a>
							</div>
							<div className="price">
								<div className="newPrice">$100</div>
								<div className="oldPrice">$259.9</div>
							</div>
							<div className="addCart">
								<a href="/">
									<i className="fas fa-plus"></i>
									Thêm vào giỏ hàng
								</a>
							</div>
						</div>
					</div>
				</div>
				{/*  */}

				<div className="HostDeals col-12">
					<div className="title">
						<p>Ưu đãi</p>
					</div>

					<OwlCarousel
						loop={true}
						margin={10}
						nav={false}
						dotsSpeed={800}
						dragEndSpeed={800}
						items={1}
						className="owl-carousel owl-theme"
					>
						<div className="box">
							<div className="imgBox">
								<img
									src="http://demo.posthemes.com/pos_sagitta17/24-home_default/printed-chiffon-dress.jpg"
									alt=""
								/>
								<a href="/"> </a>

								<div className="sale">
									<span>-5%</span>
								</div>

								<div
									className="addCart"
									data-toggle="tooltip"
									data-placement="top"
									title="Thêm vào giỏ hàng"
								>
									<a href="google.com">
										<i className="fas fa-shopping-cart"></i>
									</a>
								</div>
							</div>
							<div className="descBox">
								<div className="name">adobe dress</div>
								<div className="descPrice">
									<div className="price">
										<div className="newPrice">$100</div>
										<div className="oldPrice">$259.9</div>
									</div>

									<div className="rating">
										<i className="fas fa-star active"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="box">
							<div className="imgBox">
								<img
									src="http://demo.posthemes.com/pos_sagitta17/24-home_default/printed-chiffon-dress.jpg"
									alt=""
								/>
								<a href="/"> </a>

								<div className="sale">
									<span>-5%</span>
								</div>

								<div
									className="addCart"
									data-toggle="tooltip"
									data-placement="top"
									title="Thêm vào giỏ hàng"
								>
									<a href="google.com">
										<i className="fas fa-shopping-cart"></i>
									</a>
								</div>
							</div>
							<div className="descBox">
								<div className="name">adobe dress</div>
								<div className="descPrice">
									<div className="price">
										<div className="newPrice">$100</div>
										<div className="oldPrice">$259.9</div>
									</div>

									<div className="rating">
										<i className="fas fa-star active"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
									</div>
								</div>
							</div>
						</div>
					</OwlCarousel>
				</div>

				<div className="LatestBlog col-12 ">
					<div className="title">
						<p>Bài viết mới</p>
					</div>
					<OwlCarousel
						loop={true}
						margin={10}
						nav={false}
						dotsSpeed={800}
						dragEndSpeed={800}
						items={1}
						className="owl-carousel owl-theme"
					>
						<div className="box">
							<div className="imgBox">
								<img
									src="http://demo.posthemes.com/pos_sagitta17/24-home_default/printed-chiffon-dress.jpg"
									alt=""
									className="img-thumbnail"
								/>
							</div>

							<div className="desc">
								<div className="titleDesc">
									<a href="/"> This is Secound Post For XipBlog</a>
								</div>
								<div className="text">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the
									industrys standard dummy text ever since the
								</div>
								<div className="footerDesc">
									<div className="time">
										<i className="fas fa-calendar-alt"></i>
										10/7/2019
									</div>
									<div className="author">
										<i className="fas fa-user-alt"></i> Mavis
									</div>
								</div>
							</div>
						</div>
						<div className="box">
							<div className="imgBox">
								<img
									src="http://demo.posthemes.com/pos_sagitta17/24-home_default/printed-chiffon-dress.jpg"
									alt=""
									className="img-thumbnail"
								/>
							</div>

							<div className="desc">
								<div className="titleDesc">
									<a href="/"> This is Secound Post For XipBlog</a>
								</div>
								<div className="text">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the
									industrys standard dummy text ever since the
								</div>
								<div className="footerDesc">
									<div className="time">
										<i className="fas fa-calendar-alt"></i>
										10/7/2019
									</div>
									<div className="author">
										<i className="fas fa-user-alt"></i> Mavis
									</div>
								</div>
							</div>
						</div>
						<div className="box">
							<div className="imgBox">
								<img
									src="http://demo.posthemes.com/pos_sagitta17/24-home_default/printed-chiffon-dress.jpg"
									alt=""
									className="img-thumbnail"
								/>
							</div>

							<div className="desc">
								<div className="titleDesc">
									<a href="/"> This is Secound Post For XipBlog</a>
								</div>
								<div className="text">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the
									industrys standard dummy text ever since the
								</div>
								<div className="footerDesc">
									<div className="time">
										<i className="fas fa-calendar-alt"></i>
										10/7/2019
									</div>
									<div className="author">
										<i className="fas fa-user-alt"></i> Mavis
									</div>
								</div>
							</div>
						</div>
					</OwlCarousel>
				</div>

				{/*  */}
			</div>
		</div>
	);
}

export default Category;
