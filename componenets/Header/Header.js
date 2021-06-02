import React from "react";
import headerStyles from "./Header.module.scss";

function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.textcontainer}>
        <div className={headerStyles.textbox}>
          <h1>Tomáš Štorc</h1>
          <div className={headerStyles.subtext}>
            JavaScript developer and Linux specialist
          </div>
        </div>
      </div>
      <div className={headerStyles.img}></div>
    </header>
  );
}

export default Header;
