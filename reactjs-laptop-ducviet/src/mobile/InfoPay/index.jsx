import React from "react";
import { HeaderMobile } from "../components/header";

import Content from "./Content";
const InfoPayMobile = () => {
  return (
    <>
      <HeaderMobile type={5} title="Thông tin thanh toán" />

      <section className="InfoPayMobile">
        <Content />
      </section>
    </>
  );
};

export default InfoPayMobile;
