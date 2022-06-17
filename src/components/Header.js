import "./Header.css";
import React, { useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import profile from "../assets/profile.png";

function Header() {
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("berhasil");
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

          <img src={profile} alt="profile" width={40} />
        </div>
      </div>
    </>
  );
}

export default Header;
