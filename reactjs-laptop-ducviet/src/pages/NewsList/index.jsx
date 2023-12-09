import React from "react";
import HeaderCustom from "../../components/Header/index";

import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import Content from "./Content";

function NewsListWeb(props) {
  return (
    <>
      <HeaderCustom />
      <section className="NewsListWeb">
        <Breadcrumb />
        <Content />
      </section>

      <Footer />
    </>
  );
}

export default NewsListWeb;
