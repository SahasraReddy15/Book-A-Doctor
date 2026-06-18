const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const adminMiddleware =
  require("../middleware/adminMiddleware");

const User =
  require("../models/User");

const Doctor =
  require("../models/Doctor");

const Appointment =
  require("../models/Appointment");


// Get All Users
router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {

    try {

      const users =
        await User.find();

      res.json(users);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }
);


// Get All Doctors
router.get(
  "/doctors",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {

    try {

      const doctors =
        await Doctor.find();

      res.json(doctors);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }
);


// Get All Appointments
router.get(
  "/appointments",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {

    try {

      const appointments =
        await Appointment.find()
          .populate(
            "patientId",
            "name email"
          )
          .populate(
            "doctorId",
            "doctorName"
          );

      res.json(
        appointments
      );

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }
);


// Approve Appointment
router.put(
  "/appointments/:id/approve",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {

    try {

      const appointment =
        await Appointment.findByIdAndUpdate(
          req.params.id,
          {
            status: "Approved"
          },
          {
            new: true
          }
        );

      res.json({
        message:
          "Appointment Approved",
        appointment
      });

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }
);


// Reject Appointment
router.put(
  "/appointments/:id/reject",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {

    try {

      const appointment =
        await Appointment.findByIdAndUpdate(
          req.params.id,
          {
            status: "Rejected"
          },
          {
            new: true
          }
        );

      res.json({
        message:
          "Appointment Rejected",
        appointment
      });

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }
);


// Complete Appointment
router.put(
  "/appointments/:id/complete",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {

    try {

      const appointment =
        await Appointment.findByIdAndUpdate(
          req.params.id,
          {
            status: "Completed"
          },
          {
            new: true
          }
        );

      res.json({
        message:
          "Appointment Completed",
        appointment
      });

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }
);
router.put(
  "/doctor/:id/approve",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {

    try {

      const doctor =
        await Doctor.findByIdAndUpdate(
          req.params.id,
          {
            approved: true
          },
          {
            new: true
          }
        );

      res.json({
        message:
          "Doctor Approved",
        doctor
      });

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }
);
router.delete(
  "/doctor/:id/reject",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {

    try {

      await Doctor.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "Doctor Rejected"
      });

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  }
);
module.exports = router;