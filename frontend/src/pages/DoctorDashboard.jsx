import React, {
  useEffect,
  useState
} from "react";

import API from "../services/api";

function DoctorDashboard() {

  const [
    appointments,
    setAppointments
  ] = useState([]);

  useEffect(() => {

    loadAppointments();

  }, []);

  const loadAppointments =
  async () => {

    try {

      const res =
      await API.get(
        "/appointments"
      );

      setAppointments(
        res.data
      );

    } catch (error) {

      console.log(error);

    }

  };

  const updateStatus =
  async (
    id,
    status
  ) => {

    try {

      await API.put(
        `/appointments/${id}`,
        {
          status
        }
      );

      loadAppointments();

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
        Doctor Dashboard
      </h1>

      <div
        className="
        card
        shadow
        border-0"
      >

        <div
          className="
          card-body"
        >

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

                <th>
                  Date
                </th>

                <th>
                  Time
                </th>

                <th>
                  Status
                </th>

                <th>
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {appointments.map(
                (item) => (

                <tr
                  key={
                    item._id
                  }
                >

                  <td>
                    {item.date}
                  </td>

                  <td>
                    {item.time}
                  </td>

                  <td>

                    {item.status ===
                    "Pending" &&
                    "🟡 Pending"}

                    {item.status ===
                    "Approved" &&
                    "🟢 Approved"}

                    {item.status ===
                    "Rejected" &&
                    "🔴 Rejected"}

                    {item.status ===
                    "Completed" &&
                    "✅ Completed"}

                  </td>

                  <td>

                    <button
                      className="
                      btn
                      btn-success
                      btn-sm
                      me-2"
                      onClick={() =>
                        updateStatus(
                          item._id,
                          "Approved"
                        )
                      }
                    >
                      Approve
                    </button>

                    <button
                      className="
                      btn
                      btn-danger
                      btn-sm
                      me-2"
                      onClick={() =>
                        updateStatus(
                          item._id,
                          "Rejected"
                        )
                      }
                    >
                      Reject
                    </button>

                    <button
                      className="
                      btn
                      btn-primary
                      btn-sm"
                      onClick={() =>
                        updateStatus(
                          item._id,
                          "Completed"
                        )
                      }
                    >
                      Complete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default DoctorDashboard;