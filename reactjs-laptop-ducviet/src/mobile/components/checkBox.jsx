import React from "react";
import "./CheckBoxCustom.scss";
export function CheckBoxCustom({ label, color, type, pl, checked, pr }) {
  switch (type) {
    case 1:
      return (
        <div className="CheckBoxBundleProductCustom">
          <label class="container" style={{ color: color }}>
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      );

    case 2:
      return (
        <div className="CheckBoxCustom">
          <label
            class="container"
            style={{ color: color, paddingLeft: pl, paddingRight: pr }}
          >
            {label}
            <input type="checkbox" checked={checked} />
            <span class="checkmark"></span>
          </label>
        </div>
      );

    default:
      return (
        <div className="CheckBoxCustom">
          <label class="container" style={{ color: color }}>
            {label}
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      );
  }
}

export function RadioBoxCustom({ label, name }) {
  return (
    <div className="RadioBoxCustom">
      <label class="container">
        {label}
        <input type="radio" checked="checked" name={name} />
        <span class="checkmark"></span>
      </label>

      <label class="container">
        Two
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
      </label>
    </div>
  );
}
