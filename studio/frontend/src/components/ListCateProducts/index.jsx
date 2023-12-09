import React from "react";

import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./ListCateProducts.scss";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

function ListCateProducts(props) {
  const { menuSelected } = props;
  console.log(menuSelected, "aa", typeof menuSelected);
  const rootSubmenuKeys = ["HomeProducts", "dress", "camera", "tool"];

  const [openKeys, setOpenKeys] = useState(["dress"]);

  const onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(openKeys);
    } else {
      setOpenKeys({ openKeys: latestOpenKey ? [latestOpenKey] : [] });
    }
  };
  return (
    <div className="CategoryProducts col-12">
      <Menu
        style={{ width: "auto" }}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={[`${menuSelected}`]}
        // defaultOpenKeys={["HomeProducts"]}
        defaultSelectedKeys={[
          `${menuSelected} : ${menuSelected} ? "HomeProducts" `,
        ]}
        mode="inline"
      >
        <Menu.Item
          className="HomeProducts"
          icon={<AppstoreOutlined />}
          key="HomeProducts"
        >
          {" "}
          Trang chủ sản phẩm
        </Menu.Item>
        <SubMenu key="dress" icon={<MailOutlined />} title="Váy cưới">
          <Menu.Item key="longDress">
            <Link to={`/home/products/listproducts/longDress`}>Váy dài</Link>
          </Menu.Item>
          <Menu.Item key="2">Váy ngắn</Menu.Item>
          <Menu.Item key="3">Váy màu</Menu.Item>
          <Menu.Item key="4">Váy thiết kế</Menu.Item>
        </SubMenu>
        <SubMenu key="camera" icon={<AppstoreOutlined />} title="Máy ảnh">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        </SubMenu>
        <SubMenu key="tool" title="Phụ Kiện" icon={<AppstoreOutlined />}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default ListCateProducts;
