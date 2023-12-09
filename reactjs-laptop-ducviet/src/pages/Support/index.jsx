import React from "react";
import HeaderCustom from "./../../components/Header/index";

import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import Content from "./Content";
import ItemSecond from "./ItemSecond";
import ItemNews from "./ItemNews";

function SupportWeb(props) {
  return (
    <>
      <HeaderCustom />
      <section className="SupportWeb">
        <Breadcrumb />
        <Content />
        <ItemSecond />
        <ItemNews />
      </section>

      <Footer />
    </>
  );
}

export default SupportWeb;
