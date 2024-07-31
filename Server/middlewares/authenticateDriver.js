const jwt = require("jsonwebtoken");
const db = require("../config/db");

const authenticateDriver = async (req, res, next) => {
  try {
    const token = await req.cookies.driver_token;
    if (token === undefined) {
      return res
        .status(401)
        .send({ success: false, message: "Token Undefined" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const driverEmail = decode.email;
    const query = `SELECT * FROM Driver WHERE email = ?`;
    db.query(query, [driverEmail], (err, result) => {
      if (err) {
        return res.status(401).send({ success: false, error: err.message });
      }
      if (result.length === 0) {
        return res
          .status(401)
          .send({ success: false, message: "Please Login to Continue" });
      }
      req.driverId = result[0].driverId;
      next();
    });
  } catch (error) {
    return res.status(401).send({ success: false, error: error.message });
  }
};

module.exports = { authenticateDriver };
