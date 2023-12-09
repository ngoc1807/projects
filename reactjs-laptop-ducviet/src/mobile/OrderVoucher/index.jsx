import React from "react";

import { HeaderMobile2 } from "../components/header2";
import FooterItem from "./FooterItem";

import FormItem from "./FormItem";

function OrderMobile(props) {
  return (
    <>
      <HeaderMobile2 label="Đơn hàng" />
      <section className="OrderVoucherMobile">
        <FormItem />
        <FooterItem />
      </section>
    </>
  );
}

export default OrderMobile;
