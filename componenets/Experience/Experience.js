import React from "react";
import expStyles from "./Experience.module.scss";
import { header } from "./experienceText";

const Experience = ({ language }) => {
  return (
    <div name="experience" className={expStyles.experience}>
      <h2>{language === "cz" ? header.cz : header.en}</h2>
    </div>
  );
};

export default Experience;
