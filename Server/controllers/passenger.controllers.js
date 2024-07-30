const db = require("../config/db");

const getPassenger = async (req, res) => {
  try {
    db.query(
      "SELECT * FROM Passenger WHERE passengerId = ?",
      [req.passengerId],
      (err, result) => {
        if (err) {
          return res.status(401).send({ success: false, error: err.message });
        }
        return res.status(200).send({
          success: true,
          passenger: {
            name: result[0].name,
            email: result[0].email,
            password: result[0].password,
            phone: result[0].phone,
            image: result[0].image,
            cnic: result[0].CNIC,
          },
        });
      }
    );
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

module.exports = { getPassenger };
