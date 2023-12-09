import React from "react";
import { IMAGE_SLIDE_LEFT1 } from "./../../../asset/imageJs";

function ItemSecondHome(props) {
  return (
    <div className="ItemSecondHome">
      <div className="box">
        <a className="box__item">
          <img src={IMAGE_SLIDE_LEFT1} alt="" />
        </a>

        <a className="box__item">
          <img src={IMAGE_SLIDE_LEFT1} alt="" />
        </a>
      </div>
    </div>
  );
}

export default ItemSecondHome;
