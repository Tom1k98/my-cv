import React, { useEffect, useState } from "react";
import portfolioStyles from "./Portfolio.module.scss";
import { btn } from "./portfolioText";
const PortfolioBox = ({ img, heading, text, language }) => {
  const [getBtnText, setBtnText] = useState();
  useEffect(() => {
    setBtnText(language === "cz" ? btn.cz : btn.en);
  });
  return (
    <div className={portfolioStyles.portfoliobox}>
      <h4>{heading}</h4>
      <p className={portfolioStyles.text}>{text}</p>
      <div
        className={portfolioStyles.imgbox}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
        }}
      ></div>
      <a href="https://mtnetcode.com" target="_blank">
        <div className={portfolioStyles.btn}>{getBtnText}</div>
      </a>
    </div>
  );
};

export default PortfolioBox;
