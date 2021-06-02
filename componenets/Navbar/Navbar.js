import React from "react";
import navbarStyles from "./Navbar.module.scss";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={navbarStyles.navbar}>
      <ul className={navbarStyles.links}>
        <li>About me</li>
        <li>Work experience</li>
      </ul>
    </nav>
  );
}

export default Navbar;
