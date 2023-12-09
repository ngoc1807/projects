import React from "react";

import a3 from "assets/images/album6.jpg";

import "./Banner.scss";

function ClientBanner(props) {
  return (
    <div className="configAlbumBanner container-fluid">
      <img src={a3} alt="" />
    </div>
  );
}

export default ClientBanner;
