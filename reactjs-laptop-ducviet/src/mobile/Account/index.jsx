import React from "react";
import { HeaderMobile } from "../components/header";
import FooterMobile from "../components/footer";
import Content from "./Content";
const AccountMobile = () => {
  return (
    <>
      <HeaderMobile type={4} title="Tài khoản" />

      <section className="AccountMobile">
        <Content />
      </section>

      <FooterMobile />
    </>
  );
};

export default AccountMobile;
