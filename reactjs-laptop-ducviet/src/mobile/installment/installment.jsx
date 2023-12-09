import React from "react";

import { HeaderMobile } from "../components/header";
import FooterHome from "../Home/FooterHome";
import FooterItem from "../Home/FooterItem";
import "./InstallmentMobile.scss";
import Breadcrumb from "../components/breadcrumb";
import TitleItem from "./components/TitleItem";
import PaymentsItem from "./components/PaymentsItem";
import PaymentsInfo from "./components/PaymentsInfo";
import PaymentsInfo2 from "./components/PaymentsInfo2";

const InstallmentMobile = () => {
  return (
    <>
      <HeaderMobile />
      <section className="InstallmentMobile">
        <Breadcrumb />
        <div className="ContentItem">
          <TitleItem />
          <PaymentsItem />
          <PaymentsInfo />
          <PaymentsInfo2 />
        </div>
      </section>
      <FooterItem />
      <FooterHome position="relative" />
    </>
  );
};

export default InstallmentMobile;
