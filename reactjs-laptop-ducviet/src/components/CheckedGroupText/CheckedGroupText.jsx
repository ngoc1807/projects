import React from "react";
import "./CheckedGroupText.scss";

const CheckedGroupText = ({ id, data, number } = {}) => {
  const a = number ? number : 7;
  return (
    <div className="checked-group-text" id={id}>
      {data?.length > 0 &&
        data.map((v, k) => (
          <div
            className={`item ${(k + 1) % a ? "" : "no-left"} ${
              v.active ? "active" : ""
            }`}
            key={k}
          >
            {v.src ? (
              <div className="item-image">
                <img src={v.src} />
              </div>
            ) : null}

            {v.text || null}
          </div>
        ))}
    </div>
  );
};

export default CheckedGroupText;
