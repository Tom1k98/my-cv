import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import navMobileStyles from "./NavMobile.module.scss";
const NavIcon = ({ open, setOpen }) => {
  const handleClick = (e) => {
    console.log(e);
    setOpen(!open);
  };
  return (
    <div>
      <MenuIcon
        fontSize="large"
        className={navMobileStyles.icon}
        onClick={handleClick}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default NavIcon;
