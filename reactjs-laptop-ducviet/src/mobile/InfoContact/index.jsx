import React from "react";
import { HeaderMobile } from "../components/header";
import Content from "./Content";
const InfoContactMobile = () => {
  return (
    <>
      <HeaderMobile type={5} title="Thông tin liên hệ" />

      <section className="InfoContactMobile">
        <Content />
      </section>
    </>
  );
};

export default InfoContactMobile;
