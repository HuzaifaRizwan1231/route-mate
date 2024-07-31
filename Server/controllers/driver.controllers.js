const db = require("../config/db");

const getDriver = async (req, res) => {
  try {
    db.query(
      "SELECT * FROM Driver WHERE driverId = ?",
      [req.driverId],
      (err, result) => {
        if (err) {
          return res.status(401).send({ success: false, error: err.message });
        }
        return res.status(200).send({
          success: true,
          driver: {
            name: result[0].name,
            email: result[0].email,
            password: result[0].password,
            phone: result[0].phone,
            image: result[0].image,
            cnic: result[0].CNIC,
            license: result[0].licenseNumber,
            rating: result[0].rating,
          },
        });
      }
    );
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

module.exports = { getDriver };
