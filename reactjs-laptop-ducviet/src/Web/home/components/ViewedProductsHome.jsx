import React from "react";
import ListProductViewed from "../../components/ListProductViewed";

const ViewedProductsHome = (props) => {
  return (
    <div className="ViewedProductsHome">
      <ListProductViewed amount={5} title="Sản phẩm đã xem" />
    </div>
  );
};

export default ViewedProductsHome;
