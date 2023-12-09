import React from "react";
import {
  ICON_ARROW_LEFT_16,
  ICON_ARROW_RIGHT_16,
  ICON_CHECKED_16,
  ICON_LOCATION_LINE,
  ICON_STAR_16,
  ICON_CHECK_CIRCLE_16,
  ICON_CART_24,
  ICON_CLOSE_24,
  ICON_ARROW_DOWN_24,
  ICON_ARROW_UP_24,
} from "../../../asset/imageJs";
import LeftItemProductCompare from "../../components/LeftItemProductCompare/LeftItemProductCompare";
import RightProductDetail from "../../components/RightProductDetail/RightProductDetail";
const ContentItem = () => {
  return (
    <div className="ContentItem">
      {/* <div className="ItemLeft"> */}
      <LeftItemProductCompare />
      <LeftItemProductCompare />
      {/* </div> */}
      {/* <RightProductDetail /> */}
    </div>
  );
};

export default ContentItem;
