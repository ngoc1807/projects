import React from "react";

import Content from "./Content";

import { HeaderMobile } from "../components/header";

function NewsDetailMobile(props) {
  return (
    <>
      <HeaderMobile type={3} title="Tin khuyễn mãi" />
      <section className="NewsDetailMobile">
        <Content />
      </section>
    </>
  );
}

export default NewsDetailMobile;
