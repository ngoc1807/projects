import React from "react";
import {
  IMAGE_PARTNER1,
  IMAGE_PARTNER2,
  IMAGE_PARTNER3,
  IMAGE_PARTNER4,
  IMAGE_PARTNER5,
  IMAGE_PARTNER6,
  IMAGE_PARTNER7,
  IMAGE_PARTNER_HOVER1,
  IMAGE_PARTNER_HOVER2,
  IMAGE_PARTNER_HOVER3,
  IMAGE_PARTNER_HOVER4,
  IMAGE_PARTNER_HOVER5,
  IMAGE_PARTNER_HOVER6,
  IMAGE_PARTNER_HOVER7,
} from "../../../asset/imageJs";

const LogoBanner = () => {
  return (
    <div className="LogoBanner ">
      <div className="box">
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER1} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER1} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER2} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER2} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER3} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER3} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER4} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER4} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER5} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER5} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER6} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER6} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER7} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER7} alt="" />
        </a>
      </div>
    </div>
  );
};

export default LogoBanner;
