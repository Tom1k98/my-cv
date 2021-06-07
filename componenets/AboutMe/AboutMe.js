import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import aboutMeStyles from "./AboutMe.module.scss";
import { heading, text } from "./AboutMeText";

function AboutMe({ language }) {
  const [getHeading, setHeading] = useState();
  const [getText, setText] = useState();
  const [getInView, setInView] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setHeading(language === "cz" ? heading.cz : heading.en);
    setText(language === "cz" ? text.cz : text.en);
  }, [language]);

  useEffect(() => {
    inView && setInView(true);
  }, [inView]);

  return (
    <div
      ref={ref}
      className={getInView && aboutMeStyles.aboutme}
      name="aboutme"
    >
      <h2>{getHeading}</h2>
      <div className={aboutMeStyles.abouttext}>{getText}</div>
    </div>
  );
}

export default AboutMe;
