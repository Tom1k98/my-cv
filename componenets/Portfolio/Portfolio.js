import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import portfolioStyles from "./Portfolio.module.scss";
import { portfolio } from "./portfolioText";

const Portfolio = ({ language }) => {
  const [getPortfolio, setPortfolio] = useState(portfolio.en);
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    setPortfolio(language === "cz" ? portfolio.cz : portfolio.en);
  }, [language]);
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });
  return (
    <div ref={ref} name="portfolio" className={portfolioStyles.portfolio}>
      <h2 className={inView && "aboutHeading"}>Portfolio</h2>
      <div className={portfolioStyles.portfolioflex}>
        {getPortfolio.map((port) => (
          <a href="https://mtnetcode.com" target="_blank">
            <div
              className={portfolioStyles.portfoliobox}
              style={{
                background: 'url("/img/mtnetcode.jpg")',
                backgroundSize: "cover",
              }}
            ></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
