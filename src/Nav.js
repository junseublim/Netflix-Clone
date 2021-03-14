import logo from "./logo.png";
import avatar from "./user.png";
import "./nav.css";
import { useEffect, useState } from "react";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo}></img>
      <img className="nav_avatar" src={avatar}></img>
    </div>
  );
};

export default Nav;
