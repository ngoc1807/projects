import React from "react";
import CategoryListBooking from "./category";
import ContentListBooking from "./content";
import "./ListBooking.scss";
function ListBooking(props) {
	return (
		<div className="listBooking container-fluid">
			<div className="row">
				<ContentListBooking />
				<CategoryListBooking />
			</div>
		</div>
	);
}

export default ListBooking;
