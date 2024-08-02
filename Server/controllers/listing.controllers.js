const db = require("../config/db");

const createListing = async (req, res) => {
  try {
    const {
      vehicleName,
      vehicleType,
      registrationNumber,
      color,
      startCoordinates,
      endCoordinates,
      price,
      contact,
    } = req.body.listing;

    console.log(JSON.stringify(startCoordinates));
    db.query(
      "INSERT INTO Listing(startLocation, endLocation, price, driverId) VALUES (?,?,?,?)",
      [
        JSON.stringify(startCoordinates),
        JSON.stringify(endCoordinates),
        price,
        req.driverId,
      ],
      (err, result) => {
        if (err) {
          return res.status(400).send({ success: false, error: err.message });
        }

        db.query(
          "INSERT INTO Vehicle(name, registrationNumber, color, type, listingId) VALUES(?,?,?,?,?)",
          [
            vehicleName,
            registrationNumber,
            color,
            vehicleType,
            result.insertId,
          ],
          (err, result) => {
            if (err) {
              return res
                .status(400)
                .send({ success: false, error: err.message });
            }

            return res.status(201).send({
              success: true,
              message: "Created Listing",
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

module.exports = { createListing };
