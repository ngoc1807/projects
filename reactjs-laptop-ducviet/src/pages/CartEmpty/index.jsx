import React from "react";
import HeaderCustom from "./../../components/Header/index";

import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import Content from "./Content";

function CartEmptyWeb(props) {
  return (
    <div>
      <>
        <HeaderCustom />
        <section className="CartEmptyWeb">
          <Breadcrumb />
          <Content />
        </section>

        <Footer />
      </>
    </div>
  );
}

export default CartEmptyWeb;
