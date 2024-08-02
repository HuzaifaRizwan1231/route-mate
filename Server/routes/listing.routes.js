const { Router } = require("express");
const { authenticateDriver } = require("../middlewares/authenticateDriver");
const { createListing } = require("../controllers/listing.controllers");

const router = Router();

router.post("/create", authenticateDriver, createListing);

module.exports = router;
