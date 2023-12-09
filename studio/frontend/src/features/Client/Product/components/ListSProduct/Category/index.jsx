import ListCateProducts from "components/ListCateProducts";
import React from "react";
import { useRouteMatch } from "react-router-dom";
import "./Category.scss";

function Category(props) {
	const match = useRouteMatch();
	return (
		<div className="configCategory">
			<div className="row">
				<ListCateProducts menuSelected={match.params.menuSelected} />
				<div className="ratingFilter col-12">
					<div className="title">
						<p>Bán chạy nhất</p>
					</div>
					<div className="box">
						<div className="ratingFive">
							<a href="/">
								<i className="fas fa-star active"></i>
								<i className="fas fa-star active"></i>
								<i className="fas fa-star active"></i>
								<i className="fas fa-star active"></i>
								<i className="fas fa-star active"></i>
								<div>( 5 sao )</div>
							</a>
						</div>
						<div className="ratingFour">
							<a href="/">
								<i className="fas fa-star active"></i>
								<i className="fas fa-star active"></i>
								<i className="fas fa-star active"></i>
								<i className="fas fa-star active"></i>
								<i className="fas fa-star"></i>
								<div>(Từ 4 sao )</div>
							</a>
						</div>
						<div className="ratingThere">
							<a href="/">
								<i className="fas fa-star active"></i>
								<i className="fas fa-star active"></i>
								<i className="fas fa-star active"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<div>(Từ 3 sao )</div>
							</a>
						</div>
						<div className="ratingTwo">
							<a href="/">
								<i className="fas fa-star active"></i>
								<i className="fas fa-star active"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<div>(Từ 2 sao )</div>
							</a>
						</div>

						<div className="ratingOne">
							<a href="/">
								<i className="fas fa-star active"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<div>(Từ 1 sao )</div>
							</a>
						</div>
					</div>
				</div>

				<div className="priceRangerFilter col-12">
					<div className="title">
						<p>Giá</p>
					</div>

					<div className="box">
						<input
							type="number"
							className="form-control"
							placeholder="$0"
							min="0"
						></input>
						-{" "}
						<input
							type="number"
							className="form-control"
							placeholder="$999"
							max="999"
						></input>
					</div>
					<button className="btn  w-100">OK</button>
				</div>

				<div className="trademarkFilter col-12">
					<div className="title">
						<p>Thương hiệu</p>
					</div>
					<div className="box">
						<div>
							<a href="/"> abc(123) </a>
						</div>
						<div>
							<a href="/"> abc(123) </a>
							<div>
								<a href="/"> abc(123) </a>
							</div>
							<div>
								<a href="/"> abc(123) </a>
							</div>
						</div>
					</div>
				</div>
				<div className="colorFilter col-12">
					<div className="title">
						<p>Màu sắc</p>
					</div>
					<div className="box">
						<div>
							<a href="/"> abc(123) </a>
						</div>
						<div>
							<a href="/"> abc(123) </a>
							<div>
								<a href="/"> abc(123) </a>
							</div>
							<div>
								<a href="/"> abc(123) </a>
							</div>
						</div>
					</div>
				</div>
				<div className="sizeFilter col-12">
					<div className="title">
						<p>Thương hiệu</p>
					</div>
					<div className="box">
						<div>
							<a href="/"> abc(123) </a>
						</div>
						<div>
							<a href="/"> abc(123) </a>
							<div>
								<a href="/"> abc(123) </a>
							</div>
							<div>
								<a href="/"> abc(123) </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Category;
