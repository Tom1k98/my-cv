import React from "react";
import Header from "../componenets/Header/Header";
import Navbar from "../componenets/Navbar/Navbar";
function cz() {
  return (
    <div>
      <Navbar language="cz" />
      <div className="container">
        <Header language="cz" />
      </div>
    </div>
  );
}

export default cz;
