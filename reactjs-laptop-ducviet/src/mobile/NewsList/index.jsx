import React from "react";

import Content from "./Content";
import { HeaderMobile } from "../components/header";
function NewsListMobile(props) {
  return (
    <>
      <HeaderMobile type={3} title="Tin khuyễn mãi" />
      <section className="NewsListMobile">
        <Content />
      </section>
    </>
  );
}

export default NewsListMobile;
