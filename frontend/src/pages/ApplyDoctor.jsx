import React, {
  useState
} from "react";

import API from "../services/api";

function ApplyDoctor() {

  const [form, setForm] =
    useState({

      doctorName: "",

      specialization: "",

      qualification: "",

      experience: "",

      hospital: "",

      consultationFee: ""

    });

  const submitHandler =
  async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      await API.post(

        "/doctors",

        form,

        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }

      );

      alert(
        "Application Submitted Successfully. Waiting For Admin Approval."
      );

      window.location.href =
        "/";

    } catch (error) {

      console.log(error);

      alert(

        error.response?.data?.message ||

        "Application Failed"

      );

    }

  };

  return (

    <div className="container py-5">

      <div
        className="
        card
        shadow
        border-0
        p-4"
      >

        <h2
          className="
          text-center
          mb-4"
        >
          Apply As Doctor
        </h2>

        <form
          onSubmit={
            submitHandler
          }
        >

          <input
            type="text"
            placeholder="Doctor Name"
            className="
            form-control
            mb-3"
            required
            onChange={(e)=>
              setForm({
                ...form,
                doctorName:
                e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Specialization"
            className="
            form-control
            mb-3"
            required
            onChange={(e)=>
              setForm({
                ...form,
                specialization:
                e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Qualification"
            className="
            form-control
            mb-3"
            required
            onChange={(e)=>
              setForm({
                ...form,
                qualification:
                e.target.value
              })
            }
          />

          <input
            type="number"
            placeholder="Experience"
            className="
            form-control
            mb-3"
            required
            onChange={(e)=>
              setForm({
                ...form,
                experience:
                e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Hospital"
            className="
            form-control
            mb-3"
            required
            onChange={(e)=>
              setForm({
                ...form,
                hospital:
                e.target.value
              })
            }
          />

          <input
            type="number"
            placeholder="Consultation Fee"
            className="
            form-control
            mb-4"
            required
            onChange={(e)=>
              setForm({
                ...form,
                consultationFee:
                e.target.value
              })
            }
          />

          <button
            type="submit"
            className="
            btn
            btn-primary
            w-100"
          >
            Submit Application
          </button>

        </form>

      </div>

    </div>

  );

}

export default ApplyDoctor;