import React, { useState, useEffect } from "react";
import expStyles from "./Experience.module.scss";
import { header, experiences } from "./experienceText";
import { useInView } from "react-intersection-observer";

const Experience = ({ language }) => {
  const [getHeader, setHeader] = useState();
  const [getExperience, setExperiences] = useState([]);
  const [getInView, setInView] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setHeader(language === "cz" ? header.cz : header.en);
    setExperiences(language === "cz" ? experiences.cz : experiences.en);
  }, [language]);

  useEffect(() => {
    inView && setInView(true);
  }, [inView]);

  return (
    <div ref={ref} name="experience" className={expStyles.experience}>
      <h2 className={getInView && "aboutHeading"}>{getHeader}</h2>
      <div className={expStyles.experienceflex}>
        {getExperience.map((exp) => (
          <div ref={ref} className={getInView && expStyles.content}>
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
