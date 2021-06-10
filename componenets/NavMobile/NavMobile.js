import React, { useState, useEffect } from "react";
import navMobileStyles from "./NavMobile.module.scss";
import navbarStyles from "../Navbar/Navbar.module.scss";
import { links } from "../Navbar/NavbarText";
import Link from "next/link";
import CloseIcon from "@material-ui/icons/Close";

function NavMobile({ language, open, setOpen }) {
  const [getLinks, setLinks] = useState([]);
  useEffect(() => {
    setLinks(language === "cz" ? links.cz : links.en);
  }, [language]);
  return (
    <nav className={navMobileStyles.nav}>
      <CloseIcon
        className={navMobileStyles.iconClose}
        fontSize="large"
        onClick={() => setOpen(!open)}
      />
      <ul className={navMobileStyles.links}>
        {getLinks.map((link, index) => (
          <li
            key={index}
            className={navbarStyles.link}
            onClick={() => setOpen(!open)}
          >
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

export default NavMobile;
