const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    doctorName: {
      type: String,
      required: true
    },

    specialization: {
      type: String,
      required: true
    },

    qualification: {
      type: String,
      required: true
    },

    experience: {
      type: Number,
      required: true
    },

    hospital: {
      type: String,
      required: true
    },

    consultationFee: {
      type: Number,
      required: true
    },

    approved: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports =
mongoose.model(
  "Doctor",
  doctorSchema
);