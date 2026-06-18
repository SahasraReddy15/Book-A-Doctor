import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Doctors.css";

function Doctors() {

  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {

    try {

      const res =
        await API.get("/doctors");

      setDoctors(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="container py-5">

      <h1
        className="
        text-center
        fw-bold
        mb-5"
      >
        Find Your Doctor
      </h1>

      <div className="row">

        {doctors.length === 0 ? (

          <h4 className="text-center">
            No Doctors Found
          </h4>

        ) : (

          doctors.map((doctor) => (

            <div
              className="
              col-md-4
              mb-4"
              key={doctor._id}
            >

              <div
                className="
                card
                doctor-card
                h-100
                border-0"
              >

                <div className="card-body">

                  <div className="text-center mb-3">

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                      alt="Doctor"
                      className="doctor-image"
                    />

                  </div>

                  <h4
                    className="
                    text-center
                    fw-bold"
                  >
                    {doctor.doctorName}
                  </h4>

                  <div
                    className="
                    text-center
                    mb-3"
                  >

                    <span
                      className="
                      badge
                      bg-info
                      fs-6"
                    >
                      {doctor.specialization}
                    </span>

                  </div>

                  <hr />

                  <p>
                    🎓 <strong>Qualification:</strong>
                    {" "}
                    {doctor.qualification}
                  </p>

                  <p>
                    💼 <strong>Experience:</strong>
                    {" "}
                    {doctor.experience}
                    {" "}
                    Years
                  </p>

                  <p>
                    🏥 <strong>Hospital:</strong>
                    {" "}
                    {doctor.hospital}
                  </p>

                  <p>
                    💰 <strong>Fee:</strong>
                    {" "}
                    ₹{doctor.consultationFee}
                  </p>

                  <button
                    className="
                    btn
                    book-btn
                    w-100"
                    onClick={() =>
                      navigate(
                        `/book/${doctor._id}`
                      )
                    }
                  >
                    Book Appointment
                  </button>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default Doctors;