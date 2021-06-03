import React from "react";
import aboutMeStyles from "./AboutMe.module.scss";
import { heading, text } from "./AboutMeText";

function AboutMe({ language }) {
  return (
    <div className={aboutMeStyles.aboutme}>
      <h2>{language === "cz" ? heading.cz : heading.en}</h2>
    </div>
  );
}

export default AboutMe;
