import React from "react";
import Breadcrumb from "../components/breadcrumb";
import CommentCustom from "../components/Comment";
// import FooterCart from "../components/FooterCart";
import { HeaderMobile } from "../components/header";
// import { HeaderMobile2 } from "../components/header2";
// import CompareProductHome from "../Home/CompareProductHome";
import FooterHome from "../Home/FooterHome";
import FooterItem from "../Home/FooterItem";
import NewsItem from "../Home/NewsItem";
import BundleProducts from "./BundleProducts";
// import CompareProduct from "./CompareProduct";
import DescProductItem from "./DescProductItem";
import DetailProductItem from "./DetailProductItem";
import ImageDetailItem from "./ImageDetailItem";
import InfoProductItem from "./InfoProductItem";
import QuestionItem from "./QuestionItem";

import "./DetailProductMobile.scss";
import SimilarProduct from "./SimilarProduct";
const DetailProductMobile = () => {
  return (
    <>
      {/* <HeaderMobile2 label="Chi tiết sản phẩm" /> */}
      <HeaderMobile />
      <div className="DetailProductMobile">
        <Breadcrumb />
        <ImageDetailItem />
        <DetailProductItem />

        <BundleProducts />
        <InfoProductItem />
        <DescProductItem />

        <QuestionItem />

        <CommentCustom title="Đánh giá và thắc mắc" />
        <SimilarProduct title="Sản phẩm tương tự" />
        <SimilarProduct />
        <NewsItem />
        <FooterItem />
        <FooterHome position="relative" />
      </div>
    </>
  );
};

export default DetailProductMobile;
