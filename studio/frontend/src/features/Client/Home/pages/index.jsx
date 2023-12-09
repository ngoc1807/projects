import ClientFooter from "components/Footer";
import ClientNavBar from "components/NavBar";
import React from "react";
import ClientAboutUs from "./AboutUs";
import ClientBanner from "./Banner";
import ClientBlog from "./Blog";
import ClientCounter from "./Counter";
import ClientHighlight from "./Highlight";
import ClientService from "./Service";
import ClientStore from "./Store";

function MainPageHome(props) {
	return (
		<div>
			<header>
				<ClientNavBar />
			</header>
			<section>
				<ClientBanner />
			</section>
			<section>
				<ClientAboutUs />
			</section>
			<section>
				<ClientService />
			</section>
			<section>
				<ClientCounter />
			</section>
			<section>
				<ClientHighlight />
			</section>
			<section>
				<ClientStore />
			</section>
			<section>
				<ClientBlog />
			</section>
			<section>
				<ClientFooter />
			</section>
		</div>
	);
}

export default MainPageHome;
