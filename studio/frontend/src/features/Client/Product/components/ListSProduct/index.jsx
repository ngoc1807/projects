import LogosProduct from "components/LogosProduct";
import React from "react";
import Category from "./Category";
import Content from "./Content";

import "./ListProduct.scss";
function ListProducts(props) {
  return (
    <section className="ListProducts">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-3 col-md-12 contentProduct ">
            <Category />
          </div>
          <div className="col-lg-9 col-md-12 listProduct ">
            <Content />
          </div>
          <div className="col-lg-12 logoProduct ">
            <LogosProduct />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListProducts;
