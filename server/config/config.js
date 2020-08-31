const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if(!token){
    return res.status(401).json({
      message: "unauthorized credentials",
    });
  }
  try {
    const decoded = jwt.verify(token, "exploradora");
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid token"
    })
  }
}