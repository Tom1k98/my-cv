import React, { useState } from "react";
import Header from "../componenets/Header/Header";
import Navbar from "../componenets/Navbar/Navbar";
import AboutMe from "../componenets/AboutMe/AboutMe";
import Experience from "../componenets/Experience/Experience";
import Skills from "../componenets/Skills/Skills";
import Portfolio from "../componenets/Portfolio/Portfolio";
import Contact from "../componenets/Contact/Contact";
import NavMobile from "../componenets/NavMobile/NavMobile";
import BurgerMenu from "../componenets/NavMobile/BurgerMenu";
import HeadLayout from "../componenets/HeadLayout";
function cz() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <HeadLayout language="cz" />
      <Navbar language="cz" />
      <BurgerMenu open={open} setOpen={setOpen} />
      {open && <NavMobile language="cz" open={open} setOpen={setOpen} />}
      <Header language="cz" />
      <AboutMe language="cz" />
      <Experience language="cz" />
      <Skills language="cz" />
      <Portfolio language="cz" />
      <Contact language="cz" />
    </div>
  );
}

export default cz;
