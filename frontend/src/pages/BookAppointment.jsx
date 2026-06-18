import React, { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import "./BookApmt.css";

function BookAppointment() {

  const { doctorId } =
    useParams();

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const [patientName] =
    useState(
      user?.name || ""
    );

  const [date, setDate] =
    useState("");

  const [time, setTime] =
    useState("");

  const [symptoms, setSymptoms] =
    useState("");

  const handleBooking =
  async () => {

    if (
      !date ||
      !time
    ) {

      alert(
        "Please fill all fields"
      );

      return;

    }

    try {

      await API.post(
        "/appointments",
        {

          patientId:
            user._id,

          doctorId,

          patientName,

          date,

          time,

          symptoms

        }
      );

      alert(
        "Appointment Booked Successfully"
      );

      window.location.href =
        "/patient-dashboard";

    } catch (error) {

      console.log(error);

      alert(
        "Booking Failed"
      );

    }

  };

  return (

    <div className="container py-5">

      <div
        className="
        booking-card
        mx-auto"
      >

        <div
          className="
          text-center
          mb-4"
        >

          <h1 className="fw-bold">
            Book Appointment
          </h1>

          <p className="text-muted">
            Schedule your visit
            with a doctor
          </p>

        </div>

        <div className="mb-3">

          <label
            className="
            form-label"
          >
            Patient Name
          </label>

          <input
            type="text"
            className="
            form-control"
            value={patientName}
            readOnly
          />

        </div>

        <div className="mb-3">

          <label
            className="
            form-label"
          >
            Appointment Date
          </label>

          <input
            type="date"
            className="
            form-control"
            value={date}
            onChange={(e) =>
              setDate(
                e.target.value
              )
            }
          />

        </div>

        <div className="mb-3">

          <label
            className="
            form-label"
          >
            Appointment Time
          </label>

          <input
            type="time"
            className="
            form-control"
            value={time}
            onChange={(e) =>
              setTime(
                e.target.value
              )
            }
          />

        </div>

        <div className="mb-4">

          <label
            className="
            form-label"
          >
            Symptoms / Reason
          </label>

          <textarea
            rows="4"
            className="
            form-control"
            placeholder="Describe your symptoms"
            value={symptoms}
            onChange={(e) =>
              setSymptoms(
                e.target.value
              )
            }
          />

        </div>

        <button
          className="
          btn
          booking-btn
          w-100"
          onClick={
            handleBooking
          }
        >
          Confirm Appointment
        </button>

      </div>

    </div>

  );

}

export default BookAppointment;