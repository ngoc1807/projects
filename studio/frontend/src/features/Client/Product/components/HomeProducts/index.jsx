import React from "react";
import ContentProduct from "./Content";
import Category from "./Category";

import "./HomeProducts.scss";
import LogosProduct from "components/LogosProduct";
function HomeProducts(props) {
  return (
    <section className="HomeProducts">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-3 col-md-12 contentProduct ">
            <Category />
          </div>
          <div className="col-lg-9 col-md-12 listProduct ">
            <ContentProduct />
          </div>
          <div className="col-lg-12 logoProduct ">
            <LogosProduct />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeProducts;
