import React, { useState, useEffect } from "react";
import navbarStyles from "./Navbar.module.scss";
import { links } from "./NavbarText";
import Link from "next/link";

function Navbar({ language }) {
  const [getLinks, setLinks] = useState([]);
  useEffect(() => {
    setLinks(language === "cz" ? links.cz : links.en);
  }, [language]);
  return (
    <nav className={navbarStyles.navbar}>
      <ul className={navbarStyles.links}>
        {getLinks.map((link, index) => (
          <li key={index} className={navbarStyles.link}>
            {" "}
            <Link href={link.link}>{link.text}</Link>
          </li>
        ))}
        <li>
          <Link href={language === "cz" ? "/" : "cz"}>
            {language === "cz" ? "EN" : "CZ"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
