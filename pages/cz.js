import React from "react";
import Header from "../componenets/Header/Header";
import Navbar from "../componenets/Navbar/Navbar";
import AboutMe from "../componenets/AboutMe/AboutMe";
import Experience from "../componenets/Experience/Experience";
function cz() {
  return (
    <div>
      <Navbar language="cz" />
      <div className="container">
        <Header language="cz" />
        <AboutMe language="cz" />
        <Experience language="cz" />
      </div>
    </div>
  );
}

export default cz;
