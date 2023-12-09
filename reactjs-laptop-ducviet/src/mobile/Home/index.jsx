import React from "react";
import { HeaderMobile } from "../components/header";
import SlideItem from "./SlideItem";
// import ProductItem from "./ProductItem";
// import AdsItem from "./AdsItem";
// import ViewedProducts from "./ViewedProducts";
import LogoBanner from "./LogoBanner";
import Highlight from "./HighlightItem";
import VideoItem from "./VideoItem";
import NewsItem from "./NewsItem";
// import FooterItem from "./FooterItem";

import "./home-mobile.scss";
// import FooterHome from "./FooterHome";
// import CompareProductHome from "./CompareProductHome";
// import ProductItemBG from "./ProductItemBG";

function HomeMobile(props) {
  return (
    <>
      <HeaderMobile />
      <div className="HomeMobile">
        <SlideItem />
        <LogoBanner />
        {/* <ProductItemBG
          color={"linear-gradient(180deg, #c4433c 0%, hsl(3, 72%, 35%) 100%);"}
        />
        <ProductItemBG
          color={"linear-gradient(180deg, #21242B 0%, #45464A 100%);"}
        />
        <ProductItem />

        <AdsItem />
        <ViewedProducts /> */}

        <VideoItem />
        <NewsItem />
        <Highlight />
        {/* <CompareProductHome />
        <FooterItem />
        <FooterHome /> */}
      </div>
    </>
  );
}

export default HomeMobile;
