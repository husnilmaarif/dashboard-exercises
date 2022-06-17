import "./Header.css";
import React, { useState, useEffect } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/Firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import profile from "../assets/profile.png";
import LogoutIcon from "@mui/icons-material/Logout";

function Header() {
  const [user, setUser] = useState("");
  const [userAuth, setUserAuth] = useState(false);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserAuth(true);
        setName(user.displayName);
      } else {
        setUserAuth(false);
        navigate("/login");
      }
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("berhasil");
  };

  // loguot
  const logout = () => {
    signOut(auth).then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      <div className="row p-4 bg-white align-items-center">
        <div className="col-md-3">
          <h4 className="m-1">Employee Profile</h4>
        </div>

        <div className="col-md-4">
          <Form onSubmit={handleSubmit}>
            <InputGroup size="md" className="rounded-pill">
              <FormControl
                aria-label="Medium"
                aria-describedby="inputGroup-sizing-md"
                placeholder="Search.."
                className="bg-light rounded-pill w-100"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </InputGroup>
          </Form>
        </div>

        <div className="col-md-5">
          <div className="row">
            <div className="col">
              <Button variant="light" className="rounded-pill">
                <HelpOutlineIcon />
              </Button>
              <Button variant="light" className="rounded-pill">
                <InfoOutlinedIcon />
              </Button>
              <Button variant="light" className="rounded-pill">
                <NotificationsNoneOutlinedIcon />
              </Button>
              <span className="span-notif position-relative translate-middle badge rounded-pill bg-danger ms-1">
                3
              </span>
            </div>

            {!userAuth ? (
              ""
            ) : (
              <div className="col d-flex align-items-center">
                <img src={profile} alt="profile" width={40} />
                <p className="my-2 mx-3 fw-bold">{name}</p>
                <p className="m-2 logout" onClick={logout}>
                  <LogoutIcon />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
