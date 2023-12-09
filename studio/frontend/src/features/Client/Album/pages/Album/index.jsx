import React from "react";

import "./Album.scss";
// import ClientPagination from "components/Pagination";
import AlbumContent from "./AlbumContent";
import AlbumCategory from "./AlbumCategory";

function ListAlbum(props) {
	return (
		<section className="Album-content">
			<div className="row">
				<div className=" right col-lg-9  col-md-12 ">
					<AlbumContent />
					{/* <ClientPagination /> */}
				</div>
				<div className=" left col-lg-3 col-md-12">
					<AlbumCategory />
				</div>
			</div>
		</section>
	);
}

export default ListAlbum;
