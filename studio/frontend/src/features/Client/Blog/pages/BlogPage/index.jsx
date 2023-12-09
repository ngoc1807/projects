import ClientBreadcrumb from "components/Breadcrumb";
import ClientFooter from "components/Footer";
import ClientNavBar from "components/NavBar";
// import ClientPagination from "components/Pagination";
import ClientBanner from "features/Client/Album/pages/Album/Banner";
import React from "react";
import ListBlog from "../../components/ListBlog";

function BlogPage(props) {
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

			<section>
				<ListBlog />
			</section>

			{/* <section>
        <ClientPagination />
      </section> */}

			<section>
				<ClientFooter />
			</section>
		</div>
	);
}

export default BlogPage;
