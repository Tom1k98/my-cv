import React from "react";
import expStyles from "./Experience.module.scss";
import { header, experiences } from "./experienceText";

const Experience = ({ language }) => {
  return (
    <div name="experience" className={expStyles.experience}>
      <h2>{language === "cz" ? header.cz : header.en}</h2>
      <div className={expStyles.experienceflex}>
        {language === "cz"
          ? experiences.cz.map((exp) => (
              <div>
                <h3>{exp.title}</h3>
              </div>
            ))
          : experience.en.map((exp) => (
              <div>
                <h3>{exp.title}</h3>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Experience;
