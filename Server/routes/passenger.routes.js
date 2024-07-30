const { Router } = require("express");
const { getPassenger } = require("../controllers/passenger.controllers");
const {
  authenticatePassenger,
} = require("../middlewares/authenticatePassenger");

const router = Router();

router.get("/get", authenticatePassenger, getPassenger);

module.exports = router;
