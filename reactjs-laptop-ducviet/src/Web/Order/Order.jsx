import React from "react";
import Footer from "../../components/Footer";
import AdsTop from "../components/AdsTop";
import AdsTopRight from "../components/AdsTopRight";
import Header from "../components/Header";
import "./OrderCartScreen.scss";
import Breadcrumb from "./../components/Breadcrumb/index";
import ContentItem from "./ContentItem";
const OrderCartScreen = () => {
  return (
    <>
      <AdsTop />
      <Header />
      {/* <AdsTopRight /> */}
      <section className="OrderCartScreen">
        <Breadcrumb />
        <ContentItem />
      </section>
      <Footer />
    </>
  );
};

export default OrderCartScreen;
