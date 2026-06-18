import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import "./Register.css";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "patient"
  });

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/register",
        form
      );

      alert(
        "Registration Successful"
      );

      navigate("/login");

    } catch (error) {

      const message =
        error.response?.data?.message;

      if (
        message &&
        (
          message
            .toLowerCase()
            .includes("already") ||

          message
            .toLowerCase()
            .includes("exists")
        )
      ) {

        alert(
          "User already registered. Redirecting to Login..."
        );

        navigate("/login");

      } else {

        alert(
          message ||
          "Registration Failed"
        );

      }

    }

  };

  return (

    <div className="register-page">

      <div className="register-card">

        <div className="text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/2785/2785482.png"
            alt="register"
            className="register-image"
          />

          <h2 className="fw-bold mt-3">
            Create Account
          </h2>

          <p className="text-muted">
            Register to Book Appointments
          </p>

        </div>

        <form
          onSubmit={
            submitHandler
          }
        >

          <input
            type="text"
            className="
            form-control
            mb-3"
            placeholder="Full Name"
            onChange={(e) =>
              setForm({
                ...form,
                name:
                  e.target.value
              })
            }
          />

          <input
            type="email"
            className="
            form-control
            mb-3"
            placeholder="Email"
            onChange={(e) =>
              setForm({
                ...form,
                email:
                  e.target.value
              })
            }
          />

          <input
            type="password"
            className="
            form-control
            mb-3"
            placeholder="Password"
            onChange={(e) =>
              setForm({
                ...form,
                password:
                  e.target.value
              })
            }
          />

          <input
            type="text"
            className="
            form-control
            mb-3"
            placeholder="Phone Number"
            onChange={(e) =>
              setForm({
                ...form,
                phone:
                  e.target.value
              })
            }
          />

          <select
            className="
            form-control
            mb-3"
            onChange={(e) =>
              setForm({
                ...form,
                role:
                  e.target.value
              })
            }
          >

            <option value="patient">
              Patient
            </option>

            <option value="doctor">
              Doctor
            </option>

          </select>

          <button
            className="
            btn
            register-btn
            w-100"
          >
            Register
          </button>

        </form>

        <p
          className="
          text-center
          mt-3"
        >

          Already registered?

          <Link
            to="/login"
            className="
            ms-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;