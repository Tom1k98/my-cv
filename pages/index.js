import React from "react";
import Header from "../componenets/Header/Header";
import Navbar from "../componenets/Navbar/Navbar";
import AboutMe from "../componenets/AboutMe/AboutMe";
import Experience from "../componenets/Experience/Experience";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Header />
        <AboutMe />
        <Experience />
      </div>
    </div>
  );
}

export default App;
