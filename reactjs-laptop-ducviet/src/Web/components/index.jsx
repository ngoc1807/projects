import React from "react";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import AdsBotLeft from "./AdsBotLeft";
import AdsBotRight from "./AdsBotRight";
import AdsTop from "./AdsTop";
import AdsTopRight from "./AdsTopRight";
import Breadcrumb from "./Breadcrumb";
import LeftItemProductCompare from "./LeftItemProductCompare/LeftItemProductCompare";
import ListBlogViewed from "./ListBlogViewed";
import ListProductItem from "./ListProductItem";
import ListProductsChangeBG from "./ListProductsChangeBG";
import ListProductViewed from "./ListProductViewed";
import RightProductDetail from "./RightProductDetail/RightProductDetail";

const ListComponent = () => {
  return (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <AdsBotLeft />
      <Header />
      <AdsBotRight />
      <AdsTop />
      <AdsTopRight />
      <ListBlogViewed />
      <ListProductItem />
      <ListProductsChangeBG />
      <ListProductViewed />
      <Footer />
      <Breadcrumb />
      <RightProductDetail />
      <LeftItemProductCompare />
    </div>
  );
};

export default ListComponent;
