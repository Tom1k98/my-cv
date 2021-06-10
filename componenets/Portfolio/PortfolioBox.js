import React, { useEffect, useState } from "react";
import portfolioStyles from "./Portfolio.module.scss";
import { btn } from "./portfolioText";
import { useInView } from "react-intersection-observer";

const PortfolioBox = ({ img, heading, text, language, imgpos, link }) => {
  const [getBtnText, setBtnText] = useState();
  useEffect(() => {
    setBtnText(language === "cz" ? btn.cz : btn.en);
  });

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className={inView && portfolioStyles.portfoliobox}>
      <h4>{heading}</h4>
      <p className={portfolioStyles.text}>{text}</p>
      <div
        className={portfolioStyles.imgbox}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: imgpos,
        }}
      ></div>
      <a href={link} target="_blank">
        <div className={portfolioStyles.btn}>{getBtnText}</div>
      </a>
    </div>
  );
};

export default PortfolioBox;
