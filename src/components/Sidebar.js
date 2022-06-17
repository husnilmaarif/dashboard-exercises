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
import logo from "../assets/logo.png";

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
