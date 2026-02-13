const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const bearer = req.headers.authorization;

  if (!bearer) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const token = bearer.replace("Bearer ", "");
    const secret = process.env.JWT_SECRET || "default-secret-key";

    const decoded = jwt.verify(token, secret);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
