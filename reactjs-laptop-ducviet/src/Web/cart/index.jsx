import React from "react";

import Footer from "../../components/Footer";
import Breadcrumb from "./../components/Breadcrumb/index";
import TableCart from "./TableCart";
import FormItem from "./FormItem";

import "./CartWeb.scss";
import Payment from "./Payment";

import AdsTop from "../components/AdsTop";
import Header from "../components/Header";

function CartWeb(props) {
  return (
    <>
      <AdsTop />
      <Header />
      <section className="CartWeb">
        <Breadcrumb />
        <TableCart />
        <FormItem />
        <Payment />
      </section>

      <Footer />
    </>
  );
}

export default CartWeb;
