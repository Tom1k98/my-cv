import React, { useState, useEffect } from "react";
import skillsStyles from "./Skills.module.scss";
import { heading, skillsValue } from "./skillsText";
import ProgressBar from "../reusable/ProgressBar/ProgressBar";
import { useInView } from "react-intersection-observer";

const Skills = ({ language }) => {
  const [getHeading, setHeading] = useState();

  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  useEffect(() => {
    setHeading(language === "cz" ? heading.cz : heading.en);
  }, [language]);
  return (
    <div ref={ref} name="skills" className={skillsStyles.skills}>
      <h2 className={inView && "aboutHeading"}>{getHeading}</h2>
      <div className={skillsStyles.skillsBox}>
        {skillsValue.map((skill, index) => (
          <ProgressBar key={index} text={skill.name} value={skill.value} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
