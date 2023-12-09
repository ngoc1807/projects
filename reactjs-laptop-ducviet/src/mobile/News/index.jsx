import React from "react";
import { HeaderMobile } from "../components/header";
import Content from "./Content";
import FooterMobile from "../components/footer";
function NewsMobile(props) {
  return (
    <>
      <HeaderMobile type={3} title="Tin khuyễn mãi" />
      <section className="NewsMobile">
        <Content />
      </section>
      <FooterMobile />
    </>
  );
}

export default NewsMobile;
