import jwt from "jsonwebtoken";
import { promisify } from "util";

const JWT_SECRET = "hellomydata123456";

export const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized: Token not provided",
    });
  }

  try {
    const decoded = await promisify(jwt.verify)(token, JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: "Unauthorized: Invalid token",
    });
  }
};
