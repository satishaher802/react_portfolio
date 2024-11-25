import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";
const Navbar = () => {
  const [toogleicon, settoogleicon] = useState(false);

  const hadletoogleicons = () => {
    settoogleicon(!toogleicon);
  };
  const menulist = [
    {
      label: "Home",
      to: "./",
    },
    {
      label: "About Me",
      to: "./about",
    },
    {
      label: "Skills",
      to: "./skills",
    },
    {
      label: "Resume",
      to: "./resume",
    },
    // {
    //   label: "Portfolio",
    //   to: "./portfolio",
    // },
    {
      label: "Contact",
      to: "./contact",
    },
  ];
  return (
    <>
      <div>
        <navbar className="navbar">
          <div className="navbar-container">
            <Link to={"/"} className="navbar-container-logo">
              <FaReact size={30}></FaReact>
            </Link>
          </div>
          <ul className={`navbar-container-menu ${toogleicon ? "active" : ""}`}>
            {menulist.map((item, i) => (
              <li key={i} className="navbar-container-menu-items">
                <Link
                  to={item.to}
                  className="navbar-container-menu-items-links"
                >
                  {item.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icons" onClick={hadletoogleicons}>
            {toogleicon ? <HiX size={30}></HiX> : <FaBars size={30}></FaBars>}
          </div>
        </navbar>
      </div>
    </>
  );
};

export default Navbar;
