import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./pages/Doctors";
import BookAppointment from "./pages/BookAppointment";
import PatientDashboard from "./pages/PatientDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./components/Footer";
import DoctorDashboard from "./pages/DoctorDashboard";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import UploadReport from "./pages/UploadReport";
import ApplyDoctor from "./pages/ApplyDoctor";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/doctors"
          element={<Doctors />}
        />

        <Route
          path="/book/:doctorId"
          element={<BookAppointment />}
        />

        <Route
          path="/patient-dashboard"
          element={<PatientDashboard />}
        />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        <Route
           path="/doctor-dashboard"
           element={<DoctorDashboard />}
/>
       <Route
  path="/notifications"
  element={<Notifications />}
/>
<Route
  path="/profile"
  element={<Profile />}
/>
<Route
  path="/upload-report"
  element={<UploadReport />}
/>
<Route
  path="/apply-doctor"
  element={<ApplyDoctor />}
/>
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;