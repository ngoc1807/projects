import React from "react";

import Content from "./Content";
import { HeaderMobile } from "../components/header";
import FooterHome from "../Home/FooterHome";
import FooterItem from "../Home/FooterItem";
import "./OrderSuccessMobile.scss";
import Payment from "./Payment";

function OrderSuccessMobile(props) {
  return (
    <div>
      <>
        <HeaderMobile />
        <section className="OrderSuccessMobile">
          <Content />
          <Payment />
        </section>
        <FooterItem />
        <FooterHome position="relative" />
      </>
    </div>
  );
}

export default OrderSuccessMobile;
