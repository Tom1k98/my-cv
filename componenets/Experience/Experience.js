import React, { useState, useEffect } from "react";
import expStyles from "./Experience.module.scss";
import { header, experiences } from "./experienceText";
import { useInView } from "react-intersection-observer";
import ExperienceBox from "./ExpoerienceBox";

const Experience = ({ language }) => {
  const [getHeader, setHeader] = useState();
  const [getExperience, setExperiences] = useState([]);
  const [getInView, setInView] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    setHeader(language === "cz" ? header.cz : header.en);
    setExperiences(language === "cz" ? experiences.cz : experiences.en);
  }, [language]);

  return (
    <div ref={ref} name="experience" className={expStyles.experience}>
      <h2 className={inView && "aboutHeading"}>{getHeader}</h2>
      <div className={expStyles.experienceflex}>
        {getExperience.map((exp, index) => (
          <ExperienceBox
            key={index}
            title={exp.title}
            date={exp.date}
            role={exp.role}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
