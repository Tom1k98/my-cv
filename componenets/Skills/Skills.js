import React, { useState, useEffect } from "react";
import skillsStyles from "./Skills.module.scss";
import { heading, skillsValue } from "./skillsText";

const Skills = ({ language }) => {
  const [getHeading, setHeading] = useState();

  useEffect(() => {
    setHeading(language === "cz" ? heading.cz : heading.en);
  }, [language]);
  return (
    <div name="skills" className={skillsStyles.skills}>
      <h2>{getHeading}</h2>
    </div>
  );
};

export default Skills;
