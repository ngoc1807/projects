import React from "react";
import { HeaderMobile } from "../components/header";
import "./Insurance.scss";
import FooterItem from "../Home/FooterItem";
import FooterHome from "../Home/FooterHome";
import { ICON_SEARCH_HOME } from "../../asset/imageJs";
const Insurance = () => {
  return (
    <>
      <HeaderMobile />
      <div className="InsuranceMobile">
        <div className="title">
          <span>Tra cứu thông tin bảo hành tại laptop đức việt</span>
        </div>
        <div className="hr">
          <div className="straight"></div>
        </div>
        <form action="">
          <div className="box">
            <input type="text" className="form-control" />
            <button className="btn ">
              <ICON_SEARCH_HOME />
            </button>
          </div>
        </form>

        <div className="list">
          <div className="item">
            <a href="/"> item 1 </a>{" "}
          </div>
          <div className="item">
            item 1 The example below uses a flexbox utility to vertically center
            the contents and changes .col to .col-auto so that your columns only
            take up as much space as needed. Put another way, the column sizes
            itself based on the contents.{" "}
          </div>
          <div className="item"> item 1 </div>
          <div className="item"> item 1 </div>
        </div>
      </div>

      <FooterItem />
      <FooterHome />
    </>
  );
};

export default Insurance;
