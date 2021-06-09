import React from "react";
import Header from "../componenets/Header/Header";
import Navbar from "../componenets/Navbar/Navbar";
import AboutMe from "../componenets/AboutMe/AboutMe";
import Experience from "../componenets/Experience/Experience";
import Skills from "../componenets/Skills/Skills";
import Portfolio from "../componenets/Portfolio/Portfolio";
function cz() {
  return (
    <div>
      <Navbar language="cz" />
      <Header language="cz" />
      <AboutMe language="cz" />
      <Experience language="cz" />
      <Skills language="cz" />
      <Portfolio language="cz" />
    </div>
  );
}

export default cz;
