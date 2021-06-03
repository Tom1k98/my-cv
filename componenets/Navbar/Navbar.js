import React from "react";
import navbarStyles from "./Navbar.module.scss";
import { links } from "./NavbarText";
import Link from "next/link";

function Navbar({ language }) {
  return (
    <nav className={navbarStyles.navbar}>
      <ul className={navbarStyles.links}>
        {language === "cz"
          ? links.cz.map((link) => <li>{link.text}</li>)
          : links.en.map((link) => <li>{link.text}</li>)}
      </ul>
    </nav>
  );
}

export default Navbar;
