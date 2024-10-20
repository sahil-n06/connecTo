import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("Token from cookies:", token);  // Debug token

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized, no token provided" });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);  // Debug decoded result

    if (!decoded) {
      return res.status(403).json({ success: false, message: "Invalid token" });
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);  // More detailed error logging
    res.status(403).json({ success: false, message: error.message });
  }
};
