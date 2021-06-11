import React, { useState } from "react";
import Header from "../componenets/Header/Header";
import Navbar from "../componenets/Navbar/Navbar";
import AboutMe from "../componenets/AboutMe/AboutMe";
import Experience from "../componenets/Experience/Experience";
import Skills from "../componenets/Skills/Skills";
import Portfolio from "../componenets/Portfolio/Portfolio";
import Contact from "../componenets/Contact/Contact";
import NavMobile from "../componenets/NavMobile/NavMobile";
import NavIcon from "../componenets/NavMobile/NavIcon";
import Head from "next/head";
function cz() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>Tomáš Štorc | Web developer and Linux Specialist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar language="cz" />
      {!open && <NavIcon open={open} setOpen={setOpen} />}
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
