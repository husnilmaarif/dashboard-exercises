import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../config/Firebase";
import google from "../assets/logo-google.png";
import Header from "../components/Header";

const provider = new GoogleAuthProvider();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    // login menggunakan email dan password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // berhasil
        alert("Berhasil masuk");
        const user = userCredential.user;
        console.log("success ", user);
        navigate("/");
      })
      .catch((error) => {
        // gagal
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("errorMessage");
        console.log(errorCode, errorMessage);
      });
  };

  // login menggunakan akun google
  const handleGoogle = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        // berhasil
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        // gagal
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <Header header="Login" />
      <div className="row justify-content-center my-5">
        <div className="col-md-6 text-center p-5 bg-light">
          <h1 className="text-center">Login</h1>

          <form className="mt-3">
            <p className="text-muted text-start paragraf-login">
              <i>*kami menyarankan signin menggunakan akun google</i>
            </p>
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
            <button
              className="btn btn-primary mt-3 mb-3 w-100 text-center"
              onClick={login}
            >
              Kirim
            </button>
            atau
            <button
              className="text-muted mt-3 py-2 w-100 rounded"
              onClick={handleGoogle}
            >
              <img src={google} className="me-2" alt="google" width={25} /> Sign
              in with Google
            </button>
          </form>
          <p className="mt-2 text-center">
            belum punya akun? silahkan <Link to="/register">registrasi</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
