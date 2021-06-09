import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import aboutMeStyles from "./AboutMe.module.scss";
import { heading, text } from "./AboutMeText";

function AboutMe({ language }) {
  const [getHeading, setHeading] = useState();
  const [getText, setText] = useState();

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    setHeading(language === "cz" ? heading.cz : heading.en);
    setText(language === "cz" ? text.cz : text.en);
  }, [language]);

  return (
    <div ref={ref} className={aboutMeStyles.aboutme} name="aboutme">
      <h2 className={inView && "aboutHeading"}>{getHeading}</h2>
      <div className={inView && aboutMeStyles.abouttext}>{getText}</div>
    </div>
  );
}

export default AboutMe;
