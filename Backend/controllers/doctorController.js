const Doctor =
require("../models/Doctor");

const getDoctors =
async (req, res) => {

  try {

    const doctors =
      await Doctor.find({
        approved: true
      });

    res.json(doctors);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

const getDoctorById =
async (req, res) => {

  try {

    const doctor =
      await Doctor.findById(
        req.params.id
      );

    res.json(doctor);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

const createDoctor =
async (req, res) => {

  try {

    const doctor =
      await Doctor.create({

        ...req.body,

        approved: false

      });

    res.status(201).json(
      doctor
    );

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

const updateDoctor =
async (req, res) => {

  try {

    const doctor =
      await Doctor.findByIdAndUpdate(

        req.params.id,

        req.body,

        {
          new: true
        }

      );

    res.json(doctor);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

const deleteDoctor =
async (req, res) => {

  try {

    await Doctor.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Doctor Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {
  getDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor
};