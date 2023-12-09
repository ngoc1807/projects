import React from "react";
import HeaderCustom from "../../components/Header/index";

import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import Content from "./Content";

function NewsWeb(props) {
  return (
    <>
      <HeaderCustom />
      <section className="NewsWeb">
        <Breadcrumb />
        <Content />
      </section>

      <Footer />
    </>
  );
}

export default NewsWeb;
