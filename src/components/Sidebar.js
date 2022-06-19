// style & dependency
import "./Sidebar.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sidebarData } from "../data/SidebarData";
import { auth } from "../config/Firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { Button } from "react-bootstrap";
import LogoutIcon from "@mui/icons-material/Logout";

// assets
import logo from "../assets/logo.jpg";

export default function Sidebar() {
  const [user, setUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  });

  // loguot
  const logout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };
  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <div className="my-4 pt-3 pb-2 fw-bold fs-5 logo">
            <img
              src={logo}
              alt="logo"
              className="justify-content-center"
              width={50}
            />{" "}
            Daksysteem
          </div>
        </Link>
        {sidebarData.map((value, index) => {
          return (
            <Link to={value.link} className="link" key={index}>
              <li className="p-1 m-2 align-items-center li-sidebar">
                <span className="me-2">{value.icon}</span> {value.title}
              </li>
            </Link>
          );
        })}
        {!user ? (
          ""
        ) : (
          <Button className="text-light btn-danger" onClick={logout}>
            <LogoutIcon /> Logout
          </Button>
        )}
      </div>
    </>
  );
}
