import React from "react";
import Breadcrumb from "./../components/Breadcrumb/index";
import Footer from "./../components/Footer";
import Header from "./../components/Header/index";
import ListProductViewed from "../components/ListProductViewed";
import "./CompareProductWeb.scss";
import ContentItem from "./components/ContentItem";
const CompareProductWeb = () => {
  return (
    <>
      <Header />
      <div className="CompareProductWeb">
        <Breadcrumb />
        <ContentItem />
        <ListProductViewed />
      </div>
      <Footer />
    </>
  );
};

export default CompareProductWeb;
