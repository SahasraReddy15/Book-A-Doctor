import React, { useState } from "react";
import API from "../services/api";
import "./UploadReport.css";

function UploadReport() {

  const [file, setFile] =
    useState(null);

  const uploadFile = async () => {

    if (!file) {

      alert(
        "Please select a file"
      );

      return;

    }

    const formData =
      new FormData();

    formData.append(
      "report",
      file
    );

    try {

      await API.post(
        "/upload",
        formData
      );

      alert(
        "Report Uploaded Successfully"
      );

    } catch (error) {

      alert(
        "Upload Failed"
      );

    }

  };

  return (

    <div className="upload-page">

      <div className="upload-card">

        <div className="text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
            alt="upload"
            className="upload-image"
          />

          <h2 className="fw-bold mt-3">
            Upload Medical Report
          </h2>

          <p className="text-muted">
            Upload prescriptions,
            reports or scans
          </p>

        </div>

        <div className="mt-4">

          <input
            type="file"
            className="
            form-control
            mb-3"
            onChange={(e) =>
              setFile(
                e.target.files[0]
              )
            }
          />

          {file && (

            <div
              className="
              alert
              alert-info"
            >
              Selected:
              {" "}
              {file.name}
            </div>

          )}

          <button
            className="
            btn
            upload-btn
            w-100"
            onClick={
              uploadFile
            }
          >
            Upload Report
          </button>

        </div>

      </div>

    </div>

  );

}

export default UploadReport;