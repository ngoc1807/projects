import React from "react";
import TableCart from "./CartItem";
import { HeaderMobile2 } from "../components/header2";
import FooterItem from "./FooterItem";

import "./CartMobile.scss";

function CartMobile(props) {
  return (
    <>
      <HeaderMobile2 label="Giỏ hàng" />
      <section className="CartMobile">
        <TableCart />
        <FooterItem />
      </section>
    </>
  );
}

export default CartMobile;
