import React from "react";
import { ListProductsCustom } from "../../components/ListProductsCustom";

function CompareProducts(props) {
  return (
    <div className="CompareProduct">
      <ListProductsCustom amount={5} type={3} title="Sản phẩm đã xem" />
    </div>
  );
}

export default CompareProducts;
