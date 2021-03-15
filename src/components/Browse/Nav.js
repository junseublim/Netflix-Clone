import logo from "../../static/logo.png";
import avatar from "../../static/user.png";
import "./nav.css";
import { useEffect, useState } from "react";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav-left">
        <img className="nav_logo" src={logo}></img>
        <p className="nav-category">홈</p>
        <p className="nav-category">TV 프로그램</p>
        <p className="nav-category">영화</p>
        <p className="nav-category">New! 요즘 대세 콘텐츠</p>
        <p className="nav-category">내가 찜한 콘텐츠</p>
      </div>
      <div className="nav-right">
        <img className="nav_avatar" src={avatar}></img>
      </div>
    </div>
  );
};

export default Nav;
