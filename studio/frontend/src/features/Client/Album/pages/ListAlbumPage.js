import ClientBreadcrumb from "components/Breadcrumb";
import ClientFooter from "components/Footer";
import ClientNavBar from "components/NavBar";
import React from "react";
import ListAlbum from "./Album";
import ClientBanner from "./Album/Banner";

// import PropTypes from "prop-types";

MainPageAlbum.propTypes = {};

function MainPageAlbum(props) {
	return (
		<div>
			<header>
				<ClientNavBar />
			</header>
			<section>
				<ClientBanner />
			</section>

			<section>
				<ClientBreadcrumb />
			</section>

			<ListAlbum />

			<section>
				<ClientFooter />
			</section>
		</div>
	);
}

export default MainPageAlbum;
