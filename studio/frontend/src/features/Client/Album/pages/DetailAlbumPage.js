import ClientBreadcrumb from "components/Breadcrumb";
import ClientFooter from "components/Footer";
import ClientNavBar from "components/NavBar";
import ClientPagination from "components/Pagination";
import React from "react";
import DetailAlbum from "./DetailAlbum";

// import PropTypes from "prop-types";

MainPageDetailAlbum.propTypes = {};

function MainPageDetailAlbum(props) {
	return (
		<div>
			<header>
				<ClientNavBar />
			</header>

			<section>
				<ClientBreadcrumb />
			</section>

			<section>
				<DetailAlbum />
			</section>
			<section>{/* <ClientPagination /> */}</section>

			<section>
				<ClientFooter />
			</section>
		</div>
	);
}

export default MainPageDetailAlbum;
