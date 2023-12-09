import React from "react";
import HeaderCustom from "./../../components/Header/index";

import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import TableCart from "./TableCart";
import FormItem from "./FormItem";

function CartWeb(props) {
  return (
    <>
      <HeaderCustom />
      <section className="CartWeb">
        <Breadcrumb />
        <TableCart />
        <FormItem />
      </section>

      <Footer />
    </>
  );
}

export default CartWeb;
