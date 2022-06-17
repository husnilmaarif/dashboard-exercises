// style & dependency
import "./Sidebar.css";
import React from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../data/SidebarData";

// assets
import logo from "../assets/logo.png";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <img
          src={logo}
          alt="logo"
          className="justify-content-center ms-2 my-4 pt-1"
          width={150}
        />
        {sidebarData.map((value, index) => {
          return (
            <Link to={value.link} className="link">
              <li key={index} className="p-1 m-2 align-items-center">
                <span className="me-2">{value.icon}</span> {value.title}
              </li>
            </Link>
          );
        })}
      </div>
    </>
  );
}
