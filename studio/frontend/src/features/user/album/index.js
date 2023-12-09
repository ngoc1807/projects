import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./AlbumContent.scss";
import { fetchAlbumUserDataProfile } from "app/actions/albumAction";
import { useEffect } from "react";
import { Spin } from "antd";
import { getStorage } from "utils/common";
function AlbumForUser(props) {
	const match = useRouteMatch();
	const dispatch = useDispatch();

	const dataAlbum = useSelector((items) => items.album.album);
	const loading = useSelector((items) => items.album.loading);
	useEffect(() => {
		const a = getStorage("id");
		dispatch(fetchAlbumUserDataProfile(a));
	}, []);

	return (
		<div className="OrderAdmin">
			<div className="text-center heading">
				<h2 style={{ fontWeight: "bolder" }}> Danh sách Album</h2>
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

			<div className="AlbumLeft row">
				{loading ? (
					<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
						<Spin className="mt-5" />
					</div>
				) : (
					dataAlbum &&
					dataAlbum.map((item, index) => (
						<div className="col-md-12  col-lg-3 " key={index}>
							<div className="Box ">
								<div className="imgBox">
									<img src={item.avatar} alt="" />
									<div className="linkBox"></div>

									<Link
										to={`${match.url}/DetailAlbumForUser/${item.id}`}
									></Link>
								</div>
								<div className="descBox">
									<div className="name">
										<span> {item.name} </span>
										<br />
										<span>{item.Album_Imgs.length} ảnh</span>
									</div>
									<div className="icon">
										<span>{item.like}</span>
										<a
											href="/"
											data-placement="right"
											data-toggle="tooltip"
											title="Thả tim!"
										>
											<i className="far fa-heart"></i>
										</a>
										<a
											href="/"
											data-placement="right"
											data-toggle="tooltip"
											title="Tải xuống!"
										>
											<i className="fas fa-download"></i>
										</a>
										<a
											href="/"
											data-placement="right"
											data-toggle="tooltip"
											title="Chia sẻ!"
										>
											<i className="fas fa-share"></i>
										</a>
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

export default AlbumForUser;
