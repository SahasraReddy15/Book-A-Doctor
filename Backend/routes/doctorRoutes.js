const express = require("express");

const router = express.Router();

const doctorController =
require(
  "../controllers/doctorController"
);

const authMiddleware =
require(
  "../middleware/authMiddleware"
);


// Get All Doctors
router.get(
  "/",
  doctorController.getDoctors
);


// Get Doctor By Id
router.get(
  "/:id",
  doctorController.getDoctorById
);


// Apply Doctor
router.post(
  "/",
  authMiddleware,
  doctorController.createDoctor
);


// Update Doctor
router.put(
  "/:id",
  authMiddleware,
  doctorController.updateDoctor
);


// Delete Doctor
router.delete(
  "/:id",
  authMiddleware,
  doctorController.deleteDoctor
);

module.exports = router;