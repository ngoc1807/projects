import React from "react";
import { HeaderMobile } from "../components/header";
import FooterMobile from "../components/footer";
import Content from "./Content";
const AddressSystemStoreMobile = () => {
  return (
    <>
      <HeaderMobile type={5} title="Hệ thống cửa hàng" />

      <section className="AddressSystemStoreMobile">
        <Content />
      </section>
    </>
  );
};

export default AddressSystemStoreMobile;
