import React from "react";
import { HeaderMobile } from "../components/header";
import FooterMobile from "../components/footer";
import Content from "./Content";
const IntroduceMobile = () => {
  return (
    <>
      <HeaderMobile type={5} title="Giới thiệu công ty" />

      <section className="IntroduceMobile">
        <Content />
      </section>
    </>
  );
};

export default IntroduceMobile;
