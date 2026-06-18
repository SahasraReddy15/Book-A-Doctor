const User = require("../models/User");
const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointment");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.json(doctors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAppointments = async (req, res) => {
  try {
    const appointments =
      await Appointment.find()
        .populate("patientId")
        .populate("doctorId");

    res.json(appointments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const approveDoctor = async (req, res) => {
  try {
    const doctor =
      await Doctor.findByIdAndUpdate(
        req.params.id,
        {
          approved: true,
        },
        {
          new: true,
        }
      );

    res.json(doctor);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getUsers,
  getDoctors,
  getAppointments,
  approveDoctor,
};