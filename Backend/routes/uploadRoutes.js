const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  },
});

// File Filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "application/pdf",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only JPG, PNG and PDF files are allowed"
      ),
      false
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
});

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Upload Route Working",
  });
});

// Upload File
router.post(
  "/",
  upload.single("report"),
  (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded",
        });
      }

      res.status(200).json({
        success: true,
        message: "File Uploaded Successfully",
        fileName: req.file.filename,
        originalName: req.file.originalname,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

module.exports = router;