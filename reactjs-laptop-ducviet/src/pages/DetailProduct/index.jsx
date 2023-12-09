import React from "react";

import HeaderCustom from "./../../components/Header/index";

import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import DetailItem from "./DetailItem";
import DescItem from "./DescItem";
import CompareProducts from "./CompareProducts";
import CommentCustom from "../../components/CommentCustom";
import QuestionCustom from "../../components/QuestionCustom";
import BundledProducts from "./BundleProducts";
const DetailProduct = (props) => {
  return (
    <>
      <HeaderCustom />
      <section className="DetailProductWeb">
        <Breadcrumb />
        <DetailItem />

        <BundledProducts />

        <DescItem />

        <div className="QuestionProduct">
          <QuestionCustom />
        </div>

        <div className="ReviewAndComment">
          <CommentCustom title="ĐÁNH GIÁ VÀ THẮC MẮC" />
        </div>
        <CompareProducts />
      </section>

      <Footer />
    </>
  );
};

export default DetailProduct;
