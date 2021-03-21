import logo from "../../static/logo.png";
import avatar from "../../static/user.png";
import "./nav.css";
import { useEffect, useState } from "react";

const Nav = () => {
    return (
        <div className={`nav`}>
            <div className="nav-left">
                <img className="nav_logo" src={logo}></img>
            </div>
            <div className="nav-right">
                <button className="nav-button lang">한국어</button>
                <button className="nav-button login">로그인</button>

            </div>
        </div>
    );
};

export default Nav;
