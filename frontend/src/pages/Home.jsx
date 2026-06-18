import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="container">

          <div className="hero-content">

            <div className="hero-left">

              <span className="tag">
                Trusted Healthcare Platform
              </span>

              <h1>
               Your Health,
Our Priority
              </h1>

              <p>
               Trusted doctors, seamless appointments,
and secure healthcare management
all in one place.
              </p>

              <div className="hero-buttons">

                <Link
                  to="/doctors"
                  className="btn-primary-custom"
                >
                  Book Appointment
                </Link>

                <Link
                  to="/register"
                  className="btn-secondary-custom"
                >
                  Get Started
                </Link>

              </div>

            </div>

            <div className="hero-right">

              <div className="glass-card">

                <h3>
                  ❤️ Health Monitor
                </h3>

                <div className="heartbeat">

                  <svg
                    viewBox="0 0 500 100"
                    className="heartbeat-svg"
                  >
                    <path
                      d="
                      M0 50
                      L80 50
                      L100 20
                      L120 80
                      L140 10
                      L160 50
                      L500 50
                      "
                    />
                  </svg>

                </div>

                <p>
                  Secure • Fast • Reliable
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="features">

        <div className="container">

          <div className="feature-card">

            <h1>👨‍⚕️</h1>

            <h3>
              Expert Doctors
            </h3>

            <p>
              Connect with trusted
              healthcare specialists.
            </p>

          </div>

          <div className="feature-card">

            <h1>📅</h1>

            <h3>
              Easy Booking
            </h3>

            <p>
              Book appointments
              instantly.
            </p>

          </div>

          <div className="feature-card">

            <h1>📄</h1>

            <h3>
              Medical Reports
            </h3>

            <p>
              Upload reports securely.
            </p>

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;