import React from "react";
import "./Nav_bar.css";
import list from "./NavigationItem";
import { AiOutlineUser } from "react-icons/ai";

function Nav_Bar() {
  return (
    <>
      <nav>
        <header className="header">
          <div className="logo">
            {" "}
            <div className="box"></div>Medical Darpan
          </div>

          <nav className="main-nav">
            <ul className="main-nav-list">
              {list.map((val, j) => {
                return (
                  <li key={val + j}>
                    <a className="main-nav-link">{val}</a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="Login">
            <span> Login </span>
            <AiOutlineUser className="Login-Icon" />
          </div>
        </header>
      </nav>
    </>
  );
}

export default Nav_Bar;
