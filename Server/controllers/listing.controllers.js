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

    const { startLocationName, endLocationName } = req.body;

    db.query(
      "INSERT INTO Listing(startLocation, endLocation, price, driverId, startLocationName, endLocationName) VALUES (?,?,?,?,?,?)",
      [
        JSON.stringify(startCoordinates),
        JSON.stringify(endCoordinates),
        price,
        req.driverId,
        startLocationName,
        endLocationName,
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

const getListings = async (req, res) => {
  try {
    db.query(
      "SELECT Listing.*, Driver.driverId, Driver.name AS driverName, Driver.email, Driver.password, Driver.CNIC, Driver.licenseNumber, rating, phone, Vehicle.name AS vehicleName, registrationNumber, color, type FROM Listing JOIN Driver ON Listing.driverId = Driver.driverId JOIN Vehicle ON Vehicle.listingId = Listing.listingId",
      (err, result) => {
        if (err) {
          return res.status(400).send({ success: false, error: err.message });
        }
        return res.status(200).send({
          success: true,
          listing: result,
        });
      }
    );
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

const getListingById = async (req, res) => {
  try {
    const { listingId } = req.body;
    db.query(
      "SELECT Listing.*, Driver.driverId, Driver.name AS driverName, Driver.email, Driver.password, Driver.CNIC, Driver.licenseNumber, rating, phone, Vehicle.name AS vehicleName, registrationNumber, color, type FROM Listing JOIN Driver ON Listing.driverId = Driver.driverId JOIN Vehicle ON Vehicle.listingId = Listing.listingId WHERE Listing.listingId = ?",
      [listingId],
      (err, result) => {
        if (err) {
          return res.status(400).send({ success: false, error: err.message });
        }
        return res.status(200).send({
          success: true,
          listing: result,
        });
      }
    );
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

const getDriverListings = async (req, res) => {
  try {
    db.query(
      "SELECT Listing.*, Driver.driverId, Driver.name AS driverName, Driver.email, Driver.password, Driver.CNIC, Driver.licenseNumber, rating, phone, Vehicle.name AS vehicleName, registrationNumber, color, type FROM Listing JOIN Driver ON Listing.driverId = Driver.driverId JOIN Vehicle ON Vehicle.listingId = Listing.listingId WHERE Listing.driverId = ?",
      [req.driverId],
      (err, result) => {
        if (err) {
          return res.status(400).send({ success: false, error: err.message });
        }
        return res.status(200).send({
          success: true,
          listing: result,
        });
      }
    );
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

const bookListing = (req, res) => {
  try {
    const { listingId } = req.body;
    db.query(
      "INSERT INTO PassengerListings (listingId, passengerId) VALUES(?,?)",
      [listingId, req.passengerId],
      (err, result) => {
        if (err) {
          return res.status(400).send({ success: false, error: err.message });
        }

        db.query(
          "UPDATE Listing SET status = 'active' WHERE listingId = ?",
          [listingId],
          (err, result) => {
            if (err) {
              return res
                .status(400)
                .send({ success: false, error: err.message });
            }

            return res.status(200).send({
              success: true,
              message: "Listing Booked Successfully",
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};

const getPassengerListings = (req, res) => {
  try {
    db.query(
      "SELECT Listing.*, Driver.driverId, Driver.name AS driverName, Driver.email, Driver.password, Driver.CNIC, Driver.licenseNumber, rating, phone, Vehicle.name AS vehicleName, registrationNumber, color, type FROM Listing JOIN Driver ON Listing.driverId = Driver.driverId JOIN Vehicle ON Vehicle.listingId = Listing.listingId JOIN PassengerListings ON PassengerListings.listingId = Listing.listingId WHERE PassengerListings.passengerId = ?",
      [req.passengerId],
      (err, result) => {
        if (err) {
          return res.status(400).send({ success: false, error: err.message });
        }
        return res.status(200).send({
          success: true,
          listing: result,
        });
      }
    );
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
};
module.exports = {
  createListing,
  getListings,
  getListingById,
  getDriverListings,
  bookListing,
  getPassengerListings,
};
