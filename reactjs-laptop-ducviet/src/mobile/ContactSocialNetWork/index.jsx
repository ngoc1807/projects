import React from "react";
import { HeaderMobile } from "../components/header";
import FooterMobile from "../components/footer";
import Content from "./Content";
const ContactSocialNetWorkMobile = () => {
  return (
    <>
      <HeaderMobile type={5} title="Kết nối với chúng tôi" />

      <section className="ContactSocialNetWorkMobile">
        <Content />
      </section>
    </>
  );
};

export default ContactSocialNetWorkMobile;
