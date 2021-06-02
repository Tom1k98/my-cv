import React from "react";
import headerStyles from "./Header.module.scss";

function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.text}>
        <h1>Tomáš Štorc</h1>
      </div>
      <div className={headerStyles.img}></div>
    </header>
  );
}

export default Header;
