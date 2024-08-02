const { Router } = require("express");
const { authenticateDriver } = require("../middlewares/authenticateDriver");
const {
  createListing,
  getListings,
} = require("../controllers/listing.controllers");
const {
  authenticatePassenger,
} = require("../middlewares/authenticatePassenger");

const router = Router();

router.post("/create", authenticateDriver, createListing);
router.get("/get", authenticatePassenger, getListings);

module.exports = router;
