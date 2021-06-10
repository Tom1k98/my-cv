import React from "react";
import { Menu } from "@material-ui/icons";
import navMobileStyles from "./NavMobile.module.scss";
const NavIcon = ({ open, setOpen }) => {
  const handleClick = (e) => {
    console.log(e);
    setOpen(!open);
  };
  return (
    <div>
      <Menu
        fontSize="large"
        className={navMobileStyles.icon}
        onClick={handleClick}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default NavIcon;
