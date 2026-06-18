const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    let token;

    // Check Authorization Header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // No Token
    if (!token) {
      return res.status(401).json({
        message: "Access Denied. No Token Provided",
      });
    }

    // Verify Token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Save User Info
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = authMiddleware;