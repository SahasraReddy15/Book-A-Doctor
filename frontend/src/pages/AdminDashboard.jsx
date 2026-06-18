import React, { useEffect, useState } from "react";
import API from "../services/api";
import "./Admdash.css";

function AdminDashboard() {

  const [users, setUsers] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] =
    useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const config = {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      };

      const usersRes =
        await API.get(
          "/admin/users",
          config
        );

      const doctorsRes =
        await API.get(
          "/admin/doctors",
          config
        );

      const appointmentsRes =
        await API.get(
          "/admin/appointments",
          config
        );

      setUsers(usersRes.data);
      setDoctors(doctorsRes.data);
      setAppointments(
        appointmentsRes.data
      );

    } catch (error) {

      console.log(error);

    }

  };

  const approveDoctor =
  async (id) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await API.put(

        `/admin/doctor/${id}/approve`,

        {},

        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }

      );

      loadData();

    } catch (error) {

      console.log(error);

    }

  };

  const rejectDoctor =
  async (id) => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await API.delete(

        `/admin/doctor/${id}/reject`,

        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }

      );

      loadData();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="container py-5">

      <h1
        className="
        fw-bold
        text-center
        mb-5"
      >
        Admin Dashboard
      </h1>

      <div className="row">

        <div className="col-md-4 mb-4">

          <div
            className="
            admin-card
            users-card"
          >

            <h5>
              Total Users
            </h5>

            <h1>
              {users.length}
            </h1>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div
            className="
            admin-card
            doctors-card"
          >

            <h5>
              Total Doctors
            </h5>

            <h1>
              {doctors.length}
            </h1>

          </div>

        </div>

        <div className="col-md-4 mb-4">

          <div
            className="
            admin-card
            appointments-card"
          >

            <h5>
              Total Appointments
            </h5>

            <h1>
              {appointments.length}
            </h1>

          </div>

        </div>

      </div>

      <div
        className="
        card
        border-0
        shadow-sm
        mt-4"
      >

        <div className="card-body">

          <h4 className="mb-4">
            Recent Appointments
          </h4>

          <table
            className="
            table
            table-hover"
          >

            <thead
              className="
              table-primary"
            >

              <tr>

                <th>#</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {appointments
                .slice(0, 5)
                .map(
                  (
                    appointment,
                    index
                  ) => (

                    <tr
                      key={
                        appointment._id
                      }
                    >

                      <td>
                        {index + 1}
                      </td>

                      <td>

                        <span
                          className="
                          badge
                          bg-success"
                        >
                          {
                            appointment.status ||
                            "Booked"
                          }
                        </span>

                      </td>

                    </tr>

                  )
                )}

            </tbody>

          </table>

        </div>

      </div>

      <div
        className="
        card
        border-0
        shadow-sm
        mt-4"
      >

        <div className="card-body">

          <h4 className="mb-4">
            Pending Doctor Requests
          </h4>

          <table
            className="
            table
            table-hover"
          >

            <thead
              className="
              table-warning"
            >

              <tr>

                <th>
                  Doctor
                </th>

                <th>
                  Specialization
                </th>

                <th>
                  Hospital
                </th>

                <th>
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {doctors
                .filter(
                  doctor =>
                  !doctor.approved
                )
                .map(
                  doctor => (

                    <tr
                      key={
                        doctor._id
                      }
                    >

                      <td>
                        {
                          doctor.doctorName
                        }
                      </td>

                      <td>
                        {
                          doctor.specialization
                        }
                      </td>

                      <td>
                        {
                          doctor.hospital
                        }
                      </td>

                      <td>

                        <button
                          className="
                          btn
                          btn-success
                          btn-sm
                          me-2"
                          onClick={() =>
                            approveDoctor(
                              doctor._id
                            )
                          }
                        >
                          Approve
                        </button>

                        <button
                          className="
                          btn
                          btn-danger
                          btn-sm"
                          onClick={() =>
                            rejectDoctor(
                              doctor._id
                            )
                          }
                        >
                          Reject
                        </button>

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

export default AdminDashboard;