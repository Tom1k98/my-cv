import React from "react";
import headerStyles from "./Header.module.scss";
import { subtext } from "./HeaderText";

function Header({ language }) {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.textcontainer}>
        <div className={headerStyles.textbox}>
          <h1>Tomáš Štorc</h1>
          <div className={headerStyles.subtext}>
            {language === "cz" ? subtext.cz : subtext.en}
          </div>
        </div>
      </div>
      <div className={headerStyles.img}></div>
    </header>
  );
}

export default Header;
