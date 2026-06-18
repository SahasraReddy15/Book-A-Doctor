import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const res =
        await API.post(
          "/auth/login",
          {
            email,
            password
          }
        );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.user
        )
      );

      alert(
        "Login Successful"
      );

      if (
        res.data.user.role ===
        "admin"
      ) {

        navigate(
          "/admin-dashboard"
        );

      }
      else if (
        res.data.user.role ===
        "doctor"
      ) {

        navigate(
          "/doctor-dashboard"
        );

      }
      else {

        navigate(
          "/doctors"
        );

      }

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <div className="text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
            alt="medical"
            className="login-image"
          />

          <h2 className="fw-bold mt-3">
            Welcome Back
          </h2>

          <p className="text-muted">
            Login to continue
          </p>

        </div>

        <form
          onSubmit={
            submitHandler
          }
        >

          <input
            type="email"
            className="
            form-control
            mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <input
            type="password"
            className="
            form-control
            mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button
            className="
            btn
            login-btn
            w-100"
          >
            Login
          </button>

        </form>

        <p
          className="
          text-center
          mt-3"
        >

          Don't have an account?

          <Link
            to="/register"
            className="
            ms-2"
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;