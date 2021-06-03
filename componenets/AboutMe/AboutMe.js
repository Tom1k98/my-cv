import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import aboutMeStyles from "./AboutMe.module.scss";
import { heading, text } from "./AboutMeText";

function AboutMe({ language }) {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className={inView && aboutMeStyles.aboutme} name="aboutme">
      <h2>{language === "cz" ? heading.cz : heading.en}</h2>
      <div className={aboutMeStyles.abouttext}>
        {language === "cz" ? text.cz : text.en}
      </div>
    </div>
  );
}

export default AboutMe;
