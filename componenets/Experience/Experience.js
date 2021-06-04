import React, { useState, useEffect } from "react";
import expStyles from "./Experience.module.scss";
import { header, experiences } from "./experienceText";

const Experience = ({ language }) => {
  const [getHeader, setHeader] = useState();
  const [getExperience, setExperiences] = useState([]);
  useEffect(() => {
    setHeader(language === "cz" ? header.cz : header.en);
    setExperiences(language === "cz" ? experiences.cz : experiences.en);
  }, [language]);
  return (
    <div name="experience" className={expStyles.experience}>
      <h2>{getHeader}</h2>
      <div className={expStyles.experienceflex}>
        {getExperience.map((exp) => (
          <div className={expStyles.content}>
            <h3>{exp.title}</h3>
            <p>{exp.date}</p>
            <p>{exp.role}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
