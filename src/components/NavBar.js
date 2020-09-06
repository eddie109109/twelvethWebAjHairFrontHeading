import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navBar">
      <a className="navBar_stylists" href="/">
        <h3>Stylists</h3>
      </a>
      <a className="navBar_ourWork" href="/">
        <h3>Our Work</h3>
      </a>
      <a className="navBar_aboutUs" href="/">
        <h3>About us</h3>
      </a>
    </div>
  );
}

export default NavBar;
