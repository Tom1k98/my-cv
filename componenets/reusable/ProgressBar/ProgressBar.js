import React, { useEffect, useState } from "react";
import pbStyles from "./ProgressBar.module.scss";
import { useInView } from "react-intersection-observer";

const ProgressBar = ({ text, value }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={pbStyles.pbcontainer}>
      <span className={pbStyles.pbtext}>{text}</span>
      <div className={pbStyles.pbBar}>
        <div
          style={{ width: `${value}%` }}
          className={inView && pbStyles.pbBarInner}
        ></div>
      </div>
      <div className={pbStyles.pbtext}>{value}%</div>
    </div>
  );
};

export default ProgressBar;
