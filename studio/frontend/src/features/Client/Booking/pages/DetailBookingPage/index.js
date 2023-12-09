import ClientBreadcrumb from "components/Breadcrumb";
import ClientFooter from "components/Footer";
import ClientNavBar from "components/NavBar";
import ClientBanner from "features/Client/Album/pages/Album/Banner";
import React from "react";
import DetailBooking from "../../components/DetailBooking";
function DetailBookingPage(props) {
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
        <DetailBooking />
      </section>

      <section>
        <ClientFooter />
      </section>
    </div>
  );
}

export default DetailBookingPage;
