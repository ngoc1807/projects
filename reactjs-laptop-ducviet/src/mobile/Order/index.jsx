import React from "react";

import FormItem from "./components/FormItem";
import "./OrderMobile.scss";

import { HeaderMobile } from "../components/header";
import FooterHome from "../Home/FooterHome";
import FooterItem from "../Home/FooterItem";
import Breadcrumb from "./../components/breadcrumb";
import TitleItem from "./components/TitleItem";

function OrderMobile(props) {
  return (
    <>
      <HeaderMobile />
      <section className="OrderMobile">
        <Breadcrumb />
        <div className="ContentItem">
          <TitleItem />
          <FormItem />
        </div>
      </section>
      <FooterItem />
      <FooterHome position="relative" />
    </>
  );
}

export default OrderMobile;
