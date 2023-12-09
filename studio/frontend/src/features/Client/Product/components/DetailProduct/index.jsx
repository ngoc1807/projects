import React from "react";
import "./DetailProduct.scss";
import Info from "./Info";
import Review from "./Review";
import Desc from "./Desc";
import LogosProduct from "components/LogosProduct";

function DetailProduct(props) {
  return (
    <div className="DetailProduct">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-12 infoProduct ">
            <Info />
          </div>
          <div className="col-lg-12 descProduct ">
            <Desc />
          </div>
          <div className="col-lg-12 reviewProduct ">
            <Review />
          </div>
          <div className="col-12 pt-5">
            <LogosProduct />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
