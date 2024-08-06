const { Router } = require("express");
const { authenticateDriver } = require("../middlewares/authenticateDriver");
const {
  createListing,
  getListings,
  getListingById,
  getDriverListings,
  bookListing,
} = require("../controllers/listing.controllers");
const {
  authenticatePassenger,
} = require("../middlewares/authenticatePassenger");

const router = Router();

router.post("/create", authenticateDriver, createListing);
router.get("/get", authenticatePassenger, getListings);
router.post("/getById", authenticatePassenger, getListingById);
router.get("/getDriverListings", authenticateDriver, getDriverListings);
router.post("/book", authenticatePassenger, bookListing);

module.exports = router;
