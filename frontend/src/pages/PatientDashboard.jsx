import React, { useEffect, useState } from "react";
import API from "../services/api";
import "./Dashboard.css";

function PatientDashboard() {

  const [appointments, setAppointments] =
    useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {

    try {

      const res =
        await API.get("/appointments");

      setAppointments(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="container py-5">

      <h1
        className="fw-bold mb-4"
        style={{
          color: "#1e293b"
        }}
      >
        Patient Dashboard
      </h1>

      <div className="row mb-4">

        <div className="col-md-4 mb-3">

          <div className="dashboard-card card-total">

            <h6>
              Total Appointments
            </h6>

            <h2>
              {appointments.length}
            </h2>

          </div>

        </div>

        <div className="col-md-4 mb-3">

          <div className="dashboard-card card-approved">

            <h6>
              Approved
            </h6>

            <h2>

              {
                appointments.filter(
                  item =>
                    item.status ===
                    "Approved"
                ).length
              }

            </h2>

          </div>

        </div>

        <div className="col-md-4 mb-3">

          <div className="dashboard-card card-pending">

            <h6>
              Pending
            </h6>

            <h2>

              {
                appointments.filter(
                  item =>
                    item.status ===
                    "Pending"
                ).length
              }

            </h2>

          </div>

        </div>

      </div>

      <div
        className="
        card
        shadow-sm
        border-0"
      >

        <div className="card-body">

          <h4 className="mb-4">
            My Appointments
          </h4>

          <table
            className="
            table
            table-hover
            align-middle"
          >

            <thead
              className="
              table-primary"
            >

              <tr>

                <th>Date</th>

                <th>Time</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {appointments.map(
                (item) => (

                  <tr
                    key={item._id}
                  >

                    <td>
                      {item.date}
                    </td>

                    <td>
                      {item.time}
                    </td>

                    <td>

                      {item.status ===
                      "Pending" && (

                        <span
                          className="
                          badge
                          bg-warning
                          text-dark"
                        >
                          Pending
                        </span>

                      )}

                      {item.status ===
                      "Approved" && (

                        <span
                          className="
                          badge
                          bg-success"
                        >
                          Approved
                        </span>

                      )}

                      {item.status ===
                      "Rejected" && (

                        <span
                          className="
                          badge
                          bg-danger"
                        >
                          Rejected
                        </span>

                      )}

                      {item.status ===
                      "Completed" && (

                        <span
                          className="
                          badge
                          bg-primary"
                        >
                          Completed
                        </span>

                      )}

                      {item.status ===
                      "Cancelled" && (

                        <span
                          className="
                          badge
                          bg-secondary"
                        >
                          Cancelled
                        </span>

                      )}

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default PatientDashboard;