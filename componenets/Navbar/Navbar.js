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
        {getLinks.map((link) => (
          <li>
            {" "}
            <Link href={link.link}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
