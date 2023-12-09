import React from "react";
import {
  IMAGE_PARTNER1,
  IMAGE_PARTNER2,
  IMAGE_PARTNER3,
  IMAGE_PARTNER4,
  IMAGE_PARTNER5,
  IMAGE_PARTNER6,
  IMAGE_PARTNER7,
} from "../../asset/imageJs";

const LogoBanner = () => {
  return (
    <div className="LogoBanner ">
      <div className="box">
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER1} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER2} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER3} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER4} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER5} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER6} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER7} alt="" />
        </a>
      </div>
    </div>
  );
};

export default LogoBanner;
