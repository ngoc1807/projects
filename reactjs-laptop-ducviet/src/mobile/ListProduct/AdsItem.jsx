import React from "react";
import "./AdsItem.scss";
function AdsItem(props) {
  return (
    <div className="AdsItem container-fluid">
      <div className="row">
        <div className="col-12 box ">
          <img
            src="https://picsum.photos/600/400
"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AdsItem;
