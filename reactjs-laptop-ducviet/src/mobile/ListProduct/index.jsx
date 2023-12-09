import React from "react";
import FooterMobile from "../components/footer";

import { HeaderMobile } from "../components/header";
import AdsItem from "./AdsItem";
import ItemList from "./ItemList";
import ItemFilter from "./ItemFilter";
import BannerItem from "./BannerItem";

import "./ListProductMobile.scss";
const ListProductMobile = () => {
  return (
    <>
      <HeaderMobile />
      <div className="ListProductMobile">
        <AdsItem />
        <ItemFilter />
        <ItemList />
        <BannerItem />
      </div>
      <FooterMobile />
    </>
  );
};

export default ListProductMobile;
