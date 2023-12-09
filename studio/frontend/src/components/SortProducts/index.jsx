import React from "react";
import "./SortProducts.scss";
import { Select } from "antd";

const { Option } = Select;

function index(props) {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="SortProducts w-100">
      <div className="text">Sắp xếp theo :</div>
      <div className="method">
        <Select
          defaultValue="lucy"
          //   style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    </div>
  );
}

export default index;
