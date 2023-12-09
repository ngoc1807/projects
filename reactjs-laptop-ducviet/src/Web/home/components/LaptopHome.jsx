import React from "react";
import ListProductItem from "../../components/ListProductItem";

const LaptopHome = (props) => {
  return (
    <div className="LaptopHome">
      <ListProductItem amount={5} type={1} title="Laptop" />
    </div>
  );
};

export default LaptopHome;
