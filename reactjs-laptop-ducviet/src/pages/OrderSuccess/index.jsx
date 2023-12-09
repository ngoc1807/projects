import React from "react";
import HeaderCustom from "./../../components/Header/index";

import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import Content from "./Content";

function OrderSuccessWeb(props) {
  return (
    <div>
      <>
        <HeaderCustom />
        <section className="OrderSuccessWeb">
          <Breadcrumb />
          <Content />
        </section>

        <Footer />
      </>
    </div>
  );
}

export default OrderSuccessWeb;
