import React, { useState } from "react";
import Header from "../componenets/Header/Header";
import Navbar from "../componenets/Navbar/Navbar";
import NavMobile from "../componenets/NavMobile/NavMobile";
import AboutMe from "../componenets/AboutMe/AboutMe";
import Experience from "../componenets/Experience/Experience";
import Skills from "../componenets/Skills/Skills";
import Portfolio from "../componenets/Portfolio/Portfolio";
import Contact from "../componenets/Contact/Contact";
import NavIcon from "../componenets/NavMobile/NavIcon";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      {!open && <NavIcon open={open} setOpen={setOpen} />}
      {open && <NavMobile open={open} setOpen={setOpen} />}
      <Header />
      <AboutMe />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
