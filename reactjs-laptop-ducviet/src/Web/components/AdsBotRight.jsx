import React from "react";
import {
  ICON_CHEVRON_LEFT_24,
  ICON_CHEVRON_RIGHT_24,
} from "../../asset/imageJs/index";
import "./AdsBotRight.scss";
const AdsBotRight = () => {
  return (
    <div className="AdsBotRight">
      <input type="checkbox" id="AdsBotRightCheckBox" />
      <label className="btn btn__toggle" htmlFor="AdsBotRightCheckBox">
        <span className="left">
          <ICON_CHEVRON_LEFT_24 />
        </span>
        <span className="right">
          <ICON_CHEVRON_RIGHT_24 />
        </span>
      </label>

      <img src="https://picsum.photos/500/500" alt="" />
    </div>
  );
};

export default AdsBotRight;
