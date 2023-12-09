import React from "react";
import "./check-box-custom.scss";
export function CheckBoxCustom({
  label,
  color,
  type,
  pl,
  defaultChecked,
  pr,
  styleLabel,
}) {
  switch (type) {
    case 1:
      return (
        <div className="CheckBoxBundleProductCustom">
          <label className="containerLabel" style={{ color: color }}>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      );

    case 2:
      return (
        <div className="CheckBoxCustom">
          <label
            className="containerLabel"
            style={styleLabel ? styleLabel : null}
          >
            {label}
            <input
              type="checkbox"
              defaultChecked={defaultChecked ? true : false}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      );

    default:
      return (
        <div className="CheckBoxCustom">
          <label
            className="containerLabel"
            style={styleLabel ? styleLabel : null}
          >
            {label}
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      );
  }
}

// export function RadioBoxCustom({ label, name }) {
//   return (
//     <div className="RadioBoxCustom">
//       <label class="container">
//         {label}
//         <input type="radio" checked="checked" name={name} />
//         <span class="checkmark"></span>
//       </label>

//       <label class="container">
//         Two
//         <input type="radio" name="radio" />
//         <span class="checkmark"></span>
//       </label>
//     </div>
//   );
// }
