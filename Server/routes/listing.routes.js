const { Router } = require("express");
const { authenticateDriver } = require("../middlewares/authenticateDriver");
const {
  createListing,
  getListings,
  getListingById,
} = require("../controllers/listing.controllers");
const {
  authenticatePassenger,
} = require("../middlewares/authenticatePassenger");

const router = Router();

router.post("/create", authenticateDriver, createListing);
router.get("/get", authenticatePassenger, getListings);
router.post("/getById", authenticatePassenger, getListingById);

module.exports = router;
