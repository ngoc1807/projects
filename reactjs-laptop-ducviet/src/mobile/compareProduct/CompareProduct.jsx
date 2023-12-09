import React from "react";
import { HeaderMobile } from "../components/header";

import FooterItem from "./FooterItem";

import "./compareProduct.scss";
import FooterHome from "./FooterHome";
import ContentItem from "./ContentItem";
import ViewedProducts from "./ViewedProducts";

function CompareProduct(props) {
  return (
    <>
      <HeaderMobile />
      <div className="CompareProduct">
        <div className="content">
          <ContentItem />
          <ContentItem />
        </div>
        <ViewedProducts />

        <FooterItem />
        <FooterHome />
      </div>
    </>
  );
}

export default CompareProduct;
