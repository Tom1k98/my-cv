import React from "react";
import Header from "../componenets/Header/Header";
import Navbar from "../componenets/Navbar/Navbar";
import AboutMe from "../componenets/AboutMe/AboutMe";
import Experience from "../componenets/Experience/Experience";
import Skills from "../componenets/Skills/Skills";
import Portfolio from "../componenets/Portfolio/Portfolio";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Skills />
      <Portfolio />
    </div>
  );
}

export default App;
