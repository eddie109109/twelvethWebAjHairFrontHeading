import React from "react";
import companyLogo from "../assets/images/companyLogo.JPG";
import "./Heading.css";
import NavBar from "./NavBar";

function Heading() {
  return (
    <div className="heading">
      <div className="heading_logo_container">
        <img className="heading_companyLogo" src={companyLogo} />
      </div>
      <div className="heading_navBar">
        <NavBar />
      </div>
    </div>
  );
}

export default Heading;
