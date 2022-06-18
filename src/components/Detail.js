import React from "react";
import { Link } from "react-router-dom";
import "./Detail.css";
import profile from "../assets/profile.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Detail() {
  return (
    <>
      {/* icon back */}
      <div className="row mt-3">
        <div className="fw-bold">
          <Link className="back" to="/">
            <ArrowBackIcon /> Back
          </Link>
        </div>
      </div>

      {/* profile */}
      <div className="row mt-3 bg-white shadow-sm">
        <div className="col align-items-center py-2 px-5 m-3">
          <img src={profile} alt="profile" width={150} />
        </div>
        <div className="col-md-7 align-items-center p-3 me-5 my-4">
          <table>
            <tr>
              <td>Name</td>
              <td className="fw-bold"> : Husnil Maarif</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td className="fw-bold"> : 01-01-2000</td>
            </tr>
            <tr>
              <td>Email</td>
              <td className="fw-bold"> : Contoh@gmail.com</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td className="fw-bold"> : 0821-8282-9494</td>
            </tr>
          </table>
        </div>
        <div className="col-md-1 mt-2 ps-5">
          <p className="my-2 button-edit">
            <EditIcon />
          </p>
        </div>
      </div>

      {/* cards */}
      <div className="row mt-4">
        <div className="col bg-white shadow-sm p-3 me-3">
          <p>
            Avarage revenue <br />
            per Worklist
          </p>
          <h3>&#8364;7800</h3>
          <p className="text-success fw-bold text-end">
            <ArrowDropUpIcon /> +15%
          </p>
        </div>

        <div className="col bg-white shadow-sm p-3 me-3">
          <p>
            Avarage cost <br />
            per Worklist
          </p>
          <h3>&#8364;300</h3>
          <p className="text-danger fw-bold text-end">
            <ArrowDropUpIcon /> +20%
          </p>
        </div>

        <div className="col bg-white shadow-sm p-3 me-3">
          <p>
            Avarage profit <br />
            per Worklist
          </p>
          <h3>&#8364;4400</h3>
          <p className="text-success fw-bold text-end">
            <ArrowDropUpIcon /> +15%
          </p>
        </div>

        <div className="col bg-white shadow-sm p-3">
          <p>
            Administrativ <br />
            Employee
          </p>
          <h3>300</h3>
          <p className="text-danger fw-bold text-end">
            <ArrowDropDownIcon /> -15%
          </p>
        </div>
      </div>
    </>
  );
}

export default Detail;
