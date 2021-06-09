import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import portfolioStyles from "./Portfolio.module.scss";
import PortfolioBox from "./PortfolioBox";
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
        {getPortfolio.map((port, index) => (
          <PortfolioBox
            key={index}
            img={port.img}
            heading={port.heading}
            text={port.text}
            language={language}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
