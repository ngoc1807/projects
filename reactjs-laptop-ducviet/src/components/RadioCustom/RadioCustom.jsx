import React from "react";
import "./RadioCustom.scss";
const RadioCustom = ({
  styleLabel,

  title,
  name = "radio",
  defaultChecked,
}) => {
  return (
    <label style={styleLabel} className="RadioCustom">
      {title || ""}
      <input
        type="radio"
        name={name}
        defaultChecked={defaultChecked ? true : false}
      />
      <span className="checkmark" />
    </label>
  );
};

export default RadioCustom;
