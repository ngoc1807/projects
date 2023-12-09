import React from "react";
import "./AlbumContent.scss";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchAlbumUserData } from "app/actions/albumAction";
import { useEffect } from "react";
import { Spin } from "antd";
function AlbumContent(props) {
	const match = useRouteMatch();
	const dispatch = useDispatch();
	const dataAlbum = useSelector((items) => items.album.album);
	const loading = useSelector((items) => items.album.loading);
	useEffect(() => {
		dispatch(fetchAlbumUserData());
	}, []);

	// console.log(dataAlbum);
	return (
		<div className="AlbumLeft  container-fluid">
			<div className="row">
				<div className="title col-12 ">
					<div>Danh sách Album</div>
				</div>

				{loading ? (
					<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
						<Spin className="mt-5" />
					</div>
				) : (
					dataAlbum &&
					dataAlbum.map((item, index) => (
						<div className="col-md-12  col-lg-4 " key={index}>
							<div className="Box ">
								<div className="imgBox">
									<img src={item.avatar} alt="" />
									<div className="linkBox"></div>

									<Link to={`${match.url}/${item.id}`}></Link>
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

export default AlbumContent;
