import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase";
import Header from "../components/Header";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    if (!email || !password || !cpassword) {
      alert("Harap masukkan email dan password");
    } else if (cpassword !== password) {
      alert("Password dan konfirmasi password tidak cocok!");
    } else if (password.length && cpassword.length < 6) {
      alert("Password minimal 6 angka!");
    } else {
      e.preventDefault();

      // register firebase auth
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          alert("Registrasi berhasil");
          const user = userCredential.user;
          console.log("success ", user);
          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
      setEmail("");
      setPassword("");
      setCpassword("");
    }
  };

  return (
    <>
      <Header header="Register" />
      <div className="row justify-content-center my-5">
        <div className="col-md-6 text-center p-5 bg-light">
          <h1 className="text-center">Registrasi</h1>

          <form className="mt-3">
            <input
              type="email"
              placeholder="email@example.com"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="form-control mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="confirm password"
              className="form-control mt-2"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
            <button
              className="btn btn-primary mt-3 mb-3 w-100"
              onClick={register}
            >
              Kirim
            </button>
            <br />
            <Link to="/login">kembali ke halaman login</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
