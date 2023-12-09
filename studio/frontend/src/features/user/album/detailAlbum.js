import React from "react";

import "./DetailAlbum.scss";

import iso from "assets/images/icons/iso.png";
import len from "assets/images/icons/lens.png";
import { useParams } from "react-router-dom";
import { Image } from "antd";
import { useEffect } from "react";
import albumApi from "api/albumApi";
import { useState } from "react";
import { getStorage } from "utils/common";

function DetailAlbumForUser(props) {
	const { id } = useParams();
	const [detailAlbum, setDetailAlbum] = useState("");
	const [link, setLink] = useState("");
	useEffect(() => {
		getDetail();
	}, []);

	const getDetail = async () => {
		const a = {
			UserId: getStorage("id"),
			AlbumId: id,
		};

		const res = await albumApi.getOneUserAlbumDetail(a);
		// console.log(res, "res");
		if (res.status === "success") {
			setDetailAlbum(res.data.Album);
			setLink(res.data.linkDrive);
		}
	};

	return (
		<div className="DetailAlbumForUser container-fluid">
			<div className="Box">
				<div className="row">
					<div className=" BoxLeft col-md-12 col-lg-8 p-0">
						<div className="ImgBox">
							<img src={detailAlbum.avatar} alt="" />
						</div>
					</div>

					<div className=" BoxRight col-md-12 col-lg-4 p-0">
						<div className="BoxDesc">
							<div className="Name">{detailAlbum.name}</div>
							<div className="Desc">{detailAlbum.desc}</div>
							<div className="Author">
								<i> — {detailAlbum.author}</i>
							</div>
							<div className="Icon">
								<div>
									<i className="fas fa-camera"></i>
									{detailAlbum.camera_name}

									{/* Canon PowerShot S95 */}
								</div>
								<div>
									<i className="fas fa-eye"> </i>
									{/* 22.5 */}
									{detailAlbum.camera_eyes}
									mm
								</div>
								<div>
									<img src={len} alt="" /> ƒ/{detailAlbum.camera_len}
									{/* 5.6 */}
								</div>
								<div>
									<i className="fas fa-stopwatch"></i> 1/1000
								</div>

								<div>
									<img src={iso} alt="" /> {detailAlbum.camera_iso}
								</div>
							</div>
						</div>

						<div className="BoxFooter">
							<div className="BoxTag">
								<ul className="ListTag">
									{detailAlbum &&
										detailAlbum.Album_NN_Cate.map((item, index) => (
											<li key={index}>
												<a href="/">#{item.name}</a>
											</li>
										))}

									{detailAlbum &&
										detailAlbum.Album_NN_Place.map((item, index) => (
											<li key={index}>
												<a href="/">#{item.name}</a>
											</li>
										))}
								</ul>
							</div>

							<div
								className="linkDrive"
								style={{ paddingRight: "30px" }}
							>
								<span> Đường dẫn : </span>
								<a
									href={`${link}`}
									target="_blank"
									style={{
										wordBreak: "break-word",
									}}
								>
									{link}
								</a>
							</div>

							<div className="Fun">
								<div>
									<span>2</span>
									<a
										href="/"
										data-placement="right"
										data-toggle="tooltip"
										title="Thả tim!"
									>
										{" "}
										<i className="far fa-heart"></i>{" "}
									</a>
								</div>

								<div>
									<a
										href="/"
										data-placement="right"
										data-toggle="tooltip"
										title="Tải Album!"
									>
										<i className="fas fa-download"></i>
									</a>
								</div>

								<div>
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
				</div>
			</div>

			<div className="TitleBox">
				{
					<div className="col-12 text-center">
						<p>Danh sách ảnh</p>
					</div>
				}
			</div>

			<div className="ListBox">
				<div className="row">
					<Image.PreviewGroup>
						{detailAlbum &&
							detailAlbum.Album_Imgs.map((item, index) => (
								<div
									className="col-lg-3 col-md-6 col-sm-12"
									key={index}
								>
									<div className="ListBox-item">
										<div>
											<Image
												src={item.image}
												alt=""
												className="img-thumbnail"
											/>
										</div>
									</div>
								</div>
							))}
					</Image.PreviewGroup>
				</div>
			</div>
		</div>
	);
}

export default DetailAlbumForUser;
