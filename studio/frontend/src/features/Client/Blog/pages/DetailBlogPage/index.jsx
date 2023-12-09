import ClientBreadcrumb from "components/Breadcrumb";
import ClientFooter from "components/Footer";
import ClientNavBar from "components/NavBar";
import ClientBanner from "features/Client/Album/pages/Album/Banner";
import React from "react";
import DetailBlog from "../../components/DetailBlog";

function DetailBlogPage(props) {
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
        <DetailBlog />
      </section>

      <section>
        <ClientFooter />
      </section>
    </div>
  );
}

export default DetailBlogPage;
