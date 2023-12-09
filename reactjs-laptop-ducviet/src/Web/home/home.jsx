import React from "react";

import ItemFirst from "./components/ItemFirst";
import "./home.scss";
import BestsellerHome from "./components/BestsellerHome";
import BestsellerHomeSlide from "./components/BestsellerHomeSlide";
import LaptopHome from "./components/LaptopHome";
import ItemSecondHome from "./components/ItemSecond";
import ViewedProductsHome from "./components/ViewedProductsHome";
import ViewedBlogHome from "./components/ViewedBlogHome";

import Footer from "../../components/Footer";
import LogoBanner from "./components/LogoBanner";
import SummaryBlogHome from "./components/SummaryBlogHome";
import CriterionHome from "./components/CriterionHome";
// import AdsTopRight from "./../components/AdsTopRight";
// import AdsBotRight from "./../components/AdsBotRight";
// import AdsBotLeft from "./../components/AdsBotLeft";
import AdsTop from "./../components/AdsTop";
import Header from "../components/Header";
// import CompareProductHome from "./components/CompareProductHome";

const Home = (props) => {
  return (
    <>
      <AdsTop />
      <Header />
      {/* <AdsTopRight /> */}
      {/* <AdsBotRight /> */}
      {/* <AdsBotLeft /> */}
      <section className="HomeWeb">
        {/* <CompareProductHome /> */}
        <ItemFirst />
        <LogoBanner />
        <BestsellerHome />
        <BestsellerHomeSlide />
        <LaptopHome />

        <ItemSecondHome />
        <ViewedProductsHome />
        <SummaryBlogHome />

        <ViewedBlogHome />
        <CriterionHome />
      </section>
      <Footer />
    </>
  );
};

export default Home;
