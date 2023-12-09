import React from "react";
import { ListProductsCustom } from "../../components/ListProductsCustom";

function CompareProducts(props) {
  return (
    <div className="CompareProduct">
      <ListProductsCustom amount={5} type={3} title="So sánh sản phẩm" />
    </div>
  );
}

export default CompareProducts;
