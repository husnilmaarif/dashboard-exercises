import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Header from "../components/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function HomePage() {
  const [google, setGoogle] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setGoogle(user.displayName);
      } else {
        navigate("/login");
      }
    });
  });

  const greeting = () => {
    onAuthStateChanged(auth, (user) => {
      alert("Selamat Datang " + user.displayName);
    });
  };

  return (
    <>
      <Header header="Dashboard" />
      <div className="container-fluid d-flex header-homepage justify-content-center align-items-center">
        <button
          className="text-light greeting btn-primary me-4"
          onClick={greeting}
        >
          Selamat datang {google}
        </button>
        <button className="text-light employee btn-primary">
          <Link className="link-employee" to="/employee">
            Ke Halaman Employee <ArrowForwardIcon />
          </Link>
        </button>
      </div>
    </>
  );
}

export default HomePage;
