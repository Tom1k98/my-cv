import React from "react";
import bmenuStyles from "./BurgerMenu.module.scss";
import classnames from "classnames";

const BurgerMenu = ({ open, setOpen }) => {
  const line1 = classnames({
    [bmenuStyles.line1]: true,
    [bmenuStyles.click1]: open,
  });

  const line2 = classnames({
    [bmenuStyles.line2]: true,
    [bmenuStyles.click2]: open,
  });

  const line3 = classnames({
    [bmenuStyles.line3]: true,
    [bmenuStyles.click3]: open,
  });

  const handleClick = (e) => {
    setOpen(!open);
  };
  return (
    <div className={bmenuStyles.menuwrapper} onClick={handleClick}>
      <div className={line1}></div>
      <div className={line2}></div>
      <div className={line3}></div>
    </div>
  );
};

export default BurgerMenu;
