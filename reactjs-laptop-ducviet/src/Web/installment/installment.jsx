import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./InstallmentWeb.scss";
import Breadcrumb from "./../components/Breadcrumb/index";
import TitleItem from "./components/TitleItem";
import PaymentsItem from "./components/PaymentsItem";
import PaymentsInfo from "./components/PaymentsInfo";
import PaymentsInfo2 from "./components/PaymentsInfo2";

const InstallmentWeb = () => {
  return (
    <>
      <Header />
      <section className="InstallmentWeb">
        <Breadcrumb />
        <div className="ContentItem">
          <TitleItem />
          <PaymentsItem />
          <PaymentsInfo />
          <PaymentsInfo2 />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InstallmentWeb;
