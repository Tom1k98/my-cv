import React from "react";
import pbStyles from "./ProgressBar.module.scss";

const ProgressBar = ({ text, value }) => {
  return (
    <div className={pbStyles.pbcontainer}>
      <span className={pbStyles.pbtext}>{text}</span>
      <div className={pbStyles.pbBar}>
        <div
          style={{ width: `${value}%` }}
          className={pbStyles.pbBarInner}
        ></div>
      </div>
      <div className={pbStyles.pbtext}>{value}%</div>
    </div>
  );
};

export default ProgressBar;
