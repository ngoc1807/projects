import React from "react";

// import ItemFirst from "./ItemFirst";
// import ItemSecond from "./ItemSecond";
import ItemFilter from "./ItemFilter";
// import ItemList from "./ItemList";

import "./list-product.scss";
// import Header from "../../Web/components/Header";
// import Footer from "../../Web/components/Footer";
// import ListProductViewed from "../../Web/components/ListProductViewed";
// import Breadcrumb from "../../Web/components/Breadcrumb";
function ListProducts(props) {
  return (
    <>
      {/* <Header /> */}
      <section className="ListProductsWeb">
        {/* <Breadcrumb /> */}
        {/* <ItemSecond /> */}
        <ItemFilter />

        {/* <ItemList /> */}
        {/* <ItemFirst /> */}
        {/* <ListProductViewed /> */}
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default ListProducts;
